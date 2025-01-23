import "react";

// Photos
import slide_03 from "../assets/images/slide_03.jpg";
import slide_02 from "../assets/images/slide_02.jpg";
import slide_06 from "../assets/images/slide_06.jpg";

const Posts = () => {
  return (
    // =============== Posts Wrapper ===============
    <div className="flex mx-auto w-[90%] h-auto mb-[100px] gap-5
                    max-lg:flex-col max-lg:w-[80%]
                    ">
      {/* =============== Post-1 =============== */}
      <div className="flex flex-col">
        {/* =============== photo =============== */}

        <div className="w-auto aspect-h-1 bg-gray-100">
          {/* =============== photo-info =============== */}
          <img src={slide_03} alt="slide" />
          <div className="p-5 sm:p-10">
            {/* =============== Post Title =============== */}
            <h1 className="font-bold text-primary text-[18px] mb-2">
              Lorem Ipsum
            </h1>
            {/* =============== Post Pharagraph =============== */}
            <p className="font-light text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* =============== Post-2 =============== */}
      <div className="flex flex-col">
        {/* =============== photo =============== */}

        <div className="w-auto aspect-h-1 bg-gray-100">
          {/* =============== photo-info =============== */}
          <img src={slide_02} alt="slide" />
          <div className="p-5 sm:p-10">
            {/* =============== Post Title =============== */}
            <h1 className="font-bold text-primary text-[18px] mb-2">
              Lorem Ipsum
            </h1>
            {/* =============== Post Pharagraph =============== */}
            <p className="font-light text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      {/* =============== Post-2 =============== */}
      <div className="flex flex-col">
        {/* =============== photo =============== */}

        <div className="w-auto aspect-h-1 bg-gray-100 ">
          {/* =============== photo-info =============== */}
          <img src={slide_06} alt="slide" />
          <div className="p-5 sm:p-10">
            {/* =============== Post Title =============== */}
            <h1 className="font-bold text-primary text-[18px] mb-2">
              Lorem Ipsum
            </h1>
            {/* =============== Post Pharagraph =============== */}
            <p className="font-light text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
