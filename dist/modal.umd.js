!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.modal=t()}(this,function(){var e,t,n,o;return function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;if(!document.documentElement.contains(t))return null;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}),Array.from||(Array.from=(e=Object.prototype.toString,t=function(t){return"function"==typeof t||"[object Function]"===e.call(t)},n=Math.pow(2,53)-1,o=function(e){var t=function(e){var t=Number(e);return isNaN(t)?0:0!==t&&isFinite(t)?(t>0?1:-1)*Math.floor(Math.abs(t)):t}(e);return Math.min(Math.max(t,0),n)},function(e){var n=Object(e);if(null==e)throw new TypeError("Array.from requires an array-like object - not null or undefined");var r,a=arguments.length>1?arguments[1]:void 0;if(void 0!==a){if(!t(a))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(r=arguments[2])}for(var l,i=o(n.length),c=t(this)?Object(new this(i)):new Array(i),d=0;d<i;)l=n[d],c[d]=a?void 0===r?a(l,d):a.call(r,l,d):l,d+=1;return c.length=i,c})),function(e){void 0===e&&(e={});var t=Object.assign({},{modalElement:".modal",modalTriggerElement:".modal-trigger",modalCloseElement:".modal-close",modalContentElement:".modal__content",modalContents:".modal-content-to-show",modalOpenClass:"modal--is-open"},e);function n(e){var n=document.querySelector("#"+e);n.classList.remove(t.modalOpenClass);var o=new CustomEvent("close");n.dispatchEvent(o)}document.addEventListener("click",function(e){var n=e.target.closest(t.modalTriggerElement);if(n){e.preventDefault();var o=n.dataset.modalId,r=n.querySelector(t.modalContents);!function(e,n){var o=document.querySelector("#"+e),r=o.querySelector(t.modalContentElement);n&&r&&(r.innerHTML=n),o.classList.add(t.modalOpenClass);var a=new CustomEvent("open");o.dispatchEvent(a)}(o,r?r.innerHTML:"")}}),document.addEventListener("click",function(e){var o=e.target.closest(t.modalCloseElement);if(o){e.preventDefault();var r=o.dataset.modalId;n(r||o.closest(t.modalElement).id)}})}});
//# sourceMappingURL=modal.umd.js.map
