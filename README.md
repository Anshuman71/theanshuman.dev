## Overview

This repo holds the codebase for my [website and blog](https://theanshuman.dev).
This project is made using `Next.js` and `TailwindCSS`.

## Articles

This project uses the DEV API to get the articles written by Anshuman Bhardwaj and render their markdown as HTML at the
build time, using `remark`.

## Deployment

This project is deployed on `Vercel` free tier. The SSG build happens every day using GitHub Action's Cron Job.

## Setup locally

To set up this project locally.

- Clone the project
- Run `yarn` to install dependencies
- Update `.env.development` with your DEV username
- Run `yarn dev` to run the project
