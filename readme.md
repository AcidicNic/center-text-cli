# center-text-cli
An npm module that will center text for you!

## Installation

1. Install the package.
```bash
$ npm i -g center-text-cli
```
2. Try it out!
```bash
$ ctxt text goes here
```

---

## Usage
![options](https://github.com/acidicnic/center-text-cli/blob/main/readme-images/options.png?raw=true)

---

## Examples

Multi-line text, with options. (padding: 4 and length: 28)
```bash
$ ctxt -l 28 -p 4 Hello and welcome to center-text-cli, I hope you find it useful! Feel free to contribute or report issues on Github!
```
![multiline-with-options](https://github.com/acidicnic/center-text-cli/blob/main/readme-images/multiline-with-options.png?raw=true)

Single line with default options. (padding: 0 and length: terminal width)
```bash
$ ctxt github.com/acidicNic/center-text-cli
```
![one-line-default-options](https://github.com/acidicnic/center-text-cli/blob/main/readme-images/one-line-default-options.png?raw=true)
