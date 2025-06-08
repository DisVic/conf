import React, { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 981);
  const [menu, setMenu] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );
    setCartItems(loggedUser?.cart || []); 
  }, [cartItems]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToEnd = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isMobile ? (
        <>
          <header className="px-[5%] bg-[#d2787800] py-[1%] h-auto font-[300] line-[]">
            <div className="items-center flex justify-between mx-auto ">
              <a href="/main" className="">
                <img src="/logo.png" alt="logo" className="w-[75px] mx-auto" />
                <p className="text-[10px] text-center">
                  Дом кондитерских
                  <br />
                  изделий
                </p>
              </a>
              <div className="flex flex-row items-center gap-[20px]">
                <a
                  href="/basket"
                  className="w-[45px] h-[45px] rounded-full bg-[#C5364B] flex items-center relative"
                >
                  <img
                    src="/Vector.png"
                    alt="vector"
                    className="m-auto w-[25px] h-[25px]"
                  />
                  <div
                    className={`transition-transform duration-300 ease-in-out cursor-pointer flex text-white rounded-full w-[20px] h-[20px] hover:scale-[1.2] 
                  absolute bottom-[-7px] right-[0] items-center justify-center
                  bg-black`}
                  >
                    <p className="flex mx-auto text-lg text-[10px]">
                      {cartItems.length}
                    </p>
                  </div>
                </a>
                <img
                  src="/menu.svg"
                  alt="menu"
                  className="m-auto h-[12px]"
                  onClick={() => setMenu(!menu)}
                />
              </div>
            </div>
          </header>
          {menu && (
            <>
              <div className="absolute w-[40%] h-full top-0 right-0 shadow-lg z-10 bg-[#C5364B] p-[3%]">
                <img
                  src="/close.png"
                  alt="close"
                  className=" w-[25px] ml-auto h-[25px]"
                  onClick={() => setMenu(!menu)}
                />
                <div className="flex flex-col text-white mt-6 gap-4 font-['HelveticaNeueCyr'] text-[16px]">
                  <a href="/auth">Личный кабинет</a>
                  <a href="/delivery">Доставка</a>
                  <a href="/menu">Меню</a>
                  <a href="/reviews">Отзывы</a>
                  <p
                    onClick={scrollToEnd}
                    className="hover:cursor-pointer cursor-pointer"
                  >
                    Контакты
                  </p>
                </div>
              </div>
              <div className="absolute w-full top-0 h-full bg-black opacity-20"></div>
            </>
          )}
        </>
      ) : (
        <header className="bg-[#D2787836] p-6 fixed z-[99999] w-full top-0">
          <div className="max-w-[1234px] mx-auto font-[200] flex justify-center items-center gap-5">
            <div className="flex flex-row items-center gap-[40px] custom:gap-[85px] w-[500px] justify-end">
              <a className="hover:underline" href="/delivery">
                Доставка
              </a>
              <a className="hover:underline" href="/menu">
                Меню
              </a>
              <a className="hover:underline" href="/reviews">
                Отзывы
              </a>
            </div>
            <a href="/main" className="">
              <img src="/logo.png" alt="logo" className="w-[100px] mx-auto" />
              <p className="text-[10px] text-center">
                Дом кондитерских изделий
              </p>
            </a>
            <div className="flex flex-row items-center gap-[40px] custom:gap-[85px] w-[500px]">
              <p
                onClick={scrollToEnd}
                className="hover:underline hover:cursor-pointer cursor-pointer"
              >
                Контакты
              </p>
              <a href="/auth" className="font-[500] hover:underline">
                Личный кабинет
              </a>
              <div className="relative">
                <a
                  href="/basket"
                  className="w-[50px] h-[50px] rounded-full bg-[#C5364B] flex items-center relative"
                >
                  <img src="/Vector.png" alt="vector" className="m-auto" />
                  <div
                    className={`transition-transform duration-300 ease-in-out cursor-pointer flex text-white rounded-full w-[20px] h-[20px] hover:scale-[1.2] 
                  absolute bottom-[-7px] right-[0] items-center justify-center
                  bg-black`}
                  >
                    <p className="flex mx-auto text-lg text-[10px]">
                      {cartItems.length}
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};
