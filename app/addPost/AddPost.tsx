"use client";
//@ts-check
import { HtmlHTMLAttributes, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "@/redux/slice/postSlice/postSlice";
import { useRouter } from "next/navigation";
import { selectAllUser } from "@/redux/slice/user/userSlice";
import { RootState } from "@/redux/store/store";
import { UserType } from "@/types";

const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUser);

  const dispatch = useDispatch();
  const router = useRouter();
  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const onContentChnage = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const onAuthorChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setUserId(e.target.value);

  const onSavePostClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  const userOption = users.map((res: UserType) => {
    return (
      <option key={res.id} value={res.id}>
        {res.name}
      </option>
    );
  });
  return (
    <>
      <div className="container">
        <h1>AddPostForm</h1>
        <section className="container">
          <form onSubmit={onSavePostClick}>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="postTitle"
                className="form-control"
                value={title}
                onChange={onTitleChange}
                id="postTitle"
                placeholder="title"
              />
              <label>Title</label>
            </div>
            <div className="form-floating mb-3">
              <select
                className="form-control"
                id="postAuthor"
                onChange={onAuthorChange}
              >
                <option value="">Select</option>
                {userOption}
              </select>
              <label>Select Author</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="postTitle"
                className="form-control"
                value={content}
                onChange={onContentChnage}
                id="postTitle"
                placeholder="title"
              />
              <label>Content</label>
            </div>
            <div className="d-flex justify-content-center">
              <button
                //   onClick={onSavePostClick}
                className="btn btn-primary btn-md mx-2"
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  //   e.preventDefault();
                  router.push("/post");
                }}
                className="btn btn-primary btn-md mx-2"
              >
                preview
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddPost;
