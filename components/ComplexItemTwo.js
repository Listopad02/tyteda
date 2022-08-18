import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
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
import { red } from "@mui/material/colors";

const style = {
  cont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  card: {
    flexDirection: "column",
    borderRadius: "13px",
    background: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    color: "#8A8A8A",
    padding: "20px 0",
    width: "90%",
  },
  cardCenter: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "13px",
    background: "#11D028",
    alignItems: "center",
    justifyContent: "center",
    color: "#F8F8F8",
    padding: "20px 0",
  },
  button: {
    border: "1px solid #11D028",
    borderRadius: "17px",
    background: "#F8F8F8",
    width: "121px",
    height: "31px",
    fontSize: "15px",
    lineHeight: "84.52%",
    letterSpacing: "-0.02em",
    color: "#11D028",
  },
  center: {
    display: "flex",
    background: "#11D028",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    borderRadius: "13px",
    color: "white",
    width: "263px",
  },
  right: {
    display: "flex",
    background: "#F8F8F8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    borderRadius: "13px",
    color: "rgb(42, 42, 42)",
  },
  left: {
    display: "flex",
    background: "#F8F8F8",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px 0",
    borderRadius: "13px",
    color: "rgb(42, 42, 42)",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  description: {
    display: "flex",
    alignItems: "center",
    flexDecription: "row",
    textAlign: "left",
    paddingTop: "10px",
    height: "90px",
  },
};

function ComplexItemTwo() {
  const [emblaRef1, emblaApi1] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [emblaRef3, emblaApi3] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <Grid container style={style.container}>
      <Grid item xs={1} md={4}>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box style={style.left} sx={{ boxShadow: 3 }}>
            <Typography sx={{ mb: 2 }}>от 210 рублей</Typography>
            <Box>
              <div className="embla" ref={emblaRef1}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <img src={test.src} />
                  </div>
                  <div className="embla__slide">
                    <img src={test2.src} />
                  </div>
                </div>
              </div>
            </Box>
            <Typography sx={{ mt: 1, fontWeight: "600", fontSize: "28px" }}>
              Мини
            </Typography>
            <Typography sx={{ fontWeight: "300", fontSize: "14px" }}>
              2 блюда
            </Typography>
            <Box style={style.description}>
              <Box sx={{ pr: 2 }}>
                <Box>Каша</Box>
                <Box>Омлет</Box>
              </Box>
              <Box>
                <Box>180 гр.</Box>
                <Box>100 гр.</Box>
              </Box>
            </Box>
            <Box sx={{ pt: 2 }}>
              <button style={style.button}>Выбрать</button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={10} md={4}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box style={style.center} sx={{ boxShadow: 3 }}>
            <Typography sx={{ mb: 2 }}>от 210 рублей</Typography>
            <Box>
              <div className="embla" ref={emblaRef2}>
                <div className="emblaB__container">
                  <div className="emblaB__slide">
                    <img src={test3.src} />
                  </div>
                  <div className="emblaB__slide">
                    <img src={test4.src} />
                  </div>
                  <div className="emblaB__slide">
                    <img src={test5.src} />
                  </div>
                </div>
              </div>
            </Box>
            <Typography sx={{ mt: 1, fontWeight: "600", fontSize: "28px" }}>
              Стандарт
            </Typography>
            <Typography sx={{ fontWeight: "300", fontSize: "14px" }}>
              3 блюда
            </Typography>
            <Box style={style.description}>
              <Box sx={{ pr: 2 }}>
                <Box>Каша</Box>
                <Box>Омлет</Box>
                <Box>Запеканка</Box>
              </Box>
              <Box>
                <Box>180 гр.</Box>
                <Box>100 гр.</Box>
                <Box>100 гр.</Box>
              </Box>
            </Box>
            <Typography sx={{ mt: 1, fontWeight: "300", fontSize: "16px" }}>
              Самое популярное
            </Typography>
            <Box sx={{ pt: 2 }}>
              <button style={style.button}>Выбрать</button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={1} md={4}>
        <Box
          sx={{ display: { xs: "none", md: "flex" }, justifyContent: "center" }}
        >
          <Box style={style.right} sx={{ boxShadow: 3 }}>
            <Typography sx={{ mb: 2 }}>от 210 рублей</Typography>
            <Box>
              <div className="embla" ref={emblaRef3}>
                <div className="embla__container">
                  <div className="embla__slide">
                    <img src={test.src} />
                  </div>
                  <div className="embla__slide">
                    <img src={test2.src} />
                  </div>
                </div>
              </div>
            </Box>
            <Typography sx={{ mt: 1, fontWeight: "600", fontSize: "28px" }}>
              Комфорт
            </Typography>
            <Typography sx={{ fontWeight: "300", fontSize: "14px" }}>
              4 блюда
            </Typography>
            <Box style={style.description}>
              <Box sx={{ pr: 2 }}>
                <Box>Каша</Box>
                <Box>Омлет</Box>
                <Box>Запеканка</Box>
                <Box>Блины</Box>
              </Box>
              <Box>
                <Box>180 гр.</Box>
                <Box>100 гр.</Box>
                <Box>100 гр.</Box>
                <Box>2 шт.</Box>
              </Box>
            </Box>
            <Box sx={{ pt: 2 }}>
              <button style={style.button}>Выбрать</button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ComplexItemTwo;
