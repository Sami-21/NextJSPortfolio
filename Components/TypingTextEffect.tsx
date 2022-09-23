// import React, { useEffect, useRef, useState } from "react";
// import Typed from "react-typed";

// const TypingTextEffect: React.FC = () => {
//     // Create reference to store the DOM element containing the animation
//     const el = useRef();
//     // Create reference to store the Typed instance itself
//     const typed = useRef();
//     useEffect(() => {
//       const options = {
//         strings: [
//           "Some <i>strings</i> are slanted",
//           "Some <strong>strings</strong> are bold",
//           "HTML characters &times; &copy;",
//         ],
//         typeSpeed: 50,
//         backSpeed: 50,
//       };

//       // elRef refers to the <span> rendered below
//       typed.current = new Typed(el.current, options);

//       return () => {
//         // Make sure to destroy Typed instance during cleanup
//         // to prevent memory leaks
//       };
//     }, []);
//   return <div className="w-screen h-20 bg-slate-100"></div>;
// };

// export default TypingTextEffect;
