import { Carousel } from "./carousel";

export function PluginLazyLoad(settings: any) {
  return function(carousel: Carousel) {
    const images = carousel.carouselItems.filter(
      (el): el is HTMLImageElement => el instanceof HTMLImageElement
    );

    new IntersectionObserver(
      () => {
        images.forEach(image => {
          const lazyAttr = image.getAttribute("data-src");
          if (lazyAttr === null) return;
          image.setAttribute("src", lazyAttr);
        });
      },
      { root: carousel.container }
    );
  };
}
