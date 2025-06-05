import React, { useState, useEffect } from "react";

export const Footer: React.FC = () => {
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
    <div className="flex flex-col">
      <div className="bg-cover bg-no-repeat flex-grow">
        <img src="/bgtop.png" alt="bg" className="w-full" />

        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex flex-col">
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
                  <span className="font-['HelveticaNeueCyrr'] text-[18px]">@confectioneryhouse</span>
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex items-end gap-2">
                  <img
                    src="/tg.svg"
                    alt="tg"
                    className="w-6 h-6 self-end relative top-[-5px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[18px]">@confectioneryhouse</span>
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex items-end gap-2">
                  <img
                    src="/vk.svg"
                    alt="vk"
                    className="w-6 h-6 self-end relative top-[-5px]"
                  />
                  <span className="font-['HelveticaNeueCyrr'] text-[18px]">@confectioneryhouse</span>
                </div>
              </div>

              <div className="flex items-end">
                <div className="flex items-end gap-2">
                  <div className="w-6 h-6 self-end relative top-[-5px]"></div>
                  <span className="font-['HelveticaNeueCyrr'] text-[18px]">8 000 000 00 00</span>
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
              Колл-центр принимает звонки с <a className="font-['HelveticaNeueCyrb']">9:00 до 23:00</a>. Ждем
              ваших вопросов, предложений и отзывов!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
