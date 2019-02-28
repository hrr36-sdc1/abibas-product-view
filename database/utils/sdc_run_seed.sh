#!/bin/bash
for i in `seq 1 10`;
do
  psql -U postgres -d products -c "\copy shoes(colors, type, model, sizes, price, image_id, review_count, avg_stars) from './seeds/file$i.csv' delimiter ',' csv header;"
  psql -U postgres -d products -c "\copy images(links) from './seeds/imagefile$i.csv' delimiter ',' csv header;"
done


