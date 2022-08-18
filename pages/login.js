import { useState, useEffect } from "react";
import { setUser } from "../redux/action";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import api from "../utils/api";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Nav3 from "../components/Nav3";
import Entrance from "../components/Entrance";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Login({ user, setUser }) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/profile");
    }
  });

  return (
    <>
      <Header />
      <Nav3 />
      <Entrance />
      <Footer />
    </>
  );
}

const mapStateToProps = (state, props) => ({
  user: state.user,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
