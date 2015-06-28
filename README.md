# switch-messages.js

switchMessages for Angular 1.2+. switchMessages backports partial functionality from Angular 1.3+ `ngMessages` Directive, making it available for use in 1.2.x releases and weighs &lt;1KB. switchMessages parses the current validation state of the `$error` Object to enable dynamic toggling of relevant validation messages.

> [Working jsFiddle example](http://jsfiddle.net/toddmotto/vfu3jde2)

#### Usage
Include `switch-messages.js` in your AngularJS application as a dependency:

```js
angular.module('app', [
  'switchMessages'
]);
```

Use the Directive for validation messages based off AngularJS form `$error` states that your version supports, things such as `$error.invalid` and `$error.minlength`, depending on which `ng-*` Directives you are using to validate the current input's state.

Use the `name` attribute on a form, then nested `name` attributes for each field you need validation, then pass that Object into `switch-messages=""` and let it go to work, it's as simple as that.

```html
<form name="user">
  <input 
    type="text" 
    name="username" 
    ng-model="username" 
    ng-minlength="2" 
    ng-maxlength="8" 
    ng-required="true">
  <div switch-messages="user.username">
    <div switch-message="minlength">Username too short</div>
    <div switch-message="required">This field is required</div>
    <div switch-message="maxlength">Username too long</div>
  </div>
  <input 
      type="email" 
      name="email" 
      ng-model="email" 
      ng-minlength="2" 
      ng-maxlength="8" 
      ng-required="true">
  <div switch-messages="user.email">
    <div switch-message="email">Must be a valid email</div>
  </div>
</form>
```

## Styling
You can add any classes you want to `switch-messages` and `switch-message`, by default switchMessages adds `.switch-messages` and `.switch-message` class to relevant Directives at runtime to aid component styling:

```html
<div switch-messages="user.username" class="switch-messages">
  <div switch-message="minlength" class="switch-message">Username too short</div>
  <div switch-message="required" class="switch-message">This field is required</div>
  <div switch-message="maxlength" class="switch-message">Username too long</div>
</div>
```

## Installing with Bower

```
bower install https://github.com/toddmotto/switch-messages.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.

```html
<body>
  <!-- html above -->
  <script src="angular.1.2.x.js"></script>
  <script src="dist/switch-messages.js"></script>
  <script>
  angular.module('app', [
    'switchMessages'
  ]);
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Gulp.

## Release history

- 1.0.0
  - Initial release
