"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const data = ["story", "protocol", "journal", "media", "gallery", "about"];

const main = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0)",
    transition: { type: "tween", duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    clipPath: "inset(0 100% 0 0)",
    transition: { type: "tween", delay: 0.2 },
  },
};

const menuTitle = {
  initial: { x: "-100%", opacity: 0 },
  animate: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.05 * i,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
  exit: (i: number) => ({
    x: "-100%",
    opacity: 0,
    transition: {
      type: "tween",
      delay: 0.05 * i,
      ease: "easeInOut",
    },
  }),
};

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex flex-col gap-1 2xl:gap-[0.3vw] cursor-pointer w-fit"
      >
        <span className="w-[40px] h-[1px] 2xl:w-[3vw] 2xl:h-[0.05vw] bg-black"></span>
        <span className="w-[30px] h-[1px] 2xl:w-[2.5vw] 2xl:h-[0.05vw] bg-black"></span>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={main}
            initial="initial"
            animate="animate"
            exit="exit"
            className="z-10 flex absolute top-[16px] left-0 md:left-[16px] min-h-[600px] h-[95vh] w-full md:w-[70%] lg:w-[45%] bg-black rounded-2xl 2xl:rounded-[1vw] overflow-hidden"
          >
            <div className="flex-[8] text-white relative h-full">
              <span className="text-xs absolute top-[32px] left-4 2xl:text-[0.75vw] 2xl:left-[1vw] 2xl:top-[2vw]">
                Discover.
              </span>
              <div className="h-[60%]">
                <div className="ml-4 mt-16 md:ml-40 md:mt-8 2xl:ml-[12vw] flex flex-col">
                  {data.map((item, i) => (
                    <motion.div
                      variants={menuTitle}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      key={i}
                      custom={i}
                    >
                      <Button Text={item} />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="h-[40%] flex flex-col justify-end pb-20 2xl:pb-[5vw]">
                <hr className="border-[#bebebe54]" />
                <div className="flex items-center ml-4 2xl:ml-[1vw] gap-[90px] py-4 2xl:py-[2vw]">
                  <span className="uppercase text-[10px] w-[25%] 2xl:text-[0.65vw]">
                    connect.
                  </span>
                  <div className="w-[75%]">
                    <div className="flex flex-col items-center justify-center w-fit">
                      <span className="uppercase text-xs 2xl:text-[0.75vw] leading-[130%]">
                        x
                      </span>
                      <span className="uppercase text-xs 2xl:text-[0.75vw] leading-[130%]">
                        discord
                      </span>
                    </div>
                  </div>
                </div>
                <hr className="border-[#bebebe54]" />
                <div className="flex items-center ml-4 2xl:ml-[1vw] gap-[90px] py-6 2xl:py-[2vw]">
                  <span className="uppercase text-[10px] w-[25%] 2xl:text-[0.65vw]">
                    buy on.
                  </span>
                  <div className="flex flex-col w-[75%]">
                    <span className="uppercase text-xs 2xl:text-[0.75vw]">
                      amazon
                    </span>
                  </div>
                </div>
                <hr className="border-[#bebebe54]" />
              </div>
            </div>
            <div className="flex-[1] text-white border-[#bebebe54] border-l h-full">
              <div
                onClick={() => setOpen(false)}
                className="cursor-pointer h-12 2xl:h-[4vw] flex flex-col relative"
              >
                <span className="w-[40px] h-[1px] 2xl:w-[3vw] 2xl:h-[0.05vw] bg-white rotate-45  absolute top-[32px] left-[50%] translate-x-[-50%]  2xl:top-[2vw]"></span>
                <span className="w-[40px] h-[1px] 2xl:w-[3vw] 2xl:h-[0.05vw] bg-white -rotate-45  absolute top-[32px] left-[50%] translate-x-[-50%]  2xl:top-[2vw]"></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
