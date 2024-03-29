(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~WalletCard"],{

/***/ "./node_modules/vue-horizontal-list/dist/vue-horizontal-list.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-horizontal-list/dist/vue-horizontal-list.esm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  {
    // commonjs
    module.exports = { polyfill: polyfill };
  }

}());
});
var smoothscroll_1 = smoothscroll.polyfill;

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var script = {
  name: "VueHorizontalList",
  props: {
    /**
     * items to display in horizontal-list
     */
    items: {
      type: Array,
      required: true
    },

    /**
     * item.class = css class for each individual item.
     * item.padding = padding between each item in the list.
     *
     * list.class = css class for the parent of item
     * list.windowed = maximum width of the list it can extend to, basically the container max-width
     * list.padding = padding of the list, if container < windowed what is the left-right padding of the list
     *
     * responsive breakpoints to calculate how many items to show in the list at each width interval
     * Examples:
     * [{size: 5}] show 5 items regardless
     * [{end: 992, size: 3}},{size: 4}] < 992 show 3 items, else show 4 items
     * [{end: 576, size: 1}, {start: 576, end: 992, size: 2}, {size: 3}] < 576 show 1, 576 - 992 show 2, else show 3
     *
     * These are the default responsive fallback, if you don't have a catch all, it will fallback to this.
     * [{end: 576, size: 1},
     * {start: 576, end: 768, size: 2},
     * {start: 768, end: 992, size: 3},
     * {start: 992, end: 1200, size: 4},
     * {start: 1200, size: 5}]
     */
    options: {
      type: Object,
      required: false
    }
  },

  data() {
    return {
      /**
       * Current item position of list
       */
      position: 0,

      /**
       * Width of item, list and window
       */
      width: {
        container: 0,
        window: 576
      },

      /**
       * Debounce timer of the scroll
       */
      scrollTimer: null,

      /**
       * Interval of the autoPlay
       */
      autoPlayInterval: null
    };
  },

  mounted() {
    this.$resize = () => {
      this.width.window = window.innerWidth;
      this.width.container = this.$refs.container.clientWidth;
    }; // TODO(fuxing): Need to re-do this
    // Added a simple SSR fix, need to look into it for optimization in the future


    smoothscroll.polyfill();

    this.$resize();
    window.addEventListener("resize", this.$resize);

    if (this._options.position.start) {
      this.$nextTick(() => {
        this.go(this._options.position.start);
      });
    }

    if (this._options.autoplay.play) {
      this.runAutoPlay();
    }
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.$resize);

    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  },

  computed: {
    _items() {
      return [...(this.$slots["start"] ? [{
        type: "start"
      }] : []), ...this.items.map(value => ({
        type: "item",
        item: value
      })), ...(this.$slots["end"] ? [{
        type: "end"
      }] : [])];
    },

    _length() {
      return this._items.length;
    },

    _options() {
      var _options$navigation$s, _options$navigation, _options$navigation$c, _options$navigation2, _options$item$class, _options$item, _options$item$padding, _options$item2, _options$list$class, _options$list, _options$list$windowe, _options$list2, _options$list$padding, _options$list3, _options$responsive, _options$position$sta, _options$position, _options$autoplay$pla, _options$autoplay, _options$autoplay$spe, _options$autoplay2, _options$autoplay$rep, _options$autoplay3;

      const options = this.options;
      return {
        navigation: {
          start: (_options$navigation$s = options === null || options === void 0 ? void 0 : (_options$navigation = options.navigation) === null || _options$navigation === void 0 ? void 0 : _options$navigation.start) !== null && _options$navigation$s !== void 0 ? _options$navigation$s : 992,
          // TODO(fuxing): Deprecate this in favor of navigation slot
          color: (_options$navigation$c = options === null || options === void 0 ? void 0 : (_options$navigation2 = options.navigation) === null || _options$navigation2 === void 0 ? void 0 : _options$navigation2.color) !== null && _options$navigation$c !== void 0 ? _options$navigation$c : "#000"
        },
        item: {
          class: (_options$item$class = options === null || options === void 0 ? void 0 : (_options$item = options.item) === null || _options$item === void 0 ? void 0 : _options$item.class) !== null && _options$item$class !== void 0 ? _options$item$class : "",
          padding: (_options$item$padding = options === null || options === void 0 ? void 0 : (_options$item2 = options.item) === null || _options$item2 === void 0 ? void 0 : _options$item2.padding) !== null && _options$item$padding !== void 0 ? _options$item$padding : 16
        },
        list: {
          class: (_options$list$class = options === null || options === void 0 ? void 0 : (_options$list = options.list) === null || _options$list === void 0 ? void 0 : _options$list.class) !== null && _options$list$class !== void 0 ? _options$list$class : "",
          windowed: (_options$list$windowe = options === null || options === void 0 ? void 0 : (_options$list2 = options.list) === null || _options$list2 === void 0 ? void 0 : _options$list2.windowed) !== null && _options$list$windowe !== void 0 ? _options$list$windowe : 1200,
          padding: (_options$list$padding = options === null || options === void 0 ? void 0 : (_options$list3 = options.list) === null || _options$list3 === void 0 ? void 0 : _options$list3.padding) !== null && _options$list$padding !== void 0 ? _options$list$padding : 24
        },
        responsive: [...((_options$responsive = options === null || options === void 0 ? void 0 : options.responsive) !== null && _options$responsive !== void 0 ? _options$responsive : []), // Fallback default responsive
        {
          end: 576,
          size: 1
        }, {
          start: 576,
          end: 768,
          size: 2
        }, {
          start: 768,
          end: 992,
          size: 3
        }, {
          start: 992,
          end: 1200,
          size: 4
        }, {
          start: 1200,
          size: 5
        }],
        position: {
          start: (_options$position$sta = options === null || options === void 0 ? void 0 : (_options$position = options.position) === null || _options$position === void 0 ? void 0 : _options$position.start) !== null && _options$position$sta !== void 0 ? _options$position$sta : 0
        },
        autoplay: {
          play: (_options$autoplay$pla = options === null || options === void 0 ? void 0 : (_options$autoplay = options.autoplay) === null || _options$autoplay === void 0 ? void 0 : _options$autoplay.play) !== null && _options$autoplay$pla !== void 0 ? _options$autoplay$pla : false,
          speed: (_options$autoplay$spe = options === null || options === void 0 ? void 0 : (_options$autoplay2 = options.autoplay) === null || _options$autoplay2 === void 0 ? void 0 : _options$autoplay2.speed) !== null && _options$autoplay$spe !== void 0 ? _options$autoplay$spe : 2000,
          repeat: (_options$autoplay$rep = options === null || options === void 0 ? void 0 : (_options$autoplay3 = options.autoplay) === null || _options$autoplay3 === void 0 ? void 0 : _options$autoplay3.repeat) !== null && _options$autoplay$rep !== void 0 ? _options$autoplay$rep : false
        }
      };
    },

    _style() {
      const style = {
        container: {},
        list: {},
        item: {},
        tail: {}
      };
      const workingWidth = this._workingWidth;
      const size = this._size; // Full Screen Mode

      if (this.width.window < this._options.list.windowed) {
        style.container.marginLeft = `-${this._options.list.padding}px`;
        style.container.marginRight = `-${this._options.list.padding}px`;
        style.item.width = `${(workingWidth - (size - 1) * this._options.item.padding) / size}px`;
        style.item.paddingLeft = `${this._options.list.padding}px`;
        style.item.paddingRight = `${this._options.item.padding}px`;
        style.item.marginRight = `-${this._options.list.padding}px`;
      } // Windowed Mode
      else {
          style.item.paddingLeft = `${this._options.item.padding / 2}px`;
          style.item.paddingRight = `${this._options.item.padding / 2}px`;
          style.container.marginLeft = `-${this._options.item.padding / 2}px`;
          style.container.marginRight = `-${this._options.item.padding / 2}px`;
          style.item.width = `${(workingWidth - (size - 1) * this._options.item.padding) / size}px`;
        }

      return style;
    },

    _itemWidth() {
      return (this._workingWidth - (this._size - 1) * this._options.item.padding) / this._size;
    },

    /**
     * @return number actual width of the container
     */
    _workingWidth() {
      // Full Screen Mode
      if (this.width.window < this._options.list.windowed) {
        return this.width.window - this._options.list.padding * 2;
      } // Windowed Mode
      else {
          return this.width.container;
        }
    },

    /**
     * @return visible items in horizontal list at the current width/state
     */
    _size() {
      const width = this._workingWidth;
      return this._options.responsive.find(value => {
        return (!value.start || value.start <= width) && (!value.end || value.end >= width);
      }).size;
    },

    /**
     * @return boolean whether there is prev set of items for navigation
     * @private internal use
     */
    _hasNext() {
      return this._length > this.position + this._size;
    },

    /**
     * @return boolean whether there is next set of items for navigation
     * @private internal use
     */
    _hasPrev() {
      return this.position > 0;
    }

  },
  methods: {
    /**
     * @param position of item to scroll to
     */
    go(position) {
      const maxPosition = this._length - this._size;
      this.position = position > maxPosition ? maxPosition : position;
      const left = this._itemWidth * this.position + this.position * this._options.item.padding;
      this.$refs.list.scrollTo({
        top: 0,
        left: left,
        behavior: "smooth"
      });
    },

    /**
     * Run autoPlay slide show
     */
    runAutoPlay() {
      this.autoPlayInterval = setInterval(function () {
        if (this._options.autoplay.repeat && this.position === this._length - this._size) {
          this.position = 0;
          this.go(this.position);
        } else {
          this.position += 1;
          this.go(this.position);
        }
      }.bind(this), this._options.autoplay.speed);
    },

    /**
     * Stop autoPlay slide show
     */
    stopAutoPlay() {
      clearInterval(this.autoPlayInterval);
    },

    /**
     * Go to a set of previous items
     */
    prev() {
      this.go(this.position - this._size);
    },

    /**
     * Go to a set of next items
     */
    next() {
      this.go(this.position + this._size);
    },

    /**
     * On horizontal scroll re-evaluate the actual position
     */
    scrollHandler() {
      clearTimeout(this.scrollTimer); //Renew timer

      this.scrollTimer = setTimeout(function () {
        const parentLeftOffset = this.$refs["list"].getBoundingClientRect().left;

        let items = this._items.map((item, index) => {
          const itemLeftOffset = this.$refs.item[index].getBoundingClientRect().left;
          return Math.abs(itemLeftOffset - parentLeftOffset);
        });

        this.position = items.indexOf(Math.min(...items));
      }.bind(this), 50);
    }

  },
  watch: {
    "options.autoplay.play": function (newVal, oldVal) {
      if (!newVal) {
        this.stopAutoPlay();
      } else {
        this.runAutoPlay();
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    ref: "container",
    staticClass: "vue-horizontal-list"
  }, [_vm.width.window > _vm._options.navigation.start ? _c('div', {
    staticClass: "vhl-navigation"
  }, [_vm._hasPrev ? _c('div', {
    staticClass: "vhl-btn-left",
    on: {
      "click": _vm.prev
    }
  }, [_vm._t("nav-prev", [_c('svg', {
    attrs: {
      "fill": _vm._options.navigation.color,
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M10.757 12l4.95 4.95a1 1 0 1 1-1.414 1.414l-5.657-5.657a1 1 0 0 1 0-1.414l5.657-5.657a1 1 0 0 1 1.414 1.414L10.757 12z"
    }
  })])])], 2) : _vm._e(), _vm._v(" "), _vm._hasNext ? _c('div', {
    staticClass: "vhl-btn-right",
    on: {
      "click": _vm.next
    }
  }, [_vm._t("nav-next", [_c('svg', {
    attrs: {
      "fill": _vm._options.navigation.color,
      "width": "32px",
      "height": "32px",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M13.314 12.071l-4.95-4.95a1 1 0 0 1 1.414-1.414l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"
    }
  })])])], 2) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "vhl-container",
    style: _vm._style.container
  }, [_c('div', {
    ref: "list",
    staticClass: "vhl-list",
    class: _vm._options.list.class,
    style: _vm._style.list,
    on: {
      "scroll": _vm.scrollHandler
    }
  }, [_vm._l(_vm._items, function (item) {
    return _c('div', {
      ref: "item",
      refInFor: true,
      staticClass: "vhl-item",
      class: _vm._options.item.class,
      style: _vm._style.item
    }, [item.type === 'start' ? _vm._t("start") : item.type === 'end' ? _vm._t("end") : item.type === 'item' ? _vm._t("default", [_vm._v(_vm._s(item))], {
      "item": item.item
    }) : _vm._e()], 2);
  }), _vm._v(" "), _c('div', {
    style: _vm._style.tail
  })], 2)])]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = function (inject) {
  if (!inject) return;
  inject("data-v-8b923bbc_0", {
    source: ".vue-horizontal-list[data-v-8b923bbc]{position:relative}.vhl-navigation[data-v-8b923bbc]{display:flex;align-items:center;position:absolute;width:100%;height:100%;margin-top:-6px}.vhl-btn-left[data-v-8b923bbc],.vhl-btn-right[data-v-8b923bbc]{width:48px;height:48px;display:flex;align-items:center;justify-content:center;border-radius:24px;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24);z-index:2}.vhl-btn-left[data-v-8b923bbc]:hover,.vhl-btn-right[data-v-8b923bbc]:hover{cursor:pointer}.vhl-btn-left[data-v-8b923bbc]{margin-left:-24px;margin-right:auto}.vhl-btn-right[data-v-8b923bbc]{margin-left:auto;margin-right:-24px}.vhl-container[data-v-8b923bbc]{overflow-y:hidden;height:100%;margin-bottom:-24px}.vhl-list[data-v-8b923bbc]{display:flex;padding-bottom:24px;margin-bottom:-24px;overflow-x:scroll;overflow-y:hidden;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory}.vhl-item[data-v-8b923bbc]{box-sizing:content-box;padding-top:24px;padding-bottom:24px;z-index:1;min-height:1px}.vhl-list>*[data-v-8b923bbc]{scroll-snap-align:start;flex-shrink:0}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__ = "data-v-8b923bbc";
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

// Import vue component

const install = function installVueHorizontalList(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("VueHorizontalList", __vue_component__);
}; // Create module definition for Vue.use()
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ })

}]);