import { useParams } from "react-router-dom"

const BlogPage = () => {
    const {slug} = useParams();

  return (
    <div>I am the blog page with id {slug||"Undefined"}</div>
  )
}

export default BlogPage