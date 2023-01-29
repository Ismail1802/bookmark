import React, { useState } from "react";
import SubHeading from "../../components/SubHeading";
import yummy from "../../constants/yummy";
import { ListVariants } from "../../constants/Variants";
const Faq = () => {
  const [showAnswer, setShowAnswer] = useState();

  const activeFaq = (id) => {
    if (id === showAnswer) {
      setShowAnswer(null);
    } else {
      setShowAnswer(id);
    }
  };

  return (
    <div className="app__faq">
      <SubHeading
        heading="Frequently Asked Questions"
        p="Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us."
      />
      <div className="app__faq_questions">
        {yummy.map((item, index) => {
          return (
            <div key={index}>
              <div
                className={showAnswer === item.id ? "border" : ""}
                onClick={() => {
                  activeFaq(item.id);
                }}
              >
                <p className="app__faq_questions_title">{item.title}</p>
                <svg
                  className={showAnswer === item.id ? "show" : ""}
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="#5267DF"
                    strokeWidth="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
              <div
                className={`app__faq_questions_answers ${
                  showAnswer === item.id ? "down" : ""
                }`}
              >
                <p variants={ListVariants}>{item.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button>More Info!</button>
    </div>
  );
};

export default Faq;
