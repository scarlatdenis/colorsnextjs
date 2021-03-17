import Head from "next/head";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>

            <a href="/" ><img src="/img/Logo1.svg" alt="Colors Logo"/></a>

          </Toolbar>
        </Container>
      </AppBar>
      
    </div>
  );
}

