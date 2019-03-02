#!/bin/bash
#!/usr/bin/env node

start=`date +%s`

# generate data files
numseeds=20
N=1000000
for i in `seq 1 $numseeds`;
do
  ID=$i N=$N node ./generate_products.js
  ID=$i N=$N node ./generate_images.js
  echo image seed $i generated
done

# load data files into postgres and cassandra
for i in `seq 1 $numseeds`;
do
  psql -U postgres -d products -c "\copy shoes(id, colors, type, model, sizes, price, image_id, review_count, avg_stars) from program 'head -1000000 ./seeds/file$i.csv' delimiter ',' csv header;"
  psql -U postgres -d products -c "\copy images(id, links) from program 'head -1000000 ./seeds/imagefile$i.csv' delimiter ',' csv header;"
 echo seed $i loaded
done

# cleanup
for i in `seq 1 $numseeds`;
do
  rm ./seeds/file$i.csv
  rm ./seeds/imagefile$i.csv
  echo seed $i removed
done

# cleanup
rm import*.err*

# log script runtime
end=`date +%s`
runtime=$((end-start))
echo $runtime