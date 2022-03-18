import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Nav from '../../components/Nav'
import Link from 'next/link';
import { HomeIcon, ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';



function MovieDetails({ result, test }) {

   const BASE_URL = "https://image.tmdb.org/t/p/original/"


   return (
      <>
         <Header />
         <Nav />
         <div className='px-5 my-10 sm:grid md:grid xl:grid 3xl:grid justify-center'>
            <div
               className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50' >

               <Image
                  layout="responsive"
                  src={
                     `${BASE_URL}${result.backdrop_path || result.poster.path} ` ||
                     ` ${BASE_URL} ${result.poster.path} `
                  }
                  height={1080}
                  width={1920}
               />
               <div className='p-2'>
                  <p className=' max-w-md'>{result.overview}</p>

                  <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h2>
                  <h4 className='mt-1 text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>Average grade: {result.vote_average}</h4>

                  <p className='flex items-center opacity-50 group-hover:opacity-100'>
                     {result.media_type && `${result.media_type} · `} {" "} {result.release_date || result.first_air_date}   {" "}
                     <ThumbUpIcon className='h-5 mx-6 mr-1' />{result.vote_count}
                     <Link href='/'>
                        <HomeIcon className='h-8 mx-6 mr-1' />
                     </Link>
                  </p>
               </div>
            </div>
         </div>
      </>

   )
}

export default MovieDetails;


export async function getServerSideProps(context) {

   const movieId = context.query.movieId;

   const request = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=38940c671b10b250dd4b31b08ddd9bd3&language=en-US`)
   const data = await request.json()


   return {
      props: {
         result: data,
      },
   };
}


