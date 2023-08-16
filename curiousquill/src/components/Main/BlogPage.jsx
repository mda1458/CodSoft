import { useParams } from "react-router-dom"

const BlogPage = () => {
    const {slug} = useParams();

  return (
    <div className="pt-20">
      <div className="text-yellow-500 text-xl">I am BlogPage</div>
      <div className="text-yellow-500 text-xl">Slug: {slug}</div>
    </div>
  )
}

export default BlogPage