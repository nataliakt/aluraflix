import { useState, useEffect } from 'react';
import { getVideos, addVideo } from '../repository/videos';

export function useVideos() {
  const [ videos, setVideos ] = useState([]);

  const loadVideos = async () => {
    const videos = await getVideos();
    setVideos(videos);
  }

  const newVideo = async (video) => {
    const status = await addVideo(video);    
    return status;
  }

  useEffect(() => {
    loadVideos();
  }, []);

  return { videos, loadVideos, newVideo };

}