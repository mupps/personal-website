import Image from 'next/image';
import Link from 'next/link';
import { libraryItems } from './library-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Games and shows I have been enjoying recently',
};

export default function Library() {
  return (
    
    <div className="max-w-6xl mx-auto">
      
      <h1 className="text-3xl font-bold mb-8">My Library</h1>
      <Link
        href="/about"
        className="inline-block mb-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
      >
        ← Back to About
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {libraryItems.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800/50 rounded-lg overflow-hidden transition-all duration-200 hover:transform hover:scale-[1.02]"
          >
            <div className="aspect-[2/3] relative">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-1 text-sm rounded-full ${
                  item.status === 'current'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                }`}>
                  {item.status === 'current' ? 
                    (item.type === 'game' ? 'Playing' : 'Watching') : 
                    'Completed'}
                </span>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.startDate}
                </span>
              </div>

              {item.thoughts && (
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                  {item.thoughts}
                </p>
              )}

              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                >
                  View Details ↗
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

