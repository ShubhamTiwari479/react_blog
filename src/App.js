import NavBar from "./components/nav/NavBar";
import {
    HashRouter as Router,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import BlogEditor from "./pages/BlogEditor";

function App() {
  return (
    <div>
        <NavBar />
        <Router>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/blog-editor">
                <BlogEditor />
            </Route>
            <Route exact path="/blog-post">
                <BlogPost />
            </Route>
        </Router>

    </div>
  );
}

export default App;
