import React from 'react';
import Header from './Header';

const Body = () => {
  const backgroundImageUrl = 'https://media.istockphoto.com/id/1174871534/photo/futuristic-sci-fi-concrete-room-with-glowing-neon-virtual-reality-portal-computer-video-games.webp?b=1&s=170667a&w=0&k=20&c=WDaWHM5LDKxaCK3_eoJwg9MGljqTw-WlpeIWfzSzRJA=';

  return (
    <div className='relative h-screen' style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className='pt-4'>
        <Header />
        <div className='mt-4'>
          <div className='text-white text-6xl text-center font-sans px-4'>WELCOME TO GAMESPLAY</div>
          <div className='text-white text-8xl text-center font-sans pt-6'>ONLINE GAMING SITE</div>
        </div>
        <div className='mt-8'>
          <div className='text-white text-xl text-center font-sans px-8'>Pork chop pastrami meatball, pichnha capicola drumstrick tri-tip flank short loin strip steak prosciutto</div>
          <div className='text-white text-xl text-center font-sans pt-2'>leberkas jowl fatback. Alcatra sausage, turkey short ribs shank bresaola.</div>
        </div>
      </div>
      <div className="flex justify-center items-center inset-x-0 mt-[65px]">
        <div className="bg-cyan-400 text-white h-[40px] px-4 text-center text-xl font-bold rounded-lg">Join us now</div>
      </div>
      <div className="flex justify-center items-center absolute inset-x-0 mt-[35px]">
        <div className="bg-cyan-400 text-white h-[40px] px-4 text-center text-xl font-bold rounded-lg">More About Us</div>
      </div>
    </div>
  );
};

export default Body;
