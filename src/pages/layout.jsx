import { Outlet,useLocation, Link } from "react-router-dom";
import  styles from '../style/topNav.module.css';
import React from 'react';

const Layout = () => {
  const currentRoute = useLocation();
  const loc = currentRoute.pathname;
  return (
    <> 
      <nav>
        <ul>
          <li>XY.Y</li>
          <li className={styles.leftnav}>
            <Link className={loc.includes("home") ? styles.tabon : styles.tab} to="/home">Home</Link>
          </li>
          <li>
            <Link className={loc.includes("project") ? styles.tabon : styles.tab} to="/project">Project</Link>
          </li>
          <li>
            <Link className={loc.includes("education") ? styles.tabon : styles.tab} to="/education">Education</Link>
          </li>
          <li>
            <Link className={loc.includes("experience") ? styles.tabon : styles.tab} to="/experience">Work Experience</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;