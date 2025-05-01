'use client';

import { useState, useCallback } from 'react';
import MarketCard from '@/components/MarketCard';

export default function Home() {
  const [title, setTitle] = useState('Will Bitcoin reach $100k by 2025?');
  const [category, setCategory] = useState('Bitcoin');
  const [chance, setChance] = useState(50);

  const handleTitleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const handleCategoryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }, []);

  const handleChanceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setChance(Number(e.target.value));
  }, []);

  return (
    <main className="min-h-screen p-8 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">OG Image Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <input
                type="text"
                value={category}
                onChange={handleCategoryChange}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Chance (%)</label>
              <input
                type="number"
                value={chance}
                onChange={handleChanceChange}
                min="0"
                max="100"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <MarketCard
              title={title}
              category={category}
              chance={chance}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 