import Link from 'next/link';
import React from 'react';

function FooterOther() {
  return (
    <div className='MyFooter mysection bg-[#252036]'>
        <div className='flex justify-between items-center w-full  flex-col lg:flex-row '>
            <div className='flex justify-center items-center gap-4 flex-col lg:flex-row '>
                <Link href="/privacypolicy"><a>Politiques de Confidentialité</a></Link>
                <Link href="/partner"><a>Devenir Partenaire</a></Link>
                <Link href="/deliver"><a>Devenir Livreur</a></Link>
                <Link href="/ufood"><a>UFood</a></Link>
            </div>
            <div className='mt-16 lg:mt-0'>Copyright © 2022 UEmpire. All rights reserved.</div>
        </div>
    </div>
  )
}

export default FooterOther;
