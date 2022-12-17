import React from 'react';
import './Footer.css';
import ideLogo from './/imagens/ide.svg';
import cbfLogo from './/imagens/cbf.svg';

export default function Footer() {
  return (
    <div>
      <footer className="text-light">
        {/*<!-- Grid container -->*/}
        <div className="container">
          {/*<!--Grid row-->*/}
          <div className="row">
             
            <div className="col-md-2 float-left">
            <img src={cbfLogo} className="imagem_rodape_cbf" alt = "Cbf Company"></img>
            </div>
           
            <div className=" col-md-8 ">
              <div className="footer_texto ">
                Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados.
              </div>
              <nav className="navbar  navbar-expand-lg navbar-light footer_texto ">
                  <div className="navbar-nav float-right ">
                    
                      <a href="#" className="nav-item nav-link active">Termos de Uso</a>

                      <a href="#" className="nav-item nav-link disabled ">|</a>    
                  
                      <a href="#" className="nav-item nav-link active">Politica de Privacidade</a>
                    
                      <a href="#" className="nav-item nav-link disabled ">|</a>

                      <a href="#" className="nav-item nav-link active">Política de Cookies</a>
                   
 
                  </div>
                </nav> 
            </div>
            {/*<!--Grid column-->*/}

             {/*<!--Grid column-->*/}
            <div className=" col-md-2 ">
              
              <img src={ideLogo}  className="imagem_rodape " alt = "Ide Company"  ></img>
              
            </div>
             {/*<!--Grid column-->*/}
          </div>
           {/*<!--Grid row-->*/}
        </div>
        {/*<!-- Grid container -->*/}   
       
      </footer>
    </div>
  )
}
