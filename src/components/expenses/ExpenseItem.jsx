import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Button from "../UI/button/Button";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

const ExpenseItem = ({ title, amount, date, id, onDeleteExpenseList }) => {
  const [isModalVisible, setIsModalVisisble] = useState(false);

  const showModalVisbility = () => {
    setIsModalVisisble((prev) => !prev);
  };

  return (
    <>
      <div className="expense-item">
        <div className="container-text_date">
          <ExpenseDate date={date} />
          <h2>{title}</h2>
        </div>
        <div className="expense-itemdescription">
          <div className="expense-itemprice">${amount}</div>
          <Button onClick={showModalVisbility}>delete</Button>
        </div>
      </div>
      {isModalVisible && (
        <Modal
          onDeleteExpenseList={onDeleteExpenseList}
          id={id}
          onClose={showModalVisbility}
        />
      )}
    </>
  );
};

export default ExpenseItem;
