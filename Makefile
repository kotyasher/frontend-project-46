install:
	npm ci

lint:
	npx eslint .

publish:
	npm publish --dry-run

test:
	npm test

test-coverage:
	 npm test -- --coverage --coverageProvider=v8

genfiff:
	node bin/gendiff.js

start:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json
