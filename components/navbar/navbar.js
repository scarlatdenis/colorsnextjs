import { AppBar, Container, Toolbar, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
        <Container fixed>
          <Toolbar>
            <a href="/">
              <img
                src="/img/Logo1.svg"
                alt="Colors Logo"
                className={classes.logo}
              />
            </a>
            <Box>
              <Button>Servicii</Button>
              <Button>Portfolio</Button>
              <Button>Despre noi</Button>
              <Button>Contacte</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
