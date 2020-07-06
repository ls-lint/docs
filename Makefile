HOST_LOEFFEL="ssh://root@161.35.203.137"

install:
	yarn install

ls-lint:
	npx @ls-lint/ls-lint@1.9.0

build:
	yarn docs:build

docker-deploy:
	docker-compose -H ${HOST} -f docker-compose.yml -p ls-lint pull docs
	docker-compose -H ${HOST} -f docker-compose.yml -p ls-lint up -d --build