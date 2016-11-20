# Front end app starter

```
npm i
npm start
npm run build // production
npm run deploy // http://hkdemo.surge.sh/
```

## Feature

```
Editors
	- vscode
	- .editorconfig: for consistent coding style across team

Module format
	- ES6
HTML generation
	- minified html for prod
	- conditional code injection in html ( tracker.js only required in prod )
Transpiling
	- Babel
Bundler
	- Webpack
Linting
	- eslint
Testing
	- mocha ( unit testing )
	- chai ( as assertion library )
	- moching
	- code coverage
	- Continious Integration ( with travis )	
Project structure
	- Feature based
	- Centralized api, error handling
HTTP
	- Fake api
		- Mock schema format
		- Mock data generation
		- Mock server
	- Real REST API
Production build
	- minified html, css, js
	- sourcemaps
	- bundle splitting
	- cache busting
	- error logging
	- gzipping 
Deployment ( 1 command that's all )
```

## Deploy on same domain with surge

Just update domain to `hkdemo.surge.sh` (whatever you created 1st time) when you run `npm run deploy`

## Resources

Continious Integration: https://travis-ci.org/hesing/hkstarter

Prod Url: http://hkdemo.surge.sh/







