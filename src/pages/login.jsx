import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

import { HiAtSymbol, HiEye, HiEyeOff } from "react-icons/hi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  //Google Handler Function
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center py-4 px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span
              className="icon flex items-center py-4 px-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <HiEye size={25} /> : <HiEyeOff size={25} />}
            </span>
          </div>

          {/* login buttons */}
          <div className={styles.input_group}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className={styles.input_group}>
            <button
              type="button"
              className={styles.button_custom}
              onClick={handleGoogleSignin}
            >
              Sign In with Google{" "}
              <Image
                src={"/assets/google.svg"}
                width="20"
                height="20"
                alt="googleicon"
              />
            </button>
          </div>

          <div className={styles.input_group}>
            <button type="button" className={styles.button_custom}>
              Sign In with Github{" "}
              <Image
                src={"/assets/github.svg"}
                width="25"
                height="25"
                alt="githubicon"
              />
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400 py-4 ">
          don{`'`}t have an account yet?{` `}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
