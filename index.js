import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';

import AppScreen from './src/screens/App';
import store from './src/store/store';

function WrappedScreen(Component) {
  return props => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

Navigation.registerComponent('HomeScreen', () => WrappedScreen(AppScreen));

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'HomeScreen',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
});
