var w = Object.defineProperty;
var y = (i, t, e) =>
  t in i
    ? w(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e })
    : (i[t] = e);
var s = (i, t, e) => (y(i, typeof t != "symbol" ? t + "" : t, e), e);
import { S as f, N as k } from "./navigation.3ea54688.js";
import { u as p } from "./_ticker.0f79b9b1.js";
import { i as b } from "./_input-mask.dce8ee92.js";
import { u as B, a as H, C as d } from "./_general_scripts.4e20f1e4.js";
import { u as P } from "./_modal-gallery.b65491e8.js";
import { u as C } from "./_discount-block.f6a3f92a.js";
function q() {
  import("data:text/javascript,");
}
// const L = 1e4,
//   x = 600,
//   N = 1100,
//   n = { prev: "SLIDE_PREV", next: "SLIDE_NEXT" },
//   r = {
//     progressStart: "PROGRESS_START",
//     progressEnd: "PROGRESS_END",
//     changeNavigationBackgroundStart: "CHANGE_NAVIGATION_BACKGROUND_START",
//     changeNavigationBackgroundEnd: "CHANGE_NAVIGATION_BACKGROUND_END",
//     clickStart: "CLICK_START",
//     clickEnd: "CLICK_END",
//     animationCurrentEntitiesStart: "HIDE_CURRENT_ENTITIES_START",
//     animationCurrentEntitiesEnd: "HIDE_CURRENT_ENTITIES_END",
//     animationNextEntitiesStart: "HIDE_NEXT_ENTITIES_START",
//     animationNextEntitiesEnd: "HIDE_NEXT_ENTITIES_END",
//   };
// class I {
//   constructor() {
//     s(this, "progressPrev");
//     s(this, "progressNext");
//     s(this, "buttonBackground");
//     s(this, "sliderNode");
//     s(this, "educationEntityBasic");
//     s(this, "educationEntityAdvice");
//     s(this, "navigationNode");
//     s(this, "slide");
//     s(this, "state");
//     s(this, "endTransitionEventHandlerBind");
//   }
//   init() {
//     const t = document.querySelector(
//         ".home-preview-navigation__area-button-prev"
//       ),
//       e = document.querySelector(".home-preview-navigation__area-button-next");
//     (this.navigationNode = document.querySelector(".home-preview-navigation")),
//       (this.progressPrev = document.querySelector(
//         ".home-preview-navigation__area-progress-prev"
//       )),
//       (this.progressNext = document.querySelector(
//         ".home-preview-navigation__area-progress-next"
//       )),
//       (this.buttonBackground = document.querySelector(
//         ".home-preview-navigation__button-background"
//       )),
//       (this.sliderNode = document.querySelector(".home-preview")),
//       (this.educationEntityBasic = document.querySelector(
//         ".home-preview__education-entity-wrapper_theme_red"
//       )),
//       (this.educationEntityAdvice = document.querySelector(
//         ".home-preview__education-entity-wrapper_theme_blue"
//       )),
//       (this.endTransitionEventHandlerBind = this.endTransitionEventHandler.bind(
//         this
//       )),
//       t.addEventListener("click", this.clickButtonPrevHandler.bind(this)),
//       e.addEventListener("click", this.clickButtonNextHandler.bind(this)),
//       (this.slide = n.prev),
//       this.startProgress(n.prev);
//   }
//   startProgress(t) {
//     const e = t === n.next ? n.prev : n.next;
//     (this.state = r.progressStart),
//       (this.getProgressNode(e).style.transform = "scaleX(1)"),
//       (this.getProgressNode(e).style.transitionDuration = `${L}ms`),
//       (this.getProgressNode(e).style.transitionTimingFunction = "linear"),
//       this.getProgressNode(e).addEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       );
//   }
//   startFastProgress(t) {
//     this.removeEndTransitionEventHandlers();
//     const e = t === n.next ? n.prev : n.next;
//     (this.state = r.clickStart),
//       (this.getProgressNode(e).style.transform = "scaleX(1.01)"),
//       (this.getProgressNode(e).style.transitionDuration = "200ms"),
//       (this.getProgressNode(e).style.transitionTimingFunction = "ease-out"),
//       this.getProgressNode(e).addEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       );
//   }
//   startChangeNavigationBackground(t) {
//     this.state = r.changeNavigationBackgroundStart;
//     const e = "home-preview-navigation__button-background_theme_red",
//       a = "home-preview-navigation__button-background_theme_blue";
//     (this.progressPrev.style.transform = "scaleX(0)"),
//       (this.progressPrev.style.transitionDuration = "0ms"),
//       (this.progressNext.style.transform = "scaleX(0)"),
//       (this.progressNext.style.transitionDuration = "0ms"),
//       (this.buttonBackground.style.transitionDuration = `${x}ms`),
//       (this.buttonBackground.style.transitionTimingFunction = "ease-out"),
//       (this.buttonBackground.style.transform = `translate(${
//         t === n.next ? "50%" : "-50%"
//       }, 0)`),
//       this.slide === n.prev
//         ? (this.buttonBackground.classList.add(a),
//           this.buttonBackground.classList.remove(e),
//           this.navigationNode.classList.add(
//             "home-preview-navigation_theme_blue"
//           ),
//           this.navigationNode.classList.remove(
//             "home-preview-navigation_theme_red"
//           ))
//         : (this.buttonBackground.classList.add(e),
//           this.buttonBackground.classList.remove(a),
//           this.navigationNode.classList.add(
//             "home-preview-navigation_theme_red"
//           ),
//           this.navigationNode.classList.remove(
//             "home-preview-navigation_theme_blue"
//           )),
//       this.buttonBackground.addEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       );
//   }
//   startCurrentEntities() {
//     const t = "home-preview_hide_basic",
//       e = "home-preview_hide_advice";
//     (this.state = r.animationCurrentEntitiesStart),
//       this.slide === n.prev
//         ? this.sliderNode.classList.add(t)
//         : this.sliderNode.classList.add(e),
//       setTimeout(this.endTransitionEventHandlerBind, N);
//   }
//   startNextEntities() {
//     const t = "home-preview_hide_basic",
//       e = "home-preview_hide_advice";
//     (this.state = r.animationNextEntitiesStart),
//       this.slide === n.prev
//         ? this.sliderNode.classList.remove(e)
//         : this.sliderNode.classList.remove(t),
//       setTimeout(this.endTransitionEventHandlerBind, N);
//   }
//   endTransitionEventHandler() {
//     switch ((this.removeEndTransitionEventHandlers(), this.state)) {
//       case r.progressStart:
//         this.endProgressStartHandler();
//         break;
//       case r.clickStart:
//         this.endProgressStartHandler();
//         break;
//       case r.animationCurrentEntitiesStart:
//         this.endCurrentEntities();
//         break;
//       case r.animationNextEntitiesStart:
//         this.endNextEntities();
//         break;
//       case r.changeNavigationBackgroundStart:
//         this.endChangeChangeNavigationBackgroundHandler();
//         break;
//       default:
//         throw Error(
//           "\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435"
//         );
//     }
//   }
//   removeEndTransitionEventHandlers() {
//     this.progressPrev.removeEventListener(
//       "transitionend",
//       this.endTransitionEventHandlerBind
//     ),
//       this.progressNext.removeEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       ),
//       this.buttonBackground.removeEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       ),
//       this.educationEntityAdvice.removeEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       ),
//       this.educationEntityBasic.removeEventListener(
//         "transitionend",
//         this.endTransitionEventHandlerBind
//       );
//   }
//   endProgressStartHandler() {
//     this.removeEndTransitionEventHandlers(), this.startCurrentEntities();
//   }
//   endChangeChangeNavigationBackgroundHandler() {
//     this.slide === n.prev ? (this.slide = n.next) : (this.slide = n.prev),
//       this.startProgress(this.slide);
//   }
//   clickButtonPrevHandler() {
//     this.clickButtonHandler(n.prev);
//   }
//   clickButtonNextHandler() {
//     this.clickButtonHandler(n.next);
//   }
//   clickButtonHandler(t) {
//     this.state === r.progressStart &&
//       t !== this.slide &&
//       this.startFastProgress(this.slide);
//   }
//   endCurrentEntities() {
//     this.removeEndTransitionEventHandlers(), this.startNextEntities();
//   }
//   endNextEntities() {
//     this.removeEndTransitionEventHandlers(),
//       this.slide === n.prev
//         ? this.startChangeNavigationBackground(n.next)
//         : this.startChangeNavigationBackground(n.prev);
//   }
//   getProgressNode(t) {
//     return t === n.next ? this.progressNext : this.progressPrev;
//   }
// }
// const A = () => {
//   const i = document.querySelector(".home-preview");
//   if (!i) return;
//   const t = document.querySelector(".footer__wrapper");
//   if (!t) return;
//   const e = () => {
//       i.style.top = "-400px";
//     },
//     a = () => {
//       i.style.top = "0px";
//     },
//     l = (v) => {
//       v.forEach((E) => {
//         E.isIntersecting ? e() : a();
//       });
//     },
//     c = { rootMargin: "0px", threshold: 0 };
//   new IntersectionObserver(l, c).observe(t);
// };
// window.addEventListener("DOMContentLoaded", () => {
//   if (
//     (window == null ? void 0 : window.innerWidth) > 640 ||
//     !document.querySelector(".home-preview")
//   )
//     return;
//   function t(l, c) {
//     let h = !1;
//     return () => {
//       h ||
//         (l.apply(this),
//         (h = !0),
//         setTimeout(() => {
//           h = !1;
//         }, c));
//     };
//   }
//   const e = () => {
//       const l = window.innerHeight * 0.01;
//       document.documentElement.style.setProperty("--vh", `${l}px`);
//     },
//     a = t(e, 200);
//   window.addEventListener("resize", () => {
//     a();
//   }),
//     e();
// });
document.addEventListener("DOMContentLoaded", () => {
//   new I().init(), A();
  const i = document.querySelector("#mainSecond");
  window.addEventListener("scroll", function () {
    const { scrollY: o } = this;
    o > 8 && o < 10 && i.scrollIntoView();
  });
  const t = (o) => {
      o.forEach((m) => {
        if (m.isIntersecting) {
          const { childNodes: g } = m.target;
          for (let u = 0; u < g.length; u++)
            g[u].nodeType !== 3 &&
              !g[u].classList.contains("element-show") &&
              g[u].classList.add("element-show");
        }
      });
    },
    e = { threshold: 0.3 },
    a = new IntersectionObserver(t, e),
    l = document.querySelectorAll(".parent-animate");
  for (const o of l) a.observe(o);
  p("#courses-ticker", "#courses-ticker-list"),
    p("#partners-1", ".partners1"),
    p("#partners-2", ".partners2"),
    p("#partners-3", ".partners3");
  const { closePromoModal: c, showPromoModal: h } = B(),
    v = document.querySelector("#promo-close");
  v && v.addEventListener("click", c),
    b([{ selector: "#main-promo-tel", mask: "+7 (999) 999-99-99" }]);
  const { showGalleryModal: T } = P();
  document.querySelectorAll(".gallery-img").forEach((o) => {
    o.addEventListener("click", (m) => {
      T(m.target.src);
    });
  });
  const _ = document.querySelector(".gallery__swiper");
  _ &&
    new f(_, {
      slidesPerView: 1,
      spaceBetween: 2,
      allowTouchMove: !0,
      rewind: !0,
      speed: 700,
      modules: [k],
      navigation: {
        nextEl: ".gallery-swiper_next",
        prevEl: ".gallery-swiper_prev",
      },
      breakpoints: { 300: { slidesPerView: 1.2, spaceBetween: 24 } },
    }),
    C(null, !0);
  const S = () => {
    c();
  };
  document.addEventListener("keydown", (o) => {
    o.code === "Escape" && S();
  }),
    H(
      new d({
        types: [d.availTypes.email, d.availTypes.phone, d.availTypes.name],
        rules: {
          name: [],
          phone: [d.availRules.require, d.availRules.phone],
          email: [d.availRules.email],
          agree: [d.availRules.require],
        },
        selectors: { form: "#promo__form", info: ".form-input__info" },
        classes: { info: "form-input__info", error: "form-input_dark-red" },
        url: "/local/php_interface/functions/sendPromoForm.php",
        callbackSuccess: h,
      })
    ).initializeYmItems();
});
export { q as __vite_legacy_guard };
