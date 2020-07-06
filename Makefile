HOST="ssh://root@46.101.193.226"

install:
	yarn install

ls-lint:
	node_modules/.bin/ls-lint

build:
	yarn docs:build

docker-deploy:
	docker-compose -H ${HOST} -f docker-compose.yml -p ls-lint pull docs
	docker-compose -H ${HOST} -f docker-compose.yml -p ls-lint up -d --build