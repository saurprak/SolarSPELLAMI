#!/bin/bash
tmp=`ps -ef | grep netbeans| grep -v grep | awk '{print $2}'`
echo ${tmp}
kill -9 ${tmp}
