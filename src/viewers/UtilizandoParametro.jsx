import React, { useCallback, useEffect, useRef, useState } from "react"
import {useHistory, useParams} from "react-router-dom"
import styles from "./utlizandoParametro.module.css"
function UtilizandoParametro(props){
    const {texto} = useParams()
    const [value,setValue]=useState("")
    const history = useHistory()
    const mudar = useCallback((e)=>{
        history.push("/UtilizandoParametro/"+value)                
    },[history,value])
    const ref= useRef()
    useEffect(()=>{
        ref.current.focus()
    },[ref])
    return(
    <>
    <h1>Bem Vindo! {texto ? <strong>{texto}</strong>:""} <i className="fa fa-smile-o" aria-hidden="true"></i></h1>
    <div className={styles.center}>
        <h1>
            Mudar URL
        </h1>
        <form className={styles.form}>
            <input ref={ref} type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={mudar}>Mudar</button>
        </form>
    </div>
    </>
    )
}
export default UtilizandoParametro