__d(120,function(e,t,n,r){"use strict";var i=t(17),u=t(121),s=t(122),o=t(123),l=t(124),a=t(125),c=(t(18),{}),f=null,v=function(e,t){e&&(s.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},d=function(e){return v(e,!0)},g=function(e){return v(e,!1)},L=function(e){return"."+e._rootNodeID},p={injection:{injectEventPluginOrder:u.injectEventPluginOrder,injectEventPluginsByName:u.injectEventPluginsByName},putListener:function(e,t,n){"function"!=typeof n&&i("94",t,typeof n);var r=L(e);(c[t]||(c[t]={}))[r]=n;var s=u.registrationNameModules[t];s&&s.didPutListener&&s.didPutListener(e,t,n)},getListener:function(e,t){var n=c[t],r=L(e);return n&&n[r]},deleteListener:function(e,t){var n=u.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var r=c[t];if(r){delete r[L(e)]}},deleteAllListeners:function(e){var t=L(e);for(var n in c)if(c.hasOwnProperty(n)&&c[n][t]){var r=u.registrationNameModules[n];r&&r.willDeleteListener&&r.willDeleteListener(e,n),delete c[n][t]}},extractEvents:function(e,t,n,r){for(var i,s=u.plugins,o=0;o<s.length;o++){var a=s[o];if(a){var c=a.extractEvents(e,t,n,r);c&&(i=l(i,c))}}return i},enqueueEvents:function(e){e&&(f=l(f,e))},processEventQueue:function(e){var t=f;f=null,e?a(t,d):a(t,g),f&&i("95"),o.rethrowCaughtError()},__purge:function(){c={}},__getListenerBank:function(){return c}};n.exports=p});