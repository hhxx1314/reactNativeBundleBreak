__d(81,function(e,r,t,i){var n=r(82),s=r(84),u=r(22),o=r(18),c=function(){function e(r){babelHelpers.classCallCheck(this,e),this._subscriber=r||new s}return babelHelpers.createClass(e,[{key:"addListener",value:function(e,r,t){return this._subscriber.addSubscription(e,new n(this,this._subscriber,r,t))}},{key:"once",value:function(e,r,t){var i=this;return this.addListener(e,function(){for(var e=arguments.length,n=Array(e),s=0;s<e;s++)n[s]=arguments[s];i.removeCurrentListener(),r.apply(t,n)})}},{key:"removeAllListeners",value:function(e){this._subscriber.removeAllSubscriptions(e)}},{key:"removeCurrentListener",value:function(){o(!!this._currentSubscription,"Not in an emitting cycle; there is no current subscription"),this.removeSubscription(this._currentSubscription)}},{key:"removeSubscription",value:function(e){o(e.emitter===this,"Subscription does not belong to this emitter."),this._subscriber.removeSubscription(e)}},{key:"listeners",value:function(e){var r=this._subscriber.getSubscriptionsForType(e);return r?r.filter(u.thatReturnsTrue).map(function(e){return e.listener}):[]}},{key:"emit",value:function(e){var r=this._subscriber.getSubscriptionsForType(e);if(r){for(var t=0,i=r.length;t<i;t++){var n=r[t];n&&(this._currentSubscription=n,n.listener.apply(n.context,Array.prototype.slice.call(arguments,1)))}this._currentSubscription=null}}},{key:"removeListener",value:function(e,r){var t=this._subscriber.getSubscriptionsForType(e);if(t)for(var i=0,n=t.length;i<n;i++){var s=t[i];s&&s.listener===r&&s.remove()}}}]),e}();t.exports=c});