install:
	pnpm install

ls-lint:
	node_modules/.bin/ls-lint

build:
	pnpm docs:build