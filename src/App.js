import NavBar from "./components/nav/NavBar";
import {
    HashRouter as Router,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import BlogPost from "./pages/BlogPost/BlogPost";
import BlogEditor from "./pages/BlogEditor/BlogEditor";

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
            <Route exact path="/blog-post/:postId">
                <BlogPost />
            </Route>
        </Router>

    </div>
  );
}

export default App;
