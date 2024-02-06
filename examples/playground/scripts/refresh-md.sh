#!/bin/bash

SCRIPTDIR=`dirname $0`
ROOTDIR="${SCRIPTDIR}/.."
EXPORTER="${ROOTDIR}/node_modules/.bin/gdc-catalog-export"
OUTPUT="${ROOTDIR}/src/md/full.ts"
WORKSPACEID="cebbbf9b001a48ca89fa3f9c407cf8af"

$EXPORTER \
  --backend tiger \
  --hostname "https://staging.dev-latest.stg11.panther.intgdc.com" \
  --catalog-output "${OUTPUT}" \
  --workspace-id "${WORKSPACEID}"
