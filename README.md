<h1 align="center">@mish-tv/esbuild-jest</h1>

<div align="center">
<a href="https://www.npmjs.com/package/@mish-tv/esbuild-jest"><img src="https://img.shields.io/npm/v/@mish-tv/esbuild-jest.svg" alt="npm"></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/github/license/mish-tv/esbuild-jest.svg?style=flat" alt="license"></a>
</div>

<h4 align="center">`@mish-tv/esbuild-jest` is a very simple transformer to use esbuild for jest.</h4>


## Installation
```
npm install --save-dev @mish-tv/esbuild-jest esbuild
```

## Usage
```js:jest.config.js
module.exports = {
  transform: { "^.+\\.tsx?$": "@mish-tv/esbuild-jest" },
};
```
