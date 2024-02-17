import AccordionItem from "./AcordionItem";

import styled from "@emotion/styled";

const Ul = styled.ul`
  list-style: none;
  margin: 0;
  width: 90%;
  margin: 0 auto;
  padding: 0;
  background-color: ${(props) => (props.theme === "dark" ? "#000" : "#fff")};
  border-radius: 0.4rem;
  box-shadow: 0 0 0.8rem 0.1rem rgba(15, 72, 179, 0.06),
    0 20px 30px -10px rgba(15, 72, 179, 0.2);
`;
const Li = styled.li`
  border-bottom: ${(props) =>
    props.theme === "dark" ? "#fff" : ".5px solid rgba(0, 0, 0, 0.1)"};

  &:last-of-type {
    border-bottom: none;
  }
`;

const Acordion = ({ data, theme }) => {
  return (
    <Ul>
      {data.map((data, key) => {
        return (
          <Li key={key}>
            <AccordionItem data={data} theme={theme} />
          </Li>
        );
      })}
    </Ul>
  );
};

export default Acordion;
