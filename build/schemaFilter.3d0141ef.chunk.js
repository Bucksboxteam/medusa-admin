"use strict";(self.webpackChunkmedusa_starter_default=self.webpackChunkmedusa_starter_default||[]).push([[952],{18648:(n,e,t)=>{t.d(e,{y:()=>i});function i(n,e){var t,i;return"boolean"==typeof(null==e?void 0:e.enabled)?e.enabled:null===(i=null===(t=null==n?void 0:n.__default)||void 0===t?void 0:t.enabled)||void 0===i||i}},78488:(n,e,t)=>{t.r(e),t.d(e,{schemaFilter:()=>a});var i=t(81316),r=t(18648);function a(n,e){function t(t){var a=t.event.event;if(n&&a){var s=n[a];if((0,r.y)(n,s)){var u=function(n,e){if(!n||!Object.keys(n))return{};var t,i,r=n.integrations?Object.keys(n.integrations).filter(function(e){return!1===n.integrations[e]}):[],a=[];return(null!==(t=e.remotePlugins)&&void 0!==t?t:[]).forEach(function(n){r.forEach(function(e){(n.name.includes(e)||e.includes(n.name))&&a.push(n.name)})}),(null!==(i=e.remotePlugins)&&void 0!==i?i:[]).reduce(function(n,e){return e.settings.subscriptions&&a.includes(e.name)&&e.settings.subscriptions.forEach(function(t){return n["".concat(e.name," ").concat(t.partnerAction)]=!1}),n},{})}(s,e);t.updateEvent("integrations",(0,i.__assign)((0,i.__assign)((0,i.__assign)({},t.event.integrations),null==s?void 0:s.integrations),u))}else t.updateEvent("integrations",(0,i.__assign)((0,i.__assign)({},t.event.integrations),{All:!1,"Segment.io":!0}))}return t}return{name:"Schema Filter",version:"0.1.0",isLoaded:function(){return!0},load:function(){return Promise.resolve()},type:"before",page:t,alias:t,track:t,identify:t,group:t}}}}]);