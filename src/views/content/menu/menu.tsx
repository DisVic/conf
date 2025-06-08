import type { MenuItem } from "../../../types/types";
import { Cake } from "../../../assets/cake";
import { Cupcake } from "../../../assets/cupcake";
import { Candy } from "../../../assets/candy";
import { Waffle } from "../../../assets/waffle";
import { Donut } from "../../../assets/donut";
import { Interesting } from "../../../assets/interesting";
import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";
import { useProducts } from "../../../context/context";
import { useNavigate } from "react-router-dom";

const Menu: MenuItem[] = [
  { name: "Торт", color: "red", ico: Cake },
  { name: "Пироженное", color: "", ico: Cupcake },
  { name: "Конфеты", color: "", ico: Candy },
  { name: "Вафли", color: "", ico: Waffle },
  { name: "Пончики", color: "", ico: Donut },
  { name: "Интересное", color: "", ico: Interesting },
];



export const MenuPage = () => {
  const { categories } = useProducts();
  const [menuItems, setMenuItems] = useState<MenuItem[]>(Menu);
  const navigate = useNavigate();
  const toggleColor = (index: number) => {
    setMenuItems((prevItems) =>
      prevItems.map((item, i) => {
        return {
          ...item,
          color: i === index ? "red" : "",
        };
      })
    );
  };
  const [currentUser, setCurrentUser] = useState<{
    login: string;
    cart: { name: string; price: number; quantity: number }[];
  } | null>(null);
  const [cart, setCart] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedUser = users.find(
      (user: { login: string }) =>
        user.login === localStorage.getItem("loggedUser")
    );
    if (loggedUser) {
      setCurrentUser(loggedUser);
      setCart(loggedUser.cart || []);
    }
  }, []);

  const addToCart = (itemName: string, itemPrice: number, itemImage: string) => {
  if (currentUser) {
    const existingItemIndex = cart.findIndex(
      (item) => item.name === itemName
    );

    let updatedCart;
    if (existingItemIndex > -1) {
      const updatedItem = {
        ...cart[existingItemIndex],
        quantity: cart[existingItemIndex].quantity + 1,
      };
      updatedCart = [
        ...cart.slice(0, existingItemIndex),
        updatedItem,
        ...cart.slice(existingItemIndex + 1),
      ];
    } else {
      updatedCart = [
        ...cart,
        { 
          name: itemName, 
          price: itemPrice, 
          quantity: 1,
          image: itemImage 
        },
      ];
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const updatedUsers = users.map((user: any) => {
      if (user.login === currentUser.login) {
        return { ...user, cart: updatedCart };
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setCurrentUser((prevUser) =>
      prevUser ? { ...prevUser, cart: updatedCart } : null
    );
    setCart(updatedCart);
  }
};

  return (
    <div className="bg-white h-auto">
      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%] mobile:hidden">
        <h1 className="font-[FontsDrops] text-center text-[96px] custom:mt-[150px]">
          Menu
        </h1>
        <div className="flex flex-col items-start custom:flex-row mt-4 w-full">
          <div className="w-full space-y-10 w">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-[36px] font-['HelveticaNeueCyrb'] font-bold mb-4 ml-11">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 gap-6 gap-x-[0px]">
                  {category.data.map((item, i) => (
                    <div
                      key={i}
                      className="w-full bg-[#ffc6c6] rounded-[45px] border-[1px] border-[#F59696] w-[280px] mx-auto flex flex-col h-full h-[348px] "
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full rounded-t-[45px] h-[202px]"
                        onClick={()=>{
                          navigate(`/product/${item.id}`)
                          window.location.reload();
                      }}
                      />
                      <div className="px-3 py-2 flex-grow">
                        <div className="flex flex-row justify-between text-[15px]">
                          <p className="font-bold font-[Choplin] text-[15px]">
                            {item.name}
                          </p>
                          <p className="font-light font-[Choplin] text-[15px]">от {item.price}р</p>
                        </div>
                        <p className="text-[11px] font-light w-3/4">
                          {item.description}
                        </p>
                      </div>
                      <div className="mb-4 flex flex-row justify-between px-2">
                        {cart.find(
                          (cartItem) => cartItem.name === item.name
                        ) ? (
                          <button className="w-full py-[10px] rounded-full bg-green-500 text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            Добавлено
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              addToCart(
                                item.name,
                                parseFloat(item.price.replace(/\s/g, "")),
                                item.image

                              )
                            }
                            className="w-full py-[10px] rounded-full bg-white text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            В корзину
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-[20px] pb-[20px] max-w-[1234px] mx-auto px-[5%] nemobile:hidden">
        <h1 className="font-[FontsDrops] text-center text-[96px] custom:mt-[150px]">
          Menu
        </h1>
        <div className="flex flex-col items-start custom:flex-row mt-4 w-full">
          <div className="w-full space-y-10">
            {categories.map((category, index) => (
              <div key={index}>
                <h2 className="text-[30px] font-['HelveticaNeueCyrb'] font-bold mb-4 ml-10">
                  {category.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 custom:grid-cols-3 gap-5">
                  {category.data.map((item, i) => (
                    <div
                      key={i}
                      className="w-full bg-white rounded-[65px] border-[1px] border-[#F59696] max-w-[250px] mx-auto flex flex-col h-full"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full rounded-t-[65px] h-[175px]"
                        onClick={()=>{
                          navigate(`/product/${item.id}`)
                          window.location.reload();
                      }}
                      />
                      <div className="px-3 py-2 flex-grow">
                        <div className="flex flex-row justify-between text-[15px]">
                          <p className="font-bold font-[Choplin] text-[20px]">
                            {item.name}
                          </p>
                        </div>
                        <p className="font-['Choplin'] text-[13px] font-light w-3/4">
                          от {item.price}р
                        </p>
                      </div>
                      <div className="flex flex-row justify-between">
                        {cart.find(
                          (cartItem) => cartItem.name === item.name
                        ) ? (
                          <button className="w-[100%] h-[55px] py-[10px] pb-[20px] rounded-b-[65px] bg-green-500 text-white transition-transform duration-300 ease-in-out hover:shadow-[#C5364B]">
                            Добавлено
                          </button>
                        ) : (
                          <button
                            onClick={() =>
                              addToCart(
                                item.name,
                                parseFloat(item.price.replace(/\s/g, "")),
                                item.image
                              )
                            }
                            className="w-[100%] h-[55px] py-[10px] pb-[20px] rounded-b-[65px] bg-[#C5364B] text-white transition-transform duration-300 ease-in-out hover:shadow-[#C5364B]"
                          >
                            Купить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
