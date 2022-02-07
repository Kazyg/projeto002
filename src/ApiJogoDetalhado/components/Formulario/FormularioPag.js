import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Card } from "../Card";
import styles from './Form.module.css'



export const FormularioPag =()=>{

     const [id, setId]= useState(localStorage.getItem("id"));
    const [arrayComentarios, setArrayComentarios]=useState(JSON.parse(localStorage.getItem("comentarios")) || []);
   

    useEffect(()=>{
        if(arrayComentarios != []){
        localStorage.setItem("comentarios", JSON.stringify(arrayComentarios));
        
        
        }
        

    }, [arrayComentarios]);

   

    const handleSubmit = (values, { setSubmitting }) => {
       
        let array = arrayComentarios;
        setArrayComentarios([...array, values])
        
        setSubmitting(false);
      
      };

    
    

    const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
        nome: Yup.string().required('Campo obrigatório'),
        comentario: Yup.string().required('Campo obrigatorio')});
        

    const initialValues = {
        email: '',
        nome: '',
        comentario: '',
        votoPositivo: 0,
        votoNegativo: 0,
        idJogo: id
      };

      return(
          <div className={styles['container']}>
          <h1>Comentarios</h1>
            <div className={styles['divForm']}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, isValid }) => (
          <Form>
              <div>
                  NOME: <Field name="nome" placeholder="nome" />

                       <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />

                      E-MAIL: <Field name="email" placeholder="email" />

                      <ErrorMessage name="email" style={{ color: 'red' }} component="span" />
                </div>

                <div className={styles['divComentario']}>
                    COMENTARIO: 
                    <Field name="comentario" placeholder="comentario" />
                      <ErrorMessage name="comentario" style={{ color: 'red' }} component="span" />
                </div>
                <button type="submit" disabled={isSubmitting || !isValid}>Enviar</button>
          </Form>
          )}
          </Formik>
          </div>
          <div>
                

                   {arrayComentarios.length === 0
                        ? 'Nenhum comentario encontrado'
                        : arrayComentarios.map((comentario) =>
                           <Card comentario={comentario} />
                           
                           )}
                
                
               


          </div>
          
          </div>
      )
}