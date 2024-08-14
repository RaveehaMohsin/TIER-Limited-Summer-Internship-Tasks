import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import DisplayBlog from './Components/Display Blog/displayblog';

function App() {
  const blogsdata = JSON.parse(localStorage.getItem("All Blogs")) || [];
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/blog/:id"
          render={({ match }) => {
            const blog = blogsdata.find(b => b.id === match.params.id);
            return (
              <DisplayBlog
                title={blog?.title}
                authorname={blog?.authorname}
                datepublished={blog?.datepublished}
                FeaturedImage={blog?.FeaturedImage}
                content={blog?.content}
                Categories={blog?.Categories}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
