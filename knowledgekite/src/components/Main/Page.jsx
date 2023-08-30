import { useParams } from "react-router-dom"

const Page = () => {
    const { name } = useParams()
  return (
    <div className="pt-24">I am Page with {name}</div>
  )
}

export default Page