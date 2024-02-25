if [[ $# -eq 0 ]] ; then
    echo "deep link url required. e.g ./ios-deep-link.sh <DEEP_LINK_URL>"
    exit 1
fi

xcrun simctl openurl booted $1
