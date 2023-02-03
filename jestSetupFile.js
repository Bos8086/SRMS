// //Mocking Navigation
// import 'react-native-gesture-handler/jestSetup';
// //Mocking Navigation

jest.mock('@react-navigation/native', () => {
  return {
    createNavigatorFactory: jest.fn()
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-navigation/native', () => {
    return {
      useNavigation: jest.fn(),
      useFocusEffect: jest.fn(),
      useIsFocused: jest.fn(),
      NavigationContainer:jest.fn()
    };
  });
  jest.mock('@react-navigation/drawer',() => 
  {
    return{
        createDrawerNavigator:jest.fn()
    }
  })
  jest.mock('@react-navigation/native-stack',() => 
  {
    return{
        createNativeStackNavigator:jest.fn()
    }
  })

  //FOR MOCKING NAVIGATION

  // jest.mock('react-native-reanimated', () => {
  //   const Reanimated = require('react-native-reanimated/mock');
  
  //   // The mock for `call` immediately calls the callback which is incorrect
  //   // So we override it with a no-op
  //   Reanimated.default.call = () => {};
  
  //   return Reanimated;
  // });
  
  // // Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
  // jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
