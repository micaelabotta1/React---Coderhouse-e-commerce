import React from 'react';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulos from './components/titulos/titulos';

function App() {
  return (
    <div >

      <NavBar/>

 <Titulos name='Titulogeneral' segundotitulo='subtitulo' />
 
 

  </div>
  );
}

export default App;
