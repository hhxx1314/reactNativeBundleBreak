__d(266,function(t,e,r,s){"use strict";function o(t){return void 0!==t.presentedIndex?t.presentedIndex:t.observedTopOfStack}function n(t,e){return t===e?a.Center[t]:t<e?a.Left[t]:a.Right[t]}var a=e(267),i=e(268),p=(e(270),e(54),e(76)),u=e(77),l=e(99),c=e(205),h=e(18),f=e(265),_=f.Map,d=a.Interpolators,y=i,v=p.PropTypes,g=d.map(function(){return{style:{}}}),m=d.map(function(){return{style:{}}}),b=d.map(function(){return{style:{}}}),T=d.map(function(){return{style:{}}}),k=d.map(function(){return{style:{}}}),R=function(t){function e(){var t,r,s,a;babelHelpers.classCallCheck(this,e);for(var i=arguments.length,u=Array(i),c=0;c<i;c++)u[c]=arguments[c];return r=s=babelHelpers.possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(u))),s._getBreadcrumb=function(t,e){var r=s.props.navState.routeStack.length<=1&&0===e?"none":"auto",a=s.props.routeMapper,i=n(e,o(s.props.navState));return p.createElement(l,{key:"crumb_"+e,pointerEvents:r,ref:"crumb_"+e,style:i.Crumb},p.createElement(l,{ref:"icon_"+e,style:i.Icon},a.iconForRoute(t,s.props.navigator)),p.createElement(l,{ref:"separator_"+e,style:i.Separator},a.separatorForRoute(t,s.props.navigator)))},s._getTitle=function(t,e){if(s._descriptors.title.has(t))return s._descriptors.title.get(t);var r=s.props.routeMapper.titleContentForRoute(s.props.navState.routeStack[e],s.props.navigator),a=n(e,o(s.props.navState)),i=p.createElement(l,{key:"title_"+e,ref:"title_"+e,style:a.Title},r);return s._descriptors.title=s._descriptors.title.set(t,i),i},s._getRightButton=function(t,e){if(s._descriptors.right.has(t))return s._descriptors.right.get(t);var r=s.props.routeMapper.rightContentForRoute(s.props.navState.routeStack[e],s.props.navigator);if(!r)return s._descriptors.right=s._descriptors.right.set(t,null),null;var a=n(e,o(s.props.navState)),i=p.createElement(l,{key:"right_"+e,ref:"right_"+e,style:a.RightItem},r);return s._descriptors.right=s._descriptors.right.set(t,i),i},a=r,babelHelpers.possibleConstructorReturn(s,a)}return babelHelpers.inherits(e,t),babelHelpers.createClass(e,[{key:"_updateIndexProgress",value:function(t,e,r,s){var o,n=s>r?t:1-t,a=e-r,i=e-s;h(d[e],"Cannot find breadcrumb interpolators for "+e),o=a>0&&0===i||i>0&&0===a?d[e].RightToCenter:a<0&&0===i||i<0&&0===a?d[e].CenterToLeft:a===i?d[e].RightToCenter:d[e].RightToLeft,o.Crumb(g[e].style,n)&&this._setPropsIfExists("crumb_"+e,g[e]),o.Icon(m[e].style,n)&&this._setPropsIfExists("icon_"+e,m[e]),o.Separator(b[e].style,n)&&this._setPropsIfExists("separator_"+e,b[e]),o.Title(T[e].style,n)&&this._setPropsIfExists("title_"+e,T[e]);var p=this.refs["right_"+e],u=k[e].style;p&&o.RightItem(u,n)&&p.setNativeProps({style:u,pointerEvents:0===u.opacity?"none":"auto"})}},{key:"updateProgress",value:function(t,e,r){for(var s=Math.max(e,r),o=Math.min(e,r),n=o;n<=s;n++)this._updateIndexProgress(t,n,e,r)}},{key:"onAnimationStart",value:function(t,e){for(var r=Math.max(t,e),s=Math.min(t,e),o=s;o<=r;o++)this._setRenderViewsToHardwareTextureAndroid(o,!0)}},{key:"onAnimationEnd",value:function(){for(var t=this.props.navState.routeStack.length-1,e=0;e<=t;e++)this._setRenderViewsToHardwareTextureAndroid(e,!1)}},{key:"_setRenderViewsToHardwareTextureAndroid",value:function(t,e){var r={renderToHardwareTextureAndroid:e};this._setPropsIfExists("icon_"+t,r),this._setPropsIfExists("separator_"+t,r),this._setPropsIfExists("title_"+t,r),this._setPropsIfExists("right_"+t,r)}},{key:"componentWillMount",value:function(){this._reset()}},{key:"render",value:function(){var t=this.props.navState,e=t&&t.routeStack.map(this._getBreadcrumb),r=t.routeStack.map(this._getTitle),s=t.routeStack.map(this._getRightButton);return p.createElement(l,{key:this._key,style:[S.breadCrumbContainer,this.props.style]},r,e,s)}},{key:"immediatelyRefresh",value:function(){this._reset(),this.forceUpdate()}},{key:"_reset",value:function(){this._key=c(),this._descriptors={title:new _,right:new _}}},{key:"_setPropsIfExists",value:function(t,e){var t=this.refs[t];t&&t.setNativeProps(e)}}]),e}(p.Component);R.propTypes={navigator:v.shape({push:v.func,pop:v.func,replace:v.func,popToRoute:v.func,popToTop:v.func}),routeMapper:v.shape({rightContentForRoute:v.func,titleContentForRoute:v.func,iconForRoute:v.func}),navState:p.PropTypes.shape({routeStack:p.PropTypes.arrayOf(p.PropTypes.object),presentedIndex:p.PropTypes.number}),style:l.propTypes.style},R.Styles=a;var S=u.create({breadCrumbContainer:{overflow:"hidden",position:"absolute",height:y.General.TotalNavHeight,top:0,left:0,right:0}});r.exports=R});