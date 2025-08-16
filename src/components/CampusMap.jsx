import React from 'react';
import { iconMap } from '../utils/helper';

const CampusMap = ({ items, onPinClick }) => {
    return (
        <div className="relative w-full h-96 rounded-lg overflow-hidden bg-gray-200">
            <img src="https://placehold.co/800x600/E2E8F0/A0AEC0?text=Campus+Map+Layout" alt="Campus Map" className="w-full h-full object-cover"/>
            {items.map((item) => (
                <div
                    key={item.id}
                    className={`absolute w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125
                        ${item.status === 'lost' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}
                    style={{ left: `${item.coordinates.x}%`, top: `${item.coordinates.y}%` }}
                    onClick={() => onPinClick(item)}
                >
                    {iconMap[item.status]}
                </div>
            ))}
        </div>
    );
};

export default CampusMap;