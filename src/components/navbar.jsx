import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Counter } from "./counter";
import { TodoApp } from "./todoApp";
import { Product } from "./products";
import { AppBar, IconButton, Toolbar, Button } from "@mui/material";

export const RouterNavBar = () => (
  <Router>
    <div>
      <div>
        <nav>
          <AppBar position="static">
            <Toolbar position="center">
              <IconButton edge="start" color="inherit" arial-label="menu" />

              <Button>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  Todo App
                </Link>
              </Button>

              <Button>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to="/contador"
                >
                  Contador
                </Link>
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
