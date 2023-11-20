"use client";
import React, { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const MoveToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {show && (
        <div
          className="fixed bottom-10 right-20 text-white glass-effect text-3xl p-3 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <RiArrowUpLine />
        </div>
      )}
    </>
  );
};

export default MoveToTop;
