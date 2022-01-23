(this.webpackJsonpcow=this.webpackJsonpcow||[]).push([[0],{178:function(e,t,c){},205:function(e,t){},207:function(e,t){},218:function(e,t){},220:function(e,t){},247:function(e,t){},249:function(e,t){},250:function(e,t){},255:function(e,t){},257:function(e,t){},276:function(e,t){},288:function(e,t){},291:function(e,t){},296:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(30),s=c.n(i),r=(c(178),c(179),c(310)),l=c(312),o=c(1),d=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{variant:"dark",className:"ml-0 mr-12",style:{backgroundColor:"#10032a",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsx)(r.a.Brand,{href:"/",className:"ml-5 zoomeffect",children:"CoWIN "}),Object(o.jsxs)(l.a,{className:"mr-auto",children:[Object(o.jsx)(l.a.Link,{className:"zoomeffect",href:"/",children:"Availability"}),Object(o.jsx)(l.a.Link,{className:"zoomeffect",href:"/statistics",children:"Statistics"}),Object(o.jsx)(l.a.Link,{className:"zoomeffect",href:"/certificate",children:"Certificate"})]}),Object(o.jsx)(r.a.Collapse,{className:"justify-content-end mr-5",children:Object(o.jsxs)(r.a.Text,{className:"zoomeffect",children:["Please visit ",Object(o.jsx)("a",{href:"https://www.cowin.gov.in/home",target:"_blank",children:" CoWIN "})," for all services."]})})]})})},j=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{})})},b=c(172),h=c(13),x=c(10),O=c(22),p=c.n(O),u=c(314),m=c(315),v=c(301),f=function(){var e,t,c,n=Object(a.useState)([]),i=Object(x.a)(n,2),s=i[0],r=i[1];function l(e){return null===e||void 0===e?void 0:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}Object(a.useEffect)((function(){p.a.get("https://covid-api.mmediagroup.fr/v1/cases").then((function(e){var t=e.data.Global;r(t)})).catch((function(e){console.log(e)}))}),[r]);var d=l(null===(e=s.All)||void 0===e?void 0:e.confirmed),j=l(null===(t=s.All)||void 0===t?void 0:t.deaths),b=l(null===(c=s.All)||void 0===c?void 0:c.recovered);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(u.a,{className:"mt-5 slideinanimation zoomeffect",style:{boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsx)(u.a.Header,{children:Object(o.jsx)("b",{children:"WORLD"})}),Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:[Object(o.jsx)(v.a,{variant:"secondary",children:"Confirmed Cases"}),Object(o.jsxs)(v.a,{variant:"light",children:[" ",d]})]}),Object(o.jsxs)(m.a.Item,{children:[Object(o.jsx)(v.a,{variant:"danger",children:"Deaths"}),Object(o.jsxs)(v.a,{variant:"light",children:[" ",j]})]}),Object(o.jsxs)(m.a.Item,{children:[Object(o.jsx)(v.a,{variant:"success",children:"Recovered"}),Object(o.jsxs)(v.a,{variant:"light",children:[" ",b]})]})]})]})})},g=c(302),y=c(303),N=c(304),S=c(31),w=c(311),C=c(309),k=c(305),I=c(170),_=c(306),T=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)([]),s=Object(x.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)([]),j=Object(x.a)(d,2),b=j[0],h=j[1],O=Object(a.useState)([]),f=Object(x.a)(O,2),T=f[0],A=f[1],H=Object(a.useState)(!1),D=Object(x.a)(H,2),F=D[0],P=D[1];function B(e){return null===e||void 0===e?void 0:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}return Object(a.useEffect)((function(){p.a.get("https://cdn-api.co-vin.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=").then((function(e){var t=e.data;n(t.topBlock.sites),l(t.topBlock.registration),h(t.topBlock.vaccination),A(t.getBeneficiariesGroupBy)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(w.a,{defaultActiveKey:"0",className:"slideinanimation",children:Object(o.jsx)(u.a,{className:"ml-5 mr-5 mt-5",style:{boxShadow:"2px 3px 5px #888888"},children:Object(o.jsxs)("div",{className:"scrollbarstyle style-2",style:{height:"auto",maxHeight:"650px",overflowX:"hidden"},children:[Object(o.jsx)(w.a.Toggle,{as:u.a.Header,variant:"link",eventKey:"1",onClick:function(){P(!F)},children:Object(o.jsxs)("b",{children:["INDIA"," ",F?Object(o.jsx)(S.b,{}):Object(o.jsx)(S.a,{})]})}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(g.a,{children:[Object(o.jsxs)(y.a,{children:[Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{className:"zoomeffect",defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)(w.a.Toggle,{as:u.a.Header,eventKey:"1",children:["Sites",Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"Total public and private health facilities conducting vaccination today."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:["Total:"," ",Object(o.jsx)(v.a,{variant:"light",children:B(c.total)})]}),Object(o.jsxs)(m.a.Item,{children:["Govt:"," ",Object(o.jsx)(v.a,{variant:"light",children:B(c.govt)})]}),Object(o.jsxs)(m.a.Item,{children:["Pvt:"," ",Object(o.jsx)(v.a,{variant:"light",children:B(c.pvt)})]})]})})})]})})}),Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{className:"zoomeffect",defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)(w.a.Toggle,{as:u.a.Header,eventKey:"1",children:["Registrations",Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"Total number of beneficiaries registered till date."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:["Age 18+:",Object(o.jsx)(v.a,{variant:"light",children:B(r.cit_18_45)})]}),Object(o.jsxs)(m.a.Item,{children:["Age 45+:",Object(o.jsx)(v.a,{variant:"light",children:B(r.cit_45_above)})]}),Object(o.jsxs)(m.a.Item,{children:["Today:"," ",Object(o.jsx)(v.a,{variant:"light",children:B(r.today)})]}),Object(o.jsxs)(m.a.Item,{children:["Total:"," ",Object(o.jsx)(v.a,{variant:"light",children:B(r.total)})]})]})})})]})})}),Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{className:"zoomeffect",defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)(w.a.Toggle,{as:u.a.Header,eventKey:"1",children:["Doses",Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"Total number of vaccine doses till date."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:["Total:",Object(o.jsx)(v.a,{variant:"light",children:B(b.total_doses)})]}),Object(o.jsxs)(m.a.Item,{children:["Dose1:",Object(o.jsx)(v.a,{variant:"light",children:B(b.tot_dose_1)})]}),Object(o.jsxs)(m.a.Item,{children:["Dose2:",Object(o.jsx)(v.a,{variant:"light",children:B(b.tot_dose_2)})]}),Object(o.jsxs)(m.a.Item,{children:["Today: ",Object(o.jsx)(v.a,{variant:"light",children:B(b.today)})]})]})})})]})})})]}),Object(o.jsxs)(y.a,{className:"mt-4",children:[Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{className:"zoomeffect",defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)(w.a.Toggle,{as:u.a.Header,eventKey:"1",children:["Vaccine Types",Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"No. of doses of each type of vaccines administered till date."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:["Covaxin:",Object(o.jsx)(v.a,{variant:"light",children:B(b.covaxin)})]}),Object(o.jsxs)(m.a.Item,{children:["Covishield:",Object(o.jsx)(v.a,{variant:"light",children:B(b.covishield)})]}),Object(o.jsxs)(m.a.Item,{children:["Sputnik:",Object(o.jsx)(v.a,{variant:"light",children:B(b.sputnik)})]})]})})})]})})}),Object(o.jsx)(N.a,{children:Object(o.jsx)(w.a,{className:"zoomeffect",defaultActiveKey:"0",children:Object(o.jsxs)(u.a,{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)(w.a.Toggle,{as:u.a.Header,eventKey:"1",children:["Today",Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"No. of vaccines administered today."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsx)(w.a.Collapse,{eventKey:"1",children:Object(o.jsx)(u.a.Body,{children:Object(o.jsxs)(m.a,{variant:"flush",children:[Object(o.jsxs)(m.a.Item,{children:["Total: ",Object(o.jsx)(v.a,{variant:"light",children:B(b.today)})]}),Object(o.jsxs)(m.a.Item,{children:["Dose 1:",Object(o.jsx)(v.a,{variant:"light",children:B(b.today_dose_one)})]}),Object(o.jsxs)(m.a.Item,{children:["Dose 2:",Object(o.jsx)(v.a,{variant:"light",children:B(b.today_dose_two)})]}),Object(o.jsxs)(m.a.Item,{children:["Female:",Object(o.jsx)(v.a,{variant:"light",children:B(b.today_female)})]}),Object(o.jsxs)(m.a.Item,{children:["Male:",Object(o.jsx)(v.a,{variant:"light",children:B(b.today_male)})]}),Object(o.jsxs)(m.a.Item,{children:["Others:",Object(o.jsx)(v.a,{variant:"light",children:B(b.today_others)})]})]})})})]})})}),Object(o.jsx)(N.a,{})]}),Object(o.jsx)(y.a,{className:"mt-4",children:Object(o.jsx)(N.a,{children:Object(o.jsxs)(_.a,{bordered:!0,hover:!0,style:{boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsx)("thead",{style:{backgroundColor:"skyblue",boxShadow:"2px 3px 5px #888888"},children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"State"}),Object(o.jsx)("th",{children:"Total Vaccinated"}),Object(o.jsx)("th",{children:"Only 1 Dose"}),Object(o.jsx)("th",{children:"Both Doses"}),Object(o.jsx)("th",{children:"Today"})]})}),Object(o.jsx)("tbody",{children:T.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.state_name}),Object(o.jsx)("td",{children:Object(o.jsx)(v.a,{variant:"light",children:B(e.total)})}),Object(o.jsx)("td",{children:Object(o.jsx)(v.a,{variant:"light",children:B(e.partial_vaccinated)})}),Object(o.jsx)("td",{children:Object(o.jsx)(v.a,{variant:"light",children:B(e.totally_vaccinated)})}),Object(o.jsx)("td",{children:Object(o.jsx)(v.a,{variant:"light",children:B(e.today)})})]})}))})]})})})]})})})]})})})})},A=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g.a,{children:Object(o.jsxs)(y.a,{children:[Object(o.jsx)(N.a,{xs:!0,lg:"2",children:Object(o.jsx)(f,{})}),Object(o.jsx)(N.a,{children:Object(o.jsx)(T,{})})]})})})},H=c(106),D=c(316),F=function(e){var t,c,a,n,i,s,r,l,d,j,b,h,x;return Object(o.jsxs)(o.Fragment,{children:[(null===(t=e.dtArr)||void 0===t?void 0:t.available_capacity)?"COVISHIELD"===(null===(c=e.dtArr)||void 0===c?void 0:c.vaccine)?Object(o.jsx)(v.a,{variant:"success",children:null===(a=e.dtArr)||void 0===a?void 0:a.vaccine}):"COVAXIN"===(null===(n=e.dtArr)||void 0===n?void 0:n.vaccine)?Object(o.jsx)(v.a,{variant:"primary",children:null===(i=e.dtArr)||void 0===i?void 0:i.vaccine}):Object(o.jsx)(v.a,{variant:"warning",children:null===(s=e.dtArr)||void 0===s?void 0:s.vaccine}):"","\xa0",(null===(r=e.dtArr)||void 0===r?void 0:r.available_capacity)?45===(null===(l=e.dtArr)||void 0===l?void 0:l.min_age_limit)?Object(o.jsxs)(v.a,{pill:!0,variant:"info",children:[null===(d=e.dtArr)||void 0===d?void 0:d.min_age_limit,"+"]}):Object(o.jsxs)(v.a,{pill:!0,variant:"danger",children:[null===(j=e.dtArr)||void 0===j?void 0:j.min_age_limit,"+"]}):"",Object(o.jsx)("br",{}),(null===(b=e.dtArr)||void 0===b?void 0:b.available_capacity)?Object(o.jsxs)(o.Fragment,{children:["D1: ",Object(o.jsx)("b",{children:null===(h=e.dtArr)||void 0===h?void 0:h.available_capacity_dose1})," ",Object(o.jsx)("br",{}),"D2: ",Object(o.jsx)("b",{children:null===(x=e.dtArr)||void 0===x?void 0:x.available_capacity_dose2})]}):"",Object(o.jsx)("br",{})]})},P=c(171),B=c.n(P),z=(c(61),function(e){for(var t=Object(a.useState)([]),c=Object(x.a)(t,2),n=c[0],i=c[1],s=JSON.stringify(e.distId),r=[],l=0;l<7;l++){var d=B()().add(l,"days");r.push(String(d.format("DD-MM-YYYY")))}return Object(a.useEffect)((function(){p.a.get("https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=".concat(s,"&date=").concat(r[0])).then((function(e){i(e.data.centers)})).catch((function(e){console.log(e)}))}),[s]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mt-3 scrollbarstyle style-2",style:{height:"auto",maxHeight:"685px",overflowX:"auto"},children:Object(o.jsxs)(_.a,{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{style:{boxShadow:"5px 5px 8px #888888"},children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{style:{whiteSpace:"nowrap",position:"sticky",top:"0",backgroundColor:"white"},children:"Center"}),r.map((function(e){return Object(o.jsx)("th",{style:{whiteSpace:"nowrap",position:"sticky",top:"0",backgroundColor:"white"},children:e})}))]})}),Object(o.jsx)("tbody",{children:n.map((function(e){return e.sessions.some((function(e){return e.available_capacity}))?Object(o.jsxs)("tr",{style:{boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsxs)("td",{className:"pb-0 pr-0",children:[Object(o.jsxs)("b",{children:[e.name,"\xa0"]}),"Paid"===e.fee_type?Object(o.jsx)(v.a,{variant:"danger",children:e.fee_type}):"",Object(o.jsx)("br",{}),Object(o.jsx)("p",{className:"mb-0",children:e.address})]}),r.map((function(t){var c=e.sessions.filter((function(e){return e.date===t}));return Object(o.jsx)("td",{className:"pb-0 pr-0",children:c.map((function(e){return Object(o.jsx)(F,{dtArr:e})}))})}))]}):""}))})]})})})}),K=function(e){var t;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g.a,(t={className:"pl-0"},Object(H.a)(t,"className","slideinanimation"),Object(H.a)(t,"children",Object(o.jsx)(y.a,{children:Object(o.jsx)(N.a,{sm:12,className:"ml-0 pl-0",children:e.distId?Object(o.jsx)(z,{distId:e.distId}):Object(o.jsxs)(D.a,{variant:"success",className:"mt-3 zoomeffect",style:{boxShadow:"5px 5px 8px #888888",textAlign:"center"},children:["Namaste India! select State and District here to check vaccine Availability\xa0or view the\xa0",Object(o.jsx)(D.a.Link,{href:"/statistics",children:"Covid Statistics"}),"."]})})})),t))})},L=c(308),E=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(L.a,{"pre-scrollable":!0,drop:"right",style:{whiteSpace:"nowrap",position:"sticky",top:"20px",backgroundColor:"transparent"},className:"slideinanimation",children:[Object(o.jsx)(L.a.Toggle,{className:"zoomeffect",variant:"outline-success",id:"dropdown-basic",style:{boxShadow:"5px 5px 8px #888888"},children:Object(o.jsx)("b",{children:e.distName})}),Object(o.jsx)(L.a.Menu,{className:"scrollbarstyle style-2",style:{height:"auto",maxHeight:"645px",overflowX:"hidden",boxShadow:"5px 5px 8px #888888"},children:e.districts.map((function(t){return Object(o.jsx)(L.a.Item,{className:"zoomeffect",onClick:function(){return e.distClickHandler(t)},children:t.district_name})}))})]})})},M=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(L.a,{"pre-scrollable":!0,drop:"right",style:{whiteSpace:"nowrap",position:"sticky",top:"20px",backgroundColor:"transparent"},className:"slideinanimation mb-3",children:[Object(o.jsx)(L.a.Toggle,{variant:"outline-success",id:"dropdown-basic",style:{color:"white",boxShadow:"5px 5px 8px #888888"},children:Object(o.jsx)("b",{children:e.stateName})}),Object(o.jsx)(L.a.Menu,{className:"scrollbarstyle style-2",style:{height:"auto",maxHeight:"645px",overflowX:"hidden",boxShadow:"5px 5px 8px #888888"},children:e.states.map((function(t){return Object(o.jsx)(L.a.Item,{className:"zoomeffect",onClick:function(){return e.stateClickHandler(t)},children:t.state_name})}))})]})})},R=function(){var e=Object(a.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],i=Object(a.useState)(),s=Object(x.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)("Select District"),j=Object(x.a)(d,2),b=j[0],h=j[1],O=Object(a.useState)([]),u=Object(x.a)(O,2),m=u[0],v=u[1],f=Object(a.useState)(),S=Object(x.a)(f,2),w=S[0],C=S[1],k=Object(a.useState)("Select state"),I=Object(x.a)(k,2),_=I[0],T=I[1];Object(a.useEffect)((function(){p.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/states").then((function(e){var t=e.data.states;v(t)})).catch((function(e){console.log(e)}))}),[]);var A=function(e){p.a.get("https://cdn-api.co-vin.in/api/v2/admin/location/districts/".concat(e)).then((function(e){n(e.data.districts)})).catch((function(e){console.log(e)}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g.a,{className:"pl-0 pr-0",children:Object(o.jsxs)(y.a,{children:[Object(o.jsx)(N.a,{sm:10,className:"ml-0 pl-0 pr-0",children:Object(o.jsx)(K,{distId:r})}),Object(o.jsxs)(N.a,{sm:2,className:"mt-4 ml-0",children:[Object(o.jsx)(M,{stateClickHandler:function(e){C(e.state_id),T(e.state_name),e.state_id&&(A(e.state_id),h("Select District"))},stateName:_,states:m}),w&&Object(o.jsx)(E,{distClickHandler:function(e){l(e.district_id),h(e.district_name)},distName:b,districts:c})]})]})})})},V=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(R,{})})},X=c(307),Y=c(313),G=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"pt-4 zoomeffect",children:Object(o.jsxs)(X.a,{className:"mb-3",children:[Object(o.jsx)(X.a.Prepend,{children:Object(o.jsx)(X.a.Text,{children:"+91"})}),Object(o.jsx)(Y.a,{placeholder:e.mobileNo,"aria-label":"Mobile No.",onChange:function(t){return e.mobileNoChangeHandler(t)}}),Object(o.jsx)(X.a.Append,{children:Object(o.jsx)(I.a,{variant:"outline-secondary",onClick:e.sendOtpHandler,style:{backgroundColor:"green",color:"white",boxShadow:"2px 3px 5px #888888"},children:"Send OTP"})})]})})})},J=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"pt-4 zoomeffect",children:Object(o.jsxs)(X.a,{className:"mb-3",children:[Object(o.jsx)(X.a.Prepend,{}),Object(o.jsx)(Y.a,{placeholder:e.sentOtp,"aria-label":"otp",onChange:function(t){return e.otpChangeHandler(t)}}),Object(o.jsx)(X.a.Append,{children:Object(o.jsx)(I.a,{variant:"outline-secondary",onClick:e.confirmOtpHandler,style:{backgroundColor:"green",color:"white",boxShadow:"2px 3px 5px #888888"},children:"Submit"})})]})})})},W=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"pt-4 zoomeffect",children:Object(o.jsxs)(X.a,{className:"mb-3",children:[Object(o.jsx)(X.a.Prepend,{}),Object(o.jsx)(Y.a,{placeholder:e.referenceId,"aria-label":"otp",onChange:function(t){return e.refIdChangeHandler(t)}}),Object(o.jsx)(X.a.Append,{children:Object(o.jsx)(I.a,{variant:"outline-secondary",onClick:e.certDownloadHandler,style:{backgroundColor:"green",color:"white",boxShadow:"2px 3px 5px #888888"},children:"Download"})})]})})})},U=function(e){return Object(o.jsx)("div",{className:"slideinanimation",style:{boxShadow:"2px 3px 5px #888888"},children:"1"===e.alertCode?Object(o.jsxs)(D.a,{variant:"success",children:["OTP sent to ",Object(o.jsx)("i",{children:e.mobileNo}),". Valid for 3 minutes."]}):"2"===e.alertCode?Object(o.jsx)(D.a,{variant:"success",children:"OTP validated successfully."}):"3"===e.alertCode?Object(o.jsx)(D.a,{variant:"success",children:"Certificate downloaded successfully."}):"4"===e.alertCode?Object(o.jsx)(D.a,{variant:"danger",children:"OTP could not be sent. Please verify mobile no."}):"5"===e.alertCode?Object(o.jsx)(D.a,{variant:"danger",children:"OTP invalid or mobile no not registered."}):"6"===e.alertCode?Object(o.jsx)(D.a,{variant:"danger",children:"Sorry! Certificate could not be downloaded."}):"7"===e.alertCode?Object(o.jsx)(D.a,{variant:"danger",children:"Invalid mobile no."}):""})},q=function(){var e=Object(a.useState)("Registered Mobile No."),t=Object(x.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(""),r=Object(x.a)(s,2),l=r[0],d=r[1],j=Object(a.useState)("Please enter the OTP"),b=Object(x.a)(j,2),h=b[0],O=b[1],m=Object(a.useState)(""),v=Object(x.a)(m,2),f=v[0],g=v[1],y=Object(a.useState)(""),N=Object(x.a)(y,2),w=N[0],_=N[1],T=Object(a.useState)("Please enter reference ID"),A=Object(x.a)(T,2),H=A[0],D=A[1],F=c(201),P={mobile:n},B={otp:F.createHash("sha256").update(h).digest("hex"),txnId:l},z={headers:{Authorization:"Bearer ".concat(f)},responseType:"arraybuffer"};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(U,{alertCode:w,mobileNo:n}),Object(o.jsxs)(u.a,{style:{backgroundColor:"white",color:"white",boxShadow:"2px 3px 5px #888888"},className:"slideinanimation",children:[Object(o.jsxs)(u.a.Header,{style:{backgroundColor:"blue",boxShadow:"2px 3px 5px #888888"},children:[Object(o.jsx)("b",{children:"Download Certificate"}),Object(o.jsx)(C.a,{placement:"right",overlay:Object(o.jsx)(k.a,{id:"tooltip-right",style:{opacity:"0.6"},children:"Enter you registered mobile no., verify OTP and download the vaccine certificate."}),children:Object(o.jsx)(I.a,{className:"pt-0",variant:"light",children:Object(o.jsx)(S.c,{})})})]}),Object(o.jsxs)(u.a.Body,{children:[Object(o.jsx)(G,{mobileNo:n,mobileNoChangeHandler:function(e){i(String(e.target.value))},sendOtpHandler:function(){10===n.length?p.a.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",P).then((function(e){d(String(e.data.txnId)),_("1")})).catch((function(e){console.log(e),_("4")})):_("7")}}),""!==l&&Object(o.jsx)(J,{sentOtp:h,otpChangeHandler:function(e){O(String(e.target.value))},confirmOtpHandler:function(){p.a.post("https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",B).then((function(e){g(String(e.data.token)),_("2")})).catch((function(e){console.log(e),_("5")}))}}),f&&Object(o.jsx)(W,{referenceId:H,refIdChangeHandler:function(e){D(String(e.target.value))},certDownloadHandler:function(){p.a.get("https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=".concat(H),z,{responseType:"blob"}).then((function(e){_("3");var t=new Blob([e.data],{type:"application/pdf"}),c=URL.createObjectURL(t),a=document.createElement("a");a.href=c,a.download="".concat(H),a.click()})).catch((function(e){console.log(e),_("6")}))}})]})]})]})},Q=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(g.a,{className:"mt-3 pt-5",children:Object(o.jsxs)(y.a,{className:"mt-5 pt-5",children:[Object(o.jsx)(N.a,{}),Object(o.jsx)(N.a,{xs:5,children:Object(o.jsx)(q,{})}),Object(o.jsx)(N.a,{})]})})})};var Z=function(){return Object(o.jsxs)("div",{style:{backgroundColor:"white",backgroundImage:'url("https://pmjay.gov.in/cowin/images/slider/slider-4.png")',backgroundPosition:"center",backgroundSize:"cover",height:750,width:1500,backgroundRepeat:"no-repeat",marginTop:0},children:[Object(o.jsx)(j,{}),Object(o.jsx)(b.a,{children:Object(o.jsxs)(h.c,{children:[Object(o.jsx)(h.a,{exact:!0,path:"/",component:V}),Object(o.jsx)(h.a,{exact:!0,path:"/statistics",component:A}),Object(o.jsx)(h.a,{exact:!0,path:"/certificate",component:Q})]})})]})},$=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,317)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(Z,{})}),document.getElementById("root")),$()},61:function(e,t,c){}},[[296,1,2]]]);
//# sourceMappingURL=main.70538081.chunk.js.map