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

### Continued development

### Useful resources
