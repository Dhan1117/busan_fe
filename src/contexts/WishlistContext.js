// src/contexts/WishlistContext.js (이전 답변과 동일하게 유지)
import React, { createContext, useState, useEffect, useContext } from 'react';
import allTouristSpotsData from '../data/touristData'; // 모든 관광지 데이터를 가져옵니다.

export const WishlistContext = createContext();

export const useWishlist = () => {
  return useContext(WishlistContext);
};

export const WishlistProvider = ({ children }) => {
  const [wishlistIds, setWishlistIds] = useState(() => {
    const localData = localStorage.getItem('wishlistIds');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlistIds', JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  const addToWishlist = (itemId) => {
    if (!wishlistIds.includes(itemId)) {
      setWishlistIds((prevIds) => [...prevIds, itemId]);
    }
  };

  const removeFromWishlist = (itemId) => {
    setWishlistIds((prevIds) => prevIds.filter((id) => id !== itemId));
  };

  const isWishlisted = (itemId) => {
    return wishlistIds.includes(itemId);
  };

  const wishlistItems = wishlistIds.map(id => allTouristSpotsData[id]).filter(item => item);

  const value = {
    wishlistItems,
    wishlistIds,
    addToWishlist,
    removeFromWishlist,
    isWishlisted,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};