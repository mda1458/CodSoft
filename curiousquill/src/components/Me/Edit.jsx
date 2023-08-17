import { useParams } from "react-router-dom";

const Edit = () => {
    const { slug } = useParams();
  return (
    <div className="flex item-center justify-center pt-20">I am Editing {slug}</div>
  );
};

export default Edit;
