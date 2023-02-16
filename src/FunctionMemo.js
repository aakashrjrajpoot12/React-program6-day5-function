import React from "react";

 function FunctionMemo(props) {
  console.log('pure Comp-function based');
 return <>
   <h1>"FunctionMemo Demo"</h1>{props.number +1}
   </>;
 
}
export default React.memo(FunctionMemo);//This line makes FunctionMemo.js as pure component whereas function.js is not pure component

//since components are functions ,they can be memoized using react.memo()
//It prevents the component from rerendering unless the dependencies(props) have changed
//Note: Do not MEMOIZE every component,MEMOIZE only heavy components
