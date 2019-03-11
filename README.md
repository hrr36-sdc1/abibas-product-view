# Abibas Product View

> Renders the product view.

## Related Projects

  - https://github.com/hrr36-sdc1/product-view
  - https://github.com/hrr36-sdc1/bill-product-details

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)

## Usage

API Endpoints:
GET / POST
- /products
- /images

PUT / DELETE
- /products/:productId
- /images/:imageId

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
```

## Deployment

### create image & run docker container
docker-compose -f docker/docker-compose.yml up

### creates tables in postgres inside docker container
docker exec -d __containername__ psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE products"
psql -U postgres -h localhost -p 5432 -d products < database/migration.sql

#### seed database
./database/utils/sdc_seed.sh