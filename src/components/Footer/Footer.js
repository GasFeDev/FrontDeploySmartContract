import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import styled from "styled-components";
import logo from "../../../assets/3s.png";
import Image from 'next/image';

const Container = styled.div`
  display: flex;
  background-color: #010d11;
`;

const Left = styled.div`
  flex: 0.8;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-left: 45px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color:#ffffff;
  font-size: 15px;
`;

const SocialContainer = styled.div`
  display: flex;
  margin-left: 35px;
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
  margin-top: 10px;
  transform: scale(2);
`;

const Center = styled.div`
  flex: 0.8;
  padding: 20px;
  margin-right: 85px;
  margin-left: 100px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 100%;
  margin-bottom: 2px;
  margin-top:2px;
  color:#ffffff;
  font-size: 15px;
`;

const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 28px;
  margin-left: 20px;
  color:#ffffff;
`;

const Right = styled.div`
  flex: 0.8;
  padding: 10px;
`;


const Footer = () => {
  return (

    <Container>
      <Left>
        <Desc>
        Más de 10 años de estudios y resultados verificados nos respaldan, 
        como la mejor alternativa para lograr mejoras en parámetros de calidad de agua, 
        mejorar la oxigenación y recuperar la integridad ecológica de los cuerpos de agua 
        afectados por presiones antrópicas leves, moderadas o severas.
        </Desc>
        <SocialContainer>
          <SocialIcon color="010d11">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FacebookSharpIcon />
          </a>
          </SocialIcon>
          <SocialIcon color="010d11">
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          </SocialIcon>
          <SocialIcon color="010d11">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
          </SocialIcon>
          <SocialIcon color="010d11">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <List>
        <Image src={logo} alt="Logo" width="350px" height="250px"/>
        </List>
      </Center>
      <Right>
      <Title>Tecnologías</Title>
      <List>
          <ListItem>
          <InvertColorsSharpIcon style={{position:"relative", right:"6px", top:"7px", transform:"scale(0.8)", color:"#065D7B"}}/>
            Phycore
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon style={{position:"relative", right:"6px", top:"7px", transform:"scale(0.8)", color:"#065D7B"}}/>
            CMPM Phycore
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon style={{position:"relative", right:"6px", top:"7px", transform:"scale(0.8)", color:"#065D7B"}}/>
            BPP BioPowerPlant
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon style={{position:"relative", right:"6px", top:"7px", transform:"scale(0.8)", color:"#065D7B"}}/>
            BFPlus II
          </ListItem>
          <ListItem>
          <InvertColorsSharpIcon style={{position:"relative", right:"6px", top:"7px", transform:"scale(0.8)", color:"#065D7B"}}/>
            RvCM
          </ListItem>
        </List>
      </Right>
    </Container>
  );
};

export default Footer;