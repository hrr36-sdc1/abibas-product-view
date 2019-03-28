# Abibas Product View
Abibas is an online e-commerce store focused on sportswear. This particular repo holds the component responsible for being the main product view page.

This app started out as a prototype application focusing mainly on front-end. It was built using React, MySQL, Express, and Bootstrap. The database only held ~100 primary records.

My project was to update this component to handle web scale. I scaled the database to 20 million primary records, optimized query times to be <10 ms (and <0.5ms in the most important queries), and added several features that substantially increased server performance. The front end was left mostly intact, but the backend was changed to utilize PostgreSQL. Cassandra was also tested to benchmark database performance, but ultimately was not selected.

The biggest performance gains from the server were through implementation of Clusters and Redis caching, followed by typical best practices in static asset optimization/hosting. Testing was performed using a combination of New Relic, artillery, siege, autocannon, and Lighthouse/Google Page Speed insights.

## Related Projects
These are the related components from my team, and the proxies used to serve all components together.
  - https://github.com/hrr36-sdc1/

## App Usage

API Endpoints:
GET / POST
- /products
- /images

PUT / DELETE
- /products/:productId
- /images/:imageId

## Deployment & Running the App

### create image & run docker container
docker-compose -f docker/docker-compose.yml up

### creates tables in postgres inside docker container
docker exec -d __containername__ psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE products"
psql -U postgres -h localhost -p 5432 -d products < database/migration.sql

#### seed database
./database/utils/sdc_seed.sh

## In Action
![A gif example of the app in action](https://i.imgur.com/alouO4z.gif)
