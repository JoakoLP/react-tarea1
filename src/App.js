import './App.css';
import Titulo from './components/Titulo';
import Descr from './components/Descr';
import Tarjeta from './components/Tarjeta';
import Wordpress from './img/type-wordpress.svg'
import HTML from './img/type-html5.svg'
import Img1 from './img/1.webp';
import Img2 from './img/2.webp';
import Img3 from './img/3.jpg';
import Img4 from './img/4.webp';
import Img5 from './img/5.webp';
import UKR from './img/ukr.svg';
import RocketFull from './components/RocketFull';
import Rockets from './components/Rockets';
import RocketsDgrd from './components/RocketsDgrd';

function App() {
  
  return (
    <div className="App">

    <Titulo>Trending</Titulo>
    <Descr>Check the hottest website designs of the week. These rising stars are worth your attention.</Descr>
      <div className='cont'>

        <Tarjeta
          img={Img1} imgAlt="Monstroid2"
          type={Wordpress}
          url="https://www.templatemonster.com/wordpress-themes/monstroid2.html"
          title="Monstroid2 - Multipurpose Modular WordPress Elementor Theme"
          author="ZEMEZ"
          ctry={UKR}
          rocket={<RocketFull/>}
          sales="13802"
          price="82"
          />

        <Tarjeta
          img={Img2} imgAlt="Multiporpose"
          type={HTML}
          url="https://www.templatemonster.com/intense-multipurpose-html-template.html"
          title="Multipurpose Intense - #1 HTML Bootstrap Website Template"
          author="ZEMEZ"
          ctry={UKR}
          rocket={<RocketFull/>}
          sales="4,072"
          price="61"
          />

        <Tarjeta
          img={Img3} imgAlt="Poket"
          type={Wordpress}
          url="https://www.templatemonster.com/wordpress-themes/poket-business-and-multipurpose-responsive-wordpress-theme-220512.html"
          title="Poket -  Business And Multipurpose  Responsive WordPress Theme"
          author="WPEXPERT"
          ctry=""
          rocket={<RocketsDgrd/>}
          sales="465"
          price="35"
          />
          
          <Tarjeta
          img={Img4} imgAlt="Techno"
          type={Wordpress}
          url="https://www.templatemonster.com/wordpress-themes/techno-it-solution-service-wordpress-theme-94212.html"
          title="Techno - IT Solutions & Business Service WordPress Theme"
          author="DreamIT"
          ctry=""
          rocket={<Rockets/>}
          sales="1,195"
          price="69"
          />

        <Tarjeta
          img={Img5} imgAlt="Starbis"
          type={HTML}
          url="https://www.templatemonster.com/website-templates/starbis.html"
          title="Starbis - Business Multipurpose Bootstrap 5 Website Template"
          author="ZEMEZ"
          ctry={UKR}
          rocket={<RocketFull/>}
          sales="790"
          price="61"
        />
      </div>
      <a href='https://www.templatemonster.com/' target="_blank" style={{fontSize:"15px", position:"fixed", bottom:"10px"}}>Página de referencia.</a>

    </div>
  );
}

export default App;
