import { FC } from "react";
import { Slide } from "react-slideshow-image";
import style from "./Slideshow.module.css";
import "react-slideshow-image/dist/styles.css";
interface Props {
  images: string[];
}
export const Slideshow: FC<Props> = ({ images }) => {
//   console.log(`url(/products/${images[0]})`);

  return (
    <Slide>
      {images.map((image) => (
        <div key={image} className={style['each-slide']}>
          <div style={{ backgroundImage: `url(/${image})` }}></div>
        </div>
      ))}
    </Slide>
  );
};
