__d(16,function(n,o,e,t){"use strict";var r=o(17),l=(o(18),function(n){var o=this;if(o.instancePool.length){var e=o.instancePool.pop();return o.call(e,n),e}return new o(n)}),i=function(n,o){var e=this;if(e.instancePool.length){var t=e.instancePool.pop();return e.call(t,n,o),t}return new e(n,o)},a=function(n,o,e){var t=this;if(t.instancePool.length){var r=t.instancePool.pop();return t.call(r,n,o,e),r}return new t(n,o,e)},c=function(n,o,e,t){var r=this;if(r.instancePool.length){var l=r.instancePool.pop();return r.call(l,n,o,e,t),l}return new r(n,o,e,t)},u=function(n,o,e,t,r){var l=this;if(l.instancePool.length){var i=l.instancePool.pop();return l.call(i,n,o,e,t,r),i}return new l(n,o,e,t,r)},s=function(n){var o=this;n instanceof o||r("25"),n.destructor(),o.instancePool.length<o.poolSize&&o.instancePool.push(n)},P=l,f=function(n,o){var e=n;return e.instancePool=[],e.getPooled=o||P,e.poolSize||(e.poolSize=10),e.release=s,e},p={addPoolingTo:f,oneArgumentPooler:l,twoArgumentPooler:i,threeArgumentPooler:a,fourArgumentPooler:c,fiveArgumentPooler:u};e.exports=p});