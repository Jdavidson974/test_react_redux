import React from "react";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { useSelector } from "react-redux";
import { isEmpty } from './components/Utils'
import Post from "./components/Post";

const App = () => {
  const posts = useSelector((state) => state.postReducer);
  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {!isEmpty(posts) &&
            posts.map((post, index) => <Post key={index} post={post} />)
          }
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;
