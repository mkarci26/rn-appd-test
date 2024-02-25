echo "Deleting watchman instances"
watchman watch-del-all
echo "Deleting node_modules"
rm -rf node_modules
echo "Deleting react cache"
rm -rf $TMPDIR/react-*
#rm -rf $TMPDIR/npm-*
echo "Deleting temp metro"
rm -rf /tmp/metro
echo "Deleting coverage reports"
rm -rf coverage/
rm -rf reports/
rm -rf junit/
echo "Deleting lint reports"
rm -rf esLintReport/
echo "Deleting sonar cache"
rm -rf .scannerwork/
echo "Deleting android builds"
rm -rf android/build
rm -rf android/app/build
echo "Deleting gradle cache"
rm -rf android/.gradle
echo "Deleting Android studio cache"
rm -rf android/.idea
rm -rf android/.settings
rm -rf android/app/.settings
echo "Deleting Cocoapods"
rm -rf ios/Pods
echo "Deleting iOS builds"
rm -rf ios/build
echo "Deleting yarn cache"
yarn cache clean
