import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const params = useParams();
  const id = params.id;

  if (id === undefined || id === null || id === "") {
    throw new Error("id undefined");
  }

  return (
    <div>
      <h1>Detail - {id}</h1>
    </div>
  );
}
