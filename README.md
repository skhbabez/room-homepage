# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Build tool
- [Storybook](https://storybook.js.org/) - Component development
- [Popover API](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) - Native popover functionality

### What I learned

### Carousel

I tried to build the slider with as little JavaScript as possible. I also did not want to use state so I can use CSS scroll smoothing to create a nice transition without relying on animations. I turned a flex container into a scroll container and set the carousel items to flex: 0 0 100%.
JavaScript was used to scroll it.

```ts
const carouselRef = useRef<HTMLUListElement>(null);

const leftClickHandler = () => {
  if (carouselRef.current) {
    const element = carouselRef.current;
    const width = element.clientWidth;
    element.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  }
};
```

The downside of this approach is that we can't control the button state to disable them. In another attempt I also tried to make it infinitely scrolling by skipping to the other side using instant scrolling behaviour, using clones of the carousel items on either side. But this caused janky transitions when the user scrolled too quickly.

```ts
const leftClickHandler = () => {
  if (carouselRef.curren) {
    const element = carouselRef.current;
    const fullWidth = element.scrollWidth;
    const width = fullWidth / content.length;
    if (element.scrollLeft < 2 * width) {
      element.scrollBy({
        left: fullWidth,
        behavior: "instant",
      });
    }
    element.scrollBy({
      left: -width,
      behavior: "smooth",
    });
  }
};
```

Modern CSS also offers ::scroll-button as a pseudo-class to create CSS-only carousels. It's not supported by Firefox yet, making it necessary to check for compatibility first. Firefox users still get the JavaScript solution, but Chrome and Edge users get the pure CSS solution.

```css
.carousel-controls::scroll-button(left) {
  content: "";
  @apply bg-[url("src/assets/icon-angle-left.svg")];
}

.carousel-controls::scroll-button(right) {
  content: "";
  @apply bg-[url("src/assets/icon-angle-right.svg")];
}
```

### Navigation

I wanted to try out a CSS only solution, since the popover API is now newly available. I used the typical style you find in component libraries like shadcn to make it modular. Using the popover API, it was surprisingly trivial to create a fully responsive and animated menu. The transitions were especially challenging and it took some trial and error to get them right.

```tsx
<div
        className="w-full fixed bg-white py-11.75 px-[1.51375rem] md:px-[3.96875rem]
        xl:hidden

        -translate-y-full
        [:popover-open]:translate-y-0
        starting:[:popover-open]:-translate-y-full
        transition-discrete
        transition-[translate,display,overlay]
        duration-800

        backdrop:bg-black/0
        [:popover-open]:backdrop:bg-black/50
        starting:[:popover-open]:backdrop:bg-black/0
        backdrop:transition-[background-color,display,overlay]
        backdrop:duration-800
        backdrop:transition-discrete
        "
        id="navigation"
        popover="auto"
      >
```

### Continued development

### Useful resources

[CSS only Carousels](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Overflow/Carousels) - This helped me create the css only carousel for non- firefox users
[Animating popovers](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using#animating_popovers) - I used this as a reference to create the transitions for my popovers
