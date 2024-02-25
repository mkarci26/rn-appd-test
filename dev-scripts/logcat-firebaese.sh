adb shell setprop debug.firebase.analytics.app com.yum.kfc.beta
adb shell setprop log.tag.FA VERBOSE
adb shell setprop log.tag.FA-SVC VERBOSE
adb logcat -v time -s FA FA-SVC