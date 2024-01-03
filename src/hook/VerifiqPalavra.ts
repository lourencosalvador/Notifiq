import { Itemsdata } from "../App";
import { palavrasHorarios } from "../data/base";



export const VerifiqPalavra = (frases: string) => {
    const newFrase = frases.split(" ");
    
    const encontrada = palavrasHorarios.some(palavra => {
        return newFrase.includes(palavra);
    });

    return encontrada;
}