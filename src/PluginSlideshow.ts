import { Carousel } from "./carousel";

interface PluginSlideshowSettings {
  /** Stop the slideshow if user interacts with the carousel */
  stopAfterAction: boolean;
  /** Slide every X milliseconds  */
  slideIntervalMs: number;
}
export function PluginSlideshow(settings: PluginSlideshowSettings) {
  return function(carousel: Carousel) {
    const interval = setInterval(() => {
      carousel.next();
    }, settings.slideIntervalMs);

    if (settings.stopAfterAction) {
      const callback = () => {
        clearInterval(interval);
        carousel.removeEventListener("change", callback);
      };
      carousel.addEventListener("change", callback);
    }
  };
}
