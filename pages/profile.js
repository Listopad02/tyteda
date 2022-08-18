import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Profile from "../components/profile/Profile";
import Nav3 from "../components/Nav3";
import Loader from "../components/Loader";

function HomeProfile({ user }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  });

  if (loading)
    return (
      <>
        <Nav3 />
        <Loader />
      </>
    );

  return (
    <>
      <Profile />
    </>
  );
}

const mapStateToProps = (state, props) => ({
  user: state.user,
});

export default connect(mapStateToProps)(HomeProfile);
