import React, { useEffect, useState } from 'react'
import { api_key, valueConvertor } from '../data'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Recommended = ({ categoryID }) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const videoapi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=16&regionCode=IN&videoCategoryId=${categoryID}&key=${api_key}`

    try {
      const response = await fetch(videoapi)
      const result = await response.json()
      setData(result.items || [])
    } catch (err) {
      console.error("API error:", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [categoryID])

  return (
    <div className='ml-2 mr-2 mt-17 space-y-3'>
      {data.map((item, index) => (
        <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className='flex flex-col sm:flex-row bg-white rounded shadow p-2 hover:bg-gray-50 transition'>
          <img className='w-full sm:w-[45%] object-cover rounded' src={item.snippet.thumbnails.medium.url} alt={item.snippet.title} />
          <div className='pl-0 sm:pl-2 pt-2 sm:pt-0 text-sm sm:text-base'>
            <h3 className='font-medium'>{item.snippet.title}</h3>
            <p className='text-gray-500'>{item.snippet.channelTitle}</p>
            <p className='text-gray-600'>{valueConvertor(item.statistics.viewCount)} Views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Recommended
