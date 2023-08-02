"use strict";(()=>{var mo="149";var iu=0,gl=1,su=2;var Lc=1,ru=2,Ss=3,Wn=0,Ve=1,Vn=2;var Gn=0,Ji=1,_l=2,xl=3,yl=4,au=5,Xi=100,ou=101,lu=102,vl=103,bl=104,cu=200,hu=201,uu=202,fu=203,Dc=204,Ic=205,du=206,pu=207,mu=208,gu=209,_u=210,xu=0,yu=1,vu=2,Fa=3,bu=4,Mu=5,wu=6,Su=7,Oc=0,Tu=1,Au=2,En=0,Eu=1,Cu=2,Pu=3,Ru=4,Lu=5,Fc=300,Qi=301,ji=302,Na=303,za=304,Lr=306,Ua=1e3,an=1001,ka=1002,Te=1003,Ml=1004;var na=1005;var Ht=1006,Du=1007;var Es=1008;var di=1009,Iu=1010,Ou=1011,Nc=1012,Fu=1013,ci=1014,hi=1015,Cs=1016,Nu=1017,zu=1018,$i=1020,Uu=1021,on=1023,ku=1024,Bu=1025,ui=1026,ts=1027,Vu=1028,Gu=1029,Wu=1030,Hu=1031,qu=1033,ia=33776,sa=33777,ra=33778,aa=33779,wl=35840,Sl=35841,Tl=35842,Al=35843,Xu=36196,El=37492,Cl=37496,Pl=37808,Rl=37809,Ll=37810,Dl=37811,Il=37812,Ol=37813,Fl=37814,Nl=37815,zl=37816,Ul=37817,kl=37818,Bl=37819,Vl=37820,Gl=37821,oa=36492,Yu=36283,Wl=36284,Hl=36285,ql=36286;var mr=2300,gr=2301,la=2302,Xl=2400,Yl=2401,Zl=2402;var pi=3e3,Bt=3001,Zu=3200,Ju=3201,$u=0,Ku=1;var fn="srgb",Ps="srgb-linear";var ca=7680;var Qu=519,Jl=35044;var $l="300 es",Ba=1035,Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}},ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ha=Math.PI/180,Kl=180/Math.PI;function Os(){let o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ge[o&255]+ge[o>>8&255]+ge[o>>16&255]+ge[o>>24&255]+"-"+ge[t&255]+ge[t>>8&255]+"-"+ge[t>>16&15|64]+ge[t>>24&255]+"-"+ge[e&63|128]+ge[e>>8&255]+"-"+ge[e>>16&255]+ge[e>>24&255]+ge[n&255]+ge[n>>8&255]+ge[n>>16&255]+ge[n>>24&255]).toLowerCase()}function ke(o,t,e){return Math.max(t,Math.min(e,o))}function ju(o,t){return(o%t+t)%t}function ua(o,t,e){return(1-e)*o+e*t}function Ql(o){return(o&o-1)===0&&o!==0}function Va(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Zs(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ne(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var Nt=class{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ae=class{constructor(){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,r,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=r,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],u=i[0],p=i[3],_=i[6],b=i[1],y=i[4],v=i[7],w=i[2],E=i[5],C=i[8];return s[0]=a*u+r*b+l*w,s[3]=a*p+r*y+l*E,s[6]=a*_+r*v+l*C,s[1]=c*u+h*b+d*w,s[4]=c*p+h*y+d*E,s[7]=c*_+h*v+d*C,s[2]=f*u+m*b+g*w,s[5]=f*p+m*y+g*E,s[8]=f*_+m*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*r*c-n*s*h+n*r*l+i*s*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=h*a-r*c,f=r*l-h*s,m=c*s-a*l,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let u=1/g;return t[0]=d*u,t[1]=(i*c-h*n)*u,t[2]=(r*n-i*a)*u,t[3]=f*u,t[4]=(h*e-i*l)*u,t[5]=(i*s-r*e)*u,t[6]=m*u,t[7]=(n*l-c*e)*u,t[8]=(a*e-n*s)*u,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,r){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-i*c,i*l,-i*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},fa=new Ae;function zc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Rs(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function pr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}var da={[fn]:{[Ps]:fi},[Ps]:{[fn]:pr}},we={legacyMode:!0,get workingColorSpace(){return Ps},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(da[t]&&da[t][e]!==void 0){let n=da[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ne={r:0,g:0,b:0},nn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function pa(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function $s(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}var Vt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=we.workingColorSpace){return this.r=t,this.g=e,this.b=n,we.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=we.workingColorSpace){if(t=ju(t,1),e=ke(e,0,1),n=ke(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=pa(a,s,t+1/3),this.g=pa(a,s,t),this.b=pa(a,s,t-1/3)}return we.toWorkingColorSpace(this,i),this}setStyle(t,e=fn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s,a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,we.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,we.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){let l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,we.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,we.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=fn){let n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fi(t.r),this.g=fi(t.g),this.b=fi(t.b),this}copyLinearToSRGB(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return we.fromWorkingColorSpace($s(this,ne),t),ke(ne.r*255,0,255)<<16^ke(ne.g*255,0,255)<<8^ke(ne.b*255,0,255)<<0}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=we.workingColorSpace){we.fromWorkingColorSpace($s(this,ne),e);let n=ne.r,i=ne.g,s=ne.b,a=Math.max(n,i,s),r=Math.min(n,i,s),l,c,h=(r+a)/2;if(r===a)l=0,c=0;else{let d=a-r;switch(c=h<=.5?d/(a+r):d/(2-a-r),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=we.workingColorSpace){return we.fromWorkingColorSpace($s(this,ne),e),t.r=ne.r,t.g=ne.g,t.b=ne.b,t}getStyle(t=fn){return we.fromWorkingColorSpace($s(this,ne),t),t!==fn?`color(${t} ${ne.r} ${ne.g} ${ne.b})`:`rgb(${ne.r*255|0},${ne.g*255|0},${ne.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Js);let n=ua(nn.h,Js.h,e),i=ua(nn.s,Js.s,e),s=ua(nn.l,Js.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};Vt.NAMES=Uc;var Di,_r=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=Rs("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=fi(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(fi(e[n]/255)*255):e[n]=fi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xr=class{constructor(t=null){this.isSource=!0,this.uuid=Os(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(ma(i[a].image)):s.push(ma(i[a]))}else s=ma(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function ma(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?_r.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tf=0,ue=class extends Hn{constructor(t=ue.DEFAULT_IMAGE,e=ue.DEFAULT_MAPPING,n=an,i=an,s=Ht,a=Es,r=on,l=di,c=ue.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Os(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};ue.DEFAULT_IMAGE=null;ue.DEFAULT_MAPPING=Fc;ue.DEFAULT_ANISOTROPY=1;var Yt=class{constructor(t=0,e=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],u=l[2],p=l[6],_=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-u)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+u)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(m+1)/2,w=(_+1)/2,E=(h+f)/4,C=(d+u)/4,x=(g+p)/4;return y>v&&y>w?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=C/n):v>w?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=x/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=C/s,i=x/s),this.set(n,i,s,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-u)*(d-u)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-u)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pn=class extends Hn{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Yt(0,0,t,e),this.scissorTest=!1,this.viewport=new Yt(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new ue(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ht,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new xr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yr=class extends ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ga=class extends ue{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=s[a+0],m=s[a+1],g=s[a+2],u=s[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(r===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=u;return}if(d!==u||l!==f||c!==m||h!==g){let p=1-r,_=l*f+c*m+h*g+d*u,b=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){let w=Math.sqrt(y),E=Math.atan2(w,_*b);p=Math.sin(p*E)/w,r=Math.sin(r*E)/w}let v=r*b;if(l=l*p+f*v,c=c*p+m*v,h=h*p+g*v,d=d*p+u*v,p===1-r){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],f=s[a+1],m=s[a+2],g=s[a+3];return t[e]=r*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-r*m,t[e+2]=c*g+h*m+r*f-l*d,t[e+3]=h*g-r*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){let n=t._x,i=t._y,s=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),f=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],r=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+r+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(s-c)*m,this._z=(a-i)*m}else if(n>r&&n>d){let m=2*Math.sqrt(1+n-r-d);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+c)/m}else if(r>d){let m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-n-r);this._w=(a-i)/m,this._x=(s+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ke(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,r=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*r+i*c-s*l,this._y=i*h+a*l+s*r-n*c,this._z=s*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,a=this._w,r=a*t._w+n*t._x+i*t._y+s*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;let l=1-r*r;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,r=t.z,l=t.w,c=l*e+a*i-r*n,h=l*n+r*e-s*i,d=l*i+s*n-a*e,f=-s*e-a*n-r*i;return this.x=c*l+f*-s+h*-r-d*-a,this.y=h*l+f*-a+d*-s-c*-r,this.z=d*l+f*-r+c*-a-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,r=e.y,l=e.z;return this.x=i*l-s*r,this.y=s*a-n*l,this.z=n*r-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ga.copy(this).projectOnVector(t),this.sub(ga)}reflect(t){return this.sub(ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ke(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ga=new U,jl=new qn,mi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.length;l<c;l+=3){let h=t[l],d=t[l+1],f=t[l+2];h<e&&(e=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>a&&(a=d),f>r&&(r=f)}return this.min.set(e,n,i),this.max.set(s,a,r),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,r=-1/0;for(let l=0,c=t.count;l<c;l++){let h=t.getX(l),d=t.getY(l),f=t.getZ(l);h<e&&(e=h),d<n&&(n=d),f<i&&(i=f),h>s&&(s=h),d>a&&(a=d),f>r&&(r=f)}return this.min.set(e,n,i),this.max.set(s,a,r),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let a=0,r=s.count;a<r;a++)si.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(si)}else n.boundingBox===null&&n.computeBoundingBox(),_a.copy(n.boundingBox),_a.applyMatrix4(t.matrixWorld),this.union(_a);let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_s),Ks.subVectors(this.max,_s),Ii.subVectors(t.a,_s),Oi.subVectors(t.b,_s),Fi.subVectors(t.c,_s),Nn.subVectors(Oi,Ii),zn.subVectors(Fi,Oi),ri.subVectors(Ii,Fi);let e=[0,-Nn.z,Nn.y,0,-zn.z,zn.y,0,-ri.z,ri.y,Nn.z,0,-Nn.x,zn.z,0,-zn.x,ri.z,0,-ri.x,-Nn.y,Nn.x,0,-zn.y,zn.x,0,-ri.y,ri.x,0];return!xa(e,Ii,Oi,Fi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!xa(e,Ii,Oi,Fi,Ks))?!1:(Qs.crossVectors(Nn,zn),e=[Qs.x,Qs.y,Qs.z],xa(e,Ii,Oi,Fi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return si.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(si).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(bn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},bn=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,_a=new mi,Ii=new U,Oi=new U,Fi=new U,Nn=new U,zn=new U,ri=new U,_s=new U,Ks=new U,Qs=new U,ai=new U;function xa(o,t,e,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){ai.fromArray(o,s);let r=i.x*Math.abs(ai.x)+i.y*Math.abs(ai.y)+i.z*Math.abs(ai.z),l=t.dot(ai),c=e.dot(ai),h=n.dot(ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}var ef=new mi,xs=new U,ya=new U,Ls=class{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ef.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(xs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(ya)),this.expandByPoint(xs.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Mn=new U,va=new U,js=new U,Un=new U,ba=new U,tr=new U,Ma=new U,Wa=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(e).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){va.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(va);let s=t.distanceTo(e)*.5,a=-this.direction.dot(js),r=Un.dot(this.direction),l=-Un.dot(js),c=Un.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*l-r,f=a*r-l,g=s*h,d>=0)if(f>=-g)if(f<=g){let u=1/h;d*=u,f*=u,m=d*(d+a*f+2*r)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+r)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+r)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+r)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+r)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+r)),m=-d*d+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(js).multiplyScalar(f).add(va),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);let n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),r=n-a,l=n+a;return r<0&&l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,r,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(r=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(r=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,s){ba.subVectors(e,t),tr.subVectors(n,t),Ma.crossVectors(ba,tr);let a=this.direction.dot(Ma),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Un.subVectors(this.origin,t);let l=r*this.direction.dot(tr.crossVectors(Un,tr));if(l<0)return null;let c=r*this.direction.dot(ba.cross(Un));if(c<0||l+c>a)return null;let h=-r*Un.dot(Ma);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class{constructor(){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,r,l,c,h,d,f,m,g,u,p){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=r,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=f,_[3]=m,_[7]=g,_[11]=u,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ni.setFromMatrixColumn(t,0).length(),s=1/Ni.setFromMatrixColumn(t,1).length(),a=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let f=a*h,m=a*d,g=r*h,u=r*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-u*c,e[9]=-r*l,e[2]=u-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,u=c*d;e[0]=f+u*r,e[4]=g*r-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-r,e[2]=m*r-g,e[6]=u+f*r,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,u=c*d;e[0]=f-u*r,e[4]=-a*d,e[8]=g+m*r,e[1]=m+g*r,e[5]=a*h,e[9]=u-f*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=r*h,u=r*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+u,e[1]=l*d,e[5]=u*c+f,e[9]=m*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=r*l,u=r*c;e[0]=l*h,e[4]=u-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-r*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-u*d}else if(t.order==="XZY"){let f=a*l,m=a*c,g=r*l,u=r*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+u,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=r*h,e[10]=u*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nf,t,sf)}lookAt(t,e,n){let i=this.elements;return ze.subVectors(t,e),ze.lengthSq()===0&&(ze.z=1),ze.normalize(),kn.crossVectors(n,ze),kn.lengthSq()===0&&(Math.abs(n.z)===1?ze.x+=1e-4:ze.z+=1e-4,ze.normalize(),kn.crossVectors(n,ze)),kn.normalize(),er.crossVectors(ze,kn),i[0]=kn.x,i[4]=er.x,i[8]=ze.x,i[1]=kn.y,i[5]=er.y,i[9]=ze.y,i[2]=kn.z,i[6]=er.z,i[10]=ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],u=n[6],p=n[10],_=n[14],b=n[3],y=n[7],v=n[11],w=n[15],E=i[0],C=i[4],x=i[8],M=i[12],P=i[1],z=i[5],V=i[9],D=i[13],L=i[2],N=i[6],X=i[10],Z=i[14],k=i[3],Q=i[7],J=i[11],ct=i[15];return s[0]=a*E+r*P+l*L+c*k,s[4]=a*C+r*z+l*N+c*Q,s[8]=a*x+r*V+l*X+c*J,s[12]=a*M+r*D+l*Z+c*ct,s[1]=h*E+d*P+f*L+m*k,s[5]=h*C+d*z+f*N+m*Q,s[9]=h*x+d*V+f*X+m*J,s[13]=h*M+d*D+f*Z+m*ct,s[2]=g*E+u*P+p*L+_*k,s[6]=g*C+u*z+p*N+_*Q,s[10]=g*x+u*V+p*X+_*J,s[14]=g*M+u*D+p*Z+_*ct,s[3]=b*E+y*P+v*L+w*k,s[7]=b*C+y*z+v*N+w*Q,s[11]=b*x+y*V+v*X+w*J,s[15]=b*M+y*D+v*Z+w*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],r=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],u=t[7],p=t[11],_=t[15];return g*(+s*l*d-i*c*d-s*r*f+n*c*f+i*r*m-n*l*m)+u*(+e*l*m-e*c*f+s*a*f-i*a*m+i*c*h-s*l*h)+p*(+e*c*d-e*r*m-s*a*d+n*a*m+s*r*h-n*c*h)+_*(-i*r*h-e*l*d+e*r*f+i*a*d-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],r=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],u=t[13],p=t[14],_=t[15],b=d*p*c-u*f*c+u*l*m-r*p*m-d*l*_+r*f*_,y=g*f*c-h*p*c-g*l*m+a*p*m+h*l*_-a*f*_,v=h*u*c-g*d*c+g*r*m-a*u*m-h*r*_+a*d*_,w=g*d*l-h*u*l-g*r*f+a*u*f+h*r*p-a*d*p,E=e*b+n*y+i*v+s*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/E;return t[0]=b*C,t[1]=(u*f*s-d*p*s-u*i*m+n*p*m+d*i*_-n*f*_)*C,t[2]=(r*p*s-u*l*s+u*i*c-n*p*c-r*i*_+n*l*_)*C,t[3]=(d*l*s-r*f*s-d*i*c+n*f*c+r*i*m-n*l*m)*C,t[4]=y*C,t[5]=(h*p*s-g*f*s+g*i*m-e*p*m-h*i*_+e*f*_)*C,t[6]=(g*l*s-a*p*s-g*i*c+e*p*c+a*i*_-e*l*_)*C,t[7]=(a*f*s-h*l*s+h*i*c-e*f*c-a*i*m+e*l*m)*C,t[8]=v*C,t[9]=(g*d*s-h*u*s-g*n*m+e*u*m+h*n*_-e*d*_)*C,t[10]=(a*u*s-g*r*s+g*n*c-e*u*c-a*n*_+e*r*_)*C,t[11]=(h*r*s-a*d*s-h*n*c+e*d*c+a*n*m-e*r*m)*C,t[12]=w*C,t[13]=(h*u*i-g*d*i+g*n*f-e*u*f-h*n*p+e*d*p)*C,t[14]=(g*r*i-a*u*i-g*n*l+e*u*l+a*n*p-e*r*p)*C,t[15]=(a*d*i-h*r*i+h*n*l-e*d*l-a*n*f+e*r*f)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,r=t.y,l=t.z,c=s*a,h=s*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,r=e._z,l=e._w,c=s+s,h=a+a,d=r+r,f=s*c,m=s*h,g=s*d,u=a*h,p=a*d,_=r*d,b=l*c,y=l*h,v=l*d,w=n.x,E=n.y,C=n.z;return i[0]=(1-(u+_))*w,i[1]=(m+v)*w,i[2]=(g-y)*w,i[3]=0,i[4]=(m-v)*E,i[5]=(1-(f+_))*E,i[6]=(p+b)*E,i[7]=0,i[8]=(g+y)*C,i[9]=(p-b)*C,i[10]=(1-(f+u))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ni.set(i[0],i[1],i[2]).length(),a=Ni.set(i[4],i[5],i[6]).length(),r=Ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],sn.copy(this);let c=1/s,h=1/a,d=1/r;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=h,sn.elements[5]*=h,sn.elements[6]*=h,sn.elements[8]*=d,sn.elements[9]*=d,sn.elements[10]*=d,e.setFromRotationMatrix(sn),n.x=s,n.y=a,n.z=r,this}makePerspective(t,e,n,i,s,a){let r=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i),f=-(a+s)/(a-s),m=-2*a*s/(a-s);return r[0]=l,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,i,s,a){let r=this.elements,l=1/(e-t),c=1/(n-i),h=1/(a-s),d=(e+t)*l,f=(n+i)*c,m=(a+s)*h;return r[0]=2*l,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ni=new U,sn=new ie,nf=new U(0,0,0),sf=new U(1,1,1),kn=new U,er=new U,ze=new U,tc=new ie,ec=new qn,es=class{constructor(t=0,e=0,n=0,i=es.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ke(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ec.setFromEuler(this),this.setFromQuaternion(ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";var vr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},rf=0,nc=new U,zi=new qn,wn=new ie,nr=new U,ys=new U,af=new U,of=new qn,ic=new U(1,0,0),sc=new U(0,1,0),rc=new U(0,0,1),lf={type:"added"},ac={type:"removed"},Ee=class extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();let t=new U,e=new es,n=new qn,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new Ae}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(ic,t)}rotateY(t){return this.rotateOnAxis(sc,t)}rotateZ(t){return this.rotateOnAxis(rc,t)}translateOnAxis(t,e){return nc.copy(t).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ic,t)}translateY(t){return this.translateOnAxis(sc,t)}translateZ(t){return this.translateOnAxis(rc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(ys,nr,this.up):wn.lookAt(nr,ys,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),zi.setFromRotationMatrix(wn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(lf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ac)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(ac)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,of,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++){let s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,a=i.length;s<a;s++){let r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(t.materials,this.material[l]));i.material=r}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){let l=this.animations[r];i.animations.push(s(t.animations,l))}}if(e){let r=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){let l=[];for(let c in r){let h=r[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var rn=new U,Sn=new U,wa=new U,Tn=new U,Ui=new U,ki=new U,oc=new U,Sa=new U,Ta=new U,Aa=new U,ln=class{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),rn.subVectors(t,e),i.cross(rn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){rn.subVectors(i,e),Sn.subVectors(n,e),wa.subVectors(t,e);let a=rn.dot(rn),r=rn.dot(Sn),l=rn.dot(wa),c=Sn.dot(Sn),h=Sn.dot(wa),d=a*c-r*r;if(d===0)return s.set(-2,-1,-1);let f=1/d,m=(c*l-r*h)*f,g=(a*h-r*l)*f;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Tn),Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(t,e,n,i,s,a,r,l){return this.getBarycoord(t,e,n,i,Tn),l.set(0,0),l.addScaledVector(s,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(r,Tn.z),l}static isFrontFacing(t,e,n,i){return rn.subVectors(n,e),Sn.subVectors(t,e),rn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),rn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ln.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,r;Ui.subVectors(i,n),ki.subVectors(s,n),Sa.subVectors(t,n);let l=Ui.dot(Sa),c=ki.dot(Sa);if(l<=0&&c<=0)return e.copy(n);Ta.subVectors(t,i);let h=Ui.dot(Ta),d=ki.dot(Ta);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);Aa.subVectors(t,s);let m=Ui.dot(Aa),g=ki.dot(Aa);if(g>=0&&m<=g)return e.copy(s);let u=m*c-l*g;if(u<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(ki,r);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return oc.subVectors(s,i),r=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(oc,r);let _=1/(p+u+f);return a=u*_,r=f*_,e.copy(n).addScaledVector(Ui,a).addScaledVector(ki,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cf=0,ns=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=Ji,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Dc,this.blendDst=Ic,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ji&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let r in s){let l=s[r];delete l.metadata,a.push(l)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},br=class extends ns{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Oc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},te=new U,ir=new Nt,Ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix3(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyMatrix4(t),this.setXYZ(e,te.x,te.y,te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.applyNormalMatrix(t),this.setXYZ(e,te.x,te.y,te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)te.fromBufferAttribute(this,e),te.transformDirection(t),this.setXYZ(e,te.x,te.y,te.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}};var Mr=class extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var wr=class extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Cn=class extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}};var hf=0,Xe=new ie,Ea=new Ee,Bi=new U,Ue=new mi,vs=new mi,he=new U,Rn=class extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zc(t)?wr:Mr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ae().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return Ea.lookAt(t),Ea.updateMatrix(),this.applyMatrix4(Ea.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Cn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Ue.setFromBufferAttribute(s),this.morphTargetsRelative?(he.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(he),he.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(he)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let r=e[s];vs.setFromBufferAttribute(r),this.morphTargetsRelative?(he.addVectors(Ue.min,vs.min),Ue.expandByPoint(he),he.addVectors(Ue.max,vs.max),Ue.expandByPoint(he)):(Ue.expandByPoint(vs.min),Ue.expandByPoint(vs.max))}Ue.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)he.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(he));if(e)for(let s=0,a=e.length;s<a;s++){let r=e[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)he.fromBufferAttribute(r,c),l&&(Bi.fromBufferAttribute(t,c),he.add(Bi)),i=Math.max(i,n.distanceToSquared(he))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*r),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<r;P++)c[P]=new U,h[P]=new U;let d=new U,f=new U,m=new U,g=new Nt,u=new Nt,p=new Nt,_=new U,b=new U;function y(P,z,V){d.fromArray(i,P*3),f.fromArray(i,z*3),m.fromArray(i,V*3),g.fromArray(a,P*2),u.fromArray(a,z*2),p.fromArray(a,V*2),f.sub(d),m.sub(d),u.sub(g),p.sub(g);let D=1/(u.x*p.y-p.x*u.y);isFinite(D)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-u.y).multiplyScalar(D),b.copy(m).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(D),c[P].add(_),c[z].add(_),c[V].add(_),h[P].add(b),h[z].add(b),h[V].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let P=0,z=v.length;P<z;++P){let V=v[P],D=V.start,L=V.count;for(let N=D,X=D+L;N<X;N+=3)y(n[N+0],n[N+1],n[N+2])}let w=new U,E=new U,C=new U,x=new U;function M(P){C.fromArray(s,P*3),x.copy(C);let z=c[P];w.copy(z),w.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(x,z);let D=E.dot(h[P])<0?-1:1;l[P*4]=w.x,l[P*4+1]=w.y,l[P*4+2]=w.z,l[P*4+3]=D}for(let P=0,z=v.length;P<z;++P){let V=v[P],D=V.start,L=V.count;for(let N=D,X=D+L;N<X;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new U,s=new U,a=new U,r=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),u=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,u),a.fromBufferAttribute(e,p),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,u),c.fromBufferAttribute(n,p),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(u,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)he.fromBufferAttribute(t,e),he.normalize(),t.setXYZ(e,he.x,he.y,he.z)}toNonIndexed(){function t(r,l){let c=r.array,h=r.itemSize,d=r.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let u=0,p=l.length;u<p;u++){r.isInterleavedBufferAttribute?m=l[u]*r.data.stride+r.offset:m=l[u]*h;for(let _=0;_<h;_++)f[g++]=c[m++]}return new Ze(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Rn,n=this.index.array,i=this.attributes;for(let r in i){let l=i[r],c=t(l,n);e.setAttribute(r,c)}let s=this.morphAttributes;for(let r in s){let l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let r=0,l=a.length;r<l;r++){let c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},lc=new ie,Vi=new Wa,Ca=new Ls,bs=new U,Ms=new U,ws=new U,Pa=new U,sr=new U,rr=new Nt,ar=new Nt,or=new Nt,Ra=new U,lr=new U,Ye=class extends Ee{constructor(t=new Rn,e=new br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let r=this.morphTargetInfluences;if(s&&r){sr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=r[l],d=s[l];h!==0&&(Pa.fromBufferAttribute(d,t),a?sr.addScaledVector(Pa,h):sr.addScaledVector(Pa.sub(e),h))}e.add(sr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),t.ray.intersectsSphere(Ca)===!1)||(lc.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(lc),n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1))return;let a,r=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.groups,f=n.drawRange;if(r!==null)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){let u=d[m],p=i[u.materialIndex],_=Math.max(u.start,f.start),b=Math.min(r.count,Math.min(u.start+u.count,f.start+f.count));for(let y=_,v=b;y<v;y+=3){let w=r.getX(y),E=r.getX(y+1),C=r.getX(y+2);a=cr(this,p,t,Vi,c,h,w,E,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=u.materialIndex,e.push(a))}}else{let m=Math.max(0,f.start),g=Math.min(r.count,f.start+f.count);for(let u=m,p=g;u<p;u+=3){let _=r.getX(u),b=r.getX(u+1),y=r.getX(u+2);a=cr(this,i,t,Vi,c,h,_,b,y),a&&(a.faceIndex=Math.floor(u/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,g=d.length;m<g;m++){let u=d[m],p=i[u.materialIndex],_=Math.max(u.start,f.start),b=Math.min(l.count,Math.min(u.start+u.count,f.start+f.count));for(let y=_,v=b;y<v;y+=3){let w=y,E=y+1,C=y+2;a=cr(this,p,t,Vi,c,h,w,E,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=u.materialIndex,e.push(a))}}else{let m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let u=m,p=g;u<p;u+=3){let _=u,b=u+1,y=u+2;a=cr(this,i,t,Vi,c,h,_,b,y),a&&(a.faceIndex=Math.floor(u/3),e.push(a))}}}};function uf(o,t,e,n,i,s,a,r){let l;if(t.side===Ve?l=n.intersectTriangle(a,s,i,!0,r):l=n.intersectTriangle(i,s,a,t.side===Wn,r),l===null)return null;lr.copy(r),lr.applyMatrix4(o.matrixWorld);let c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:o}}function cr(o,t,e,n,i,s,a,r,l){o.getVertexPosition(a,bs),o.getVertexPosition(r,Ms),o.getVertexPosition(l,ws);let c=uf(o,t,e,n,bs,Ms,ws,Ra);if(c){i&&(rr.fromBufferAttribute(i,a),ar.fromBufferAttribute(i,r),or.fromBufferAttribute(i,l),c.uv=ln.getUV(Ra,bs,Ms,ws,rr,ar,or,new Nt)),s&&(rr.fromBufferAttribute(s,a),ar.fromBufferAttribute(s,r),or.fromBufferAttribute(s,l),c.uv2=ln.getUV(Ra,bs,Ms,ws,rr,ar,or,new Nt));let h={a,b:r,c:l,normal:new U,materialIndex:0};ln.getNormal(bs,Ms,ws,h.normal),c.face=h}return c}var gi=class extends Rn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Cn(c,3)),this.setAttribute("normal",new Cn(h,3)),this.setAttribute("uv",new Cn(d,2));function g(u,p,_,b,y,v,w,E,C,x,M){let P=v/C,z=w/x,V=v/2,D=w/2,L=E/2,N=C+1,X=x+1,Z=0,k=0,Q=new U;for(let J=0;J<X;J++){let ct=J*z-D;for(let F=0;F<N;F++){let K=F*P-V;Q[u]=K*b,Q[p]=ct*y,Q[_]=L,c.push(Q.x,Q.y,Q.z),Q[u]=0,Q[p]=0,Q[_]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),d.push(F/C),d.push(1-J/x),Z+=1}}for(let J=0;J<x;J++)for(let ct=0;ct<C;ct++){let F=f+ct+N*J,K=f+ct+N*(J+1),et=f+(ct+1)+N*(J+1),nt=f+(ct+1)+N*J;l.push(F,K,nt),l.push(K,et,nt),k+=6}r.addGroup(m,k,M),m+=k,f+=Z}}static fromJSON(t){return new gi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function is(o){let t={};for(let e in o){t[e]={};for(let n in o[e]){let i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Se(o){let t={};for(let e=0;e<o.length;e++){let n=is(o[e]);for(let i in n)t[i]=n[i]}return t}function ff(o){let t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function kc(o){return o.getRenderTarget()===null&&o.outputEncoding===Bt?fn:Ps}var df={clone:is,merge:Se},pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,cn=class extends ns{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pf,this.fragmentShader=mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=ff(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Sr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Be=class extends Sr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Kl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let r=this.filmOffset;r!==0&&(s+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gi=-90,Wi=1,Ha=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;let i=new Be(Gi,Wi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);let s=new Be(Gi,Wi,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);let a=new Be(Gi,Wi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);let r=new Be(Gi,Wi,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);let l=new Be(Gi,Wi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);let c=new Be(Gi,Wi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,a,r,l,c]=this.children,h=t.getRenderTarget(),d=t.toneMapping,f=t.xr.enabled;t.toneMapping=En,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,r),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Tr=class extends ue{constructor(t,e,n,i,s,a,r,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},qa=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ht}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new gi(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Gn});s.uniforms.tEquirect.value=e;let a=new Ye(i,s),r=e.minFilter;return e.minFilter===Es&&(e.minFilter=Ht),new Ha(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}},La=new U,gf=new U,_f=new Ae,An=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=La.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let n=t.delta(La),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||_f.getNormalMatrix(t),i=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Ls,hr=new U,Ar=class{constructor(t=new An,e=new An,n=new An,i=new An,s=new An,a=new An){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],r=n[3],l=n[4],c=n[5],h=n[6],d=n[7],f=n[8],m=n[9],g=n[10],u=n[11],p=n[12],_=n[13],b=n[14],y=n[15];return e[0].setComponents(r-i,d-l,u-f,y-p).normalize(),e[1].setComponents(r+i,d+l,u+f,y+p).normalize(),e[2].setComponents(r+s,d+c,u+m,y+_).normalize(),e[3].setComponents(r-s,d-c,u-m,y-_).normalize(),e[4].setComponents(r-a,d-h,u-g,y-b).normalize(),e[5].setComponents(r+a,d+h,u+g,y+b).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(hr.x=i.normal.x>0?t.max.x:t.min.x,hr.y=i.normal.y>0?t.max.y:t.min.y,hr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bc(){let o=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){o=s}}}function xf(o,t){let e=t.isWebGL2,n=new WeakMap;function i(c,h){let d=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){let f=h.array,m=h.updateRange;o.bindBuffer(d,c),m.count===-1?o.bufferSubData(d,0,f):(e?o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(o.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:a,remove:r,update:l}}var _i=class extends Rn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=t/r,f=e/l,m=[],g=[],u=[],p=[];for(let _=0;_<h;_++){let b=_*f-a;for(let y=0;y<c;y++){let v=y*d-s;g.push(v,-b,0),u.push(0,0,1),p.push(y/r),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<r;b++){let y=b+c*_,v=b+c*(_+1),w=b+1+c*(_+1),E=b+1+c*_;m.push(y,v,E),m.push(v,w,E)}this.setIndex(m),this.setAttribute("position",new Cn(g,3)),this.setAttribute("normal",new Cn(u,3)),this.setAttribute("uv",new Cn(p,2))}static fromJSON(t){return new _i(t.width,t.height,t.widthSegments,t.heightSegments)}},yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf="vec3 transformed = vec3( position );",Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ef=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Cf=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Uf=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,od=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,ld=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,pd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,md=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_d=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Td=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ad=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Rd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Id=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Od=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,kd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Hd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,hp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,pp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_p=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xp=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ap=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Op=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Np=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Bp=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Gp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,St={alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:bf,alphatest_pars_fragment:Mf,aomap_fragment:wf,aomap_pars_fragment:Sf,begin_vertex:Tf,beginnormal_vertex:Af,bsdfs:Ef,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:If,color_fragment:Of,color_pars_fragment:Ff,color_pars_vertex:Nf,color_vertex:zf,common:Uf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Wf,emissivemap_pars_fragment:Hf,encodings_fragment:qf,encodings_pars_fragment:Xf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:ld,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:jf,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_fragment:id,lightmap_pars_fragment:sd,lights_lambert_fragment:rd,lights_lambert_pars_fragment:ad,lights_pars_begin:od,lights_toon_fragment:cd,lights_toon_pars_fragment:hd,lights_phong_fragment:ud,lights_phong_pars_fragment:fd,lights_physical_fragment:dd,lights_physical_pars_fragment:pd,lights_fragment_begin:md,lights_fragment_maps:gd,lights_fragment_end:_d,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:vd,logdepthbuf_vertex:bd,map_fragment:Md,map_pars_fragment:wd,map_particle_fragment:Sd,map_particle_pars_fragment:Td,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Ed,morphcolor_vertex:Cd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Rd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Od,normal_pars_vertex:Fd,normal_vertex:Nd,normalmap_pars_fragment:zd,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Bd,iridescence_pars_fragment:Vd,output_fragment:Gd,packing:Wd,premultiplied_alpha_fragment:Hd,project_vertex:qd,dithering_fragment:Xd,dithering_pars_fragment:Yd,roughnessmap_fragment:Zd,roughnessmap_pars_fragment:Jd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Kd,shadowmap_vertex:Qd,shadowmask_pars_fragment:jd,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:fp,uv2_pars_fragment:dp,uv2_pars_vertex:pp,uv2_vertex:mp,worldpos_vertex:gp,background_vert:_p,background_frag:xp,backgroundCube_vert:yp,backgroundCube_frag:vp,cube_vert:bp,cube_frag:Mp,depth_vert:wp,depth_frag:Sp,distanceRGBA_vert:Tp,distanceRGBA_frag:Ap,equirect_vert:Ep,equirect_frag:Cp,linedashed_vert:Pp,linedashed_frag:Rp,meshbasic_vert:Lp,meshbasic_frag:Dp,meshlambert_vert:Ip,meshlambert_frag:Op,meshmatcap_vert:Fp,meshmatcap_frag:Np,meshnormal_vert:zp,meshnormal_frag:Up,meshphong_vert:kp,meshphong_frag:Bp,meshphysical_vert:Vp,meshphysical_frag:Gp,meshtoon_vert:Wp,meshtoon_frag:Hp,points_vert:qp,points_frag:Xp,shadow_vert:Yp,shadow_frag:Zp,sprite_vert:Jp,sprite_frag:$p},st={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ae},uv2Transform:{value:new Ae},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ae}}},dn={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Vt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};dn.physical={uniforms:Se([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var ur={r:0,b:0,g:0};function Kp(o,t,e,n,i,s,a){let r=new Vt(0),l=s===!0?0:1,c,h,d=null,f=0,m=null;function g(p,_){let b=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));let v=o.xr,w=v.getSession&&v.getSession();w&&w.environmentBlendMode==="additive"&&(y=null),y===null?u(r,l):y&&y.isColor&&(u(y,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Lr)?(h===void 0&&(h=new Ye(new gi(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:is(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=y.encoding!==Bt,(d!==y||f!==y.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,d=y,f=y.version,m=o.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ye(new _i(2,2),new cn({name:"BackgroundMaterial",uniforms:is(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==Bt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||m!==o.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,m=o.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function u(p,_){p.getRGB(ur,kc(o)),n.buffers.color.setClear(ur.r,ur.g,ur.b,_,a)}return{getClearColor:function(){return r},setClearColor:function(p,_=1){r.set(p),l=_,u(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,u(r,l)},render:g}}function Qp(o,t,e,n){let i=o.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,r={},l=p(null),c=l,h=!1;function d(L,N,X,Z,k){let Q=!1;if(a){let J=u(Z,X,N);c!==J&&(c=J,m(c.object)),Q=_(L,Z,X,k),Q&&b(L,Z,X,k)}else{let J=N.wireframe===!0;(c.geometry!==Z.id||c.program!==X.id||c.wireframe!==J)&&(c.geometry=Z.id,c.program=X.id,c.wireframe=J,Q=!0)}k!==null&&e.update(k,34963),(Q||h)&&(h=!1,x(L,N,X,Z),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function m(L){return n.isWebGL2?o.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?o.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function u(L,N,X){let Z=X.wireframe===!0,k=r[L.id];k===void 0&&(k={},r[L.id]=k);let Q=k[N.id];Q===void 0&&(Q={},k[N.id]=Q);let J=Q[Z];return J===void 0&&(J=p(f()),Q[Z]=J),J}function p(L){let N=[],X=[],Z=[];for(let k=0;k<i;k++)N[k]=0,X[k]=0,Z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:Z,object:L,attributes:{},index:null}}function _(L,N,X,Z){let k=c.attributes,Q=N.attributes,J=0,ct=X.getAttributes();for(let F in ct)if(ct[F].location>=0){let et=k[F],nt=Q[F];if(nt===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor)),et===void 0||et.attribute!==nt||nt&&et.data!==nt.data)return!0;J++}return c.attributesNum!==J||c.index!==Z}function b(L,N,X,Z){let k={},Q=N.attributes,J=0,ct=X.getAttributes();for(let F in ct)if(ct[F].location>=0){let et=Q[F];et===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));let nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),k[F]=nt,J++}c.attributes=k,c.attributesNum=J,c.index=Z}function y(){let L=c.newAttributes;for(let N=0,X=L.length;N<X;N++)L[N]=0}function v(L){w(L,0)}function w(L,N){let X=c.newAttributes,Z=c.enabledAttributes,k=c.attributeDivisors;X[L]=1,Z[L]===0&&(o.enableVertexAttribArray(L),Z[L]=1),k[L]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),k[L]=N)}function E(){let L=c.newAttributes,N=c.enabledAttributes;for(let X=0,Z=N.length;X<Z;X++)N[X]!==L[X]&&(o.disableVertexAttribArray(X),N[X]=0)}function C(L,N,X,Z,k,Q){n.isWebGL2===!0&&(X===5124||X===5125)?o.vertexAttribIPointer(L,N,X,k,Q):o.vertexAttribPointer(L,N,X,Z,k,Q)}function x(L,N,X,Z){if(n.isWebGL2===!1&&(L.isInstancedMesh||Z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let k=Z.attributes,Q=X.getAttributes(),J=N.defaultAttributeValues;for(let ct in Q){let F=Q[ct];if(F.location>=0){let K=k[ct];if(K===void 0&&(ct==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),ct==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let et=K.normalized,nt=K.itemSize,B=e.get(K);if(B===void 0)continue;let Mt=B.buffer,ft=B.type,dt=B.bytesPerElement;if(K.isInterleavedBufferAttribute){let lt=K.data,kt=lt.stride,wt=K.offset;if(lt.isInstancedInterleavedBuffer){for(let yt=0;yt<F.locationSize;yt++)w(F.location+yt,lt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let yt=0;yt<F.locationSize;yt++)v(F.location+yt);o.bindBuffer(34962,Mt);for(let yt=0;yt<F.locationSize;yt++)C(F.location+yt,nt/F.locationSize,ft,et,kt*dt,(wt+nt/F.locationSize*yt)*dt)}else{if(K.isInstancedBufferAttribute){for(let lt=0;lt<F.locationSize;lt++)w(F.location+lt,K.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let lt=0;lt<F.locationSize;lt++)v(F.location+lt);o.bindBuffer(34962,Mt);for(let lt=0;lt<F.locationSize;lt++)C(F.location+lt,nt/F.locationSize,ft,et,nt*dt,nt/F.locationSize*lt*dt)}}else if(J!==void 0){let et=J[ct];if(et!==void 0)switch(et.length){case 2:o.vertexAttrib2fv(F.location,et);break;case 3:o.vertexAttrib3fv(F.location,et);break;case 4:o.vertexAttrib4fv(F.location,et);break;default:o.vertexAttrib1fv(F.location,et)}}}}E()}function M(){V();for(let L in r){let N=r[L];for(let X in N){let Z=N[X];for(let k in Z)g(Z[k].object),delete Z[k];delete N[X]}delete r[L]}}function P(L){if(r[L.id]===void 0)return;let N=r[L.id];for(let X in N){let Z=N[X];for(let k in Z)g(Z[k].object),delete Z[k];delete N[X]}delete r[L.id]}function z(L){for(let N in r){let X=r[N];if(X[L.id]===void 0)continue;let Z=X[L.id];for(let k in Z)g(Z[k].object),delete Z[k];delete X[L.id]}}function V(){D(),h=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:D,dispose:M,releaseStatesOfGeometry:P,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:v,disableUnusedAttributes:E}}function jp(o,t,e,n){let i=n.isWebGL2,s;function a(c){s=c}function r(c,h){o.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,d){if(d===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,d),e.update(h,s,d)}this.setMode=a,this.render=r,this.renderInstances=l}function tm(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext,r=e.precision!==void 0?e.precision:"highp",l=s(r);l!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",l,"instead."),r=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),u=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),b=o.getParameter(36349),y=f>0,v=a||t.has("OES_texture_float"),w=y&&v,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:E}}function em(o){let t=this,e=null,n=0,i=!1,s=!1,a=new An,r=new Ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,u=d.clipIntersection,p=d.clipShadows,_=o.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{let b=s?0:n,y=b*4,v=_.clippingState||null;l.value=v,v=h(g,f,y,m);for(let w=0;w!==y;++w)v[w]=e[w];_.clippingState=v,this.numIntersection=u?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){let u=d!==null?d.length:0,p=null;if(u!==0){if(p=l.value,g!==!0||p===null){let _=m+u*4,b=f.matrixWorldInverse;r.getNormalMatrix(b),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,v=m;y!==u;++y,v+=4)a.copy(d[y]).applyMatrix4(b,r),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=u,t.numIntersection=0,p}}function nm(o){let t=new WeakMap;function e(a,r){return r===Na?a.mapping=Qi:r===za&&(a.mapping=ji),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){let r=a.mapping;if(r===Na||r===za)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new qa(l.height/2);return c.fromEquirectangularTexture(o,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let r=a.target;r.removeEventListener("dispose",i);let l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ds=class extends Sr{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,cc=[.125,.215,.35,.446,.526,.582],li=20,Da=new Ds,hc=new Vt,Ia=null,oi=(1+Math.sqrt(5))/2,qi=1/oi,uc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,oi,qi),new U(0,oi,-qi),new U(qi,0,oi),new U(-qi,0,oi),new U(oi,qi,0),new U(-oi,qi,0)],Er=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ia=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ia),t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ia=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Cs,format:on,encoding:pi,depthBuffer:!1},i=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=im(s)),this._blurMaterial=sm(s,t,e)}return i}_compileMaterial(t){let e=new Ye(this._lodPlanes[0],t);this._renderer.compile(e,Da)}_sceneToCubeUV(t,e,n,i){let r=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(hc),h.toneMapping=En,h.autoClear=!1;let m=new br({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new Ye(new gi,m),u=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,u=!0):(m.color.copy(hc),u=!0);for(let _=0;_<6;_++){let b=_%3;b===0?(r.up.set(0,l[_],0),r.lookAt(c[_],0,0)):b===1?(r.up.set(0,0,l[_]),r.lookAt(0,c[_],0)):(r.up.set(0,l[_],0),r.lookAt(0,0,c[_]));let y=this._cubeSize;fr(i,b*y,_>2?y:0,y,y),h.setRenderTarget(i),u&&h.render(g,r),h.render(t,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qi||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());let s=i?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=t;let l=this._cubeSize;fr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=uc[(i-1)%uc.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,r){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ye(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*li-1),u=s/g,p=isFinite(s)?1+Math.floor(h*u):li;p>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${li}`);let _=[],b=0;for(let C=0;C<li;++C){let x=C/u,M=Math.exp(-x*x/2);_.push(M),C===0?b+=M:C<p&&(b+=2*M)}for(let C=0;C<_.length;C++)_[C]=_[C]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",r&&(f.poleAxis.value=r);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let v=this._sizeLods[i],w=3*v*(i>y-Yi?i-y+Yi:0),E=4*(this._cubeSize-v);fr(e,w,E,3*v,2*v),l.setRenderTarget(e),l.render(d,Da)}};function im(o){let t=[],e=[],n=[],i=o,s=o-Yi+1+cc.length;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let l=1/r;a>o-Yi?l=cc[a-o+Yi-1]:a===0&&(l=0),n.push(l);let c=1/(r-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,u=3,p=2,_=1,b=new Float32Array(u*g*m),y=new Float32Array(p*g*m),v=new Float32Array(_*g*m);for(let E=0;E<m;E++){let C=E%3*2/3-1,x=E>2?0:-1,M=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];b.set(M,u*g*E),y.set(f,p*g*E);let P=[E,E,E,E,E,E];v.set(P,_*g*E)}let w=new Rn;w.setAttribute("position",new Ze(b,u)),w.setAttribute("uv",new Ze(y,p)),w.setAttribute("faceIndex",new Ze(v,_)),t.push(w),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(o,t,e){let n=new Pn(o,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function sm(o,t,e){let n=new Float32Array(li),i=new U(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function dc(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function pc(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}function rm(o){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){let l=r.mapping,c=l===Na||l===za,h=l===Qi||l===ji;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=t.get(r);return e===null&&(e=new Er(o)),d=c?e.fromEquirectangular(r,d):e.fromCubemap(r,d),t.set(r,d),d.texture}else{if(t.has(r))return t.get(r).texture;{let d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Er(o));let f=c?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function i(r){let l=0,c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){let l=r.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function am(o){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function om(o,t,e,n){let i={},s=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];let m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function r(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],34962);let m=d.morphAttributes;for(let g in m){let u=m[g];for(let p=0,_=u.length;p<_;p++)t.update(u[p],34962)}}function c(d){let f=[],m=d.index,g=d.attributes.position,u=0;if(m!==null){let b=m.array;u=m.version;for(let y=0,v=b.length;y<v;y+=3){let w=b[y+0],E=b[y+1],C=b[y+2];f.push(w,E,E,C,C,w)}}else{let b=g.array;u=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){let w=y+0,E=y+1,C=y+2;f.push(w,E,E,C,C,w)}}let p=new(zc(f)?wr:Mr)(f,1);p.version=u;let _=s.get(d);_&&t.remove(_),s.set(d,p)}function h(d){let f=s.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function lm(o,t,e,n){let i=n.isWebGL2,s;function a(f){s=f}let r,l;function c(f){r=f.type,l=f.bytesPerElement}function h(f,m){o.drawElements(s,m,r,f*l),e.update(m,s,1)}function d(f,m,g){if(g===0)return;let u,p;if(i)u=o,p="drawElementsInstanced";else if(u=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",u===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[p](s,m,r,f*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d}function cm(o){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(e.calls++,a){case 4:e.triangles+=r*(s/3);break;case 1:e.lines+=r*(s/2);break;case 3:e.lines+=r*(s-1);break;case 2:e.lines+=r*s;break;case 0:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hm(o,t){return o[0]-t[0]}function um(o,t){return Math.abs(t[1])-Math.abs(o[1])}function fm(o,t,e){let n={},i=new Float32Array(8),s=new WeakMap,a=new Yt,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function l(c,h,d,f){let m=c.morphTargetInfluences;if(t.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,u=g!==void 0?g.length:0,p=s.get(h);if(p===void 0||p.count!==u){let N=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",N)};p!==void 0&&p.texture.dispose();let y=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],x=h.morphAttributes.color||[],M=0;y===!0&&(M=1),v===!0&&(M=2),w===!0&&(M=3);let P=h.attributes.position.count*M,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let V=new Float32Array(P*z*4*u),D=new yr(V,P,z,u);D.type=hi,D.needsUpdate=!0;let L=M*4;for(let X=0;X<u;X++){let Z=E[X],k=C[X],Q=x[X],J=P*z*4*X;for(let ct=0;ct<Z.count;ct++){let F=ct*L;y===!0&&(a.fromBufferAttribute(Z,ct),V[J+F+0]=a.x,V[J+F+1]=a.y,V[J+F+2]=a.z,V[J+F+3]=0),v===!0&&(a.fromBufferAttribute(k,ct),V[J+F+4]=a.x,V[J+F+5]=a.y,V[J+F+6]=a.z,V[J+F+7]=0),w===!0&&(a.fromBufferAttribute(Q,ct),V[J+F+8]=a.x,V[J+F+9]=a.y,V[J+F+10]=a.z,V[J+F+11]=Q.itemSize===4?a.w:1)}}p={count:u,texture:D,size:new Nt(P,z)},s.set(h,p),h.addEventListener("dispose",N)}let _=0;for(let y=0;y<m.length;y++)_+=m[y];let b=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",p.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",p.size)}else{let g=m===void 0?0:m.length,u=n[h.id];if(u===void 0||u.length!==g){u=[];for(let v=0;v<g;v++)u[v]=[v,0];n[h.id]=u}for(let v=0;v<g;v++){let w=u[v];w[0]=v,w[1]=m[v]}u.sort(um);for(let v=0;v<8;v++)v<g&&u[v][1]?(r[v][0]=u[v][0],r[v][1]=u[v][1]):(r[v][0]=Number.MAX_SAFE_INTEGER,r[v][1]=0);r.sort(hm);let p=h.morphAttributes.position,_=h.morphAttributes.normal,b=0;for(let v=0;v<8;v++){let w=r[v],E=w[0],C=w[1];E!==Number.MAX_SAFE_INTEGER&&C?(p&&h.getAttribute("morphTarget"+v)!==p[E]&&h.setAttribute("morphTarget"+v,p[E]),_&&h.getAttribute("morphNormal"+v)!==_[E]&&h.setAttribute("morphNormal"+v,_[E]),i[v]=C,b+=C):(p&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),_&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}let y=h.morphTargetsRelative?1:1-b;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function dm(o,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);return i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),d}function a(){i=new WeakMap}function r(l){let c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}var Vc=new ue,Gc=new yr,Wc=new Ga,Hc=new Tr,mc=[],gc=[],_c=new Float32Array(16),xc=new Float32Array(9),yc=new Float32Array(4);function rs(o,t,e){let n=o[0];if(n<=0||n>0)return o;let i=t*e,s=mc[i];if(s===void 0&&(s=new Float32Array(i),mc[i]=s),t!==0){n.toArray(s,0);for(let a=1,r=0;a!==t;++a)r+=e,o[a].toArray(s,r)}return s}function se(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function re(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Dr(o,t){let e=gc[t];e===void 0&&(e=new Int32Array(t),gc[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function pm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function mm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2fv(this.addr,t),re(e,t)}}function gm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;o.uniform3fv(this.addr,t),re(e,t)}}function _m(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4fv(this.addr,t),re(e,t)}}function xm(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;yc.set(n),o.uniformMatrix2fv(this.addr,!1,yc),re(e,n)}}function ym(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;xc.set(n),o.uniformMatrix3fv(this.addr,!1,xc),re(e,n)}}function vm(o,t){let e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;_c.set(n),o.uniformMatrix4fv(this.addr,!1,_c),re(e,n)}}function bm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function Mm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2iv(this.addr,t),re(e,t)}}function wm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3iv(this.addr,t),re(e,t)}}function Sm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4iv(this.addr,t),re(e,t)}}function Tm(o,t){let e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Am(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;o.uniform2uiv(this.addr,t),re(e,t)}}function Em(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;o.uniform3uiv(this.addr,t),re(e,t)}}function Cm(o,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;o.uniform4uiv(this.addr,t),re(e,t)}}function Pm(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Vc,i)}function Rm(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Wc,i)}function Lm(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Hc,i)}function Dm(o,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gc,i)}function Im(o){switch(o){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return ym;case 35676:return vm;case 5124:case 35670:return bm;case 35667:case 35671:return Mm;case 35668:case 35672:return wm;case 35669:case 35673:return Sm;case 5125:return Tm;case 36294:return Am;case 36295:return Em;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Dm}}function Om(o,t){o.uniform1fv(this.addr,t)}function Fm(o,t){let e=rs(t,this.size,2);o.uniform2fv(this.addr,e)}function Nm(o,t){let e=rs(t,this.size,3);o.uniform3fv(this.addr,e)}function zm(o,t){let e=rs(t,this.size,4);o.uniform4fv(this.addr,e)}function Um(o,t){let e=rs(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function km(o,t){let e=rs(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Bm(o,t){let e=rs(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Vm(o,t){o.uniform1iv(this.addr,t)}function Gm(o,t){o.uniform2iv(this.addr,t)}function Wm(o,t){o.uniform3iv(this.addr,t)}function Hm(o,t){o.uniform4iv(this.addr,t)}function qm(o,t){o.uniform1uiv(this.addr,t)}function Xm(o,t){o.uniform2uiv(this.addr,t)}function Ym(o,t){o.uniform3uiv(this.addr,t)}function Zm(o,t){o.uniform4uiv(this.addr,t)}function Jm(o,t,e){let n=this.cache,i=t.length,s=Dr(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Vc,s[a])}function $m(o,t,e){let n=this.cache,i=t.length,s=Dr(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Wc,s[a])}function Km(o,t,e){let n=this.cache,i=t.length,s=Dr(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Hc,s[a])}function Qm(o,t,e){let n=this.cache,i=t.length,s=Dr(e,i);se(n,s)||(o.uniform1iv(this.addr,s),re(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Gc,s[a])}function jm(o){switch(o){case 5126:return Om;case 35664:return Fm;case 35665:return Nm;case 35666:return zm;case 35674:return Um;case 35675:return km;case 35676:return Bm;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Hm;case 5125:return qm;case 36294:return Xm;case 36295:return Ym;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Qm}}var Xa=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Im(e.type)}},Ya=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=jm(e.type)}},Za=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let r=i[s];r.setValue(t,e[r.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function vc(o,t){o.seq.push(t),o.map[t.id]=t}function tg(o,t,e){let n=o.name,i=n.length;for(Oa.lastIndex=0;;){let s=Oa.exec(n),a=Oa.lastIndex,r=s[1],l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){vc(e,c===void 0?new Xa(r,o,t):new Ya(r,o,t));break}else{let d=e.map[r];d===void 0&&(d=new Za(r),vc(e,d)),e=d}}}var Ki=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);tg(s,a,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let r=e[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function bc(o,t,e){let n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}var eg=0;function ng(o,t){let e=o.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function ig(o){switch(o){case pi:return["Linear","( value )"];case Bt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Mc(o,t,e){let n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ng(o.getShaderSource(t),a)}else return i}function sg(o,t){let e=ig(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function rg(o,t){let e;switch(t){case Eu:e="Linear";break;case Cu:e="Reinhard";break;case Pu:e="OptimizedCineon";break;case Ru:e="ACESFilmic";break;case Lu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ag(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ts).join(`
`)}function og(o){let t=[];for(let e in o){let n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(o,t){let e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=o.getActiveAttrib(t,i),a=s.name,r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),e[a]={type:s.type,location:o.getAttribLocation(t,a),locationSize:r}}return e}function Ts(o){return o!==""}function wc(o,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(o){return o.replace(cg,hg)}function hg(o,t){let e=St[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ja(e)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(o){return o.replace(ug,fg)}function fg(o,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ac(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function dg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Lc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ru?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ss&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Qi:case ji:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Oc:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function _g(o){let t=o.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(o,t,e,n){let i=o.getContext(),s=e.defines,a=e.vertexShader,r=e.fragmentShader,l=dg(e),c=pg(e),h=mg(e),d=gg(e),f=_g(e),m=e.isWebGL2?"":ag(e),g=og(s),u=i.createProgram(),p,_,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Ts).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(Ts).join(`
`),_.length>0&&(_+=`
`)):(p=[Ac(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),_=[m,Ac(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?St.tonemapping_pars_fragment:"",e.toneMapping!==En?rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",St.encodings_pars_fragment,sg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Ja(a),a=wc(a,e),a=Sc(a,e),r=Ja(r),r=wc(r,e),r=Sc(r,e),a=Tc(a),r=Tc(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=b+p+a,v=b+_+r,w=bc(i,35633,y),E=bc(i,35632,v);if(i.attachShader(u,w),i.attachShader(u,E),e.index0AttributeName!==void 0?i.bindAttribLocation(u,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(u,0,"position"),i.linkProgram(u),o.debug.checkShaderErrors){let M=i.getProgramInfoLog(u).trim(),P=i.getShaderInfoLog(w).trim(),z=i.getShaderInfoLog(E).trim(),V=!0,D=!0;if(i.getProgramParameter(u,35714)===!1){V=!1;let L=Mc(i,w,"vertex"),N=Mc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(u,35715)+`

Program Info Log: `+M+`
`+L+`
`+N)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(P===""||z==="")&&(D=!1);D&&(this.diagnostics={runnable:V,programLog:M,vertexShader:{log:P,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(w),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new Ki(i,u)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=lg(i,u)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(u),this.program=void 0},this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=u,this.vertexShader=w,this.fragmentShader=E,this}var yg=0,$a=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ka(t),e.set(t,n)),n}},Ka=class{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}};function vg(o,t,e,n,i,s,a){let r=new vr,l=new $a,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x,M,P,z,V){let D=z.fog,L=V.geometry,N=x.isMeshStandardMaterial?z.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),Z=X&&X.mapping===Lr?X.image.height:null,k=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));let Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,J=Q!==void 0?Q.length:0,ct=0;L.morphAttributes.position!==void 0&&(ct=1),L.morphAttributes.normal!==void 0&&(ct=2),L.morphAttributes.color!==void 0&&(ct=3);let F,K,et,nt;if(k){let kt=dn[k];F=kt.vertexShader,K=kt.fragmentShader}else F=x.vertexShader,K=x.fragmentShader,l.update(x),et=l.getVertexShaderID(x),nt=l.getFragmentShaderID(x);let B=o.getRenderTarget(),Mt=x.alphaTest>0,ft=x.clearcoat>0,dt=x.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:x.type,vertexShader:F,fragmentShader:K,defines:x.defines,customVertexShaderID:et,customFragmentShaderID:nt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:V.isInstancedMesh===!0,instancingColor:V.isInstancedMesh===!0&&V.instanceColor!==null,supportsVertexTextures:f,outputEncoding:B===null?o.outputEncoding:B.isXRRenderTarget===!0?B.texture.encoding:pi,map:!!x.map,matcap:!!x.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:Z,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Ku,tangentSpaceNormalMap:x.normalMapType===$u,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Bt,clearcoat:ft,clearcoatMap:ft&&!!x.clearcoatMap,clearcoatRoughnessMap:ft&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ft&&!!x.clearcoatNormalMap,iridescence:dt,iridescenceMap:dt&&!!x.iridescenceMap,iridescenceThicknessMap:dt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ji,alphaMap:!!x.alphaMap,alphaTest:Mt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!L.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!D,useFog:x.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ct,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:En,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vn,flipSided:x.side===Ve,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)M.push(P),M.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(_(M,x),b(M,x),M.push(o.outputEncoding)),M.push(x.customProgramCacheKey),M.join()}function _(x,M){x.push(M.precision),x.push(M.outputEncoding),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.combine),x.push(M.vertexUvs),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){r.disableAll(),M.isWebGL2&&r.enable(0),M.supportsVertexTextures&&r.enable(1),M.instancing&&r.enable(2),M.instancingColor&&r.enable(3),M.map&&r.enable(4),M.matcap&&r.enable(5),M.envMap&&r.enable(6),M.lightMap&&r.enable(7),M.aoMap&&r.enable(8),M.emissiveMap&&r.enable(9),M.bumpMap&&r.enable(10),M.normalMap&&r.enable(11),M.objectSpaceNormalMap&&r.enable(12),M.tangentSpaceNormalMap&&r.enable(13),M.clearcoat&&r.enable(14),M.clearcoatMap&&r.enable(15),M.clearcoatRoughnessMap&&r.enable(16),M.clearcoatNormalMap&&r.enable(17),M.iridescence&&r.enable(18),M.iridescenceMap&&r.enable(19),M.iridescenceThicknessMap&&r.enable(20),M.displacementMap&&r.enable(21),M.specularMap&&r.enable(22),M.roughnessMap&&r.enable(23),M.metalnessMap&&r.enable(24),M.gradientMap&&r.enable(25),M.alphaMap&&r.enable(26),M.alphaTest&&r.enable(27),M.vertexColors&&r.enable(28),M.vertexAlphas&&r.enable(29),M.vertexUvs&&r.enable(30),M.vertexTangents&&r.enable(31),M.uvsVertexOnly&&r.enable(32),x.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.skinning&&r.enable(4),M.morphTargets&&r.enable(5),M.morphNormals&&r.enable(6),M.morphColors&&r.enable(7),M.premultipliedAlpha&&r.enable(8),M.shadowMapEnabled&&r.enable(9),M.physicallyCorrectLights&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.specularIntensityMap&&r.enable(15),M.specularColorMap&&r.enable(16),M.transmission&&r.enable(17),M.transmissionMap&&r.enable(18),M.thicknessMap&&r.enable(19),M.sheen&&r.enable(20),M.sheenColorMap&&r.enable(21),M.sheenRoughnessMap&&r.enable(22),M.decodeVideoTexture&&r.enable(23),M.opaque&&r.enable(24),x.push(r.mask)}function y(x){let M=g[x.type],P;if(M){let z=dn[M];P=df.clone(z.uniforms)}else P=x.uniforms;return P}function v(x,M){let P;for(let z=0,V=c.length;z<V;z++){let D=c[z];if(D.cacheKey===M){P=D,++P.usedTimes;break}}return P===void 0&&(P=new xg(o,M,x,s),c.push(P)),P}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:u,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:C}}function bg(){let o=new WeakMap;function t(s){let a=o.get(s);return a===void 0&&(a={},o.set(s,a)),a}function e(s){o.delete(s)}function n(s,a,r){o.get(s)[a]=r}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Mg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ec(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Cc(){let o=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,m,g,u,p){let _=o[t];return _===void 0?(_={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:u,group:p},o[t]=_):(_.id=d.id,_.object=d,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=d.renderOrder,_.z=u,_.group=p),t++,_}function r(d,f,m,g,u,p){let _=a(d,f,m,g,u,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(d,f,m,g,u,p){let _=a(d,f,m,g,u,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(d,f){e.length>1&&e.sort(d||Mg),n.length>1&&n.sort(f||Ec),i.length>1&&i.sort(f||Ec)}function h(){for(let d=t,f=o.length;d<f;d++){let m=o[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function wg(){let o=new WeakMap;function t(n,i){let s=o.get(n),a;return s===void 0?(a=new Cc,o.set(n,[a])):i>=s.length?(a=new Cc,s.push(a)):a=s[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Sg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Vt};break;case"SpotLight":e={position:new U,direction:new U,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new U,halfWidth:new U,halfHeight:new U};break}return o[t.id]=e,e}}}function Tg(){let o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}var Ag=0;function Eg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Cg(o,t){let e=new Sg,n=Tg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new U);let s=new U,a=new ie,r=new ie;function l(h,d){let f=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let u=0,p=0,_=0,b=0,y=0,v=0,w=0,E=0,C=0,x=0;h.sort(Eg);let M=d!==!0?Math.PI:1;for(let z=0,V=h.length;z<V;z++){let D=h[z],L=D.color,N=D.intensity,X=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=L.r*N*M,m+=L.g*N*M,g+=L.b*N*M;else if(D.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(D.sh.coefficients[k],N);else if(D.isDirectionalLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){let Q=D.shadow,J=n.get(D);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.directionalShadow[u]=J,i.directionalShadowMap[u]=Z,i.directionalShadowMatrix[u]=D.shadow.matrix,v++}i.directional[u]=k,u++}else if(D.isSpotLight){let k=e.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(L).multiplyScalar(N*M),k.distance=X,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,i.spot[_]=k;let Q=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,Q.updateMatrices(D),D.castShadow&&x++),i.spotLightMatrix[_]=Q.matrix,D.castShadow){let J=n.get(D);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,i.spotShadow[_]=J,i.spotShadowMap[_]=Z,E++}_++}else if(D.isRectAreaLight){let k=e.get(D);k.color.copy(L).multiplyScalar(N),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=k,b++}else if(D.isPointLight){let k=e.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*M),k.distance=D.distance,k.decay=D.decay,D.castShadow){let Q=D.shadow,J=n.get(D);J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=Z,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=k,p++}else if(D.isHemisphereLight){let k=e.get(D);k.skyColor.copy(D.color).multiplyScalar(N*M),k.groundColor.copy(D.groundColor).multiplyScalar(N*M),i.hemi[y]=k,y++}}b>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;let P=i.hash;(P.directionalLength!==u||P.pointLength!==p||P.spotLength!==_||P.rectAreaLength!==b||P.hemiLength!==y||P.numDirectionalShadows!==v||P.numPointShadows!==w||P.numSpotShadows!==E||P.numSpotMaps!==C)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=b,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,P.directionalLength=u,P.pointLength=p,P.spotLength=_,P.rectAreaLength=b,P.hemiLength=y,P.numDirectionalShadows=v,P.numPointShadows=w,P.numSpotShadows=E,P.numSpotMaps=C,i.version=Ag++)}function c(h,d){let f=0,m=0,g=0,u=0,p=0,_=d.matrixWorldInverse;for(let b=0,y=h.length;b<y;b++){let v=h[b];if(v.isDirectionalLight){let w=i.directional[f];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),f++}else if(v.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(v.isRectAreaLight){let w=i.rectArea[u];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),r.identity(),a.copy(v.matrixWorld),a.premultiply(_),r.extractRotation(a),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(r),w.halfHeight.applyMatrix4(r),u++}else if(v.isPointLight){let w=i.point[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),m++}else if(v.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Pc(o,t){let e=new Cg(o,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(d){n.push(d)}function r(d){i.push(d)}function l(d){e.setup(n,d)}function c(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:r}}function Pg(o,t){let e=new WeakMap;function n(s,a=0){let r=e.get(s),l;return r===void 0?(l=new Pc(o,t),e.set(s,[l])):a>=r.length?(l=new Pc(o,t),r.push(l)):l=r[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}var Qa=class extends ns{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ja=class extends ns{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lg=`uniform sampler2D shadow_pass;
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
}`;function Dg(o,t,e){let n=new Ar,i=new Nt,s=new Nt,a=new Yt,r=new Qa({depthPacking:Ju}),l=new ja,c={},h=e.maxTextureSize,d={[Wn]:Ve,[Ve]:Wn,[Vn]:Vn},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Rg,fragmentShader:Lg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new Rn;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let u=new Ye(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc,this.render=function(v,w,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;let C=o.getRenderTarget(),x=o.getActiveCubeFace(),M=o.getActiveMipmapLevel(),P=o.state;P.setBlending(Gn),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let z=0,V=v.length;z<V;z++){let D=v[z],L=D.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);let N=L.getFrameExtents();if(i.multiply(N),s.copy(L.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/N.x),i.x=s.x*N.x,L.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/N.y),i.y=s.y*N.y,L.mapSize.y=s.y)),L.map===null){let Z=this.type!==Ss?{minFilter:Te,magFilter:Te}:{};L.map=new Pn(i.x,i.y,Z),L.map.texture.name=D.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();let X=L.getViewportCount();for(let Z=0;Z<X;Z++){let k=L.getViewport(Z);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),P.viewport(a),L.updateMatrices(D,Z),n=L.getFrustum(),y(w,E,L.camera,D,this.type)}L.isPointLightShadow!==!0&&this.type===Ss&&_(L,E),L.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,M)};function _(v,w){let E=t.update(u);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Pn(i.x,i.y)),f.uniforms.shadow_pass.value=v.map.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(w,null,E,f,u,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value=v.mapSize,m.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(w,null,E,m,u,null)}function b(v,w,E,C,x,M){let P=null,z=E.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(z!==void 0)P=z;else if(P=E.isPointLight===!0?l:r,o.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let V=P.uuid,D=w.uuid,L=c[V];L===void 0&&(L={},c[V]=L);let N=L[D];N===void 0&&(N=P.clone(),L[D]=N),P=N}return P.visible=w.visible,P.wireframe=w.wireframe,M===Ss?P.side=w.shadowSide!==null?w.shadowSide:w.side:P.side=w.shadowSide!==null?w.shadowSide:d[w.side],P.alphaMap=w.alphaMap,P.alphaTest=w.alphaTest,P.map=w.map,P.clipShadows=w.clipShadows,P.clippingPlanes=w.clippingPlanes,P.clipIntersection=w.clipIntersection,P.displacementMap=w.displacementMap,P.displacementScale=w.displacementScale,P.displacementBias=w.displacementBias,P.wireframeLinewidth=w.wireframeLinewidth,P.linewidth=w.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=C,P.farDistance=x),P}function y(v,w,E,C,x){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===Ss)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,v.matrixWorld);let z=t.update(v),V=v.material;if(Array.isArray(V)){let D=z.groups;for(let L=0,N=D.length;L<N;L++){let X=D[L],Z=V[X.materialIndex];if(Z&&Z.visible){let k=b(v,Z,C,E.near,E.far,x);o.renderBufferDirect(E,null,z,k,v,X)}}}else if(V.visible){let D=b(v,V,C,E.near,E.far,x);o.renderBufferDirect(E,null,z,D,v,null)}}let P=v.children;for(let z=0,V=P.length;z<V;z++)y(P[z],w,E,C,x)}}function Ig(o,t,e){let n=e.isWebGL2;function i(){let R=!1,G=new Yt,j=null,ot=new Yt(0,0,0,0);return{setMask:function(ut){j!==ut&&!R&&(o.colorMask(ut,ut,ut,ut),j=ut)},setLocked:function(ut){R=ut},setClear:function(ut,It,le,me,ti){ti===!0&&(ut*=me,It*=me,le*=me),G.set(ut,It,le,me),ot.equals(G)===!1&&(o.clearColor(ut,It,le,me),ot.copy(G))},reset:function(){R=!1,j=null,ot.set(-1,0,0,0)}}}function s(){let R=!1,G=null,j=null,ot=null;return{setTest:function(ut){ut?Mt(2929):ft(2929)},setMask:function(ut){G!==ut&&!R&&(o.depthMask(ut),G=ut)},setFunc:function(ut){if(j!==ut){switch(ut){case xu:o.depthFunc(512);break;case yu:o.depthFunc(519);break;case vu:o.depthFunc(513);break;case Fa:o.depthFunc(515);break;case bu:o.depthFunc(514);break;case Mu:o.depthFunc(518);break;case wu:o.depthFunc(516);break;case Su:o.depthFunc(517);break;default:o.depthFunc(515)}j=ut}},setLocked:function(ut){R=ut},setClear:function(ut){ot!==ut&&(o.clearDepth(ut),ot=ut)},reset:function(){R=!1,G=null,j=null,ot=null}}}function a(){let R=!1,G=null,j=null,ot=null,ut=null,It=null,le=null,me=null,ti=null;return{setTest:function(Wt){R||(Wt?Mt(2960):ft(2960))},setMask:function(Wt){G!==Wt&&!R&&(o.stencilMask(Wt),G=Wt)},setFunc:function(Wt,yn,qe){(j!==Wt||ot!==yn||ut!==qe)&&(o.stencilFunc(Wt,yn,qe),j=Wt,ot=yn,ut=qe)},setOp:function(Wt,yn,qe){(It!==Wt||le!==yn||me!==qe)&&(o.stencilOp(Wt,yn,qe),It=Wt,le=yn,me=qe)},setLocked:function(Wt){R=Wt},setClear:function(Wt){ti!==Wt&&(o.clearStencil(Wt),ti=Wt)},reset:function(){R=!1,G=null,j=null,ot=null,ut=null,It=null,le=null,me=null,ti=null}}}let r=new i,l=new s,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,u=[],p=null,_=!1,b=null,y=null,v=null,w=null,E=null,C=null,x=null,M=!1,P=null,z=null,V=null,D=null,L=null,N=o.getParameter(35661),X=!1,Z=0,k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(k)[1]),X=Z>=1):k.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),X=Z>=2);let Q=null,J={},ct=o.getParameter(3088),F=o.getParameter(2978),K=new Yt().fromArray(ct),et=new Yt().fromArray(F);function nt(R,G,j){let ot=new Uint8Array(4),ut=o.createTexture();o.bindTexture(R,ut),o.texParameteri(R,10241,9728),o.texParameteri(R,10240,9728);for(let It=0;It<j;It++)o.texImage2D(G+It,0,6408,1,1,0,6408,5121,ot);return ut}let B={};B[3553]=nt(3553,3553,1),B[34067]=nt(34067,34069,6),r.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Mt(2929),l.setFunc(Fa),pe(!1),He(gl),Mt(2884),be(Gn);function Mt(R){f[R]!==!0&&(o.enable(R),f[R]=!0)}function ft(R){f[R]!==!1&&(o.disable(R),f[R]=!1)}function dt(R,G){return m[R]!==G?(o.bindFramebuffer(R,G),m[R]=G,n&&(R===36009&&(m[36160]=G),R===36160&&(m[36009]=G)),!0):!1}function lt(R,G){let j=u,ot=!1;if(R)if(j=g.get(G),j===void 0&&(j=[],g.set(G,j)),R.isWebGLMultipleRenderTargets){let ut=R.texture;if(j.length!==ut.length||j[0]!==36064){for(let It=0,le=ut.length;It<le;It++)j[It]=36064+It;j.length=ut.length,ot=!0}}else j[0]!==36064&&(j[0]=36064,ot=!0);else j[0]!==1029&&(j[0]=1029,ot=!0);ot&&(e.isWebGL2?o.drawBuffers(j):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function kt(R){return p!==R?(o.useProgram(R),p=R,!0):!1}let wt={[Xi]:32774,[ou]:32778,[lu]:32779};if(n)wt[vl]=32775,wt[bl]=32776;else{let R=t.get("EXT_blend_minmax");R!==null&&(wt[vl]=R.MIN_EXT,wt[bl]=R.MAX_EXT)}let yt={[cu]:0,[hu]:1,[uu]:768,[Dc]:770,[_u]:776,[mu]:774,[du]:772,[fu]:769,[Ic]:771,[gu]:775,[pu]:773};function be(R,G,j,ot,ut,It,le,me){if(R===Gn){_===!0&&(ft(3042),_=!1);return}if(_===!1&&(Mt(3042),_=!0),R!==au){if(R!==b||me!==M){if((y!==Xi||E!==Xi)&&(o.blendEquation(32774),y=Xi,E=Xi),me)switch(R){case Ji:o.blendFuncSeparate(1,771,1,771);break;case _l:o.blendFunc(1,1);break;case xl:o.blendFuncSeparate(0,769,0,1);break;case yl:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case Ji:o.blendFuncSeparate(770,771,1,771);break;case _l:o.blendFunc(770,1);break;case xl:o.blendFuncSeparate(0,769,0,1);break;case yl:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}v=null,w=null,C=null,x=null,b=R,M=me}return}ut=ut||G,It=It||j,le=le||ot,(G!==y||ut!==E)&&(o.blendEquationSeparate(wt[G],wt[ut]),y=G,E=ut),(j!==v||ot!==w||It!==C||le!==x)&&(o.blendFuncSeparate(yt[j],yt[ot],yt[It],yt[le]),v=j,w=ot,C=It,x=le),b=R,M=!1}function We(R,G){R.side===Vn?ft(2884):Mt(2884);let j=R.side===Ve;G&&(j=!j),pe(j),R.blending===Ji&&R.transparent===!1?be(Gn):be(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),r.setMask(R.colorWrite);let ot=R.stencilWrite;c.setTest(ot),ot&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ft(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Mt(32926):ft(32926)}function pe(R){P!==R&&(R?o.frontFace(2304):o.frontFace(2305),P=R)}function He(R){R!==iu?(Mt(2884),R!==z&&(R===gl?o.cullFace(1029):R===su?o.cullFace(1028):o.cullFace(1032))):ft(2884),z=R}function ee(R){R!==V&&(X&&o.lineWidth(R),V=R)}function Ft(R,G,j){R?(Mt(32823),(D!==G||L!==j)&&(o.polygonOffset(G,j),D=G,L=j)):ft(32823)}function xn(R){R?Mt(3089):ft(3089)}function en(R){R===void 0&&(R=33984+N-1),Q!==R&&(o.activeTexture(R),Q=R)}function A(R,G,j){j===void 0&&(Q===null?j=33984+N-1:j=Q);let ot=J[j];ot===void 0&&(ot={type:void 0,texture:void 0},J[j]=ot),(ot.type!==R||ot.texture!==G)&&(Q!==j&&(o.activeTexture(j),Q=j),o.bindTexture(R,G||B[R]),ot.type=R,ot.texture=G)}function S(){let R=J[Q];R!==void 0&&R.type!==void 0&&(o.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function H(){try{o.compressedTexImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function it(){try{o.texSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function rt(){try{o.texSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function at(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Y(){try{o.texStorage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{o.texStorage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{o.texImage2D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ht(){try{o.texImage3D.apply(o,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(R){K.equals(R)===!1&&(o.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function pt(R){et.equals(R)===!1&&(o.viewport(R.x,R.y,R.z,R.w),et.copy(R))}function Lt(R,G){let j=d.get(G);j===void 0&&(j=new WeakMap,d.set(G,j));let ot=j.get(R);ot===void 0&&(ot=o.getUniformBlockIndex(G,R.name),j.set(R,ot))}function Gt(R,G){let ot=d.get(G).get(R);h.get(G)!==ot&&(o.uniformBlockBinding(G,ot,R.__bindingPointIndex),h.set(G,ot))}function oe(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},Q=null,J={},m={},g=new WeakMap,u=[],p=null,_=!1,b=null,y=null,v=null,w=null,E=null,C=null,x=null,M=!1,P=null,z=null,V=null,D=null,L=null,K.set(0,0,o.canvas.width,o.canvas.height),et.set(0,0,o.canvas.width,o.canvas.height),r.reset(),l.reset(),c.reset()}return{buffers:{color:r,depth:l,stencil:c},enable:Mt,disable:ft,bindFramebuffer:dt,drawBuffers:lt,useProgram:kt,setBlending:be,setMaterial:We,setFlipSided:pe,setCullFace:He,setLineWidth:ee,setPolygonOffset:Ft,setScissorTest:xn,activeTexture:en,bindTexture:A,unbindTexture:S,compressedTexImage2D:H,compressedTexImage3D:tt,texImage2D:xt,texImage3D:ht,updateUBOMapping:Lt,uniformBlockBinding:Gt,texStorage2D:Y,texStorage3D:gt,texSubImage2D:it,texSubImage3D:rt,compressedTexSubImage2D:vt,compressedTexSubImage3D:at,scissor:_t,viewport:pt,reset:oe}}function Og(o,t,e,n,i,s,a){let r=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(A,S){return _?new OffscreenCanvas(A,S):Rs("canvas")}function y(A,S,H,tt){let it=1;if((A.width>tt||A.height>tt)&&(it=tt/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap){let rt=S?Va:Math.floor,vt=rt(it*A.width),at=rt(it*A.height);u===void 0&&(u=b(vt,at));let Y=H?b(vt,at):u;return Y.width=vt,Y.height=at,Y.getContext("2d").drawImage(A,0,0,vt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+at+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function v(A){return Ql(A.width)&&Ql(A.height)}function w(A){return r?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==Te&&A.minFilter!==Ht}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==Te&&A.minFilter!==Ht}function C(A){o.generateMipmap(A)}function x(A,S,H,tt,it=!1){if(r===!1)return S;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=S;return S===6403&&(H===5126&&(rt=33326),H===5131&&(rt=33325),H===5121&&(rt=33321)),S===33319&&(H===5126&&(rt=33328),H===5131&&(rt=33327),H===5121&&(rt=33323)),S===6408&&(H===5126&&(rt=34836),H===5131&&(rt=34842),H===5121&&(rt=tt===Bt&&it===!1?35907:32856),H===32819&&(rt=32854),H===32820&&(rt=32855)),(rt===33325||rt===33326||rt===33327||rt===33328||rt===34842||rt===34836)&&t.get("EXT_color_buffer_float"),rt}function M(A,S,H){return E(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Te&&A.minFilter!==Ht?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function P(A){return A===Te||A===Ml||A===na?9728:9729}function z(A){let S=A.target;S.removeEventListener("dispose",z),D(S),S.isVideoTexture&&g.delete(S)}function V(A){let S=A.target;S.removeEventListener("dispose",V),N(S)}function D(A){let S=n.get(A);if(S.__webglInit===void 0)return;let H=A.source,tt=p.get(H);if(tt){let it=tt[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&L(A),Object.keys(tt).length===0&&p.delete(H)}n.remove(A)}function L(A){let S=n.get(A);o.deleteTexture(S.__webglTexture);let H=A.source,tt=p.get(H);delete tt[S.__cacheKey],a.memory.textures--}function N(A){let S=A.texture,H=n.get(A),tt=n.get(S);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)o.deleteFramebuffer(H.__webglFramebuffer[it]),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer[it]);else{if(o.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&o.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&o.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let it=0;it<H.__webglColorRenderbuffer.length;it++)H.__webglColorRenderbuffer[it]&&o.deleteRenderbuffer(H.__webglColorRenderbuffer[it]);H.__webglDepthRenderbuffer&&o.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,rt=S.length;it<rt;it++){let vt=n.get(S[it]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(A)}let X=0;function Z(){X=0}function k(){let A=X;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),X+=1,A}function Q(A){let S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function J(A,S){let H=n.get(A);if(A.isVideoTexture&&xn(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){let tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(H,A,S);return}}e.bindTexture(3553,H.__webglTexture,33984+S)}function ct(A,S){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ft(H,A,S);return}e.bindTexture(35866,H.__webglTexture,33984+S)}function F(A,S){let H=n.get(A);if(A.version>0&&H.__version!==A.version){ft(H,A,S);return}e.bindTexture(32879,H.__webglTexture,33984+S)}function K(A,S){let H=n.get(A);if(A.version>0&&H.__version!==A.version){dt(H,A,S);return}e.bindTexture(34067,H.__webglTexture,33984+S)}let et={[Ua]:10497,[an]:33071,[ka]:33648},nt={[Te]:9728,[Ml]:9984,[na]:9986,[Ht]:9729,[Du]:9985,[Es]:9987};function B(A,S,H){if(H?(o.texParameteri(A,10242,et[S.wrapS]),o.texParameteri(A,10243,et[S.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,et[S.wrapR]),o.texParameteri(A,10240,nt[S.magFilter]),o.texParameteri(A,10241,nt[S.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,P(S.magFilter)),o.texParameteri(A,10241,P(S.minFilter)),S.minFilter!==Te&&S.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Te||S.minFilter!==na&&S.minFilter!==Es||S.type===hi&&t.has("OES_texture_float_linear")===!1||r===!1&&S.type===Cs&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Mt(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",z));let tt=S.source,it=p.get(tt);it===void 0&&(it={},p.set(tt,it));let rt=Q(S);if(rt!==A.__cacheKey){it[rt]===void 0&&(it[rt]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,H=!0),it[rt].usedTimes++;let vt=it[A.__cacheKey];vt!==void 0&&(it[A.__cacheKey].usedTimes--,vt.usedTimes===0&&L(S)),A.__cacheKey=rt,A.__webglTexture=it[rt].texture}return H}function ft(A,S,H){let tt=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=35866),S.isData3DTexture&&(tt=32879);let it=Mt(A,S),rt=S.source;e.bindTexture(tt,A.__webglTexture,33984+H);let vt=n.get(rt);if(rt.version!==vt.__version||it===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let at=w(S)&&v(S.image)===!1,Y=y(S.image,at,!1,h);Y=en(S,Y);let gt=v(Y)||r,xt=s.convert(S.format,S.encoding),ht=s.convert(S.type),_t=x(S.internalFormat,xt,ht,S.encoding,S.isVideoTexture);B(tt,S,gt);let pt,Lt=S.mipmaps,Gt=r&&S.isVideoTexture!==!0,oe=vt.__version===void 0||it===!0,R=M(S,Y,gt);if(S.isDepthTexture)_t=6402,r?S.type===hi?_t=36012:S.type===ci?_t=33190:S.type===$i?_t=35056:_t=33189:S.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ui&&_t===6402&&S.type!==Nc&&S.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ci,ht=s.convert(S.type)),S.format===ts&&_t===6402&&(_t=34041,S.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=$i,ht=s.convert(S.type))),oe&&(Gt?e.texStorage2D(3553,1,_t,Y.width,Y.height):e.texImage2D(3553,0,_t,Y.width,Y.height,0,xt,ht,null));else if(S.isDataTexture)if(Lt.length>0&&gt){Gt&&oe&&e.texStorage2D(3553,R,_t,Lt[0].width,Lt[0].height);for(let G=0,j=Lt.length;G<j;G++)pt=Lt[G],Gt?e.texSubImage2D(3553,G,0,0,pt.width,pt.height,xt,ht,pt.data):e.texImage2D(3553,G,_t,pt.width,pt.height,0,xt,ht,pt.data);S.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(3553,R,_t,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,Y.width,Y.height,xt,ht,Y.data)):e.texImage2D(3553,0,_t,Y.width,Y.height,0,xt,ht,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Gt&&oe&&e.texStorage3D(35866,R,_t,Lt[0].width,Lt[0].height,Y.depth);for(let G=0,j=Lt.length;G<j;G++)pt=Lt[G],S.format!==on?xt!==null?Gt?e.compressedTexSubImage3D(35866,G,0,0,0,pt.width,pt.height,Y.depth,xt,pt.data,0,0):e.compressedTexImage3D(35866,G,_t,pt.width,pt.height,Y.depth,0,pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(35866,G,0,0,0,pt.width,pt.height,Y.depth,xt,ht,pt.data):e.texImage3D(35866,G,_t,pt.width,pt.height,Y.depth,0,xt,ht,pt.data)}else{Gt&&oe&&e.texStorage2D(3553,R,_t,Lt[0].width,Lt[0].height);for(let G=0,j=Lt.length;G<j;G++)pt=Lt[G],S.format!==on?xt!==null?Gt?e.compressedTexSubImage2D(3553,G,0,0,pt.width,pt.height,xt,pt.data):e.compressedTexImage2D(3553,G,_t,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(3553,G,0,0,pt.width,pt.height,xt,ht,pt.data):e.texImage2D(3553,G,_t,pt.width,pt.height,0,xt,ht,pt.data)}else if(S.isDataArrayTexture)Gt?(oe&&e.texStorage3D(35866,R,_t,Y.width,Y.height,Y.depth),e.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,xt,ht,Y.data)):e.texImage3D(35866,0,_t,Y.width,Y.height,Y.depth,0,xt,ht,Y.data);else if(S.isData3DTexture)Gt?(oe&&e.texStorage3D(32879,R,_t,Y.width,Y.height,Y.depth),e.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,xt,ht,Y.data)):e.texImage3D(32879,0,_t,Y.width,Y.height,Y.depth,0,xt,ht,Y.data);else if(S.isFramebufferTexture){if(oe)if(Gt)e.texStorage2D(3553,R,_t,Y.width,Y.height);else{let G=Y.width,j=Y.height;for(let ot=0;ot<R;ot++)e.texImage2D(3553,ot,_t,G,j,0,xt,ht,null),G>>=1,j>>=1}}else if(Lt.length>0&&gt){Gt&&oe&&e.texStorage2D(3553,R,_t,Lt[0].width,Lt[0].height);for(let G=0,j=Lt.length;G<j;G++)pt=Lt[G],Gt?e.texSubImage2D(3553,G,0,0,xt,ht,pt):e.texImage2D(3553,G,_t,xt,ht,pt);S.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(3553,R,_t,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,xt,ht,Y)):e.texImage2D(3553,0,_t,xt,ht,Y);E(S,gt)&&C(tt),vt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function dt(A,S,H){if(S.image.length!==6)return;let tt=Mt(A,S),it=S.source;e.bindTexture(34067,A.__webglTexture,33984+H);let rt=n.get(it);if(it.version!==rt.__version||tt===!0){e.activeTexture(33984+H),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);let vt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let G=0;G<6;G++)!vt&&!at?Y[G]=y(S.image[G],!1,!0,c):Y[G]=at?S.image[G].image:S.image[G],Y[G]=en(S,Y[G]);let gt=Y[0],xt=v(gt)||r,ht=s.convert(S.format,S.encoding),_t=s.convert(S.type),pt=x(S.internalFormat,ht,_t,S.encoding),Lt=r&&S.isVideoTexture!==!0,Gt=rt.__version===void 0||tt===!0,oe=M(S,gt,xt);B(34067,S,xt);let R;if(vt){Lt&&Gt&&e.texStorage2D(34067,oe,pt,gt.width,gt.height);for(let G=0;G<6;G++){R=Y[G].mipmaps;for(let j=0;j<R.length;j++){let ot=R[j];S.format!==on?ht!==null?Lt?e.compressedTexSubImage2D(34069+G,j,0,0,ot.width,ot.height,ht,ot.data):e.compressedTexImage2D(34069+G,j,pt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?e.texSubImage2D(34069+G,j,0,0,ot.width,ot.height,ht,_t,ot.data):e.texImage2D(34069+G,j,pt,ot.width,ot.height,0,ht,_t,ot.data)}}}else{R=S.mipmaps,Lt&&Gt&&(R.length>0&&oe++,e.texStorage2D(34067,oe,pt,Y[0].width,Y[0].height));for(let G=0;G<6;G++)if(at){Lt?e.texSubImage2D(34069+G,0,0,0,Y[G].width,Y[G].height,ht,_t,Y[G].data):e.texImage2D(34069+G,0,pt,Y[G].width,Y[G].height,0,ht,_t,Y[G].data);for(let j=0;j<R.length;j++){let ut=R[j].image[G].image;Lt?e.texSubImage2D(34069+G,j+1,0,0,ut.width,ut.height,ht,_t,ut.data):e.texImage2D(34069+G,j+1,pt,ut.width,ut.height,0,ht,_t,ut.data)}}else{Lt?e.texSubImage2D(34069+G,0,0,0,ht,_t,Y[G]):e.texImage2D(34069+G,0,pt,ht,_t,Y[G]);for(let j=0;j<R.length;j++){let ot=R[j];Lt?e.texSubImage2D(34069+G,j+1,0,0,ht,_t,ot.image[G]):e.texImage2D(34069+G,j+1,pt,ht,_t,ot.image[G])}}}E(S,xt)&&C(34067),rt.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,H,tt,it){let rt=s.convert(H.format,H.encoding),vt=s.convert(H.type),at=x(H.internalFormat,rt,vt,H.encoding);n.get(S).__hasExternalTextures||(it===32879||it===35866?e.texImage3D(it,0,at,S.width,S.height,S.depth,0,rt,vt,null):e.texImage2D(it,0,at,S.width,S.height,0,rt,vt,null)),e.bindFramebuffer(36160,A),Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,tt,it,n.get(H).__webglTexture,0,ee(S)):(it===3553||it>=34069&&it<=34074)&&o.framebufferTexture2D(36160,tt,it,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function kt(A,S,H){if(o.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(H||Ft(S)){let it=S.depthTexture;it&&it.isDepthTexture&&(it.type===hi?tt=36012:it.type===ci&&(tt=33190));let rt=ee(S);Ft(S)?f.renderbufferStorageMultisampleEXT(36161,rt,tt,S.width,S.height):o.renderbufferStorageMultisample(36161,rt,tt,S.width,S.height)}else o.renderbufferStorage(36161,tt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){let tt=ee(S);H&&Ft(S)===!1?o.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):Ft(S)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{let tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<tt.length;it++){let rt=tt[it],vt=s.convert(rt.format,rt.encoding),at=s.convert(rt.type),Y=x(rt.internalFormat,vt,at,rt.encoding),gt=ee(S);H&&Ft(S)===!1?o.renderbufferStorageMultisample(36161,gt,Y,S.width,S.height):Ft(S)?f.renderbufferStorageMultisampleEXT(36161,gt,Y,S.width,S.height):o.renderbufferStorage(36161,Y,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function wt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J(S.depthTexture,0);let tt=n.get(S.depthTexture).__webglTexture,it=ee(S);if(S.depthTexture.format===ui)Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,it):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===ts)Ft(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,it):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function yt(A){let S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");wt(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=o.createRenderbuffer(),kt(S.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),kt(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function be(A,S,H){let tt=n.get(A);S!==void 0&&lt(tt.__webglFramebuffer,A,A.texture,36064,3553),H!==void 0&&yt(A)}function We(A){let S=A.texture,H=n.get(A),tt=n.get(S);A.addEventListener("dispose",V),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=S.version,a.memory.textures++);let it=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,vt=v(A)||r;if(it){H.__webglFramebuffer=[];for(let at=0;at<6;at++)H.__webglFramebuffer[at]=o.createFramebuffer()}else{if(H.__webglFramebuffer=o.createFramebuffer(),rt)if(i.drawBuffers){let at=A.texture;for(let Y=0,gt=at.length;Y<gt;Y++){let xt=n.get(at[Y]);xt.__webglTexture===void 0&&(xt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&Ft(A)===!1){let at=rt?S:[S];H.__webglMultisampledFramebuffer=o.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer);for(let Y=0;Y<at.length;Y++){let gt=at[Y];H.__webglColorRenderbuffer[Y]=o.createRenderbuffer(),o.bindRenderbuffer(36161,H.__webglColorRenderbuffer[Y]);let xt=s.convert(gt.format,gt.encoding),ht=s.convert(gt.type),_t=x(gt.internalFormat,xt,ht,gt.encoding,A.isXRRenderTarget===!0),pt=ee(A);o.renderbufferStorageMultisample(36161,pt,_t,A.width,A.height),o.framebufferRenderbuffer(36160,36064+Y,36161,H.__webglColorRenderbuffer[Y])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(it){e.bindTexture(34067,tt.__webglTexture),B(34067,S,vt);for(let at=0;at<6;at++)lt(H.__webglFramebuffer[at],A,S,36064,34069+at);E(S,vt)&&C(34067),e.unbindTexture()}else if(rt){let at=A.texture;for(let Y=0,gt=at.length;Y<gt;Y++){let xt=at[Y],ht=n.get(xt);e.bindTexture(3553,ht.__webglTexture),B(3553,xt,vt),lt(H.__webglFramebuffer,A,xt,36064+Y,3553),E(xt,vt)&&C(3553)}e.unbindTexture()}else{let at=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?at=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,tt.__webglTexture),B(at,S,vt),lt(H.__webglFramebuffer,A,S,36064,at),E(S,vt)&&C(at),e.unbindTexture()}A.depthBuffer&&yt(A)}function pe(A){let S=v(A)||r,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,it=H.length;tt<it;tt++){let rt=H[tt];if(E(rt,S)){let vt=A.isWebGLCubeRenderTarget?34067:3553,at=n.get(rt).__webglTexture;e.bindTexture(vt,at),C(vt),e.unbindTexture()}}}function He(A){if(r&&A.samples>0&&Ft(A)===!1){let S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,tt=A.height,it=16384,rt=[],vt=A.stencilBuffer?33306:36096,at=n.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+gt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+gt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){rt.push(36064+gt),A.depthBuffer&&rt.push(vt);let xt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(xt===!1&&(A.depthBuffer&&(it|=256),A.stencilBuffer&&(it|=1024)),Y&&o.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[gt]),xt===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),Y){let ht=n.get(S[gt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ht,0)}o.blitFramebuffer(0,0,H,tt,0,0,H,tt,it,9728),m&&o.invalidateFramebuffer(36008,rt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Y)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+gt,36161,at.__webglColorRenderbuffer[gt]);let xt=n.get(S[gt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+gt,3553,xt,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function ee(A){return Math.min(d,A.samples)}function Ft(A){let S=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xn(A){let S=a.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function en(A,S){let H=A.encoding,tt=A.format,it=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ba||H!==pi&&(H===Bt?r===!1?t.has("EXT_sRGB")===!0&&tt===on?(A.format=Ba,A.minFilter=Ht,A.generateMipmaps=!1):S=_r.sRGBToLinear(S):(tt!==on||it!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),S}this.allocateTextureUnit=k,this.resetTextureUnits=Z,this.setTexture2D=J,this.setTexture2DArray=ct,this.setTexture3D=F,this.setTextureCube=K,this.rebindTextures=be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=He,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ft}function Fg(o,t,e){let n=e.isWebGL2;function i(s,a=null){let r;if(s===di)return 5121;if(s===Nu)return 32819;if(s===zu)return 32820;if(s===Iu)return 5120;if(s===Ou)return 5122;if(s===Nc)return 5123;if(s===Fu)return 5124;if(s===ci)return 5125;if(s===hi)return 5126;if(s===Cs)return n?5131:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Uu)return 6406;if(s===on)return 6408;if(s===ku)return 6409;if(s===Bu)return 6410;if(s===ui)return 6402;if(s===ts)return 34041;if(s===Ba)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Vu)return 6403;if(s===Gu)return 36244;if(s===Wu)return 33319;if(s===Hu)return 33320;if(s===qu)return 36249;if(s===ia||s===sa||s===ra||s===aa)if(a===Bt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wl||s===Sl||s===Tl||s===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xu)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===El||s===Cl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(s===El)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Cl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Pl||s===Rl||s===Ll||s===Dl||s===Il||s===Ol||s===Fl||s===Nl||s===zl||s===Ul||s===kl||s===Bl||s===Vl||s===Gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Pl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ll)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Dl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Il)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ol)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Fl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Nl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ul)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===kl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===oa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(s===oa)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Yu||s===Wl||s===Hl||s===ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(s===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(s===Wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$i?n?34042:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:i}}var to=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Zi=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ng={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let u of t.hand.values()){let p=e.getJointPose(u,n),_=this._getHandJoint(c,u);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Ng)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},eo=class extends ue{constructor(t,e,n,i,s,a,r,l,c,h){if(h=h!==void 0?h:ui,h!==ui&&h!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=ci),n===void 0&&h===ts&&(n=$i),super(null,i,s,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1}},no=class extends Hn{constructor(t,e){super();let n=this,i=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,u=e.getContextAttributes(),p=null,_=null,b=[],y=[],v=new Set,w=new Map,E=new Be;E.layers.enable(1),E.viewport=new Yt;let C=new Be;C.layers.enable(2),C.viewport=new Yt;let x=[E,C],M=new to;M.layers.enable(1),M.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let K=b[F];return K===void 0&&(K=new As,b[F]=K),K.getTargetRaySpace()},this.getControllerGrip=function(F){let K=b[F];return K===void 0&&(K=new As,b[F]=K),K.getGripSpace()},this.getHand=function(F){let K=b[F];return K===void 0&&(K=new As,b[F]=K),K.getHandSpace()};function V(F){let K=y.indexOf(F.inputSource);if(K===-1)return;let et=b[K];et!==void 0&&et.dispatchEvent({type:F.type,data:F.inputSource})}function D(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",L);for(let F=0;F<b.length;F++){let K=y[F];K!==null&&(y[F]=null,b[F].disconnect(K))}P=null,z=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,_=null,ct.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",D),i.addEventListener("inputsourceschange",L),u.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let K={antialias:i.renderState.layers===void 0?u.antialias:!0,alpha:u.alpha,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,K),i.updateRenderState({baseLayer:m}),_=new Pn(m.framebufferWidth,m.framebufferHeight,{format:on,type:di,encoding:t.outputEncoding,stencilBuffer:u.stencil})}else{let K=null,et=null,nt=null;u.depth&&(nt=u.stencil?35056:33190,K=u.stencil?ts:ui,et=u.stencil?$i:ci);let B={colorFormat:32856,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(B),i.updateRenderState({layers:[f]}),_=new Pn(f.textureWidth,f.textureHeight,{format:on,type:di,depthTexture:new eo(f.textureWidth,f.textureHeight,et,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:u.stencil,encoding:t.outputEncoding,samples:u.antialias?4:0});let Mt=t.properties.get(_);Mt.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),ct.setContext(i),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(F){for(let K=0;K<F.removed.length;K++){let et=F.removed[K],nt=y.indexOf(et);nt>=0&&(y[nt]=null,b[nt].disconnect(et))}for(let K=0;K<F.added.length;K++){let et=F.added[K],nt=y.indexOf(et);if(nt===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=y.length){y.push(et),nt=Mt;break}else if(y[Mt]===null){y[Mt]=et,nt=Mt;break}if(nt===-1)break}let B=b[nt];B&&B.connect(et)}}let N=new U,X=new U;function Z(F,K,et){N.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(et.matrixWorld);let nt=N.distanceTo(X),B=K.projectionMatrix.elements,Mt=et.projectionMatrix.elements,ft=B[14]/(B[10]-1),dt=B[14]/(B[10]+1),lt=(B[9]+1)/B[5],kt=(B[9]-1)/B[5],wt=(B[8]-1)/B[0],yt=(Mt[8]+1)/Mt[0],be=ft*wt,We=ft*yt,pe=nt/(-wt+yt),He=pe*-wt;K.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(He),F.translateZ(pe),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();let ee=ft+pe,Ft=dt+pe,xn=be-He,en=We+(nt-He),A=lt*dt/Ft*ee,S=kt*dt/Ft*ee;F.projectionMatrix.makePerspective(xn,en,A,S,ee,Ft)}function k(F,K){K===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(K.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;M.near=C.near=E.near=F.near,M.far=C.far=E.far=F.far,(P!==M.near||z!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,z=M.far);let K=F.parent,et=M.cameras;k(M,K);for(let B=0;B<et.length;B++)k(et[B],K);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),F.matrix.copy(M.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);let nt=F.children;for(let B=0,Mt=nt.length;B<Mt;B++)nt[B].updateMatrixWorld(!0);et.length===2?Z(M,E,C):M.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)},this.getPlanes=function(){return v};let Q=null;function J(F,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let et=h.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let nt=!1;et.length!==M.cameras.length&&(M.cameras.length=0,nt=!0);for(let B=0;B<et.length;B++){let Mt=et[B],ft=null;if(m!==null)ft=m.getViewport(Mt);else{let lt=d.getViewSubImage(f,Mt);ft=lt.viewport,B===0&&(t.setRenderTargetTextures(_,lt.colorTexture,f.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(_))}let dt=x[B];dt===void 0&&(dt=new Be,dt.layers.enable(B),dt.viewport=new Yt,x[B]=dt),dt.matrix.fromArray(Mt.transform.matrix),dt.projectionMatrix.fromArray(Mt.projectionMatrix),dt.viewport.set(ft.x,ft.y,ft.width,ft.height),B===0&&M.matrix.copy(dt.matrix),nt===!0&&M.cameras.push(dt)}}for(let et=0;et<b.length;et++){let nt=y[et],B=b[et];nt!==null&&B!==void 0&&B.update(nt,K,c||a)}if(Q&&Q(F,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let et=null;for(let nt of v)K.detectedPlanes.has(nt)||(et===null&&(et=[]),et.push(nt));if(et!==null)for(let nt of et)v.delete(nt),w.delete(nt),n.dispatchEvent({type:"planeremoved",data:nt});for(let nt of K.detectedPlanes)if(!v.has(nt))v.add(nt),w.set(nt,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:nt});else{let B=w.get(nt);nt.lastChangedTime>B&&(w.set(nt,nt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:nt}))}}g=null}let ct=new Bc;ct.setAnimationLoop(J),this.setAnimationLoop=function(F){Q=F},this.dispose=function(){}}};function zg(o,t){function e(u,p){p.color.getRGB(u.fogColor.value,kc(o)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function n(u,p,_,b,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(u,p):p.isMeshToonMaterial?(i(u,p),h(u,p)):p.isMeshPhongMaterial?(i(u,p),c(u,p)):p.isMeshStandardMaterial?(i(u,p),d(u,p),p.isMeshPhysicalMaterial&&f(u,p,y)):p.isMeshMatcapMaterial?(i(u,p),m(u,p)):p.isMeshDepthMaterial?i(u,p):p.isMeshDistanceMaterial?(i(u,p),g(u,p)):p.isMeshNormalMaterial?i(u,p):p.isLineBasicMaterial?(s(u,p),p.isLineDashedMaterial&&a(u,p)):p.isPointsMaterial?r(u,p,_,b):p.isSpriteMaterial?l(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.bumpMap&&(u.bumpMap.value=p.bumpMap,u.bumpScale.value=p.bumpScale,p.side===Ve&&(u.bumpScale.value*=-1)),p.displacementMap&&(u.displacementMap.value=p.displacementMap,u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap),p.normalMap&&(u.normalMap.value=p.normalMap,u.normalScale.value.copy(p.normalScale),p.side===Ve&&u.normalScale.value.negate()),p.specularMap&&(u.specularMap.value=p.specularMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let _=t.get(p).envMap;if(_&&(u.envMap.value=_,u.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap){u.lightMap.value=p.lightMap;let v=o.physicallyCorrectLights!==!0?Math.PI:1;u.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity);let b;p.map?b=p.map:p.specularMap?b=p.specularMap:p.displacementMap?b=p.displacementMap:p.normalMap?b=p.normalMap:p.bumpMap?b=p.bumpMap:p.roughnessMap?b=p.roughnessMap:p.metalnessMap?b=p.metalnessMap:p.alphaMap?b=p.alphaMap:p.emissiveMap?b=p.emissiveMap:p.clearcoatMap?b=p.clearcoatMap:p.clearcoatNormalMap?b=p.clearcoatNormalMap:p.clearcoatRoughnessMap?b=p.clearcoatRoughnessMap:p.iridescenceMap?b=p.iridescenceMap:p.iridescenceThicknessMap?b=p.iridescenceThicknessMap:p.specularIntensityMap?b=p.specularIntensityMap:p.specularColorMap?b=p.specularColorMap:p.transmissionMap?b=p.transmissionMap:p.thicknessMap?b=p.thicknessMap:p.sheenColorMap?b=p.sheenColorMap:p.sheenRoughnessMap&&(b=p.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),u.uvTransform.value.copy(b.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),u.uv2Transform.value.copy(y.matrix))}function s(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity}function a(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function r(u,p,_,b){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*_,u.scale.value=b*.5,p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),u.uvTransform.value.copy(y.matrix))}function l(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map),p.alphaMap&&(u.alphaMap.value=p.alphaMap),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),u.uvTransform.value.copy(_.matrix))}function c(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function h(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function d(u,p){u.roughness.value=p.roughness,u.metalness.value=p.metalness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function f(u,p,_){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),u.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ve&&u.clearcoatNormalScale.value.negate())),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap)}function m(u,p){p.matcap&&(u.matcap.value=p.matcap)}function g(u,p){u.referencePosition.value.copy(p.referencePosition),u.nearDistance.value=p.nearDistance,u.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Ug(o,t,e,n){let i={},s={},a=[],r=e.isWebGL2?o.getParameter(35375):0;function l(b,y){let v=y.program;n.uniformBlockBinding(b,v)}function c(b,y){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",p));let w=y.program;n.updateUBOMapping(b,w);let E=t.render.frame;s[b.id]!==E&&(f(b),s[b.id]=E)}function h(b){let y=d();b.__bindingPointIndex=y;let v=o.createBuffer(),w=b.__size,E=b.usage;return o.bindBuffer(35345,v),o.bufferData(35345,w,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,v),v}function d(){for(let b=0;b<r;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=i[b.id],v=b.uniforms,w=b.__cache;o.bindBuffer(35345,y);for(let E=0,C=v.length;E<C;E++){let x=v[E];if(m(x,E,w)===!0){let M=x.__offset,P=Array.isArray(x.value)?x.value:[x.value],z=0;for(let V=0;V<P.length;V++){let D=P[V],L=u(D);typeof D=="number"?(x.__data[0]=D,o.bufferSubData(35345,M+z,x.__data)):D.isMatrix3?(x.__data[0]=D.elements[0],x.__data[1]=D.elements[1],x.__data[2]=D.elements[2],x.__data[3]=D.elements[0],x.__data[4]=D.elements[3],x.__data[5]=D.elements[4],x.__data[6]=D.elements[5],x.__data[7]=D.elements[0],x.__data[8]=D.elements[6],x.__data[9]=D.elements[7],x.__data[10]=D.elements[8],x.__data[11]=D.elements[0]):(D.toArray(x.__data,z),z+=L.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,M,x.__data)}}o.bindBuffer(35345,null)}function m(b,y,v){let w=b.value;if(v[y]===void 0){if(typeof w=="number")v[y]=w;else{let E=Array.isArray(w)?w:[w],C=[];for(let x=0;x<E.length;x++)C.push(E[x].clone());v[y]=C}return!0}else if(typeof w=="number"){if(v[y]!==w)return v[y]=w,!0}else{let E=Array.isArray(v[y])?v[y]:[v[y]],C=Array.isArray(w)?w:[w];for(let x=0;x<E.length;x++){let M=E[x];if(M.equals(C[x])===!1)return M.copy(C[x]),!0}}return!1}function g(b){let y=b.uniforms,v=0,w=16,E=0;for(let C=0,x=y.length;C<x;C++){let M=y[C],P={boundary:0,storage:0},z=Array.isArray(M.value)?M.value:[M.value];for(let V=0,D=z.length;V<D;V++){let L=z[V],N=u(L);P.boundary+=N.boundary,P.storage+=N.storage}if(M.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,C>0){E=v%w;let V=w-E;E!==0&&V-P.boundary<0&&(v+=w-E,M.__offset=v)}v+=P.storage}return E=v%w,E>0&&(v+=w-E),b.__size=v,b.__cache={},this}function u(b){let y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function p(b){let y=b.target;y.removeEventListener("dispose",p);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(let b in i)o.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function kg(){let o=Rs("canvas");return o.style.display="block",o}function _o(o={}){this.isWebGLRenderer=!0;let t=o.canvas!==void 0?o.canvas:kg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,r=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1,h;e!==null?h=e.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let d=null,f=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1;let u=this,p=!1,_=0,b=0,y=null,v=-1,w=null,E=new Yt,C=new Yt,x=null,M=t.width,P=t.height,z=1,V=null,D=null,L=new Yt(0,0,M,P),N=new Yt(0,0,M,P),X=!1,Z=new Ar,k=!1,Q=!1,J=null,ct=new ie,F=new Nt,K=new U,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function nt(){return y===null?z:1}let B=e;function Mt(T,O){for(let W=0;W<T.length;W++){let I=T[W],q=t.getContext(I,O);if(q!==null)return q}return null}try{let T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:r,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mo}`),t.addEventListener("webglcontextlost",_t,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Lt,!1),B===null){let O=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&O.shift(),B=Mt(O,T),B===null)throw Mt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ft,dt,lt,kt,wt,yt,be,We,pe,He,ee,Ft,xn,en,A,S,H,tt,it,rt,vt,at,Y,gt;function xt(){ft=new am(B),dt=new tm(B,ft,o),ft.init(dt),at=new Fg(B,ft,dt),lt=new Ig(B,ft,dt),kt=new cm,wt=new bg,yt=new Og(B,ft,lt,wt,dt,at,kt),be=new nm(u),We=new rm(u),pe=new xf(B,dt),Y=new Qp(B,ft,pe,dt),He=new om(B,pe,kt,Y),ee=new dm(B,He,pe,kt),it=new fm(B,dt,yt),S=new em(wt),Ft=new vg(u,be,We,ft,dt,Y,S),xn=new zg(u,wt),en=new wg,A=new Pg(ft,dt),tt=new Kp(u,be,We,lt,ee,h,a),H=new Dg(u,ee,dt),gt=new Ug(B,kt,dt,lt),rt=new jp(B,ft,kt,dt),vt=new lm(B,ft,kt,dt),kt.programs=Ft.programs,u.capabilities=dt,u.extensions=ft,u.properties=wt,u.renderLists=en,u.shadowMap=H,u.state=lt,u.info=kt}xt();let ht=new no(u,B);this.xr=ht,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let T=ft.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ft.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(M,P,!1))},this.getSize=function(T){return T.set(M,P)},this.setSize=function(T,O,W){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=T,P=O,t.width=Math.floor(T*z),t.height=Math.floor(O*z),W!==!1&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(M*z,P*z).floor()},this.setDrawingBufferSize=function(T,O,W){M=T,P=O,z=W,t.width=Math.floor(T*W),t.height=Math.floor(O*W),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(L)},this.setViewport=function(T,O,W,I){T.isVector4?L.set(T.x,T.y,T.z,T.w):L.set(T,O,W,I),lt.viewport(E.copy(L).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,O,W,I){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,O,W,I),lt.scissor(C.copy(N).multiplyScalar(z).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){lt.setScissorTest(X=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){D=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,O=!0,W=!0){let I=0;T&&(I|=16384),O&&(I|=256),W&&(I|=1024),B.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_t,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Lt,!1),en.dispose(),A.dispose(),wt.dispose(),be.dispose(),We.dispose(),ee.dispose(),Y.dispose(),gt.dispose(),Ft.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ot),ht.removeEventListener("sessionend",ut),J&&(J.dispose(),J=null),It.stop()};function _t(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;let T=kt.autoReset,O=H.enabled,W=H.autoUpdate,I=H.needsUpdate,q=H.type;xt(),kt.autoReset=T,H.enabled=O,H.autoUpdate=W,H.needsUpdate=I,H.type=q}function Lt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Gt(T){let O=T.target;O.removeEventListener("dispose",Gt),oe(O)}function oe(T){R(T),wt.remove(T)}function R(T){let O=wt.get(T).programs;O!==void 0&&(O.forEach(function(W){Ft.releaseProgram(W)}),T.isShaderMaterial&&Ft.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,W,I,q,mt){O===null&&(O=et);let bt=q.isMesh&&q.matrixWorld.determinant()<0,Tt=jh(T,O,W,I,q);lt.setMaterial(I,bt);let At=W.index,Dt=1;I.wireframe===!0&&(At=He.getWireframeAttribute(W),Dt=2);let Ct=W.drawRange,Pt=W.attributes.position,Qt=Ct.start*Dt,Oe=(Ct.start+Ct.count)*Dt;mt!==null&&(Qt=Math.max(Qt,mt.start*Dt),Oe=Math.min(Oe,(mt.start+mt.count)*Dt)),At!==null?(Qt=Math.max(Qt,0),Oe=Math.min(Oe,At.count)):Pt!=null&&(Qt=Math.max(Qt,0),Oe=Math.min(Oe,Pt.count));let vn=Oe-Qt;if(vn<0||vn===1/0)return;Y.setup(q,I,Tt,W,At);let ei,jt=rt;if(At!==null&&(ei=pe.get(At),jt=vt,jt.setIndex(ei)),q.isMesh)I.wireframe===!0?(lt.setLineWidth(I.wireframeLinewidth*nt()),jt.setMode(1)):jt.setMode(4);else if(q.isLine){let Rt=I.linewidth;Rt===void 0&&(Rt=1),lt.setLineWidth(Rt*nt()),q.isLineSegments?jt.setMode(1):q.isLineLoop?jt.setMode(2):jt.setMode(3)}else q.isPoints?jt.setMode(0):q.isSprite&&jt.setMode(4);if(q.isInstancedMesh)jt.renderInstances(Qt,vn,q.count);else if(W.isInstancedBufferGeometry){let Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Qr=Math.min(W.instanceCount,Rt);jt.renderInstances(Qt,vn,Qr)}else jt.render(Qt,vn)},this.compile=function(T,O){function W(I,q,mt){I.transparent===!0&&I.side===Vn&&I.forceSinglePass===!1?(I.side=Ve,I.needsUpdate=!0,qe(I,q,mt),I.side=Wn,I.needsUpdate=!0,qe(I,q,mt),I.side=Vn):qe(I,q,mt)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(u.physicallyCorrectLights),T.traverse(function(I){let q=I.material;if(q)if(Array.isArray(q))for(let mt=0;mt<q.length;mt++){let bt=q[mt];W(bt,T,I)}else W(q,T,I)}),g.pop(),f=null};let G=null;function j(T){G&&G(T)}function ot(){It.stop()}function ut(){It.start()}let It=new Bc;It.setAnimationLoop(j),typeof self!="undefined"&&It.setContext(self),this.setAnimationLoop=function(T){G=T,ht.setAnimationLoop(T),T===null?It.stop():It.start()},ht.addEventListener("sessionstart",ot),ht.addEventListener("sessionend",ut),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(O),O=ht.getCamera()),T.isScene===!0&&T.onBeforeRender(u,T,O,y),f=A.get(T,g.length),f.init(),g.push(f),ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Z.setFromProjectionMatrix(ct),Q=this.localClippingEnabled,k=S.init(this.clippingPlanes,Q),d=en.get(T,m.length),d.init(),m.push(d),le(T,O,0,u.sortObjects),d.finish(),u.sortObjects===!0&&d.sort(V,D),k===!0&&S.beginShadows();let W=f.state.shadowsArray;if(H.render(W,T,O),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(d,T),f.setupLights(u.physicallyCorrectLights),O.isArrayCamera){let I=O.cameras;for(let q=0,mt=I.length;q<mt;q++){let bt=I[q];me(d,T,bt,bt.viewport)}}else me(d,T,O);y!==null&&(yt.updateMultisampleRenderTarget(y),yt.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(u,T,O),Y.resetDefaultState(),v=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function le(T,O,W,I){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Z.intersectsSprite(T)){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);let bt=ee.update(T),Tt=T.material;Tt.visible&&d.push(T,bt,Tt,W,K.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==kt.render.frame&&(T.skeleton.update(),T.skeleton.frame=kt.render.frame),!T.frustumCulled||Z.intersectsObject(T))){I&&K.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ct);let bt=ee.update(T),Tt=T.material;if(Array.isArray(Tt)){let At=bt.groups;for(let Dt=0,Ct=At.length;Dt<Ct;Dt++){let Pt=At[Dt],Qt=Tt[Pt.materialIndex];Qt&&Qt.visible&&d.push(T,bt,Qt,W,K.z,Pt)}}else Tt.visible&&d.push(T,bt,Tt,W,K.z,null)}}let mt=T.children;for(let bt=0,Tt=mt.length;bt<Tt;bt++)le(mt[bt],O,W,I)}function me(T,O,W,I){let q=T.opaque,mt=T.transmissive,bt=T.transparent;f.setupLightsView(W),k===!0&&S.setGlobalState(u.clippingPlanes,W),mt.length>0&&ti(q,O,W),I&&lt.viewport(E.copy(I)),q.length>0&&Wt(q,O,W),mt.length>0&&Wt(mt,O,W),bt.length>0&&Wt(bt,O,W),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function ti(T,O,W){let I=dt.isWebGL2;J===null&&(J=new Pn(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")?Cs:di,minFilter:Es,samples:I&&s===!0?4:0})),u.getDrawingBufferSize(F),I?J.setSize(F.x,F.y):J.setSize(Va(F.x),Va(F.y));let q=u.getRenderTarget();u.setRenderTarget(J),u.clear();let mt=u.toneMapping;u.toneMapping=En,Wt(T,O,W),u.toneMapping=mt,yt.updateMultisampleRenderTarget(J),yt.updateRenderTargetMipmap(J),u.setRenderTarget(q)}function Wt(T,O,W){let I=O.isScene===!0?O.overrideMaterial:null;for(let q=0,mt=T.length;q<mt;q++){let bt=T[q],Tt=bt.object,At=bt.geometry,Dt=I===null?bt.material:I,Ct=bt.group;Tt.layers.test(W.layers)&&yn(Tt,O,W,At,Dt,Ct)}}function yn(T,O,W,I,q,mt){T.onBeforeRender(u,O,W,I,q,mt),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(u,O,W,I,T,mt),q.transparent===!0&&q.side===Vn&&q.forceSinglePass===!1?(q.side=Ve,q.needsUpdate=!0,u.renderBufferDirect(W,O,I,q,T,mt),q.side=Wn,q.needsUpdate=!0,u.renderBufferDirect(W,O,I,q,T,mt),q.side=Vn):u.renderBufferDirect(W,O,I,q,T,mt),T.onAfterRender(u,O,W,I,q,mt)}function qe(T,O,W){O.isScene!==!0&&(O=et);let I=wt.get(T),q=f.state.lights,mt=f.state.shadowsArray,bt=q.state.version,Tt=Ft.getParameters(T,q.state,mt,O,W),At=Ft.getProgramCacheKey(Tt),Dt=I.programs;I.environment=T.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(T.isMeshStandardMaterial?We:be).get(T.envMap||I.environment),Dt===void 0&&(T.addEventListener("dispose",Gt),Dt=new Map,I.programs=Dt);let Ct=Dt.get(At);if(Ct!==void 0){if(I.currentProgram===Ct&&I.lightsStateVersion===bt)return dl(T,Tt),Ct}else Tt.uniforms=Ft.getUniforms(T),T.onBuild(W,Tt,u),T.onBeforeCompile(Tt,u),Ct=Ft.acquireProgram(Tt,At),Dt.set(At,Ct),I.uniforms=Tt.uniforms;let Pt=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pt.clippingPlanes=S.uniform),dl(T,Tt),I.needsLights=eu(T),I.lightsStateVersion=bt,I.needsLights&&(Pt.ambientLightColor.value=q.state.ambient,Pt.lightProbe.value=q.state.probe,Pt.directionalLights.value=q.state.directional,Pt.directionalLightShadows.value=q.state.directionalShadow,Pt.spotLights.value=q.state.spot,Pt.spotLightShadows.value=q.state.spotShadow,Pt.rectAreaLights.value=q.state.rectArea,Pt.ltc_1.value=q.state.rectAreaLTC1,Pt.ltc_2.value=q.state.rectAreaLTC2,Pt.pointLights.value=q.state.point,Pt.pointLightShadows.value=q.state.pointShadow,Pt.hemisphereLights.value=q.state.hemi,Pt.directionalShadowMap.value=q.state.directionalShadowMap,Pt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Pt.spotShadowMap.value=q.state.spotShadowMap,Pt.spotLightMatrix.value=q.state.spotLightMatrix,Pt.spotLightMap.value=q.state.spotLightMap,Pt.pointShadowMap.value=q.state.pointShadowMap,Pt.pointShadowMatrix.value=q.state.pointShadowMatrix);let Qt=Ct.getUniforms(),Oe=Ki.seqWithValue(Qt.seq,Pt);return I.currentProgram=Ct,I.uniformsList=Oe,Ct}function dl(T,O){let W=wt.get(T);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function jh(T,O,W,I,q){O.isScene!==!0&&(O=et),yt.resetTextureUnits();let mt=O.fog,bt=I.isMeshStandardMaterial?O.environment:null,Tt=y===null?u.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:pi,At=(I.isMeshStandardMaterial?We:be).get(I.envMap||bt),Dt=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ct=!!I.normalMap&&!!W.attributes.tangent,Pt=!!W.morphAttributes.position,Qt=!!W.morphAttributes.normal,Oe=!!W.morphAttributes.color,vn=I.toneMapped?u.toneMapping:En,ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,jt=ei!==void 0?ei.length:0,Rt=wt.get(I),Qr=f.state.lights;if(k===!0&&(Q===!0||T!==w)){let Fe=T===w&&I.id===v;S.setState(I,T,Fe)}let ce=!1;I.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Qr.state.version||Rt.outputEncoding!==Tt||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||Rt.envMap!==At||I.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==S.numPlanes||Rt.numIntersection!==S.numIntersection)||Rt.vertexAlphas!==Dt||Rt.vertexTangents!==Ct||Rt.morphTargets!==Pt||Rt.morphNormals!==Qt||Rt.morphColors!==Oe||Rt.toneMapping!==vn||dt.isWebGL2===!0&&Rt.morphTargetsCount!==jt)&&(ce=!0):(ce=!0,Rt.__version=I.version);let ni=Rt.currentProgram;ce===!0&&(ni=qe(I,O,q));let pl=!1,gs=!1,jr=!1,Me=ni.getUniforms(),ii=Rt.uniforms;if(lt.useProgram(ni.program)&&(pl=!0,gs=!0,jr=!0),I.id!==v&&(v=I.id,gs=!0),pl||w!==T){if(Me.setValue(B,"projectionMatrix",T.projectionMatrix),dt.logarithmicDepthBuffer&&Me.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),w!==T&&(w=T,gs=!0,jr=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){let Fe=Me.map.cameraPosition;Fe!==void 0&&Fe.setValue(B,K.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Me.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&Me.setValue(B,"viewMatrix",T.matrixWorldInverse)}if(q.isSkinnedMesh){Me.setOptional(B,q,"bindMatrix"),Me.setOptional(B,q,"bindMatrixInverse");let Fe=q.skeleton;Fe&&(dt.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),Me.setValue(B,"boneTexture",Fe.boneTexture,yt),Me.setValue(B,"boneTextureSize",Fe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let ta=W.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0&&dt.isWebGL2===!0)&&it.update(q,W,I,ni),(gs||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,Me.setValue(B,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(ii.envMap.value=At,ii.flipEnvMap.value=At.isCubeTexture&&At.isRenderTargetTexture===!1?-1:1),gs&&(Me.setValue(B,"toneMappingExposure",u.toneMappingExposure),Rt.needsLights&&tu(ii,jr),mt&&I.fog===!0&&xn.refreshFogUniforms(ii,mt),xn.refreshMaterialUniforms(ii,I,z,P,J),Ki.upload(B,Rt.uniformsList,ii,yt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ki.upload(B,Rt.uniformsList,ii,yt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Me.setValue(B,"center",q.center),Me.setValue(B,"modelViewMatrix",q.modelViewMatrix),Me.setValue(B,"normalMatrix",q.normalMatrix),Me.setValue(B,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){let Fe=I.uniformsGroups;for(let ea=0,nu=Fe.length;ea<nu;ea++)if(dt.isWebGL2){let ml=Fe[ea];gt.update(ml,ni),gt.bind(ml,ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ni}function tu(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function eu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,O,W){wt.get(T.texture).__webglTexture=O,wt.get(T.depthTexture).__webglTexture=W;let I=wt.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){let W=wt.get(T);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,W=0){y=T,_=O,b=W;let I=!0,q=null,mt=!1,bt=!1;if(T){let At=wt.get(T);At.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),I=!1):At.__webglFramebuffer===void 0?yt.setupRenderTarget(T):At.__hasExternalTextures&&yt.rebindTextures(T,wt.get(T.texture).__webglTexture,wt.get(T.depthTexture).__webglTexture);let Dt=T.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(bt=!0);let Ct=wt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(q=Ct[O],mt=!0):dt.isWebGL2&&T.samples>0&&yt.useMultisampledRTT(T)===!1?q=wt.get(T).__webglMultisampledFramebuffer:q=Ct,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(L).multiplyScalar(z).floor(),C.copy(N).multiplyScalar(z).floor(),x=X;if(lt.bindFramebuffer(36160,q)&&dt.drawBuffers&&I&&lt.drawBuffers(T,q),lt.viewport(E),lt.scissor(C),lt.setScissorTest(x),mt){let At=wt.get(T.texture);B.framebufferTexture2D(36160,36064,34069+O,At.__webglTexture,W)}else if(bt){let At=wt.get(T.texture),Dt=O||0;B.framebufferTextureLayer(36160,36064,At.__webglTexture,W||0,Dt)}v=-1},this.readRenderTargetPixels=function(T,O,W,I,q,mt,bt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=wt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&bt!==void 0&&(Tt=Tt[bt]),Tt){lt.bindFramebuffer(36160,Tt);try{let At=T.texture,Dt=At.format,Ct=At.type;if(Dt!==on&&at.convert(Dt)!==B.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pt=Ct===Cs&&(ft.has("EXT_color_buffer_half_float")||dt.isWebGL2&&ft.has("EXT_color_buffer_float"));if(Ct!==di&&at.convert(Ct)!==B.getParameter(35738)&&!(Ct===hi&&(dt.isWebGL2||ft.has("OES_texture_float")||ft.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-I&&W>=0&&W<=T.height-q&&B.readPixels(O,W,I,q,at.convert(Dt),at.convert(Ct),mt)}finally{let At=y!==null?wt.get(y).__webglFramebuffer:null;lt.bindFramebuffer(36160,At)}}},this.copyFramebufferToTexture=function(T,O,W=0){let I=Math.pow(2,-W),q=Math.floor(O.image.width*I),mt=Math.floor(O.image.height*I);yt.setTexture2D(O,0),B.copyTexSubImage2D(3553,W,0,0,T.x,T.y,q,mt),lt.unbindTexture()},this.copyTextureToTexture=function(T,O,W,I=0){let q=O.image.width,mt=O.image.height,bt=at.convert(W.format),Tt=at.convert(W.type);yt.setTexture2D(W,0),B.pixelStorei(37440,W.flipY),B.pixelStorei(37441,W.premultiplyAlpha),B.pixelStorei(3317,W.unpackAlignment),O.isDataTexture?B.texSubImage2D(3553,I,T.x,T.y,q,mt,bt,Tt,O.image.data):O.isCompressedTexture?B.compressedTexSubImage2D(3553,I,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,bt,O.mipmaps[0].data):B.texSubImage2D(3553,I,T.x,T.y,bt,Tt,O.image),I===0&&W.generateMipmaps&&B.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,O,W,I,q=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=T.max.x-T.min.x+1,bt=T.max.y-T.min.y+1,Tt=T.max.z-T.min.z+1,At=at.convert(I.format),Dt=at.convert(I.type),Ct;if(I.isData3DTexture)yt.setTexture3D(I,0),Ct=32879;else if(I.isDataArrayTexture)yt.setTexture2DArray(I,0),Ct=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(37440,I.flipY),B.pixelStorei(37441,I.premultiplyAlpha),B.pixelStorei(3317,I.unpackAlignment);let Pt=B.getParameter(3314),Qt=B.getParameter(32878),Oe=B.getParameter(3316),vn=B.getParameter(3315),ei=B.getParameter(32877),jt=W.isCompressedTexture?W.mipmaps[0]:W.image;B.pixelStorei(3314,jt.width),B.pixelStorei(32878,jt.height),B.pixelStorei(3316,T.min.x),B.pixelStorei(3315,T.min.y),B.pixelStorei(32877,T.min.z),W.isDataTexture||W.isData3DTexture?B.texSubImage3D(Ct,q,O.x,O.y,O.z,mt,bt,Tt,At,Dt,jt.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ct,q,O.x,O.y,O.z,mt,bt,Tt,At,jt.data)):B.texSubImage3D(Ct,q,O.x,O.y,O.z,mt,bt,Tt,At,Dt,jt),B.pixelStorei(3314,Pt),B.pixelStorei(32878,Qt),B.pixelStorei(3316,Oe),B.pixelStorei(3315,vn),B.pixelStorei(32877,ei),q===0&&I.generateMipmaps&&B.generateMipmap(Ct),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?yt.setTextureCube(T,0):T.isData3DTexture?yt.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?yt.setTexture2DArray(T,0):yt.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){_=0,b=0,y=null,lt.reset(),Y.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var io=class extends _o{};io.prototype.isWebGL1Renderer=!0;var Cr=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}};var xi=class extends ue{constructor(t,e,n,i,s,a,r,l,c){super(t,e,n,i,s,a,r,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Ht,this.magFilter=s!==void 0?s:Ht,this.generateMipmaps=!1;let h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};function Bn(o,t,e){return qc(o)?new o.constructor(o.subarray(t,e!==void 0?e:o.length)):o.slice(t,e)}function dr(o,t,e){return!o||!e&&o.constructor===t?o:typeof t.BYTES_PER_ELEMENT=="number"?new t(o):Array.prototype.slice.call(o)}function qc(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}var ss=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let r=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let r=e[1];t<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let r=n+a>>>1;t<e[r]?a=r:n=r+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},so=class extends ss{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xl,endingEnd:Xl}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,r=i[s],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Yl:s=t,r=2*e-n;break;case Zl:s=i.length-2,r=e+i[s]-i[s+1];break;default:s=t,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yl:a=t,l=2*n-e;break;case Zl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),u=g*g,p=u*g,_=-f*p+2*f*u-f*g,b=(1+f)*p+(-1.5-2*f)*u+(-.5+f)*g+1,y=(-1-m)*p+(1.5+m)*u+.5*g,v=m*p-m*u;for(let w=0;w!==r;++w)s[w]=_*a[h+w]+b*a[c+w]+y*a[l+w]+v*a[d+w];return s}},ro=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==r;++f)s[f]=a[c+f]*d+a[l+f]*h;return s}},ao=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=dr(e,this.TimeBufferType),this.values=dr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:dr(t.times,Array),values:dr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new so(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mr:e=this.InterpolantFactoryMethodDiscrete;break;case gr:e=this.InterpolantFactoryMethodLinear;break;case la:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return gr;case this.InterpolantFactoryMethodSmooth:return la}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let r=this.getValueSize();this.times=Bn(n,s,a),this.values=Bn(this.values,s*r,a*r)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==s;r++){let l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(i!==void 0&&qc(i))for(let r=0,l=i.length;r!==l;++r){let c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){let t=Bn(this.times),e=Bn(this.values),n=this.getValueSize(),i=this.getInterpolation()===la,s=t.length-1,a=1;for(let r=1;r<s;++r){let l=!1,c=t[r],h=t[r+1];if(c!==h&&(r!==1||c!==t[0]))if(i)l=!0;else{let d=r*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){let u=e[d+g];if(u!==e[f+g]||u!==e[m+g]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];let d=r*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[d+m]}++a}}if(s>0){t[a]=t[s];for(let r=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=Bn(t,0,a),this.values=Bn(e,0,a*n)):(this.times=t,this.values=e),this}clone(){let t=Bn(this.times,0),e=Bn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=gr;var yi=class extends hn{};yi.prototype.ValueTypeName="bool";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=mr;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends hn{};oo.prototype.ValueTypeName="color";var lo=class extends hn{};lo.prototype.ValueTypeName="number";var co=class extends ss{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-e)/(i-e),c=t*r;for(let h=c+r;c!==h;c+=4)qn.slerpFlat(s,0,a,c-r,a,c,l);return s}},Is=class extends hn{InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.DefaultInterpolation=gr;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends hn{};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=mr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends hn{};ho.prototype.ValueTypeName="vector";var Rc={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}},uo=class{constructor(t,e,n){let i=this,s=!1,a=0,r=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,r),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,r),a===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},Bg=new uo,Pr=class{constructor(t){this.manager=t!==void 0?t:Bg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};var fo=class extends Pr{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,a=Rc.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;let r=Rs("img");function l(){h(),Rc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(t),r.src=t,r}};var Rr=class extends Pr{constructor(t){super(t)}load(t,e,n,i){let s=new ue,a=new fo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}};var xo="\\[\\]\\.:\\/",Vg=new RegExp("["+xo+"]","g"),yo="[^"+xo+"]",Gg="[^"+xo.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",yo),Hg=/(WCOD+)?/.source.replace("WCOD",Gg),qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yo),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yo),Yg=new RegExp("^"+Wg+Hg+qg+Xg+"$"),Zg=["material","materials","bones","map"],po=class{constructor(t,e,n){let i=n||Ot.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ot=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Ot.parseTrackName(e),this.node=Ot.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ot.Composite(t,e,n):new Ot(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vg,"")}static parseTrackName(t){let e=Yg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Zg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let a=0;a<s.length;a++){let r=s[a];if(r.name===e||r.uuid===e)return r;let l=n(r.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Ot.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ot.Composite=po;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var P0=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mo}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mo);function Ln(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function jc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ie={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},Uo,xe,Zt,Ke=1e8,Ut=1/Ke,Eo=Math.PI*2,$g=Eo/4,Kg=0,th=Math.sqrt,Qg=Math.cos,jg=Math.sin,ae=function(t){return typeof t=="string"},Jt=function(t){return typeof t=="function"},In=function(t){return typeof t=="number"},Wr=function(t){return typeof t=="undefined"},mn=function(t){return typeof t=="object"},De=function(t){return t!==!1},ko=function(){return typeof window!="undefined"},Ir=function(t){return Jt(t)||ae(t)},eh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ye=Array.isArray,Co=/(?:-?\.?\d|\.)+/gi,Bo=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ti=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vo=/[+-]=-?[.\d]+/,nh=/[^,'"\[\]\s]+/gi,t_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,$e,Po,Go,Ge={},zr={},ih,sh=function(t){return(zr=Si(t,Ge))&&ve},Hr=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ur=function(t,e){return!e&&console.warn(t)},rh=function(t,e){return t&&(Ge[t]=e)&&zr&&(zr[t]=e)||Ge},Bs=function(){return 0},e_={suppressEvents:!0,isStart:!0,kill:!1},Or={suppressEvents:!0,kill:!1},n_={suppressEvents:!0},Wo={},Yn=[],Ro={},ah,Re={},bo={},Xc=30,Fr=[],Ho="",qo=function(t){var e=t[0],n,i;if(mn(e)||Jt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Fr.length;i--&&!Fr[i].targetTest(e););n=Fr[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zo(t[i],n)))||t.splice(i,1);return t},Zn=function(t){return t._gsap||qo(Qe(t))[0]._gsap},Xo=function(t,e,n){return(n=t[e])&&Jt(n)?t[e]():Wr(n)&&t.getAttribute&&t.getAttribute(e)||n},Ce=function(t,e){return(t=t.split(",")).forEach(e)||t},$t=function(t){return Math.round(t*1e5)/1e5||0},fe=function(t){return Math.round(t*1e7)/1e7||0},Ai=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},i_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},kr=function(){var t=Yn.length,e=Yn.slice(0),n,i;for(Ro={},Yn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},oh=function(t,e,n,i){Yn.length&&!xe&&kr(),t.render(e,n,i||xe&&e<0&&(t._initted||t._startAt)),Yn.length&&!xe&&kr()},lh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(nh).length<2?e:ae(t)?t.trim():t},ch=function(t){return t},tn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},s_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Si=function(t,e){for(var n in e)t[n]=e[n];return t},Yc=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=mn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},Br=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zs=function(t){var e=t.parent||qt,n=t.keyframes?s_(ye(t.keyframes)):tn;if(De(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},r_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hh=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],r;if(s)for(r=e[s];a&&a[s]>r;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},qr=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Jn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},bi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},a_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lo=function(t,e,n,i){return t._startAt&&(xe?t._startAt.revert(Or):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},o_=function o(t){return!t||t._ts&&o(t.parent)},Zc=function(t){return t._repeat?ls(t._tTime,t=t.duration()+t._rDelay)*t:0},ls=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Vr=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Xr=function(t){return t._end=fe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ut)||0))},Yr=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=fe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Xr(t),n._dirty||bi(n,t)),t},uh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Vr(t.rawTime(),e),(!e._dur||Ws(0,e.totalDuration(),n)-e._tTime>Ut)&&e.render(n,!0)),bi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ut}},pn=function(t,e,n,i){return e.parent&&Jn(e),e._start=fe((In(n)?n:n||t!==qt?Je(t,n,e):t._time)+e._delay),e._end=fe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hh(t,e,"_first","_last",t._sort?"_start":0),Do(e)||(t._recent=e),i||uh(t,e),t._ts<0&&Yr(t,t._tTime),t},fh=function(t,e){return(Ge.ScrollTrigger||Hr("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},dh=function(t,e,n,i,s){if(Ko(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!xe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ah!==Le.frame)return Yn.push(t),t._lazy=[s,i],1},l_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Do=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},c_=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&l_(t)&&!(!t._initted&&Do(t))||(t._ts<0||t._dp._ts<0)&&!Do(t))?0:1,r=t._rDelay,l=0,c,h,d;if(r&&t._repeat&&(l=Ws(0,t._tDur,e),h=ls(l,r),t._yoyo&&h&1&&(a=1-a),h!==ls(t._tTime,r)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||xe||i||t._zTime===Ut||!e&&t._zTime){if(!t._initted&&dh(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ut:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Lo(t,e,n,!0),t._onUpdate&&!n&&je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Jn(t,1),!n&&!xe&&(je(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},h_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},cs=function(t,e,n,i){var s=t._repeat,a=fe(e)||0,r=t._tTime/t._tDur;return r&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:fe(a*(s+1)+t._rDelay*s):a,r>0&&!i&&Yr(t,t._tTime=t._tDur*r),t.parent&&Xr(t),n||bi(t.parent,t),t},Jc=function(t){return t instanceof _e?bi(t):cs(t,t._dur)},u_={_start:0,endTime:Bs,totalDuration:Bs},Je=function o(t,e,n){var i=t.labels,s=t._recent||u_,a=t.duration()>=Ke?s.endTime(!1):t._dur,r,l,c;return ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",r=e.indexOf("="),l==="<"||l===">"?(r>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(r<0?s:n).totalDuration()/100:1)):r<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(r-1)+e.substr(r+1)),c&&n&&(l=l/100*(ye(n)?n[0]:n).totalDuration()),r>1?o(t,e.substr(0,r-1),n)+l:a+l)):e==null?a:+e},Us=function(t,e,n){var i=In(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],r,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(r=a,l=n;l&&!("immediateRender"in r);)r=l.vars.defaults||{},l=De(l.vars.inherit)&&l.parent;a.immediateRender=De(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Kt(e[0],a,e[s+1])},$n=function(t,e){return t||t===0?e(t):e},Ws=function(t,e,n){return n<t?t:n>e?e:n},de=function(t,e){return!ae(t)||!(e=t_.exec(t))?"":e[1]},f_=function(t,e,n){return $n(n,function(i){return Ws(t,e,i)})},Io=[].slice,ph=function(t,e){return t&&mn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mn(t[0]))&&!t.nodeType&&t!==$e},d_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return ae(i)&&!e||ph(i,1)?(s=n).push.apply(s,Qe(i)):n.push(i)})||n},Qe=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):ae(t)&&!n&&(Po||!hs())?Io.call((e||Go).querySelectorAll(t),0):ye(t)?d_(t,n):ph(t)?Io.call(t,0):t?[t]:[]},Oo=function(t){return t=Qe(t)[0]||Ur("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Qe(e,n.querySelectorAll?n:n===t?Ur("Invalid scope")||Go.createElement("div"):t)}},mh=function(t){return t.sort(function(){return .5-Math.random()})},gh=function(t){if(Jt(t))return t;var e=mn(t)?t:{each:t},n=Mi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},r=i>0&&i<1,l=isNaN(i)||r,c=e.axis,h=i,d=i;return ae(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!r&&l&&(h=i[0],d=i[1]),function(f,m,g){var u=(g||e).length,p=a[u],_,b,y,v,w,E,C,x,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,Ke])[1],!M){for(C=-Ke;C<(C=g[M++].getBoundingClientRect().left)&&M<u;);M--}for(p=a[u]=[],_=l?Math.min(M,u)*h-.5:i%M,b=M===Ke?0:l?u*d/M-.5:i/M|0,C=0,x=Ke,E=0;E<u;E++)y=E%M-_,v=b-(E/M|0),p[E]=w=c?Math.abs(c==="y"?v:y):th(y*y+v*v),w>C&&(C=w),w<x&&(x=w);i==="random"&&mh(p),p.max=C-x,p.min=x,p.v=u=(parseFloat(e.amount)||parseFloat(e.each)*(M>u?u-1:c?c==="y"?u/M:M:Math.max(M,u/M))||0)*(i==="edges"?-1:1),p.b=u<0?s-u:s,p.u=de(e.amount||e.each)||0,n=n&&u<0?Th(n):n}return u=(p[f]-p.min)/p.max||0,fe(p.b+(n?n(u):u)*p.v)+p.u}},Fo=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=fe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(In(n)?0:de(n))}},_h=function(t,e){var n=ye(t),i,s;return!n&&mn(t)&&(i=n=t.radius||Ke,t.values?(t=Qe(t.values),(s=!In(t[0]))&&(i*=i)):t=Fo(t.increment)),$n(e,n?Jt(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var r=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ke,h=0,d=t.length,f,m;d--;)s?(f=t[d].x-r,m=t[d].y-l,f=f*f+m*m):f=Math.abs(t[d]-r),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:a,s||h===a||In(a)?h:h+de(a)}:Fo(t))},xh=function(t,e,n,i){return $n(ye(t)?!e:n===!0?!!(n=0):!i,function(){return ye(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},p_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},m_=function(t,e){return function(n){return t(parseFloat(n))+(e||de(n))}},g_=function(t,e,n){return vh(t,e,0,1,n)},yh=function(t,e,n){return $n(n,function(i){return t[~~e(i)]})},__=function o(t,e,n){var i=e-t;return ye(t)?yh(t,o(0,t.length),e):$n(n,function(s){return(i+(s-t)%i)%i+t})},x_=function o(t,e,n){var i=e-t,s=i*2;return ye(t)?yh(t,o(0,t.length-1),e):$n(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},us=function(t){for(var e=0,n="",i,s,a,r;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),r=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(r?nh:Co),n+=t.substr(e,i-e)+xh(r?s:+s[0],r?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},vh=function(t,e,n,i,s){var a=e-t,r=i-n;return $n(s,function(l){return n+((l-t)/a*r||0)})},y_=function o(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=ae(t),r={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(ye(t)&&!ye(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(o(t[c-1],t[c]));d--,s=function(g){g*=d;var u=Math.min(f,~~g);return h[u](g-u)},n=e}else i||(t=Si(ye(t)?[]:{},t));if(!h){for(l in e)Jo.call(r,t,l,"get",e[l]);s=function(g){return tl(g,r)||(a?t.p:t)}}}return $n(n,s)},$c=function(t,e,n){var i=t.labels,s=Ke,a,r,l;for(a in i)r=i[a]-e,r<0==!!n&&r&&s>(r=Math.abs(r))&&(l=a,s=r);return l},je=function(t,e,n){var i=t.vars,s=i[e],a=Zt,r=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Yn.length&&kr(),r&&(Zt=r),h=l?s.apply(c,l):s.call(c),Zt=a,h},Fs=function(t){return Jn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!xe),t.progress()<1&&je(t,"onInterrupt"),t},as,bh=[],Mh=function(t){if(ko()&&t){t=!t.name&&t.default||t;var e=t.name,n=Jt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Bs,render:tl,add:Jo,kill:F_,modifier:O_,rawVars:0},a={targetTest:0,get:0,getSetter:Zr,aliases:{},register:0};if(hs(),t!==i){if(Re[e])return;tn(i,tn(Br(t,s),a)),Si(i.prototype,Si(s,Br(t,a))),Re[i.prop=e]=i,t.targetTest&&(Fr.push(i),Wo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rh(e,i),t.register&&t.register(ve,i,Pe)}else t&&bh.push(t)},zt=255,Ns={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},Mo=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*zt+.5|0},wh=function(t,e,n){var i=t?In(t)?[t>>16,t>>8&zt,t&zt]:0:Ns.black,s,a,r,l,c,h,d,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ns[t])i=Ns[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),r=t.charAt(3),t="#"+s+s+a+a+r+r+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&zt,i&zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&zt,t&zt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Co),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,i.length>3&&(i[3]*=1),i[0]=Mo(l+1/3,s,a),i[1]=Mo(l,s,a),i[2]=Mo(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Bo),n&&i.length<4&&(i[3]=1),i}else i=t.match(Co)||Ns.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/zt,a=i[1]/zt,r=i[2]/zt,d=Math.max(s,a,r),f=Math.min(s,a,r),h=(d+f)/2,d===f?l=c=0:(m=d-f,c=h>.5?m/(2-d-f):m/(d+f),l=d===s?(a-r)/m+(a<r?6:0):d===a?(r-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Sh=function(t){var e=[],n=[],i=-1;return t.split(Dn).forEach(function(s){var a=s.match(Ti)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Kc=function(t,e,n){var i="",s=(t+i).match(Dn),a=e?"hsla(":"rgba(",r=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=wh(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Sh(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Dn,"1").split(Ti),d=c.length-1;r<d;r++)i+=c[r]+(~l.indexOf(r)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Dn),d=c.length-1;r<d;r++)i+=c[r]+s[r];return i+c[d]},Dn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ns)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),v_=/hsl[a]?\(/,Yo=function(t){var e=t.join(" "),n;if(Dn.lastIndex=0,Dn.test(e))return n=v_.test(e),t[1]=Kc(t[1],n),t[0]=Kc(t[0],n,Sh(t[1])),!0},Vs,Le=function(){var o=Date.now,t=500,e=33,n=o(),i=n,s=1e3/240,a=s,r=[],l,c,h,d,f,m,g=function u(p){var _=o()-i,b=p===!0,y,v,w,E;if(_>t&&(n+=_-e),i+=_,w=i-n,y=w-a,(y>0||b)&&(E=++d.frame,f=w-d.time*1e3,d.time=w=w/1e3,a+=y+(y>=s?4:s-y),v=1),b||(l=c(u)),v)for(m=0;m<r.length;m++)r[m](w,f,E,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){ih&&(!Po&&ko()&&($e=Po=window,Go=$e.document||{},Ge.gsap=ve,($e.gsapVersions||($e.gsapVersions=[])).push(ve.version),sh(zr||$e.GreenSockGlobals||!$e.gsap&&$e||{}),h=$e.requestAnimationFrame,bh.forEach(Mh)),l&&d.sleep(),c=h||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Vs=1,g(2))},sleep:function(){(h?$e.cancelAnimationFrame:clearTimeout)(l),Vs=0,c=Bs},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,_,b){var y=_?function(v,w,E,C){p(v,w,E,C),d.remove(y)}:p;return d.remove(p),r[b?"unshift":"push"](y),hs(),y},remove:function(p,_){~(_=r.indexOf(p))&&r.splice(_,1)&&m>=_&&m--},_listeners:r},d}(),hs=function(){return!Vs&&Le.wake()},Et={},b_=/^[\d.\-M][\d.\-,\s]/,M_=/["']/g,w_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,r,l,c;s<a;s++)l=n[s],r=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,r),e[i]=isNaN(c)?c.replace(M_,"").trim():+c,i=l.substr(r+1).trim();return e},S_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},T_=function(t){var e=(t+"").split("("),n=Et[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[w_(e[1])]:S_(t).split(",").map(lh)):Et._CE&&b_.test(t)?Et._CE("",t):n},Th=function(t){return function(e){return 1-t(1-e)}},Ah=function o(t,e){for(var n=t._first,i;n;)n instanceof _e?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Mi=function(t,e){return t&&(Jt(t)?t:Et[t]||T_(t))||e},Ei=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ce(t,function(r){Et[r]=Ge[r]=s,Et[a=r.toLowerCase()]=n;for(var l in s)Et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Et[r+"."+l]=s[l]}),s},Eh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wo=function o(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Eo*(Math.asin(1/i)||0),r=function(h){return h===1?1:i*Math.pow(2,-10*h)*jg((h-a)*s)+1},l=t==="out"?r:t==="in"?function(c){return 1-r(1-c)}:Eh(r);return s=Eo/s,l.config=function(c,h){return o(t,c,h)},l},So=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Eh(n);return i.config=function(s){return o(t,s)},i};Ce("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;Ei(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Et.Linear.easeNone=Et.none=Et.Linear.easeIn;Ei("Elastic",wo("in"),wo("out"),wo());(function(o,t){var e=1/t,n=2*e,i=2.5*e,s=function(r){return r<e?o*r*r:r<n?o*Math.pow(r-1.5/t,2)+.75:r<i?o*(r-=2.25/t)*r+.9375:o*Math.pow(r-2.625/t,2)+.984375};Ei("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Ei("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});Ei("Circ",function(o){return-(th(1-o*o)-1)});Ei("Sine",function(o){return o===1?1:-Qg(o*$g)+1});Ei("Back",So("in"),So("out"),So());Et.SteppedEase=Et.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ut;return function(r){return((i*Ws(0,a,r)|0)+s)*n}}};os.ease=Et["quad.out"];Ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return Ho+=o+","+o+"Params,"});var Zo=function(t,e){this.id=Kg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xo,this.set=e?e.getSetter:Zr},Gs=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,cs(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),Vs||Le.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,cs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Yr(this,n),!s._dp||s.parent||uh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&pn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ut||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),oh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ls(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Ut?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Vr(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ut?0:this._rts,this.totalTime(Ws(-Math.abs(this._delay),this._tDur,i),!0),Xr(this),a_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ut&&(this._tTime-=Ut)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&pn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(De(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vr(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=n_);var i=xe;return xe=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),xe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Je(this,n),De(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,De(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ut:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ut,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ut)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=Jt(n)?n:ch,r=function(){var c=i.then;i.then=null,Jt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?r():i._prom=r})},t.kill=function(){Fs(this)},o}();tn(Gs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ut,_prom:0,_ps:!1,_rts:1});var _e=function(o){jc(t,o);function t(n,i){var s;return n===void 0&&(n={}),s=o.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=De(n.sortChildren),qt&&pn(n.parent||qt,Ln(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fh(Ln(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Us(0,arguments,this),this},e.from=function(i,s,a){return Us(1,arguments,this),this},e.fromTo=function(i,s,a,r){return Us(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,zs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,Je(this,a),1),this},e.call=function(i,s,a){return pn(this,Kt.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,r,l,c,h){return a.duration=s,a.stagger=a.stagger||r,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new Kt(i,a,Je(this,l)),this},e.staggerFrom=function(i,s,a,r,l,c,h){return a.runBackwards=1,zs(a).immediateRender=De(a.immediateRender),this.staggerTo(i,s,a,r,l,c,h)},e.staggerFromTo=function(i,s,a,r,l,c,h,d){return r.startAt=a,zs(r).immediateRender=De(r.immediateRender),this.staggerTo(i,s,r,l,c,h,d)},e.render=function(i,s,a){var r=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:fe(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,u,p,_,b,y,v,w,E,C;if(this!==qt&&h>l&&i>=0&&(h=l),h!==this._tTime||a||d){if(r!==this._time&&c&&(h+=this._time-r,i+=this._time-r),f=h,v=this._start,y=this._ts,_=!y,d&&(c||(r=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(f=fe(h%p),h===l?(u=this._repeat,f=c):(u=~~(h/p),u&&u===h/p&&(f=c,u--),f>c&&(f=c)),w=ls(this._tTime,p),!r&&this._tTime&&w!==u&&this._tTime-w*p-this._dur<=0&&(w=u),E&&u&1&&(f=c-f,C=1),u!==w&&!this._lock){var x=E&&w&1,M=x===(E&&u&1);if(u<w&&(x=!x),r=x?0:h%c?c:h,this._lock=1,this.render(r||(C?0:fe(u*p)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&je(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),r&&r!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,r=x?c:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Ah(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=h_(this,fe(r),fe(f)),b&&(h-=f-(f=b._start))),this._tTime=h,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,r=0),!r&&f&&!s&&!u&&(je(this,"onStart"),this._tTime!==h))return this;if(f>=r&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,s,a),f!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=-Ut);break}}m=g}else{m=this._last;for(var P=i<0?i:f;m;){if(g=m._prev,(m._act||P<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(P-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(P-m._start)*m._ts,s,a||xe&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(h+=this._zTime=P?-Ut:Ut);break}}m=g}}if(b&&!s&&(this.pause(),b.render(f>=r?0:-Ut)._zTime=f>=r?1:-1,this._ts))return this._start=v,Xr(this),this.render(i,s,a);this._onUpdate&&!s&&je(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&r)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Jn(this,1),!s&&!(i<0&&!r)&&(h||r||!l)&&(je(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(In(s)||(s=Je(this,s,i)),!(i instanceof Gs)){if(ye(i))return i.forEach(function(r){return a.add(r,s)}),this;if(ae(i))return this.addLabel(i,s);if(Jt(i))i=Kt.delayedCall(0,i);else return this}return this!==i?pn(this,i,s):this},e.getChildren=function(i,s,a,r){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),r===void 0&&(r=-Ke);for(var l=[],c=this._first;c;)c._start>=r&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return ae(i)?this.removeLabel(i):Jt(i)?this.killTweensOf(i):(qr(this,i),i===this._recent&&(this._recent=this._last),bi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fe(Le.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Je(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var r=Kt.delayedCall(0,s||Bs,a);return r.data="isPause",this._hasPause=1,pn(this,r,Je(this,i))},e.removePause=function(i){var s=this._first;for(i=Je(this,i);s;)s._start===i&&s.data==="isPause"&&Jn(s),s=s._next},e.killTweensOf=function(i,s,a){for(var r=this.getTweensOf(i,a),l=r.length;l--;)Xn!==r[l]&&r[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],r=Qe(i),l=this._first,c=In(s),h;l;)l instanceof Kt?i_(l._targets,r)&&(c?(!Xn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(r,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,r=Je(a,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,m,g=Kt.to(a,tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:r,overwrite:"auto",duration:s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ut,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((r-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&cs(g,p,0,1).render(g._time,!0,!0),m=1}h&&h.apply(g,d||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,tn({startAt:{time:Je(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),$c(this,Je(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),$c(this,Je(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ut)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var r=this._first,l=this.labels,c;r;)r._start>=a&&(r._start+=i,r._end+=i),r=r._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return bi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),bi(this)},e.totalDuration=function(i){var s=0,a=this,r=a._last,l=Ke,c,h,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;r;)c=r._prev,r._dirty&&r.totalDuration(),h=r._start,h>l&&a._sort&&r._ts&&!a._lock?(a._lock=1,pn(a,r,h-r._delay,1)._lock=0):l=h,h<0&&r._ts&&(s-=h,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),r._end>s&&r._ts&&(s=r._end),r=c;cs(a,a===qt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(qt._ts&&(oh(qt,Vr(i,qt)),ah=Le.frame),Le.frame>=Xc){Xc+=Ie.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&Ie.autoSleep&&Le._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Le.sleep()}}},t}(Gs);tn(_e.prototype,{_lock:0,_hasPause:0,_forcing:0});var A_=function(t,e,n,i,s,a,r){var l=new Pe(this._pt,t,e,0,1,jo,null,s),c=0,h=0,d,f,m,g,u,p,_,b;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=us(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),f=n.match(vo)||[];d=vo.exec(i);)g=d[0],u=i.substring(c,d.index),m?m=(m+1)%5:u.substr(-5)==="rgba("&&(m=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:u||h===1?u:",",s:p,c:g.charAt(1)==="="?Ai(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=vo.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=r,(Vo.test(i)||_)&&(l.e=0),this._pt=l,l},Jo=function(t,e,n,i,s,a,r,l,c,h){Jt(i)&&(i=i(s||0,t,a));var d=t[e],f=n!=="get"?n:Jt(d)?c?t[e.indexOf("set")||!Jt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,m=Jt(d)?c?L_:Rh:Qo,g;if(ae(i)&&(~i.indexOf("random(")&&(i=us(i)),i.charAt(1)==="="&&(g=Ai(f,i)+(de(f)||0),(g||g===0)&&(i=g))),!h||f!==i||No)return!isNaN(f*i)&&i!==""?(g=new Pe(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?I_:Lh,0,m),c&&(g.fp=c),r&&g.modifier(r,this,t),this._pt=g):(!d&&!(e in t)&&Hr(e,i),A_.call(this,t,e,f,i,m,l||Ie.stringFilter,c))},E_=function(t,e,n,i,s){if(Jt(t)&&(t=ks(t,s,e,n,i)),!mn(t)||t.style&&t.nodeType||ye(t)||eh(t))return ae(t)?ks(t,s,e,n,i):t;var a={},r;for(r in t)a[r]=ks(t[r],s,e,n,i);return a},$o=function(t,e,n,i,s,a){var r,l,c,h;if(Re[t]&&(r=new Re[t]).init(s,r.rawVars?e[t]:E_(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Pe(n._pt,s,t,0,1,r.render,r,0,r.priority),n!==as))for(c=n._ptLookup[n._targets.indexOf(s)],h=r._props.length;h--;)c[r._props[h]]=l;return r},Xn,No,Ko=function o(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,r=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.onUpdateParams,d=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,u=i.autoRevert,p=t._dur,_=t._startAt,b=t._targets,y=t.parent,v=y&&y.data==="nested"?y.vars.targets:b,w=t._overwrite==="auto"&&!Uo,E=t.timeline,C,x,M,P,z,V,D,L,N,X,Z,k,Q;if(E&&(!g||!s)&&(s="none"),t._ease=Mi(s,os.ease),t._yEase=m?Th(Mi(m===!0?s:m,os.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!E&&!!i.runBackwards,!E||g&&!i.stagger){if(L=b[0]?Zn(b[0]).harness:0,k=L&&i[L.prop],C=Br(i,Wo),_&&(_._zTime<0&&_.progress(1),e<0&&f&&r&&!u?_.render(-1,!0):_.revert(f&&p?Or:e_),_._lazy=0),a){if(Jn(t._startAt=Kt.set(b,tn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!_&&De(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:h,callbackScope:d,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(xe||!r&&!u)&&t._startAt.revert(Or),r&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!_){if(e&&(r=!1),M=tn({overwrite:!1,data:"isFromStart",lazy:r&&!_&&De(l),immediateRender:r,stagger:0,parent:y},C),k&&(M[L.prop]=k),Jn(t._startAt=Kt.set(b,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(xe?t._startAt.revert(Or):t._startAt.render(-1,!0)),t._zTime=e,!r)o(t._startAt,Ut,Ut);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&De(l)||l&&!p,x=0;x<b.length;x++){if(z=b[x],D=z._gsap||qo(b)[x]._gsap,t._ptLookup[x]=X={},Ro[D.id]&&Yn.length&&kr(),Z=v===b?x:v.indexOf(z),L&&(N=new L).init(z,k||C,t,Z,v)!==!1&&(t._pt=P=new Pe(t._pt,z,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(J){X[J]=P}),N.priority&&(V=1)),!L||k)for(M in C)Re[M]&&(N=$o(M,C,t,Z,z,v))?N.priority&&(V=1):X[M]=P=Jo.call(t,z,M,"get",C[M],Z,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(z,t._op[x]),w&&t._pt&&(Xn=t,qt.killTweensOf(z,X,t.globalTime(e)),Q=!t.parent,Xn=0),t._pt&&l&&(Ro[D.id]=1)}V&&el(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Q,g&&e<=0&&E.render(Ke,!0,!0)},C_=function(t,e,n,i,s,a,r){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,d,f;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(c=d[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return No=1,t.vars[e]="+=0",Ko(t,r),No=0,1;l.push(c)}for(f=l.length;f--;)h=l[f],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=$t(n)+de(h.e)),h.b&&(h.b=c.s+de(h.b))},P_=function(t,e){var n=t[0]?Zn(t[0]).harness:0,i=n&&n.aliases,s,a,r,l;if(!i)return e;s=Si({},e);for(a in i)if(a in s)for(l=i[a].split(","),r=l.length;r--;)s[l[r]]=s[a];return s},R_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,r;if(ye(e))r=n[t]||(n[t]=[]),e.forEach(function(l,c){return r.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)r=n[a]||(n[a]=[]),a==="ease"||r.push({t:parseFloat(t),v:e[a],e:s})},ks=function(t,e,n,i,s){return Jt(t)?t.call(e,n,i,s):ae(t)&&~t.indexOf("random(")?us(t):t},Ch=Ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ph={};Ce(Ch+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Ph[o]=1});var Kt=function(o){jc(t,o);function t(n,i,s,a){var r;typeof i=="number"&&(s.duration=i,i=s,s=null),r=o.call(this,a?i:zs(i))||this;var l=r.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,u=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,b=i.parent||qt,y=(ye(n)||eh(n)?In(n[0]):"length"in i)?[n]:Qe(n),v,w,E,C,x,M,P,z;if(r._targets=y.length?qo(y):Ur("GSAP target "+n+" not found. https://greensock.com",!Ie.nullTargetWarn)||[],r._ptLookup=[],r._overwrite=m,g||f||Ir(c)||Ir(h)){if(i=r.vars,v=r.timeline=new _e({data:"nested",defaults:u||{},targets:b&&b.data==="nested"?b.vars.targets:y}),v.kill(),v.parent=v._dp=Ln(r),v._start=0,f||Ir(c)||Ir(h)){if(C=y.length,P=f&&gh(f),mn(f))for(x in f)~Ch.indexOf(x)&&(z||(z={}),z[x]=f[x]);for(w=0;w<C;w++)E=Br(i,Ph),E.stagger=0,_&&(E.yoyoEase=_),z&&Si(E,z),M=y[w],E.duration=+ks(c,Ln(r),w,M,y),E.delay=(+ks(h,Ln(r),w,M,y)||0)-r._delay,!f&&C===1&&E.delay&&(r._delay=h=E.delay,r._start+=h,E.delay=0),v.to(M,E,P?P(w,M,y):0),v._ease=Et.none;v.duration()?c=h=0:r.timeline=0}else if(g){zs(tn(v.vars.defaults,{ease:"none"})),v._ease=Mi(g.ease||i.ease||"none");var V=0,D,L,N;if(ye(g))g.forEach(function(X){return v.to(y,X,">")}),v.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||R_(x,g[x],E,g.easeEach);for(x in E)for(D=E[x].sort(function(X,Z){return X.t-Z.t}),V=0,w=0;w<D.length;w++)L=D[w],N={ease:L.e,duration:(L.t-(w?D[w-1].t:0))/100*c},N[x]=L.v,v.to(y,N,V),V+=N.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||r.duration(c=v.duration())}else r.timeline=0;return m===!0&&!Uo&&(Xn=Ln(r),qt.killTweensOf(y),Xn=0),pn(b,Ln(r),s),i.reversed&&r.reverse(),i.paused&&r.paused(!0),(d||!c&&!g&&r._start===fe(b._time)&&De(d)&&o_(Ln(r))&&b.data!=="nested")&&(r._tTime=-Ut,r.render(Math.max(0,-h)||0)),p&&fh(Ln(r),p),r}var e=t.prototype;return e.render=function(i,s,a){var r=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ut&&!h?l:i<Ut?0:i,f,m,g,u,p,_,b,y,v;if(!c)c_(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,y=this.timeline,this._repeat){if(u=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(u*100+i,s,a);if(f=fe(d%u),d===l?(g=this._repeat,f=c):(g=~~(d/u),g&&g===d/u&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(v=this._yEase,f=c-f),p=ls(this._tTime,u),f===r&&!a&&this._initted)return this._tTime=d,this;g!==p&&(y&&this._yEase&&Ah(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(fe(u*g),!0).invalidate()._lock=0))}if(!this._initted){if(dh(this,h?i:f,a,s,d))return this._tTime=0,this;if(r!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!r&&!s&&!g&&(je(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;y&&y.render(i<0?i:!f&&_?-Ut:y._dur*y._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Lo(this,i,s,a),je(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&je(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Lo(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Jn(this,1),!s&&!(h&&!r)&&(d||r||_)&&(je(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,r){Vs||Le.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ko(this,l),c=this._ease(l/this._dur),C_(this,i,s,a,r,c,l)?this.resetTo(i,s,a,r):(Yr(this,0),this.parent||hh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Fs(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xn&&Xn.vars.overwrite!==!0)._first||Fs(this),this.parent&&a!==this.timeline.totalDuration()&&cs(this,this._dur*this.timeline._tDur/a,0,1),this}var r=this._targets,l=i?Qe(i):r,c=this._ptLookup,h=this._pt,d,f,m,g,u,p,_;if((!s||s==="all")&&r_(r,l))return s==="all"&&(this._pt=0),Fs(this);for(d=this._op=this._op||[],s!=="all"&&(ae(s)&&(u={},Ce(s,function(b){return u[b]=1}),s=u),s=P_(r,s)),_=r.length;_--;)if(~l.indexOf(r[_])){f=c[_],s==="all"?(d[_]=s,g=f,m={}):(m=d[_]=d[_]||{},g=s);for(u in g)p=f&&f[u],p&&((!("kill"in p.d)||p.d.kill(u)===!0)&&qr(this,p,"_pt"),delete f[u]),m!=="all"&&(m[u]=1)}return this._initted&&!this._pt&&h&&Fs(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Us(1,arguments)},t.delayedCall=function(i,s,a,r){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:r})},t.fromTo=function(i,s,a){return Us(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return qt.killTweensOf(i,s,a)},t}(Gs);tn(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ce("staggerTo,staggerFrom,staggerFromTo",function(o){Kt[o]=function(){var t=new _e,e=Io.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var Qo=function(t,e,n){return t[e]=n},Rh=function(t,e,n){return t[e](n)},L_=function(t,e,n,i){return t[e](i.fp,n)},D_=function(t,e,n){return t.setAttribute(e,n)},Zr=function(t,e){return Jt(t[e])?Rh:Wr(t[e])&&t.setAttribute?D_:Qo},Lh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},I_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jo=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},tl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},O_=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},F_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?qr(this,e,"_pt"):e.dep||(n=1),e=i;return!n},N_=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},el=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Pe=function(){function o(e,n,i,s,a,r,l,c,h){this.t=n,this.s=s,this.c=a,this.p=i,this.r=r||Lh,this.d=l||this,this.set=c||Qo,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=N_,this.m=n,this.mt=s,this.tween=i},o}();Ce(Ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return Wo[o]=1});Ge.TweenMax=Ge.TweenLite=Kt;Ge.TimelineLite=Ge.TimelineMax=_e;qt=new _e({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ie.stringFilter=Yo;var wi=[],Nr={},z_=[],Qc=0,U_=0,To=function(t){return(Nr[t]||z_).map(function(e){return e()})},zo=function(){var t=Date.now(),e=[];t-Qc>2&&(To("matchMediaInit"),wi.forEach(function(n){var i=n.queries,s=n.conditions,a,r,l,c;for(r in i)a=$e.matchMedia(i[r]).matches,a&&(l=1),a!==s[r]&&(s[r]=a,c=1);c&&(n.revert(),l&&e.push(n))}),To("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Qc=t,To("matchMedia"))},Dh=function(){function o(e,n){this.selector=n&&Oo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=U_++,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,s){Jt(n)&&(s=i,i=n,n=Jt);var a=this,r=function(){var c=Zt,h=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Oo(s)),Zt=a,d=i.apply(a,arguments),Jt(d)&&a._r.push(d),Zt=c,a.selector=h,a.isReverted=!1,d};return a.last=r,n===Jt?r(a):n?a[n]=r:r},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Kt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var r=wi.length;r--;)wi[r].id===this.id&&wi.splice(r,1)},t.revert=function(n){this.kill(n||{})},o}(),k_=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,s){mn(n)||(n={matches:n});var a=new Dh(0,s||this.scope),r=a.conditions={},l,c,h;Zt&&!a.selector&&(a.selector=Zt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=$e.matchMedia(n[c]),l&&(wi.indexOf(a)<0&&wi.push(a),(r[c]=l.matches)&&(h=1),l.addListener?l.addListener(zo):l.addEventListener("change",zo)));return h&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Gr={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Mh(i)})},timeline:function(t){return new _e(t)},getTweensOf:function(t,e){return qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ae(t)&&(t=Qe(t)[0]);var s=Zn(t||{}).get,a=n?ch:lh;return n==="native"&&(n=""),t&&(e?a((Re[e]&&Re[e].get||s)(t,e,n,i)):function(r,l,c){return a((Re[r]&&Re[r].get||s)(t,r,l,c))})},quickSetter:function(t,e,n){if(t=Qe(t),t.length>1){var i=t.map(function(h){return ve.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var a=Re[e],r=Zn(t),l=r.harness&&(r.harness.aliases||{})[e]||e,c=a?function(h){var d=new a;as._pt=0,d.init(t,n?h+n:h,as,0,[t]),d.render(1,d),as._pt&&tl(1,as)}:r.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,r,1)}},quickTo:function(t,e,n){var i,s=ve.to(t,Si((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Mi(t.ease,os.ease)),Yc(os,t||{})},config:function(t){return Yc(Ie,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(r){return r&&!Re[r]&&!Ge[r]&&Ur(e+" effect requires "+r+" plugin.")}),bo[e]=function(r,l,c){return n(Qe(r),tn(l||{},s),c)},a&&(_e.prototype[e]=function(r,l,c){return this.add(bo[e](r,mn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Et[t]=Mi(e)},parseEase:function(t,e){return arguments.length?Mi(t,e):Et},getById:function(t){return qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _e(t),i,s;for(n.smoothChildTiming=De(t.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,i=qt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&pn(n,i,i._start-i._delay),i=s;return pn(qt,n,0),n},context:function(t,e){return t?new Dh(t,e):Zt},matchMedia:function(t){return new k_(t)},matchMediaRefresh:function(){return wi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||zo()},addEventListener:function(t,e){var n=Nr[t]||(Nr[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Nr[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:__,wrapYoyo:x_,distribute:gh,random:xh,snap:_h,normalize:g_,getUnit:de,clamp:f_,splitColor:wh,toArray:Qe,selector:Oo,mapRange:vh,pipe:p_,unitize:m_,interpolate:y_,shuffle:mh},install:sh,effects:bo,ticker:Le,updateRoot:_e.updateRoot,plugins:Re,globalTimeline:qt,core:{PropTween:Pe,globals:rh,Tween:Kt,Timeline:_e,Animation:Gs,getCache:Zn,_removeLinkedListItem:qr,reverting:function(){return xe},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return Uo=t}}};Ce("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Gr[o]=Kt[o]});Le.add(_e.updateRoot);as=Gr.to({},{duration:0});var B_=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},V_=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=B_(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Ao=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(r){var l,c;if(ae(s)&&(l={},Ce(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}V_(r,s)}}}},ve=Gr.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,r,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",r=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),r.op=a,r.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)xe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ao("roundProps",Fo),Ao("modifiers"),Ao("snap",_h))||Gr;Kt.version=_e.version=ve.version="3.12.2";ih=1;ko()&&hs();var G_=Et.Power0,W_=Et.Power1,H_=Et.Power2,q_=Et.Power3,X_=Et.Power4,Y_=Et.Linear,Z_=Et.Quad,J_=Et.Cubic,$_=Et.Quart,K_=Et.Quint,Q_=Et.Strong,j_=Et.Elastic,t0=Et.Back,e0=Et.SteppedEase,n0=Et.Bounce,i0=Et.Sine,s0=Et.Expo,r0=Et.Circ;var Ih,Kn,ds,ll,Li,a0,Oh,cl,o0=function(){return typeof window!="undefined"},Fn={},Ri=180/Math.PI,ps=Math.PI/180,fs=Math.atan2,Fh=1e8,hl=/([A-Z])/g,l0=/(left|right|width|margin|padding|x)/i,c0=/[\s,\(]\S/,gn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},h0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},u0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},f0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Gh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Wh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},d0=function(t,e,n){return t.style[e]=n},p0=function(t,e,n){return t.style.setProperty(e,n)},m0=function(t,e,n){return t._gsap[e]=n},g0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},_0=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},x0=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Xt="transform",un=Xt+"Origin",y0=function o(t,e){var n=this,i=this.target,s=i.style;if(t in Fn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=gn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=On(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:On(i,t);else return gn.transform.split(",").forEach(function(a){return o.call(n,a,e)});if(this.props.indexOf(Xt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(un,e,"")),t=Xt}(s||e)&&this.props.push(t,e,s[t])},Hh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},v0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(hl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=cl(),(!s||!s.isStart)&&!n[Xt]&&(Hh(n),i.uncache=1)}},qh=function(t,e){var n={target:t,props:[],revert:v0,save:y0};return t._gsap||ve.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Xh,rl=function(t,e){var n=Kn.createElementNS?Kn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Kn.createElement(t);return n.style?n:Kn.createElement(t)},_n=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,ms(e)||e,1)||""},Nh="O,Moz,ms,Ms,Webkit".split(","),ms=function(t,e,n){var i=e||Li,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Nh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?Nh[a]:"")+t},al=function(){o0()&&window.document&&(Ih=window,Kn=Ih.document,ds=Kn.documentElement,Li=rl("div")||{style:{}},a0=rl("div"),Xt=ms(Xt),un=Xt+"Origin",Li.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xh=!!ms("perspective"),cl=ve.core.reverting,ll=1)},nl=function o(t){var e=rl("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ds.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ds.removeChild(e),this.style.cssText=s,a},zh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Yh=function(t){var e;try{e=t.getBBox()}catch{e=nl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===nl||(e=nl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+zh(t,["x","cx","x1"])||0,y:+zh(t,["y","cy","y1"])||0,width:0,height:0}:e},Zh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Yh(t))},qs=function(t,e){if(e){var n=t.style;e in Fn&&e!==un&&(e=Xt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(hl,"-$1").toLowerCase())):n.removeAttribute(e)}},Qn=function(t,e,n,i,s,a){var r=new Pe(t._pt,e,n,0,1,a?Wh:Gh);return t._pt=r,r.b=i,r.e=s,t._props.push(n),r},Uh={deg:1,rad:1,turn:1},b0={grid:1,flex:1},jn=function o(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",r=Li.style,l=l0.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",m=i==="%",g,u,p,_;return i===a||!s||Uh[i]||Uh[a]?s:(a!=="px"&&!f&&(s=o(t,e,n,"px")),_=t.getCTM&&Zh(t),(m||a==="%")&&(Fn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],$t(m?s/g*d:s/100*g)):(r[l?"width":"height"]=d+(f?a:i),u=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(u=(t.ownerSVGElement||{}).parentNode),(!u||u===Kn||!u.appendChild)&&(u=Kn.body),p=u._gsap,p&&m&&p.width&&l&&p.time===Le.time&&!p.uncache?$t(s/p.width*d):((m||a==="%")&&!b0[_n(u,"display")]&&(r.position=_n(t,"position")),u===t&&(r.position="static"),u.appendChild(Li),g=Li[h],u.removeChild(Li),r.position="absolute",l&&m&&(p=Zn(u),p.time=Le.time,p.width=u[h]),$t(f?g*s/d:g&&s?d/g*s:0))))},On=function(t,e,n,i){var s;return ll||al(),e in gn&&e!=="transform"&&(e=gn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fn[e]&&e!=="transform"?(s=Ys(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:$r(_n(t,un))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jr[e]&&Jr[e](t,e,n)||_n(t,e)||Xo(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jn(t,e,s,n)+n:s},M0=function(t,e,n,i){if(!n||n==="none"){var s=ms(e,t,1),a=s&&_n(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=_n(t,"borderTopColor"))}var r=new Pe(this._pt,t.style,e,0,1,jo),l=0,c=0,h,d,f,m,g,u,p,_,b,y,v,w;if(r.b=n,r.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=_n(t,e)||i,t.style[e]=n),h=[n,i],Yo(h),n=h[0],i=h[1],f=n.match(Ti)||[],w=i.match(Ti)||[],w.length){for(;d=Ti.exec(i);)p=d[0],b=i.substring(l,d.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),p!==(u=f[c++]||"")&&(m=parseFloat(u)||0,v=u.substr((m+"").length),p.charAt(1)==="="&&(p=Ai(m,p)+v),_=parseFloat(p),y=p.substr((_+"").length),l=Ti.lastIndex-y.length,y||(y=y||Ie.units[e]||v,l===i.length&&(i+=y,r.e+=y)),v!==y&&(m=jn(t,e,u,y)||0),r._pt={_next:r._pt,p:b||c===1?b:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});r.c=l<i.length?i.substring(l,i.length):""}else r.r=e==="display"&&i==="none"?Wh:Gh;return Vo.test(i)&&(r.e=0),this._pt=r,r},kh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},w0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=kh[n]||n,e[1]=kh[i]||i,e.join(" ")},S0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,r,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)r=s[c],Fn[r]&&(l=1,r=r==="transformOrigin"?un:Xt),qs(n,r);l&&(qs(n,Xt),a&&(a.svg&&n.removeAttribute("transform"),Ys(n,1),a.uncache=1,Hh(i)))}},Jr={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Pe(t._pt,e,n,0,0,S0);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},Xs=[1,0,0,1,0,0],Jh={},$h=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bh=function(t){var e=_n(t,Xt);return $h(e)?Xs:e.substr(7).match(Bo).map($t)},ul=function(t,e){var n=t._gsap||Zn(t),i=t.style,s=Bh(t),a,r,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Xs:s):(s===Xs&&!t.offsetParent&&t!==ds&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,r=t.nextElementSibling,ds.appendChild(t)),s=Bh(t),l?i.display=l:qs(t,"display"),c&&(r?a.insertBefore(t,r):a?a.appendChild(t):ds.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ol=function(t,e,n,i,s,a){var r=t._gsap,l=s||ul(t,!0),c=r.xOrigin||0,h=r.yOrigin||0,d=r.xOffset||0,f=r.yOffset||0,m=l[0],g=l[1],u=l[2],p=l[3],_=l[4],b=l[5],y=e.split(" "),v=parseFloat(y[0])||0,w=parseFloat(y[1])||0,E,C,x,M;n?l!==Xs&&(C=m*p-g*u)&&(x=v*(p/C)+w*(-u/C)+(u*b-p*_)/C,M=v*(-g/C)+w*(m/C)-(m*b-g*_)/C,v=x,w=M):(E=Yh(t),v=E.x+(~y[0].indexOf("%")?v/100*E.width:v),w=E.y+(~(y[1]||y[0]).indexOf("%")?w/100*E.height:w)),i||i!==!1&&r.smooth?(_=v-c,b=w-h,r.xOffset=d+(_*m+b*u)-_,r.yOffset=f+(_*g+b*p)-b):r.xOffset=r.yOffset=0,r.xOrigin=v,r.yOrigin=w,r.smooth=!!i,r.origin=e,r.originIsAbsolute=!!n,t.style[un]="0px 0px",a&&(Qn(a,r,"xOrigin",c,v),Qn(a,r,"yOrigin",h,w),Qn(a,r,"xOffset",d,r.xOffset),Qn(a,r,"yOffset",f,r.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},Ys=function(t,e){var n=t._gsap||new Zo(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",r="deg",l=getComputedStyle(t),c=_n(t,un)||"0",h,d,f,m,g,u,p,_,b,y,v,w,E,C,x,M,P,z,V,D,L,N,X,Z,k,Q,J,ct,F,K,et,nt;return h=d=f=u=p=_=b=y=v=0,m=g=1,n.svg=!!(t.getCTM&&Zh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xt]!=="none"?l[Xt]:"")),i.scale=i.rotate=i.translate="none"),C=ul(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),ol(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,C)),w=n.xOrigin||0,E=n.yOrigin||0,C!==Xs&&(z=C[0],V=C[1],D=C[2],L=C[3],h=N=C[4],d=X=C[5],C.length===6?(m=Math.sqrt(z*z+V*V),g=Math.sqrt(L*L+D*D),u=z||V?fs(V,z)*Ri:0,b=D||L?fs(D,L)*Ri+u:0,b&&(g*=Math.abs(Math.cos(b*ps))),n.svg&&(h-=w-(w*z+E*D),d-=E-(w*V+E*L))):(nt=C[6],K=C[7],J=C[8],ct=C[9],F=C[10],et=C[11],h=C[12],d=C[13],f=C[14],x=fs(nt,F),p=x*Ri,x&&(M=Math.cos(-x),P=Math.sin(-x),Z=N*M+J*P,k=X*M+ct*P,Q=nt*M+F*P,J=N*-P+J*M,ct=X*-P+ct*M,F=nt*-P+F*M,et=K*-P+et*M,N=Z,X=k,nt=Q),x=fs(-D,F),_=x*Ri,x&&(M=Math.cos(-x),P=Math.sin(-x),Z=z*M-J*P,k=V*M-ct*P,Q=D*M-F*P,et=L*P+et*M,z=Z,V=k,D=Q),x=fs(V,z),u=x*Ri,x&&(M=Math.cos(x),P=Math.sin(x),Z=z*M+V*P,k=N*M+X*P,V=V*M-z*P,X=X*M-N*P,z=Z,N=k),p&&Math.abs(p)+Math.abs(u)>359.9&&(p=u=0,_=180-_),m=$t(Math.sqrt(z*z+V*V+D*D)),g=$t(Math.sqrt(X*X+nt*nt)),x=fs(N,X),b=Math.abs(x)>2e-4?x*Ri:0,v=et?1/(et<0?-et:et):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$h(_n(t,Xt)),Z&&t.setAttribute("transform",Z))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(m*=-1,b+=u<=0?180:-180,u+=u<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=$t(m),n.scaleY=$t(g),n.rotation=$t(u)+r,n.rotationX=$t(p)+r,n.rotationY=$t(_)+r,n.skewX=b+r,n.skewY=y+r,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[un]=$r(c)),n.xOffset=n.yOffset=0,n.force3D=Ie.force3D,n.renderTransform=n.svg?A0:Xh?Kh:T0,n.uncache=0,n},$r=function(t){return(t=t.split(" "))[0]+" "+t[1]},il=function(t,e,n){var i=de(e);return $t(parseFloat(e)+parseFloat(jn(t,"x",n+"px",i)))+i},T0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Kh(t,e)},Ci="0deg",Hs="0px",Pi=") ",Kh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,r=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,u=n.scaleY,p=n.transformPerspective,_=n.force3D,b=n.target,y=n.zOrigin,v="",w=_==="auto"&&t&&t!==1||_===!0;if(y&&(d!==Ci||h!==Ci)){var E=parseFloat(h)*ps,C=Math.sin(E),x=Math.cos(E),M;E=parseFloat(d)*ps,M=Math.cos(E),a=il(b,a,C*M*-y),r=il(b,r,-Math.sin(E)*-y),l=il(b,l,x*M*-y+y)}p!==Hs&&(v+="perspective("+p+Pi),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(w||a!==Hs||r!==Hs||l!==Hs)&&(v+=l!==Hs||w?"translate3d("+a+", "+r+", "+l+") ":"translate("+a+", "+r+Pi),c!==Ci&&(v+="rotate("+c+Pi),h!==Ci&&(v+="rotateY("+h+Pi),d!==Ci&&(v+="rotateX("+d+Pi),(f!==Ci||m!==Ci)&&(v+="skew("+f+", "+m+Pi),(g!==1||u!==1)&&(v+="scale("+g+", "+u+Pi),b.style[Xt]=v||"translate(0, 0)"},A0=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,r=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,u=n.yOrigin,p=n.xOffset,_=n.yOffset,b=n.forceCSS,y=parseFloat(a),v=parseFloat(r),w,E,C,x,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ps,c*=ps,w=Math.cos(l)*d,E=Math.sin(l)*d,C=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(h*=ps,M=Math.tan(c-h),M=Math.sqrt(1+M*M),C*=M,x*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),w*=M,E*=M)),w=$t(w),E=$t(E),C=$t(C),x=$t(x)):(w=d,x=f,E=C=0),(y&&!~(a+"").indexOf("px")||v&&!~(r+"").indexOf("px"))&&(y=jn(m,"x",a,"px"),v=jn(m,"y",r,"px")),(g||u||p||_)&&(y=$t(y+g-(g*w+u*C)+p),v=$t(v+u-(g*E+u*x)+_)),(i||s)&&(M=m.getBBox(),y=$t(y+i/100*M.width),v=$t(v+s/100*M.height)),M="matrix("+w+","+E+","+C+","+x+","+y+","+v+")",m.setAttribute("transform",M),b&&(m.style[Xt]=M)},E0=function(t,e,n,i,s){var a=360,r=ae(s),l=parseFloat(s)*(r&&~s.indexOf("rad")?Ri:1),c=l-i,h=i+c+"deg",d,f;return r&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Fh)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Fh)%a-~~(c/a)*a)),t._pt=f=new Pe(t._pt,e,n,i,c,h0),f.e=h,f.u="deg",t._props.push(n),f},Vh=function(t,e){for(var n in e)t[n]=e[n];return t},C0=function(t,e,n){var i=Vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,r,l,c,h,d,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Xt]=e,r=Ys(n,1),qs(n,Xt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xt],a[Xt]=e,r=Ys(n,1),a[Xt]=c);for(l in Fn)c=i[l],h=r[l],c!==h&&s.indexOf(l)<0&&(m=de(c),g=de(h),d=m!==g?jn(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Pe(t._pt,r,l,d,f-d,sl),t._pt.u=g||0,t._props.push(l));Vh(r,i)};Ce("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(r){return t<2?o+r:"border"+r+o});Jr[t>1?"border"+o:o]=function(r,l,c,h,d){var f,m;if(arguments.length<4)return f=a.map(function(g){return On(r,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(h+"").split(" "),m={},a.forEach(function(g,u){return m[g]=f[u]=f[u]||f[(u-1)/2|0]}),r.init(l,m,d)}});var fl={name:"css",register:al,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,r=t.style,l=n.vars.startAt,c,h,d,f,m,g,u,p,_,b,y,v,w,E,C,x;ll||al(),this.styles=this.styles||qh(t),x=this.styles.props,this.tween=n;for(u in e)if(u!=="autoRound"&&(h=e[u],!(Re[u]&&$o(u,e,n,i,t,s)))){if(m=typeof h,g=Jr[u],m==="function"&&(h=h.call(n,i,t,s),m=typeof h),m==="string"&&~h.indexOf("random(")&&(h=us(h)),g)g(this,t,u,h,n)&&(C=1);else if(u.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(u)+"").trim(),h+="",Dn.lastIndex=0,Dn.test(c)||(p=de(c),_=de(h)),_?p!==_&&(c=jn(t,u,c,_)+_):p&&(h+=p),this.add(r,"setProperty",c,h,i,s,0,0,u),a.push(u),x.push(u,0,r[u]);else if(m!=="undefined"){if(l&&u in l?(c=typeof l[u]=="function"?l[u].call(n,i,t,s):l[u],ae(c)&&~c.indexOf("random(")&&(c=us(c)),de(c+"")||(c+=Ie.units[u]||de(On(t,u))||""),(c+"").charAt(1)==="="&&(c=On(t,u))):c=On(t,u),f=parseFloat(c),b=m==="string"&&h.charAt(1)==="="&&h.substr(0,2),b&&(h=h.substr(2)),d=parseFloat(h),u in gn&&(u==="autoAlpha"&&(f===1&&On(t,"visibility")==="hidden"&&d&&(f=0),x.push("visibility",0,r.visibility),Qn(this,r,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),u!=="scale"&&u!=="transform"&&(u=gn[u],~u.indexOf(",")&&(u=u.split(",")[0]))),y=u in Fn,y){if(this.styles.save(u),v||(w=t._gsap,w.renderTransform&&!e.parseTransform||Ys(t,e.parseTransform),E=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new Pe(this._pt,r,Xt,0,1,w.renderTransform,w,0,-1),v.dep=1),u==="scale")this._pt=new Pe(this._pt,w,"scaleY",w.scaleY,(b?Ai(w.scaleY,b+d):d)-w.scaleY||0,sl),this._pt.u=0,a.push("scaleY",u),u+="X";else if(u==="transformOrigin"){x.push(un,0,r[un]),h=w0(h),w.svg?ol(t,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==w.zOrigin&&Qn(this,w,"zOrigin",w.zOrigin,_),Qn(this,r,u,$r(c),$r(h)));continue}else if(u==="svgOrigin"){ol(t,h,1,E,0,this);continue}else if(u in Jh){E0(this,w,u,f,b?Ai(f,b+h):h);continue}else if(u==="smoothOrigin"){Qn(this,w,"smooth",w.smooth,h);continue}else if(u==="force3D"){w[u]=h;continue}else if(u==="transform"){C0(this,h,t);continue}}else u in r||(u=ms(u)||u);if(y||(d||d===0)&&(f||f===0)&&!c0.test(h)&&u in r)p=(c+"").substr((f+"").length),d||(d=0),_=de(h)||(u in Ie.units?Ie.units[u]:p),p!==_&&(f=jn(t,u,c,_)),this._pt=new Pe(this._pt,y?w:r,u,f,(b?Ai(f,b+d):d)-f,!y&&(_==="px"||u==="zIndex")&&e.autoRound!==!1?f0:sl),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=u0);else if(u in r)M0.call(this,t,u,c,b?b+h:h);else if(u in t)this.add(t,u,c||t[u],b?b+h:h,i,s);else if(u!=="parseTransform"){Hr(u,h);continue}y||(u in r?x.push(u,0,r[u]):x.push(u,1,c||t[u])),a.push(u)}}C&&el(this)},render:function(t,e){if(e.tween._time||!cl())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:On,aliases:gn,getSetter:function(t,e,n){var i=gn[e];return i&&i.indexOf(",")<0&&(e=i),e in Fn&&e!==un&&(t._gsap.x||On(t,"x"))?n&&Oh===n?e==="scale"?g0:m0:(Oh=n||{})&&(e==="scale"?_0:x0):t.style&&!Wr(t.style[e])?d0:~e.indexOf("-")?p0:Zr(t,e)},core:{_removeProperty:qs,_getMatrix:ul}};ve.utils.checkPrefix=ms;ve.core.getStyleSaver=qh;(function(o,t,e,n){var i=Ce(o+","+t+","+e,function(s){Fn[s]=1});Ce(t,function(s){Ie.units[s]="deg",Jh[s]=1}),gn[i[13]]=o+","+t,Ce(n,function(s){var a=s.split(":");gn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ie.units[o]="px"});ve.registerPlugin(fl);var Kr=ve.registerPlugin(fl)||ve,z0=Kr.core.Tween;function Qh(o){function t(){for(var k=0;k<arguments.length;k++)if(arguments[k]!==void 0)return arguments[k]}console.log("%c Hover effect by Robin Delaporte: https://github.com/robin-dela/hover-effect ","color: #bada55; font-size: 0.8rem");var e=o.parent,n=o.displacementImage,i=o.image1,s=o.image2,a=t(o.imagesRatio,1),r=t(o.intensity1,o.intensity,1),l=t(o.intensity2,o.intensity,1),c=t(o.angle,Math.PI/4),h=t(o.angle1,c),d=t(o.angle2,3*-c),f=t(o.speedIn,o.speed,1.6),m=t(o.speedOut,o.speed,1.2),g=t(o.hover,!0),u=t(o.easing,"expo.out"),p=t(o.video,!1);if(e)if(i&&s&&n){var _=new Cr,b=new Ds(e.offsetWidth/-2,e.offsetWidth/2,e.offsetHeight/2,e.offsetHeight/-2,1,1e3);b.position.z=1;var y=new _o({antialias:!1,alpha:!0});y.setPixelRatio(2),y.setClearColor(16777215,0),y.setSize(e.offsetWidth,e.offsetHeight),e.appendChild(y.domElement);var v=function(){y.render(_,b)},w=new Rr;w.crossOrigin="";var E,C,x=w.load(n,v);if(x.magFilter=x.minFilter=Ht,p){(function k(){requestAnimationFrame(k),y.render(_,b)})(),(p=document.createElement("video")).autoplay=!0,p.loop=!0,p.muted=!0,p.src=i,p.load();var M=document.createElement("video");M.autoplay=!0,M.loop=!0,M.muted=!0,M.src=s,M.load();var P=new xi(p),z=new xi(M);P.magFilter=z.magFilter=Ht,P.minFilter=z.minFilter=Ht,M.addEventListener("loadeddata",function(){M.play(),(z=new xi(M)).magFilter=Ht,z.minFilter=Ht,D.uniforms.texture2.value=z},!1),p.addEventListener("loadeddata",function(){p.play(),(P=new xi(p)).magFilter=Ht,P.minFilter=Ht,D.uniforms.texture1.value=P},!1)}else P=w.load(i,v),z=w.load(s,v),P.magFilter=z.magFilter=Ht,P.minFilter=z.minFilter=Ht;var V=a;e.offsetHeight/e.offsetWidth<V?(E=1,C=e.offsetHeight/e.offsetWidth/V):(E=e.offsetWidth/e.offsetHeight*V,C=1);var D=new cn({uniforms:{intensity1:{type:"f",value:r},intensity2:{type:"f",value:l},dispFactor:{type:"f",value:0},angle1:{type:"f",value:h},angle2:{type:"f",value:d},texture1:{type:"t",value:P},texture2:{type:"t",value:z},disp:{type:"t",value:x},res:{type:"vec4",value:new Yt(e.offsetWidth,e.offsetHeight,E,C)},dpr:{type:"f",value:window.devicePixelRatio}},vertexShader:`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,fragmentShader:`
varying vec2 vUv;

uniform float dispFactor;
uniform float dpr;
uniform sampler2D disp;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float angle1;
uniform float angle2;
uniform float intensity1;
uniform float intensity2;
uniform vec4 res;
uniform vec2 parent;

mat2 getRotM(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat2(c, -s, s, c);
}

void main() {
  vec4 disp = texture2D(disp, vUv);
  vec2 dispVec = vec2(disp.r, disp.g);

  vec2 uv = 0.5 * gl_FragCoord.xy / (res.xy) ;
  vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);


  vec2 distortedPosition1 = myUV + getRotM(angle1) * dispVec * intensity1 * dispFactor;
  vec2 distortedPosition2 = myUV + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);
  vec4 _texture1 = texture2D(texture1, distortedPosition1);
  vec4 _texture2 = texture2D(texture2, distortedPosition2);
  gl_FragColor = mix(_texture1, _texture2, dispFactor);
}
`,transparent:!0,opacity:1}),L=new _i(e.offsetWidth,e.offsetHeight,1),N=new Ye(L,D);_.add(N),g&&(e.addEventListener("mouseenter",X),e.addEventListener("touchstart",X),e.addEventListener("mouseleave",Z),e.addEventListener("touchend",Z)),window.addEventListener("resize",function(k){e.offsetHeight/e.offsetWidth<V?(E=1,C=e.offsetHeight/e.offsetWidth/V):(E=e.offsetWidth/e.offsetHeight*V,C=1),N.material.uniforms.res.value=new Yt(e.offsetWidth,e.offsetHeight,E,C),y.setSize(e.offsetWidth,e.offsetHeight),v()}),this.next=X,this.previous=Z}else console.warn("One or more images are missing");else console.warn("Parent missing");function X(){Kr.to(D.uniforms.dispFactor,{duration:f,value:1,ease:u,onUpdate:v,onComplete:v})}function Z(){Kr.to(D.uniforms.dispFactor,{duration:m,value:0,ease:u,onUpdate:v,onComplete:v})}}window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{let o=".blog_content-wrapper";$(o).each(function(){$(this).on("mouseover",()=>{$(this).find(".blog-slide-bg").addClass("is-active"),$(this).find(".blog-content-item").addClass("is-active"),$(this).find(".blog-item_marquee-panel").addClass("is-active")}),$(this).on("mouseout",()=>{$(this).find(".blog-slide-bg").removeClass("is-active"),$(this).find(".blog-content-item").removeClass("is-active"),$(this).find(".blog-item_marquee-panel").removeClass("is-active")})}),$(o).on("mouseover",function(){Number($(this).find(".blog-title").first().width())>Number($(".blog-content-item").width())&&($(".blog-item_marquee-panel.is-active").find(".blog-title").removeClass("hide"),$(".blog-item_marquee-panel.is-active").css({animation:"marquee 90s linear infinite"}))}),$(o).on("mouseout",function(){$(".blog-item_marquee-panel").css("-webkit-animation","none"),$(".blog-item_marquee-panel").css("-moz-animation","none"),$(".blog-item_marquee-panel").css("-ms-animation","none"),$(".blog-item_marquee-panel").css("animation","none")}),$(o).each(t=>{$("canvas").css({width:"34%"}),new Qh({parent:$(".blog_content-wrapper")[t],intensity:.3,imagesRatio:3/16,image1:$(".blog-visual-image")[t].getAttribute("src"),image2:$(".blog-visual-image")[t].getAttribute("src"),displacementImage:"https://uploads-ssl.webflow.com/649bee0121de1f16fd80cd85/64be8bea7919991859374824_displacement-mask.png"})})});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.2
   * https://greensock.com
   *
   * @license Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.2
   * https://greensock.com
   *
   * Copyright 2008-2023, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
