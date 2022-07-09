// import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Zyab</span>
        <img
          src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"
          alt="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        />
        <p>
          Zyab is a Multinational brand growing so fast.
          We at zyab favour no organisation whatsoever.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Interests</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Life">
              Life
            </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Music">
              Music
            </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Style">
              Style
            </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link> */}
          </li>
          <li className="sidebarListItem">
            {/* <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link> */}
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}