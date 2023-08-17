import { Link } from "react-router-dom"
import "./blogCard.css"
import { RiEditCircleFill, RiDeleteBin5Fill } from "react-icons/ri"

const BlogCard = ({blog, my}) => {
  return (
    <article className="card w-[90vw] md:w-1/3" key={blog.id}>
      <Link to={`/blog/${blog.id}`}>
        <header className="card__thumb">
          <img src={blog.img} />
        </header>
        <div className="card__body">
          <div className="card__title">{blog.title}</div>
          <p className="card__description">{blog.desc.slice(0, 200) + "..."}</p>
        </div>
      </Link>
      {my && (
        <div className="flex justify-around pb-4">
          <Link to={`/blog/edit/${blog.id}`}>
            <RiEditCircleFill className="text-xl hover:text-orange-500 hover:scale-105" />
          </Link>
          <Link to={`/blog/delete/${blog.id}`}>
            <RiDeleteBin5Fill className="text-xl hover:text-orange-500 hover:scale-105" />
          </Link>
        </div>
      )}
    </article>
  );
}

export default BlogCard