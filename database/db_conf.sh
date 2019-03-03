psql -U postgres -d products -c "SET work_mem='16MB';"
psql -U postgres -d products -c "SET random_page_cost=1;"
