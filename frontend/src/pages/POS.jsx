import React, { useEffect, useState } from "react";
import Main from "../layouts/Main";
import axios from "axios";

const POS = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get("http://localhost:5000/products");
    const res = await result.data;
    setProducts(res);
    setIsLoading(false);
  };

  const addProductToCart = async(product) => {
    // check if adding product also exist

    let findProdcutInCart = await cart.find((i) => {
      return (i.id === product.id);
    });
    if (findProdcutInCart) {
      //
      let newCart = [];
      let newItem;
      cart.forEach((cartItem) => {
        if (cartItem.id === product.id) {
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            totalAmount: cartItem.price * (cartItem.quantity + 1),
          };
          newCart.push(newItem);
        } else {
          newCart.push(cartItem);
        }
      });

      setCart(newCart);

    } else {
      let addingProdut = {
        ...product,
        "quantity": 1,
        "totalAmount": product.price,
      };
      setCart([...cart, addingProdut]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Main>
      <div className="row">
        <div className="col-lg-8">
          {isLoading ? (
            "Loading..."
          ) : (
            <div className="row">
              {products.map((product, key) => (
                <div key={key} className="col-lg-4">
                  <div
                    className="border"
                    onClick={() => addProductToCart(product)}
                  >
                    <p>{product.name}</p>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid"
                    />
                    <p>{product.paking}</p>
                    <p>Rs {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <div className="table-responsive bg-dark">
            <table className="table table-responsive table-dark table-hover">
              <thead>
                <tr>
                  <td>#</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Action</td>                  
                </tr>
              </thead>
            </table>
            <tbody>
              {
                 cart ? cart.map((cartProduct, key) => <tr key={key}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>
                  <td>
                    <button className="btn btn-danger btn-sm">Remove</button>
                  </td>
                 </tr>) : "No Item in Cart" 
              }
            </tbody>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default POS;
