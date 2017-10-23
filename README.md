AT Style Core
---------------

We now have [Fractal](http://fractal.build) in the project to generate a styleguide. Docs are in /docs and the description of the patterns we have are in /components. Once installed over npm, run `fractal start --sync` from Terminal.




To publish a new version 
---------------

```
npm run version:patch
```
This will version the module and tag and commit with a message like this '#publish 0.0.3 a new patch version'
Then push the version commit. Go will see it's a #patch commit and publish to nexus.

Getting Started
---------------

Install:

  ```
  npm install --save http://nexus.atcloud.io/nexus/content/repositories/npm-internal/at-style-core/-/at-style-core-0.0.1.tgz
  ```
  OR
  ```
  yarn add http://nexus.atcloud.io/nexus/content/repositories/npm-internal/at-style-core/-/at-style-core-0.0.1.tgz --save
  ```

To use a scss in a project

```
@import '~at-style-core/sass/settings/s-base-unit';

```

To use a JS in a project

```
import 'at-style-core/sass/settings/s-base-unit.scss’

```
