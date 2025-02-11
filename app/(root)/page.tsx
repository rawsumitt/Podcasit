"use client";
import PodcastCard from '@/components/PodcastCard';
import { podcastData } from '@/constants';
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import LoaderSpinner from '@/components/LoaderSpinner';
import Image from 'next/image';

const Home = () => {

  
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      <section className='flex flex-col gap-5'>
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="flex flex-wrap gap-5 justify-center">
      {podcastData.map((podcast) => (
        <div
          key={podcast.id}
          className="w-full sm:w-1/2 lg:w-1/4 2xl:w-1/5"
        >
          <div className='rounded-lg'>
          <Image
            src={podcast.imgURL}
            alt={podcast.title}
            width={200}
            height={200}
            className="rounded-lg"
          /></div>
          <h2 className="text-16 truncate font-bold text-white-1">{podcast.title}</h2>
          <p className="text-12 truncate font-normal capitalize text-white-4">{podcast.description}</p>
        </div>
      ))}
    </div>
         </section>
         
    </div>
  )
}

export default Home