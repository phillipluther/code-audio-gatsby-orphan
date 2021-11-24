import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

function getSlugFromFilePath(filePath) {
  const chunks = filePath.split(/(\\|\/)/);
  const slug = chunks.pop().replace(/\.md$/, '');

  return slug;
}

export type PostMetadataProps = {
  date: string,
  title: string,
  slug?: string,
  description?: string,
  image?: string,
  tags?: string,
};

export function getSortedPostsData() {
  const allPostsData = getPostPaths().map(({ params }) => {
    const { filePath } = params;
    const slug = getSlugFromFilePath(filePath);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as PostMetadataProps),
    };
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

// Returns an array that looks like this for getStaticPath hooks:
// [
//   {
//     params: {
//       slug: 'ssg-ssr',
//       filePath: '/absolute/path/to/markdown/file.md'
//     }
//   },
//   {
//     params: {
//       slug: 'pre-rendering',
//       filePath: '/absolute/path/to/markdown/file2.md'
//     }
//   }
// ]
export function getPostPaths(dir = POSTS_DIRECTORY) {
  const fileNames = fs.readdirSync(dir);
  const postPaths = fileNames.reduce((paramsArray, fileName) => {
    const filePath = path.join(dir, fileName);

    if (/\.md$/.test(fileName)) {
      paramsArray.push({
        params: {
          slug: getSlugFromFilePath(fileName),
          filePath,
        },
      });
    } else if (fs.lstatSync(filePath).isDirectory()) {
      paramsArray = paramsArray.concat(getPostPaths(filePath));
    }

    return paramsArray;
  }, []);

  return postPaths;
}

export async function getPostData(slug: string) {
  const postPaths = getPostPaths();
  const match = postPaths.find(({ params }) => params.slug === slug);
  const fileContents = fs.readFileSync(match.params.filePath, 'utf8');
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

    const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as PostMetadataProps),
  };
}

