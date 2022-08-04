import Head from "next/head";
import { FC, ReactNode } from "react";
import { Copyright, Footer, NavbarGeneral } from "../ui";
interface Props {
  title: string;
  description: string;
  keywords?: string;
  children: ReactNode;
}
export const GeneralLayout: FC<Props> = ({
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
        <NavbarGeneral />
      </nav>
      <main>{children}</main>
      <footer>
        {/* <Footer /> */}
        <Copyright />
      </footer>
    </>
  );
};
