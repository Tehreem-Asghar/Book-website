'use client';

import { books } from '../../mydb/page';
import Image from 'next/image';
import Stars from './stars';
import { useRouter } from 'next/navigation';


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
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 pt-10">
        {books.map((book) => (
          <div
            className="w-full bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 min-h-[400px] flex flex-col justify-between"
            key={book.id}
          >
            <Image
              src={book.image}
              alt={book.title}
              width={150}
              height={150}
              className="w-[100%] md:h-44"
            />
            <div className="p-4">
              <h2
                onClick={() => router.push(`/books/${book.id}`)}
                className="text-lg font-serif text-purple-800 mb-2 line-clamp-2 cursor-pointer"
              >
                {book.title}
              </h2>
              <p className="text-sm text-pink-600">{book.Authors}</p>
              <p className="text-orange-600 font-bold text-lg mt-2">price: ${book.price}</p>
              <h1>
                <Stars stars={book.star} rating={book.rating} />
              </h1>
              <button
                onClick={() => handleBuyNow(book)} 
                className="mt-4 w-[100%] bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
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



