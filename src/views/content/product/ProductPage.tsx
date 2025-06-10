import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../../context/context';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();

  const product = getProductById(Number(id));
  const navigate = useNavigate();

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
      <button className='ml-[130px] mobile:ml-[20px] mobile:w-[35px] mobile:h-[35px]'
        onClick={() => {
          navigate(`/menu`);
          window.location.reload();
        }}
      ><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.9375 21.5H8.0625M8.0625 21.5L18.1406 32.25M8.0625 21.5L18.1406 10.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
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
          <h1 className="text-[36px] font-bold mt-[-6px] mobile:text-[20px] mobile:ml-[28px] mobile:mt-0 mobile:mb-[-15px]">{product.name}</h1>

          <p className="mt-6 text-gray-700 font-['HelveticaNeueCyrr'] text-[15px] w-[400px] mobile:text-[13px] mobile:w-[318px] mobile:ml-[28px]">
            {product.description}
          </p>

          <div className="mt-4 font-semibold text-primary font-[Choplin] text-[20px] mobile:text-[15px] mobile:ml-[27px] mobile:mb-[-10px]">
            {product.price} <a className='font-[Choplin]'>p</a>
          </div>
          <button className="w-[150px] ml-[30px] mt-[25px] py-[10px] rounded-full bg-[#C5364B] text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg nemobile:hidden">В корзину</button>

          <div className='font-bold text-[20px] mobile:text-[16px] mobile:ml-[28px] w-[99px] h-[24px] mb-[20px] mt-[15px]'>Описание</div>
          <h1 className='text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]'>Основа:</h1>
          <div className='font-light text-[13px] w-[552px] mb-[20px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]'>
            {product.composition}
          </div>
          <h1 className='text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]'>Украшение:</h1>
          <div className='font-light text-[13px] w-[552px] mb-[10px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]'>
            {product.decor}
          </div>
          <h1 className='text-[16px] font-bold mb-[10px] mobile:text-[13px] mobile:ml-[30px]'>Варианты дизайна:</h1>
          <div className='font-light text-[13px] w-[552px] mb-[10px] mobile:text-[13px] mobile:ml-[30px] mobile:w-[328px]'>
            {product.design}
          </div>
          <div className='ml-[30px] text-[13px] mb-[30px] nemobile:hidden'>
            <a className='font-bold'>Калорийность: </a>
            <br/>
            {product.calories}
          </div>
        </div>
      </div>
      <div className='font-light text-[13px] w-[552px] mt-[-70px] ml-[130px] mobile:hidden'>
        <a className='text-[16px] font-bold mb-[10px]'>Калорийность: </a>{product.calories}
      </div>
      <button className="w-[150px] ml-[332px] mt-[25px] py-[10px] rounded-full bg-[#C5364B] text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg mobile:hidden">В корзину</button>
    </div>



  );
};