import { useState } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [session, setSession] = useState(true);

  return (
    <>
      <Head>
        <title>Homepage | Next Auth</title>
      </Head>
      <main className={styles.main}>{session ? User() : Guest()}</main>
    </>
  );
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>
      <div className="flex justify-center">
        <Link
          href={"/login"}
          className="mt-5 px-10 py-2 rounded-md bg-indigo-500 text-gray-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

// Authorize User
function User() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>Unknown</h5>
        <h5>Unknown</h5>
      </div>

      <div className="flex justify-center">
        <button className="mt-5 px-10 py-2 rounded-md bg-indigo-500 text-gray-50">
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/profile"}
          className="mt-5 px-10 py-2 rounded-md bg-indigo-500 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  );
}
