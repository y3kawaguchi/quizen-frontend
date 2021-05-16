import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showTop } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTop());
  }, []);

  return <h2>Top</h2>;
};
