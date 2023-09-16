import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-wrapper">
      <nav className="nav-bar">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Noraml fetch</NavLink>
          </li>
          <li>
            <NavLink to="/rq-posts">RQ fetch</NavLink>
          </li>
          <li>
            <NavLink to="/404">404</NavLink>
          </li>
        </ul>
      </nav>

      <hr />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
