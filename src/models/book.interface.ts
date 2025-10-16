export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  price: number;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  description: string;
  imageUrl: string;
  category: string;
  sellerId: string;
  sellerName: string;
  dateAdded: Date;
  isAvailable: boolean;
  location: string;
}

export interface BookCategory {
  id: string;
  name: string;
  icon: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
  booksForSale: Book[];
  booksPurchased: Book[];
  cart: CartItem[];
}