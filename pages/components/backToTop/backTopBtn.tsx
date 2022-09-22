import React from 'react';
import { useEffect, useState } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';

function BackTopBtn() {
    const [backTopBtn, setBackTopBtn] = useState(false);
    useEffect(() =>{
        const scrollListener = () =>{
            if(window.scrollY > 100){
                setBackTopBtn(true);
            }else{
                setBackTopBtn(false);
            }
        };
        window.addEventListener("scroll", scrollListener);

        return () => window.removeEventListener("scroll", scrollListener);
    },[]);

    const scrollUp = () =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
  return (
    <div>
        {backTopBtn && (
            <div className='w-16 h-16 rounded-full bg-[#181818] flex justify-center items-center hover:bg-[#FFB040]  ease-in duration-300 fixed bottom-10 right-10 z-50' onClick={scrollUp}><AiOutlineArrowUp className='text-2xl '/></div>
        )}
    </div>
  )
}

export default BackTopBtn;
