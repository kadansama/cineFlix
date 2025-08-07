import { Logo } from "../Logo"
import { Navbar } from "./components/Navbar/Navbar"

import styles from './Header.module.css'


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <Logo />
                <Navbar />
            </div>
        </header>
    )
}