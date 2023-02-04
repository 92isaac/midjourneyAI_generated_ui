import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { heroText } from '../../data/data';

const ProductCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [products] = useState(heroText);

  const onChange = (index) => {
    setSelectedItem(index);
    if (index === products.length - 1) {
      setSelectedItem(0);
    }
  };

  return (
    <Carousel showArrows={false} showThumbs={false} showStatus={false} selectedItem={selectedItem} onChange={onChange} infiniteLoop={true}>
      {products.map(product => (
        <div className="grid grid-cols-2 w-full" key={product.id} style={{height:"65vh"}}>
          <div className=" bg-gray-200 p-10 text-black">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-base sm:text-lg">{product.description}</p>
          </div>
          <div className="w-full">
            <img src={product.image} alt={product.name} className="object-cover aspect-square" />
          </div>
        </div>
      ))}
    </Carousel>

  );
};

export default ProductCarousel;
