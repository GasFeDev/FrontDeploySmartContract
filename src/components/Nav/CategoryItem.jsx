/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 0px;
  height: 20vh;
  width: 100vw;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
`;

const Title = styled.h1`
    color:black;
    margin-bottom: -20px;
    margin-top: 0px;
    margin-left: 110px;
    color: #ffffff;
    font-size: 67px;
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>

      <Image src={item.img} layout="fill"/>
      <Info >
        <Title>{item.title1}</Title>
        <Title>{item.title2}</Title>
      </Info>
    </Container>
  );
};

export default CategoryItem;