import React, { memo } from 'react';

interface MarketCardProps {
  title: string;
  category: string;
  chance: number;
}

const MarketCard: React.FC<MarketCardProps> = memo(({ title, category, chance }) => {
  return (
    <div className="w-[600px] h-[315px] bg-gray-800 p-6 rounded-xl shadow-lg">
      <div className="flex gap-4 mb-6">
        <div className="px-4 py-2 bg-green-500/20 text-green-400 rounded-lg text-base font-bold">
          Active
        </div>
        <div className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg text-base font-bold">
          #{category}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="mb-6">
        <div className="text-gray-400 text-sm mb-1">CHANCE</div>
        <div className="text-3xl font-bold">{chance}%</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          DegenPredict
        </div>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
          Trade now
        </button>
      </div>
    </div>
  );
});

MarketCard.displayName = 'MarketCard';

export default MarketCard; 