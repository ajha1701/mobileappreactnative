import { ENV_NAME } from '@env';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from './src/constants/colors';
import typography from './src/constants/typography';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView>
        <View style={styles.envBadge}>
          <Text style={styles.envBadgeText}>Env: {ENV_NAME}</Text>
        </View>

        <Text style={styles.heading}>Welcome to InsurUp</Text>
        <Text style={styles.subheading}>Your insurance companion app</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  envBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    backgroundColor: colors.button,
  },
  envBadgeText: {
    color: colors.white,
    fontFamily: 'Rubik-Medium',
    fontSize: typography.buttonText,
  },
  heading: {
    marginTop: 16,
    color: colors.primaryColor,
    fontFamily: 'Rubik-SemiBold',
    fontSize: typography.headingText,
  },
  subheading: {
    marginTop: 6,
    color: colors.secondaryColor,
    fontFamily: 'Rubik-Regular',
    fontSize: typography.cardHeadText2,
  },
});
