import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./counter";
import { TodoApp } from "./todoApp";
import { Product } from "./products";
import { AppBar, IconButton, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    "&.active": {
      background: "black",
    },
  },
});

export const RouterNavBar = () => {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <div>
          <nav>
            <AppBar position="static">
              <Toolbar position="center">
                <IconButton edge="start" color="inherit" arial-label="menu" />

                <Button>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/"
                  >
                    Todo App
                  </Link>
                </Button>

                <Button>
                  <NavLink
                    style={{ color: "white", textDecoration: "none" }}
                    to="/contador"
                    activeClassName={classes.button}
                  >
                    Contador
                  </NavLink>
                </Button>

                <Button>
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/productos"
                  >
                    Productos
                  </Link>
                </Button>
              </Toolbar>
            </AppBar>
          </nav>
        </div>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/contador" element={<Counter />}></Route>
          <Route path="/productos" element={<Product />}></Route>
          <Route path="/" element={<TodoApp />}></Route>
        </Routes>
      </div>
    </Router>
  );
};
