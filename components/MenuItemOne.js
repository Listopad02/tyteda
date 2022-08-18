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

import Pshen from "../public/images/Pshen.png";
import PshenSgush from "../public/images/PshenSgush.png";
import PshenMed from "../public/images/PshenMed.png";
import PshenOreh from "../public/images/PshenOreh.png";
import PshenVarenie from "../public/images/PshenVarenie.png";
import Mannaya from "../public/images/Mannaya.png";
import MannayaVarenie from "../public/images/MannayaVarenie.png";
import MannayaOreh from "../public/images/MannayaOreh.png";
import MannayaSgush from "../public/images/MannayaSgush.png";
import MannayaMed from "../public/images/MannayaMed.png";
import MannayaShok from "../public/images/MannayaShok.png";
import Ovsyanka from "../public/images/Ovsyanka.png";
import OvsyankaOreh from "../public/images/OvsyankaOreh.png";
import OvsyankaSgush from "../public/images/OvsyankaSgush.png";
import OvsyankaMed from "../public/images/OvsyankaMed.png";
import OvsyankaVarenie from "../public/images/OvsyankaVarenie.png";
import BlinyDzhem from "../public/images/BlinyDzhem.png";
import BlinySgush from "../public/images/BlinySgush.png";
import BlinySmetana from "../public/images/BlinySmetana.png";
import BlinyTvorog from "../public/images/BlinyTvorog.png";
import BlinySyr from "../public/images/BlinySyr.png";
import Bliny from "../public/images/Bliny.png";
import BlinyShok from "../public/images/BlinyShok.png";
import BlinySyrGriby from "../public/images/BlinySyrGriby.png";
import OmletOvosh from "../public/images/OmletOvosh.png";
import OmletKurica from "../public/images/OmletKurica.png";
import OmletGriby from "../public/images/OmletGriby.png";
import OmletZelen from "../public/images/OmletZelen.png";

const media = [
  Pshen.src,
  PshenSgush.src,
  PshenMed.src,
  PshenOreh.src,
  PshenVarenie.src,
  Mannaya.src,
  MannayaVarenie.src,
  MannayaOreh.src,
  MannayaSgush.src,
  MannayaMed.src,
  MannayaShok.src,
  Ovsyanka.src,
  OvsyankaOreh.src,
  OvsyankaSgush.src,
  OvsyankaMed.src,
  OvsyankaVarenie.src,
];
const mediaByIndex = (index) => media[index % media.length];

const SLIDE_COUNT = 16;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const description = [
  "Каша пшеничная",
  "Каша пшеничная со сгущ. молоком",
  "Каша пшеничная с медом",
  "Каша пшеничная с грецким орехом",
  "Каша пшеничная с вареньем",
  "Каша манная",
  "Каша манная с вареньем",
  "Каша манная с грецким орехом",
  "Каша манная со сгущ. молоком",
  "Каша манная с медом",
  "Каша манная с шоколадом",
  "Каша овсяная",
  "Каша овсяная с грецким орехом",
  "Каша овсяная со сгущ. молоком",
  "Каша овсяная с медом",
  "Каша овсяная с вареньем",
];

function MenuItemOne() {
  const [viewportRef, embla] = useEmblaCarousel(
    {
      slidesToScroll: 3,
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

export default MenuItemOne;
