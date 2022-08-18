import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import api from "../utils/api";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function MenuItemsNew({ meal }) {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      dragFree: true,
      containScroll: "trimSnaps",
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

  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect, dishes]);

  const [viewportRef2, embla2] = useEmblaCarousel(
    {
      dragFree: true,
      containScroll: "trimSnaps",
    },
    [Autoplay()]
  );

  const [prevBtnEnabled2, setPrevBtnEnabled2] = useState(false);
  const [nextBtnEnabled2, setNextBtnEnabled2] = useState(false);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [scrollSnaps2, setScrollSnaps2] = useState([]);

  const scrollPrev2 = useCallback(
    () => embla2 && embla2.scrollPrev(),
    [embla2]
  );
  const scrollNext2 = useCallback(
    () => embla2 && embla2.scrollNext(),
    [embla2]
  );
  const scrollTo2 = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla2]
  );

  const onSelect2 = useCallback(() => {
    if (!embla) return;
    setSelectedIndex2(embla2.selectedScrollSnap());
    setPrevBtnEnabled2(embla2.canScrollPrev());
    setNextBtnEnabled2(embla2.canScrollNext());
  }, [embla2, setSelectedIndex2]);

  useEffect(() => {
    if (!embla2) return;
    onSelect2();
    setScrollSnaps2(embla2.scrollSnapList());
    embla2.on("select", onSelect2);
  }, [embla2, setScrollSnaps2, onSelect2, dishes]);

  useEffect(async () => {
    const res = await api(`/public/dishes?type=${meal}`, {
      method: "GET",
    });
    setDishes(res.data);
  }, [meal]);

  if (dishes.length < 1) return <>Loading</>;

  const media = dishes.map((e) => {
    return "https://api.corp-pitanie.tyteda.ru" + e.image;
  });

  const description = dishes.map((e) => {
    return e.name;
  });

  const mediaByIndex = (index) => media[index % media.length];

  const SLIDE_COUNT = dishes.length;
  const slides = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: "15px",
          display: { xs: "none", md: "block" },
        }}
      >
        <div className="emblaM">
          <div className="emblaM__viewport" ref={viewportRef}>
            <div className="emblaM__container">
              {slides.map((index) => (
                <div className="emblaM__slide" key={index}>
                  <div className="emblaM__slide__inner">
                    <img
                      className="emblaM__slide__img"
                      src={mediaByIndex(index)}
                    />
                    <div className="foodDescriptionSlider">
                      {description[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: "15px",
          display: { xs: "block", md: "none" },
        }}
      >
        <div className="emblaS">
          <div className="emblaS__viewport" ref={viewportRef2}>
            <div className="emblaS__container">
              {slides.map((index) => (
                <div className="emblaS__slide" key={index}>
                  <div className="emblaS__slide__inner">
                    <img
                      className="emblaS__slide__img"
                      src={mediaByIndex(index)}
                    />
                    <div className="foodDescriptionSlider">
                      {description[index]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default MenuItemsNew;
