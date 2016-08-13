import { reaction } from 'mobx';
import { Navigation } from 'react-native-navigation';
import { app } from './stores';


// screen related book keeping
import { registerScreens } from './screens';
registerScreens();

// notice that this is just a simple class, it's not a React component
export default class App {
  constructor() {
    // when the root of the app changes, call the startApp function
    reaction(() => app.root, () => this.startApp(app.root));

    app.appInitialized();
  }

  startApp(root) {
    console.log("starting app...");
    
    switch (root) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'example.LoginScreen',
            title: 'Login',
            navigatorStyle: {}
          },
        });
        return;
      case 'after-login':
        Navigation.startTabBasedApp({
          tabs: [
            {
              label: 'One',
              screen: 'example.FirstTabScreen',
              icon: require('../img/one.png'),
              selectedIcon: require('../img/one_selected.png'),
              title: 'Screen One',
              navigatorStyle: {},
            },
            {
              label: 'Two',
              screen: 'example.SecondTabScreen',
              icon: require('../img/two.png'),
              selectedIcon: require('../img/two_selected.png'),
              title: 'Screen Two',
              navigatorStyle: {},
            }
          ],
          animationType: 'slide-down',
          title: 'MobX Example'
        });
        return;
      default:
        console.error('Unknown app root');
    }
  }
}
