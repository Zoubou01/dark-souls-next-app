import type { Metadata } from "next";
import Intro from "./components/home/page";
import styles from "./styles/layout.module.css";


export default function IndexPage() {
    // Request MovieList
  return (<>
  <div className={styles.main}>
    <div className="container xl flex align-end justify-around">
  <Intro/>
  </div>
  </div>
  </>);
}

export const metadata: Metadata = {
  title: "Welcome Traveler",
};
