import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {
    return <header id={styles.header}>
        <ul id={styles.headerList}>
            <li className={styles.headerItem}>
                <NavLink to='about' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>O NAS</NavLink>
            </li>

            <li className={styles.headerItem}>
                <NavLink to='faq' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>FAQ</NavLink>
            </li>

            <li className={styles.headerItem}>
                <NavLink to='calculate' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>KALKULACKA</NavLink>
            </li>

            <li className={styles.headerItem}>
                <NavLink to='reserve' className={({ isActive }) => isActive ? styles.activeLink : styles.link}>REZERVACE</NavLink>
            </li>
        </ul>
    </header>
}

export default Header;