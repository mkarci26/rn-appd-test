# create assets folder in the current project
mkdir -p android/app/src/main/assets

# create bundle script
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

# execute command to run android to create debug apk
npx react-native run-android

# change to android folder

# Go to android folder and issue gradle command to assemble
# 'assembleDebug' for debug build, 'assembleRelease' for release
# release build involve signing your APK, for test automation of
# development code usually the debugBuild is good enough
cd android && ./gradlew clean assembleDebug

# If all the steps are successful, your APK which won't require a
# metro instance running to render the UI would be available at
# android/app/build/outputs/apk/debug/app-debug.apk
# install app
# install app
#$ ./gradlew :app:installDebug

cd ..
