import React, { useState } from "react";
import { questions } from "./questions";

import { Card, Button } from "antd";
import { Typography } from "antd";

function redirect() {
  window.redirect("/");
}

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

  console.log(points);

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const question = questions[index];
  const options = question.options;
  const total = questions.length;

  return (
    <>
      <Title>Selecione uma resposta</Title>
      <Text>
        {index}/{total}
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
          onClick={
            index > total
              ? redirect
              : () => {
                  const type = options[answer].type;
                  setIndex(index + 1);
                  setPoints({ ...points, [type]: points[type] + 1 });
                  setAnswer("");
                }
          }
        >
          {index === total ? "Resultado" : "Próximo"}
        </Button>
      </Card>
    </>
  );
};
