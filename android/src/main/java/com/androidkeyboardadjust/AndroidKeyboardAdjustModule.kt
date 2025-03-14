package com.androidkeyboardadjust

import android.view.WindowManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule


@ReactModule(name = AndroidKeyboardAdjustModule.NAME)
class AndroidKeyboardAdjustModule(reactContext: ReactApplicationContext) :
  NativeAndroidKeyboardAdjustSpec(reactContext) {

  override fun getName(): String {
    return NAME
  }


  override fun setAdjustNothing() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_NOTHING) }
  }

  override fun setAdjustPan() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN) }
  }

  override fun setAdjustResize() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE) }
  }

  override fun setAdjustUnspecified() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_UNSPECIFIED) }
  }

  override fun setAlwaysHidden() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN) }
  }

  override fun setAlwaysVisible() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_VISIBLE) }
  }

  override fun setVisible() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_VISIBLE) }
  }

  override fun setHidden() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_HIDDEN) }
  }

  override fun setUnchanged() {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_UNCHANGED) }
  }

  override fun setSoftInputMode(softInputMode: Double) {
    val activity = currentActivity ?: return

    activity.runOnUiThread { activity.window.setSoftInputMode(softInputMode.toInt()) }
  }

  override fun getSoftInputMode(): Double {
    val activity = currentActivity ?: return 0.0
    var softInputMode = 0.0
    activity.runOnUiThread {
       softInputMode = activity.window.attributes.softInputMode.toDouble()
    }
    return softInputMode
  }


  companion object {
    const val NAME = "AndroidKeyboardAdjust"
  }
}
