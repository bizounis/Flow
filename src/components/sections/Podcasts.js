import React from 'react'
import PodPreviewSingle from '../PodPreviewSingle'
import BtnRound from '../BtnRound'

const pods = [
  {
    'avatar' : require('../../assets/users/user1.png'),
    'username' : 'Mike Noble',
    'cover' : require('../../assets/podcasts/goattalk_cover.png'),
    'title' : 'Goat Talk',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/user2.png'),
    'username' : 'Destiny White',
    'cover' : require('../../assets/podcasts/artnews_cover.png'),
    'title' : 'Art News',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/user3.png'),
    'username' : 'Victoriahh',
    'cover' : require('../../assets/podcasts/thisweeksmovies_cover.png'),
    'title' : 'Movies',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/usertennis.png'),
    'username' : 'James Known',
    'cover' : require('../../assets/podcasts/tennis_cover.png'),
    'title' : 'Tennis Recap',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/userart.png'),
    'username' : 'Anthony Note',
    'cover' : require('../../assets/podcasts/vinyltalk_cover.png'),
    'title' : 'Weekly Digs',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/userbtc.png'),
    'username' : 'blockworld',
    'cover' : require('../../assets/podcasts/crypto_cover.png'),
    'title' : 'Cryptoland',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/usercrypto.png'),
    'username' : 'CryptoRami',
    'cover' : require('../../assets/podcasts/blockchain_cover.png'),
    'title' : 'Blockchain',
    'episodes' : 10,
    'duration' : 50
  },
  {
    'avatar' : require('../../assets/users/usergamer.png'),
    'username' : '_ricky7_',
    'cover' : require('../../assets/podcasts/gaming_cover.png'),
    'title' : 'Gaming News',
    'episodes' : 10,
    'duration' : 50
  },
]

const Podcasts = () => {
  return (
    <div className='min-h-screen md:px-8 flex flex-grow flex-col-reverse md:flex-row md:text-left'>
      <div className='flex flex-col flex-1 justify-center sm:p-20 items-center'>
        <h1 className='text-center mt-8 md:mt-0 mb-4 text-6xl font-bold'>Top Podcasts of the week.</h1>
        <div className='grid w-full sm:grid-cols-2 xl:grid-cols-4 mb-4 '>
          {
            pods.map((podcast) => 
              <PodPreviewSingle creatorAv={podcast.avatar} creatorName={podcast.username} podCover={podcast.cover} podName={podcast.title} podEps={podcast.episodes} podDur={podcast.duration}/>)
          }
        </div>
        <BtnRound text={'More Podcasts'} fill={'nofill'} />
      </div>
    </div>
  )
}

export default Podcasts