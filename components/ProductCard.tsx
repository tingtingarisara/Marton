import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative h-64 overflow-hidden bg-gray-100">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-marton-orange text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-2 right-2 bg-marton-red text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
        />
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center space-x-2">
          <button className="p-2 bg-white rounded-full hover:bg-marton-red hover:text-white transition shadow-lg">
            <Eye className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full hover:bg-marton-red hover:text-white transition shadow-lg">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-xs text-marton-gray uppercase mb-1">{product.category}</p>
        <h3 className="font-bold text-lg text-marton-dark mb-2 group-hover:text-marton-red transition line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        <div className="flex items-end justify-between">
          <div>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                ฿{product.oldPrice.toLocaleString()}
              </span>
            )}
            <span className="text-xl font-bold text-marton-red">
              ฿{product.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
