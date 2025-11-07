#!/bin/bash

 pid=$(ps -ef |fgrep -m 1 -i "node ./n8n" |grep -v "grep" |tr -s ' '|cut -d ' ' -f 2)

if [ ! -z "${pid}" ] ; then
 kill ${pid}
fi
