(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,n,t){var a={"./clear-day.jpg":117,"./cloudy.jpg":118,"./fog.jpg":119,"./partly-cloudy-day.jpg":120,"./rain.jpg":121,"./sleet.jpg":122,"./snow.jpg":123,"./wind.jpg":124};function i(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=116},117:function(e,n,t){e.exports=t.p+"static/media/clear-day.cc793497.jpg"},118:function(e,n,t){e.exports=t.p+"static/media/cloudy.0fb54403.jpg"},119:function(e,n,t){e.exports=t.p+"static/media/fog.55d9cdc1.jpg"},120:function(e,n,t){e.exports=t.p+"static/media/partly-cloudy-day.0fb54403.jpg"},121:function(e,n,t){e.exports=t.p+"static/media/rain.bffd5acf.jpg"},122:function(e,n,t){e.exports=t.p+"static/media/sleet.775dead8.jpg"},123:function(e,n,t){e.exports=t.p+"static/media/snow.4abd9405.jpg"},124:function(e,n,t){e.exports=t.p+"static/media/wind.0d4184c4.jpg"},125:function(e,n,t){var a={"./adrian-154479-unsplash.jpg":126,"./clear-night.jpg":127,"./cloudy.jpg":128,"./fog.jpg":129,"./partly-cloudy-night.jpg":130,"./rain.jpg":131,"./sleet.jpg":132,"./snow.jpg":133,"./wind.jpg":134};function i(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=125},126:function(e,n,t){e.exports=t.p+"static/media/adrian-154479-unsplash.1c45fdd7.jpg"},127:function(e,n,t){e.exports=t.p+"static/media/clear-night.28e6ea44.jpg"},128:function(e,n,t){e.exports=t.p+"static/media/cloudy.a1d2b3ff.jpg"},129:function(e,n,t){e.exports=t.p+"static/media/fog.55d9cdc1.jpg"},130:function(e,n,t){e.exports=t.p+"static/media/partly-cloudy-night.a1d2b3ff.jpg"},131:function(e,n,t){e.exports=t.p+"static/media/rain.48baedb2.jpg"},132:function(e,n,t){e.exports=t.p+"static/media/sleet.48baedb2.jpg"},133:function(e,n,t){e.exports=t.p+"static/media/snow.77d184ae.jpg"},134:function(e,n,t){e.exports=t.p+"static/media/wind.e63699f8.jpg"},140:function(e,n,t){var a={"./clear-day.svg":141,"./clear-night.svg":142,"./cloudy.svg":143,"./fog.svg":144,"./partly-cloudy-day.svg":145,"./partly-cloudy-night.svg":146,"./rain.svg":147,"./sleet.svg":148,"./snow.svg":149,"./wind.svg":150};function i(e){var n=r(e);return t(n)}function r(e){var n=a[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}i.keys=function(){return Object.keys(a)},i.resolve=r,e.exports=i,i.id=140},141:function(e,n,t){e.exports=t.p+"static/media/clear-day.9f0634a2.svg"},142:function(e,n,t){e.exports=t.p+"static/media/clear-night.46824d41.svg"},143:function(e,n,t){e.exports=t.p+"static/media/cloudy.c268e266.svg"},144:function(e,n,t){e.exports=t.p+"static/media/fog.f6866f92.svg"},145:function(e,n,t){e.exports=t.p+"static/media/partly-cloudy-day.9c120232.svg"},146:function(e,n,t){e.exports=t.p+"static/media/partly-cloudy-night.a93465c7.svg"},147:function(e,n,t){e.exports=t.p+"static/media/rain.4dcbd961.svg"},148:function(e,n,t){e.exports=t.p+"static/media/sleet.c9a2d712.svg"},149:function(e,n,t){e.exports=t.p+"static/media/snow.93140a78.svg"},150:function(e,n,t){e.exports=t.p+"static/media/wind.e18b61b1.svg"},151:function(e,n,t){"use strict";t.r(n);t(78);var a=t(0),i=t.n(a),r=t(29),c=t.n(r),o=t(10),s=t(11),u=t(13),l=t(12),p=t(14),d=t(5),f=t(1),h=t(2),m=function(e){var n=t(116),a=t(125),i=n.keys().reduce(function(e,t){return e[t]=n(t),e},{}),r=a.keys().reduce(function(e,n){return e[n]=a(n),e},{});return"day"===e?i:"night"===e?r:void 0},g=function(e){var n=e.getHours(),t=e.getMinutes(),a=n>=12?"pm":"am";return n=(n%=12)||12,t=t<10?"0".concat(t):t,"".concat(n,":").concat(t).concat(a)};function y(e){return 5*(e-32)/9}function v(e){return 9*e/5+32}var b=function(e,n){var t=e;Object.keys(e).forEach(function(a){var i;i=a,Object.keys(e[a]).forEach(function(a){var r;r=a,Object.keys(e[i][a]).forEach(function(a){"temp"===a&&(t[i][r][a]=n(e[i][r][a]))})})})},x=function(e,n,t){fetch("https://api.ipdata.co/?api-key=b3d5e0169f7230932b950ce9b4b15c1fb1855c3aa0429d4b7569f222").then(function(e){return e.json()}).then(function(e){var n=Math.round(e.latitude),t=Math.round(e.longitude);return"".concat(n,",").concat(t)}).then(function(n){return fetch("https://whispering-savannah-31637.herokuapp.com/https://api.darksky.net/forecast/390040fe85ad0e8ff9ff687e0b4da4f1/".concat(n)).then(function(e){return e.json()}).then(function(n){e.setState(function(e){var n,t,a={"clear-day":"Clear","clear-night":"Clear",cloudy:"Cloudy",fog:"Foggy","partly-cloudy-day":"Partly Cloudy","partly-cloudy-night":"Partly Cloudy",rain:"Rainy",snow:"Snow",sleet:"Sleet",wind:"Windy"},i=e.currently,r=e.daily.data,c=r.shift(),o=r.map(function(e){return{icon:e.icon,temp:e.temperatureHigh,type:a[e.icon],weekDay:(n=e.time,["SUN","MON","TUE","WED","THU","FRI","SAT"][new Date(1e3*n).getDay()])};var n});return{bgUrl:(n=c.sunriseTime,t=c.sunsetTime,Date.now()>1e3*n&&Date.now()<1e3*t?"url(".concat(m("day")["./".concat(i.icon,".jpg")],")"):"url(".concat(m("night")["./".concat(i.icon,".jpg")],")")),currently:{today:{icon:i.icon,temp:i.temperature,type:a[i.icon]}},nextDays:o}}(n)),!0})}).then(function(){n.loading_screen.finish()})};function j(){var e=Object(f.a)(["\n  font-size: 18.5px;\n  margin-bottom: 5px;\n"]);return j=function(){return e},e}function w(){var e=Object(f.a)(["\n  font-size: 0.7em;\n  margin: 5px 0px;\n  letter-spacing: 1px;\n"]);return w=function(){return e},e}function O(){var e=Object(f.a)(["\n  font-size: ",";\n  margin-top: ",";\n  letter-spacing: ",";\n  width: ",";\n\n  @media (max-width: 350px) {\n    ",";\n  }\n"]);return O=function(){return e},e}function k(){var e=Object(f.a)(["\n  font-size: ",";\n  font-weight: ","\n  padding-left: ","\n  margin: 10px 0px;\n  letter-spacing: ",';\n\n  &::after {\n    content:"\xb0"\n  }\n  \n']);return k=function(){return e},e}function E(){var e=Object(f.a)(["\n  height: ",";\n  margin-bottom: ",";\n  @media (max-width: 350px) {\n    height: ",";\n  }\n"]);return E=function(){return e},e}function C(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: cetner;\n  justify-content: center;\n  color: ",";\n  text-shadow: 0.2px 0.2px 3px #000;\n  text-align: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n  \n  @media (max-width: 350px) {\n    margin-top: -100px;\n  }\n"]);return C=function(){return e},e}var D=h.b.div(C(),"#dee2e2"),T=h.b.img(E(),function(e){return e.mainTheme?"8em":"6em"},function(e){return e.mainTheme?"-25px":"-15px"},function(e){return e.mainTheme?"5em":"4em"}),F=h.b.p(k(),function(e){return e.mainTheme?"3.5em":"1em"},function(e){return e.mainTheme?"400":"600"},function(e){return e.mainTheme?"26px":"0px"},function(e){return e.mainTheme?"2px":"0.5px"}),U=h.b.p(O(),function(e){return e.mainTheme?"22px":"18px"},function(e){return e.mainTheme?"0px":"12px"},function(e){return e.mainTheme?"1px":"0.5px"},function(e){return e.mainTheme?"200px":"100px"},function(e){return e.mainTheme?"":"display: none"}),S=h.b.p(w()),M=h.b.p(j()),W=t(140),z=W.keys().reduce(function(e,n){return e[n]=W(n),e},{}),N=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).updateDate=t.updateDate.bind(Object(d.a)(Object(d.a)(t))),t.state={time:g(new Date)},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"updateDate",value:function(){this.setState({time:g(new Date)})}},{key:"componentDidMount",value:function(){setInterval(this.updateDate,1e3)}},{key:"render",value:function(){var e=this.props.weatherData,n=this.props.weekDay,t=this.props.mainTheme;return i.a.createElement(D,null,t?i.a.createElement(i.a.Fragment,null):i.a.createElement(M,null,n),i.a.createElement(T,{mainTheme:t,src:z["./".concat(e.icon,".svg")]}),i.a.createElement(F,{mainTheme:t},Math.round(e.temp)),t?i.a.createElement(S,null,"Today ",this.state.time):i.a.createElement(i.a.Fragment,null),i.a.createElement(U,{mainTheme:t},e.type))}}]),n}(a.Component);function _(){var e=Object(f.a)(["\n  border-left: 3.5px solid #dee2e2;\n  border-radius: 5px;\n  height: 100px;\n  opacity: 0.65;\n\n  @media (max-width: 350px) {\n   display: none;\n  }\n"]);return _=function(){return e},e}function I(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return I=function(){return e},e}var R=h.b.div(I()),H=h.b.div(_()),L=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.nextDays,n=0,t=[];return e.forEach(function(a){var r=i.a.createElement(i.a.Fragment,{key:a.weekDay},e[0]!==a?i.a.createElement(H,null):i.a.createElement(i.a.Fragment,null),i.a.createElement(N,{weekDay:a.weekDay,weatherData:a}));if(n++,!(window.innerWidth<700&&n>3))switch(!0){case window.innerWidth<890&&n>=6:case window.innerWidth<770&&n>=5:case window.innerWidth<650&&n>=4:return;default:t.push(r)}}),i.a.createElement(R,null,t)}}]),n}(a.Component),P=t(75);function B(){var e=Object(f.a)(["\n  height: .25rem;\n  width: 25%;\n  background: #dee2e2;\n  border: none;\n"]);return B=function(){return e},e}function J(){var e=Object(f.a)(["\n  margin: 0px 15px;\n  cursor: pointer;\n"]);return J=function(){return e},e}function A(){var e=Object(f.a)(["\n  text-shadow: 0.2px 0.2px 3px #000;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  font-weight: 600;\n\n  @media (max-width: 350px) {\n    margin-top: -45px;\n  }\n"]);return A=function(){return e},e}var $=h.b.div(A()),q=h.b.span(J()),G=Object(h.b)(P.a.hr({right:{x:-22.5},left:{x:26.5}}))(B()),K=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.handleCelsiusChange,n=this.props.handleFahrenheitChange,t=this.props.celsiusStyle,a=this.props.fahrenheitStyle,r=this.props.slidePosition;return i.a.createElement($,null,i.a.createElement(q,{style:t,onClick:e},"\xb0C"),i.a.createElement(q,{style:a,onClick:n},"\xb0F"),i.a.createElement(G,{pose:r}))}}]),n}(a.Component),Q=t(74);function V(){var e=Object(f.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  user-select: none;\n  overflow: hidden;\n  padding: 5%;\n\n  @media (min-width: 700px) {\n    padding: 2%;\n  }\n"]);return V=function(){return e},e}function X(){var e=Object(f.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  transform: scale(1.1);\n  display: block;\n  background-image: ",";\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  filter: blur(1.5px);\n"]);return X=function(){return e},e}function Y(){var e=Object(f.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Roboto');\n"]);return Y=function(){return e},e}var Z=Object(h.a)(Y()),ee=h.b.div(X(),function(e){return e.bgUrl}),ne=h.b.div(V()),te=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(u.a)(this,Object(l.a)(n).call(this,e))).handleFahrenheitChange=t.handleFahrenheitChange.bind(Object(d.a)(Object(d.a)(t))),t.handleCelsiusChange=t.handleCelsiusChange.bind(Object(d.a)(Object(d.a)(t))),t.state={scale:"f",style:{celsius:{color:"#8c8c8c"},fahrenheit:{color:"#dee2e2"}},pose:"left"},t}return Object(p.a)(n,e),Object(s.a)(n,[{key:"handleFahrenheitChange",value:function(){"c"===this.state.scale&&(b(this.state,v),this.setState({scale:"f",style:{celsius:{color:"#8c8c8c"},fahrenheit:{color:"#dee2e2"}},pose:"left"===this.state.pose?"right":"left"}))}},{key:"handleCelsiusChange",value:function(){"f"===this.state.scale&&(b(this.state,y),this.setState({scale:"c",style:{celsius:{color:"#dee2e2"},fahrenheit:{color:"#8c8c8c"}},pose:"left"===this.state.pose?"right":"left"}))}},{key:"componentDidMount",value:function(){window.loading_screen=Object(Q.pleaseWait)({logo:"./Icons/favicon.ico",backgroundColor:"#ededed",loadingHtml:'\n        <p class="pre-loader-text">Fetching weather information. </p>\n        <p class="pre-loader-text">It may take a few seconds...</p>\n        <div class="spinner">\n        <div class="rect1"></div>\n        <div class="rect2"></div>\n        <div class="rect3"></div>\n        <div class="rect4"></div>\n        <div class="rect5"></div>\n        </div>'}),x(this,window)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null),this.state.currently?i.a.createElement(i.a.Fragment,null,i.a.createElement(ee,{bgUrl:this.state.bgUrl}),i.a.createElement(ne,null,i.a.createElement(K,{slidePosition:this.state.pose,celsiusStyle:this.state.style.celsius,fahrenheitStyle:this.state.style.fahrenheit,handleCelsiusChange:this.handleCelsiusChange,handleFahrenheitChange:this.handleFahrenheitChange}),i.a.createElement(N,{celsiusChange:this.handleCelsiusChange,fahrenheitChange:this.handleFahrenheitChange,mainTheme:!0,weatherData:this.state.currently.today}),i.a.createElement(L,{nextDays:this.state.nextDays}))):i.a.createElement("p",null,"Loading."))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},77:function(e,n,t){e.exports=t(151)}},[[77,2,1]]]);
//# sourceMappingURL=main.ff564397.chunk.js.map