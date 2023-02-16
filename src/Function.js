import React from "react";

export default function Function(props) {
  console.log('pure Comp-function based');
 return (
 <>
   <h1>Function</h1>{props.number+1}
   </>);
 
}
//export default Function;
//export default React.memo(FunctionMemo);
//React.Memo()

