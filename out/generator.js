System.registerModule("../generator.js", [], function() {
  "use strict";
  var __moduleName = "../generator.js";
  var Greeter = function Greeter() {};
  ($traceurRuntime.createClass)(Greeter, {sayHi: function() {
      var name = arguments[0] !== (void 0) ? arguments[0] : 'Daniel';
      console.log(("Hello " + name + "!"));
    }}, {});
  var greeter = new Greeter();
  greeter.sayHi();
  return {};
});
System.get("../generator.js" + '');
