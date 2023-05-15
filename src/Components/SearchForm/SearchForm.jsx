import { Field, Form, Formik } from "formik";

const SearchForm = () => {
    return <Formik>
        <Form>
            <Field type="text" placeholder="search games"/>
      </Form>
  </Formik>;
};

export default SearchForm;
