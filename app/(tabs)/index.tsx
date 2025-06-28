import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Platform,
  SafeAreaView,
  Image
} from 'react-native';

const useResponsive = () => {
  const { width, height } = useWindowDimensions();
  const isSmallScreen = width < 375;
  const isMediumScreen = width >= 375 && width < 768;
  const isLargeScreen = width >= 768;
  const isLandscape = width > height;

  const getResponsiveSize = (small: number, medium: number, large: number) => {
    if (isSmallScreen) return small;
    if (isMediumScreen) return medium;
    return large;
  };

  const getResponsiveSpacing = (multiplier: number = 1) => {
    return getResponsiveSize(8 * multiplier, 12 * multiplier, 16 * multiplier);
  };

  return {
    width,
    height,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    isLandscape,
    getResponsiveSize,
    getResponsiveSpacing
  };
};

export default function ResponsiveScreen() {
  const {
    width,
    height,
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
    getResponsiveSpacing
  } = useResponsive();

  const deviceType = isSmallScreen
    ? 'Small'
    : isMediumScreen
    ? 'Medium'
    : isLargeScreen
    ? 'Large'
    : 'Unknown';

  // Colorful grid item backgrounds
  const gridColors = ['#FFB703', '#219EBC', '#8ECAE6', '#FF6F61'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.gradientBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>🌈 Responsive Demo</Text>
        </View>

        <View style={styles.gridContainer}>
          {[1, 2, 3, 4].map((item, idx) => (
            <View
              key={item}
              style={[
                styles.gridItem,
                {
                  width: isSmallScreen
                    ? '48%'
                    : isMediumScreen
                    ? '31%'
                    : '23%',
                  margin: getResponsiveSpacing(0.5),
                  backgroundColor: gridColors[idx % gridColors.length],
                  shadowColor: gridColors[idx % gridColors.length],
                }
              ]}
            >
              <Text style={styles.gridText}>Item {item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/react-logo.png')}
            style={styles.imagePlaceHolder}
            resizeMode="contain"
          />
          <Text style={styles.imageLabel}>🚀 React Logo</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Screen Width: <Text style={styles.infoValue}>{width}</Text></Text>
          <Text style={styles.infoText}>Screen Height: <Text style={styles.infoValue}>{height}</Text></Text>
          <Text style={styles.infoText}>Device Type: <Text style={styles.infoValue}>{deviceType}</Text></Text>
          <Text style={styles.infoText}>Platform: <Text style={styles.infoValue}>{Platform.OS}</Text></Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gradientBackground: {
    flex: 1,
    backgroundColor: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', // fallback for platforms without gradients
    // For Expo/React Native, use expo-linear-gradient for real gradients
  },
  container: {
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 26,
    color: '#FF6F61',
    letterSpacing: 1
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  gridItem: {
    borderRadius: 12,
    padding: 18,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4
  },
  gridText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  imagePlaceHolder: {
    width: 220,
    height: 120,
    backgroundColor: '#e0e0e0',
    borderRadius: 16,
    shadowColor: '#219EBC',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  imageLabel: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#219EBC',
    fontWeight: 'bold'
  },
  infoContainer: {
    backgroundColor: '#fff3e6',
    padding: 18,
    borderRadius: 12,
    marginHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFB703'
  },
  infoText: {
    fontSize: 15,
    marginBottom: 6,
    color: '#333'
  },
  infoValue: {
    color: '#FF6F61',
    fontWeight: 'bold'
  }
});