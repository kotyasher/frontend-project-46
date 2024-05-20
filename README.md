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
## Usage:
```
gendiff -h

gendiff -V

gendiff <path to file1> <path to file2>

gendiff --format plain <path to file1> <path to file2>

gendiff --format json <path to file1> <path to file2>
```
## Examples:

Help and version

[![asciicast](https://asciinema.org/a/atDwpC171pqHlLOy6YEqjTSCz.svg)](https://asciinema.org/a/atDwpC171pqHlLOy6YEqjTSCz)

Two JSON files with nested objects compare (stylish formatter)

[![asciicast](https://asciinema.org/a/PJdMPT6pWicPY5RqmSvGXzF5k.svg)](https://asciinema.org/a/PJdMPT6pWicPY5RqmSvGXzF5k)

Two YML files with nested objects compare (stylish formatter)

[![asciicast](https://asciinema.org/a/tBL4ZaVpClbWmrJ2GaWqtFIIw.svg)](https://asciinema.org/a/tBL4ZaVpClbWmrJ2GaWqtFIIw)

Plain formatter

[![asciicast](https://asciinema.org/a/SWdjbJJZdd88IMt1bMPdppoXo.svg)](https://asciinema.org/a/SWdjbJJZdd88IMt1bMPdppoXo)

JSON formatter

[![asciicast](https://asciinema.org/a/8Ap63NgdNG200PtK8nDzfDPL9.svg)](https://asciinema.org/a/8Ap63NgdNG200PtK8nDzfDPL9)


