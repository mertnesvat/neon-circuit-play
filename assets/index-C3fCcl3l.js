(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Eh="modulepreload",bh=function(i,t){return new URL(i,t).href},ja={},Ah=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=bh(c,n),c in ja)return;ja[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":Eh,h||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((g,_)=>{d.addEventListener("load",g),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},xa="https://psxksryuusscpvidksmu.supabase.co",Sa="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzeGtzcnl1dXNzY3B2aWRrc211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3ODcwMzUsImV4cCI6MjEwMjM2MzAzNX0.IKr9qach_dEU57YmtiwhorCjCAeVHyWbLloalbg2Ftc",wh="v0.5-web",Rh="nc-web5:quick:1",Ch=i=>`nc-web5:room:${i}`,Za=14,Ja="ABCDEFGHJKMNPQRSTUVWXYZ23456789",Bt=64,$t=Bt*Bt,pt=8,Kt=8,Ma=2*Kt,ya=1,Es=12,Rc=4*Kt,Cc=30*Kt,gr=3*Kt,_r=4*Kt,Ss=2,Ph=20,Lh=8,vr=3*Kt,Ih=150*Kt,Dh=7*Kt,Uh=$t/2,Cr=8,$i=[1,0,-1,0],Ki=[0,1,0,-1],Ce=(i,t)=>i+t*Bt,In=i=>i%Bt,Dn=i=>i/Bt|0,Yn=(i,t)=>i>=0&&t>=0&&i<Bt&&t<Bt,hi=i=>i+1&3,Bi=i=>i+3&3,Ta=i=>i+2&3,oe={Countdown:0,Playing:1,Results:2},re={Turn:0,JoinHuman:1,JoinBot:2,Leave:3,Remove:4,Boost:5},de={None:0,Wall:1,Cut:2,SelfCut:3,Collision:4,Erased:5,Shield:6},Jt={Turbo:1,Shield:2,Charge:3},qt={Countdown:0,Go:1,RoundEnd:2,Spawn:3,TrailStart:4,Capture:5,Death:6,Pickup:7,ShieldBlock:8};function To(){return{active:!1,bot:!1,alive:!1,dir:0,x:0,y:0,respawnTick:-1,trailOrigin:-1,trail:[],area:0,bestArea:0,kills:0,boostCharges:ya,boostUntilTick:0,deaths:0,turboUntilTick:0,shieldUntilTick:0,lastKiller:-1,lastDeath:de.None,lastDeathTick:-1,spawnTick:-1,botSkill:0,botMode:0,botLegsLeft:0,botTurnLeft:0,botLegLen:0,botLegStep:0}}function Pc(){const i=[];for(let t=0;t<pt;t++)i.push(To());return{tick:0,rng:2654435769,phase:oe.Countdown,phaseEndTick:0,round:0,ringOffset:0,winner:-1,pickupRng:2246822507,pickupsEnabled:!0,nextPickupTick:0,pickups:[],owner:new Uint8Array($t),trail:new Uint8Array($t),cycles:i}}function Nh(i){return{...i,trail:i.trail.slice()}}function Nr(i){return{tick:i.tick,rng:i.rng,phase:i.phase,phaseEndTick:i.phaseEndTick,round:i.round,ringOffset:i.ringOffset,winner:i.winner,owner:i.owner.slice(),trail:i.trail.slice(),cycles:i.cycles.map(Nh),pickupRng:i.pickupRng,pickupsEnabled:i.pickupsEnabled,nextPickupTick:i.nextPickupTick,pickups:i.pickups.map(t=>({...t}))}}const an=[[0,.85,1],[1,.08,.75],[1,.62,.02],[.3,1,.1],[1,.22,.04],[.5,.22,1],[1,.2,.38],[.55,.8,1]],Fh=["NOVA","VOLT","HEX","ZERO","FLUX","BYTE","KIRA","ECHO"];function Ke(i,t){let e=i.rng;return e=(e^e<<13)>>>0,e=(e^e>>>17)>>>0,e=(e^e<<5)>>>0,i.rng=e,t>0?e%t:0}function Oh(i,t,e,n,s){const r=e+$i[s],a=n+Ki[s];return Yn(r,a)&&i.trail[Ce(r,a)]!==t+1}function Qa(i,t,e,n,s,r){let a=0;for(;a<r&&Oh(i,t,e,n,s);)e+=$i[s],n+=Ki[s],a++;return a}function tl(i,t,e){const n=i.cycles[t],s=t+1,r=new Int8Array($t).fill(-1),a=new Uint16Array($t);let o=0;const l=[n.dir,Bi(n.dir),hi(n.dir)];for(const c of l){const h=n.x+$i[c],u=n.y+Ki[c];if(!Yn(h,u))continue;const f=Ce(h,u);if(!(i.trail[f]===s||r[f]>=0)){if(e(f))return c;r[f]=c,a[o++]=f}}r[Ce(n.x,n.y)]=4;for(let c=0;c<o;c++){const h=a[c],u=In(h),f=Dn(h);for(let d=0;d<4;d++){const g=u+$i[d],_=f+Ki[d];if(!Yn(g,_))continue;const m=Ce(g,_);if(!(r[m]>=0||i.trail[m]===s)){if(r[m]=r[h],e(m))return r[m];a[o++]=m}}}return-1}function kh(i,t,e){const n=i.cycles[t];for(let s=0;s<pt;s++){const r=i.cycles[s];if(!(s===t||!r.active||!r.alive)){for(const a of n.trail)if(Math.abs(In(a)-r.x)+Math.abs(Dn(a)-r.y)<=e)return!0}}return!1}function Bh(i,t){const e=i.cycles[t],n=t+1,s=e.botSkill&3,r=4+s*2,a=14+s*7,o=2+s,l=i.owner[Ce(e.x,e.y)]===n;let c=e.dir;if(l||e.trail.length===0)if(e.botMode=0,Ke(i,5)===0)c=Ke(i,2)?Bi(e.dir):hi(e.dir);else{const h=tl(i,t,u=>i.owner[u]!==n);h>=0&&(c=h)}else if(e.botMode===0&&(e.botMode=1,e.botLegsLeft=2,e.botLegLen=3+Ke(i,r),e.botLegStep=0,e.botTurnLeft=Ke(i,2)),e.botMode===1&&(e.botLegStep++,e.trail.length>=a||kh(i,t,o+1)?e.botMode=2:e.botLegStep>=e.botLegLen&&(e.botLegsLeft>0?(e.botLegsLeft--,c=e.botTurnLeft?Bi(e.dir):hi(e.dir),e.botLegStep=0,e.botLegLen=2+Ke(i,r)):e.botMode=2)),e.botMode===2){const h=tl(i,t,u=>i.owner[u]===n);h>=0&&(c=h)}if(Ke(i,4)<1+s){const h=[e.dir,Bi(e.dir),hi(e.dir)];for(const u of h){const f=e.x+$i[u],d=e.y+Ki[u];if(Yn(f,d)){const g=i.trail[Ce(f,d)];if(g!==0&&g!==n){c=u;break}}}}if(c===Ta(e.dir)||Qa(i,t,e.x,e.y,c,2)<1){const h=[e.dir,Bi(e.dir),hi(e.dir)];let u=-1;for(const f of h){const d=Qa(i,t,e.x,e.y,f,12);d>u&&(u=d,c=f)}}e.dir=c}function Fr(i,t){let e=i.pickupRng;return e=(e^e<<13)>>>0,e=(e^e>>>17)>>>0,e=(e^e<<5)>>>0,i.pickupRng=e,e%t}function zh(i){if(!i.pickupsEnabled||(i.pickups=i.pickups.filter(n=>n.expiresTick>i.tick),i.tick<i.nextPickupTick))return;i.nextPickupTick=i.tick+Rc;const t=4,e=[0,0,0,0];for(const n of i.pickups)e[n.kind]++;for(let n=0;n<Es*48&&i.pickups.length<Es;n++){const s=t+Fr(i,Bt-2*t),r=t+Fr(i,Bt-2*t),a=Ce(s,r);if(i.owner[a]!==0||i.trail[a]!==0||i.cycles.some(h=>h.active&&h.alive&&Math.abs(h.x-s)+Math.abs(h.y-r)<6)||i.pickups.some(h=>Math.abs(In(h.cell)-s)+Math.abs(Dn(h.cell)-r)<5))continue;const o=Math.min(e[1],e[2],e[3]),l=[Jt.Turbo,Jt.Shield,Jt.Charge].filter(h=>e[h]===o),c=l[Fr(i,l.length)];e[c]++,i.pickups.push({cell:a,kind:c,expiresTick:i.tick+Cc})}}function Hh(i,t,e,n){const s=i.pickups.findIndex(o=>o.cell===e&&o.expiresTick>i.tick);if(s<0)return;const[r]=i.pickups.splice(s,1),a=i.cycles[t];r.kind===Jt.Turbo?a.turboUntilTick=i.tick+1+gr:r.kind===Jt.Shield?a.shieldUntilTick=i.tick+1+_r:r.kind===Jt.Charge&&(a.boostCharges+=2),n?.push({tick:i.tick,type:qt.Pickup,slot:t,other:e,value:r.kind})}const Gh=[52,46,32,18,12,18,32,46],Vh=[32,46,52,46,32,18,12,18];function Rn(i,t,e,n,s=-1,r=0){i&&i.push({tick:t,type:e,slot:n,other:s,value:r})}function bs(i){const t=new Int32Array(pt+1);for(let e=0;e<$t;e++)t[i.owner[e]]++;for(let e=0;e<pt;e++){const n=i.cycles[e];n.area=t[e+1],n.bestArea=Math.max(n.bestArea,n.area)}}function xr(i,t){const e=i.cycles[t],n=t+1;for(const s of e.trail)i.trail[s]===n&&(i.trail[s]=0);e.trail=[],e.trailOrigin=-1}function Eo(i,t){const e=t+1;for(let n=0;n<$t;n++)i.owner[n]===e&&(i.owner[n]=0)}function Ea(i){i.botMode=0,i.botLegsLeft=0,i.botLegLen=0,i.botLegStep=0}function Lc(i,t){const e=Bt/2-i,n=Bt/2-t;return Math.abs(e)>=Math.abs(n)?e>=0?0:2:n>=0?1:3}function Ic(i,t,e,n,s,r){const a=i.cycles[t];xr(i,t),a.x=e,a.y=n,a.dir=s,a.alive=!0,a.respawnTick=-1,a.spawnTick=i.tick,a.boostUntilTick=0,a.turboUntilTick=0,a.shieldUntilTick=0,Ea(a);const o=t+1;for(let l=-Ss;l<=Ss;l++)for(let c=-Ss;c<=Ss;c++)Yn(e+c,n+l)&&(i.owner[Ce(e+c,n+l)]=o);bs(i),Rn(r,i.tick,qt.Spawn,t)}function Wh(i,t,e){return Yn(t,e)&&i.owner[Ce(t,e)]===0&&i.trail[Ce(t,e)]===0}function Dc(i,t,e){const n=(t*3+i.ringOffset)%Cr,s=Gh[n],r=Vh[n];Ic(i,t,s,r,hi(Lc(s,r)),e)}function Xh(i,t,e){const n=Ss+3;let s=-2147483648,r=Bt/2,a=Bt/2;for(let o=0;o<40;o++){const l=n+Ke(i,Bt-2*n),c=n+Ke(i,Bt-2*n);let h=0;for(let u=-4;u<=4;u++)for(let f=-4;f<=4;f++)h+=Wh(i,l+f,c+u)?1:0;for(let u=0;u<pt;u++){const f=i.cycles[u];if(u!==t&&f.active&&f.alive){const d=Math.abs(l-f.x)+Math.abs(c-f.y);h-=Math.max(0,12-d)*8}}if(h>s&&(s=h,r=l,a=c),h>=81)break}Ic(i,t,r,a,Lc(r,a),e)}function bo(i,t,e,n,s){const r=i.cycles[t];r.alive&&(xr(i,t),Eo(i,t),r.alive=!1,r.boostUntilTick=0,r.turboUntilTick=0,r.shieldUntilTick=0,r.deaths++,r.lastKiller=e,r.lastDeath=n,r.lastDeathTick=i.tick,r.respawnTick=i.tick+Ph,Ea(r),e>=0&&e!==t&&(i.cycles[e].kills++,i.cycles[e].boostCharges++),Rn(s,i.tick,qt.Death,t,e,n))}function qh(i,t){const e=i.cycles[t],n=t+1;let s=0;for(const c of e.trail)i.owner[c]!==n&&(i.owner[c]=n,s++),i.trail[c]===n&&(i.trail[c]=0);e.trail=[],e.trailOrigin=-1;const r=new Uint8Array($t),a=new Uint16Array($t);let o=0;const l=c=>{!r[c]&&i.owner[c]!==n&&(r[c]=1,a[o++]=c)};for(let c=0;c<Bt;c++)l(Ce(c,0)),l(Ce(c,Bt-1)),l(Ce(0,c)),l(Ce(Bt-1,c));for(let c=0;c<o;c++){const h=a[c],u=In(h),f=Dn(h);u>0&&l(h-1),u<Bt-1&&l(h+1),f>0&&l(h-Bt),f<Bt-1&&l(h+Bt)}for(let c=0;c<$t;c++)!r[c]&&i.owner[c]!==n&&(i.owner[c]=n,s++);return s}function Sr(i){const t=[];for(let e=0;e<pt;e++)i.cycles[e].active&&t.push(e);return t.sort((e,n)=>{const s=i.cycles[e],r=i.cycles[n];return s.area!==r.area?r.area-s.area:s.kills!==r.kills?r.kills-s.kills:e-n}),t}function Yh(i,t){const e=Sr(i);i.winner=e.length>0?e[0]:-1,i.phase=oe.Results,i.phaseEndTick=i.tick+Dh,i.pickups=[];for(const n of i.cycles)n.turboUntilTick=0,n.shieldUntilTick=0;Rn(t,i.tick,qt.RoundEnd,Math.max(i.winner,0),i.winner)}function $h(i,t){i.owner.fill(0),i.trail.fill(0),i.round++,i.winner=-1,i.ringOffset=Ke(i,Cr),i.phase=oe.Countdown,i.phaseEndTick=i.tick+vr,i.pickups=[],i.nextPickupTick=i.phaseEndTick;for(let e=0;e<pt;e++){const n=i.cycles[e];n.trail=[],n.trailOrigin=-1,n.kills=0,n.boostCharges=ya,n.boostUntilTick=0,n.turboUntilTick=0,n.shieldUntilTick=0,n.deaths=0,n.bestArea=0,n.area=0,n.lastKiller=-1,n.lastDeath=de.None,n.alive=!1,n.active&&Dc(i,e,t)}Rn(t,i.tick,qt.Countdown,0,-1,vr/Kt)}function Kh(i,t,e){if(t.slot<0||t.slot>=pt)return;const n=i.cycles[t.slot];switch(t.type){case re.Turn:n.active&&!n.bot&&n.alive&&t.arg<4&&t.arg!==Ta(n.dir)&&(n.dir=t.arg);break;case re.Boost:i.phase===oe.Playing&&n.active&&!n.bot&&n.alive&&n.boostCharges>0&&n.boostUntilTick<=i.tick&&n.turboUntilTick<=i.tick&&(n.boostCharges--,n.boostUntilTick=i.tick+Ma);break;case re.JoinHuman:case re.JoinBot:{n.active&&(xr(i,t.slot),Eo(i,t.slot));const s=To();Object.assign(n,s),n.active=!0,n.bot=t.type===re.JoinBot,n.botSkill=Ke(i,4),i.phase===oe.Countdown?Dc(i,t.slot,e):i.phase===oe.Playing&&(n.respawnTick=i.tick+Lh),bs(i);break}case re.Leave:n.active&&!n.bot&&(n.bot=!0,n.botSkill=Ke(i,4),Ea(n));break;case re.Remove:n.active&&(xr(i,t.slot),Eo(i,t.slot),Object.assign(n,To()),bs(i));break}}function jh(i,t,e,n){const s=new Int32Array(pt).fill(-1),r=new Int32Array(pt).fill(-1),a=new Uint8Array(pt),o=new Uint8Array(pt),l=new Int32Array(pt).fill(-1),c=new Int32Array(pt),h=(d,g,_)=>{o[d]||(o[d]=1,l[d]=g,c[d]=_)};for(let d=0;d<pt;d++){const g=i.cycles[d];if(!g.active||!g.alive)continue;if(s[d]=Ce(g.x,g.y),t>=e[d]){r[d]=s[d];continue}const _=g.x+$i[g.dir],m=g.y+Ki[g.dir];if(!Yn(_,m)){h(d,-1,de.Wall);continue}r[d]=Ce(_,m),a[d]=1}for(let d=0;d<pt;d++){if(!a[d])continue;const g=i.trail[r[d]]-1;g<0||g===d||!i.cycles[g].alive||i.cycles[g].shieldUntilTick<=i.tick||(h(d,g,de.Shield),a[d]=0,r[d]=-1,Rn(n,i.tick,qt.ShieldBlock,g,d))}for(let d=0;d<pt;d++){if(!a[d])continue;const g=i.trail[r[d]];if(g===0)continue;const _=g-1;_===d?h(d,-1,de.SelfCut):h(_,d,de.Cut)}for(let d=0;d<pt;d++)for(let g=d+1;g<pt;g++){if(!a[d]&&!a[g]||r[d]<0||r[g]<0||r[d]!==r[g])continue;const _=i.owner[r[d]]===d+1,m=i.owner[r[g]]===g+1;_&&!m?h(g,d,de.Collision):m&&!_?h(d,g,de.Collision):(h(d,g,de.Collision),h(g,d,de.Collision))}let u=!1;for(let d=0;d<pt;d++)o[d]&&(bo(i,d,l[d],c[d],n),u=!0);let f=-1;for(let d=0;d<pt;d++){const g=i.cycles[d];if(!a[d]||o[d]||!g.alive)continue;const _=r[d];if(g.x=In(_),g.y=Dn(_),Hh(i,d,_,n),i.owner[_]===d+1){if(g.trail.length>0){const m=qh(i,d);u=!0,f<0&&(f=d),Rn(n,i.tick,qt.Capture,d,-1,m)}}else g.trail.length===0&&(g.trailOrigin=s[d],Rn(n,i.tick,qt.TrailStart,d)),i.trail[_]=d+1,g.trail.push(_)}if(u){bs(i);let d=!1;for(let g=0;g<pt;g++){const _=i.cycles[g];_.active&&_.alive&&_.area===0&&(bo(i,g,f,de.Erased,n),d=!0)}d&&bs(i)}}function el(i,t){const e=i.tick;let n=!1;for(let o=0;o<pt;o++){const l=i.cycles[o];l.active&&!l.alive&&l.respawnTick>=0&&e>=l.respawnTick&&(l.deaths>0&&l.boostCharges++,Xh(i,o,t),n=!0)}if(n)for(let o=0;o<pt;o++){const l=i.cycles[o];l.active&&l.alive&&l.area===0&&bo(i,o,-1,de.Erased,t)}for(let o=0;o<pt;o++){const l=i.cycles[o];l.active&&l.alive&&l.bot&&Bh(i,o)}zh(i);const s=Uint8Array.from(i.cycles,o=>!o.active||!o.alive?0:o.turboUntilTick>e?3:o.boostUntilTick>e?2:1),r=Math.max(...s);for(let o=0;o<r;o++)jh(i,o,s,t);let a=0;for(let o=0;o<pt;o++)a=Math.max(a,i.cycles[o].area);(e+1>=i.phaseEndTick||a>=Uh)&&Yh(i,t)}function nl(i,t=!0){const e=Pc();return e.rng=i>>>0?i>>>0:2654435769,e.pickupRng=(e.rng^2246822507)>>>0||2246822507,e.pickupsEnabled=t,e.nextPickupTick=vr,e.tick=0,e.round=1,e.ringOffset=Ke(e,Cr),e.phase=oe.Countdown,e.phaseEndTick=vr,e}function il(i,t){return i.tick!==t.tick?i.tick-t.tick:i.slot!==t.slot?i.slot-t.slot:i.type!==t.type?i.type-t.type:i.seq-t.seq}function Zh(i,t,e){const n=i.tick;for(const s of t)Kh(i,s,e);switch(i.phase){case oe.Countdown:n>=i.phaseEndTick?(i.phase=oe.Playing,i.phaseEndTick=n+Ih,Rn(e,n,qt.Go,0),el(i,e)):(i.phaseEndTick-n)%Kt===0&&Rn(e,n,qt.Countdown,0,-1,(i.phaseEndTick-n)/Kt|0);break;case oe.Playing:el(i,e);break;case oe.Results:n>=i.phaseEndTick&&$h(i,e);break}i.tick=n+1,i.pickups=i.pickups.filter(s=>s.expiresTick>i.tick);for(const s of i.cycles)s.boostUntilTick>0&&s.boostUntilTick<=i.tick&&(s.boostUntilTick=0),s.turboUntilTick>0&&s.turboUntilTick<=i.tick&&(s.turboUntilTick=0),s.shieldUntilTick>0&&s.shieldUntilTick<=i.tick&&(s.shieldUntilTick=0)}function Or(i){let t=2166136261;const e=s=>{t=Math.imul(t^s&255,16777619)>>>0},n=s=>{const r=s>>>0;e(r),e(r>>>8),e(r>>>16),e(r>>>24)};n(i.tick),n(i.rng),e(i.phase),n(i.phaseEndTick),n(i.round),n(i.ringOffset),n(i.winner),n(i.pickupRng),e(i.pickupsEnabled?1:0),n(i.nextPickupTick),n(i.pickups.length);for(const s of i.pickups)n(s.cell),e(s.kind),n(s.expiresTick);for(let s=0;s<$t;s++)e(i.owner[s]);for(let s=0;s<$t;s++)e(i.trail[s]);for(const s of i.cycles){e((s.active?1:0)|(s.bot?2:0)|(s.alive?4:0)),e(s.dir),n(s.x),n(s.y),n(s.respawnTick),n(s.trailOrigin),n(s.trail.length);for(const r of s.trail)n(r);n(s.area),n(s.bestArea),n(s.kills),n(s.boostCharges),n(s.boostUntilTick),n(s.turboUntilTick),n(s.shieldUntilTick),n(s.deaths),n(s.lastKiller),e(s.lastDeath),n(s.lastDeathTick),n(s.spawnTick),e(s.botSkill),e(s.botMode),e(s.botLegsLeft),e(s.botTurnLeft),n(s.botLegLen),n(s.botLegStep)}return t>>>0}const Uc=3;function Jh(i){const t=[],e=o=>{t.push(o&255)},n=o=>{for(o>>>=0;o>=128;)t.push(o&127|128),o>>>=7;t.push(o)},s=o=>n((o<<1^o>>31)>>>0),r=o=>{for(let l=0;l<4;l++)t.push(o>>>l*8&255)},a=o=>{let l=0;for(;l<$t;){const c=o[l];let h=1;for(;l+h<$t&&o[l+h]===c;)h++;e(c),n(h),l+=h}};e(Uc),s(i.tick),r(i.rng),e(i.phase),s(i.phaseEndTick),s(i.round),s(i.ringOffset),s(i.winner),r(i.pickupRng),e(i.pickupsEnabled?1:0),s(i.nextPickupTick),n(i.pickups.length);for(const o of i.pickups)n(o.cell),e(o.kind),s(o.expiresTick);a(i.owner),a(i.trail);for(const o of i.cycles)if(e((o.active?1:0)|(o.bot?2:0)|(o.alive?4:0)),!!o.active){e(o.dir),s(o.x),s(o.y),s(o.respawnTick),s(o.trailOrigin),n(o.trail.length);for(const l of o.trail)n(l);s(o.area),s(o.bestArea),s(o.kills),s(o.boostCharges),s(o.boostUntilTick),s(o.turboUntilTick),s(o.shieldUntilTick),s(o.deaths),s(o.lastKiller),e(o.lastDeath),s(o.lastDeathTick),s(o.spawnTick),e(o.botSkill),e(o.botMode),e(o.botLegsLeft),e(o.botTurnLeft),s(o.botLegLen),s(o.botLegStep)}return Uint8Array.from(t)}function Qh(i){let t=0,e=!0;const n=()=>t>=i.length?(e=!1,0):i[t++],s=()=>{let h=0;for(let u=0;u<35&&e;u+=7){const f=n();if(u===28&&f&240)return e=!1,0;if(h=(h|(f&127)<<u)>>>0,!(f&128))return h}return e=!1,0},r=()=>{const h=s();return h>>>1^-(h&1)|0},a=()=>{let h=0;for(let u=0;u<4;u++)h=(h|n()<<u*8)>>>0;return h},o=h=>{let u=0;for(;u<$t&&e;){const f=n(),d=s();if(d===0||d>$t-u||f>pt){e=!1;return}h.fill(f,u,u+d),u+=d}},l=n();if(l<1||l>Uc)return null;const c=Pc();if(c.tick=r(),c.rng=a(),c.phase=n(),c.phaseEndTick=r(),c.round=r(),c.ringOffset=r(),c.winner=r()<<24>>24,l>=3){c.pickupRng=a();const h=n();if(h>1)return null;c.pickupsEnabled=h===1,c.nextPickupTick=r();const u=s();if(u>Es)return null;const f=new Set;for(let d=0;d<u;d++){const g=s(),_=n(),m=r();if(g>=$t||f.has(g)||_<Jt.Turbo||_>Jt.Charge||m<=c.tick||m>c.tick+Cc)return null;f.add(g),c.pickups.push({cell:g,kind:_,expiresTick:m})}if(!c.pickupRng||c.nextPickupTick<0||c.nextPickupTick>1e8+Rc||!c.pickupsEnabled&&u!==0||c.phase!==oe.Playing&&u!==0)return null}else c.pickupsEnabled=!1;o(c.owner),o(c.trail);for(const h of c.cycles){const u=n();if(h.active=(u&1)!==0,h.bot=(u&2)!==0,h.alive=(u&4)!==0,!h.active)continue;h.dir=n()&3,h.x=r()<<16>>16,h.y=r()<<16>>16,h.respawnTick=r(),h.trailOrigin=r();const f=s();if(f>$t)return null;for(let d=0;d<f&&e;d++){const g=s();if(g>=$t)return null;h.trail.push(g)}h.area=r(),h.bestArea=r(),h.kills=r(),h.boostCharges=l>=2?r():ya+h.kills,h.boostUntilTick=l>=2?r():0,h.turboUntilTick=l>=3?r():0,h.shieldUntilTick=l>=3?r():0,h.deaths=r(),h.lastKiller=r()<<24>>24,h.lastDeath=n(),h.lastDeathTick=r(),h.spawnTick=r(),h.botSkill=n(),h.botMode=n(),h.botLegsLeft=n(),h.botTurnLeft=n(),h.botLegLen=r()<<16>>16,h.botLegStep=r()<<16>>16}if(!e||t!==i.length||c.phase>oe.Results||c.tick<0||c.tick>1e8||c.round<0||c.ringOffset<0||c.ringOffset>=Cr||c.winner<-1||c.winner>=pt)return null;for(const h of c.cycles)if(h.active&&(!Yn(h.x,h.y)||h.lastKiller<-1||h.lastKiller>=pt||h.lastDeath>de.Shield||h.botMode>2||h.trailOrigin<-1||h.trailOrigin>=$t||h.area<0||h.area>$t||h.boostCharges<0||h.boostUntilTick<0||h.boostUntilTick>c.tick+Ma||h.turboUntilTick<0||h.turboUntilTick>c.tick+gr||h.shieldUntilTick<0||h.shieldUntilTick>c.tick+_r||h.turboUntilTick!==0&&h.turboUntilTick<=c.tick||h.shieldUntilTick!==0&&h.shieldUntilTick<=c.tick||!h.alive&&(h.boostUntilTick!==0||h.turboUntilTick!==0||h.shieldUntilTick!==0)))return null;return c}function tu(i){let t=0;for(const e of i.cycles)t+=e.active?1:0;return t}function eu(i){let t=0;for(const e of i.cycles)t+=e.active&&e.bot?1:0;return t}const Xn=96;class nu{head;history=new Array(Xn).fill(null);cmds=[];baseTick=0;dirtyFrom=Number.MAX_SAFE_INTEGER;events=[];rollbackTicks=0;constructor(t){this.head=t}reset(t,e=[]){this.head=Nr(t),this.baseTick=t.tick,this.dirtyFrom=Number.MAX_SAFE_INTEGER,this.history.fill(null),this.cmds=e.map(n=>({...n})),this.cmds.sort(il),this.events=[]}get current(){return this.head}get currentTick(){return this.head.tick}get commands(){return this.cmds}oldestTick(){return Math.max(this.baseTick,this.head.tick-Xn+1)}upsert(t){if(t.tick<this.oldestTick())return!1;const e=this.cmds.findIndex(s=>s.slot===t.slot&&s.type===t.type&&s.seq===t.seq);if(e>=0){const s=this.cmds[e];if(s.tick===t.tick&&s.arg===t.arg)return!0;this.cmds.splice(e,1),s.tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,s.tick))}let n=this.cmds.length;for(let s=0;s<this.cmds.length;s++)if(il(t,this.cmds[s])<0){n=s;break}return this.cmds.splice(n,0,{...t}),t.tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,t.tick)),!0}remove(t,e,n){const s=this.cmds.findIndex(r=>r.slot===t&&r.type===e&&r.seq===n);return s<0?!1:(this.cmds[s].tick<this.head.tick&&(this.dirtyFrom=Math.min(this.dirtyFrom,this.cmds[s].tick)),this.cmds.splice(s,1),!0)}find(t,e,n){return this.cmds.find(s=>s.slot===t&&s.type===e&&s.seq===n)}stateAt(t){if(t===this.head.tick)return this.head;if(t<this.oldestTick()||t>this.head.tick)return null;const e=this.history[t%Xn];return e&&e.tick===t?e:null}advanceTo(t){if(this.dirtyFrom<this.head.tick){const r=Math.max(this.dirtyFrom,this.oldestTick()),a=this.stateAt(r);a&&(this.rollbackTicks+=this.head.tick-r,this.head=Nr(a))}this.dirtyFrom=Number.MAX_SAFE_INTEGER,t=Math.min(t,this.head.tick+32768);let e=0;for(;e<this.cmds.length&&this.cmds[e].tick<this.head.tick;)e++;for(;this.head.tick<t;){this.history[this.head.tick%Xn]=Nr(this.head);const r=e;for(;e<this.cmds.length&&this.cmds[e].tick===this.head.tick;)e++;Zh(this.head,this.cmds.slice(r,e),this.events)}const n=this.oldestTick();let s=0;for(;s<this.cmds.length&&this.cmds[s].tick<n;)s++;s>0&&this.cmds.splice(0,s)}settle(){this.advanceTo(this.head.tick)}commandsFrom(t){return this.cmds.filter(e=>e.tick>=t).map(e=>({...e}))}consumeEvents(){const t=this.events;return this.events=[],t}}const Ao=5,sl=8,iu=4,kr=12,su=16,ru=15,rl=7,ol=2.5,Jn=()=>({kind:"empty",peer:"",name:""}),Ms="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function ou(i){let t="";for(let e=0;e<i.length;e+=3){const n=i[e]<<16|(i[e+1]??0)<<8|(i[e+2]??0);t+=Ms[n>>18&63]+Ms[n>>12&63],t+=e+1<i.length?Ms[n>>6&63]:"=",t+=e+2<i.length?Ms[n&63]:"="}return t}function au(i){const t=i.replace(/=+$/,""),e=[];let n=0,s=0;for(const r of t){const a=Ms.indexOf(r);if(a<0)return null;n=n<<6|a,s+=6,s>=8&&(s-=8,e.push(n>>s&255))}return Uint8Array.from(e)}const al=i=>i.map(t=>[t.tick,t.slot,t.type,t.arg,t.seq]);function ll(i,t){const e=i[t],n=[];if(!Array.isArray(e))return n;for(const s of e){if(!Array.isArray(s)||s.length!==5||!s.every(h=>typeof h=="number"&&Number.isFinite(h)))continue;const[r,a,o,l,c]=s;a<0||a>=pt||o<0||o>re.Boost||n.push({tick:r|0,slot:a|0,type:o|0,arg:l&255,seq:c&65535})}return n}function cl(i){const t=i.y===void 0?re.Turn:i.y;return t!==re.Turn&&t!==re.Boost||![i.s,i.t,i.q].every(e=>typeof e=="number"&&Number.isSafeInteger(e))||i.s<0||i.s>=pt||i.t<0||i.q<0||i.q>65535||t===re.Turn&&(!Number.isInteger(i.d)||i.d<0||i.d>3)?null:{tick:i.t,slot:i.s,type:t,arg:t===re.Turn?i.d:0,seq:i.q}}const kn=(i,t,e=0)=>typeof i[t]=="number"&&Number.isFinite(i[t])?i[t]:e,nn=(i,t)=>typeof i[t]=="string"?i[t]:"",Is=i=>Number.isFinite(i)&&i>=0&&i<1e12,hl=i=>`${i.tick}|${i.type}|${i.slot}|${i.other}|${i.value}`;class ba{timeline;myRole="offline";haveMatch=!1;hostPeer="";epoch=0;slots=Array.from({length:pt},Jn);mySlot=-1;allowBots;now=0;joinedAt=-1;simClock=0;alpha=0;clockTargetSet=!1;clockTarget=0;clockTargetAt=0;mySeq=1+Math.floor(Math.random()*3e4);lastLocalTick=Number.MIN_SAFE_INTEGER;lastLocalDir=0;lastLocalBoostTick=Number.MIN_SAFE_INTEGER;hostSeq=30001+Math.floor(Math.random()*3e4);lastSlotTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);lastSlotBoostTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);lastHostCmdTick=new Array(pt).fill(Number.MIN_SAFE_INTEGER);outbox=[];lastHashTick=Number.MIN_SAFE_INTEGER;rosterDirty=!1;lastRosterSent=-100;snapshotSentAt=new Map;lastSnapshotRequest=-100;lastPing=-100;pingCount=0;ping=0;pendingHashChecks=[];desyncs=0;hostHeardAt=-100;hostEpochSeen=0;hostTickSeen=0;earlyInputs=[];rttSamples=[];lastPrune=0;lastHeard=new Map;silenced=new Set;inbox=[];recentEvents=[];recentKeys=new Set;pendingEvents=[];cfg;transport;constructor(t,e){this.cfg=t,this.transport=e,this.allowBots=e?t.botsEnabled!==!1:!0,this.timeline=new nu(nl(1)),e&&(e.onMessage=(n,s)=>this.inbox.push([n,s]),e.onPresence=()=>{})}get state(){return this.timeline.current}get previousState(){return this.timeline.stateAt(this.timeline.currentTick-1)??this.timeline.current}get tickAlpha(){return this.alpha}get localSlot(){return this.mySlot}get hasMatch(){return this.haveMatch}get botsEnabled(){return this.allowBots}get isOnline(){return this.transport!==null}get role(){return this.myRole}get pingMs(){return this.ping}get peerCount(){return this.transport?this.transport.peers.length:1}get linkState(){return this.transport?this.transport.state:"joined"}get linkJoined(){return this.linkState==="joined"}get desyncCount(){return this.desyncs}get hostId(){return this.hostPeer}get config(){return this.cfg}get history(){return this.timeline}get statusText(){if(!this.transport)return"";switch(this.transport.state){case"connecting":return"CONNECTING TO THE GRID...";case"failed":return"CONNECTION FAILED";case"closed":return"DISCONNECTED"}return this.haveMatch?"":this.myRole==="joining"?"JOINING ROOM...":"SYNCING WITH HOST..."}slotName(t){if(t<0||t>=pt)return"";if(t===this.mySlot&&this.cfg.name)return this.cfg.name;const e=this.timeline.current.cycles[t];return e.active&&!e.bot&&this.slots[t].name?this.slots[t].name:Fh[t]}isHumanSlot(t){if(t<0||t>=pt)return!1;const e=this.timeline.current.cycles[t];return e.active&&!e.bot}consumeEvents(){const t=this.pendingEvents;return this.pendingEvents=[],t}hashAt(t){const e=this.timeline.stateAt(t);return e?Or(e):0}start(t){this.now=t,this.transport?this.myRole="joining":(this.myRole="offline",this.startNewMatch())}shutdown(){this.transport&&(this.transport.onMessage=null,this.transport.onPresence=null,this.transport.close())}tick(t){const e=Math.min(Math.max(t-this.now,0),.25);if(this.now=t,this.transport&&(this.transport.tick(t),this.joinedAt<0&&this.transport.state==="joined"&&(this.joinedAt=t),this.updateRole(),this.processInbox()),!this.haveMatch){this.myRole==="client"&&this.clientRequestSnapshot(!1);return}this.myRole==="offline"||this.myRole==="host"?(this.simClock+=e*Kt,this.myRole==="host"&&this.hostDuties(),this.hostFillBots()):this.myRole==="client"&&(this.clientAdjustClock(e),this.simClock-this.timeline.currentTick>Xn&&(this.simClock=this.timeline.currentTick+Xn,this.clientRequestSnapshot(!1)));const n=Math.floor(this.simClock);this.timeline.advanceTo(Math.max(this.timeline.currentTick,n)),this.alpha=n<this.timeline.currentTick?1:Math.min(Math.max(this.simClock-n,0),1);for(const r of this.timeline.consumeEvents()){const a=hl(r);this.recentKeys.has(a)||(this.recentKeys.add(a),this.recentEvents.push(r),this.pendingEvents.push(r))}const s=this.timeline.currentTick-2*kr-sl;if(this.recentEvents.length>0&&this.recentEvents[0].tick<s&&(this.recentEvents=this.recentEvents.filter(r=>r.tick>=s?!0:(this.recentKeys.delete(hl(r)),!1))),this.pendingEvents.length>512&&this.pendingEvents.splice(0,this.pendingEvents.length-512),this.myRole==="host"||this.myRole==="offline"){const r=this.timeline.currentTick,a=r-this.lastHashTick>=su;if(this.myRole==="host"&&(this.outbox.length>0||a)){const o={h:this.cfg.peerId,e:this.epoch,n:Math.round(this.simClock*1e3),b:this.allowBots,c:al(this.outbox)};if(a){const l=r-kr,c=this.timeline.stateAt(l);c&&(o.k=[l,Or(c)]),this.lastHashTick=r}this.send("c",o)}this.outbox=[],this.myRole==="host"&&(this.rosterDirty||t-this.lastRosterSent>10)&&this.hostSendRoster()}else this.myRole==="client"&&(this.checkHashes(),t-this.lastPing>(this.pingCount<3?1:5)&&(this.lastPing=t,this.pingCount++,this.send("pi",{p:this.cfg.peerId,x:Math.round(t*1e3)})))}setBotsEnabled(t){this.myRole!=="host"||!this.haveMatch||this.allowBots===t||(this.allowBots=t,this.hostFillBots(),this.rosterDirty=!0,this.hostSendRoster())}inputBoost(){if(!this.haveMatch||this.mySlot<0||this.state.phase!==oe.Playing)return;const t=this.state.cycles[this.mySlot];if(!t.active||!t.alive||t.bot||t.boostCharges<=0||t.boostUntilTick>this.timeline.currentTick||t.turboUntilTick>this.timeline.currentTick)return;const e=this.timeline.currentTick;if(this.lastLocalBoostTick>=e)return;this.lastLocalBoostTick=e,this.mySeq=this.mySeq+1&65535;const n={tick:e,slot:this.mySlot,type:re.Boost,arg:0,seq:this.mySeq};this.timeline.upsert(n),this.myRole==="host"?(this.lastSlotBoostTick[this.mySlot]=e,this.outbox.push(n)):this.myRole==="client"&&this.send("i",{p:this.cfg.peerId,s:this.mySlot,t:e,y:re.Boost,d:0,q:n.seq})}predictedDir(){return this.mySlot<0?0:this.lastLocalTick>=this.timeline.currentTick?this.lastLocalDir:this.timeline.current.cycles[this.mySlot].dir}inputDirection(t){this.queueLocalTurn(t&3)}inputTurn(t){const e=this.predictedDir();this.queueLocalTurn(t?hi(e):Bi(e))}queueLocalTurn(t){if(!this.haveMatch||this.mySlot<0)return;const e=this.timeline.current.cycles[this.mySlot];if(!e.active||!e.alive||e.bot)return;const n=this.predictedDir();if(t===n||t===Ta(n))return;const s=Math.max(this.timeline.currentTick,this.lastLocalTick+1);if(s>this.timeline.currentTick+3)return;this.mySeq=this.mySeq+1&65535;const r={tick:s,slot:this.mySlot,type:re.Turn,arg:t,seq:this.mySeq};this.timeline.upsert(r),this.lastLocalTick=s,this.lastLocalDir=t,this.myRole==="host"?(this.lastSlotTick[this.mySlot]=s,this.outbox.push(r)):this.myRole==="client"&&this.send("i",{p:this.cfg.peerId,s:this.mySlot,t:s,y:re.Turn,d:t,q:r.seq})}isPresent(t){return this.transport?this.transport.peers.some(e=>e.id===t):t===this.cfg.peerId}electSuccessor(t){if(!this.transport)return this.cfg.peerId;let e=null;for(const n of this.transport.peers)n.version!==Ao||n.id===t||(!e||n.joinMs<e.joinMs||n.joinMs===e.joinMs&&n.id<e.id)&&(e=n);return e?e.id:""}joinMsOf(t){const e=this.transport?.peers.find(n=>n.id===t);return e?e.joinMs:Number.MAX_SAFE_INTEGER}isBetterHost(t,e,n,s,r,a){if(t!==s)return t>s;if(Math.abs(e-r)>32)return e>r;const o=this.joinMsOf(n),l=this.joinMsOf(a);return o!==l?o<l:n<a}yieldTo(t,e,n){this.myRole="client",this.outbox=[],this.followHost(t,e,n)}followHost(t,e,n){this.myRole==="joining"&&(this.myRole="client"),this.hostPeer=t,this.hostHeardAt=this.now,this.hostEpochSeen=e,this.hostTickSeen=n,this.pendingHashChecks=[],this.rttSamples=[],this.clockTargetSet=!1}updateRole(){if(!(this.transport.state!=="joined"||this.joinedAt<0||!this.isPresent(this.cfg.peerId)||this.myRole==="host"||this.hostPeer!==""&&this.isPresent(this.hostPeer)&&this.now-this.hostHeardAt<rl)){if(this.myRole==="client"&&this.haveMatch){this.electSuccessor(this.hostPeer)===this.cfg.peerId&&this.becomeHostOfRunningMatch();return}this.now-this.joinedAt<ol||(this.electSuccessor("")===this.cfg.peerId||this.now-this.joinedAt>4*ol?(this.myRole="host",this.hostPeer=this.cfg.peerId,this.startNewMatch()):this.myRole==="joining"&&(this.myRole="client"))}}processInbox(){const t=this.inbox;this.inbox=[];for(const[e,n]of t)this.handleMessage(e,n)}handleMessage(t,e){const n=nn(e,"p");n&&(this.lastHeard.set(n,this.now),this.silenced.delete(n));let s=!1;const r=nn(e,"h");if((t==="c"||t==="s"||t==="m"||t==="po")&&r&&r!==this.cfg.peerId&&this.isPresent(r)){const o=kn(e,"e")|0,l=kn(e,"n",-1),c=Is(l)?l/1e3:0;if(this.myRole==="host")this.haveMatch&&this.isBetterHost(o,c,r,this.epoch,this.simClock,this.cfg.peerId)&&(this.yieldTo(r,o,c),t!=="s"&&this.clientRequestSnapshot(!0),s=!0);else if(r===this.hostPeer)s=!0,this.hostHeardAt=this.now,this.hostEpochSeen=o,this.hostTickSeen=c;else{const h=this.hostPeer!==""&&this.isPresent(this.hostPeer)&&this.now-this.hostHeardAt<rl,u=this.hostTickSeen+(this.now-this.hostHeardAt)*Kt;(!h||this.isBetterHost(o,c,r,this.hostEpochSeen,u,this.hostPeer))&&(this.followHost(r,o,c),t!=="s"&&this.clientRequestSnapshot(!0),s=!0)}}switch(s&&typeof e.b=="boolean"&&(this.allowBots=e.b),t){case"i":this.myRole==="host"?this.hostOnInput(e):this.haveMatch?this.clientOnInput(e):this.earlyInputs.length<64&&this.earlyInputs.push(e);break;case"c":this.myRole==="client"&&this.haveMatch&&s&&this.clientOnCommit(e);break;case"s":{const o=nn(e,"to");this.myRole!=="host"&&s&&(o===this.cfg.peerId||o==="*")&&this.clientOnSnapshot(e);break}case"m":this.myRole!=="host"&&s&&this.readRoster(e);break;case"r":this.myRole==="host"&&this.haveMatch&&this.hostOnSnapshotRequest(e);break;case"pi":this.myRole==="host"&&this.send("po",{h:this.cfg.peerId,e:this.epoch,to:nn(e,"p"),x:kn(e,"x"),n:Math.round(this.simClock*1e3)});break;case"po":this.myRole==="client"&&s&&nn(e,"to")===this.cfg.peerId&&this.handleClockSample(e);break}}handleClockSample(t){const e=kn(t,"x",-1),n=kn(t,"n",-1);if(!Number.isFinite(e)||e<=0||!Is(n))return;const s=this.now*1e3-e;if(s<0||s>5e3)return;this.rttSamples.push({rtt:s,hostMilli:n,at:this.now}),this.rttSamples.length>4&&this.rttSamples.shift();let r=this.rttSamples[0];for(const a of this.rttSamples)a.rtt<r.rtt&&(r=a);this.ping=Math.round(r.rtt),this.clockTarget=r.hostMilli/1e3+r.rtt/2e3*Kt,this.clockTargetAt=r.at,this.clockTargetSet=!0}startNewMatch(){const t=this.cfg.seed!==0?this.cfg.seed>>>0:Math.random()*4294967295>>>0|1;this.timeline.reset(nl(t)),this.simClock=0,this.haveMatch=!0,this.epoch=1,this.lastHostCmdTick.fill(Number.MIN_SAFE_INTEGER),this.slots=Array.from({length:pt},Jn),this.lastSlotTick.fill(Number.MIN_SAFE_INTEGER),this.lastSlotBoostTick.fill(Number.MIN_SAFE_INTEGER),this.mySlot=-1,this.lastLocalTick=Number.MIN_SAFE_INTEGER,this.lastLocalBoostTick=Number.MIN_SAFE_INTEGER,this.lastHashTick=0,this.cfg.spectator||(this.mySlot=0,this.slots[0]={kind:"human",peer:this.cfg.peerId,name:this.cfg.name},this.hostIssue(re.JoinHuman,0,0,0)),this.hostFillBots(),this.myRole==="host"&&(this.rosterDirty=!0,this.hostSendSnapshot("*"))}rebuildSlotsFromState(){const t=this.timeline.current;for(let e=0;e<pt;e++){const n=t.cycles[e],s=this.slots[e];n.active?n.bot?this.slots[e]={kind:"bot",peer:"",name:""}:s.kind="human":this.slots[e]=Jn()}}becomeHostOfRunningMatch(){this.myRole="host",this.hostPeer=this.cfg.peerId,this.epoch=Math.max(this.epoch,this.hostEpochSeen)+1,this.lastHostCmdTick.fill(Number.MIN_SAFE_INTEGER),this.rebuildSlotsFromState();const t=this.timeline.currentTick;for(let e=0;e<pt;e++){this.lastSlotTick[e]=t,this.lastSlotBoostTick[e]=t;const n=this.slots[e];n.kind==="human"&&n.peer!==this.cfg.peerId&&!this.isPresent(n.peer)&&this.hostRemoveHuman(e,t)}this.lastHashTick=t,this.rosterDirty=!0,this.hostSendSnapshot("*")}hostRemoveHuman(t,e){this.hostIssue(this.allowBots?re.Leave:re.Remove,t,0,e),this.slots[t]=this.allowBots?{kind:"bot",peer:"",name:""}:Jn()}hostIssue(t,e,n,s){const r=Math.max(s,this.lastHostCmdTick[e]+1);this.lastHostCmdTick[e]=r,this.hostSeq=this.hostSeq+1&65535;const a={tick:r,slot:e,type:t,arg:n,seq:this.hostSeq};this.timeline.upsert(a),this.myRole==="host"&&this.outbox.push(a)}hostFillBots(){const t=this.timeline.current,e=this.timeline.currentTick;if(!this.allowBots){for(let s=0;s<pt;s++)this.slots[s].kind==="bot"&&(this.slots[s]=Jn(),this.hostIssue(re.Remove,s,0,e));return}let n=this.slots.filter(s=>s.kind!=="empty").length;if(t.phase===oe.Results){for(let s=pt-1;s>=0&&n>this.cfg.targetCycles;s--)this.slots[s].kind==="bot"&&(this.slots[s]=Jn(),this.hostIssue(re.Remove,s,0,e),n--);return}for(let s=pt-1;s>=0&&n<this.cfg.targetCycles;s--)this.slots[s].kind==="empty"&&(this.slots[s]={kind:"bot",peer:"",name:""},this.hostIssue(re.JoinBot,s,0,e),n++)}hostAssignSlot(t,e){for(let s=0;s<pt;s++)if(this.slots[s].kind==="human"&&this.slots[s].peer===t)return s;let n=this.slots.findIndex(s=>s.kind==="empty");return n<0&&(n=this.slots.findIndex(s=>s.kind==="bot")),n<0?-1:(this.slots[n]={kind:"human",peer:t,name:e.slice(0,12)},this.lastSlotTick[n]=Number.MIN_SAFE_INTEGER,this.lastSlotBoostTick[n]=Number.MIN_SAFE_INTEGER,this.lastHeard.set(t,this.now),this.hostIssue(re.JoinHuman,n,0,this.timeline.currentTick),this.rosterDirty=!0,n)}hostDuties(){const t=this.transport;if(t.state!=="joined"||!this.isPresent(this.cfg.peerId))return;if(this.now-this.lastPrune>5){this.lastPrune=this.now;for(const n of[...this.lastHeard.keys()])this.isPresent(n)||this.lastHeard.delete(n);for(const n of[...this.snapshotSentAt.keys()])this.isPresent(n)||this.snapshotSentAt.delete(n);for(const n of[...this.silenced])this.isPresent(n)||this.silenced.delete(n)}const e=this.timeline.currentTick;for(let n=0;n<pt;n++){const s=this.slots[n];if(s.kind!=="human"||s.peer===this.cfg.peerId)continue;const r=this.lastHeard.get(s.peer)??0,a=this.now-r>ru;(!this.isPresent(s.peer)||a)&&(a&&this.silenced.add(s.peer),this.hostRemoveHuman(n,e),this.rosterDirty=!0)}for(const n of t.peers){if(n.version!==Ao||n.id===this.cfg.peerId||this.silenced.has(n.id))continue;!this.slots.some(r=>r.kind==="human"&&r.peer===n.id)&&this.hostAssignSlot(n.id,n.name)>=0&&this.hostSendSnapshot(n.id)}}hostOnInput(t){const e=cl(t);if(!e)return;const{slot:n,type:s,seq:r}=e,a=nn(t,"p");if(this.slots[n].kind!=="human"||this.slots[n].peer!==a||this.timeline.find(n,s,r))return;const o=e.tick,l=this.timeline.currentTick,c=s===re.Boost?this.lastSlotBoostTick:this.lastSlotTick;let h=Math.min(Math.max(o,l-sl),l+iu);h=Math.max(h,c[n]+1,this.timeline.oldestTick()),c[n]=h;const u={...e,tick:h};this.timeline.upsert(u),h!==o&&this.outbox.push(u)}hostOnSnapshotRequest(t){const e=nn(t,"p");if(!e||!this.isPresent(e))return;const n=this.snapshotSentAt.get(e);n!==void 0&&this.now-n<1||(this.hostAssignSlot(e,nn(t,"n")),this.hostSendSnapshot(e))}hostSendSnapshot(t){const e=this.timeline.currentTick,n=Math.max(this.timeline.oldestTick(),e-kr),s=this.timeline.stateAt(n);s&&(this.send("s",{h:this.cfg.peerId,e:this.epoch,to:t,t:n,n:Math.round(this.simClock*1e3),d:ou(Jh(s)),c:al(this.timeline.commandsFrom(n)),r:this.rosterJson(),b:this.allowBots}),this.snapshotSentAt.set(t,this.now))}hostSendRoster(){this.send("m",{h:this.cfg.peerId,e:this.epoch,n:Math.round(this.simClock*1e3),b:this.allowBots,r:this.rosterJson()}),this.rosterDirty=!1,this.lastRosterSent=this.now}rosterJson(){const t=[];for(let e=0;e<pt;e++)this.slots[e].kind==="human"&&t.push([e,this.slots[e].peer,this.slots[e].name]);return t}readRoster(t){const e=t.r;if(Array.isArray(e)){this.slots=Array.from({length:pt},Jn),this.mySlot=-1;for(const n of e){if(!Array.isArray(n)||n.length!==3)continue;const s=Number(n[0])|0;s<0||s>=pt||(this.slots[s]={kind:"human",peer:String(n[1]),name:String(n[2]).slice(0,16)},this.slots[s].peer===this.cfg.peerId&&(this.mySlot=s))}}}clientOnSnapshot(t){const e=au(nn(t,"d")),n=e?Qh(e):null;if(!n)return;const s=ll(t,"c"),r=this.timeline.currentTick;if(this.haveMatch&&r>=n.tick&&r-n.tick<Xn)for(const h of this.timeline.commands)(h.type===re.Turn||h.type===re.Boost)&&h.tick>=n.tick&&!s.some(u=>u.slot===h.slot&&u.type===h.type&&u.seq===h.seq)&&s.push({...h});this.timeline.reset(n,s),this.readRoster(t),this.epoch=kn(t,"e")|0,this.hostPeer=nn(t,"h"),this.myRole="client",this.haveMatch=!0,this.lastLocalTick=Number.MIN_SAFE_INTEGER,this.lastLocalBoostTick=Number.MIN_SAFE_INTEGER,this.pendingHashChecks=[];const a=kn(t,"n",-1),o=Is(a)?a/1e3:n.tick,l=(this.ping>0?this.ping/2e3:.06)*Kt;this.simClock=Math.min(Math.max(o+l,n.tick),n.tick+Xn),this.hostHeardAt=this.now,this.clockTarget=this.simClock,this.clockTargetAt=this.now,this.clockTargetSet=!0,this.timeline.advanceTo(Math.floor(this.simClock));const c=this.earlyInputs;this.earlyInputs=[];for(const h of c)this.clientOnInput(h)}clientOnInput(t){const e=cl(t);if(!e)return;const n=nn(t,"p");this.slots[e.slot].peer!==n||n===this.cfg.peerId||this.timeline.find(e.slot,e.type,e.seq)||e.tick>this.timeline.currentTick+64||this.timeline.upsert(e)}clientOnCommit(t){for(const s of ll(t,"c"))s.tick>this.timeline.currentTick+256||this.timeline.upsert(s)||this.clientRequestSnapshot(!1);const e=t.k;Array.isArray(e)&&e.length===2&&typeof e[0]=="number"&&typeof e[1]=="number"&&this.pendingHashChecks.push([e[0]|0,e[1]>>>0]);const n=kn(t,"n",-1);!this.clockTargetSet&&Is(n)&&(this.clockTarget=n/1e3+.06*Kt,this.clockTargetAt=this.now,this.clockTargetSet=!0)}clientRequestSnapshot(t){!this.transport||this.myRole!=="client"||!t&&this.now-this.lastSnapshotRequest<1.5||(this.lastSnapshotRequest=this.now,this.send("r",{p:this.cfg.peerId,n:this.cfg.name}))}clientAdjustClock(t){let e=1;if(this.clockTargetSet){const n=this.clockTarget+(this.now-this.clockTargetAt)*Kt,s=n-this.simClock;Math.abs(s)>6?this.simClock=n:e=1+Math.min(Math.max(s*.1,-.15),.15)}this.simClock+=t*Kt*e}checkHashes(){for(let t=this.pendingHashChecks.length-1;t>=0;t--){const[e,n]=this.pendingHashChecks[t];if(e>=this.timeline.currentTick)continue;const s=this.timeline.stateAt(e);this.pendingHashChecks.splice(t,1),s&&Or(s)!==n&&(this.desyncs++,this.clientRequestSnapshot(!1))}}send(t,e){this.transport&&this.transport.state==="joined"&&this.transport.send(t,e)}}const Br=25,lu=10;function ul(i,t){return{id:i,name:typeof t?.n=="string"?t.n:"",joinMs:typeof t?.j=="number"?t.j:0,version:typeof t?.v=="number"?t.v:0}}class cu{state="connecting";peers=[];onMessage=null;onPresence=null;sent=0;received=0;error="";topic;apiUrl;socket=null;closedByUser=!1;refCounter=0;joinRef="";channelJoined=!1;havePresenceState=!1;bufferedDiffs=[];presence=new Map;now=0;nextHeartbeat=0;reconnectAt=-1;joinSentAt=-1;lastRxAt=0;attempts=0;apiKey;room;self;constructor(t,e,n,s){this.apiUrl=t.replace(/\/$/,""),this.apiKey=e,this.room=n,this.self=s,this.topic=`realtime:${n}`}connect(){this.closedByUser=!1,this.openSocket()}describe(){return`${this.apiUrl} room=${this.room} sent=${this.sent} recv=${this.received} peers=${this.peers.length}`}openSocket(){const t=`${this.apiUrl.replace(/^http/,"ws")}/realtime/v1/websocket?apikey=${encodeURIComponent(this.apiKey)}&vsn=1.0.0`;this.state="connecting",this.channelJoined=!1,this.havePresenceState=!1,this.bufferedDiffs=[],this.joinRef="",this.joinSentAt=-1;let e;try{e=new WebSocket(t)}catch(n){this.drop(`cannot open socket: ${String(n)}`,2);return}this.socket=e,e.onopen=()=>{this.socket===e&&this.handleConnected()},e.onmessage=n=>{this.socket===e&&typeof n.data=="string"&&this.handleRaw(n.data)},e.onerror=()=>{this.socket===e&&this.drop("connection error",Math.min(15,1+this.attempts*2))},e.onclose=n=>{if(this.socket===e){if(this.closedByUser){this.state="closed";return}this.drop(`socket closed (${n.code} ${n.reason})`,Math.min(15,.5+this.attempts*2))}}}handleConnected(){this.lastRxAt=this.now,this.joinRef=String(++this.refCounter),this.sendFrame(this.topic,"phx_join",{config:{broadcast:{self:!1,ack:!1},presence:{key:this.self.id,enabled:!0},postgres_changes:[],private:!1},access_token:this.apiKey}),this.joinSentAt=this.now,this.nextHeartbeat=this.now+Br}drop(t,e){this.error=t;const n=this.socket;if(this.socket=null,n){n.onopen=n.onmessage=n.onerror=n.onclose=null;try{n.close()}catch{}}this.channelJoined=!1,this.joinSentAt=-1,this.attempts++,this.state=this.attempts>=4?"failed":"connecting",this.presence.size>0&&(this.presence.clear(),this.rebuildPeers()),this.reconnectAt=this.now+e}tick(t){if(this.now=t,this.closedByUser)return;if(this.reconnectAt>=0&&t>=this.reconnectAt){this.reconnectAt=-1,this.openSocket();return}const e=this.socket!==null&&this.socket.readyState===WebSocket.OPEN;if(e&&t>=this.nextHeartbeat&&(this.nextHeartbeat=t+Br,this.sendFrame("phoenix","heartbeat",{})),e&&this.channelJoined&&t-this.lastRxAt>2.4*Br){this.drop("no traffic from the server",1);return}e&&!this.channelJoined&&this.joinSentAt>=0&&t-this.joinSentAt>lu&&(this.joinSentAt=-1,this.drop("join timed out",2))}close(){this.closedByUser||(this.closedByUser=!0,this.socket&&this.socket.readyState===WebSocket.OPEN&&(this.channelJoined&&this.sendFrame(this.topic,"phx_leave",{}),this.socket.close(1e3,"bye")),this.state="closed")}send(t,e){!this.channelJoined||!this.socket||this.socket.readyState!==WebSocket.OPEN||(this.sendFrame(this.topic,"broadcast",{type:"broadcast",event:t,payload:e}),this.sent++)}sendFrame(t,e,n){if(!this.socket||this.socket.readyState!==WebSocket.OPEN)return;const s={topic:t,event:e,payload:n,ref:e==="phx_join"?this.joinRef:String(++this.refCounter)};t===this.topic&&this.joinRef&&(s.join_ref=this.joinRef),this.socket.send(JSON.stringify(s))}handleRaw(t){this.lastRxAt=this.now;let e;try{e=JSON.parse(t)}catch{return}if(!e||typeof e!="object"||e.topic!==this.topic)return;const n=e.event,s=typeof e.ref=="string"?e.ref:"",r=e.payload&&typeof e.payload=="object"?e.payload:{};if(n==="phx_reply"){s===this.joinRef&&!this.channelJoined&&(r.status==="ok"?(this.channelJoined=!0,this.joinSentAt=-1,this.attempts=0,this.state="joined",this.error="",this.self={...this.self,joinMs:Date.now()},this.sendFrame(this.topic,"presence",{type:"presence",event:"track",payload:{n:this.self.name,v:this.self.version,j:this.self.joinMs}})):this.drop(`join refused: ${t.slice(0,200)}`,5));return}if(n==="broadcast"){typeof r.event=="string"&&r.payload&&typeof r.payload=="object"&&(this.received++,this.onMessage?.(r.event,r.payload));return}if(n==="presence_state"){this.applyPresenceState(r),this.havePresenceState=!0;for(const a of this.bufferedDiffs)this.applyPresenceDiff(a);this.bufferedDiffs=[],this.rebuildPeers();return}if(n==="presence_diff"){if(!this.havePresenceState){this.bufferedDiffs.push(r);return}this.applyPresenceDiff(r),this.rebuildPeers();return}if(n==="system"){if(r.status==="error"){const a=String(r.message??"");this.drop(`server: ${a}`,a.includes("per second")?10:1)}return}(n==="phx_close"||n==="phx_error")&&(!s||s===this.joinRef)&&this.drop(`channel ${n}`,1)}applyPresenceState(t){this.presence.clear();for(const[e,n]of Object.entries(t)){const s=n?.metas;Array.isArray(s)&&this.presence.set(e,s.map(r=>({ref:String(r?.phx_ref??""),peer:ul(e,r)})))}}applyPresenceDiff(t){for(const[e,n]of Object.entries(t.joins??{})){const s=n?.metas;if(!Array.isArray(s))continue;const r=this.presence.get(e)??[];for(const a of s){const o={ref:String(a?.phx_ref??""),peer:ul(e,a)},l=r.filter(c=>c.ref!==o.ref);l.push(o),r.length=0,r.push(...l)}this.presence.set(e,r)}for(const[e,n]of Object.entries(t.leaves??{})){const s=this.presence.get(e),r=n?.metas;if(!s||!Array.isArray(r))continue;const a=new Set(r.map(l=>String(l?.phx_ref??""))),o=s.filter(l=>!a.has(l.ref));o.length===0?this.presence.delete(e):this.presence.set(e,o)}}rebuildPeers(){const t=[];for(const e of this.presence.values())e.length>0&&t.push(e[e.length-1].peer);t.sort((e,n)=>e.id<n.id?-1:e.id>n.id?1:0),this.peers=t,this.onPresence?.()}}async function hu(i,t,e,n,s,r,a,o){try{await fetch(`${i.replace(/\/$/,"")}/rest/v1/round_results`,{method:"POST",headers:{apikey:t,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify({room:e.slice(0,32),player:n.slice(0,16),territory_permille:Math.min(Math.max(Math.round(s),0),1e3),kills:Math.min(Math.max(Math.round(r),0),200),won:a,humans:Math.min(Math.max(Math.round(o),1),8)})})}catch(l){console.warn("round report failed",l)}}async function uu(i,t,e){try{const n=new Date(Date.now()-864e5).toISOString(),s=`select=player,territory_permille,won&created_at=gte.${encodeURIComponent(n)}&order=territory_permille.desc&limit=${e}`,r=await fetch(`${i.replace(/\/$/,"")}/rest/v1/round_results?${s}`,{headers:{apikey:t}});return r.ok?(await r.json()).map(o=>({player:String(o.player),permille:Number(o.territory_permille)|0,won:!!o.won})):null}catch{return null}}const Mr="w"+Math.random().toString(36).slice(2,13),Aa=()=>performance.now()/1e3;function fl(){const i=new ba({peerId:Mr,name:"",spectator:!0,targetCycles:7,seed:0},null);return i.start(Aa()),i}function fu(i){const t=new ba({peerId:Mr,name:i,spectator:!1,targetCycles:6,seed:0},null);return t.start(Aa()),t}function dl(i,t,e=!0){const n=new cu(xa,Sa,i,{id:Mr,name:t,joinMs:Date.now(),version:Ao});n.connect();const s=new ba({peerId:Mr,name:t,spectator:!1,targetCycles:6,seed:0,botsEnabled:e},n);return s.start(Aa()),s}function du(i){hu(xa,Sa,i.room,i.player,i.permille,i.kills,i.won,i.humans)}function pu(i=5){return uu(xa,Sa,i)}async function mu(){return!1}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wa="170",gu=0,pl=1,_u=2,Nc=1,vu=2,En=3,$n=0,De=1,Xe=2,Cn=0,Vi=1,Kn=2,ml=3,gl=4,xu=5,li=100,Su=101,Mu=102,yu=103,Tu=104,Eu=200,bu=201,Au=202,wu=203,wo=204,Ro=205,Ru=206,Cu=207,Pu=208,Lu=209,Iu=210,Du=211,Uu=212,Nu=213,Fu=214,Co=0,Po=1,Lo=2,ji=3,Io=4,Do=5,Uo=6,No=7,Fc=0,Ou=1,ku=2,Pn=0,Bu=1,zu=2,Hu=3,Gu=4,Vu=5,Wu=6,Xu=7,Oc=300,Zi=301,Ji=302,Fo=303,Oo=304,Pr=306,ko=1e3,ui=1001,Bo=1002,Ue=1003,qu=1004,Ds=1005,fn=1006,zr=1007,fi=1008,mn=1009,kc=1010,Bc=1011,As=1012,Ra=1013,di=1014,dn=1015,pn=1016,Ca=1017,Pa=1018,Qi=1020,zc=35902,Hc=1021,Gc=1022,Je=1023,Vc=1024,Wc=1025,Wi=1026,ts=1027,La=1028,Ia=1029,Xc=1030,Da=1031,Ua=1033,lr=33776,cr=33777,hr=33778,ur=33779,zo=35840,Ho=35841,Go=35842,Vo=35843,Wo=36196,Xo=37492,qo=37496,Yo=37808,$o=37809,Ko=37810,jo=37811,Zo=37812,Jo=37813,Qo=37814,ta=37815,ea=37816,na=37817,ia=37818,sa=37819,ra=37820,oa=37821,fr=36492,aa=36494,la=36495,qc=36283,ca=36284,ha=36285,ua=36286,Yu=3200,$u=3201,Ku=0,ju=1,bn="",ke="srgb",is="srgb-linear",Lr="linear",te="srgb",_i=7680,_l=519,Zu=512,Ju=513,Qu=514,Yc=515,tf=516,ef=517,nf=518,sf=519,fa=35044,vl=35048,xl="300 es",An=2e3,yr=2001;class ss{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,da=180/Math.PI;function qn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,s,r,a,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],E=s[4],M=s[7],F=s[2],A=s[5],w=s[8];return r[0]=a*_+o*b+l*F,r[3]=a*m+o*E+l*A,r[6]=a*p+o*M+l*w,r[1]=c*_+h*b+u*F,r[4]=c*m+h*E+u*A,r[7]=c*p+h*M+u*w,r[2]=f*_+d*b+g*F,r[5]=f*m+d*E+g*A,r[8]=f*p+d*M+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new Dt;function $c(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function of(){const i=Tr("canvas");return i.style.display="block",i}const Sl={};function ys(i){i in Sl||(Sl[i]=!0,console.warn(i))}function af(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Xt={enabled:!0,workingColorSpace:is,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(i.r=Ln(i.r),i.g=Ln(i.g),i.b=Ln(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===bn?Lr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ml=[.64,.33,.3,.6,.15,.06],yl=[.2126,.7152,.0722],Tl=[.3127,.329],El=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bl=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xt.define({[is]:{primaries:Ml,whitePoint:Tl,transfer:Lr,toXYZ:El,fromXYZ:bl,luminanceCoefficients:yl,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:Ml,whitePoint:Tl,transfer:te,toXYZ:El,fromXYZ:bl,luminanceCoefficients:yl,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});let vi;class hf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Tr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uf=0;class Kc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wr(s[a].image)):r.push(Wr(s[a]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ff=0;class Pe extends ss{constructor(t=Pe.DEFAULT_IMAGE,e=Pe.DEFAULT_MAPPING,n=ui,s=ui,r=fn,a=fi,o=Je,l=mn,c=Pe.DEFAULT_ANISOTROPY,h=bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=qn(),this.name="",this.source=new Kc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case ui:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case ui:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pe.DEFAULT_IMAGE=null;Pe.DEFAULT_MAPPING=Oc;Pe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,s=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,M=(d+1)/2,F=(p+1)/2,A=(h+f)/4,w=(u+_)/4,U=(g+m)/4;return E>M&&E>F?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=w/n):M>F?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=U/s):F<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),n=w/r,s=U/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class df extends ss{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Pe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Kc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qe extends df{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class jc extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class pf extends Pe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-o;const p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const F=Math.sqrt(E),A=Math.atan2(F,p*b);m=Math.sin(m*A)/F,o=Math.sin(o*A)/F}const M=o*b;if(l=l*m+f*M,c=c*m+d*M,h=h*m+g*M,u=u*m+_*M,m===1-o){const F=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=F,c*=F,h*=F,u*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-o*d,t[e+2]=c*g+h*d+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Al.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Al.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new C,Al=new Un;class mi{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cs),Ns.subVectors(this.max,cs),xi.subVectors(t.a,cs),Si.subVectors(t.b,cs),Mi.subVectors(t.c,cs),Bn.subVectors(Si,xi),zn.subVectors(Mi,Si),Qn.subVectors(xi,Mi);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-Qn.z,Qn.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,Qn.z,0,-Qn.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-Qn.y,Qn.x,0];return!qr(e,xi,Si,Mi,Ns)||(e=[1,0,0,0,1,0,0,0,1],!qr(e,xi,Si,Mi,Ns))?!1:(Fs.crossVectors(Bn,zn),e=[Fs.x,Fs.y,Fs.z],qr(e,xi,Si,Mi,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new C,new C,new C,new C,new C,new C,new C,new C],sn=new C,Us=new mi,xi=new C,Si=new C,Mi=new C,Bn=new C,zn=new C,Qn=new C,cs=new C,Ns=new C,Fs=new C,ti=new C;function qr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);const o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=t.dot(ti),c=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const mf=new mi,hs=new C,Yr=new C;class Rs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):mf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hs.subVectors(t,this.center);const e=hs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(hs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hs.copy(t.center).add(Yr)),this.expandByPoint(hs.copy(t.center).sub(Yr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Sn=new C,$r=new C,Os=new C,Hn=new C,Kr=new C,ks=new C,jr=new C;class gf{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sn.copy(this.origin).addScaledVector(this.direction,e),Sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Os),o=Hn.dot(this.direction),l=-Hn.dot(Os),c=Hn.lengthSq(),h=Math.abs(1-a*a);let u,f,d,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(Os,f),d}intersectSphere(t,e){Sn.subVectors(t.center,this.origin);const n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Sn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),ks.subVectors(n,t),jr.crossVectors(Kr,ks);let a=this.direction.dot(jr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,t);const l=o*this.direction.dot(ks.crossVectors(Hn,ks));if(l<0)return null;const c=o*this.direction.dot(Kr.cross(Hn));if(c<0||l+c>a)return null;const h=-o*Hn.dot(jr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ae{constructor(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m){ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),a=1/yi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,d=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,d=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_f,t,vf)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Gn.crossVectors(n,Ve),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Gn.crossVectors(n,Ve)),Gn.normalize(),Bs.crossVectors(Ve,Gn),s[0]=Gn.x,s[4]=Bs.x,s[8]=Ve.x,s[1]=Gn.y,s[5]=Bs.y,s[9]=Ve.y,s[2]=Gn.z,s[6]=Bs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],E=n[7],M=n[11],F=n[15],A=s[0],w=s[4],U=s[8],y=s[12],S=s[1],R=s[5],z=s[9],B=s[13],V=s[2],j=s[6],W=s[10],tt=s[14],G=s[3],st=s[7],ht=s[11],Mt=s[15];return r[0]=a*A+o*S+l*V+c*G,r[4]=a*w+o*R+l*j+c*st,r[8]=a*U+o*z+l*W+c*ht,r[12]=a*y+o*B+l*tt+c*Mt,r[1]=h*A+u*S+f*V+d*G,r[5]=h*w+u*R+f*j+d*st,r[9]=h*U+u*z+f*W+d*ht,r[13]=h*y+u*B+f*tt+d*Mt,r[2]=g*A+_*S+m*V+p*G,r[6]=g*w+_*R+m*j+p*st,r[10]=g*U+_*z+m*W+p*ht,r[14]=g*y+_*B+m*tt+p*Mt,r[3]=b*A+E*S+M*V+F*G,r[7]=b*w+E*R+M*j+F*st,r[11]=b*U+E*z+M*W+F*ht,r[15]=b*y+E*B+M*tt+F*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*d-n*l*d)+_*(+e*l*d-e*c*f+r*a*f-s*a*d+s*c*h-r*l*h)+m*(+e*c*u-e*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+p*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=u*m*c-_*f*c+_*l*d-o*m*d-u*l*p+o*f*p,E=g*f*c-h*m*c-g*l*d+a*m*d+h*l*p-a*f*p,M=h*_*c-g*u*c+g*o*d-a*_*d-h*o*p+a*u*p,F=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=e*b+n*E+s*M+r*F;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=b*w,t[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*w,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*w,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*d-n*l*d)*w,t[4]=E*w,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*w,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*p-e*l*p)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*d+e*l*d)*w,t[8]=M*w,t[9]=(g*u*r-h*_*r-g*n*d+e*_*d+h*n*p-e*u*p)*w,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*d-e*o*d)*w,t[12]=F*w,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*w,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,g=r*u,_=a*h,m=a*u,p=o*u,b=l*c,E=l*h,M=l*u,F=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*F,s[1]=(d+M)*F,s[2]=(g-E)*F,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+p))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+E)*w,s[9]=(m-b)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=yi.set(s[0],s[1],s[2]).length();const a=yi.set(s[4],s[5],s[6]).length(),o=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,h=1/a,u=1/o;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=An){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(o===An)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===yr)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,d=(n+s)*h;let g,_;if(o===An)g=(a+r)*u,_=-2*u;else if(o===yr)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const yi=new C,rn=new ae,_f=new C(0,0,0),vf=new C(1,1,1),Gn=new C,Bs=new C,Ve=new C,wl=new ae,Rl=new Un;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Zc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xf=0;const Cl=new C,Ti=new Un,Mn=new ae,zs=new C,us=new C,Sf=new C,Mf=new Un,Pl=new C(1,0,0),Ll=new C(0,1,0),Il=new C(0,0,1),Dl={type:"added"},yf={type:"removed"},Ei={type:"childadded",child:null},Zr={type:"childremoved",child:null};class ze extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new C,e=new gn,n=new Un,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Dt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(t,e){return Ti.setFromAxisAngle(t,e),this.quaternion.premultiply(Ti),this}rotateX(t){return this.rotateOnAxis(Pl,t)}rotateY(t){return this.rotateOnAxis(Ll,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,e){return Cl.copy(t).applyQuaternion(this.quaternion),this.position.add(Cl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pl,t)}translateY(t){return this.translateOnAxis(Ll,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zs.copy(t):zs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(us,zs,this.up):Mn.lookAt(zs,us,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),Ti.setFromRotationMatrix(Mn),this.quaternion.premultiply(Ti.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dl),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Sf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ze.DEFAULT_UP=new C(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new C,yn=new C,Jr=new C,Tn=new C,bi=new C,Ai=new C,Ul=new C,Qr=new C,to=new C,eo=new C,no=new ve,io=new ve,so=new ve;class Ze{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),yn.subVectors(n,e),Jr.subVectors(t,e);const a=on.dot(on),o=on.dot(yn),l=on.dot(Jr),c=yn.dot(yn),h=yn.dot(Jr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(no,r.x),a.addScaledVector(io,r.y),a.addScaledVector(so,r.z),a}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),yn.subVectors(t,e),on.cross(yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),on.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ze.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ze.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;bi.subVectors(s,n),Ai.subVectors(r,n),Qr.subVectors(t,n);const l=bi.dot(Qr),c=Ai.dot(Qr);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,s);const h=bi.dot(to),u=Ai.dot(to);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(bi,a);eo.subVectors(t,r);const d=bi.dot(eo),g=Ai.dot(eo);if(g>=0&&d<=g)return e.copy(r);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Ai,o);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Ul.subVectors(r,s),o=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(Ul,o);const p=1/(m+_+f);return a=_*p,o=f*p,e.copy(n).addScaledVector(bi,a).addScaledVector(Ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Xt.workingColorSpace){if(t=rf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ro(a,r,t+1/3),this.g=ro(a,r,t),this.b=ro(a,r,t-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Jc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Xt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Be(Re.r*255,0,255))*65536+Math.round(Be(Re.g*255,0,255))*256+Math.round(Be(Re.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,s=Re.g,r=Re.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=ke){Xt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,s=Re.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Vn),this.setHSL(Vn.h+t,Vn.s+e,Vn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vn),t.getHSL(Hs);const n=Gr(Vn.h,Hs.h,e),s=Gr(Vn.s,Hs.s,e),r=Gr(Vn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new kt;kt.NAMES=Jc;let Tf=0;class Cs extends ss{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=qn(),this.name="",this.blending=Vi,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wo,this.blendDst=Ro,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==$n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==li&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jn extends Cs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new C,Gs=new At;class Ne{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=un(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=un(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=un(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=un(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fa&&(t.usage=this.usage),t}}class Qc extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class th extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Se extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ef=0;const $e=new ae,oo=new ze,wi=new C,We=new mi,fs=new mi,Ee=new C;class He extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($c(t)?th:Qc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];We.setFromBufferAttribute(r),this.morphTargetsRelative?(Ee.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ee),Ee.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ee)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ee.addVectors(We.min,fs.min),We.expandByPoint(Ee),Ee.addVectors(We.max,fs.max),We.expandByPoint(Ee)):(We.expandByPoint(fs.min),We.expandByPoint(fs.max))}We.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ee.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ee));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ee.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(t,c),Ee.add(wi)),s=Math.max(s,n.distanceToSquared(Ee))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;const c=new C,h=new C,u=new C,f=new At,d=new At,g=new At,_=new C,m=new C;function p(U,y,S){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,U),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),o[U].add(_),o[y].add(_),o[S].add(_),l[U].add(m),l[y].add(m),l[S].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let U=0,y=b.length;U<y;++U){const S=b[U],R=S.start,z=S.count;for(let B=R,V=R+z;B<V;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const E=new C,M=new C,F=new C,A=new C;function w(U){F.fromBufferAttribute(s,U),A.copy(F);const y=o[U];E.copy(y),E.sub(F.multiplyScalar(F.dot(y))).normalize(),M.crossVectors(A,y);const R=M.dot(l[U])<0?-1:1;a.setXYZW(U,E.x,E.y,E.z,R)}for(let U=0,y=b.length;U<y;++U){const S=b[U],R=S.start,z=S.count;for(let B=R,V=R+z;B<V;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ee.fromBufferAttribute(t,e),Ee.normalize(),t.setXYZ(e,Ee.x,Ee.y,Ee.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Ne(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new He,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new ae,ei=new gf,Vs=new Rs,Fl=new C,Ws=new C,Xs=new C,qs=new C,ao=new C,Ys=new C,Ol=new C,$s=new C;class me extends ze{constructor(t=new He,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(ao.fromBufferAttribute(u,t),a?Ys.addScaledVector(ao,h):Ys.addScaledVector(ao.sub(e),h))}e.add(Ys)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(Vs.containsPoint(ei.origin)===!1&&(ei.intersectSphere(Vs,Fl)===null||ei.origin.distanceToSquared(Fl)>(t.far-t.near)**2))&&(Nl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Nl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,F=E;M<F;M+=3){const A=o.getX(M),w=o.getX(M+1),U=o.getX(M+2);s=Ks(this,p,t,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Ks(this,a,t,n,c,h,u,b,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,F=E;M<F;M+=3){const A=M,w=M+1,U=M+2;s=Ks(this,p,t,n,c,h,u,A,w,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,E=m+1,M=m+2;s=Ks(this,a,t,n,c,h,u,b,E,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function bf(i,t,e,n,s,r,a,o){let l;if(t.side===De?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===$n,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo($s);return c<e.near||c>e.far?null:{distance:c,point:$s.clone(),object:i}}function Ks(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ws),i.getVertexPosition(l,Xs),i.getVertexPosition(c,qs);const h=bf(i,t,e,n,Ws,Xs,qs,Ol);if(h){const u=new C;Ze.getBarycoord(Ol,Ws,Xs,qs,u),s&&(h.uv=Ze.getInterpolatedAttribute(s,o,l,c,u,new At)),r&&(h.uv1=Ze.getInterpolatedAttribute(r,o,l,c,u,new At)),a&&(h.normal=Ze.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};Ze.getNormal(Ws,Xs,qs,f.normal),h.face=f,h.barycoord=u}return h}class Nn extends He{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(u,2));function g(_,m,p,b,E,M,F,A,w,U,y){const S=M/w,R=F/U,z=M/2,B=F/2,V=A/2,j=w+1,W=U+1;let tt=0,G=0;const st=new C;for(let ht=0;ht<W;ht++){const Mt=ht*R-B;for(let Ft=0;Ft<j;Ft++){const ne=Ft*S-z;st[_]=ne*b,st[m]=Mt*E,st[p]=V,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ft/w),u.push(1-ht/U),tt+=1}}for(let ht=0;ht<U;ht++)for(let Mt=0;Mt<w;Mt++){const Ft=f+Mt+j*ht,ne=f+Mt+j*(ht+1),q=f+(Mt+1)+j*(ht+1),et=f+(Mt+1)+j*ht;l.push(Ft,ne,et),l.push(ne,q,et),G+=6}o.addGroup(d,G,y),d+=G,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function es(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=es(i[e]);for(const s in n)t[s]=n[s]}return t}function Af(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Xt.workingColorSpace}const Er={clone:es,merge:Ie};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ge extends Cs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=es(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nh extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=An}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new C,kl=new At,Bl=new At;class je extends nh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return da*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,kl,Bl),e.subVectors(Bl,kl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class Cf extends ze{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new je(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new je(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const a=new je(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const o=new je(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const l=new je(Ri,Ci,t,e);l.layers=this.layers,this.add(l);const c=new je(Ri,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ih extends Pe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pf extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ih(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new ge({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Cn});r.uniforms.tEquirect.value=e;const a=new me(s,r),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=fn),new Cf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const lo=new C,Lf=new C,If=new Dt;class ri{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=lo.subVectors(n,e).cross(Lf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||If.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new Rs,js=new C;class sh{constructor(t=new ri,e=new ri,n=new ri,s=new ri,r=new ri,a=new ri){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-d,M-p).normalize(),n[1].setComponents(l+r,f+c,m+d,M+p).normalize(),n[2].setComponents(l+a,f+h,m+g,M+b).normalize(),n[3].setComponents(l-a,f-h,m-g,M-b).normalize(),n[4].setComponents(l-o,f-u,m-_,M-E).normalize(),e===An)n[5].setComponents(l+o,f+u,m+_,M+E).normalize();else if(e===yr)n[5].setComponents(o,u,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(js.x=s.normal.x>0?t.max.x:t.min.x,js.y=s.normal.y>0?t.max.y:t.min.y,js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Df(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class pi extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*f-a;for(let E=0;E<c;E++){const M=E*u-r;g.push(M,-b,0),_.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const E=b+c*p,M=b+c*(p+1),F=b+1+c*(p+1),A=b+1+c*p;d.push(E,M,A),d.push(M,F,A)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nf=`#ifdef USE_ALPHAHASH
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
#endif`,Ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gf=`#ifdef USE_BATCHING
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
#endif`,Vf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,id=`#define PI 3.141592653589793
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
} // validated`,sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rd=`vec3 transformedNormal = objectNormal;
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
#endif`,od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
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
#endif`,_d=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Md=`#ifdef USE_GRADIENTMAP
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
}`,yd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Dd=`
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
#endif`,Ud=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vd=`#if defined( USE_POINTS_UV )
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
#endif`,Wd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`#ifdef USE_MORPHTARGETS
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
#endif`,jd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
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
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vp=`float getShadowMask() {
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
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,Tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ep=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Up=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
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
}`,zp=`#if DEPTH_PACKING == 3200
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`#define DISTANCE
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
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
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
}`,qp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,$p=`uniform vec3 diffuse;
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
}`,Kp=`#define LAMBERT
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
}`,jp=`#define LAMBERT
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
}`,Zp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,Qp=`#define NORMAL
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
}`,tm=`#define NORMAL
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
}`,em=`#define PHONG
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
}`,nm=`#define PHONG
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
}`,im=`#define STANDARD
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
}`,sm=`#define STANDARD
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
}`,rm=`#define TOON
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
}`,om=`#define TOON
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
}`,am=`uniform float size;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 color;
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
}`,um=`uniform float rotation;
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
}`,fm=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:Uf,alphahash_pars_fragment:Nf,alphamap_fragment:Ff,alphamap_pars_fragment:Of,alphatest_fragment:kf,alphatest_pars_fragment:Bf,aomap_fragment:zf,aomap_pars_fragment:Hf,batching_pars_vertex:Gf,batching_vertex:Vf,begin_vertex:Wf,beginnormal_vertex:Xf,bsdfs:qf,iridescence_fragment:Yf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:Jf,color_fragment:Qf,color_pars_fragment:td,color_pars_vertex:ed,color_vertex:nd,common:id,cube_uv_reflection_fragment:sd,defaultnormal_vertex:rd,displacementmap_pars_vertex:od,displacementmap_vertex:ad,emissivemap_fragment:ld,emissivemap_pars_fragment:cd,colorspace_fragment:hd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:dd,envmap_pars_fragment:pd,envmap_pars_vertex:md,envmap_physical_pars_fragment:Ad,envmap_vertex:gd,fog_vertex:_d,fog_pars_vertex:vd,fog_fragment:xd,fog_pars_fragment:Sd,gradientmap_pars_fragment:Md,lightmap_pars_fragment:yd,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ed,lights_pars_begin:bd,lights_toon_fragment:wd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Cd,lights_phong_pars_fragment:Pd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Dd,lights_fragment_maps:Ud,lights_fragment_end:Nd,logdepthbuf_fragment:Fd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:kd,logdepthbuf_vertex:Bd,map_fragment:zd,map_pars_fragment:Hd,map_particle_fragment:Gd,map_particle_pars_fragment:Vd,metalnessmap_fragment:Wd,metalnessmap_pars_fragment:Xd,morphinstance_vertex:qd,morphcolor_vertex:Yd,morphnormal_vertex:$d,morphtarget_pars_vertex:Kd,morphtarget_vertex:jd,normal_fragment_begin:Zd,normal_fragment_maps:Jd,normal_pars_fragment:Qd,normal_pars_vertex:tp,normal_vertex:ep,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:op,opaque_fragment:ap,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:fp,roughnessmap_fragment:dp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:_p,shadowmask_pars_fragment:vp,skinbase_vertex:xp,skinning_pars_vertex:Sp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:Tp,specularmap_pars_fragment:Ep,tonemapping_fragment:bp,tonemapping_pars_fragment:Ap,transmission_fragment:wp,transmission_pars_fragment:Rp,uv_pars_fragment:Cp,uv_pars_vertex:Pp,uv_vertex:Lp,worldpos_vertex:Ip,background_vert:Dp,background_frag:Up,backgroundCube_vert:Np,backgroundCube_frag:Fp,cube_vert:Op,cube_frag:kp,depth_vert:Bp,depth_frag:zp,distanceRGBA_vert:Hp,distanceRGBA_frag:Gp,equirect_vert:Vp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:jp,meshmatcap_vert:Zp,meshmatcap_frag:Jp,meshnormal_vert:Qp,meshnormal_frag:tm,meshphong_vert:em,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:om,points_vert:am,points_frag:lm,shadow_vert:cm,shadow_frag:hm,sprite_vert:um,sprite_frag:fm},nt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},hn={basic:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ie([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ie([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ie([nt.points,nt.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ie([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ie([nt.common,nt.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ie([nt.sprite,nt.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ie([nt.common,nt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ie([nt.lights,nt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};hn.physical={uniforms:Ie([hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Zs={r:0,b:0,g:0},ii=new gn,dm=new ae;function pm(i,t,e,n,s,r,a){const o=new kt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function _(b){let E=!1;const M=g(b);M===null?p(o,l):M&&M.isColor&&(p(M,1),E=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,E){const M=g(E);M&&(M.isCubeTexture||M.mapping===Pr)?(h===void 0&&(h=new me(new Nn(1,1,1),new ge({name:"BackgroundCubeMaterial",uniforms:es(hn.backgroundCube.uniforms),vertexShader:hn.backgroundCube.vertexShader,fragmentShader:hn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(ii)),h.material.toneMapped=Xt.getTransfer(M.colorSpace)!==te,(u!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new me(new pi(2,2),new ge({name:"BackgroundMaterial",uniforms:es(hn.background.uniforms),vertexShader:hn.background.vertexShader,fragmentShader:hn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(M.colorSpace)!==te,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,E){b.getRGB(Zs,eh(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:_,addToRenderList:m}}function mm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(S,R,z,B,V){let j=!1;const W=u(B,z,R);r!==W&&(r=W,c(r.object)),j=d(S,B,z,V),j&&g(S,B,z,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,M(S,R,z,B),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,R,z){const B=z.wireframe===!0;let V=n[S.id];V===void 0&&(V={},n[S.id]=V);let j=V[R.id];j===void 0&&(j={},V[R.id]=j);let W=j[B];return W===void 0&&(W=f(l()),j[B]=W),W}function f(S){const R=[],z=[],B=[];for(let V=0;V<e;V++)R[V]=0,z[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:B,object:S,attributes:{},index:null}}function d(S,R,z,B){const V=r.attributes,j=R.attributes;let W=0;const tt=z.getAttributes();for(const G in tt)if(tt[G].location>=0){const ht=V[G];let Mt=j[G];if(Mt===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(Mt=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(Mt=S.instanceColor)),ht===void 0||ht.attribute!==Mt||Mt&&ht.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(S,R,z,B){const V={},j=R.attributes;let W=0;const tt=z.getAttributes();for(const G in tt)if(tt[G].location>=0){let ht=j[G];ht===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const Mt={};Mt.attribute=ht,ht&&ht.data&&(Mt.data=ht.data),V[G]=Mt,W++}r.attributes=V,r.attributesNum=W,r.index=B}function _(){const S=r.newAttributes;for(let R=0,z=S.length;R<z;R++)S[R]=0}function m(S){p(S,0)}function p(S,R){const z=r.newAttributes,B=r.enabledAttributes,V=r.attributeDivisors;z[S]=1,B[S]===0&&(i.enableVertexAttribArray(S),B[S]=1),V[S]!==R&&(i.vertexAttribDivisor(S,R),V[S]=R)}function b(){const S=r.newAttributes,R=r.enabledAttributes;for(let z=0,B=R.length;z<B;z++)R[z]!==S[z]&&(i.disableVertexAttribArray(z),R[z]=0)}function E(S,R,z,B,V,j,W){W===!0?i.vertexAttribIPointer(S,R,z,V,j):i.vertexAttribPointer(S,R,z,B,V,j)}function M(S,R,z,B){_();const V=B.attributes,j=z.getAttributes(),W=R.defaultAttributeValues;for(const tt in j){const G=j[tt];if(G.location>=0){let st=V[tt];if(st===void 0&&(tt==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),tt==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ht=st.normalized,Mt=st.itemSize,Ft=t.get(st);if(Ft===void 0)continue;const ne=Ft.buffer,q=Ft.type,et=Ft.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||st.gpuType===Ra;if(st.isInterleavedBufferAttribute){const rt=st.data,bt=rt.stride,Pt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<G.locationSize;Ot++)p(G.location+Ot,rt.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<G.locationSize;Ot++)m(G.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Ot=0;Ot<G.locationSize;Ot++)E(G.location+Ot,Mt/G.locationSize,q,ht,bt*et,(Pt+Mt/G.locationSize*Ot)*et,vt)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<G.locationSize;rt++)p(G.location+rt,st.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<G.locationSize;rt++)m(G.location+rt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let rt=0;rt<G.locationSize;rt++)E(G.location+rt,Mt/G.locationSize,q,ht,Mt*et,Mt/G.locationSize*rt*et,vt)}}else if(W!==void 0){const ht=W[tt];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(G.location,ht);break;case 3:i.vertexAttrib3fv(G.location,ht);break;case 4:i.vertexAttrib4fv(G.location,ht);break;default:i.vertexAttrib1fv(G.location,ht)}}}}b()}function F(){U();for(const S in n){const R=n[S];for(const z in R){const B=R[z];for(const V in B)h(B[V].object),delete B[V];delete R[z]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const R=n[S.id];for(const z in R){const B=R[z];for(const V in B)h(B[V].object),delete B[V];delete R[z]}delete n[S.id]}function w(S){for(const R in n){const z=n[R];if(z[S.id]===void 0)continue;const B=z[S.id];for(const V in B)h(B[V].object),delete B[V];delete z[S.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function gm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function _m(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Je&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const U=w===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!U)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),F=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:F,maxSamples:A}}function vm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ri,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,E=b*4;let M=p.clippingState||null;l.value=M,M=h(g,f,E,d);for(let F=0;F!==E;++F)M[F]=e[F];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==_;++E,M+=4)a.copy(u[E]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function xm(i){let t=new WeakMap;function e(a,o){return o===Fo?a.mapping=Zi:o===Oo&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Fo||o===Oo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Pf(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class oh extends nh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zi=4,zl=[.125,.215,.35,.446,.526,.582],ci=20,co=new oh,Hl=new kt;let ho=null,uo=0,fo=0,po=!1;const oi=(1+Math.sqrt(5))/2,Pi=1/oi,Gl=[new C(-oi,Pi,0),new C(oi,Pi,0),new C(-Pi,0,oi),new C(Pi,0,oi),new C(0,oi,-Pi),new C(0,oi,Pi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Vl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:pn,format:Je,colorSpace:is,depthBuffer:!1},s=Wl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sm(r)),this._blurMaterial=Mm(r,t,e)}return s}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){const o=new je(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Hl),h.toneMapping=Pn,h.autoClear=!1;const d=new jn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new me(new Nn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Hl),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Js(s,b*E,p>2?E:0,E,E),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Zi||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new me(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Js(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gl[(s-r-1)%Gl.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ci-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ci;m>ci&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`);const p=[];let b=0;for(let w=0;w<ci;++w){const U=w/_,y=Math.exp(-U*U/2);p.push(y),w===0?b+=y:w<m&&(b+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;const M=this._sizeLods[s],F=3*M*(s>E-zi?s-E+zi:0),A=4*(this._cubeSize-M);Js(e,F,A,3*M,2*M),l.setRenderTarget(e),l.render(u,co)}}function Sm(i){const t=[],e=[],n=[];let s=i;const r=i-zi+1+zl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-zi?l=zl[a-i+zi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),E=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,U=A>2?0:-1,y=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];b.set(y,_*g*A),E.set(f,m*g*A);const S=[A,A,A,A,A,A];M.set(S,p*g*A)}const F=new He;F.setAttribute("position",new Ne(b,_)),F.setAttribute("uv",new Ne(E,m)),F.setAttribute("faceIndex",new Ne(M,p)),t.push(F),s>zi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Wl(i,t,e){const n=new Qe(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Mm(i,t,e){const n=new Float32Array(ci),s=new C(0,1,0);return new ge({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Na(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Xl(){return new ge({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Na(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ql(){return new ge({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Na(){return`

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
	`}function ym(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Fo||l===Oo,h=l===Zi||l===Ji;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Vl(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new Vl(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Tm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Em(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let E=0,M=b.length;E<M;E+=3){const F=b[E+0],A=b[E+1],w=b[E+2];f.push(F,A,A,w,w,F)}}else if(g!==void 0){const b=g.array;_=g.version;for(let E=0,M=b.length/3-1;E<M;E+=3){const F=E+0,A=E+1,w=E+2;f.push(F,A,A,w,w,F)}}else return;const m=new($c(f)?th:Qc)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function bm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Am(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wm(i,t,e){const n=new WeakMap,s=new ve;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;d===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let M=o.attributes.position.count*E,F=1;M>t.maxTextureSize&&(F=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*F*4*u),w=new jc(A,M,F,u);w.type=dn,w.needsUpdate=!0;const U=E*4;for(let S=0;S<u;S++){const R=m[S],z=p[S],B=b[S],V=M*F*4*S;for(let j=0;j<R.count;j++){const W=j*U;d===!0&&(s.fromBufferAttribute(R,j),A[V+W+0]=s.x,A[V+W+1]=s.y,A[V+W+2]=s.z,A[V+W+3]=0),g===!0&&(s.fromBufferAttribute(z,j),A[V+W+4]=s.x,A[V+W+5]=s.y,A[V+W+6]=s.z,A[V+W+7]=0),_===!0&&(s.fromBufferAttribute(B,j),A[V+W+8]=s.x,A[V+W+9]=s.y,A[V+W+10]=s.z,A[V+W+11]=B.itemSize===4?s.w:1)}}f={count:u,texture:w,size:new At(M,F)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Rm(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class ah extends Pe{constructor(t,e,n,s,r,a,o,l,c,h=Wi){if(h!==Wi&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wi&&(n=di),n===void 0&&h===ts&&(n=Qi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=l!==void 0?l:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const lh=new Pe,Yl=new ah(1,1),ch=new jc,hh=new pf,uh=new ih,$l=[],Kl=[],jl=new Float32Array(16),Zl=new Float32Array(9),Jl=new Float32Array(4);function rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=$l[s];if(r===void 0&&(r=new Float32Array(s),$l[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function ye(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ir(i,t){let e=Kl[t];e===void 0&&(e=new Int32Array(t),Kl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function Lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function Dm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;Jl.set(n),i.uniformMatrix2fv(this.addr,!1,Jl),Te(e,n)}}function Um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;Zl.set(n),i.uniformMatrix3fv(this.addr,!1,Zl),Te(e,n)}}function Nm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(ye(e,n))return;jl.set(n),i.uniformMatrix4fv(this.addr,!1,jl),Te(e,n)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function km(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function zm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function Vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Wm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Yl.compareFunction=Yc,r=Yl):r=lh,e.setTexture2D(t||r,s)}function Xm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hh,s)}function qm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||uh,s)}function Ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ch,s)}function $m(i){switch(i){case 5126:return Cm;case 35664:return Pm;case 35665:return Lm;case 35666:return Im;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return km;case 35669:case 35673:return Bm;case 5125:return zm;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}function Km(i,t){i.uniform1fv(this.addr,t)}function jm(i,t){const e=rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Zm(i,t){const e=rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Jm(i,t){const e=rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Qm(i,t){const e=rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tg(i,t){const e=rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function eg(i,t){const e=rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ng(i,t){i.uniform1iv(this.addr,t)}function ig(i,t){i.uniform2iv(this.addr,t)}function sg(i,t){i.uniform3iv(this.addr,t)}function rg(i,t){i.uniform4iv(this.addr,t)}function og(i,t){i.uniform1uiv(this.addr,t)}function ag(i,t){i.uniform2uiv(this.addr,t)}function lg(i,t){i.uniform3uiv(this.addr,t)}function cg(i,t){i.uniform4uiv(this.addr,t)}function hg(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||lh,r[a])}function ug(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hh,r[a])}function fg(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||uh,r[a])}function dg(i,t,e){const n=this.cache,s=t.length,r=Ir(e,s);ye(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ch,r[a])}function pg(i){switch(i){case 5126:return Km;case 35664:return jm;case 35665:return Zm;case 35666:return Jm;case 35674:return Qm;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return og;case 36294:return ag;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return fg;case 36289:case 36303:case 36311:case 36292:return dg}}class mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$m(e.type)}}class gg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}}class _g{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Ql(i,t){i.seq.push(t),i.map[t.id]=t}function vg(i,t,e){const n=i.name,s=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),a=mo.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ql(e,c===void 0?new mg(o,i,t):new gg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new _g(o),Ql(e,u)),e=u}}}class dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);vg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function tc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xg=37297;let Sg=0;function Mg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const ec=new Dt;function yg(i){Xt._getMatrix(ec,Xt.workingColorSpace,i);const t=`mat3( ${ec.elements.map(e=>e.toFixed(4))} )`;switch(Xt.getTransfer(i)){case Lr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function nc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mg(i.getShaderSource(t),a)}else return s}function Tg(i,t){const e=yg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Eg(i,t){let e;switch(t){case Bu:e="Linear";break;case zu:e="Reinhard";break;case Hu:e="Cineon";break;case Gu:e="ACESFilmic";break;case Wu:e="AgX";break;case Xu:e="Neutral";break;case Vu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new C;function bg(){Xt.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ag(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function wg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ts(i){return i!==""}function ic(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(i){return i.replace(Cg,Lg)}const Pg=new Map;function Lg(i,t){let e=Nt[t];if(e===void 0){const n=Pg.get(t);if(n!==void 0)e=Nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pa(e)}const Ig=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(i){return i.replace(Ig,Dg)}function Dg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Ug(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===vu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zi:case Ji:t="ENVMAP_TYPE_CUBE";break;case Pr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function Og(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function kg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Ug(e),c=Ng(e),h=Fg(e),u=Og(e),f=kg(e),d=Ag(e),g=wg(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(m=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Nt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Eg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Tg("linearToOutputTexel",e.outputColorSpace),bg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=pa(a),a=ic(a,e),a=sc(a,e),o=pa(o),o=ic(o,e),o=sc(o,e),a=rc(a),o=rc(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=b+m+a,M=b+p+o,F=tc(s,s.VERTEX_SHADER,E),A=tc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,F),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),B=s.getShaderInfoLog(F).trim(),V=s.getShaderInfoLog(A).trim();let j=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,F,A);else{const tt=nc(s,F,"vertex"),G=nc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+tt+`
`+G)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||V==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:V,prefix:p}})}s.deleteShader(F),s.deleteShader(A),U=new dr(s,_),y=Rg(s,_)}let U;this.getUniforms=function(){return U===void 0&&w(this),U};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,xg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=A,this}let zg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Gg(t),e.set(t,n)),n}}class Gg{constructor(t){this.id=zg++,this.code=t,this.usedTimes=0}}function Vg(i,t,e,n,s,r,a){const o=new Zc,l=new Hg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,R,z,B){const V=z.fog,j=B.geometry,W=y.isMeshStandardMaterial?z.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=tt&&tt.mapping===Pr?tt.image.height:null,st=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Mt=ht!==void 0?ht.length:0;let Ft=0;j.morphAttributes.position!==void 0&&(Ft=1),j.morphAttributes.normal!==void 0&&(Ft=2),j.morphAttributes.color!==void 0&&(Ft=3);let ne,q,et,vt;if(st){const Qt=hn[st];ne=Qt.vertexShader,q=Qt.fragmentShader}else ne=y.vertexShader,q=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),vt=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Pt=B.isInstancedMesh===!0,Ot=B.isBatchedMesh===!0,pe=!!y.map,Vt=!!y.matcap,xe=!!tt,D=!!y.aoMap,qe=!!y.lightMap,zt=!!y.bumpMap,Ht=!!y.normalMap,Tt=!!y.displacementMap,he=!!y.emissiveMap,yt=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,N=y.clearcoat>0,Y=y.dispersion>0,Z=y.iridescence>0,X=y.sheen>0,xt=y.transmission>0,ot=v&&!!y.anisotropyMap,ut=N&&!!y.clearcoatMap,Wt=N&&!!y.clearcoatNormalMap,J=N&&!!y.clearcoatRoughnessMap,ft=Z&&!!y.iridescenceMap,Et=Z&&!!y.iridescenceThicknessMap,wt=X&&!!y.sheenColorMap,dt=X&&!!y.sheenRoughnessMap,Gt=!!y.specularMap,Ut=!!y.specularColorMap,le=!!y.specularIntensityMap,P=xt&&!!y.transmissionMap,it=xt&&!!y.thicknessMap,H=!!y.gradientMap,$=!!y.alphaMap,ct=y.alphaTest>0,at=!!y.alphaHash,Lt=!!y.extensions;let _e=Pn;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Ae={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:ne,fragmentShader:q,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ot,batchingColor:Ot&&B._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&B.instanceColor!==null,instancingMorph:Pt&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:is,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:Vt,envMap:xe,envMapMode:xe&&tt.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:qe,bumpMap:zt,normalMap:Ht,displacementMap:f&&Tt,emissiveMap:he,normalMapObjectSpace:Ht&&y.normalMapType===ju,normalMapTangentSpace:Ht&&y.normalMapType===Ku,metalnessMap:yt,roughnessMap:T,anisotropy:v,anisotropyMap:ot,clearcoat:N,clearcoatMap:ut,clearcoatNormalMap:Wt,clearcoatRoughnessMap:J,dispersion:Y,iridescence:Z,iridescenceMap:ft,iridescenceThicknessMap:Et,sheen:X,sheenColorMap:wt,sheenRoughnessMap:dt,specularMap:Gt,specularColorMap:Ut,specularIntensityMap:le,transmission:xt,transmissionMap:P,thicknessMap:it,gradientMap:H,opaque:y.transparent===!1&&y.blending===Vi&&y.alphaToCoverage===!1,alphaMap:$,alphaTest:ct,alphaHash:at,combine:y.combine,mapUv:pe&&_(y.map.channel),aoMapUv:D&&_(y.aoMap.channel),lightMapUv:qe&&_(y.lightMap.channel),bumpMapUv:zt&&_(y.bumpMap.channel),normalMapUv:Ht&&_(y.normalMap.channel),displacementMapUv:Tt&&_(y.displacementMap.channel),emissiveMapUv:he&&_(y.emissiveMap.channel),metalnessMapUv:yt&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:ot&&_(y.anisotropyMap.channel),clearcoatMapUv:ut&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Wt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(y.sheenRoughnessMap.channel),specularMapUv:Gt&&_(y.specularMap.channel),specularColorMapUv:Ut&&_(y.specularColorMap.channel),specularIntensityMapUv:le&&_(y.specularIntensityMap.channel),transmissionMapUv:P&&_(y.transmissionMap.channel),thicknessMapUv:it&&_(y.thicknessMap.channel),alphaMapUv:$&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ht||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(pe||$),fog:!!V,useFog:y.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:Ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&Xt.getTransfer(y.map.colorSpace)===te,decodeVideoTextureEmissive:he&&y.emissiveMap.isVideoTexture===!0&&Xt.getTransfer(y.emissiveMap.colorSpace)===te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xe,flipSided:y.side===De,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Lt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&y.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)S.push(R),S.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(b(S,y),E(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function b(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function E(y,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const S=g[y.type];let R;if(S){const z=hn[S];R=Er.clone(z.uniforms)}else R=y.uniforms;return R}function F(y,S){let R;for(let z=0,B=h.length;z<B;z++){const V=h[z];if(V.cacheKey===S){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Bg(i,S,y,r),h.push(R)),R}function A(y){if(--y.usedTimes===0){const S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:F,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:U}}function Wg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ac(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function lc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function o(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function l(u,f,d,g,_,m){const p=a(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Xg),n.length>1&&n.sort(f||ac),s.length>1&&s.sort(f||ac)}function h(){for(let u=t,f=i.length;u<f;u++){const d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function qg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new lc,i.set(n,[a])):s>=r.length?(a=new lc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new kt};break;case"SpotLight":e={position:new C,direction:new C,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function $g(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Kg=0;function jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zg(i){const t=new Yg,e=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const s=new C,r=new ae,a=new ae;function o(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,E=0,M=0,F=0,A=0,w=0;c.sort(jg);for(let y=0,S=c.length;y<S;y++){const R=c[y],z=R.color,B=R.intensity,V=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*B,u+=z.g*B,f+=z.b*B;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],B);w++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[d]=G,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=W,d++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(z).multiplyScalar(B),W.distance=V,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const tt=R.shadow;if(R.map&&(n.spotLightMap[F]=R.map,F++,tt.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=tt.matrix,R.castShadow){const G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=j,M++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(z).multiplyScalar(B),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const tt=R.shadow,G=e.get(R);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(B),W.groundColor.copy(R.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const U=n.hash;(U.directionalLength!==d||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==b||U.numPointShadows!==E||U.numSpotShadows!==M||U.numSpotMaps!==F||U.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+F-A,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,U.directionalLength=d,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=b,U.numPointShadows=E,U.numSpotShadows=M,U.numSpotMaps=F,U.numLightProbes=w,n.version=Kg++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const E=c[p];if(E.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(E.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function cc(i){const t=new Zg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Jg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new cc(i),t.set(s,[o])):r>=a.length?(o=new cc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Qg extends Cs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class t0 extends Cs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const e0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(i,t,e){let n=new sh;const s=new At,r=new At,a=new ve,o=new Qg({depthPacking:$u}),l=new t0,c={},h=e.maxTextureSize,u={[$n]:De,[De]:$n,[Xe]:Xe},f=new ge({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:e0,fragmentShader:n0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new He;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new me(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nc;let p=this.type;this.render=function(A,w,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),S=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Cn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=p!==En&&this.type===En,V=p===En&&this.type!==En;for(let j=0,W=A.length;j<W;j++){const tt=A[j],G=tt.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,G.mapSize.y=r.y)),G.map===null||B===!0||V===!0){const Mt=this.type!==En?{minFilter:Ue,magFilter:Ue}:{};G.map!==null&&G.map.dispose(),G.map=new Qe(s.x,s.y,Mt),G.map.texture.name=tt.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ht=G.getViewportCount();for(let Mt=0;Mt<ht;Mt++){const Ft=G.getViewport(Mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),z.viewport(a),G.updateMatrices(tt,Mt),n=G.getFrustum(),M(w,U,G.camera,tt,this.type)}G.isPointLightShadow!==!0&&this.type===En&&b(G,U),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,R)};function b(A,w){const U=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qe(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,U,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,U,d,_,null)}function E(A,w,U,y){let S=null;const R=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=S.uuid,B=w.uuid;let V=c[z];V===void 0&&(V={},c[z]=V);let j=V[B];j===void 0&&(j=S.clone(),V[B]=j,w.addEventListener("dispose",F)),S=j}if(S.visible=w.visible,S.wireframe=w.wireframe,y===En?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=i.properties.get(S);z.light=U}return S}function M(A,w,U,y,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===En)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const B=t.update(A),V=A.material;if(Array.isArray(V)){const j=B.groups;for(let W=0,tt=j.length;W<tt;W++){const G=j[W],st=V[G.materialIndex];if(st&&st.visible){const ht=E(A,st,y,S);A.onBeforeShadow(i,A,w,U,B,ht,G),i.renderBufferDirect(U,null,B,ht,A,G),A.onAfterShadow(i,A,w,U,B,ht,G)}}}else if(V.visible){const j=E(A,V,y,S);A.onBeforeShadow(i,A,w,U,B,j,null),i.renderBufferDirect(U,null,B,j,A,null),A.onAfterShadow(i,A,w,U,B,j,null)}}const z=A.children;for(let B=0,V=z.length;B<V;B++)M(z[B],w,U,y,S)}function F(A){A.target.removeEventListener("dispose",F);for(const U in c){const y=c[U],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const s0={[Co]:Po,[Lo]:Uo,[Io]:No,[ji]:Do,[Po]:Co,[Uo]:Lo,[No]:Io,[Do]:ji};function r0(i,t){function e(){let P=!1;const it=new ve;let H=null;const $=new ve(0,0,0,0);return{setMask:function(ct){H!==ct&&!P&&(i.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){P=ct},setClear:function(ct,at,Lt,_e,Ae){Ae===!0&&(ct*=_e,at*=_e,Lt*=_e),it.set(ct,at,Lt,_e),$.equals(it)===!1&&(i.clearColor(ct,at,Lt,_e),$.copy(it))},reset:function(){P=!1,H=null,$.set(-1,0,0,0)}}}function n(){let P=!1,it=!1,H=null,$=null,ct=null;return{setReversed:function(at){if(it!==at){const Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT);const _e=ct;ct=null,this.setClear(_e)}it=at},getReversed:function(){return it},setTest:function(at){at?rt(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(at){H!==at&&!P&&(i.depthMask(at),H=at)},setFunc:function(at){if(it&&(at=s0[at]),$!==at){switch(at){case Co:i.depthFunc(i.NEVER);break;case Po:i.depthFunc(i.ALWAYS);break;case Lo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Io:i.depthFunc(i.EQUAL);break;case Do:i.depthFunc(i.GEQUAL);break;case Uo:i.depthFunc(i.GREATER);break;case No:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=at}},setLocked:function(at){P=at},setClear:function(at){ct!==at&&(it&&(at=1-at),i.clearDepth(at),ct=at)},reset:function(){P=!1,H=null,$=null,ct=null,it=!1}}}function s(){let P=!1,it=null,H=null,$=null,ct=null,at=null,Lt=null,_e=null,Ae=null;return{setTest:function(Qt){P||(Qt?rt(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Qt){it!==Qt&&!P&&(i.stencilMask(Qt),it=Qt)},setFunc:function(Qt,tn,_n){(H!==Qt||$!==tn||ct!==_n)&&(i.stencilFunc(Qt,tn,_n),H=Qt,$=tn,ct=_n)},setOp:function(Qt,tn,_n){(at!==Qt||Lt!==tn||_e!==_n)&&(i.stencilOp(Qt,tn,_n),at=Qt,Lt=tn,_e=_n)},setLocked:function(Qt){P=Qt},setClear:function(Qt){Ae!==Qt&&(i.clearStencil(Qt),Ae=Qt)},reset:function(){P=!1,it=null,H=null,$=null,ct=null,at=null,Lt=null,_e=null,Ae=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,M=null,F=null,A=null,w=new kt(0,0,0),U=0,y=!1,S=null,R=null,z=null,B=null,V=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=tt>=1):G.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=tt>=2);let st=null,ht={};const Mt=i.getParameter(i.SCISSOR_BOX),Ft=i.getParameter(i.VIEWPORT),ne=new ve().fromArray(Mt),q=new ve().fromArray(Ft);function et(P,it,H,$){const ct=new Uint8Array(4),at=i.createTexture();i.bindTexture(P,at),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<H;Lt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,$,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(it+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return at}const vt={};vt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(ji),zt(!1),Ht(pl),rt(i.CULL_FACE),D(Cn);function rt(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function bt(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Pt(P,it){return u[P]!==it?(i.bindFramebuffer(P,it),u[P]=it,P===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=it),P===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(P,it){let H=d,$=!1;if(P){H=f.get(it),H===void 0&&(H=[],f.set(it,H));const ct=P.textures;if(H.length!==ct.length||H[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Lt=ct.length;at<Lt;at++)H[at]=i.COLOR_ATTACHMENT0+at;H.length=ct.length,$=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,$=!0);$&&i.drawBuffers(H)}function pe(P){return g!==P?(i.useProgram(P),g=P,!0):!1}const Vt={[li]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};Vt[yu]=i.MIN,Vt[Tu]=i.MAX;const xe={[Eu]:i.ZERO,[bu]:i.ONE,[Au]:i.SRC_COLOR,[wo]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[wu]:i.ONE_MINUS_SRC_COLOR,[Ro]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function D(P,it,H,$,ct,at,Lt,_e,Ae,Qt){if(P===Cn){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),P!==xu){if(P!==m||Qt!==y){if((p!==li||M!==li)&&(i.blendEquation(i.FUNC_ADD),p=li,M=li),Qt)switch(P){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Kn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}b=null,E=null,F=null,A=null,w.set(0,0,0),U=0,m=P,y=Qt}return}ct=ct||it,at=at||H,Lt=Lt||$,(it!==p||ct!==M)&&(i.blendEquationSeparate(Vt[it],Vt[ct]),p=it,M=ct),(H!==b||$!==E||at!==F||Lt!==A)&&(i.blendFuncSeparate(xe[H],xe[$],xe[at],xe[Lt]),b=H,E=$,F=at,A=Lt),(_e.equals(w)===!1||Ae!==U)&&(i.blendColor(_e.r,_e.g,_e.b,Ae),w.copy(_e),U=Ae),m=P,y=!1}function qe(P,it){P.side===Xe?bt(i.CULL_FACE):rt(i.CULL_FACE);let H=P.side===De;it&&(H=!H),zt(H),P.blending===Vi&&P.transparent===!1?D(Cn):D(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const $=P.stencilWrite;o.setTest($),$&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),he(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(P){S!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),S=P)}function Ht(P){P!==gu?(rt(i.CULL_FACE),P!==R&&(P===pl?i.cullFace(i.BACK):P===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),R=P}function Tt(P){P!==z&&(W&&i.lineWidth(P),z=P)}function he(P,it,H){P?(rt(i.POLYGON_OFFSET_FILL),(B!==it||V!==H)&&(i.polygonOffset(it,H),B=it,V=H)):bt(i.POLYGON_OFFSET_FILL)}function yt(P){P?rt(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+j-1),st!==P&&(i.activeTexture(P),st=P)}function v(P,it,H){H===void 0&&(st===null?H=i.TEXTURE0+j-1:H=st);let $=ht[H];$===void 0&&($={type:void 0,texture:void 0},ht[H]=$),($.type!==P||$.texture!==it)&&(st!==H&&(i.activeTexture(H),st=H),i.bindTexture(P,it||vt[P]),$.type=P,$.texture=it)}function N(){const P=ht[st];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function wt(P){ne.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),ne.copy(P))}function dt(P){q.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Gt(P,it){let H=c.get(it);H===void 0&&(H=new WeakMap,c.set(it,H));let $=H.get(P);$===void 0&&($=i.getUniformBlockIndex(it,P.name),H.set(P,$))}function Ut(P,it){const $=c.get(it).get(P);l.get(it)!==$&&(i.uniformBlockBinding(it,$,P.__bindingPointIndex),l.set(it,$))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,ht={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,E=null,M=null,F=null,A=null,w=new kt(0,0,0),U=0,y=!1,S=null,R=null,z=null,B=null,V=null,ne.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:bt,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:pe,setBlending:D,setMaterial:qe,setFlipSided:zt,setCullFace:Ht,setLineWidth:Tt,setPolygonOffset:he,setScissorTest:yt,activeTexture:T,bindTexture:v,unbindTexture:N,compressedTexImage2D:Y,compressedTexImage3D:Z,texImage2D:ft,texImage3D:Et,updateUBOMapping:Gt,uniformBlockBinding:Ut,texStorage2D:Wt,texStorage3D:J,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ut,scissor:wt,viewport:dt,reset:le}}function hc(i,t,e,n){const s=o0(n);switch(e){case Hc:return i*t;case Vc:return i*t;case Wc:return i*t*2;case La:return i*t/s.components*s.byteLength;case Ia:return i*t/s.components*s.byteLength;case Xc:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case Je:return i*t*4/s.components*s.byteLength;case Ua:return i*t*4/s.components*s.byteLength;case lr:case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Vo:return Math.max(i,16)*Math.max(t,8)/4;case zo:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case jo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ea:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ia:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ra:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case aa:case la:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qc:case ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ha:case ua:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function o0(i){switch(i){case mn:case kc:return{byteLength:1,components:1};case As:case Bc:case pn:return{byteLength:2,components:1};case Ca:case Pa:return{byteLength:2,components:4};case di:case Ra:case dn:return{byteLength:4,components:1};case zc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function a0(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,v){return d?new OffscreenCanvas(T,v):Tr("canvas")}function _(T,v,N){let Y=1;const Z=yt(T);if((Z.width>N||Z.height>N)&&(Y=N/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(Y*Z.width),xt=Math.floor(Y*Z.height);u===void 0&&(u=g(X,xt));const ot=v?g(X,xt):u;return ot.width=X,ot.height=xt,ot.getContext("2d").drawImage(T,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+xt+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,v,N,Y,Z=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=v;if(v===i.RED&&(N===i.FLOAT&&(X=i.R32F),N===i.HALF_FLOAT&&(X=i.R16F),N===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.R8UI),N===i.UNSIGNED_SHORT&&(X=i.R16UI),N===i.UNSIGNED_INT&&(X=i.R32UI),N===i.BYTE&&(X=i.R8I),N===i.SHORT&&(X=i.R16I),N===i.INT&&(X=i.R32I)),v===i.RG&&(N===i.FLOAT&&(X=i.RG32F),N===i.HALF_FLOAT&&(X=i.RG16F),N===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RG8UI),N===i.UNSIGNED_SHORT&&(X=i.RG16UI),N===i.UNSIGNED_INT&&(X=i.RG32UI),N===i.BYTE&&(X=i.RG8I),N===i.SHORT&&(X=i.RG16I),N===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGB8UI),N===i.UNSIGNED_SHORT&&(X=i.RGB16UI),N===i.UNSIGNED_INT&&(X=i.RGB32UI),N===i.BYTE&&(X=i.RGB8I),N===i.SHORT&&(X=i.RGB16I),N===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),N===i.UNSIGNED_INT&&(X=i.RGBA32UI),N===i.BYTE&&(X=i.RGBA8I),N===i.SHORT&&(X=i.RGBA16I),N===i.INT&&(X=i.RGBA32I)),v===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),v===i.RGBA){const xt=Z?Lr:Xt.getTransfer(Y);N===i.FLOAT&&(X=i.RGBA32F),N===i.HALF_FLOAT&&(X=i.RGBA16F),N===i.UNSIGNED_BYTE&&(X=xt===te?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function M(T,v){let N;return T?v===null||v===di||v===Qi?N=i.DEPTH24_STENCIL8:v===dn?N=i.DEPTH32F_STENCIL8:v===As&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===di||v===Qi?N=i.DEPTH_COMPONENT24:v===dn?N=i.DEPTH_COMPONENT32F:v===As&&(N=i.DEPTH_COMPONENT16),N}function F(T,v){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ue&&T.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function A(T){const v=T.target;v.removeEventListener("dispose",A),U(v),v.isVideoTexture&&h.delete(v)}function w(T){const v=T.target;v.removeEventListener("dispose",w),S(v)}function U(T){const v=n.get(T);if(v.__webglInit===void 0)return;const N=T.source,Y=f.get(N);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&y(T),Object.keys(Y).length===0&&f.delete(N)}n.remove(T)}function y(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const N=T.source,Y=f.get(N);delete Y[v.__cacheKey],a.memory.textures--}function S(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)i.deleteFramebuffer(v.__webglFramebuffer[Y]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=T.textures;for(let Y=0,Z=N.length;Y<Z;Y++){const X=n.get(N[Y]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(N[Y])}n.remove(T)}let R=0;function z(){R=0}function B(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function V(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function j(T,v){const N=n.get(T);if(T.isVideoTexture&&Tt(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,T,v);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+v)}function W(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+v)}function tt(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){q(N,T,v);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+v)}function G(T,v){const N=n.get(T);if(T.version>0&&N.__version!==T.version){et(N,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+v)}const st={[ko]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Bo]:i.MIRRORED_REPEAT},ht={[Ue]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[zr]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Mt={[Zu]:i.NEVER,[sf]:i.ALWAYS,[Ju]:i.LESS,[Yc]:i.LEQUAL,[Qu]:i.EQUAL,[nf]:i.GEQUAL,[tf]:i.GREATER,[ef]:i.NOTEQUAL};function Ft(T,v){if(v.type===dn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===zr||v.magFilter===Ds||v.magFilter===fi||v.minFilter===fn||v.minFilter===zr||v.minFilter===Ds||v.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,st[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,st[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,st[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ue||v.minFilter!==Ds&&v.minFilter!==fi||v.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ne(T,v){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const X=V(v);if(X!==T.__cacheKey){Z[X]===void 0&&(Z[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[X].usedTimes++;const xt=Z[T.__cacheKey];xt!==void 0&&(Z[T.__cacheKey].usedTimes--,xt.usedTimes===0&&y(v)),T.__cacheKey=X,T.__webglTexture=Z[X].texture}return N}function q(T,v,N){let Y=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=ne(T,v),X=v.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+N);const xt=n.get(X);if(X.version!==xt.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const ot=Xt.getPrimaries(Xt.workingColorSpace),ut=v.colorSpace===bn?null:Xt.getPrimaries(v.colorSpace),Wt=v.colorSpace===bn||ot===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let J=_(v.image,!1,s.maxTextureSize);J=he(v,J);const ft=r.convert(v.format,v.colorSpace),Et=r.convert(v.type);let wt=E(v.internalFormat,ft,Et,v.colorSpace,v.isVideoTexture);Ft(Y,v);let dt;const Gt=v.mipmaps,Ut=v.isVideoTexture!==!0,le=xt.__version===void 0||Z===!0,P=X.dataReady,it=F(v,J);if(v.isDepthTexture)wt=M(v.format===ts,v.type),le&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,wt,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,ft,Et,null));else if(v.isDataTexture)if(Gt.length>0){Ut&&le&&e.texStorage2D(i.TEXTURE_2D,it,wt,Gt[0].width,Gt[0].height);for(let H=0,$=Gt.length;H<$;H++)dt=Gt[H],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,H,wt,dt.width,dt.height,0,ft,Et,dt.data);v.generateMipmaps=!1}else Ut?(le&&e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,ft,Et,J.data)):e.texImage2D(i.TEXTURE_2D,0,wt,J.width,J.height,0,ft,Et,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,Gt[0].width,Gt[0].height,J.depth);for(let H=0,$=Gt.length;H<$;H++)if(dt=Gt[H],v.format!==Je)if(ft!==null)if(Ut){if(P)if(v.layerUpdates.size>0){const ct=hc(dt.width,dt.height,v.format,v.type);for(const at of v.layerUpdates){const Lt=dt.data.subarray(at*ct/dt.data.BYTES_PER_ELEMENT,(at+1)*ct/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,at,dt.width,dt.height,1,ft,Lt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,J.depth,ft,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,wt,dt.width,dt.height,J.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,dt.width,dt.height,J.depth,ft,Et,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,H,wt,dt.width,dt.height,J.depth,0,ft,Et,dt.data)}else{Ut&&le&&e.texStorage2D(i.TEXTURE_2D,it,wt,Gt[0].width,Gt[0].height);for(let H=0,$=Gt.length;H<$;H++)dt=Gt[H],v.format!==Je?ft!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,H,wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,dt.width,dt.height,ft,Et,dt.data):e.texImage2D(i.TEXTURE_2D,H,wt,dt.width,dt.height,0,ft,Et,dt.data)}else if(v.isDataArrayTexture)if(Ut){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,wt,J.width,J.height,J.depth),P)if(v.layerUpdates.size>0){const H=hc(J.width,J.height,v.format,v.type);for(const $ of v.layerUpdates){const ct=J.data.subarray($*H/J.data.BYTES_PER_ELEMENT,($+1)*H/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,$,J.width,J.height,1,ft,Et,ct)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ft,Et,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,J.width,J.height,J.depth,0,ft,Et,J.data);else if(v.isData3DTexture)Ut?(le&&e.texStorage3D(i.TEXTURE_3D,it,wt,J.width,J.height,J.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ft,Et,J.data)):e.texImage3D(i.TEXTURE_3D,0,wt,J.width,J.height,J.depth,0,ft,Et,J.data);else if(v.isFramebufferTexture){if(le)if(Ut)e.texStorage2D(i.TEXTURE_2D,it,wt,J.width,J.height);else{let H=J.width,$=J.height;for(let ct=0;ct<it;ct++)e.texImage2D(i.TEXTURE_2D,ct,wt,H,$,0,ft,Et,null),H>>=1,$>>=1}}else if(Gt.length>0){if(Ut&&le){const H=yt(Gt[0]);e.texStorage2D(i.TEXTURE_2D,it,wt,H.width,H.height)}for(let H=0,$=Gt.length;H<$;H++)dt=Gt[H],Ut?P&&e.texSubImage2D(i.TEXTURE_2D,H,0,0,ft,Et,dt):e.texImage2D(i.TEXTURE_2D,H,wt,ft,Et,dt);v.generateMipmaps=!1}else if(Ut){if(le){const H=yt(J);e.texStorage2D(i.TEXTURE_2D,it,wt,H.width,H.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,Et,J)}else e.texImage2D(i.TEXTURE_2D,0,wt,ft,Et,J);m(v)&&p(Y),xt.__version=X.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function et(T,v,N){if(v.image.length!==6)return;const Y=ne(T,v),Z=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+N);const X=n.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(i.TEXTURE0+N);const xt=Xt.getPrimaries(Xt.workingColorSpace),ot=v.colorSpace===bn?null:Xt.getPrimaries(v.colorSpace),ut=v.colorSpace===bn||xt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Wt=v.isCompressedTexture||v.image[0].isCompressedTexture,J=v.image[0]&&v.image[0].isDataTexture,ft=[];for(let $=0;$<6;$++)!Wt&&!J?ft[$]=_(v.image[$],!0,s.maxCubemapSize):ft[$]=J?v.image[$].image:v.image[$],ft[$]=he(v,ft[$]);const Et=ft[0],wt=r.convert(v.format,v.colorSpace),dt=r.convert(v.type),Gt=E(v.internalFormat,wt,dt,v.colorSpace),Ut=v.isVideoTexture!==!0,le=X.__version===void 0||Y===!0,P=Z.dataReady;let it=F(v,Et);Ft(i.TEXTURE_CUBE_MAP,v);let H;if(Wt){Ut&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,Et.width,Et.height);for(let $=0;$<6;$++){H=ft[$].mipmaps;for(let ct=0;ct<H.length;ct++){const at=H[ct];v.format!==Je?wt!==null?Ut?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,wt,at.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Gt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,0,0,at.width,at.height,wt,dt,at.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct,Gt,at.width,at.height,0,wt,dt,at.data)}}}else{if(H=v.mipmaps,Ut&&le){H.length>0&&it++;const $=yt(ft[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Gt,$.width,$.height)}for(let $=0;$<6;$++)if(J){Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,ft[$].width,ft[$].height,wt,dt,ft[$].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,ft[$].width,ft[$].height,0,wt,dt,ft[$].data);for(let ct=0;ct<H.length;ct++){const Lt=H[ct].image[$].image;Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,Lt.width,Lt.height,wt,dt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Gt,Lt.width,Lt.height,0,wt,dt,Lt.data)}}else{Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,wt,dt,ft[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Gt,wt,dt,ft[$]);for(let ct=0;ct<H.length;ct++){const at=H[ct];Ut?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,0,0,wt,dt,at.image[$]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+$,ct+1,Gt,wt,dt,at.image[$])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function vt(T,v,N,Y,Z,X){const xt=r.convert(N.format,N.colorSpace),ot=r.convert(N.type),ut=E(N.internalFormat,xt,ot,N.colorSpace),Wt=n.get(v),J=n.get(N);if(J.__renderTarget=v,!Wt.__hasExternalTextures){const ft=Math.max(1,v.width>>X),Et=Math.max(1,v.height>>X);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,ut,ft,Et,v.depth,0,xt,ot,null):e.texImage2D(Z,X,ut,ft,Et,0,xt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,J.__webglTexture,0,zt(v)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,J.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(T,v,N){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=M(v.stencilBuffer,Z),xt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=zt(v);Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,X,v.width,v.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],xt=r.convert(X.format,X.colorSpace),ot=r.convert(X.type),ut=E(X.internalFormat,xt,ot,X.colorSpace),Wt=zt(v);N&&Ht(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,ut,v.width,v.height):Ht(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Wt,ut,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ut,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const Z=Y.__webglTexture,X=zt(v);if(v.depthTexture.format===Wi)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ts)Ht(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Pt(T){const v=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");bt(v.__webglFramebuffer,T)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=i.createRenderbuffer(),rt(v.__webglDepthbuffer[Y],T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),rt(v.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(T,v,N){const Y=n.get(T);v!==void 0&&vt(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Pt(T)}function pe(T){const v=T.texture,N=n.get(T),Y=n.get(v);T.addEventListener("dispose",w);const Z=T.textures,X=T.isWebGLCubeRenderTarget===!0,xt=Z.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=v.version,a.memory.textures++),X){N.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[ot]=[];for(let ut=0;ut<v.mipmaps.length;ut++)N.__webglFramebuffer[ot][ut]=i.createFramebuffer()}else N.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let ot=0;ot<v.mipmaps.length;ot++)N.__webglFramebuffer[ot]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(xt)for(let ot=0,ut=Z.length;ot<ut;ot++){const Wt=n.get(Z[ot]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Ht(T)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ot=0;ot<Z.length;ot++){const ut=Z[ot];N.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[ot]);const Wt=r.convert(ut.format,ut.colorSpace),J=r.convert(ut.type),ft=E(ut.internalFormat,Wt,J,ut.colorSpace,T.isXRRenderTarget===!0),Et=zt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ft,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,N.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(N.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ft(i.TEXTURE_CUBE_MAP,v);for(let ot=0;ot<6;ot++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)vt(N.__webglFramebuffer[ot][ut],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ut);else vt(N.__webglFramebuffer[ot],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,ut=Z.length;ot<ut;ot++){const Wt=Z[ot],J=n.get(Wt);e.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ft(i.TEXTURE_2D,Wt),vt(N.__webglFramebuffer,T,Wt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Wt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Y.__webglTexture),Ft(ot,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)vt(N.__webglFramebuffer[ut],T,v,i.COLOR_ATTACHMENT0,ot,ut);else vt(N.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,ot,0);m(v)&&p(ot),e.unbindTexture()}T.depthBuffer&&Pt(T)}function Vt(T){const v=T.textures;for(let N=0,Y=v.length;N<Y;N++){const Z=v[N];if(m(Z)){const X=b(T),xt=n.get(Z).__webglTexture;e.bindTexture(X,xt),p(X),e.unbindTexture()}}}const xe=[],D=[];function qe(T){if(T.samples>0){if(Ht(T)===!1){const v=T.textures,N=T.width,Y=T.height;let Z=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),ot=v.length>1;if(ot)for(let ut=0;ut<v.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Wt,0)}i.blitFramebuffer(0,0,N,Y,0,0,N,Y,Z,i.NEAREST),l===!0&&(xe.length=0,D.length=0,xe.push(i.COLOR_ATTACHMENT0+ut),T.depthBuffer&&T.resolveDepthBuffer===!1&&(xe.push(X),D.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<v.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);const Wt=n.get(v[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Wt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function zt(T){return Math.min(s.maxSamples,T.samples)}function Ht(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(T){const v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function he(T,v){const N=T.colorSpace,Y=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==is&&N!==bn&&(Xt.getTransfer(N)===te?(Y!==Je||Z!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function yt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function l0(i,t){function e(n,s=bn){let r;const a=Xt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kc)return i.BYTE;if(n===Bc)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===Ra)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===pn)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===Je)return i.RGBA;if(n===Vc)return i.LUMINANCE;if(n===Wc)return i.LUMINANCE_ALPHA;if(n===Wi)return i.DEPTH_COMPONENT;if(n===ts)return i.DEPTH_STENCIL;if(n===La)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Ua)return i.RGBA_INTEGER;if(n===lr||n===cr||n===hr||n===ur)if(a===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===Ho||n===Go||n===Vo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return a===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Yo||n===$o||n===Ko||n===jo||n===Zo||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ko)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Zo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Jo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Qo)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ea)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===na)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ia)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ra)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===aa||n===la)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return a===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===aa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===ca||n===ha||n===ua)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class c0 extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wn extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const h0={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const u0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f0=`
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

}`;class d0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Pe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ge({vertexShader:u0,fragmentShader:f0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new pi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p0 extends ss{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const _=new d0,m=e.getContextAttributes();let p=null,b=null;const E=[],M=[],F=new At;let A=null;const w=new je;w.viewport=new ve;const U=new je;U.viewport=new ve;const y=[w,U],S=new c0;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=E[q];return et===void 0&&(et=new go,E[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=E[q];return et===void 0&&(et=new go,E[q]=et),et.getGripSpace()},this.getHand=function(q){let et=E[q];return et===void 0&&(et=new go,E[q]=et),et.getHandSpace()};function B(q){const et=M.indexOf(q.inputSource);if(et===-1)return;const vt=E[et];vt!==void 0&&(vt.update(q.inputSource,q.frame,c||a),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",j);for(let q=0;q<E.length;q++){const et=M[q];et!==null&&(M[q]=null,E[q].disconnect(et))}R=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,b=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",V),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Qe(d.framebufferWidth,d.framebufferHeight,{format:Je,type:mn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,vt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?ts:Wi,vt=m.stencil?Qi:di);const bt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(bt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Qe(f.textureWidth,f.textureHeight,{format:Je,type:mn,depthTexture:new ah(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(q){for(let et=0;et<q.removed.length;et++){const vt=q.removed[et],rt=M.indexOf(vt);rt>=0&&(M[rt]=null,E[rt].disconnect(vt))}for(let et=0;et<q.added.length;et++){const vt=q.added[et];let rt=M.indexOf(vt);if(rt===-1){for(let Pt=0;Pt<E.length;Pt++)if(Pt>=M.length){M.push(vt),rt=Pt;break}else if(M[Pt]===null){M[Pt]=vt,rt=Pt;break}if(rt===-1)break}const bt=E[rt];bt&&bt.connect(vt)}}const W=new C,tt=new C;function G(q,et,vt){W.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(vt.matrixWorld);const rt=W.distanceTo(tt),bt=et.projectionMatrix.elements,Pt=vt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),pe=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],xe=(bt[9]-1)/bt[5],D=(bt[8]-1)/bt[0],qe=(Pt[8]+1)/Pt[0],zt=Ot*D,Ht=Ot*qe,Tt=rt/(-D+qe),he=Tt*-D;if(et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(he),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const yt=Ot+Tt,T=pe+Tt,v=zt-he,N=Ht+(rt-he),Y=Vt*pe/T*yt,Z=xe*pe/T*yt;q.projectionMatrix.makePerspective(v,N,Y,Z,yt,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let et=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),S.near=U.near=w.near=et,S.far=U.far=w.far=vt,(R!==S.near||z!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far),w.layers.mask=q.layers.mask|2,U.layers.mask=q.layers.mask|4,S.layers.mask=w.layers.mask|U.layers.mask;const rt=q.parent,bt=S.cameras;st(S,rt);for(let Pt=0;Pt<bt.length;Pt++)st(bt[Pt],rt);bt.length===2?G(S,w,U):S.projectionMatrix.copy(w.projectionMatrix),ht(q,S,rt)};function ht(q,et,vt){vt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=da*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Mt=null;function Ft(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){const vt=h.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let rt=!1;vt.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let Pt=0;Pt<vt.length;Pt++){const Ot=vt[Pt];let pe=null;if(d!==null)pe=d.getViewport(Ot);else{const xe=u.getViewSubImage(f,Ot);pe=xe.viewport,Pt===0&&(t.setRenderTargetTextures(b,xe.colorTexture,f.ignoreDepthValues?void 0:xe.depthStencilTexture),t.setRenderTarget(b))}let Vt=y[Pt];Vt===void 0&&(Vt=new je,Vt.layers.enable(Pt),Vt.viewport=new ve,y[Pt]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(pe.x,pe.y,pe.width,pe.height),Pt===0&&(S.matrix.copy(Vt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),rt===!0&&S.cameras.push(Vt)}const bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const Pt=u.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&_.init(t,Pt,s.renderState)}}for(let vt=0;vt<E.length;vt++){const rt=M[vt],bt=E[vt];rt!==null&&bt!==void 0&&bt.update(rt,et,c||a)}Mt&&Mt(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ne=new rh;ne.setAnimationLoop(Ft),this.setAnimationLoop=function(q){Mt=q},this.dispose=function(){}}}const si=new gn,m0=new ae;function g0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),E=b.envMap,M=b.envMapRotation;E&&(m.envMap.value=E,si.copy(M),si.x*=-1,si.y*=-1,si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),m.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(si)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=E*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,E){const M=E.program;n.uniformBlockBinding(b,M)}function c(b,E){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));const F=E.program;n.updateUBOMapping(b,F);const A=t.render.frame;r[b.id]!==A&&(f(b),r[b.id]=A)}function h(b){const E=u();b.__bindingPointIndex=E;const M=i.createBuffer(),F=b.__size,A=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,F,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const E=s[b.id],M=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,w=M.length;A<w;A++){const U=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,S=U.length;y<S;y++){const R=U[y];if(d(R,A,y,F)===!0){const z=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let j=0;j<B.length;j++){const W=B[j],tt=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+V,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,V),V+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,E,M,F){const A=b.value,w=E+"_"+M;if(F[w]===void 0)return typeof A=="number"||typeof A=="boolean"?F[w]=A:F[w]=A.clone(),!0;{const U=F[w];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return F[w]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function g(b){const E=b.uniforms;let M=0;const F=16;for(let w=0,U=E.length;w<U;w++){const y=Array.isArray(E[w])?E[w]:[E[w]];for(let S=0,R=y.length;S<R;S++){const z=y[S],B=Array.isArray(z.value)?z.value:[z.value];for(let V=0,j=B.length;V<j;V++){const W=B[V],tt=_(W),G=M%F,st=G%tt.boundary,ht=G+st;M+=st,ht!==0&&F-ht<tt.storage&&(M+=F-ht),z.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=M,M+=tt.storage}}}const A=M%F;return A>0&&(M+=F-A),b.__size=M,b.__cache={},this}function _(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function m(b){const E=b.target;E.removeEventListener("dispose",m);const M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class v0{constructor(t={}){const{canvas:e=of(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=Pn,this.toneMappingExposure=1;const M=this;let F=!1,A=0,w=0,U=null,y=-1,S=null;const R=new ve,z=new ve;let B=null;const V=new kt(0);let j=0,W=e.width,tt=e.height,G=1,st=null,ht=null;const Mt=new ve(0,0,W,tt),Ft=new ve(0,0,W,tt);let ne=!1;const q=new sh;let et=!1,vt=!1;const rt=new ae,bt=new ae,Pt=new C,Ot=new ve,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function xe(){return U===null?G:1}let D=n;function qe(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",at,!1),D===null){const L="webgl2";if(D=qe(L,x),D===null)throw qe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let zt,Ht,Tt,he,yt,T,v,N,Y,Z,X,xt,ot,ut,Wt,J,ft,Et,wt,dt,Gt,Ut,le,P;function it(){zt=new Tm(D),zt.init(),Ut=new l0(D,zt),Ht=new _m(D,zt,t,Ut),Tt=new r0(D,zt),Ht.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),he=new Am(D),yt=new Wg,T=new a0(D,zt,Tt,yt,Ht,Ut,he),v=new xm(M),N=new ym(M),Y=new Df(D),le=new mm(D,Y),Z=new Em(D,Y,he,le),X=new Rm(D,Z,Y,he),wt=new wm(D,Ht,T),J=new vm(yt),xt=new Vg(M,v,N,zt,Ht,le,J),ot=new g0(M,yt),ut=new qg,Wt=new Jg(zt),Et=new pm(M,v,N,Tt,X,d,l),ft=new i0(M,X,Ht),P=new _0(D,he,Ht,Tt),dt=new gm(D,zt,he),Gt=new bm(D,zt,he),he.programs=xt.programs,M.capabilities=Ht,M.extensions=zt,M.properties=yt,M.renderLists=ut,M.shadowMap=ft,M.state=Tt,M.info=he}it();const H=new p0(M,D);this.xr=H,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=zt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=zt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(x){x!==void 0&&(G=x,this.setSize(W,tt,!1))},this.getSize=function(x){return x.set(W,tt)},this.setSize=function(x,L,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,tt=L,e.width=Math.floor(x*G),e.height=Math.floor(L*G),O===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(W*G,tt*G).floor()},this.setDrawingBufferSize=function(x,L,O){W=x,tt=L,G=O,e.width=Math.floor(x*O),e.height=Math.floor(L*O),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(R)},this.getViewport=function(x){return x.copy(Mt)},this.setViewport=function(x,L,O,k){x.isVector4?Mt.set(x.x,x.y,x.z,x.w):Mt.set(x,L,O,k),Tt.viewport(R.copy(Mt).multiplyScalar(G).round())},this.getScissor=function(x){return x.copy(Ft)},this.setScissor=function(x,L,O,k){x.isVector4?Ft.set(x.x,x.y,x.z,x.w):Ft.set(x,L,O,k),Tt.scissor(z.copy(Ft).multiplyScalar(G).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(x){Tt.setScissorTest(ne=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){ht=x},this.getClearColor=function(x){return x.copy(Et.getClearColor())},this.setClearColor=function(){Et.setClearColor.apply(Et,arguments)},this.getClearAlpha=function(){return Et.getClearAlpha()},this.setClearAlpha=function(){Et.setClearAlpha.apply(Et,arguments)},this.clear=function(x=!0,L=!0,O=!0){let k=0;if(x){let I=!1;if(U!==null){const Q=U.texture.format;I=Q===Ua||Q===Da||Q===Ia}if(I){const Q=U.texture.type,lt=Q===mn||Q===di||Q===As||Q===Qi||Q===Ca||Q===Pa,mt=Et.getClearColor(),gt=Et.getClearAlpha(),Rt=mt.r,It=mt.g,_t=mt.b;lt?(g[0]=Rt,g[1]=It,g[2]=_t,g[3]=gt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Rt,_[1]=It,_[2]=_t,_[3]=gt,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}L&&(k|=D.DEPTH_BUFFER_BIT),O&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",at,!1),ut.dispose(),Wt.dispose(),yt.dispose(),v.dispose(),N.dispose(),X.dispose(),le.dispose(),P.dispose(),xt.dispose(),H.dispose(),H.removeEventListener("sessionstart",Ga),H.removeEventListener("sessionend",Va),Zn.stop()};function $(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const x=he.autoReset,L=ft.enabled,O=ft.autoUpdate,k=ft.needsUpdate,I=ft.type;it(),he.autoReset=x,ft.enabled=L,ft.autoUpdate=O,ft.needsUpdate=k,ft.type=I}function at(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Lt(x){const L=x.target;L.removeEventListener("dispose",Lt),_e(L)}function _e(x){Ae(x),yt.remove(x)}function Ae(x){const L=yt.get(x).programs;L!==void 0&&(L.forEach(function(O){xt.releaseProgram(O)}),x.isShaderMaterial&&xt.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,O,k,I,Q){L===null&&(L=pe);const lt=I.isMesh&&I.matrixWorld.determinant()<0,mt=Mh(x,L,O,k,I);Tt.setMaterial(k,lt);let gt=O.index,Rt=1;if(k.wireframe===!0){if(gt=Z.getWireframeAttribute(O),gt===void 0)return;Rt=2}const It=O.drawRange,_t=O.attributes.position;let Yt=It.start*Rt,ce=(It.start+It.count)*Rt;Q!==null&&(Yt=Math.max(Yt,Q.start*Rt),ce=Math.min(ce,(Q.start+Q.count)*Rt)),gt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,gt.count)):_t!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,_t.count));const ue=ce-Yt;if(ue<0||ue===1/0)return;le.setup(I,k,mt,O,gt);let Fe,jt=dt;if(gt!==null&&(Fe=Y.get(gt),jt=Gt,jt.setIndex(Fe)),I.isMesh)k.wireframe===!0?(Tt.setLineWidth(k.wireframeLinewidth*xe()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(I.isLine){let St=k.linewidth;St===void 0&&(St=1),Tt.setLineWidth(St*xe()),I.isLineSegments?jt.setMode(D.LINES):I.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else I.isPoints?jt.setMode(D.POINTS):I.isSprite&&jt.setMode(D.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)jt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))jt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const St=I._multiDrawStarts,vn=I._multiDrawCounts,Zt=I._multiDrawCount,en=gt?Y.get(gt).bytesPerElement:1,gi=yt.get(k).currentProgram.getUniforms();for(let Ge=0;Ge<Zt;Ge++)gi.setValue(D,"_gl_DrawID",Ge),jt.render(St[Ge]/en,vn[Ge])}else if(I.isInstancedMesh)jt.renderInstances(Yt,ue,I.count);else if(O.isInstancedBufferGeometry){const St=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,vn=Math.min(O.instanceCount,St);jt.renderInstances(Yt,ue,vn)}else jt.render(Yt,ue)};function Qt(x,L,O){x.transparent===!0&&x.side===Xe&&x.forceSinglePass===!1?(x.side=De,x.needsUpdate=!0,Ls(x,L,O),x.side=$n,x.needsUpdate=!0,Ls(x,L,O),x.side=Xe):Ls(x,L,O)}this.compile=function(x,L,O=null){O===null&&(O=x),p=Wt.get(O),p.init(L),E.push(p),O.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==O&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights();const k=new Set;return x.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const mt=Q[lt];Qt(mt,O,I),k.add(mt)}else Qt(Q,O,I),k.add(Q)}),E.pop(),p=null,k},this.compileAsync=function(x,L,O=null){const k=this.compile(x,L,O);return new Promise(I=>{function Q(){if(k.forEach(function(lt){yt.get(lt).currentProgram.isReady()&&k.delete(lt)}),k.size===0){I(x);return}setTimeout(Q,10)}zt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let tn=null;function _n(x){tn&&tn(x)}function Ga(){Zn.stop()}function Va(){Zn.start()}const Zn=new rh;Zn.setAnimationLoop(_n),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(x){tn=x,H.setAnimationLoop(x),x===null?Zn.stop():Zn.start()},H.addEventListener("sessionstart",Ga),H.addEventListener("sessionend",Va),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(L),L=H.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,L,U),p=Wt.get(x,E.length),p.init(L),E.push(p),bt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),q.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,et=J.init(this.clippingPlanes,vt),m=ut.get(x,b.length),m.init(),b.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=M.xr.getDepthSensingMesh();Q!==null&&Ur(Q,L,-1/0,M.sortObjects)}Ur(x,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,ht),Vt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Vt&&Et.addToRenderList(m,x),this.info.render.frame++,et===!0&&J.beginShadows();const O=p.state.shadowsArray;ft.render(O,x,L),et===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,I=m.transmissive;if(p.setupLights(),L.isArrayCamera){const Q=L.cameras;if(I.length>0)for(let lt=0,mt=Q.length;lt<mt;lt++){const gt=Q[lt];Xa(k,I,x,gt)}Vt&&Et.render(x);for(let lt=0,mt=Q.length;lt<mt;lt++){const gt=Q[lt];Wa(m,x,gt,gt.viewport)}}else I.length>0&&Xa(k,I,x,L),Vt&&Et.render(x),Wa(m,x,L);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),x.isScene===!0&&x.onAfterRender(M,x,L),le.resetDefaultState(),y=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],et===!0&&J.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function Ur(x,L,O,k){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)O=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){k&&Ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(bt);const lt=X.update(x),mt=x.material;mt.visible&&m.push(x,lt,mt,O,Ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const lt=X.update(x),mt=x.material;if(k&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ot.copy(x.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Ot.copy(lt.boundingSphere.center)),Ot.applyMatrix4(x.matrixWorld).applyMatrix4(bt)),Array.isArray(mt)){const gt=lt.groups;for(let Rt=0,It=gt.length;Rt<It;Rt++){const _t=gt[Rt],Yt=mt[_t.materialIndex];Yt&&Yt.visible&&m.push(x,lt,Yt,O,Ot.z,_t)}}else mt.visible&&m.push(x,lt,mt,O,Ot.z,null)}}const Q=x.children;for(let lt=0,mt=Q.length;lt<mt;lt++)Ur(Q[lt],L,O,k)}function Wa(x,L,O,k){const I=x.opaque,Q=x.transmissive,lt=x.transparent;p.setupLightsView(O),et===!0&&J.setGlobalState(M.clippingPlanes,O),k&&Tt.viewport(R.copy(k)),I.length>0&&Ps(I,L,O),Q.length>0&&Ps(Q,L,O),lt.length>0&&Ps(lt,L,O),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Xa(x,L,O,k){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Qe(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?pn:mn,minFilter:fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));const Q=p.state.transmissionRenderTarget[k.id],lt=k.viewport||R;Q.setSize(lt.z,lt.w);const mt=M.getRenderTarget();M.setRenderTarget(Q),M.getClearColor(V),j=M.getClearAlpha(),j<1&&M.setClearColor(16777215,.5),M.clear(),Vt&&Et.render(O);const gt=M.toneMapping;M.toneMapping=Pn;const Rt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),et===!0&&J.setGlobalState(M.clippingPlanes,k),Ps(x,O,k),T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q),zt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let _t=0,Yt=L.length;_t<Yt;_t++){const ce=L[_t],ue=ce.object,Fe=ce.geometry,jt=ce.material,St=ce.group;if(jt.side===Xe&&ue.layers.test(k.layers)){const vn=jt.side;jt.side=De,jt.needsUpdate=!0,qa(ue,O,k,Fe,jt,St),jt.side=vn,jt.needsUpdate=!0,It=!0}}It===!0&&(T.updateMultisampleRenderTarget(Q),T.updateRenderTargetMipmap(Q))}M.setRenderTarget(mt),M.setClearColor(V,j),Rt!==void 0&&(k.viewport=Rt),M.toneMapping=gt}function Ps(x,L,O){const k=L.isScene===!0?L.overrideMaterial:null;for(let I=0,Q=x.length;I<Q;I++){const lt=x[I],mt=lt.object,gt=lt.geometry,Rt=k===null?lt.material:k,It=lt.group;mt.layers.test(O.layers)&&qa(mt,L,O,gt,Rt,It)}}function qa(x,L,O,k,I,Q){x.onBeforeRender(M,L,O,k,I,Q),x.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(M,L,O,k,x,Q),I.transparent===!0&&I.side===Xe&&I.forceSinglePass===!1?(I.side=De,I.needsUpdate=!0,M.renderBufferDirect(O,L,k,I,x,Q),I.side=$n,I.needsUpdate=!0,M.renderBufferDirect(O,L,k,I,x,Q),I.side=Xe):M.renderBufferDirect(O,L,k,I,x,Q),x.onAfterRender(M,L,O,k,I,Q)}function Ls(x,L,O){L.isScene!==!0&&(L=pe);const k=yt.get(x),I=p.state.lights,Q=p.state.shadowsArray,lt=I.state.version,mt=xt.getParameters(x,I.state,Q,L,O),gt=xt.getProgramCacheKey(mt);let Rt=k.programs;k.environment=x.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(x.isMeshStandardMaterial?N:v).get(x.envMap||k.environment),k.envMapRotation=k.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,Rt===void 0&&(x.addEventListener("dispose",Lt),Rt=new Map,k.programs=Rt);let It=Rt.get(gt);if(It!==void 0){if(k.currentProgram===It&&k.lightsStateVersion===lt)return $a(x,mt),It}else mt.uniforms=xt.getUniforms(x),x.onBeforeCompile(mt,M),It=xt.acquireProgram(mt,gt),Rt.set(gt,It),k.uniforms=mt.uniforms;const _t=k.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=J.uniform),$a(x,mt),k.needsLights=Th(x),k.lightsStateVersion=lt,k.needsLights&&(_t.ambientLightColor.value=I.state.ambient,_t.lightProbe.value=I.state.probe,_t.directionalLights.value=I.state.directional,_t.directionalLightShadows.value=I.state.directionalShadow,_t.spotLights.value=I.state.spot,_t.spotLightShadows.value=I.state.spotShadow,_t.rectAreaLights.value=I.state.rectArea,_t.ltc_1.value=I.state.rectAreaLTC1,_t.ltc_2.value=I.state.rectAreaLTC2,_t.pointLights.value=I.state.point,_t.pointLightShadows.value=I.state.pointShadow,_t.hemisphereLights.value=I.state.hemi,_t.directionalShadowMap.value=I.state.directionalShadowMap,_t.directionalShadowMatrix.value=I.state.directionalShadowMatrix,_t.spotShadowMap.value=I.state.spotShadowMap,_t.spotLightMatrix.value=I.state.spotLightMatrix,_t.spotLightMap.value=I.state.spotLightMap,_t.pointShadowMap.value=I.state.pointShadowMap,_t.pointShadowMatrix.value=I.state.pointShadowMatrix),k.currentProgram=It,k.uniformsList=null,It}function Ya(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=dr.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function $a(x,L){const O=yt.get(x);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Mh(x,L,O,k,I){L.isScene!==!0&&(L=pe),T.resetTextureUnits();const Q=L.fog,lt=k.isMeshStandardMaterial?L.environment:null,mt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:is,gt=(k.isMeshStandardMaterial?N:v).get(k.envMap||lt),Rt=k.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,It=!!O.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),_t=!!O.morphAttributes.position,Yt=!!O.morphAttributes.normal,ce=!!O.morphAttributes.color;let ue=Pn;k.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(ue=M.toneMapping);const Fe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,jt=Fe!==void 0?Fe.length:0,St=yt.get(k),vn=p.state.lights;if(et===!0&&(vt===!0||x!==S)){const Ye=x===S&&k.id===y;J.setState(k,x,Ye)}let Zt=!1;k.version===St.__version?(St.needsLights&&St.lightsStateVersion!==vn.state.version||St.outputColorSpace!==mt||I.isBatchedMesh&&St.batching===!1||!I.isBatchedMesh&&St.batching===!0||I.isBatchedMesh&&St.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&St.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&St.instancing===!1||!I.isInstancedMesh&&St.instancing===!0||I.isSkinnedMesh&&St.skinning===!1||!I.isSkinnedMesh&&St.skinning===!0||I.isInstancedMesh&&St.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&St.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&St.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&St.instancingMorph===!1&&I.morphTexture!==null||St.envMap!==gt||k.fog===!0&&St.fog!==Q||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==J.numPlanes||St.numIntersection!==J.numIntersection)||St.vertexAlphas!==Rt||St.vertexTangents!==It||St.morphTargets!==_t||St.morphNormals!==Yt||St.morphColors!==ce||St.toneMapping!==ue||St.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,St.__version=k.version);let en=St.currentProgram;Zt===!0&&(en=Ls(k,L,I));let gi=!1,Ge=!1,as=!1;const fe=en.getUniforms(),ln=St.uniforms;if(Tt.useProgram(en.program)&&(gi=!0,Ge=!0,as=!0),k.id!==y&&(y=k.id,Ge=!0),gi||S!==x){Tt.buffers.depth.getReversed()?(rt.copy(x.projectionMatrix),lf(rt),cf(rt),fe.setValue(D,"projectionMatrix",rt)):fe.setValue(D,"projectionMatrix",x.projectionMatrix),fe.setValue(D,"viewMatrix",x.matrixWorldInverse);const Fn=fe.map.cameraPosition;Fn!==void 0&&Fn.setValue(D,Pt.setFromMatrixPosition(x.matrixWorld)),Ht.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fe.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Ge=!0,as=!0)}if(I.isSkinnedMesh){fe.setOptional(D,I,"bindMatrix"),fe.setOptional(D,I,"bindMatrixInverse");const Ye=I.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),fe.setValue(D,"boneTexture",Ye.boneTexture,T))}I.isBatchedMesh&&(fe.setOptional(D,I,"batchingTexture"),fe.setValue(D,"batchingTexture",I._matricesTexture,T),fe.setOptional(D,I,"batchingIdTexture"),fe.setValue(D,"batchingIdTexture",I._indirectTexture,T),fe.setOptional(D,I,"batchingColorTexture"),I._colorsTexture!==null&&fe.setValue(D,"batchingColorTexture",I._colorsTexture,T));const ls=O.morphAttributes;if((ls.position!==void 0||ls.normal!==void 0||ls.color!==void 0)&&wt.update(I,O,en),(Ge||St.receiveShadow!==I.receiveShadow)&&(St.receiveShadow=I.receiveShadow,fe.setValue(D,"receiveShadow",I.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ln.envMap.value=gt,ln.flipEnvMap.value=gt.isCubeTexture&&gt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(ln.envMapIntensity.value=L.environmentIntensity),Ge&&(fe.setValue(D,"toneMappingExposure",M.toneMappingExposure),St.needsLights&&yh(ln,as),Q&&k.fog===!0&&ot.refreshFogUniforms(ln,Q),ot.refreshMaterialUniforms(ln,k,G,tt,p.state.transmissionRenderTarget[x.id]),dr.upload(D,Ya(St),ln,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(dr.upload(D,Ya(St),ln,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fe.setValue(D,"center",I.center),fe.setValue(D,"modelViewMatrix",I.modelViewMatrix),fe.setValue(D,"normalMatrix",I.normalMatrix),fe.setValue(D,"modelMatrix",I.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ye=k.uniformsGroups;for(let Fn=0,On=Ye.length;Fn<On;Fn++){const Ka=Ye[Fn];P.update(Ka,en),P.bind(Ka,en)}}return en}function yh(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function Th(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(x,L,O){yt.get(x.texture).__webglTexture=L,yt.get(x.depthTexture).__webglTexture=O;const k=yt.get(x);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=O===void 0,k.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const O=yt.get(x);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,O=0){U=x,A=L,w=O;let k=!0,I=null,Q=!1,lt=!1;if(x){const gt=yt.get(x);if(gt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(D.FRAMEBUFFER,null),k=!1;else if(gt.__webglFramebuffer===void 0)T.setupRenderTarget(x);else if(gt.__hasExternalTextures)T.rebindTextures(x,yt.get(x.texture).__webglTexture,yt.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(gt.__boundDepthTexture!==_t){if(_t!==null&&yt.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(x)}}const Rt=x.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(lt=!0);const It=yt.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(It[L])?I=It[L][O]:I=It[L],Q=!0):x.samples>0&&T.useMultisampledRTT(x)===!1?I=yt.get(x).__webglMultisampledFramebuffer:Array.isArray(It)?I=It[O]:I=It,R.copy(x.viewport),z.copy(x.scissor),B=x.scissorTest}else R.copy(Mt).multiplyScalar(G).floor(),z.copy(Ft).multiplyScalar(G).floor(),B=ne;if(Tt.bindFramebuffer(D.FRAMEBUFFER,I)&&k&&Tt.drawBuffers(x,I),Tt.viewport(R),Tt.scissor(z),Tt.setScissorTest(B),Q){const gt=yt.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,gt.__webglTexture,O)}else if(lt){const gt=yt.get(x.texture),Rt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,gt.__webglTexture,O||0,Rt)}y=-1},this.readRenderTargetPixels=function(x,L,O,k,I,Q,lt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){Tt.bindFramebuffer(D.FRAMEBUFFER,mt);try{const gt=x.texture,Rt=gt.format,It=gt.type;if(!Ht.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-k&&O>=0&&O<=x.height-I&&D.readPixels(L,O,k,I,Ut.convert(Rt),Ut.convert(It),Q)}finally{const gt=U!==null?yt.get(U).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,gt)}}},this.readRenderTargetPixelsAsync=async function(x,L,O,k,I,Q,lt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=yt.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){const gt=x.texture,Rt=gt.format,It=gt.type;if(!Ht.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-k&&O>=0&&O<=x.height-I){Tt.bindFramebuffer(D.FRAMEBUFFER,mt);const _t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.bufferData(D.PIXEL_PACK_BUFFER,Q.byteLength,D.STREAM_READ),D.readPixels(L,O,k,I,Ut.convert(Rt),Ut.convert(It),0);const Yt=U!==null?yt.get(U).__webglFramebuffer:null;Tt.bindFramebuffer(D.FRAMEBUFFER,Yt);const ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await af(D,ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Q),D.deleteBuffer(_t),D.deleteSync(ce),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,L=null,O=0){x.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const k=Math.pow(2,-O),I=Math.floor(x.image.width*k),Q=Math.floor(x.image.height*k),lt=L!==null?L.x:0,mt=L!==null?L.y:0;T.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,lt,mt,I,Q),Tt.unbindTexture()},this.copyTextureToTexture=function(x,L,O=null,k=null,I=0){x.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,x=arguments[1],L=arguments[2],I=arguments[3]||0,O=null);let Q,lt,mt,gt,Rt,It,_t,Yt,ce;const ue=x.isCompressedTexture?x.mipmaps[I]:x.image;O!==null?(Q=O.max.x-O.min.x,lt=O.max.y-O.min.y,mt=O.isBox3?O.max.z-O.min.z:1,gt=O.min.x,Rt=O.min.y,It=O.isBox3?O.min.z:0):(Q=ue.width,lt=ue.height,mt=ue.depth||1,gt=0,Rt=0,It=0),k!==null?(_t=k.x,Yt=k.y,ce=k.z):(_t=0,Yt=0,ce=0);const Fe=Ut.convert(L.format),jt=Ut.convert(L.type);let St;L.isData3DTexture?(T.setTexture3D(L,0),St=D.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),St=D.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),St=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,L.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,L.unpackAlignment);const vn=D.getParameter(D.UNPACK_ROW_LENGTH),Zt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),gi=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Rt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It);const as=x.isDataArrayTexture||x.isData3DTexture,fe=L.isDataArrayTexture||L.isData3DTexture;if(x.isRenderTargetTexture||x.isDepthTexture){const ln=yt.get(x),ls=yt.get(L),Ye=yt.get(ln.__renderTarget),Fn=yt.get(ls.__renderTarget);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let On=0;On<mt;On++)as&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(x).__webglTexture,I,It+On),x.isDepthTexture?(fe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.get(L).__webglTexture,I,ce+On),D.blitFramebuffer(gt,Rt,Q,lt,_t,Yt,Q,lt,D.DEPTH_BUFFER_BIT,D.NEAREST)):fe?D.copyTexSubImage3D(St,I,_t,Yt,ce+On,gt,Rt,Q,lt):D.copyTexSubImage2D(St,I,_t,Yt,ce+On,gt,Rt,Q,lt);Tt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else fe?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(St,I,_t,Yt,ce,Q,lt,mt,Fe,jt,ue.data):L.isCompressedArrayTexture?D.compressedTexSubImage3D(St,I,_t,Yt,ce,Q,lt,mt,Fe,ue.data):D.texSubImage3D(St,I,_t,Yt,ce,Q,lt,mt,Fe,jt,ue):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,_t,Yt,Q,lt,Fe,jt,ue.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,_t,Yt,ue.width,ue.height,Fe,ue.data):D.texSubImage2D(D.TEXTURE_2D,I,_t,Yt,Q,lt,Fe,jt,ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,vn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Zt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,gi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),I===0&&L.generateMipmaps&&D.generateMipmap(St),Tt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,O=null,k=null,I=0){return x.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,k=arguments[1]||null,x=arguments[2],L=arguments[3],I=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,L,O,k,I)},this.initRenderTarget=function(x){yt.get(x).__webglFramebuffer===void 0&&T.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?T.setTextureCube(x,0):x.isData3DTexture?T.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?T.setTexture2DArray(x,0):T.setTexture2D(x,0),Tt.unbindTexture()},this.resetState=function(){A=0,w=0,U=null,Tt.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Xt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Xt._getUnpackColorSpace()}}class x0 extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class S0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fa,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Le=new C;class br{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=un(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=un(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=un(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=un(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=un(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),n=ee(n,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new br(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fh extends Cs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Li;const ds=new C,Ii=new C,Di=new C,Ui=new At,ps=new At,dh=new ae,tr=new C,ms=new C,er=new C,uc=new At,_o=new At,fc=new At;class M0 extends ze{constructor(t=new fh){if(super(),this.isSprite=!0,this.type="Sprite",Li===void 0){Li=new He;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new S0(e,5);Li.setIndex([0,1,2,0,2,3]),Li.setAttribute("position",new br(n,3,0,!1)),Li.setAttribute("uv",new br(n,2,3,!1))}this.geometry=Li,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ii.setFromMatrixScale(this.matrixWorld),dh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ii.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;nr(tr.set(-.5,-.5,0),Di,a,Ii,s,r),nr(ms.set(.5,-.5,0),Di,a,Ii,s,r),nr(er.set(.5,.5,0),Di,a,Ii,s,r),uc.set(0,0),_o.set(1,0),fc.set(1,1);let o=t.ray.intersectTriangle(tr,ms,er,!1,ds);if(o===null&&(nr(ms.set(-.5,.5,0),Di,a,Ii,s,r),_o.set(0,1),o=t.ray.intersectTriangle(tr,er,ms,!1,ds),o===null))return;const l=t.ray.origin.distanceTo(ds);l<t.near||l>t.far||e.push({distance:l,point:ds.clone(),uv:Ze.getInterpolation(ds,tr,ms,er,uc,_o,fc,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function nr(i,t,e,n,s,r){Ui.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ps.x=r*Ui.x-s*Ui.y,ps.y=s*Ui.x+r*Ui.y):ps.copy(Ui),i.copy(t),i.x+=ps.x,i.y+=ps.y,i.applyMatrix4(dh)}class ph extends Pe{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws extends Ne{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new ae,dc=new ae,ir=[],pc=new mi,y0=new ae,gs=new me,_s=new Rs;class mh extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,y0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),pc.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),_s.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(_s)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(gs.geometry=this.geometry,gs.material=this.material,gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_s.copy(this.boundingSphere),_s.applyMatrix4(n),t.ray.intersectsSphere(_s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ni),dc.multiplyMatrices(n,Ni),gs.matrixWorld=dc,gs.raycast(t,ir);for(let a=0,o=ir.length;a<o;a++){const l=ir[a];l.instanceId=r,l.object=this,e.push(l)}ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ph(new Float32Array(s*this.count),s,this.count,La,dn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class T0 extends Pe{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fa extends He{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Se(u,3)),this.setAttribute("normal",new Se(f,3)),this.setAttribute("uv",new Se(d,2));function b(){const M=new C,F=new C;let A=0;const w=(e-t)/n;for(let U=0;U<=r;U++){const y=[],S=U/r,R=S*(e-t)+t;for(let z=0;z<=s;z++){const B=z/s,V=B*l+o,j=Math.sin(V),W=Math.cos(V);F.x=R*j,F.y=-S*n+m,F.z=R*W,u.push(F.x,F.y,F.z),M.set(j,w,W).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-S),y.push(g++)}_.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const S=_[y][U],R=_[y+1][U],z=_[y+1][U+1],B=_[y][U+1];(t>0||y!==0)&&(h.push(S,R,B),A+=3),(e>0||y!==r-1)&&(h.push(R,z,B),A+=3)}c.addGroup(p,A,0),p+=A}function E(M){const F=g,A=new At,w=new C;let U=0;const y=M===!0?t:e,S=M===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*S,0),f.push(0,S,0),d.push(.5,.5),g++;const R=g;for(let z=0;z<=s;z++){const V=z/s*l+o,j=Math.cos(V),W=Math.sin(V);w.x=y*W,w.y=m*S,w.z=y*j,u.push(w.x,w.y,w.z),f.push(0,S,0),A.x=j*.5+.5,A.y=W*.5*S+.5,d.push(A.x,A.y),g++}for(let z=0;z<s;z++){const B=F+z,V=R+z;M===!0?h.push(V,V+1,B):h.push(V+1,V,B),U+=3}c.addGroup(p,U,M===!0?1:2),p+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Oa extends He{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let u=t;const f=(e-t)/s,d=new C,g=new At;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*a;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,E=b,M=b+n+1,F=b+n+2,A=b+1;o.push(E,M,A),o.push(M,F,A)}}this.setIndex(o),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oa(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Dr extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],E=p/n;let M=0;p===0&&a===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let F=0;F<=e;F++){const A=F/e;u.x=-t*Math.cos(s+A*r)*Math.sin(a+E*o),u.y=t*Math.cos(a+E*o),u.z=t*Math.sin(s+A*r)*Math.sin(a+E*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+M,1-E),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const E=h[p][b+1],M=h[p][b],F=h[p+1][b],A=h[p+1][b+1];(p!==0||a>0)&&d.push(E,M,A),(p!==n-1||l<Math.PI)&&d.push(M,F,A)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(_,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class E0 extends ge{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class b0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=mc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=mc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function mc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);const qi=2,Oi=Bt*qi,Ar=Oi/2;function Yi(i,t,e){return e.set((t+.5)*qi-Ar,0,-((i+.5)*qi-Ar))}function ka(i,t){return Yi(In(i),Dn(i),t)}const A0=i=>i*Math.PI/2,w0=(i,t)=>Math.atan2(i,-t);function vo(i,t){return t.set(Math.sin(i),0,-Math.cos(i))}function Hi(i){const t=(i+Math.PI)%(2*Math.PI);return(t<0?t+2*Math.PI:t)-Math.PI}const Gi=(i,t)=>1-Math.exp(-i/Math.max(t,1e-4)),wr=(i,t,e)=>i<t?t:i>e?e:i;function R0(i){let t=i>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}const Fi=.4,gc=.9;function C0(){const i=new wn,t=new jn({color:new kt(.02,.05,.12)}),e=new jn({color:new kt(.1*5,.55*5,1*5)}),n=Ar*2+Fi*2;for(let s=0;s<4;s++){const r=s<2,o=(s%2===0?1:-1)*(Ar+Fi*.5),l=new me(new Nn(r?n:Fi,gc,r?Fi:n),t),c=new me(new Nn(r?n*1.02:Fi*1.02,.12,r?Fi*1.02:n*1.02),e);l.position.set(r?0:o,gc/2,r?o:0),c.position.set(r?0:o,.96,r?o:0),i.add(l,c)}return i}const sr=new C(0,1,0),P0=new C(1,0,0),L0=-66*Math.PI/180;class I0{loc=new C;quat=new Un;wantLoc=new C;wantQuat=new Un;look=new C;fwd=new C;lastFocus=new C;m=new ae;init=!1;camYaw=0;orbitDeg=0;titleClock=0;titleFocus=-1;shakeAmount=0;shake(t){this.shakeAmount=Math.max(this.shakeAmount,t)}update(t,e,n,s,r){const a=e?e.localSlot:-1,o=!!e&&e.hasMatch;let l=.35,c=!1,h=null;if(s.title&&o&&e)if(this.titleClock+=r,this.titleClock%26>14){if(this.titleFocus<0||!n[this.titleFocus]?.visible){this.titleFocus=-1;for(const f of Sr(e.state))if(n[f]?.visible){this.titleFocus=f;break}}c=this.titleFocus>=0&&n[this.titleFocus].visible,c&&(h=n[this.titleFocus])}else this.titleFocus=-1;if(c&&h)this.camYaw=Hi(this.camYaw+Hi(h.heading-this.camYaw)*Gi(r,.35)),vo(this.camYaw,this.fwd),this.wantLoc.copy(h.pos).addScaledVector(this.fwd,-15).addScaledVector(sr,7),this.look.copy(h.pos).addScaledVector(this.fwd,9),this.lookAt(this.wantLoc,this.look),l=.25;else if(s.title||!o||a<0){this.orbitDeg+=r*3.5;const f=this.orbitDeg*Math.PI/180;this.wantLoc.set(Math.sin(f)*96,62,-Math.cos(f)*96),this.look.set(0,-18,0),this.lookAt(this.wantLoc,this.look),l=.6}else if(n[a]?.visible){const f=n[a];this.lastFocus.copy(f.pos),s.overhead?(this.wantLoc.set(f.pos.x,37,f.pos.z+15),this.wantQuat.setFromAxisAngle(P0,L0),this.camYaw=0,l=.12):(this.camYaw=Hi(this.camYaw+Hi(f.heading-this.camYaw)*Gi(r,.17)),vo(this.camYaw,this.fwd),this.wantLoc.copy(f.pos).addScaledVector(this.fwd,-11.5).addScaledVector(sr,7.6),this.look.copy(f.pos).addScaledVector(this.fwd,12.5),this.lookAt(this.wantLoc,this.look),l=.05)}else vo(this.camYaw,this.fwd),this.wantLoc.copy(this.lastFocus).addScaledVector(this.fwd,-16).addScaledVector(sr,34),this.lookAt(this.wantLoc,this.lastFocus),l=.7;this.init||(this.loc.copy(this.wantLoc),this.quat.copy(this.wantQuat),this.init=!0);const u=Gi(r,Math.max(l,.01));if(this.loc.lerp(this.wantLoc,u),this.quat.slerp(this.wantQuat,Gi(r,Math.max(l,.02))),this.shakeAmount=Math.max(0,this.shakeAmount-r*2.2),t.position.copy(this.loc),this.shakeAmount>0){const f=this.shakeAmount*this.shakeAmount*.7;t.position.x+=(Math.random()*2-1)*f,t.position.y+=(Math.random()*2-1)*f,t.position.z+=(Math.random()*2-1)*f}t.quaternion.copy(this.quat)}lookAt(t,e){this.m.lookAt(t,e,sr),this.wantQuat.setFromRotationMatrix(this.m)}}const ma={uFogColor:{value:new C(.035,.008,.06)},uFogParams:{value:new ve(.0012,.002,90,1)}},Ba=`
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
`,vs=170,xo=Math.atan2(Math.SQRT1_2,-Math.SQRT1_2),D0=`
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
`,U0=`
uniform float uPixelAngle; // radians per pixel
varying vec2 vUv;
varying vec4 vD;
varying float vSide;
varying float vFace;
varying vec3 vWorld;
varying float vDepth;
${Ba}
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
`;class N0{mesh;material;constructor(){const t=new Nn(1,1,1),e=new Float32Array(vs*3),n=new Float32Array(vs*2);this.material=new ge({vertexShader:D0,fragmentShader:U0,uniforms:{uPixelAngle:{value:.0012},...ma}}),this.mesh=new mh(t,this.material,vs);const s=R0(1337),r=new ae,a=new Un,o=new C(0,1,0),l=new C,c=new C;for(let h=0;h<vs;h++){let u=s()*Math.PI*2;const f=Math.pow(s(),1.3),d=150+f*550,g=.16+40/d,_=Math.atan2(Math.sin(u-xo),Math.cos(u-xo));Math.abs(_)<g&&(u=xo+Math.sign(_||1)*(g+s()*.25));const m=14+s()*16+f*30,p=14+s()*16+f*30,b=30+s()*40+f*(60+s()*200);l.set(Math.cos(u)*d,b*.5-.1,Math.sin(u)*d),a.setFromAxisAngle(o,s()*Math.PI*.5),c.set(m,b,p),r.compose(l,a,c),this.mesh.setMatrixAt(h,r),e.set([m,b,p],h*3),n.set([s(),s()],h*2)}t.setAttribute("aSize",new ws(e,3)),t.setAttribute("aData",new ws(n,2)),this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.frustumCulled=!1}setCount(t){this.mesh.count=Math.max(0,Math.min(vs,t))}setPixelAngle(t){this.material.uniforms.uPixelAngle.value=t}}const rr=(i,t)=>[i[0]+t[0],i[1]+t[1],i[2]+t[2]],So=(i,t)=>[i[0]*t,i[1]*t,i[2]*t],za=i=>{const t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]},Mo=i=>[i[1]/100,i[2]/100,-i[0]/100],F0=i=>za([i[1],i[2],-i[0]]);class O0{pos=[];nrm=[];glow=[];tri(t,e,n,s,r){const a=Mo(t);let o=Mo(e),l=Mo(n);const c=F0(s),h=[o[0]-a[0],o[1]-a[1],o[2]-a[2]],u=[l[0]-a[0],l[1]-a[1],l[2]-a[2]],f=[h[1]*u[2]-h[2]*u[1],h[2]*u[0]-h[0]*u[2],h[0]*u[1]-h[1]*u[0]];f[0]*c[0]+f[1]*c[1]+f[2]*c[2]<0&&([o,l]=[l,o]),this.pos.push(...a,...o,...l);for(let d=0;d<3;d++)this.nrm.push(...c),this.glow.push(r)}quad(t,e,n,s,r,a){this.tri(t,e,n,r,a),this.tri(t,n,s,r,a)}geometry(){const t=new He;return t.setAttribute("position",new Se(this.pos,3)),t.setAttribute("normal",new Se(this.nrm,3)),t.setAttribute("glow",new Se(this.glow,1)),t.computeBoundingSphere(),t}}function _c(i,t,e,n){const r=e*.42,a=e*.52,o=e*.66,l=[0,-n,0],c=[0,n,0];for(let h=0;h<28;h++){const u=2*Math.PI*h/28,f=2*Math.PI*(h+1)/28,d=[Math.cos(u),0,Math.sin(u)],g=[Math.cos(f),0,Math.sin(f)],_=za(rr(d,g)),m=(p,b,E)=>rr(rr(t,So(p,b)),E);i.quad(m(d,e,l),m(g,e,l),m(g,e,c),m(d,e,c),_,1);for(let p=0;p<2;p++){const b=p===0?l:c,E=[0,p===0?-1:1,0],M=So(b,.82);i.quad(m(d,o,M),m(g,o,M),m(g,e,b),m(d,e,b),E,0),i.quad(m(d,a,M),m(g,a,M),m(g,o,M),m(d,o,M),E,.9),i.quad(m(d,r,M),m(g,r,M),m(g,a,M),m(d,a,M),E,0),i.tri(rr(t,So(M,1.1)),m(d,r,M),m(g,r,M),E,.25)}}}function k0(){const i=new O0,t=40;_c(i,[82,0,t],t,10),_c(i,[-82,0,t],t,11);const e=[{x:132,halfWidth:3,bottom:34,top:44},{x:118,halfWidth:11,bottom:36,top:62},{x:92,halfWidth:15,bottom:40,top:80},{x:60,halfWidth:16,bottom:36,top:84},{x:30,halfWidth:15,bottom:30,top:72},{x:0,halfWidth:15,bottom:28,top:86},{x:-30,halfWidth:17,bottom:30,top:98},{x:-62,halfWidth:18,bottom:38,top:92},{x:-96,halfWidth:16,bottom:40,top:80},{x:-122,halfWidth:11,bottom:40,top:64},{x:-136,halfWidth:4,bottom:44,top:50}],n=[[-.85,0],[-1,.22],[-1,.55],[-.78,.86],[-.32,1],[.32,1],[.78,.86],[1,.55],[1,.22],[.85,0]],s=(r,a)=>[r.x,a[0]*r.halfWidth,r.bottom+a[1]*(r.top-r.bottom)];for(let r=0;r+1<e.length;r++){const a=e[r],o=e[r+1];for(let c=0;c+1<n.length;c++){const h=(n[c][0]+n[c+1][0])*.5,u=(n[c][1]+n[c+1][1])*.5,f=za([0,h,u-.35]),d=(c===1||c===7)&&r>=1&&r<=8,g=c===4&&r>=4&&r<=7;i.quad(s(a,n[c]),s(a,n[c+1]),s(o,n[c+1]),s(o,n[c]),f,d?1:g?.55:0)}const l=n.length-1;i.quad(s(a,n[0]),s(a,n[l]),s(o,n[l]),s(o,n[0]),[0,0,-1],0)}for(let r=0;r<2;r++){const a=r===0?e[0]:e[e.length-1],o=[r===0?1:-1,0,0],l=[a.x,0,(a.bottom+a.top)*.5];for(let c=0;c+1<n.length;c++)i.tri(l,s(a,n[c]),s(a,n[c+1]),o,r===1?1:.6)}return i.geometry()}const B0=`
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
`,z0=`
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
`;function H0(i){return new ge({vertexShader:B0,fragmentShader:z0,uniforms:{uColor:{value:new C(i[0],i[1],i[2])},uGlow:{value:7},uBody:{value:new C(.015,.02,.035)}}})}const G0=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,V0=`
uniform vec3 uColor;
uniform float uGlow;
varying vec2 vUv;
void main() {
  float f = 1.0 - clamp(length(vUv - 0.5) * 2.0, 0.0, 1.0);
  gl_FragColor = vec4(uColor * uGlow * (f * f), 1.0);
}
`;function W0(i,t){return new ge({vertexShader:G0,fragmentShader:V0,uniforms:{uColor:{value:new C(i[0],i[1],i[2])},uGlow:{value:t}},blending:Kn,transparent:!0,depthWrite:!1,side:Xe})}function X0(){const i=new pi(2.4,4.2);return i.rotateX(-Math.PI/2),i}const q0=1.15,vc=28*Math.PI/180;class Y0{group=new wn;views=[];bikes=[];glows=[];shields=[];from=new C;to=new C;constructor(){const t=k0(),e=X0(),n=new Dr(1,20,12),s=new ge({transparent:!0,depthWrite:!1,blending:Kn,vertexShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          vec4 p = modelViewMatrix * vec4(position, 1.0);
          vNormal = normalize(normalMatrix * normal);
          vView = -p.xyz;
          gl_Position = projectionMatrix * p;
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        varying vec3 vView;
        void main() {
          float rim = pow(1.0 - abs(dot(normalize(vNormal), normalize(vView))), 2.0);
          gl_FragColor = vec4(vec3(1.0, 0.9, 0.55) * 1.8, rim * 0.24);
        }
      `});for(let r=0;r<pt;r++){const a=an[r],o=new me(t,H0(a));o.scale.setScalar(q0),o.rotation.order="YXZ",o.visible=!1;const l=new me(e,W0(a,1.6));l.visible=!1,l.renderOrder=2;const c=new me(n,s);c.scale.set(1.1,.9,1.85),c.visible=!1,this.shields.push(c),this.bikes.push(o),this.glows.push(l),this.group.add(o,l,c),this.views.push({visible:!1,pos:new C,lastPos:new C,heading:0,roll:0,spawnTick:-1})}}reset(){for(let t=0;t<pt;t++){const e=this.views[t];e.visible=!1,e.spawnTick=-1,e.roll=0,this.bikes[t].visible=!1,this.glows[t].visible=!1,this.shields[t].visible=!1}}update(t,e){const n=t.state,s=t.previousState,r=wr(t.tickAlpha,0,1);for(let a=0;a<pt;a++){const o=n.cycles[a],l=s.cycles[a],c=this.views[a],h=this.bikes[a],u=this.glows[a],f=this.shields[a];if(!o||!o.active||!o.alive){c.visible&&(h.visible=!1,u.visible=!1,f.visible=!1),c.visible=!1;continue}Yi(o.x,o.y,this.to),!!l&&l.active&&l.alive&&l.spawnTick===o.spawnTick?Yi(l.x,l.y,this.from):this.from.copy(this.to);const g=this.to.x-this.from.x,_=this.to.z-this.from.z,m=g*g+_*_>.01?w0(g,_):A0(o.dir);(!c.visible||c.spawnTick!==o.spawnTick)&&(c.heading=m,c.roll=0,c.spawnTick=o.spawnTick);const p=Hi(m-c.heading);c.heading=Hi(c.heading+p*Gi(e,.05));const b=wr(p*.35,-vc,vc);c.roll+=(b-c.roll)*Gi(e,.08),c.pos.lerpVectors(this.from,this.to,r),c.lastPos.copy(c.pos),c.visible=!0,h.visible=!0,h.position.copy(c.pos),h.rotation.set(0,-c.heading,-c.roll),u.visible=!0,u.position.set(c.pos.x,.03,c.pos.z),u.rotation.y=-c.heading;const E=o.turboUntilTick>n.tick,M=o.boostUntilTick>n.tick;h.material.uniforms.uGlow.value=E?10:M?9:7,u.material.uniforms.uGlow.value=E?2.8:M?2.3:1.6,u.scale.set(E?1.5:M?1.2:1,1,E?1.5:M?1.2:1),f.visible=o.shieldUntilTick>n.tick,f.visible&&(f.position.set(c.pos.x,.8,c.pos.z),f.rotation.y=-c.heading)}}}const $0=.75,xc=`
varying vec3 vWorld;
varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,K0=`
uniform sampler2D uTerritory;
uniform float uHalf;
varying vec3 vWorld;
${Ba}

void main() {
  float N = ${Bt.toFixed(1)};
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
`,j0=`
uniform vec3 uGrid;
varying vec3 vWorld;
varying vec2 vUv;
${Ba}
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
`;class Z0{floor;ground;texture;texels=new Uint8Array($t*4);lastOwner=new Uint8Array($t);flash=new Float32Array($t);colors;flashActive=!1;dirty=!0;constructor(){this.colors=new Uint8Array((an.length+1)*3),an.forEach((n,s)=>{for(let r=0;r<3;r++)this.colors[(s+1)*3+r]=Math.round(Math.min(Math.max(n[r],0),1)*255)}),this.texture=new ph(this.texels,Bt,Bt,Je,mn),this.texture.magFilter=Ue,this.texture.minFilter=Ue,this.texture.generateMipmaps=!1,this.texture.colorSpace=bn,this.texture.needsUpdate=!0;const t=new pi(Oi,Oi);t.rotateX(-Math.PI/2),this.floor=new me(t,new ge({vertexShader:xc,fragmentShader:K0,uniforms:{uTerritory:{value:this.texture},uHalf:{value:Oi/2},...ma}}));const e=new pi(Oi*40,Oi*40);e.rotateX(-Math.PI/2),this.ground=new me(e,new ge({vertexShader:xc,fragmentShader:j0,uniforms:{uGrid:{value:new C(.02,.06,.1)},...ma}})),this.ground.position.y=-.06}reset(){this.lastOwner.fill(0),this.flash.fill(0),this.flashActive=!1,this.dirty=!0}update(t,e){const n=this.lastOwner;let s=!1;for(let r=0;r<$t;r++){const a=t[r];a!==n[r]&&(a!==0&&(this.flash[r]=1,this.flashActive=!0),n[r]=a,s=!0)}if(s&&(this.dirty=!0),this.flashActive){this.flashActive=!1;const r=e/$0,a=this.flash;for(let o=0;o<$t;o++)a[o]>0&&(a[o]=Math.max(0,a[o]-r),a[o]>0&&(this.flashActive=!0));this.dirty=!0}this.dirty&&this.upload()}upload(){this.dirty=!1;const t=this.texels,e=this.colors,n=this.lastOwner,s=this.flash;for(let r=0;r<$t;r++){const a=n[r]<=an.length?n[r]:0,o=r*4;t[o]=e[a*3],t[o+1]=e[a*3+1],t[o+2]=e[a*3+2],t[o+3]=Math.round(s[r]*255)}this.texture.needsUpdate=!0}}const be=640;class J0{mesh;n=0;px=new Float32Array(be);py=new Float32Array(be);pz=new Float32Array(be);vx=new Float32Array(be);vy=new Float32Array(be);vz=new Float32Array(be);wx=new Float32Array(be);wy=new Float32Array(be);wz=new Float32Array(be);age=new Float32Array(be);life=new Float32Array(be);size=new Float32Array(be);grav=new Float32Array(be);col=new Float32Array(be*3);colors;m=new ae;q=new Un;e=new gn;p=new C;s=new C;constructor(){this.mesh=new mh(new Nn(1,1,1),new jn({color:16777215}),be),this.mesh.instanceMatrix.setUsage(vl),this.colors=new ws(new Float32Array(be*3),3),this.colors.setUsage(vl),this.mesh.instanceColor=this.colors,this.mesh.count=0,this.mesh.frustumCulled=!1}reset(){this.n=0,this.mesh.count=0}burst(t,e,n,s,r,a,o,l=.5){for(let c=0;c<n&&this.n<be;c++){const h=this.n++;let[u,f,d]=Sc();f=Math.abs(f)*l+f*(1-l);const g=Math.hypot(u,f,d)||1,_=s*(.35+Math.random()*.65)/g;u*=_,f*=_,d*=_;const[m,p,b]=Sc();this.px[h]=t.x+m*r,this.py[h]=t.y+p*r,this.pz[h]=t.z+b*r,this.vx[h]=u,this.vy[h]=f,this.vz[h]=d,this.wx[h]=(Math.random()*2-1)*7,this.wy[h]=(Math.random()*2-1)*7,this.wz[h]=(Math.random()*2-1)*7,this.age[h]=0,this.life[h]=a*(.6+Math.random()*.4),this.size[h]=r*(.5+Math.random()*.9),this.grav[h]=o,this.col[h*3]=e[0],this.col[h*3+1]=e[1],this.col[h*3+2]=e[2]}}update(t){if(this.n===0&&this.mesh.count===0)return;const e=Math.exp(-1.6*t);for(let s=this.n-1;s>=0;s--){if(this.age[s]+=t,this.age[s]>=this.life[s]){this.removeAt(s);continue}this.vy[s]-=this.grav[s]*t,this.vx[s]*=e,this.vy[s]*=e,this.vz[s]*=e,this.px[s]+=this.vx[s]*t,this.py[s]+=this.vy[s]*t,this.pz[s]+=this.vz[s]*t;const r=this.size[s]*.5;this.py[s]<r&&(this.py[s]=r,this.vy[s]=Math.abs(this.vy[s])*.3,this.vx[s]*=.7,this.vz[s]*=.7)}const n=this.colors.array;for(let s=0;s<this.n;s++){const r=this.age[s]/this.life[s],a=this.size[s]*(1-r*r),o=this.age[s];this.q.setFromEuler(this.e.set(this.wx[s]*o,this.wy[s]*o,this.wz[s]*o)),this.m.compose(this.p.set(this.px[s],this.py[s],this.pz[s]),this.q,this.s.set(a,a,a)),this.mesh.setMatrixAt(s,this.m);const l=9*(1-r)+.5;n[s*3]=this.col[s*3]*l,n[s*3+1]=this.col[s*3+1]*l,n[s*3+2]=this.col[s*3+2]*l}this.mesh.count=this.n,this.mesh.instanceMatrix.needsUpdate=!0,this.colors.needsUpdate=!0}removeAt(t){const e=--this.n;t!==e&&(this.px[t]=this.px[e],this.py[t]=this.py[e],this.pz[t]=this.pz[e],this.vx[t]=this.vx[e],this.vy[t]=this.vy[e],this.vz[t]=this.vz[e],this.wx[t]=this.wx[e],this.wy[t]=this.wy[e],this.wz[t]=this.wz[e],this.age[t]=this.age[e],this.life[t]=this.life[e],this.size[t]=this.size[e],this.grav[t]=this.grav[e],this.col[t*3]=this.col[e*3],this.col[t*3+1]=this.col[e*3+1],this.col[t*3+2]=this.col[e*3+2])}}function Sc(){const i=Math.random()*2-1,t=Math.random()*Math.PI*2,e=Math.sqrt(1-i*i);return[e*Math.cos(t),i,e*Math.sin(t)]}const gh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class os{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q0=new oh(-1,1,1,-1,0,1);class t_ extends He{constructor(){super(),this.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Se([0,2,0,0,2,0],2))}}const e_=new t_;class Ha{constructor(t){this._mesh=new me(e_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Q0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class n_ extends os{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof ge?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Er.clone(t.uniforms),this.material=new ge({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ha(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Mc extends os{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class i_ extends os{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class s_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new At);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new n_(gh),this.copyPass.material.blending=Cn,this.clock=new b0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mc!==void 0&&(a instanceof Mc?n=!0:a instanceof i_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new At);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class r_ extends os{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const o_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ns extends os{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new At(t.x,t.y):new At(256,256),this.clearColor=new kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(r,a,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Qe(r,a,{type:pn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Qe(r,a,{type:pn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=o_;this.highPassUniforms=Er.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ge({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new At(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=gh;this.copyUniforms=Er.clone(h.uniforms),this.blendMaterial=new ge({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Kn,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new kt,this.oldClearAlpha=1,this.basic=new jn,this.fsQuad=new Ha(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new At(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ns.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new ge({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new At(.5,.5)},direction:{value:new At(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new ge({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ns.BlurDirectionX=new At(1,0);ns.BlurDirectionY=new At(0,1);class a_ extends ns{scale=1;setSize(t,e){super.setSize(Math.max(2,Math.round(t*this.scale)),Math.max(2,Math.round(e*this.scale)))}}const l_=`
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
`,c_=`
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
`;class h_ extends os{material;quad;constructor(){super(),this.material=new E0({vertexShader:l_,fragmentShader:c_,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1},uAspect:{value:16/9},uVignette:{value:.42},uSaturation:{value:1.1}},depthTest:!1,depthWrite:!1}),this.quad=new Ha(this.material)}render(t,e,n){this.material.uniforms.tDiffuse.value=n.texture,this.material.uniforms.toneMappingExposure.value=t.toneMappingExposure,t.setRenderTarget(this.renderToScreen?null:e),!this.renderToScreen&&this.clear&&t.clear(),this.quad.render(t)}setSize(t,e){this.material.uniforms.uAspect.value=t/Math.max(1,e)}dispose(){this.material.dispose(),this.quad.dispose()}}class u_{composer;bloom;final;renderPass;renderer;constructor(t,e,n,s){this.renderer=t,this.renderPass=new r_(e,n),this.bloom=new a_(new At(256,256),.32,.45,.6),this.final=new h_,this.composer=this.build(s)}build(t){const e=new Qe(1,1,{type:pn,samples:t.msaa}),n=new s_(this.renderer,e);return this.bloom.scale=t.bloomScale,n.addPass(this.renderPass),n.addPass(this.bloom),n.addPass(this.final),n}setQuality(t,e,n){this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer=this.build(t),this.setSize(e,n)}setSize(t,e){this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(t,e)}render(t){this.composer.render(t)}}const ga={[Jt.Turbo]:[1,.55,.05],[Jt.Shield]:[.08,.85,1],[Jt.Charge]:[.22,1,.35]},f_={[Jt.Turbo]:"#ffba45",[Jt.Shield]:"#50e4ff",[Jt.Charge]:"#71ff8c"};function d_(i){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=f_[i];e.fillStyle="rgba(3, 9, 18, 0.72)",e.beginPath(),e.arc(64,64,53,0,Math.PI*2),e.fill(),e.strokeStyle=n,e.lineWidth=3,e.shadowColor=n,e.shadowBlur=8,e.stroke(),e.shadowBlur=5,e.fillStyle=n,e.lineWidth=5,e.lineJoin="round",e.lineCap="round",i===Jt.Turbo?(e.beginPath(),e.moveTo(72,25),e.lineTo(43,65),e.lineTo(60,65),e.lineTo(53,101),e.lineTo(87,55),e.lineTo(68,55),e.closePath(),e.fill()):i===Jt.Shield?(e.beginPath(),e.moveTo(64,28),e.lineTo(91,39),e.lineTo(88,65),e.quadraticCurveTo(84,85,64,99),e.quadraticCurveTo(44,85,40,65),e.lineTo(37,39),e.closePath(),e.stroke(),e.beginPath(),e.moveTo(64,40),e.lineTo(64,82),e.stroke()):(e.beginPath(),e.roundRect(42,35,44,62,5),e.stroke(),e.fillRect(55,27,18,8),e.beginPath(),e.moveTo(53,66),e.lineTo(75,66),e.moveTo(64,55),e.lineTo(64,77),e.stroke());const s=new T0(t);return s.colorSpace=ke,s}class p_{group=new wn;beacons=[];rings=new Map;pillars=new Map;icons=new Map;constructor(){const t=new Oa(.69,.83,32);t.rotateX(-Math.PI/2);const e=new Fa(.06,.27,2.1,8,1,!0);for(const n of[Jt.Turbo,Jt.Shield,Jt.Charge]){const s=ga[n],r=new kt().setRGB(...s);this.rings.set(n,new jn({color:r.clone().multiplyScalar(2),transparent:!0,opacity:.8,blending:Kn,depthWrite:!1,side:Xe,forceSinglePass:!0})),this.pillars.set(n,new jn({color:r.clone().multiplyScalar(1.8),transparent:!0,opacity:.13,blending:Kn,depthWrite:!1,side:Xe,forceSinglePass:!0})),this.icons.set(n,new fh({map:d_(n),transparent:!0,depthWrite:!1,color:new kt().setRGB(1.15,1.15,1.15)}))}for(let n=0;n<Es;n++){const s=Jt.Turbo,r=new wn,a=new me(t,this.rings.get(s));a.position.y=.06;const o=new me(e,this.pillars.get(s));o.position.y=1.1;const l=new M0(this.icons.get(s));l.position.y=2.35,l.scale.setScalar(2.6),r.add(a,o,l),r.visible=!1,this.group.add(r),this.beacons.push({group:r,ring:a,pillar:o,icon:l,kind:s})}}reset(){for(const t of this.beacons)t.group.visible=!1}update(t,e,n,s){const r=2*Math.tan(e.fov*Math.PI/360)/Math.max(1,n);for(let a=0;a<this.beacons.length;a++){const o=this.beacons[a],l=t.pickups[a],c=!!l&&l.expiresTick>t.tick;if(o.group.visible=c,!c)continue;o.kind!==l.kind&&(o.kind=l.kind,o.ring.material=this.rings.get(l.kind),o.pillar.material=this.pillars.get(l.kind),o.icon.material=this.icons.get(l.kind)),ka(l.cell,o.group.position);const h=s*2.8+l.cell*.13,f=l.expiresTick-t.tick<3*Kt?.9+.1*Math.sin(s*12):1;o.ring.scale.setScalar((1+.07*Math.sin(h))*f),o.icon.position.y=2.35+.2*Math.sin(h);const d=e.position.distanceTo(o.group.position),g=wr(d*r*24,2.6,5.2)*f;o.icon.scale.set(g,g,1)}}}const or={high:{maxPixelRatio:2,bloomScale:1,towers:170,msaa:4},low:{maxPixelRatio:1.5,bloomScale:.5,towers:80,msaa:0}},_h="neon-circuit/quality";function m_(){try{const i=new URLSearchParams(window.location.search).get("quality");if(i==="high"||i==="low")return i}catch{}try{const i=window.localStorage.getItem(_h);if(i==="high"||i==="low")return i}catch{}return g_()}function g_(){const i=window.matchMedia?.("(pointer: coarse)").matches??!1,t=Math.min(window.screen?.width??1920,window.screen?.height??1080),e=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);return i||e||t<600?"low":"high"}function __(i){try{window.localStorage.setItem(_h,i)}catch{}}const v_=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,x_=`
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
`;class S_{mesh;material;constructor(){this.material=new ge({vertexShader:v_,fragmentShader:x_,uniforms:{uTime:{value:0},uZenith:{value:new C(0,0,.004)},uHorizon:{value:new C(.12,.01,.12)},uSunColor:{value:new C(1,.25,.55)},uSunDir:{value:new C(-Math.SQRT1_2,.08,Math.SQRT1_2).normalize()}},side:De,depthWrite:!1,depthTest:!1}),this.mesh=new me(new Dr(1500,48,24),this.material),this.mesh.renderOrder=-100,this.mesh.frustumCulled=!1}update(t,e){this.mesh.position.copy(t),this.material.uniforms.uTime.value=e}}const yc=1.5,M_=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,y_=`
uniform vec3 uColor;
uniform float uGlow;
uniform float uTime;
uniform float uShield;
varying vec2 vUv;
void main() {
  // vUv.x = distance along the trail in cells, vUv.y = 0 at the bottom edge, 1 at the top edge
  float v = clamp(vUv.y, 0.0, 1.0);
  float v2 = v * v;
  float profile = 0.18 + 0.5 * v2 * v2 + 2.2 * smoothstep(0.9, 1.0, v);
  float bottom = 0.4 + 0.6 * smoothstep(0.0, 0.35, v);
  float bands = 0.85 + 0.15 * sin(6.2831853 * (vUv.x * 0.6 - uTime * 1.5));
  vec3 color = uColor;
  if (uShield > 0.5) {
    // Pearl-white walls with travelling gold stripes distinguish protection from every pilot palette.
    float stripe = step(0.62, fract(vUv.x * 0.8 - v * 0.8 - uTime * 1.25));
    color = mix(vec3(0.88, 0.95, 1.0), uColor, stripe);
    profile += 0.28;
    bands = 0.9 + 0.1 * sin(uTime * 6.2831853);
  }
  gl_FragColor = vec4(color * uGlow * profile * bottom * bands, 1.0);
}
`;class T_{mesh;geometry=new He;capacity=0;positions=new Float32Array(0);uvs=new Float32Array(0);key="";points=[];staticQuads=0;headU=0;tmp=new C;constructor(t){this.mesh=new me(this.geometry,t),this.mesh.frustumCulled=!1,this.mesh.visible=!1,this.mesh.renderOrder=3,this.ensure(32)}hide(){this.mesh.visible=!1,this.key=""}update(t,e,n,s){let r=n*31+t|0;for(let o=0;o<e.length;o++)r=Math.imul(r,31)+e[o]|0;const a=`${e.length}:${r}`;a!==this.key&&(this.key=a,this.rebuild(t,e)),this.writeHead(s),this.mesh.visible=!0}rebuild(t,e){const n=[],s=l=>{ka(l,this.tmp),n.push(this.tmp.x,this.tmp.z)};s(t>=0?t:e[0]);for(let l=0;l+1<e.length;l++)s(e[l]);s(e[e.length-1]);for(let l=n.length/2-2;l>=1;l--){const c=n[l*2]-n[l*2-2],h=n[l*2+1]-n[l*2-1],u=n[l*2+2]-n[l*2],f=n[l*2+3]-n[l*2+1],d=Math.hypot(c,h),g=Math.hypot(u,f);(d<.001||g<.001||(c*u+h*f)/(d*g)>.999)&&n.splice(l*2,2)}this.points=n;const r=n.length/2;this.ensure(r);let a=0,o=0;for(let l=0;l+2<r;l++){const c=Math.hypot(n[l*2+2]-n[l*2],n[l*2+3]-n[l*2+1]);c<.005||(this.writeQuad(o++,n[l*2],n[l*2+1],n[l*2+2],n[l*2+3],a,a+c/qi),a+=c/qi)}this.staticQuads=o,this.headU=a}writeHead(t){const e=this.points.length/2,n=this.points[(e-2)*2],s=this.points[(e-2)*2+1],r=Math.hypot(t.x-n,t.z-s);let a=this.staticQuads;r>=.005&&this.writeQuad(a++,n,s,t.x,t.z,this.headU,this.headU+r/qi),this.geometry.setDrawRange(0,a*6),this.geometry.getAttribute("position").needsUpdate=!0,this.geometry.getAttribute("uv").needsUpdate=!0}writeQuad(t,e,n,s,r,a,o){const l=this.positions,c=this.uvs,h=t*12;l[h]=e,l[h+1]=0,l[h+2]=n,l[h+3]=s,l[h+4]=0,l[h+5]=r,l[h+6]=s,l[h+7]=yc,l[h+8]=r,l[h+9]=e,l[h+10]=yc,l[h+11]=n;const u=t*8;c[u]=a,c[u+1]=0,c[u+2]=o,c[u+3]=0,c[u+4]=o,c[u+5]=1,c[u+6]=a,c[u+7]=1}ensure(t){if(t<=this.capacity)return;let e=Math.max(32,this.capacity);for(;e<t;)e*=2;this.capacity=e,this.positions=new Float32Array(e*12),this.uvs=new Float32Array(e*8);const n=new Uint32Array(e*6);for(let s=0;s<e;s++){const r=s*4;n.set([r,r+1,r+2,r,r+2,r+3],s*6)}this.geometry.setAttribute("position",new Ne(this.positions,3)),this.geometry.setAttribute("uv",new Ne(this.uvs,2)),this.geometry.setIndex(new Ne(n,1))}}class E_{group=new wn;walls=[];materials=[];constructor(){for(let t=0;t<pt;t++){const e=an[t],n=new ge({vertexShader:M_,fragmentShader:y_,uniforms:{uColor:{value:new C(e[0],e[1],e[2])},uGlow:{value:3},uTime:{value:0},uShield:{value:0}},blending:Kn,transparent:!0,depthWrite:!1,side:Xe}),s=new T_(n);this.materials.push(n),this.walls.push(s),this.group.add(s.mesh)}}reset(){for(const t of this.walls)t.hide()}update(t,e,n){const s=n%20;for(const a of this.materials)a.uniforms.uTime.value=s;const r=t.state;for(let a=0;a<pt;a++){const o=r.cycles[a],l=this.walls[a],c=!!o?.active&&o.alive&&o.shieldUntilTick>r.tick,h=this.materials[a],u=an[a];if(h.uniforms.uShield.value=c?1:0,h.uniforms.uColor.value.set(...c?[1,.88,.35]:u),!o||!o.active||!o.alive||o.trail.length===0||!e[a].visible){l.mesh.visible&&l.hide();continue}l.update(o.trailOrigin,o.trail,o.spawnTick,e[a].pos)}}}const yo=[1,1,1],b_=90*Math.PI/180,A_=80*Math.PI/180;class w_{gl;scene=new x0;camera=new je(60,16/9,.3,4e3);rig=new I0;floor=new Z0;cycles=new Y0;trails=new E_;fx=new J0;pickups=new p_;sky=new S_;city=new N0;post;qualityName;width=1;height=1;time=0;tmp=new C;constructor(t,e){this.gl=new v0({canvas:t,antialias:!1,depth:!0,stencil:!1,powerPreference:"high-performance"}),this.gl.outputColorSpace=ke,this.gl.toneMapping=Pn,this.gl.toneMappingExposure=1,this.gl.setClearColor(0,1),this.qualityName=e,this.scene.add(this.sky.mesh,this.floor.ground,this.floor.floor,C0(),this.city.mesh,this.cycles.group,this.trails.group,this.pickups.group,this.fx.mesh),this.post=new u_(this.gl,this.scene,this.camera,or[e]),this.city.setCount(or[e].towers)}get quality(){return this.qualityName}setQuality(t){if(t===this.qualityName)return;this.qualityName=t;const e=or[t];this.city.setCount(e.towers),this.applySize(),this.post.setQuality(e,this.width,this.height)}resize(t,e){this.width=Math.max(1,Math.floor(t)),this.height=Math.max(1,Math.floor(e)),this.applySize(),this.post.setSize(this.width,this.height)}applySize(){const t=Math.min(window.devicePixelRatio||1,or[this.qualityName].maxPixelRatio);this.gl.setPixelRatio(t),this.gl.setSize(this.width,this.height,!1);const e=this.width/this.height,n=Math.min(2*Math.atan(Math.tan(b_/2)/e),A_);this.camera.fov=n*180/Math.PI,this.camera.aspect=e,this.camera.updateProjectionMatrix(),this.city.setPixelAngle(2*Math.tan(n/2)/(this.height*t))}resetVisuals(){this.floor.reset(),this.cycles.reset(),this.trails.reset(),this.fx.reset(),this.pickups.reset()}shake(t){this.rig.shake(t)}handleEvent(t,e){const n=an[t.slot]??an[0],s=this.cycles.views[t.slot];if(s)switch(t.type){case qt.Death:{if(s.spawnTick>=0)this.tmp.copy(s.lastPos);else{const r=e.previousState.cycles[t.slot];Yi(r.x,r.y,this.tmp)}this.tmp.y+=.5,this.fx.burst(this.tmp,n,90,9.5,.16,1.7,16,.7),this.fx.burst(this.tmp,yo,24,15,.07,.6,6,.4);break}case qt.Capture:{if(!s.visible)break;this.tmp.copy(s.pos),this.tmp.y+=.4,this.fx.burst(this.tmp,n,wr(10+Math.floor(t.value/4),10,60),4.2,.09,1,-2.5,1.2);break}case qt.Spawn:{const r=e.state.cycles[t.slot];Yi(r.x,r.y,this.tmp),this.tmp.y=.2,this.fx.burst(this.tmp,n,36,6,.1,.9,-4,1.5);break}case qt.Pickup:{ka(t.other,this.tmp),this.tmp.y=1.1;const r=ga[t.value]??yo;this.fx.burst(this.tmp,r,28,5,.09,.75,-2,.9),this.fx.burst(this.tmp,yo,8,3,.06,.35,-1,.8);break}case qt.ShieldBlock:{const r=e.state.cycles[t.slot];s.visible?this.tmp.copy(s.pos):Yi(r.x,r.y,this.tmp),this.tmp.y=.9,this.fx.burst(this.tmp,ga[Jt.Shield],44,7,.1,.65,3,.5);break}}}update(t,e,n){this.time+=e,t&&t.hasMatch&&(this.floor.update(t.state.owner,e),this.cycles.update(t,e),this.trails.update(t,this.cycles.views,this.time)),this.fx.update(e),this.rig.update(this.camera,t,this.cycles.views,n,e),t&&t.hasMatch?this.pickups.update(t.state,this.camera,this.height,this.time):this.pickups.reset(),this.sky.update(this.camera.position,this.time),this.post.render(e)}}const R_=["engine_loop","turn","trail_start","capture","capture_big","kill","death","enemy_death","countdown","go","ui_click","ui_back","respawn","warning","round_win","round_end","music_game","music_menu"],C_={music_game:1435119,music_menu:940800,engine_loop:88200},P_=2112,L_=.5,I_=.22;class D_{ctx=null;sfxBus=null;musicBus=null;clips=new Map;loading=null;baseUrl;musicOn=!0;sfxOn=!0;wantMusic=null;music=null;engine=null;enginePitch=1;hidden=!1;constructor(t){this.baseUrl=t.endsWith("/")?t:`${t}/`}preload(){return this.loading||(this.loading=this.loadAll()),this.loading}unlock(){if(!this.ctx){const t=window.AudioContext??window.webkitAudioContext;if(!t)return;try{this.ctx=new t({latencyHint:"interactive"})}catch(n){console.warn("[neon] audio unavailable:",n);return}this.sfxBus=this.ctx.createGain(),this.musicBus=this.ctx.createGain(),this.sfxBus.connect(this.ctx.destination),this.musicBus.connect(this.ctx.destination);const e=this.ctx.createBufferSource();e.buffer=this.ctx.createBuffer(1,1,22050),e.connect(this.ctx.destination),e.start(0),this.preload().then(()=>this.syncMusic())}this.ctx.state!=="running"&&!this.hidden&&this.ctx.resume().then(()=>this.syncMusic(),()=>{})}get unlocked(){return!!this.ctx&&this.ctx.state==="running"}setEnabled(t,e){this.musicOn=t,this.sfxOn=e,e||this.stopEngine(),this.syncMusic()}play(t,e=1,n=1){const s=this.ctx;if(!this.sfxOn||!s||s.state!=="running"||!this.sfxBus)return;const r=this.clips.get(t);if(!r)return;const a=s.createBufferSource();a.buffer=r.buffer,a.playbackRate.value=n;const o=s.createGain();o.gain.value=e,a.connect(o).connect(this.sfxBus),a.start(0,r.start),a.onended=()=>o.disconnect()}setMusic(t){this.wantMusic!==t&&(this.wantMusic=t,this.syncMusic())}setEngine(t,e,n){const s=this.ctx,r=t&&this.sfxOn&&!!s&&s.state==="running"&&this.clips.has("engine_loop");if(r&&!this.engine&&s&&this.sfxBus?(this.engine=this.startLoop("engine_loop",this.sfxBus,I_,.4),this.enginePitch=1):!r&&this.engine&&this.stopEngine(),this.engine){const a=e?1.12:1;this.enginePitch+=(a-this.enginePitch)*Math.min(1,n*3),this.engine.src.playbackRate.value=this.enginePitch}}setHidden(t){this.hidden=t,this.ctx&&(t?this.ctx.suspend().catch(()=>{}):this.ctx.resume().then(()=>this.syncMusic(),()=>{}))}stopEngine(){this.engine&&(this.fadeOutAndStop(this.engine,.3),this.engine=null)}syncMusic(){if(!this.ctx||!this.musicBus)return;const e=this.musicOn?this.wantMusic:null;if(this.music&&this.music.name===e||(this.music&&(this.fadeOutAndStop(this.music,.8),this.music=null),!e||!this.clips.has(e)))return;const n=this.startLoop(e,this.musicBus,L_,1.2);n&&(this.music={...n,name:e})}startLoop(t,e,n,s){const r=this.ctx,a=this.clips.get(t);if(!r||!a)return null;const o=r.createBufferSource();o.buffer=a.buffer,o.loop=!0,o.loopStart=a.start,o.loopEnd=a.end;const l=r.createGain(),c=r.currentTime;return l.gain.setValueAtTime(0,c),l.gain.linearRampToValueAtTime(n,c+s),o.connect(l).connect(e),o.start(0,a.start),{src:o,gain:l}}fadeOutAndStop(t,e){const n=this.ctx;if(!n)return;const s=n.currentTime;t.gain.gain.cancelScheduledValues(s),t.gain.gain.setValueAtTime(t.gain.gain.value,s),t.gain.gain.linearRampToValueAtTime(0,s+e);try{t.src.stop(s+e+.05)}catch{}t.src.onended=()=>t.gain.disconnect()}async loadAll(){const t=window.OfflineAudioContext,e=t?new t(1,1,44100):null;await Promise.all(R_.map(async n=>{try{const s=await fetch(`${this.baseUrl}${n}.m4a`);if(!s.ok)throw new Error(`HTTP ${s.status}`);const r=await s.arrayBuffer(),a=e??await this.waitForContext(),o=await new Promise((l,c)=>{a.decodeAudioData(r,l,c)?.catch?.(c)});this.clips.set(n,U_(n,o))}catch(s){console.warn(`[neon] sound ${n} unavailable:`,s)}})),this.syncMusic()}waitForContext(){return new Promise(t=>{const e=()=>{this.ctx?t(this.ctx):setTimeout(e,100)};e()})}}function U_(i,t){const e=t.sampleRate,n=t.length,s=Math.round(P_*e/44100),r=t.getChannelData(0),a=(c,h)=>{for(let u=0;u<Math.min(h,n);u++)if(Math.abs(r[u])>c)return u;return Math.min(h,n)},o=C_[i];if(o!==void 0){const c=Math.min(Math.round(o*e/44100),n);let h=0;return n-c>=Math.round(s*.9)&&a(.02,s*2)>=s*.7&&(h=Math.min(s,n-c)),{buffer:t,start:h/e,end:(h+c)/e}}const l=Math.min(a(1e-4,s+1),s);return{buffer:t,start:l/e,end:n/e}}const N_=1.4;class F_{engine;lastWarning=-100;constructor(t){this.engine=t}handleEvent(t,e,n){if(n==="attract")return;const s=e.localSlot,r=this.engine;switch(t.type){case qt.Countdown:r.play("countdown",.5);break;case qt.Go:r.play("go",.9);break;case qt.RoundEnd:r.play(s>=0&&t.other===s?"round_win":"round_end",.9);break;case qt.Spawn:t.slot===s&&r.play("respawn",.7);break;case qt.TrailStart:t.slot===s&&r.play("trail_start",.45);break;case qt.Capture:t.slot===s&&r.play(t.value>=40?"capture_big":"capture",.85,Math.min(1.15,Math.max(.9,.9+t.value/400)));break;case qt.Death:t.slot===s?r.play("death",1):s>=0&&t.other===s?r.play("kill",.9):r.play("enemy_death",.45);break;case qt.Pickup:t.slot===s&&r.play(t.value===Jt.Shield?"respawn":"capture",.65,1.25);break;case qt.ShieldBlock:(t.slot===s||t.other===s)&&r.play("capture_big",.65,.85);break}}update(t,e,n,s,r){this.engine.setMusic(e==="attract"?"music_menu":"music_game");const a=t?t.localSlot:-1,o=t&&a>=0&&t.hasMatch?t.state.cycles[a]:null,l=e!=="attract"&&!!o&&o.alive&&t.state.phase===oe.Playing;this.engine.setEngine(l,!!o&&o.trail.length>0,r),n&&e!=="attract"&&s-this.lastWarning>N_&&(this.lastWarning=s,this.engine.play("warning",.55))}steer(){this.engine.play("turn",.25,.95+Math.random()*.1)}click(){this.engine.play("ui_click",.6)}back(){this.engine.play("ui_back",.6)}}function K(i,t="",e={},...n){const s=document.createElement(i);t&&(s.className=t);for(const[r,a]of Object.entries(e))a===void 0||a===!1||s.setAttribute(r,a===!0?"":String(a));for(const r of n)s.append(r);return s}function Ct(i,t){i.textContent!==t&&(i.textContent=t)}function se(i,t,e){i.style.getPropertyValue(t)!==e&&i.style.setProperty(t,e)}function ie(i,t){i.hidden===t&&(i.hidden=!t)}function xs(i){const t=i*100/$t;return t>0&&t<1?`${t.toFixed(2)}%`:`${t.toFixed(1)}%`}function O_(i){return`${(i*100/$t).toFixed(1)}%`}function Tc(i){return`${Math.floor(i/10)}.${i%10}%`}function k_(i){const t=Math.max(0,Math.floor(i));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`}const pr=i=>{const t=Math.min(Math.max(i,0),1);return t<=.0031308?t*12.92:1.055*Math.pow(t,1/2.4)-.055};function ki(i,t,e,n=1){const s=r=>Math.round(pr(r)*255);return n>=1?`rgb(${s(i)} ${s(t)} ${s(e)})`:`rgb(${s(i)} ${s(t)} ${s(e)} / ${n})`}function vh(i){const t=an[Math.min(Math.max(i,0),an.length-1)];return[Math.max(t[0],.12),Math.max(t[1],.12),Math.max(t[2],.12)]}const Ec=an.map((i,t)=>{const e=vh(t);return ki(e[0],e[1],e[2])});function ai(i){return Ec[Math.min(Math.max(i,0),Ec.length-1)]}function bc(i,t,e){return[Math.round(pr(i)*255),Math.round(pr(t)*255),Math.round(pr(e)*255)]}const Oe={cyan:ki(0,.88,1),magenta:ki(1,.12,.78),amber:ki(1,.68,.1),ink:ki(.9,.95,1),dim:ki(.42,.52,.68)};function _a(i){return i===Jt.Turbo?"pickup-turbo":i===Jt.Shield?"pickup-shield":"pickup-charge"}class B_{root;ctx;image;dots=[];pickups=[];territory=new Uint8Array((pt+1)*3);trail=new Uint8Array((pt+1)*3);lastTick=-1;lastState=null;constructor(){const t=K("canvas","minimap-canvas",{width:Bt,height:Bt,"aria-hidden":"true"}),e=K("div","minimap-dots"),n=K("div","minimap-pickups",{"aria-hidden":"true"});for(let s=0;s<Es;s++){const r=K("span","pickup-icon minimap-pickup");r.hidden=!0,this.pickups.push(r),n.append(r)}for(let s=0;s<pt;s++){const r=K("div","minimap-dot");r.hidden=!0,this.dots.push(r),e.append(r)}this.root=K("div","minimap",{role:"img","aria-label":"Arena minimap. Amber lightning: turbo. Cyan shield: lethal trail protection. Green battery: boost charges. White and gold trails are shielded."},t,n,e),this.ctx=t.getContext("2d"),this.image=this.ctx?this.ctx.createImageData(Bt,Bt):null;for(let s=0;s<pt;s++){const[r,a,o]=vh(s);this.territory.set(bc(r*.8,a*.8,o*.8),(s+1)*3),this.trail.set(bc(r+(1-r)*.45,a+(1-a)*.45,o+(1-o)*.45),(s+1)*3)}}reset(){this.lastTick=-1,this.lastState=null}update(t){const e=t.state;for(let a=0;a<this.pickups.length;a++){const o=e.pickups[a],l=this.pickups[a];if(ie(l,!!o&&o.expiresTick>e.tick),!o)continue;const c=`pickup-icon minimap-pickup ${_a(o.kind)}`;l.className!==c&&(l.className=c),se(l,"left",`${((Dn(o.cell)+.5)/Bt*100).toFixed(2)}%`),se(l,"top",`${((1-(In(o.cell)+.5)/Bt)*100).toFixed(2)}%`)}(e.tick!==this.lastTick||e!==this.lastState)&&(this.lastTick=e.tick,this.lastState=e,this.paint(t));const n=t.localSlot,s=t.previousState,r=Math.min(Math.max(t.tickAlpha,0),1);for(let a=0;a<pt;a++){const o=e.cycles[a],l=this.dots[a];if(!o||!o.active||!o.alive){ie(l,!1);continue}const c=s.cycles[a],h=!!c&&c.active&&c.alive&&c.spawnTick===o.spawnTick,u=h?c.x+(o.x-c.x)*r:o.x,f=h?c.y+(o.y-c.y)*r:o.y;ie(l,!0),l.classList.toggle("me",a===n),se(l,"left",`${((f+.5)/Bt*100).toFixed(2)}%`),se(l,"top",`${((1-(u+.5)/Bt)*100).toFixed(2)}%`),se(l,"background",a===n?"#fff":ai(a))}}paint(t){if(!this.ctx||!this.image)return;const e=t.state,n=this.image.data;for(let s=0;s<$t;s++){const r=In(s),a=Dn(s),o=((Bt-1-r)*Bt+a)*4,l=e.trail[s],c=e.owner[s];if(l!==0&&l<=pt){if(e.cycles[l-1].alive&&e.cycles[l-1].shieldUntilTick>e.tick){const u=(r+a+Math.floor(e.tick/2))%4<2;n[o]=255,n[o+1]=u?215:255,n[o+2]=u?85:240}else n[o]=this.trail[l*3],n[o+1]=this.trail[l*3+1],n[o+2]=this.trail[l*3+2];n[o+3]=255}else c!==0&&c<=pt?(n[o]=this.territory[c*3],n[o+1]=this.territory[c*3+1],n[o+2]=this.territory[c*3+2],n[o+3]=255):n[o+3]=0}this.ctx.putImageData(this.image,0,0)}}const ar=6,z_=4,H_=16,Ac=1.3;function G_(i,t){switch(i){case de.Cut:return`TRAIL CUT BY ${t}`;case de.Wall:return"YOU HIT THE GRID WALL";case de.SelfCut:return"YOU CROSSED YOUR OWN TRAIL";case de.Collision:return t?`HEAD-ON WITH ${t}`:"HEAD-ON COLLISION";case de.Erased:return t?`${t} TOOK ALL YOUR LAND`:"YOUR LAND WAS ERASED";case de.Shield:return t?`HIT ${t}'S SHIELDED TRAIL`:"HIT A SHIELDED TRAIL";default:return""}}function V_(i,t,e){switch(i){case de.Cut:return`${t}  CUT  ${e}`;case de.Wall:return`${e}  HIT THE WALL`;case de.SelfCut:return`${e}  CUT THEMSELF`;case de.Collision:return`${e}  CRASHED`;case de.Erased:return t?`${t}  ERASED  ${e}`:`${e}  ERASED`;case de.Shield:return`${e}  HIT  ${t}'S SHIELDED TRAIL`;default:return""}}class W_{root;host;board;rows=[];timer;roundInfo;status;minimap=new B_;netInfo;bigWrap;big;bigSub;bigTimer=0;bigDuration=0;bigText="";popup;popupTimer=0;toast;toastTitle;toastText;toastTimer=0;feed=[];danger;stats;hint;boostButton;boostLabel;boostDetail;turboStatus;turboTime;shieldStatus;shieldTime;hintTimer=0;dangerClock=0;results;resultsTitle;resultRows=[];resultsFooter;pausePanel;cameraButton;qualityButton;botsButton;botsHelp;boostHelp;botsEnabled=!0;resumeButton;pausedState=!1;deathText="";constructor(t){this.host=t,this.board=K("div","hud-board",{"aria-label":"Grid control"},K("div","board-title",{},"GRID CONTROL"));for(let u=0;u<ar;u++){const f={root:K("div","board-row"),chip:K("span","board-chip"),name:K("span","board-name"),value:K("span","board-value")};f.root.append(f.chip,f.name,f.value),this.rows.push(f),this.board.append(f.root)}this.timer=K("div","hud-timer",{},"2:30"),this.roundInfo=K("div","hud-round"),this.status=K("div","hud-status",{role:"status"});const e=K("div","hud-top",{},this.timer,this.roundInfo,this.status);this.netInfo=K("div","hud-net");const n=K("button","btn btn-cyan btn-menu",{type:"button"},"MENU");n.addEventListener("click",()=>{this.host.click(),this.togglePause()});const s=K("div","hud-right",{},K("div","minimap-frame",{},this.minimap.root),this.netInfo,n);this.big=K("div","big-text",{"aria-live":"polite"}),this.bigSub=K("div","big-sub"),this.bigWrap=K("div","hud-big",{},this.big,this.bigSub),this.bigWrap.hidden=!0,this.popup=K("div","hud-popup"),this.popup.hidden=!0,this.toastTitle=K("div","toast-title"),this.toastText=K("div","toast-text"),this.toast=K("div","hud-toast",{role:"alert"},this.toastTitle,this.toastText),this.toast.hidden=!0;const r=K("div","hud-feed");for(let u=0;u<z_;u++){const f=K("div","feed-line");this.feed.push({el:f,age:99}),r.append(f)}this.danger=K("div","hud-danger",{},"TRAIL EXPOSED - GET HOME"),this.danger.hidden=!0,this.stats=K("div","hud-stats"),this.hint=K("div","hud-hint");const a=K("div","hud-bottom",{},this.danger,this.stats,this.hint);this.boostLabel=K("span","boost-label",{},"BOOST × 1"),this.boostDetail=K("span","boost-detail"),this.boostButton=K("button","btn btn-amber hud-boost",{type:"button",disabled:!0},this.boostLabel,this.boostDetail),this.boostButton.addEventListener("click",()=>{this.host.click(),this.host.boost()}),this.turboTime=K("span","powerup-time"),this.turboStatus=K("div","powerup-status turbo-status",{},K("span","pickup-icon pickup-turbo",{"aria-hidden":"true"}),K("div","",{},this.turboTime,K("div","powerup-detail",{},"3× SPEED"))),this.shieldTime=K("span","powerup-time"),this.shieldStatus=K("div","powerup-status shield-status",{},K("span","pickup-icon pickup-shield",{"aria-hidden":"true"}),K("div","",{},this.shieldTime,K("div","powerup-detail",{},"LETHAL TRAIL"))),this.turboStatus.hidden=this.shieldStatus.hidden=!0;const o=K("div","hud-powerups",{"aria-label":"Active pickup effects"},this.turboStatus,this.shieldStatus);this.resultsTitle=K("div","results-title");const l=K("div","results-table");for(let u=0;u<pt;u++){const f={root:K("div","results-row"),rank:K("span","r-rank"),name:K("span","r-name"),pct:K("span","r-pct"),cuts:K("span","r-cuts"),best:K("span","r-best")};f.root.append(f.rank,f.name,f.pct,f.cuts,f.best),this.resultRows.push(f),l.append(f.root)}this.resultsFooter=K("div","results-footer"),this.results=K("div","hud-results",{role:"region","aria-label":"Round results"},this.resultsTitle,l,this.resultsFooter),this.results.hidden=!0,this.resumeButton=K("button","btn btn-cyan btn-wide",{type:"button"},"RESUME"),this.resumeButton.addEventListener("click",()=>{this.host.click(),this.setPaused(!1)}),this.cameraButton=K("button","btn btn-amber btn-wide",{type:"button"},"CAMERA: CHASE"),this.cameraButton.addEventListener("click",()=>{this.host.click(),this.host.toggleCamera()}),this.qualityButton=K("button","btn btn-gray btn-wide",{type:"button"},"GRAPHICS: HIGH"),this.qualityButton.addEventListener("click",()=>{this.host.click(),this.host.toggleQuality()}),this.botsButton=K("button","btn btn-gray btn-wide",{type:"button"},"BOTS: ON"),this.botsButton.addEventListener("click",()=>{this.host.click(),this.host.setBotsEnabled(!this.botsEnabled)}),this.botsHelp=K("div","pause-sub bots-help"),this.boostHelp=K("div","pause-sub boost-help");const c=K("section","pickup-legend",{"aria-label":"Grid pickups"},K("div","pickup-legend-title",{},"GRID PICKUPS · RIDE OVER TO COLLECT"));for(const[u,f,d]of[[Jt.Turbo,"TURBO",`AUTOMATIC 3× SPEED FOR ${gr/Kt} SECONDS.`],[Jt.Shield,"TRAIL SHIELD",`UNBREAKABLE TRAIL FOR ${_r/Kt} SECONDS. ENEMIES WHO CROSS IT CRASH. WALLS, YOUR OWN TRAIL AND OTHER HEAD-ON CRASHES STILL KILL.`],[Jt.Charge,"BOOST BATTERY","+2 CHARGES FOR YOUR BOOST BUTTON."]])c.append(K("div","pickup-legend-row",{},K("span",`pickup-icon ${_a(u)}`,{"aria-hidden":"true"}),K("div","",{},K("div",`pickup-legend-name ${_a(u)}`,{},f),K("div","pickup-legend-detail",{},d))));const h=K("button","btn btn-magenta btn-wide",{type:"button"},"LEAVE MATCH");h.addEventListener("click",()=>{this.host.click(),this.setPaused(!1),this.host.leaveMatch()}),this.pausePanel=K("div","pause-backdrop",{},K("div","pause-panel",{role:"dialog","aria-modal":"true","aria-label":"Menu"},K("div","pause-title",{},"MENU"),K("div","pause-sub",{},"THE GRID KEEPS RUNNING WHILE THIS IS OPEN"),this.resumeButton,this.cameraButton,this.qualityButton,this.botsButton,this.botsHelp,this.boostHelp,c,h)),this.pausePanel.hidden=!0,this.pausePanel.addEventListener("pointerdown",u=>{u.target===this.pausePanel&&this.setPaused(!1)}),this.root=K("div","hud",{},this.board,e,s,this.bigWrap,this.popup,this.toast,r,a,this.boostButton,o,this.results,this.pausePanel),this.root.hidden=!0}get paused(){return this.pausedState}togglePause(){this.setPaused(!this.pausedState)}setPaused(t){t!==this.pausedState&&(this.pausedState=t,this.pausePanel.hidden=!t,t?this.resumeButton.focus({preventScroll:!0}):this.pausePanel.contains(document.activeElement)&&document.activeElement.blur(),this.host.pauseChanged(t))}onSessionStarted(){this.bigTimer=0,this.bigText="",this.popupTimer=0,this.hintTimer=H_,this.deathText="",this.setPaused(!1);for(const t of this.feed)t.age=99,Ct(t.el,"");this.minimap.reset(),this.bigWrap.hidden=!0,this.popup.hidden=!0,this.toastTimer=0,this.toast.hidden=!0}setVisible(t){ie(this.root,t),t||this.setPaused(!1)}showBig(t,e,n,s=""){this.bigText=t,Ct(this.big,t),Ct(this.bigSub,s),se(this.big,"color",e),this.big.classList.toggle("digits",/^\d$/.test(t)),this.bigTimer=this.bigDuration=n}showToast(t,e,n=4.5,s=Oe.amber){Ct(this.toastTitle,t),Ct(this.toastText,e),se(this.toast,"--notice-color",s),this.toastTimer=n,se(this.toast,"opacity","1"),ie(this.toast,!0)}showPopup(t,e){Ct(this.popup,t),se(this.popup,"color",e),this.popupTimer=Ac}addFeed(t,e){for(let s=0;s+1<this.feed.length;s++){const r=this.feed[s],a=this.feed[s+1];Ct(r.el,a.el.textContent??""),se(r.el,"color",a.el.style.color),r.age=a.age}const n=this.feed[this.feed.length-1];Ct(n.el,t),se(n.el,"color",e),n.age=0}handleEvent(t,e,n){if(n==="attract")return;const s=e.localSlot,r=e.state;switch(t.type){case qt.Countdown:this.showBig(String(t.value),Oe.ink,.95,t.value===3?`ROUND ${Math.max(1,r.round)}`:"");break;case qt.Go:this.showBig("GO!",Oe.cyan,.9,"CLAIM THE GRID");break;case qt.Death:{const a=e.slotName(t.slot),o=t.other>=0?e.slotName(t.other):"",l=V_(t.value,o,a);l&&this.addFeed(`${l}${s>=0&&t.other===s&&t.slot!==s?"  +1 BOOST":""}`,ai(t.other>=0?t.other:t.slot)),t.slot===s?(this.deathText=G_(t.value,o),this.showBig("FLATLINED",Oe.magenta,2.4,this.deathText)):s>=0&&t.other===s&&this.showPopup("+1 BOOST",Oe.amber);break}case qt.Capture:t.slot===s&&t.value>0&&this.showPopup(`+${xs(t.value)}`,ai(s));break;case qt.Spawn:t.slot===s&&r.phase===oe.Playing&&r.cycles[s]?.deaths>0&&this.showBig("REBOOTED",Oe.cyan,1,"BACK ON THE GRID · +1 BOOST");break;case qt.Pickup:if(t.slot!==s)break;t.value===Jt.Turbo?this.showToast("TURBO ONLINE",`AUTOMATIC 3× SPEED · ${gr/Kt} SECONDS`,3,Oe.amber):t.value===Jt.Shield?this.showToast("TRAIL SHIELDED",`${_r/Kt} SECONDS · ENEMIES CROSSING YOUR TRAIL CRASH`,3,"#fff3ac"):t.value===Jt.Charge&&this.showToast("+2 BOOST CHARGES","READY ON YOUR BOOST BUTTON",2.5,"#8eff75");break;case qt.ShieldBlock:t.slot===s&&this.showToast("TRAIL DEFENDED","ENEMY CRASHED ON YOUR SHIELDED TRAIL",2,"#fff3ac");break}}update(t,e,n){if(n.mode==="attract")return;const s=t.state,r=t.localSlot,a=t.hasMatch;if(ie(this.board,a),a&&(this.updateBoard(t),this.minimap.update(t)),s.phase===oe.Countdown)Ct(this.timer,"READY"),this.timer.classList.remove("urgent");else if(s.phase===oe.Playing){const g=s.phaseEndTick-s.tick;Ct(this.timer,k_(Math.ceil(g/Kt))),this.timer.classList.toggle("urgent",g<10*Kt)}else Ct(this.timer,"0:00");if(Ct(this.roundInfo,`ROUND ${Math.max(1,s.round)}  -  ${n.roomLabel}`),Ct(this.status,t.statusText),ie(this.status,t.statusText!==""),t.isOnline){const g=t.role==="host"?"HOST":"LINKED",_=t.role==="client"?`  ${t.pingMs}MS`:"";Ct(this.netInfo,`${g}  ${t.peerCount} PILOTS${_}`)}else Ct(this.netInfo,"OFFLINE - VS BOTS");Ct(this.cameraButton,n.overhead?"CAMERA: OVERHEAD":"CAMERA: CHASE"),Ct(this.qualityButton,`GRAPHICS: ${n.quality.toUpperCase()}`),this.botsEnabled=t.botsEnabled,Ct(this.botsButton,`BOTS: ${this.botsEnabled?"ON":"OFF"}`),this.botsButton.setAttribute("aria-pressed",String(this.botsEnabled)),this.botsButton.disabled=t.role!=="host",Ct(this.botsHelp,t.role==="host"?"CHANGES APPLY TO EVERYONE IN THIS ROOM.":"THE HOST CONTROLS THIS ROOM'S BOTS."),ie(this.botsButton,t.isOnline),ie(this.botsHelp,t.isOnline);const o=Ma/Kt;Ct(this.boostHelp,`${n.touch?"TAP BOOST":"SPACE / SHIFT TO BOOST"}: 2× SPEED FOR ${o} SECONDS. START EACH ROUND WITH 1 CHARGE. EVERY KILL OR RESPAWN EARNS +1.`);const l=r>=0&&a?s.cycles[r]:null,c=!!l?.alive&&s.phase===oe.Playing&&l.turboUntilTick>s.tick,h=!!l?.alive&&s.phase===oe.Playing&&l.shieldUntilTick>s.tick;if(ie(this.turboStatus,c),ie(this.shieldStatus,h),c&&l){const g=Math.max(0,(l.turboUntilTick-s.tick-t.tickAlpha)/Kt);Ct(this.turboTime,`TURBO ${g.toFixed(1)}s`)}if(h&&l){const g=Math.max(0,(l.shieldUntilTick-s.tick-t.tickAlpha)/Kt);Ct(this.shieldTime,`SHIELD ${g.toFixed(1)}s`)}const u=!!l?.alive&&s.phase===oe.Playing&&l.boostUntilTick>s.tick,f=l?.boostCharges??0;ie(this.boostButton,!!l?.active),this.boostButton.disabled=!l?.alive||s.phase!==oe.Playing||f<=0||u||c||this.pausedState,this.boostButton.classList.toggle("boost-active",u),Ct(this.boostLabel,`BOOST × ${f}`);let d=n.touch?`2× SPEED · ${o} SEC`:`SPACE / SHIFT · ${o} SEC`;if(c?d="TURBO ACTIVE":u&&l?d=`2× SPEED · ${Math.max(0,(l.boostUntilTick-s.tick-t.tickAlpha)/Kt).toFixed(1)}s`:s.phase!==oe.Playing?d=s.phase===oe.Countdown?"READY AT GO":"NEXT ROUND":l?.alive?f<=0&&(d="KILL / RESPAWN: +1"):d="WAIT FOR REBOOT",Ct(this.boostDetail,d),this.boostButton.setAttribute("aria-label",`Boost, ${f} ${f===1?"charge":"charges"}. ${d}`),l){if(l.active&&!l.alive&&s.phase===oe.Playing&&l.respawnTick>s.tick){const g=Math.max(0,(l.respawnTick-s.tick-t.tickAlpha)/Kt),_=`${this.deathText}${this.deathText?"   -   ":""}REBOOT IN ${g.toFixed(1)}`;this.bigTimer>0&&this.bigText==="FLATLINED"?(Ct(this.bigSub,_),this.bigTimer=Math.max(this.bigTimer,.45)):this.showBig("FLATLINED",Oe.magenta,.6,_)}Ct(this.stats,`YOU  ${xs(l.area)}   -   ${l.kills} CUTS   -   BEST ${xs(l.bestArea)}`),se(this.stats,"color",ai(r)),ie(this.stats,!0)}else ie(this.stats,!1);if(this.bigTimer>0){this.bigTimer-=e;const g=1-this.bigTimer/Math.max(this.bigDuration,.01),_=1+.35*Math.max(0,1-g*5),m=Math.min(1,Math.max(0,this.bigTimer/.3));se(this.big,"transform",`scale(${_.toFixed(3)})`),se(this.bigWrap,"opacity",m.toFixed(3)),ie(this.bigWrap,!0)}else ie(this.bigWrap,!1);if(this.popupTimer>0){this.popupTimer-=e;const g=1-this.popupTimer/Ac;se(this.popup,"transform",`translate(-50%, calc(-50% - ${(g*70).toFixed(1)} * var(--s) * 1px))`),se(this.popup,"opacity",Math.min(1,Math.max(0,this.popupTimer/.4)).toFixed(3)),ie(this.popup,!0)}else ie(this.popup,!1);this.toastTimer>0&&(this.toastTimer-=e,se(this.toast,"opacity",Math.min(1,Math.max(0,this.toastTimer/.6)).toFixed(3)),ie(this.toast,this.toastTimer>0));for(const g of this.feed)g.age+=e,se(g.el,"opacity",Math.min(1,Math.max(0,1-(g.age-5)/1.5)).toFixed(3));if(this.hintTimer>0&&r>=0){this.hintTimer-=e;const g=n.overhead?n.touch?"SWIPE TO STEER  -  LEAVE YOUR ZONE, LOOP BACK HOME TO CLAIM IT":"ARROW KEYS / WASD TO STEER  -  LEAVE YOUR ZONE, LOOP BACK HOME TO CLAIM IT":n.touch?"SWIPE OR TAP LEFT / RIGHT TO TURN  -  LOOP BACK HOME TO CLAIM LAND":"LEFT / RIGHT OR A / D TO TURN  -  LOOP BACK HOME TO CLAIM LAND";Ct(this.hint,`${g}
${n.touch?"TAP BOOST":"SPACE / SHIFT TO BOOST"}  -  KILL OR RESPAWN FOR +1 BOOST`),se(this.hint,"opacity",Math.min(1,Math.max(0,this.hintTimer/1.5)).toFixed(3)),ie(this.hint,!0)}else ie(this.hint,!1);n.trailThreatened?(this.dangerClock+=e,se(this.danger,"opacity",(.55+.45*Math.abs(Math.sin(this.dangerClock*9))).toFixed(3)),ie(this.danger,!0)):(this.dangerClock=0,ie(this.danger,!1)),this.updateResults(t)}updateBoard(t){const e=t.state,n=t.localSlot,s=Sr(e);n>=0&&s.indexOf(n)>=ar&&(s.splice(s.indexOf(n),1),s.splice(ar-1,0,n));for(let r=0;r<ar;r++){const a=this.rows[r],o=r<s.length;if(ie(a.root,o),!o)continue;const l=s[r],c=e.cycles[l],h=ai(l);se(a.chip,"background",h);const u=t.isHumanSlot(l)&&l!==n;Ct(a.name,`${t.slotName(l)}${u?" *":""}`),se(a.name,"color",l===n?h:c.alive?Oe.ink:Oe.dim),Ct(a.value,O_(c.area)),se(a.value,"color",l===n?h:Oe.ink),a.root.classList.toggle("me",l===n)}}updateResults(t){const e=t.state;if(e.phase!==oe.Results||!t.hasMatch){ie(this.results,!1);return}ie(this.results,!0);const n=t.localSlot;e.winner>=0&&e.winner===n?(Ct(this.resultsTitle,"YOU OWN THE GRID"),se(this.resultsTitle,"color",Oe.cyan)):e.winner>=0?(Ct(this.resultsTitle,`${t.slotName(e.winner)} WINS`),se(this.resultsTitle,"color",ai(e.winner))):(Ct(this.resultsTitle,"ROUND OVER"),se(this.resultsTitle,"color",Oe.ink));const s=Sr(e);for(let a=0;a<this.resultRows.length;a++){const o=this.resultRows[a],l=a<s.length;if(ie(o.root,l),!l)continue;const c=s[a],h=e.cycles[c];Ct(o.rank,`${a+1}.`),Ct(o.name,t.slotName(c)),Ct(o.pct,xs(h.area)),Ct(o.cuts,`${h.kills} CUTS`),Ct(o.best,`BEST ${xs(h.bestArea)}`),se(o.root,"color",c===n?ai(c):Oe.ink)}const r=Math.max(0,Math.floor((e.phaseEndTick-e.tick)/Kt)+1);Ct(this.resultsFooter,`NEXT ROUND IN ${r}`)}}const va=12,xh=6,X_=["LEAVE YOUR ZONE TO DRAW A LIGHT TRAIL","RETURN HOME TO CLAIM EVERYTHING YOU CIRCLED","CROSS A RIVAL'S TRAIL TO FLATLINE THEM","...BUT IF THEY CROSS YOURS, YOU'RE DONE","BOOST FOR DOUBLE SPEED - KILL OR RESPAWN TO RECHARGE","RIDE THROUGH GLOWING PICKUPS FOR EXTRA POWERS"];function mr(i){return i.toUpperCase().replace(/[^A-Z0-9 _-]/g,"").slice(0,va)}function Rr(i){return i.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,xh)}function cn(i,t,e){const n=K("button",`btn ${t}`,{type:"button"},i);return n.addEventListener("click",e),n}class q_{root;host;nameInput;codeInput;mainCol;friendsCol;camToggle;musicToggle;sfxToggle;botsToggles=[];topList;footer;constructor(t){this.host=t;const e=t.actions,n=K("h1","title",{},K("span","title-a",{"data-text":"NEON"},"NEON"),K("span","title-b",{"data-text":"CIRCUIT"},"CIRCUIT")),s=K("p","tagline",{},"CLOSE THE LOOP  //  CLAIM THE GRID"),r=K("ul","rules");for(const h of X_)r.append(K("li","",{},h));this.topList=K("ol","top-list",{"aria-live":"polite"}),this.setTopPilotsPending();const a=K("div","rules-panel",{},r,K("h2","top-title",{},"TODAY'S TOP PILOTS"),this.topList),o=K("div","menu-left",{},n,s,a);this.nameInput=K("input","field name-field",{id:"nc-callsign",type:"text",maxlength:va,autocomplete:"off",autocapitalize:"characters",spellcheck:"false",enterkeyhint:"done",placeholder:"YOUR NAME","aria-label":"Callsign"}),this.nameInput.addEventListener("input",()=>this.cleanInput(this.nameInput,mr)),this.nameInput.addEventListener("change",()=>this.commitName()),this.nameInput.addEventListener("keydown",h=>{h.key==="Enter"&&this.nameInput.blur()}),this.camToggle=cn("","btn-gray btn-toggle",()=>{this.host.click(),e.settings().overheadCamera=!e.settings().overheadCamera,this.saveToggles()}),this.musicToggle=cn("","btn-gray btn-toggle",()=>{this.host.click(),e.settings().music=!e.settings().music,this.saveToggles()}),this.sfxToggle=cn("","btn-gray btn-toggle",()=>{e.settings().sfx=!e.settings().sfx,this.saveToggles(),this.host.click()});const l=()=>{const h=cn("","btn-gray btn-bots",()=>{this.host.click(),e.settings().multiplayerBots=!e.settings().multiplayerBots,this.saveToggles()});return this.botsToggles.push(h),K("div","bots-option",{},h,K("p","bots-note",{},"FOR ROOMS YOU HOST. JOINED ROOMS USE THE HOST'S SETTING."))};this.mainCol=K("div","menu-col main-col",{},K("label","field-label",{for:"nc-callsign"},"CALLSIGN"),this.nameInput,l(),cn("QUICK MATCH","btn-cyan btn-hero",()=>{this.host.click(),this.commitName(),e.startQuickMatch()}),cn("PLAY WITH FRIENDS","btn-magenta",()=>{this.host.click(),this.showFriends(!0)}),cn("PRACTICE VS BOTS","btn-amber",()=>{this.host.click(),this.commitName(),e.startPractice()}),K("div","toggles",{},this.camToggle,this.musicToggle,this.sfxToggle)),this.codeInput=K("input","field code-field",{id:"nc-room-code",type:"text",maxlength:xh,autocomplete:"off",autocapitalize:"characters",spellcheck:"false",enterkeyhint:"go",placeholder:"CODE","aria-label":"Room code"}),this.codeInput.addEventListener("input",()=>this.cleanInput(this.codeInput,Rr)),this.codeInput.addEventListener("keydown",h=>{h.key==="Enter"&&this.joinRoom()}),this.friendsCol=K("div","menu-col friends-col",{},K("h2","friends-title",{},"PRIVATE GRID"),K("p","friends-sub",{},"SAME CODE = SAME GRID. SHARE IT WITH FRIENDS."),l(),this.codeInput,cn("JOIN ROOM","btn-magenta",()=>this.joinRoom()),cn("CREATE NEW ROOM","btn-cyan",()=>{this.host.click(),this.commitName(),e.startRoom(e.makeRoomCode())}),cn("BACK","btn-gray btn-back",()=>{this.host.back(),this.showFriends(!1)})),this.friendsCol.hidden=!0;const c=K("div","menu-right",{role:"group","aria-label":"Play"},this.mainCol,this.friendsCol);this.footer=K("footer","menu-footer"),this.root=K("section","menu",{"aria-label":"Neon Circuit"},K("div","menu-body",{},o,c),this.footer)}show(){this.root.hidden=!1,this.showFriends(!1);const t=this.host.actions.settings();this.nameInput.value=t.playerName,this.codeInput.value=t.lastRoomCode,this.updateLabels()}hide(){this.root.hidden=!0;const t=document.activeElement;t&&this.root.contains(t)&&t.blur()}setTopPilots(t){this.topList.replaceChildren();const e=(n,s="")=>{this.topList.append(K("li",s,{},n))};if(t===null){e("OFFLINE");return}if(t.length===0){e("NO ROUNDS YET TODAY - BE THE FIRST");return}t.slice(0,5).forEach((n,s)=>{const r=mr(n.player).padEnd(va," "),a=Tc(Math.max(0,Math.min(1e3,n.permille|0))).padStart(6," ");e(`${s+1}. ${r} ${a}${n.won?"  WIN":""}`,s===0?"lead":"")})}updateLabels(){const t=this.host.actions.settings();Ct(this.camToggle,t.overheadCamera?"CAM: TOP":"CAM: CHASE"),Ct(this.musicToggle,t.music?"MUSIC: ON":"MUSIC: OFF"),Ct(this.sfxToggle,t.sfx?"SFX: ON":"SFX: OFF"),this.camToggle.setAttribute("aria-pressed",String(t.overheadCamera)),this.musicToggle.setAttribute("aria-pressed",String(t.music)),this.sfxToggle.setAttribute("aria-pressed",String(t.sfx));for(const e of this.botsToggles)Ct(e,t.multiplayerBots?"MULTIPLAYER BOTS: ON":"MULTIPLAYER BOTS: OFF"),e.setAttribute("aria-pressed",String(t.multiplayerBots));Ct(this.footer,`BEST ${Tc(t.bestPermille)}   //   WINS ${t.roundsWon}/${t.roundsPlayed}   //   ${wh}`)}setTopPilotsPending(){this.topList.replaceChildren(K("li","",{},"CONNECTING..."))}saveToggles(){this.host.actions.saveSettings(),this.host.settingsChanged(),this.updateLabels()}showFriends(t){if(this.mainCol.hidden=t,this.friendsCol.hidden=!t,t){const e=this.host.actions.settings();this.codeInput.value||(this.codeInput.value=e.lastRoomCode)}}joinRoom(){this.host.click(),this.commitName(),this.host.actions.startRoom(Rr(this.codeInput.value))}commitName(){const t=mr(this.nameInput.value).trim(),e=this.host.actions.settings();t&&t!==e.playerName&&(e.playerName=t,this.host.actions.saveSettings()),this.nameInput.value=e.playerName}cleanInput(t,e){const n=e(t.value);if(n!==t.value){const s=Math.min(t.selectionStart??n.length,n.length);t.value=n,t.setSelectionRange(s,s)}}}class Y_{gestureLayer;hud;menu;root;constructor(t,e,n){this.root=t,this.gestureLayer=K("div","gesture-layer",{"aria-hidden":"true"}),this.hud=new W_(n),this.menu=new q_(e),t.append(this.gestureLayer,this.hud.root,this.menu.root)}setMode(t){t==="attract"?(this.hud.setVisible(!1),this.menu.show()):(this.menu.hide(),this.hud.setVisible(!0))}resize(t,e){const n=Math.min(1.25,Math.max(.5,Math.min(t/1920,e/1080)));this.root.style.setProperty("--s",n.toFixed(4)),this.root.classList.toggle("portrait",e>t),this.root.classList.toggle("compact",Math.min(t,e)<520)}}const wc=40,$_=30,K_=350;class j_{layer;handlers;tracks=new Map;constructor(t,e){this.layer=t,this.handlers=e,t.addEventListener("pointerdown",this.onDown),t.addEventListener("pointermove",this.onMove),t.addEventListener("pointerup",this.onUp),t.addEventListener("pointercancel",this.onCancel),t.addEventListener("lostpointercapture",this.onCancel),t.addEventListener("contextmenu",n=>n.preventDefault()),t.addEventListener("touchstart",n=>n.preventDefault(),{passive:!1}),window.addEventListener("keydown",this.onKey)}onDown=t=>{if(this.handlers.activity(),t.pointerType==="mouse"&&t.button!==0)return;t.preventDefault();const e=document.activeElement;e&&e.tagName==="INPUT"&&e.blur();try{this.layer.setPointerCapture(t.pointerId)}catch{}this.tracks.set(t.pointerId,{ox:t.clientX,oy:t.clientY,ax:t.clientX,ay:t.clientY,t0:performance.now(),swiped:!1})};onMove=t=>{const e=this.tracks.get(t.pointerId);if(!e)return;const n=t.clientX-e.ax,s=t.clientY-e.ay;if(n*n+s*s<wc*wc)return;const r=Math.abs(n)>Math.abs(s)?n>0?1:3:s>0?2:0;e.swiped=!0,e.ax=t.clientX,e.ay=t.clientY,this.handlers.steer(r)};onUp=t=>{const e=this.tracks.get(t.pointerId);if(!e)return;this.tracks.delete(t.pointerId);const n=performance.now()-e.t0<K_,s=Math.hypot(t.clientX-e.ox,t.clientY-e.oy);if(!e.swiped&&n&&s<$_){const r=this.layer.getBoundingClientRect();this.handlers.tap(t.clientX>r.left+r.width*.5)}};onCancel=t=>{this.tracks.delete(t.pointerId)};onKey=t=>{this.handlers.activity();const e=t.target;if(!!e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable)){t.key==="Escape"&&e.blur();return}if(t.metaKey||t.ctrlKey||t.altKey)return;let s=-1;switch(t.code){case"ArrowUp":case"KeyW":s=0;break;case"ArrowRight":case"KeyD":s=1;break;case"ArrowDown":case"KeyS":s=2;break;case"ArrowLeft":case"KeyA":s=3;break;case"KeyC":t.repeat||this.handlers.toggleCamera(),t.preventDefault();return;case"Space":if(e?.closest('button, a[href], [role="button"]'))return;t.repeat||this.handlers.boost(),t.preventDefault();return;case"ShiftLeft":case"ShiftRight":t.repeat||this.handlers.boost(),t.preventDefault();return;case"Escape":case"KeyP":t.repeat||this.handlers.toggleMenu(),t.preventDefault();return;default:return}t.preventDefault(),t.repeat||this.handlers.steer(s)}}const Sh="neon-circuit/settings/v1",Z_=30;function J_(){return{playerName:`RUNNER-${100+Math.floor(Math.random()*900)}`,overheadCamera:!1,music:!0,sfx:!0,multiplayerBots:!0,bestPermille:0,roundsPlayed:0,roundsWon:0,lastRoomCode:""}}function Q_(){const i=J_();let t=null;try{t=window.localStorage.getItem(Sh)}catch(e){return console.warn("[neon] settings storage unavailable, using defaults:",e),i}if(!t)return i;try{const e=JSON.parse(t);if(typeof e!="object"||e===null)throw new Error("not an object");const n=(a,o)=>typeof a=="boolean"?a:o,s=(a,o,l)=>typeof a=="number"&&Number.isFinite(a)?Math.min(l,Math.max(o,Math.floor(a))):o;return{playerName:(typeof e.playerName=="string"?mr(e.playerName).trim():"")||i.playerName,overheadCamera:n(e.overheadCamera,i.overheadCamera),music:n(e.music,i.music),sfx:n(e.sfx,i.sfx),multiplayerBots:n(e.multiplayerBots,i.multiplayerBots),bestPermille:s(e.bestPermille,0,1e3),roundsPlayed:s(e.roundsPlayed,0,1e9),roundsWon:s(e.roundsWon,0,1e9),lastRoomCode:typeof e.lastRoomCode=="string"?Rr(e.lastRoomCode):""}}catch(e){return console.warn("[neon] stored settings unreadable, using defaults. Stored value:",t,e),i}}class tv{session;mode="attract";roomLabel="";onlineStartedAt=0;lastRoundCounted=-1;trailThreatened=!1;lastFrame=performance.now()/1e3;hiddenTimer=null;topPilotsSeq=0;prefs;renderer;ui;audio;opts;touch;reducedMotion;constructor(t,e,n){this.opts=n,this.prefs=Q_(),this.touch=window.matchMedia?.("(pointer: coarse)").matches??!1,this.reducedMotion=window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,this.audio=new F_(new D_("./audio/")),this.ui=new Y_(e,{actions:this,click:()=>this.audio.click(),back:()=>this.audio.back(),settingsChanged:()=>this.applySettings()},{toggleCamera:()=>this.toggleCamera(),toggleQuality:()=>this.toggleQuality(),leaveMatch:()=>this.returnToTitle(),boost:()=>this.boost(),setBotsEnabled:s=>{this.session.role==="host"&&(this.session.setBotsEnabled(s),this.prefs.multiplayerBots=s,this.saveSettings())},click:()=>this.audio.click(),pauseChanged:()=>{}}),this.renderer=new w_(t,m_()),new j_(this.ui.gestureLayer,{steer:s=>this.steer(s),tap:s=>this.tap(s),boost:()=>this.boost(),toggleCamera:()=>this.toggleCamera(),toggleMenu:()=>{this.mode!=="attract"&&this.ui.hud.togglePause()},activity:()=>this.audio.engine.unlock()}),this.session=fl(),this.ui.setMode("attract"),this.ui.hud.onSessionStarted(),this.applySettings()}start(){this.audio.engine.preload();const t=()=>this.audio.engine.unlock();for(const n of["pointerdown","keydown","touchend","click"])window.addEventListener(n,t,{capture:!0,passive:!0});const e=()=>this.resize();window.addEventListener("resize",e),window.visualViewport?.addEventListener("resize",e),document.addEventListener("visibilitychange",()=>this.onVisibility()),window.addEventListener("pagehide",()=>this.session.shutdown()),window.addEventListener("pageshow",n=>{n.persisted&&this.returnToTitle()}),document.addEventListener("gesturestart",n=>n.preventDefault()),this.resize(),this.refreshTopPilots(),setInterval(()=>{this.mode==="attract"&&!document.hidden&&this.refreshTopPilots()},Z_*1e3),requestAnimationFrame(this.frame)}get currentSession(){return this.session}get currentMode(){return this.mode}startPractice(){const t=this.prefs.playerName;this.startSession("practice","PRACTICE",()=>fu(t))}startQuickMatch(){const t=this.prefs.playerName;this.startSession("online","QUICK MATCH",()=>dl(Rh,t,this.prefs.multiplayerBots))}startRoom(t){let e=Rr(t);e.length<3&&(e=this.makeRoomCode()),this.prefs.lastRoomCode=e,this.saveSettings();const n=this.prefs.playerName;this.startSession("online",`ROOM ${e}`,()=>dl(Ch(e),n,this.prefs.multiplayerBots))}makeRoomCode(){let t="";for(let e=0;e<4;e++)t+=Ja[Math.floor(Math.random()*Ja.length)];return t}returnToTitle(){this.startSession("attract","",fl),this.refreshTopPilots()}settings(){return this.prefs}saveSettings(){try{window.localStorage.setItem(Sh,JSON.stringify(this.prefs))}catch(t){console.warn("[neon] could not save settings:",t)}this.applySettings()}startSession(t,e,n){this.session.shutdown(),this.renderer.resetVisuals(),this.session=n(),this.mode=t,this.roomLabel=e,this.lastRoundCounted=-1,this.trailThreatened=!1,this.onlineStartedAt=performance.now()/1e3,this.ui.setMode(t),this.ui.hud.onSessionStarted();const s=document.activeElement;s&&s!==document.body&&s.blur()}applySettings(){this.audio.engine.setEnabled(this.prefs.music,this.prefs.sfx),this.ui.menu.updateLabels()}refreshTopPilots(){const t=++this.topPilotsSeq;pu(5).then(e=>{t===this.topPilotsSeq&&this.ui.menu.setTopPilots(e)})}canSteer(){return this.mode!=="attract"&&this.session.localSlot>=0&&this.session.hasMatch&&!this.ui.hud.paused}localAlive(){const t=this.session.localSlot;return t>=0&&!!this.session.state.cycles[t]?.alive}steer(t){if(this.canSteer()){if(this.prefs.overheadCamera)this.session.inputDirection(t);else if(t===1||t===3)this.session.inputTurn(t===1);else return;this.localAlive()&&this.audio.steer()}}tap(t){this.canSteer()&&(this.session.inputTurn(t),this.localAlive()&&this.audio.steer())}boost(){this.canSteer()&&this.session.inputBoost()}toggleCamera(){this.prefs.overheadCamera=!this.prefs.overheadCamera,this.saveSettings()}toggleQuality(){const t=this.renderer.quality==="high"?"low":"high";this.renderer.setQuality(t),__(t)}frame=()=>{requestAnimationFrame(this.frame);const t=performance.now()/1e3,e=Math.min(Math.max(t-this.lastFrame,0),.1);this.lastFrame=t,this.step(t,e,!0)};step(t,e,n){const s=this.session;if(s.tick(t),this.mode==="online"&&!s.hasMatch&&!s.linkJoined&&t-this.onlineStartedAt>Za){console.warn(`[neon] online: no match after ${Za} s and the link never joined; practice instead`),this.startPractice(),this.ui.hud.showToast("OFFLINE","CAN'T REACH THE GRID - PRACTICE MODE");return}for(const r of s.consumeEvents())n&&this.renderer.handleEvent(r,s),this.ui.hud.handleEvent(r,s,this.mode),n&&this.audio.handleEvent(r,s,this.mode),this.onGameEvent(r);this.opts.autopilot&&this.mode!=="attract"&&this.opts.autopilot.update(s),this.trailThreatened=this.checkTrailDanger(),n&&(this.renderer.update(s,e,{title:this.mode==="attract",overhead:this.prefs.overheadCamera}),this.ui.hud.update(s,e,{mode:this.mode,roomLabel:this.roomLabel,overhead:this.prefs.overheadCamera,quality:this.renderer.quality,trailThreatened:this.trailThreatened,touch:this.touch}),this.audio.update(s,this.mode,this.trailThreatened,t,e))}onGameEvent(t){if(this.mode==="attract")return;const e=this.session,n=e.localSlot;if(t.type===qt.Death){const s=this.reducedMotion?.35:1;t.slot===n?this.renderer.shake(s):n>=0&&t.other===n&&this.renderer.shake(.35*s)}else if(t.type===qt.RoundEnd&&n>=0&&this.lastRoundCounted!==e.state.round){this.lastRoundCounted=e.state.round;const s=t.other===n,r=e.state.cycles[n];this.prefs.roundsPlayed++,s&&this.prefs.roundsWon++,this.prefs.bestPermille=Math.max(this.prefs.bestPermille,Math.floor(r.bestArea*1e3/$t)),this.saveSettings(),this.opts.automation||du({room:this.mode==="online"?this.roomLabel:"PRACTICE",player:this.prefs.playerName,permille:Math.floor(r.area*1e3/$t),kills:r.kills,won:s,humans:Math.max(1,tu(e.state)-eu(e.state))})}}checkTrailDanger(){const t=this.session,e=t.localSlot;if(this.mode==="attract"||e<0||!t.hasMatch)return!1;const n=t.state,s=n.cycles[e];if(!s.alive||s.trail.length===0)return!1;for(let r=0;r<pt;r++){const a=n.cycles[r];if(!(r===e||!a.active||!a.alive)){for(const o of s.trail)if(Math.abs(In(o)-a.x)+Math.abs(Dn(o)-a.y)<=3)return!0}}return!1}resize(){const t=window.innerWidth,e=window.innerHeight;this.renderer.resize(t,e),this.ui.resize(t,e)}onVisibility(){const t=document.hidden;this.audio.engine.setHidden(t),t?this.hiddenTimer||(this.hiddenTimer=setInterval(()=>this.step(performance.now()/1e3,0,!1),250)):(this.hiddenTimer&&clearInterval(this.hiddenTimer),this.hiddenTimer=null,this.lastFrame=performance.now()/1e3)}}async function ev(){const i=new URLSearchParams(window.location.search),t=document.getElementById("scene"),e=document.getElementById("ui");if(!t||!e)throw new Error("index.html is missing #scene or #ui");const n=i.has("mock")&&await mu();i.has("mock")&&!n&&console.warn("[neon] ?mock is only available on the dev server");let s=null;if(i.has("autoplay")){const{Autopilot:o}=await Ah(async()=>{const{Autopilot:l}=await import("./autopilot-Cb013Syz.js");return{Autopilot:l}},[],import.meta.url);s=new o}const r=s!==null||n||i.has("noreport")||navigator.webdriver===!0;let a;try{a=new tv(t,e,{automation:r,autopilot:s})}catch(o){console.error("[neon] could not start the renderer:",o);const l=document.createElement("div");l.className="fatal",l.textContent="NEON CIRCUIT NEEDS WEBGL 2. TRY AN UP-TO-DATE CHROME, SAFARI OR FIREFOX.",e.replaceChildren(l);return}a.start(),i.has("dev")&&(window.__nc={app:a,renderer:a.renderer,ui:a.ui,audio:a.audio,get session(){return a.currentSession},get mode(){return a.currentMode}})}ev().catch(i=>{console.error("[neon] boot failed:",i)});export{oe as P,Bh as b,Nr as c};
