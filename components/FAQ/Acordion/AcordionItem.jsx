import { useState } from "react";
import styles from "./Acordion.module.css";
import styled from "@emotion/styled";

const Item = styled.div`
  background-color: #111;
  margin-bottom: 10px;
`;
const HeaderContainer = styled.div`
  padding: 0.8rem 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) =>
    props.theme === "dark" ? "rgba(0,0,0,.3)" : "#fff"};

  //rgba(0,0,0,.3)
  cursor: pointer;
  border-bottom: ${(props) =>
    props.theme === "dark"
      ? ".5px solid #000"
      : ".5px solid rgba(0, 0, 0, 0.1)"};
`;
const Title = styled.h3`
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  text-transform: capitalize;
`;

const Open = styled.svg`
  margin-top: 15px;
  align-items: center;
  width: 20px;
  height: 20px;
  fill: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
  -webkit-transform: translateY(-50%) rotate(-45deg);
  -moz-transform: translateY(-50%) rotate(-45deg);
  -ms-transform: translateY(-50%) rotate(-45deg);
  -o-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);

  &.rotate-svg {
    fill: ${(props) => (props.theme === "dark" ? "#fff" : "#000")};
    -webkit-transform: translateY(-50%) rotate(-90deg);
    -moz-transform: translateY(-50%) rotate(-90deg);
    -ms-transform: translateY(-50%) rotate(-90deg);
    -o-transform: translateY(-50%) rotate(-90deg);
    transform: translateY(-50%);
  }
`;
const BodyContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1) 0s;
`;
const Content = styled.div`
  opacity: 0;
  transform: translateY(-1rem);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 0 1.2rem 1.2rem;
`;
const Paragraph = styled.p`
  margin: 0;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.3;
  color: #fff;
  /* text-align: center; */
`;

const AcordionItem = ({ data, theme }) => {
  const [opened, setOpened] = useState(false);
  const { title, paragraph } = data;

  const handleViewQuestion = () => {
    setOpened(!opened);
  };
  return (
    <Item
      className={`${styles.accordionItem}, ${
        opened && styles.accordionItemOpened
      }`}
      onClick={handleViewQuestion}
      theme={theme}
    >
      <HeaderContainer theme={theme}>
        <Title theme={theme}>{title}</Title>

        <Open
          id="thin-x"
          viewBox="0 0 26 26"
          className={`svg-icon svg-icon-thin-x svg-closed ${
            opened ? "rotate-svg" : null
          } } `}
          focusable="true"
          theme={theme}
        >
          <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
        </Open>
      </HeaderContainer>
      <BodyContainer className={styles.accordionItem__inner}>
        <Content className={styles.accordionItem__content}>
          <Paragraph theme={theme} className={styles.accordionItem__paragraph}>
            {paragraph}
          </Paragraph>
        </Content>
      </BodyContainer>
    </Item>
  );
};

export default AcordionItem;
