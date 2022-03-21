import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getVideos() {
  try {
    const videos = await AsyncStorage.getItem('videos');
    const parsedVideos = JSON.parse(videos) || [];

    return parsedVideos;
  } catch (error) {
    return [];
  }
}

export async function addVideo(video) {
  try {
    const videos = await getVideos();
    const newVideos = [...videos, { id: Date.now(), ...video }];
    const jsonVideos = JSON.stringify(newVideos)

    await AsyncStorage.setItem('videos', jsonVideos);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}