import { useDispatch } from "react-redux";
import { reactionAdded } from "@/redux/slice/postSlice/postSlice";
import { PostType } from "@/types";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "💗",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ post }: { post: PostType }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    if (
      name === "thumbsUp" ||
      name === "wow" ||
      name === "heart" ||
      name === "rocket" ||
      name === "coffee"
    ) {
      return (
        <button
          key={name}
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      );
    }
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButton;
