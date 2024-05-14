install: 
		npm ci

lint:
		npx eslint .

lintfix:
		npx eslint --fix .

mygenfiff:
	node bin/mygendiff.js
