import { useEffect, useState } from "react";

export const Delivery = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Анкета отправлена!");
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
      <div className="bg-[#FF8F8F] h-auto">
        <div className="bg-[#FF8F8F]  pb-[20px] mobile:px-20 justify-center flex ">
          <div className="max-w-[1234px] custom:mx-[5%] mt-[20px]">
            <h1
              className="justify-center font-[fontsDrops] text-[48px] mobile:text-[40px]  flex"
              style={{
                textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
              }}
            >
              Delivery
            </h1>
            <p className="font-['HelveticaNeueCyr'] w-[90%] custom:w-[762px] mobile:w-[300px] text-[20px] custom:text-[24px] mobile:text-[13px] font-light mx-auto text-center">
              Доставляем по всей России с помощью нашей особенной службой
              доставки. Также вы можете оформить достаку курьером в таких
              городах, как: Москва, Питер, Казань и Димитровград. По всем
              возникающим вопросом о доставке вы можете обратиться в наш
              колл-центр или написать в наши социальные сети. Наши сотрудники
              оперативно обработают ваш запрос и помогут решить любую проблему!{" "}
            </p>
            <div className="flex flex-col items-center custom:flex-row justify-center gap-10">
              <div className="mt-10">
                <img
                  src="/planet.png"
                  alt="planet"
                  className="custom:max-w-[300px] custom:min-w-[300px] 
                  transition-transform duration-300 ease-in-out hover:scale-[1.2]
                  custom:h-[300px] max-w-[200px] min-w-[200px]  h-[200px] flex custom:ml-auto custom:mr-10"
                />
              </div>
              <div className="custom:w-[40%] w-[90%] mt-10">
                <h1 className="font-['HelveticaNeueCyrr'] mobile:text-[20px]  mobile:w-[300px] text-[40px] font-normal max-custom:text-center">
                  Узнать стоимость доставки
                  <span className="font-['HelveticaNeueCyrb']"> бесплатно</span>
                </h1>
                <p className="font-['HelveticaNeueCyr'] text-[18px] mobile:text-[13px]  mobile:mr-4 mobile:w-[350px] font-light mx-auto mt-5  max-custom:w-2/3 w-[580px]">
                  Нажмите на кнопку “Рассчитать” и заполните свой адрес, почту,
                  способ достаки и желаему. дату доставки. В течении 24 часов мы
                  отправим вам ответ на вашу посту!
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#C5364B] flex rounded-full mx-auto custom:mx-0
                  py-3 w-[35%] mt-[30px] mobile:w-[200px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                >
                  Рассчитать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-[90%] lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="font-['HelveticaNeueCyrr'] custom:text-[24px] text-[18px] font-medium text-center">
                Заполните анкету, чтобы рассчитать стоимость доставки
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAlert("");
                  setError("");
                }}
                className="text-[32px] text-[#5e5757] transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2]"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col custom:flex-row items-center w-full">
              <form className="custom:w-[60%] w-full" onSubmit={handleSubmit}>
                <p className="font-['HelveticaNeueCyrr'] text-[18px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] text-[18px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Адрес доставки
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] text-[18px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  Дата доставки
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] text-[18px] custom:text-[16px] mt-[10px] custom:mt-[20px] font-medium">
                  E-mail
                </p>
                <input
                  type="text"
                  className="w-[100%] bg-[#ffe9e9] rounded-full px-5 py-2 mt-3"
                />
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
                <p className="font-['HelveticaNeueCyrr'] text-[18px] text-center mt-2 mx-auto custom:hidden flex w-[70%] custom:w-[30%] custom:ml-[5%] text-[12px]">
                  В течении 24 часов на вашу почту придет ответ с рассчетом
                  доставки до вашего адреса!
                </p>
                <div className="custom:hidden flex justify-center mt-[40px] custom:mt-[60px] relative">
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
              <p className="text-center mx-auto hidden custom:flex w-[70%] custom:w-[30%] custom:ml-[5%] text-[12px]">
                В течении 24 часов на вашу почту придет ответ с рассчетом
                доставки до вашего адреса!
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col">
        <div className="bg-cover bg-no-repeat flex-grow">
          <img
            src="/bgbotton.png"
            alt="bg"
            className="w-full custom:flex hidden"
          />

          {isMobile && (
            <div className="bg-[#FF8F8F] custom:bg-[#fff] pt-[20px] justify-center flex flex-col">
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

                <div className="flex items-center gap-2 mt-1 ml-[77px]">
                  <img
                    src="/instagram.svg"
                    alt="instagram"
                    className="w-4 h-4 self-end relative top-[-2px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[13px]">
                    @confectioneryhouse
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 ml-[77px]">
                  <img
                    src="/tg.svg"
                    alt="tg"
                    className="w-4 h-4 self-end relative top-[-2px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[13px]">
                    @confectioneryhouse
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-1 ml-[77px]">
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
            </div>
          )}

          {!isMobile && (
            <div className="bg-[#FF8F8F] custom:bg-[#fff] pt-[20px] pb-[20px] justify-center flex flex-col">
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
                    <span className="font-['HelveticaNeueCyrr'] text-[18px]">
                      @confectioneryhouse
                    </span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <img
                      src="/vk.svg"
                      alt="vk"
                      className="w-6 h-6 self-end relative top-[-5px]"
                    />
                    <span className="font-['HelveticaNeueCyrr'] text-[18px]">
                      @confectioneryhouse
                    </span>
                  </div>
                </div>

                <div className="flex items-end">
                  <div className="flex items-end gap-2">
                    <div className="w-6 h-6 self-end relative top-[-5px]"></div>
                    <span className="font-['HelveticaNeueCyrr'] text-[18px]">
                      8 000 000 00 00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex-col items-center text-center mx-auto mt-10 mb-10 lg:flex hidden">
            <div className="font-['HelveticaNeueCyrr'] text-center text-[18px] max-w-2xl px-4">
              Используйте наши социальные сети, чтобы связаться с нами или
              оставить отзыв о нашей продукции! Наши сотрудники оперативно
              ответят вам и помогут с вашими вопросами.
              <br />
              <br />
              Колл-центр принимает звонки с{" "}
              <a className="font-['HelveticaNeueCyrb']">9:00 до 23:00</a>. Ждем
              ваших вопросов, предложений и отзывов!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
