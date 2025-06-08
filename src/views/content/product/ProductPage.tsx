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
    <div className="container py-8">
     

      <div className="grid md:grid-cols-2 gap-8 mt-6">

        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          
          <div className="mt-4 text-2xl font-semibold text-primary">
            {product.price} ₽
          </div>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>

          <div className="mt-8 space-y-4">

          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold">О продукте:</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li>• Вес: 1.5 кг</li>
              <li>• Срок хранения: 48 часов</li>
              <li>• Состав: мука, яйца, сливки, шоколад</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Вам может понравиться</h2>
      </section>
    </div>
  );
};