import { Carousel } from "./Carousel";

const svgNamespace = "http://www.w3.org/2000/svg";

interface DotsPluginSettings {}

/**
 * Renders a dot for each slide
 * @param settings 
 */
export default function DotsPlugin(settings: DotProps) {
  return function(carousel: Carousel): void {
    const dots = document.querySelector(".dots");
    if (dots !== null && dots instanceof HTMLElement) {
      const dotEls = carousel.carouselItems.map(() => {
        return createDot({
          isActive: false,
          activeFillHex: "#ff0000",
          fillHex: "#ccc"
        });
      });
      dots.append(...dotEls);

      carousel.addEventListener("change", () => {
        // rerender
      });
    }
  };
}

interface DotProps {
  isActive: boolean;
  activeFillHex: string;
  fillHex: string;
}
function createDot(props: DotProps) {
  const circle = document.createElementNS(svgNamespace, "circle");
  circle.setAttribute("height", "16");
  circle.setAttribute("width", "16");
  circle.setAttribute(
    "fill",
    props.isActive ? props.activeFillHex : props.fillHex
  );
  return circle;
}
