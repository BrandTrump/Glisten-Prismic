This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

## Learnings

- min-h-11 for accessibility on mobile, enough hight for finger press.
- Use "Key Text" as a field for returning simple string.
- <PrismicText field={slice.primary.heading} /> returns a string of text.
- text-balance for extra typography flourish (only works on chrome).
- asText() helper to convert rich text to a string.
- grid-rows-subgrid maintains content alignment.

```
            <div
                key={caseStudy.id}
                className="relative grid gap-4 opacity-85 transition-opacity duration-300 hover:cursor-pointer hover:opacity-100 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
              >
                <h3 className="text-4xl">
                  <PrismicText field={caseStudy.data.company} />
                </h3>
                <PrismicRichText field={caseStudy.data.description} />

                <PrismicNextLink
                  document={caseStudy}
                  className="after:absolute after:inset-0 hover:underline"
                ></PrismicNextLink>
              </div>

```

- Setting position relative on the parent div then setting after:aboslute after:inset-0 on the link creates better accessibility for screen readers.
