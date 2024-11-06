import { useState } from "react";
import styles from "./Calc.module.css"
function Calculadora () {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const imc = peso / (altura ** 2);
    const calculoImc = () => {
        if (imc >= 1) {
            return (
                <ul>
                    <h2 className={styles.h2}>Seu IMC é de : {imc.toFixed(1)}%</h2>
                    {tabelaImc.map(({ classificacao, cor, limite }) => (
                        <li key={limite} className={cor}>
                            <p>
                                Se seu IMC é ≥ {limite}
                            </p>
                            <p>
                                {classificacao}
                            </p>
                        </li>
                    ))}
                </ul>
            )
        }
    }
    const tabelaImc = [
        { limite: 18.5, classificacao: `Você está abaixo do peso.`, cor: styles.baixoPeso },
        { limite: 24.9, classificacao: `Você está com peso normal, continue assim!`, cor: styles.pesoNormal },
        { limite: 29.9, classificacao: `Você está com sobrepeso, vamos fazer alguns exercícios?`, cor: styles.sobrepeso },
        { limite: 34.9, classificacao: `Você está com obesidade grau I. procure um medico`, cor: styles.obesidadeI },
        { limite: 39.9, classificacao: `Você está com obesidade grau II. procure um medico urgente`, cor: styles.obesidadeII },
        { limite: 40, classificacao: `Você está com obesidade grau III. sua situação e bem delicada`, cor: styles.obesidadeIII },
    ]

   return(
<div className={styles.container}>
            <h2 className={styles.h2}>Calculadora IMC</h2>
            <label className={styles.label} htmlFor="altura">Digite a altura</label>
            <input className={styles.input} onChange={evento => setAltura(evento.target.value)} type="number" name='altura' id='altura' placeholder="1.90" />
            <label className={styles.label} htmlFor="peso">Digite o peso </label>
            <input className={styles.input}  onChange={evento => setPeso(evento.target.value)} type="number" id='peso' name='peso' placeholder="70" min="2" />
            {calculoImc()}
        </div>
   ) 
}
export default Calculadora