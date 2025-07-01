import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getVolume(): Promise<number>;
  setVolume(value: number): Promise<void>;
  getBrightness(): Promise<number>;
  setBrightness(value: number): Promise<void>;
}

export default TurboModuleRegistry.getEnforcing<Spec>('SystemSettingsLite');
