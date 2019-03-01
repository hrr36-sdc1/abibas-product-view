#!/bin/bash
#!/usr/bin/env node

for i in `seq 1 20`;
do
  ID=$i node ./generate_products.js
  ID=$i node ./generate_images.js
  echo image seed $i generated
done

for i in `seq 1 20`;
do
  psql -U postgres -d products -c "\copy shoes(colors, type, model, sizes, price, image_id, review_count, avg_stars) from program 'head -1000000 ./seeds/file$i.csv' delimiter ',' csv header;"
  psql -U postgres -d products -c "\copy images(links) from program 'head -1000000 ./seeds/imagefile$i.csv' delimiter ',' csv header;"
  cqlsh -e "USE products; COPY shoes (id, colors, type, model, sizes, price, image_id, review_count, avg_stars) FROM './seeds/file$i.csv' WITH HEADER = TRUE;"
  cqlsh -e "USE products; COPY shoes (id, links) FROM './seeds/imagefile$i.csv' WITH HEADER = TRUE;"
  echo seed $i loaded
done

for i in `seq 1 20`;
do
  rm ./seeds/file$i.csv
  rm ./seeds/imagefile$i.csv
  echo seed $i removed
done

rm import*.err*