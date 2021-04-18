# Escape from Neo Tokyo 
### *Working title*

## Game flow

![Overall game flow diagram](https://github.com/disperse/escape-from-neo-tokyo/blob/main/docs/images/game-flow.png?raw=true)

## Map

Using a variation on the [Spelunky algorithm](http://tinysubversions.com/spelunkyGen/) for now, instead of going down, we'll be crossing the city and making our way to the next zone.

Each map section will be 800 x 600 where each square is 50x50 so 16x12 squares in each section.



## Tools

I'll be using [TexturePacker](https://www.codeandweb.com/texturepacker) to create spritesheets as it has a reasonable CLI.

## Influences
There are no new ideas, nothing is created in a vacuum.

  * Overland
  * X-Com: Enemy Unknown
  * Heat Signature  
  * FTL
  * Nethack
  * Slay the Spire

## Aesthetic Influences
Aspire to achieve vibe, and appearance, similar to:

  * Canabalt
  * Blade Runner

## Acknowledgements

Boilerplate code taken from MIT Licensed https://github.com/photonstorm/phaser3-project-template &copy; Richard Davey 2017

Documentation for the boilerplate code follows:

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install project dependencies |
| `npm start` | Build project and open web server running project |
| `npm run build` | Builds code bundle with production settings (minification, uglification, etc..) |

## Customizing the Template

### Babel

You can write modern ES6+ JavaScript and Babel will transpile it to a version of JavaScript that you want your project to support. The targeted browsers are set in the `.babelrc` file and the default currently targets all browsers with total usage over "0.25%" but excludes IE11 and Opera Mini.

 ```
"browsers": [
  ">0.25%",
  "not ie 11",
  "not op_mini all"
]
 ```

### Webpack

If you want to customize your build, such as adding a new webpack loader or plugin (i.e. for loading CSS or fonts), you can modify the `webpack/base.js` file for cross-project changes, or you can modify and/or create new configuration files and target them in specific npm tasks inside of `package.json'.

## Deploying Code

After you run the `npm run build` command, your code will be built into a single bundle located at `dist/bundle.min.js` along with any other assets you project depended. 

If you put the contents of the `dist` folder in a publicly-accessible location (say something like `http://mycoolserver.com`), you should be able to open `http://mycoolserver.com/index.html` and play your game.

