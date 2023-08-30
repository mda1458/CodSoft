import { Link } from "react-router-dom";

const Page = () => {
  return (
    <section className="pt-20 bg-white h-screen">
      <div className="mx-auto max-w-screen-lg">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-center bg-cover h-[30rem] w-[32rem]">
              <h1 className="text-center text-5xl font-bold text-slate-900">
                404
              </h1>
            </div>

            <div className="mt-[-50px]">
              <h3 className="text-2xl font-semibold text-slate-900">
                Look like {"you're"} lost
              </h3>

              <p className="text-slate-600">The page you are looking for is not available!</p>

              <Link
                to="/dashboard"
                className="inline-block mt-4 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
