import React from 'react';

function Header() {
  return (
    <>
      <a href="index.html"><img src="src\assets\escudo.svg" alt="Escudo escuela" className="escudo" /></a>
      <h1>Listado escolar</h1>
      <button onClick={() => {window.location.href='#'}}>Ir atrás</button>
    </> 
  );
}

export default Header;