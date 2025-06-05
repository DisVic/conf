import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/layout/footer";

export const Auth: React.FC = () => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<{ login: string; password: string }>({
    login: "",
    password: "",
  });
  const navigate = useNavigate();
  const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getUsers();
    const foundUser = users.find(
      (user: { login: string; password: string }) =>
        user.login === login && user.password === password
    );
    if (foundUser) {
      localStorage.setItem("loggedUser", foundUser.login);
      console.log("Redirecting to /main");
      navigate("/main");
      window.location.reload();
    } else {
      setError("Неверный логин или пароль");
    }
  };
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const users = getUsers();
    const existingUser = users.find(
      (user: { login: string }) => user.login === newUser.login
    );
    if (existingUser) {
      setAlert("");
      setError("Пользователь с таким логином уже существует");
      return;
    }
    const newUserData = { ...newUser, cart: [] };
    users.push(newUserData);
    localStorage.setItem("users", JSON.stringify(users));
    setError("");
    setAlert("Регистрация прошла успешно!!!");
    setNewUser({ login: "", password: "" });
  };
  return (
    <>
      <div className="bg-white h-auto">
        <div className="pt-[50px] pb-[50px] max-w-[1234px] mx-auto">
          <div className="bg-[#ECDADA] mt-[150px] w-[90%] lg:w-2/4 px-[20px] sm:px-[50px] py-10 mx-auto border-[#FECFCF] border-[1px] rounded-[29px] text-left ">
            <h1 className="text-[24px] font-medium">Вход в личный кабинет</h1>
            <form onSubmit={handleSubmit}>
              <p className="text-[16px] mt-[75px] font-medium ">Логин</p>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
              />
              <p className="text-[16px] mt-[20px] font-medium">Пароль</p>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
                />
              </div>
              <div className="flex flex-col custom:flex-row items-center mt-[45px] relative">
                {error && (
                  <p className="text-red-500 top-[-45px] absolute">{error}</p>
                )}
                <button
                  type="submit"
                  className="bg-[#C5364B] flex rounded-full py-3 w-[90%] lg:w-1/2 text-white justify-center transition-transform duration-300 ease-in-out shadow-md shadow-[#C5364B] hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
                >
                  Войти
                </button>
                <a
                  href="#"
                  className="text-[#5e5757] custom:ml-auto mt-5 custom:mt-0"
                >
                  Забыли пароль?
                </a>
                <div
                  className="text-[#5e5757] custom:ml-5 mt-5 custom:mt-0 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-[1.2]"
                  onClick={() => setIsModalOpen(true)}
                >
                  Регистрация
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#ECDADA] w-[90%] lg:w-1/3 px-[20px] sm:px-[50px] py-10 border-[#FECFCF] border-[1px] rounded-[29px] text-left">
            <div className="flex flex-row items-center justify-between relative">
              <h2 className="text-[24px] font-medium">Регистрация</h2>
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
            <form onSubmit={handleRegister}>
              <p className="text-[16px] mt-[20px] font-medium">Логин</p>
              <input
                type="text"
                value={newUser.login}
                onChange={(e) =>
                  setNewUser({ ...newUser, login: e.target.value })
                }
                className="w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
              />
              <p className="text-[16px] mt-[20px] font-medium">Пароль</p>
              <input
                type="password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
                className="w-[100%] bg-white rounded-full px-5 py-2 border-[#FFB2B2] border-[1px] mt-3 shadow-md shadow-gray-500"
              />
              <div className="flex justify-end mt-[60px] relative">
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
                  Зарегистрироваться
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
