import React from 'react';
import Navbar from '../components/common/navbar';
import Footer from '../components/common/footer/Footer';
import Jogos from '../components/common/Jogos/Jogos';
import Banner from '../components/common/banner/Banner';
import Sobre from './Sobre';

import Atacantes from './Atacantes';
import Rendering from './test';
import ListaGoleiros from './Goleiros';
import Goleiros from './Goleiros';


function MainScreen() {
  return (
    <React.StrictMode>
     <Navbar/> 
     <Banner/>
     <Sobre/>
     <Goleiros/>
      <Jogos/>
      <Footer />
    </React.StrictMode>
  );
  }

  export default MainScreen;
