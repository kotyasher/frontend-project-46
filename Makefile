install:
	npm ci

lint:
	npx eslint .

test:
	npm test

test-coverage:
	 npm test -- --coverage --coverageProvider=v8

genfiff:
	node bin/gendiff.js

run:
	node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json

run-yml:
	node bin/gendiff __fixtures__/file1.yml __fixtures__/file2.yml
