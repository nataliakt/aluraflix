import { Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

export default function VideoCard({ videoId, full }) {
  const styles = stylesFunction(full);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {
        Linking.openURL(`https://youtube.com/watch?v=${videoId}`);
      }}
    >
      <Text style={styles.videoNotFound}>Video not found</Text>
      <Image resizeMode="cover" source={{ uri: `https://img.youtube.com/vi/${videoId}/0.jpg` }} style={styles.thumbnail} />
    </TouchableOpacity>
  );
}

const stylesFunction = (full) => StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
    margin: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
  },
  thumbnail: {
    width: full ? '100%' : 320,
    aspectRatio: 16 / 9,
    borderRadius: 6,
  },
  videoNotFound: {
    position: 'absolute',
  }
});