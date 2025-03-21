# react-native-android-keyboard-adjust [![npm version](https://img.shields.io/npm/v/@splicer97/react-native-android-keyboard-adjust.svg?style=flat)](https://www.npmjs.com/package/@splicer97/react-native-android-keyboard-adjust) [![Downloads](https://img.shields.io/npm/dm/@splicer97/react-native-android-keyboard-adjust.svg)](http://www.npmtrends.com/@splicer97/react-native-android-keyboard-adjust)

### This library can only be used on the new architecture!

Simple android native module to manipulate the behavior of keyboard.
Based on [react-native-android-keyboard-adjust](https://github.com/darleikroth/rn-android-keyboard-adjust) by [Darlei Kroth](https://github.com/darleikroth), that based on [react-native-android-keyboard-adjust](https://github.com/zubricky/react-native-android-keyboard-adjust) by [Marc Zubricky](https://github.com/zubricky).

## Installation

```sh
npm install @splicer97/react-native-android-keyboard-adjust
```

or

```sh
yarn add @splicer97/react-native-android-keyboard-adjust
```

## Usage

```js
import {
  setAdjustResize,
  setAdjustNothing,
} from '@splicer97/react-native-android-keyboard-adjust';

// ...

React.useEffect(() => {
  setAdjustResize();
  return () => {
    setAdjustNothing();
  };
}, []);
```

## Methods

| Name                 | Description                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| setAdjustNothing     | Set to have a window not adjust for a shown input method. The window will not be resized, and it will not be panned to make its focus visible.                                  |
| setAdjustPan         | Set to have a window pan when an input method is shown, so it doesn't need to deal with resizing but just panned by the framework to ensure the current input focus is visible. |
| setAdjustResize      | Set to allow the window to be resized when an input method is shown, so that its contents are not covered by the input method.                                                  |
| setAdjustUnspecified | Nothing specified. The system will try to pick one or the other depending on the contents of the window.                                                                        |
| setAlwaysHidden      | Please always hide any soft input area when this window receives focus.                                                                                                         |
| setAlwaysVisible     | Please always make the soft input area visible when this window receives input focus.                                                                                           |
| setVisible           | Please show the soft input area when normally appropriate (when the user is navigating forward to your window).                                                                 |
| setHidden            | Please hide any soft input area when normally appropriate (when the user is navigating forward to your window).                                                                 |
| setUnchanged         | Please don't change the state of the soft input area.                                                                                                                           |
| getSoftInputMode     | Get an integer code of current softInputMode value.                                                                                                                             |
| setSoftInputMode     | Set softInputMode value by an integer code .                                                                                                                                    |

> Methods reference from [Android Developer](https://developer.android.com/reference/android/view/WindowManager.LayoutParams#SOFT_INPUT_ADJUST_NOTHING).

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
