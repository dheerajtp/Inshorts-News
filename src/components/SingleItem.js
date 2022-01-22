const SingleItem = ({ title, key, image, content, author, date, more }) => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden" key={key}>
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={title}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <p className="leading-relaxed">{content}</p>
              <div className="flex pt-2 justify-between">
                <span className="title-font font-medium text-l text-gray-900">
                  {author}
                </span>
                <span class="mt-1 text-gray-500 text-sm">{date}</span>
                <a class="text-indigo-500 inline-flex items-center" href={more}>
                  Read More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleItem;
