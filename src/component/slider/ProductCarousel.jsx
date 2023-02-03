// import React, { useState } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const ProductCarousel = () => {
//   const [selectedItem, setSelectedItem] = useState(0);
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Product 1',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
//       image: 'https://via.placeholder.com/200x200'
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
//       image: 'https://via.placeholder.com/200x200'
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
//       image: 'https://via.placeholder.com/200x200'
//     }
//   ]);

//   const onChange = (index) => {
//     setSelectedItem(index);
//     if (index === products.length - 1) {
//       setSelectedItem(0);
//     }
//   };

//   return (
//     <Carousel showArrows={false} showThumbs={false} showStatus={false} selectedItem={selectedItem} onChange={onChange}>
//       {products.map(product => (
//         <div className="flex w-full" key={product.id}>
//           <div className="flex-1 bg-gray-200 p-10">
//             <h2 className="text-xl font-bold">{product.name}</h2>
//             <p className="text-base sm:text-lg">{product.description}</p>
//           </div>
//           <div className="flex-1">
//             <img src={product.image} alt={product.name} />
//           </div>
//         </div>
//       ))}
//     </Carousel>

//   );
// };

// export default ProductCarousel;

import React, { useState, useEffect } from 'react';

const ProductCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
      image: 'https://via.placeholder.com/200x200'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
      image: 'https://via.placeholder.com/200x200'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna non rhoncus pharetra, ex lacus tempor sapien, eu semper leo mi vel est.',
      image: 'https://via.placeholder.com/200x200'
    }
  ]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedItem((selectedItem + 1) % products.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [selectedItem, products.length]);
  
  return (
    <div className="flex flex-wrap overflow-hidden">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`w-full md:w-1/2 overflow-hidden ${index === selectedItem || index === selectedItem + 1 ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="bg-gray-200 p-10">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="mt-10">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCarousel;

