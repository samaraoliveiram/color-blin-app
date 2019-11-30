import React, { useState } from "react";
import { questions } from "./questions";

import { navigate } from "@reach/router";

import { Card, Button, Form } from "antd";
import { Typography } from "antd";

const { Title } = Typography;
const { Text } = Typography;

const cardStyle = {
  width: "25%",
  textAlign: "center"
};

const cardSelected = {
  width: "25%",
  textAlign: "center",
  backgroundColor: "#f5f5f5"
};

export const TestScreen = () => {
  const [points, setPoints] = useState({
    N: 0,
    P: 0,
    D: 0,
    T: 0,
    I: 0
  });

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const question = questions[index];
  const options = question.options;
  const total = questions.length;

  console.log(index + 1);
  console.log(total);
  return (
    <>
      <Form onSubmit={() => navigate("/")}>
        <Title>Selecione uma resposta</Title>
        <Text>
          {index + 1}/{total}
        </Text>
        <Card
          style={{ width: "50%" }}
          cover={<img alt="example" width="120" src={`/${question.img}`} />}
        >
          {options.map((option, i) => (
            <Card.Grid
              key={option.value}
              hoverable={answer === i ? false : true}
              style={answer === i ? cardSelected : cardStyle}
              onClick={() => setAnswer(i)}
            >
              {option.value}
            </Card.Grid>
          ))}
          <Button
            onClick={() => {
              if (answer === null) {
                return window.alert("Selecione uma resposta");
              }
              const type = options[answer].type;
              setIndex(index + 1);
              type.map(value =>
                setPoints({
                  ...points,
                  [value]: points[value] + 1
                })
              );
              setAnswer("");
            }}
          >
            Próximo
          </Button>
        </Card>
      </Form>
    </>
  );
};
