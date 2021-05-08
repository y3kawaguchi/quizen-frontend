import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Table from "../containers/Table";
import { showList } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();

  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(showList());
  }, []);

  return <Table />;
};
