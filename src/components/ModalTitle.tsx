import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

const TitleArea = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-contents: center;
`;

const Title = styled.h4`
  font-size: 1rem;
  color: white;
`;

interface IModal {
  title: React.ReactNode;
}
const ModalTitle: React.FC<IModal> = ({ title }) => {
  const themeContext = useContext(ThemeContext);

  console.log("Current theme: ", themeContext);
  return (
    <TitleArea>
      <Title>{title}</Title>
    </TitleArea>
  );
};

export default ModalTitle;
