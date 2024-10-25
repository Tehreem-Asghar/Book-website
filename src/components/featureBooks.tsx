"use client";
import React from "react";
import { featureBooks } from "../../mydb/page";
import { useEffect } from "react";
import Image from 'next/image';
import Stars from './stars';
import { useRouter } from 'next/navigation';
import '/style/featureBooks.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

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

export function FeatureBooks() {

  const router = useRouter();
  const Books = featureBooks.slice(0, 4);

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  

  // Function to handle adding book to cart
  const addToCart = (selectedBook: booktype) => {
    // Retrieve existing cart items from localStorage
    const cartItems = localStorage.getItem('cart');

    // If cart exists, parse it, otherwise initialize as an empty array
    const cart: CartItem[] = cartItems ? JSON.parse(cartItems) : [];

    // Check if the selected book is already in the cart
    const existingItem = cart.find((item: CartItem) => item.selectedBook.id === selectedBook.id);

    if (existingItem) {
      // If book already exists in the cart, increase its quantity
      existingItem.quantity += 1;
    } else {
      // Otherwise, add the selected book with quantity 1
      const newCartItem: CartItem = {
        selectedBook: selectedBook,
        quantity: 1,
      };
      cart.push(newCartItem);
    }

    // Update localStorage with the new cart
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleBuyNow = (book: booktype) => {
    addToCart(book); 
    router.push('/cart'); 
  };


  return (
    <div className="featureBook">

       <h2 className="trendingBooks">Trending Books </h2>

      <div className="books-grid"   >
        {Books.map((book) => (
          <div  key={book.id} className="card"  data-aos="fade-up" data-aos-duration="3000" data-aos-easing="linear" >
            <Image
              src={book.image}
              alt={book.title}
              width={150}
              height={200}
            className="BookImage"
            />
            <div className="content">
              <h2
                onClick={() => router.push(`/books/${book.id}`)}
               className="bookName"
              >
                {book.title}
              </h2>
              <p className="author">{book.Authors}</p>
              <p className="price">Price: ${book.price}</p>

               <h1>
                <Stars stars={book.star} rating={book.rating} />
               </h1>
              <button
                onClick={() => handleBuyNow(book)}
                
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  
}



