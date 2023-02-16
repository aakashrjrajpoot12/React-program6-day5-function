import React from "react";

 function FunctionMemo(props) {
  console.log('pure Comp-function based');
 return <>
   <h1>"FunctionMemo Demo"</h1>{props.number +1}
   </>;
 
}
export default React.memo(FunctionMemo);
//export default Function;
//React.Memo()