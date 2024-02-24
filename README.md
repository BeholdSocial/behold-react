![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

# The Official Behold Widget for React

<div align="center">
  <a href="https://behold.so/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/BeholdSocial/behold-react/main/readme-images/thumbnail-dark.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/BeholdSocial/behold-react/main/readme-images/thumbnail-light.png">
      <img src="https://raw.githubusercontent.com/BeholdSocial/behold-react/main/readme-images/thumbnail-light.png" alt="Behold" 
      width="100%"
      height="auto">
    </picture>
  </a>
</div>

## About

This package contains a React version of the [Behold embedded widget](https://behold.so/docs/widget/). It is a lightweight convenience wrapper around the core Behold widget web component, and allows easy integration into your React projects.

## Installation

Start by installing with your package manager of choice:

```jsx
npm install @behold/react

// or
pnpm add @behold/react

// or
yarn add @behold/react
```

## Usage

### 1. Import the component

```js
import BeholdWidget from "@behold/react"
```

### 2. Add to your app

Use it like you would any other React component:

```html
<BeholdWidget feedId="YOUR_FEED_ID" />
```

The Behold widget component accepts a single property: `feedId`, which can be found by opening your feed in the [Behold dashboard](https://app.behold.so) and clicking on "Embed Code".

All configuration and customization is handled in the Behold admin. When you make changes there it will automatically update your widget, no code modifications required. Because of browser caching, changes can take a minute or two to show up. Clearing your cache and incognito/private windows will help.

![Behold feed settings page](./readme-images/find-your-feed-id-1.png)
![Behold feed embed code page](./readme-images/find-your-feed-id-2.png)

## Load event

This component emits a load event after its initial render. It can be used as follows:

```js
<BeholdWidget on:load={() => console.log("Loaded!")} feedId="YOUR_FEED_ID" />
```

## A note about SSR

Because these widgets are inherantly dynamic in nature, they are client-side only, and won't be pre-rendered by SSR or SSG. That means there will be a moment before they render that their height will be 0px. You can prevent layout shifts this may cause by applying dimensions to a container element with CSS.
