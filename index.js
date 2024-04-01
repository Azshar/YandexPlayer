import {Navigation} from 'react-native-navigation';
import AppScreen from './App';
import TestScreen from './Test';
Navigation.registerComponent('HomeScreen', () => AppScreen);
Navigation.registerComponent('TestScreen', () => TestScreen);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
            },
          },
        ],
      },
    },
  });
});
