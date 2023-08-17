import { Link } from "react-router-dom"
import "./blogCard.css"

const BlogCard = ({blog}) => {
  return (
	<article className="card w-1/3" key={blog.id}>
		<Link to={`/blog/${blog.id}`}>
			<header className="card__thumb">
				<img src={blog.img} />
			</header>
			<div className="card__body">
				<div className="card__title">{blog.title}</div>
				<p className="card__description">{blog.desc.slice(0, 200) + "..."}</p>
			</div>
		</Link>
	</article>
  )
}

export default BlogCard