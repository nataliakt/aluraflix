import { Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function VideoCard({ videoId }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Linking.openURL(`https://youtube.com/watch?v=${videoId}`);
      }}
    >
      <Image source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }} style={styles.thumbnail} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  thumbnail: {
    borderRadius: 6,
    width: '100%',
    height: 200,
  },
});