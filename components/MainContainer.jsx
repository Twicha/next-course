import Head from "next/head";
import { Fragment } from "react";
import { Link } from "./A";

export const MainContainer = function ({ children, keywords }) {
  return (
    <Fragment>
      <Head>
        <meta keywords={"twchao, next, " + keywords} />
      </Head>
      <div className="navbar">
        <Link href="/">Main</Link>
        <Link href="/users">Users</Link>
      </div>
      <div>{children}</div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
          }
        `}
      </style>
    </Fragment>
  );
};
