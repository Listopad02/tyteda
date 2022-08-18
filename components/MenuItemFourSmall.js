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
import Autoplay from "embla-carousel-autoplay";

import test from "../public/images/01.jpg";
import test2 from "../public/images/02.jpg";
import test3 from "../public/images/03.jpg";
import test4 from "../public/images/04.jpg";
import test5 from "../public/images/05.jpg";
import test6 from "../public/images/06.jpg";
import test7 from "../public/images/07.jpg";
import test8 from "../public/images/08.jpg";
import test9 from "../public/images/09.jpg";

export const media = [
  test.src,
  test2.src,
  test3.src,
  test4.src,
  test5.src,
  test6.src,
  test7.src,
  test8.src,
  test9.src,
];
const mediaByIndex = (index) => media[index % media.length];

const SLIDE_COUNT = 9;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const description = [
  "Морс ягодный",
  "Компот из сухофруктов",
  "Тан",
  "Кока-кола",
  "Фанта",
  "Спрайт",
  "Аква минерале газ.",
  "Аква минерале б/г",
  "Липтон",
];

function MenuItemFourSmall() {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 1,
      skipSnaps: false,
    },
    [Autoplay()]
  );
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
    <div className="emblaS">
      <div className="emblaS__viewport" ref={viewportRef}>
        <div className="emblaS__container">
          {slides.map((index) => (
            <div className="emblaS__slide" key={index}>
              <div className="emblaS__slide__inner">
                <img className="emblaS__slide__img" src={mediaByIndex(index)} />
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

export default MenuItemFourSmall;
