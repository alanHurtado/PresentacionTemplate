import Head from "next/head";
import { FC, ReactNode } from "react";
import { Copyright, Footer, NavBarColaboradores, NavbarUsers } from "../ui";

interface Props {
  title: string;
  description: string;
  keywords?: string;
  children: ReactNode;
}
export const ColoaboradoresLAyout: FC<Props> = ({
  title,
  description,
  children,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <nav>
        <NavBarColaboradores />
      </nav>
      <main>{children}</main>
      <footer>
        {/* <Footer /> */}
        <Copyright />
      </footer>
    </>
  );
};
