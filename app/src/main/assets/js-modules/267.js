__d(267,function(t,o,e,i){"use strict";for(var a=o(268),r=o(269),p=o(102),n=a.General.NavBarHeight,c=n,l={position:"absolute",flexDirection:"row",top:0,width:49,height:c,backgroundColor:"transparent"},y={width:40,height:c},m={width:9,height:c},h={position:"absolute",top:0,height:c,backgroundColor:"transparent",alignItems:"flex-start"},f=p(h,{left:0,right:0}),g={position:"absolute",top:0,right:0,overflow:"hidden",opacity:1,height:c,backgroundColor:"transparent"},u=[],I=[],s=[],T=0;T<10;T++){var b=49*T+8;u[T]={Crumb:p(l,{left:b}),Icon:p(y,{opacity:.6}),Separator:p(m,{opacity:1}),Title:p(h,{left:b,opacity:0}),RightItem:p(g,{opacity:0})},I[T]={Crumb:p(l,{left:b}),Icon:p(y,{opacity:1}),Separator:p(m,{opacity:0}),Title:p(h,{left:b+40,opacity:1}),RightItem:p(g,{opacity:1})};var C=b+50;s[T]={Crumb:p(l,{left:C}),Icon:p(y,{opacity:0}),Separator:p(m,{opacity:0}),Title:p(h,{left:C+40,opacity:0}),RightItem:p(g,{opacity:0})}}I[0]={Crumb:p(l,{left:57}),Icon:p(y,{opacity:0}),Separator:p(m,{opacity:0}),Title:p(f,{opacity:1}),RightItem:I[0].RightItem},u[0].Title=p(f,{opacity:0}),s[0].Title=p(f,{opacity:0});var d=function(t,o){return{Crumb:r({left:{type:"linear",from:t.Crumb.left,to:o.Crumb.left,min:0,max:1,extrapolate:!0}}),Icon:r({opacity:{type:"linear",from:t.Icon.opacity,to:o.Icon.opacity,min:0,max:1}}),Separator:r({opacity:{type:"linear",from:t.Separator.opacity,to:o.Separator.opacity,min:0,max:1}}),Title:r({opacity:{type:"linear",from:t.Title.opacity,to:o.Title.opacity,min:0,max:1},left:{type:"linear",from:t.Title.left,to:o.Title.left,min:0,max:1,extrapolate:!0}}),RightItem:r({opacity:{type:"linear",from:t.RightItem.opacity,to:o.RightItem.opacity,min:0,max:1,round:100}})}},x=I.map(function(t,o){return{RightToCenter:d(s[o],I[o]),CenterToLeft:d(I[o],u[o]),RightToLeft:d(s[o],u[o])}});e.exports={Interpolators:x,Left:u,Center:I,Right:s,IconWidth:40,IconHeight:n,SeparatorWidth:9,SeparatorHeight:n}});