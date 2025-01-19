import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Author, Book } from '../types';

interface DataContextType {
  authors: Author[];
  books: Book[];
  addAuthor: (author: Author) => void;
  addBook: (book: Book) => void;
  deleteAuthor: (id: string) => void;
  deleteBook: (id: string) => void;
  getAuthor: (id: string) => Author | undefined;
  getBook: (id: string) => Book | undefined;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [authors, setAuthors] = useState<Author[]>(() => {
    const savedAuthors = localStorage.getItem('authors');
    return savedAuthors ? JSON.parse(savedAuthors) : [];
  });

  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  useEffect(() => {
    localStorage.setItem('authors', JSON.stringify(authors));
  }, [authors]);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addAuthor = (author: Author) => {
    setAuthors(prev => [...prev, author]);
  };

  const addBook = (book: Book) => {
    setBooks(prev => [...prev, book]);
  };

  const deleteAuthor = (id: string) => {
    setAuthors(prev => prev.filter(author => author.id !== id));
    setBooks(prev => prev.filter(book => book.author_id !== id));
  };

  const deleteBook = (id: string) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const getAuthor = (id: string) => {
    return authors.find(author => author.id === id);
  };

  const getBook = (id: string) => {
    return books.find(book => book.id === id);
  };

  return (
    <DataContext.Provider value={{
      authors,
      books,
      addAuthor,
      addBook,
      deleteAuthor,
      deleteBook,
      getAuthor,
      getBook
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
} 