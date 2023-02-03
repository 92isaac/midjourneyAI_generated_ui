import React from 'react';

const ProductSlider = () => {
    const randomImage = `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/500/500`;
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-10 bg-gray-300">
        <h3 className="text-2xl font-bold">Product Name</h3>
        <p className="text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit, ipsum eu posuere efficitur, magna risus bibendum ligula, eu aliquet enim ante a quam.
        </p>
        <button className="bg-teal-500 text-white py-2 px-4 rounded">Learn More</button>
      </div>
      <div className="lg:w-1/2 p-10 bg-gray-500">
        <img src={randomImage} alt="Product" className="w-full h-64 object-cover" />
      </div>
    </div>
  );
};

export default ProductSlider;
