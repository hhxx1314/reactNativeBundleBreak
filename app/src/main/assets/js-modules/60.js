__d(60,function(e,r,l,t){"use strict";var i=r(58),n=r(18),a=r(33),s=r(61),o=r(21),c=!1,m={GUID:1,Type:a({setTimeout:null,setInterval:null,requestAnimationFrame:null,setImmediate:null,requestIdleCallback:null}),callbacks:[],types:[],timerIDs:[],immediates:[],requestIdleCallbacks:[],identifiers:[],errors:null,callTimer:function(e,r){o(e<=m.GUID,"Tried to call timer with ID %s but no such timer exists.",e);var l=m.timerIDs.indexOf(e);if(l!==-1){var t=m.types[l],i=m.callbacks[l];if(!i||!t)return void console.error("No callback found for timerID "+e);t!==m.Type.setTimeout&&t!==m.Type.setImmediate&&t!==m.Type.requestAnimationFrame&&t!==m.Type.requestIdleCallback||m._clearIndex(l);try{t===m.Type.setTimeout||t===m.Type.setInterval||t===m.Type.setImmediate?i():t===m.Type.requestAnimationFrame?i(s()):t===m.Type.requestIdleCallback?i({timeRemaining:function(){return Math.max(0,16.666666666666668-(s()-r))}}):console.error("Tried to call a callback with invalid type: "+t)}catch(e){m.errors?m.errors.push(e):m.errors=[e]}}},callTimers:function(e){n(0!==e.length,"Cannot call `callTimers` with an empty list of IDs."),m.errors=null;for(var l=0;l<e.length;l++)m.callTimer(e[l],0);var t=m.errors;if(t){var i=t.length;if(i>1)for(var a=1;a<i;a++)r(64).setTimeout(function(e){throw e}.bind(null,t[a]),0);throw t[0]}},callIdleCallbacks:function(e){if(!(16.666666666666668-(s()-e)<1)){if(m.errors=null,m.requestIdleCallbacks.length>0){var l=m.requestIdleCallbacks.slice();m.requestIdleCallbacks=[];for(var t=0;t<l.length;++t)m.callTimer(l[t],e)}if(0===m.requestIdleCallbacks.length){r(55).Timing.setSendIdleEvents(!1)}m.errors&&m.errors.forEach(function(e){return r(64).setTimeout(function(){throw e},0)})}},callImmediatesPass:function(){if(i.beginEvent("JSTimersExecution.callImmediatesPass()"),m.immediates.length>0){var e=m.immediates.slice();m.immediates=[];for(var r=0;r<e.length;++r)m.callTimer(e[r],0)}return i.endEvent(),m.immediates.length>0},callImmediates:function(){for(m.errors=null;m.callImmediatesPass(););m.errors&&m.errors.forEach(function(e){return r(64).setTimeout(function(){throw e},0)})},emitTimeDriftWarning:function(e){c||(c=!0,console.warn(e))},_clearIndex:function(e){m.timerIDs[e]=null,m.callbacks[e]=null,m.types[e]=null,m.identifiers[e]=null}};l.exports=m});