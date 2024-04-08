import React, { createContext, useContext, useState, ReactNode } from 'react';

export enum Category {
  All = 0,
  Paper,
  Plastic,
  CardsAndTags,
  PVC,
}

interface CategoryContextType {
  selectedCategory: Category;
  handleSelectCategory: (category: Category) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
  children: ReactNode;
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.All);

  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, handleSelectCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = (): CategoryContextType => {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};