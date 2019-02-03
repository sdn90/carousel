export class Carousel extends EventTarget {
  container: HTMLElement;
  carouselItems: HTMLElement[];

  /**
   *
   * @param containerSelector
   * @param items the slide selector
   * @param plugins
   */
  constructor(
    containerSelector: string = "#carousel",
    items: string = ".carousel-item",
    plugins: Array<(carousel: Carousel) => void>
  ) {
    super();
    const containerQuery = document.querySelector(containerSelector);
    if (containerQuery instanceof HTMLElement) {
      this.container = containerQuery;
    } else {
      throw new Error("Carousel container must be a HTML element");
    }
    this.carouselItems = [...document.querySelectorAll(items)].filter(
      (el): el is HTMLElement => el instanceof HTMLElement
    );
    this.container.addEventListener("scroll", () => {});

    plugins.forEach(plugin => plugin(this));
    this.dispatchEvent(new CustomEvent("init", {}));
  }
  /**
   *
   * @param index the index of the target slide
   */
  scrollTo(index: number) {
    this.carouselItems[index].scrollIntoView();
    this.dispatchEvent(new CustomEvent("change"));
  }
  next() {}
  prev() {}
}
const f = new Carousel("", "", []);
