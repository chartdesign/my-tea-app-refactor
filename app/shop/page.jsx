"use client";
import React, { useState } from "react";
import { CartState } from "../context/Context";
import Header from "../components/Header";
import FilterForm from "../components/FilterForm";
import SingleProduct from "../components/SingleProduct";

const ShopPage = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  // const itemsPerPage = 5; // Number of items to display per page
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };

  // Calculate the range of products to display for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = transformProducts().slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      <div className='flex'>
        <div className='container flex'>
          <FilterForm />
          {paginatedProducts.map((prod) => (
            <SingleProduct product={prod} key={prod.id} />
          ))}
          <div className='pagination'>
            <label>
              Items per Page:
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                <option value={3}>3</option>
                <option value={6}>6</option>
              </select>
            </label>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={endIndex >= transformProducts().length}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;

// "use client";
// import React, { useState } from "react";
// import { CartState } from "../context/Context";
// import Header from "../components/Header";
// import FilterForm from "../components/FilterForm";
// import SingleProduct from "../components/SingleProduct";

// const ShopPage = () => {
//   const {
//     state: { products },
//     productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
//   } = CartState();

//   const transformProducts = () => {
//     let sortedProducts = products;

//     if (sort) {
//       sortedProducts = sortedProducts.sort((a, b) =>
//         sort === "lowToHigh" ? a.price - b.price : b.price - a.price
//       );
//     }

//     if (!byStock) {
//       sortedProducts = sortedProducts.filter((prod) => prod.inStock);
//     }

//     if (byFastDelivery) {
//       sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
//     }

//     if (byRating) {
//       sortedProducts = sortedProducts.filter(
//         (prod) => prod.ratings >= byRating
//       );
//     }

//     if (searchQuery) {
//       sortedProducts = sortedProducts.filter((prod) =>
//         prod.name.toLowerCase().includes(searchQuery)
//       );
//     }
//     return sortedProducts;
//   };

//   return (
//     <>
//       <Header />
//       <div className='flex'>
//         <FilterForm />
//         <div className='container flex'>
//           {transformProducts().map((prod) => (
//             <SingleProduct product={prod} key={prod.id} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default ShopPage;
