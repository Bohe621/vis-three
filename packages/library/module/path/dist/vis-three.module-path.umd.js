(function(c,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("@vis-three/middleware"),require("uuid"),require("three")):typeof define=="function"&&define.amd?define(["exports","@vis-three/middleware","uuid","three"],i):(c=typeof globalThis!="undefined"?globalThis:c||self,i((c["vis-three"]=c["vis-three"]||{},c["vis-three"]["module-path"]={}),c.middleware,c.uuid,c.three))})(this,function(c,i,v,o){"use strict";var X=Object.defineProperty;var A=(c,i,v)=>i in c?X(c,i,{enumerable:!0,configurable:!0,writable:!0,value:v}):c[i]=v;var p=(c,i,v)=>(A(c,typeof i!="symbol"?i+"":i,v),v);class E extends i.Compiler{constructor(){super()}compile(e,s){return super.compile(e,s),this}}const $=function(t,e,s=v.validate){i.Rule(t,e,s)},O=function(){return Object.assign(i.getSymbolConfig(),{curves:[],autoClose:!1})},G=function(){return Object.assign(i.getSymbolConfig(),{})},u=class extends o.EllipseCurve{constructor(s,n,r,a,f,y){super(0,0,1,1,0,Math.PI*2,!1,0);p(this,"start",new o.Vector2);p(this,"end",new o.Vector2);p(this,"vertical",0);p(this,"center",new o.Vector2);p(this,"mid",new o.Vector2);const d=s,P=r,V=f,m=n,w=a,x=y,L=d-P,N=m-w,j=d-V,z=m-x,T=(d*d-P*P+(m*m-w*w))/2,B=(d*d-V*V+(m*m-x*x))/2,D=N*j-L*z,S=-(z*T-N*B)/D,M=-(L*B-j*T)/D,U=(V+d)/2,k=(x+m)/2,F=u.isLeft(u.tempVector1.set(d,m),u.tempVector2.set(V,x),u.tempVector3.set(S,M)),Q=u.tempVector1.set(S,M).sub(u.tempVector2.set(U,k)).length()*(F?-1:1);this.start.set(s,n),this.end.set(f,y),this.vertical=Q;const K=this.start,Z=this.end,h=this.center.copy(this.end).sub(this.start),R=this.mid.set(U,k);h.set(-h.y,h.x).negate().normalize().multiplyScalar(Q).add(R),this.aX=h.x,this.aY=h.y;const q=u.tempVector1;this.xRadius=q.copy(Z).sub(h).length(),this.yRadius=this.xRadius,this.aStartAngle=q.copy(K).sub(h).angle(),this.aEndAngle=q.copy(Z).sub(h).angle();const W=u.tempVector2.set(P,w).sub(R),Y=u.tempVector3.set(S,M).sub(R);this.aClockwise=!((F?1:-1)*(u.isSameDirecton(W,Y)?1:-1)<0)}};let l=u;p(l,"isLeft",function(s,n,r){return(n.x-s.x)*(r.y-s.y)-(n.y-s.y)*(r.x-s.x)>0}),p(l,"isSameDirecton",function(s,n){const r=Math.sqrt(s.lengthSq()*n.lengthSq());if(r===0)return!1;const a=s.dot(n)/r;return Math.acos(o.MathUtils.clamp(a,-1,1))<Math.PI/2}),p(l,"tempVector1",new o.Vector2),p(l,"tempVector2",new o.Vector2),p(l,"tempVector3",new o.Vector2);const I={arc:(t,e,s,n,r,a)=>new l(t,e,s,n,r,a),line:(t,e,s,n)=>new o.LineCurve(new o.Vector2(t,e),new o.Vector2(s,n)),bezier:(t,e,s,n,r,a,f,y)=>new o.CubicBezierCurve(new o.Vector2(t,e),new o.Vector2(s,n),new o.Vector2(r,a),new o.Vector2(f,y)),quadratic:(t,e,s,n,r,a)=>new o.QuadraticBezierCurve(new o.Vector2(t,e),new o.Vector2(s,n),new o.Vector2(r,a))},C=function(t,e){return e==="start"?{x:t.params[0],y:t.params[1]}:{x:t.params[t.params.length-2],y:t.params[t.params.length-1]}},b=function(t){return I[t.curve]?I[t.curve](...t.params):(console.warn(`path processor can not support this curve: ${t.curve}`),null)},g=function(t,e,s){if(s==="start")t.params[0]!==e[0]&&(t.params[0]=e[0]),t.params[1]!==e[1]&&(t.params[1]=e[1]);else{const n=t.params.length-1;t.params[n-1]!==e[0]&&(t.params[n-1]=e[0]),t.params[n]!==e[1]&&(t.params[n]=e[1])}};var H=i.defineProcessor({type:"Path",config:O,commands:{add:{curves({target:t,config:e,value:s}){const n=b(s);n&&t.curves.push(n)}},set:{curves({target:t,config:e,path:s,key:n}){let r=Number(s[1]);if(!Number.isInteger(r)){if(Number.isInteger(Number(n)))return;console.warn("path processor: set curves path error:",s);return}const a=b(e.curves[r]);t.curves[r]=a;const f=C(e.curves[r],"start"),y=C(e.curves[r],"end");r-1>=0&&g(e.curves[r-1],[f.x,f.y],"end"),r+1<=e.curves.length-1&&g(e.curves[r+1],[y.x,y.y],"start")}},delete:{curves({target:t,config:e,key:s}){const n=Number(s);if(!(t.curves.length-1<n)&&(t.curves.splice(n,1),n<=e.curves.length-1&&n-1>=0)){const r=C(e.curves[n-1],"end");g(e.curves[n],[r.x,r.y],"start")}}}},create(t,e){const s=new o.Path;if(t.curves.length)for(const n of t.curves){const r=b(n);r&&s.curves.push(r)}return s.autoClose=t.autoClose,s},dispose(t){t.curves=[]}}),J={type:"path",compiler:E,rule:$,processors:[H],lifeOrder:i.SUPPORT_LIFE_CYCLE.ZERO};c.PathCompiler=E,c.default=J,c.getPath3Config=G,c.getPathConfig=O,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
