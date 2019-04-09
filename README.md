<p align="center">
  <img src="https://github.com/Oreoz/vscode-ember-navigator/blob/master/images/branding.png?raw=true">
</p>

The Ember Navigator VS Code extension aims facilitate Ember.js application development by providing shortcuts and contextual navigation via the command palette.

## Features

### Command Palette Contextual Navigation
![Command Palette Contextual Navigation](images/ember-navigator-contextual-navigations.gif)

### Shortcuts

Command | Shortcut | Mac Shortcut
--- | --- | ---
`emberNavigator.navigateTemplate` | CTRL + ALT + E | SHIFT + CMD + E
`emberNavigator.navigateRoute` | CTRL + ALT + R | SHIFT + CMD + R
`emberNavigator.navigateTest` | CTRL + ALT + T | SHIFT + CMD + T
`emberNavigator.navigateToActiveComponent` | CTRL + ALT + [Enter] | SHIFT + CMD + [Enter]

## Release Notes

### 1.0.0
- Initial release of Ember Navigator!

### 1.1.0
- Adds a command (`emberNavigator.navigateTemplate`) that lets the user toggle in between their JavaScript components and controllers to their linked Handlebars templates.

### 1.2.0
- Adds a command (`emberNavigator.navigateToActiveComponent`) that enables navigation to a component on the editor's active line.
- Changes the command prefix from the generic 'extension' to 'emberNavigator'.

### 1.3.0
- Adds a command (`emberNavigator.navigateRoute`) that enables navigation to and from a route.
- Adds a command (`emberNavigator.navigateTest`) that enables navigation to and from a test.
- Renamed command (`emberNavigator.toggleJavascriptHandlebars`) to (`emberNavigator.navigateTemplate`) for naming consistency.