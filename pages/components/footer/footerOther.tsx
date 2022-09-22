import Link from 'next/link';
import React from 'react';

function FooterOther() {
  return (
    <div className='MyFooter mysection bg-[#252036]'>
        <div className='flex justify-between items-center w-full'>
            <div className='flex justify-center items-center gap-4'>
                <Link href="/privacypolicy"><a>Politiques de Confidentialité</a></Link>
                <Link href="/partner"><a>Devenir Partenaire</a></Link>
                <Link href="/deliver"><a>Devenir Livreur</a></Link>
                <Link href="/restaurant"><a>Ufood</a></Link>
            </div>
            <div>Copyright © 2022 UEmpire. All rights reserved.</div>
        </div>
    </div>
  )
}

export default FooterOther;
