import { useEffect, useState } from "react";

const sliderData = [
  {
    name: "Велдон Вэнс",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face.jpg",
  },
  {
    name: "Василиса Важина",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face1.jpg",
  },
  {
    name: "Вилл Уостин",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim.",
    image: "/face2.jpg",
  },
];

export const Contact = () => {
  const [offset, setOffset] = useState(35);
  const handlePrev = () => {
    if (offset != 35) {
      setOffset((prev) => prev + 35);
    }
  };
  const handleNext = () => {
    if (offset != -35) {
      setOffset((prev) => prev - 35);
    }
  };

  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[white] h-auto">
      <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
        <div className="max-w-[1234px] mx-[5%] mt-[150px]">
          <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex">
            Our Confectioners
          </h1>
          <div className="relative w-full mx-auto">
            <button
              className="absolute left-[35%] xl:left-[-5%] lg:left-[15%] custom:left-[20%]
                md:left-[23%] sm:left-[25%] lm:left-[31%] vrsm:left-[35%] 
                top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
              onClick={handlePrev}
            >
              &lt;
            </button>
            <div
              className="flex transition-transform duration-500 ease-in-out gap-[50px]"
              style={{ transform: `translateX(${offset}%)` }}
            >
              {sliderData.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 p-3 rounded-[70px] bg-[#de7c7c] shadow-lg shadow-[#0000004b] mx-2
                    border-[#FFA3A3] border-[1px]
                    transition-transform duration-300 ease-in-out 
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                  style={{
                    minWidth: "280px",
                    maxWidth: "280px",
                    minHeight: "430px",
                    maxHeight: "430px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[150px] h-[150px] rounded-full mx-auto shadow-lg shadow-[#00000082]
                      border-[#FFA3A3] border-[1px]"
                  />
                  <h3 className="font-bold text-lg text-center mt-10">
                    {item.name}
                  </h3>
                  <p className="text-center mb-4">{item.description}</p>
                  <button
                    className="bg-[#C5364B] text-white rounded-full px-4 py-2 flex 
                    mx-auto justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                  >
                    Читать больше
                  </button>
                </div>
              ))}
            </div>
            <button
              className="absolute right-[35%] xl:right-[-5%] lg:right-[15%] custom:right-[20%]
                md:right-[23%] sm:right-[25%] lm:right-[31%] vrsm:right-[35%] top-1/2 transform -translate-y-1/2 z-50
                   bg-[#FF8F8F] border-[#C5364B] border-[1px] w-[55px] h-[55px] rounded-full
                   shadow-xl hover:shadow-[#C5364B] transition duration-300"
              onClick={handleNext}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-cover bg-no-repeat flex-grow">
          <img
            src="/bgbotton.png"
            alt="bg"
            className="w-full custom:flex hidden"
          />

          <div className="bg-[#FF8F8F] custom:bg-[#fff] pt-[20px] pb-[20px] justify-center flex flex-col">
            {isMobile && (
              <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-w-[350px] w-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/instagram.svg"
                        alt="instagram"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/tg.svg"
                        alt="tg"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-baseline gap-2">
                      <img
                        src="/vk.svg"
                        alt="vk"
                        className="w-5 h-5 self-end relative top-[-5px]"
                      />
                      <span className="text-[13px] leading-tight">
                        @confectioneryhouse
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="w-5 h-5 self-end relative top-[-5px]"></div>
                      <span className="text-[13px] leading-tight">
                        8 000 000 00 00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {!isMobile && (
              <div className="max-w-[1300px] px-[5%] mx-auto grid grid-cols-4 gap-14">
                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/instagram.svg"
                      alt="instagram"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/tg.svg"
                      alt="tg"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/vk.svg"
                      alt="vk"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="text-[18px]">@confectioneryhouse</span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 self-end relative top-[-5px]"></div>
                    <span className="text-[18px]">8 000 000 00 00</span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex-col items-center text-center mx-auto mt-10 mb-10 lg:flex hidden">
              <div className="text-center text-[18px] max-w-2xl px-4">
                Используйте наши социальные сети, чтобы связаться с нами или
                оставить отзыв о нашей продукции! Наши сотрудники оперативно
                ответят вам и помогут с вашими вопросами.
                <br />
                <br />
                Колл-центр принимает звонки с <strong>9:00 до 23:00</strong>.
                Ждем ваших вопросов, предложений и отзывов!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
