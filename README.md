### Hexlet tests and linter status:
[![Actions Status](https://github.com/kotyasher/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kotyasher/frontend-project-46/actions)
[![Actions Status](https://github.com/kotyasher/frontend-project-46/actions/workflows/nodejs.yml/badge.svg)](https://github.com/kotyasher/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/59136b6da926c190baa5/maintainability)](https://codeclimate.com/github/kotyasher/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/59136b6da926c190baa5/test_coverage)](https://codeclimate.com/github/kotyasher/frontend-project-46/test_coverage)

Support for different input formats: yaml, json. Generating reports in the form of plain text, stylish and json.

## Installation:
```
make install
npm link
```
## Minimum requirements:
```
Node: 17.9.1
```
##Usage:
```
gendiff -h

gendiff -V

gendiff <path to file1> <path to file2>

gendiff --format plain <path to file1> <path to file2>
```


