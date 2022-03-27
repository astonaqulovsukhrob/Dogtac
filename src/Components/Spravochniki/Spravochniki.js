import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import data from "../Tabs/DataTabs";
import { classItem, tabsItem } from "../../Redux/Actions";

function Spravochniki() {
  const tabs = useSelector((state) => state.allData?.tabs);
  const dispatch = useDispatch();
  const handleTabs = (list) => {
    const data = tabs?.find((item) => item.key == list.key);
    if (data) {
      return dispatch(tabsItem([...tabs]));
    } else {
      return dispatch(tabsItem([...tabs, list]));
    }
  };

  return (
    <>
      <h1 className="text-center mt-1 bold">Справочник</h1>
      <div className="content-spravochniki">
        {data.map((list) => (
          <div key={list.key} className="spravochniki-btn">
            <Link
              to={list.path}
              onClick={() => handleTabs(list)}
              className="btn btn-dark button"
            >
              {list.text}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Spravochniki;
