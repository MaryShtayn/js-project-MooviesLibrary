!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.50578030.js","DKcCc":"photo.e4714d22.jpg","7mVsD":"index.17d40aba.css","7RaHS":"library.20ab676f.js","imKXO":"index.9937f294.js"}')),a("lbRHt"),a("4Nugj"),a("8AEpj"),function(){var e={openModalStudentBtn:document.querySelector("[data-modal-footer-open]"),closeModalStudentBtn:document.querySelector("[data-modal-footer-close]"),modalStudent:document.querySelector("[data-modal-footer]")};function t(){e.modalStudent.classList.toggle("is-hidden")}e.openModalStudentBtn.addEventListener("click",t),e.closeModalStudentBtn.addEventListener("click",t)}(),a("jcFG7");var o,c=a("bpxeT"),s=a("2TvXO"),i=a("ajzNc"),l=(c=a("bpxeT"),s=a("2TvXO"),a("lbRHt")),u=a("4Nugj"),d=a("jcFG7");o=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("DKcCc");var f=a("UL92Z"),v=a("bKWtT"),m=a("8AEpj");document.querySelector(".cards__list");function p(){return h.apply(this,arguments)}function h(){return h=e(c)(e(s).mark((function t(){var n,r,a=arguments;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,e.prev=1,e.next=4,(0,l.fetchTrendingMovies)(n);case 4:_((r=e.sent).results),(0,f.save)("search-storage",r),(0,d.makeTuiPagination)(r.total_results,r.total_pages).on("afterMove",(function(e){var t=e.page;(0,l.fetchTrendingMovies)(t).then((function(e){_(e.results),(0,f.save)("search-storage",e),(0,v.default)()}))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),h.apply(this,arguments)}function g(e){return e.map((function(e){return localStorage.getItem(e)})).join(", ")}function _(t){var n="",r="";(0,m.waitingLi)();var a=t.map((function(t){var a=t.poster_path,c=t.title,s=t.genre_ids,i=t.release_date,l=void 0===i?"":i,u=t.vote_average,d=void 0===u?"":u,f=t.id;return s.length>3&&(s.splice(3,s.length-3),n=g(s),n+=", other"),(n=g(s)).length>24&&(s.pop(),n=g(s),n+=", other"),0===s.length&&(n="genre is unknown"),""===(r=l.slice(0,4))&&(r="release date unknown"),a?'<li id="'.concat(f,'" class="movie__card">\n        <img\n          src="').concat("https://image.tmdb.org/t/p/w500/").concat(a,'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(c,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(r,'</h3>\n          <div class="movie__average">').concat(d.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>"):'<li  id="'.concat(f,'" class="movie__card">\n        <img width="100%"\n          src="').concat(e(o),'"\n          class="movie__cover"\n        />\n        <div class="movie__info">\n        <h2 class="movie__title">').concat(c,'</h2>\n        <div class="movie__item">\n          <h3 class="movie__category">').concat(n,'</h3>\n          <h3 class="movie__year">').concat(r,'</h3>\n          <div class="movie__average">').concat(d.toFixed(1),"</div>\n        </div>\n      </div>\n      </li>")})).join("");u.refs.moviesGallery.innerHTML=a}p();d=a("jcFG7"),u=a("4Nugj"),f=a("UL92Z"),v=a("bKWtT");document.querySelector(".header-logo__link").addEventListener("click",(function(){p(y=1)})),u.refs.form.addEventListener("submit",(function(e){return w.apply(this,arguments)}));var y=1,b="";function E(e,t){return S.apply(this,arguments)}function S(){return(S=e(c)(e(s).mark((function t(n,r){var a,o;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i.SEARCH_URL,"?api_key=").concat(i.API_KEY,"&page=").concat(r,"&include_adult=false&query=").concat(n));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,(0,f.save)("search-storage",o),e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(0),console.error();case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function w(){return(w=e(c)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),y=1,b=n.currentTarget.elements.searchQuery.value.trim(),u.refs.paginationEl.style.display="none",""!==b){e.next=8;break}return L("Search for movies is empty! Enter movie name, please",2e3),u.refs.paginationEl.style.display="none",e.abrupt("return");case 8:return e.next=10,E(b,y).then((function(e){var t=e.total_results;t||L("Search result not successful. Enter the correct movie name and try again",2e3),t>=1&&(_(e.results),y+=1,(0,d.makeTuiPagination)(t,e.total_pages).on("afterMove",(function(e){var t=e.page;E(b,t).then((function(e){_(e.results),(0,f.save)("search-storage",e),(0,v.default)()}))})))})).catch((function(e){return console.log(e)})).finally((function(){u.refs.form.reset()}));case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function L(e,t){u.refs.form.insertAdjacentHTML("beforeend",'<p class="form__uncorrect-search is-hidden"></p>');var n=document.querySelector(".form__uncorrect-search");n.textContent="".concat(e),setTimeout((function(){n.classList.toggle("is-hidden")}),t),p(y);setTimeout((function(){u.refs.form.lastElementChild.remove()}),2e3)}a("ajzNc");c=a("bpxeT"),s=a("2TvXO"),i=a("ajzNc");function x(){return(x=e(c)(e(s).mark((function t(){var n,r;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(i.BASE_URL,"/genre/movie/list?api_key=").concat(i.API_KEY,"&language=en-US"));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}(function(){return x.apply(this,arguments)})().then((function(e){e.genres.map((function(e){localStorage.setItem(JSON.stringify(e.id),e.name)}))})),a("UL92Z");var k=document.querySelector("#btn--to_top");document.addEventListener("DOMContentLoaded",(function(){window.addEventListener("scroll",(function(){this.scrollY>100?k.classList.add("show"):k.classList.remove("show")}))})),a("4Nugj"),window.addEventListener("load",(function(){document.querySelector(".toggler");var e,t=document.querySelector(".theme-btn"),n=document.documentElement,r=localStorage.getItem("user-theme");window.matchMedia&&(e=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(e){!r&&a()})),t&&t.addEventListener("click",(function(e){a(!0)}));function a(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=n.classList.contains("light")?"light":"dark";"light"===r?e="dark":"dark"===r&&(e="light"),n.classList.remove(r),n.classList.add(e),t&&localStorage.setItem("user-theme",e)}r?n.classList.add(r):n.classList.add(e)})),a("bKWtT"),a("cDXQO"),a("kvC6y")}();
//# sourceMappingURL=index.50578030.js.map