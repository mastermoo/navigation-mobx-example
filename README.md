# example-mobX

A simple usage example for an app based on mobX instead of redux in your [react-native-navigation](https://github.com/wix/react-native-navigation) project.
See this [issue](https://github.com/wix/react-native-navigation/issues/187).

## Installation - iOS

* Run `npm install`

* Open `ios/NavigationMobxExample.xcodeproj` in Xcode and press the play button

## Folder Structure

* `src/screens/` - all your app screens, every screen component is wrapped in an mobX observer
* `src/stores/` - all of your mobX goodness goes here, all business logic should be here