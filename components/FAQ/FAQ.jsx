import React from "react";
import Accordion from "./Acordion/Acordion";

export default function FAQ() {
  const data = [
    {
      title: "HOW LONG DO YOU TAKE TO WRITE MY PAPER?",
      paragraph:
        " We deliver the paper within the reasonable time-frame specified by you. However, we recommend placing the order much in advance so that the writer gets enough time to do relevant research.",
    },
    {
      title: "WHAT ARE YOUR GUARANTEES?",
      paragraph:
        "We guarantee high quality assignments that are 100% plagiarism-free. We use the latest plagiarism-detection software and check the uniqueness of the assignment before delivering it to you. In case you find any plagiarism, we guarantee the full money refund. However we cannot guarantee your grade.",
    },
    {
      title: " ARE THE ASSIGNMENTS PLAGIARISM-FREE?",
      paragraph:
        "We guarantee 100% plagiarism-free assignments. The papers are delivered to you only after a proper plagiarism-check. ",
    },
    {
      title: "DO YOU GUARANTEE CONFIDENTIALITY?",
      paragraph:
        " We value your right to confidentiality and we ensure that your personal information and details regarding your order are completely confidential. We make sure that even the writer does not get to know your identity.",
    },
    {
      title: "WILL YOU DELIVER THE ASSIGNMENT BY EMAIL?",
      paragraph:
        " Yes, we will send you the completed assignment via email. It will be delivered to the ID that you give us while placing the order.",
    },
  ];
  return <Accordion data={data} theme="dark" />;
}
