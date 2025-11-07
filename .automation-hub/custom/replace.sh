#!/usr/bin/env bash

INPUT_FILE=$1
SEC_FILE=$2

while read -r LINE || [ -n "${LINE}" ]; do 
  PROP="${LINE%:*}"
  VAL="${LINE#*:}"
  
  # if grep -q "${PROP}:" "${SEC_FILE}"; then
  # echo "prop $PROP val $VAL ==>"
    sed -i "s|${PROP}:.*|${PROP}:${VAL}|" "${SEC_FILE}"
  # else
  #   echo "${PROP}:${VAL}" >> "${SEC_FILE}"
  # fi
done < "${INPUT_FILE}"