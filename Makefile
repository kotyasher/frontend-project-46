install: 
		npm ci

lint:
		npx eslint .

lintfix:
		npx eslint --fix .

genfiff:
	node bin/gendiff.js
