import Product from "./Product"
import "./style/Base.css";
import "./style/Reset.css";

const SLIDE_COUNT = 4;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Slider = () => (
  <>
    <Product slides={slides}/>
  </>
);


export default Slider;