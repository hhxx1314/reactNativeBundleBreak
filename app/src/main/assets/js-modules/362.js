__d(362,function(e,n,t,r){"use strict";var i=n(204),o=n(86),c=n(55),u=(n(54),c.NetInfo),s=n(335),v=new o(u),f=new i,a=void 0;a=function(e){return"NONE"!==e&&"UNKNOWN"!==e};var d=new i,l={addEventListener:function(e,n){var t=v.addListener("networkStatusDidChange",function(e){n(e.network_info)});return f.set(n,t),{remove:function(){return l.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=f.get(n);t&&(t.remove(),f.delete(n))},fetch:function(){return u.getCurrentConnectivity().then(function(e){return e.network_info})},isConnected:{addEventListener:function(e,n){var t=function(e){n(a(e))};return d.set(n,t),l.addEventListener(e,t),{remove:function(){return l.isConnected.removeEventListener(e,n)}}},removeEventListener:function(e,n){var t=d.get(n);l.removeEventListener(e,t),d.delete(n)},fetch:function(){return l.fetch().then(function(e){return a(e)})}},isConnectionExpensive:function(){return s(u.isConnectionMetered(),Array.prototype.slice.call(arguments),"single-callback-value-first","NetInfo.isConnectionMetered(callback) is deprecated. Use the returned Promise instead.")}};t.exports=l});