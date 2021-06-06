import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showTop } from "../redux/actions";

const TopScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showTop());
  }, []);

  return <h2>Top</h2>;
};

export default TopScreen;
