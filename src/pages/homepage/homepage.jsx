// import { useLocation } from "react-router";
import Header from "../../components/header/header.jsx";
import Posts from "../../components/posts/posts.jsx";
import Sidebar from "../../components/sidebar/sidebar.jsx";
import "./homepage.css";

export default function Homepage() {
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}