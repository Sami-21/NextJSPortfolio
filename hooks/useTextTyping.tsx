import { useState, useEffect } from "react";

enum Phase {
  Typing,
  Pause,
  Deleting,
}

const useTextTyping = (targetText: string, typeSpeed: number , inView:boolean) => {
  const [phase, setPhase] = useState(Phase.Typing);
  const [Text, setText] = useState(``);
  useEffect(() => {
    if(inView){
      setPhase(Phase.Typing);
    }
    else{
      setPhase(Phase.Deleting);
    }
    switch (phase) {
      case Phase.Typing: {
        const newText = targetText.slice(0, Text.length + 1);

        if (newText === targetText) {
          setPhase(Phase.Pause);
        }

        const timeout = setTimeout(() => {
          setText(newText);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }

      case Phase.Deleting: {
        if (Text ===  '') { 
          return;
        }
        
        const newText = targetText.slice(0, Text.length - 1);

        const timeout = setTimeout(() => {
          setText(newText);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }
      case Phase.Pause:
      default:
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, typeSpeed);
        return () => clearTimeout(timeout);
    }
  }, [targetText, Text, inView , phase]);

  return Text;
};

export default useTextTyping;
