import { useRouter } from "next/router";
import React from "react";
const NavbarButtons = () => {
  const router = useRouter();

  return (
    <ul className="wrapper" style={{ padding: "1em 2em 0em 0" }}>
      <li
        onClick={() => router.push("https://wa.me/9729294982")}
        className="icon facebook"
      >
        <span className="tooltip">Whatsapp</span>
        <span>
          <i className="fab fa-whatsapp"></i>
        </span>
      </li>
      <li
        className="icon twitter"
        onClick={() =>
          router.push(
            "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=assignmint.enquiry@gmail.com&su=Assignment related enquiry"
          )
        }
      >
        <span className="tooltip">Gmail</span>
        <span>
          <i className="far fa-envelope"></i>
        </span>
      </li>
    </ul>
  );
};

export default NavbarButtons;
