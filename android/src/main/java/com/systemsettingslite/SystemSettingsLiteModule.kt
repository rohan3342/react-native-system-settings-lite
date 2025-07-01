package com.systemsettingslite

import android.media.AudioManager
import android.provider.Settings
import android.content.Context
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.turbomodule.core.interfaces.TurboModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

@ReactModule(name = SystemSettingsLiteModule.NAME)
class SystemSettingsLiteModule(
  private val reactContext: ReactApplicationContext
) : NativeSystemSettingsLiteSpec(reactContext), TurboModule {

  companion object {
    const val NAME = "SystemSettingsLite"
  }

  override fun getName(): String {
    return NAME
  }

  @ReactMethod
  override fun getVolume(promise: Promise) {
    try {
      val audioManager = reactContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
      val volume = audioManager.getStreamVolume(AudioManager.STREAM_MUSIC)
      promise.resolve(volume.toDouble())
    } catch (e: Exception) {
      promise.reject("GET_VOLUME_ERROR", "Failed to get volume: ${e.message}", e)
    }
  }

  @ReactMethod
  override fun setVolume(value: Double, promise: Promise) {
    try {
      val audioManager = reactContext.getSystemService(Context.AUDIO_SERVICE) as AudioManager
      audioManager.setStreamVolume(AudioManager.STREAM_MUSIC, value.toInt(), 0)
      promise.resolve(null)
    } catch (e: Exception) {
      promise.reject("SET_VOLUME_ERROR", "Failed to set volume: ${e.message}", e)
    }
  }

  @ReactMethod
  override fun getBrightness(promise: Promise) {
    try {
      val brightness = Settings.System.getInt(
        reactContext.contentResolver,
        Settings.System.SCREEN_BRIGHTNESS,
        -1
      )
      promise.resolve(brightness.toDouble())
    } catch (e: Exception) {
      promise.reject("GET_BRIGHTNESS_ERROR", "Failed to get brightness: ${e.message}", e)
    }
  }

  @ReactMethod
  override fun setBrightness(value: Double, promise: Promise) {
    try {
      Settings.System.putInt(
        reactContext.contentResolver,
        Settings.System.SCREEN_BRIGHTNESS,
        value.toInt()
      )
      promise.resolve(null)
    } catch (e: Exception) {
      promise.reject("SET_BRIGHTNESS_ERROR", "Failed to set brightness: ${e.message}", e)
    }
  }
}
