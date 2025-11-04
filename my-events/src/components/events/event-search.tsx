import Button from "../buttons/button";
import styles from "./events-search.module.css";
import { useRef } from "react";

export default function EventSearch(props: any){
    const anoRef = useRef<HTMLSelectElement>(null)
    const mesRef = useRef<HTMLSelectElement>(null);

    function enviaPesquisa(event: any){   
        event.preventDefault();

        const selectedAno = anoRef.current!.value
        const selectedMes = mesRef.current!.value

        props.onSearch(selectedAno, selectedMes);
    }

    return (
        <form className={styles.form} onSubmit={enviaPesquisa}>
            <div className={styles.controls}>
                <div className={styles.control}>
                    <label htmlFor="Ano">Ano</label>
                    <select name="Ano" id="Ano" ref={anoRef}>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
            
            <div className={styles.control}>
                <label htmlFor="Mês">Mês</label>
                <select name="Mês" id="Mês" ref={mesRef}>
                    <option value="01">Janeiro</option>
                    <option value="02">Fevereiro</option>
                    <option value="03">Março</option>
                    <option value="04">Abril</option>
                    <option value="05">Maio</option>
                    <option value="06">Junho</option>
                    <option value="07">Julho</option>
                    <option value="08">Agosto</option>
                    <option value="09">Setembro</option>
                    <option value="10">Outubro</option>
                    <option value="11">Novembro</option>
                    <option value="12">Dezembro</option>
                </select>
            </div>
            </div>
            <Button>Pesquisar</Button>
        </form>
    )
}