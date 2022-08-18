import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

import test from "../public/images/test.png";
import test2 from "../public/images/test2.png";
import test3 from "../public/images/test3.png";
import test4 from "../public/images/test4.png";
import test5 from "../public/images/test5.png";
import test6 from "../public/images/test6.png";
import test7 from "../public/images/test7.png";
import test8 from "../public/images/test8.png";
import test9 from "../public/images/test9.png";
import test10 from "../public/images/test10.png";

export const media = [
  test2.src,
  test3.src,
  test4.src,
  test5.src,
  test6.src,
  test7.src,
  test8.src,
  test9.src,
  test10.src,
];
export const mediaByIndex = (index) => media[index % media.length];

const SLIDE_COUNT = 9;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const description = [
  "Каша 1",
  "Каша 2",
  "Каша 3",
  "Каша 4",
  "Каша 5",
  "Каша 6",
  "Каша 7",
  "Каша 8",
  "Каша 9",
];

function MenuItemThree() {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 3,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);
  return (
    <div className="emblaM">
      <div className="emblaM__viewport" ref={viewportRef}>
        <div className="emblaM__container">
          {slides.map((index) => (
            <div className="emblaM__slide" key={index}>
              <div className="emblaM__slide__inner">
                <img className="emblaM__slide__img" src={mediaByIndex(index)} />
                <div className="foodDescriptionSlider">
                  {description[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuItemThree;
