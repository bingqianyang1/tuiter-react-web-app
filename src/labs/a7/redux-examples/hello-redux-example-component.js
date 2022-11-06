import React from "react";
// import useSelector hook from react-redux
import {useSelector} from "react-redux";

const HelloReduxExampleComponent = () => {
 // extract 'Hello World' from reducer
 const message = useSelector((state) => state.hello.message);
 return(
   // render <h1>Hello World</h1>
   <h3>{message}</h3>
 );
};

export default HelloReduxExampleComponent;







