# The Official Behold Widget for React

[![Behold](https://img.shields.io/badge/Behold-ccf5a3.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDM0IDI0Ij48cGF0aCBkPSJNMzMuNywxMC43QzMwLjcsNC40LDI0LjQsMCwxNywwLDkuNiwwLDMuMiw0LjQuMywxMC44Yy0uNC44LS40LDEuNywwLDIuNSwzLDYuMyw5LjQsMTAuNywxNi44LDEwLjcsNy40LDAsMTMuOC00LjQsMTYuNy0xMC44LjQtLjguNC0xLjcsMC0yLjVoMFpNMjMuNiwxMi41bC00LDIuMi0yLjIsNGMtLjIuNC0uNy40LS45LDBsLTIuMi00LTQtMi4yYy0uNC0uMi0uNC0uNywwLTFsNC0yLjIsMi4yLTRjLjItLjQuNy0uNC45LDBsMi4yLDQsNCwyLjJjLjQuMi40LjcsMCwxWiIgZmlsbD0iIzE5MTkxOSIvPjwvc3ZnPg==)](https://behold.so)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

This package contains a React version of the [Behold embedded widget](https://behold.so/docs/widget/). It's a lightweight wrapper around the core Behold widget web component, that allows for easy integration into your React projects.

## Installation

Start by installing with your package manager of choice:

```js
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

```jsx
<BeholdWidget onLoad={() => console.log("Loaded!")} feedId="YOUR_FEED_ID" />
```

## A note about SSR

This component relies on client-only APIs and won't be pre-rendered by SSR or SSG. That means there will be a brief moment before it renders where its height will be 0px. You can prevent layout shifts this may cause by applying dimensions to a container element with CSS.

## Other framework components

[![Preact](https://img.shields.io/badge/preact-%2320232a.svg?style=for-the-badge&logo=preact&logoColor=%23ae80ff)](https://www.npmjs.com/package/@behold/preact)
[![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)](https://www.npmjs.com/package/@behold/svelte)
[![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)](https://www.npmjs.com/package/@behold/vue)
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://www.npmjs.com/package/@behold/angular)
[![SolidJS](https://img.shields.io/badge/SolidJS-2c4f7c?style=for-the-badge&logo=solid&logoColor=c8c9cb)](https://www.npmjs.com/package/@behold/solid)
