import{_ as h}from"./nuxt-layout.yNcWoib1.js";import{u as _}from"./vue.f36acd1f.sXTS1QfM.js";import{_ as n,f as s}from"./lodash.IkTmGHEm.js";import{r as p,f,w as d,o as r,b as u,a as t,c as i,v as g,F as x,n as y,h as k,V as v,D as b,t as l,d as N}from"./entry.AqhFVrLr.js";const V=t("thead",null,[t("tr",null,[t("th",null,"Classificação"),t("th",null,"Nível"),t("th",null,"Nome"),t("th",null,"Matou"),t("th",null,"Morreu"),t("th",null,"K/D"),t("th",null,"Habilidade")])],-1),w=["src"],H={__name:"rating",setup(B){_({title:"Rating"});const c=p({data:n.range(20).map((m,o)=>{let e={};return e.index=o+1,e.level=n.random(90,100),e.name=s.internet.userName(),e.country=s.location.countryCode("alpha-2"),e.flag=`https://flagcdn.com/w320/${e.country.toLowerCase()}.png`,e.kills=n.random(99999,999999),e.deaths=n.random(99999,999999),e.kd=n.random(1,3,.1),e.hability=n.random(99999,999999),e})});return(m,o)=>{const e=h;return r(),f(e,{name:"site"},{default:d(()=>[u(v,y(k({hover:!0})),{default:d(()=>[V,t("tbody",null,[(r(!0),i(x,null,g(c.value.data,a=>(r(),i("tr",null,[t("td",null,l(a.index),1),t("td",null,l(a.level),1),t("td",null,[t("img",{src:a.flag,height:"15",class:"me-2"},null,8,w),N(" "+l(a.name),1)]),t("td",null,l(a.kills),1),t("td",null,l(a.deaths),1),t("td",null,l(a.kd),1),t("td",null,l(a.hability),1)]))),256))])]),_:1},16),u(b,{class:"mt-4",length:4,rounded:"circle"})]),_:1})}}};export{H as default};
