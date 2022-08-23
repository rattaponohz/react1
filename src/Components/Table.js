import React, { useState, useEffect } from "react";

export const Table = ({ products }) => {
  const [sortProducts, setSortProducts] = useState([]);
  const onSortClick = () => {
    console.log("click");
    const temProduct = [...products];
    const res = temProduct.sort((a, b) => {
      return b.price - a.price;
    });
    setSortProducts(res);
  };

  const onRestoreClick = () => {
    setSortProducts(products);
  };

  console.log(products);
  useEffect(() => {
    setSortProducts(products);
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={onSortClick}
          >
            Up
          </button>
          <button
            type="button"
            class="btn btn-outline-warning"
            onClick={onRestoreClick}
          >
            Down
          </button>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Brand</th>
            <th scope="col">Price</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {sortProducts.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>
                  <img src={item.thumbnail} alt={item.title} width="30px" />
                  <td>{item.title}</td>
                </td>

                <td>{item.brand}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;