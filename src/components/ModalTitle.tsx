import styled from "styled-components";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import CLoseButton from "./CloseButton";
import ThemeSwitcher from "./ThemeSwitcher";

const TitleArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h4`
  font-size: 1em;
  font-weight: normal;
  color: ${(props) => props.theme.textColor};
`;

const OperationWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
interface IModal {
  title: React.ReactNode;
}
const ModalTitle: React.FC<IModal> = ({ title }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TitleArea>
      <Title>{title}</Title>
      <OperationWrapper>
        <ThemeSwitcher />
        <CLoseButton />
      </OperationWrapper>
    </TitleArea>
  );
};

export default ModalTitle;
