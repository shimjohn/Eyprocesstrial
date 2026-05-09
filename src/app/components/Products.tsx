import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { LogOut, ShoppingBag } from 'lucide-react';

const categories = [
  {
    name: 'Running',
    shoes: [
      { id: 1, name: 'AeroRunner Pro', price: 129.99, image: 'https://images.unsplash.com/photo-1770177132209-e67de0b6dad8?w=400' },
      { id: 2, name: 'SpeedMax Elite', price: 149.99, image: 'https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?w=400' },
      { id: 3, name: 'CloudStride X', price: 119.99, image: 'https://images.unsplash.com/photo-1770430725086-8b677d6f25a8?w=400' },
    ]
  },
  {
    name: 'Basketball',
    shoes: [
      { id: 4, name: 'Court King Pro', price: 159.99, image: 'https://images.unsplash.com/photo-1772116278423-732c1f32c1a7?w=400' },
      { id: 5, name: 'Dunk Master Elite', price: 169.99, image: 'https://images.unsplash.com/photo-1765914448163-da25d773a87d?w=400' },
      { id: 6, name: 'Air Hoops Pro', price: 139.99, image: 'https://images.unsplash.com/photo-1772909849803-e1c298df3fd9?w=400' },
    ]
  },
  {
    name: 'Soccer',
    shoes: [
      { id: 7, name: 'StrikerBolt Pro', price: 139.99, image: 'https://images.unsplash.com/photo-1777304012191-d71e7d9be2df?w=400' },
      { id: 8, name: 'GoalRush Elite', price: 149.99, image: 'https://images.unsplash.com/photo-1767589325064-a20f42c1da11?w=400' },
      { id: 9, name: 'PitchMaster X', price: 129.99, image: 'https://images.unsplash.com/photo-1765914448100-0845241f7481?w=400' },
    ]
  },
  {
    name: 'Casual',
    shoes: [
      { id: 10, name: 'StreetWalk Pro', price: 89.99, image: 'https://images.unsplash.com/photo-1760302318631-a8d342cd4951?w=400' },
      { id: 11, name: 'Urban Glide', price: 99.99, image: 'https://images.unsplash.com/photo-1770177132209-e67de0b6dad8?w=400' },
      { id: 12, name: 'CityStep Elite', price: 79.99, image: 'https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?w=400' },
    ]
  },
  {
    name: 'Training',
    shoes: [
      { id: 13, name: 'GymFlex Pro', price: 109.99, image: 'https://images.unsplash.com/photo-1770430725086-8b677d6f25a8?w=400' },
      { id: 14, name: 'FitForce Elite', price: 119.99, image: 'https://images.unsplash.com/photo-1772116278423-732c1f32c1a7?w=400' },
      { id: 15, name: 'PowerLift X', price: 99.99, image: 'https://images.unsplash.com/photo-1765914448163-da25d773a87d?w=400' },
    ]
  },
  {
    name: 'Tennis',
    shoes: [
      { id: 16, name: 'CourtAce Pro', price: 129.99, image: 'https://images.unsplash.com/photo-1772909849803-e1c298df3fd9?w=400' },
      { id: 17, name: 'ServeMax Elite', price: 139.99, image: 'https://images.unsplash.com/photo-1777304012191-d71e7d9be2df?w=400' },
      { id: 18, name: 'NetRush X', price: 119.99, image: 'https://images.unsplash.com/photo-1767589325064-a20f42c1da11?w=400' },
    ]
  },
  {
    name: 'Hiking',
    shoes: [
      { id: 19, name: 'TrailBlazer Pro', price: 149.99, image: 'https://images.unsplash.com/photo-1765914448100-0845241f7481?w=400' },
      { id: 20, name: 'MountainGrip Elite', price: 159.99, image: 'https://images.unsplash.com/photo-1760302318631-a8d342cd4951?w=400' },
      { id: 21, name: 'PeakTrek X', price: 139.99, image: 'https://images.unsplash.com/photo-1770177132209-e67de0b6dad8?w=400' },
    ]
  },
  {
    name: 'Skateboarding',
    shoes: [
      { id: 22, name: 'BoardRider Pro', price: 94.99, image: 'https://images.unsplash.com/photo-1765914448113-ebf0ce8cb918?w=400' },
      { id: 23, name: 'SkateGrip Elite', price: 104.99, image: 'https://images.unsplash.com/photo-1770430725086-8b677d6f25a8?w=400' },
      { id: 24, name: 'FlipMaster X', price: 89.99, image: 'https://images.unsplash.com/photo-1772116278423-732c1f32c1a7?w=400' },
    ]
  }
];

export default function Products() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const currentCategory = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">ShoeHub</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Explore Our Collection
        </h2>

        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-lg font-medium whitespace-nowrap transition ${
                selectedCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory?.shoes.map((shoe) => (
            <div
              key={shoe.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {shoe.name}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-blue-600">
                    ${shoe.price}
                  </p>
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
