import EmblaCarousel from "./Carousel"
import "./style/Base.css";
import "./style/Reset.css";

const SLIDE_COUNT = 10;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Slider = () => (
  <>
    <EmblaCarousel slides={slides} />
  </>
);


export default Slider;