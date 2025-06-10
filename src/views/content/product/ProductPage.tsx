import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/context";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<{
    login: string;
    cart: {
      id: number;
      name: string;
      price: number;
      quantity: number;
      image: string;
    }[];
  } | null>(null);

  const [isInCart, setIsInCart] = useState(false);

  const product = getProductById(Number(id));

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );

    if (loggedUser) {
      setCurrentUser(loggedUser);

      const itemInCart = loggedUser.cart?.some(
        (item) => item.id === product?.id
      );
      setIsInCart(!!itemInCart);
    }
  }, [product?.id]);

  const addToCart = () => {
    if (!product || !currentUser) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userIndex = users.findIndex(
      (user: { login: string }) => user.login === currentUser.login
    );

    if (userIndex === -1) return;

    const userCart = [...(users[userIndex].cart || [])];

    const existingItemIndex = userCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex > -1) {
      userCart[existingItemIndex].quantity += 1;
    } else {
      userCart.push({
        id: product.id,
        name: product.name,
        price: Number(product.price.split(" ")[1]),
        quantity: 1,
        image: product.image,
      });
    }

    const updatedUser = {
      ...users[userIndex],
      cart: userCart,
    };

    const updatedUsers = [...users];
    updatedUsers[userIndex] = updatedUser;

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setCurrentUser(updatedUser);
    setIsInCart(true);
  };

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold">Продукт не найден</h1>
        <p className="mt-4">Извините, запрашиваемый продукт не существует.</p>
      </div>
    );
  }

  return (
    <div className="bg-white h-auto mt-[180px] mobile:mt-[20px]">
      <button
        className="ml-[130px] mobile:ml-[20px] mobile:w-[35px] mobile:h-[35px]"
        onClick={() => {
          navigate(`/menu`);
          window.location.reload();
        }}
      >
        <svg
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.9375 21.5H8.0625M8.0625 21.5L18.1406 32.25M8.0625 21.5L18.1406 10.75"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="bg-gray-100 rounded-lg overflow-hidden ml-[130px] w-[539px] h-[421px] mobile:w-[269px] mobile:h-[210px] mobile:ml-[61px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-[539px] h-[421px] object-cover border-[#C5364B] border-[2px] mobile:w-[269px] mobile:h-[210px]"
          />
        </div>

        <div>
          <h1 className="text-[36px] font-bold mt-[-6px] mobile:text-[20px] mobile:ml-[28px] mobile:mt-0 mobile:mb-[-15px]">
            {product.name}
          </h1>

          <p className="mt-6 text-gray-700 font-['HelveticaNeueCyrr'] text-[15px] w-[400px] mobile:text-[13px] mobile:w-[318px] mobile:ml-[28px]">
            {product.description}
          </p>

          <div className="mt-4 font-semibold text-primary font-[Choplin] text-[20px] mobile:text-[15px] mobile:ml-[27px] mobile:mb-[-10px]">
            {product.price} <a className="font-[Choplin]">p</a>
          </div>
          <button className="w-[150px] ml-[30px] mt-[25px] py-[10px] rounded-full bg-[#C5364B] text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg nemobile:hidden">
            В корзину
          </button>

          <div className="font-bold text-[20px] mobile:text-[16px] mobile:ml-[28px] w-[99px] h-[24px] mb-[20px] mt-[15px]">
            Описание
          </div>
          <h1 className="text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]">
            Основа:
          </h1>
          <div className="font-light text-[13px] w-[552px] mb-[20px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]">
            {product.composition}
          </div>
          <h1 className="text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]">
            Украшение:
          </h1>
          <div className="font-light text-[13px] w-[552px] mb-[10px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]">
            {product.decor}
          </div>
          <h1 className="text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]">
            Варианты дизайна:
          </h1>
          <div className="font-light text-[13px] w-[552px] mb-[10px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]">
            {product.design}
          </div>
          <div className="ml-[30px] text-[13px] mb-[30px] nemobile:hidden">
            <a className="font-bold">Калорийность: </a>
            <br />
            {product.calories}
          </div>
        </div>
        <div className="font-light text-[13px] w-[552px] mt-[-20px] ml-[775px] mobile:hidden">
          <a className="text-[16px] font-bold">Калорийность: </a>
          {product.calories}
        </div>
        <button
          onClick={addToCart}
          className={`w-[150px] ml-[332px] mt-[-30px] py-[10px] rounded-full text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg mobile:hidden
          ${isInCart ? "bg-green-500" : "bg-[#C5364B]"}`}
        >
          {isInCart ? "В корзине" : "В корзину"}
        </button>
      </div>
    </div>
  );
};
