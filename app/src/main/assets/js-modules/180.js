__d(180,function(e,r,t,n){"use strict";function a(e){var r,t,n,a;return regeneratorRuntime.async(function(s){for(;;)switch(s.prev=s.next){case 0:if(r=o(),r.bundleLoadedFromServer){s.next=3;break}throw new Error("Bundle was not loaded from the packager");case 3:if(!u.scriptURL){s.next=12;break}t=0;case 5:if(!(t<e.length)){s.next=12;break}if(!/^http/.test(e[t].file)&&/[\\/]/.test(e[t].file)){s.next=8;break}return s.abrupt("break",12);case 8:e[t].file=u.scriptURL;case 9:++t,s.next=5;break;case 12:return s.next=14,regeneratorRuntime.awrap(c(r.url+"symbolicate",{method:"POST",body:JSON.stringify({stack:e})}));case 14:return n=s.sent,s.next=17,regeneratorRuntime.awrap(n.json());case 17:return a=s.sent,s.abrupt("return",a.stack);case 19:case"end":return s.stop()}},null,this)}var s=r(181),c=s.fetch,o=r(183),i=r(55),u=i.SourceCode;t.exports=a});