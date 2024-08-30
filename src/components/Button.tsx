// "use client";
// import { useRef, useState } from "react";
// import { motion } from "framer-motion";

// // const CHARS = "!@#$%^&*():{};|,.<>/?";
// const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// export const Button = ({ Text }: { Text: string }) => {
//   const TARGET_TEXT = Text;
//   const CYCLES_PER_LETTER = 2;
//   const SHUFFLE_TIME = 50;
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const [text, setText] = useState(TARGET_TEXT);

//   const scramble = () => {
//     let pos = 0;

//     intervalRef.current = setInterval(() => {
//       const scrambled = TARGET_TEXT.split("")
//         .map((char, index) => {
//           if (pos / CYCLES_PER_LETTER > index) {
//             return char;
//           }

//           const randomCharIndex = Math.floor(Math.random() * CHARS.length);
//           const randomChar = CHARS[randomCharIndex];

//           return randomChar;
//         })
//         .join("");

//       setText(scrambled);
//       pos++;

//       if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
//         stopScramble();
//       }
//     }, SHUFFLE_TIME);
//   };

//   const stopScramble = () => {
//     clearInterval(intervalRef.current || undefined);

//     setText(TARGET_TEXT);
//   };

//   return (
//     <motion.button
//       style={{
//         clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0% 100%, 0 50%)",
//       }}
//       onMouseEnter={() => {
//         scramble();
//       }}
//       onMouseLeave={() => stopScramble()}
//       className="relative rounded-[3px] 2xl:rounded-[0.175vw] px-3 py-1 2xl:px-[0.75vw] 2xl:py-[0.35vw] uppercase bg-black text-white transition-colors hover:bg-white hover:text-black"
//     >
//       {/* Invisible placeholder text to maintain width */}
//       <span className="invisible font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
//         {TARGET_TEXT}
//       </span>

//       {/* Visible scrambling text */}
//       <span className="absolute top-[50%] left-2 2xl:left-[2%] translate-y-[-50%] font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
//         {text}
//       </span>
//     </motion.button>
//   );
// };

// scrambles on load after showning the original text

// "use client";
// import { useEffect, useRef, useState, useCallback } from "react";
// import { motion } from "framer-motion";

// // const CHARS = "!@#$%^&*():{};|,.<>/?";
// const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// export const Button = ({ Text }: { Text: string }) => {
//   const TARGET_TEXT = Text;
//   const CYCLES_PER_LETTER = 2;
//   const SHUFFLE_TIME = 50;
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   const [text, setText] = useState(TARGET_TEXT);
//   const [isScrambling, setIsScrambling] = useState(false); // Track if scrambling is active

//   const stopScramble = useCallback(
//     (resetText = true) => {
//       clearInterval(intervalRef.current || undefined);
//       setIsScrambling(false);

//       if (resetText) {
//         setText(TARGET_TEXT);
//       }
//     },
//     [TARGET_TEXT]
//   );

//   const scramble = useCallback(() => {
//     setIsScrambling(true);
//     let pos = 0;

//     intervalRef.current = setInterval(() => {
//       const scrambled = TARGET_TEXT.split("")
//         .map((char, index) => {
//           if (pos / CYCLES_PER_LETTER > index) {
//             return char;
//           }

//           const randomCharIndex = Math.floor(Math.random() * CHARS.length);
//           const randomChar = CHARS[randomCharIndex];

//           return randomChar;
//         })
//         .join("");

//       setText(scrambled);
//       pos++;

//       if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
//         stopScramble(false);
//       }
//     }, SHUFFLE_TIME);
//   }, [TARGET_TEXT, CYCLES_PER_LETTER, SHUFFLE_TIME, stopScramble]);

//   // Trigger scramble when the component mounts
//   useEffect(() => {
//     scramble(); // Run scramble on component load
//     // Cleanup function to clear the interval when the component unmounts
//     return () => clearInterval(intervalRef.current || undefined);
//   }, [scramble]); // Included scramble as a dependency

//   return (
//     <motion.button
//       style={{
//         clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0% 100%, 0 50%)",
//       }}
//       onMouseEnter={() => {
//         if (!isScrambling) scramble(); // Start scrambling only if not already scrambling
//       }}
//       onMouseLeave={() => stopScramble()} // Stop scrambling and reset to the target text
//       className="relative rounded-[3px] px-3 py-1 uppercase bg-black text-white transition-colors hover:bg-white hover:text-black"
//     >
//       {/* Invisible placeholder text to maintain width */}
//       <span className="invisible font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
//         {TARGET_TEXT}
//       </span>

//       {/* Visible scrambling text */}
//       <span className="absolute top-[50%] left-2 2xl:left-[2%] translate-y-[-50%] font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
//         {text}
//       </span>
//     </motion.button>
//   );
// };

// scrambles on load before showning the original text

"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

// const CHARS = "!@#$%^&*():{};|,.<>/?";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const Button = ({ Text }: { Text: string }) => {
  const TARGET_TEXT = Text;
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 50;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(""); // Start with an empty string to avoid showing the original text first
  const [isScrambling, setIsScrambling] = useState(false);

  // Function to generate an initial scrambled version of the text
  const initialScramble = (text: string) => {
    return text
      .split("")
      .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
      .join("");
  };

  const stopScramble = useCallback(
    (resetText = true) => {
      clearInterval(intervalRef.current || undefined);
      setIsScrambling(false);

      if (resetText) {
        setText(TARGET_TEXT);
      }
    },
    [TARGET_TEXT]
  );

  const scramble = useCallback(() => {
    setIsScrambling(true);
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble(false);
      }
    }, SHUFFLE_TIME);
  }, [TARGET_TEXT, CYCLES_PER_LETTER, SHUFFLE_TIME, stopScramble]);

  // Trigger scramble when the component mounts
  useEffect(() => {
    setText(initialScramble(TARGET_TEXT)); // Set initial scrambled text
    scramble(); // Start scrambling immediately
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalRef.current || undefined);
  }, [scramble, TARGET_TEXT]);

  return (
    <motion.button
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 0% 100%, 0 50%)",
      }}
      onMouseEnter={() => {
        if (!isScrambling) scramble(); // Start scrambling only if not already scrambling
      }}
      onMouseLeave={() => stopScramble()} // Stop scrambling and reset to the target text
      className="relative rounded-[3px] px-3 py-1 uppercase bg-black text-white transition-colors hover:bg-white hover:text-black"
    >
      {/* Invisible placeholder text to maintain width */}
      <span className="invisible font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
        {TARGET_TEXT}
      </span>

      {/* Visible scrambling text */}
      <span className="absolute top-[50%] left-2 2xl:left-[2%] translate-y-[-50%] font-black text-5xl 2xl:text-[3.5vw] tracking-tight">
        {text}
      </span>
    </motion.button>
  );
};
