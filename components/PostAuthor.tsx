import { useSelector } from "react-redux";
import { selectAllUser } from "@/redux/slice/user/userSlice";
import { PostAuthorType } from "@/types";
const PostAuthor = ({ userId }: PostAuthorType) => {
  const user = useSelector(selectAllUser);
  const author = user.find((res) => res.id === userId);
  return <span>by{author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
