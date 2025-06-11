import React from 'react'
import PlayVideo from '../components/PlayVideo'
import { useParams } from 'react-router-dom'
import Recommended from '../components/Recommended';

const Video = () => {

  const {videoID, categoryID} = useParams();

  return (
    <div className='flex flex-col lg:flex-row'>
      <div className='w-full lg:w-[65%]'>
        <PlayVideo videoID={videoID}/>
      </div>
      <div className='w-full lg:w-[35%]'>
        <Recommended categoryID={categoryID}/>
      </div>
    </div>
  )
}

export default Video