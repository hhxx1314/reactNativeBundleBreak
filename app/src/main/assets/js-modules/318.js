__d(318,function(e,t,s,o){"use strict";var n=t(37),i=t(76),r=t(174),a=t(167),p=t(312),l=t(72),c=t(313),d=t(40),h=t(107),u=t(113),b=n.shape({type:i.PropTypes.oneOf(["RippleAndroid"]),color:n.number,borderless:n.bool}),f=n.shape({type:i.PropTypes.oneOf(["ThemeAttrAndroid"]),attribute:n.string.isRequired}),y=n.oneOfType([b,f]),R=u("RCTView",null,{nativeOnly:{nativeBackgroundAndroid:y}}),g={top:20,left:20,right:20,bottom:30},m=i.createClass({displayName:"TouchableNativeFeedback",propTypes:babelHelpers.extends({},p.propTypes,{background:y}),statics:{SelectableBackground:function(){return{type:"ThemeAttrAndroid",attribute:"selectableItemBackground"}},SelectableBackgroundBorderless:function(){return{type:"ThemeAttrAndroid",attribute:"selectableItemBackgroundBorderless"}},Ripple:function(e,t){return{type:"RippleAndroid",color:h(e),borderless:t}}},mixins:[a.Mixin],getDefaultProps:function(){return{background:this.SelectableBackground()}},getInitialState:function(){return this.touchableGetInitialState()},componentDidMount:function(){c(this.props)},componentWillReceiveProps:function(e){c(e)},touchableHandleActivePressIn:function(e){this.props.onPressIn&&this.props.onPressIn(e),this._dispatchPressedStateChange(!0),this._dispatchHotspotUpdate(this.pressInLocation.locationX,this.pressInLocation.locationY)},touchableHandleActivePressOut:function(e){this.props.onPressOut&&this.props.onPressOut(e),this._dispatchPressedStateChange(!1)},touchableHandlePress:function(e){this.props.onPress&&this.props.onPress(e)},touchableHandleLongPress:function(e){this.props.onLongPress&&this.props.onLongPress(e)},touchableGetPressRectOffset:function(){return this.props.pressRetentionOffset||g},touchableGetHitSlop:function(){return this.props.hitSlop},touchableGetHighlightDelayMS:function(){return this.props.delayPressIn},touchableGetLongPressDelayMS:function(){return this.props.delayLongPress},touchableGetPressOutDelayMS:function(){return this.props.delayPressOut},_handleResponderMove:function(e){this.touchableHandleResponderMove(e),this._dispatchHotspotUpdate(e.nativeEvent.locationX,e.nativeEvent.locationY)},_dispatchHotspotUpdate:function(e,t){l.dispatchViewManagerCommand(r.findNodeHandle(this),l.RCTView.Commands.hotspotUpdate,[e||0,t||0])},_dispatchPressedStateChange:function(e){l.dispatchViewManagerCommand(r.findNodeHandle(this),l.RCTView.Commands.setPressed,[e])},render:function(){var e=d(this.props.children),t=e.props.children;a.TOUCH_TARGET_DEBUG&&"View"===e.type.displayName&&(Array.isArray(t)||(t=[t]),t.push(a.renderDebugView({color:"brown",hitSlop:this.props.hitSlop})));var s=babelHelpers.extends({},e.props,{nativeBackgroundAndroid:this.props.background,accessible:this.props.accessible!==!1,accessibilityLabel:this.props.accessibilityLabel,accessibilityComponentType:this.props.accessibilityComponentType,accessibilityTraits:this.props.accessibilityTraits,children:t,testID:this.props.testID,onLayout:this.props.onLayout,hitSlop:this.props.hitSlop,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this._handleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate});return i.createElement(R,s)}});s.exports=m});