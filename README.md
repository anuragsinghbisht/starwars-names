# starwars-names

[![Travis](https://img.shields.io/travis/anuragsinghbisht/starwars-names.svg?style=flat-square)](https://travis-ci.org/anuragsinghbisht/starwars-names)
[![Codecov](https://img.shields.io/codecov/c/github/anuragsinghbisht/starwars-names.svg?style=flat-square)](https://codecov.io/gh/anuragsinghbisht/starwars-names)
[![npm](https://img.shields.io/npm/v/starwars-names-generator.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-generator)
[![npm](https://img.shields.io/npm/dm/starwars-names-generator.svg?style=flat-square)](https://www.npmjs.com/package/starwars-names-generator)
[![npm](https://img.shields.io/npm/l/starwars-names-generator.svg?style=flat-square)](https://spdx.org/licenses/MIT)

## About Starwars-names

* This is a sample project to introduce concepts of creating an open source javascript library.
* This project returns two functions - all (returns list of star-wars names) & random ( returns random name from list )

## Getting Started

* Created a github repo : https://github.com/anuragsinghbisht/starwars-names
* Set npm global variables if not already set -
  * `npm init-author-name "name"`
  * `npm init-author-email "email"`
  * `npm init-author-url "url"`
  * `npm init-license "MIT"`
* Sign up in https://www.npmjs.com/
* Add npm user and initialize project
  * `npm adduser`
  * `npm init`
* Make changes in project. Push the changes to the Github repository. Publish the repository in npm.
  * `npm publish`
* To locally verify the build
  * `npm pack`
* To get information about the library
  * `npm info name_of_library`
  
## Tagging a release

* `git tag 1.0.0`
* `git push --tags`

## Publishing a beta version

* Add 1.1.0-beta._num_ tag in package.json ( version )
* Publish the library ( `npm publish --tag beta` )
* `npm install lib_name_` - Installs latest stable version
* `npm install lib_name>@beta` - Installs latest beta version
* `npm install lib_name>@_version_num_` - Installs specific version

## Adding ES6 support to your project
  * `npm i -D babel-cli rimraf babel-preset-es2015 babel-preset-stage-2`
  * Add following scripts in package.json
    `"build" : "babel --copy-files --out-dir dist --ignore *.test.js src"`
    `"prebuild" : "rimraf dist"  // "rm -rf dist"`
  * Add `files : [ "dist", "README.md" ]` (files to include in npm package)

## Integrating Test Cases

* Install mocha & chai 
  * `npm i -D chai mocha`
  * Add script in package.json
    `mocha src/index.test.js -w`

* Automatically run test cases before committing
  * `npm i -D ghooks`
  * Add ghook config in the package.json
    `config: { ghook: { 'precommit': 'npm run test' } `
  
* Code coverage using Istanbul
  * `npm i -D istanbul`
  *  Add script in package.json
  `"test": "istanbul cover -x *.test.js _mocha -- -R spec src/index.test.js"`

* Adding Code coverage checking before committing
  * Add script in package.json
    `"check-coverage": "istanbul check-coverage --statements 100 --branches 100 --functions 100 --lines 100"`
    
* Add code coverage reporting using codecov
  * `npm i -D codecov`
  * Add script in package.json
  `"report-coverage": "cat ./coverage/lcov.info | codecov"`
 
* Add ES6 support to test using mocha with Babel
  * `npm i -D nyc babel-register`
  * Replace istanbul with nyc
  * Add following scripts in package.json
  `"cover" : "nyc npm t"`
  `"test": "mocha src/index.test.js --compilers js:babel-register"`
  `"test:watch": "npm run test -- -w"`

2. Update ghooks - npm run cover ( instead of test )
3. Update .travl.yml - npm run cover ( instead of test )
  

## Integrating Semantic Release

* Install semantic-release-cli ( `npm i -g semantic-release-cli` )
* Setup project ( `semantic-release-cli setup` )
* This will setup TravisCI. On pushing changes to the github, build will be triggered automatically in travis.

## Setting up conventional commit messages using Commitizen

* `npm install -D commitizen cz-conventional-changelog`
* Add script in package.json
  `"commit": "git-cz"`
* Add config in package.json
  ` config: { czConfig: { path : "node_modules/cz-conventional-changelog" } }`
* `npm run commit` - Generates conventional commit messages

## Add badges to your README.md

 * Go to http://shields.io/
 * Generate Markdowns for the badges from shields.io 

## TravisCI Configuration

* Only allow commits on master branch and PR to trigger build


  `branches:

     only:

      - master`
      
      
* Add build spets in .travis.yml


  `script:

    - npm run cover

    - npm run check-coverage

    - npm run build

    after_success:

     - npm run report-coverage

     - npm run semantic-release`
  


