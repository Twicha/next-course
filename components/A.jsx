import NextLink from "next/link";
import styles from "../styles/A.module.css";

export const Link = function ({ children, href }) {
  return (
    <NextLink href={href}>
      <a className={styles.link}>{children}</a>
    </NextLink>
  );
};
