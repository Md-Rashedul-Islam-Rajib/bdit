import { createContext, useState, ReactNode } from 'react';

interface SearchContextInput {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
    
})