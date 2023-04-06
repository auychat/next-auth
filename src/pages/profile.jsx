import { getSession } from "next-auth/react";
import Link from "next/link";

export default function profile() {
  return (
    <section className="container mx-auto text-center">
      <h3 className="text-4xl font-bold">Profile Page</h3>

      <div className="flex justify-center mt-10">
        <Link
          href={"/"}
          className="px-10 py-2 rounded-md bg-indigo-500 text-gray-50"
        >
          Home Page
        </Link>
      </div>
    </section>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        premanent: false,
      },
    };
  }

  //authorise user return session
  return {
    props: { session },
  };
}
