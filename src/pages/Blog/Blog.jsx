import { Link } from "react-router-dom";
import { blogs } from "../../fake/data";

const Blog = () => {
  return (
    <>
      <div className="page-content my-5">
        <div className="container">
          <h1 className="text-5xl font-bold text-center">Our Blog Page</h1>
          <p className="font-light w-1/2 mx-auto text-center my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            nesciunt quod iusto
          </p>

          <div className="blog-area w-3/4">
            {blogs.map((item) => {
              return (
                <div
                  key={item.id}
                  className="blog-item flex gap-4 mb-3 shadow-md p-3"
                >
                  <img
                    src={item.photo}
                    alt=""
                    className="w-[150px] h-[150px] object-cover rounded-md"
                  />
                  <div className="content">
                    <h2 className="font-bold text-xl">{item.title}</h2>
                    <p className="font-light">{item.content}</p>
                    <Link
                      className="py-2 px-3 bg-sky-400 rounded rounded-sm inline-block"
                      to={`/blog/${item.id}`}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
