#!/bin/bash -x

commit=`git log -1 --pretty=%B | grep '#publish' -c`
if [ "$commit" -eq "1" ]; then
    echo "Looks like you are pushing a new version"
    ./gradlew npm_publish -Ppublishing
else
    echo "Looks like you are pushing a change this will not be published, 'npm run version:patch' will make the commit be published"
    ./gradlew npm_publish
fi

