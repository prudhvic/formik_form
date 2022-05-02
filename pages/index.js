import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useFormik } from "formik";
import * as YUP from "yup";
import { FaUserAlt, FaUserCircle, FaSignInAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
export default function Home() {
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: YUP.object({
      username: YUP.string()
        .max(15, "username should be maximum 15 characters")
        .required("username is required"),
      email: YUP.string()
        .email("email must be valid")
        .required("email is required"),
      password: YUP.string()
        .min(6, "password should be atleast 6 characters")
        .required("password is required"),
    }),
  });
  console.log(formik.errors);
  console.log(formik.values.username);
  return (
    <div className={styles.container}>
      <div className="form-container">
        <FaUserCircle color="white" fontSize={100} className="icon" />
        <h2>
          SignUp
          <FaSignInAlt />
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="username">username</label>
            <div className="user-input">
              <input
                type="text"
                id="username"
                name="username"
                onBlur={formik.handleBlur}
                value={formik.values.username}
                onChange={formik.handleChange}
              />
              <span className="user-icon">
                <FaUserAlt />
              </span>
            </div>

            <p className="error">
              {formik.touched.username &&
                formik.errors.username &&
                formik.errors.username}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <div className="user-input">
              <input
                type="email"
                id="email"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <span className="user-icon">
                <MdEmail />
              </span>
            </div>

            <p className="error">
              {formik.touched.email &&
                formik.errors.email &&
                formik.errors.email}
            </p>
          </div>
          <div className="form-control">
            <label htmlFor="password">password</label>
            <div className="user-input">
              <input
                type="password"
                id="password"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <span className="user-icon">
                <AiFillLock />
              </span>
            </div>

            <p className="error">
              {formik.touched.password &&
                formik.errors.password &&
                formik.errors.password}
            </p>
          </div>

          <button>submit</button>
        </form>
      </div>
      <img src="/logo.jpg" />
    </div>
  );
}
