import media1 from "./image-product-1.jpg";
import media2 from "./image-product-2.jpg";
import media3 from "./image-product-3.jpg";
import media4 from "./image-product-4.jpg";

export const Media = [media1, media2, media3, media4];
export const mediaByIndex = index => Media[index % Media.length];
