import { useState } from "react";
import questions from "./data";
import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState({});

  function accord(id) {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  }

  return (
    <div className="container">
      {questions.map((item) => (
        <div className="childrenContainer" key={item.id}>
          <div className="titleNbuttons">
            {item.title}{" "}
            <button onClick={() => accord(item.id)}>
              {isOpen[item.id] ? "-" : "+"}
            </button>
          </div>
          <div className="info">{isOpen[item.id] && <div>{item.info}</div>}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
