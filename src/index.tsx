import { Platform } from 'react-native';
import AndroidKeyboardAdjust from './NativeAndroidKeyboardAdjust';
const isAndroid = Platform.OS === 'android';

function setAdjustNothing(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAdjustNothing();
  }
}

function setAdjustPan(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAdjustPan();
  }
}

function setAdjustResize(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAdjustResize();
  }
}

function setAdjustUnspecified(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAdjustUnspecified();
  }
}

function setAlwaysHidden(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAlwaysHidden();
  }
}

function setAlwaysVisible(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setAlwaysVisible();
  }
}

function setVisible(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setVisible();
  }
}

function setHidden(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setHidden();
  }
}

function setUnchanged(): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setUnchanged();
  }
}

function getSoftInputMode(): number {
  if (isAndroid) {
    return AndroidKeyboardAdjust.getSoftInputMode();
  }
  return 0;
}

function setSoftInputMode(softInputMode: number): void {
  if (isAndroid) {
    return AndroidKeyboardAdjust.setSoftInputMode(softInputMode);
  }
}

export {
  setAdjustNothing,
  setAdjustPan,
  setAdjustResize,
  setAdjustUnspecified,
  setAlwaysHidden,
  setAlwaysVisible,
  setVisible,
  setHidden,
  setUnchanged,
  getSoftInputMode,
  setSoftInputMode,
};
