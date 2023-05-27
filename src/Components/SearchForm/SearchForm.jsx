import { Formik } from "formik";

import * as SC from "../StyledComponents";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import queryContext from "../../context/queryContext";

const SearchForm = () => {
  const [inputValue, setInputValue] = useState("");
  const { search } = useContext(queryContext);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (inputValue) {
      timer = setTimeout(() => {
        search(inputValue);
        navigate("all");
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, search]);

  const handleChange = (evt) => {
    setInputValue(evt.currentTarget.value);
  };

  return (
    <Formik>
      <SC.FormSearch>
        <SC.SearchIcon size={28} />
        <SC.SearchInput
          type="text"
          placeholder="search games"
          onChange={handleChange}
        />
      </SC.FormSearch>
    </Formik>
  );
};

export default SearchForm;
