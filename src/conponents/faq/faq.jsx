import { Col } from "react-bootstrap";
import MyButton from "../button/button";
import { useState } from "react";
import { dataQuestions, dataAnsvers, dataQuestions1 } from "./data.js";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React from "react";
import "../../index.css";

const Faq = () => {
  const [active, setActive] = useState("question");
  const [active1, setActive1] = useState("question1");

  const handleClick = (baba) => {
    setActive(baba);
    setActive1(""); // Сбрасываем второй уровень при смене первого
  };

  const handleClick1 = (baba) => {
    setActive1(baba);
  };

  return (
    <div className="container m-5">
      <div className="row">
        <Col xs={2}>
          {dataQuestions.map((question) => (
            <MyButton
              key={question.id}
              isActive={active === question.type}
              onClick={() => handleClick(question.type)}
              className="mt-2 w-100"
            >
              {question.name}
            </MyButton>
          ))}
        </Col>

        <Col xs={2}>
          {dataQuestions1.map(
            (question) =>
              active === question.typeof && (
                <MyButton
                  key={question.id}
                  isActive={active1 === question.type}
                  onClick={() => handleClick1(question.type)}
                  className="mt-2 show-element"
                >
                  {question.name}
                </MyButton>
              )
          )}
        </Col>

        <Col xs={6} className="position-relative">
          {dataAnsvers.map(
            (ansver) =>
              active1 === ansver.type && (
                <div className="block show-element mt-2">
                  <p className="">{ansver.name}</p>
                </div>
              )
          )}
        </Col>
      </div>
    </div>
  );
};

export default Faq;
