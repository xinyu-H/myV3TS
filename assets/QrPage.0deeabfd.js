import{d as b,r as y,s as O,v as L,p as Z,o as j,c as q,g as tt,x as et,y as rt,b as S,l as nt}from"./index.f3978db3.js";import{_ as at}from"./houcdc0426.js";/*!
 * qrcode.vue v3.3.4
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var k=function(){return k=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},k.apply(this,arguments)},H={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},ut=H;function Q(t){this.mode=ut.MODE_8BIT_BYTE,this.data=t}Q.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var it=Q,F={L:1,M:0,Q:3,H:2},M=F;function E(t,e){this.totalCount=t,this.dataCount=e}E.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];E.getRSBlocks=function(t,e){var n=E.getRsBlockTable(t,e);if(n==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,a=new Array,u=0;u<r;u++)for(var o=n[u*3+0],i=n[u*3+1],f=n[u*3+2],l=0;l<o;l++)a.push(new E(i,f));return a};E.getRsBlockTable=function(t,e){switch(e){case M.L:return E.RS_BLOCK_TABLE[(t-1)*4+0];case M.M:return E.RS_BLOCK_TABLE[(t-1)*4+1];case M.Q:return E.RS_BLOCK_TABLE[(t-1)*4+2];case M.H:return E.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};var ot=E;function z(){this.buffer=new Array,this.length=0}z.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var n=0;n<e;n++)this.putBit((t>>>e-n-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var st=z,c={glog:function(t){if(t<1)throw new Error("glog("+t+")");return c.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return c.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var v=0;v<8;v++)c.EXP_TABLE[v]=1<<v;for(var v=8;v<256;v++)c.EXP_TABLE[v]=c.EXP_TABLE[v-4]^c.EXP_TABLE[v-5]^c.EXP_TABLE[v-6]^c.EXP_TABLE[v-8];for(var v=0;v<255;v++)c.LOG_TABLE[c.EXP_TABLE[v]]=v;var U=c,P=U;function x(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&t[n]==0;)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}x.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=P.gexp(P.glog(this.get(n))+P.glog(t.get(r)));return new x(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=P.glog(this.get(0))-P.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(var r=0;r<t.getLength();r++)n[r]^=P.gexp(P.glog(t.get(r))+e);return new x(n,0).mod(t)}};var G=x,d=H,I=G,ft=U,C={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){for(var e=t<<10;h.getBCHDigit(e)-h.getBCHDigit(h.G15)>=0;)e^=h.G15<<h.getBCHDigit(e)-h.getBCHDigit(h.G15);return(t<<10|e)^h.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;h.getBCHDigit(e)-h.getBCHDigit(h.G18)>=0;)e^=h.G18<<h.getBCHDigit(e)-h.getBCHDigit(h.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return h.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case C.PATTERN000:return(e+n)%2==0;case C.PATTERN001:return e%2==0;case C.PATTERN010:return n%3==0;case C.PATTERN011:return(e+n)%3==0;case C.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case C.PATTERN101:return e*n%2+e*n%3==0;case C.PATTERN110:return(e*n%2+e*n%3)%2==0;case C.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new I([1],0),n=0;n<t;n++)e=e.multiply(new I([1,ft.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case d.MODE_NUMBER:return 10;case d.MODE_ALPHA_NUM:return 9;case d.MODE_8BIT_BYTE:return 8;case d.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case d.MODE_NUMBER:return 12;case d.MODE_ALPHA_NUM:return 11;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case d.MODE_NUMBER:return 14;case d.MODE_ALPHA_NUM:return 13;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var a=0;a<e;a++){for(var u=0,o=t.isDark(r,a),i=-1;i<=1;i++)if(!(r+i<0||e<=r+i))for(var f=-1;f<=1;f++)a+f<0||e<=a+f||i==0&&f==0||o==t.isDark(r+i,a+f)&&u++;u>5&&(n+=3+u-5)}for(var r=0;r<e-1;r++)for(var a=0;a<e-1;a++){var l=0;t.isDark(r,a)&&l++,t.isDark(r+1,a)&&l++,t.isDark(r,a+1)&&l++,t.isDark(r+1,a+1)&&l++,(l==0||l==4)&&(n+=3)}for(var r=0;r<e;r++)for(var a=0;a<e-6;a++)t.isDark(r,a)&&!t.isDark(r,a+1)&&t.isDark(r,a+2)&&t.isDark(r,a+3)&&t.isDark(r,a+4)&&!t.isDark(r,a+5)&&t.isDark(r,a+6)&&(n+=40);for(var a=0;a<e;a++)for(var r=0;r<e-6;r++)t.isDark(r,a)&&!t.isDark(r+1,a)&&t.isDark(r+2,a)&&t.isDark(r+3,a)&&t.isDark(r+4,a)&&!t.isDark(r+5,a)&&t.isDark(r+6,a)&&(n+=40);for(var s=0,a=0;a<e;a++)for(var r=0;r<e;r++)t.isDark(r,a)&&s++;var m=Math.abs(100*s/e/e-50)/5;return n+=m*10,n}},lt=h,ht=it,$=ot,K=st,T=lt,vt=G;function B(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var g=B.prototype;g.addData=function(t){var e=new ht(t);this.dataList.push(e),this.dataCache=null};g.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};g.getModuleCount=function(){return this.moduleCount};g.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=$.getRSBlocks(t,this.errorCorrectLevel),n=new K,r=0,a=0;a<e.length;a++)r+=e[a].dataCount;for(var a=0;a<this.dataList.length;a++){var u=this.dataList[a];n.put(u.mode,4),n.put(u.getLength(),T.getLengthInBits(u.mode,t)),u.write(n)}if(n.getLengthInBits()<=r*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};g.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=B.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};g.setupPositionProbePattern=function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(0<=n&&n<=6&&(r==0||r==6)||0<=r&&r<=6&&(n==0||n==6)||2<=n&&n<=4&&2<=r&&r<=4?this.modules[t+n][e+r]=!0:this.modules[t+n][e+r]=!1)};g.getBestMaskPattern=function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=T.getLostPoint(this);(n==0||t>r)&&(t=r,e=n)}return e};g.createMovieClip=function(t,e,n){var r=t.createEmptyMovieClip(e,n),a=1;this.make();for(var u=0;u<this.modules.length;u++)for(var o=u*a,i=0;i<this.modules[u].length;i++){var f=i*a,l=this.modules[u][i];l&&(r.beginFill(0,100),r.moveTo(f,o),r.lineTo(f+a,o),r.lineTo(f+a,o+a),r.lineTo(f,o+a),r.endFill())}return r};g.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};g.setupPositionAdjustPattern=function(){for(var t=T.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],a=t[n];if(this.modules[r][a]==null)for(var u=-2;u<=2;u++)for(var o=-2;o<=2;o++)u==-2||u==2||o==-2||o==2||u==0&&o==0?this.modules[r+u][a+o]=!0:this.modules[r+u][a+o]=!1}};g.setupTypeNumber=function(t){for(var e=T.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(var n=0;n<18;n++){var r=!t&&(e>>n&1)==1;this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}};g.setupTypeInfo=function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=T.getBCHTypeInfo(n),a=0;a<15;a++){var u=!t&&(r>>a&1)==1;a<6?this.modules[a][8]=u:a<8?this.modules[a+1][8]=u:this.modules[this.moduleCount-15+a][8]=u}for(var a=0;a<15;a++){var u=!t&&(r>>a&1)==1;a<8?this.modules[8][this.moduleCount-a-1]=u:a<9?this.modules[8][15-a-1+1]=u:this.modules[8][15-a-1]=u}this.modules[this.moduleCount-8][8]=!t};g.mapData=function(t,e){for(var n=-1,r=this.moduleCount-1,a=7,u=0,o=this.moduleCount-1;o>0;o-=2)for(o==6&&o--;;){for(var i=0;i<2;i++)if(this.modules[r][o-i]==null){var f=!1;u<t.length&&(f=(t[u]>>>a&1)==1);var l=T.getMask(e,r,o-i);l&&(f=!f),this.modules[r][o-i]=f,a--,a==-1&&(u++,a=7)}if(r+=n,r<0||this.moduleCount<=r){r-=n,n=-n;break}}};B.PAD0=236;B.PAD1=17;B.createData=function(t,e,n){for(var r=$.getRSBlocks(t,e),a=new K,u=0;u<n.length;u++){var o=n[u];a.put(o.mode,4),a.put(o.getLength(),T.getLengthInBits(o.mode,t)),o.write(a)}for(var i=0,u=0;u<r.length;u++)i+=r[u].dataCount;if(a.getLengthInBits()>i*8)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+i*8+")");for(a.getLengthInBits()+4<=i*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=i*8||(a.put(B.PAD0,8),a.getLengthInBits()>=i*8));)a.put(B.PAD1,8);return B.createBytes(a,r)};B.createBytes=function(t,e){for(var n=0,r=0,a=0,u=new Array(e.length),o=new Array(e.length),i=0;i<e.length;i++){var f=e[i].dataCount,l=e[i].totalCount-f;r=Math.max(r,f),a=Math.max(a,l),u[i]=new Array(f);for(var s=0;s<u[i].length;s++)u[i][s]=255&t.buffer[s+n];n+=f;var m=T.getErrorCorrectPolynomial(l),_=new vt(u[i],m.getLength()-1),p=_.mod(m);o[i]=new Array(m.getLength()-1);for(var s=0;s<o[i].length;s++){var A=s+p.getLength()-o[i].length;o[i][s]=A>=0?p.get(A):0}}for(var w=0,s=0;s<e.length;s++)w+=e[s].totalCount;for(var D=new Array(w),R=0,s=0;s<r;s++)for(var i=0;i<e.length;i++)s<u[i].length&&(D[R++]=u[i][s]);for(var s=0;s<a;s++)for(var i=0;i<e.length;i++)s<o[i].length&&(D[R++]=o[i][s]);return D};var gt=B,X="H",dt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function Y(t,e){var n=F[e],r=new gt(-1,n);return r.addData(ct(t)),r.make(),r}function V(t){return t in F}function ct(t){for(var e="",n=0;n<t.length;n++){var r=t.charCodeAt(n);r<128?e+=String.fromCharCode(r):r<2048?(e+=String.fromCharCode(192|r>>6),e+=String.fromCharCode(128|r&63)):r<55296||r>=57344?(e+=String.fromCharCode(224|r>>12),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|r&63)):(n++,r=65536+((r&1023)<<10|t.charCodeAt(n)&1023),e+=String.fromCharCode(240|r>>18),e+=String.fromCharCode(128|r>>12&63),e+=String.fromCharCode(128|r>>6&63),e+=String.fromCharCode(128|r&63))}return e}function J(t,e){e===void 0&&(e=0);var n=[];return t.forEach(function(r,a){var u=null;r.forEach(function(o,i){if(!o&&u!==null){n.push("M".concat(u+e," ").concat(a+e,"h").concat(i-u,"v1H").concat(u+e,"z")),u=null;return}if(i===r.length-1){if(!o)return;u===null?n.push("M".concat(i+e,",").concat(a+e," h1v1H").concat(i+e,"z")):n.push("M".concat(u+e,",").concat(a+e," h").concat(i+1-u,"v1H").concat(u+e,"z"));return}o&&u===null&&(u=i)})}),n.join("")}var N={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:X,validator:function(t){return V(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},mt=k(k({},N),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),Et=b({name:"QRCodeSvg",props:N,setup:function(t){var e=y(0),n=y(""),r=function(){var a=t.value,u=t.level,o=t.margin,i=Y(a,u).modules;e.value=i.length+o*2,n.value=J(i,o)};return r(),O(r),function(){return L("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(e.value," ").concat(e.value)},[L("path",{fill:t.background,d:"M0,0 h".concat(e.value,"v").concat(e.value,"H0z")}),L("path",{fill:t.foreground,d:n.value})])}}}),Bt=b({name:"QRCodeCanvas",props:N,setup:function(t){var e=y(null),n=function(){var r=t.value,a=t.level,u=t.size,o=t.margin,i=t.background,f=t.foreground,l=Y(r,a).modules,s=l.length+o*2,m=e.value;if(!!m){var _=m.getContext("2d");if(!!_){var p=window.devicePixelRatio||1,A=u/s*p;m.height=m.width=u*p,_.scale(A,A),_.fillStyle=i,_.fillRect(0,0,s,s),_.fillStyle=f,dt?_.fill(new Path2D(J(l,o))):l.forEach(function(w,D){w.forEach(function(R,W){R&&_.fillRect(W+o,D+o,1,1)})})}}};return Z(n),O(n),function(){return L("canvas",{ref:e,style:{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")}})}}}),_t=b({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,n=t.value,r=t.size,a=t.margin,u=t.level,o=t.background,i=t.foreground,f=r>>>0,l=a>>>0,s=V(u)?u:X;return L(e==="svg"?Et:Bt,{value:n,size:f,margin:l,level:s,background:o,foreground:i})},props:mt});const Ct=t=>(et("data-v-cf2dc12a"),t=t(),rt(),t),Tt={class:"qrPage"},Pt=Ct(()=>S("div",{class:"qrPage_text"},[S("p",null,"\u70B9\u51FB\u5237\u65B0\u4E8C\u7EF4\u7801"),S("p",null,"\u8BE5\u4E8C\u7EF4\u7801\u7528\u4E8Exxx")],-1)),pt=b({__name:"QrPage",setup(t){const e=nt("$Utils"),n=y("456465sfASfasfsaf");let r=["\u4F60\u662F\u6211\u7684\u73AB\u7470\uFF0C\u4F60\u662F\u6211\u7684\u82B1","\u6211\u4EEC\u8FD8\u80FD\u4E0D\u80FD\uFF0C\u80FD\u4E0D\u80FD\u518D\u89C1\u9762","\u88AB\u4F24\u8FC7\u7684\u5FC3\u8FD8\u53EF\u4EE5\u7231\u8C01","\u6211\u7231\u4F60\uFF0C\u7231\u7740\u4F60\uFF0C\u5C31\u50CF\u8001\u9F20\u7231\u5927\u7C73","\u4E0D\u662F\u56E0\u4E3A\u5BC2\u5BDE\u624D\u60F3\u4F60\uFF0C\u800C\u662F\u60F3\u4F60\u624D\u5BC2\u5BDE","You Are My Life, But Not All."];function a(){n.value=r[e.Tools.getRandom(0,5)]}return(u,o)=>(j(),q("div",Tt,[tt(_t,{value:n.value,size:150,onClick:o[0]||(o[0]=i=>a())},null,8,["value"]),Pt]))}});const Lt=at(pt,[["__scopeId","data-v-cf2dc12a"]]);export{Lt as default};
