import Image from 'next/image';
import React from 'react';


export const metadata = {
  title: 'Docs About Page',
  description: '...',
}


const DocsPage = () => {
    return (
        <div>
            <h1>My First Documentation!</h1>
            <Image src="https://images.unsplash.com/photo-1788144823113-37668876cf73" width={300} height={200} alt='car'></Image>
        </div>
    );
};

export default DocsPage;