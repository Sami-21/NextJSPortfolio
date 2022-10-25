import { useState, useEffect } from "react";

enum Phase {
  Typing,
  Pause,
  Deleting,
}

const useTextTyping = (
  targetText: string,
  typeSpeed: number,
  inView: boolean
): string => {
  const [phase, setPhase] = useState(Phase.Pause);
  const [Text, setText] = useState(``);
  useEffect(() => {
    if (inView) {
      setPhase(Phase.Typing);
    } else {
      setPhase(Phase.Deleting);
    }
    switch (phase) {
      case Phase.Typing: {
        if (Text === targetText) {
          return;
        }
        const newText = targetText.slice(0, Text.length + 1);

        const timeout = setTimeout(() => {
          setText(newText);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (Text.length === 0) {
          return;
        }
        const newText = targetText.slice(0, Text.length - 1);
        const timeout = setTimeout(() => {
          setText(newText);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [targetText, Text, inView, typeSpeed, phase]);

  return Text;
};

export default useTextTyping;
