if [[ $# -eq 0 ]] ; then
    echo "device name required. get the name from 'adb devices' command"
    exit 1
fi

adb -s $1 reverse tcp:8081 tcp:8081
