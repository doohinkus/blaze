import React from "react"
export default function MapArray({ mapFunc, array }) {
  // console.log(array, ">>>>", render);
  if (array) {
    return <React.Fragment>{array.map(mapFunc)}</React.Fragment>;
  }
  return null;
}