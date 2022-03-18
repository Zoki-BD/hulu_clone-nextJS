import React from 'react';
import requests from '../utils/requests';//we map all the requests with Object.entries

import { useRouter } from 'next/router';


function Nav() {

   const router = useRouter();

   //console.log(Object.entries(requests))

   return (
      <nav className='relative'>
         <div className='flex px-10 sm:px-20 text=2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide '>
            {Object.entries(requests).map(([key, { title, url }]) => (
               <h2 key={key}
                  onClick={() => router.push(`/?genre=${key}`)}
                  className='last_pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500'>{title}
               </h2>
            ))}
         </div>
         <div className='absolute top-0 right-0 bg-gradient-to-l from-[#062024] h-10 w-1/12' />
      </nav>

   )

}

export default Nav;

//last_pr-24 if we want our last element to have padding from right 24