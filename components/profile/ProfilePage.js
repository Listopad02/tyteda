import Orders from "./Orders";
import Сompanies from "./Сompanies";
import Menu from "./Menu";
import Statistics from "./Statistics";
import CreateOrder from "./CreateOrder";
import Workers from "./Workers";
import UserProfile from "./UserProfile";
import Reviews from "./Reviews";

function ProfilePage({ modal, setModal, page }) {
  let activePage;

  page === "Заказы"
    ? (activePage = <Orders />)
    : page === "Меню"
    ? (activePage = <Menu />)
    : page === "Компании"
    ? (activePage = <Сompanies />)
    : page === "Статистика"
    ? (activePage = <Statistics />)
    : page === "Создать заказ"
    ? (activePage = <CreateOrder modal={modal} setModal={setModal} />)
    : page === "Сотрудники"
    ? (activePage = <Workers />)
    : page === "Профиль"
    ? (activePage = <UserProfile />)
    : page === "Отзывы"
    ? (activePage = <Reviews />)
    : false;

  return <>{activePage}</>;
}

export default ProfilePage;
