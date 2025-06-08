import { useParams } from 'react-router-dom';
import { useProducts } from '../../../context/context';

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  
  const product = getProductById(Number(id));

  if (!product) {
    return (
      <div className="container py-8 text-center">
        <h1 className="text-2xl font-bold">Продукт не найден</h1>
        <p className="mt-4">Извините, запрашиваемый продукт не существует.</p>
      </div>
    );
  }

  return (
    <div className="bg-white h-auto">
     

     
    </div>
  );
};