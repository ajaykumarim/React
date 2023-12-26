// // ProductList.js
// import React from 'react';

// const ProductList = ({ products, addToCart, selectProduct }) => {
//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map(product => (
//           <li key={product.id}>
//             <div>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//               <button onClick={() => selectProduct(product)}>View Details</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ProductList;
