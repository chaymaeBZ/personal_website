!function(){var t="scrollwatchResume",r="length",i="removeData",n="data",e="scrollwatch-state",s="scrollwatch-suspended",o="scrollgress-suspended",a="setTimeout",h="trigger",c="scroll",u="scrollwatchSuspend",f=!0,l="scrollwatch",d=null,w="top",g="rangeMin",v="rangeMax",m="scrollgress",y=!1,b="anchor",j="unscrollwatch",p="unscrollgress",M="element",Q="-id",k="scroll.",x="height",T="scrollTop",D="center",H="bottom",I=$(window),R=$(document),S=1e3;jQuery.fn[t]=function(){var u,f;if(0==this[r])return $(this);if(this[r]>1){for(u=0;u<this[r];u++)$(this[u])[t]();return this}return f=$(this),f[n](e,-1)[i](s)[i](o),window[a](function(){I[h](c)},50),f},jQuery.fn[u]=function(){var t,i;if(0==this[r])return $(this);if(this[r]>1){for(t=0;t<this[r];t++)$(this[t])[u]();return this}return i=$(this),i[n](s,f),window[a](function(){I[h](c)},50),i},jQuery.fn[l]=function(t){var i,h,c,u,j;if(0==this[r])return $(this);if(this[r]>1){for(i=0;i<this[r];i++)$(this[i])[l](t);return this}return h=jQuery.extend({range:.5,rangeMin:d,rangeMax:d,anchor:w,init:d,on:d,off:d,delay:0},t),h[g]===d&&(h[g]=-1*h.range),h[v]===d&&(h[v]=h.range),c=$(this),h.init&&(j=h.init),c[n](s,y)[n](e,-1)[m](function(t){return c[n](s)===f?(h.on&&h.on(c),void c[n](o,f)):(window.clearTimeout(u),void(u=window[a](function(){var r,i,s=parseInt(c[n](e));return(0==s||s==-1)&&(r=h[g]===y||t>=h[g],i=h[v]===y||t<=h[v],r&&i)?(c[n](e,1),h.on&&h.on(c),j&&(j(c,f),j=d),void 0):(1==s||s==-1)&&(r=h[g]!==y&&t<h[g],i=h[v]!==y&&t>h[v],r||i)?(c[n](e,0),h.off&&h.off(c),j&&(j(c,y),j=d),void 0):void 0},j?0:h.delay)))},{anchor:h[b]},l),c},jQuery.fn[j]=function(){var t,n;if(0==this[r])return $(this);if(this[r]>1){for(t=0;t<this[r];t++)$(this[t])[j]();return this}return n=$(this),n[i](e)[p](l),n},jQuery.fn[m]=function(t,i,e){var s,a,u,l,d;if(0==this[r])return $(this);if(this[r]>1){for(s=0;s<this[r];s++)$(this[s])[m](t,i,e);return $(this)}return e||(e=m),a=jQuery.extend({anchor:w,direction:"both",scope:M,easing:0},i),u=$(this),u[n](e+Q)||u[n](e+Q,S++),l=u[n](e+Q),d=k+e+"-"+l,I.off(d).on(d,function(){var r,i,e,s;if(u[n](o)!==f){switch(r=u.offset()[w],i=u.outerHeight(),e=R[x](),a.scope){default:case M:switch(a[b]){default:case w:s=(r-I[T]())/i*-1;break;case D:s=(r-I[T]()-(I[x]()-i)/2)/i*-1;break;case H:s=(r-I[T]()-(I[x]()-i))/i*-1}break;case"window":switch(a[b]){default:case w:s=(r-I[T]())/I[x]()*-1;break;case D:s=(r-I[T]()-(I[x]()-i)/2)/I[x]()*-1;break;case H:s=(r-I[T]()-(I[x]()-i))/I[x]()*-1}}"forwards"==a.direction?s=Math.max(0,s):"backwards"==a.direction&&(s=Math.min(0,s)),s>0?s=Math.max(0,s-a.easing/100):s<0&&(s=Math.min(0,s+a.easing/100)),t(s,u)}})[h](c),u},jQuery.fn[p]=function(t){var e,s,o,a;if(0==this[r])return $(this);if(this[r]>1){for(e=0;e<this[r];e++)$(this[e])[p](t);return $(this)}return t||(t=m),s=$(this),s[n](t+Q)?(o=s[n](t+Q),a=k+t+"-"+o,I.off(a),s[i](t+Q),s):s}}();