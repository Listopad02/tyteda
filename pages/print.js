import { useState, useEffect } from "react";
import { setUser } from "../redux/action";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import PrintTable from "../components/profile/PrintTable";

function Login({ user, setUser }) {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/print");
    }
  }, []);

  return (
    <>
      <PrintTable />
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
