import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Отзыв отправлен!");
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
    <>
      <div className="bg-white h-auto mobile:hidden">
        <div className="3xl:hidden custom:block hidden z-0">
          <img
            src="/bg/2.png"
            alt=""
            className="absolute custom:w-[25%] custom:top-[20%] custom:left-[0px]"
          />
          <img
            src="/bg/6.png"
            alt=""
            className="absolute custom:w-[35%] custom:top-[60%] custom:right-[-100px]"
          />
          <img
            src="/bg/5.png"
            alt=""
            className="absolute custom:w-[25%] custom:top-[90%] custom:left-[0px]"
          />
        </div>
        <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto custom:mt-[150px]">
          <h1
            className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex"
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            Customer Reviews
          </h1>
          <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-start w-[100%] mt-5">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="gap-3 text-center custom:text-left justify-items-center custom:justify-items-start">
              <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                Вячеслав Васильевич В.
              </h1>
              <div className="flex flex-row">
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              </div>
              <p className="font-['HelveticaNeueCyr'] w-1/3 text-[18px]">
                Одна из лучших кондитерских! Быстрая и удобная доставка! Вкус
                изделий уникален и прекрасен! Заказывайте не пожалеете
              </p>
            </div>
          </div>
          <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-end w-[100%] ml-auto mt-1">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden custom:hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image2.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="gap-3 text-center custom:text-left justify-items-center custom:justify-items-end">
              <div className="w-[314px] custom:justify-items-start">
                <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                  Владимир Виллович В.
                </h1>
                <div className="flex flex-row">
                  <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                  <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                  <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                  <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                  <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                </div>
              </div>
              <p className="font-['HelveticaNeueCyr'] w-[314px] text-[18px] custom:ml-auto text-left">
                Поставил 5 звезд за оперативну доставку, вежливый персонал и
                безумно вкусные и свежие десерты!
              </p>
            </div>
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] hidden w-[200px] h-[200px] rounded-full overflow-hidden custom:inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image2.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="gap-5 flex flex-col custom:flex-row items-center justify-start custom:justify-start w-[100%] mt-1">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image3.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="gap-3 text-center custom:text-left justify-items-center custom:justify-items-start">
              <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                Виктория Викторовна В.
              </h1>
              <div className="flex flex-row">
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
                <img src="/star.png" alt="" className="w-[20px] h-[20px]" />
              </div>
              <p className="font-['HelveticaNeueCyr'] w-[300px] text-[18px]">
                Уже не первый раз заказываю тут торт на день рождения! Все
                нравится! Закажу еще!
              </p>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C5364B] flex rounded-full mx-auto
                  py-3 w-[40%] custom:w-[200px] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B] hover:cursor-pointer cursor-pointer"
          >
            Оставить отзыв
          </div>
        </div>
      </div>

      <div className="bg-white h-auto nemobile:hidden overflow-none">
        <div className="3xl:hidden  mobile:block hidden z-0">
          <img
            src="/bg/2.png"
            alt=""
            className="absolute  mobile:w-[25%]  mobile:top-[20%]  mobile:right-[80%]"
          />
          <img
            src="/bg/6.png"
            alt=""
            className="absolute  mobile:w-[35%]  mobile:top-[36%]  mobile:right-[-48px]"
          />
          <img
            src="/bg/5.png"
            alt=""
            className="absolute  mobile:w-[25%]  mobile:top-[50%]  mobile:right-[80%]"
          />
        </div>

        <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto pl-4 mr-2 mobile:mt-[10px] mobile:mb-[10px]">
          <h1
            className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex"
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
            }}
          >
            Customer Reviews
          </h1>
          <div className=" py-6 gap-5 flex flex-col mobile:flex-row items-center justify-start  mobile:justify-start w-[100%] mt-3">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[82px] h-[82px] rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[2px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="gap-3 text-center  mobile:text-left justify-items-center  mobile:justify-items-start">
              <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                Вячеслав Васильевич В.
              </h1>
              <div className="flex flex-row">
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
              </div>
              <p className="font-['HelveticaNeueCyr'] w-[250px] text-[13px]">
                Одна из лучших кондитерских! Быстрая и удобная доставка! Вкус
                изделий уникален и прекрасен! Заказывайте не пожалеете
              </p>
            </div>
          </div>

          <div className="mt-5  flex flex-col  mobile:flex-row items-center justify-start  mobile:justify-end w-[100%] ml-auto">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[82px] h-[82px] rounded-full overflow-hidden  mobile:hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[2px]">
                <div
                  className="w-full h-full rounded-full "
                  style={{
                    backgroundImage: "url(/image2.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className=" text-center  mobile:text-left justify-items-center  mobile:justify-items-end">
              <div className="w-[314px]  mobile:justify-items-start">
                <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                  Владимир Виллович В.
                </h1>
                <div className="flex flex-row">
                  <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                  <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                  <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                  <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                  <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                </div>
              </div>
              <p className="font-['HelveticaNeueCyr'] w-[250px] text-[13px] mr-[62px] mobile:ml-auto text-left">
                Поставил 5 звезд за оперативну доставку, вежливый персонал и
                безумно вкусные и свежие десерты!
              </p>
            </div>
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] hidden w-[82px] h-[82px] rounded-full overflow-hidden   mobile:inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[2px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image2.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className=" gap-5 flex flex-col  mobile:flex-row items-center justify-start  mobile:justify-start w-[100%] mt-5">
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[82px] h-[82px] rounded-full overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[2px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    backgroundImage: "url(/image3.jpg)",
                    backgroundPosition: "30% center",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
            <div className="gap-3 text-center  mobile:text-left justify-items-center  mobile:justify-items-start">
              <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">
                Виктория Викторовна В.
              </h1>
              <div className="flex flex-row">
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
                <img src="/star.png" alt="" className="w-[15px] h-[15px]" />
              </div>
              <p className="font-['HelveticaNeueCyr'] w-[250px] text-[13px]">
                Уже не первый раз заказываю тут торт на день рождения! Все
                нравится! Закажу еще!
              </p>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(true)}
            className="bg-[#C5364B] flex rounded-full mx-auto
                  py-3 w-[40%]  mobile:w-[200px] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B] hover:cursor-pointer cursor-pointer"
          >
            Оставить отзыв
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-3/4 lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="font-['HelveticaNeueCyrr'] text-[24px] font-medium text-center">
                Заполните анкету, чтобы оставить отзыв
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAlert("");
                  setError("");
                }}
                className="text-[32px] text-[#5e5757] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2] w-50%"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col custom:flex-row items-center w-full">
              <form className="custom:w-[60%] w-full" onSubmit={handleSubmit}>
                <p className="font-['HelveticaNeueCyrr'] text-[18px] mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] text-[18px] mt-[20px] font-medium">
                  E-mail
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] text-[18px] mt-[20px] font-medium">
                  Ваш отзыв
                </p>
                <textarea className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3" />
                <div className="hidden custom:flex justify-end mt-[20px] custom:mt-[60px] relative">
                  {error && (
                    <p className="text-red-500 top-[-40px] absolute">{error}</p>
                  )}
                  {alert && (
                    <p className="text-green-400 top-[-40px] absolute">
                      {alert}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-[#C5364B] py-2 px-4 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    Отправить
                  </button>
                </div>
              </form>
              <p className="font-['HelveticaNeueCyrr'] text-[13px] text-center flex w-[220px] custom:w-[220px] custom:ml-[5%]">
                Мы с нетерпением ждем от Вас обратной связи и обязательно
                разместим ваш отзыв на нашем сайте!
              </p>
              <div className="custom:hidden flex justify-center mt-[20px] custom:mt-[60px] relative">
                {error && (
                  <p className="text-red-500 top-[-40px] absolute">{error}</p>
                )}
                {alert && (
                  <p className="text-green-400 top-[-40px] absolute">{alert}</p>
                )}
                <button
                  type="submit"
                  className="bg-[#C5364B] py-2 px-4 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col">
        <div className="bg-cover bg-no-repeat flex-grow">
          <img
            src="/bgtop.png"
            alt="bg"
            className="w-full custom:flex hidden"
          />

          <div className="custom:bg-[#FF8F8F] bg-[#fff] pt-[20px] justify-center flex flex-col">
            {isMobile && (
              <div className="mb-[48px] px-10 justify-center nemobile:hidden">
                <p className="font-['HelveticaNeueCyr'] text-[13px] font-medium text-center">
                  Используйте наши социальные сети, чтобы связаться с нами или
                  оставить отзыв о нашей продукции! Наши сотрудники оперативно
                  ответят вам и помогут с вашими вопросами.
                </p>
                <p className="font-['HelveticaNeueCyr'] mt-[12px] font-medium text-[13px] text-center">
                  Колл-центр принимает звонки{" "}
                  <span className="font-['HelveticaNeueCyrb']">
                    с 9:00 до 23:00.
                  </span>{" "}
                  Ждем ваших вопросов, предложений и отзывов!
                </p>
                <p className="font-['HelveticaNeueCyrb'] mt-[12px] font-medium text-[13px] text-center">
                  8 999 765 65 65
                </p>

                <div className="flex items-center gap-2 mt-1 ml-[100px]">
                  <img
                    src="/instagram.svg"
                    alt="instagram"
                    className="w-4 h-4 self-end relative top-[-2px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[13px]">
                    @confectioneryhouse
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 ml-[100px]">
                  <img
                    src="/tg.svg"
                    alt="tg"
                    className="w-4 h-4 self-end relative top-[-2px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[13px]">
                    @confectioneryhouse
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 ml-[100px]">
                  <img
                    src="/vk.svg"
                    alt="vk"
                    className="w-4 h-4 self-end relative top-[-2px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[13px]">
                    @confectioneryhouse
                  </span>
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
    </>
  );
};
