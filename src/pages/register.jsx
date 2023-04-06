import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import styles from "@/styles/Form.module.css";
import { registerValidate } from "@/lib/validate";

import { HiOutlineUser, HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";
import { useFormik } from "formik";

export default function Register() {
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: registerValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}

        <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
          <div
            className={`${styles.input_group} ${
              formik.errors.username && formik.touched.username
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25} />
            </span>
          </div>
          {formik.errors.username && formik.touched.username ? (
            <span className="text-rose-500 text-sm">
              {formik.errors.username}
            </span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500 text-sm">{formik.errors.email}</span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${showPassword.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center py-4 px-4"
              onClick={() =>
                setShowPassword({
                  ...showPassword,
                  password: !showPassword.password,
                })
              }
            >
              {showPassword.password ? (
                <HiEye size={25} />
              ) : (
                <HiEyeOff size={25} />
              )}
            </span>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500 text-sm">
              {formik.errors.password}
            </span>
          ) : (
            <></>
          )}

          <div
            className={`${styles.input_group} ${
              formik.errors.confirmPassword && formik.touched.confirmPassword
                ? "border-rose-600"
                : ""
            }`}
          >
            <input
              type={`${showPassword.confirmPassword ? "text" : "password"}`}
              name="confirmPassword"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("confirmPassword")}
            />
            <span
              className="icon flex items-center py-4 px-4"
              onClick={() =>
                setShowPassword({
                  ...showPassword,
                  confirmPassword: !showPassword.confirmPassword,
                })
              }
            >
              {showPassword.confirmPassword ? (
                <HiEye size={25} />
              ) : (
                <HiEyeOff size={25} />
              )}
            </span>
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <span className="text-rose-500 text-sm">
              {formik.errors.confirmPassword}
            </span>
          ) : (
            <></>
          )}

          {/* Register buttons */}
          <div className={styles.input_group}>
            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="texxt-center text-gray-400">
          Have an account?{` `}
          <Link href={"/login"} className="text-blue-700">
            Sign In
          </Link>
        </p>
      </section>
    </Layout>
  );
}
