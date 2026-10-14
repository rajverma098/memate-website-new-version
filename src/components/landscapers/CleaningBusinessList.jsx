"use client";

import React, { useEffect, useState } from "react";

const CleaningBusinessList = () => {
  const words = [
    {
      before: "Simple to ",
      highlight: "use",
      className: "colorFirst"
    },
    {
      before: "Simplicity at ",
      highlight: "work",
      className: "colorSecond"
    },
    {
      before: "Simple to set ",
      highlight: "up",
      className: "colorThird"
    },
  ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    const fullText = current.before + current.highlight;

    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.substring(0, text.length + 1));

        if (text.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(fullText.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  const current = words[index];

  const beforeLength = current.before.length;

  return (
    <div className="cleaningBusinessListWrap">
      <div className="ListWrap wordRotate">
        {text.length <= beforeLength ? (
          <span>{text}</span>
        ) : (
          <>
            <span>{text.substring(0, beforeLength)}</span>
             <span className={`highlight ${current.className}`}>
              {text.substring(beforeLength)}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CleaningBusinessList;