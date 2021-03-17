(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{188:function(e,t,n){"use strict";n.d(t,"a",(function(){return ie}));var r=n(189),a=n(0),o=n.n(a),c=n(270),l=n(6),i=n.n(l),s=n(7),m=n.n(s),g=n(3),u=n.n(g),f=n(263),p=n(269),h=n(118);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=n(150),E=n(148),T=n(58),C=n(267),v=n(2),S=n(36),k=n(61),x=n(4);function O(e){var t=e.navigation;return a.createElement(x.a,{style:w.container},a.createElement(S.a,{style:w.title},"This screen doesn't exist."),a.createElement(k.a,{onPress:function(){return t.replace("Root")},style:w.link},a.createElement(S.a,{style:w.linkText},"Go to home screen!")))}var w=v.a.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center",padding:20},title:{fontSize:20,fontWeight:"bold"},link:{marginTop:15,paddingVertical:15},linkText:{fontSize:14,color:"#2e78b7"}}),j=n(20),z=n.n(j),I=n(265),P=n(266),H=n(268),B={light:{text:"#000",background:"#fff",tint:"#2f95dc",tabIconDefault:"#ccc",tabIconSelected:"#2f95dc"},dark:{text:"#fff",background:"#000",tint:"#fff",tabIconDefault:"#ccc",tabIconSelected:"#fff"}},D=n(191),N=n(8),R=n.n(N);function V(e,t){var n=e.light;return n||B.light[t]}function F(e){var t=e.style,n=e.lightColor,r=e.darkColor,o=R()(e,["style","lightColor","darkColor"]),c=V({light:n,dark:r},"text");return a.createElement(S.a,z()({style:[{color:c},t]},o))}function L(e){var t=e.style,n=e.lightColor,r=e.darkColor,o=R()(e,["style","lightColor","darkColor"]),c=V({light:n,dark:r},"background");return a.createElement(x.a,z()({style:[{backgroundColor:c},t]},o))}function W(e){return a.createElement(F,z()({},e,{style:[e.style,{fontFamily:"space-mono"}]}))}function A(e){var t=e.path;return o.a.createElement(L,null,o.a.createElement(L,{style:J.getStartedContainer},o.a.createElement(F,{style:J.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Open up the code for this screen:"),o.a.createElement(L,{style:[J.codeHighlightContainer,J.homeScreenFilename],darkColor:"rgba(255,255,255,0.05)",lightColor:"rgba(0,0,0,0.05)"},o.a.createElement(W,null,t)),o.a.createElement(F,{style:J.getStartedText,lightColor:"rgba(0,0,0,0.8)",darkColor:"rgba(255,255,255,0.8)"},"Change any of the text, save the file, and your app will automatically update.")),o.a.createElement(L,{style:J.helpContainer},o.a.createElement(k.a,{onPress:M,style:J.helpLink},o.a.createElement(F,{style:J.helpLinkText,lightColor:B.light.tint},"Tap here if your app doesn't automatically update after making changes"))))}function M(){D.a("https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet")}var J=v.a.create({container:{flex:1,backgroundColor:"#fff"},developmentModeText:{marginBottom:20,fontSize:14,lineHeight:19,textAlign:"center"},contentContainer:{paddingTop:30},welcomeContainer:{alignItems:"center",marginTop:10,marginBottom:20},welcomeImage:{width:100,height:80,resizeMode:"contain",marginTop:3,marginLeft:-10},getStartedContainer:{alignItems:"center",marginHorizontal:50},homeScreenFilename:{marginVertical:7},codeHighlightText:{color:"rgba(96,100,109, 0.8)"},codeHighlightContainer:{borderRadius:3,paddingHorizontal:4},getStartedText:{fontSize:17,lineHeight:24,textAlign:"center"},helpContainer:{marginTop:15,marginHorizontal:20,alignItems:"center"},helpLink:{paddingVertical:15},helpLinkText:{textAlign:"center"}});function G(){return a.createElement(L,{style:q.container},a.createElement(F,{style:q.title},"Tab One"),a.createElement(L,{style:q.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)",testID:"separator"}),a.createElement(A,{path:"/screens/TabOneScreen.tsx"}))}var q=v.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function K(){return a.createElement(L,{style:Q.container},a.createElement(F,{style:Q.title},"Tab Two"),a.createElement(L,{style:Q.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),a.createElement(A,{path:"/screens/TabTwoScreen.tsx"}))}var Q=v.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}});function U(){return a.createElement(L,{style:X.container},a.createElement(F,{style:X.title},"Tab Three"),a.createElement(L,{style:X.separator,lightColor:"#eee",darkColor:"rgba(255,255,255,0.1)"}),a.createElement(A,{path:"/screens/TabTwoScreen.tsx"}))}var X=v.a.create({container:{flex:1,alignItems:"center",justifyContent:"center"},title:{fontSize:20,fontWeight:"bold"},separator:{marginVertical:30,height:1,width:"80%"}}),Y=Object(H.a)();function Z(){return a.createElement(Y.Navigator,{initialRouteName:"Home",tabBarOptions:{activeTintColor:B.light.tint}},a.createElement(Y.Screen,{name:"Home",component:te,options:{tabBarIcon:function(e){var t=e.color;return a.createElement(_,{name:"home",color:t,size:24})}}}),a.createElement(Y.Screen,{name:"Recommendations",component:re,options:{tabBarIcon:function(e){var t=e.color;return a.createElement(_,{name:"comment",color:t,size:24})}}}),a.createElement(Y.Screen,{name:"Trends",component:U,options:{tabBarIcon:function(e){var t=e.color;return a.createElement($,{name:"head-flash-outline",color:t,size:24})}}}))}function $(e){return a.createElement(I.a,z()({size:30,style:{marginBottom:-3}},e))}function _(e){return a.createElement(P.a,z()({size:30,style:{marginBottom:-3}},e))}var ee=Object(C.a)();function te(){return a.createElement(ee.Navigator,null,a.createElement(ee.Screen,{name:"TabOneScreen",component:G,options:{headerTitle:"Tab One Title"}}))}var ne=Object(C.a)();function re(){return a.createElement(ne.Navigator,null,a.createElement(ne.Screen,{name:"TabTwoScreen",component:K,options:{headerTitle:"Tab Two Title"}}))}Object(C.a)();var ae={prefixes:[n(190).a("/")],config:{screens:{Root:{screens:{TabOne:{screens:{TabOneScreen:"one"}},TabTwo:{screens:{TabTwoScreen:"two"}}}},NotFound:"*"}}};function oe(e){var t=e.colorScheme;return a.createElement(y.a,{linking:ae,theme:"dark"===t?E.a:T.a},a.createElement(le,null))}var ce=Object(C.a)();function le(){return a.createElement(ce.Navigator,{screenOptions:{headerShown:!1}},a.createElement(ce.Screen,{name:"Root",component:Z}),a.createElement(ce.Screen,{name:"NotFound",component:O,options:{title:"Oops!"}}))}function ie(){return function(){var e=a.useState(!1),t=m()(e,2),r=t[0],o=t[1];return a.useEffect((function(){u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h.b(),e.next=4,u.a.awrap(p.b(b(b({},f.a.font),{},{"space-mono":n(218)})));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.warn(e.t0);case 9:return e.prev=9,o(!0),h.a(),e.finish(9);case 13:case"end":return e.stop()}}),null,null,[[0,6,9,13]],Promise)}),[]),r}()?o.a.createElement(c.b,null,o.a.createElement(oe,{colorScheme:"light"}),o.a.createElement(r.a,null)):null}},199:function(e,t,n){n(200),e.exports=n(258)},218:function(e,t,n){e.exports=n.p+"./fonts/SpaceMono-Regular.ttf"}},[[199,1,2]]]);
//# sourceMappingURL=app.e2802f41.chunk.js.map