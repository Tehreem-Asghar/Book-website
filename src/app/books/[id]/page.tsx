"use client";
import React, { useState } from "react";
import { books , featureBooks} from "../../../../mydb/page"; 
import Image from "next/image";
import Stars from "@/components/stars";
import '/style/bookId.css'

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
  selectedBook: booktype;  // This will hold the book object
  quantity: number;  // This will hold the quantity of the selected book
}


export default function Book({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const combine = books.concat(featureBooks)
  const booksData: booktype[] = combine;
  const [quantity, setquantity] = useState<number>(1);
  const [confirmationMessage, setConfirmationMessage] = useState<string | null>(null); 

 // Find out specific book
 const selectedBook = booksData.find((item) => String(item.id) == id);

  // Increment and Decrement functions
  const increment = () => {
    setquantity((prev) => prev + 1);
  };
  const decrement = () => {
    setquantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

 

  // If book is not found
  if (!selectedBook) {
    return <div>Book not found</div>;
  }

  // Function to add to cart
  const addtocart = () => {
    if (selectedBook) {
      // Check if 'cart' already exists in localStorage
      const cartItems = localStorage.getItem("cart");
  
      // If cart exists, parse it, otherwise initialize as an empty array
      const cart : CartItem[]  = cartItems ? JSON.parse(cartItems) : [];
  
      // Check if the selected book is already in the cart
      const existingItem : CartItem | undefined = cart.find((item: CartItem) => item.selectedBook.id === selectedBook.id);
  
      if (existingItem) {
        // Update the quantity if the book is already in the cart
        existingItem.quantity += quantity;
      } else {
        // Add the new book with its quantity
        const data : CartItem= {
          selectedBook: selectedBook,
          quantity: quantity,
        };
        cart.push(data);
      }
  
      // Save the updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
  
      // Show confirmation message for 4 seconds
      setConfirmationMessage(
        "Your item has been added to the cart! Continue shopping."
      );
      setTimeout(() => {
        setConfirmationMessage(null); // Remove the message after 4 seconds
      }, 4000);
    }
  };
  

  return (
   <main>
    <div key={selectedBook.id} className="book-container">
  <div className="book-details">
    {/* Book image */}
    <div className="book-image">
      <Image
        src={selectedBook.image}
        alt={selectedBook.title}
        width={300}
        height={400}
        className="book-img-style"
      />
    </div>

    {/* Book Details */}
    <div className="book-info">
      <h1 className="book-title">
        {selectedBook.title}
        <i className="book-edition">
          ({selectedBook.Edition} Edition)
        </i>
      </h1>
      <p className="book-author">{selectedBook.Authors}</p>

      <p className="book-publisher">
        <strong>Publisher:</strong> {selectedBook.Publisher}
      </p>
      <p className="book-pub-date">
        <strong>Publication Date:</strong> {selectedBook.PublicationDate}
      </p>
      <h1 className="book-rating">
        <Stars stars={selectedBook.star} rating={selectedBook.rating} />
      </h1>
      <p className="book-price">
        <i>Price :</i> ${selectedBook.price.toFixed(2)}
      </p>
      <div className="quantity-cart">
        <div className="quantity-controls">
          <button onClick={decrement} className="quantity-btn">
            -
          </button>
          <p className="quantity-display">{quantity}</p>
          <button onClick={increment} className="quantity-btn">
            +
          </button>
        </div>
        <button onClick={addtocart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>

      {/* Confirmation Message */}
      {confirmationMessage && (
        <div className="confirmation-message">
          {confirmationMessage}
        </div>
      )}
    </div>
  </div>

  {/* Book Description */}
  <h1 className="book-description-title">About this item</h1>
  <p className="book-description">{selectedBook.description}</p>
</div>
</main>

 
   );
}