import { Container } from "react-bootstrap";
import styles from "./background1.module.css";

export default function Background1() {
  return (
    <>
        <img className={styles.bg} src="../../../img/bg1.png"></img>
        <img className={styles.solutia} src="../../../img/solutia.png" />
    </>
  );
}
