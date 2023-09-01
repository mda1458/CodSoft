import { useNavigate, useParams } from "react-router-dom";
import sanityClient, { urlFor } from "../../client";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { useEffect } from "react";

const Page = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name } = useParams();
  useEffect(() => {
    setCategory(null);
    window.scrollTo(0, 0);
    const getCategory = () => {
      sanityClient.fetch(`*[_type == "category"]`).then((data) => {
        if (data===null) navigate("/404");
        else setCategory(data.filter((item) => item.slug.current === name)[0]);
      });
    };
    const getContent = () => {
      sanityClient.fetch(`*[_type == "content"]`).then((data) => {
        data = data.filter((item) => item.type === name)
        console.log(data);
        data.forEach((item) => {
          const ref = item.pdf.asset._ref.slice(5, -4);
          const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
          const url = `https://cdn.sanity.io/files/${projectId}/production/${ref}.pdf?dl=${item.title}.pdf`;
          item.pdf = url;
        });
        setContent(data);
      });
    };
    setLoading(true);
    getCategory();
    getContent();
    setLoading(false);
  }, [name]);
  return (
    <div className="py-20 min-h-screen main">
      <div className="flex flex-col justify-center pt-8 mx-4 md:mx-16">
        {loading || category === null ? (
          <Loader />
        ) : 
          (<>
            <h1 className="text-slate-900 font-extrabold text-xl sm:text-5xl lg:text-6xl tracking-tight text-center font-sans">
              {category.title.toUpperCase()}
            </h1>
            <div className="text-slate-700 text-lg lg:text-xl pt-6">
              {category.description}
            </div>
            {/* Content card */}
            <div className="flex flex-wrap justify-center pt-8 -ml-12 w-screen gap-12">
            {content &&
              content.map((item) => (
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center pt-8 w-full lg:w-1/4"
                  key={item.slug.current}
                  >
                  <img
                    src={
                      urlFor(item.thumbnail) ||
                      "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
                    }
                    alt=""
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                  <div className="text-slate-900 font-extrabold text-md lg:text-xl tracking-tight text-center font-sans">
                    {item.title}
                  </div>
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
