import personIcon from "../public/icons/info-kp-icon.svg";
import schoolIcon from "../public/icons/school-icon.svg";

import arrowDown from "../public/icons/arrowDown.svg";
import globe from "../public/icons/globe.svg";

import {
  Container,
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import api from "../utils/api";
import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import styles from "./reviews.module.css";
import { useForm } from "react-hook-form";

function Reviews() {
  const [rating, setRating] = useState(5);

  const [submit, setSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [values, setValues] = useState({
    name: "",
    company: "",
    comment: "",
  });

  const [reviews, setReviews] = useState([]);

  useEffect(async () => {
    const res = await api("/public/reviews", {
      method: "GET",
    });
    setReviews(res.data);
  }, []);

  const handleInput = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return (
    <Container>
      <section className={styles.contact}>
        <div className={styles.contact__form}>
          <Grid container>
            {reviews.map((e) => {
              return (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      boxShadow: 3,
                      borderRadius: "15px",
                      background: "white",
                      p: 3,
                      width: "100%",
                      mb: 3,
                    }}
                  >
                    <Typography sx={{ fontSize: "25px" }}>{e.name}</Typography>
                    <div>Компания: {e.company}</div>
                    <div>
                      <Rating name="read-only" value={e.rating} readOnly />
                    </div>
                    <Divider />
                    <br />
                    <div>{e.comment}</div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </section>
      <section className={styles.contact}>
        <div className={styles.contact__form}>
          <form
            onChange={handleInput}
            onSubmit={handleSubmit(async (data) => {
              setSubmit(!submit);
              const res = await api("/reviews", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  company: values.company,
                  comment: values.comment,
                  rating: rating ?? 0,
                }),
              });
            })}
            className={styles.form}
          >
            <p className={styles.title__description}>Оставить отзыв</p>
            <div style={{ display: "grid" }}>
              <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <br />
              <div className={styles.form__grid}>
                <div className={styles.input__card}>
                  <span className={styles.form__span}>
                    Имя <span className={styles.span}>*</span>
                  </span>
                  <input
                    className={styles.form__input}
                    {...register("name", {
                      required: "Это поле обязательно",
                      minLength: {
                        value: 3,
                        message: "Минимальная длина 3 символа",
                      },
                      maxLength: {
                        value: 20,
                        message: "Максимальная длина 20 символов",
                      },
                    })}
                  />
                </div>
                <div className={styles.input__card}>
                  <span className={styles.form__span}>
                    Компания <span className={styles.span}>*</span>
                  </span>
                  <input
                    className={styles.form__input}
                    name="company"
                    {...register("company", {
                      required: "Это поле обязательно",
                      minLength: {
                        value: 3,
                        message: "Минимальная длина 3 символа",
                      },
                      maxLength: {
                        value: 20,
                        message: "Максимальная длина 20 символов",
                      },
                    })}
                  />
                </div>
              </div>

              <div className={`${styles.input__card} ${styles.input__last}`}>
                <span className={styles.form__span}>Отзыв</span>
                <input
                  className={`${styles.form__input} ${styles.input__last}`}
                  name="comment"
                  {...register("comment")}
                />
              </div>
            </div>
            <div className={styles.minwidth}>
              <button onClick={handleSubmit} className={styles.submit__btn}>
                {!submit && <div className={styles.ellipse__left} />}
                {!submit ? (
                  <span style={{ margin: "0 -20px 0 0" }}>Отправить</span>
                ) : (
                  <span style={{ margin: "0 0 0 -35px" }}>Отправлено</span>
                )}
                {submit && <div className={styles.ellipse__right} />}
              </button>
            </div>
          </form>
        </div>
      </section>
    </Container>
  );
}

export default Reviews;
