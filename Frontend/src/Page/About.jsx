import React from "react";
import Welcome from "../Components/Welcome";
import Team from "../Components/Team";

export default function About() {
  return (
    <React.Fragment>
      <Welcome button={false} />
      <Team />
    </React.Fragment>
  );
}
