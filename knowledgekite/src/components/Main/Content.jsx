import { useParams } from "react-router-dom"

const Content = () => {
    const { name, slug } = useParams()
  return (
    <div className="pt-24">I am Content with {name} and {slug}</div>
  )
}

export default Content