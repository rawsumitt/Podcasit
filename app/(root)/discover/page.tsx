"use client"

import EmptyState from '@/components/EmptyState'
import LoaderSpinner from '@/components/LoaderSpinner'
import PodcastCard from '@/components/PodcastCard'
import { podcastData } from '@/constants/index'
import Searchbar from '@/components/Searchbar'
import { api } from '@/convex/_generated/api'
import { useQuery } from 'convex/react'
import React from 'react'
import Image from 'next/image'
import { Import } from 'lucide-react'

const Discover = ({ searchParams: { search} }: { searchParams : { search: string }}) => {
  // const podcastsData = useQuery(api.podcasts.getPodcastBySearch, { search: search || '' })

  return (
    <div className="flex flex-col gap-9">
      <Searchbar />
      <div className="flex flex-col gap-9">
        <h1 className="text-20 font-bold text-white-1">
          {!search ? 'Discover Trending Podcasts' : 'Search results for '}
          {search && <span className="text-white-2">{search}</span>}
        </h1>
        {podcastData ? (
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
            ) : <EmptyState title="No results found" />} : <LoaderSpinner />
      </div>
    </div>
  )
}

export default Discover