import React from 'react';
import Link from 'next/link';
function FooterRed() {
  return (
    <div className='MyFooter mysection bg-[#F60D2B]'>
        <div className='flex justify-between items-center w-full flex-col md:flex-row '>
            <div className='flex justify-center items-center gap-4 flex-col md:flex-row '>
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

export default FooterRed;
