import { createContext, useContext, ReactNode, FC } from 'react';
import { ProductsList } from '../config/products';

export interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

interface ProductCategory {
  title: string;
  data: Product[];
}


interface ProductsContextType {
  categories: ProductCategory[]; 
  getAllProducts: () => Product[]; 
  getProductById: (id: number) => Product | undefined; 
}

const ProductsContext = createContext<ProductsContextType | null>(null);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: FC<ProductsProviderProps> = ({ children }) => {

  const getAllProducts = () => {
    return ProductsList.flatMap(category => category.data);
  };

  const getProductById = (id: number) => {
    return getAllProducts().find(product => product.id === id);
  };

  const value = {
    categories: ProductsList,
    getAllProducts,
    getProductById
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider');
  }
  return context;
};