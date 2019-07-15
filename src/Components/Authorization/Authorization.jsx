import React from "react";
import "./Authorization.css";

import { ButtonsSign } from "../ButtonsSign/ButtonsSign";
import { ButtonCart } from "../ButtonCart/ButtonCart";

export function Authorization() {
  return (
    <div className="authorization">
      <ButtonsSign />
      <ButtonCart />
    </div>
  );
}
