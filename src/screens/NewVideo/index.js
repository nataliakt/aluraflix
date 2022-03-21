import { useState } from 'react';
import { useVideos } from '../../hooks/useVideos';
import { View, Button, StyleSheet } from 'react-native';

import InputWithLabel from '../../components/InputWithLabel';
import Label from '../../components/Label';
import VideoCard from '../../components/VideoCard';

export default function NewVideo({ navigation }) {
  const [ videoId, setVideoId ] = useState('');
  const [ category, setCategory ] = useState('');
  const { newVideo } = useVideos();

  const handleButton = async () => {
    const status = await newVideo({ videoId, category });
    if (status) {
      navigation.navigate('Home');
    } else {
      alert('Video was not added!');
    }
  }

  return (
    <View style={styles.container}>
      <InputWithLabel label="Video ID" value={videoId} onChangeText={setVideoId} placeholder="Ex: TVxM49emK2U" />
      <InputWithLabel label="Category" value={category} onChangeText={setCategory} placeholder="Ex: Nintendo" />
      
      {!!videoId && <>
        <Label>Preview</Label>
        <VideoCard videoId={videoId} full />
        
        <Button title="Add" onPress={handleButton} />
    </>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  }
});