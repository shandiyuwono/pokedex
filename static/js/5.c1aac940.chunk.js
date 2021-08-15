(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[5],{44:function(n,r,e){"use strict";e.d(r,"a",(function(){return o}));var t=e(47);function o(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(t=(c=i.next()).done)&&(e.push(c.value),!r||e.length!==r);t=!0);}catch(s){o=!0,a=s}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return e}}(n,r)||Object(t.a)(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},45:function(n,r,e){"use strict";var t,o=e(17),a=e(24),c=e(2),i=a.a.div(t||(t=Object(o.a)(["\n  display: flex;\n  text-align: center;\n\n  p {\n    width: 80px;\n    color: white;\n    padding: 2px 0;\n    border-radius: 5px;\n  }\n\n  .normal {\n    background-color: rgba(168, 168, 120, 1);\n  }\n\n  .fire {\n    background-color: rgba(240, 128, 48, 1);\n  }\n\n  .water {\n    background-color: rgba(104, 144, 240, 1);\n  }\n\n  .grass {\n    background-color: rgba(120, 200, 80, 1);\n  }\n\n  .electric {\n    background-color: rgba(248, 208, 48, 1);\n  }\n\n  .ice {\n    background-color: rgba(152, 216, 216, 1)\n  }\n\n  .fighting {\n    background-color: rgba(192, 48, 40, 1)\n  }\n\n  .poison {\n    background-color: rgba(160, 64, 160, 1)\n  }\n\n  .ground {\n    background-color: rgba(225, 192, 104, 1)\n  }\n\n  .flying {\n    background-color: rgba(168, 144, 240, 1)\n  }\n\n  .psychic {\n    background-color: rgba(248, 88, 136, 1)\n  }\n\n  .bug {\n    background-color: rgba(168, 184, 32, 1)\n  }\n\n  .rock {\n    background-color: rgba(184, 160, 56, 1)\n  }\n\n  .ghost {\n    background-color: rgba(112, 88, 152, 1)\n  }\n\n  .dark {\n    background-color: rgba(112, 88, 72, 1);\n  }\n\n  .dragon {\n    background-color: rgba(112, 56, 248, 1);\n  }\n\n  .steel {\n    background-color: rgba(184, 184, 208, 1)\n  }\n\n  .fairy {\n    background-color: rgba(240, 182, 188, 1)\n  }\n"])));r.a=function(n){var r=n.data;return Object(c.jsx)(i,{children:r.map((function(n,r){return Object(c.jsx)("p",{className:"".concat(n.type.name," me-3"),children:n.type.name[0].toUpperCase()+n.type.name.slice(1)},r)}))})}},47:function(n,r,e){"use strict";e.d(r,"a",(function(){return o}));var t=e(48);function o(n,r){if(n){if("string"===typeof n)return Object(t.a)(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(t.a)(n,r):void 0}}},48:function(n,r,e){"use strict";function t(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=n[e];return t}e.d(r,"a",(function(){return t}))},50:function(n,r,e){"use strict";var t,o=e(17),a=e(24).a.div(t||(t=Object(o.a)(["\n  height: 85vh;\n  width: 100%;\n  overflow: auto;\n  display: grid;\n  grid-auto-rows: 120px;\n\n  @media (min-width: 992px) {\n    grid-template-columns: 1fr 1fr;\n    height: 77vh;\n  }\n"])));r.a=a},52:function(n,r,e){"use strict";var t,o,a=e(17),c=e(24),i=e(3),s=e(45),d=e(2),l=c.a.button(t||(t=Object(a.a)(["\n  position: absolute;\n  background: #525252;\n  color: white;\n  right: 0;\n  bottom: 0;\n  border-top-left-radius: 18px;\n  border: none;\n  padding: 8px 10px;\n\n  &:hover {\n    background-color: #7A7A7A;\n  }\n\n  @media (max-width: 400px) {\n    padding: 6px 8px;\n    img {\n      max-width: 15px;\n    }\n  }\n"]))),b=c.a.div(o||(o=Object(a.a)(["\n  background-color: white;\n  position: relative;\n  border-radius: 5px;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  transition: box-shadow ease-in 0.2s;\n\n  .sprite-container {\n    background-color: rgb(193, 195, 195, 0.5);\n    border-top-right-radius: 100px;\n    border-bottom-right-radius: 100px;\n    padding: 4px;\n  \n    img {\n      width: 100px;\n      height: 100px;\n    }\n\n    span {\n      font-size: 2rem;\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2);\n  }\n"])));r.a=Object(i.g)((function(n){var r=n.data,e=n.history,t=n.removePokemon;return Object(d.jsx)("div",{className:"p-2",children:Object(d.jsxs)(b,{className:"".concat(r.types[0].type.name," mb-4 col-12"),onClick:function(){return n=r.name,void e.push("/detail/".concat(n),{state:{name:n}});var n},children:[Object(d.jsx)("div",{className:"sprite-container",children:Object(d.jsx)("img",{className:"sprite",src:r.sprites.front_default,alt:"pokemon front"})}),Object(d.jsxs)("div",{className:"w-100",children:[Object(d.jsxs)("div",{className:"px-3",children:[Object(d.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(d.jsxs)("div",{className:"mb-2",children:[Object(d.jsx)("h3",{className:"me-3 m-0",children:r.name[0].toUpperCase()+r.name.slice(1)}),r.nickname&&Object(d.jsxs)("span",{children:["[ ",r.nickname," ]"]})]}),Object(d.jsxs)("p",{children:["#",r.id]})]}),Object(d.jsx)(s.a,{data:r.types})]}),r.nickname&&Object(d.jsx)(l,{onClick:function(n){return t(n,r.nickname)},children:Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYEAQAAAAa7ikwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflCA8NADdSK01aAAABe0lEQVRIx7WVvY6CUBCFz5C1MGts1NJW42/pG/ggdpa+gNa8gInPoK21jZ3GWGlrYWViB0QNgbMFunBlFwzoSShmuHxnZi4XgBiRhQI5n5O3G391u3m5QiHu+a+4BcBoBHS7wGQCXC5eLpsF+n1gOAQGg3hGZAeLBblchvPLJblYvA5yWy1yv2dq7XZ0m80/Kp3N0sPvcqfTB1fzHYrFVLNUVCqFDeR0ehs/wBJ/DzIZSLn8FgMej6LZNhB4TUWzbTKfBzqddPTV6gEPG1PX1d26XsnDwY/PZ+966HDw1gSl60GmpjqYphqPx2C77ce9Htjr+XG7DY7HUQz1JMuTgRiGiGGQfqzc1gyDVHPPa6I7SCSVoRrIpw3w1G4iRY0Ib+iAkR28wUA+bcBP78HHX9P4g0YCcv8IVip0AycZ9brCclstoFoNZAixLAUZKsA1Tcj3d7LqLUu0XO7/EQGAbLeJxyObTXwRbDTortek47z+j3QccrUia7Vn3g8BZ7vukDsQSgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wOC0xNVQxMzowMDo1NSswMDowMNX3pZkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDgtMTVUMTM6MDA6NTUrMDA6MDCkqh0lAAAAAElFTkSuQmCC",alt:"delete-pokemon"})})]})]})})}))},87:function(n,r,e){"use strict";e.r(r);var t=e(44),o=e(0),a=e(52),c=e(50),i=e(2);r.default=function(n){var r=Object(o.useState)(JSON.parse(localStorage.getItem("myPokemonList"))),e=Object(t.a)(r,2),s=e[0],d=e[1],l=function(n,r){n.stopPropagation();var e=s.filter((function(n){return n.nickname!==r}));d(e),localStorage.setItem("myPokemonList",JSON.stringify(e))};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{className:"text-white fw-bold text-center py-4",children:"MY POK\xc9MON LIST"}),(null===s||void 0===s?void 0:s.length)?Object(i.jsx)(c.a,{children:s.map((function(n,r){return Object(i.jsx)(a.a,{data:n,removePokemon:l},r)}))}):Object(i.jsx)("h4",{children:"You have not caught any Pok\xe9mons."})]})}}}]);
//# sourceMappingURL=5.c1aac940.chunk.js.map