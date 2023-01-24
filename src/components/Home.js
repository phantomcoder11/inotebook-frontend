import React from "react";
import Greeting from "./Greeting";
import Notes from "./Notes";
const Home = (props) => {
  const {showAlert} = props;
  return (
    <div className="container my-3">
   <Greeting />
   <Notes showAlert={showAlert}/>
    </div>
  );
};

export default Home;
