// Generated by dart2js, the Dart to JavaScript compiler.
(function($){var A={}
delete A.x
var B={}
delete B.x
var C={}
delete C.x
var D={}
delete D.x
var E={}
delete E.x
var F={}
delete F.x
var G={}
delete G.x
var H={}
delete H.x
var J={}
delete J.x
var K={}
delete K.x
var L={}
delete L.x
var M={}
delete M.x
var N={}
delete N.x
var O={}
delete O.x
var P={}
delete P.x
var Q={}
delete Q.x
var R={}
delete R.x
var S={}
delete S.x
var T={}
delete T.x
var U={}
delete U.x
var V={}
delete V.x
var W={}
delete W.x
var X={}
delete X.x
var Y={}
delete Y.x
var Z={}
delete Z.x
function I(){}
init()
$=I.p
var $$={}
$$.E8=[H,{"":"Tp;call$0,$name"}]
$$.oL=[H,{"":"Tp;call$5,$name"}]
$$.v8=[H,{"":"Tp;call$1,$name"}]
$$.EE=[H,{"":"Tp;call$1,$name"}]
$$.Q3=[H,{"":"Tp;call$1,$name"}]
$$.Pi=[H,{"":"Tp;call$1,$name"}]
$$.jU=[H,{"":"Tp;call$1,$name"}]
$$.eB=[H,{"":"Tp;call$1,$name"}]
$$.r7=[H,{"":"Tp;call$2,$name"}]
$$.pR=[M,{"":"Tp;call$1,$name"}]
;(function (reflectionData) {
  function map(x){x={x:x};delete x.x;return x}
  if (!init.libraries) init.libraries = [];
  if (!init.mangledNames) init.mangledNames = map();
  if (!init.mangledGlobalNames) init.mangledGlobalNames = map();
  if (!init.statics) init.statics = map();
  if (!init.interfaces) init.interfaces = map();
  if (!init.globalFunctions) init.globalFunctions = map();
  var libraries = init.libraries;
  var mangledNames = init.mangledNames;
  var mangledGlobalNames = init.mangledGlobalNames;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var length = reflectionData.length;
  for (var i = 0; i < length; i++) {
    var data = reflectionData[i];
    var name = data[0];
    var uri = data[1];
    var metadata = data[2];
    var globalObject = data[3];
    var descriptor = data[4];
    var isRoot = !!data[5];
    var fields = descriptor && descriptor[""];
    var classes = [];
    var functions = [];
    function processStatics(descriptor) {
      for (var property in descriptor) {
        if (!hasOwnProperty.call(descriptor, property)) continue;
        if (property === "") continue;
        var element = descriptor[property];
        var firstChar = property.substring(0, 1);
        var previousProperty;
        if (firstChar === "+") {
          mangledGlobalNames[previousProperty] = property.substring(1);
          if (descriptor[property] == 1) descriptor[previousProperty].$reflectable = 1;
          if (element && element.length) init.interfaces[previousProperty] = element;
        } else if (firstChar === "@") {
          property = property.substring(1);
          $[property]["@"] = element;
        } else if (typeof element === "function") {
          globalObject[previousProperty = property] = element;
          functions.push(property);
          init.globalFunctions[property] = element;
        } else {
          previousProperty = property;
          var newDesc = {};
          var previousProp;
          for (var prop in element) {
            if (!hasOwnProperty.call(element, prop)) continue;
            firstChar = prop.substring(0, 1);
            if (prop === "static") {
              processStatics(init.statics[property] = element[prop]);
            } else if (firstChar === "+") {
              mangledNames[previousProp] = prop.substring(1);
              if (element[prop] == 1) element[previousProp].$reflectable = 1;
            } else if (firstChar === "@" && prop !== "@") {
              newDesc[prop.substring(1)]["@"] = element[prop];
            } else {
              newDesc[previousProp = prop] = element[prop];
            }
          }
          $$[property] = [globalObject, newDesc];
          classes.push(property);
        }
      }
    }
    processStatics(descriptor);
    libraries.push([name, uri, classes, functions, metadata, fields, isRoot,
                    globalObject]);
  }
})([["_foreign_helper","dart:_foreign_helper",,H,{FK:{"":"a;tT"}}],["_interceptors","dart:_interceptors",,J,{x:function(a){return void 0},Qu:function(a,b,c,d){return{i: a, p: b, e: c, x: d}},ks:function(a){var z,y,x
z=a[init.dispatchPropertyName]
if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)return y(a,z)}z=H.Px(a)
if(z==null)return C.Ku
Object.defineProperty(Object.getPrototypeOf(a), init.dispatchPropertyName, {value: z, enumerable: false, writable: true, configurable: true})
return J.ks(a)},vB:{"":"a;",
n:function(a,b){return a===b},
bu:function(a){return H.a5(a)}},yE:{"":"bool/vB;",
bu:function(a){return String(a)}},PE:{"":"vB;",
n:function(a,b){return null==b},
bu:function(a){return"null"}},Ue:{"":"vB;"},iC:{"":"Ue;"},kd:{"":"Ue;"},Q:{"":"List/vB;",
Zv:function(a,b){if(b<0||b>=a.length)throw H.e(b)
return a[b]},
bu:function(a){return H.mx(a,"[","]")},
gA:function(a){return new H.a7(a,a.length,0,null)},
gB:function(a){return a.length},
$isList:true},nM:{"":"Q;",
$asQ:function(){return[null]}},tN:{"":"nM;"},Jt:{"":"nM;"},P:{"":"num/vB;",
bu:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
$isnum:true},im:{"":"int/P;",$isnum:true,$isint:true},VA:{"":"double/P;",$isnum:true},O:{"":"String/vB;",
j:function(a,b){if(b<0)throw H.b(new P.bJ("value "+b))
if(b>=a.length)throw H.b(new P.bJ("value "+b))
return a.charCodeAt(b)},
Nj:function(a,b,c){if(c==null)c=a.length
if(typeof c!=="number")H.vh(new P.AT(c))
if(b<0)throw H.b(new P.bJ("value "+b))
if(c==null)throw H.s(c)
if(b>c)throw H.b(new P.bJ("value "+b))
if(c>a.length)throw H.b(new P.bJ("value "+H.d(c)))
return a.substring(b,c)},
yn:function(a,b){return this.Nj(a,b,null)},
bu:function(a){return a},
$isString:true}}],["_js_helper","dart:_js_helper",,H,{wV:function(a,b){var z,y
if(b!=null){z=b.x
if(z!=null)return z}y=J.x(a)
return typeof a==="object"&&a!==null&&!!y.$isXj},d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.AG(a)
if(typeof z!=="string")throw H.b(new P.AT(a))
return z},eQ:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},lh:function(a){var z,y,x
z=H.xb(J.x(a))
if(J.xC(z,"Object")){y=String(a.constructor).match(/^\s*function\s*(\S*)\s*\(/)[1]
if(typeof y==="string")z=y}x=J.rY(z)
if(x.j(z,0)===36)z=x.yn(z,1)
x=H.oX(a)
return H.d(z)+H.ia(x,0)},a5:function(a){return"Instance of '"+H.lh(a)+"'"},rD:function(a){var z=new Array(a)
z.fixed$length=!0
return z},s:function(a){throw H.b(new P.AT(a))},e:function(a){if(typeof a!=="number"||Math.floor(a)!==a)H.s(a)
throw H.b(new P.bJ("value "+H.d(a)))},b:function(a){var z
if(a==null)a=new P.LK()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z, "message", { get: H.Eu.call$0 })
z.name=""}else z.toString=H.Eu.call$0
return z},Ju:function(){return J.AG(this.dartException)},vh:function(a){throw H.b(a)},ft:function(a,b,c,d,e){var z=J.x(c)
if(z.n(c,0))return new H.dr(a).call$0()
else if(z.n(c,1))return new H.TL(a,d).call$0()
else if(z.n(c,2))return new H.KX(a,d,e).call$0()
else throw H.b(new P.HG("Unsupported number of arguments for wrapped closure"))},tR:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=(function ($2, $3) { return function($0, $1) { return $3(a, $2, b, $0, $1) }})($, H.eH.call$5)
a.$identity=z
return z},ag:function(a){throw H.b(new P.t7("Cyclic initialization for static "+H.d(a)))},oX:function(a){if(a==null)return
return a.$builtinTypeInfo},Ko:function(a){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.ia(a,1)
else if(typeof a=="function")return a.builtin$cls
else return},ia:function(a,b){var z,y,x,w,v,u
if(a==null)return""
z=P.p9("")
for(y=b,x=!0,w=!0;y<a.length;++y){if(x)x=!1
else z.oQ=z.oQ+", "
v=a[y]
if(v!=null)w=!1
u=H.Ko(v)
u=typeof u==="string"?u:u
z.oQ=z.oQ+u}return w?"":"<"+H.d(z)+">"},Ph:function(a){return a.constructor.name},f4:function(a){return H.xb(a)},vK:function(a){return H.xb(a)},mv:function(a){var z=H.xb(a)
if(z==="BeforeUnloadEvent")return"Event"
if(z==="DataTransfer")return"Clipboard"
if(z==="GeoGeolocation")return"Geolocation"
if(z==="WorkerMessageEvent")return"MessageEvent"
if(z==="XMLDocument")return"Document"
return z},Tx:function(a){var z=H.xb(a)
if(z==="Document"){if(!!a.xmlVersion)return"Document"
return"HTMLDocument"}if(z==="BeforeUnloadEvent")return"Event"
if(z==="DataTransfer")return"Clipboard"
if(z==="HTMLDDElement")return"HTMLElement"
if(z==="HTMLDTElement")return"HTMLElement"
if(z==="HTMLPhraseElement")return"HTMLElement"
if(z==="Position")return"Geoposition"
if(z==="Object")if(window.DataView&&a instanceof window.DataView)return"DataView"
return z},xb:function(a){var z,y,x,w
if(a==null)return"Null"
z=a.constructor
if(typeof z==="function"){y=z.builtin$cls
if(y!=null)return y
y=z.name
if(typeof y==="string")x=y!==""&&y!=="Object"&&y!=="Function.prototype"
else x=!1
if(x)return y}w=Object.prototype.toString.call(a)
return w.substring(8,w.length-1)},YE:function(a,b){if(!!/^HTML[A-Z].*Element$/.test(b)){if(Object.prototype.toString.call(a)==="[object Object]")return
return"HTMLElement"}return},VP:function(){var z=H.IG()
if(typeof dartExperimentalFixupGetTag=="function")return H.I8(dartExperimentalFixupGetTag,z)
return z},IG:function(){if(typeof navigator!=="object")return H.qA
var z=navigator.userAgent
if(z.indexOf("Chrome")!==-1||z.indexOf("DumpRenderTree")!==-1)return H.qA
else if(z.indexOf("Firefox")!==-1)return H.Bi
else if(z.indexOf("Trident/")!==-1)return H.tu
else if(z.indexOf("Opera")!==-1)return H.D3
else if(z.indexOf("AppleWebKit")!==-1)return H.nY
else return H.DA},I8:function(a,b){return new H.Vs(a((function(invoke, closure){return function(arg){ return invoke(closure, arg); };})(H.dq.call$2, b)))},jm:function(a,b){return a.call$1(b)},or:function(a){return"Instance of "+$.nn().call$1(a)},wz:function(a){return H.eQ(a)},iw:function(a,b,c){Object.defineProperty(a, b, {value: c, enumerable: false, writable: true, configurable: true})},x0:function(a,b){H.d4(a,b,!0)},jk:function(a,b){H.d4(a,b,!1)},XJ:function(a,b,c){var z,y,x
if($.LI==null)$.LI=[]
z=c
for(y=z.length,x=0;x<y;++x){$.LI.push(z[x])
$.LI.push(a)}H.d4(a,b,!1)},d4:function(a,b,c){var z,y,x,w
z=b.prototype
if($.NP==null)$.NP={}
if($.kP==null)$.kP={}
y=a.split("|")
for(x=0;x<y.length;++x){w=y[x]
$.NP[w]=z
$.kP[w]=c}},Yz:function(){},JC:function(a,b){var z=$.NP
if(z==null)return
return a.call(z,b)?z[b]:null},Px:function(a){var z,y,x,w,v
z=Object.prototype.hasOwnProperty
y=$.nn().call$1(a)
x=H.JC(z,y)
if(x==null){w=H.YE(a,y)
if(w!=null)x=H.JC(z,w)}if(x==null)return
v=$.kP
if(v!=null&&v[y]===true)return H.Va(x)
else return J.Qu(x,Object.getPrototypeOf(a),null,null)},Va:function(a){return J.Qu(a,!1,null,!!a.$isXj)},dr:{"":"Tp;a",
call$0:function(){return this.a.call$0()}},TL:{"":"Tp;b,c",
call$0:function(){return this.b.call$1(this.c)}},KX:{"":"Tp;d,e,f",
call$0:function(){return this.d.call$2(this.e,this.f)}},Tp:{"":"a;",
bu:function(a){return"Closure"}},Vs:{"":"Tp;a",
call$1:function(a){return this.a(a)}}}],["dart._collection.dev","dart:_collection-dev",,H,{mx:function(a,b,c){var z,y,x
for(y=0;y<$.RM().length;++y){x=$.RM()
if(y>=x.length)throw H.e(y)
if(x[y]===a)return H.d(b)+"..."+H.d(c)}z=P.p9("")
try{$.RM().push(a)
z.KF(b)
z.We(a,", ")
z.KF(c)}finally{x=$.RM()
if(0>=x.length)throw H.e(0)
x.pop()}return z.goQ()},a7:{"":"a;FI,Hd,F2,KY",
G:function(){var z,y,x,w
z=this.FI
y=J.U6(z)
x=y.gB(z)
if(this.Hd!==x)throw H.b(new P.UV(z))
w=this.F2
if(w>=x){this.KY=null
return!1}this.KY=y.Zv(z,w)
this.F2=this.F2+1
return!0}},SU:{"":"a;"}}],["dart.collection","dart:collection",,P,{FN:{"":"a;",
gA:function(a){return new H.a7(a,this.gB(a),0,null)},
Zv:function(a,b){return this.t(a,b)},
bu:function(a){var z,y,x
for(y=0;y<$.lD().length;++y){x=$.lD()
if(y>=x.length)throw H.e(y)
if(x[y]===a)return"[...]"}z=P.p9("")
try{$.lD().push(a)
z.KF("[")
z.We(a,", ")
z.KF("]")}finally{x=$.lD()
if(0>=x.length)throw H.e(0)
x.pop()}return z.goQ()}}}],["dart.core","dart:core",,P,{hl:function(a){return H.a5(a)},A:function(a){if(a==null)return new Array(0)
if(typeof a!=="number"||Math.floor(a)!==a||a<0)throw H.b(new P.AT("Length must be a positive integer: "+H.d(a)+"."))
return H.rD(a)},Ge:{"":"a;"},LK:{"":"Ge;",
bu:function(a){return"Throw of null."}},AT:{"":"Ge;G1",
bu:function(a){var z=this.G1
if(z!=null)return"Illegal argument(s): "+H.d(z)
return"Illegal argument(s)"}},bJ:{"":"AT;G1",
bu:function(a){return"RangeError: "+H.d(this.G1)}},ub:{"":"Ge;G1",
bu:function(a){return"Unsupported operation: "+this.G1}},UV:{"":"Ge;YA",
bu:function(a){return"Concurrent modification during iteration: "+P.hl(this.YA)+"."}},t7:{"":"Ge;Wo",
bu:function(a){return"Reading static variable '"+this.Wo+"' during its initialization"}},HG:{"":"a;G1",
bu:function(a){return"Exception: "+this.G1}},c8:{"":"a;",
bu:function(a){return"null"}},a:{"":";",
n:function(a,b){return this===b},
bu:function(a){return H.a5(this)}},Rn:{"":"a;oQ<",
KF:function(a){if(typeof a!=="string")return this.fh(1,a)
this.oQ=this.oQ+a},
fh:function(a,b){var z=typeof b==="string"?b:H.d(b)
this.oQ=this.oQ+z},
We:function(a,b){var z,y
z=J.GP(a)
if(!z.G())return
if(b.length===0)do{y=z.KY
y=typeof y==="string"?y:H.d(y)
this.oQ=this.oQ+y}while(z.G())
else{this.KF(z.KY)
for(;z.G();){this.oQ=this.oQ+b
y=z.KY
y=typeof y==="string"?y:H.d(y)
this.oQ=this.oQ+y}}},
bu:function(a){return this.oQ},
PD:function(a){this.oQ=a},
static:{p9:function(a){var z=new P.Rn("")
z.PD(a)
return z}}}}],["dart.dom.html","dart:html",,W,{qE:{"":"cv;"},Gh:{"":"qE;",
bu:function(a){return a.toString()}},Ny:{"":"qE;R:width}",
gVE:function(a){return a.getContext("2d")}},Nh:{"":"vB;",
bu:function(a){return a.toString()}},cv:{"":"KV;",
bu:function(a){return a.localName}},Fs:{"":"qE;R:width}"},D0:{"":"vB;"},tb:{"":"qE;R:width}"},pA:{"":"qE;R:width}"},Mi:{"":"qE;R:width}"},El:{"":"qE;"},KV:{"":"D0;",
bu:function(a){var z=a.nodeValue
return z==null?J.vB.prototype.bu.call(this,a):z}},G7:{"":"qE;R:width}"},aG:{"":"El;R:width}"},K5:{"":"D0;",
nV:function(a,b){return a.requestAnimationFrame(H.tR(b,1))},
rK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return
  (function($this) {
   var vendors = ['ms', 'moz', 'webkit', 'o'];
   for (var i = 0; i < vendors.length && !$this.requestAnimationFrame; ++i) {
     $this.requestAnimationFrame = $this[vendors[i] + 'RequestAnimationFrame'];
     $this.cancelAnimationFrame =
         $this[vendors[i]+'CancelAnimationFrame'] ||
         $this[vendors[i]+'CancelRequestAnimationFrame'];
   }
   if ($this.requestAnimationFrame && $this.cancelAnimationFrame) return;
   $this.requestAnimationFrame = function(callback) {
      return window.setTimeout(function() {
        callback(Date.now());
      }, 16 /* 16ms ~= 60fps */);
   };
   $this.cancelAnimationFrame = function(id) { clearTimeout(id); }
  })(a)},
bu:function(a){return a.toString()}}}],["dart.math","dart:math",,P,{vY:{"":"a;"}}],["dart.typed_data","dart:typed_data",,P,{xG:{"":"AS+FN;"},Vj:{"":"xG+SU;"},AS:{"":"vB;",
nG:function(a,b,c){if(b<0||b>=c)throw H.b(new P.bJ("value "+b+" not in range 0.."+c))
else throw H.b(new P.AT("Invalid list index "+b))}},oI:{"":"Vj;",
gB:function(a){return C.i7(a)},
t:function(a,b){var z=C.i7(a)
if(b>>>0!=b||b>=z)this.nG(a,b,z)
return a[b]},
$asXj:null,
$isXj:true}}],["particle_cube.dart","file:///C:/Users/Adminpc/Documents/GitHub/dart/particleCube/web/particle_cube.dart",,M,{Iq:function(){var z,y,x,w,v,u,t,s,r,q,p,o
$.qN=document.querySelector("#container")
$.eo=J.uP($.qN)
$.IB=$.qN.parentElement.clientWidth
$.Ii=$.qN.parentElement.clientHeight
J.vP($.qN,$.IB)
for(z=null,y=0;y<5000;++y,z=p){$.pa()
x=Math.random()
w=$.bD().Ev
if(0>=C.i7(w))throw H.e(0)
w=w[0]
$.pa()
v=Math.random()
u=$.bD().Ev
if(1>=C.i7(u))throw H.e(1)
u=u[1]
$.pa()
t=Math.random()
s=$.bD().Ev
if(2>=C.i7(s))throw H.e(2)
s=s[2]
$.pa()
r=Math.random()*255>>>0
r="#"+r.toString(16)
$.pa()
q=Math.random()*255>>>0
r+=q.toString(16)
$.pa()
q=Math.random()*255>>>0
p=new M.mU(null,null,r+q.toString(16))
r=new Float32Array(3)
r.$dartCachedLength=r.length
r=new T.An(r)
q=r.Ev
o=C.i7(q)
if(0>=o)throw H.e(0)
q[0]=x*w
if(1>=o)throw H.e(1)
q[1]=v*u
if(2>=o)throw H.e(2)
q[2]=t*s
p.B4=r
if(z!=null)z.aw=p
if($.Nb==null)$.Nb=p}x=$.eo
x.fillStyle="#FFFFFF"
x.setTransform(1,0,0,1,0,0)
x=window
C.ol.rK(x)
C.ol.nV(x,M.lS)},E2:function(a){var z,y,x,w,v,u
M.Ie()
$.O3().xI()
z=$.O3()
y=$.bD().Ev
if(0>=C.i7(y))throw H.e(0)
y=y[0]
x=$.bD().Ev
if(1>=C.i7(x))throw H.e(1)
x=x[1]
w=$.bD().Ev
if(2>=C.i7(w))throw H.e(2)
z.px(z,y*0.5,x*0.5,w[2]*0.5)
$.O3().MT($.Ej)
$.O3().jv($.Ej)
$.O3().cB($.Ej)
w=$.O3()
x=$.bD().Ev
if(0>=C.i7(x))throw H.e(0)
x=x[0]
y=$.bD().Ev
if(1>=C.i7(y))throw H.e(1)
y=y[1]
z=$.bD().Ev
if(2>=C.i7(z))throw H.e(2)
w.px(w,-x*0.5,-y*0.5,-z[2]*0.5)
$.Ej=0.005
v=$.Nb
for(;v!=null;){v.T1
M.DV(v.B4,$.P0())
z=$.eo
z.fillStyle=v.Xw
y=$.P0().Ev
if(0>=C.i7(y))throw H.e(0)
y=y[0]
if(isNaN(y))H.vh(new P.ub("NaN"))
if(y==Infinity||y==-Infinity)H.vh(new P.ub("Infinity"))
u=y<0?Math.ceil(y):Math.floor(y)
y=u==-0.0?0:u
x=$.P0().Ev
if(1>=C.i7(x))throw H.e(1)
x=x[1]
if(isNaN(x))H.vh(new P.ub("NaN"))
if(x==Infinity||x==-Infinity)H.vh(new P.ub("Infinity"))
u=x<0?Math.ceil(x):Math.floor(x)
x=u==-0.0?0:u
w=$.tZ
z.fillRect(y,x,w,w)
v=v.aw}z=window
C.ol.rK(z)
C.ol.nV(z,M.lS)},Ie:function(){$.eo.save()
$.eo.transform(1,0,0,1,0,0)
$.eo.clearRect(0,0,$.IB,$.Ii)
$.eo.restore()},mU:{"":"a;aw,B4,Xw",static:{"":"Nb,NX",DV:function(a,b){var z,y,x,w,v,u
z=$.O3().qT(a)
z.Kj($.O3())
y=z.Ev
if(0>=C.i7(y))throw H.e(0)
x=y[0]
w=$.IB
v=$.bD().Ev
if(0>=C.i7(v))throw H.e(0)
v=v[0]
if(w==null)throw w.W()
u=b.Ev
if(0>=C.i7(u))throw H.e(0)
u[0]=x+(w-v)*0.5
if(1>=C.i7(y))throw H.e(1)
y=y[1]
v=$.Ii
w=$.bD().Ev
if(1>=C.i7(w))throw H.e(1)
w=w[1]
if(v==null)throw v.W()
if(1>=C.i7(u))throw H.e(1)
u[1]=y+(v-w)*0.5}}}},1],["vector_math","package:vector_math/vector_math.dart",,T,{aI:{"":"a;Ev",
bu:function(a){return"[0] "+H.d(this.aE(0))+"\n[1] "+H.d(this.aE(1))+"\n[2] "+H.d(this.aE(2))+"\n[3] "+H.d(this.aE(3))+"\n"},
aE:function(a){var z,y,x,w,v,u
z=new Float32Array(4)
z.$dartCachedLength=z.length
y=new T.Bp(z)
z=y.Ev
x=this.Ev
w=0+a
v=C.i7(x)
if(w<0||w>=v)throw H.e(w)
w=x[w]
u=C.i7(z)
if(0>=u)throw H.e(0)
z[0]=w
w=4+a
if(w<0||w>=v)throw H.e(w)
w=x[w]
if(1>=u)throw H.e(1)
z[1]=w
w=8+a
if(w<0||w>=v)throw H.e(w)
w=x[w]
if(2>=u)throw H.e(2)
z[2]=w
w=12+a
if(w<0||w>=v)throw H.e(w)
w=x[w]
if(3>=u)throw H.e(3)
z[3]=w
return y},
px:function(a,b,c,d){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
z=typeof b==="object"&&b!==null&&!!C.CD.$isBp
y=z?b.gES():1
if(typeof b==="object"&&b!==null&&!!C.CD.$isAn||z){x=C.CD.gx(b)
w=C.CD.gy(b)
v=C.CD.gz(b)}else{v=d
w=c
x=b}z=this.Ev
u=C.i7(z)
if(0>=u)throw H.e(0)
t=z[0]
if(typeof x!=="number")throw H.s(x)
if(4>=u)throw H.e(4)
s=z[4]
if(typeof w!=="number")throw H.s(w)
if(8>=u)throw H.e(8)
r=z[8]
if(typeof v!=="number")throw H.s(v)
if(12>=u)throw H.e(12)
q=z[12]
p=z[1]
o=z[5]
n=z[9]
if(13>=u)throw H.e(13)
m=z[13]
l=z[2]
k=z[6]
j=z[10]
if(14>=u)throw H.e(14)
i=z[14]
h=z[3]
g=z[7]
f=z[11]
if(15>=u)throw H.e(15)
u=z[15]
z[12]=t*x+s*w+r*v+q*y
z[13]=p*x+o*w+n*v+m*y
z[14]=l*x+k*w+j*v+i*y
z[15]=h*x+g*w+f*v+u*y
return this},
MT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.Ev
w=C.i7(x)
if(4>=w)throw H.e(4)
v=x[4]
if(8>=w)throw H.e(8)
u=x[8]
t=x[5]
if(9>=w)throw H.e(9)
s=x[9]
r=x[6]
if(10>=w)throw H.e(10)
q=x[10]
p=x[7]
if(11>=w)throw H.e(11)
w=x[11]
o=-y
x[4]=v*z+u*y
x[5]=t*z+s*y
x[6]=r*z+q*y
x[7]=p*z+w*y
x[8]=v*o+u*z
x[9]=t*o+s*z
x[10]=r*o+q*z
x[11]=p*o+w*z
return this},
jv:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.Ev
w=C.i7(x)
if(0>=w)throw H.e(0)
v=x[0]
if(8>=w)throw H.e(8)
u=x[8]
t=x[1]
if(9>=w)throw H.e(9)
s=x[9]
r=x[2]
if(10>=w)throw H.e(10)
q=x[10]
p=x[3]
if(11>=w)throw H.e(11)
w=x[11]
o=-y
x[0]=v*z+u*y
x[1]=t*z+s*y
x[2]=r*z+q*y
x[3]=p*z+w*y
x[8]=v*o+u*z
x[9]=t*o+s*z
x[10]=r*o+q*z
x[11]=p*o+w*z
return this},
cB:function(a){var z,y,x,w,v,u,t,s,r,q,p,o
z=Math.cos(a)
y=Math.sin(a)
x=this.Ev
w=C.i7(x)
if(0>=w)throw H.e(0)
v=x[0]
if(4>=w)throw H.e(4)
u=x[4]
t=x[1]
if(5>=w)throw H.e(5)
s=x[5]
r=x[2]
if(6>=w)throw H.e(6)
q=x[6]
p=x[3]
if(7>=w)throw H.e(7)
w=x[7]
o=-y
x[0]=v*z+u*y
x[1]=t*z+s*y
x[2]=r*z+q*y
x[3]=p*z+w*y
x[4]=v*o+u*z
x[5]=t*o+s*z
x[6]=r*o+q*z
x[7]=p*o+w*z
return this},
xI:function(){var z,y
z=this.Ev
y=C.i7(z)
if(0>=y)throw H.e(0)
z[0]=1
if(1>=y)throw H.e(1)
z[1]=0
if(2>=y)throw H.e(2)
z[2]=0
if(3>=y)throw H.e(3)
z[3]=0
if(4>=y)throw H.e(4)
z[4]=0
if(5>=y)throw H.e(5)
z[5]=1
if(6>=y)throw H.e(6)
z[6]=0
if(7>=y)throw H.e(7)
z[7]=0
if(8>=y)throw H.e(8)
z[8]=0
if(9>=y)throw H.e(9)
z[9]=0
if(10>=y)throw H.e(10)
z[10]=1
if(11>=y)throw H.e(11)
z[11]=0
if(12>=y)throw H.e(12)
z[12]=0
if(13>=y)throw H.e(13)
z[13]=0
if(14>=y)throw H.e(14)
z[14]=0
if(15>=y)throw H.e(15)
z[15]=1
return this},
qT:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j
z=this.Ev
y=C.i7(z)
if(0>=y)throw H.e(0)
x=z[0]
w=a.Ev
v=C.i7(w)
if(0>=v)throw H.e(0)
u=w[0]
if(4>=y)throw H.e(4)
t=z[4]
if(1>=v)throw H.e(1)
s=w[1]
if(8>=y)throw H.e(8)
r=z[8]
if(2>=v)throw H.e(2)
v=w[2]
if(12>=y)throw H.e(12)
q=z[12]
p=z[1]
o=z[5]
n=z[9]
if(13>=y)throw H.e(13)
m=z[13]
l=z[2]
k=z[6]
j=z[10]
if(14>=y)throw H.e(14)
z=z[14]
w[0]=x*u+t*s+r*v+q
w[1]=p*u+o*s+n*v+m
w[2]=l*u+k*s+j*v+z
return a}},z3:{"":"a;Ev",
bu:function(a){var z,y
z=this.Ev
if(0>=C.i7(z))throw H.e(0)
y="["+H.d(z[0])+","
if(1>=C.i7(z))throw H.e(1)
return y+H.d(z[1])+"]"}},An:{"":"a;Ev",
PJ:function(a,b,c){var z,y
z=this.Ev
y=C.i7(z)
if(0>=y)throw H.e(0)
z[0]=a
if(1>=y)throw H.e(1)
z[1]=b
if(2>=y)throw H.e(2)
z[2]=c
return this},
bu:function(a){var z,y
z=this.Ev
if(0>=C.i7(z))throw H.e(0)
y="["+H.d(z[0])+","
if(1>=C.i7(z))throw H.e(1)
y=y+H.d(z[1])+","
if(2>=C.i7(z))throw H.e(2)
return y+H.d(z[2])+"]"},
Kj:function(a){var z,y,x,w,v,u,t,s,r,q
z=this.Ev
y=C.i7(z)
if(0>=y)throw H.e(0)
x=z[0]
if(1>=y)throw H.e(1)
w=z[1]
if(2>=y)throw H.e(2)
v=z[2]
y=a.Ev
u=C.i7(y)
if(3>=u)throw H.e(3)
t=y[3]
if(7>=u)throw H.e(7)
s=y[7]
if(11>=u)throw H.e(11)
r=y[11]
if(15>=u)throw H.e(15)
q=1/(t*x+s*w+r*v+y[15])
z[0]=(y[0]*x+y[4]*w+y[8]*v+y[12])*q
z[1]=(y[1]*x+y[5]*w+y[9]*v+y[13])*q
z[2]=(y[2]*x+y[6]*w+y[10]*v+y[14])*q
return this},
$isAn:true},Bp:{"":"a;Ev",
bu:function(a){var z,y
z=this.Ev
if(0>=C.i7(z))throw H.e(0)
y=H.d(z[0])+","
if(1>=C.i7(z))throw H.e(1)
y=y+H.d(z[1])+","
if(2>=C.i7(z))throw H.e(2)
y=y+H.d(z[2])+","
if(3>=C.i7(z))throw H.e(3)
return y+H.d(z[3])},
gES:function(){var z=this.Ev
if(3>=C.i7(z))throw H.e(3)
return z[3]},
$isBp:true}}],])
I.$finishClasses($$,$,null)
$$=null
init.globalFunctions.Eu=H.Eu=new H.E8(H.Ju,"Eu")
init.globalFunctions.eH=H.eH=new H.oL(H.ft,"eH")
init.globalFunctions.qA=H.qA=new H.v8(H.Ph,"qA")
init.globalFunctions.nY=H.nY=new H.EE(H.f4,"nY")
init.globalFunctions.D3=H.D3=new H.Q3(H.vK,"D3")
init.globalFunctions.Bi=H.Bi=new H.Pi(H.mv,"Bi")
init.globalFunctions.tu=H.tu=new H.jU(H.Tx,"tu")
init.globalFunctions.DA=H.DA=new H.eB(H.xb,"DA")
init.globalFunctions.dq=H.dq=new H.r7(H.jm,"dq")
init.globalFunctions.lS=M.lS=new M.pR(M.E2,"lS")
J.RE=function(a){if(a==null)return a
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.U6=function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.rY=function(a){if(typeof a=="string")return J.O.prototype
if(a==null)return a
if(!(a instanceof P.a))return J.kd.prototype
return a}
J.w1=function(a){if(a==null)return a
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
J.x=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.im.prototype
return J.VA.prototype}if(typeof a=="string")return J.O.prototype
if(a==null)return J.PE.prototype
if(typeof a=="boolean")return J.yE.prototype
if(a.constructor==Array)return J.Q.prototype
if(typeof a!="object")return a
if(a instanceof P.a)return a
return J.ks(a)}
C.Ku=new J.kd()
C.JB=new P.vY()
C.CD=J.P.prototype
C.i7=    ((typeof version == "function" && typeof os == "object" && "system" in os)
    || (typeof navigator == "object"
        && navigator.userAgent.indexOf('Chrome') != -1))
        ? function(x) { return x.$dartCachedLength || x.length; }
        : function(x) { return x.length; };

C.ol=W.K5.prototype
$.NP=null
$.kP=null
$.LI=null
$.tZ=2
$.qN=null
$.eo=null
$.IB=null
$.Ii=null
$.Ej=0
$.Nb=null
J.AG=function(a){return J.x(a).bu(a)}
J.GP=function(a){return J.w1(a).gA(a)}
J.uP=function(a){return J.RE(a).gVE(a)}
J.vP=function(a,b){return J.RE(a).sR(a,b)}
J.xC=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).n(a,b)}
$.Au=[]
I.$lazy($,"getTypeNameOf","Zv","nn",function(){return H.VP()})
I.$lazy($,"_toStringList","Ml","RM",function(){return P.A(null)})
I.$lazy($,"_toStringList","Pl","lD",function(){return P.A(null)})
I.$lazy($,"_bounds","Up","bD",function(){var z,y,x
z=$.IB
if(z==null)throw z.U()
y=$.Ii
if(y==null)throw y.U()
x=new Float32Array(3)
x.$dartCachedLength=x.length
x=new T.An(x)
x.PJ(z*0.5,y*0.5,100)
return x})
I.$lazy($,"matrix4","G2","O3",function(){var z=new Float32Array(16)
z.$dartCachedLength=z.length
z=new T.aI(z)
z.xI()
return z})
I.$lazy($,"random","Y4","pa",function(){return C.JB})
I.$lazy($,"_screenPt","NX","P0",function(){var z,y,x
z=new Float32Array(2)
z.$dartCachedLength=z.length
z=new T.z3(z)
y=z.Ev
x=C.i7(y)
if(0>=x)throw H.e(0)
y[0]=0
if(1>=x)throw H.e(1)
y[1]=0
return z})
H.x0("AutocompleteErrorEvent|CanvasGradient|CanvasPattern|CanvasRenderingContext|CanvasRenderingContext2D|DOMError|ErrorEvent|Event|FileError|MediaError|MediaKeyError|NavigatorUserMediaError|PositionError|SQLError|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedTransformList|SpeechRecognitionError",J.vB)
H.x0("HTMLAppletElement|HTMLAreaElement|HTMLBRElement|HTMLBaseElement|HTMLBaseFontElement|HTMLBodyElement|HTMLButtonElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLDivElement|HTMLFieldSetElement|HTMLFontElement|HTMLFormElement|HTMLFrameElement|HTMLFrameSetElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLKeygenElement|HTMLLIElement|HTMLLabelElement|HTMLLegendElement|HTMLLinkElement|HTMLMapElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMetaElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLOutputElement|HTMLParagraphElement|HTMLParamElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLSelectElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableElement|HTMLTableHeaderCellElement|HTMLTableRowElement|HTMLTableSectionElement|HTMLTemplateElement|HTMLTextAreaElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement",W.qE)
H.jk("HTMLElement",W.qE)
H.x0("HTMLAnchorElement",W.Gh)
H.x0("HTMLCanvasElement",W.Ny)
H.x0("DOMException",W.Nh)
H.x0("SVGAElement|SVGAltGlyphDefElement|SVGAltGlyphElement|SVGAltGlyphItemElement|SVGAnimateColorElement|SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGCircleElement|SVGClipPathElement|SVGComponentTransferFunctionElement|SVGCursorElement|SVGDefsElement|SVGDescElement|SVGElement|SVGEllipseElement|SVGFEBlendElement|SVGFEColorMatrixElement|SVGFEComponentTransferElement|SVGFECompositeElement|SVGFEConvolveMatrixElement|SVGFEDiffuseLightingElement|SVGFEDisplacementMapElement|SVGFEDistantLightElement|SVGFEDropShadowElement|SVGFEFloodElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEGaussianBlurElement|SVGFEImageElement|SVGFEMergeElement|SVGFEMergeNodeElement|SVGFEMorphologyElement|SVGFEOffsetElement|SVGFEPointLightElement|SVGFESpecularLightingElement|SVGFESpotLightElement|SVGFETileElement|SVGFETurbulenceElement|SVGFilterElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGForeignObjectElement|SVGGElement|SVGGlyphElement|SVGGlyphRefElement|SVGGradientElement|SVGGraphicsElement|SVGHKernElement|SVGImageElement|SVGLineElement|SVGLinearGradientElement|SVGMPathElement|SVGMarkerElement|SVGMaskElement|SVGMetadataElement|SVGMissingGlyphElement|SVGPathElement|SVGPatternElement|SVGPolygonElement|SVGPolylineElement|SVGRadialGradientElement|SVGRectElement|SVGSVGElement|SVGScriptElement|SVGSetElement|SVGStopElement|SVGStyleElement|SVGSwitchElement|SVGSymbolElement|SVGTRefElement|SVGTSpanElement|SVGTextContentElement|SVGTextElement|SVGTextPathElement|SVGTextPositioningElement|SVGTitleElement|SVGUseElement|SVGVKernElement|SVGViewElement",W.cv)
H.jk("Element",W.cv)
H.x0("HTMLEmbedElement",W.Fs)
H.jk("EventTarget",W.D0)
H.x0("HTMLIFrameElement",W.tb)
H.x0("HTMLImageElement",W.pA)
H.x0("HTMLInputElement",W.Mi)
H.x0("HTMLAudioElement",W.El)
H.jk("HTMLMediaElement",W.El)
H.x0("Document|HTMLDocument",W.KV)
H.jk("Node",W.KV)
H.x0("HTMLObjectElement",W.G7)
H.x0("HTMLVideoElement",W.aG)
H.x0("DOMWindow|Window",W.K5)
H.XJ("ArrayBufferView",P.AS,[P.xG,P.Vj])
H.x0("Float32Array",P.oI)

init.functionAliases={}
init.metadata=[];$=null
I = I.$finishIsolateConstructor(I)
$=new I()
function convertToFastObject(properties) {
  function makeConstructor() {
    var str = "{\n";
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    for (var property in properties) {
      if (hasOwnProperty.call(properties, property)) {
        str += "this." + property + "= properties." + property + ";\n";
      }
    }
    str += "}\n";
    return new Function("properties", str);
  };
  var constructor = makeConstructor();
  return makeConstructor.prototype = new constructor(properties);
}
A = convertToFastObject(A)
B = convertToFastObject(B)
C = convertToFastObject(C)
D = convertToFastObject(D)
E = convertToFastObject(E)
F = convertToFastObject(F)
G = convertToFastObject(G)
H = convertToFastObject(H)
J = convertToFastObject(J)
K = convertToFastObject(K)
L = convertToFastObject(L)
M = convertToFastObject(M)
N = convertToFastObject(N)
O = convertToFastObject(O)
P = convertToFastObject(P)
Q = convertToFastObject(Q)
R = convertToFastObject(R)
S = convertToFastObject(S)
T = convertToFastObject(T)
U = convertToFastObject(U)
V = convertToFastObject(V)
W = convertToFastObject(W)
X = convertToFastObject(X)
Y = convertToFastObject(Y)
Z = convertToFastObject(Z)
!function(){var z=Object.prototype
for(var y=0;;y++){var x="___dart_dispatch_record_ZxYxX_0_"
if(y>0)x=rootProperty+"_"+y
if(!(x in z))return init.dispatchPropertyName=x}}()
;(function (callback) {
  if (typeof document === "undefined") {
    callback(null);
    return;
  }
  if (document.currentScript) {
    callback(document.currentScript);
    return;
  }

  var scripts = document.scripts;
  function onLoad(event) {
    for (var i = 0; i < scripts.length; ++i) {
      scripts[i].removeEventListener("load", onLoad, false);
    }
    callback(event.target);
  }
  for (var i = 0; i < scripts.length; ++i) {
    scripts[i].addEventListener("load", onLoad, false);
  }
})(function(currentScript) {
  init.currentScript = currentScript;

  if (typeof dartMainRunner === "function") {
    dartMainRunner(function() { M.Iq(); });
  } else {
    M.Iq();
  }
})
function init(){I.p={}
function generateAccessor(a,b){var x=a.length
var w=a.charCodeAt(x-1)
var v=false
if(w==45){x--
w=a.charCodeAt(x-1)
a=a.substring(0,x)
v=true}w=w>=60&&w<=64?w-59:w>=123&&w<=126?w-117:w>=37&&w<=43?w-27:0
if(w){var u=w&3
var t=w>>2
var s=a=a.substring(0,x-1)
var r=a.indexOf(":")
if(r>0){s=a.substring(0,r)
a=a.substring(r+1)}if(u){var q=u&2?"r":""
var p=u&1?"this":"r"
var o="return "+p+"."+a
b["g"+s]=new Function(q,o)
if(v){b["g"+s].$reflectable=1}}if(t){var q=t&2?"r,v":"v"
var p=t&1?"this":"r"
var o=p+"."+a+"=v"
b["s"+s]=new Function(q,o)
if(v){b["s"+s].$reflectable=1}}}return a}I.p.$generateAccessor=generateAccessor
function defineClass(a,b,c,d){var x
if(typeof c=="function"){x=c}else{var w="function "+b+"("
var v=""
for(var u=0;u<c.length;u++){if(u!=0)w+=", "
var t=generateAccessor(c[u],d)
var s="parameter_"+t
w+=s
v+="this."+t+" = "+s+";\n"}w+=") {"+v+"}\nreturn "+b
x=new Function(w)()}x.prototype=d
x.builtin$cls=a
return x}var z=false
var y=defineClass("c","c",["f<"],{}).prototype
if(y.__proto__){y.__proto__={}
if(typeof y.get$f!="undefined")z=true}I.$finishClasses=function(a,b,c){var x={}
if(!init.allClasses)init.allClasses={}
var w=init.allClasses
var v=Object.prototype.hasOwnProperty
for(var u in a){if(v.call(a,u)){var t=a[u]
var s=b
if(t instanceof Array){s=t[0]||b
t=t[1]}var r=t[""],q,p=u,o=r
if(typeof r=="string"){var n=r.split("/")
if(n.length==2){p=n[0]
o=n[1]}}if(typeof o=="string"){var m=o.split(";")
o=m[1]==""?[]:m[1].split(",")
q=m[0]}else{q=t.super
if(!!t.$name)p=t.$name}if(q&&q.indexOf("+")>0){m=q.split("+")
q=m[0]
var l=a[m[1]]
if(l instanceof Array)l=l[1]
for(var k in l){if(v.call(l,k)&&!v.call(t,k))t[k]=l[k]}}var j=defineClass(p,u,o,t)
w[u]=j
s[u]=j
if(q)x[u]=q}}var i={}
function finishClass(a2){var h=Object.prototype.hasOwnProperty
if(h.call(i,a2))return
i[a2]=true
var g=x[a2]
if(!g||typeof g!="string")return
finishClass(g)
var f=w[a2]
var e=w[g]
if(!e)e=c[g]
var d=f.prototype
if(z){d.__proto__=e.prototype
d.constructor=f}else{function y(){}y.prototype=e.prototype
var a0=new y()
f.prototype=a0
a0.constructor=f
for(var a1 in d){if(!a1)continue
if(h.call(d,a1)){a0[a1]=d[a1]}}}}for(var u in x)finishClass(u)}
I.$lazy=function(a,b,c,d,e){var x=new Function("{ return this."+c+";}")
var w={}
var v={}
a[c]=w
a[d]=function(){var u=$[c]
try{if(u===w){$[c]=v
try{u=$[c]=e()}finally{if(u===w){if($[c]===v){$[c]=null}}}}else{if(u===v)H.ag(b)}return u}finally{$[d]=x}}}
I.$finishIsolateConstructor=function(a){var x=a.p
var w=a.prototype
var v="{\n"
v+="var properties = arguments.callee.p;\n"
var u=Object.prototype.hasOwnProperty
for(var t in x){if(u.call(x,t)){v+="this."+t+"= properties."+t+";\n"}}v+="}\n"
var s=new Function(v)
s.prototype=w
w.constructor=s
s.p=x
s.makeConstantList=a.makeConstantList
s.$finishClasses=a.$finishClasses
return s}}
})()