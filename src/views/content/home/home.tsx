import { useState } from "react";
import { Footer } from "../../components/layout/footer";

const slider = [
  {
    ticker: "/ticker.svg",
    name: "1 место",
    description:
      "Мы занимаем первое место среди кондитерских магазинов в Димитровграде!",
    image: "/pic1.jpg",
  },
  {
    ticker: "/ticker2.svg",
    name: "Гран-при",
    description:
      "Обладатели Гран-при фестиваля современного кондитерского искуства!",
    image: "/pic2.jpg",
  },
  {
    ticker: "/ticker3.svg",
    name: "Сертификат",
    description:
      "Получили сертификат вкуса и качества от лучших кондитеров России в 2022 году!",
    image: "/pic3.jpg",
  },
];

export const Home = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [isPresseddv, setIsPresseddv] = useState(false);
  const [isPressedtr, setIsPressedtr] = useState(false);
  const [isPressedch, setIsPressedch] = useState(false);
  const handleClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div className=" bg-white mt-[150px]">
      <div className="3xl:hidden custom:block hidden">
        <img
          src="/bg/8.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[-50px] custom:left-[-100px]"
        />
        <img
          src="/bg/3.png"
          alt=""
          className="absolute custom:w-[40%] custom:top-[40%] custom:left-[-180px]"
        />
        <img
          src="/bg/1.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[60%] custom:right-[-100px]"
        />
        <img
          src="/bg/3.png"
          alt=""
          className="absolute custom:w-[30%] custom:top-[160%] custom:left-[-100px]"
        />
        <img
          src="/bg/7.png"
          alt=""
          className="absolute custom:w-[15%] custom:top-[15%] custom:right-[200px]"
        />
        <img
          src="/bg/7.png"
          alt=""
          className="absolute custom:w-[25%] custom:top-[250%] custom:right-[-100px]"
        />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto ">
        <h1 className="font-[fontsDrops] text-center text-[64px] sm:text-[100px]">
          Fresh and <br />
          tasty deserts
        </h1>
        <p className="font-['HelveticaNeueCyr'] text-[20px] text-center font-extralight w-[100%] sm:w-[45%] mx-auto">
          10 лет радуем Вас свежими десертами и новыми вкусами. Вы сами решаете, каким именно будет ваш десерт. Собирайте корзину и отправляйте заказ прямо сейчас!
          <br />

        </p>
        <button
          onClick={() => window.location.href = "/menu"}
          className="bg-[#C5364B] flex rounded-full py-3 w-[50%] sm:w-[15%] mt-[30px]
        text-white mx-auto justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
        >
          Собрать корзину
        </button>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[96px] sm:text-[100px] flex ll:hidden text-center">
              Our Popular Deserts
            </h1>
            <div className="grid grid-cols-1 lm:grid-cols-2 md:grid-cols-4 ll:grid-cols-5 gap-[15px]">
              {/* Первый блок */}
              <div className="bg-[#D9D9D9] rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/1.jpg"
                  alt="1"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPresseddv(!isPresseddv);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${isPresseddv ? "bg-[green]" : "bg-black"
                    } cursor-pointer flex text-white rounded-full w-[35px] h-[35px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg mb-[4px] text-[29px]">+</p>
                </div>
              </div>

              {/* Второй блок */}
              <div className="bg-[#D9D9D9] rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/2.jpg"
                  alt="2"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPresseddv(!isPresseddv);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${isPresseddv ? "bg-[green]" : "bg-black"
                    } cursor-pointer flex text-white rounded-full w-[35px] h-[35px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg mb-[4px] text-[29px]">+</p>
                </div>
              </div>

              {/* Третий блок */}
              <div className="bg-[#D9D9D9] rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/3.jpg"
                  alt="3"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPresseddv(!isPresseddv);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${isPresseddv ? "bg-[green]" : "bg-black"
                    } cursor-pointer flex text-white rounded-full w-[35px] h-[35px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg mb-[4px] text-[29px]">+</p>
                </div>
              </div>

              {/* Четвертый блок */}
              <div className="bg-[#D9D9D9] rounded-[25px] md:rounded-[52px] w-[150px] sm:w-[150px] md:w-[150px] custom:w-[200px] shadow-xl mx-auto relative">
                <img
                  src="/4.jpg"
                  alt="4"
                  className="h-[170px] md:h-[200px] w-full custom:h-[250px] rounded-[25px] md:rounded-[52px] mx-auto"
                />
                <p className="text-[#808080] text-center mt-5 mb-5 text-[16px]">
                  Цена: <span className="text-black">1 399р</span>
                </p>
                <div
                  onClick={() => {
                    setIsPresseddv(!isPresseddv);
                  }}
                  className={`transition-transform duration-300 ease-in-out ${isPresseddv ? "bg-[green]" : "bg-black"
                    } cursor-pointer flex text-white rounded-full w-[35px] h-[35px] hover:scale-[1.2] absolute bottom-[-10px] right-[0] items-center justify-center`}
                >
                  <p className="flex mx-auto text-lg mb-[4px] text-[29px]">+</p>
                </div>
              </div>

              <h1 className="text-end font-[fontsDrops] text-[96px] hidden ll:flex ml-20">
                Our <br />
                Popular <br />
                Deserts
              </h1>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%]">
        <h1 className="justify-center font-[fontsDrops] text-[48px] sm:text-[100px] flex ">
          Quality
        </h1>
        <div className="flex flex-col items-center custom:flex-row justify-between">
          <div className="w-2/3 custom:w-[28%] mt-[250px] -ml-[10%] custom:mr-0 custom:mb-[-30px]">
            <h1 className="mb-3 font-['Calliga'] text-[40px]">Tasty</h1>
            <p className="font-['HelveticaNeueCyr'] text-[16px] max-w-[90%]">
              Перед запуском нового продукта мы тщательно проверяем вкус нашего изделия, чтобы угодить каждому покупателю!
            </p>
          </div>
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality1.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="w-2/3 custom:w-[25%] my-auto ml-auto custom:ml-[-70px] max-custom:text-right mt-[100px]">
            <h1 className="mb-3 font-['Calliga'] text-[40px]">Fresh</h1>
            <p className="font-['HelveticaNeueCyr'] text-[16px]">
              Мы используем лишь свежие продукты, которые проверяются нашим персоналом, для безопасности наших покупателей!
            </p>
          </div>
        </div>
        <div className="flex  flex-col items-center custom:flex-row justify-center gap-10">
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality2.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
          <div className="w-2/3 custom:w-1/3 mt-auto mr-auto custom:mr-0 custom:hidden">
            <h1 className="mb-3 font-['Calliga'] text-[40px]">Natural</h1>
            <p className="font-['HelveticaNeueCyr'] text-[16px]">
              Мы следим за вашим здоровьем, поэтому используем только натуральные, органически чисты продукты, выращенные в России!
            </p>
          </div>
          <div className="relative inline-block w-[200px] custom:w-[300px] h-[200px] custom:h-[300px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: "url(/quality3.jpg)",
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="w-2/3 custom:w-1/3 my-auto justify-self-center mt-10 flex flex-col custom:ml-0 max-custom:text-right max-custom:hidden relative left-[10%]">
          <h1 className="mb-3 font-['Calliga'] text-[40px]">
            Natural
          </h1>
          <p className="font-['HelveticaNeueCyr'] text-[16px]">
            Мы следим за вашим здоровьем, поэтому используем только натуральные, органически чистые продукты, выращенные в России!
          </p>
        </div>
      </div>
      <div className="bg-cover bg-no-repeat ">
        <img src="/bgtop.png" alt="bg" className="w-full z-10" />
        <div className="bg-[#FF8F8F] pt-[20px] pb-[20px] justify-center flex">
          <div className="max-w-[1234px] mx-[5%]">
            <h1 className="justify-center font-[fontsDrops] text-[40px] sm:text-[100px] flex">
              Our Awards
            </h1>
            <div className=" w-full mx-auto">
              <div className="flex gap-[15px] flex-col custom:flex-row">
                {slider.map((item, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 p-3 rounded-[70px] mx-auto mb-5 bg-[#de7c7c] 
           shadow-[0_10px_30px_rgba(0,0,0,0.5)] mx-2
           border-[#FFA3A3] border-[1px] pr-[60px] pl-[60px] pt-[40px] pb-[40px]
           transition-transform duration-300 ease-in-out 
           hover:scale-105 hover:shadow-[0_15px_40px_rgba(197,54,75,0.8)]"
                    style={{
                      minWidth: "231px",
                      maxWidth: "391px",
                      minHeight: "300px",
                      maxHeight: "493px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[219px] h-[219px] rounded-full mx-auto shadow-lg shadow-[#00000082]
                      border-[#FFA3A3] border-[1px]"
                    />
                    <div className=" flex flex-row items-center justify-center mt-10">
                      <img
                        src={item.ticker}
                        alt={item.ticker}
                        className="w-[40px] h-[40px]"
                      />
                      <h3 className="font-['HelveticaNeueCyrr'] font-bold text-lg text-center ">
                        {item.name}
                      </h3>
                    </div>
                    <p className="font-['HelveticaNeueCyr'] text-center mb-4 text-[18px] max-w-[280px]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src="/bgbotton.png" alt="bg" className="w-full" />
      </div>
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto ">
        <div className="flex justify-center flex-col custom:flex-row items-center gap-6">
          <div className="w-1/2">
            <h1
              className="font-[fontsDrops] max-custom:text-center text-[96px] sm:text-[100px]"
              style={{
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5), 0 0 10px rgba(0, 0, 0, 0.3)"
              }}
            >
              The best <br />
              of taste
            </h1>
            <img
              src="/layout.png"
              alt="layout"
              className="w-1/3 custom:hidden mx-auto flex"
            />
            <p className="font-['HelveticaNeueCyr'] custom:w-2/3 max-custom:text-center w-[90%] max-custom:mx-auto flex text-[24px] sm:text-[24px] font-light">
              Количество заказов на некоторые десерты завораживает, поэтому мы выделили их в отдельную категорию!
            </p>
            <button
              onClick={() => window.location.href = "/menu"}
              className="bg-[#C5364B] flex max-custom:mx-auto rounded-full py-3 w-[75%] custom:w-[25%] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
            >
              Выбрать
            </button>
          </div >
          <img
            src="/layout.png"
            alt="layout"
            className="w-1/3 max-custom:hidden"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};
