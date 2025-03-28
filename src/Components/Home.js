import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    // console.log("increment");

    count < 20 ? setCount(count + 1) : alert("You have Reach the Count");

    // if(count < 20){
    //     setCount(count + 1);
    // }else{
    //     alert("You have Reach the Count")
    // }
  };
  const decrement = () => {
    // console.log("decrement");

    count > 0 ? setCount(count - 1) : alert("You Have Exceed the Limit");

    // if(count > 0){
    //     setCount(count - 1);
    // }else{
    //     alert("You Have Exceed the Limit")
    // }
  };
  const reset = () => {
    // console.log("reset");
    setCount(0);
  };

  return (
    <div className="container home">
      <h1 className="count">Count : {count}</h1>
      <div className="btn-group">
        <button
          type="button"
          className="button"
          onClick={increment}
        >
          Increment
        </button>
        <button
          type="button"
          className="button"
          onClick={decrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="button"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Home;
