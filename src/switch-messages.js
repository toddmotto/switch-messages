(function () {

  'use strict';

  function switchMessages($parse, $templateCache) {

    function link($scope, $element, $attrs) {

      var namespace = 'switch-message';
      var messages = $element[0].querySelectorAll('[' + namespace + ']');
      var parsed = $parse($attrs.switchMessages)($scope);

      function init() {
        $element.addClass(namespace + 's');
        angular.element(messages).addClass(namespace + ' ng-hide');
        $scope.$watch(function () {
          return parsed.$error;
        }, renderMessages, true);
      }

      function renderMessages(message) {
        for (var prop in message) {
          var elem = $element[0].querySelector('[' + namespace + '=' + prop + ']');
          if (elem && !parsed.$pristine) {
            angular.element(elem)[
              message[prop] ? 'removeClass' : 'addClass'
            ]('ng-hide');
          }
        }
      }

      init();

    }

    return {
      restrict: 'A',
      link: link
    };

  }

  switchMessages.$inject = ['$parse', '$templateCache'];

  angular
    .module('switchMessages', [])
    .directive('switchMessages', switchMessages);

})();
