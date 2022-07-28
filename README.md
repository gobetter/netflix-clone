# NETFLIX with Next.js

## References

- Video
  - [Day 1 | Homepage UI, REST API, Next.js, TypeScript, Tailwind](https://www.youtube.com/watch?v=cwqNAkwhKqw)
  - [Day 2 | Authentication with Firebase v9, Next.js, Typescript, Tailwind](https://www.youtube.com/watch?v=BbTyUo99Qvs&t=6s)
  - [Day 3 | Subscriptions with STRIPE, Next.js, Typescript, Tailwind](https://www.youtube.com/watch?v=rhvoRP63QVI)
- [Code](https://github.com/lukef7fywmrp/netflix-redesign)

## Starting project

```sh
$yarn create next-app --example with-tailwindcss netflix-clone
```

## Install icons

```sh
$yarn add react-icons
$yarn add @heroicons/react
```

## Tailwind text shadow plugin

```sh
$yarn add tailwindcss-textshadow --dev

```

Add the plugin to the plugins array in your Tailwind configuration file (tailwind.config.js).

```js
plugins: [require('tailwindcss-textshadow')];
```

## Hide Tailwind scrollbar

```sh
$yarn add -D tailwind-scrollbar
$yarn add tailwind-scrollbar-hide
```

Then add the plugin to your tailwind.config.js file:

```js
plugins: [
  require('tailwind-scrollbar')
  require('tailwind-scrollbar-hide')
];
```
