
const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-center max-w-5xl pt-24 mx-4 md:mx-auto">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
        Explore Limitless{" "}
        <span className="text-[var(--primary-color)]">Books</span>, One
        Constellation at a Time!
      </h1>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
        A captivating reading adventure, fueled by your insatiable curiosity.
        Let the pages of {"BookWorm's"} Haven transport you to a sanctuary where
        knowledge reigns supreme, and every reader finds solace in the company
        of words.
      </p>
    </div>
  );
}

export default Dashboard