import React from "react";
import Accordion from "./Accordion/Accordion";

export default function FAQ() {
  const data = [
    {
      id: 1,
      header: "HOW LONG DO YOU TAKE TO WRITE MY PAPER?",
      text: " We deliver the paper within the reasonable time-frame specified by you. However, we recommend placing the order much in advance so that the writer gets enough time to do relevant research.",
    },
    {
      id: 2,
      header: "WHAT ARE YOUR GUARANTEES?",
      text: "We guarantee high quality assignments that are 100% plagiarism-free. We use the latest plagiarism-detection software and check the uniqueness of the assignment before delivering it to you. In case you find any plagiarism, we guarantee the full money refund. However we cannot guarantee your grade.",
    },
    {
      id: 3,
      header: " ARE THE ASSIGNMENTS PLAGIARISM-FREE?",
      text: "We guarantee 100% plagiarism-free assignments. The papers are delivered to you only after a proper plagiarism-check. ",
    },
    {
      id: 4,
      header: "DO YOU GUARANTEE CONFIDENTIALITY?",
      text: " We value your right to confidentiality and we ensure that your personal information and details regarding your order are completely confidential. We make sure that even the writer does not get to know your identity.",
    },
    {
      id: 5,
      header: "WILL YOU DELIVER THE ASSIGNMENT BY EMAIL?",
      text: " Yes, we will send you the completed assignment via email. It will be delivered to the ID that you give us while placing the order.",
    },
  ];
  return <Accordion data={data} />;
}
