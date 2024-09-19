import "./answerToQuestions.css";

import useFetch from "../../hooks/useFetch";
import Info from "../../service/info";

function AnswerToQuestions() {
  const { data: info } = useFetch(Info.getInfo);
  return (
    <div className="answer-to-questions">
      <div className="title">
        <h1>Savollaringiz bormi?</h1>
        <p>Hoziroq biz bilan bog'laning</p>
      </div>
      <a href={`tel:${info.telephone || ""}`} className="phone-number">
        {info.telephone || ""}
      </a>
    </div>
  );
}

export default AnswerToQuestions;
