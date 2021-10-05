import React from "react";
import {
  Bharat,
  Rachel,
  Ryan,
  Scott,
  Sabrina,
  Riley,
  Jack,
  Himnish,
  Eddie,
  Dominic,
  Carter,
  Bradley,
  Billie,
  Colton,
} from "../../images/Images";
import styled, { AnyStyledComponent } from "styled-components";

const Title: AnyStyledComponent = styled.div`
  font-size: 4.5vw;
  color: #f47525;
  padding-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 1000px) {
    font-size: 8vw;
  }
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Grid: AnyStyledComponent = styled.div`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridItem: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
`;
const GridImage: AnyStyledComponent = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: auto;
`;

const Name: AnyStyledComponent = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  margin: auto;
  color: white;
`;
export default () => {
  return (
    <div>
      <FlexCenter>
        <Title>TEAM</Title>
      </FlexCenter>

      <Grid>
        <GridItem>
          <GridImage src={Bharat}></GridImage>

          <Name style={{ fontSize: "15.5px" }}>Bharat Sreekrishnavilas</Name>
        </GridItem>

        <GridItem>
          <GridImage src={Eddie}></GridImage>

          <Name>Edward Keith</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Riley}></GridImage>
          <Name>Riley Fuller</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Sabrina}></GridImage>
          <Name>Sabrina McRoberts</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Rachel}></GridImage>
          <Name>Rachel Liang</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Billie}></GridImage>
          <Name>Billie Huang</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Jack}></GridImage>
          <Name>Jack Stork</Name>
        </GridItem>

        <GridItem>
          <GridImage src={Ryan}></GridImage>
          <Name>Ryan Duffendack</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Bradley}></GridImage>
          <Name>Bradley Moore</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Colton}></GridImage>
          <Name>Colton Jacobson</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Scott}></GridImage>
          <Name>Scott Connor</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Carter}></GridImage>
          <Name>Carter Wagner</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Himnish}></GridImage>
          <Name>Himnish Sapkota</Name>
        </GridItem>
        <GridItem>
          <GridImage src={Dominic}></GridImage>
          <Name>Dominic Alberico</Name>
        </GridItem>
      </Grid>
    </div>
  );
};
