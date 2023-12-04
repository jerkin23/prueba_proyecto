import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Manual.css';

const LetrasManual = () => {

  return (
    <div className="letras">
      <h1>Manual de usuario - Bloc de Notas en línea</h1>
  <p>¡Bienvenido a nuestro Bloc de Notas en Línea! Esta es la herramienta perfecta para organizar tus ideas en cualquier momento y lugar. Este recurso nace con la idea de ofrecerte una plataforma sencilla y eficiente para gestionar tus diferentes apuntes de manera práctica y eficiente.</p>
  
  <h2>Características principales:</h2>
  <ul>
    <li>Acceso Seguro: Protege tus notas con un inicio de sesión seguro, el cual te garantiza la total privacidad de tus ideas.</li>
    <li>Gestión Intuitiva de Notas: Puedes crear, editar y eliminar tus diferentes notas de manera intuitiva y eficiente.</li>
  </ul>
  
  <h2>Instrucciones de Uso</h2>
  <p>Primero se abrirá una pestaña, la cual le mandará un mensaje de bienvenida a la página web, deberá tocar el botón que dice “empezar” y lo enviará a la pestaña de Inicio de sesión.</p>
  <p>Una vez en el inicio de sesión, debe seguir los siguientes pasos:</p>
  <ol>
    <li>Ingrese el nombre de usuario y contraseña.</li>
    <li>Debe hacer clic en "Iniciar Sesión".</li>
  </ol>
  <p>Y así accederá a la página.</p>
  
  <p>En caso de no tener cuenta:</p>
  <ol>
    <li>Debe darle clic al botón de “Registrarse”, esto lo redireccionará a un apartado de la página donde se le pedirá nombre de usuario, contraseña y correo.</li>
    <li>Debe ingresar la información solicitada en los espacios debidos.</li>
    <li>Si la información se guarda con éxito se guardarán los datos y entrará en la página web con éxito.</li>
  </ol>
  
  <h2>Panel Principal</h2>
  <p>Cerrar Sesión: En la esquina superior derecha, encontrarás el botón "Cerrar Sesión". Haz clic en él si deseas cerrar tu sesión y salir.</p>
  
  <h3>Escribe, elimina o guarda tu nota.</h3>
  <ul>
    <li>Crear Nota: Haz clic en el botón llamado "Nueva Nota" que se encuentra en el panel principal de la página. Se abrirá un espacio para poder escribir la nota. Al finalizar de escribir la nota, tendrás habilitada una zona en la cual podrás guardarla y asignarle un nombre.</li>
    <li>Editar Nota: Para la edición, ubica la nota que deseas cambiar. Haz clic en el botón "Editar", realiza los cambios deseados y luego presiona “guardar”.</li>
    <li>Eliminar nota: Para eliminar una nota, haz clic en el botón "Eliminar" y listo (ten en cuenta que no se puede recuperar después de realizar la acción).</li>
  </ul>
  
  <h2>Preguntas frecuentes</h2>
  <h3>Gestión de Notas</h3>
  <p><strong>Pregunta:</strong> ¿Puedo recuperar una nota eliminada?</p>
  <p><strong>Respuesta:</strong> No, la eliminación es irrevocable.</p>
  
  <h2>¡Comienza Ahora!</h2>
  <p>Explora los servicios que te ofrecemos en nuestro Bloc de Notas en Línea y mantente organizado.</p>
  <p>¡Gracias por ser parte de nuestro proyecto y esperamos tener tu apoyo!</p>
    </div>
  );
}

const Manual = () => {
  //definir estado de burbujas para inicializar todo desde el inicio
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    //aca se generan las burbujas
    const generateBubbles = () => {
      //este es el numero de burbujas que aparecen a lo largo de la pantalla
      const numBubbles = 40;
      //aca es un arreglo para que sea random la generacion de burbujas
      const bubbleValues = Array.from({ length: numBubbles }, () =>
        Math.floor(Math.random() * 31) + 11
      );
      //aca se actualiza su estado pues
      setBubbles(bubbleValues);
    };

    //aca se llama a la llama que llama
    generateBubbles();
  }, []);

  return (
    <div className="Manual" data-testid="Manual">
      <div className="capa">
        <div className="burbujas">
          {bubbles.map((value, index) => (
            //aca la historia se cuenta sola con ese map terrorifico xd
            <span
              className="burbuja"
              style={{ '--i': value, animationDelay: `${index * 0.1}s` }}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

Manual.propTypes = {};
Manual.defaultProps = {};

export default Manual;