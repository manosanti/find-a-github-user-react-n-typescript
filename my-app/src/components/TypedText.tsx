import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  text: string;
}

function TypedText({ text }: TypedTextProps) {
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings: [text],
      typeSpeed: 50,
      backSpeed: 50,
    };

    typedRef.current = new Typed(typedTextRef.current!, options);

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, [text]);

  useEffect(() => {
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  const resetTyped = () => {
    if (typedRef.current) {
      typedRef.current.reset();
    }
  };

  return <span ref={typedTextRef} onClick={resetTyped} />;
}

export default TypedText;
