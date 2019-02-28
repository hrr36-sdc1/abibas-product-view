#!/bin/bash
#!/usr/bin/env node

for i in `seq 1 10`;
do
  ID=$i node ./generate_products.js
  ID=$i node ./generate_images.js
done
