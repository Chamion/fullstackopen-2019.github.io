(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,t,a){"use strict";a.r(t);var n=a(482),i=a(139),l=a(0),o=a.n(l),s=a(176),r=a(138),c=a(145),m=a(161),u=a(160),d=a(178);t.default=function(){return o.a.createElement(m.a,null,o.a.createElement(u.a,{title:"FAQ",keywords:["fullstack","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","web-sovelluskehitys"]}),o.a.createElement(r.a,{className:"container link spacing spacing--after"},o.a.createElement(d.a,{className:"spacing--after-small",headingLevel:"h1",text:"Usein kysytyt kysymykset"}),o.a.createElement(i.StaticQuery,{query:"10433134",render:function(e){var t=e.allFaqJson.edges;return o.a.createElement(o.a.Fragment,null,t.map(function(e){var t=e.node;return o.a.createElement(s.a,{key:t.title,title:t.title,content:t.text})}))},data:n})),o.a.createElement(c.a,null))}},144:function(e,t,a){"use strict";a.d(t,"a",function(){return y});a(28),a(153);var n=a(140),i=a.n(n),l=(a(158),a(166)),o=a.n(l),s=a(155),r=a.n(s),c=a(4),m=a.n(c),u=a(0),d=a.n(u),p=a(159),g=a.n(p),h=a(138),y=function(e){var t=e.text,a=e.className,n=e.heading,l=e.headingFontSize,s=e.bold,c=e.centered,m=e.noPadding,u=e.headingFont,p=i()(e,["text","className","heading","headingFontSize","bold","centered","noPadding","headingFont"]),y=[];c&&y.push("centered"),s&&y.push("bold"),m&&y.push("body-text--no-padding"),u&&y.push("heading-font");var E={replace:function(e){var t=e.type,a=e.attribs,n=e.children;if("tag"===t&&"github-logo"===a.class)return d.a.createElement(h.a,{flex:!0,autoBottomMargin:!0,className:"github-logo__container"},d.a.createElement("img",{style:{maxWidth:"1rem",maxHeight:"1rem",margin:"auto 0"},alt:"github-logo",src:g.a}),d.a.createElement("p",{style:{marginLeft:"0.611rem"}},r()(n,E)))}};return d.a.createElement("div",Object.assign({className:"body-text "+a},p),n.title&&function(){if(n){var e=n.level;return d.a.createElement(e,{className:"body-text__title",style:l?{fontSize:l}:{}},n.title)}return null}(),t&&"string"==typeof t?d.a.createElement("p",{className:"body-text__content "+y.join(" ")},t):t&&t.map(function(e){return d.a.createElement("div",{key:e,className:"body-text__content "+y.join(" ")},o()(e,E))}))};y.defaultProps={heading:{title:"",level:"h2"},text:"",className:"",centered:!1,bold:!1,noPadding:!1},y.propTypes={heading:m.a.shape({text:m.a.string,level:m.a.string}),headingFontSize:m.a.string,text:m.a.oneOfType([m.a.string,m.a.array]),className:m.a.string,centered:m.a.bool,bold:m.a.bool,noPadding:m.a.bool}},145:function(e,t,a){"use strict";a(146);var n=a(139),i=a(0),l=a.n(i),o=a(149),s=a.n(o),r=a(150),c=a.n(r),m=a(138),u=a(148),d=a(162),p=[{src:s.a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:c.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];t.a=function(){return l.a.createElement(m.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(m.a,{className:"col-5 col-10--mobile order-2--mobile footer__links",flex:!0,spaceBetween:!0},p.map(function(e){return l.a.createElement("a",{key:e.alt,href:e.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(u.a,{contain:!0,src:e.src,alt:e.alt,className:"col-6"}))})),l.a.createElement(m.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile footer__navigation"},d.b.map(function(e){return l.a.createElement(n.Link,{key:e.path,to:e.path,className:"footer__navigation-link nav-item-hover col-10--mobile",style:{marginLeft:"4.5rem"}},e.text)})))}},146:function(e,t,a){},158:function(e,t,a){},159:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNTE3OEEyQTk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNTE3OEEyQjk5QTAxMUUyOUExNUJDMTA0NkE4OTA0RCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTI4OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTI5OTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+m4QGuQAAAyRJREFUeNrEl21ojWEYx895TDPbMNlBK46IUiNmPvHBSUjaqc0H8pF5+aDUKPEBqU2NhRQpX5Rv5jWlDIWlMCv7MMSWsWwmb3tpXub4XXWdPHvc9/Gc41nu+nedc7/8r/99PffLdYdDPsvkwsgkTBwsA/PADJCnzX2gHTwBt8Hl7p537/3whn04XoDZDcpBlk+9P8AFcAghzRkJwPF4zGGw0Y9QS0mAM2AnQj77FqCzrtcwB1Hk81SYojHK4DyGuQ6mhIIrBWB9Xm7ug/6B/nZrBHBegrkFxoVGpnwBMSLR9EcEcC4qb8pP14BWcBcUgewMnF3T34VqhWMFkThLJAalwnENOAKiHpJq1FZgI2AT6HZtuxZwR9GidSHtI30jOrbawxlVX78/AbNfhHlomEUJJI89O2MqeE79T8/nk8nMBm/dK576hZgmA3cp/R4l9/UeSxiHLVIlNm4nFfT0bxyuIj7LHRTKai+zdJobwMKzcZSJb0ePV5PKN+BqAAKE47UlMnERELMM3EdYP/yrd+XYb2mOiYBiQ8OQnoRBlXrl9JZix7D1pHTazu4MoyBcnYamqAjIMTR8G4FT8LuhLsexXYYjICBiqhQBvYb6fLZIJCjPypVvaOoVAW2WcasCnL2Nq82xHJNSqlCeFcDshaPK0twkAhosjZL31QYw+1rlMpWGMArl23SBsZZO58F2tlJXmjOXS+s4WGvpMiBJT/I2PInZ6lIs9/hBsNS1hS6BG0DSqmYEDRlCXQrmy50P1oDRKTSegmNbUsA0zDMwRhPJXeCE3vWLPQMvan6X8AgIa1vcR4AkGZkDR4ejJ1UHpsaVI0g2LInpOsNFUud1rhxSV+fzC9Woz2EZkWQuja7/B+jUrgtIMpy9YCW4n4K41YfzRneW5E1KJTe4B2Zq1Q5EHEtj4U3AfEzR5SVY4l7QYQPJdN2as7RKBF0BPZqqH4VgMAMBL8Byxr7y8zCZiDlnOcEKIPmUpgB5Z2ww5RdOiiRiNajUmWda5IG6WbhsyY2fx6m8gLcoJDJFkH219M3We1+cnda93pfycZpIJEL/s/wSYADmOAwAQgdpBAAAAABJRU5ErkJggg=="},176:function(e,t,a){"use strict";var n=a(6),i=a.n(n),l=(a(177),a(139)),o=a(4),s=a.n(o),r=a(0),c=a.n(r),m=a(144),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpened:!1},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},a.render=function(){var e=this,t=this.props,a=t.title,n=t.content,i=t.className,o=t.containerClassName,s=t.list,r=t.titleStyle,u=this.state.isOpened;return c.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},c.a.createElement("button",{className:"accordion accordion__title "+(u?"active":"")+" "+i,style:r,onClick:function(){return e.setState({isOpened:!u})}},a),c.a.createElement("div",{className:"panel",style:{padding:u?"2rem 18px":"",maxHeight:""+(u?"unset":0),transition:"max-height 0.2s ease-out"}},n&&c.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),s&&c.a.createElement("ul",null,s.map(function(e){return c.a.createElement("li",{key:e.text},c.a.createElement(l.Link,{to:e.href},e.text))}))))},t}(r.Component);u.propTypes={title:s.a.string.isRequired,content:s.a.oneOfType([s.a.string,s.a.array]),list:s.a.array,className:s.a.string,containerClassName:s.a.string,initiallyOpened:s.a.bool,titleStyle:s.a.object},u.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},t.a=u},177:function(e,t,a){},178:function(e,t,a){"use strict";a.d(t,"a",function(){return c});a(28);var n=a(140),i=a.n(n),l=(a(179),a(4)),o=a.n(l),s=a(0),r=a.n(s),c=function(e){var t=e.className,a=e.headingLevel,n=void 0===a?"h2":a,l=e.headingFontSize,o=e.text,s=i()(e,["className","headingLevel","headingFontSize","text"]),c=n;return r.a.createElement(c,Object.assign({className:"sub-header "+t,style:l?{fontSize:l}:{}},s),o)};c.propTypes={className:o.a.string,headingLevel:o.a.string,text:o.a.string.isRequired,headingFontSize:o.a.string},c.defaultProps={className:""}},179:function(e,t,a){},482:function(e){e.exports={data:{allFaqJson:{edges:[{node:{title:"Pitääkö jokainen osa palauttaa omaan repositorioon?",text:["Ei. Voit käyttää yhtä tai useampaa repositoriota, tärkeintä että asiat repositorion sisällä ovat selkeästi nimettyjä."]}},{node:{title:"Voinko laajentaa aiempaa kurssisuoritustani?",text:["Voit, lue lisää <a href='osa0/yleista#aiemmin-suoritetun-kurssin-taydentaminen'>täältä</a>"]}},{node:{title:"Voinko muokata tekemääni palautusta?",text:["Et. Kaikki osan tehtävät on palautettava kerralla. Jos merkkasit tehtäviä vahingossa väärin tai typotit repositorion nimen, lähetä mailia mluukkai@cs.helsinki.fi"]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-faq-js-482964237652513f016a.js.map