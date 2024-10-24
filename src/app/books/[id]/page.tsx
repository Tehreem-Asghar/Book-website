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


export default function Book({ params }: { params: { id: string } }) {
   const {id}  = params;
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

  //   <div key={selectedBook.id} className="max-w-4xl mx-auto p-6">
  //     <div className="flex flex-col md:flex-row items-center gap-8">
  //       {/* Book image */}
  //       <div className="w-full md:w-1/3">
  //          <Image
  //           src={selectedBook.image}
  //           alt={selectedBook.title}
  //           width={300}
  //           height={400}
  //           className="rounded shadow-md"
  //         />
  //       </div>

  //       {/* Book Details */}
  //       <div className="w-full md:w-2/3">
  //         <h1 className="text-3xl font-serif text-purple-800 mb-4 ">
  //           {selectedBook.title}
  //           <i className="text-gray-700 font-light text-2xl">
  //             ({selectedBook.Edition} Edition)
  //           </i>
  //         </h1>
  //         <p className="text-lg text-orange-700 mb-2">{selectedBook.Authors}</p>

  //         <p className="text-lg text-gray-700 mb-2">
  //           <strong>Publisher:</strong> {selectedBook.Publisher}
  //         </p>
  //         <p className="text-lg text-gray-700 mb-2">
  //           <strong>Publication Date:</strong> {selectedBook.PublicationDate}
  //         </p>
  //         <h1 className="mb-2">
  //           <Stars stars={selectedBook.star} rating={selectedBook.rating} />
  //         </h1>
  //         <p className="text-2xl font-semibold text-green-600 mb-4">
  //           <i className="text-gray-700">Price :</i> $
  //           {selectedBook.price.toFixed(2)}
  //         </p>
  //         <div className="flex gap-10">
  //           <div className="flex">
  //             <button
  //               onClick={decrement}
  //               className="text-3xl rounded-lg font-semibold h-12 p-1 w-10 bg-neutral-300 text-gray-700"
  //             >
  //               -
  //             </button>
  //             <p className="w-8 text-center pt-2">{quantity}</p>
  //             <button
  //               onClick={increment}
  //               className="text-3xl rounded-lg font-semibold h-12 p-1 w-10 bg-neutral-300 text-gray-700"
  //             >
  //               +
  //             </button>
  //           </div>
  //           <button
  //             onClick={addtocart}
  //             className="h-12 p-2 w-2/5 rounded-lg bg-purple-800 text-white md:text-2xl"
            
  //           >
  //             Add to Cart
  //           </button>
  //         </div>

  //         {/* Confirmation Message */}
  //         {confirmationMessage && (
  //           <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
  //             {confirmationMessage}
  //           </div>
  //         )}
  //       </div>
  //     </div>

  //     {/* Book Description */}
  //     <h1 className="font-serif text-2xl text-blue-800 font-bold mt-8 mb-3">
  //       About this item
  //     </h1>
  //     <p className="text-gray-600 font-serif">{selectedBook.description}</p>
  //   </div>
 
   );
}