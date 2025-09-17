module.exports = {
  preset: 'jest-expo',
  
  // Informa ao Jest como resolver os caminhos com "@/"
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // Garante que os pacotes do Expo/React Native sejam transformados pelo Babel
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg))',
  ],
};