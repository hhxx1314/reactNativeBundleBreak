__d(80,function(e,t,r,o){"use strict";var s=t(81),l=t(84),n=t(56),i=function(e){function r(){babelHelpers.classCallCheck(this,r);var e=new l,t=babelHelpers.possibleConstructorReturn(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.sharedSubscriber=e,t}return babelHelpers.inherits(r,e),babelHelpers.createClass(r,[{key:"_nativeEventModule",value:function(e){if(e){if(0===e.lastIndexOf("statusBar",0))return console.warn("`%s` event should be registered via the StatusBarIOS module",e),t(85);if(0===e.lastIndexOf("keyboard",0))return console.warn("`%s` event should be registered via the Keyboard module",e),t(87);if("appStateDidChange"===e||"memoryWarning"===e)return console.warn("`%s` event should be registered via the AppState module",e),t(88)}return null}},{key:"addListener",value:function(e,t,o){var s=this._nativeEventModule(e);return s?s.addListener(e,t,o):babelHelpers.get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"addListener",this).call(this,e,t,o)}},{key:"removeAllListeners",value:function(e){var t=this._nativeEventModule(e);t&&e?t.removeAllListeners(e):babelHelpers.get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"removeAllListeners",this).call(this,e)}},{key:"removeSubscription",value:function(e){e.emitter!==this?e.emitter.removeSubscription(e):babelHelpers.get(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"removeSubscription",this).call(this,e)}}]),r}(s);i=new i,n.registerCallableModule("RCTDeviceEventEmitter",i),r.exports=i});