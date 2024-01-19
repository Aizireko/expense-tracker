import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../UI/button/Button";

export const Modal = ({ onClose, id, onDeleteExpenseList }) => {
  return (
    <>
      <Backdrop></Backdrop>
      {ReactDOM.createPortal(
        <StyledContainer>
          <Title>Вы точно хотите удалить этот расход ?</Title>
          <StyledButtonsContainer>
            <Button onClick={onClose}>Нет</Button>
            <Button onClick={() => onDeleteExpenseList(id)}>Да</Button>
          </StyledButtonsContainer>
        </StyledContainer>,
        document.getElementById("modal")
      )}
    </>
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  displey: flex;
  justify-content: center;
  align-items: center;
  backgroun-color: black;
`;

const StyledContainer = styled("div")`
  width: 400px;
  height: 200px;
  position: fixed;
  top: 0;
  left: 0;
  background: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 40px;
`;

const Title = styled("p")`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

const StyledButtonsContainer = styled("div")`
  display: flex;
  gap: 40px;

  button {
    width: 100px;
  }
`;
