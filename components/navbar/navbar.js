import { AppBar, Container, Toolbar, Box } from "@material-ui/core";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <a href="/">
              <img src="/img/Logo1.svg" alt="Colors Logo" />
            </a>
            <Box></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
