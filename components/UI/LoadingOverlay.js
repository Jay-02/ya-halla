import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/GlobalStyles';

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  message: {
    fontFamily: GlobalStyles.fonts.bold,
    fontSize: 16,
    marginBottom: 12,
  },
});
