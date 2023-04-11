(self.webpackChunkclipz=self.webpackChunkclipz||[]).push([[253],{3327:(U,_,l)=>{"use strict";l.r(_),l.d(_,{defaultOptions:()=>F,fetchFile:()=>z,getCreateFFmpegCore:()=>Z});const F={corePath:`https://unpkg.com/@ffmpeg/core@${l(3681).devDependencies["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`};var e=l(5861),x=l(6945),E=l(3630);const L=function(){var k=(0,e.Z)(function*(b,A){(0,x.log)("info",`fetch ${b}`);const h=yield(yield fetch(b)).arrayBuffer();(0,x.log)("info",`${b} file size = ${h.byteLength} bytes`);const M=new Blob([h],{type:A}),C=URL.createObjectURL(M);return(0,x.log)("info",`${b} blob URL = ${C}`),C});return function(A,h){return k.apply(this,arguments)}}(),Z=function(){var k=(0,e.Z)(function*({corePath:b,workerPath:A,wasmPath:h}){if(typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope){if("string"!=typeof b)throw Error("corePath should be a string!");const O=new URL(b,"file:///E:/Angular-Projects/clipz/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,R=yield L(O,"application/javascript"),S=yield L(void 0!==h?h:O.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),D=yield L(void 0!==A?A:O.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(G=>{if(globalThis.importScripts(R),typeof createFFmpegCore>"u")throw Error((0,E.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(O));(0,x.log)("info","ffmpeg-core.js script loaded"),G({createFFmpegCore,corePath:R,wasmPath:S,workerPath:D})}):((0,x.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:R,wasmPath:S,workerPath:D}))}if("string"!=typeof b)throw Error("corePath should be a string!");const M=new URL(b,"file:///E:/Angular-Projects/clipz/node_modules/@ffmpeg/ffmpeg/src/browser/getCreateFFmpegCore.js").href,C=yield L(M,"application/javascript"),J=yield L(void 0!==h?h:M.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),Y=yield L(void 0!==A?A:M.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return typeof createFFmpegCore>"u"?new Promise(O=>{const R=document.createElement("script"),S=()=>{if(R.removeEventListener("load",S),typeof createFFmpegCore>"u")throw Error((0,E.CREATE_FFMPEG_CORE_IS_NOT_DEFINED)(M));(0,x.log)("info","ffmpeg-core.js script loaded"),O({createFFmpegCore,corePath:C,wasmPath:J,workerPath:Y})};R.src=C,R.type="text/javascript",R.addEventListener("load",S),document.getElementsByTagName("head")[0].appendChild(R)}):((0,x.log)("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore,corePath:C,wasmPath:J,workerPath:Y}))});return function(A){return k.apply(this,arguments)}}(),z=function(){var k=(0,e.Z)(function*(b){let A=b;return typeof b>"u"?new Uint8Array:("string"==typeof b?A=/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(b)?atob(b.split(",")[1]).split("").map(h=>h.charCodeAt(0)):yield(yield fetch(new URL(b,"file:///E:/Angular-Projects/clipz/node_modules/@ffmpeg/ffmpeg/src/browser/fetchFile.js").href)).arrayBuffer():(b instanceof File||b instanceof Blob)&&(A=yield(k=>new Promise((b,A)=>{const h=new FileReader;h.onload=()=>{b(h.result)},h.onerror=({target:{error:{code:M}}})=>{A(Error(`File could not be read! Code=${M}`))},h.readAsArrayBuffer(k)}))(b)),new Uint8Array(A))});return function(A){return k.apply(this,arguments)}}()},6151:U=>{U.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}},9639:(U,_,l)=>{var w=l(7156).default;const{defaultArgs:f,baseOptions:F}=l(6151),e=l(8333),{defaultOptions:x,getCreateFFmpegCore:E}=l(3327),{version:L}=l(3681),Z=Error("ffmpeg.wasm is not ready, make sure you have completed load().");U.exports=(T={})=>{const{log:z,logger:k,progress:b,...A}={...F,...x,...T};let h=null,M=null,C=null,J=null,Y=!1,O=()=>{},R=z,S=b,D=0,G=0,W=!1,H=0;const $=(a,g)=>{O({type:a,message:g}),R&&console.log(`[${a}] ${g}`)},ne=a=>{const[g,m,y]=a.split(":");return 60*parseFloat(g)*60+60*parseFloat(m)+parseFloat(y)},Q=({type:a,message:g})=>{$(a,g),((a,g)=>{if("string"==typeof a)if(a.startsWith("  Duration")){const m=a.split(", ")[0].split(": ")[1],y=ne(m);g({duration:y,ratio:H}),(0===D||D>y)&&(D=y,W=!0)}else if(W&&a.startsWith("    Stream")){const m=a.match(/([\d.]+) fps/);if(m){const y=parseFloat(m[1]);G=D*y}else G=0;W=!1}else if(a.startsWith("frame")||a.startsWith("size")){const m=a.split("time=")[1].split(" ")[0],y=ne(m),B=a.match(/frame=\s*(\d+)/);if(G&&B){const j=parseFloat(B[1]);H=Math.min(j/G,1)}else H=y/D;g({ratio:H,time:y})}else a.startsWith("video:")&&(g({ratio:1}),D=0)})(g,S),(a=>{"FFMPEG_END"===a&&null!==C&&(C(),C=null,J=null,Y=!1)})(g)},K=function(){var a=w(function*(){if($("info","load ffmpeg-core"),null!==h)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{$("info","loading ffmpeg-core");const{createFFmpegCore:g,corePath:m,workerPath:y,wasmPath:B}=yield E(A);h=yield g({mainScriptUrlOrBlob:m,printErr:j=>Q({type:"fferr",message:j}),print:j=>Q({type:"ffout",message:j}),locateFile:(j,V)=>{if(typeof window<"u"||typeof WorkerGlobalScope<"u"){if(typeof B<"u"&&j.endsWith("ffmpeg-core.wasm"))return B;if(typeof y<"u"&&j.endsWith("ffmpeg-core.worker.js"))return y}return V+j}}),M=h.cwrap(A.mainName||"proxy_main","number",["number","number"]),$("info","ffmpeg-core loaded")}});return function(){return a.apply(this,arguments)}}();return $("info",`use ffmpeg.wasm v${L}`),{setProgress:a=>{S=a},setLogger:a=>{O=a},setLogging:a=>{R=a},load:K,isLoaded:()=>null!==h,run:(...a)=>{if($("info",`run ffmpeg command: ${a.join(" ")}`),null===h)throw Z;if(Y)throw Error("ffmpeg.wasm can only run one command at a time");return Y=!0,new Promise((g,m)=>{const y=[...f,...a].filter(B=>0!==B.length);C=g,J=m,M(...e(h,y))})},exit:()=>{if(null===h)throw Z;J&&J("ffmpeg has exited"),Y=!1;try{h.exit(1)}catch(a){$(a.message),J&&J(a)}finally{h=null,M=null,C=null,J=null}},FS:(a,...g)=>{if($("info",`run FS.${a} ${g.map(m=>"string"==typeof m?m:`<${m.length} bytes binary file>`).join(" ")}`),null===h)throw Z;{let m=null;try{m=h.FS[a](...g)}catch{throw Error("readdir"===a?`ffmpeg.FS('readdir', '${g[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`:"readFile"===a?`ffmpeg.FS('readFile', '${g[0]}') error. Check if the path exists`:"Oops, something went wrong in FS operation.")}return m}}}}},260:(U,_,l)=>{l(7854);const w=l(9639),{fetchFile:f}=l(3327);U.exports={createFFmpeg:w,fetchFile:f}},3630:U=>{U.exports={CREATE_FFMPEG_CORE_IS_NOT_DEFINED:l=>`\ncreateFFmpegCore is not defined. ffmpeg.wasm is unable to find createFFmpegCore after loading ffmpeg-core.js from ${l}. Use another URL when calling createFFmpeg():\n\nconst ffmpeg = createFFmpeg({\n  corePath: 'http://localhost:3000/ffmpeg-core.js',\n});\n`}},6945:U=>{let _=!1,l=()=>{};U.exports={logging:_,setLogging:e=>{_=e},setCustomLogger:e=>{l=e},log:(e,x)=>{l({type:e,message:x}),_&&console.log(`[${e}] ${x}`)}}},8333:U=>{U.exports=(_,l)=>{const w=_._malloc(l.length*Uint32Array.BYTES_PER_ELEMENT);return l.forEach((f,F)=>{const e=_.lengthBytesUTF8(f)+1,x=_._malloc(e);_.stringToUTF8(f,x,e),_.setValue(w+Uint32Array.BYTES_PER_ELEMENT*F,x,"i32")}),[l.length,w]}},1253:(U,_,l)=>{"use strict";l.r(_),l.d(_,{VideoModule:()=>ae});var w=l(6895),f=l(4006),F=l(9062),e=l(4650),x=l(9635),E=l(4004),L=l(5698),Z=l(1205),T=l(9260);const z=(0,E.U)(n=>!!n);let k=(()=>{class n{constructor(r,p){this.router=r,this.auth=p,this.canActivate=(u,I)=>{const N=u.data.authGuardPipe||(()=>z);return this.auth.user.pipe((0,L.q)(1),N(u,I),(0,E.U)(P=>"boolean"==typeof P?P:Array.isArray(P)?this.router.createUrlTree(P):this.router.parseUrl(P)))}}}return n.\u0275fac=function(r){return new(r||n)(e.LFG(F.F0),e.LFG(Z.zQ))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"any"}),n})();var S=l(5861),D=l(1135),G=l(4411),W=l(1609),H=l(3446),re=l(235),$=l(8549);function ne(n,t){if(1&n&&(e.TgZ(0,"app-alert",9)(1,"p"),e._uU(2),e.qZA()()),2&n){const r=e.oxw();e.Q6J("color",r.alertColor),e.xp6(2),e.Oqu(r.alertMsg)}}const q=function(n,t){return{"opacity-50":n,"hover:bg-indigo-700":t}};class Q{constructor(t,r){this.modal=t,this.clipService=r,this.activeClip=null,this.update=new e.vpe,this.inSubmission=!1,this.showAlert=!1,this.alertColor="blue",this.alertMsg="Please wait! Updating clip.",this.clipID=new f.NI("",{nonNullable:!0}),this.title=new f.NI("",{validators:[f.kI.required,f.kI.minLength(3)],nonNullable:!0}),this.editForm=new f.cw({title:this.title,id:this.clipID})}ngOnInit(){this.modal.register("editClip")}ngOnDestroy(){this.modal.unregister("editClip")}ngOnChanges(){this.activeClip&&(this.inSubmission=!1,this.showAlert=!1,this.clipID.setValue(this.activeClip.docID),this.title.setValue(this.activeClip.title))}submit(){var t=this;return(0,S.Z)(function*(){if(t.activeClip){t.inSubmission=!0,t.showAlert=!0,t.alertColor="blue",t.alertMsg="Please wait! Updating clip.";try{yield t.clipService.updateClip(t.clipID.value,t.title.value)}catch{return t.inSubmission=!1,t.alertColor="red",void(t.alertMsg="Something went wrong! Try again later")}t.activeClip.title=t.title.value,t.update.emit(t.activeClip),t.inSubmission=!1,t.alertColor="green",t.alertMsg="Success!"}})()}}Q.\u0275fac=function(t){return new(t||Q)(e.Y36(W.Z),e.Y36(G.Y))},Q.\u0275cmp=e.Xpm({type:Q,selectors:[["app-edit"]],inputs:{activeClip:"activeClip"},outputs:{update:"update"},features:[e.TTD],decls:12,vars:8,consts:[["modalId","editClip"],[1,"text-2xl","font-bold"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","Enter Title",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"]],template:function(t,r){1&t&&(e.TgZ(0,"app-modal",0)(1,"p",1),e._uU(2,"Edit Video"),e.qZA(),e.YNc(3,ne,3,2,"app-alert",2),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return r.submit()}),e.TgZ(5,"div",4)(6,"label",5),e._uU(7,"Title"),e.qZA(),e._UZ(8,"app-input",6),e.qZA(),e.TgZ(9,"div",7)(10,"button",8),e._uU(11," Update "),e.qZA()()()()),2&t&&(e.xp6(3),e.Q6J("ngIf",r.showAlert),e.xp6(1),e.Q6J("formGroup",r.editForm),e.xp6(4),e.Q6J("control",r.title),e.xp6(2),e.Q6J("disabled",r.inSubmission)("ngClass",e.WLB(5,q,r.inSubmission,!r.inSubmission)))},dependencies:[w.mk,w.O5,H.z,re.a,$.w,f._Y,f.JL,f.sg]});const K=function(n){return["/","clip",n]};function oe(n,t){if(1&n){const r=e.EpF();e.TgZ(0,"div",10)(1,"a",11),e._UZ(2,"img",12),e.qZA(),e.TgZ(3,"div",13)(4,"a",14),e._uU(5),e.qZA(),e.TgZ(6,"a",15),e.NdJ("click",function(u){const N=e.CHM(r).$implicit,P=e.oxw();return e.KtG(P.copyToClipboard(u,N.docID))}),e._uU(7," Copy Link "),e.qZA()(),e.TgZ(8,"div",16)(9,"a",17),e.NdJ("click",function(u){const N=e.CHM(r).$implicit,P=e.oxw();return e.KtG(P.openModal(u,N))}),e.TgZ(10,"span",18),e._uU(11,"build"),e.qZA()(),e.TgZ(12,"a",19),e.NdJ("click",function(u){const N=e.CHM(r).$implicit,P=e.oxw();return e.KtG(P.deleteClip(u,N))}),e.TgZ(13,"span",18),e._uU(14,"delete"),e.qZA()()()()}if(2&n){const r=t.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(4,K,r.docID)),e.xp6(1),e.Q6J("src",r.screenshotURL,e.LSH),e.xp6(2),e.Q6J("routerLink",e.VKq(6,K,r.docID)),e.xp6(1),e.hij(" ",r.title," ")}}class i{constructor(t,r,p,u){this.router=t,this.route=r,this.clipService=p,this.modal=u,this.videoOrder="1",this.clipz=[],this.activeClip=null,this.sort$=new D.X(this.videoOrder)}ngOnInit(){this.route.queryParamMap.subscribe(t=>{this.videoOrder="2"===t.sort?t.sort:"1",this.sort$.next(this.videoOrder)}),this.clipService.getUserClips(this.sort$).subscribe(t=>{this.clipz=[],t.forEach(r=>{this.clipz.push({docID:r.id,...r.data()})})})}sort(t){const{value:r}=t.target;this.router.navigate([],{relativeTo:this.route,queryParams:{sort:r}})}openModal(t,r){t.preventDefault(),this.activeClip=r,this.modal.toggleModal("editClip")}update(t){this.clipz.forEach((r,p)=>{r.docID==t.docID&&(this.clipz[p].title=t.title)})}deleteClip(t,r){t.preventDefault(),this.clipService.deleteClip(r),this.clipz.forEach((p,u)=>{p.docID==r.docID&&this.clipz.splice(u,1)})}copyToClipboard(t,r){return(0,S.Z)(function*(){if(t.preventDefault(),!r)return;const p=`${location.origin}/clip/${r}`;yield navigator.clipboard.writeText(p),alert("Link Copied!")})()}}i.\u0275fac=function(t){return new(t||i)(e.Y36(F.F0),e.Y36(F.gz),e.Y36(G.Y),e.Y36(W.Z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-manage"]],decls:13,vars:4,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","justify-between"],["routerLink","/upload",1,"bg-indigo-400","text-white","py-4","px-10","text-xl"],[1,"text-black","px-8","text-xl","outline-none","appearance-none",3,"change"],["value","1",3,"selected"],["value","2",3,"selected"],[1,"container","mx-auto","my-8"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","mt-6 rounded-tl-2xl rounded-br-2xl shadow-xl bg-secondary flex flex-col justify-start",4,"ngFor","ngForOf"],[3,"activeClip","update"],[1,"mt-6","rounded-tl-2xl","rounded-br-2xl","shadow-xl","bg-secondary","flex","flex-col","justify-start"],["href","#",3,"routerLink"],["crossorigin","",1,"card-img-top","rounded-tl-2xl","w-full",3,"src"],[1,"p-6","text-2xl"],[1,"font-bold","mb-2",3,"routerLink"],["href","#",1,"bg-gray-400","text-white","px-2","py-1","ml-2","text-sm","rounded",3,"click"],[1,"flex","text-center","text-2xl","bg-gray-800","p-2","mt-auto"],["href","#",1,"flex-1","p-2","border-right","border-r-2","border-gray-700","transition","hover:text-indigo-400",3,"click"],[1,"material-icons","text-base"],["href","#",1,"flex-1","p-2","rounded-br-2xl","transition","hover:text-indigo-400",3,"click"]],template:function(t,r){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"a",2),e._uU(3," Upload Videos "),e.qZA(),e.TgZ(4,"select",3),e.NdJ("change",function(u){return r.sort(u)}),e.TgZ(5,"option",4),e._uU(6,"Recent Uploads"),e.qZA(),e.TgZ(7,"option",5),e._uU(8,"Oldest Uploads"),e.qZA()()()(),e.TgZ(9,"div",6)(10,"div",7),e.YNc(11,oe,15,8,"div",8),e.qZA()(),e.TgZ(12,"app-edit",9),e.NdJ("update",function(u){return r.update(u)}),e.qZA()),2&t&&(e.xp6(5),e.Q6J("selected","1"===r.videoOrder),e.xp6(2),e.Q6J("selected","2"===r.videoOrder),e.xp6(4),e.Q6J("ngForOf",r.clipz),e.xp6(1),e.Q6J("activeClip",r.activeClip))},dependencies:[w.sg,F.rH,f.YN,f.Kr,Q]});const s={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let d;const c=new Uint8Array(16);function v(){if(!d&&(d=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!d))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return d(c)}const a=[];for(let n=0;n<256;++n)a.push((n+256).toString(16).slice(1));const j=function B(n,t,r){if(s.randomUUID&&!t&&!n)return s.randomUUID();const p=(n=n||{}).random||(n.rng||v)();if(p[6]=15&p[6]|64,p[8]=63&p[8]|128,t){r=r||0;for(let u=0;u<16;++u)t[r+u]=p[u];return t}return function g(n,t=0){return(a[n[t+0]]+a[n[t+1]]+a[n[t+2]]+a[n[t+3]]+"-"+a[n[t+4]]+a[n[t+5]]+"-"+a[n[t+6]]+a[n[t+7]]+"-"+a[n[t+8]]+a[n[t+9]]+"-"+a[n[t+10]]+a[n[t+11]]+a[n[t+12]]+a[n[t+13]]+a[n[t+14]]+a[n[t+15]]).toLowerCase()}(p)};var V=l(3900),he=l(9841),de=l(4128),ve=l(377),fe=l(260);class ie{constructor(){this.isRunning=!1,this.isReady=!1,this.ffmpeg=(0,fe.createFFmpeg)({log:!0})}init(){var t=this;return(0,S.Z)(function*(){t.isReady||(yield t.ffmpeg.load(),t.isReady=!0)})()}getScreenshots(t){var r=this;return(0,S.Z)(function*(){r.isRunning=!0;const p=yield(0,fe.fetchFile)(t);r.ffmpeg.FS("writeFile",t.name,p);const u=[1,2,3],I=[];u.forEach(P=>{I.push("-i",t.name,"-ss",`00:00:0${P}`,"-frames:v","1","-filter:v","scale=510:300",`output_0${P}.png`)}),yield r.ffmpeg.run(...I);const N=[];return u.forEach(P=>{const X=r.ffmpeg.FS("readFile",`output_0${P}.png`),ee=new Blob([X.buffer],{type:"image/png"}),te=URL.createObjectURL(ee);N.push(te)}),r.isRunning=!1,N})()}blobFromURL(t){return(0,S.Z)(function*(){return yield(yield fetch(t)).blob()})()}}ie.\u0275fac=function(t){return new(t||ie)},ie.\u0275prov=e.Yz7({token:ie,factory:ie.\u0275fac,providedIn:"root"});class le{constructor(){}handleEvent(t){t.preventDefault()}}le.\u0275fac=function(t){return new(t||le)},le.\u0275dir=e.lG2({type:le,selectors:[["","app-event-blocker",""]],hostBindings:function(t,r){1&t&&e.NdJ("drop",function(u){return r.handleEvent(u)})("dragover",function(u){return r.handleEvent(u)})}});var ye=l(1481);class ce{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustUrl(t)}}function be(n,t){1&n&&(e.TgZ(0,"span",5),e._uU(1," settings "),e.qZA())}function _e(n,t){1&n&&(e.TgZ(0,"span",5),e._uU(1," autorenew "),e.qZA())}ce.\u0275fac=function(t){return new(t||ce)(e.Y36(ye.H7,16))},ce.\u0275pipe=e.Yjl({name:"safeURL",type:ce,pure:!0});const we=function(n){return{"bg-indigo-400 border-indigo-400 border-solid":n}};function xe(n,t){if(1&n){const r=e.EpF();e.ynx(0),e.TgZ(1,"div",8),e.NdJ("dragend",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.isDragOver=!1)})("dragover",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.isDragOver=!0)})("dragenter",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.isDragOver=!0)})("dragleave",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.isDragOver=!1)})("mouseleave",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.isDragOver=!1)})("drop",function(u){e.CHM(r);const I=e.oxw(2);return e.KtG(I.storeFile(u))}),e.TgZ(2,"h5"),e._uU(3,"Drop your file here (mp4 only!)"),e.qZA(),e.YNc(4,_e,2,0,"span",9),e.qZA(),e.TgZ(5,"input",10),e.NdJ("change",function(u){e.CHM(r);const I=e.oxw(2);return e.KtG(I.storeFile(u))}),e.qZA(),e.BQk()}if(2&n){const r=e.oxw(2);e.xp6(1),e.Q6J("ngClass",e.VKq(2,we,r.isDragOver)),e.xp6(3),e.Q6J("ngIf",r.ffmpegService.isRunning)}}function Ce(n,t){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"percent"),e.qZA()),2&n){const r=e.oxw(4);e.xp6(1),e.Oqu(e.lcZ(2,1,r.percentage))}}function Fe(n,t){if(1&n&&(e.TgZ(0,"app-alert",21)(1,"p"),e._uU(2),e.qZA(),e.YNc(3,Ce,3,3,"p",22),e.qZA()),2&n){const r=e.oxw(3);e.Q6J("color",r.alertColor),e.xp6(2),e.Oqu(r.alertMsg),e.xp6(1),e.Q6J("ngIf",r.showPercentage)}}const Te=function(n,t){return{"border-green-400":n,"border-transparent":t}};function Ue(n,t){if(1&n){const r=e.EpF();e.TgZ(0,"div",23),e.NdJ("click",function(){const I=e.CHM(r).$implicit,N=e.oxw(3);return e.KtG(N.selectedScreenshot=I)}),e._UZ(1,"img",24),e.ALo(2,"safeURL"),e.qZA()}if(2&n){const r=t.$implicit,p=e.oxw(3);e.Q6J("ngClass",e.WLB(4,Te,r===p.selectedScreenshot,r!==p.selectedScreenshot)),e.xp6(1),e.Q6J("src",e.lcZ(2,2,r),e.LSH)}}const Ae=function(n,t){return{"opacity-50":n,"hover:bg-indigo-700":t}};function Se(n,t){if(1&n){const r=e.EpF();e.YNc(0,Fe,4,3,"app-alert",11),e.TgZ(1,"form",12),e.NdJ("ngSubmit",function(){e.CHM(r);const u=e.oxw(2);return e.KtG(u.uploadFile())}),e.TgZ(2,"h2",13),e._uU(3,"Select a Thumbnail"),e.qZA(),e.TgZ(4,"div",14),e.YNc(5,Ue,3,7,"div",15),e.qZA(),e.TgZ(6,"div",16)(7,"label",17),e._uU(8,"Title"),e.qZA(),e._UZ(9,"app-input",18),e.qZA(),e.TgZ(10,"div",19)(11,"button",20),e._uU(12," Publish "),e.qZA()()()}if(2&n){const r=e.oxw(2);e.Q6J("ngIf",r.showAlert),e.xp6(1),e.Q6J("formGroup",r.uploadForm),e.xp6(4),e.Q6J("ngForOf",r.screenshots),e.xp6(4),e.Q6J("control",r.title),e.xp6(2),e.Q6J("disabled",r.inSubmission)("ngClass",e.WLB(6,Ae,r.inSubmission,!r.inSubmission))}}function Ee(n,t){if(1&n&&(e.YNc(0,xe,6,4,"ng-container",6),e.YNc(1,Se,13,9,"ng-template",null,7,e.W1O)),2&n){const r=e.MAs(2),p=e.oxw();e.Q6J("ngIf",!p.isDropedfile)("ngIfElse",r)}}class ue{constructor(t,r,p,u,I){this.storage=t,this.auth=r,this.clipsService=p,this.router=u,this.ffmpegService=I,this.isDragOver=!1,this.isDropedfile=!1,this.file=null,this.showAlert=!1,this.alertMsg="Please wait! Your clip is being uploaded.",this.alertColor="blue",this.inSubmission=!1,this.percentage=0,this.showPercentage=!1,this.user=null,this.screenshots=[],this.selectedScreenshot="",this.title=new f.NI("",{validators:[f.kI.required,f.kI.minLength(3)],nonNullable:!0}),this.uploadForm=new f.cw({title:this.title}),r.user.subscribe(N=>this.user=N),this.ffmpegService.init()}ngOnDestroy(){this.task?.cancel()}storeFile(t){var r=this;return(0,S.Z)(function*(){r.ffmpegService.isRunning||(r.isDragOver=!1,r.file=t.dataTransfer?t.dataTransfer?.files.item(0)??null:t.target.files?.item(0)??null,r.file&&"video/mp4"===r.file.type&&(r.screenshots=yield r.ffmpegService.getScreenshots(r.file),r.selectedScreenshot=r.screenshots[0],r.title.setValue(r.file.name.replace(/\.[^/.]+$/,"")),r.isDropedfile=!0))})()}uploadFile(){var t=this;return(0,S.Z)(function*(){t.uploadForm.disable(),t.showAlert=!0,t.alertMsg="Please wait! Your clip is being uploaded.",t.alertColor="blue",t.inSubmission=!0,t.showPercentage=!0;const r=j(),p=`clipz/${r}.mp4`,u=yield t.ffmpegService.blobFromURL(t.selectedScreenshot),I=`screenshots/${r}.png`;t.task=t.storage.upload(p,t.file);const N=t.storage.ref(p);t.screenshotTask=t.storage.upload(I,u);const P=t.storage.ref(I);var X;(0,he.a)([t.task.percentageChanges(),t.screenshotTask.percentageChanges()]).subscribe(X=>{const[ee,te]=X;ee&&te&&(t.percentage=(ee+te)/200)}),(0,de.D)([t.task.snapshotChanges(),t.screenshotTask.snapshotChanges()]).pipe((0,V.w)(()=>(0,de.D)([N.getDownloadURL(),P.getDownloadURL()]))).subscribe({next:(X=(0,S.Z)(function*(ee){const[te,pe]=ee,me={uid:t.user?.uid,displayName:t.user?.displayName,title:t.title.value,fileName:`${r}.mp4`,url:te,screenshotURL:pe,screenshotFileName:`${r}.png`,timestamp:T.Z.firestore.FieldValue.serverTimestamp()},Me=yield t.clipsService.createClip(me);console.log(me),t.alertColor="green",t.alertMsg="Success! Your clip is now ready to share with the world.",t.showPercentage=!1,setTimeout(()=>{t.router.navigate(["clip",Me.id])},1e3)}),function(te){return X.apply(this,arguments)}),error:X=>{t.uploadForm.enable(),t.alertColor="red",t.alertMsg="Upload failed! Please try again later.",t.inSubmission=!0,t.showPercentage=!1,console.error(X)}})})()}}ue.\u0275fac=function(t){return new(t||ue)(e.Y36(ve.Q1),e.Y36(Z.zQ),e.Y36(G.Y),e.Y36(F.F0),e.Y36(ie))},ue.\u0275cmp=e.Xpm({type:ue,selectors:[["app-upload"]],decls:8,vars:2,consts:[[1,"container","mx-auto","my-8","bg-secondary","p-6"],[1,"rounded","relative","flex","flex-col"],[1,"font-bold","mb-6"],["class","material-icons text-center text-6xl p-8 animate-spin",4,"ngIf","ngIfElse"],["uploadEditorCtr",""],[1,"material-icons","text-center","text-6xl","p-8","animate-spin"],[4,"ngIf","ngIfElse"],["uploadFormCtr",""],["app-event-blocker","",1,"w-full","px-10","py-40","rounded","text-center","cursor-pointer","border","border-dashed","border-gray-400","transition","duration-500","hover:text-white","hover:bg-indigo-400","hover:border-indigo-400","hover:border-solid","text-xl",3,"ngClass","dragend","dragover","dragenter","dragleave","mouseleave","drop"],["class","material-icons text-center text-6xl p-8 animate-spin",4,"ngIf"],["type","file",1,"mt-4",3,"change"],[3,"color",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"mb-4","text-xl"],[1,"grid","grid-cols-1","lg:grid-cols-3","gap-4"],["class","border-8 cursor-pointer",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"mt-4"],[1,"block","text-xl","mb-4"],["placeholder","Enter Title",3,"control"],[1,"mt-4","text-right"],["type","submit",1,"inline-flex","justify-center","py-2","px-4","border","border-transparent","shadow-sm","rounded-md","text-white","bg-indigo-600","focus:outline-none",3,"disabled","ngClass"],[3,"color"],[4,"ngIf"],[1,"border-8","cursor-pointer",3,"ngClass","click"],[3,"src"]],template:function(t,r){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._uU(3,"Upload Video"),e.qZA(),e.ynx(4),e.YNc(5,be,2,0,"span",3),e.BQk(),e.YNc(6,Ee,3,2,"ng-template",null,4,e.W1O),e.qZA()()),2&t){const p=e.MAs(7);e.xp6(5),e.Q6J("ngIf",!r.ffmpegService.isReady)("ngIfElse",p)}},dependencies:[w.mk,w.sg,w.O5,re.a,$.w,le,f._Y,f.JL,f.sg,w.Zx,ce]});const ge=()=>("/",(0,x.z)(z,(0,E.U)(t=>t||"/"))),Le=[{path:"manage",component:i,data:{authOnly:!0,authGuardPipe:ge},canActivate:[k]},{path:"upload",component:ue,data:{authOnly:!0,authGuardPipe:ge},canActivate:[k]},{path:"manage-clips",redirectTo:"manage"}];class se{}se.\u0275fac=function(t){return new(t||se)},se.\u0275mod=e.oAB({type:se}),se.\u0275inj=e.cJS({imports:[F.Bz.forChild(Le),F.Bz]});var Ze=l(4466);class ae{}ae.\u0275fac=function(t){return new(t||ae)},ae.\u0275mod=e.oAB({type:ae}),ae.\u0275inj=e.cJS({imports:[w.ez,se,Ze.m,f.UX]})},7854:U=>{var _=function(l){"use strict";var e,w=Object.prototype,f=w.hasOwnProperty,F=Object.defineProperty||function(i,o,s){i[o]=s.value},x="function"==typeof Symbol?Symbol:{},E=x.iterator||"@@iterator",L=x.asyncIterator||"@@asyncIterator",Z=x.toStringTag||"@@toStringTag";function T(i,o,s){return Object.defineProperty(i,o,{value:s,enumerable:!0,configurable:!0,writable:!0}),i[o]}try{T({},"")}catch{T=function(o,s,d){return o[s]=d}}function z(i,o,s,d){var v=Object.create((o&&o.prototype instanceof J?o:J).prototype),a=new Q(d||[]);return F(v,"_invoke",{value:re(i,s,a)}),v}function k(i,o,s){try{return{type:"normal",arg:i.call(o,s)}}catch(d){return{type:"throw",arg:d}}}l.wrap=z;var b="suspendedStart",A="suspendedYield",h="executing",M="completed",C={};function J(){}function Y(){}function O(){}var R={};T(R,E,function(){return this});var S=Object.getPrototypeOf,D=S&&S(S(K([])));D&&D!==w&&f.call(D,E)&&(R=D);var G=O.prototype=J.prototype=Object.create(R);function W(i){["next","throw","return"].forEach(function(o){T(i,o,function(s){return this._invoke(o,s)})})}function H(i,o){function s(v,a,g,m){var y=k(i[v],i,a);if("throw"!==y.type){var B=y.arg,j=B.value;return j&&"object"==typeof j&&f.call(j,"__await")?o.resolve(j.__await).then(function(V){s("next",V,g,m)},function(V){s("throw",V,g,m)}):o.resolve(j).then(function(V){B.value=V,g(B)},function(V){return s("throw",V,g,m)})}m(y.arg)}var d;F(this,"_invoke",{value:function c(v,a){function g(){return new o(function(m,y){s(v,a,m,y)})}return d=d?d.then(g,g):g()}})}function re(i,o,s){var d=b;return function(v,a){if(d===h)throw new Error("Generator is already running");if(d===M){if("throw"===v)throw a;return oe()}for(s.method=v,s.arg=a;;){var g=s.delegate;if(g){var m=$(g,s);if(m){if(m===C)continue;return m}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(d===b)throw d=M,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);d=h;var y=k(i,o,s);if("normal"===y.type){if(d=s.done?M:A,y.arg===C)continue;return{value:y.arg,done:s.done}}"throw"===y.type&&(d=M,s.method="throw",s.arg=y.arg)}}}function $(i,o){var s=o.method,d=i.iterator[s];if(d===e)return o.delegate=null,"throw"===s&&i.iterator.return&&(o.method="return",o.arg=e,$(i,o),"throw"===o.method)||"return"!==s&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+s+"' method")),C;var c=k(d,i.iterator,o.arg);if("throw"===c.type)return o.method="throw",o.arg=c.arg,o.delegate=null,C;var v=c.arg;return v?v.done?(o[i.resultName]=v.value,o.next=i.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,C):v:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,C)}function ne(i){var o={tryLoc:i[0]};1 in i&&(o.catchLoc=i[1]),2 in i&&(o.finallyLoc=i[2],o.afterLoc=i[3]),this.tryEntries.push(o)}function q(i){var o=i.completion||{};o.type="normal",delete o.arg,i.completion=o}function Q(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(ne,this),this.reset(!0)}function K(i){if(i){var o=i[E];if(o)return o.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var s=-1,d=function c(){for(;++s<i.length;)if(f.call(i,s))return c.value=i[s],c.done=!1,c;return c.value=e,c.done=!0,c};return d.next=d}}return{next:oe}}function oe(){return{value:e,done:!0}}return Y.prototype=O,F(G,"constructor",{value:O,configurable:!0}),F(O,"constructor",{value:Y,configurable:!0}),Y.displayName=T(O,Z,"GeneratorFunction"),l.isGeneratorFunction=function(i){var o="function"==typeof i&&i.constructor;return!!o&&(o===Y||"GeneratorFunction"===(o.displayName||o.name))},l.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,O):(i.__proto__=O,T(i,Z,"GeneratorFunction")),i.prototype=Object.create(G),i},l.awrap=function(i){return{__await:i}},W(H.prototype),T(H.prototype,L,function(){return this}),l.AsyncIterator=H,l.async=function(i,o,s,d,c){void 0===c&&(c=Promise);var v=new H(z(i,o,s,d),c);return l.isGeneratorFunction(o)?v:v.next().then(function(a){return a.done?a.value:v.next()})},W(G),T(G,Z,"Generator"),T(G,E,function(){return this}),T(G,"toString",function(){return"[object Generator]"}),l.keys=function(i){var o=Object(i),s=[];for(var d in o)s.push(d);return s.reverse(),function c(){for(;s.length;){var v=s.pop();if(v in o)return c.value=v,c.done=!1,c}return c.done=!0,c}},l.values=K,Q.prototype={constructor:Q,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!i)for(var o in this)"t"===o.charAt(0)&&f.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var o=this.tryEntries[0].completion;if("throw"===o.type)throw o.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var o=this;function s(m,y){return v.type="throw",v.arg=i,o.next=m,y&&(o.method="next",o.arg=e),!!y}for(var d=this.tryEntries.length-1;d>=0;--d){var c=this.tryEntries[d],v=c.completion;if("root"===c.tryLoc)return s("end");if(c.tryLoc<=this.prev){var a=f.call(c,"catchLoc"),g=f.call(c,"finallyLoc");if(a&&g){if(this.prev<c.catchLoc)return s(c.catchLoc,!0);if(this.prev<c.finallyLoc)return s(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return s(c.catchLoc,!0)}else{if(!g)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return s(c.finallyLoc)}}}},abrupt:function(i,o){for(var s=this.tryEntries.length-1;s>=0;--s){var d=this.tryEntries[s];if(d.tryLoc<=this.prev&&f.call(d,"finallyLoc")&&this.prev<d.finallyLoc){var c=d;break}}c&&("break"===i||"continue"===i)&&c.tryLoc<=o&&o<=c.finallyLoc&&(c=null);var v=c?c.completion:{};return v.type=i,v.arg=o,c?(this.method="next",this.next=c.finallyLoc,C):this.complete(v)},complete:function(i,o){if("throw"===i.type)throw i.arg;return"break"===i.type||"continue"===i.type?this.next=i.arg:"return"===i.type?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):"normal"===i.type&&o&&(this.next=o),C},finish:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o];if(s.finallyLoc===i)return this.complete(s.completion,s.afterLoc),q(s),C}},catch:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o];if(s.tryLoc===i){var d=s.completion;if("throw"===d.type){var c=d.arg;q(s)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(i,o,s){return this.delegate={iterator:K(i),resultName:o,nextLoc:s},"next"===this.method&&(this.arg=e),C}},l}(U.exports);try{regeneratorRuntime=_}catch{"object"==typeof globalThis?globalThis.regeneratorRuntime=_:Function("r","regeneratorRuntime = r")(_)}},7156:U=>{function _(w,f,F,e,x,E,L){try{var Z=w[E](L),T=Z.value}catch(z){return void F(z)}Z.done?f(T):Promise.resolve(T).then(e,x)}U.exports=function l(w){return function(){var f=this,F=arguments;return new Promise(function(e,x){var E=w.apply(f,F);function L(T){_(E,e,x,L,Z,"next",T)}function Z(T){_(E,e,x,L,Z,"throw",T)}L(void 0)})}},U.exports.__esModule=!0,U.exports.default=U.exports},3681:U=>{"use strict";U.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.11.6","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","start:worker":"node scripts/worker-server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","build:worker":"rimraf dist && webpack --config scripts/webpack.config.worker.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node node_modules/mocha/bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.11.0","@types/emscripten":"^1.39.4","babel-eslint":"^10.1.0","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"}}')}}]);