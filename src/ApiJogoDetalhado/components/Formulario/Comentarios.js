import React, {useState, useEffect} from "react";
import { Card } from '../Card';


export const Comentarios = ()=>{

    const [arrayComentarios, setArrayComentarios]=useState(JSON.parse(localStorage.getItem("comentarios")) || []);

    useEffect(()=>{
        if(arrayComentarios != []){
        localStorage.setItem("comentarios", JSON.stringify(arrayComentarios));
        
        
        }
        

    }, [arrayComentarios]);
    

    

   

    return(
        <div>
                

                   <ul>{arrayComentarios.length === 0
                        ? 'Nenhum comentario encontrado'
                        : arrayComentarios.map((comentario) => <Card comentario={comentario} />)}
                
                </ul>
               


          </div>
    )
}