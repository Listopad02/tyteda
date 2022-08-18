import React from "react";
import { Drawer } from "@mui/material";
import styles from "./BM.module.css";
import Box from "@mui/material/Box";
import Link from "next/link";
import { link, items } from "./Nav3";

export const BurgerMenu = ({ onClose }) => {
  return (
    <div className={styles.background} onClick={onClose}>
      <div className={styles.burger_menu}>
        <button className={styles.close}>X</button>
        {items.map((el, i) => {
          return (
            <Link key={el} href={link[i]}>
              <a key={el} className={styles.button}>
                {el}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
