import { useState } from 'react';
import { Heart, Plus } from 'lucide-react';

const designs = [
  { id: 1, category: 'Nude', image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg', likes: 0, height: 'tall' },
  { id: 2, category: 'Almond', image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg', likes: 0, height: 'short' },
  { id: 3, category: 'Autumn', image: 'https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg', likes: 0, height: 'medium' },
  { id: 4, category: 'Artistic', image: 'https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg', likes: 0, height: 'short' },
  { id: 5, category: 'Nude', image: 'https://images.pexels.com/photos/3997400/pexels-photo-3997400.jpeg', likes: 0, height: 'tall' },
  { id: 6, category: 'Almond', image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg', likes: 0, height: 'medium' },
  { id: 7, category: 'Autumn', image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg', likes: 0, height: 'short' },
  { id: 8, category: 'Artistic', image: 'https://images.pexels.com/photos/3997376/pexels-photo-3997376.jpeg', likes: 0, height: 'tall' },
  { id: 9, category: 'Nude', image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg', likes: 0, height: 'medium' },
];

const categories = ['All', 'Nude', 'Almond', 'Autumn', 'Artistic'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [liked, setLiked] = useState<Record<number, number>>({});
  const [inspoCount, setInspoCount] = useState(0);

  const filteredDesigns = selectedCategory === 'All'
    ? designs
    : designs.filter(design => design.category === selectedCategory);

  const handleLike = (id: number) => {
    setLiked(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
  };

  const handleAddToInspo = () => {
    setInspoCount(prev => prev + 1);
  };

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'tall': return 'row-span-2';
      case 'medium': return 'row-span-1';
      case 'short': return 'row-span-1';
      default: return 'row-span-1';
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-stone-100 via-amber-50/30 to-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-6xl md:text-7xl font-light text-stone-800 mb-4">
            Inspiration Gallery
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full mx-auto mb-6" />
          <p className="text-lg text-stone-600 font-light">
            Discover designs that speak to your style
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-light tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white shadow-lg scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 ${getHeightClass(design.height)} animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={design.image}
                alt={`${design.category} nail design`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleLike(design.id)}
                    className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white transition-colors duration-200"
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        liked[design.id] ? 'fill-red-500 text-red-500 scale-125' : 'text-stone-600'
                      }`}
                    />
                    <span className="text-sm font-medium text-stone-800">
                      {(design.likes + (liked[design.id] || 0))}
                    </span>
                  </button>

                  <button
                    onClick={handleAddToInspo}
                    className="flex items-center gap-2 bg-amber-500 text-white px-4 py-2 rounded-full hover:bg-amber-600 transition-all duration-200 hover:scale-105"
                  >
                    <Plus className="w-5 h-5" />
                    <span className="text-sm font-medium">Inspo</span>
                  </button>
                </div>
              </div>

              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-700">
                {design.category}
              </div>
            </div>
          ))}
        </div>

        {inspoCount > 0 && (
          <div className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 animate-slide-up">
            <Heart className="w-6 h-6 fill-white" />
            <span className="font-medium">{inspoCount} designs saved</span>
          </div>
        )}
      </div>
    </section>
  );
}
