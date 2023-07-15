"use client";
import AddPost from "../addPost/AddPost";
import PostList from "./postList";

const Home = () => {
  return (
    <>
      <div className="container">
        <PostList />
        {/* <AddPost /> */}
      </div>
    </>
  );
};

export default Home;
