__d(350,function(e,i,n,r){"use strict";function s(e){return{layout:e.layout,navigationState:e.navigationState,position:e.position,progress:e.progress,scene:e.scene,scenes:e.scenes}}var o=i(293),u=i(76),t=u.PropTypes,d=t.shape({type:t.string.isRequired}),R=t.instanceOf(o.Value),a=t.shape({key:t.string.isRequired}),p=t.shape({index:t.number.isRequired,routes:t.arrayOf(a)}),q=t.shape({height:R,initHeight:t.number.isRequired,initWidth:t.number.isRequired,isMeasured:t.bool.isRequired,width:R}),c=t.shape({index:t.number.isRequired,isActive:t.bool.isRequired,isStale:t.bool.isRequired,key:t.string.isRequired,route:a.isRequired}),S={layout:q.isRequired,navigationState:p.isRequired,position:R.isRequired,progress:R.isRequired,scene:c.isRequired,scenes:t.arrayOf(c).isRequired},f=t.shape(S),h=t.shape({onMoveShouldSetResponder:t.func.isRequired,onMoveShouldSetResponderCapture:t.func.isRequired,onResponderEnd:t.func.isRequired,onResponderGrant:t.func.isRequired,onResponderMove:t.func.isRequired,onResponderReject:t.func.isRequired,onResponderRelease:t.func.isRequired,onResponderStart:t.func.isRequired,onResponderTerminate:t.func.isRequired,onResponderTerminationRequest:t.func.isRequired,onStartShouldSetResponder:t.func.isRequired,onStartShouldSetResponderCapture:t.func.isRequired});n.exports={extractSceneRendererProps:s,SceneRendererProps:S,SceneRenderer:f,action:d,navigationState:p,navigationRoute:a,panHandlers:h}});