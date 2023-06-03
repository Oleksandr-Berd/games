import { Formik } from "formik";

import * as SC from "./SearchFormStyled";
import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryContext from "../../context/queryContext";

const SearchForm = () => {
  const [inputValue, setInputValue] = useSearchParams();
  const { search } = useContext(queryContext);
  const navigate = useNavigate();

  const query = inputValue.get("query")

  useEffect(() => {
    let timer;
    if (query) {

    
      timer = setTimeout(() => {
        search(query);
        navigate("all");
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
      
    };
  }, [query, navigate, search, setInputValue]);

  const handleChange = (evt) => {

const value = evt.target.value;

    const nextParams = value !== "" ? {query:value} : {};
   
    setInputValue(nextParams);
  };

  return (
    <Formik>
      <SC.FormSearch>
        <SC.SearchIcon size={28} />
        <SC.SearchInput
          id="query"
          type="text"
          placeholder="search games"
          onChange={handleChange}
          value={query || ""}
        />
      </SC.FormSearch>
    </Formik>
  );
};

export default SearchForm;
