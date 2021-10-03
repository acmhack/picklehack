import React from "react";
import Header from "./Header";
import FAQ from "./FAQ";
import Schedule from "./Schedule";
import Navbar from "../common/Navbar/Navbar";
import styled, { AnyStyledComponent } from "styled-components";

const FlexContainer: AnyStyledComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexCenter: AnyStyledComponent = styled.div`
  justify-content: center;
  display: flex;
  width: 100%;
`;

const Constraint: AnyStyledComponent = styled.div`
  display: flex;
  width: 1000px;
`;
const SectionDiv: AnyStyledComponent = styled.section`
  padding-bottom: 8%;
  padding-top: 8%;
`;
export default () => {
  return (
    <div>
      <Navbar />

      <FlexCenter>
        <Constraint>
          <FlexContainer>
            <SectionDiv id="header">
              <Header />
            </SectionDiv>

            <SectionDiv id="schedule">
              <Schedule />
            </SectionDiv>

            <SectionDiv id="faq">
              <FAQ />
            </SectionDiv>
          </FlexContainer>
        </Constraint>
      </FlexCenter>
    </div>
  );
};
