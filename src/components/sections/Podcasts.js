import React from 'react'
import PodPreviewSingle from '../PodPreviewSingle'
import BtnRound from '../BtnRound'
import cr1 from '../../assets/users/user1.png'
import cr2 from '../../assets/users/user2.png'
import cr3 from '../../assets/users/user3.png'
import cr4 from '../../assets/users/usertennis.png'
import cr5 from '../../assets/users/userart.png'
import cr6 from '../../assets/users/userbtc.png'
import cr7 from '../../assets/users/usercrypto.png'
import cr8 from '../../assets/users/usergamer.png'
import cover1 from '../../assets/podcasts/goattalk_cover.png'
import cover2 from '../../assets/podcasts/artnews_cover.png'
import cover3 from '../../assets/podcasts/thisweeksmovies_cover.png'
import cover4 from '../../assets/podcasts/tennis_cover.png'
import cover5 from '../../assets/podcasts/vinyltalk_cover.png'
import cover6 from '../../assets/podcasts/crypto_cover.png'
import cover7 from '../../assets/podcasts/blockchain_cover.png'
import cover8 from '../../assets/podcasts/gaming_cover.png'

const Podcasts = () => {
  return (
    <div className='min-h-screen md:px-8 flex flex-grow flex-col-reverse md:flex-row md:text-left'>
      <div className='flex flex-col flex-1 justify-center sm:p-20 items-center'>
        <h1 className='text-center mt-8 md:mt-0 mb-4 text-6xl font-bold'>Top Podcasts of the week.</h1>
        <div className='grid w-full sm:grid-cols-2 xl:grid-cols-4 mb-4 '>
          <PodPreviewSingle creatorAv={cr1} creatorName={'Mike Noble'} podCover={cover1} podName={'Goat Talk'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr2} creatorName={'Destiny White'} podCover={cover2} podName={'Art History'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr3} creatorName={'Victoriahh'} podCover={cover3} podName={'Movies'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr4} creatorName={'James Known'} podCover={cover4} podName={'Tennis Recap'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr5} creatorName={'Anthony Note'} podCover={cover5} podName={'Weekly Digs'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr6} creatorName={'blockworld'} podCover={cover6} podName={'Cryptoland'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr7} creatorName={'CryptoRami'} podCover={cover7} podName={'Blockchain'} podEps={'10 Eps'} podDur={'50min'} />
          <PodPreviewSingle creatorAv={cr8} creatorName={'_ricky7_'} podCover={cover8} podName={'Gaming News'} podEps={'10 Eps'} podDur={'50min'} />
        </div>
        <BtnRound text={'More Podcasts'} fill={'nofill'} />
      </div>
    </div>
  )
}

export default Podcasts