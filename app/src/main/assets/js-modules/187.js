__d(187,function(t,e,a,r){"use strict";var n=e(55).AlertManager,l=function(){function t(){babelHelpers.classCallCheck(this,t)}return babelHelpers.createClass(t,null,[{key:"alert",value:function(t,e,a,r){if(void 0!==r)return console.warn('AlertIOS.alert() with a 4th "type" parameter is deprecated and will be removed. Use AlertIOS.prompt() instead.'),void this.prompt(t,e,a,r);this.prompt(t,e,a,"default")}},{key:"prompt",value:function(t,e,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"plain-text",l=arguments[4];if("function"==typeof r){console.warn('You passed a callback function as the "type" argument to AlertIOS.prompt(). React Native is assuming  you want to use the deprecated AlertIOS.prompt(title, defaultValue, buttons, callback) signature. The current signature is AlertIOS.prompt(title, message, callbackOrButtons, type, defaultValue) and the old syntax will be removed in a future version.');var i=r,l=e;return void n.alertWithArgs({title:t||void 0,type:"plain-text",defaultValue:l},function(t,e){i(e)})}var o,s,u=[],c=[];"function"==typeof a?u=[a]:a instanceof Array&&a.forEach(function(t,e){if(u[e]=t.onPress,"cancel"===t.style?o=String(e):"destructive"===t.style&&(s=String(e)),t.text||e<(a||[]).length-1){var r={};r[e]=t.text||"",c.push(r)}}),n.alertWithArgs({title:t||void 0,message:e||void 0,buttons:c,type:r||void 0,defaultValue:l,cancelButtonKey:o,destructiveButtonKey:s},function(t,e){var a=u[t];a&&a(e)})}}]),t}();a.exports=l});