/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from 'next/image';
import styles from "../../../styles/Home.module.css";
import IMG1 from "../../../assets/1.jpeg";
import IMG2 from "../../../assets/2.jpeg";
import IMG3 from "../../../assets/3.jpeg";
import IMG4 from "../../../assets/4.jpeg";
import IMG5 from "../../../assets/55.jpeg";
import IMG6 from "../../../assets/6.jpeg";
import dolar from "../../../assets/dolar22.png";
import estadistica from "../../../assets/estadistica.png";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
  {
    id: 2,
    image: IMG2,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
  {
    id: 3,
    image: IMG3,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
  {
    id: 4,
    image: IMG4,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
  {
    id: 5,
    image: IMG5,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
  {
    id: 6,
    image: IMG6,
    title: "Token Example",
    logo: dolar,
    descripcion: "",
    logo2: estadistica,
  },
];

const Header = () => {
  return (
    <section style={{position:"relative", top:"25px"}}>
      <div className={styles.Buscarcontainer}>
              <a className={styles.btnBuscar} style={{color:"black"}}>
              <SearchOutlinedIcon style={{position:"relative", right:"10px", top:"9px", transform:"scale(1.3"}}/>
                  Buscar
              </a>
      </div>
      <div className={styles.Homecontainer}>
        {data.map(({ id, image, title, logo, descripcion, logo2}) => {
          return (
            <article key={id} className={styles.Homeitem}>
              <div className={styles.Homeitemimage}>
                <Image src={image} alt={title} style={{borderRadius:"20px", color:"red"/* marginTop:"6px" */}}/>
              </div>
              <h3 style={{ margin:"1px", color:"#065D7B"}}>{title}</h3>
              <div className={styles.Homeitemim}>
              <Image src={logo} alt={title} style={{transform:"scale(0.55)"}}/>
              <a style={{color:"#FFFFFF",position:"relative",right:"36px", top:"12px", fontSize:"13px"}}>
                  Costo del token: <br/> $50.000
              </a>
                <Image src={logo2} alt={title} style={{ transform:"scale(0.75)"}}/>
              <a style={{color:"#FFFFFF",position:"relative",right:"10px", top:"12px", fontSize:"13px"}}>
                  Rentabilidad: <br/> 15%
              </a>
              </div>
              <div className={styles.Homeitemcta}>
              <a href={descripcion} className={styles.btnHome} target="_blank" rel="noreferrer" style={{color:"black"}}>
                  <strong >Participar</strong>
              </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Header;