import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showTop } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(showTop());
  }, []);

  return <h2>Top</h2>;
};
