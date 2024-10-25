"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import '/style/cart.css'; 

interface booktype {
  id: number;
  title: string;
  price: number;
  star: number;
  rating: number;
  Edition: string;
  Authors: string;
  image: string;
  description: string;
  Publisher: string;
  PublicationDate: string;
}

interface CartItem {
  selectedBook: booktype;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setcartItems] = useState<CartItem[]>([]);
  const [orderConfirm, setOrderConfirm] = useState<boolean>(false);

  // get data from localStorage and save in state for use
  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem("cart");
    if (dataFromLocalStorage) {
      setcartItems(JSON.parse(dataFromLocalStorage));
    }
  }, []);

  const handleRemove = (id: number) => {
    const updated: CartItem[] = cartItems.filter((item) => item.selectedBook.id !== id);
    setcartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.selectedBook.price * item.quantity;
    }, 0);
  };

  const confirmOrder = () => {
    // Clear the cart from state and localStorage
    setcartItems([]);
    localStorage.removeItem("cart");
    // Show order confirmation message
    setOrderConfirm(true);
  };

  const randomId = Math.floor(Math.random() * 5000) + 1;

  return (
    <main className="main-container">
      {cartItems.length > 0 || orderConfirm ? (
        <div className="container">
          {orderConfirm ? (
            <div className="confirmation-message">
              <h2 className="confirmation-title">
                Thank you! Your order has been confirmed.
              </h2>
              <p>
                Your order ID is <strong>#{randomId}</strong>. We will notify you once your order is on its way.
              </p>
              <Link href="/books" className="link">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <table >
              <thead>
                <tr className="table-header">
                  <th className="table-cell">Item</th>
                  <th className="table-cell">Quantity</th>
                  <th className="table-cell">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.selectedBook.id} className="table-row">
                    <td className="item">
                      <Image
                        src={item.selectedBook.image}
                        alt={item.selectedBook.title}
                        height={100}
                        width={100}
                        
                      />
                      <div className = 'itemContent'>
                        <h5 >{item.selectedBook.title}</h5>
                        <button
                          className="removeButton"
                          onClick={() => handleRemove(item.selectedBook.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                    <td className="table-cell">{item.quantity}</td>
                    <td className="table-cell ">
                      ${(item.selectedBook.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="subtotal">
                  <td className="text-right" colSpan={2}>
                    SubTotal
                  </td>
                  <td >${calculateTotalPrice().toFixed(2)}</td>
                </tr>
                <tr className="subtotal">
                  <td className="text-right" colSpan={2}>
                    Delivery Charges
                  </td>
                  <td>$85</td>
                </tr>
                <tr className="subtotal">
                  <td  colSpan={2}>
                    Total
                  </td>
                  <td >${(calculateTotalPrice() + 85).toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <button
                      onClick={confirmOrder}
                      className="button"
                    >
                      Confirm Order
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      ) : (
        <div className="confirmation-message">
          <h2>
            No items in the cart
          </h2>
          <Link href="/books" className="link">
            Continue Shopping
          </Link>
        </div>
      )}
    </main>
  );
}
