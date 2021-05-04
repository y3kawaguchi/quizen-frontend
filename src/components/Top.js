import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showTop } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const sideBarItem = useSelector((state) => state.quizen.sideBarItem);

  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(showTop());
  }, [sideBarItem]);

  return <h2>Top</h2>;
};
