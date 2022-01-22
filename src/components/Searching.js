import searching from "../images/searching.gif";

const Searching = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="searching"
          className="lg:full w-full mx-auto h-64 object-cover object-center rounded"
          src={searching}
        />
      </div>
    </div>
  );
};

export default Searching;
