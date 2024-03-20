import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CategoryContextType {
    selectedCategory: string;
    handleSelectCategory: (category: string) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export const CategoryProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <CategoryContext.Provider value={{ selectedCategory, handleSelectCategory }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (context === undefined) {
        throw new Error('useCategory must be used within a CategoryProvider');
    }
    return context;
};
