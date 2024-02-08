const HomeTV = ({
  title,
  paragraph,
  image,
  flexDirection,
  link,
  CategoryName,
}) => {
  return (
    <div className="w-full ">
      {/*  */}
      <div className="border-b-8 border-[#232323] w-full">
        <div
          className={`container mx-auto md:flex-row flex-col gap-8 lg:gap-0 flex items-center justify-between text-white px-16 py-4   ${flexDirection}`}
        >
          <div className=" w-full text-center lg:text-start">
            <h1 className="text-[32px] font-[700] lg:text-[48px] lg:font-[900] lg:mb-2">
              {title}
            </h1>
            <h2 className="text-[18px] lg:text-[24px] font-[400]">
              {paragraph}
            </h2>
            <button className="h-[56px] w-[203.66px] bg-[#C11119] rounded font-[500] text-[1.2rem] mt-4">
              <a
                className="w-full h-full inline-flex items-center justify-center"
                href={link}
              >
                {CategoryName}
              </a>
            </button>
          </div>
          <span className="w-full">
            <img src={image} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeTV;
