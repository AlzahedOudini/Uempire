import React, {useState} from 'react';

function Accordion() {

    const [Index, setIndex] = useState(false);
    
    const data =[
        {
            id: 1,
            myquestion: "Qu'est-ce que la livraison avec Uber offre de plus que les emplois traditionnels de chauffeur-livreur ?",
            answer: "Les différents emplois de chauffeur-livreur offrent des possibilités différentes. Tous les chauffeurs-livreurs ne sont pas en mesure d'avoir des horaires flexibles quand ils le souhaitent."
        },
        {
            id: 2,
            myquestion: "Qu'est-ce que la livraison avec Uber offre de plus que les emplois traditionnels de chauffeur-livreur ?",
            answer: "Les différents emplois de chauffeur-livreur offrent des possibilités différentes. Tous les chauffeurs-livreurs ne sont pas en mesure d'avoir des horaires flexibles quand ils le souhaitent."
        },
        {
            id: 3,
            myquestion: "Qu'est-ce que la livraison avec Uber offre de plus que les emplois traditionnels de chauffeur-livreur ?",
            answer: "Les différents emplois de chauffeur-livreur offrent des possibilités différentes. Tous les chauffeurs-livreurs ne sont pas en mesure d'avoir des horaires flexibles quand ils le souhaitent."
        },
        {
            id: 4,
            myquestion: "Qu'est-ce que la livraison avec Uber offre de plus que les emplois traditionnels de chauffeur-livreur ?",
            answer: "Les différents emplois de chauffeur-livreur offrent des possibilités différentes. Tous les chauffeurs-livreurs ne sont pas en mesure d'avoir des horaires flexibles quand ils le souhaitent."
        }
    ]
  return (
    <div className='flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 rounded-xl h-auto py-20 bg-gray-50 '>
        {/* {
            data && data.map((data) =>{
                return(
                    <AccordionUI title={data.myquestion} id={data.id} children={data.answer} index={Index} setIndex={setIndex} />
                );
            })
        } */}
    </div>
  )
}

export default Accordion;
