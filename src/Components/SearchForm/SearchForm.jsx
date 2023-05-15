import { Formik } from "formik";

import * as SC from "../StyledComponents"

const SearchForm = () => {
    return (
      <Formik>
            <SC.FormSearch>
                <SC.SearchIcon size={28}/>
          <SC.SearchInput type="text" placeholder="search games" />
        </SC.FormSearch>
      </Formik>
    );
};

export default SearchForm;
