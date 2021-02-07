import React from "react"
import {Link} from "react-router-dom"
import styles from "./menu.module.css"
function Menu(){
    return(
    <>
    <nav className={styles.nav}>
    <ul className={styles.ul}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">Sobre</Link>
        </li>
        <li>
            <Link to="/content">Conteúdo</Link>
        </li>
        <li>
            <Link to="/UtilizandoParametro">Utilizando Parametro</Link>
        </li>        
    </ul>
    </nav>
    </>
    )
}

export default Menu