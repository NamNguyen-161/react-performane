import React from "react";
import { ButtonStyle } from "../../components/Button";

export interface Option1Props {}

export default function Option1(props: Option1Props) {
  return (
    <div>
      Option1
      <ButtonStyle type="primary">hello</ButtonStyle>
    </div>
  );
}
