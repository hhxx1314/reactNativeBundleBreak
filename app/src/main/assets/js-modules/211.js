__d(211,function(e,n,t,i){"use strict";var a=n(56),r=e.nativePerformanceNow||n(61),o={},s={},c={addTimespan:function(e,n,t){o[e]||(o[e]={description:t,totalTime:n})},startTimespan:function(e,n){o[e]||(o[e]={description:n,startTime:r()})},stopTimespan:function(e){o[e]&&o[e].startTime&&(o[e].endTime||(o[e].endTime=r(),o[e].totalTime=o[e].endTime-o[e].startTime))},clear:function(){o={},s={}},clearExceptTimespans:function(e){o=Object.keys(o).reduce(function(n,t){return e.indexOf(t)!==-1&&(n[t]=o[t]),n},{}),s={}},getTimespans:function(){return o},hasTimespan:function(e){return!!o[e]},logTimespans:function(){for(var e in o)o[e].totalTime&&console.log(e+": "+o[e].totalTime+"ms")},addTimespans:function(e,n){for(var t=0,i=e.length;t<i;t+=2){var a=n[t/2];c.addTimespan(a,e[t+1]-e[t],a)}},setExtra:function(e,n){s[e]||(s[e]=n)},getExtras:function(){return s}};a.registerCallableModule("PerformanceLogger",c),t.exports=c});