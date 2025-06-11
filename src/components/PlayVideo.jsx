import React, { useEffect, useState } from 'react';
import { api_key, valueConvertor } from '../data';
import moment from 'moment';
import { useParams } from 'react-router-dom';

const PlayVideo = ({  }) => {

  const {videoID} = useParams();

  const [apiData, setapiData] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [commentData, setcommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoApiData = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoID}&key=${api_key}`;
    const response = await fetch(videoApiData);
    const data = await response.json();
    setapiData(data.items[0]); // Grab the first item
    // console.log(data.items[0]);
  };

  const fetchOtherData = async () => {
    const channelApiData = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${api_key}`;
    const channelresponse = await fetch(channelApiData);
    const channeldata = await channelresponse.json();
    setchannelData(channeldata.items[0]);

    const commentApiData = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoID}&key=${api_key}`;
    const commentresponse = await fetch(commentApiData);
    const commentdata = await commentresponse.json();
    setcommentData(commentdata.items);
    // console.log(commentData)

  }


  useEffect(() => {
    fetchVideoData();
  }, [videoID]);

  useEffect(()=> {
    if(apiData) {
      fetchOtherData();
    }
  },[apiData])
  return (
    <div className='mt-[70px] md:ml-[10px]'>
      <iframe className='p-2 w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[450px]'
        src={`https://www.youtube.com/embed/${videoID}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
      <h3 className='px-2 text-lg sm:text-xl md:text-2xl font-semibold'>{apiData?.snippet?.title}</h3>
      <div className='flex flex-col sm:flex-row justify-between px-2 gap-1 sm:gap-0'>
        <p className='text-sm sm:text-base text-gray-500'>{valueConvertor(apiData?.statistics?.viewCount)} views &bull; {moment(apiData?.snippet?.publishedAt).fromNow()}</p>
        <div>
          <span className="text-[17px] text-gray-500 mx-2"><i className="fa-solid fa-thumbs-up"></i>{valueConvertor(apiData?.statistics?.likeCount)}</span>
          <span className="text-[17px] text-gray-500 mx-2"><i className="fa-solid fa-thumbs-down"></i></span>
          <span className="text-[17px] text-gray-500 mx-2"><i className="fa-solid fa-share"></i> Share</span>
          <span className="text-[17px] text-gray-500 mx-2"><i className="fa-solid fa-download"></i> Save</span>
        </div>
      </div>
      <hr className='mt-2 text-gray-500'/>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mt-2 px-2 gap-2'>
        <div className='flex items-center'>
        <div>
          <img className='w-[40px] rounded-full' src={channelData?.snippet?.thumbnails?.default?.url} alt="" />
        </div>
        <div className='ml-1'>
          <h3 className='text-xl font-semibold'>{apiData?.snippet?.channelTitle}</h3>
          <p className='text-gray-500 text-sm'>{valueConvertor(channelData?.statistics?.subscriberCount)} Subscriber</p>
        </div>
      </div>
      <div>
        <button className='bg-red-500 px-4 py-2 text-white hover:bg-red-600'>Subscribe</button>
      </div>
      </div>
      <div>
        <p className='px-4 py-3 text-sm sm:text-base'>{apiData?.snippet?.description.slice(0,300)}</p>
      </div>
      <hr className=' ml-7'/>
      <p className='text-[15px] text-gray-500 font-semibold ml-7 mt-3'>{valueConvertor(apiData?.statistics?.commentCount)} Comments</p>
      {commentData.map((item,index)=> {
        return (
          <div key={index} className='flex items-start py-3 px-4 gap-2'>
            <div className='mr-1'>
              <img className='w-[40px] rounded-full' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
            </div>
            <div>
              <div className='flex flex-col text-sm'>
              <h3 className=''>{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>
              <h3 className='ml-3 text-gray-500 text-semibold'>{moment(item.snippet.topLevelComment.updatedAt).fromNow()}</h3>
            </div>
            <div>
              <p>{item.snippet.topLevelComment.snippet.textOriginal.slice(0,100)}</p>
            </div>
            <div>
              <span><i className="fa-solid fa-thumbs-up"></i>{valueConvertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
              <span className='ml-5'><i className="fa-solid fa-thumbs-down"></i></span>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default PlayVideo;
