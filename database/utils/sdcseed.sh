#!/bin/bash
#!/usr/bin/env node

for i in `seq 1 10`;
do
  ID=$i node ./generation.js
done
