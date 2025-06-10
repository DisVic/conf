import { useEffect, useState } from "react";
import { Footer } from "../../components/layout/footer";
import { useNavigate } from "react-router-dom";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
}

export const Reviews = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Вячеслав Васильевич В.",
      rating: 5,
      text: "Одна из лучших кондитерских! Быстрая и удобная доставка! Вкус изделий уникален и прекрасен! Заказывайте не пожалеете"
    },
    {
      id: 2,
      name: "Владимир Виллович В.",
      rating: 5,
      text: "Поставил 5 звезд за оперативну доставку, вежливый персонал и безумно вкусные и свежие десерты!"
    },
    {
      id: 3,
      name: "Виктория Викторовна В.",
      rating: 5,
      text: "Уже не первый раз заказываю тут торт на день рождения! Все нравится! Закажу еще!"
    }
  ]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    text: "",
    rating: 5
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false)
    if (!formData.name || !formData.text) {
      setError("Пожалуйста, заполните все обязательные поля");
      return;
    }

    const newReview: Review = {
      id: reviews.length + 1,
      name: formData.name,
      rating: formData.rating,
      text: formData.text
    };

    setReviews([...reviews, newReview]);
    setAlert("Отзыв отправлен!");
    setFormData({
      name: "",
      email: "",
      text: "",
      rating: 5
    });
    
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const navigate = useNavigate();
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

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <img 
        key={i} 
        src="/star.png" 
        alt="" 
        className="w-[20px] h-[20px]" 
      />
    ));
  };

  const renderReview = (review: Review, index: number) => {
    const isEven = index % 2 !== 0;
    
    return (
      <div 
        key={review.id} 
        className={`gap-5 flex flex-col custom:flex-row items-center justify-start ${isEven ? 'custom:justify-end' : 'custom:justify-start'} w-[100%] mt-5`}
      >
        {(!isEven || isMobile) && (
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] inline-block w-[200px] h-[200px] rounded-full overflow-hidden">
            <div className={`absolute inset-0 rounded-full bg-gradient-to-${isEven ? 'l' : 'r'} from-[#C5364B] to-[#FFF] p-[10px]`}>
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: `url(${review.avatar})`,
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        )}
        
        <div className={`gap-3 text-center custom:text-left ${isEven ? 'custom:ml-auto' : ''}`}>
          <div className={isEven ? "w-[314px] custom:justify-items-start" : ""}>
            <h1 className="font-['HelveticaNeueCyrr'] text-[15px]">{review.name}</h1>
            <div className="flex flex-row justify-center custom:justify-start">
              {renderStars(review.rating)}
            </div>
          </div>
          <p className={`font-['HelveticaNeueCyr'] ${isEven ? 'w-[314px]' : 'w-[300px]'} text-[18px] ${isEven ? 'custom:ml-auto' : ''} text-left`}>
            {review.text}
          </p>
        </div>
        
        {isEven && !isMobile && (
          <div className="relative transition-transform duration-300 ease-in-out hover:scale-[1.2] hidden w-[200px] h-[200px] rounded-full overflow-hidden custom:inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-[#C5364B] to-[#FFF] p-[10px]">
              <div
                className="w-full h-full rounded-full"
                style={{
                  backgroundImage: `url(${review.avatar})`,
                  backgroundPosition: "30% center",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      
      <div className="bg-white h-auto mobile:hidden ">
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
          
          {reviews.map((review, index) => renderReview(review, index))}
          
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

      {/* Mobile Version (391px) */}
      <div className="hidden mobile:block bg-white h-auto px-4 py-6">
        <h1
          className="text-center font-[fontsDrops] text-[32px] mb-6"
          style={{
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          Отзывы
        </h1>

        <div className="space-y-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#FFF5F5] rounded-2xl p-4 shadow-md">
              <div className="flex items-center mb-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#C5364B] to-[#FFF] p-1 mr-3">
                  <div
                    className="w-full h-full rounded-full bg-cover bg-center"
                  ></div>
                </div>
                <div>
                  <h3 className="font-['HelveticaNeueCyrr'] text-[14px]">{review.name}</h3>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="font-['HelveticaNeueCyr'] text-[14px]">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div
          onClick={() => setIsModalOpen(true)}
          className="bg-[#C5364B] rounded-full py-3 w-full max-w-[200px] mx-auto mt-8
                text-white text-center transition-transform duration-300 ease-in-out 
                shadow-md shadow-[#C5364B] hover:scale-105 hover:shadow-lg hover:shadow-[#C5364B]"
        >
          Оставить отзыв
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[999999999]">
          <div className="bg-[#fff] w-[90%] max-w-[500px] px-[20px] sm:px-[30px] py-8 border-[#FECFCF] border-[1px] rounded-[20px] text-left">
            <div className="flex flex-row items-center justify-between mb-4">
              <h2 className="font-['HelveticaNeueCyrr'] text-[18px] font-medium">
                Оставить отзыв
              </h2>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setAlert("");
                  setError("");
                }}
                className="text-[28px] text-[#5e5757] hover:scale-[1.1]"
              >
                ×
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="font-['HelveticaNeueCyrr'] text-[14px] block mb-1">
                  Имя и Фамилия*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#ffe9e9] rounded-full px-4 py-2 text-[14px]"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="font-['HelveticaNeueCyrr'] text-[14px] block mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#ffe9e9] rounded-full px-4 py-2 text-[14px]"
                />
              </div>
              
              <div className="mb-4">
                <label className="font-['HelveticaNeueCyrr'] text-[14px] block mb-1">
                  Оценка
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={star <= formData.rating ? "/star.png" : "/star-empty.png"}
                      alt=""
                      className="w-5 h-5 cursor-pointer"
                      onClick={() => handleRatingChange(star)}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="font-['HelveticaNeueCyrr'] text-[14px] block mb-1">
                  Ваш отзыв*
                </label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  className="w-full bg-[#FF8F8F33] rounded-2xl px-4 py-3 h-[100px] text-[14px]"
                  required
                />
              </div>
              
              {error && (
                <p className="text-red-500 text-[14px] mb-3">{error}</p>
              )}
              {alert && (
                <p className="text-green-500 text-[14px] mb-3">{alert}</p>
              )}
              
              <button

                type="submit"
                className="bg-[#C5364B] w-full py-3 rounded-full text-white text-[16px] font-medium
                      transition-transform duration-300 hover:scale-[1.02]"
              >
                Отправить
              </button>
            </form>
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