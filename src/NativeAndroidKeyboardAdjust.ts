import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setAdjustNothing: () => void;
  setAdjustPan: () => void;
  setAdjustResize: () => void;
  setAdjustUnspecified: () => void;
  setAlwaysHidden: () => void;
  setAlwaysVisible: () => void;
  setVisible: () => void;
  setHidden: () => void;
  setUnchanged: () => void;
  getSoftInputMode: () => number;
  setSoftInputMode: (softInputMode: number) => void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('AndroidKeyboardAdjust');
