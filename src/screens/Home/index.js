import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { useVideos } from '../../hooks/useVideos';

import { FlatList, StyleSheet } from 'react-native';

import Label from '../../components/Label';
import VideoCard from '../../components/VideoCard';

export default function Home() {
  const isFocused = useIsFocused();
  const { videos, loadVideos } = useVideos();
  const [ loading, setLoading ] = useState(false);

  const handleRefresh = async () => {
    setLoading(true);
    await loadVideos();
    setLoading(false);
  }

  const videosByCategory = videos.reduce((acc, video) => {
    const category = video.category;
    if (!acc.includes(category)) {
      acc.push(category);
    }
    return acc;
  }, []);

  useEffect(() => {
    if (isFocused) {
      loadVideos();
    }
  }, [isFocused]);

  return (
    <>
      <FlatList
        data={videosByCategory}
        keyExtractor={(item) => item}
        onRefresh={handleRefresh}
        refreshing={loading}
        renderItem={({ item: category }) =>
          <>
            <Label style={styles.category}>{ category }</Label>
            <FlatList
              data={videos.filter((video) => video.category === category)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <VideoCard videoId={item.videoId} />}
              horizontal
            />
          </>
        }
      />
    </>
  );
}

const styles = StyleSheet.create({
  category: {
    marginHorizontal: 8,
  },
});