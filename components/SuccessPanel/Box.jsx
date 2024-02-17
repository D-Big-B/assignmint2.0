import React, { useEffect, useRef, useState } from "react";
import styles from "./SuccessPanel.module.css";

const Box = (props) => {
  const [boxActive, setboxActive] = useState(false);
  const useStyles = {
    boxShadow: "-14px -14px 27px #d0d0d0,14px 14px 27px #ffffff",
    background: "#f5f5f5",
  };
  const boxRef = useRef();

  const handleClickOutside = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setboxActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={boxRef} id={styles.box} className={props.className}>
      {props.children}
    </div>
  );
};

export default Box;
