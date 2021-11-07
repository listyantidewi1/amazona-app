import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { listProducts } from "../actions/productActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";

export default function ProductListScreen(props) {
  const productList = useSelector((state) => state.productList);
  const dispatch = useDispatch();
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  const deleteHandler = () => {
    //TODO: dispatch deleteHandler
  };
  return (
    <div>
      <div>
        <NavLink className="smalltext" to="/dashboard">
          &#8592; Go to admin dashboard
        </NavLink>
      </div>
      <h1>Products</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>PRODUCT ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>
                <td>
                  <button
                    type="button"
                    class="small"
                    onClick={() =>
                      props.history.push(`/product/${product._id}`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="small"
                    onClick={() => deleteHandler(product)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
