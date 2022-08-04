import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GeneralLayout } from "../components/layouts";
import { Bienvenida } from "../components/presentacion";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <GeneralLayout title={"Home"} description={"página de inicio"}>
      <Bienvenida />
    </GeneralLayout>
  );
};

export default Home;
