import React  from 'react';


function Footer() {
    return (
        <div className="footer">
        <div className="container" >
        <div className="row">
          <div className="col-md-4">
    
            <legend>Anschrift</legend>
            <a href="#">
                <img src="https://www.addon-solution.de/fileadmin/templates/page.de/img/addon-logo-farbig.svg" className="hidden-xs" />
                </a>
                <br />
                  addON-Solution GmbH  <br />
                  Hans-Knöll-Straße 6 <br />
                  07745 Jena <br />
                  Link: <a href="#">www.addon-solution.de</a>
          </div>
    
          <div className="col-md-4">
            <legend>Kontakt</legend>
                Telefon: 03641-274110<br />
                E-Mail: <a data-toggle="modal" data-target="#myModal">info@eg-on.com</a> <br />
          </div>
    
         <div className="col-md-4">
             <legend>Downloads</legend>
            <a href="#">Leistungsbeschreibung</a>
          </div> 
          </div>
      </div>

      <div className="foot">
        <div className="" align="center" >
          <span>© 2017 addON Solution GmbH</span><span>|</span>
          <span>
              <a href="#">Impressum</a>
              </span>
              <span>
              <a href="#">Datenschutzerklärung</a>
              </span>
        </div>
      </div>
      </div>
    );
  }
  
  export default Footer;

