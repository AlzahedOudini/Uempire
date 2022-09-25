import React from 'react';
import Accordion from '../accordion';

function Faq() {
    // const {icon, title, accordion} = faq;
  return (
    <section className='w-full py-14 bg-[#ffffff] px-32'>
        <h1 className='text-4xl font-semibold text-center text-[#252036] my-4 '>Comment ça marche</h1>
        <p className='text-center text-[#252036] mb-10'>Une fois que vous avez rejoint Udelivery, voici ce qui vous attend.</p>

        <div>
            {/* {accordion.map((accordion, idx) =>{
                return <Accordion accordion={accordion} key={idx} />;
            })} */}
        </div>
    </section>
  )
}

export default Faq;
