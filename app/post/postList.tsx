"use client";
import PostAuthor from "@/components/PostAuthor";
import ReactionButton from "@/components/ReactionButton";
import TimeAgo from "@/components/TimeAgo";
import { selectAllPost } from "@/redux/slice/postSlice/postSlice";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  //   const post = useSelector((state: RootState) => state.post);
  const post = useSelector(selectAllPost);
  const orderedPosts = post
    .slice()
    .sort((a, b) => b.date.toISOString().localeCompare(a.date.toISOString()));

  const renderedPosts: React.ReactElement[] = orderedPosts.map((res) => {
    return (
      <article key={res.id} className="container">
        <h3>{res.title}</h3>
        <p>{res.content}</p>
        <p>{res.userId ? <PostAuthor userId={res.userId} /> : ""}</p>
        <p>
          {" "}
          <TimeAgo timestamp={res.date} />{" "}
        </p>
        <ReactionButton post={res} />
      </article>
    );
  });
  return (
    <>
      <div>
        <h2>Posts</h2>
        {renderedPosts}
      </div>
    </>
  );
};

export default PostList;
