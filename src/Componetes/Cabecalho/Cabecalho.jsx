import { useState } from "react";
import styles from "./Cabe.module.css"
import Calculadora from "../Calculadora/Calculadora";
function Cabecalho(){

    let [cor, setCor] = useState('white')
    let [corHeader, setCorHeader] = useState('#2f3640')
    let [corTexto, setCorTexto] = useState('white')

    const mudaCor = () => {
        setCor( cor === 'white' ? '#2f3640' : 'white')
        setCorHeader (corHeader === '#ccc' ? '#2f3640' : '#ccc')
        setCorTexto( corTexto === 'white' ? '#2f3640' : 'white')
    }

    return(
        <div>
            <header className={styles.header} style={{background: corHeader, border: 'solid 2px #000'}}>
                <div style={{display:"flex", alignItems: 'center', justifyContent: 'space-around'}}>
                <h1 className={styles.h1} style={{color: corTexto}}>Seja Bem - Vindo</h1>
                <button className={styles.button} onClick={mudaCor} style={{background: cor, border: '2px solid #fff'}}></button>
                </div>
                <Calculadora/>
        </header>
        </div>

    )
}
export default Cabecalho;