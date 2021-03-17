import { AppBar, Container, Toolbar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./navbar.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "30px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Container fixed className={styles.Container}>
          <Toolbar className={styles.Toolbar}>
            <a href="/">
              <img
                src="/img/Logo1.svg"
                alt="Colors Logo"
                className={classes.logo}
              />
            </a>
            <Box mr={3}>
              <Button>Servicii</Button>
              <Button>Portfolio</Button>
              <Button>Despre noi</Button>
              <Button>Contacte</Button>
            </Box>
            <Box>
              <Button>
                <img src="/img/phone1.png"></img>068-111-919
              </Button>
              {/* <a><img src="/img/phone1.png"></img>068-111-919</a> */}
              <a>
                <img src="/img/pin1.png"></img>Ion Creanga 45
              </a>
              <a>
                MD<img src="/img/Polygon1.png"></img>
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
