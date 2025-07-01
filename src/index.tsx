import SystemSettingsLite from './NativeSystemSettingsLite';

const SystemSettings = {
  /**
   * Get current media volume
   * @returns Promise<number>
   */
  getVolume: (): Promise<number> => {
    return SystemSettingsLite.getVolume();
  },

  /**
   * Set media volume
   * @param value - volume value (e.g., 5)
   */
  setVolume: (value: number): Promise<void> => {
    return SystemSettingsLite.setVolume(value);
  },

  /**
   * Get current screen brightness
   * @returns Promise<number>
   */
  getBrightness: (): Promise<number> => {
    return SystemSettingsLite.getBrightness();
  },

  /**
   * Set screen brightness
   * @param value - brightness value between 0 and 1 (iOS) or 0-255 (Android)
   */
  setBrightness: (value: number): Promise<void> => {
    return SystemSettingsLite.setBrightness(value);
  },
};

export default SystemSettings;
