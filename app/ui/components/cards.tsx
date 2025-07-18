// app/components/Card.tsx
import { ReactNode } from 'react';

interface CardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  color?: string; // opsional, untuk variasi warna card
  unit?: string;  // opsional, untuk satuan (pcs, produk, dsb)
}

export default function Card({ icon, title, value, color = 'white', unit }: CardProps) {
  const colorMap: Record<string, string> = {
    pink: 'bg-pink-100 border-pink-300',
    yellow: 'bg-yellow-100 border-yellow-300',
    purple: 'bg-purple-100 border-purple-300',
    green: 'bg-green-100 border-green-300',
    blue: 'bg-blue-100 border-blue-300',
    white: 'bg-white'
  };

  return (
    <div className={`rounded-2xl border-2 p-6 flex flex-col items-center w-56 ${colorMap[color] || colorMap.white}`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-lg font-semibold text-gray-700 mb-1">{title}</div>
      <div className="text-3xl font-bold text-pink-500 mb-1">
        {value} {unit && <span className="text-base text-gray-500">{unit}</span>}
      </div>
    </div>
  );
}