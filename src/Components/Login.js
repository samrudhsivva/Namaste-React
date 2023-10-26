import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Login = () => {
  // Define the initial values for the form fields
  const initialValues = {
    email: "",
    password: "",
  };
  // Define the validation schema using Yup
  const validatior = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });
  // Function to handle form submission
  const handleSubmit = (values) => {
    // Handle your login logic here
    console.log("Form submitted with values:", values);
  };
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validatior}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="text" id="email" name="email" />
            <ErrorMessage name="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
