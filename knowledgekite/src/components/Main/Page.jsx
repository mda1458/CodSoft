import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import { useState } from "react";
import Loader from "../Loader/Loader";

const Page = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  sanityClient.fetch(`*[_type == "category"]`).then((data) => {
    setCategory(data.filter((item) => item.slug.current === name)[0]);
    setLoading(false);
  });
  return (
    <div className="pt-20">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col justify-center pt-8 mx-4 md:mx-16">
          <h1 className="text-slate-900 font-extrabold text-xl sm:text-5xl lg:text-6xl tracking-tight text-center font-sans">
            {category.title.toUpperCase()}
          </h1>
          <div className="text-slate-700 text-lg lg:text-xl pt-6">
            {category.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
