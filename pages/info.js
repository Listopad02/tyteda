import Header from "../components/Header";

import Nav from "../components/Nav";
import { Nav3 } from "../components/Nav3";

import Footer from "../components/Footer";
import styles from "./info.module.css";
import personIcon from "../public/icons/info-kp-icon.svg";
import schoolIcon from "../public/icons/school-icon.svg";

import arrowDown from "../public/icons/arrowDown.svg";
import globe from "../public/icons/globe.svg";

const arr = [
  {
    num: "01",
    text: "Доставка обедов в офис – новый мировой тренд, который нравится руководителям и персоналу.",
    width: "283px",
  },
  {
    num: "02",
    text: "Не нужно тратить время на поиски кафе..",
    width: "191px",
  },
  {
    num: "03",
    text: "Сотрудники раньше возвращаются с бизнес-ланча и приступают к работе.",
    width: "256px",
  },
  {
    num: "04",
    text: "В компании создается благоприятная дружественная атмосфера.",
    width: "235px",
  },
  {
    num: "05",
    text: "В заказах учитываются предпочтения каждого человека, при этом услуги по организации питания доступны для организаций любого масштаба.",
    width: "315px",
  },
  {
    num: "06",
    text: "Наши специалисты помогут составить меню в соответствии с вашим бюджетом.",
    width: "265px",
  },
  {
    num: "07",
    text: "Практика показывает, что бизнес-ланч за счёт компании положительно сказывается на лояльности персонала.",
    width: "273px",
  },
  {
    num: "08",
    text: "Вкусный обед повышает настроение. А хорошее настроение – это гарантия высокой продуктивности.",
    width: "233px",
  },
];

function Info() {
  return (
    <>
      <Header />
      <Nav3 />
      <section className={styles.info}>
        <div className={styles.info__image}>
          <h2 className={styles.info__title}>Информация</h2>
          <div className={styles.opacity} />
        </div>
        <div className={styles.info__corp}>
          <div className={styles.center}>
            <img
              src={personIcon.src}
              alt="info__logo"
              className={styles.info__logo}
            />
            <h3 className={styles.corp__title}>
              Корпоративное питание <br /> для сотрудников
            </h3>
            <div className={styles.info__grid}>
              {arr.map((el, i) => {
                return (
                  <div key={el.num} className={styles.grid__card}>
                    <h3 className={styles.grid__num}>{el.num}</h3>
                    <p
                      className={styles.grid__text}
                      style={{ maxWidth: el.width }}
                    >
                      {el.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={`${styles.background__one} ${styles.info__corp}`}>
          <div className={styles.width}>
            <div className={styles.school}>
              <img src={schoolIcon.src} className={styles.info__logo} />
              <h3 className={`${styles.corp__title} ${styles.school__title}`}>
                Организация питания в образовательных учреждениях
              </h3>
              <p
                className={`${styles.school__text} ${styles.school__text_margin}`}
              >
                Мы соблюдаем требования к безопасности и полезности школьных
                завтраков и обедов в соответствии с российским
                законодательством.
              </p>
              <p className={styles.school__text}>
                Наши специалисты составляют здоровое и разнообразное меню, чтобы
                обеспечить растущий организм полезными микроэлементами.
              </p>
              <p className={styles.school__text}>
                Доверить организацию питания в школе в ВУЗе можно только
                специализированным компаниям.
              </p>
              <p className={styles.school__text}>
                Для нас здоровье детей стоит на первом месте.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.background__two} ${styles.info__corp}`}>
          <div className={styles.width}>
            <div className={styles.school}>
              <img src={arrowDown.src} className={styles.info__logo} />
              <h3 className={`${styles.corp__title} ${styles.margin}`}>
                Причины заказать корпоративное питание у нас
              </h3>
              <p
                className={`${styles.school__text} ${styles.margin} ${styles.school__text_margin}`}
              >
                Мы покупаем продукты у проверенных поставщиков.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                В наших блюдах нет вредных нитратов, канцерогенов, ГМО,
                антибиотиков и красителей.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                Повара применяют щадящие методы кулинарной обработки, благодаря
                чему сохраняется полезные свойства продуктов.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                С нами вы экономите, ведь расходы на транспорт и помещение для
                кухни мы берем на себя.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                Аутсорсинг снижает налоговую нагрузку.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                Мы не ограничиваем вам выбор блюд, заказывайте всё, что
                захотите. А мы подскажем, какой комплексный обед подходит в
                вашем случае с учетом специфики производства и продолжительности
                рабочего дня.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                У нас есть предложения для любого бюджета и индивидуальных
                пожеланий, в том числе постное меню, блюда для веганов и
                вегетарианцев.
              </p>
              <p className={`${styles.school__text} ${styles.margin}`}>
                Кейтеринговые услуги – это вкусно, удобно и недорого.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.background__three}>
          <div className={styles.width}>
            <div className={styles.school}>
              <img src={globe.src} className={styles.info__logo} />
              <h3 className={`${styles.corp__title} ${styles.margin__title}`}>
                Зона доставки
              </h3>
              <p className={`${styles.school__text} ${styles.margin}`}>
                Пунктуальность – наш конёк. Поэтому мы ограничили область
                доставки для организации питания в образовательной организации,
                на производстве и в офисах.
              </p>
              <h5 className={styles.title__zone}>Зона 1</h5>
              <p className={styles.zone__text}>Реутов, Новогиреево.</p>
              <h5 className={styles.title__zone}>Зона 2</h5>
              <p className={`${styles.zone__text} ${styles.margin_none}`}>
                Балашиха, Железнодорожный, Заря, Измайлово, Гольяново, Вешняки,
                Косино-Ухтомский, Некрасовка.
              </p>
              <p className={`${styles.zone__text} ${styles.margin}`}>
                Наша курьерская служба работает как часы, составляя продуманные
                маршруты. Курьеры всегда приезжают вовремя, независимо от
                дорожной обстановки.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Info;
