import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ModalApplication } from "./ModalApplication";

const style = {
  card: {
    display: "flex",
    background: "#F8F8F8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    borderRadius: "13px",
    color: "rgb(42, 42, 42)",
    transition: "0.3s",
    cursor: "pointer",
  },
  activeCard: {
    display: "flex",
    background: "#11D028",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    borderRadius: "13px",
    color: "white",
    transition: "0.3s",
    cursor: "pointer",
  },
  button: {
    border: "none",
    borderRadius: "25px",
    background: "#11D028",
    width: "200px",
    height: "50px",
    fontSize: "20px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "white",
    margin: "30px",
    cursor: "pointer",
  },
  description: {
    margin: "20px 0 20px 0",
  },
  description2: {
    display: "flex",
    flexDecription: "row",
    textAlign: "left",
    width: "140px",
  },
};

import kashaMannaShokoladOmlet from "../public/images/kasha-manna-shokolad-omlet.png";
import kashaOmlet from "../public/images/kasha-omlet.png";
import kashaOmletZelen from "../public/images/kasha-omlet-zelen.png";

import KashaMannayaShokOmletOvoshZapecankaMed from "../public/images/KashaMannayaShok-OmletOvosh-ZapecankaMed.png";
import kashaOmletZapekanka from "../public/images/kasha-omlet-zapekanka.png";
import KashaMannayaVarenieOmletZelZapekankaShok from "../public/images/KashaMannayaVarenie-OmletZel-ZapekankaShok.png";
import KashaPshenMedOmletKuricaZapekankaTvorog from "../public/images/KashaPshenMed-OmletKurica-ZapekankaTvorog.png";

import KashaMannayaVarenieOmletGribySyrnikiMedBlinyVarenie from "../public/images/KashaMannayaVarenie-OmletGriby-SyrnikiMed-BlinyVarenie.png";
import kashaOmletSirnikiBlini from "../public/images/kasha-omlet-sirniki-blini.png";
import KashaovsVarenieOmletKuricaSyrnikiSgushBlinySmet from "../public/images/KashaovsVarenie-OmletKurica-SyrnikiSgush-BlinySmet.png";
import KashapshenMedOmletOvoshSyrnikiBlinyShok from "../public/images/KashapshenMed-OmletOvosh-Syrniki-BlinyShok.png";

import salatLagman from "../public/images/salat-lagman.png";
import salatSup from "../public/images/salat-sup.png";
import borchSalat from "../public/images/borch-salat.png";
import creamSoupSalat from "../public/images/cream-soup-salat.png";

import salatCartoshkaKotleta from "../public/images/salat-cartoshka-kotleta.png";
import mimozaFasolCuri from "../public/images/mimoza-fasol-curi.png";
import salatRisRiba from "../public/images/salat-ris-riba.png";
import morkovOladiKapusta from "../public/images/morkov-oladi-kapusta.png";

import supSalatCartoshkaRuba from "../public/images/sup-salat-cartoshka-ruba.png";
import shurpaSalatKapustaOtbivnaya from "../public/images/shurpa-salat-kapusta-otbivnaya.png";
import uhaSalatKartoshkaKotleta from "../public/images/uha-salat-kartoshka-kotleta.png";
import supKuricaGrachkaOtbivnaya from "../public/images/sup-kurica-grachka-otbivnaya.png";

import pureRiba from "../public/images/pure-riba.png";
import KartofelOtvarnoyRybaZhar from "../public/images/KartofelOtvarnoy-RybaZhar.png";
import RisOvoshKotletaPodomashnemu from "../public/images/RisOvosh-KotletaPodomashnemu.png";
import KashaGrechnevayaSvinayaOtbiv from "../public/images/KashaGrechnevaya-SvinayaOtbiv.png";

import raguRibaZapekanka from "../public/images/ragu-riba-zapekanka.png";
import RisOvoshRybaZharZapekankaPashtet from "../public/images/RisOvosh-RybaZhar-ZapekankaPashtet.png";
import PaprikashRybaOkunZapekankaPashtet from "../public/images/Paprikash-RybaOkun-ZapekankaPashtet.png";
import AzuTefteliRisZapekankaPashtet from "../public/images/Azu-TefteliRis-ZapekankaPashtet.png";

import pureRibaZapekPizza from "../public/images/pure-riba-zapek-pizza.png";
import KapustaTushRybaZharZapekankaPashtetPizzaMargo from "../public/images/KapustaTush-RybaZhar-ZapekankaPashtet-PizzaMargo.png";
import KartofelOtvarRybaZalivnoeZapekankaPashtetPizzaVetchinaGriby from "../public/images/KartofelOtvar-RybaZalivnoe-ZapekankaPashtet-PizzaVetchinaGriby.png";
import MakaronyOtvarOvoshRaguZapekankaPashtetPizzaPepp from "../public/images/MakaronyOtvar-OvoshRagu-ZapekankaPashtet-PizzaPepp.png";

function ComplexCard({ meal, card }) {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const content = [
    [
      {
        price: "150",
        name: "Мини",
        dishes: [
          ["Каша", "180 гр."],
          ["Омлет", "100 гр."],
        ],
        slider: emblaRef1,
        image: [kashaMannaShokoladOmlet, kashaOmlet, kashaOmletZelen],
      },
      {
        price: "210",
        name: "Стандарт",
        dishes: [
          ["Каша", "180 гр."],
          ["Омлет", "100 гр."],
          ["Запеканка", "100 гр."],
        ],
        slider: emblaRef2,
        image: [
          KashaMannayaShokOmletOvoshZapecankaMed,
          kashaOmletZapekanka,
          KashaMannayaVarenieOmletZelZapekankaShok,
          KashaPshenMedOmletKuricaZapekankaTvorog,
        ],
      },
      {
        price: "270",
        name: "Комфорт",
        dishes: [
          ["Каша", "180 гр."],
          ["Омлет", "100 гр."],
          ["Запеканка", "100 гр."],
          ["Блины", "2 шт."],
        ],
        slider: emblaRef3,
        image: [
          KashaMannayaVarenieOmletGribySyrnikiMedBlinyVarenie,
          kashaOmletSirnikiBlini,
          KashaovsVarenieOmletKuricaSyrnikiSgushBlinySmet,
          KashapshenMedOmletOvoshSyrnikiBlinyShok,
        ],
      },
    ],
    [
      {
        price: "200",
        name: "Мини",
        dishes: [
          ["Салат", "130 гр."],
          ["Суп", "350 гр."],
        ],
        slider: emblaRef1,
        image: [
          salatLagman,
          salatSup,
          RisOvoshKotletaPodomashnemu,
          KashaGrechnevayaSvinayaOtbiv,
        ],
      },
      {
        price: "250",
        name: "Стандарт",
        dishes: [
          ["Салат", "130 гр."],
          ["Гарнир", "180 гр."],
          ["Второе", "100 гр."],
        ],
        slider: emblaRef2,
        image: [
          salatCartoshkaKotleta,
          mimozaFasolCuri,
          salatRisRiba,
          morkovOladiKapusta,
        ],
      },
      {
        price: "350",
        name: "Комфорт",
        dishes: [
          ["Суп", "350 гр."],
          ["Салат", "130 гр."],
          ["Гарнир", "180 гр."],
          ["Второе", "100 гр."],
        ],
        slider: emblaRef3,
        image: [
          supSalatCartoshkaRuba,
          shurpaSalatKapustaOtbivnaya,
          uhaSalatKartoshkaKotleta,
          supKuricaGrachkaOtbivnaya,
        ],
      },
    ],
    [
      {
        price: "150",
        name: "Мини",
        dishes: [
          ["Гарнир", "180 гр."],
          ["Второе", "100 гр."],
        ],
        slider: emblaRef1,
        image: [pureRiba, KartofelOtvarnoyRybaZhar, borchSalat, creamSoupSalat],
      },
      {
        price: "210",
        name: "Стандарт",
        dishes: [
          ["Гарнир", "180 гр."],
          ["Второе", "100 гр."],
          ["Запеканка", "100 гр."],
        ],
        slider: emblaRef2,
        image: [
          raguRibaZapekanka,
          RisOvoshRybaZharZapekankaPashtet,
          PaprikashRybaOkunZapekankaPashtet,
          AzuTefteliRisZapekankaPashtet,
        ],
      },
      {
        price: "300",
        name: "Комфорт",
        dishes: [
          ["Гарнир", "180 гр."],
          ["Второе", "100 гр."],
          ["Запеканка", "100 гр."],
          ["Пицца", "30 см."],
        ],
        slider: emblaRef3,
        image: [
          pureRibaZapekPizza,
          KapustaTushRybaZharZapekankaPashtetPizzaMargo,
          KartofelOtvarRybaZalivnoeZapekankaPashtetPizzaVetchinaGriby,
          MakaronyOtvarOvoshRaguZapekankaPashtetPizzaPepp,
        ],
      },
    ],
  ];

  return (
    <>
      <Typography sx={{ mb: 1 }}>
        от {content[meal][card].price} рублей
      </Typography>
      <div className="embla" ref={content[meal][card].slider}>
        <div className="embla__container">
          {content[meal][card].image.map((e, i) => {
            return (
              <div key={i} className="embla__slide">
                <img src={e.src} />
              </div>
            );
          })}
        </div>
      </div>
      <Typography sx={{ mt: 1, fontWeight: "600", fontSize: "28px" }}>
        {content[meal][card].name}
      </Typography>
      <Typography sx={{ fontWeight: "300", fontSize: "14px" }}>
        {content[meal][card].dishes.length} блюда
      </Typography>
      <Box style={style.description}>
        {content[meal][card].dishes.map((e, i) => {
          return (
            <Box key={i} style={style.description2}>
              <Typography sx={{ flexGrow: 1 }}>{e[0]}</Typography>
              <Typography>{e[1]}</Typography>
            </Box>
          );
        })}
      </Box>
    </>
  );
}

function ComplexNewItems({ meal }) {
  const [item, setItem] = useState(0);
  const [modal, setModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const handlePopup = () => {
    setPopup(!popup);
  };

  return (
    <Container>
      <Grid
        container
        sx={{ display: "flex", alignItems: "center" }}
        spacing={3}
      >
        {[...new Array(3)].map((e, i) => {
          return (
            <Grid key={i} item xs={12} md={4}>
              {item === i ? (
                <Box
                  sx={{ boxShadow: 3 }}
                  style={style.activeCard}
                  onClick={() => setItem(i)}
                >
                  <ComplexCard meal={meal} card={i} />
                </Box>
              ) : (
                <Box
                  sx={{ boxShadow: 1 }}
                  style={style.card}
                  onClick={() => setItem(i)}
                >
                  <ComplexCard meal={meal} card={i} />
                </Box>
              )}
            </Grid>
          );
        })}
      </Grid>
      <button onClick={handlePopup} style={style.button}>
        Заказать
      </button>
      {popup && <ModalApplication onClose={handlePopup} />}
    </Container>
  );
}

export default ComplexNewItems;
