#!/bin/bash

if [ -z "$PS1" ] ; then
    echo -e "You must use \"source ./tools/mfa.sh\" to invoke this script."
    exit 1
fi

eval $(assume-role potato)