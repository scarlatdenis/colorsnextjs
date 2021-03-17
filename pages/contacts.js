import Button from "@material-ui/core/Button";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
}));

export default function Contacts() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>web developer blog</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log in</Button>
          </Box>
          <Button color="secondary" variant="contained">Sign in</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
