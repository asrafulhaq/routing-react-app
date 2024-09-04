import { useParams } from "react-router-dom";
import { blogs } from "../../fake/data";

const BlogSingle = () => {
  const { postId } = useParams();

  const blog = blogs.find((data) => data.id == postId);

  return (
    <>
      <div className="container py-5">
        <h1 className="text-4xl">{blog.title}</h1>
        <img src={blog.photo} alt="" />
        <p>{blog.content}</p>
      </div>
    </>
  );
};

export default BlogSingle;
