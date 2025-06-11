import React, { useEffect, useState } from 'react'
import { api_key, valueConvertor } from '../data'
import { Link } from 'react-router-dom'
import moment from 'moment'

const Feed = ({ category }) => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    // console.log("Fetching for category:", category)

    const videoapi = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=100&regionCode=IN&videoCategoryId=${category}&key=${api_key}`

    try {
      const response = await fetch(videoapi)
      const result = await response.json()
      // console.log("API result:", result)
      setData(result.items || [])
    } catch (err) {
      console.error("API error:", err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [category])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
      {data.length === 0 && <p className="text-white">No videos found for this category.</p>}
      {data.map((item, index) => (
        <Link
          key={index}
          to={`/video/${item.snippet.categoryId || 0}/${item.id}`}
          className="bg-white rounded shadow hover:scale-[1.02] transition-transform duration-200"
        >
          <img src={item.snippet.thumbnails.medium.url} alt="Thumbnail" className="w-full" />
          <div className="p-2 text-black">
            <h2 className="font-semibold text-lg line-clamp-2">{item.snippet.title}</h2>
            <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
            <p className='text-sm'>{valueConvertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Feed
