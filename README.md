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

To deploy build image, run a container, and seed the psql db:
```sh
docker build . -t latest -f docker/Dockerfile.pg
docker run -d latest -c random_page_cost=1 -c work_mem='16MB'
docker exec -d conainer_name sh ./database/db_conf.sh
```