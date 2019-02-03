# Key features

- Lightweight - 1kb minzipped and can be smaller when using bundlers
- Reliable animations
- Typescript definitions

## Why another carousel library?

### Utilize CSS Snap Points

CSS Snap Points makes creating carousels simpler and is much more reliable. This library itself does not do much except for add some commonly used carousel features on top of CSS Snap Points.

### Let the browser handle animations if possible

Every carousel library I've come across implements their own easing and panning, which is hard to get working well. Its very easy to get it in a state where the animations start to break.

All of the major browser implementations of CSS Snap Points do a much better job IMO.

### Modular and bundler friendly

Anything that isn't core carousel functionality is implemented as a "plugin" so if you're using a module bundler and you're not using all the plugins, you'll get a smaller bundle size.

================================

# Usage
```
```

===============================
# Plugins

## Dot

Shows a dot for every item in the carousel.

```js
// script tag global
new Carousel.Carousel({
  plugins: [
    Carousel.SlideshowPlugin({
      intervalMs: 5000, // slide every 5000 ms
      stopAfterAction: true // stop the slideshow if user changes the slide
    })
  ]
});

// es modules
import { Carousel, SlideshowPlugin } from "carousel";
new Carousel({
  plugins: [
    SlideshowPlugin({ intervalMs: 5000 })
  ]
  });
```

## Lazy Load

## Slideshow

Automatically changes the carousel

Example
Slide every 5 seconds

```js
import { Carousel, SlideshowPlugin } from "carousel";
new Carousel({ plugins: [SlideshowPlugin({ intervalMs: 5000 })] });
```
