__d(157,function(e,o,r,a){"use strict";function p(e,o,r){if(o){var a=e.displayName||e.name||"unknown";if(!e.propTypes)throw new Error("`"+a+"` has no propTypes defined`");var p=o.NativeProps;for(var t in p)if(!(e.propTypes[t]||n[t]||r&&r[t])){var i;throw i=e.propTypes.hasOwnProperty(t)?"`"+a+"` has incorrectly defined propType for native prop `"+o.uiViewClassName+"."+t+"` of native type `"+p[t]:"`"+a+"` has no propType for native prop `"+o.uiViewClassName+"."+t+"` of native type `"+p[t]+"`",i+="\nIf you haven't changed this prop yourself, this usually means that your versions of the native code and JavaScript code are out of sync. Updating both should make this error go away.",new Error(i)}}}var n=o(105);r.exports=p});