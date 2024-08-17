import { createContext, useState, ReactNode } from 'react';

interface SearchContextInput {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
    searchQuery: '',
    setSearchQuery: () => {},
})


export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    
}