import { createContext, useState, ReactNode } from 'react';

interface SearchContextInput {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}