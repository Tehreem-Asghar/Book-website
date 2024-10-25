'use client';

import { books } from '../../mydb/page';
import Image from 'next/image';
import Stars from './stars';
import { useRouter } from 'next/navigation';
import '/style/card.css'

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

export function Card() {
  const router = useRouter();

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

  // Handle 'Buy Now' click event
  const handleBuyNow = (book: booktype) => {
    addToCart(book); // Add the book to the cart
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <div className="book-container">
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={200}
              className="book-image"
            />
            <div className="book-content">
              <h2
                onClick={() => router.push(`/books/${book.id}`)}
                className="book-title"
              >
                {book.title}
              </h2>
              
              <p className="book-author">{book.Authors}</p>
              <p className="book-price">Price: ${book.price}</p>
              <h1>
                <Stars stars={book.star} rating={book.rating} />
              </h1>
              <button
                onClick={() => handleBuyNow(book)}
                className="buy-now-btn"
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



