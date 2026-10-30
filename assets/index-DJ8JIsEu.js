(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Kc="modulepreload",jc=function(i,t){return new URL(i,t).href},ba={},Zc=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=jc(c,n),c in ba)return;ba[c]=!0;const h=c.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!n)for(let g=o.length-1;g>=0;g--){const x=o[g];if(x.href===c&&(!h||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Kc,h||(p.as="script"),p.crossOrigin="",p.href=c,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((g,x)=>{p.addEventListener("load",g),p.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return t().catch(r)})},jo="https://psxksryuusscpvidksmu.supabase.co",Zo="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeGtzcnl1dXNzY3B2aWRrc211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3ODcwMzUsImV4cCI6MjEwMjM2MzAzNX0.IKr9qach_dEU57YmtiwhorCjCAeVHyWbLloalbg2Ftc",Jc="v0.2-web",Qc="nc-web2:quick:1",th=i=>`nc-web2:room:${i}`,Aa=14,wa="ABCDEFGHJKMNPQRSTUVWXYZ23456789",qt=64,Yt=qt*qt,pt=8,_e=8,Jo=2*_e,Qo=1,ls=2,eh=20,nh=8,to=3*_e,ih=150*_e,sh=7*_e,rh=Yt/2,hr=8,Oi=[1,0,-1,0],Bi=[0,1,0,-1],we=(i,t)=>i+t*qt,ai=i=>i%qt,li=i=>i/qt|0,kn=(i,t)=>i>=0&&t>=0&&i<qt&&t<qt,ei=i=>i+1&3,Ci=i=>i+3&3,ta=i=>i+2&3,ce={Countdown:0,Playing:1,Results:2},Qt={Turn:0,JoinHuman:1,JoinBot:2,Leave:3,Remove:4,Boost:5},fe={None:0,Wall:1,Cut:2,SelfCut:3,Collision:4,Erased:5},oe={Countdown:0,Go:1,RoundEnd:2,Spawn:3,TrailStart:4,Capture:5,Death:6};function eo(){return{active:!1,bot:!1,alive:!1,dir:0,x:0,y:0,respawnTick:-1,trailOrigin:-1,trail:[],area:0,bestArea:0,kills:0,boostCharges:Qo,boostUntilTick:0,deaths:0,lastKiller:-1,lastDeath:fe.None,lastDeathTick:-1,spawnTick:-1,botSkill:0,botMode:0,botLegsLeft:0,botTurnLeft:0,botLegLen:0,botLegStep:0}}function ic(){const i=[];for(let t=0;t<pt;t++)i.push(eo());return{tick:0,rng:2654435769,phase:ce.Countdown,phaseEndTick:0,round:0,ringOffset:0,winner:-1,owner:new Uint8Array(Yt),trail:new Uint8Array(Yt),cycles:i}}function oh(i){return{...i,trail:i.trail.slice()}}function gr(i){return{tick:i.tick,rng:i.rng,phase:i.phase,phaseEndTick:i.phaseEndTick,round:i.round,ringOffset:i.ringOffset,winner:i.winner,owner:i.owner.slice(),trail:i.trail.slice(),cycles:i.cycles.map(oh)}}const hn=[[0,.85,1],[1,.08,.75],[1,.62,.02],[.3,1,.1],[1,.22,.04],[.5,.22,1],[1,.2,.38],[.55,.8,1]],ah=["NOVA","VOLT","HEX","ZERO","FLUX","BYTE","KIRA","ECHO"];function Xe(i,t){let e=i.rng;return e=(e^e<<13)>>>0,e=(e^e>>>17)>>>0,e=(e^e<<5)>>>0,i.rng=e,t>0?e%t:0}function lh(i,t,e,n,s){const r=e+Oi[s],o=n+Bi[s];return kn(r,o)&&i.trail[we(r,o)]!==t+1}function Ra(i,t,e,n,s,r){let o=0;for(;o<r&&lh(i,t,e,n,s);)e+=Oi[s],n+=Bi[s],o++;return o}function Ca(i,t,e){const n=i.cycles[t],s=t+1,r=new Int8Array(Yt).fill(-1),o=new Uint16Array(Yt);let a=0;const l=[n.dir,Ci(n.dir),ei(n.dir)];for(const c of l){const h=n.x+Oi[c],f=n.y+Bi[c];if(!kn(h,f))continue;const u=we(h,f);if(!(i.trail[u]===s||r[u]>=0)){if(e(u))return c;r[u]=c,o[a++]=u}}r[we(n.x,n.y)]=4;for(let c=0;c<a;c++){const h=o[c],f=ai(h),u=li(h);for(let p=0;p<4;p++){const g=f+Oi[p],x=u+Bi[p];if(!kn(g,x))continue;const m=we(g,x);if(!(r[m]>=0||i.trail[m]===s)){if(r[m]=r[h],e(m))return r[m];o[a++]=m}}}return-1}function ch(i,t,e){const n=i.cycles[t];for(let s=0;s<pt;s++){const r=i.cycles[s];if(!(s===t||!r.active||!r.alive)){for(const o of n.trail)if(Math.abs(ai(o)-r.x)+Math.abs(li(o)-r.y)<=e)return!0}}return!1}function hh(i,t){const e=i.cycles[t],n=t+1,s=e.botSkill&3,r=4+s*2,o=14+s*7,a=2+s,l=i.owner[we(e.x,e.y)]===n;let c=e.dir;if(l||e.trail.length===0)if(e.botMode=0,Xe(i,5)===0)c=Xe(i,2)?Ci(e.dir):ei(e.dir);else{const h=Ca(i,t,f=>i.owner[f]!==n);h>=0&&(c=h)}else if(e.botMode===0&&(e.botMode=1,e.botLegsLeft=2,e.botLegLen=3+Xe(i,r),e.botLegStep=0,e.botTurnLeft=Xe(i,2)),e.botMode===1&&(e.botLegStep++,e.trail.length>=o||ch(i,t,a+1)?e.botMode=2:e.botLegStep>=e.botLegLen&&(e.botLegsLeft>0?(e.botLegsLeft--,c=e.botTurnLeft?Ci(e.dir):ei(e.dir),e.botLegStep=0,e.botLegLen=2+Xe(i,r)):e.botMode=2)),e.botMode===2){const h=Ca(i,t,f=>i.owner[f]===n);h>=0&&(c=h)}if(Xe(i,4)<1+s){const h=[e.dir,Ci(e.dir),ei(e.dir)];for(const f of h){const u=e.x+Oi[f],p=e.y+Bi[f];if(kn(u,p)){const g=i.trail[we(u,p)];if(g!==0&&g!==n){c=f;break}}}}if(c===ta(e.dir)||Ra(i,t,e.x,e.y,c,2)<1){const h=[e.dir,Ci(e.dir),ei(e.dir)];let f=-1;for(const u of h){const p=Ra(i,t,e.x,e.y,u,12);p>f&&(f=p,c=u)}}e.dir=c}const uh=[52,46,32,18,12,18,32,46],fh=[32,46,52,46,32,18,12,18];function zn(i,t,e,n,s=-1,r=0){i&&i.push({tick:t,type:e,slot:n,other:s,value:r})}function fs(i){const t=new Int32Array(pt+1);for(let e=0;e<Yt;e++)t[i.owner[e]]++;for(let e=0;e<pt;e++){const n=i.cycles[e];n.area=t[e+1],n.bestArea=Math.max(n.bestArea,n.area)}}function nr(i,t){const e=i.cycles[t],n=t+1;for(const s of e.trail)i.trail[s]===n&&(i.trail[s]=0);e.trail=[],e.trailOrigin=-1}function no(i,t){const e=t+1;for(let n=0;n<Yt;n++)i.owner[n]===e&&(i.owner[n]=0)}function ea(i){i.botMode=0,i.botLegsLeft=0,i.botLegLen=0,i.botLegStep=0}function sc(i,t){const e=qt/2-i,n=qt/2-t;return Math.abs(e)>=Math.abs(n)?e>=0?0:2:n>=0?1:3}function rc(i,t,e,n,s,r){const o=i.cycles[t];nr(i,t),o.x=e,o.y=n,o.dir=s,o.alive=!0,o.respawnTick=-1,o.spawnTick=i.tick,o.boostUntilTick=0,ea(o);const a=t+1;for(let l=-ls;l<=ls;l++)for(let c=-ls;c<=ls;c++)kn(e+c,n+l)&&(i.owner[we(e+c,n+l)]=a);fs(i),zn(r,i.tick,oe.Spawn,t)}function dh(i,t,e){return kn(t,e)&&i.owner[we(t,e)]===0&&i.trail[we(t,e)]===0}function oc(i,t,e){const n=(t*3+i.ringOffset)%hr,s=uh[n],r=fh[n];rc(i,t,s,r,ei(sc(s,r)),e)}function ph(i,t,e){const n=ls+3;let s=-2147483648,r=qt/2,o=qt/2;for(let a=0;a<40;a++){const l=n+Xe(i,qt-2*n),c=n+Xe(i,qt-2*n);let h=0;for(let f=-4;f<=4;f++)for(let u=-4;u<=4;u++)h+=dh(i,l+u,c+f)?1:0;for(let f=0;f<pt;f++){const u=i.cycles[f];if(f!==t&&u.active&&u.alive){const p=Math.abs(l-u.x)+Math.abs(c-u.y);h-=Math.max(0,12-p)*8}}if(h>s&&(s=h,r=l,o=c),h>=81)break}rc(i,t,r,o,sc(r,o),e)}function io(i,t,e,n,s){const r=i.cycles[t];r.alive&&(nr(i,t),no(i,t),r.alive=!1,r.boostUntilTick=0,r.deaths++,r.lastKiller=e,r.lastDeath=n,r.lastDeathTick=i.tick,r.respawnTick=i.tick+eh,ea(r),e>=0&&e!==t&&(i.cycles[e].kills++,i.cycles[e].boostCharges++),zn(s,i.tick,oe.Death,t,e,n))}function mh(i,t){const e=i.cycles[t],n=t+1;let s=0;for(const c of e.trail)i.owner[c]!==n&&(i.owner[c]=n,s++),i.trail[c]===n&&(i.trail[c]=0);e.trail=[],e.trailOrigin=-1;const r=new Uint8Array(Yt),o=new Uint16Array(Yt);let a=0;const l=c=>{!r[c]&&i.owner[c]!==n&&(r[c]=1,o[a++]=c)};for(let c=0;c<qt;c++)l(we(c,0)),l(we(c,qt-1)),l(we(0,c)),l(we(qt-1,c));for(let c=0;c<a;c++){const h=o[c],f=ai(h),u=li(h);f>0&&l(h-1),f<qt-1&&l(h+1),u>0&&l(h-qt),u<qt-1&&l(h+qt)}for(let c=0;c<Yt;c++)!r[c]&&i.owner[c]!==n&&(i.owner[c]=n,s++);return s}function ir(i){const t=[];for(let e=0;e<pt;e++)i.cycles[e].active&&t.push(e);return t.sort((e,n)=>{const s=i.cycles[e],r=i.cycles[n];return s.area!==r.area?r.area-s.area:s.kills!==r.kills?r.kills-s.kills:e-n}),t}function gh(i,t){const e=ir(i);i.winner=e.length>0?e[0]:-1,i.phase=ce.Results,i.phaseEndTick=i.tick+sh,zn(t,i.tick,oe.RoundEnd,Math.max(i.winner,0),i.winner)}function _h(i,t){i.owner.fill(0),i.trail.fill(0),i.round++,i.winner=-1,i.ringOffset=Xe(i,hr),i.phase=ce.Countdown,i.phaseEndTick=i.tick+to;for(let e=0;e<pt;e++){const n=i.cycles[e];n.trail=[],n.trailOrigin=-1,n.kills=0,n.boostCharges=Qo,n.boostUntilTick=0,n.deaths=0,n.bestArea=0,n.area=0,n.lastKiller=-1,n.lastDeath=fe.None,n.alive=!1,n.active&&oc(i,e,t)}zn(t,i.tick,oe.Countdown,0,-1,to/_e)}function vh(i,t,e){if(t.slot<0||t.slot>=pt)return;const n=i.cycles[t.slot];switch(t.type){case Qt.Turn:n.active&&!n.bot&&n.alive&&t.arg<4&&t.arg!==ta(n.dir)&&(n.dir=t.arg);break;case Qt.Boost:i.phase===ce.Playing&&n.active&&!n.bot&&n.alive&&n.boostCharges>0&&n.boostUntilTick<=i.tick&&(n.boostCharges--,n.boostUntilTick=i.tick+Jo);break;case Qt.JoinHuman:case Qt.JoinBot:{n.active&&(nr(i,t.slot),no(i,t.slot));const s=eo();Object.assign(n,s),n.active=!0,n.bot=t.type===Qt.JoinBot,n.botSkill=Xe(i,4),i.phase===ce.Countdown?oc(i,t.slot,e):i.phase===ce.Playing&&(n.respawnTick=i.tick+nh),fs(i);break}case Qt.Leave:n.active&&!n.bot&&(n.bot=!0,n.botSkill=Xe(i,4),ea(n));break;case Qt.Remove:n.active&&(nr(i,t.slot),no(i,t.slot),Object.assign(n,eo()),fs(i));break}}function Pa(i,t,e){const n=new Int32Array(pt).fill(-1),s=new Int32Array(pt).fill(-1),r=new Uint8Array(pt),o=new Uint8Array(pt),a=new Int32Array(pt).fill(-1),l=new Int32Array(pt),c=(u,p,g)=>{o[u]||(o[u]=1,a[u]=p,l[u]=g)};for(let u=0;u<pt;u++){const p=i.cycles[u];if(!p.active||!p.alive)continue;if(n[u]=we(p.x,p.y),t&&p.boostUntilTick<=i.tick){s[u]=n[u];continue}const g=p.x+Oi[p.dir],x=p.y+Bi[p.dir];if(!kn(g,x)){c(u,-1,fe.Wall);continue}s[u]=we(g,x),r[u]=1}for(let u=0;u<pt;u++){if(!r[u])continue;const p=i.trail[s[u]];if(p===0)continue;const g=p-1;g===u?c(u,-1,fe.SelfCut):c(g,u,fe.Cut)}for(let u=0;u<pt;u++)for(let p=u+1;p<pt;p++){if(!r[u]&&!r[p]||s[u]<0||s[p]<0||s[u]!==s[p])continue;const g=i.owner[s[u]]===u+1,x=i.owner[s[p]]===p+1;g&&!x?c(p,u,fe.Collision):x&&!g?c(u,p,fe.Collision):(c(u,p,fe.Collision),c(p,u,fe.Collision))}let h=!1;for(let u=0;u<pt;u++)o[u]&&(io(i,u,a[u],l[u],e),h=!0);let f=-1;for(let u=0;u<pt;u++){const p=i.cycles[u];if(!r[u]||o[u]||!p.alive)continue;const g=s[u];if(p.x=ai(g),p.y=li(g),i.owner[g]===u+1){if(p.trail.length>0){const x=mh(i,u);h=!0,f<0&&(f=u),zn(e,i.tick,oe.Capture,u,-1,x)}}else p.trail.length===0&&(p.trailOrigin=n[u],zn(e,i.tick,oe.TrailStart,u)),i.trail[g]=u+1,p.trail.push(g)}if(h){fs(i);let u=!1;for(let p=0;p<pt;p++){const g=i.cycles[p];g.active&&g.alive&&g.area===0&&(io(i,p,f,fe.Erased,e),u=!0)}u&&fs(i)}}function La(i,t){const e=i.tick;let n=!1;for(let o=0;o<pt;o++){const a=i.cycles[o];a.active&&!a.alive&&a.respawnTick>=0&&e>=a.respawnTick&&(ph(i,o,t),n=!0)}if(n)for(let o=0;o<pt;o++){const a=i.cycles[o];a.active&&a.alive&&a.area===0&&io(i,o,-1,fe.Erased,t)}for(let o=0;o<pt;o++){const a=i.cycles[o];a.active&&a.alive&&a.bot&&hh(i,o)}const s=i.cycles.some(o=>o.active&&o.alive&&o.boostUntilTick>e);Pa(i,!1,t),s&&Pa(i,!0,t);let r=0;for(let o=0;o<pt;o++)r=Math.max(r,i.cycles[o].area);(e+1>=i.phaseEndTick||r>=rh)&&gh(i,t)}function Ia(i){const t=ic();return t.rng=i>>>0?i>>>0:2654435769,t.tick=0,t.round=1,t.ringOffset=Xe(t,hr),t.phase=ce.Countdown,t.phaseEndTick=to,t}function Da(i,t){return i.tick!==t.tick?i.tick-t.tick:i.slot!==t.slot?i.slot-t.slot:i.type!==t.type?i.type-t.type:i.seq-t.seq}function xh(i,t,e){const n=i.tick;for(const s of t)vh(i,s,e);switch(i.phase){case ce.Countdown:n>=i.phaseEndTick?(i.phase=ce.Playing,i.phaseEndTick=n+ih,zn(e,n,oe.Go,0),La(i,e)):(i.phaseEndTick-n)%_e===0&&zn(e,n,oe.Countdown,0,-1,(i.phaseEndTick-n)/_e|0);break;case ce.Playing:La(i,e);break;case ce.Results:n>=i.phaseEndTick&&_h(i,e);break}i.tick=n+1;for(const s of i.cycles)s.boostUntilTick>0&&s.boostUntilTick<=i.tick&&(s.boostUntilTick=0)}function _r(i){let t=2166136261;const e=s=>{t=Math.imul(t^s&255,16777619)>>>0},n=s=>{const r=s>>>0;e(r),e(r>>>8),e(r>>>16),e(r>>>24)};n(i.tick),n(i.rng),e(i.phase),n(i.phaseEndTick),n(i.round),n(i.ringOffset),n(i.winner);for(let s=0;s<Yt;s++)e(i.owner[s]);for(let s=0;s<Yt;s++)e(i.trail[s]);for(const s of i.cycles){e((s.active?1:0)|(s.bot?2:0)|(s.alive?4:0)),e(s.dir),n(s.x),n(s.y),n(s.respawnTick),n(s.trailOrigin),n(s.trail.length);for(const r of s.trail)n(r);n(s.area),n(s.bestArea),n(s.kills),n(s.boostCharges),n(s.boostUntilTick),n(s.deaths),n(s.lastKiller),e(s.lastDeath),n(s.lastDeathTick),n(s.spawnTick),e(s.botSkill),e(s.botMode),e(s.botLegsLeft),e(s.botTurnLeft),n(s.botLegLen),n(s.botLegStep)}return t>>>0}const ac=2;function Mh(i){const t=[],e=a=>{t.push(a&255)},n=a=>{for(a>>>=0;a>=128;)t.push(a&127|128),a>>>=7;t.push(a)},s=a=>n((a<<1^a>>31)>>>0),r=a=>{for(let l=0;l<4;l++)t.push(a>>>l*8&255)},o=a=>{let l=0;for(;l<Yt;){const c=a[l];let h=1;for(;l+h<Yt&&a[l+h]===c;)h++;e(c),n(h),l+=h}};e(ac),s(i.tick),r(i.rng),e(i.phase),s(i.phaseEndTick),s(i.round),s(i.ringOffset),s(i.winner),o(i.owner),o(i.trail);for(const a of i.cycles)if(e((a.active?1:0)|(a.bot?2:0)|(a.alive?4:0)),!!a.active){e(a.dir),s(a.x),s(a.y),s(a.respawnTick),s(a.trailOrigin),n(a.trail.length);for(const l of a.trail)n(l);s(a.area),s(a.bestArea),s(a.kills),s(a.boostCharges),s(a.boostUntilTick),s(a.deaths),s(a.lastKiller),e(a.lastDeath),s(a.lastDeathTick),s(a.spawnTick),e(a.botSkill),e(a.botMode),e(a.botLegsLeft),e(a.botTurnLeft),s(a.botLegLen),s(a.botLegStep)}return Uint8Array.from(t)}function Sh(i){let t=0,e=!0;const n=()=>t>=i.length?(e=!1,0):i[t++],s=()=>{let h=0;for(let f=0;f<35&&e;f+=7){const u=n();if(h=(h|(u&127)<<f)>>>0,!(u&128))return h}return e=!1,0},r=()=>{const h=s();return h>>>1^-(h&1)|0},o=()=>{let h=0;for(let f=0;f<4;f++)h=(h|n()<<f*8)>>>0;return h},a=h=>{let f=0;for(;f<Yt&&e;){const u=n(),p=s();if(p===0||p>Yt-f||u>pt){e=!1;return}h.fill(u,f,f+p),f+=p}},l=n();if(l!==1&&l!==ac)return null;const c=ic();c.tick=r(),c.rng=o(),c.phase=n(),c.phaseEndTick=r(),c.round=r(),c.ringOffset=r(),c.winner=r()<<24>>24,a(c.owner),a(c.trail);for(const h of c.cycles){const f=n();if(h.active=(f&1)!==0,h.bot=(f&2)!==0,h.alive=(f&4)!==0,!h.active)continue;h.dir=n()&3,h.x=r()<<16>>16,h.y=r()<<16>>16,h.respawnTick=r(),h.trailOrigin=r();const u=s();if(u>Yt)return null;for(let p=0;p<u&&e;p++){const g=s();if(g>=Yt)return null;h.trail.push(g)}h.area=r(),h.bestArea=r(),h.kills=r(),h.boostCharges=l>=2?r():Qo+h.kills,h.boostUntilTick=l>=2?r():0,h.deaths=r(),h.lastKiller=r()<<24>>24,h.lastDeath=n(),h.lastDeathTick=r(),h.spawnTick=r(),h.botSkill=n(),h.botMode=n(),h.botLegsLeft=n(),h.botTurnLeft=n(),h.botLegLen=r()<<16>>16,h.botLegStep=r()<<16>>16}if(!e||t!==i.length||c.phase>ce.Results||c.tick<0||c.tick>1e8||c.round<0||c.ringOffset<0||c.ringOffset>=hr||c.winner<-1||c.winner>=pt)return null;for(const h of c.cycles)if(h.active&&(!kn(h.x,h.y)||h.lastKiller<-1||h.lastKiller>=pt||h.lastDeath>fe.Erased||h.botMode>2||h.trailOrigin<-1||h.trailOrigin>=Yt||h.area<0||h.area>Yt||h.boostCharges<0||h.boostUntilTick<0||h.boostUntilTick>c.tick+Jo||!h.alive&&h.boostUntilTick!==0))return null;return c}function yh(i){let t=0;for(const e of i.cycles)t+=e.active?1:0;return t}function Eh(i){let t=0;for(const e of i.cycles)t+=e.active&&e.bot?1:0;return t}const Bn=96;class Th{head;history=new Array(Bn).fill(null);cmds=[];baseTick=0;dirtyFrom=Number.MAX_SAFE_INTEGER;events=[];rollbackTicks=0;constructor(t){this.head=t}reset(t,e=[]){this.head=gr(t),this.baseTick=t.tick,this.dirtyFrom=Number.MAX_SAFE_INTEGER,this.history.fill(null),this.cmds=e.map(n=>({...n})),this.cmds.sort(Da),this.events=[]}get current(){return this.head}get currentTick(){return this.head.tick}get commands(){return this.cmds}oldestTick(){return Math.max(this.baseTick,this.head.tick-Bn+1)}upsert(t){if(t.tick<this.oldestTick())return!1;const e=this.cmds.findIndex(s=>s.slot===t.slot&&s.type===t.type&&s.seq===t.seq);if(e>=0){const s=this.cmds[e];if(s.tick===t.tick&&s.arg===t.arg)return!0;this.cmds.splice(e,1),s.tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,s.tick))}let n=this.cmds.length;for(let s=0;s<this.cmds.length;s++)if(Da(t,this.cmds[s])<0){n=s;break}return this.cmds.splice(n,0,{...t}),t.tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,t.tick)),!0}remove(t,e,n){const s=this.cmds.findIndex(r=>r.slot===t&&r.type===e&&r.seq===n);return s<0?!1:(this.cmds[s].tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,this.cmds[s].tick)),this.cmds.splice(s,1),!0)}find(t,e,n){return this.cmds.find(s=>s.slot===t&&s.type===e&&s.seq===n)}stateAt(t){if(t===this.head.tick)return this.head;if(t<this.oldestTick()||t>this.head.tick)return null;const e=this.history[t%Bn];return e&&e.tick===t?e:null}advanceTo(t){if(this.dirtyFrom<this.head.tick){const r=Math.max(this.dirtyFrom,this.oldestTick()),o=this.stateAt(r);o&&(this.rollbackTicks+=this.head.tick-r,this.head=gr(o))}this.dirtyFrom=Number.MAX_SAFE_INTEGER,t=Math.min(t,this.head.tick+32768);let e=0;for(;e<this.cmds.length&&this.cmds[e].tick<this.head.tick;)e++;for(;this.head.tick<t;){this.history[this.head.tick%Bn]=gr(this.head);const r=e;for(;e<this.cmds.length&&this.cmds[e].tick===this.head.tick;)e++;xh(this.head,this.cmds.slice(r,e),this.events)}const n=this.oldestTick();let s=0;for(;s<this.cmds.length&&this.cmds[s].tick<n;)s++;s>0&&this.cmds.splice(0,s)}settle(){this.advanceTo(this.head.tick)}commandsFrom(t){return this.cmds.filter(e=>e.tick>=t).map(e=>({...e}))}consumeEvents(){const t=this.events;return this.events=[],t}}const so=2,Ua=8,bh=4,vr=12,Ah=16,wh=15,Na=7,Fa=2.5,Vn=()=>({kind:"empty",peer:"",name:""}),cs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Rh(i){let t="";for(let e=0;e<i.length;e+=3){const n=i[e]<<16|(i[e+1]??0)<<8|(i[e+2]??0);t+=cs[n>>18&63]+cs[n>>12&63],t+=e+1<i.length?cs[n>>6&63]:"=",t+=e+2<i.length?cs[n&63]:"="}return t}function Ch(i){const t=i.replace(/=+$/,""),e=[];let n=0,s=0;for(const r of t){const o=cs.indexOf(r);if(o<0)return null;n=n<<6|o,s+=6,s>=8&&(s-=8,e.push(n>>s&255))}return Uint8Array.from(e)}const Oa=i=>i.map(t=>[t.tick,t.slot,t.type,t.arg,t.seq]);function Ba(i,t){const e=i[t],n=[];if(!Array.isArray(e))return n;for(const s of e){if(!Array.isArray(s)||s.length!==5||!s.every(h=>typeof h=="number"&&Number.isFinite(h)))continue;const[r,o,a,l,c]=s;o<0||o>=pt||a<0||a>Qt.Boost||n.push({tick:r|0,slot:o|0,type:a|0,arg:l&255,seq:c&65535})}return n}function ka(i){const t=i.y===void 0?Qt.Turn:i.y;return t!==Qt.Turn&&t!==Qt.Boost||![i.s,i.t,i.q].every(e=>typeof e=="number"&&Number.isSafeInteger(e))||i.s<0||i.s>=pt||i.t<0||i.q<0||i.q>65535||t===Qt.Turn&&(!Number.isInteger(i.d)||i.d<0||i.d>3)?null:{tick:i.t,slot:i.s,type:t,arg:t===Qt.Turn?i.d:0,seq:i.q}}const Ln=(i,t,e=0)=>typeof i[t]=="number"&&Number.isFinite(i[t])?i[t]:e,Ze=(i,t)=>typeof i[t]=="string"?i[t]:"",Ss=i=>Number.isFinite(i)&&i>=0&&i<1e12,za=i=>`${i.tick}|${i.type}|${i.slot}|${i.other}|${i.value}`;class na{timeline;myRole="offline";haveMatch=!1;hostPeer="";epoch=0;slots=Array.from({length:pt},Vn);mySlot=-1;allowBots;now=0;joinedAt=-1;simClock=0;alpha=0;clockTargetSet=!1;clockTarget=0;clockTargetAt=0;mySeq=1+Math.floor(Math.random()*3e4);lastLocalTick=Number.MIN_SAFE_INTEGER;lastLocalDir=0;lastLocalBoostTick=Number.MIN_SAFE_INTEGER;hostSeq=30001+Math.floor(Math.random()*3e4);lastSlotTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);lastSlotBoostTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);lastHostCmdTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);outbox=[];lastHashTick=Number.MIN_SAFE_INTEGER;rosterDirty=!1;lastRosterSent=-100;snapshotSentAt=new Map;lastSnapshotRequest=-100;lastPing=-100;pingCount=0;ping=0;pendingHashChecks=[];desyncs=0;hostHeardAt=-100;hostEpochSeen=0;hostTickSeen=0;earlyInputs=[];rttSamples=[];lastPrune=0;lastHeard=new Map;silenced=new Set;inbox=[];recentEvents=[];recentKeys=new Set;pendingEvents=[];cfg;transport;constructor(t,e){this.cfg=t,this.transport=e,this.allowBots=e?t.botsEnabled!==!1:!0,this.timeline=new Th(Ia(1)),e&&(e.onMessage=(n,s)=>this.inbox.push([n,s]),e.onPresence=()=>{})}get state(){return this.timeline.current}get previousState(){return this.timeline.stateAt(this.timeline.currentTick-1)??this.timeline.current}get tickAlpha(){return this.alpha}get localSlot(){return this.mySlot}get hasMatch(){return this.haveMatch}get botsEnabled(){return this.allowBots}get isOnline(){return this.transport!==null}get role(){return this.myRole}get pingMs(){return this.ping}get peerCount(){return this.transport?this.transport.peers.length:1}get linkState(){return this.transport?this.transport.state:"joined"}get linkJoined(){return this.linkState==="joined"}get desyncCount(){return this.desyncs}get hostId(){return this.hostPeer}get config(){return this.cfg}get history(){return this.timeline}get statusText(){if(!this.transport)return"";switch(this.transport.state){case"connecting":return"CONNECTING TO THE GRID...";case"failed":return"CONNECTION FAILED";case"closed":return"DISCONNECTED"}return this.haveMatch?"":this.myRole==="joining"?"JOINING ROOM...":"SYNCING WITH HOST..."}slotName(t){if(t<0||t>=pt)return"";if(t===this.mySlot&&this.cfg.name)return this.cfg.name;const e=this.timeline.current.cycles[t];return e.active&&!e.bot&&this.slots[t].name?this.slots[t].name:ah[t]}isHumanSlot(t){if(t<0||t>=pt)return!1;const e=this.timeline.current.cycles[t];return e.active&&!e.bot}consumeEvents(){const t=this.pendingEvents;return this.pendingEvents=[],t}hashAt(t){const e=this.timeline.stateAt(t);return e?_r(e):0}start(t){this.now=t,this.transport?this.myRole="joining":(this.myRole="offline",this.startNewMatch())}shutdown(){this.transport&&(this.transport.onMessage=null,this.transport.onPresence=null,this.transport.close())}tick(t){const e=Math.min(Math.max(t-this.now,0),.25);if(this.now=t,this.transport&&(this.transport.tick(t),this.joinedAt<0&&this.transport.state==="joined"&&(this.joinedAt=t),this.updateRole(),this.processInbox()),!this.haveMatch){this.myRole==="client"&&this.clientRequestSnapshot(!1);return}this.myRole==="offline"||this.myRole==="host"?(this.simClock+=e*_e,this.myRole==="host"&&this.hostDuties(),this.hostFillBots()):this.myRole==="client"&&(this.clientAdjustClock(e),this.simClock-this.timeline.currentTick>Bn&&(this.simClock=this.timeline.currentTick+Bn,this.clientRequestSnapshot(!1)));const n=Math.floor(this.simClock);this.timeline.advanceTo(Math.max(this.timeline.currentTick,n)),this.alpha=n<this.timeline.currentTick?1:Math.min(Math.max(this.simClock-n,0),1);for(const r of this.timeline.consumeEvents()){const o=za(r);this.recentKeys.has(o)||(this.recentKeys.add(o),this.recentEvents.push(r),this.pendingEvents.push(r))}const s=this.timeline.currentTick-2*vr-Ua;if(this.recentEvents.length>0&&this.recentEvents[0].tick<s&&(this.recentEvents=this.recentEvents.filter(r=>r.tick>=s?!0:(this.recentKeys.delete(za(r)),!1))),this.pendingEvents.length>512&&this.pendingEvents.splice(0,this.pendingEvents.length-512),this.myRole==="host"||this.myRole==="offline"){const r=this.timeline.currentTick,o=r-this.lastHashTick>=Ah;if(this.myRole==="host"&&(this.outbox.length>0||o)){const a={h:this.cfg.peerId,e:this.epoch,n:Math.round(this.simClock*1e3),b:this.allowBots,c:Oa(this.outbox)};if(o){const l=r-vr,c=this.timeline.stateAt(l);c&&(a.k=[l,_r(c)]),this.lastHashTick=r}this.send("c",a)}this.outbox=[],this.myRole==="host"&&(this.rosterDirty||t-this.lastRosterSent>10)&&this.hostSendRoster()}else this.myRole==="client"&&(this.checkHashes(),t-this.lastPing>(this.pingCount<3?1:5)&&(this.lastPing=t,this.pingCount++,this.send("pi",{p:this.cfg.peerId,x:Math.round(t*1e3)})))}setBotsEnabled(t){this.myRole!=="host"||!this.haveMatch||this.allowBots===t||(this.allowBots=t,this.hostFillBots(),this.rosterDirty=!0,this.hostSendRoster())}inputBoost(){if(!this.haveMatch||this.mySlot<0||this.state.phase!==ce.Playing)return;const t=this.state.cycles[this.mySlot];if(!t.active||!t.alive||t.bot||t.boostCharges<=0||t.boostUntilTick>this.timeline.currentTick)return;const e=this.timeline.currentTick;if(this.lastLocalBoostTick>=e)return;this.lastLocalBoostTick=e,this.mySeq=this.mySeq+1&65535;const n={tick:e,slot:this.mySlot,type:Qt.Boost,arg:0,seq:this.mySeq};this.timeline.upsert(n),this.myRole==="host"?(this.lastSlotBoostTick[this.mySlot]=e,this.outbox.push(n)):this.myRole==="client"&&this.send("i",{p:this.cfg.peerId,s:this.mySlot,t:e,y:Qt.Boost,d:0,q:n.seq})}predictedDir(){return this.mySlot<0?0:this.lastLocalTick>=this.timeline.currentTick?this.lastLocalDir:this.timeline.current.cycles[this.mySlot].dir}inputDirection(t){this.queueLocalTurn(t&3)}inputTurn(t){const e=this.predictedDir();this.queueLocalTurn(t?ei(e):Ci(e))}queueLocalTurn(t){if(!this.haveMatch||this.mySlot<0)return;const e=this.timeline.current.cycles[this.mySlot];if(!e.active||!e.alive||e.bot)return;const n=this.predictedDir();if(t===n||t===ta(n))return;const s=Math.max(this.timeline.currentTick,this.lastLocalTick+1);if(s>this.timeline.currentTick+3)return;this.mySeq=this.mySeq+1&65535;const r={tick:s,slot:this.mySlot,type:Qt.Turn,arg:t,seq:this.mySeq};this.timeline.upsert(r),this.lastLocalTick=s,this.lastLocalDir=t,this.myRole==="host"?(this.lastSlotTick[this.mySlot]=s,this.outbox.push(r)):this.myRole==="client"&&this.send("i",{p:this.cfg.peerId,s:this.mySlot,t:s,y:Qt.Turn,d:t,q:r.seq})}isPresent(t){return this.transport?this.transport.peers.some(e=>e.id===t):t===this.cfg.peerId}electSuccessor(t){if(!this.transport)return this.cfg.peerId;let e=null;for(const n of this.transport.peers)n.version!==so||n.id===t||(!e||n.joinMs<e.joinMs||n.joinMs===e.joinMs&&n.id<e.id)&&(e=n);return e?e.id:""}joinMsOf(t){const e=this.transport?.peers.find(n=>n.id===t);return e?e.joinMs:Number.MAX_SAFE_INTEGER}isBetterHost(t,e,n,s,r,o){if(t!==s)return t>s;if(Math.abs(e-r)>32)return e>r;const a=this.joinMsOf(n),l=this.joinMsOf(o);return a!==l?a<l:n<o}yieldTo(t,e,n){this.myRole="client",this.outbox=[],this.followHost(t,e,n)}followHost(t,e,n){this.myRole==="joining"&&(this.myRole="client"),this.hostPeer=t,this.hostHeardAt=this.now,this.hostEpochSeen=e,this.hostTickSeen=n,this.pendingHashChecks=[],this.rttSamples=[],this.clockTargetSet=!1}updateRole(){if(!(this.transport.state!=="joined"||this.joinedAt<0||!this.isPresent(this.cfg.peerId)||this.myRole==="host"||this.hostPeer!==""&&this.isPresent(this.hostPeer)&&this.now-this.hostHeardAt<Na)){if(this.myRole==="client"&&this.haveMatch){this.electSuccessor(this.hostPeer)===this.cfg.peerId&&this.becomeHostOfRunningMatch();return}this.now-this.joinedAt<Fa||(this.electSuccessor("")===this.cfg.peerId||this.now-this.joinedAt>4*Fa?(this.myRole="host",this.hostPeer=this.cfg.peerId,this.startNewMatch()):this.myRole==="joining"&&(this.myRole="client"))}}processInbox(){const t=this.inbox;this.inbox=[];for(const[e,n]of t)this.handleMessage(e,n)}handleMessage(t,e){const n=Ze(e,"p");n&&(this.lastHeard.set(n,this.now),this.silenced.delete(n));let s=!1;const r=Ze(e,"h");if((t==="c"||t==="s"||t==="m"||t==="po")&&r&&r!==this.cfg.peerId&&this.isPresent(r)){const a=Ln(e,"e")|0,l=Ln(e,"n",-1),c=Ss(l)?l/1e3:0;if(this.myRole==="host")this.haveMatch&&this.isBetterHost(a,c,r,this.epoch,this.simClock,this.cfg.peerId)&&(this.yieldTo(r,a,c),t!=="s"&&this.clientRequestSnapshot(!0),s=!0);else if(r===this.hostPeer)s=!0,this.hostHeardAt=this.now,this.hostEpochSeen=a,this.hostTickSeen=c;else{const h=this.hostPeer!==""&&this.isPresent(this.hostPeer)&&this.now-this.hostHeardAt<Na,f=this.hostTickSeen+(this.now-this.hostHeardAt)*_e;(!h||this.isBetterHost(a,c,r,this.hostEpochSeen,f,this.hostPeer))&&(this.followHost(r,a,c),t!=="s"&&this.clientRequestSnapshot(!0),s=!0)}}switch(s&&typeof e.b=="boolean"&&(this.allowBots=e.b),t){case"i":this.myRole==="host"?this.hostOnInput(e):this.haveMatch?this.clientOnInput(e):this.earlyInputs.length<64&&this.earlyInputs.push(e);break;case"c":this.myRole==="client"&&this.haveMatch&&s&&this.clientOnCommit(e);break;case"s":{const a=Ze(e,"to");this.myRole!=="host"&&s&&(a===this.cfg.peerId||a==="*")&&this.clientOnSnapshot(e);break}case"m":this.myRole!=="host"&&s&&this.readRoster(e);break;case"r":this.myRole==="host"&&this.haveMatch&&this.hostOnSnapshotRequest(e);break;case"pi":this.myRole==="host"&&this.send("po",{h:this.cfg.peerId,e:this.epoch,to:Ze(e,"p"),x:Ln(e,"x"),n:Math.round(this.simClock*1e3)});break;case"po":this.myRole==="client"&&s&&Ze(e,"to")===this.cfg.peerId&&this.handleClockSample(e);break}}handleClockSample(t){const e=Ln(t,"x",-1),n=Ln(t,"n",-1);if(!Number.isFinite(e)||e<=0||!Ss(n))return;const s=this.now*1e3-e;if(s<0||s>5e3)return;this.rttSamples.push({rtt:s,hostMilli:n,at:this.now}),this.rttSamples.length>4&&this.rttSamples.shift();let r=this.rttSamples[0];for(const o of this.rttSamples)o.rtt<r.rtt&&(r=o);this.ping=Math.round(r.rtt),this.clockTarget=r.hostMilli/1e3+r.rtt/2e3*_e,this.clockTargetAt=r.at,this.clockTargetSet=!0}startNewMatch(){const t=this.cfg.seed!==0?this.cfg.seed>>>0:Math.random()*4294967295>>>0|1;this.timeline.reset(Ia(t)),this.simClock=0,this.haveMatch=!0,this.epoch=1,this.lastHostCmdTick.fill(Number.MIN_SAFE_INTEGER),this.slots=Array.from({length:pt},Vn),this.lastSlotTick.fill(Number.MIN_SAFE_INTEGER),this.lastSlotBoostTick.fill(Number.MIN_SAFE_INTEGER),this.mySlot=-1,this.lastLocalTick=Number.MIN_SAFE_INTEGER,this.lastLocalBoostTick=Number.MIN_SAFE_INTEGER,this.lastHashTick=0,this.cfg.spectator||(this.mySlot=0,this.slots[0]={kind:"human",peer:this.cfg.peerId,name:this.cfg.name},this.hostIssue(Qt.JoinHuman,0,0,0)),this.hostFillBots(),this.myRole==="host"&&(this.rosterDirty=!0,this.hostSendSnapshot("*"))}rebuildSlotsFromState(){const t=this.timeline.current;for(let e=0;e<pt;e++){const n=t.cycles[e],s=this.slots[e];n.active?n.bot?this.slots[e]={kind:"bot",peer:"",name:""}:s.kind="human":this.slots[e]=Vn()}}becomeHostOfRunningMatch(){this.myRole="host",this.hostPeer=this.cfg.peerId,this.epoch=Math.max(this.epoch,this.hostEpochSeen)+1,this.lastHostCmdTick.fill(Number.MIN_SAFE_INTEGER),this.rebuildSlotsFromState();const t=this.timeline.currentTick;for(let e=0;e<pt;e++){this.lastSlotTick[e]=t,this.lastSlotBoostTick[e]=t;const n=this.slots[e];n.kind==="human"&&n.peer!==this.cfg.peerId&&!this.isPresent(n.peer)&&this.hostRemoveHuman(e,t)}this.lastHashTick=t,this.rosterDirty=!0,this.hostSendSnapshot("*")}hostRemoveHuman(t,e){this.hostIssue(this.allowBots?Qt.Leave:Qt.Remove,t,0,e),this.slots[t]=this.allowBots?{kind:"bot",peer:"",name:""}:Vn()}hostIssue(t,e,n,s){const r=Math.max(s,this.lastHostCmdTick[e]+1);this.lastHostCmdTick[e]=r,this.hostSeq=this.hostSeq+1&65535;const o={tick:r,slot:e,type:t,arg:n,seq:this.hostSeq};this.timeline.upsert(o),this.myRole==="host"&&this.outbox.push(o)}hostFillBots(){const t=this.timeline.current,e=this.timeline.currentTick;if(!this.allowBots){for(let s=0;s<pt;s++)this.slots[s].kind==="bot"&&(this.slots[s]=Vn(),this.hostIssue(Qt.Remove,s,0,e));return}let n=this.slots.filter(s=>s.kind!=="empty").length;if(t.phase===ce.Results){for(let s=pt-1;s>=0&&n>this.cfg.targetCycles;s--)this.slots[s].kind==="bot"&&(this.slots[s]=Vn(),this.hostIssue(Qt.Remove,s,0,e),n--);return}for(let s=pt-1;s>=0&&n<this.cfg.targetCycles;s--)this.slots[s].kind==="empty"&&(this.slots[s]={kind:"bot",peer:"",name:""},this.hostIssue(Qt.JoinBot,s,0,e),n++)}hostAssignSlot(t,e){for(let s=0;s<pt;s++)if(this.slots[s].kind==="human"&&this.slots[s].peer===t)return s;let n=this.slots.findIndex(s=>s.kind==="empty");return n<0&&(n=this.slots.findIndex(s=>s.kind==="bot")),n<0?-1:(this.slots[n]={kind:"human",peer:t,name:e.slice(0,12)},this.lastSlotTick[n]=Number.MIN_SAFE_INTEGER,this.lastSlotBoostTick[n]=Number.MIN_SAFE_INTEGER,this.lastHeard.set(t,this.now),this.hostIssue(Qt.JoinHuman,n,0,this.timeline.currentTick),this.rosterDirty=!0,n)}hostDuties(){const t=this.transport;if(t.state!=="joined"||!this.isPresent(this.cfg.peerId))return;if(this.now-this.lastPrune>5){this.lastPrune=this.now;for(const n of[...this.lastHeard.keys()])this.isPresent(n)||this.lastHeard.delete(n);for(const n of[...this.snapshotSentAt.keys()])this.isPresent(n)||this.snapshotSentAt.delete(n);for(const n of[...this.silenced])this.isPresent(n)||this.silenced.delete(n)}const e=this.timeline.currentTick;for(let n=0;n<pt;n++){const s=this.slots[n];if(s.kind!=="human"||s.peer===this.cfg.peerId)continue;const r=this.lastHeard.get(s.peer)??0,o=this.now-r>wh;(!this.isPresent(s.peer)||o)&&(o&&this.silenced.add(s.peer),this.hostRemoveHuman(n,e),this.rosterDirty=!0)}for(const n of t.peers){if(n.version!==so||n.id===this.cfg.peerId||this.silenced.has(n.id))continue;!this.slots.some(r=>r.kind==="human"&&r.peer===n.id)&&this.hostAssignSlot(n.id,n.name)>=0&&this.hostSendSnapshot(n.id)}}hostOnInput(t){const e=ka(t);if(!e)return;const{slot:n,type:s,seq:r}=e,o=Ze(t,"p");if(this.slots[n].kind!=="human"||this.slots[n].peer!==o||this.timeline.find(n,s,r))return;const a=e.tick,l=this.timeline.currentTick,c=s===Qt.Boost?this.lastSlotBoostTick:this.lastSlotTick;let h=Math.min(Math.max(a,l-Ua),l+bh);h=Math.max(h,c[n]+1,this.timeline.oldestTick()),c[n]=h;const f={...e,tick:h};this.timeline.upsert(f),h!==a&&this.outbox.push(f)}hostOnSnapshotRequest(t){const e=Ze(t,"p");if(!e||!this.isPresent(e))return;const n=this.snapshotSentAt.get(e);n!==void 0&&this.now-n<1||(this.hostAssignSlot(e,Ze(t,"n")),this.hostSendSnapshot(e))}hostSendSnapshot(t){const e=this.timeline.currentTick,n=Math.max(this.timeline.oldestTick(),e-vr),s=this.timeline.stateAt(n);s&&(this.send("s",{h:this.cfg.peerId,e:this.epoch,to:t,t:n,n:Math.round(this.simClock*1e3),d:Rh(Mh(s)),c:Oa(this.timeline.commandsFrom(n)),r:this.rosterJson(),b:this.allowBots}),this.snapshotSentAt.set(t,this.now))}hostSendRoster(){this.send("m",{h:this.cfg.peerId,e:this.epoch,n:Math.round(this.simClock*1e3),b:this.allowBots,r:this.rosterJson()}),this.rosterDirty=!1,this.lastRosterSent=this.now}rosterJson(){const t=[];for(let e=0;e<pt;e++)this.slots[e].kind==="human"&&t.push([e,this.slots[e].peer,this.slots[e].name]);return t}readRoster(t){const e=t.r;if(Array.isArray(e)){this.slots=Array.from({length:pt},Vn),this.mySlot=-1;for(const n of e){if(!Array.isArray(n)||n.length!==3)continue;const s=Number(n[0])|0;s<0||s>=pt||(this.slots[s]={kind:"human",peer:String(n[1]),name:String(n[2]).slice(0,16)},this.slots[s].peer===this.cfg.peerId&&(this.mySlot=s))}}}clientOnSnapshot(t){const e=Ch(Ze(t,"d")),n=e?Sh(e):null;if(!n)return;const s=Ba(t,"c"),r=this.timeline.currentTick;if(this.haveMatch&&r>=n.tick&&r-n.tick<Bn)for(const h of this.timeline.commands)(h.type===Qt.Turn||h.type===Qt.Boost)&&h.tick>=n.tick&&!s.some(f=>f.slot===h.slot&&f.type===h.type&&f.seq===h.seq)&&s.push({...h});this.timeline.reset(n,s),this.readRoster(t),this.epoch=Ln(t,"e")|0,this.hostPeer=Ze(t,"h"),this.myRole="client",this.haveMatch=!0,this.lastLocalTick=Number.MIN_SAFE_INTEGER,this.lastLocalBoostTick=Number.MIN_SAFE_INTEGER,this.pendingHashChecks=[];const o=Ln(t,"n",-1),a=Ss(o)?o/1e3:n.tick,l=(this.ping>0?this.ping/2e3:.06)*_e;this.simClock=Math.min(Math.max(a+l,n.tick),n.tick+Bn),this.hostHeardAt=this.now,this.clockTarget=this.simClock,this.clockTargetAt=this.now,this.clockTargetSet=!0,this.timeline.advanceTo(Math.floor(this.simClock));const c=this.earlyInputs;this.earlyInputs=[];for(const h of c)this.clientOnInput(h)}clientOnInput(t){const e=ka(t);if(!e)return;const n=Ze(t,"p");this.slots[e.slot].peer!==n||n===this.cfg.peerId||this.timeline.find(e.slot,e.type,e.seq)||e.tick>this.timeline.currentTick+64||this.timeline.upsert(e)}clientOnCommit(t){for(const s of Ba(t,"c"))s.tick>this.timeline.currentTick+256||this.timeline.upsert(s)||this.clientRequestSnapshot(!1);const e=t.k;Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"&&this.pendingHashChecks.push([e[0]|0,e[1]>>>0]);const n=Ln(t,"n",-1);!this.clockTargetSet&&Ss(n)&&(this.clockTarget=n/1e3+.06*_e,this.clockTargetAt=this.now,this.clockTargetSet=!0)}clientRequestSnapshot(t){!this.transport||this.myRole!=="client"||!t&&this.now-this.lastSnapshotRequest<1.5||(this.lastSnapshotRequest=this.now,this.send("r",{p:this.cfg.peerId,n:this.cfg.name}))}clientAdjustClock(t){let e=1;if(this.clockTargetSet){const n=this.clockTarget+(this.now-this.clockTargetAt)*_e,s=n-this.simClock;Math.abs(s)>6?this.simClock=n:e=1+Math.min(Math.max(s*.1,-.15),.15)}this.simClock+=t*_e*e}checkHashes(){for(let t=this.pendingHashChecks.length-1;t>=0;t--){const[e,n]=this.pendingHashChecks[t];if(e>=this.timeline.currentTick)continue;const s=this.timeline.stateAt(e);this.pendingHashChecks.splice(t,1),s&&_r(s)!==n&&(this.desyncs++,this.clientRequestSnapshot(!1))}}send(t,e){this.transport&&this.transport.state==="joined"&&this.transport.send(t,e)}}const xr=25,Ph=10;function Ha(i,t){return{id:i,name:typeof t?.n=="string"?t.n:"",joinMs:typeof t?.j=="number"?t.j:0,version:typeof t?.v=="number"?t.v:0}}class Lh{state="connecting";peers=[];onMessage=null;onPresence=null;sent=0;received=0;error="";topic;apiUrl;socket=null;closedByUser=!1;refCounter=0;joinRef="";channelJoined=!1;havePresenceState=!1;bufferedDiffs=[];presence=new Map;now=0;nextHeartbeat=0;reconnectAt=-1;joinSentAt=-1;lastRxAt=0;attempts=0;apiKey;room;self;constructor(t,e,n,s){this.apiUrl=t.replace(/\/$/,""),this.apiKey=e,this.room=n,this.self=s,this.topic=`realtime:${n}`}connect(){this.closedByUser=!1,this.openSocket()}describe(){return`${this.apiUrl} room=${this.room} sent=${this.sent} recv=${this.received} peers=${this.peers.length}`}openSocket(){const t=`${this.apiUrl.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.apiKey)}&vsn=1.0.0`;this.state="connecting",this.channelJoined=!1,this.havePresenceState=!1,this.bufferedDiffs=[],this.joinRef="",this.joinSentAt=-1;let e;try{e=new WebSocket(t)}catch(n){this.drop(`cannot open socket: ${String(n)}`,2);return}this.socket=e,e.onopen=()=>{this.socket===e&&this.handleConnected()},e.onmessage=n=>{this.socket===e&&typeof n.data=="string"&&this.handleRaw(n.data)},e.onerror=()=>{this.socket===e&&this.drop("connection error",Math.min(15,1+this.attempts*2))},e.onclose=n=>{if(this.socket===e){if(this.closedByUser){this.state="closed";return}this.drop(`socket closed (${n.code} ${n.reason})`,Math.min(15,.5+this.attempts*2))}}}handleConnected(){this.lastRxAt=this.now,this.joinRef=String(++this.refCounter),this.sendFrame(this.topic,"phx_join",{config:{broadcast:{self:!1,ack:!1},presence:{key:this.self.id,enabled:!0},postgres_changes:[],private:!1},access_token:this.apiKey}),this.joinSentAt=this.now,this.nextHeartbeat=this.now+xr}drop(t,e){this.error=t;const n=this.socket;if(this.socket=null,n){n.onopen=n.onmessage=n.onerror=n.onclose=null;try{n.close()}catch{}}this.channelJoined=!1,this.joinSentAt=-1,this.attempts++,this.state=this.attempts>=4?"failed":"connecting",this.presence.size>0&&(this.presence.clear(),this.rebuildPeers()),this.reconnectAt=this.now+e}tick(t){if(this.now=t,this.closedByUser)return;if(this.reconnectAt>=0&&t>=this.reconnectAt){this.reconnectAt=-1,this.openSocket();return}const e=this.socket!==null&&this.socket.readyState===WebSocket.OPEN;if(e&&t>=this.nextHeartbeat&&(this.nextHeartbeat=t+xr,this.sendFrame("phoenix","heartbeat",{})),e&&this.channelJoined&&t-this.lastRxAt>2.4*xr){this.drop("no traffic from the server",1);return}e&&!this.channelJoined&&this.joinSentAt>=0&&t-this.joinSentAt>Ph&&(this.joinSentAt=-1,this.drop("join timed out",2))}close(){this.closedByUser||(this.closedByUser=!0,this.socket&&this.socket.readyState===WebSocket.OPEN&&(this.channelJoined&&this.sendFrame(this.topic,"phx_leave",{}),this.socket.close(1e3,"bye")),this.state="closed")}send(t,e){!this.channelJoined||!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.sendFrame(this.topic,"broadcast",{type:"broadcast",event:t,payload:e}),this.sent++)}sendFrame(t,e,n){if(!this.socket||this.socket.readyState!==WebSocket.OPEN)return;const s={topic:t,event:e,payload:n,ref:e==="phx_join"?this.joinRef:String(++this.refCounter)};t===this.topic&&this.joinRef&&(s.join_ref=this.joinRef),this.socket.send(JSON.stringify(s))}handleRaw(t){this.lastRxAt=this.now;let e;try{e=JSON.parse(t)}catch{return}if(!e||typeof e!="object"||e.topic!==this.topic)return;const n=e.event,s=typeof e.ref=="string"?e.ref:"",r=e.payload&&typeof e.payload=="object"?e.payload:{};if(n==="phx_reply"){s===this.joinRef&&!this.channelJoined&&(r.status==="ok"?(this.channelJoined=!0,this.joinSentAt=-1,this.attempts=0,this.state="joined",this.error="",this.self={...this.self,joinMs:Date.now()},this.sendFrame(this.topic,"presence",{type:"presence",event:"track",payload:{n:this.self.name,v:this.self.version,j:this.self.joinMs}})):this.drop(`join refused: ${t.slice(0,200)}`,5));return}if(n==="broadcast"){typeof r.event=="string"&&r.payload&&typeof r.payload=="object"&&(this.received++,this.onMessage?.(r.event,r.payload));return}if(n==="presence_state"){this.applyPresenceState(r),this.havePresenceState=!0;for(const o of this.bufferedDiffs)this.applyPresenceDiff(o);this.bufferedDiffs=[],this.rebuildPeers();return}if(n==="presence_diff"){if(!this.havePresenceState){this.bufferedDiffs.push(r);return}this.applyPresenceDiff(r),this.rebuildPeers();return}if(n==="system"){if(r.status==="error"){const o=String(r.message??"");this.drop(`server: ${o}`,o.includes("per second")?10:1)}return}(n==="phx_close"||n==="phx_error")&&(!s||s===this.joinRef)&&this.drop(`channel ${n}`,1)}applyPresenceState(t){this.presence.clear();for(const[e,n]of Object.entries(t)){const s=n?.metas;Array.isArray(s)&&this.presence.set(e,s.map(r=>({ref:String(r?.phx_ref??""),peer:Ha(e,r)})))}}applyPresenceDiff(t){for(const[e,n]of Object.entries(t.joins??{})){const s=n?.metas;if(!Array.isArray(s))continue;const r=this.presence.get(e)??[];for(const o of s){const a={ref:String(o?.phx_ref??""),peer:Ha(e,o)},l=r.filter(c=>c.ref!==a.ref);l.push(a),r.length=0,r.push(...l)}this.presence.set(e,r)}for(const[e,n]of Object.entries(t.leaves??{})){const s=this.presence.get(e),r=n?.metas;if(!s||!Array.isArray(r))continue;const o=new Set(r.map(l=>String(l?.phx_ref??""))),a=s.filter(l=>!o.has(l.ref));a.length===0?this.presence.delete(e):this.presence.set(e,a)}}rebuildPeers(){const t=[];for(const e of this.presence.values())e.length>0&&t.push(e[e.length-1].peer);t.sort((e,n)=>e.id<n.id?-1:e.id>n.id?1:0),this.peers=t,this.onPresence?.()}}async function Ih(i,t,e,n,s,r,o,a){try{await fetch(`${i.replace(/\/$/,"")}/rest/v1/round_results`,{method:"POST",headers:{apikey:t,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({room:e.slice(0,32),player:n.slice(0,16),territory_permille:Math.min(Math.max(Math.round(s),0),1e3),kills:Math.min(Math.max(Math.round(r),0),200),won:o,humans:Math.min(Math.max(Math.round(a),1),8)})})}catch(l){console.warn("round report failed",l)}}async function Dh(i,t,e){try{const n=new Date(Date.now()-864e5).toISOString(),s=`select=player,territory_permille,won&created_at=gte.${encodeURIComponent(n)}&order=territory_permille.desc&limit=${e}`,r=await fetch(`${i.replace(/\/$/,"")}/rest/v1/round_results?${s}`,{headers:{apikey:t}});return r.ok?(await r.json()).map(a=>({player:String(a.player),permille:Number(a.territory_permille)|0,won:!!a.won})):null}catch{return null}}const sr="w"+Math.random().toString(36).slice(2,13),ia=()=>performance.now()/1e3;function Ga(){const i=new na({peerId:sr,name:"",spectator:!0,targetCycles:7,seed:0},null);return i.start(ia()),i}function Uh(i){const t=new na({peerId:sr,name:i,spectator:!1,targetCycles:6,seed:0},null);return t.start(ia()),t}function Va(i,t,e=!0){const n=new Lh(jo,Zo,i,{id:sr,name:t,joinMs:Date.now(),version:so});n.connect();const s=new na({peerId:sr,name:t,spectator:!1,targetCycles:6,seed:0,botsEnabled:e},n);return s.start(ia()),s}function Nh(i){Ih(jo,Zo,i.room,i.player,i.permille,i.kills,i.won,i.humans)}function Fh(i=5){return Dh(jo,Zo,i)}async function Oh(){return!1}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sa="170",Bh=0,Wa=1,kh=2,lc=1,zh=2,Sn=3,Hn=0,Re=1,en=2,Tn=0,Di=1,ds=2,Xa=3,qa=4,Hh=5,Qn=100,Gh=101,Vh=102,Wh=103,Xh=104,qh=200,Yh=201,$h=202,Kh=203,ro=204,oo=205,jh=206,Zh=207,Jh=208,Qh=209,tu=210,eu=211,nu=212,iu=213,su=214,ao=0,lo=1,co=2,ki=3,ho=4,uo=5,fo=6,po=7,cc=0,ru=1,ou=2,bn=0,au=1,lu=2,cu=3,hu=4,uu=5,fu=6,du=7,hc=300,zi=301,Hi=302,mo=303,go=304,ur=306,_o=1e3,ni=1001,vo=1002,Ce=1003,pu=1004,ys=1005,ln=1006,Mr=1007,ii=1008,fn=1009,uc=1010,fc=1011,ps=1012,ra=1013,ri=1014,cn=1015,un=1016,oa=1017,aa=1018,Gi=1020,dc=35902,pc=1021,mc=1022,Ye=1023,gc=1024,_c=1025,Ui=1026,Vi=1027,la=1028,ca=1029,vc=1030,ha=1031,ua=1033,$s=33776,Ks=33777,js=33778,Zs=33779,xo=35840,Mo=35841,So=35842,yo=35843,Eo=36196,To=37492,bo=37496,Ao=37808,wo=37809,Ro=37810,Co=37811,Po=37812,Lo=37813,Io=37814,Do=37815,Uo=37816,No=37817,Fo=37818,Oo=37819,Bo=37820,ko=37821,Js=36492,zo=36494,Ho=36495,xc=36283,Go=36284,Vo=36285,Wo=36286,mu=3200,gu=3201,_u=0,vu=1,yn="",ke="srgb",Yi="srgb-linear",fr="linear",Zt="srgb",ui=7680,Ya=519,xu=512,Mu=513,Su=514,Mc=515,yu=516,Eu=517,Tu=518,bu=519,$a=35044,Ka=35048,ja="300 es",En=2e3,rr=2001;class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sr=Math.PI/180,Xo=180/Math.PI;function _s(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ue(i,t,e){return Math.max(t,Math.min(e,i))}function Au(i,t){return(i%t+t)%t}function yr(i,t,e){return(1-e)*i+e*t}function Qi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,o,a,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],b=s[1],T=s[4],S=s[7],B=s[2],A=s[5],C=s[8];return r[0]=o*x+a*b+l*B,r[3]=o*m+a*T+l*A,r[6]=o*d+a*S+l*C,r[1]=c*x+h*b+f*B,r[4]=c*m+h*T+f*A,r[7]=c*d+h*S+f*C,r[2]=u*x+p*b+g*B,r[5]=u*m+p*T+g*A,r[8]=u*d+p*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=h*o-a*c,u=a*l-h*r,p=c*r-o*l,g=e*f+n*u+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Er.makeScale(t,e)),this}rotate(t){return this.premultiply(Er.makeRotation(-t)),this}translate(t,e){return this.premultiply(Er.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Er=new It;function Sc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wu(){const i=or("canvas");return i.style.display="block",i}const Za={};function hs(i){i in Za||(Za[i]=!0,console.warn(i))}function Ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Cu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Wt={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Zt&&(i.r=An(i.r),i.g=An(i.g),i.b=An(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Zt&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yn?fr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function An(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ja=[.64,.33,.3,.6,.15,.06],Qa=[.2126,.7152,.0722],tl=[.3127,.329],el=new It().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new It().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Wt.define({[Yi]:{primaries:Ja,whitePoint:tl,transfer:fr,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Ja,whitePoint:tl,transfer:Zt,toXYZ:el,fromXYZ:nl,luminanceCoefficients:Qa,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let fi;class Lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{fi===void 0&&(fi=or("canvas")),fi.width=t.width,fi.height=t.height;const n=fi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=fi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=An(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(An(e[n]/255)*255):e[n]=An(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Iu=0;class yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tr(s[o].image)):r.push(Tr(s[o]))}else r=Tr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Du=0;class Pe extends $i{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ni,s=ni,r=ln,o=ii,a=Ye,l=fn,c=Pe.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=_s(),this.name="",this.source=new yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case vo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case vo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=hc;Pe.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(c+1)/2,S=(p+1)/2,B=(d+1)/2,A=(h+u)/4,C=(f+x)/4,U=(g+m)/4;return T>S&&T>B?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=C/n):S>B?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=U/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=C/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uu extends $i{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $e extends Uu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ec extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nu extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3];const u=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(f!==x||l!==u||c!==p||h!==g){let m=1-a;const d=l*u+c*p+h*g+f*x,b=d>=0?1:-1,T=1-d*d;if(T>Number.EPSILON){const B=Math.sqrt(T),A=Math.atan2(B,d*b);m=Math.sin(m*A)/B,a=Math.sin(a*A)/B}const S=a*b;if(l=l*m+u*S,c=c*m+p*S,h=h*m+g*S,f=f*m+x*S,m===1-a){const B=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=B,c*=B,h*=B,f*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[o],u=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*f+l*p-c*u,t[e+1]=l*g+h*u+c*f-a*p,t[e+2]=c*g+h*p+a*u-l*f,t[e+3]=h*g-a*f-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),f=a(r/2),u=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"YXZ":this._x=u*h*f+c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"ZXY":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f-u*p*g;break;case"ZYX":this._x=u*h*f-c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f+u*p*g;break;case"YZX":this._x=u*h*f+c*p*g,this._y=c*p*f+u*h*g,this._z=c*h*g-u*p*f,this._w=c*h*f-u*p*g;break;case"XZY":this._x=u*h*f-c*p*g,this._y=c*p*f-u*h*g,this._z=c*h*g+u*p*f,this._w=c*h*f+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(il.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(il.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*h,this.y=n+l*h+a*c-r*f,this.z=s+l*f+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return br.copy(this).projectOnVector(t),this.sub(br)}reflect(t){return this.sub(br.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const br=new D,il=new wn;class ci{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Es.copy(n.boundingBox)),Es.applyMatrix4(t.matrixWorld),this.union(Es)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ts),Ts.subVectors(this.max,ts),di.subVectors(t.a,ts),pi.subVectors(t.b,ts),mi.subVectors(t.c,ts),In.subVectors(pi,di),Dn.subVectors(mi,pi),Wn.subVectors(di,mi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!Ar(e,di,pi,mi,Ts)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,di,pi,mi,Ts))?!1:(bs.crossVectors(In,Dn),e=[bs.x,bs.y,bs.z],Ar(e,di,pi,mi,Ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,Es=new ci,di=new D,pi=new D,mi=new D,In=new D,Dn=new D,Wn=new D,ts=new D,Ts=new D,bs=new D,Xn=new D;function Ar(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),c=e.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fu=new ci,es=new D,wr=new D;class vs{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;es.subVectors(t,this.center);const e=es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(es.copy(t.center).add(wr)),this.expandByPoint(es.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new D,Rr=new D,As=new D,Un=new D,Cr=new D,ws=new D,Pr=new D;class Ou{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Rr.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(As),a=Un.dot(this.direction),l=-Un.dot(As),c=Un.lengthSq(),h=Math.abs(1-o*o);let f,u,p,g;if(h>0)if(f=o*l-a,u=o*a-l,g=r*h,f>=0)if(u>=-g)if(u<=g){const x=1/h;f*=x,u*=x,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-l),r),p=-f*f+u*(u+2*l)+c);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rr).addScaledVector(As,u),p}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(a=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),ws.subVectors(n,t),Pr.crossVectors(Cr,ws);let o=this.direction.dot(Pr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(ws.crossVectors(Un,ws));if(l<0)return null;const c=a*this.direction.dot(Cr.cross(Un));if(c<0||l+c>o)return null;const h=-a*Un.dot(Pr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,s,r,o,a,l,c,h,f,u,p,g,x,m){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,f,u,p,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,f,u,p,g,x,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/gi.setFromMatrixColumn(t,0).length(),r=1/gi.setFromMatrixColumn(t,1).length(),o=1/gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*f,g=c*h,x=c*f;e[0]=u+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*f,g=c*h,x=c*f;e[0]=u-x*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*f,g=a*h,x=a*f;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*f,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*f,e[8]=g*f+p,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*f+g,e[10]=u-x*f}else if(t.order==="XZY"){const u=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+x,e[5]=o*h,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*h,e[10]=x*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bu,t,ku)}lookAt(t,e,n){const s=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Nn.crossVectors(n,Oe),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Nn.crossVectors(n,Oe)),Nn.normalize(),Rs.crossVectors(Oe,Nn),s[0]=Nn.x,s[4]=Rs.x,s[8]=Oe.x,s[1]=Nn.y,s[5]=Rs.y,s[9]=Oe.y,s[2]=Nn.z,s[6]=Rs.z,s[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],b=n[3],T=n[7],S=n[11],B=n[15],A=s[0],C=s[4],U=s[8],y=s[12],M=s[1],w=s[5],q=s[9],k=s[13],W=s[2],j=s[6],G=s[10],tt=s[14],H=s[3],st=s[7],ht=s[11],St=s[15];return r[0]=o*A+a*M+l*W+c*H,r[4]=o*C+a*w+l*j+c*st,r[8]=o*U+a*q+l*G+c*ht,r[12]=o*y+a*k+l*tt+c*St,r[1]=h*A+f*M+u*W+p*H,r[5]=h*C+f*w+u*j+p*st,r[9]=h*U+f*q+u*G+p*ht,r[13]=h*y+f*k+u*tt+p*St,r[2]=g*A+x*M+m*W+d*H,r[6]=g*C+x*w+m*j+d*st,r[10]=g*U+x*q+m*G+d*ht,r[14]=g*y+x*k+m*tt+d*St,r[3]=b*A+T*M+S*W+B*H,r[7]=b*C+T*w+S*j+B*st,r[11]=b*U+T*q+S*G+B*ht,r[15]=b*y+T*k+S*tt+B*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],d=t[15];return g*(+r*l*f-s*c*f-r*a*u+n*c*u+s*a*p-n*l*p)+x*(+e*l*p-e*c*u+r*o*u-s*o*p+s*c*h-r*l*h)+m*(+e*c*f-e*a*p-r*o*f+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*f+e*a*u+s*o*f-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],d=t[15],b=f*m*c-x*u*c+x*l*p-a*m*p-f*l*d+a*u*d,T=g*u*c-h*m*c-g*l*p+o*m*p+h*l*d-o*u*d,S=h*x*c-g*f*c+g*a*p-o*x*p-h*a*d+o*f*d,B=g*f*l-h*x*l-g*a*u+o*x*u+h*a*m-o*f*m,A=e*b+n*T+s*S+r*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=b*C,t[1]=(x*u*r-f*m*r-x*s*p+n*m*p+f*s*d-n*u*d)*C,t[2]=(a*m*r-x*l*r+x*s*c-n*m*c-a*s*d+n*l*d)*C,t[3]=(f*l*r-a*u*r-f*s*c+n*u*c+a*s*p-n*l*p)*C,t[4]=T*C,t[5]=(h*m*r-g*u*r+g*s*p-e*m*p-h*s*d+e*u*d)*C,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*C,t[7]=(o*u*r-h*l*r+h*s*c-e*u*c-o*s*p+e*l*p)*C,t[8]=S*C,t[9]=(g*f*r-h*x*r-g*n*p+e*x*p+h*n*d-e*f*d)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*d+e*a*d)*C,t[11]=(h*a*r-o*f*r-h*n*c+e*f*c+o*n*p-e*a*p)*C,t[12]=B*C,t[13]=(h*x*s-g*f*s+g*n*u-e*x*u-h*n*m+e*f*m)*C,t[14]=(g*a*s-o*x*s-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*f*s-h*a*s+h*n*l-e*f*l-o*n*u+e*a*u)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,f=a+a,u=r*c,p=r*h,g=r*f,x=o*h,m=o*f,d=a*f,b=l*c,T=l*h,S=l*f,B=n.x,A=n.y,C=n.z;return s[0]=(1-(x+d))*B,s[1]=(p+S)*B,s[2]=(g-T)*B,s[3]=0,s[4]=(p-S)*A,s[5]=(1-(u+d))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+T)*C,s[9]=(m-b)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=gi.set(s[0],s[1],s[2]).length();const o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/r,h=1/o,f=1/a;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=f,Qe.elements[9]*=f,Qe.elements[10]*=f,e.setFromRotationMatrix(Qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=En){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s);let p,g;if(a===En)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===rr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En){const l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(o-r),u=(e+t)*c,p=(n+s)*h;let g,x;if(a===En)g=(o+r)*f,x=-2*f;else if(a===rr)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const gi=new D,Qe=new ne,Bu=new D(0,0,0),ku=new D(1,1,1),Nn=new D,Rs=new D,Oe=new D,sl=new ne,rl=new wn;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rl.setFromEuler(this),this.setFromQuaternion(rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zu=0;const ol=new D,_i=new wn,vn=new ne,Cs=new D,ns=new D,Hu=new D,Gu=new wn,al=new D(1,0,0),ll=new D(0,1,0),cl=new D(0,0,1),hl={type:"added"},Vu={type:"removed"},vi={type:"childadded",child:null},Lr={type:"childremoved",child:null};class ze extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new D,e=new dn,n=new wn,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new It}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.multiply(_i),this}rotateOnWorldAxis(t,e){return _i.setFromAxisAngle(t,e),this.quaternion.premultiply(_i),this}rotateX(t){return this.rotateOnAxis(al,t)}rotateY(t){return this.rotateOnAxis(ll,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(al,t)}translateY(t){return this.translateOnAxis(ll,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Cs.copy(t):Cs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ns,Cs,this.up):vn.lookAt(Cs,ns,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(vn),this.quaternion.premultiply(_i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hl),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vu),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hl),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,t,Hu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ns,Gu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),f=o(t.shapes),u=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ze.DEFAULT_UP=new D(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new D,xn=new D,Ir=new D,Mn=new D,xi=new D,Mi=new D,ul=new D,Dr=new D,Ur=new D,Nr=new D,Fr=new de,Or=new de,Br=new de;class nn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){tn.subVectors(s,e),xn.subVectors(n,e),Ir.subVectors(t,e);const o=tn.dot(tn),a=tn.dot(xn),l=tn.dot(Ir),c=xn.dot(xn),h=xn.dot(Ir),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const u=1/f,p=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Mn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mn.x),l.addScaledVector(o,Mn.y),l.addScaledVector(a,Mn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Fr.setScalar(0),Or.setScalar(0),Br.setScalar(0),Fr.fromBufferAttribute(t,e),Or.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Fr,r.x),o.addScaledVector(Or,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;xi.subVectors(s,n),Mi.subVectors(r,n),Dr.subVectors(t,n);const l=xi.dot(Dr),c=Mi.dot(Dr);if(l<=0&&c<=0)return e.copy(n);Ur.subVectors(t,s);const h=xi.dot(Ur),f=Mi.dot(Ur);if(h>=0&&f<=h)return e.copy(s);const u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(xi,o);Nr.subVectors(t,r);const p=xi.dot(Nr),g=Mi.dot(Nr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Mi,a);const m=h*g-p*f;if(m<=0&&f-h>=0&&p-g>=0)return ul.subVectors(r,s),a=(f-h)/(f-h+(p-g)),e.copy(s).addScaledVector(ul,a);const d=1/(m+x+u);return o=x*d,a=u*d,e.copy(n).addScaledVector(xi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ps={h:0,s:0,l:0};function kr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Wt.workingColorSpace){if(t=Au(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kr(o,r,t+1/3),this.g=kr(o,r,t),this.b=kr(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=bc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=An(t.r),this.g=An(t.g),this.b=An(t.b),this}copyLinearToSRGB(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Wt.fromWorkingColorSpace(be.copy(this),t),Math.round(Ue(be.r*255,0,255))*65536+Math.round(Ue(be.g*255,0,255))*256+Math.round(Ue(be.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(be.copy(this),e);const n=be.r,s=be.g,r=be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=h<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=ke){Wt.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,s=be.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ps);const n=yr(Fn.h,Ps.h,e),s=yr(Fn.s,Ps.s,e),r=yr(Fn.l,Ps.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Ht;Ht.NAMES=bc;let Wu=0;class dr extends $i{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=_s(),this.name="",this.blending=Di,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ro,this.blendDst=oo,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ro&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wi extends dr{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new D,Ls=new Nt;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$a,this.updateRanges=[],this.gpuType=cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ls.fromBufferAttribute(this,e),Ls.applyMatrix3(t),this.setXY(e,Ls.x,Ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Qi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Qi(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Qi(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Qi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Qi(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$a&&(t.usage=this.usage),t}}class Ac extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Le extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xu=0;const Ve=new ne,zr=new ze,Si=new D,Be=new ci,is=new ci,Se=new D;class sn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sc(t)?wc:Ac)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return zr.lookAt(t),zr.updateMatrix(),this.applyMatrix4(zr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Be.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Be.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Be.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Be.min),this.boundingBox.expandByPoint(Be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Be.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];is.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Be.min,is.min),Be.expandByPoint(Se),Se.addVectors(Be.max,is.max),Be.expandByPoint(Se)):(Be.expandByPoint(is.min),Be.expandByPoint(is.max))}Be.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(t,c),Se.add(Si)),s=Math.max(s,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new D,l[U]=new D;const c=new D,h=new D,f=new D,u=new Nt,p=new Nt,g=new Nt,x=new D,m=new D;function d(U,y,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,M),u.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,M),h.sub(c),f.sub(c),p.sub(u),g.sub(u);const w=1/(p.x*g.y-g.x*p.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(w),m.copy(f).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(w),a[U].add(x),a[y].add(x),a[M].add(x),l[U].add(m),l[y].add(m),l[M].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){const M=b[U],w=M.start,q=M.count;for(let k=w,W=w+q;k<W;k+=3)d(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const T=new D,S=new D,B=new D,A=new D;function C(U){B.fromBufferAttribute(s,U),A.copy(B);const y=a[U];T.copy(y),T.sub(B.multiplyScalar(B.dot(y))).normalize(),S.crossVectors(A,y);const w=S.dot(l[U])<0?-1:1;o.setXYZW(U,T.x,T.y,T.z,w)}for(let U=0,y=b.length;U<y;++U){const M=b[U],w=M.start,q=M.count;for(let k=w,W=w+q;k<W;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,f=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,f=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let d=0;d<h;d++)u[g++]=c[p++]}return new Ne(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new sn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,f=c.length;h<f;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],f=r[c];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fl=new ne,qn=new Ou,Is=new vs,dl=new D,Ds=new D,Us=new D,Ns=new D,Hr=new D,Fs=new D,pl=new D,Os=new D;class ve extends ze{constructor(t=new sn,e=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],f=r[l];h!==0&&(Hr.fromBufferAttribute(f,t),o?Fs.addScaledVector(Hr,h):Fs.addScaledVector(Hr.sub(e),h))}e.add(Fs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Is.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Is,dl)===null||qn.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(fl.copy(r).invert(),qn.copy(t.ray).applyMatrix4(fl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,B=T;S<B;S+=3){const A=a.getX(S),C=a.getX(S+1),U=a.getX(S+2);s=Bs(this,d,t,n,c,h,f,A,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=a.getX(m),T=a.getX(m+1),S=a.getX(m+2);s=Bs(this,o,t,n,c,h,f,b,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],d=o[m.materialIndex],b=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,B=T;S<B;S+=3){const A=S,C=S+1,U=S+2;s=Bs(this,d,t,n,c,h,f,A,C,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const b=m,T=m+1,S=m+2;s=Bs(this,o,t,n,c,h,f,b,T,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function qu(i,t,e,n,s,r,o,a){let l;if(t.side===Re?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Hn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:i}}function Bs(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Ds),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ns);const h=qu(i,t,e,n,Ds,Us,Ns,pl);if(h){const f=new D;nn.getBarycoord(pl,Ds,Us,Ns,f),s&&(h.uv=nn.getInterpolatedAttribute(s,a,l,c,f,new Nt)),r&&(h.uv1=nn.getInterpolatedAttribute(r,a,l,c,f,new Nt)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};nn.getNormal(Ds,Us,Ns,u.normal),h.face=u,h.barycoord=f}return h}class Rn extends sn{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function g(x,m,d,b,T,S,B,A,C,U,y){const M=S/C,w=B/U,q=S/2,k=B/2,W=A/2,j=C+1,G=U+1;let tt=0,H=0;const st=new D;for(let ht=0;ht<G;ht++){const St=ht*w-k;for(let Ft=0;Ft<j;Ft++){const Jt=Ft*M-q;st[x]=Jt*b,st[m]=St*T,st[d]=W,c.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),f.push(Ft/C),f.push(1-ht/U),tt+=1}}for(let ht=0;ht<U;ht++)for(let St=0;St<C;St++){const Ft=u+St+j*ht,Jt=u+St+j*(ht+1),X=u+(St+1)+j*(ht+1),et=u+(St+1)+j*ht;l.push(Ft,Jt,et),l.push(Jt,X,et),H+=6}a.addGroup(p,H,y),p+=H,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function Yu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Rc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const ar={clone:Xi,merge:Ae};var $u=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ku=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pe extends dr{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$u,this.fragmentShader=Ku,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Yu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cc extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new D,ml=new Nt,gl=new Nt;class qe extends Cc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xo*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,ml,gl),e.subVectors(gl,ml)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yi=-90,Ei=1;class ju extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qe(yi,Ei,t,e);s.layers=this.layers,this.add(s);const r=new qe(yi,Ei,t,e);r.layers=this.layers,this.add(r);const o=new qe(yi,Ei,t,e);o.layers=this.layers,this.add(o);const a=new qe(yi,Ei,t,e);a.layers=this.layers,this.add(a);const l=new qe(yi,Ei,t,e);l.layers=this.layers,this.add(l);const c=new qe(yi,Ei,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Pc extends Pe{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:zi,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Zu extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Rn(5,5,5),r=new pe({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Tn});r.uniforms.tEquirect.value=e;const o=new ve(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=ln),new ju(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Gr=new D,Ju=new D,Qu=new It;class jn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Gr.subVectors(n,e).cross(Ju.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Qu.getNormalMatrix(t),s=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new vs,ks=new D;class Lc{constructor(t=new jn,e=new jn,n=new jn,s=new jn,r=new jn,o=new jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],p=s[8],g=s[9],x=s[10],m=s[11],d=s[12],b=s[13],T=s[14],S=s[15];if(n[0].setComponents(l-r,u-c,m-p,S-d).normalize(),n[1].setComponents(l+r,u+c,m+p,S+d).normalize(),n[2].setComponents(l+o,u+h,m+g,S+b).normalize(),n[3].setComponents(l-o,u-h,m-g,S-b).normalize(),n[4].setComponents(l-a,u-f,m-x,S-T).normalize(),e===En)n[5].setComponents(l+a,u+f,m+x,S+T).normalize();else if(e===rr)n[5].setComponents(a,f,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ic(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function tf(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const h=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,h);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class oi extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,f=t/a,u=e/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){const b=d*u-o;for(let T=0;T<c;T++){const S=T*f-r;g.push(S,-b,0),x.push(0,0,1),m.push(T/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<a;b++){const T=b+c*d,S=b+c*(d+1),B=b+1+c*(d+1),A=b+1+c*d;p.push(T,S,A),p.push(S,B,A)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,of=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Af=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,If="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ed=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,od=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ad=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ld=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ud=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Md=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ed=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Td=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ad=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Hd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ep=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ap=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ut={alphahash_fragment:ef,alphahash_pars_fragment:nf,alphamap_fragment:sf,alphamap_pars_fragment:rf,alphatest_fragment:of,alphatest_pars_fragment:af,aomap_fragment:lf,aomap_pars_fragment:cf,batching_pars_vertex:hf,batching_vertex:uf,begin_vertex:ff,beginnormal_vertex:df,bsdfs:pf,iridescence_fragment:mf,bumpmap_pars_fragment:gf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:vf,clipping_planes_pars_vertex:xf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:yf,color_pars_vertex:Ef,color_vertex:Tf,common:bf,cube_uv_reflection_fragment:Af,defaultnormal_vertex:wf,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:Pf,emissivemap_pars_fragment:Lf,colorspace_fragment:If,colorspace_pars_fragment:Df,envmap_fragment:Uf,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:$f,envmap_vertex:Bf,fog_vertex:kf,fog_pars_vertex:zf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Kf,lights_toon_pars_fragment:jf,lights_phong_fragment:Zf,lights_phong_pars_fragment:Jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:td,lights_fragment_begin:ed,lights_fragment_maps:nd,lights_fragment_end:id,logdepthbuf_fragment:sd,logdepthbuf_pars_fragment:rd,logdepthbuf_pars_vertex:od,logdepthbuf_vertex:ad,map_fragment:ld,map_pars_fragment:cd,map_particle_fragment:hd,map_particle_pars_fragment:ud,metalnessmap_fragment:fd,metalnessmap_pars_fragment:dd,morphinstance_vertex:pd,morphcolor_vertex:md,morphnormal_vertex:gd,morphtarget_pars_vertex:_d,morphtarget_vertex:vd,normal_fragment_begin:xd,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:yd,normal_vertex:Ed,normalmap_pars_fragment:Td,clearcoat_normal_fragment_begin:bd,clearcoat_normal_fragment_maps:Ad,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Rd,opaque_fragment:Cd,packing:Pd,premultiplied_alpha_fragment:Ld,project_vertex:Id,dithering_fragment:Dd,dithering_pars_fragment:Ud,roughnessmap_fragment:Nd,roughnessmap_pars_fragment:Fd,shadowmap_pars_fragment:Od,shadowmap_pars_vertex:Bd,shadowmap_vertex:kd,shadowmask_pars_fragment:zd,skinbase_vertex:Hd,skinning_pars_vertex:Gd,skinning_vertex:Vd,skinnormal_vertex:Wd,specularmap_fragment:Xd,specularmap_pars_fragment:qd,tonemapping_fragment:Yd,tonemapping_pars_fragment:$d,transmission_fragment:Kd,transmission_pars_fragment:jd,uv_pars_fragment:Zd,uv_pars_vertex:Jd,uv_vertex:Qd,worldpos_vertex:tp,background_vert:ep,background_frag:np,backgroundCube_vert:ip,backgroundCube_frag:sp,cube_vert:rp,cube_frag:op,depth_vert:ap,depth_frag:lp,distanceRGBA_vert:cp,distanceRGBA_frag:hp,equirect_vert:up,equirect_frag:fp,linedashed_vert:dp,linedashed_frag:pp,meshbasic_vert:mp,meshbasic_frag:gp,meshlambert_vert:_p,meshlambert_frag:vp,meshmatcap_vert:xp,meshmatcap_frag:Mp,meshnormal_vert:Sp,meshnormal_frag:yp,meshphong_vert:Ep,meshphong_frag:Tp,meshphysical_vert:bp,meshphysical_frag:Ap,meshtoon_vert:wp,meshtoon_frag:Rp,points_vert:Cp,points_frag:Pp,shadow_vert:Lp,shadow_frag:Ip,sprite_vert:Dp,sprite_frag:Up},nt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},an={basic:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ae([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ae([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ae([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ae([nt.points,nt.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ae([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ae([nt.common,nt.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ae([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ae([nt.sprite,nt.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Ae([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Ae([nt.lights,nt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};an.physical={uniforms:Ae([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const zs={r:0,b:0,g:0},$n=new dn,Np=new ne;function Fp(i,t,e,n,s,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,f=null,u=0,p=null;function g(b){let T=b.isScene===!0?b.background:null;return T&&T.isTexture&&(T=(b.backgroundBlurriness>0?e:t).get(T)),T}function x(b){let T=!1;const S=g(b);S===null?d(a,l):S&&S.isColor&&(d(S,1),T=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,T){const S=g(T);S&&(S.isCubeTexture||S.mapping===ur)?(h===void 0&&(h=new ve(new Rn(1,1,1),new pe({name:"BackgroundCubeMaterial",uniforms:Xi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(T.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Np.makeRotationFromEuler($n)),h.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Zt,(f!==S||u!==S.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,f=S,u=S.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ve(new oi(2,2),new pe({name:"BackgroundMaterial",uniforms:Xi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(S.colorSpace)!==Zt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||u!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=S,u=S.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,T){b.getRGB(zs,Rc(i)),n.buffers.color.setClear(zs.r,zs.g,zs.b,T,o)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),l=T,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(a,l)},render:x,addToRenderList:m}}function Op(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(M,w,q,k,W){let j=!1;const G=f(k,q,w);r!==G&&(r=G,c(r.object)),j=p(M,k,q,W),j&&g(M,k,q,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(M,w,q,k),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,w,q){const k=q.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let j=W[w.id];j===void 0&&(j={},W[w.id]=j);let G=j[k];return G===void 0&&(G=u(l()),j[k]=G),G}function u(M){const w=[],q=[],k=[];for(let W=0;W<e;W++)w[W]=0,q[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:q,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,w,q,k){const W=r.attributes,j=w.attributes;let G=0;const tt=q.getAttributes();for(const H in tt)if(tt[H].location>=0){const ht=W[H];let St=j[H];if(St===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(St=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(St=M.instanceColor)),ht===void 0||ht.attribute!==St||St&&ht.data!==St.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(M,w,q,k){const W={},j=w.attributes;let G=0;const tt=q.getAttributes();for(const H in tt)if(tt[H].location>=0){let ht=j[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const St={};St.attribute=ht,ht&&ht.data&&(St.data=ht.data),W[H]=St,G++}r.attributes=W,r.attributesNum=G,r.index=k}function x(){const M=r.newAttributes;for(let w=0,q=M.length;w<q;w++)M[w]=0}function m(M){d(M,0)}function d(M,w){const q=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;q[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),W[M]!==w&&(i.vertexAttribDivisor(M,w),W[M]=w)}function b(){const M=r.newAttributes,w=r.enabledAttributes;for(let q=0,k=w.length;q<k;q++)w[q]!==M[q]&&(i.disableVertexAttribArray(q),w[q]=0)}function T(M,w,q,k,W,j,G){G===!0?i.vertexAttribIPointer(M,w,q,W,j):i.vertexAttribPointer(M,w,q,k,W,j)}function S(M,w,q,k){x();const W=k.attributes,j=q.getAttributes(),G=w.defaultAttributeValues;for(const tt in j){const H=j[tt];if(H.location>=0){let st=W[tt];if(st===void 0&&(tt==="instanceMatrix"&&M.instanceMatrix&&(st=M.instanceMatrix),tt==="instanceColor"&&M.instanceColor&&(st=M.instanceColor)),st!==void 0){const ht=st.normalized,St=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const Jt=Ft.buffer,X=Ft.type,et=Ft.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||st.gpuType===ra;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<H.locationSize;Ot++)d(H.location+Ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<H.locationSize;Ot++)m(H.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Ot=0;Ot<H.locationSize;Ot++)T(H.location+Ot,St/H.locationSize,X,ht,bt*et,(Rt+St/H.locationSize*Ot)*et,vt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<H.locationSize;rt++)d(H.location+rt,st.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<H.locationSize;rt++)m(H.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let rt=0;rt<H.locationSize;rt++)T(H.location+rt,St/H.locationSize,X,ht,St*et,St/H.locationSize*rt*et,vt)}}else if(G!==void 0){const ht=G[tt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}b()}function B(){U();for(const M in n){const w=n[M];for(const q in w){const k=w[q];for(const W in k)h(k[W].object),delete k[W];delete w[q]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const q in w){const k=w[q];for(const W in k)h(k[W].object),delete k[W];delete w[q]}delete n[M.id]}function C(M){for(const w in n){const q=n[w];if(q[M.id]===void 0)continue;const k=q[M.id];for(const W in k)h(k[W].object),delete k[W];delete q[M.id]}}function U(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Bp(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function a(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let p=0;for(let g=0;g<f;g++)p+=h[g];e.update(p,n,1)}function l(c,h,f,u){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Ye&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const U=C===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==fn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==cn&&!U)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:B,maxSamples:A}}function zp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new jn,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,T=b*4;let S=d.clippingState||null;l.value=S,S=h(g,u,T,p);for(let B=0;B!==T;++B)S[B]=e[B];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==x;++T,S+=4)o.copy(f[T]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Hp(i){let t=new WeakMap;function e(o,a){return a===mo?o.mapping=zi:a===go&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===mo||a===go)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Zu(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Dc extends Cc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Pi=4,_l=[.125,.215,.35,.446,.526,.582],ti=20,Vr=new Dc,vl=new Ht;let Wr=null,Xr=0,qr=0,Yr=!1;const Zn=(1+Math.sqrt(5))/2,Ti=1/Zn,xl=[new D(-Zn,Ti,0),new D(Zn,Ti,0),new D(-Ti,0,Zn),new D(Ti,0,Zn),new D(0,Zn,-Ti),new D(0,Zn,Ti),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ml{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wr,Xr,qr),this._renderer.xr.enabled=Yr,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===zi||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wr=this._renderer.getRenderTarget(),Xr=this._renderer.getActiveCubeFace(),qr=this._renderer.getActiveMipmapLevel(),Yr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:un,format:Ye,colorSpace:Yi,depthBuffer:!1},s=Sl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gp(r)),this._blurMaterial=Vp(r,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s){const a=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(vl),h.toneMapping=bn,h.autoClear=!1;const p=new Wi({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new ve(new Rn,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(vl),x=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):b===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const T=this._cubeSize;Hs(s,b*T,d>2?T:0,T,T),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===zi||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=xl[(s-r-1)%xl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new ve(this._lodPlanes[s],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*ti-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ti;m>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const d=[];let b=0;for(let C=0;C<ti;++C){const U=C/x,y=Math.exp(-U*U/2);d.push(y),C===0?b+=y:C<m&&(b+=2*y)}for(let C=0;C<d.length;C++)d[C]=d[C]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=d,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:T}=this;u.dTheta.value=g,u.mipInt.value=T-n;const S=this._sizeLods[s],B=3*S*(s>T-Pi?s-T+Pi:0),A=4*(this._cubeSize-S);Hs(e,B,A,3*S,2*S),l.setRenderTarget(e),l.render(f,Vr)}}function Gp(i){const t=[],e=[],n=[];let s=i;const r=i-Pi+1+_l.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Pi?l=_l[o-i+Pi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,g=6,x=3,m=2,d=1,b=new Float32Array(x*g*p),T=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,U=A>2?0:-1,y=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];b.set(y,x*g*A),T.set(u,m*g*A);const M=[A,A,A,A,A,A];S.set(M,d*g*A)}const B=new sn;B.setAttribute("position",new Ne(b,x)),B.setAttribute("uv",new Ne(T,m)),B.setAttribute("faceIndex",new Ne(S,d)),t.push(B),s>Pi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sl(i,t,e){const n=new $e(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vp(i,t,e){const n=new Float32Array(ti),s=new D(0,1,0);return new pe({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function yl(){return new pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function El(){return new pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mo||l===go,h=l===zi||l===Hi;if(c||h){let f=t.get(a);const u=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Ml(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Ml(i)),f=c?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qp(i,t,e,n){const s={},r=new WeakMap;function o(f){const u=f.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)t.remove(x[m])}u.removeEventListener("dispose",o),delete s[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(f,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(f){const u=f.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)t.update(x[m],i.ARRAY_BUFFER)}}function c(f){const u=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let T=0,S=b.length;T<S;T+=3){const B=b[T+0],A=b[T+1],C=b[T+2];u.push(B,A,A,C,C,B)}}else if(g!==void 0){const b=g.array;x=g.version;for(let T=0,S=b.length/3-1;T<S;T+=3){const B=T+0,A=T+1,C=T+2;u.push(B,A,A,C,C,B)}}else return;const m=new(Sc(u)?wc:Ac)(u,1);m.version=x;const d=r.get(f);d&&t.remove(d),r.set(f,m)}function h(f){const u=r.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:h}}function Yp(i,t,e){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){i.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,u*o,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function f(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<u.length;d++)c(u[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,x,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*x[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function $p(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kp(i,t,e){const n=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let S=a.attributes.position.count*T,B=1;S>t.maxTextureSize&&(B=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const A=new Float32Array(S*B*4*f),C=new Ec(A,S,B,f);C.type=cn,C.needsUpdate=!0;const U=T*4;for(let M=0;M<f;M++){const w=m[M],q=d[M],k=b[M],W=S*B*4*M;for(let j=0;j<w.count;j++){const G=j*U;p===!0&&(s.fromBufferAttribute(w,j),A[W+G+0]=s.x,A[W+G+1]=s.y,A[W+G+2]=s.z,A[W+G+3]=0),g===!0&&(s.fromBufferAttribute(q,j),A[W+G+4]=s.x,A[W+G+5]=s.y,A[W+G+6]=s.z,A[W+G+7]=0),x===!0&&(s.fromBufferAttribute(k,j),A[W+G+8]=s.x,A[W+G+9]=s.y,A[W+G+10]=s.z,A[W+G+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:C,size:new Nt(S,B)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function jp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Uc extends Pe{constructor(t,e,n,s,r,o,a,l,c,h=Ui){if(h!==Ui&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ui&&(n=ri),n===void 0&&h===Vi&&(n=Gi),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Nc=new Pe,Tl=new Uc(1,1),Fc=new Ec,Oc=new Nu,Bc=new Pc,bl=[],Al=[],wl=new Float32Array(16),Rl=new Float32Array(9),Cl=new Float32Array(4);function Ki(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=bl[s];if(r===void 0&&(r=new Float32Array(s),bl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function pr(i,t){let e=Al[t];e===void 0&&(e=new Int32Array(t),Al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Zp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Qp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Cl.set(n),i.uniformMatrix2fv(this.addr,!1,Cl),Me(e,n)}}function nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Rl.set(n),i.uniformMatrix3fv(this.addr,!1,Rl),Me(e,n)}}function im(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;wl.set(n),i.uniformMatrix4fv(this.addr,!1,wl),Me(e,n)}}function sm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function fm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Tl.compareFunction=Mc,r=Tl):r=Nc,e.setTexture2D(t||r,s)}function dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oc,s)}function pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bc,s)}function mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Fc,s)}function gm(i){switch(i){case 5126:return Zp;case 35664:return Jp;case 35665:return Qp;case 35666:return tm;case 35674:return em;case 35675:return nm;case 35676:return im;case 5124:case 35670:return sm;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return am;case 5125:return lm;case 36294:return cm;case 36295:return hm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return dm;case 35680:case 36300:case 36308:case 36293:return pm;case 36289:case 36303:case 36311:case 36292:return mm}}function _m(i,t){i.uniform1fv(this.addr,t)}function vm(i,t){const e=Ki(t,this.size,2);i.uniform2fv(this.addr,e)}function xm(i,t){const e=Ki(t,this.size,3);i.uniform3fv(this.addr,e)}function Mm(i,t){const e=Ki(t,this.size,4);i.uniform4fv(this.addr,e)}function Sm(i,t){const e=Ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ym(i,t){const e=Ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Em(i,t){const e=Ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tm(i,t){i.uniform1iv(this.addr,t)}function bm(i,t){i.uniform2iv(this.addr,t)}function Am(i,t){i.uniform3iv(this.addr,t)}function wm(i,t){i.uniform4iv(this.addr,t)}function Rm(i,t){i.uniform1uiv(this.addr,t)}function Cm(i,t){i.uniform2uiv(this.addr,t)}function Pm(i,t){i.uniform3uiv(this.addr,t)}function Lm(i,t){i.uniform4uiv(this.addr,t)}function Im(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Nc,r[o])}function Dm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Oc,r[o])}function Um(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Bc,r[o])}function Nm(i,t,e){const n=this.cache,s=t.length,r=pr(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Fc,r[o])}function Fm(i){switch(i){case 5126:return _m;case 35664:return vm;case 35665:return xm;case 35666:return Mm;case 35674:return Sm;case 35675:return ym;case 35676:return Em;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Am;case 35669:case 35673:return wm;case 5125:return Rm;case 36294:return Cm;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}class Om{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gm(e.type)}}class Bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fm(e.type)}}class km{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function Pl(i,t){i.seq.push(t),i.map[t.id]=t}function zm(i,t,e){const n=i.name,s=n.length;for($r.lastIndex=0;;){const r=$r.exec(n),o=$r.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Pl(e,c===void 0?new Om(a,i,t):new Bm(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new km(a),Pl(e,f)),e=f}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);zm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ll(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Hm=37297;let Gm=0;function Vm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Il=new It;function Wm(i){Wt._getMatrix(Il,Wt.workingColorSpace,i);const t=`mat3( ${Il.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case fr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Dl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Vm(i.getShaderSource(t),o)}else return s}function Xm(i,t){const e=Wm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qm(i,t){let e;switch(t){case au:e="Linear";break;case lu:e="Reinhard";break;case cu:e="Cineon";break;case hu:e="ACESFilmic";break;case fu:e="AgX";break;case du:e="Neutral";break;case uu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Gs=new D;function Ym(){Wt.getLuminanceCoefficients(Gs);const i=Gs.x.toFixed(4),t=Gs.y.toFixed(4),e=Gs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function Km(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function us(i){return i!==""}function Ul(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(Zm,Qm)}const Jm=new Map;function Qm(i,t){let e=Ut[t];if(e===void 0){const n=Jm.get(t);if(n!==void 0)e=Ut[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(tg,eg)}function eg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ng(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function ig(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case Hi:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function rg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case ru:t="ENVMAP_BLENDING_MIX";break;case ou:t="ENVMAP_BLENDING_ADD";break}return t}function og(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function ag(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ng(e),c=ig(e),h=sg(e),f=rg(e),u=og(e),p=$m(e),g=Km(r),x=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(us).join(`
`),d.length>0&&(d+=`
`)):(m=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),d=[Ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bn?"#define TONE_MAPPING":"",e.toneMapping!==bn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==bn?qm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Xm("linearToOutputTexel",e.outputColorSpace),Ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(us).join(`
`)),o=qo(o),o=Ul(o,e),o=Nl(o,e),a=qo(a),a=Ul(a,e),a=Nl(a,e),o=Fl(o),a=Fl(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const T=b+m+o,S=b+d+a,B=Ll(s,s.VERTEX_SHADER,T),A=Ll(s,s.FRAGMENT_SHADER,S);s.attachShader(x,B),s.attachShader(x,A),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(w){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(B).trim(),W=s.getShaderInfoLog(A).trim();let j=!0,G=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,B,A);else{const tt=Dl(s,B,"vertex"),H=Dl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+q+`
`+tt+`
`+H)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||W==="")&&(G=!1);G&&(w.diagnostics={runnable:j,programLog:q,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:d}})}s.deleteShader(B),s.deleteShader(A),U=new Qs(s,x),y=jm(s,x)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Hm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=A,this}let lg=0;class cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hg(t),e.set(t,n)),n}}class hg{constructor(t){this.id=lg++,this.code=t,this.usedTimes=0}}function ug(i,t,e,n,s,r,o){const a=new Tc,l=new cg,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,w,q,k){const W=q.fog,j=k.geometry,G=y.isMeshStandardMaterial?q.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||G),H=tt&&tt.mapping===ur?tt.image.height:null,st=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,St=ht!==void 0?ht.length:0;let Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let Jt,X,et,vt;if(st){const jt=an[st];Jt=jt.vertexShader,X=jt.fragmentShader}else Jt=y.vertexShader,X=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Rt=k.isInstancedMesh===!0,Ot=k.isBatchedMesh===!0,he=!!y.map,Gt=!!y.matcap,me=!!tt,I=!!y.aoMap,He=!!y.lightMap,Bt=!!y.bumpMap,kt=!!y.normalMap,Et=!!y.displacementMap,ie=!!y.emissiveMap,yt=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,N=y.clearcoat>0,Y=y.dispersion>0,K=y.iridescence>0,V=y.sheen>0,xt=y.transmission>0,ot=_&&!!y.anisotropyMap,ut=N&&!!y.clearcoatMap,Vt=N&&!!y.clearcoatNormalMap,Z=N&&!!y.clearcoatRoughnessMap,ft=K&&!!y.iridescenceMap,Tt=K&&!!y.iridescenceThicknessMap,At=V&&!!y.sheenColorMap,dt=V&&!!y.sheenRoughnessMap,zt=!!y.specularMap,Dt=!!y.specularColorMap,te=!!y.specularIntensityMap,R=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,z=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,at=!!y.alphaHash,Ct=!!y.extensions;let ue=bn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ue=i.toneMapping);const Ee={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:Jt,fragmentShader:X,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&k._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&k.instanceColor!==null,instancingMorph:Rt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Yi,alphaToCoverage:!!y.alphaToCoverage,map:he,matcap:Gt,envMap:me,envMapMode:me&&tt.mapping,envMapCubeUVHeight:H,aoMap:I,lightMap:He,bumpMap:Bt,normalMap:kt,displacementMap:u&&Et,emissiveMap:ie,normalMapObjectSpace:kt&&y.normalMapType===vu,normalMapTangentSpace:kt&&y.normalMapType===_u,metalnessMap:yt,roughnessMap:E,anisotropy:_,anisotropyMap:ot,clearcoat:N,clearcoatMap:ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Z,dispersion:Y,iridescence:K,iridescenceMap:ft,iridescenceThicknessMap:Tt,sheen:V,sheenColorMap:At,sheenRoughnessMap:dt,specularMap:zt,specularColorMap:Dt,specularIntensityMap:te,transmission:xt,transmissionMap:R,thicknessMap:it,gradientMap:z,opaque:y.transparent===!1&&y.blending===Di&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:y.combine,mapUv:he&&x(y.map.channel),aoMapUv:I&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:Bt&&x(y.bumpMap.channel),normalMapUv:kt&&x(y.normalMap.channel),displacementMapUv:Et&&x(y.displacementMap.channel),emissiveMapUv:ie&&x(y.emissiveMap.channel),metalnessMapUv:yt&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:ot&&x(y.anisotropyMap.channel),clearcoatMapUv:ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&x(y.sheenRoughnessMap.channel),specularMapUv:zt&&x(y.specularMap.channel),specularColorMapUv:Dt&&x(y.specularColorMap.channel),specularIntensityMapUv:te&&x(y.specularIntensityMap.channel),transmissionMapUv:R&&x(y.transmissionMap.channel),thicknessMapUv:it&&x(y.thicknessMap.channel),alphaMapUv:$&&x(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(kt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(he||$),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:bt,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:he&&y.map.isVideoTexture===!0&&Wt.getTransfer(y.map.colorSpace)===Zt,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(y.emissiveMap.colorSpace)===Zt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===Re,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ct&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function d(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)M.push(w),M.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(b(M,y),T(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function b(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function T(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=g[y.type];let w;if(M){const q=an[M];w=ar.clone(q.uniforms)}else w=y.uniforms;return w}function B(y,M){let w;for(let q=0,k=h.length;q<k;q++){const W=h[q];if(W.cacheKey===M){w=W,++w.usedTimes;break}}return w===void 0&&(w=new ag(i,M,y,r),h.push(w)),w}function A(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function C(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:B,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:U}}function fg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Bl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(f,u,p,g,x,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:u,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=u,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),t++,d}function a(f,u,p,g,x,m){const d=o(f,u,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(f,u,p,g,x,m){const d=o(f,u,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(f,u){e.length>1&&e.sort(f||dg),n.length>1&&n.sort(u||Bl),s.length>1&&s.sort(u||Bl)}function h(){for(let f=t,u=i.length;f<u;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function pg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new kl,i.set(n,[o])):s>=r.length?(o=new kl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ht};break;case"SpotLight":e={position:new D,direction:new D,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function gg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let _g=0;function vg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xg(i){const t=new mg,e=gg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ne,o=new ne;function a(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,b=0,T=0,S=0,B=0,A=0,C=0;c.sort(vg);for(let y=0,M=c.length;y<M;y++){const w=c[y],q=w.color,k=w.intensity,W=w.distance,j=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=q.r*k,f+=q.g*k,u+=q.b*k;else if(w.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(w.sh.coefficients[G],k);C++}else if(w.isDirectionalLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const tt=w.shadow,H=e.get(w);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=w.shadow.matrix,b++}n.directional[p]=G,p++}else if(w.isSpotLight){const G=t.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(q).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,n.spot[x]=G;const tt=w.shadow;if(w.map&&(n.spotLightMap[B]=w.map,B++,tt.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[x]=tt.matrix,w.castShadow){const H=e.get(w);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=j,S++}x++}else if(w.isRectAreaLight){const G=t.get(w);G.color.copy(q).multiplyScalar(k),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=G,m++}else if(w.isPointLight){const G=t.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const tt=w.shadow,H=e.get(w);H.shadowIntensity=tt.intensity,H.shadowBias=tt.bias,H.shadowNormalBias=tt.normalBias,H.shadowRadius=tt.radius,H.shadowMapSize=tt.mapSize,H.shadowCameraNear=tt.camera.near,H.shadowCameraFar=tt.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=w.shadow.matrix,T++}n.point[g]=G,g++}else if(w.isHemisphereLight){const G=t.get(w);G.skyColor.copy(w.color).multiplyScalar(k),G.groundColor.copy(w.groundColor).multiplyScalar(k),n.hemi[d]=G,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==m||U.hemiLength!==d||U.numDirectionalShadows!==b||U.numPointShadows!==T||U.numSpotShadows!==S||U.numSpotMaps!==B||U.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=S+B-A,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,U.directionalLength=p,U.pointLength=g,U.spotLength=x,U.rectAreaLength=m,U.hemiLength=d,U.numDirectionalShadows=b,U.numPointShadows=T,U.numSpotShadows=S,U.numSpotMaps=B,U.numLightProbes=C,n.version=_g++)}function l(c,h){let f=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const T=c[d];if(T.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(T.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const S=n.point[u];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(m),u++}else if(T.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function zl(i){const t=new xg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new zl(i),t.set(s,[a])):r>=o.length?(a=new zl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sg extends dr{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yg extends dr{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bg(i,t,e){let n=new Lc;const s=new Nt,r=new Nt,o=new de,a=new Sg({depthPacking:gu}),l=new yg,c={},h=e.maxTextureSize,f={[Hn]:Re,[Re]:Hn,[en]:en},u=new pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Eg,fragmentShader:Tg}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new sn;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ve(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let d=this.type;this.render=function(A,C,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Tn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const k=d!==Sn&&this.type===Sn,W=d===Sn&&this.type!==Sn;for(let j=0,G=A.length;j<G;j++){const tt=A[j],H=tt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const st=H.getFrameExtents();if(s.multiply(st),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||k===!0||W===!0){const St=this.type!==Sn?{minFilter:Ce,magFilter:Ce}:{};H.map!==null&&H.map.dispose(),H.map=new $e(s.x,s.y,St),H.map.texture.name=tt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let St=0;St<ht;St++){const Ft=H.getViewport(St);o.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),q.viewport(o),H.updateMatrices(tt,St),n=H.getFrustum(),S(C,U,H.camera,tt,this.type)}H.isPointLightShadow!==!0&&this.type===Sn&&b(H,U),H.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,M,w)};function b(A,C){const U=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $e(s.x,s.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,U,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,U,p,x,null)}function T(A,C,U,y){let M=null;const w=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)M=w;else if(M=U.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=M.uuid,k=C.uuid;let W=c[q];W===void 0&&(W={},c[q]=W);let j=W[k];j===void 0&&(j=M.clone(),W[k]=j,C.addEventListener("dispose",B)),M=j}if(M.visible=C.visible,M.wireframe=C.wireframe,y===Sn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=U}return M}function S(A,C,U,y,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Sn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const j=k.groups;for(let G=0,tt=j.length;G<tt;G++){const H=j[G],st=W[H.materialIndex];if(st&&st.visible){const ht=T(A,st,y,M);A.onBeforeShadow(i,A,C,U,k,ht,H),i.renderBufferDirect(U,null,k,ht,A,H),A.onAfterShadow(i,A,C,U,k,ht,H)}}}else if(W.visible){const j=T(A,W,y,M);A.onBeforeShadow(i,A,C,U,k,j,null),i.renderBufferDirect(U,null,k,j,A,null),A.onAfterShadow(i,A,C,U,k,j,null)}}const q=A.children;for(let k=0,W=q.length;k<W;k++)S(q[k],C,U,y,M)}function B(A){A.target.removeEventListener("dispose",B);for(const U in c){const y=c[U],M=A.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const Ag={[ao]:lo,[co]:fo,[ho]:po,[ki]:uo,[lo]:ao,[fo]:co,[po]:ho,[uo]:ki};function wg(i,t){function e(){let R=!1;const it=new de;let z=null;const $=new de(0,0,0,0);return{setMask:function(ct){z!==ct&&!R&&(i.colorMask(ct,ct,ct,ct),z=ct)},setLocked:function(ct){R=ct},setClear:function(ct,at,Ct,ue,Ee){Ee===!0&&(ct*=ue,at*=ue,Ct*=ue),it.set(ct,at,Ct,ue),$.equals(it)===!1&&(i.clearColor(ct,at,Ct,ue),$.copy(it))},reset:function(){R=!1,z=null,$.set(-1,0,0,0)}}}function n(){let R=!1,it=!1,z=null,$=null,ct=null;return{setReversed:function(at){if(it!==at){const Ct=t.get("EXT_clip_control");it?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT);const ue=ct;ct=null,this.setClear(ue)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){z!==at&&!R&&(i.depthMask(at),z=at)},setFunc:function(at){if(it&&(at=Ag[at]),$!==at){switch(at){case ao:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){R=at},setClear:function(at){ct!==at&&(it&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){R=!1,z=null,$=null,ct=null,it=!1}}}function s(){let R=!1,it=null,z=null,$=null,ct=null,at=null,Ct=null,ue=null,Ee=null;return{setTest:function(jt){R||(jt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!R&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,Ke,pn){(z!==jt||$!==Ke||ct!==pn)&&(i.stencilFunc(jt,Ke,pn),z=jt,$=Ke,ct=pn)},setOp:function(jt,Ke,pn){(at!==jt||Ct!==Ke||ue!==pn)&&(i.stencilOp(jt,Ke,pn),at=jt,Ct=Ke,ue=pn)},setLocked:function(jt){R=jt},setClear:function(jt){Ee!==jt&&(i.clearStencil(jt),Ee=jt)},reset:function(){R=!1,it=null,z=null,$=null,ct=null,at=null,Ct=null,ue=null,Ee=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,T=null,S=null,B=null,A=null,C=new Ht(0,0,0),U=0,y=!1,M=null,w=null,q=null,k=null,W=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,tt=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=tt>=1):H.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=tt>=2);let st=null,ht={};const St=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),Jt=new de().fromArray(St),X=new de().fromArray(Ft);function et(R,it,z,$){const ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(R,at),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ct=0;Ct<z;Ct++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Ct,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(ki),Bt(!1),kt(Wa),rt(i.CULL_FACE),I(Tn);function rt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function bt(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Rt(R,it){return f[R]!==it?(i.bindFramebuffer(R,it),f[R]=it,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(R,it){let z=p,$=!1;if(R){z=u.get(it),z===void 0&&(z=[],u.set(it,z));const ct=R.textures;if(z.length!==ct.length||z[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Ct=ct.length;at<Ct;at++)z[at]=i.COLOR_ATTACHMENT0+at;z.length=ct.length,$=!0}}else z[0]!==i.BACK&&(z[0]=i.BACK,$=!0);$&&i.drawBuffers(z)}function he(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const Gt={[Qn]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Vh]:i.FUNC_REVERSE_SUBTRACT};Gt[Wh]=i.MIN,Gt[Xh]=i.MAX;const me={[qh]:i.ZERO,[Yh]:i.ONE,[$h]:i.SRC_COLOR,[ro]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[Jh]:i.DST_COLOR,[jh]:i.DST_ALPHA,[Kh]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[Zh]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function I(R,it,z,$,ct,at,Ct,ue,Ee,jt){if(R===Tn){x===!0&&(bt(i.BLEND),x=!1);return}if(x===!1&&(rt(i.BLEND),x=!0),R!==Hh){if(R!==m||jt!==y){if((d!==Qn||S!==Qn)&&(i.blendEquation(i.FUNC_ADD),d=Qn,S=Qn),jt)switch(R){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,T=null,B=null,A=null,C.set(0,0,0),U=0,m=R,y=jt}return}ct=ct||it,at=at||z,Ct=Ct||$,(it!==d||ct!==S)&&(i.blendEquationSeparate(Gt[it],Gt[ct]),d=it,S=ct),(z!==b||$!==T||at!==B||Ct!==A)&&(i.blendFuncSeparate(me[z],me[$],me[at],me[Ct]),b=z,T=$,B=at,A=Ct),(ue.equals(C)===!1||Ee!==U)&&(i.blendColor(ue.r,ue.g,ue.b,Ee),C.copy(ue),U=Ee),m=R,y=!1}function He(R,it){R.side===en?bt(i.CULL_FACE):rt(i.CULL_FACE);let z=R.side===Re;it&&(z=!z),Bt(z),R.blending===Di&&R.transparent===!1?I(Tn):I(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),r.setMask(R.colorWrite);const $=R.stencilWrite;a.setTest($),$&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(R){M!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),M=R)}function kt(R){R!==Bh?(rt(i.CULL_FACE),R!==w&&(R===Wa?i.cullFace(i.BACK):R===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),w=R}function Et(R){R!==q&&(G&&i.lineWidth(R),q=R)}function ie(R,it,z){R?(rt(i.POLYGON_OFFSET_FILL),(k!==it||W!==z)&&(i.polygonOffset(it,z),k=it,W=z)):bt(i.POLYGON_OFFSET_FILL)}function yt(R){R?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function E(R){R===void 0&&(R=i.TEXTURE0+j-1),st!==R&&(i.activeTexture(R),st=R)}function _(R,it,z){z===void 0&&(st===null?z=i.TEXTURE0+j-1:z=st);let $=ht[z];$===void 0&&($={type:void 0,texture:void 0},ht[z]=$),($.type!==R||$.texture!==it)&&(st!==z&&(i.activeTexture(z),st=z),i.bindTexture(R,it||vt[R]),$.type=R,$.texture=it)}function N(){const R=ht[st];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(R){Jt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Jt.copy(R))}function dt(R){X.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),X.copy(R))}function zt(R,it){let z=c.get(it);z===void 0&&(z=new WeakMap,c.set(it,z));let $=z.get(R);$===void 0&&($=i.getUniformBlockIndex(it,R.name),z.set(R,$))}function Dt(R,it){const $=c.get(it).get(R);l.get(it)!==$&&(i.uniformBlockBinding(it,$,R.__bindingPointIndex),l.set(it,$))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},f={},u=new WeakMap,p=[],g=null,x=!1,m=null,d=null,b=null,T=null,S=null,B=null,A=null,C=new Ht(0,0,0),U=0,y=!1,M=null,w=null,q=null,k=null,W=null,Jt.set(0,0,i.canvas.width,i.canvas.height),X.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:bt,bindFramebuffer:Rt,drawBuffers:Ot,useProgram:he,setBlending:I,setMaterial:He,setFlipSided:Bt,setCullFace:kt,setLineWidth:Et,setPolygonOffset:ie,setScissorTest:yt,activeTexture:E,bindTexture:_,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:K,texImage2D:ft,texImage3D:Tt,updateUBOMapping:zt,uniformBlockBinding:Dt,texStorage2D:Vt,texStorage3D:Z,texSubImage2D:V,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:At,viewport:dt,reset:te}}function Hl(i,t,e,n){const s=Rg(n);switch(e){case pc:return i*t;case gc:return i*t;case _c:return i*t*2;case la:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case vc:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case mc:return i*t*3/s.components*s.byteLength;case Ye:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case $s:case Ks:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case js:case Zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Mo:case yo:return Math.max(i,16)*Math.max(t,8)/4;case xo:case So:return Math.max(i,8)*Math.max(t,8)/2;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Js:case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xc:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rg(i){switch(i){case fn:case uc:return{byteLength:1,components:1};case ps:case fc:case un:return{byteLength:2,components:1};case oa:case aa:return{byteLength:2,components:4};case ri:case ra:case cn:return{byteLength:4,components:1};case dc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cg(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Nt,h=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):or("canvas")}function x(E,_,N){let Y=1;const K=yt(E);if((K.width>N||K.height>N)&&(Y=N/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(Y*K.width),xt=Math.floor(Y*K.height);f===void 0&&(f=g(V,xt));const ot=_?g(V,xt):f;return ot.width=V,ot.height=xt,ot.getContext("2d").drawImage(E,0,0,V,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+V+"x"+xt+")."),ot}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function m(E){return E.generateMipmaps}function d(E){i.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,N,Y,K=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),_===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),_===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),_===i.RGBA){const xt=K?fr:Wt.getTransfer(Y);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=xt===Zt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(E,_){let N;return E?_===null||_===ri||_===Gi?N=i.DEPTH24_STENCIL8:_===cn?N=i.DEPTH32F_STENCIL8:_===ps&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ri||_===Gi?N=i.DEPTH_COMPONENT24:_===cn?N=i.DEPTH_COMPONENT32F:_===ps&&(N=i.DEPTH_COMPONENT16),N}function B(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ce&&E.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function A(E){const _=E.target;_.removeEventListener("dispose",A),U(_),_.isVideoTexture&&h.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),M(_)}function U(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,Y=u.get(N);if(Y){const K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(E),Object.keys(Y).length===0&&u.delete(N)}n.remove(E)}function y(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const N=E.source,Y=u.get(N);delete Y[_.__cacheKey],o.memory.textures--}function M(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let K=0;K<_.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let Y=0,K=N.length;Y<K;Y++){const V=n.get(N[Y]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),o.memory.textures--),n.remove(N[Y])}n.remove(E)}let w=0;function q(){w=0}function k(){const E=w;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),w+=1,E}function W(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const N=n.get(E);if(E.isVideoTexture&&Et(E),E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){const Y=E.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,E,_);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function G(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){X(N,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function tt(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){X(N,E,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function H(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){et(N,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const st={[_o]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[vo]:i.MIRRORED_REPEAT},ht={[Ce]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[ys]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Mr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},St={[xu]:i.NEVER,[bu]:i.ALWAYS,[Mu]:i.LESS,[Mc]:i.LEQUAL,[Su]:i.EQUAL,[Tu]:i.GEQUAL,[yu]:i.GREATER,[Eu]:i.NOTEQUAL};function Ft(E,_){if(_.type===cn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===Mr||_.magFilter===ys||_.magFilter===ii||_.minFilter===ln||_.minFilter===Mr||_.minFilter===ys||_.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,st[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ce||_.minFilter!==ys&&_.minFilter!==ii||_.type===cn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",A));const Y=_.source;let K=u.get(Y);K===void 0&&(K={},u.set(Y,K));const V=W(_);if(V!==E.__cacheKey){K[V]===void 0&&(K[V]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),K[V].usedTimes++;const xt=K[E.__cacheKey];xt!==void 0&&(K[E.__cacheKey].usedTimes--,xt.usedTimes===0&&y(_)),E.__cacheKey=V,E.__webglTexture=K[V].texture}return N}function X(E,_,N){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const K=Jt(E,_),V=_.source;e.bindTexture(Y,E.__webglTexture,i.TEXTURE0+N);const xt=n.get(V);if(V.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+N);const ot=Wt.getPrimaries(Wt.workingColorSpace),ut=_.colorSpace===yn?null:Wt.getPrimaries(_.colorSpace),Vt=_.colorSpace===yn||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let Z=x(_.image,!1,s.maxTextureSize);Z=ie(_,Z);const ft=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type);let At=T(_.internalFormat,ft,Tt,_.colorSpace,_.isVideoTexture);Ft(Y,_);let dt;const zt=_.mipmaps,Dt=_.isVideoTexture!==!0,te=xt.__version===void 0||K===!0,R=V.dataReady,it=B(_,Z);if(_.isDepthTexture)At=S(_.format===Vi,_.type),te&&(Dt?e.texStorage2D(i.TEXTURE_2D,1,At,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,At,Z.width,Z.height,0,ft,Tt,null));else if(_.isDataTexture)if(zt.length>0){Dt&&te&&e.texStorage2D(i.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let z=0,$=zt.length;z<$;z++)dt=zt[z],Dt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,z,At,dt.width,dt.height,0,ft,Tt,dt.data);_.generateMipmaps=!1}else Dt?(te&&e.texStorage2D(i.TEXTURE_2D,it,At,Z.width,Z.height),R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,ft,Tt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,At,Z.width,Z.height,0,ft,Tt,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Dt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,zt[0].width,zt[0].height,Z.depth);for(let z=0,$=zt.length;z<$;z++)if(dt=zt[z],_.format!==Ye)if(ft!==null)if(Dt){if(R)if(_.layerUpdates.size>0){const ct=Hl(dt.width,dt.height,_.format,_.type);for(const at of _.layerUpdates){const Ct=dt.data.subarray(at*ct/dt.data.BYTES_PER_ELEMENT,(at+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,at,dt.width,dt.height,1,ft,Ct)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,Z.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,z,At,dt.width,dt.height,Z.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Dt?R&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,z,0,0,0,dt.width,dt.height,Z.depth,ft,Tt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,z,At,dt.width,dt.height,Z.depth,0,ft,Tt,dt.data)}else{Dt&&te&&e.texStorage2D(i.TEXTURE_2D,it,At,zt[0].width,zt[0].height);for(let z=0,$=zt.length;z<$;z++)dt=zt[z],_.format!==Ye?ft!==null?Dt?R&&e.compressedTexSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,z,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,dt.width,dt.height,ft,Tt,dt.data):e.texImage2D(i.TEXTURE_2D,z,At,dt.width,dt.height,0,ft,Tt,dt.data)}else if(_.isDataArrayTexture)if(Dt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,At,Z.width,Z.height,Z.depth),R)if(_.layerUpdates.size>0){const z=Hl(Z.width,Z.height,_.format,_.type);for(const $ of _.layerUpdates){const ct=Z.data.subarray($*z/Z.data.BYTES_PER_ELEMENT,($+1)*z/Z.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,Z.width,Z.height,1,ft,Tt,ct)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ft,Tt,Z.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,Z.width,Z.height,Z.depth,0,ft,Tt,Z.data);else if(_.isData3DTexture)Dt?(te&&e.texStorage3D(i.TEXTURE_3D,it,At,Z.width,Z.height,Z.depth),R&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ft,Tt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,At,Z.width,Z.height,Z.depth,0,ft,Tt,Z.data);else if(_.isFramebufferTexture){if(te)if(Dt)e.texStorage2D(i.TEXTURE_2D,it,At,Z.width,Z.height);else{let z=Z.width,$=Z.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,At,z,$,0,ft,Tt,null),z>>=1,$>>=1}}else if(zt.length>0){if(Dt&&te){const z=yt(zt[0]);e.texStorage2D(i.TEXTURE_2D,it,At,z.width,z.height)}for(let z=0,$=zt.length;z<$;z++)dt=zt[z],Dt?R&&e.texSubImage2D(i.TEXTURE_2D,z,0,0,ft,Tt,dt):e.texImage2D(i.TEXTURE_2D,z,At,ft,Tt,dt);_.generateMipmaps=!1}else if(Dt){if(te){const z=yt(Z);e.texStorage2D(i.TEXTURE_2D,it,At,z.width,z.height)}R&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Tt,Z)}else e.texImage2D(i.TEXTURE_2D,0,At,ft,Tt,Z);m(_)&&d(Y),xt.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function et(E,_,N){if(_.image.length!==6)return;const Y=Jt(E,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const V=n.get(K);if(K.version!==V.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const xt=Wt.getPrimaries(Wt.workingColorSpace),ot=_.colorSpace===yn?null:Wt.getPrimaries(_.colorSpace),ut=_.colorSpace===yn||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Vt=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Vt&&!Z?ft[$]=x(_.image[$],!0,s.maxCubemapSize):ft[$]=Z?_.image[$].image:_.image[$],ft[$]=ie(_,ft[$]);const Tt=ft[0],At=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),zt=T(_.internalFormat,At,dt,_.colorSpace),Dt=_.isVideoTexture!==!0,te=V.__version===void 0||Y===!0,R=K.dataReady;let it=B(_,Tt);Ft(i.TEXTURE_CUBE_MAP,_);let z;if(Vt){Dt&&te&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,Tt.width,Tt.height);for(let $=0;$<6;$++){z=ft[$].mipmaps;for(let ct=0;ct<z.length;ct++){const at=z[ct];_.format!==Ye?At!==null?Dt?R&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,At,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,zt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,At,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,zt,at.width,at.height,0,At,dt,at.data)}}}else{if(z=_.mipmaps,Dt&&te){z.length>0&&it++;const $=yt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,zt,$.width,$.height)}for(let $=0;$<6;$++)if(Z){Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,At,dt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,ft[$].width,ft[$].height,0,At,dt,ft[$].data);for(let ct=0;ct<z.length;ct++){const Ct=z[ct].image[$].image;Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Ct.width,Ct.height,At,dt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,zt,Ct.width,Ct.height,0,At,dt,Ct.data)}}else{Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,At,dt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,zt,At,dt,ft[$]);for(let ct=0;ct<z.length;ct++){const at=z[ct];Dt?R&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,At,dt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,zt,At,dt,at.image[$])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),V.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function vt(E,_,N,Y,K,V){const xt=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ut=T(N.internalFormat,xt,ot,N.colorSpace),Vt=n.get(_),Z=n.get(N);if(Z.__renderTarget=_,!Vt.__hasExternalTextures){const ft=Math.max(1,_.width>>V),Tt=Math.max(1,_.height>>V);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,V,ut,ft,Tt,_.depth,0,xt,ot,null):e.texImage2D(K,V,ut,ft,Tt,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,Z.__webglTexture,0,Bt(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,Z.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(E,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const Y=_.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,V=S(_.stencilBuffer,K),xt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Bt(_);kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,V,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,E)}else{const Y=_.textures;for(let K=0;K<Y.length;K++){const V=Y[K],xt=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),ut=T(V.internalFormat,xt,ot,V.colorSpace),Vt=Bt(_);N&&kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ut,_.width,_.height):kt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ut,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ut,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const K=Y.__webglTexture,V=Bt(_);if(_.depthTexture.format===Ui)kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===Vi)kt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Rt(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const Y=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Y}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(_.__webglDepthbuffer[Y],E,!1);else{const K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,V)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),rt(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(E,_,N){const Y=n.get(E);_!==void 0&&vt(Y.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Rt(E)}function he(E){const _=E.texture,N=n.get(E),Y=n.get(_);E.addEventListener("dispose",C);const K=E.textures,V=E.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++),V){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ut=0;ut<_.mipmaps.length;ut++)N.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ut=K.length;ot<ut;ot++){const Vt=n.get(K[ot]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&kt(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){const ut=K[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);const Vt=r.convert(ut.format,ut.colorSpace),Z=r.convert(ut.type),ft=T(ut.internalFormat,Vt,Z,ut.colorSpace,E.isXRRenderTarget===!0),Tt=Bt(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,ft,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)vt(N.__webglFramebuffer[ot][ut],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else vt(N.__webglFramebuffer[ot],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=K.length;ot<ut;ot++){const Vt=K[ot],Z=n.get(Vt);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Ft(i.TEXTURE_2D,Vt),vt(N.__webglFramebuffer,E,Vt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Vt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Ft(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)vt(N.__webglFramebuffer[ut],E,_,i.COLOR_ATTACHMENT0,ot,ut);else vt(N.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,ot,0);m(_)&&d(ot),e.unbindTexture()}E.depthBuffer&&Rt(E)}function Gt(E){const _=E.textures;for(let N=0,Y=_.length;N<Y;N++){const K=_[N];if(m(K)){const V=b(E),xt=n.get(K).__webglTexture;e.bindTexture(V,xt),d(V),e.unbindTexture()}}}const me=[],I=[];function He(E){if(E.samples>0){if(kt(E)===!1){const _=E.textures,N=E.width,Y=E.height;let K=i.COLOR_BUFFER_BIT;const V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(E),ot=_.length>1;if(ot)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Vt=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,K,i.NEAREST),l===!0&&(me.length=0,I.length=0,me.push(i.COLOR_ATTACHMENT0+ut),E.depthBuffer&&E.resolveDepthBuffer===!1&&(me.push(V),I.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Vt=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Bt(E){return Math.min(s.maxSamples,E.samples)}function kt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Et(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function ie(E,_){const N=E.colorSpace,Y=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Yi&&N!==yn&&(Wt.getTransfer(N)===Zt?(Y!==Ye||K!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function yt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=tt,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=kt}function Pg(i,t){function e(n,s=yn){let r;const o=Wt.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===aa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return i.BYTE;if(n===fc)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===ra)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===pc)return i.ALPHA;if(n===mc)return i.RGB;if(n===Ye)return i.RGBA;if(n===gc)return i.LUMINANCE;if(n===_c)return i.LUMINANCE_ALPHA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Vi)return i.DEPTH_STENCIL;if(n===la)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===vc)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===$s||n===Ks||n===js||n===Zs)if(o===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$s)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$s)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xo||n===Mo||n===So||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===So)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Eo||n===To||n===bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Eo||n===To)return o===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===bo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ao||n===wo||n===Ro||n===Co||n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===ko)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ao)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Po)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Io)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Uo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===No)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ko)return o===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Js||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Js)return o===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===Go||n===Vo||n===Wo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Lg extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class si extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ig={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ig)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new si;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ug=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ng{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pe({vertexShader:Dg,fragmentShader:Ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fg extends $i{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,f=null,u=null,p=null,g=null;const x=new Ng,m=e.getContextAttributes();let d=null,b=null;const T=[],S=[],B=new Nt;let A=null;const C=new qe;C.viewport=new de;const U=new qe;U.viewport=new de;const y=[C,U],M=new Lg;let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=T[X];return et===void 0&&(et=new Kr,T[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=T[X];return et===void 0&&(et=new Kr,T[X]=et),et.getGripSpace()},this.getHand=function(X){let et=T[X];return et===void 0&&(et=new Kr,T[X]=et),et.getHandSpace()};function k(X){const et=S.indexOf(X.inputSource);if(et===-1)return;const vt=T[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||o),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let X=0;X<T.length;X++){const et=S[X];et!==null&&(S[X]=null,T[X].disconnect(et))}w=null,q=null,x.reset(),t.setRenderTarget(d),p=null,u=null,f=null,s=null,b=null,Jt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new $e(p.framebufferWidth,p.framebufferHeight,{format:Ye,type:fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Vi:Ui,vt=m.stencil?Gi:ri);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(bt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new $e(u.textureWidth,u.textureHeight,{format:Ye,type:fn,depthTexture:new Uc(u.textureWidth,u.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Jt.setContext(s),Jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(X){for(let et=0;et<X.removed.length;et++){const vt=X.removed[et],rt=S.indexOf(vt);rt>=0&&(S[rt]=null,T[rt].disconnect(vt))}for(let et=0;et<X.added.length;et++){const vt=X.added[et];let rt=S.indexOf(vt);if(rt===-1){for(let Rt=0;Rt<T.length;Rt++)if(Rt>=S.length){S.push(vt),rt=Rt;break}else if(S[Rt]===null){S[Rt]=vt,rt=Rt;break}if(rt===-1)break}const bt=T[rt];bt&&bt.connect(vt)}}const G=new D,tt=new D;function H(X,et,vt){G.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);const rt=G.distanceTo(tt),bt=et.projectionMatrix.elements,Rt=vt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),he=bt[14]/(bt[10]+1),Gt=(bt[9]+1)/bt[5],me=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],He=(Rt[8]+1)/Rt[0],Bt=Ot*I,kt=Ot*He,Et=rt/(-I+He),ie=Et*-I;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ie),X.translateZ(Et),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ot+Et,E=he+Et,_=Bt-ie,N=kt+(rt-ie),Y=Gt*he/E*yt,K=me*he/E*yt;X.projectionMatrix.makePerspective(_,N,Y,K,yt,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function st(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),M.near=U.near=C.near=et,M.far=U.far=C.far=vt,(w!==M.near||q!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,q=M.far),C.layers.mask=X.layers.mask|2,U.layers.mask=X.layers.mask|4,M.layers.mask=C.layers.mask|U.layers.mask;const rt=X.parent,bt=M.cameras;st(M,rt);for(let Rt=0;Rt<bt.length;Rt++)st(bt[Rt],rt);bt.length===2?H(M,C,U):M.projectionMatrix.copy(C.projectionMatrix),ht(X,M,rt)};function ht(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let St=null;function Ft(X,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let rt=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let Rt=0;Rt<vt.length;Rt++){const Ot=vt[Rt];let he=null;if(p!==null)he=p.getViewport(Ot);else{const me=f.getViewSubImage(u,Ot);he=me.viewport,Rt===0&&(t.setRenderTargetTextures(b,me.colorTexture,u.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let Gt=y[Rt];Gt===void 0&&(Gt=new qe,Gt.layers.enable(Rt),Gt.viewport=new de,y[Rt]=Gt),Gt.matrix.fromArray(Ot.transform.matrix),Gt.matrix.decompose(Gt.position,Gt.quaternion,Gt.scale),Gt.projectionMatrix.fromArray(Ot.projectionMatrix),Gt.projectionMatrixInverse.copy(Gt.projectionMatrix).invert(),Gt.viewport.set(he.x,he.y,he.width,he.height),Rt===0&&(M.matrix.copy(Gt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Gt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Rt=f.getDepthInformation(vt[0]);Rt&&Rt.isValid&&Rt.texture&&x.init(t,Rt,s.renderState)}}for(let vt=0;vt<T.length;vt++){const rt=S[vt],bt=T[vt];rt!==null&&bt!==void 0&&bt.update(rt,et,c||o)}St&&St(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const Jt=new Ic;Jt.setAnimationLoop(Ft),this.setAnimationLoop=function(X){St=X},this.dispose=function(){}}}const Kn=new dn,Og=new ne;function Bg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Rc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,T,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,b,T):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Re&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Re&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),T=b.envMap,S=b.envMapRotation;T&&(m.envMap.value=T,Kn.copy(S),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Kn)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=T*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Re&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function kg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,T){const S=T.program;n.uniformBlockBinding(b,S)}function c(b,T){let S=s[b.id];S===void 0&&(g(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const B=T.program;n.updateUBOMapping(b,B);const A=t.render.frame;r[b.id]!==A&&(u(b),r[b.id]=A)}function h(b){const T=f();b.__bindingPointIndex=T;const S=i.createBuffer(),B=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,B,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const T=s[b.id],S=b.uniforms,B=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,C=S.length;A<C;A++){const U=Array.isArray(S[A])?S[A]:[S[A]];for(let y=0,M=U.length;y<M;y++){const w=U[y];if(p(w,A,y,B)===!0){const q=w.__offset,k=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let j=0;j<k.length;j++){const G=k[j],tt=x(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,q+W,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,W),W+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,T,S,B){const A=b.value,C=T+"_"+S;if(B[C]===void 0)return typeof A=="number"||typeof A=="boolean"?B[C]=A:B[C]=A.clone(),!0;{const U=B[C];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return B[C]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(b){const T=b.uniforms;let S=0;const B=16;for(let C=0,U=T.length;C<U;C++){const y=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,w=y.length;M<w;M++){const q=y[M],k=Array.isArray(q.value)?q.value:[q.value];for(let W=0,j=k.length;W<j;W++){const G=k[W],tt=x(G),H=S%B,st=H%tt.boundary,ht=H+st;S+=st,ht!==0&&B-ht<tt.storage&&(S+=B-ht),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=tt.storage}}}const A=S%B;return A>0&&(S+=B-A),b.__size=S,b.__cache={},this}function x(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),T}function m(b){const T=b.target;T.removeEventListener("dispose",m);const S=o.indexOf(T.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class zg{constructor(t={}){const{canvas:e=wu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const b=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=bn,this.toneMappingExposure=1;const S=this;let B=!1,A=0,C=0,U=null,y=-1,M=null;const w=new de,q=new de;let k=null;const W=new Ht(0);let j=0,G=e.width,tt=e.height,H=1,st=null,ht=null;const St=new de(0,0,G,tt),Ft=new de(0,0,G,tt);let Jt=!1;const X=new Lc;let et=!1,vt=!1;const rt=new ne,bt=new ne,Rt=new D,Ot=new de,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function me(){return U===null?H:1}let I=n;function He(v,P){return e.getContext(v,P)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),I===null){const P="webgl2";if(I=He(P,v),I===null)throw He(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,kt,Et,ie,yt,E,_,N,Y,K,V,xt,ot,ut,Vt,Z,ft,Tt,At,dt,zt,Dt,te,R;function it(){Bt=new Xp(I),Bt.init(),Dt=new Pg(I,Bt),kt=new kp(I,Bt,t,Dt),Et=new wg(I,Bt),kt.reverseDepthBuffer&&u&&Et.buffers.depth.setReversed(!0),ie=new $p(I),yt=new fg,E=new Cg(I,Bt,Et,yt,kt,Dt,ie),_=new Hp(S),N=new Wp(S),Y=new tf(I),te=new Op(I,Y),K=new qp(I,Y,ie,te),V=new jp(I,K,Y,ie),At=new Kp(I,kt,E),Z=new zp(yt),xt=new ug(S,_,N,Bt,kt,te,Z),ot=new Bg(S,yt),ut=new pg,Vt=new Mg(Bt),Tt=new Fp(S,_,N,Et,V,p,l),ft=new bg(S,V,kt),R=new kg(I,ie,kt,Et),dt=new Bp(I,Bt,ie),zt=new Yp(I,Bt,ie),ie.programs=xt.programs,S.capabilities=kt,S.extensions=Bt,S.properties=yt,S.renderLists=ut,S.shadowMap=ft,S.state=Et,S.info=ie}it();const z=new Fg(S,I);this.xr=z,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(G,tt,!1))},this.getSize=function(v){return v.set(G,tt)},this.setSize=function(v,P,F=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=v,tt=P,e.width=Math.floor(v*H),e.height=Math.floor(P*H),F===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(G*H,tt*H).floor()},this.setDrawingBufferSize=function(v,P,F){G=v,tt=P,H=F,e.width=Math.floor(v*F),e.height=Math.floor(P*F),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(w)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,P,F,O){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,P,F,O),Et.viewport(w.copy(St).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Ft)},this.setScissor=function(v,P,F,O){v.isVector4?Ft.set(v.x,v.y,v.z,v.w):Ft.set(v,P,F,O),Et.scissor(q.copy(Ft).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(v){Et.setScissorTest(Jt=v)},this.setOpaqueSort=function(v){st=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(v=!0,P=!0,F=!0){let O=0;if(v){let L=!1;if(U!==null){const J=U.texture.format;L=J===ua||J===ha||J===ca}if(L){const J=U.texture.type,lt=J===fn||J===ri||J===ps||J===Gi||J===oa||J===aa,mt=Tt.getClearColor(),gt=Tt.getClearAlpha(),wt=mt.r,Pt=mt.g,_t=mt.b;lt?(g[0]=wt,g[1]=Pt,g[2]=_t,g[3]=gt,I.clearBufferuiv(I.COLOR,0,g)):(x[0]=wt,x[1]=Pt,x[2]=_t,x[3]=gt,I.clearBufferiv(I.COLOR,0,x))}else O|=I.COLOR_BUFFER_BIT}P&&(O|=I.DEPTH_BUFFER_BIT),F&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Vt.dispose(),yt.dispose(),_.dispose(),N.dispose(),V.dispose(),te.dispose(),R.dispose(),xt.dispose(),z.dispose(),z.removeEventListener("sessionstart",_a),z.removeEventListener("sessionend",va),Gn.stop()};function $(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const v=ie.autoReset,P=ft.enabled,F=ft.autoUpdate,O=ft.needsUpdate,L=ft.type;it(),ie.autoReset=v,ft.enabled=P,ft.autoUpdate=F,ft.needsUpdate=O,ft.type=L}function at(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ct(v){const P=v.target;P.removeEventListener("dispose",Ct),ue(P)}function ue(v){Ee(v),yt.remove(v)}function Ee(v){const P=yt.get(v).programs;P!==void 0&&(P.forEach(function(F){xt.releaseProgram(F)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,F,O,L,J){P===null&&(P=he);const lt=L.isMesh&&L.matrixWorld.determinant()<0,mt=qc(v,P,F,O,L);Et.setMaterial(O,lt);let gt=F.index,wt=1;if(O.wireframe===!0){if(gt=K.getWireframeAttribute(F),gt===void 0)return;wt=2}const Pt=F.drawRange,_t=F.attributes.position;let Xt=Pt.start*wt,ee=(Pt.start+Pt.count)*wt;J!==null&&(Xt=Math.max(Xt,J.start*wt),ee=Math.min(ee,(J.start+J.count)*wt)),gt!==null?(Xt=Math.max(Xt,0),ee=Math.min(ee,gt.count)):_t!=null&&(Xt=Math.max(Xt,0),ee=Math.min(ee,_t.count));const se=ee-Xt;if(se<0||se===1/0)return;te.setup(L,O,mt,F,gt);let Ie,$t=dt;if(gt!==null&&(Ie=Y.get(gt),$t=zt,$t.setIndex(Ie)),L.isMesh)O.wireframe===!0?(Et.setLineWidth(O.wireframeLinewidth*me()),$t.setMode(I.LINES)):$t.setMode(I.TRIANGLES);else if(L.isLine){let Mt=O.linewidth;Mt===void 0&&(Mt=1),Et.setLineWidth(Mt*me()),L.isLineSegments?$t.setMode(I.LINES):L.isLineLoop?$t.setMode(I.LINE_LOOP):$t.setMode(I.LINE_STRIP)}else L.isPoints?$t.setMode(I.POINTS):L.isSprite&&$t.setMode(I.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)$t.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))$t.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Mt=L._multiDrawStarts,mn=L._multiDrawCounts,Kt=L._multiDrawCount,je=gt?Y.get(gt).bytesPerElement:1,hi=yt.get(O).currentProgram.getUniforms();for(let Fe=0;Fe<Kt;Fe++)hi.setValue(I,"_gl_DrawID",Fe),$t.render(Mt[Fe]/je,mn[Fe])}else if(L.isInstancedMesh)$t.renderInstances(Xt,se,L.count);else if(F.isInstancedBufferGeometry){const Mt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,mn=Math.min(F.instanceCount,Mt);$t.renderInstances(Xt,se,mn)}else $t.render(Xt,se)};function jt(v,P,F){v.transparent===!0&&v.side===en&&v.forceSinglePass===!1?(v.side=Re,v.needsUpdate=!0,Ms(v,P,F),v.side=Hn,v.needsUpdate=!0,Ms(v,P,F),v.side=en):Ms(v,P,F)}this.compile=function(v,P,F=null){F===null&&(F=v),d=Vt.get(F),d.init(P),T.push(d),F.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),v!==F&&v.traverseVisible(function(L){L.isLight&&L.layers.test(P.layers)&&(d.pushLight(L),L.castShadow&&d.pushShadow(L))}),d.setupLights();const O=new Set;return v.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const J=L.material;if(J)if(Array.isArray(J))for(let lt=0;lt<J.length;lt++){const mt=J[lt];jt(mt,F,L),O.add(mt)}else jt(J,F,L),O.add(J)}),T.pop(),d=null,O},this.compileAsync=function(v,P,F=null){const O=this.compile(v,P,F);return new Promise(L=>{function J(){if(O.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&O.delete(lt)}),O.size===0){L(v);return}setTimeout(J,10)}Bt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Ke=null;function pn(v){Ke&&Ke(v)}function _a(){Gn.stop()}function va(){Gn.start()}const Gn=new Ic;Gn.setAnimationLoop(pn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(v){Ke=v,z.setAnimationLoop(v),v===null?Gn.stop():Gn.start()},z.addEventListener("sessionstart",_a),z.addEventListener("sessionend",va),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(P),P=z.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,P,U),d=Vt.get(v,T.length),d.init(P),T.push(d),bt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),X.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,et=Z.init(this.clippingPlanes,vt),m=ut.get(v,b.length),m.init(),b.push(m),z.enabled===!0&&z.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&mr(J,P,-1/0,S.sortObjects)}mr(v,P,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(st,ht),Gt=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Gt&&Tt.addToRenderList(m,v),this.info.render.frame++,et===!0&&Z.beginShadows();const F=d.state.shadowsArray;ft.render(F,v,P),et===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,L=m.transmissive;if(d.setupLights(),P.isArrayCamera){const J=P.cameras;if(L.length>0)for(let lt=0,mt=J.length;lt<mt;lt++){const gt=J[lt];Ma(O,L,v,gt)}Gt&&Tt.render(v);for(let lt=0,mt=J.length;lt<mt;lt++){const gt=J[lt];xa(m,v,gt,gt.viewport)}}else L.length>0&&Ma(O,L,v,P),Gt&&Tt.render(v),xa(m,v,P);U!==null&&(E.updateMultisampleRenderTarget(U),E.updateRenderTargetMipmap(U)),v.isScene===!0&&v.onAfterRender(S,v,P),te.resetDefaultState(),y=-1,M=null,T.pop(),T.length>0?(d=T[T.length-1],et===!0&&Z.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function mr(v,P,F,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||X.intersectsSprite(v)){O&&Ot.setFromMatrixPosition(v.matrixWorld).applyMatrix4(bt);const lt=V.update(v),mt=v.material;mt.visible&&m.push(v,lt,mt,F,Ot.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||X.intersectsObject(v))){const lt=V.update(v),mt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ot.copy(v.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(v.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const gt=lt.groups;for(let wt=0,Pt=gt.length;wt<Pt;wt++){const _t=gt[wt],Xt=mt[_t.materialIndex];Xt&&Xt.visible&&m.push(v,lt,Xt,F,Ot.z,_t)}}else mt.visible&&m.push(v,lt,mt,F,Ot.z,null)}}const J=v.children;for(let lt=0,mt=J.length;lt<mt;lt++)mr(J[lt],P,F,O)}function xa(v,P,F,O){const L=v.opaque,J=v.transmissive,lt=v.transparent;d.setupLightsView(F),et===!0&&Z.setGlobalState(S.clippingPlanes,F),O&&Et.viewport(w.copy(O)),L.length>0&&xs(L,P,F),J.length>0&&xs(J,P,F),lt.length>0&&xs(lt,P,F),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Ma(v,P,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[O.id]===void 0&&(d.state.transmissionRenderTarget[O.id]=new $e(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?un:fn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const J=d.state.transmissionRenderTarget[O.id],lt=O.viewport||w;J.setSize(lt.z,lt.w);const mt=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(W),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),Gt&&Tt.render(F);const gt=S.toneMapping;S.toneMapping=bn;const wt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),d.setupLightsView(O),et===!0&&Z.setGlobalState(S.clippingPlanes,O),xs(v,F,O),E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let _t=0,Xt=P.length;_t<Xt;_t++){const ee=P[_t],se=ee.object,Ie=ee.geometry,$t=ee.material,Mt=ee.group;if($t.side===en&&se.layers.test(O.layers)){const mn=$t.side;$t.side=Re,$t.needsUpdate=!0,Sa(se,F,O,Ie,$t,Mt),$t.side=mn,$t.needsUpdate=!0,Pt=!0}}Pt===!0&&(E.updateMultisampleRenderTarget(J),E.updateRenderTargetMipmap(J))}S.setRenderTarget(mt),S.setClearColor(W,j),wt!==void 0&&(O.viewport=wt),S.toneMapping=gt}function xs(v,P,F){const O=P.isScene===!0?P.overrideMaterial:null;for(let L=0,J=v.length;L<J;L++){const lt=v[L],mt=lt.object,gt=lt.geometry,wt=O===null?lt.material:O,Pt=lt.group;mt.layers.test(F.layers)&&Sa(mt,P,F,gt,wt,Pt)}}function Sa(v,P,F,O,L,J){v.onBeforeRender(S,P,F,O,L,J),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),L.onBeforeRender(S,P,F,O,v,J),L.transparent===!0&&L.side===en&&L.forceSinglePass===!1?(L.side=Re,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,J),L.side=Hn,L.needsUpdate=!0,S.renderBufferDirect(F,P,O,L,v,J),L.side=en):S.renderBufferDirect(F,P,O,L,v,J),v.onAfterRender(S,P,F,O,L,J)}function Ms(v,P,F){P.isScene!==!0&&(P=he);const O=yt.get(v),L=d.state.lights,J=d.state.shadowsArray,lt=L.state.version,mt=xt.getParameters(v,L.state,J,P,F),gt=xt.getProgramCacheKey(mt);let wt=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?N:_).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,wt===void 0&&(v.addEventListener("dispose",Ct),wt=new Map,O.programs=wt);let Pt=wt.get(gt);if(Pt!==void 0){if(O.currentProgram===Pt&&O.lightsStateVersion===lt)return Ea(v,mt),Pt}else mt.uniforms=xt.getUniforms(v),v.onBeforeCompile(mt,S),Pt=xt.acquireProgram(mt,gt),wt.set(gt,Pt),O.uniforms=mt.uniforms;const _t=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(_t.clippingPlanes=Z.uniform),Ea(v,mt),O.needsLights=$c(v),O.lightsStateVersion=lt,O.needsLights&&(_t.ambientLightColor.value=L.state.ambient,_t.lightProbe.value=L.state.probe,_t.directionalLights.value=L.state.directional,_t.directionalLightShadows.value=L.state.directionalShadow,_t.spotLights.value=L.state.spot,_t.spotLightShadows.value=L.state.spotShadow,_t.rectAreaLights.value=L.state.rectArea,_t.ltc_1.value=L.state.rectAreaLTC1,_t.ltc_2.value=L.state.rectAreaLTC2,_t.pointLights.value=L.state.point,_t.pointLightShadows.value=L.state.pointShadow,_t.hemisphereLights.value=L.state.hemi,_t.directionalShadowMap.value=L.state.directionalShadowMap,_t.directionalShadowMatrix.value=L.state.directionalShadowMatrix,_t.spotShadowMap.value=L.state.spotShadowMap,_t.spotLightMatrix.value=L.state.spotLightMatrix,_t.spotLightMap.value=L.state.spotLightMap,_t.pointShadowMap.value=L.state.pointShadowMap,_t.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Pt,O.uniformsList=null,Pt}function ya(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Qs.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ea(v,P){const F=yt.get(v);F.outputColorSpace=P.outputColorSpace,F.batching=P.batching,F.batchingColor=P.batchingColor,F.instancing=P.instancing,F.instancingColor=P.instancingColor,F.instancingMorph=P.instancingMorph,F.skinning=P.skinning,F.morphTargets=P.morphTargets,F.morphNormals=P.morphNormals,F.morphColors=P.morphColors,F.morphTargetsCount=P.morphTargetsCount,F.numClippingPlanes=P.numClippingPlanes,F.numIntersection=P.numClipIntersection,F.vertexAlphas=P.vertexAlphas,F.vertexTangents=P.vertexTangents,F.toneMapping=P.toneMapping}function qc(v,P,F,O,L){P.isScene!==!0&&(P=he),E.resetTextureUnits();const J=P.fog,lt=O.isMeshStandardMaterial?P.environment:null,mt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Yi,gt=(O.isMeshStandardMaterial?N:_).get(O.envMap||lt),wt=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pt=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),_t=!!F.morphAttributes.position,Xt=!!F.morphAttributes.normal,ee=!!F.morphAttributes.color;let se=bn;O.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=S.toneMapping);const Ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$t=Ie!==void 0?Ie.length:0,Mt=yt.get(O),mn=d.state.lights;if(et===!0&&(vt===!0||v!==M)){const Ge=v===M&&O.id===y;Z.setState(O,v,Ge)}let Kt=!1;O.version===Mt.__version?(Mt.needsLights&&Mt.lightsStateVersion!==mn.state.version||Mt.outputColorSpace!==mt||L.isBatchedMesh&&Mt.batching===!1||!L.isBatchedMesh&&Mt.batching===!0||L.isBatchedMesh&&Mt.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Mt.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Mt.instancing===!1||!L.isInstancedMesh&&Mt.instancing===!0||L.isSkinnedMesh&&Mt.skinning===!1||!L.isSkinnedMesh&&Mt.skinning===!0||L.isInstancedMesh&&Mt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Mt.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Mt.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Mt.instancingMorph===!1&&L.morphTexture!==null||Mt.envMap!==gt||O.fog===!0&&Mt.fog!==J||Mt.numClippingPlanes!==void 0&&(Mt.numClippingPlanes!==Z.numPlanes||Mt.numIntersection!==Z.numIntersection)||Mt.vertexAlphas!==wt||Mt.vertexTangents!==Pt||Mt.morphTargets!==_t||Mt.morphNormals!==Xt||Mt.morphColors!==ee||Mt.toneMapping!==se||Mt.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,Mt.__version=O.version);let je=Mt.currentProgram;Kt===!0&&(je=Ms(O,P,L));let hi=!1,Fe=!1,Zi=!1;const re=je.getUniforms(),rn=Mt.uniforms;if(Et.useProgram(je.program)&&(hi=!0,Fe=!0,Zi=!0),O.id!==y&&(y=O.id,Fe=!0),hi||M!==v){Et.buffers.depth.getReversed()?(rt.copy(v.projectionMatrix),Cu(rt),Pu(rt),re.setValue(I,"projectionMatrix",rt)):re.setValue(I,"projectionMatrix",v.projectionMatrix),re.setValue(I,"viewMatrix",v.matrixWorldInverse);const Cn=re.map.cameraPosition;Cn!==void 0&&Cn.setValue(I,Rt.setFromMatrixPosition(v.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&re.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Fe=!0,Zi=!0)}if(L.isSkinnedMesh){re.setOptional(I,L,"bindMatrix"),re.setOptional(I,L,"bindMatrixInverse");const Ge=L.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),re.setValue(I,"boneTexture",Ge.boneTexture,E))}L.isBatchedMesh&&(re.setOptional(I,L,"batchingTexture"),re.setValue(I,"batchingTexture",L._matricesTexture,E),re.setOptional(I,L,"batchingIdTexture"),re.setValue(I,"batchingIdTexture",L._indirectTexture,E),re.setOptional(I,L,"batchingColorTexture"),L._colorsTexture!==null&&re.setValue(I,"batchingColorTexture",L._colorsTexture,E));const Ji=F.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&At.update(L,F,je),(Fe||Mt.receiveShadow!==L.receiveShadow)&&(Mt.receiveShadow=L.receiveShadow,re.setValue(I,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(rn.envMap.value=gt,rn.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(rn.envMapIntensity.value=P.environmentIntensity),Fe&&(re.setValue(I,"toneMappingExposure",S.toneMappingExposure),Mt.needsLights&&Yc(rn,Zi),J&&O.fog===!0&&ot.refreshFogUniforms(rn,J),ot.refreshMaterialUniforms(rn,O,H,tt,d.state.transmissionRenderTarget[v.id]),Qs.upload(I,ya(Mt),rn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Qs.upload(I,ya(Mt),rn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&re.setValue(I,"center",L.center),re.setValue(I,"modelViewMatrix",L.modelViewMatrix),re.setValue(I,"normalMatrix",L.normalMatrix),re.setValue(I,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Ge=O.uniformsGroups;for(let Cn=0,Pn=Ge.length;Cn<Pn;Cn++){const Ta=Ge[Cn];R.update(Ta,je),R.bind(Ta,je)}}return je}function Yc(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function $c(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(v,P,F){yt.get(v.texture).__webglTexture=P,yt.get(v.depthTexture).__webglTexture=F;const O=yt.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const F=yt.get(v);F.__webglFramebuffer=P,F.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,F=0){U=v,A=P,C=F;let O=!0,L=null,J=!1,lt=!1;if(v){const gt=yt.get(v);if(gt.__useDefaultFramebuffer!==void 0)Et.bindFramebuffer(I.FRAMEBUFFER,null),O=!1;else if(gt.__webglFramebuffer===void 0)E.setupRenderTarget(v);else if(gt.__hasExternalTextures)E.rebindTextures(v,yt.get(v.texture).__webglTexture,yt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const _t=v.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&yt.has(_t)&&(v.width!==_t.image.width||v.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(v)}}const wt=v.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(lt=!0);const Pt=yt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pt[P])?L=Pt[P][F]:L=Pt[P],J=!0):v.samples>0&&E.useMultisampledRTT(v)===!1?L=yt.get(v).__webglMultisampledFramebuffer:Array.isArray(Pt)?L=Pt[F]:L=Pt,w.copy(v.viewport),q.copy(v.scissor),k=v.scissorTest}else w.copy(St).multiplyScalar(H).floor(),q.copy(Ft).multiplyScalar(H).floor(),k=Jt;if(Et.bindFramebuffer(I.FRAMEBUFFER,L)&&O&&Et.drawBuffers(v,L),Et.viewport(w),Et.scissor(q),Et.setScissorTest(k),J){const gt=yt.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt.__webglTexture,F)}else if(lt){const gt=yt.get(v.texture),wt=P||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,F||0,wt)}y=-1},this.readRenderTargetPixels=function(v,P,F,O,L,J,lt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Et.bindFramebuffer(I.FRAMEBUFFER,mt);try{const gt=v.texture,wt=gt.format,Pt=gt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L&&I.readPixels(P,F,O,L,Dt.convert(wt),Dt.convert(Pt),J)}finally{const gt=U!==null?yt.get(U).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(v,P,F,O,L,J,lt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=yt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=v.texture,wt=gt.format,Pt=gt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&F>=0&&F<=v.height-L){Et.bindFramebuffer(I.FRAMEBUFFER,mt);const _t=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(P,F,O,L,Dt.convert(wt),Dt.convert(Pt),0);const Xt=U!==null?yt.get(U).__webglFramebuffer:null;Et.bindFramebuffer(I.FRAMEBUFFER,Xt);const ee=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ru(I,ee,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,_t),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(_t),I.deleteSync(ee),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,F=0){v.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-F),L=Math.floor(v.image.width*O),J=Math.floor(v.image.height*O),lt=P!==null?P.x:0,mt=P!==null?P.y:0;E.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,F,0,0,lt,mt,L,J),Et.unbindTexture()},this.copyTextureToTexture=function(v,P,F=null,O=null,L=0){v.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],L=arguments[3]||0,F=null);let J,lt,mt,gt,wt,Pt,_t,Xt,ee;const se=v.isCompressedTexture?v.mipmaps[L]:v.image;F!==null?(J=F.max.x-F.min.x,lt=F.max.y-F.min.y,mt=F.isBox3?F.max.z-F.min.z:1,gt=F.min.x,wt=F.min.y,Pt=F.isBox3?F.min.z:0):(J=se.width,lt=se.height,mt=se.depth||1,gt=0,wt=0,Pt=0),O!==null?(_t=O.x,Xt=O.y,ee=O.z):(_t=0,Xt=0,ee=0);const Ie=Dt.convert(P.format),$t=Dt.convert(P.type);let Mt;P.isData3DTexture?(E.setTexture3D(P,0),Mt=I.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(E.setTexture2DArray(P,0),Mt=I.TEXTURE_2D_ARRAY):(E.setTexture2D(P,0),Mt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,P.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,P.unpackAlignment);const mn=I.getParameter(I.UNPACK_ROW_LENGTH),Kt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),je=I.getParameter(I.UNPACK_SKIP_PIXELS),hi=I.getParameter(I.UNPACK_SKIP_ROWS),Fe=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,wt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Pt);const Zi=v.isDataArrayTexture||v.isData3DTexture,re=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const rn=yt.get(v),Ji=yt.get(P),Ge=yt.get(rn.__renderTarget),Cn=yt.get(Ji.__renderTarget);Et.bindFramebuffer(I.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<mt;Pn++)Zi&&I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(v).__webglTexture,L,Pt+Pn),v.isDepthTexture?(re&&I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yt.get(P).__webglTexture,L,ee+Pn),I.blitFramebuffer(gt,wt,J,lt,_t,Xt,J,lt,I.DEPTH_BUFFER_BIT,I.NEAREST)):re?I.copyTexSubImage3D(Mt,L,_t,Xt,ee+Pn,gt,wt,J,lt):I.copyTexSubImage2D(Mt,L,_t,Xt,ee+Pn,gt,wt,J,lt);Et.bindFramebuffer(I.READ_FRAMEBUFFER,null),Et.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else re?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Mt,L,_t,Xt,ee,J,lt,mt,Ie,$t,se.data):P.isCompressedArrayTexture?I.compressedTexSubImage3D(Mt,L,_t,Xt,ee,J,lt,mt,Ie,se.data):I.texSubImage3D(Mt,L,_t,Xt,ee,J,lt,mt,Ie,$t,se):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,L,_t,Xt,J,lt,Ie,$t,se.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,L,_t,Xt,se.width,se.height,Ie,se.data):I.texSubImage2D(I.TEXTURE_2D,L,_t,Xt,J,lt,Ie,$t,se);I.pixelStorei(I.UNPACK_ROW_LENGTH,mn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Kt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,je),I.pixelStorei(I.UNPACK_SKIP_ROWS,hi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe),L===0&&P.generateMipmaps&&I.generateMipmap(Mt),Et.unbindTexture()},this.copyTextureToTexture3D=function(v,P,F=null,O=null,L=0){return v.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],L=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,F,O,L)},this.initRenderTarget=function(v){yt.get(v).__webglFramebuffer===void 0&&E.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?E.setTextureCube(v,0):v.isData3DTexture?E.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?E.setTexture2DArray(v,0):E.setTexture2D(v,0),Et.unbindTexture()},this.resetState=function(){A=0,C=0,U=null,Et.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}class Hg extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class kc extends Pe{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ce,h=Ce,f,u){super(null,o,a,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const bi=new ne,Gl=new ne,Vs=[],Vl=new ci,Gg=new ne,ss=new ve,rs=new vs;class zc extends ve{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Gg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Vl.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Vl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),rs.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(rs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ss.geometry=this.geometry,ss.material=this.material,ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rs.copy(this.boundingSphere),rs.applyMatrix4(n),t.ray.intersectsSphere(rs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),Gl.multiplyMatrices(n,bi),ss.matrixWorld=Gl,ss.raycast(t,Vs);for(let o=0,a=Vs.length;o<a;o++){const l=Vs[o];l.instanceId=r,l.object=this,e.push(l)}Vs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new kc(new Float32Array(s*this.count),s,this.count,la,cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class da extends sn{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],f=new D,u=new D,p=[],g=[],x=[],m=[];for(let d=0;d<=n;d++){const b=[],T=d/n;let S=0;d===0&&o===0?S=.5/e:d===n&&l===Math.PI&&(S=-.5/e);for(let B=0;B<=e;B++){const A=B/e;f.x=-t*Math.cos(s+A*r)*Math.sin(o+T*a),f.y=t*Math.cos(o+T*a),f.z=t*Math.sin(s+A*r)*Math.sin(o+T*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(A+S,1-T),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const T=h[d][b+1],S=h[d][b],B=h[d+1][b],A=h[d+1][b+1];(d!==0||o>0)&&p.push(T,S,A),(d!==n-1||l<Math.PI)&&p.push(S,B,A)}this.setIndex(p),this.setAttribute("position",new Le(g,3)),this.setAttribute("normal",new Le(x,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Vg extends pe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Wg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sa);const Fi=2,wi=qt*Fi,lr=wi/2;function gs(i,t,e){return e.set((t+.5)*Fi-lr,0,-((i+.5)*Fi-lr))}function Xg(i,t){return gs(ai(i),li(i),t)}const qg=i=>i*Math.PI/2,Yg=(i,t)=>Math.atan2(i,-t);function jr(i,t){return t.set(Math.sin(i),0,-Math.cos(i))}function Li(i){const t=(i+Math.PI)%(2*Math.PI);return(t<0?t+2*Math.PI:t)-Math.PI}const Ii=(i,t)=>1-Math.exp(-i/Math.max(t,1e-4)),Yo=(i,t,e)=>i<t?t:i>e?e:i;function $g(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Ai=.4,Xl=.9;function Kg(){const i=new si,t=new Wi({color:new Ht(.02,.05,.12)}),e=new Wi({color:new Ht(.1*5,.55*5,1*5)}),n=lr*2+Ai*2;for(let s=0;s<4;s++){const r=s<2,a=(s%2===0?1:-1)*(lr+Ai*.5),l=new ve(new Rn(r?n:Ai,Xl,r?Ai:n),t),c=new ve(new Rn(r?n*1.02:Ai*1.02,.12,r?Ai*1.02:n*1.02),e);l.position.set(r?0:a,Xl/2,r?a:0),c.position.set(r?0:a,.96,r?a:0),i.add(l,c)}return i}const Ws=new D(0,1,0),jg=new D(1,0,0),Zg=-66*Math.PI/180;class Jg{loc=new D;quat=new wn;wantLoc=new D;wantQuat=new wn;look=new D;fwd=new D;lastFocus=new D;m=new ne;init=!1;camYaw=0;orbitDeg=0;titleClock=0;titleFocus=-1;shakeAmount=0;shake(t){this.shakeAmount=Math.max(this.shakeAmount,t)}update(t,e,n,s,r){const o=e?e.localSlot:-1,a=!!e&&e.hasMatch;let l=.35,c=!1,h=null;if(s.title&&a&&e)if(this.titleClock+=r,this.titleClock%26>14){if(this.titleFocus<0||!n[this.titleFocus]?.visible){this.titleFocus=-1;for(const u of ir(e.state))if(n[u]?.visible){this.titleFocus=u;break}}c=this.titleFocus>=0&&n[this.titleFocus].visible,c&&(h=n[this.titleFocus])}else this.titleFocus=-1;if(c&&h)this.camYaw=Li(this.camYaw+Li(h.heading-this.camYaw)*Ii(r,.35)),jr(this.camYaw,this.fwd),this.wantLoc.copy(h.pos).addScaledVector(this.fwd,-15).addScaledVector(Ws,7),this.look.copy(h.pos).addScaledVector(this.fwd,9),this.lookAt(this.wantLoc,this.look),l=.25;else if(s.title||!a||o<0){this.orbitDeg+=r*3.5;const u=this.orbitDeg*Math.PI/180;this.wantLoc.set(Math.sin(u)*96,62,-Math.cos(u)*96),this.look.set(0,-18,0),this.lookAt(this.wantLoc,this.look),l=.6}else if(n[o]?.visible){const u=n[o];this.lastFocus.copy(u.pos),s.overhead?(this.wantLoc.set(u.pos.x,37,u.pos.z+15),this.wantQuat.setFromAxisAngle(jg,Zg),this.camYaw=0,l=.12):(this.camYaw=Li(this.camYaw+Li(u.heading-this.camYaw)*Ii(r,.17)),jr(this.camYaw,this.fwd),this.wantLoc.copy(u.pos).addScaledVector(this.fwd,-11.5).addScaledVector(Ws,7.6),this.look.copy(u.pos).addScaledVector(this.fwd,12.5),this.lookAt(this.wantLoc,this.look),l=.05)}else jr(this.camYaw,this.fwd),this.wantLoc.copy(this.lastFocus).addScaledVector(this.fwd,-16).addScaledVector(Ws,34),this.lookAt(this.wantLoc,this.lastFocus),l=.7;this.init||(this.loc.copy(this.wantLoc),this.quat.copy(this.wantQuat),this.init=!0);const f=Ii(r,Math.max(l,.01));if(this.loc.lerp(this.wantLoc,f),this.quat.slerp(this.wantQuat,Ii(r,Math.max(l,.02))),this.shakeAmount=Math.max(0,this.shakeAmount-r*2.2),t.position.copy(this.loc),this.shakeAmount>0){const u=this.shakeAmount*this.shakeAmount*.7;t.position.x+=(Math.random()*2-1)*u,t.position.y+=(Math.random()*2-1)*u,t.position.z+=(Math.random()*2-1)*u}t.quaternion.copy(this.quat)}lookAt(t,e){this.m.lookAt(t,e,Ws),this.wantQuat.setFromRotationMatrix(this.m)}}const $o={uFogColor:{value:new D(.035,.008,.06)},uFogParams:{value:new de(.0012,.002,90,1)}},pa=`
uniform vec3 uFogColor;
uniform vec4 uFogParams;
float heightFog(vec3 worldPos) {
  vec3 ray = worldPos - cameraPosition;
  float d = max(length(ray) - uFogParams.z, 0.0);
  float k = uFogParams.y;
  float h0 = cameraPosition.y;
  float dh = ray.y;
  float avg = abs(dh) > 0.05 ? (exp(-k * h0) - exp(-k * (h0 + dh))) / (k * dh) : exp(-k * h0);
  return clamp(1.0 - exp(-uFogParams.x * d * avg), 0.0, uFogParams.w);
}
`,os=170,Zr=Math.atan2(Math.SQRT1_2,-Math.SQRT1_2),Qg=`
attribute vec3 aSize;   // width (local x), height, depth (local z) in metres
attribute vec2 aData;   // hue 0..1, seed 0..1
varying vec2 vUv;
varying vec4 vD;        // face width, height, hue, seed
varying float vSide;
varying float vFace;
varying vec3 vWorld;
varying float vDepth;
void main() {
  vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
  // faces with a +-X normal span the depth, +-Z faces span the width
  float alongZ = step(0.5, abs(normal.x));
  vD = vec4(mix(aSize.x, aSize.z, alongZ), aSize.y, aData.x, aData.y);
  vSide = 1.0 - step(0.5, abs(normal.y));
  vFace = dot(floor(normal.xz + 0.5), vec2(1.0, 3.0));
  vUv = uv;
  vWorld = wp.xyz;
  vec4 mv = viewMatrix * wp;
  vDepth = -mv.z;
  gl_Position = projectionMatrix * mv;
}
`,t_=`
uniform float uPixelAngle; // radians per pixel
varying vec2 vUv;
varying vec4 vD;
varying float vSide;
varying float vFace;
varying vec3 vWorld;
varying float vDepth;
${pa}
void main() {
  float w = max(vD.x, 1.0);
  float h = max(vD.y, 1.0);
  float vt = clamp(1.0 - vUv.y, 0.0, 1.0); // 0 at the roof edge, 1 at the ground
  // palette by hue index: magenta, cyan, amber, violet
  float pidx = floor(clamp(vD.z, 0.0, 1.0) * 3.999);
  vec3 tint = vec3(1.0, 0.1, 0.72);
  tint = mix(tint, vec3(0.1, 0.85, 1.0), step(0.5, pidx));
  tint = mix(tint, vec3(1.0, 0.55, 0.12), step(1.5, pidx));
  tint = mix(tint, vec3(0.58, 0.25, 1.0), step(2.5, pidx));
  // window grid, ~1.5 m spacing, ~16 % lit (hash of window cell, face and seed)
  vec2 count = max(floor(vec2(w, h) / 1.5), 1.0);
  vec2 g = vec2(vUv.x, vt) * count;
  vec2 id = floor(g);
  vec2 f = g - id;
  vec3 p3 = fract(vec3(id.x, id.y, vFace + vD.w * 37.0) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  float hA = fract((p3.x + p3.y) * p3.z);
  float hB = fract((p3.x + p3.z) * p3.y);
  float lit = step(hA, 0.16);
  vec2 inside = smoothstep(vec2(0.18, 0.24), vec2(0.26, 0.32), f) * (1.0 - smoothstep(vec2(0.74, 0.68), vec2(0.82, 0.76), f));
  float win = inside.x * inside.y * step(0.9, vt * h);
  vec3 wcol = mix(tint, vec3(1.0, 0.92, 0.8), 0.45 * step(0.8, hB));
  float wI = 0.7 + 0.9 * hB;
  // metres per pixel at this depth: sub-pixel windows fade to their average glow
  float mpp = vDepth * uPixelAngle;
  float lod = clamp((mpp - 0.35) / 0.8, 0.0, 1.0);
  vec3 windows = mix(wcol * (wI * win * lit), tint * 0.08, lod);
  // thin neon line around the roof edge
  float roof = 1.0 - smoothstep(0.3, 0.42 + mpp, vt * h);
  // a vertical neon strip down the middle of the faces of ~40 % of the towers
  float strip = (1.0 - smoothstep(0.004, 0.012 + mpp * 0.01, abs(vUv.x - 0.5))) * step(0.6, fract(vD.w * 7.13)) * smoothstep(0.0, 6.0, vt * h);
  vec3 col = vec3(0.006, 0.008, 0.015) + vSide * (windows + tint * 4.0 * roof + tint * 2.2 * strip);
  col = mix(col, uFogColor, heightFog(vWorld));
  gl_FragColor = vec4(col, 1.0);
}
`;class e_{mesh;material;constructor(){const t=new Rn(1,1,1),e=new Float32Array(os*3),n=new Float32Array(os*2);this.material=new pe({vertexShader:Qg,fragmentShader:t_,uniforms:{uPixelAngle:{value:.0012},...$o}}),this.mesh=new zc(t,this.material,os);const s=$g(1337),r=new ne,o=new wn,a=new D(0,1,0),l=new D,c=new D;for(let h=0;h<os;h++){let f=s()*Math.PI*2;const u=Math.pow(s(),1.3),p=150+u*550,g=.16+40/p,x=Math.atan2(Math.sin(f-Zr),Math.cos(f-Zr));Math.abs(x)<g&&(f=Zr+Math.sign(x||1)*(g+s()*.25));const m=14+s()*16+u*30,d=14+s()*16+u*30,b=30+s()*40+u*(60+s()*200);l.set(Math.cos(f)*p,b*.5-.1,Math.sin(f)*p),o.setFromAxisAngle(a,s()*Math.PI*.5),c.set(m,b,d),r.compose(l,o,c),this.mesh.setMatrixAt(h,r),e.set([m,b,d],h*3),n.set([s(),s()],h*2)}t.setAttribute("aSize",new ms(e,3)),t.setAttribute("aData",new ms(n,2)),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.frustumCulled=!1}setCount(t){this.mesh.count=Math.max(0,Math.min(os,t))}setPixelAngle(t){this.material.uniforms.uPixelAngle.value=t}}const Xs=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],Jr=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],ma=i=>{const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Qr=i=>[i[1]/100,i[2]/100,-i[0]/100],n_=i=>ma([i[1],i[2],-i[0]]);class i_{pos=[];nrm=[];glow=[];tri(t,e,n,s,r){const o=Qr(t);let a=Qr(e),l=Qr(n);const c=n_(s),h=[a[0]-o[0],a[1]-o[1],a[2]-o[2]],f=[l[0]-o[0],l[1]-o[1],l[2]-o[2]],u=[h[1]*f[2]-h[2]*f[1],h[2]*f[0]-h[0]*f[2],h[0]*f[1]-h[1]*f[0]];u[0]*c[0]+u[1]*c[1]+u[2]*c[2]<0&&([a,l]=[l,a]),this.pos.push(...o,...a,...l);for(let p=0;p<3;p++)this.nrm.push(...c),this.glow.push(r)}quad(t,e,n,s,r,o){this.tri(t,e,n,r,o),this.tri(t,n,s,r,o)}geometry(){const t=new sn;return t.setAttribute("position",new Le(this.pos,3)),t.setAttribute("normal",new Le(this.nrm,3)),t.setAttribute("glow",new Le(this.glow,1)),t.computeBoundingSphere(),t}}function ql(i,t,e,n){const r=e*.42,o=e*.52,a=e*.66,l=[0,-n,0],c=[0,n,0];for(let h=0;h<28;h++){const f=2*Math.PI*h/28,u=2*Math.PI*(h+1)/28,p=[Math.cos(f),0,Math.sin(f)],g=[Math.cos(u),0,Math.sin(u)],x=ma(Xs(p,g)),m=(d,b,T)=>Xs(Xs(t,Jr(d,b)),T);i.quad(m(p,e,l),m(g,e,l),m(g,e,c),m(p,e,c),x,1);for(let d=0;d<2;d++){const b=d===0?l:c,T=[0,d===0?-1:1,0],S=Jr(b,.82);i.quad(m(p,a,S),m(g,a,S),m(g,e,b),m(p,e,b),T,0),i.quad(m(p,o,S),m(g,o,S),m(g,a,S),m(p,a,S),T,.9),i.quad(m(p,r,S),m(g,r,S),m(g,o,S),m(p,o,S),T,0),i.tri(Xs(t,Jr(S,1.1)),m(p,r,S),m(g,r,S),T,.25)}}}function s_(){const i=new i_,t=40;ql(i,[82,0,t],t,10),ql(i,[-82,0,t],t,11);const e=[{x:132,halfWidth:3,bottom:34,top:44},{x:118,halfWidth:11,bottom:36,top:62},{x:92,halfWidth:15,bottom:40,top:80},{x:60,halfWidth:16,bottom:36,top:84},{x:30,halfWidth:15,bottom:30,top:72},{x:0,halfWidth:15,bottom:28,top:86},{x:-30,halfWidth:17,bottom:30,top:98},{x:-62,halfWidth:18,bottom:38,top:92},{x:-96,halfWidth:16,bottom:40,top:80},{x:-122,halfWidth:11,bottom:40,top:64},{x:-136,halfWidth:4,bottom:44,top:50}],n=[[-.85,0],[-1,.22],[-1,.55],[-.78,.86],[-.32,1],[.32,1],[.78,.86],[1,.55],[1,.22],[.85,0]],s=(r,o)=>[r.x,o[0]*r.halfWidth,r.bottom+o[1]*(r.top-r.bottom)];for(let r=0;r+1<e.length;r++){const o=e[r],a=e[r+1];for(let c=0;c+1<n.length;c++){const h=(n[c][0]+n[c+1][0])*.5,f=(n[c][1]+n[c+1][1])*.5,u=ma([0,h,f-.35]),p=(c===1||c===7)&&r>=1&&r<=8,g=c===4&&r>=4&&r<=7;i.quad(s(o,n[c]),s(o,n[c+1]),s(a,n[c+1]),s(a,n[c]),u,p?1:g?.55:0)}const l=n.length-1;i.quad(s(o,n[0]),s(o,n[l]),s(a,n[l]),s(a,n[0]),[0,0,-1],0)}for(let r=0;r<2;r++){const o=r===0?e[0]:e[e.length-1],a=[r===0?1:-1,0,0],l=[o.x,0,(o.bottom+o.top)*.5];for(let c=0;c+1<n.length;c++)i.tri(l,s(o,n[c]),s(o,n[c+1]),a,r===1?1:.6)}return i.geometry()}const r_=`
attribute float glow;
varying vec3 vN;
varying vec3 vV;
varying float vGlow;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vV = cameraPosition - wp.xyz;
  vGlow = glow;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,o_=`
uniform vec3 uColor;
uniform float uGlow;
uniform vec3 uBody;
varying vec3 vN;
varying vec3 vV;
varying float vGlow;
void main() {
  float k = 1.0 - clamp(dot(normalize(vN), normalize(vV)), 0.0, 1.0);
  float rim = k * k * k;
  vec3 body = uBody + uColor * 0.6 * rim;
  gl_FragColor = vec4(mix(body, uColor * uGlow, clamp(vGlow, 0.0, 1.0)), 1.0);
}
`;function a_(i){return new pe({vertexShader:r_,fragmentShader:o_,uniforms:{uColor:{value:new D(i[0],i[1],i[2])},uGlow:{value:7},uBody:{value:new D(.015,.02,.035)}}})}const l_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,c_=`
uniform vec3 uColor;
uniform float uGlow;
varying vec2 vUv;
void main() {
  float f = 1.0 - clamp(length(vUv - 0.5) * 2.0, 0.0, 1.0);
  gl_FragColor = vec4(uColor * uGlow * (f * f), 1.0);
}
`;function h_(i,t){return new pe({vertexShader:l_,fragmentShader:c_,uniforms:{uColor:{value:new D(i[0],i[1],i[2])},uGlow:{value:t}},blending:ds,transparent:!0,depthWrite:!1,side:en})}function u_(){const i=new oi(2.4,4.2);return i.rotateX(-Math.PI/2),i}const f_=1.15,Yl=28*Math.PI/180;class d_{group=new si;views=[];bikes=[];glows=[];from=new D;to=new D;constructor(){const t=s_(),e=u_();for(let n=0;n<pt;n++){const s=hn[n],r=new ve(t,a_(s));r.scale.setScalar(f_),r.rotation.order="YXZ",r.visible=!1;const o=new ve(e,h_(s,1.6));o.visible=!1,o.renderOrder=2,this.bikes.push(r),this.glows.push(o),this.group.add(r,o),this.views.push({visible:!1,pos:new D,lastPos:new D,heading:0,roll:0,spawnTick:-1})}}reset(){for(let t=0;t<pt;t++){const e=this.views[t];e.visible=!1,e.spawnTick=-1,e.roll=0,this.bikes[t].visible=!1,this.glows[t].visible=!1}}update(t,e){const n=t.state,s=t.previousState,r=Yo(t.tickAlpha,0,1);for(let o=0;o<pt;o++){const a=n.cycles[o],l=s.cycles[o],c=this.views[o],h=this.bikes[o],f=this.glows[o];if(!a||!a.active||!a.alive){c.visible&&(h.visible=!1,f.visible=!1),c.visible=!1;continue}gs(a.x,a.y,this.to),!!l&&l.active&&l.alive&&l.spawnTick===a.spawnTick?gs(l.x,l.y,this.from):this.from.copy(this.to);const p=this.to.x-this.from.x,g=this.to.z-this.from.z,x=p*p+g*g>.01?Yg(p,g):qg(a.dir);(!c.visible||c.spawnTick!==a.spawnTick)&&(c.heading=x,c.roll=0,c.spawnTick=a.spawnTick);const m=Li(x-c.heading);c.heading=Li(c.heading+m*Ii(e,.05));const d=Yo(m*.35,-Yl,Yl);c.roll+=(d-c.roll)*Ii(e,.08),c.pos.lerpVectors(this.from,this.to,r),c.lastPos.copy(c.pos),c.visible=!0,h.visible=!0,h.position.copy(c.pos),h.rotation.set(0,-c.heading,-c.roll),f.visible=!0,f.position.set(c.pos.x,.03,c.pos.z),f.rotation.y=-c.heading}}}const p_=.75,$l=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,m_=`
uniform sampler2D uTerritory;
uniform float uHalf;
varying vec3 vWorld;
${pa}

void main() {
  float N = ${qt.toFixed(1)};
  float inv = 1.0 / N;
  // grid coordinates in cells: x north (-Z), y east (+X)
  vec2 g = vec2((uHalf - vWorld.z), (vWorld.x + uHalf)) * (N / (2.0 * uHalf));
  vec2 cell = clamp(floor(g), 0.0, N - 1.0);
  vec2 f = g - cell;
  vec2 cuv = (cell + 0.5) * inv;
  vec4 c = texture2D(uTerritory, cuv);
  vec3 own = c.rgb;
  float owned = step(0.002, max(own.r, max(own.g, own.b)));

  // 4-neighbours; outside the arena counts as free
  vec3 nl = texture2D(uTerritory, cuv - vec2(inv, 0.0)).rgb * step(0.5, cell.x);
  vec3 nr = texture2D(uTerritory, cuv + vec2(inv, 0.0)).rgb * step(cell.x + 1.5, N);
  vec3 nd = texture2D(uTerritory, cuv - vec2(0.0, inv)).rgb * step(0.5, cell.y);
  vec3 nu = texture2D(uTerritory, cuv + vec2(0.0, inv)).rgb * step(cell.y + 1.5, N);
  vec3 al = abs(own - nl);
  vec3 ar = abs(own - nr);
  vec3 ad = abs(own - nd);
  vec3 au = abs(own - nu);
  float el = step(0.02, max(al.r, max(al.g, al.b)));
  float er = step(0.02, max(ar.r, max(ar.g, ar.b)));
  float ed = step(0.02, max(ad.r, max(ad.g, ad.b)));
  float eu = step(0.02, max(au.r, max(au.g, au.b)));

  // pixel footprint in cells: edges soften and thin lines dim with distance (no far-grid shimmer)
  vec2 fw = fwidth(g);
  float soft = max(0.03, 1.2 * max(fw.x, fw.y));

  vec2 e = min(f, 1.0 - f);
  float minor = (1.0 - smoothstep(0.012, 0.012 + soft, min(e.x, e.y))) * clamp(0.027 / (0.012 + 0.5 * soft), 0.0, 1.0);
  vec2 fm = fract(g * 0.125);
  vec2 em = min(fm, 1.0 - fm) * 8.0;
  float major = (1.0 - smoothstep(0.03, 0.03 + soft, min(em.x, em.y))) * clamp(0.045 / (0.03 + 0.5 * soft), 0.0, 1.0);
  float grid = max(minor, 1.7 * major);

  float bw = 0.12;
  float bs = 0.5 * soft;
  float border = max(max(el * (1.0 - smoothstep(bw - bs, bw + bs, f.x)),
                         er * (1.0 - smoothstep(bw - bs, bw + bs, 1.0 - f.x))),
                     max(ed * (1.0 - smoothstep(bw - bs, bw + bs, f.y)),
                         eu * (1.0 - smoothstep(bw - bs, bw + bs, 1.0 - f.y)))) * owned;

  vec3 col = vec3(0.004, 0.006, 0.016) + vec3(0.03, 0.12, 0.18) * grid;
  col += own * (0.16 * owned + 2.5 * border + 1.5 * clamp(c.a, 0.0, 1.0));
  col = mix(col, uFogColor, heightFog(vWorld));
  gl_FragColor = vec4(col, 1.0);
}
`,g_=`
uniform vec3 uGrid;
varying vec3 vWorld;
varying vec2 vUv;
${pa}
void main() {
  // ~128 lines across the plane (40 m apart), major every 8, fading to black away from the centre
  vec2 q = vUv - 0.5;
  float fade = clamp(1.0 - length(q) * 2.0, 0.0, 1.0);
  fade = fade * fade * fade;
  vec2 g = vUv * 128.0;
  vec2 fw = fwidth(g);
  float soft = max(0.008, 1.2 * max(fw.x, fw.y));
  vec2 fl = fract(g);
  vec2 e = min(fl, 1.0 - fl);
  float lines = (1.0 - smoothstep(0.004, 0.004 + soft, min(e.x, e.y))) * clamp(0.008 / (0.004 + 0.5 * soft), 0.0, 1.0);
  vec2 fm = fract(g * 0.125);
  vec2 em = min(fm, 1.0 - fm) * 8.0;
  float major = (1.0 - smoothstep(0.01, 0.01 + soft, min(em.x, em.y))) * clamp(0.014 / (0.01 + 0.5 * soft), 0.0, 1.0);
  vec3 col = uGrid * (max(lines, 1.8 * major) + 0.06) * fade;
  col = mix(col, uFogColor, heightFog(vWorld));
  gl_FragColor = vec4(col, 1.0);
}
`;class __{floor;ground;texture;texels=new Uint8Array(Yt*4);lastOwner=new Uint8Array(Yt);flash=new Float32Array(Yt);colors;flashActive=!1;dirty=!0;constructor(){this.colors=new Uint8Array((hn.length+1)*3),hn.forEach((n,s)=>{for(let r=0;r<3;r++)this.colors[(s+1)*3+r]=Math.round(Math.min(Math.max(n[r],0),1)*255)}),this.texture=new kc(this.texels,qt,qt,Ye,fn),this.texture.magFilter=Ce,this.texture.minFilter=Ce,this.texture.generateMipmaps=!1,this.texture.colorSpace=yn,this.texture.needsUpdate=!0;const t=new oi(wi,wi);t.rotateX(-Math.PI/2),this.floor=new ve(t,new pe({vertexShader:$l,fragmentShader:m_,uniforms:{uTerritory:{value:this.texture},uHalf:{value:wi/2},...$o}}));const e=new oi(wi*40,wi*40);e.rotateX(-Math.PI/2),this.ground=new ve(e,new pe({vertexShader:$l,fragmentShader:g_,uniforms:{uGrid:{value:new D(.02,.06,.1)},...$o}})),this.ground.position.y=-.06}reset(){this.lastOwner.fill(0),this.flash.fill(0),this.flashActive=!1,this.dirty=!0}update(t,e){const n=this.lastOwner;let s=!1;for(let r=0;r<Yt;r++){const o=t[r];o!==n[r]&&(o!==0&&(this.flash[r]=1,this.flashActive=!0),n[r]=o,s=!0)}if(s&&(this.dirty=!0),this.flashActive){this.flashActive=!1;const r=e/p_,o=this.flash;for(let a=0;a<Yt;a++)o[a]>0&&(o[a]=Math.max(0,o[a]-r),o[a]>0&&(this.flashActive=!0));this.dirty=!0}this.dirty&&this.upload()}upload(){this.dirty=!1;const t=this.texels,e=this.colors,n=this.lastOwner,s=this.flash;for(let r=0;r<Yt;r++){const o=n[r]<=hn.length?n[r]:0,a=r*4;t[a]=e[o*3],t[a+1]=e[o*3+1],t[a+2]=e[o*3+2],t[a+3]=Math.round(s[r]*255)}this.texture.needsUpdate=!0}}const ye=640;class v_{mesh;n=0;px=new Float32Array(ye);py=new Float32Array(ye);pz=new Float32Array(ye);vx=new Float32Array(ye);vy=new Float32Array(ye);vz=new Float32Array(ye);wx=new Float32Array(ye);wy=new Float32Array(ye);wz=new Float32Array(ye);age=new Float32Array(ye);life=new Float32Array(ye);size=new Float32Array(ye);grav=new Float32Array(ye);col=new Float32Array(ye*3);colors;m=new ne;q=new wn;e=new dn;p=new D;s=new D;constructor(){this.mesh=new zc(new Rn(1,1,1),new Wi({color:16777215}),ye),this.mesh.instanceMatrix.setUsage(Ka),this.colors=new ms(new Float32Array(ye*3),3),this.colors.setUsage(Ka),this.mesh.instanceColor=this.colors,this.mesh.count=0,this.mesh.frustumCulled=!1}reset(){this.n=0,this.mesh.count=0}burst(t,e,n,s,r,o,a,l=.5){for(let c=0;c<n&&this.n<ye;c++){const h=this.n++;let[f,u,p]=Kl();u=Math.abs(u)*l+u*(1-l);const g=Math.hypot(f,u,p)||1,x=s*(.35+Math.random()*.65)/g;f*=x,u*=x,p*=x;const[m,d,b]=Kl();this.px[h]=t.x+m*r,this.py[h]=t.y+d*r,this.pz[h]=t.z+b*r,this.vx[h]=f,this.vy[h]=u,this.vz[h]=p,this.wx[h]=(Math.random()*2-1)*7,this.wy[h]=(Math.random()*2-1)*7,this.wz[h]=(Math.random()*2-1)*7,this.age[h]=0,this.life[h]=o*(.6+Math.random()*.4),this.size[h]=r*(.5+Math.random()*.9),this.grav[h]=a,this.col[h*3]=e[0],this.col[h*3+1]=e[1],this.col[h*3+2]=e[2]}}update(t){if(this.n===0&&this.mesh.count===0)return;const e=Math.exp(-1.6*t);for(let s=this.n-1;s>=0;s--){if(this.age[s]+=t,this.age[s]>=this.life[s]){this.removeAt(s);continue}this.vy[s]-=this.grav[s]*t,this.vx[s]*=e,this.vy[s]*=e,this.vz[s]*=e,this.px[s]+=this.vx[s]*t,this.py[s]+=this.vy[s]*t,this.pz[s]+=this.vz[s]*t;const r=this.size[s]*.5;this.py[s]<r&&(this.py[s]=r,this.vy[s]=Math.abs(this.vy[s])*.3,this.vx[s]*=.7,this.vz[s]*=.7)}const n=this.colors.array;for(let s=0;s<this.n;s++){const r=this.age[s]/this.life[s],o=this.size[s]*(1-r*r),a=this.age[s];this.q.setFromEuler(this.e.set(this.wx[s]*a,this.wy[s]*a,this.wz[s]*a)),this.m.compose(this.p.set(this.px[s],this.py[s],this.pz[s]),this.q,this.s.set(o,o,o)),this.mesh.setMatrixAt(s,this.m);const l=9*(1-r)+.5;n[s*3]=this.col[s*3]*l,n[s*3+1]=this.col[s*3+1]*l,n[s*3+2]=this.col[s*3+2]*l}this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.colors.needsUpdate=!0}removeAt(t){const e=--this.n;t!==e&&(this.px[t]=this.px[e],this.py[t]=this.py[e],this.pz[t]=this.pz[e],this.vx[t]=this.vx[e],this.vy[t]=this.vy[e],this.vz[t]=this.vz[e],this.wx[t]=this.wx[e],this.wy[t]=this.wy[e],this.wz[t]=this.wz[e],this.age[t]=this.age[e],this.life[t]=this.life[e],this.size[t]=this.size[e],this.grav[t]=this.grav[e],this.col[t*3]=this.col[e*3],this.col[t*3+1]=this.col[e*3+1],this.col[t*3+2]=this.col[e*3+2])}}function Kl(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return[e*Math.cos(t),i,e*Math.sin(t)]}const Hc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ji{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const x_=new Dc(-1,1,1,-1,0,1);class M_ extends sn{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const S_=new M_;class ga{constructor(t){this._mesh=new ve(S_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,x_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class y_ extends ji{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ar.clone(t.uniforms),this.material=new pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ga(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jl extends ji{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class E_ extends ji{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class T_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Nt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new y_(Hc),this.copyPass.material.blending=Tn,this.clock=new Wg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jl!==void 0&&(o instanceof jl?n=!0:o instanceof E_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class b_ extends ji{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ht}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const A_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ht(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class qi extends ji{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new Ht(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new $e(r,o,{type:un});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new $e(r,o,{type:un});p.texture.name="UnrealBloomPass.v"+f,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=A_;this.highPassUniforms=ar.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Hc;this.copyUniforms=ar.clone(h.uniforms),this.blendMaterial=new pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ds,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ht,this.oldClearAlpha=1,this.basic=new Wi,this.fsQuad=new ga(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}qi.BlurDirectionX=new Nt(1,0);qi.BlurDirectionY=new Nt(0,1);class w_ extends qi{scale=1;setSize(t,e){super.setSize(Math.max(2,Math.round(t*this.scale)),Math.max(2,Math.round(e*this.scale)))}}const R_=`
precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,C_=`
precision highp float;
uniform sampler2D tDiffuse;
uniform float uAspect;
uniform float uVignette;
uniform float uSaturation;
#include <tonemapping_pars_fragment>
#include <colorspace_pars_fragment>
varying vec2 vUv;
void main() {
  vec3 col = texture2D(tDiffuse, vUv).rgb;
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(l), col, uSaturation), 0.0);
  vec2 q = (vUv - 0.5) * vec2(uAspect, 1.0);
  float r2 = dot(q, q) / (0.25 * (uAspect * uAspect + 1.0)); // 0 centre .. 1 corners
  col *= 1.0 - uVignette * r2 * (0.6 + 0.4 * r2);
  col = ACESFilmicToneMapping(col);
  gl_FragColor = sRGBTransferOETF(vec4(col, 1.0));
}
`;class P_ extends ji{material;quad;constructor(){super(),this.material=new Vg({vertexShader:R_,fragmentShader:C_,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uAspect:{value:16/9},uVignette:{value:.42},uSaturation:{value:1.1}},depthTest:!1,depthWrite:!1}),this.quad=new ga(this.material)}render(t,e,n){this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.toneMappingExposure.value=t.toneMappingExposure,t.setRenderTarget(this.renderToScreen?null:e),!this.renderToScreen&&this.clear&&t.clear(),this.quad.render(t)}setSize(t,e){this.material.uniforms.uAspect.value=t/Math.max(1,e)}dispose(){this.material.dispose(),this.quad.dispose()}}class L_{composer;bloom;final;renderPass;renderer;constructor(t,e,n,s){this.renderer=t,this.renderPass=new b_(e,n),this.bloom=new w_(new Nt(256,256),.32,.45,.6),this.final=new P_,this.composer=this.build(s)}build(t){const e=new $e(1,1,{type:un,samples:t.msaa}),n=new T_(this.renderer,e);return this.bloom.scale=t.bloomScale,n.addPass(this.renderPass),n.addPass(this.bloom),n.addPass(this.final),n}setQuality(t,e,n){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer=this.build(t),this.setSize(e,n)}setSize(t,e){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e)}render(t){this.composer.render(t)}}const qs={high:{maxPixelRatio:2,bloomScale:1,towers:170,msaa:4},low:{maxPixelRatio:1.5,bloomScale:.5,towers:80,msaa:0}},Gc="neon-circuit/quality";function I_(){try{const i=new URLSearchParams(window.location.search).get("quality");if(i==="high"||i==="low")return i}catch{}try{const i=window.localStorage.getItem(Gc);if(i==="high"||i==="low")return i}catch{}return D_()}function D_(){const i=window.matchMedia?.("(pointer: coarse)").matches??!1,t=Math.min(window.screen?.width??1920,window.screen?.height??1080),e=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);return i||e||t<600?"low":"high"}function U_(i){try{window.localStorage.setItem(Gc,i)}catch{}}const N_=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,F_=`
uniform float uTime;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
varying vec3 vWorld;

void main() {
  vec3 d = normalize(vWorld - cameraPosition);
  float h = d.y;
  float hp = max(h, 0.0);
  vec3 s = normalize(uSunDir);

  // dark gradient with a magenta-purple glow towards the horizon, warmer under the sun
  vec3 col = mix(uZenith, uHorizon, exp(-hp * 7.0));
  col += uHorizon * 1.2 * exp(-hp * 45.0);
  vec2 dh = normalize(d.xz + 1e-5);
  vec2 sh = normalize(s.xz + 1e-5);
  float az = clamp(dot(dh, sh) * 0.5 + 0.5, 0.0, 1.0);
  col += uSunColor * 0.12 * exp(-hp * 5.0) * az * az * az;

  // retro sun: ~8 degree disc, yellow-orange top to magenta bottom, cut-out stripes on the lower half
  vec3 rt = normalize(cross(vec3(0.0, 1.0, 0.0), s) + vec3(1e-5, 0.0, 0.0));
  vec3 su = cross(s, rt);
  float cs = dot(d, s);
  float front = step(0.0, cs);
  vec2 sp = vec2(dot(d, rt), dot(d, su)) / (max(cs, 1e-3) * 0.1405);
  float r = length(sp);
  float disc = (1.0 - smoothstep(0.985, 1.0, r)) * front;
  vec3 sunCol = mix(uSunColor, vec3(1.0, 0.78, 0.18), clamp(sp.y * 0.5 + 0.5, 0.0, 1.0));
  float yb = clamp(-sp.y, 0.0, 1.0);
  float band = fract(yb * 6.5);
  float gap = 0.08 + 0.5 * yb;
  float stripe = smoothstep(gap - 0.035, gap + 0.035, band) * (1.0 - smoothstep(0.965, 1.0, band));
  stripe = mix(1.0, stripe, step(sp.y, 0.0));
  // (x1.8 instead of UE's x3: three's ACES curve runs ~1.7x hotter, and the gradient should survive it)
  col = mix(col, sunCol * 1.8, disc * stripe);
  float halo = exp(-max(r - 1.0, 0.0) * 3.0) * front;
  col += uSunColor * 0.4 * halo * (1.0 - disc);

  // sparse twinkling stars higher up (hash of a 3D cell around the direction), at least ~1 px wide
  vec3 q = d * 150.0;
  vec3 qi = floor(q);
  vec3 p3 = fract(qi * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  float hA = fract((p3.x + p3.y) * p3.z);
  float hB = fract((p3.x + p3.z) * p3.y);
  float hC = fract((p3.y + p3.z) * p3.x);
  vec3 dv = (q - qi) - (0.25 + 0.5 * vec3(hA, hB, hC));
  float px = length(fwidth(q));
  float sig = max(0.0816, 0.7 * px);
  float star = step(0.985, hC) * exp(-dot(dv, dv) / (sig * sig)) * min(1.0, 0.16 / sig);
  float tw = 0.55 + 0.45 * sin(uTime * (1.3 + 2.5 * hA) + hB * 6.2831853);
  vec3 starCol = mix(vec3(0.75, 0.82, 1.0), vec3(1.0, 0.85, 0.95), hA);
  col += starCol * star * tw * (1.0 + 2.0 * hB * hB) * smoothstep(0.12, 0.4, h) * (1.0 - clamp(halo + disc, 0.0, 1.0));

  // black below the horizon
  col *= smoothstep(-0.004, 0.0015, h);
  gl_FragColor = vec4(col, 1.0);
}
`;class O_{mesh;material;constructor(){this.material=new pe({vertexShader:N_,fragmentShader:F_,uniforms:{uTime:{value:0},uZenith:{value:new D(0,0,.004)},uHorizon:{value:new D(.12,.01,.12)},uSunColor:{value:new D(1,.25,.55)},uSunDir:{value:new D(-Math.SQRT1_2,.08,Math.SQRT1_2).normalize()}},side:Re,depthWrite:!1,depthTest:!1}),this.mesh=new ve(new da(1500,48,24),this.material),this.mesh.renderOrder=-100,this.mesh.frustumCulled=!1}update(t,e){this.mesh.position.copy(t),this.material.uniforms.uTime.value=e}}const Zl=1.5,B_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,k_=`
uniform vec3 uColor;
uniform float uGlow;
uniform float uTime;
varying vec2 vUv;
void main() {
  // vUv.x = distance along the trail in cells, vUv.y = 0 at the bottom edge, 1 at the top edge
  float v = clamp(vUv.y, 0.0, 1.0);
  float v2 = v * v;
  float profile = 0.18 + 0.5 * v2 * v2 + 2.2 * smoothstep(0.9, 1.0, v);
  float bottom = 0.4 + 0.6 * smoothstep(0.0, 0.35, v);
  float bands = 0.85 + 0.15 * sin(6.2831853 * (vUv.x * 0.6 - uTime * 1.5));
  gl_FragColor = vec4(uColor * uGlow * profile * bottom * bands, 1.0);
}
`;class z_{mesh;geometry=new sn;capacity=0;positions=new Float32Array(0);uvs=new Float32Array(0);key="";points=[];staticQuads=0;headU=0;tmp=new D;constructor(t){this.mesh=new ve(this.geometry,t),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.renderOrder=3,this.ensure(32)}hide(){this.mesh.visible=!1,this.key=""}update(t,e,n,s){let r=n*31+t|0;for(let a=0;a<e.length;a++)r=Math.imul(r,31)+e[a]|0;const o=`${e.length}:${r}`;o!==this.key&&(this.key=o,this.rebuild(t,e)),this.writeHead(s),this.mesh.visible=!0}rebuild(t,e){const n=[],s=l=>{Xg(l,this.tmp),n.push(this.tmp.x,this.tmp.z)};s(t>=0?t:e[0]);for(let l=0;l+1<e.length;l++)s(e[l]);s(e[e.length-1]);for(let l=n.length/2-2;l>=1;l--){const c=n[l*2]-n[l*2-2],h=n[l*2+1]-n[l*2-1],f=n[l*2+2]-n[l*2],u=n[l*2+3]-n[l*2+1],p=Math.hypot(c,h),g=Math.hypot(f,u);(p<.001||g<.001||(c*f+h*u)/(p*g)>.999)&&n.splice(l*2,2)}this.points=n;const r=n.length/2;this.ensure(r);let o=0,a=0;for(let l=0;l+2<r;l++){const c=Math.hypot(n[l*2+2]-n[l*2],n[l*2+3]-n[l*2+1]);c<.005||(this.writeQuad(a++,n[l*2],n[l*2+1],n[l*2+2],n[l*2+3],o,o+c/Fi),o+=c/Fi)}this.staticQuads=a,this.headU=o}writeHead(t){const e=this.points.length/2,n=this.points[(e-2)*2],s=this.points[(e-2)*2+1],r=Math.hypot(t.x-n,t.z-s);let o=this.staticQuads;r>=.005&&this.writeQuad(o++,n,s,t.x,t.z,this.headU,this.headU+r/Fi),this.geometry.setDrawRange(0,o*6),this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.getAttribute("uv").needsUpdate=!0}writeQuad(t,e,n,s,r,o,a){const l=this.positions,c=this.uvs,h=t*12;l[h]=e,l[h+1]=0,l[h+2]=n,l[h+3]=s,l[h+4]=0,l[h+5]=r,l[h+6]=s,l[h+7]=Zl,l[h+8]=r,l[h+9]=e,l[h+10]=Zl,l[h+11]=n;const f=t*8;c[f]=o,c[f+1]=0,c[f+2]=a,c[f+3]=0,c[f+4]=a,c[f+5]=1,c[f+6]=o,c[f+7]=1}ensure(t){if(t<=this.capacity)return;let e=Math.max(32,this.capacity);for(;e<t;)e*=2;this.capacity=e,this.positions=new Float32Array(e*12),this.uvs=new Float32Array(e*8);const n=new Uint32Array(e*6);for(let s=0;s<e;s++){const r=s*4;n.set([r,r+1,r+2,r,r+2,r+3],s*6)}this.geometry.setAttribute("position",new Ne(this.positions,3)),this.geometry.setAttribute("uv",new Ne(this.uvs,2)),this.geometry.setIndex(new Ne(n,1))}}class H_{group=new si;walls=[];materials=[];constructor(){for(let t=0;t<pt;t++){const e=hn[t],n=new pe({vertexShader:B_,fragmentShader:k_,uniforms:{uColor:{value:new D(e[0],e[1],e[2])},uGlow:{value:3},uTime:{value:0}},blending:ds,transparent:!0,depthWrite:!1,side:en}),s=new z_(n);this.materials.push(n),this.walls.push(s),this.group.add(s.mesh)}}reset(){for(const t of this.walls)t.hide()}update(t,e,n){const s=n%20;for(const o of this.materials)o.uniforms.uTime.value=s;const r=t.state;for(let o=0;o<pt;o++){const a=r.cycles[o],l=this.walls[o];if(!a||!a.active||!a.alive||a.trail.length===0||!e[o].visible){l.mesh.visible&&l.hide();continue}l.update(a.trailOrigin,a.trail,a.spawnTick,e[o].pos)}}}const G_=[1,1,1],V_=90*Math.PI/180,W_=80*Math.PI/180;class X_{gl;scene=new Hg;camera=new qe(60,16/9,.3,4e3);rig=new Jg;floor=new __;cycles=new d_;trails=new H_;fx=new v_;sky=new O_;city=new e_;post;qualityName;width=1;height=1;time=0;tmp=new D;constructor(t,e){this.gl=new zg({canvas:t,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=ke,this.gl.toneMapping=bn,this.gl.toneMappingExposure=1,this.gl.setClearColor(0,1),this.qualityName=e,this.scene.add(this.sky.mesh,this.floor.ground,this.floor.floor,Kg(),this.city.mesh,this.cycles.group,this.trails.group,this.fx.mesh),this.post=new L_(this.gl,this.scene,this.camera,qs[e]),this.city.setCount(qs[e].towers)}get quality(){return this.qualityName}setQuality(t){if(t===this.qualityName)return;this.qualityName=t;const e=qs[t];this.city.setCount(e.towers),this.applySize(),this.post.setQuality(e,this.width,this.height)}resize(t,e){this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(e)),this.applySize(),this.post.setSize(this.width,this.height)}applySize(){const t=Math.min(window.devicePixelRatio||1,qs[this.qualityName].maxPixelRatio);this.gl.setPixelRatio(t),this.gl.setSize(this.width,this.height,!1);const e=this.width/this.height,n=Math.min(2*Math.atan(Math.tan(V_/2)/e),W_);this.camera.fov=n*180/Math.PI,this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.city.setPixelAngle(2*Math.tan(n/2)/(this.height*t))}resetVisuals(){this.floor.reset(),this.cycles.reset(),this.trails.reset(),this.fx.reset()}shake(t){this.rig.shake(t)}handleEvent(t,e){const n=hn[t.slot]??hn[0],s=this.cycles.views[t.slot];if(s)switch(t.type){case oe.Death:{if(s.spawnTick>=0)this.tmp.copy(s.lastPos);else{const r=e.previousState.cycles[t.slot];gs(r.x,r.y,this.tmp)}this.tmp.y+=.5,this.fx.burst(this.tmp,n,90,9.5,.16,1.7,16,.7),this.fx.burst(this.tmp,G_,24,15,.07,.6,6,.4);break}case oe.Capture:{if(!s.visible)break;this.tmp.copy(s.pos),this.tmp.y+=.4,this.fx.burst(this.tmp,n,Yo(10+Math.floor(t.value/4),10,60),4.2,.09,1,-2.5,1.2);break}case oe.Spawn:{const r=e.state.cycles[t.slot];gs(r.x,r.y,this.tmp),this.tmp.y=.2,this.fx.burst(this.tmp,n,36,6,.1,.9,-4,1.5);break}}}update(t,e,n){this.time+=e,t&&t.hasMatch&&(this.floor.update(t.state.owner,e),this.cycles.update(t,e),this.trails.update(t,this.cycles.views,this.time)),this.fx.update(e),this.rig.update(this.camera,t,this.cycles.views,n,e),this.sky.update(this.camera.position,this.time),this.post.render(e)}}const q_=["engine_loop","turn","trail_start","capture","capture_big","kill","death","enemy_death","countdown","go","ui_click","ui_back","respawn","warning","round_win","round_end","music_game","music_menu"],Y_={music_game:1435119,music_menu:940800,engine_loop:88200},$_=2112,K_=.5,j_=.22;class Z_{ctx=null;sfxBus=null;musicBus=null;clips=new Map;loading=null;baseUrl;musicOn=!0;sfxOn=!0;wantMusic=null;music=null;engine=null;enginePitch=1;hidden=!1;constructor(t){this.baseUrl=t.endsWith("/")?t:`${t}/`}preload(){return this.loading||(this.loading=this.loadAll()),this.loading}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;try{this.ctx=new t({latencyHint:"interactive"})}catch(n){console.warn("[neon] audio unavailable:",n);return}this.sfxBus=this.ctx.createGain(),this.musicBus=this.ctx.createGain(),this.sfxBus.connect(this.ctx.destination),this.musicBus.connect(this.ctx.destination);const e=this.ctx.createBufferSource();e.buffer=this.ctx.createBuffer(1,1,22050),e.connect(this.ctx.destination),e.start(0),this.preload().then(()=>this.syncMusic())}this.ctx.state!=="running"&&!this.hidden&&this.ctx.resume().then(()=>this.syncMusic(),()=>{})}get unlocked(){return!!this.ctx&&this.ctx.state==="running"}setEnabled(t,e){this.musicOn=t,this.sfxOn=e,e||this.stopEngine(),this.syncMusic()}play(t,e=1,n=1){const s=this.ctx;if(!this.sfxOn||!s||s.state!=="running"||!this.sfxBus)return;const r=this.clips.get(t);if(!r)return;const o=s.createBufferSource();o.buffer=r.buffer,o.playbackRate.value=n;const a=s.createGain();a.gain.value=e,o.connect(a).connect(this.sfxBus),o.start(0,r.start),o.onended=()=>a.disconnect()}setMusic(t){this.wantMusic!==t&&(this.wantMusic=t,this.syncMusic())}setEngine(t,e,n){const s=this.ctx,r=t&&this.sfxOn&&!!s&&s.state==="running"&&this.clips.has("engine_loop");if(r&&!this.engine&&s&&this.sfxBus?(this.engine=this.startLoop("engine_loop",this.sfxBus,j_,.4),this.enginePitch=1):!r&&this.engine&&this.stopEngine(),this.engine){const o=e?1.12:1;this.enginePitch+=(o-this.enginePitch)*Math.min(1,n*3),this.engine.src.playbackRate.value=this.enginePitch}}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend().catch(()=>{}):this.ctx.resume().then(()=>this.syncMusic(),()=>{}))}stopEngine(){this.engine&&(this.fadeOutAndStop(this.engine,.3),this.engine=null)}syncMusic(){if(!this.ctx||!this.musicBus)return;const e=this.musicOn?this.wantMusic:null;if(this.music&&this.music.name===e||(this.music&&(this.fadeOutAndStop(this.music,.8),this.music=null),!e||!this.clips.has(e)))return;const n=this.startLoop(e,this.musicBus,K_,1.2);n&&(this.music={...n,name:e})}startLoop(t,e,n,s){const r=this.ctx,o=this.clips.get(t);if(!r||!o)return null;const a=r.createBufferSource();a.buffer=o.buffer,a.loop=!0,a.loopStart=o.start,a.loopEnd=o.end;const l=r.createGain(),c=r.currentTime;return l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(n,c+s),a.connect(l).connect(e),a.start(0,o.start),{src:a,gain:l}}fadeOutAndStop(t,e){const n=this.ctx;if(!n)return;const s=n.currentTime;t.gain.gain.cancelScheduledValues(s),t.gain.gain.setValueAtTime(t.gain.gain.value,s),t.gain.gain.linearRampToValueAtTime(0,s+e);try{t.src.stop(s+e+.05)}catch{}t.src.onended=()=>t.gain.disconnect()}async loadAll(){const t=window.OfflineAudioContext,e=t?new t(1,1,44100):null;await Promise.all(q_.map(async n=>{try{const s=await fetch(`${this.baseUrl}${n}.m4a`);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await s.arrayBuffer(),o=e??await this.waitForContext(),a=await new Promise((l,c)=>{o.decodeAudioData(r,l,c)?.catch?.(c)});this.clips.set(n,J_(n,a))}catch(s){console.warn(`[neon] sound ${n} unavailable:`,s)}})),this.syncMusic()}waitForContext(){return new Promise(t=>{const e=()=>{this.ctx?t(this.ctx):setTimeout(e,100)};e()})}}function J_(i,t){const e=t.sampleRate,n=t.length,s=Math.round($_*e/44100),r=t.getChannelData(0),o=(c,h)=>{for(let f=0;f<Math.min(h,n);f++)if(Math.abs(r[f])>c)return f;return Math.min(h,n)},a=Y_[i];if(a!==void 0){const c=Math.min(Math.round(a*e/44100),n);let h=0;return n-c>=Math.round(s*.9)&&o(.02,s*2)>=s*.7&&(h=Math.min(s,n-c)),{buffer:t,start:h/e,end:(h+c)/e}}const l=Math.min(o(1e-4,s+1),s);return{buffer:t,start:l/e,end:n/e}}const Q_=1.4;class t0{engine;lastWarning=-100;constructor(t){this.engine=t}handleEvent(t,e,n){if(n==="attract")return;const s=e.localSlot,r=this.engine;switch(t.type){case oe.Countdown:r.play("countdown",.5);break;case oe.Go:r.play("go",.9);break;case oe.RoundEnd:r.play(s>=0&&t.other===s?"round_win":"round_end",.9);break;case oe.Spawn:t.slot===s&&r.play("respawn",.7);break;case oe.TrailStart:t.slot===s&&r.play("trail_start",.45);break;case oe.Capture:t.slot===s&&r.play(t.value>=40?"capture_big":"capture",.85,Math.min(1.15,Math.max(.9,.9+t.value/400)));break;case oe.Death:t.slot===s?r.play("death",1):s>=0&&t.other===s?r.play("kill",.9):r.play("enemy_death",.45);break}}update(t,e,n,s,r){this.engine.setMusic(e==="attract"?"music_menu":"music_game");const o=t?t.localSlot:-1,a=t&&o>=0&&t.hasMatch?t.state.cycles[o]:null,l=e!=="attract"&&!!a&&a.alive&&t.state.phase===ce.Playing;this.engine.setEngine(l,!!a&&a.trail.length>0,r),n&&e!=="attract"&&s-this.lastWarning>Q_&&(this.lastWarning=s,this.engine.play("warning",.55))}steer(){this.engine.play("turn",.25,.95+Math.random()*.1)}click(){this.engine.play("ui_click",.6)}back(){this.engine.play("ui_back",.6)}}function Q(i,t="",e={},...n){const s=document.createElement(i);t&&(s.className=t);for(const[r,o]of Object.entries(e))o===void 0||o===!1||s.setAttribute(r,o===!0?"":String(o));for(const r of n)s.append(r);return s}function Lt(i,t){i.textContent!==t&&(i.textContent=t)}function le(i,t,e){i.style.getPropertyValue(t)!==e&&i.style.setProperty(t,e)}function ae(i,t){i.hidden===t&&(i.hidden=!t)}function as(i){const t=i*100/Yt;return t>0&&t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function e0(i){return`${(i*100/Yt).toFixed(1)}%`}function Jl(i){return`${Math.floor(i/10)}.${i%10}%`}function n0(i){const t=Math.max(0,Math.floor(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const tr=i=>{const t=Math.min(Math.max(i,0),1);return t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055};function Ri(i,t,e,n=1){const s=r=>Math.round(tr(r)*255);return n>=1?`rgb(${s(i)} ${s(t)} ${s(e)})`:`rgb(${s(i)} ${s(t)} ${s(e)} / ${n})`}function Vc(i){const t=hn[Math.min(Math.max(i,0),hn.length-1)];return[Math.max(t[0],.12),Math.max(t[1],.12),Math.max(t[2],.12)]}const Ql=hn.map((i,t)=>{const e=Vc(t);return Ri(e[0],e[1],e[2])});function Jn(i){return Ql[Math.min(Math.max(i,0),Ql.length-1)]}function tc(i,t,e){return[Math.round(tr(i)*255),Math.round(tr(t)*255),Math.round(tr(e)*255)]}const We={cyan:Ri(0,.88,1),magenta:Ri(1,.12,.78),amber:Ri(1,.68,.1),ink:Ri(.9,.95,1),dim:Ri(.42,.52,.68)};class i0{root;ctx;image;dots=[];territory=new Uint8Array((pt+1)*3);trail=new Uint8Array((pt+1)*3);lastTick=-1;lastState=null;constructor(){const t=Q("canvas","minimap-canvas",{width:qt,height:qt,"aria-hidden":"true"}),e=Q("div","minimap-dots");for(let n=0;n<pt;n++){const s=Q("div","minimap-dot");s.hidden=!0,this.dots.push(s),e.append(s)}this.root=Q("div","minimap",{role:"img","aria-label":"Arena minimap"},t,e),this.ctx=t.getContext("2d"),this.image=this.ctx?this.ctx.createImageData(qt,qt):null;for(let n=0;n<pt;n++){const[s,r,o]=Vc(n);this.territory.set(tc(s*.8,r*.8,o*.8),(n+1)*3),this.trail.set(tc(s+(1-s)*.45,r+(1-r)*.45,o+(1-o)*.45),(n+1)*3)}}reset(){this.lastTick=-1,this.lastState=null}update(t){const e=t.state;(e.tick!==this.lastTick||e!==this.lastState)&&(this.lastTick=e.tick,this.lastState=e,this.paint(t));const n=t.localSlot,s=t.previousState,r=Math.min(Math.max(t.tickAlpha,0),1);for(let o=0;o<pt;o++){const a=e.cycles[o],l=this.dots[o];if(!a||!a.active||!a.alive){ae(l,!1);continue}const c=s.cycles[o],h=!!c&&c.active&&c.alive&&c.spawnTick===a.spawnTick,f=h?c.x+(a.x-c.x)*r:a.x,u=h?c.y+(a.y-c.y)*r:a.y;ae(l,!0),l.classList.toggle("me",o===n),le(l,"left",`${((u+.5)/qt*100).toFixed(2)}%`),le(l,"top",`${((1-(f+.5)/qt)*100).toFixed(2)}%`),le(l,"background",o===n?"#fff":Jn(o))}}paint(t){if(!this.ctx||!this.image)return;const e=t.state,n=this.image.data;for(let s=0;s<Yt;s++){const r=ai(s),o=li(s),a=((qt-1-r)*qt+o)*4,l=e.trail[s],c=e.owner[s];l!==0&&l<=pt?(n[a]=this.trail[l*3],n[a+1]=this.trail[l*3+1],n[a+2]=this.trail[l*3+2],n[a+3]=255):c!==0&&c<=pt?(n[a]=this.territory[c*3],n[a+1]=this.territory[c*3+1],n[a+2]=this.territory[c*3+2],n[a+3]=255):n[a+3]=0}this.ctx.putImageData(this.image,0,0)}}const Ys=6,s0=4,r0=16,ec=1.3;function o0(i,t){switch(i){case fe.Cut:return`TRAIL CUT BY ${t}`;case fe.Wall:return"YOU HIT THE GRID WALL";case fe.SelfCut:return"YOU CROSSED YOUR OWN TRAIL";case fe.Collision:return t?`HEAD-ON WITH ${t}`:"HEAD-ON COLLISION";case fe.Erased:return t?`${t} TOOK ALL YOUR LAND`:"YOUR LAND WAS ERASED";default:return""}}function a0(i,t,e){switch(i){case fe.Cut:return`${t}  CUT  ${e}`;case fe.Wall:return`${e}  HIT THE WALL`;case fe.SelfCut:return`${e}  CUT THEMSELF`;case fe.Collision:return`${e}  CRASHED`;case fe.Erased:return t?`${t}  ERASED  ${e}`:`${e}  ERASED`;default:return""}}class l0{root;host;board;rows=[];timer;roundInfo;status;minimap=new i0;netInfo;bigWrap;big;bigSub;bigTimer=0;bigDuration=0;bigText="";popup;popupTimer=0;toast;toastTitle;toastText;toastTimer=0;feed=[];danger;stats;hint;boostButton;boostLabel;boostDetail;hintTimer=0;dangerClock=0;results;resultsTitle;resultRows=[];resultsFooter;pausePanel;cameraButton;qualityButton;botsButton;botsHelp;boostHelp;botsEnabled=!0;resumeButton;pausedState=!1;deathText="";constructor(t){this.host=t,this.board=Q("div","hud-board",{"aria-label":"Grid control"},Q("div","board-title",{},"GRID CONTROL"));for(let c=0;c<Ys;c++){const h={root:Q("div","board-row"),chip:Q("span","board-chip"),name:Q("span","board-name"),value:Q("span","board-value")};h.root.append(h.chip,h.name,h.value),this.rows.push(h),this.board.append(h.root)}this.timer=Q("div","hud-timer",{},"2:30"),this.roundInfo=Q("div","hud-round"),this.status=Q("div","hud-status",{role:"status"});const e=Q("div","hud-top",{},this.timer,this.roundInfo,this.status);this.netInfo=Q("div","hud-net");const n=Q("button","btn btn-cyan btn-menu",{type:"button"},"MENU");n.addEventListener("click",()=>{this.host.click(),this.togglePause()});const s=Q("div","hud-right",{},Q("div","minimap-frame",{},this.minimap.root),this.netInfo,n);this.big=Q("div","big-text",{"aria-live":"polite"}),this.bigSub=Q("div","big-sub"),this.bigWrap=Q("div","hud-big",{},this.big,this.bigSub),this.bigWrap.hidden=!0,this.popup=Q("div","hud-popup"),this.popup.hidden=!0,this.toastTitle=Q("div","toast-title"),this.toastText=Q("div","toast-text"),this.toast=Q("div","hud-toast",{role:"alert"},this.toastTitle,this.toastText),this.toast.hidden=!0;const r=Q("div","hud-feed");for(let c=0;c<s0;c++){const h=Q("div","feed-line");this.feed.push({el:h,age:99}),r.append(h)}this.danger=Q("div","hud-danger",{},"TRAIL EXPOSED - GET HOME"),this.danger.hidden=!0,this.stats=Q("div","hud-stats"),this.hint=Q("div","hud-hint");const o=Q("div","hud-bottom",{},this.danger,this.stats,this.hint);this.boostLabel=Q("span","boost-label",{},"BOOST × 1"),this.boostDetail=Q("span","boost-detail"),this.boostButton=Q("button","btn btn-amber hud-boost",{type:"button",disabled:!0},this.boostLabel,this.boostDetail),this.boostButton.addEventListener("click",()=>{this.host.click(),this.host.boost()}),this.resultsTitle=Q("div","results-title");const a=Q("div","results-table");for(let c=0;c<pt;c++){const h={root:Q("div","results-row"),rank:Q("span","r-rank"),name:Q("span","r-name"),pct:Q("span","r-pct"),cuts:Q("span","r-cuts"),best:Q("span","r-best")};h.root.append(h.rank,h.name,h.pct,h.cuts,h.best),this.resultRows.push(h),a.append(h.root)}this.resultsFooter=Q("div","results-footer"),this.results=Q("div","hud-results",{role:"region","aria-label":"Round results"},this.resultsTitle,a,this.resultsFooter),this.results.hidden=!0,this.resumeButton=Q("button","btn btn-cyan btn-wide",{type:"button"},"RESUME"),this.resumeButton.addEventListener("click",()=>{this.host.click(),this.setPaused(!1)}),this.cameraButton=Q("button","btn btn-amber btn-wide",{type:"button"},"CAMERA: CHASE"),this.cameraButton.addEventListener("click",()=>{this.host.click(),this.host.toggleCamera()}),this.qualityButton=Q("button","btn btn-gray btn-wide",{type:"button"},"GRAPHICS: HIGH"),this.qualityButton.addEventListener("click",()=>{this.host.click(),this.host.toggleQuality()}),this.botsButton=Q("button","btn btn-gray btn-wide",{type:"button"},"BOTS: ON"),this.botsButton.addEventListener("click",()=>{this.host.click(),this.host.setBotsEnabled(!this.botsEnabled)}),this.botsHelp=Q("div","pause-sub bots-help"),this.boostHelp=Q("div","pause-sub boost-help");const l=Q("button","btn btn-magenta btn-wide",{type:"button"},"LEAVE MATCH");l.addEventListener("click",()=>{this.host.click(),this.setPaused(!1),this.host.leaveMatch()}),this.pausePanel=Q("div","pause-backdrop",{},Q("div","pause-panel",{role:"dialog","aria-modal":"true","aria-label":"Menu"},Q("div","pause-title",{},"MENU"),Q("div","pause-sub",{},"THE GRID KEEPS RUNNING WHILE THIS IS OPEN"),this.resumeButton,this.cameraButton,this.qualityButton,this.botsButton,this.botsHelp,this.boostHelp,l)),this.pausePanel.hidden=!0,this.pausePanel.addEventListener("pointerdown",c=>{c.target===this.pausePanel&&this.setPaused(!1)}),this.root=Q("div","hud",{},this.board,e,s,this.bigWrap,this.popup,this.toast,r,o,this.boostButton,this.results,this.pausePanel),this.root.hidden=!0}get paused(){return this.pausedState}togglePause(){this.setPaused(!this.pausedState)}setPaused(t){t!==this.pausedState&&(this.pausedState=t,this.pausePanel.hidden=!t,t?this.resumeButton.focus({preventScroll:!0}):this.pausePanel.contains(document.activeElement)&&document.activeElement.blur(),this.host.pauseChanged(t))}onSessionStarted(){this.bigTimer=0,this.bigText="",this.popupTimer=0,this.hintTimer=r0,this.deathText="",this.setPaused(!1);for(const t of this.feed)t.age=99,Lt(t.el,"");this.minimap.reset(),this.bigWrap.hidden=!0,this.popup.hidden=!0,this.toastTimer=0,this.toast.hidden=!0}setVisible(t){ae(this.root,t),t||this.setPaused(!1)}showBig(t,e,n,s=""){this.bigText=t,Lt(this.big,t),Lt(this.bigSub,s),le(this.big,"color",e),this.big.classList.toggle("digits",/^\d$/.test(t)),this.bigTimer=this.bigDuration=n}showToast(t,e,n=4.5){Lt(this.toastTitle,t),Lt(this.toastText,e),this.toastTimer=n,le(this.toast,"opacity","1"),ae(this.toast,!0)}showPopup(t,e){Lt(this.popup,t),le(this.popup,"color",e),this.popupTimer=ec}addFeed(t,e){for(let s=0;s+1<this.feed.length;s++){const r=this.feed[s],o=this.feed[s+1];Lt(r.el,o.el.textContent??""),le(r.el,"color",o.el.style.color),r.age=o.age}const n=this.feed[this.feed.length-1];Lt(n.el,t),le(n.el,"color",e),n.age=0}handleEvent(t,e,n){if(n==="attract")return;const s=e.localSlot,r=e.state;switch(t.type){case oe.Countdown:this.showBig(String(t.value),We.ink,.95,t.value===3?`ROUND ${Math.max(1,r.round)}`:"");break;case oe.Go:this.showBig("GO!",We.cyan,.9,"CLAIM THE GRID");break;case oe.Death:{const o=e.slotName(t.slot),a=t.other>=0?e.slotName(t.other):"",l=a0(t.value,a,o);l&&this.addFeed(`${l}${s>=0&&t.other===s&&t.slot!==s?"  +1 BOOST":""}`,Jn(t.other>=0?t.other:t.slot)),t.slot===s?(this.deathText=o0(t.value,a),this.showBig("FLATLINED",We.magenta,2.4,this.deathText)):s>=0&&t.other===s&&this.showPopup("+1 BOOST",We.amber);break}case oe.Capture:t.slot===s&&t.value>0&&this.showPopup(`+${as(t.value)}`,Jn(s));break;case oe.Spawn:t.slot===s&&r.phase===ce.Playing&&r.cycles[s]?.deaths>0&&this.showBig("REBOOTED",We.cyan,1,"BACK ON THE GRID");break}}update(t,e,n){if(n.mode==="attract")return;const s=t.state,r=t.localSlot,o=t.hasMatch;if(ae(this.board,o),o&&(this.updateBoard(t),this.minimap.update(t)),s.phase===ce.Countdown)Lt(this.timer,"READY"),this.timer.classList.remove("urgent");else if(s.phase===ce.Playing){const u=s.phaseEndTick-s.tick;Lt(this.timer,n0(Math.ceil(u/_e))),this.timer.classList.toggle("urgent",u<10*_e)}else Lt(this.timer,"0:00");if(Lt(this.roundInfo,`ROUND ${Math.max(1,s.round)}  -  ${n.roomLabel}`),Lt(this.status,t.statusText),ae(this.status,t.statusText!==""),t.isOnline){const u=t.role==="host"?"HOST":"LINKED",p=t.role==="client"?`  ${t.pingMs}MS`:"";Lt(this.netInfo,`${u}  ${t.peerCount} PILOTS${p}`)}else Lt(this.netInfo,"OFFLINE - VS BOTS");Lt(this.cameraButton,n.overhead?"CAMERA: OVERHEAD":"CAMERA: CHASE"),Lt(this.qualityButton,`GRAPHICS: ${n.quality.toUpperCase()}`),this.botsEnabled=t.botsEnabled,Lt(this.botsButton,`BOTS: ${this.botsEnabled?"ON":"OFF"}`),this.botsButton.setAttribute("aria-pressed",String(this.botsEnabled)),this.botsButton.disabled=t.role!=="host",Lt(this.botsHelp,t.role==="host"?"CHANGES APPLY TO EVERYONE IN THIS ROOM.":"THE HOST CONTROLS THIS ROOM'S BOTS."),ae(this.botsButton,t.isOnline),ae(this.botsHelp,t.isOnline);const a=Jo/_e;Lt(this.boostHelp,`${n.touch?"TAP BOOST":"SPACE / SHIFT TO BOOST"}: 2× SPEED FOR ${a} SECONDS. START EACH ROUND WITH 1 CHARGE. EVERY KILL EARNS +1.`);const l=r>=0&&o?s.cycles[r]:null,c=!!l?.alive&&s.phase===ce.Playing&&l.boostUntilTick>s.tick,h=l?.boostCharges??0;ae(this.boostButton,!!l?.active),this.boostButton.disabled=!l?.alive||s.phase!==ce.Playing||h<=0||c||this.pausedState,this.boostButton.classList.toggle("boost-active",c),Lt(this.boostLabel,`BOOST × ${h}`);let f=n.touch?`2× SPEED · ${a} SEC`:`SPACE / SHIFT · ${a} SEC`;if(c&&l?f=`2× SPEED · ${Math.max(0,(l.boostUntilTick-s.tick-t.tickAlpha)/_e).toFixed(1)}s`:s.phase!==ce.Playing?f=s.phase===ce.Countdown?"READY AT GO":"NEXT ROUND":l?.alive?h<=0&&(f="KILL TO RECHARGE"):f="WAIT FOR REBOOT",Lt(this.boostDetail,f),this.boostButton.setAttribute("aria-label",`Boost, ${h} ${h===1?"charge":"charges"}. ${f}`),l){if(l.active&&!l.alive&&s.phase===ce.Playing&&l.respawnTick>s.tick){const u=Math.max(0,(l.respawnTick-s.tick-t.tickAlpha)/_e),p=`${this.deathText}${this.deathText?"   -   ":""}REBOOT IN ${u.toFixed(1)}`;this.bigTimer>0&&this.bigText==="FLATLINED"?(Lt(this.bigSub,p),this.bigTimer=Math.max(this.bigTimer,.45)):this.showBig("FLATLINED",We.magenta,.6,p)}Lt(this.stats,`YOU  ${as(l.area)}   -   ${l.kills} CUTS   -   BEST ${as(l.bestArea)}`),le(this.stats,"color",Jn(r)),ae(this.stats,!0)}else ae(this.stats,!1);if(this.bigTimer>0){this.bigTimer-=e;const u=1-this.bigTimer/Math.max(this.bigDuration,.01),p=1+.35*Math.max(0,1-u*5),g=Math.min(1,Math.max(0,this.bigTimer/.3));le(this.big,"transform",`scale(${p.toFixed(3)})`),le(this.bigWrap,"opacity",g.toFixed(3)),ae(this.bigWrap,!0)}else ae(this.bigWrap,!1);if(this.popupTimer>0){this.popupTimer-=e;const u=1-this.popupTimer/ec;le(this.popup,"transform",`translate(-50%, calc(-50% - ${(u*70).toFixed(1)} * var(--s) * 1px))`),le(this.popup,"opacity",Math.min(1,Math.max(0,this.popupTimer/.4)).toFixed(3)),ae(this.popup,!0)}else ae(this.popup,!1);this.toastTimer>0&&(this.toastTimer-=e,le(this.toast,"opacity",Math.min(1,Math.max(0,this.toastTimer/.6)).toFixed(3)),ae(this.toast,this.toastTimer>0));for(const u of this.feed)u.age+=e,le(u.el,"opacity",Math.min(1,Math.max(0,1-(u.age-5)/1.5)).toFixed(3));if(this.hintTimer>0&&r>=0){this.hintTimer-=e;const u=n.overhead?n.touch?"SWIPE TO STEER  -  LEAVE YOUR ZONE, LOOP BACK HOME TO CLAIM IT":"ARROW KEYS / WASD TO STEER  -  LEAVE YOUR ZONE, LOOP BACK HOME TO CLAIM IT":n.touch?"SWIPE OR TAP LEFT / RIGHT TO TURN  -  LOOP BACK HOME TO CLAIM LAND":"LEFT / RIGHT OR A / D TO TURN  -  LOOP BACK HOME TO CLAIM LAND";Lt(this.hint,`${u}
${n.touch?"TAP BOOST":"SPACE / SHIFT TO BOOST"}  -  EVERY KILL EARNS +1 BOOST`),le(this.hint,"opacity",Math.min(1,Math.max(0,this.hintTimer/1.5)).toFixed(3)),ae(this.hint,!0)}else ae(this.hint,!1);n.trailThreatened?(this.dangerClock+=e,le(this.danger,"opacity",(.55+.45*Math.abs(Math.sin(this.dangerClock*9))).toFixed(3)),ae(this.danger,!0)):(this.dangerClock=0,ae(this.danger,!1)),this.updateResults(t)}updateBoard(t){const e=t.state,n=t.localSlot,s=ir(e);n>=0&&s.indexOf(n)>=Ys&&(s.splice(s.indexOf(n),1),s.splice(Ys-1,0,n));for(let r=0;r<Ys;r++){const o=this.rows[r],a=r<s.length;if(ae(o.root,a),!a)continue;const l=s[r],c=e.cycles[l],h=Jn(l);le(o.chip,"background",h);const f=t.isHumanSlot(l)&&l!==n;Lt(o.name,`${t.slotName(l)}${f?" *":""}`),le(o.name,"color",l===n?h:c.alive?We.ink:We.dim),Lt(o.value,e0(c.area)),le(o.value,"color",l===n?h:We.ink),o.root.classList.toggle("me",l===n)}}updateResults(t){const e=t.state;if(e.phase!==ce.Results||!t.hasMatch){ae(this.results,!1);return}ae(this.results,!0);const n=t.localSlot;e.winner>=0&&e.winner===n?(Lt(this.resultsTitle,"YOU OWN THE GRID"),le(this.resultsTitle,"color",We.cyan)):e.winner>=0?(Lt(this.resultsTitle,`${t.slotName(e.winner)} WINS`),le(this.resultsTitle,"color",Jn(e.winner))):(Lt(this.resultsTitle,"ROUND OVER"),le(this.resultsTitle,"color",We.ink));const s=ir(e);for(let o=0;o<this.resultRows.length;o++){const a=this.resultRows[o],l=o<s.length;if(ae(a.root,l),!l)continue;const c=s[o],h=e.cycles[c];Lt(a.rank,`${o+1}.`),Lt(a.name,t.slotName(c)),Lt(a.pct,as(h.area)),Lt(a.cuts,`${h.kills} CUTS`),Lt(a.best,`BEST ${as(h.bestArea)}`),le(a.root,"color",c===n?Jn(c):We.ink)}const r=Math.max(0,Math.floor((e.phaseEndTick-e.tick)/_e)+1);Lt(this.resultsFooter,`NEXT ROUND IN ${r}`)}}const Ko=12,Wc=6,c0=["LEAVE YOUR ZONE TO DRAW A LIGHT TRAIL","RETURN HOME TO CLAIM EVERYTHING YOU CIRCLED","CROSS A RIVAL'S TRAIL TO FLATLINE THEM","...BUT IF THEY CROSS YOURS, YOU'RE DONE","BOOST FOR DOUBLE SPEED - EACH KILL EARNS ANOTHER"];function er(i){return i.toUpperCase().replace(/[^A-Z0-9 _-]/g,"").slice(0,Ko)}function cr(i){return i.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,Wc)}function on(i,t,e){const n=Q("button",`btn ${t}`,{type:"button"},i);return n.addEventListener("click",e),n}class h0{root;host;nameInput;codeInput;mainCol;friendsCol;camToggle;musicToggle;sfxToggle;botsToggles=[];topList;footer;constructor(t){this.host=t;const e=t.actions,n=Q("h1","title",{},Q("span","title-a",{"data-text":"NEON"},"NEON"),Q("span","title-b",{"data-text":"CIRCUIT"},"CIRCUIT")),s=Q("p","tagline",{},"CLOSE THE LOOP  //  CLAIM THE GRID"),r=Q("ul","rules");for(const h of c0)r.append(Q("li","",{},h));this.topList=Q("ol","top-list",{"aria-live":"polite"}),this.setTopPilotsPending();const o=Q("div","rules-panel",{},r,Q("h2","top-title",{},"TODAY'S TOP PILOTS"),this.topList),a=Q("div","menu-left",{},n,s,o);this.nameInput=Q("input","field name-field",{id:"nc-callsign",type:"text",maxlength:Ko,autocomplete:"off",autocapitalize:"characters",spellcheck:"false",enterkeyhint:"done",placeholder:"YOUR NAME","aria-label":"Callsign"}),this.nameInput.addEventListener("input",()=>this.cleanInput(this.nameInput,er)),this.nameInput.addEventListener("change",()=>this.commitName()),this.nameInput.addEventListener("keydown",h=>{h.key==="Enter"&&this.nameInput.blur()}),this.camToggle=on("","btn-gray btn-toggle",()=>{this.host.click(),e.settings().overheadCamera=!e.settings().overheadCamera,this.saveToggles()}),this.musicToggle=on("","btn-gray btn-toggle",()=>{this.host.click(),e.settings().music=!e.settings().music,this.saveToggles()}),this.sfxToggle=on("","btn-gray btn-toggle",()=>{e.settings().sfx=!e.settings().sfx,this.saveToggles(),this.host.click()});const l=()=>{const h=on("","btn-gray btn-bots",()=>{this.host.click(),e.settings().multiplayerBots=!e.settings().multiplayerBots,this.saveToggles()});return this.botsToggles.push(h),Q("div","bots-option",{},h,Q("p","bots-note",{},"FOR ROOMS YOU HOST. JOINED ROOMS USE THE HOST'S SETTING."))};this.mainCol=Q("div","menu-col main-col",{},Q("label","field-label",{for:"nc-callsign"},"CALLSIGN"),this.nameInput,l(),on("QUICK MATCH","btn-cyan btn-hero",()=>{this.host.click(),this.commitName(),e.startQuickMatch()}),on("PLAY WITH FRIENDS","btn-magenta",()=>{this.host.click(),this.showFriends(!0)}),on("PRACTICE VS BOTS","btn-amber",()=>{this.host.click(),this.commitName(),e.startPractice()}),Q("div","toggles",{},this.camToggle,this.musicToggle,this.sfxToggle)),this.codeInput=Q("input","field code-field",{id:"nc-room-code",type:"text",maxlength:Wc,autocomplete:"off",autocapitalize:"characters",spellcheck:"false",enterkeyhint:"go",placeholder:"CODE","aria-label":"Room code"}),this.codeInput.addEventListener("input",()=>this.cleanInput(this.codeInput,cr)),this.codeInput.addEventListener("keydown",h=>{h.key==="Enter"&&this.joinRoom()}),this.friendsCol=Q("div","menu-col friends-col",{},Q("h2","friends-title",{},"PRIVATE GRID"),Q("p","friends-sub",{},"SAME CODE = SAME GRID. SHARE IT WITH FRIENDS."),l(),this.codeInput,on("JOIN ROOM","btn-magenta",()=>this.joinRoom()),on("CREATE NEW ROOM","btn-cyan",()=>{this.host.click(),this.commitName(),e.startRoom(e.makeRoomCode())}),on("BACK","btn-gray btn-back",()=>{this.host.back(),this.showFriends(!1)})),this.friendsCol.hidden=!0;const c=Q("div","menu-right",{role:"group","aria-label":"Play"},this.mainCol,this.friendsCol);this.footer=Q("footer","menu-footer"),this.root=Q("section","menu",{"aria-label":"Neon Circuit"},Q("div","menu-body",{},a,c),this.footer)}show(){this.root.hidden=!1,this.showFriends(!1);const t=this.host.actions.settings();this.nameInput.value=t.playerName,this.codeInput.value=t.lastRoomCode,this.updateLabels()}hide(){this.root.hidden=!0;const t=document.activeElement;t&&this.root.contains(t)&&t.blur()}setTopPilots(t){this.topList.replaceChildren();const e=(n,s="")=>{this.topList.append(Q("li",s,{},n))};if(t===null){e("OFFLINE");return}if(t.length===0){e("NO ROUNDS YET TODAY - BE THE FIRST");return}t.slice(0,5).forEach((n,s)=>{const r=er(n.player).padEnd(Ko," "),o=Jl(Math.max(0,Math.min(1e3,n.permille|0))).padStart(6," ");e(`${s+1}. ${r} ${o}${n.won?"  WIN":""}`,s===0?"lead":"")})}updateLabels(){const t=this.host.actions.settings();Lt(this.camToggle,t.overheadCamera?"CAM: TOP":"CAM: CHASE"),Lt(this.musicToggle,t.music?"MUSIC: ON":"MUSIC: OFF"),Lt(this.sfxToggle,t.sfx?"SFX: ON":"SFX: OFF"),this.camToggle.setAttribute("aria-pressed",String(t.overheadCamera)),this.musicToggle.setAttribute("aria-pressed",String(t.music)),this.sfxToggle.setAttribute("aria-pressed",String(t.sfx));for(const e of this.botsToggles)Lt(e,t.multiplayerBots?"MULTIPLAYER BOTS: ON":"MULTIPLAYER BOTS: OFF"),e.setAttribute("aria-pressed",String(t.multiplayerBots));Lt(this.footer,`BEST ${Jl(t.bestPermille)}   //   WINS ${t.roundsWon}/${t.roundsPlayed}   //   ${Jc}`)}setTopPilotsPending(){this.topList.replaceChildren(Q("li","",{},"CONNECTING..."))}saveToggles(){this.host.actions.saveSettings(),this.host.settingsChanged(),this.updateLabels()}showFriends(t){if(this.mainCol.hidden=t,this.friendsCol.hidden=!t,t){const e=this.host.actions.settings();this.codeInput.value||(this.codeInput.value=e.lastRoomCode)}}joinRoom(){this.host.click(),this.commitName(),this.host.actions.startRoom(cr(this.codeInput.value))}commitName(){const t=er(this.nameInput.value).trim(),e=this.host.actions.settings();t&&t!==e.playerName&&(e.playerName=t,this.host.actions.saveSettings()),this.nameInput.value=e.playerName}cleanInput(t,e){const n=e(t.value);if(n!==t.value){const s=Math.min(t.selectionStart??n.length,n.length);t.value=n,t.setSelectionRange(s,s)}}}class u0{gestureLayer;hud;menu;root;constructor(t,e,n){this.root=t,this.gestureLayer=Q("div","gesture-layer",{"aria-hidden":"true"}),this.hud=new l0(n),this.menu=new h0(e),t.append(this.gestureLayer,this.hud.root,this.menu.root)}setMode(t){t==="attract"?(this.hud.setVisible(!1),this.menu.show()):(this.menu.hide(),this.hud.setVisible(!0))}resize(t,e){const n=Math.min(1.25,Math.max(.5,Math.min(t/1920,e/1080)));this.root.style.setProperty("--s",n.toFixed(4)),this.root.classList.toggle("portrait",e>t),this.root.classList.toggle("compact",Math.min(t,e)<520)}}const nc=40,f0=30,d0=350;class p0{layer;handlers;tracks=new Map;constructor(t,e){this.layer=t,this.handlers=e,t.addEventListener("pointerdown",this.onDown),t.addEventListener("pointermove",this.onMove),t.addEventListener("pointerup",this.onUp),t.addEventListener("pointercancel",this.onCancel),t.addEventListener("lostpointercapture",this.onCancel),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1}),window.addEventListener("keydown",this.onKey)}onDown=t=>{if(this.handlers.activity(),t.pointerType==="mouse"&&t.button!==0)return;t.preventDefault();const e=document.activeElement;e&&e.tagName==="INPUT"&&e.blur();try{this.layer.setPointerCapture(t.pointerId)}catch{}this.tracks.set(t.pointerId,{ox:t.clientX,oy:t.clientY,ax:t.clientX,ay:t.clientY,t0:performance.now(),swiped:!1})};onMove=t=>{const e=this.tracks.get(t.pointerId);if(!e)return;const n=t.clientX-e.ax,s=t.clientY-e.ay;if(n*n+s*s<nc*nc)return;const r=Math.abs(n)>Math.abs(s)?n>0?1:3:s>0?2:0;e.swiped=!0,e.ax=t.clientX,e.ay=t.clientY,this.handlers.steer(r)};onUp=t=>{const e=this.tracks.get(t.pointerId);if(!e)return;this.tracks.delete(t.pointerId);const n=performance.now()-e.t0<d0,s=Math.hypot(t.clientX-e.ox,t.clientY-e.oy);if(!e.swiped&&n&&s<f0){const r=this.layer.getBoundingClientRect();this.handlers.tap(t.clientX>r.left+r.width*.5)}};onCancel=t=>{this.tracks.delete(t.pointerId)};onKey=t=>{this.handlers.activity();const e=t.target;if(!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)){t.key==="Escape"&&e.blur();return}if(t.metaKey||t.ctrlKey||t.altKey)return;let s=-1;switch(t.code){case"ArrowUp":case"KeyW":s=0;break;case"ArrowRight":case"KeyD":s=1;break;case"ArrowDown":case"KeyS":s=2;break;case"ArrowLeft":case"KeyA":s=3;break;case"KeyC":t.repeat||this.handlers.toggleCamera(),t.preventDefault();return;case"Space":if(e?.closest('button, a[href], [role="button"]'))return;t.repeat||this.handlers.boost(),t.preventDefault();return;case"ShiftLeft":case"ShiftRight":t.repeat||this.handlers.boost(),t.preventDefault();return;case"Escape":case"KeyP":t.repeat||this.handlers.toggleMenu(),t.preventDefault();return;default:return}t.preventDefault(),t.repeat||this.handlers.steer(s)}}const Xc="neon-circuit/settings/v1",m0=30;function g0(){return{playerName:`RUNNER-${100+Math.floor(Math.random()*900)}`,overheadCamera:!1,music:!0,sfx:!0,multiplayerBots:!0,bestPermille:0,roundsPlayed:0,roundsWon:0,lastRoomCode:""}}function _0(){const i=g0();let t=null;try{t=window.localStorage.getItem(Xc)}catch(e){return console.warn("[neon] settings storage unavailable, using defaults:",e),i}if(!t)return i;try{const e=JSON.parse(t);if(typeof e!="object"||e===null)throw new Error("not an object");const n=(o,a)=>typeof o=="boolean"?o:a,s=(o,a,l)=>typeof o=="number"&&Number.isFinite(o)?Math.min(l,Math.max(a,Math.floor(o))):a;return{playerName:(typeof e.playerName=="string"?er(e.playerName).trim():"")||i.playerName,overheadCamera:n(e.overheadCamera,i.overheadCamera),music:n(e.music,i.music),sfx:n(e.sfx,i.sfx),multiplayerBots:n(e.multiplayerBots,i.multiplayerBots),bestPermille:s(e.bestPermille,0,1e3),roundsPlayed:s(e.roundsPlayed,0,1e9),roundsWon:s(e.roundsWon,0,1e9),lastRoomCode:typeof e.lastRoomCode=="string"?cr(e.lastRoomCode):""}}catch(e){return console.warn("[neon] stored settings unreadable, using defaults. Stored value:",t,e),i}}class v0{session;mode="attract";roomLabel="";onlineStartedAt=0;lastRoundCounted=-1;trailThreatened=!1;lastFrame=performance.now()/1e3;hiddenTimer=null;topPilotsSeq=0;prefs;renderer;ui;audio;opts;touch;reducedMotion;constructor(t,e,n){this.opts=n,this.prefs=_0(),this.touch=window.matchMedia?.("(pointer: coarse)").matches??!1,this.reducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,this.audio=new t0(new Z_("./audio/")),this.ui=new u0(e,{actions:this,click:()=>this.audio.click(),back:()=>this.audio.back(),settingsChanged:()=>this.applySettings()},{toggleCamera:()=>this.toggleCamera(),toggleQuality:()=>this.toggleQuality(),leaveMatch:()=>this.returnToTitle(),boost:()=>this.boost(),setBotsEnabled:s=>{this.session.role==="host"&&(this.session.setBotsEnabled(s),this.prefs.multiplayerBots=s,this.saveSettings())},click:()=>this.audio.click(),pauseChanged:()=>{}}),this.renderer=new X_(t,I_()),new p0(this.ui.gestureLayer,{steer:s=>this.steer(s),tap:s=>this.tap(s),boost:()=>this.boost(),toggleCamera:()=>this.toggleCamera(),toggleMenu:()=>{this.mode!=="attract"&&this.ui.hud.togglePause()},activity:()=>this.audio.engine.unlock()}),this.session=Ga(),this.ui.setMode("attract"),this.ui.hud.onSessionStarted(),this.applySettings()}start(){this.audio.engine.preload();const t=()=>this.audio.engine.unlock();for(const n of["pointerdown","keydown","touchend","click"])window.addEventListener(n,t,{capture:!0,passive:!0});const e=()=>this.resize();window.addEventListener("resize",e),window.visualViewport?.addEventListener("resize",e),document.addEventListener("visibilitychange",()=>this.onVisibility()),window.addEventListener("pagehide",()=>this.session.shutdown()),window.addEventListener("pageshow",n=>{n.persisted&&this.returnToTitle()}),document.addEventListener("gesturestart",n=>n.preventDefault()),this.resize(),this.refreshTopPilots(),setInterval(()=>{this.mode==="attract"&&!document.hidden&&this.refreshTopPilots()},m0*1e3),requestAnimationFrame(this.frame)}get currentSession(){return this.session}get currentMode(){return this.mode}startPractice(){const t=this.prefs.playerName;this.startSession("practice","PRACTICE",()=>Uh(t))}startQuickMatch(){const t=this.prefs.playerName;this.startSession("online","QUICK MATCH",()=>Va(Qc,t,this.prefs.multiplayerBots))}startRoom(t){let e=cr(t);e.length<3&&(e=this.makeRoomCode()),this.prefs.lastRoomCode=e,this.saveSettings();const n=this.prefs.playerName;this.startSession("online",`ROOM ${e}`,()=>Va(th(e),n,this.prefs.multiplayerBots))}makeRoomCode(){let t="";for(let e=0;e<4;e++)t+=wa[Math.floor(Math.random()*wa.length)];return t}returnToTitle(){this.startSession("attract","",Ga),this.refreshTopPilots()}settings(){return this.prefs}saveSettings(){try{window.localStorage.setItem(Xc,JSON.stringify(this.prefs))}catch(t){console.warn("[neon] could not save settings:",t)}this.applySettings()}startSession(t,e,n){this.session.shutdown(),this.renderer.resetVisuals(),this.session=n(),this.mode=t,this.roomLabel=e,this.lastRoundCounted=-1,this.trailThreatened=!1,this.onlineStartedAt=performance.now()/1e3,this.ui.setMode(t),this.ui.hud.onSessionStarted();const s=document.activeElement;s&&s!==document.body&&s.blur()}applySettings(){this.audio.engine.setEnabled(this.prefs.music,this.prefs.sfx),this.ui.menu.updateLabels()}refreshTopPilots(){const t=++this.topPilotsSeq;Fh(5).then(e=>{t===this.topPilotsSeq&&this.ui.menu.setTopPilots(e)})}canSteer(){return this.mode!=="attract"&&this.session.localSlot>=0&&this.session.hasMatch&&!this.ui.hud.paused}localAlive(){const t=this.session.localSlot;return t>=0&&!!this.session.state.cycles[t]?.alive}steer(t){if(this.canSteer()){if(this.prefs.overheadCamera)this.session.inputDirection(t);else if(t===1||t===3)this.session.inputTurn(t===1);else return;this.localAlive()&&this.audio.steer()}}tap(t){this.canSteer()&&(this.session.inputTurn(t),this.localAlive()&&this.audio.steer())}boost(){this.canSteer()&&this.session.inputBoost()}toggleCamera(){this.prefs.overheadCamera=!this.prefs.overheadCamera,this.saveSettings()}toggleQuality(){const t=this.renderer.quality==="high"?"low":"high";this.renderer.setQuality(t),U_(t)}frame=()=>{requestAnimationFrame(this.frame);const t=performance.now()/1e3,e=Math.min(Math.max(t-this.lastFrame,0),.1);this.lastFrame=t,this.step(t,e,!0)};step(t,e,n){const s=this.session;if(s.tick(t),this.mode==="online"&&!s.hasMatch&&!s.linkJoined&&t-this.onlineStartedAt>Aa){console.warn(`[neon] online: no match after ${Aa} s and the link never joined; practice instead`),this.startPractice(),this.ui.hud.showToast("OFFLINE","CAN'T REACH THE GRID - PRACTICE MODE");return}for(const r of s.consumeEvents())n&&this.renderer.handleEvent(r,s),this.ui.hud.handleEvent(r,s,this.mode),n&&this.audio.handleEvent(r,s,this.mode),this.onGameEvent(r);this.opts.autopilot&&this.mode!=="attract"&&this.opts.autopilot.update(s),this.trailThreatened=this.checkTrailDanger(),n&&(this.renderer.update(s,e,{title:this.mode==="attract",overhead:this.prefs.overheadCamera}),this.ui.hud.update(s,e,{mode:this.mode,roomLabel:this.roomLabel,overhead:this.prefs.overheadCamera,quality:this.renderer.quality,trailThreatened:this.trailThreatened,touch:this.touch}),this.audio.update(s,this.mode,this.trailThreatened,t,e))}onGameEvent(t){if(this.mode==="attract")return;const e=this.session,n=e.localSlot;if(t.type===oe.Death){const s=this.reducedMotion?.35:1;t.slot===n?this.renderer.shake(s):n>=0&&t.other===n&&this.renderer.shake(.35*s)}else if(t.type===oe.RoundEnd&&n>=0&&this.lastRoundCounted!==e.state.round){this.lastRoundCounted=e.state.round;const s=t.other===n,r=e.state.cycles[n];this.prefs.roundsPlayed++,s&&this.prefs.roundsWon++,this.prefs.bestPermille=Math.max(this.prefs.bestPermille,Math.floor(r.bestArea*1e3/Yt)),this.saveSettings(),this.opts.automation||Nh({room:this.mode==="online"?this.roomLabel:"PRACTICE",player:this.prefs.playerName,permille:Math.floor(r.area*1e3/Yt),kills:r.kills,won:s,humans:Math.max(1,yh(e.state)-Eh(e.state))})}}checkTrailDanger(){const t=this.session,e=t.localSlot;if(this.mode==="attract"||e<0||!t.hasMatch)return!1;const n=t.state,s=n.cycles[e];if(!s.alive||s.trail.length===0)return!1;for(let r=0;r<pt;r++){const o=n.cycles[r];if(!(r===e||!o.active||!o.alive)){for(const a of s.trail)if(Math.abs(ai(a)-o.x)+Math.abs(li(a)-o.y)<=3)return!0}}return!1}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.resize(t,e),this.ui.resize(t,e)}onVisibility(){const t=document.hidden;this.audio.engine.setHidden(t),t?this.hiddenTimer||(this.hiddenTimer=setInterval(()=>this.step(performance.now()/1e3,0,!1),250)):(this.hiddenTimer&&clearInterval(this.hiddenTimer),this.hiddenTimer=null,this.lastFrame=performance.now()/1e3)}}async function x0(){const i=new URLSearchParams(window.location.search),t=document.getElementById("scene"),e=document.getElementById("ui");if(!t||!e)throw new Error("index.html is missing #scene or #ui");const n=i.has("mock")&&await Oh();i.has("mock")&&!n&&console.warn("[neon] ?mock is only available on the dev server");let s=null;if(i.has("autoplay")){const{Autopilot:a}=await Zc(async()=>{const{Autopilot:l}=await import("./autopilot-pxs_HYSM.js");return{Autopilot:l}},[],import.meta.url);s=new a}const r=s!==null||n||i.has("noreport")||navigator.webdriver===!0;let o;try{o=new v0(t,e,{automation:r,autopilot:s})}catch(a){console.error("[neon] could not start the renderer:",a);const l=document.createElement("div");l.className="fatal",l.textContent="NEON CIRCUIT NEEDS WEBGL 2. TRY AN UP-TO-DATE CHROME, SAFARI OR FIREFOX.",e.replaceChildren(l);return}o.start(),i.has("dev")&&(window.__nc={app:o,renderer:o.renderer,ui:o.ui,audio:o.audio,get session(){return o.currentSession},get mode(){return o.currentMode}})}x0().catch(i=>{console.error("[neon] boot failed:",i)});export{ce as P,hh as b,gr as c};
