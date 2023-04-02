import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import styles from "@/styles/Form.module.css";
import Image from "next/image";

import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

export default function Login() {
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
            <span className="icon flex items-center py-4 pr-4">
              <HiAtSymbol size={25} className="fill-slate-400" />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center py-4 pr-4">
              <HiFingerPrint size={25} className="fill-slate-400" />
            </span>
          </div>

          {/* login buttons */}
          <div className={styles.input_group}>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className={styles.input_group}>
            <button type="button" className={styles.button_custom}>
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
        <p className="text-center text-gray-400 py-4">
          don{`'`}t have an account yet?{` `}
          <Link href={"/register"} className="text-blue-700">
            Sign Up
          </Link>
        </p>
      </section>
    </Layout>
  );
}
