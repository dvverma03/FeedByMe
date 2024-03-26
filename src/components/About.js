import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';

const About = () => {
  const backgroundImageUrl = 'https://media.istockphoto.com/id/1174871534/photo/futuristic-sci-fi-concrete-room-with-glowing-neon-virtual-reality-portal-computer-video-games.webp?b=1&s=170667a&w=0&k=20&c=WDaWHM5LDKxaCK3_eoJwg9MGljqTw-WlpeIWfzSzRJA=';

  return (
    <>
      <div className='relative h-screen' style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className='pt-4'>
          <Header />
          <div className='mt-4 flex justify-center items-center'>
            <img className='w-60 h-60 rounded-full' src="https://media.contra.com/image/upload/c_limit,fl_lossy,w_850/v1702651408/eiaxhfeshbqqtd51rzgo.png" alt="" />
          </div>
          <div className='mt-8'>
            <div className='text-white text-xl text-center font-sans px-8 pt-2'>We're passionate game developers dedicated to crafting immersive PC gaming experiences.</div>
            <div className='text-white text-xl text-center font-sans px-8 pt-2'> Explore our team, journey, and unique game features.</div>
            <div className='text-white text-xl text-center font-sans px-8 pt-2'>Pork chop pastrami meatball, pichnha capicola drumstrick tri-tip flank short loin strip steak prosciutto</div>
            <div className='text-white text-xl text-center font-sans pt-2'>leberkas jowl fatback. Alcatra sausage, turkey short ribs shank bresaola.</div>
          </div>
        </div>
        <div className="flex justify-center items-center inset-x-0 mt-[65px]">
        <div className="bg-cyan-400 text-white h-[40px] px-4 text-center text-xl font-bold rounded-lg">Join us now</div>
      </div>
      <div className="flex justify-center items-center absolute inset-x-0 mt-[35px]">
      </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
