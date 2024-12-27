const Section2 = () => {
  return (
    <div className="w-full px-3 bg-[url('https://ekalblspindia.org/wp-content/uploads/2023/10/eductaion-crisis-bg.jpg')] bg-cover bg-fixed bg-center mt-5">
      <div className="md:w-[80%] lg:flex mx-auto w-full py-10 gap-x-5">
        <div className="w-full text-justify text-white">
          <h1 className="text-3xl md:text-4xl pb-8 text-nowrap">
            The Education Crisis
          </h1>
          <p>
            According to the United Nations Educational, Scientific and Cultural
            Organisation (UNESCO), as of 2020, a staggering 763 million young
            individuals and adults still lacked essential literacy skills.
            Recent crises – the COVID-19 pandemic, climate change impacts, and
            conflicts – have only worsened the existing challenges.
          </p>
          <p className="py-4">
            In India, in terms of education level, 9,30,531 children were
            identified as out of school at the elementary level and 3,22,488 at
            the secondary level. (National Education Ministry, 2022-23)
          </p>
          <p>
            The literacy rate in rural India is 67.77 per cent, while in urban
            India, it is 84.11 per cent. Although the literacy rate gap in urban
            and rural areas is steadily declining, the divide still exists.
          </p>
        </div>
        {/* text-[#faec19] */}
        <div className="w-full md:p-0 pt-10 text-[#faec19]">
          <h1 className="text-3xl font-semibold">1.2 Million</h1>
          <p className="leading-loose">Children out of school</p>
          <div className="hidden md:block md:w-[45%] h-20 mx-auto border-white border-[1px] border-b-0"></div>
          <div className="w-[90%] mx-auto flex flex-col md:flex-row">
            <div className="w-full py-3 md:py-0">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#646464] border-8 border-white flex justify-center items-center font-semibold text-2xl">
                9,30,531
              </div>
              <p className="text-xs">
                Children dropped out of scchool at the
                <strong className="font-bold mx-1">ELEMENTARY</strong>
                level
              </p>
            </div>
            <div className="w-full">
              <div className="w-32 h-32 mx-auto rounded-full bg-[#646464] border-8 border-white flex justify-center items-center font-semibold text-2xl">
                3,22,488
              </div>
              <p className="text-xs">
                Children dropped out of scchool at the
                <strong className="font-bold mx-1">SECONDARY</strong>
                level
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
