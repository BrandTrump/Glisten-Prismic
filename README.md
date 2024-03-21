## Learnings

- `min-h-11` for accessibility on mobile, enough height for finger press.
- Use "Key Text" as a field for returning simple string.
- `<PrismicText field={slice.primary.heading} />` returns a string of text.
- `text-balance` for extra typography flourish (only works on chrome).
- `asText()` helper to convert rich text to a string.
- `grid-rows-subgrid` maintains content alignment.

```jsx
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
  />
</div>
```

- Setting position relative on the parent div then setting `after:aboslute after:inset-0` on the link creates better accessibility for screen readers.
- Typography component for tailwind:
- Use `<React.Fragment></React.Fragment>` inside of an iterator instead of `<></>` to set the `key={}`
- `gsap.fromTo()` triggers all animations at the same time. Whereas `tl.fromTo()` triggers each animation one by one.
- GSAP scrollTrigger ```toggleActions: 'play pause resume reverse``` https://gsap.com/docs/v3/Plugins/ScrollTrigger/ 