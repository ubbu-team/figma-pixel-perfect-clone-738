import React from 'react';
import GameCard from './GameCard';

const GamesGrid: React.FC = () => {
  const games = [
    {
      id: '1_668',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    },
    {
      id: '1_694',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    },
    {
      id: '1_714',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    },
    {
      id: '1_841',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    },
    {
      id: '1_887',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    },
    {
      id: '1_911',
      username: 'smallwhale29',
      title: 'Viagem Humanitária pelo Mundo',
      imageSrc: 'https://api.builder.io/api/v1/image/assets/TEMP/0fdab82c1d0a5e2d4aefb7ba7bdf5a7c21ab1d3d?width=574',
      likes: 24,
      views: 4512,
      shares: 4512
    }
  ];

  return (
    <section className="bg-[#D9D9D9] px-10 py-20">
      <h2 className="text-[#10192E] text-[40px] font-bold leading-[60px] text-center mb-[60px] max-sm:text-[28px] max-sm:leading-9">
        Explore the best Rodrigo Games
      </h2>
      
      <div className="grid grid-cols-[repeat(3,1fr)] gap-10 max-w-[1200px] mb-[60px] mx-auto max-md:grid-cols-[repeat(2,1fr)] max-md:gap-[30px] max-sm:grid-cols-[1fr] max-sm:gap-5">
        {games.map((game) => (
          <GameCard
            key={game.id}
            username={game.username}
            title={game.title}
            imageSrc={game.imageSrc}
            likes={game.likes}
            views={game.views}
            shares={game.shares}
            avatarId={game.id}
          />
        ))}
      </div>
      
      <button className="text-[#2580FF] text-center text-lg font-bold tracking-[0.36px] w-fit cursor-pointer bg-[#ECF4FF] mx-auto my-0 px-[52px] py-[18px] rounded-[40px] max-sm:text-base max-sm:px-10 max-sm:py-4 hover:bg-[#dde9ff] transition-colors">
        Ver mais
      </button>
    </section>
  );
};

export default GamesGrid;
