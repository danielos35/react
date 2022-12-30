import React from "react";
import { useFetch } from "./hooks";

export const MultipleCustomHooks = () => {
  const url = "https://dog.ceo/api/breed/hound/images/random/1";
  const { data, hasError, isLoading } = useFetch(url);
  console.log(data, hasError, isLoading);
  return (
    <>
      <h1>Breaking bad</h1>
      <hr />
      <div>MultipleCustomHooks</div>;
    </>
  );
};
