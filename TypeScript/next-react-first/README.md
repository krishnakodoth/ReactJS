This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Debugging on Windows
#### [See this in the official Next.js docs](https://nextjs.org/docs/pages/building-your-application/configuring/debugging#debugging-on-windows)
#### Windows users may run into an issue when using NODE_OPTIONS='--inspect' as that syntax is not supported on Windows platforms. To get around this, install the cross-env package as a development dependency (-D with npm and yarn) and replace the dev script with the following.


### `npm install --save-dev cross-env`

## Warning: Extra attributes from the server: data-new-gr-c-s-check-loaded,data-gr-ext-installed,cz-shortcut-listen,data-lt-installed

#### You can suppress hydration warnings by setting suppressHydrationWarning to true in the opening <body> tag of the RootLayout:
#### suppressHydrationWarning={true}

#

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Open About page [http://localhost:3000/about](http://localhost:3000/about) with your browser to see the result.
Open Todo Page [http://localhost:3000/todos](http://localhost:3000/todos) with your browser to see the result.

##

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
