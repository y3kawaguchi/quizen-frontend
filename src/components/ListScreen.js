import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../containers/Table";
import { showList } from "../redux/actions";

export default () => {
  const dispatch = useDispatch();
  const sideBarItem = useSelector((state) => state.quizen.sideBarItem);

  // https://ja.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
  useEffect(() => {
    dispatch(showList());
  }, [sideBarItem]);

  return <Table />;
};
