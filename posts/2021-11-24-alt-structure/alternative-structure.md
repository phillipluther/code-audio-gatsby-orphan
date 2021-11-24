---
title: 'Exploring Organization, Plus Frontmatter Images'
date: '2021-11-24'
description: "Content isn't important in this one; what is the slug, though?"
---

This is mostly just a copy/paste from the Pre-rendering post; wanted to explore grouping the assets a bit differently and play with Frontmatter slugs + images.

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.
