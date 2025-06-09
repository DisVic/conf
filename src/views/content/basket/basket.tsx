import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";
import { useNavigate } from "react-router-dom";

export const Basket = () => {
  const [cartItems, setCartItems] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setAlert("Заказ отправлен!");
  };

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );
    setCartItems(loggedUser?.cart || []);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1000);
  const removeFromCart = (itemName: string) => {
    const updatedCart = cartItems.filter((item) => item.name !== itemName);
    setCartItems(updatedCart);
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );

    if (loggedUser) {
      loggedUser.cart = updatedCart;
      localStorage.setItem("users", JSON.stringify(users));
    }
  };
  const updateQuantity = (itemName: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const updatedCart = cartItems.map((item) =>
      item.name === itemName ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );

    if (loggedUser) {
      loggedUser.cart = updatedCart;
      localStorage.setItem("users", JSON.stringify(users));
    }
  };
  return (
    <>
      <div className="bg-white h-auto">
        <div className="pt-[50px] pb-[50px] max-w-[1234px] custom:mt-[150px] min-vv:px-[5%] mx-auto flex flex-col custom:flex-row gap-10">
          <div className="bg-[#ECDADA] w-[95%] custom:w-3/5 px-[10px] cc:px-[25px] custom:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px]">
            <div className="font-['HelveticaNeueCyrb'] font-bold flex flex-row items-start text-[24px]">
              <p>Корзина</p>
              <p className="text-[12px] font-light">{cartItems.length}</p>
            </div>

            {cartItems.length > 0 ? (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="relative flex rounded-[21px] py-[15px] px-[20px] bg-white flex-col mt-3"
                >
                  <button
                    onClick={() => removeFromCart(item.name)}
                    className="absolute top-3 right-3 text-black hover:text-red-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>

                  <div className="flex flex-row items-start">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[100px] h-[100px] object-cover rounded-lg"
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        window.location.reload();
                      }}
                    />
                    <div className="flex flex-col ml-4 flex-1">
                      <p
                        onClick={() => {
                          navigate(`/product/${item.id}`);
                          window.location.reload();
                        }}
                        className="text-[16px] font-bold"
                      >
                        {item.name}
                      </p>
                      <p className="text-[14px] text-gray-600 mt-1">
                        {item.description ||
                          "Вкус позднего лета с нежным шоколадом"}
                      </p>

                      <div className="flex items-center mt-3">
                        <div className="flex items-center">
                          <button
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.name, item.quantity - 1)
                            }
                          >
                            -
                          </button>
                          <span className="mx-3">{item.quantity}</span>
                          <button
                            className="w-6 h-6 flex items-center justify-center border border-gray-300 rounded-full text-gray-500 hover:bg-gray-100"
                            onClick={() =>
                              updateQuantity(item.name, item.quantity + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="ml-auto text-[16px] font-bold">
                          {item.price * item.quantity} р
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="font-['HelveticaNeueCyr'] text-[16px] text-[#5e5757] text-center mt-[10px]">
                К сожалению, корзина пока пуста. <br />
                Перейдите в раздел{" "}
                <a
                  href="/menu"
                  className="font-['HelveticaNeueCyrb'] font-medium text-black hover:cursor-pointer hover:underline cursor-pointer"
                >
                  меню
                </a>
                , чтобы начать покупки!
              </p>
            )}
          </div>
          <div className="bg-[#ECDADA] w-[95%] custom:w-2/5 custom:h-[425px] px-[10px] cc:px-[25px] custom:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px] gap-5">
            <p className="text-[16px] font-medium font-['HelveticaNeueCyrr']">
              Адрес доставки
              <span className="font-light text-[#5e5757]"> (по умолчанию)</span>
            </p>
            <p className="text-[16px] font-normal text-[#5e5757] mt-3 font-['HelveticaNeueCyr']">
              г. Москва, ул. 800-летия Москвы, д. 28к1
            </p>
            <p className="text-[16px] font-normal mt-3 font-['HelveticaNeueCyr']">
              22-28 апреля
            </p>
            <div className="text-[16px] font-normal text-[#5e5757] mt-8">
              <div className="flex flex-row items-center justify-between">
                <p className="font-['HelveticaNeueCyr']">
                  Товары, {cartItems.length} шт.
                </p>
                <p className="font-['HelveticaNeueCyr']">
                  {calculateTotal()} рублей
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[24px] font-medium mt-8">
              <p className="text-[18px] custom:text-[24px] font-['HelveticaNeueCyrb']">
                Итого
              </p>
              <p className="text-[18px] custom:text-[24px] font-['HelveticaNeueCyrb']">
                {calculateTotal()} рублей
              </p>
            </div>

            <div className="mt-3 flex flex-row items-center gap-3">
              <input type="checkbox" className="bg-white" />
              <p className="text-[12px] font-['HelveticaNeueCyr'] font-light text-[#5e5757]">
                Соглашаюсь с правилами пользования торговой площадкой и
                условиями доставки
              </p>
            </div>
            <div
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C5364B] flex rounded-full mx-auto
                  py-3 w-[129] custom:w-[200px] mt-[30px]
        text-white  justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B]
             hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B] hover:cursor-pointer cursor-pointer"
            >
              Заказать
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-3/4 lg:w-2/4 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="font-['HelveticaNeueCyrr'] custon:text-[24px] text-[24px] font-medium text-center">
                Заполните анкету, чтобы сделать заказ
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
                <p className="font-['HelveticaNeueCyrr'] custom:text-[18px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Имя и Фамилия
                </p>
                <input
                  type="text"
                  className="w-full bg-[#FF8F8F33] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] custom:text-[18px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Номер телефона
                </p>
                <input
                  type="text"
                  className="w-full bg-[#FF8F8F33] rounded-full px-5 py-2 mt-3"
                />
                <p className="font-['HelveticaNeueCyrr'] custom:text-[18px] text-[12px] mt-[10px] custon:mt-[20px] font-medium">
                  Пожелания к заказу
                </p>
                <textarea className="w-full bg-[#FF8F8F33] custom:bg-[#FF8F8F33] rounded-full px-5 py-2 mt-3" />

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
                    className="bg-[#C5364B] py-4 px-6 rounded-full text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    Отправить
                  </button>
                </div>
                <p className="text-center custom:text-[18px] mx-auto text-[13px] custom:hidden flex w-[70%] custom:w-[30%] custom:ml-[5%]">
                  Мы свяжемся с вами для уточнения деталей заказа, как только
                  получим вашу заявку на заказ!
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
              <p className="font-['HelveticaNeueCyrr'] text-center custom:text-[18px] text-[18px] hidden custom:flex w-[70%] custom:w-[30%] custom:ml-[5%] font-medium">
                Мы свяжемся с вами для уточнения деталей заказа, как только
                получим вашу заявку на заказ!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
