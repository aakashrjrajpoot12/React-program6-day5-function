import React from "react";

export default function Function(props) {
  console.log('pure Comp-function based');
 return (
 <>
   <h1>Function</h1>{props.number+1}
   </>);
 
}
//export default React.memo(FunctionMemo);
//export default Function;
//React.Memo()

