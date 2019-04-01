(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/frontend/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/frontend/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_resolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router/resolver */ "./resources/assets/js/frontend/router/resolver.js");

var rPlayer = Object(_router_resolver__WEBPACK_IMPORTED_MODULE_0__["component"])('rPlayer');
var rFooter = Object(_router_resolver__WEBPACK_IMPORTED_MODULE_0__["component"])('rFooter');
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: function metaInfo() {
    return {
      titleTemplate: this.titleTemplate,
      title: this.title,
      meta: this.metas
    };
  },
  data: function data() {
    return {
      drawer: true,
      persistent: true,
      isMobile: false,
      items: [{
        title: 'Home',
        icon: 'dashboard',
        to: '/'
      }, {
        title: 'Programação',
        icon: 'access_time',
        to: '/schedule'
      }, {
        title: 'Notícias',
        icon: 'insert_drive_file',
        to: '/news'
      }, {
        title: 'Entrevistas',
        icon: 'mic',
        to: '/interviews'
      }, {
        title: 'Matérias',
        icon: 'library_books',
        to: '/posts'
      }, {
        title: 'Eventos',
        icon: 'event',
        to: '/events'
      }, {
        title: 'Galeria de fotos',
        icon: 'photo_library',
        to: '/gallery'
      }, {
        title: 'Tv Rádio Bom Jesus',
        icon: 'video_library',
        to: '/videos'
      }, {
        title: 'A Equipe',
        icon: 'supervisor_account',
        to: '/team'
      }, {
        title: 'Giro Esportivo',
        icon: 'brightness_1',
        to: '/giro'
      }, {
        title: 'Parceiros',
        icon: 'tag_faces',
        to: '/partners'
      }, {
        title: 'Fale conosco',
        icon: 'chat',
        to: '/chat'
      }]
    };
  },
  computed: {
    title: function title() {
      return this.$store.getters['Pages/current'].filter(function (config) {
        return config.name === 'title';
      })[0].content;
    },
    titleTemplate: function titleTemplate() {
      var payload = this.$store.getters['Config/all'].filter(function (config) {
        return config.key === 'suffix';
      })[0].value;
      return '%s - ' + payload;
    },
    metas: function metas() {
      return this.$store.getters['Pages/current'].map(function (config) {
        return {
          name: config['name'],
          content: config['content'],
          vmid: config['name']
        };
      });
    },
    getUi: function getUi() {
      var ui = this.$store.getters['Ui/all'];
      var payload = {};
      if (ui.fillHeight) payload['fill-height'] = true;
      return payload;
    },
    logoSrc: function logoSrc() {
      return this.$store.getters['Config/key']['logo_src'] ? this.$store.getters['Config/key']['logo_src']['value'] : '/photos/assets/logo.png';
    }
  },
  methods: {
    toggleDrawer: function toggleDrawer() {
      this.drawer = !this.drawer;
      console.log('toggling drawer');
    }
  },
  components: {
    rPlayer: rPlayer,
    rFooter: rFooter
  },
  mounted: function mounted() {
    var vm = this;
    setInterval(function () {
      vm.isMobile = vm.$refs.drawer.isMobile;
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function ($) {
  'use strict';
  var version = $.fn.jquery.split(' ')[0].split('.')
  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: https://modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // https://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.4.1'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    selector    = selector === '#' ? [] : selector
    var $parent = $(document).find(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element  = $(element)
    this.options   = $.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.4.1'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state += 'Text'

    if (data.resetText == null) $el.data('resetText', $el[val]())

    // push to event loop to allow forms to submit
    setTimeout($.proxy(function () {
      $el[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        $el.addClass(d).attr(d, d).prop(d, true)
      } else if (this.isLoading) {
        this.isLoading = false
        $el.removeClass(d).removeAttr(d).prop(d, false)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
      if ($input.prop('type') == 'radio') {
        if ($input.prop('checked')) changed = false
        $parent.find('.active').removeClass('active')
        this.$element.addClass('active')
      } else if ($input.prop('type') == 'checkbox') {
        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
        this.$element.toggleClass('active')
      }
      $input.prop('checked', this.$element.hasClass('active'))
      if (changed) $input.trigger('change')
    } else {
      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
      this.$element.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = $.fn.button

  $.fn.button             = Plugin
  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var $btn = $(e.target).closest('.btn')
      Plugin.call($btn, 'toggle')
      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
        e.preventDefault()
        // The target component still receive the focus
        if ($btn.is('input,button')) $btn.trigger('focus')
        else $btn.find('input:visible,button:visible').first().trigger('focus')
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.$active     = null
    this.$items      = null

    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.4.1'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.$items = item.parent().children('.item')
    return this.$items.index(item || this.$active)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.$items.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.$items.length
    return this.$items.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || this.getItemForDirection(type, $active)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if ($next.hasClass('active')) return (this.sliding = false)

    var relatedTarget = $next[0]
    var slideEvent = $.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.$element.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
      $nextIndicator && $nextIndicator.addClass('active')
    }

    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if ($.support.transition && this.$element.hasClass('slide')) {
      $next.addClass(type)
      if (typeof $next === 'object' && $next.length) {
        $next[0].offsetWidth // force reflow
      }
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one('bsTransitionEnd', function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.$element.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = $.fn.carousel

  $.fn.carousel             = Plugin
  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    if (href) {
      href = href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
    }

    var target  = $this.attr('data-target') || href
    var $target = $(document).find(target)

    if (!$target.hasClass('carousel')) return

    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call($target, options)

    if (slideIndex) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  $(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      Plugin.call($carousel, $carousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

/* jshint latedef: false */

+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.4.1'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(document).find(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(document).find(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.4.1'

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = selector !== '#' ? $(document).find(selector) : null

    return $parent && $parent.length ? $parent : $this.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    $(backdrop).remove()
    $(toggle).each(function () {
      var $this         = $(this)
      var $parent       = getParent($this)
      var relatedTarget = { relatedTarget: this }

      if (!$parent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return

      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this.attr('aria-expanded', 'false')
      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        $(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter($(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      $this
        .trigger('focus')
        .attr('aria-expanded', 'true')

      $parent
        .toggleClass('open')
        .trigger($.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) $parent.find(toggle).trigger('focus')
      return $this.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var $items = $parent.find('.dropdown-menu' + desc)

    if (!$items.length) return

    var index = $items.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < $items.length - 1) index++         // down
    if (!~index)                                    index = 0

    $items.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.dropdown')

      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.dropdown

  $.fn.dropdown             = Plugin
  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#modals
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options = options
    this.$body = $(document.body)
    this.$element = $(element)
    this.$dialog = this.$element.find('.modal-dialog')
    this.$backdrop = null
    this.isShown = null
    this.originalBodyPad = null
    this.scrollbarWidth = 0
    this.ignoreBackdropClick = false
    this.fixedContent = '.navbar-fixed-top, .navbar-fixed-bottom'

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION = '3.4.1'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (document !== e.target &&
          this.$element[0] !== e.target &&
          !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    var scrollbarWidth = this.scrollbarWidth
    if (this.bodyIsOverflowing) {
      this.$body.css('padding-right', bodyPad + scrollbarWidth)
      $(this.fixedContent).each(function (index, element) {
        var actualPadding = element.style.paddingRight
        var calculatedPadding = $(element).css('padding-right')
        $(element)
          .data('padding-right', actualPadding)
          .css('padding-right', parseFloat(calculatedPadding) + scrollbarWidth + 'px')
      })
    }
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
    $(this.fixedContent).each(function (index, element) {
      var padding = $(element).data('padding-right')
      $(element).removeData('padding-right')
      element.style.paddingRight = padding ? padding : ''
    })
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
    var href = $this.attr('href')
    var target = $this.attr('data-target') ||
      (href && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7

    var $target = $(document).find(target)
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict';

  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn']

  var uriAttrs = [
    'background',
    'cite',
    'href',
    'itemtype',
    'longdesc',
    'poster',
    'src',
    'xlink:href'
  ]

  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i

  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  }

  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi

  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */
  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase()

    if ($.inArray(attrName, allowedAttributeList) !== -1) {
      if ($.inArray(attrName, uriAttrs) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN))
      }

      return true
    }

    var regExp = $(allowedAttributeList).filter(function (index, value) {
      return value instanceof RegExp
    })

    // Check if a regular expression validates the attribute.
    for (var i = 0, l = regExp.length; i < l; i++) {
      if (attrName.match(regExp[i])) {
        return true
      }
    }

    return false
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml)
    }

    // IE 8 and below don't support createHTMLDocument
    if (!document.implementation || !document.implementation.createHTMLDocument) {
      return unsafeHtml
    }

    var createdDocument = document.implementation.createHTMLDocument('sanitization')
    createdDocument.body.innerHTML = unsafeHtml

    var whitelistKeys = $.map(whiteList, function (el, i) { return i })
    var elements = $(createdDocument.body).find('*')

    for (var i = 0, len = elements.length; i < len; i++) {
      var el = elements[i]
      var elName = el.nodeName.toLowerCase()

      if ($.inArray(elName, whitelistKeys) === -1) {
        el.parentNode.removeChild(el)

        continue
      }

      var attributeList = $.map(el.attributes, function (el) { return el })
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || [])

      for (var j = 0, len2 = attributeList.length; j < len2; j++) {
        if (!allowedAttribute(attributeList[j], whitelistedAttributes)) {
          el.removeAttribute(attributeList[j].nodeName)
        }
      }
    }

    return createdDocument.body.innerHTML
  }

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.4.1'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    },
    sanitize : true,
    sanitizeFn : null,
    whiteList : DefaultWhitelist
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $(document).find($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    var dataAttributes = this.$element.data()

    for (var dataAttr in dataAttributes) {
      if (dataAttributes.hasOwnProperty(dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
        delete dataAttributes[dataAttr]
      }
    }

    options = $.extend({}, this.getDefaults(), dataAttributes, options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    if (options.sanitize) {
      options.template = sanitizeHtml(options.template, options.whiteList, options.sanitizeFn)
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo($(document).find(this.options.container)) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    if (this.options.html) {
      if (this.options.sanitize) {
        title = sanitizeHtml(title, this.options.whiteList, this.options.sanitizeFn)
      }

      $tip.find('.tooltip-inner').html(title)
    } else {
      $tip.find('.tooltip-inner').text(title)
    }

    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
        that.$element
          .removeAttr('aria-describedby')
          .trigger('hidden.bs.' + that.type)
      }
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var isSvg = window.SVGElement && el instanceof window.SVGElement
    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
    // See https://github.com/twbs/bootstrap/issues/20280
    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
      that.$element = null
    })
  }

  Tooltip.prototype.sanitizeHtml = function (unsafeHtml) {
    return sanitizeHtml(unsafeHtml, this.options.whiteList, this.options.sanitizeFn)
  }

  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.4.1'

  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    if (this.options.html) {
      var typeContent = typeof content

      if (this.options.sanitize) {
        title = this.sanitizeHtml(title)

        if (typeContent === 'string') {
          content = this.sanitizeHtml(content)
        }
      }

      $tip.find('.popover-title').html(title)
      $tip.find('.popover-content').children().detach().end()[
        typeContent === 'string' ? 'html' : 'append'
      ](content)
    } else {
      $tip.find('.popover-title').text(title)
      $tip.find('.popover-content').children().detach().end().text(content)
    }

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
        o.content.call($e[0]) :
        o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.popover

  $.fn.popover             = Plugin
  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.$body          = $(document.body)
    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.4.1'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!$.isWindow(this.$scrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.$scrollElement.scrollTop()
    }

    this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#./.test(href) && $(href)

        return ($href
          && $href.length
          && $href.is(':visible')
          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    $(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.scrollspy

  $.fn.scrollspy             = Plugin
  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load.bs.scrollspy.data-api', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      Plugin.call($spy, $spy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.4.1'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(document).find(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
        .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
          .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.4.1
 * https://getbootstrap.com/docs/3.4/javascript/#affix
 * ========================================================================
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)

    var target = this.options.target === Affix.DEFAULTS.target ? $(this.options.target) : $(document).find(this.options.target)

    this.$target = target
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element     = $(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.4.1'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.$target.scrollTop()
    var position     = this.$element.offset()
    var targetHeight = this.$target.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.$element.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.$target.scrollTop()
    var position  = this.$element.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var height       = this.$element.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max($(document).height(), $(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.$element.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = $.Event(affixType + '.bs.affix')

      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.$element
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.$element.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.affix

  $.fn.affix             = Plugin
  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call($spy, data)
    })
  })

}(jQuery);


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/assets/stylus/app.styl":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--9-2!./node_modules/stylus-loader!./resources/assets/stylus/app.styl ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-moz-keyframes shake {\n  59% {\n    margin-left: 0;\n  }\n  60%, 80% {\n    margin-left: 2px;\n  }\n  70%, 90% {\n    margin-left: -2px;\n  }\n}\n@-webkit-keyframes shake {\n  59% {\n    margin-left: 0;\n  }\n  60%, 80% {\n    margin-left: 2px;\n  }\n  70%, 90% {\n    margin-left: -2px;\n  }\n}\n@-o-keyframes shake {\n  59% {\n    margin-left: 0;\n  }\n  60%, 80% {\n    margin-left: 2px;\n  }\n  70%, 90% {\n    margin-left: -2px;\n  }\n}\n@keyframes shake {\n  59% {\n    margin-left: 0;\n  }\n  60%, 80% {\n    margin-left: 2px;\n  }\n  70%, 90% {\n    margin-left: -2px;\n  }\n}\n.elevation-0 {\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12) !important;\n}\n.elevation-1 {\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2), 0 1px 1px rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12) !important;\n}\n.elevation-2 {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-3 {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12) !important;\n}\n.elevation-4 {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12) !important;\n}\n.elevation-5 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 5px 8px rgba(0,0,0,0.14), 0 1px 14px rgba(0,0,0,0.12) !important;\n}\n.elevation-6 {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12) !important;\n}\n.elevation-7 {\n  box-shadow: 0 4px 5px -2px rgba(0,0,0,0.2), 0 7px 10px 1px rgba(0,0,0,0.14), 0 2px 16px 1px rgba(0,0,0,0.12) !important;\n}\n.elevation-8 {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-9 {\n  box-shadow: 0 5px 6px -3px rgba(0,0,0,0.2), 0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12) !important;\n}\n.elevation-10 {\n  box-shadow: 0 6px 6px -3px rgba(0,0,0,0.2), 0 10px 14px 1px rgba(0,0,0,0.14), 0 4px 18px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-11 {\n  box-shadow: 0 6px 7px -4px rgba(0,0,0,0.2), 0 11px 15px 1px rgba(0,0,0,0.14), 0 4px 20px 3px rgba(0,0,0,0.12) !important;\n}\n.elevation-12 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-13 {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 13px 19px 2px rgba(0,0,0,0.14), 0 5px 24px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-14 {\n  box-shadow: 0 7px 9px -4px rgba(0,0,0,0.2), 0 14px 21px 2px rgba(0,0,0,0.14), 0 5px 26px 4px rgba(0,0,0,0.12) !important;\n}\n.elevation-15 {\n  box-shadow: 0 8px 9px -5px rgba(0,0,0,0.2), 0 15px 22px 2px rgba(0,0,0,0.14), 0 6px 28px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-16 {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-17 {\n  box-shadow: 0 8px 11px -5px rgba(0,0,0,0.2), 0 17px 26px 2px rgba(0,0,0,0.14), 0 6px 32px 5px rgba(0,0,0,0.12) !important;\n}\n.elevation-18 {\n  box-shadow: 0 9px 11px -5px rgba(0,0,0,0.2), 0 18px 28px 2px rgba(0,0,0,0.14), 0 7px 34px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-19 {\n  box-shadow: 0 9px 12px -6px rgba(0,0,0,0.2), 0 19px 29px 2px rgba(0,0,0,0.14), 0 7px 36px 6px rgba(0,0,0,0.12) !important;\n}\n.elevation-20 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 20px 31px 3px rgba(0,0,0,0.14), 0 8px 38px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-21 {\n  box-shadow: 0 10px 13px -6px rgba(0,0,0,0.2), 0 21px 33px 3px rgba(0,0,0,0.14), 0 8px 40px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-22 {\n  box-shadow: 0 10px 14px -6px rgba(0,0,0,0.2), 0 22px 35px 3px rgba(0,0,0,0.14), 0 8px 42px 7px rgba(0,0,0,0.12) !important;\n}\n.elevation-23 {\n  box-shadow: 0 11px 14px -7px rgba(0,0,0,0.2), 0 23px 36px 3px rgba(0,0,0,0.14), 0 9px 44px 8px rgba(0,0,0,0.12) !important;\n}\n.elevation-24 {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12) !important;\n}\n.application {\n  -webkit-backface-visibility: hidden;\n  min-height: 100vh;\n}\n.application > main > .container {\n  min-height: 100vh;\n}\n.application--toolbar > main > .container {\n  min-height: calc(100vh - 64px);\n}\n.application--toolbar.application--footer > main > .container {\n  min-height: calc(100vh - 64px - 36px);\n}\n.application--footer > main > .container {\n  min-height: calc(100vh - 36px);\n}\n.application--footer-fixed > aside.navigation-drawer {\n  max-height: calc(100vh - 36px);\n}\n.application--footer-fixed > main {\n  padding-bottom: 36px;\n}\n.application--footer-fixed.application--toolbar > aside.navigation-drawer.navigation-drawer--clipped {\n  max-height: calc(100vh - 64px - 36px);\n}\n.application--light {\n  background: #fafafa;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .system-bar {\n  background-color: #e0e0e0;\n  color: rgba(0,0,0,0.54);\n}\n.application--light .system-bar .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .system-bar--lights-out {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.application--light .toolbar {\n  background-color: #f5f5f5;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .btn .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--light .toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application--light .toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application--light .toolbar .btn.btn--icon,\n.application--light .toolbar .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .toolbar .toolbar__item {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .toolbar .toolbar__item:hover {\n  background: rgba(0,0,0,0.12);\n}\n.application--light .navigation-drawer {\n  background-color: #fff;\n}\n.application--light .navigation-drawer__border {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application--light .navigation-drawer a,\n.application--light .navigation-drawer .subheader,\n.application--light .navigation-drawer .list {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .navigation-drawer .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .navigation-drawer .list {\n  background: #fff;\n}\n.application--light .navigation-drawer .list__tile {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .navigation-drawer .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .navigation-drawer .list--group__header--active .list__tile:after,\n.application--light .navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(0,0,0,0.12);\n}\n.application--light .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .btn .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--light .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application--light .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application--light .btn.btn--icon,\n.application--light .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .btn-toggle .btn--selected {\n  background: #fafafa;\n}\n.application--light .btn-toggle .btn[data-selected] {\n  opacity: 1;\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application--light .btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]) {\n  border-right-color: rgba(0,0,0,0.12);\n}\n.application--light .footer {\n  background-color: #f5f5f5;\n}\n.application--light .card {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .icon:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .input-group input,\n.application--light .input-group textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .input-group input:disabled,\n.application--light .input-group textarea:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group .input-group__details {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--textarea:not(.input-group--full-width) textarea {\n  border: 2px solid rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--dirty .input-group__selections__comma {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .input-group:not(.input-group--error) label {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group:not(.input-group--error) .input-group__details:before {\n  background-color: rgba(0,0,0,0.42);\n}\n.application--light .input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__append-icon,\n.application--light .input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__prepend-icon {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover .input-group__details:before {\n  background-color: rgba(0,0,0,0.87);\n}\n.application--light .input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover.input-group--textarea:not(.input-group--full-width) textarea {\n  border-color: rgba(0,0,0,0.87);\n}\n.application--light .input-group .input-group__counter {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--overflow .input-group__input:before,\n.application--light .input-group.input-group--segmented .input-group__input:before,\n.application--light .input-group.input-group--editable .input-group__input:before,\n.application--light .input-group.input-group--overflow .input-group__details:before,\n.application--light .input-group.input-group--segmented .input-group__details:before,\n.application--light .input-group.input-group--editable .input-group__details:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .input-group.input-group--disabled input {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0, rgba(0,0,0,0.38) 33%, transparent 0);\n}\n.application--light .input-group .input-group--text-field__prefix,\n.application--light .input-group .input-group--text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #fafafa;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application--light .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd !important;\n}\n.application--light .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.12) !important;\n}\n.application--light .input-group.input-group--selection-controls.radio,\n.application--light .input-group.input-group--selection-controls.checkbox {\n  color: #009688;\n}\n.application--light .input-group.input-group--selection-controls.radio .icon,\n.application--light .input-group.input-group--selection-controls.checkbox .icon,\n.application--light .input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application--light .input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application--light .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application--light .input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(0,0,0,0.54);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application--light .input-group--slider .slider__track,\n.application--light .input-group--slider .slider__track-fill {\n  background: rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider .slider__track__container:after {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application--light .input-group--slider .slider__tick {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application--light .input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #000;\n}\n.application--light .input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.26);\n}\n.application--light .input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.38);\n}\n.application--light .input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(0,0,0,0.26);\n  border: 0px solid transparent;\n}\n.application--light .input-group--slider:focus .slider__track {\n  background: rgba(0,0,0,0.38);\n}\n.application--light .list {\n  background: #fff;\n}\n.application--light .list .list__tile:not(.list__tile--active) {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .list .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .list .subheader {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .list .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application--light .tabs .tabs__item {\n  color: rgba(0,0,0,0.7);\n}\n.application--light .tabs .tabs__item.tabs__item--active {\n  color: #f57f17;\n}\n.application--light .tabs .tabs__item.tabs__item--disabled {\n  color: rgba(0,0,0,0.26);\n}\n.application--light .tabs .icon--left,\n.application--light .tabs .icon--right {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .stepper {\n  background: #fff;\n}\n.application--light .stepper .stepper__step:not(.stepper__step--active):not(.stepper__step--complete):not(.stepper__step--error) .stepper__step__step {\n  background: rgba(0,0,0,0.38);\n}\n.application--light .stepper .stepper__step__step {\n  color: #fff;\n}\n.application--light .stepper .stepper__step__step .icon {\n  color: #fff;\n}\n.application--light .stepper .stepper__header .divider {\n  background: rgba(0,0,0,0.12);\n}\n.application--light .stepper .stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n}\n.application--light .stepper .stepper__step--editable:hover {\n  background: rgba(0,0,0,0.06);\n}\n.application--light .stepper .stepper__step--editable:hover .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n}\n.application--light .stepper .stepper__step--complete .stepper__label {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .stepper .stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(0,0,0,0.54);\n}\n.application--light .stepper .stepper__label {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .stepper .stepper__label small {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(0,0,0,0.12);\n}\n.application--light .subheader {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .table {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application--light .table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\n.application--light .table thead th {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .table thead:last-of-type {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\n.application--light .table tbody tr[active] {\n  background: #f5f5f5;\n}\n.application--light .table tbody tr:hover {\n  background: #eee;\n}\n.application--light .table tfoot tr {\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.application--light .datatable thead th.column.sortable i {\n  color: rgba(0,0,0,0.38);\n}\n.application--light .datatable thead th.column.sortable:hover {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .datatable thead th.column.sortable.active {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .datatable thead th.column.sortable.active i {\n  color: rgba(0,0,0,0.87);\n}\n.application--light .datatable .datatable__actions {\n  color: rgba(0,0,0,0.54);\n}\n.application--light .datatable .datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(0,0,0,0.54) !important;\n  font-size: 12px;\n}\n.application--light .datatable .datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(0,0,0,0.54) !important;\n}\n.application--dark {\n  background: #303030;\n  color: #fff;\n}\n.application--dark .system-bar {\n  background-color: #000;\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .system-bar .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .system-bar--lights-out {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.application--dark .toolbar {\n  background-color: #212121;\n  color: #fff;\n}\n.application--dark .toolbar .btn {\n  color: #fff;\n}\n.application--dark .toolbar .btn .icon {\n  color: #fff;\n}\n.application--dark .toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--dark .toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application--dark .toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application--dark .toolbar .btn.btn--icon,\n.application--dark .toolbar .btn.btn--floating {\n  color: #fff;\n}\n.application--dark .toolbar .toolbar__item {\n  color: #fff;\n}\n.application--dark .toolbar .toolbar__item:hover {\n  background: rgba(255,255,255,0.12);\n}\n.application--dark .navigation-drawer {\n  background-color: #424242;\n}\n.application--dark .navigation-drawer__border {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application--dark .navigation-drawer a,\n.application--dark .navigation-drawer .subheader,\n.application--dark .navigation-drawer .list {\n  color: #fff;\n}\n.application--dark .navigation-drawer .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .navigation-drawer .list {\n  background: #424242;\n}\n.application--dark .navigation-drawer .list__tile {\n  color: #fff;\n}\n.application--dark .navigation-drawer .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .navigation-drawer .list--group__header--active .list__tile:after,\n.application--dark .navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(255,255,255,0.12);\n}\n.application--dark .btn {\n  color: #fff;\n}\n.application--dark .btn .icon {\n  color: #fff;\n}\n.application--dark .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application--dark .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application--dark .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application--dark .btn.btn--icon,\n.application--dark .btn.btn--floating {\n  color: #fff;\n}\n.application--dark .btn-toggle .btn--selected {\n  background: #303030;\n}\n.application--dark .btn-toggle .btn[data-selected] {\n  opacity: 1;\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application--dark .btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]) {\n  border-right-color: rgba(255,255,255,0.12);\n}\n.application--dark .footer {\n  background-color: #212121;\n}\n.application--dark .card {\n  background-color: #424242;\n  color: #fff;\n}\n.application--dark .icon {\n  color: #fff;\n}\n.application--dark .icon:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .input-group input,\n.application--dark .input-group textarea {\n  color: #fff;\n}\n.application--dark .input-group input:disabled,\n.application--dark .input-group textarea:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .input-group .input-group__details {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--textarea:not(.input-group--full-width) textarea {\n  border: 2px solid rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--dirty .input-group__selections__comma {\n  color: #fff;\n}\n.application--dark .input-group:not(.input-group--error) label {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group:not(.input-group--error) .input-group__details:before {\n  background-color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__append-icon,\n.application--dark .input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__prepend-icon {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover .input-group__details:before {\n  background-color: #fff;\n}\n.application--dark .input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover.input-group--textarea:not(.input-group--full-width) textarea {\n  border-color: #fff;\n}\n.application--dark .input-group .input-group__counter {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--overflow .input-group__input:before,\n.application--dark .input-group.input-group--segmented .input-group__input:before,\n.application--dark .input-group.input-group--editable .input-group__input:before,\n.application--dark .input-group.input-group--overflow .input-group__details:before,\n.application--dark .input-group.input-group--segmented .input-group__details:before,\n.application--dark .input-group.input-group--editable .input-group__details:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .input-group.input-group--disabled input {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 33%, transparent 0);\n}\n.application--dark .input-group .input-group--text-field__prefix,\n.application--dark .input-group .input-group--text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application--dark .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #424242 !important;\n}\n.application--dark .input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.1) !important;\n}\n.application--dark .input-group.input-group--selection-controls.radio,\n.application--dark .input-group.input-group--selection-controls.checkbox {\n  color: #80cbc4;\n}\n.application--dark .input-group.input-group--selection-controls.radio .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox .icon,\n.application--dark .input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application--dark .input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application--dark .input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application--dark .input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(255,255,255,0.7);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application--dark .input-group--slider .slider__track,\n.application--dark .input-group--slider .slider__track-fill {\n  background: rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider .slider__track__container:after {\n  border: 1px solid #fff;\n}\n.application--dark .input-group--slider .slider__tick {\n  border: 1px solid #fff;\n}\n.application--dark .input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #fff;\n}\n.application--dark .input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.2);\n}\n.application--dark .input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.3);\n}\n.application--dark .input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(255,255,255,0.2);\n  border: 0px solid transparent;\n}\n.application--dark .input-group--slider:focus .slider__track {\n  background: rgba(255,255,255,0.3);\n}\n.application--dark .list {\n  background: #424242;\n}\n.application--dark .list .list__tile:not(.list__tile--active) {\n  color: #fff;\n}\n.application--dark .list .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .list .subheader {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .list .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application--dark .tabs .tabs__item {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .tabs .tabs__item.tabs__item--active {\n  color: #fff;\n}\n.application--dark .tabs .tabs__item.tabs__item--disabled {\n  color: rgba(255,255,255,0.3);\n}\n.application--dark .tabs .icon--left,\n.application--dark .tabs .icon--right {\n  color: #fff;\n}\n.application--dark .stepper {\n  background: #303030;\n}\n.application--dark .stepper .stepper__step:not(.stepper__step--active):not(.stepper__step--complete):not(.stepper__step--error) .stepper__step__step {\n  background: rgba(255,255,255,0.5);\n}\n.application--dark .stepper .stepper__step__step {\n  color: #fff;\n}\n.application--dark .stepper .stepper__step__step .icon {\n  color: #fff;\n}\n.application--dark .stepper .stepper__header .divider {\n  background: rgba(255,255,255,0.12);\n}\n.application--dark .stepper .stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #fff;\n}\n.application--dark .stepper .stepper__step--editable:hover {\n  background: rgba(255,255,255,0.06);\n}\n.application--dark .stepper .stepper__step--editable:hover .stepper__label {\n  text-shadow: 0px 0px 0px #fff;\n}\n.application--dark .stepper .stepper__step--complete .stepper__label {\n  color: rgba(255,255,255,0.87);\n}\n.application--dark .stepper .stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(255,255,255,0.75);\n}\n.application--dark .stepper .stepper__label {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .stepper .stepper__label small {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(255,255,255,0.12);\n}\n.application--dark .subheader {\n  color: #fff;\n}\n.application--dark .table {\n  background-color: #424242;\n  color: #fff;\n}\n.application--dark .table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(255,255,255,0.12);\n}\n.application--dark .table thead th {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .table thead:last-of-type {\n  border-bottom: 1px solid rgba(255,255,255,0.12);\n}\n.application--dark .table tbody tr[active] {\n  background: #757575;\n}\n.application--dark .table tbody tr:hover {\n  background: #616161;\n}\n.application--dark .table tfoot tr {\n  border-top: 1px solid rgba(255,255,255,0.12);\n}\n.application--dark .datatable thead th.column.sortable i {\n  color: rgba(255,255,255,0.5);\n}\n.application--dark .datatable thead th.column.sortable:hover {\n  color: #fff;\n}\n.application--dark .datatable thead th.column.sortable.active {\n  color: #fff;\n}\n.application--dark .datatable thead th.column.sortable.active i {\n  color: #fff;\n}\n.application--dark .datatable .datatable__actions {\n  color: rgba(255,255,255,0.7);\n}\n.application--dark .datatable .datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(255,255,255,0.7) !important;\n  font-size: 12px;\n}\n.application--dark .datatable .datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(255,255,255,0.7) !important;\n}\n.application .theme--light.card {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.system-bar {\n  background-color: #e0e0e0;\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.system-bar .icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.system-bar--lights-out {\n  background-color: rgba(255,255,255,0.7) !important;\n}\n.application .theme--light.toolbar {\n  background-color: #f5f5f5;\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .btn {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .btn .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--light.toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application .theme--light.toolbar .btn.btn--icon,\n.application .theme--light.toolbar .btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.toolbar .toolbar__item {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.toolbar .toolbar__item:hover {\n  background: rgba(0,0,0,0.12);\n}\n.application .theme--light.navigation-drawer {\n  background-color: #fff;\n}\n.application .theme--light.navigation-drawer__border {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application .theme--light.navigation-drawer a,\n.application .theme--light.navigation-drawer .subheader,\n.application .theme--light.navigation-drawer .list {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.navigation-drawer .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.navigation-drawer .list {\n  background: #fff;\n}\n.application .theme--light.navigation-drawer .list__tile {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.navigation-drawer .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.navigation-drawer .list--group__header--active .list__tile:after,\n.application .theme--light.navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(0,0,0,0.12);\n}\n.application .theme--light.btn {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.btn .icon {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.btn--disabled {\n  box-shadow: none !important;\n  color: rgba(0,0,0,0.26);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--light.btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #f5f5f5;\n}\n.application .theme--light.btn.btn--icon,\n.application .theme--light.btn.btn--floating {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.btn-toggle .btn--selected {\n  background: #fafafa;\n}\n.application .theme--light.btn-toggle .btn[data-selected] {\n  opacity: 1;\n  background-color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]) {\n  border-right-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.icon:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group input,\n.application .theme--light.input-group textarea {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group input:disabled,\n.application .theme--light.input-group textarea:disabled {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group .input-group__details {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--textarea:not(.input-group--full-width) textarea {\n  border: 2px solid rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--dirty .input-group__selections__comma {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group:not(.input-group--error) label {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group:not(.input-group--error) .input-group__details:before {\n  background-color: rgba(0,0,0,0.42);\n}\n.application .theme--light.input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__append-icon,\n.application .theme--light.input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__prepend-icon {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover .input-group__details:before {\n  background-color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover.input-group--textarea:not(.input-group--full-width) textarea {\n  border-color: rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group .input-group__counter {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--overflow .input-group__input:before,\n.application .theme--light.input-group.input-group--segmented .input-group__input:before,\n.application .theme--light.input-group.input-group--editable .input-group__input:before,\n.application .theme--light.input-group.input-group--overflow .input-group__details:before,\n.application .theme--light.input-group.input-group--segmented .input-group__details:before,\n.application .theme--light.input-group.input-group--editable .input-group__details:before {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.input-group.input-group--disabled input {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(0,0,0,0.38) 0, rgba(0,0,0,0.38) 33%, transparent 0);\n}\n.application .theme--light.input-group .input-group--text-field__prefix,\n.application .theme--light.input-group .input-group--text-field__suffix {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #fafafa;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd !important;\n}\n.application .theme--light.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(0,0,0,0.12) !important;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio,\n.application .theme--light.input-group.input-group--selection-controls.checkbox {\n  color: #009688;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox .icon,\n.application .theme--light.input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application .theme--light.input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application .theme--light.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application .theme--light.input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(0,0,0,0.54);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application .theme--light.input-group--slider .slider__track,\n.application .theme--light.input-group--slider .slider__track-fill {\n  background: rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider .slider__track__container:after {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group--slider .slider__tick {\n  border: 1px solid rgba(0,0,0,0.87);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #000;\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.26);\n}\n.application .theme--light.input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(0,0,0,0.38);\n}\n.application .theme--light.input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(0,0,0,0.26);\n  border: 0px solid transparent;\n}\n.application .theme--light.input-group--slider:focus .slider__track {\n  background: rgba(0,0,0,0.38);\n}\n.application .theme--light.list {\n  background: #fff;\n}\n.application .theme--light.list .list__tile:not(.list__tile--active) {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.list .list__tile__sub-title {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.list .subheader {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.list .divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.divider {\n  background-color: rgba(0,0,0,0.12);\n}\n.application .theme--light.tabs .tabs__item {\n  color: rgba(0,0,0,0.7);\n}\n.application .theme--light.tabs .tabs__item.tabs__item--active {\n  color: #f57f17;\n}\n.application .theme--light.tabs .tabs__item.tabs__item--disabled {\n  color: rgba(0,0,0,0.26);\n}\n.application .theme--light.tabs .icon--left,\n.application .theme--light.tabs .icon--right {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.stepper {\n  background: #fff;\n}\n.application .theme--light.stepper .stepper__step:not(.stepper__step--active):not(.stepper__step--complete):not(.stepper__step--error) .stepper__step__step {\n  background: rgba(0,0,0,0.38);\n}\n.application .theme--light.stepper .stepper__step__step {\n  color: #fff;\n}\n.application .theme--light.stepper .stepper__step__step .icon {\n  color: #fff;\n}\n.application .theme--light.stepper .stepper__header .divider {\n  background: rgba(0,0,0,0.12);\n}\n.application .theme--light.stepper .stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n}\n.application .theme--light.stepper .stepper__step--editable:hover {\n  background: rgba(0,0,0,0.06);\n}\n.application .theme--light.stepper .stepper__step--editable:hover .stepper__label {\n  text-shadow: 0px 0px 0px #000;\n}\n.application .theme--light.stepper .stepper__step--complete .stepper__label {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.stepper .stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(0,0,0,0.54);\n}\n.application .theme--light.stepper .stepper__label {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.stepper .stepper__label small {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(0,0,0,0.12);\n}\n.application .theme--light.subheader {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.table {\n  background-color: #fff;\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\n.application .theme--light.table thead th {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.table thead:last-of-type {\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\n.application .theme--light.table tbody tr[active] {\n  background: #f5f5f5;\n}\n.application .theme--light.table tbody tr:hover {\n  background: #eee;\n}\n.application .theme--light.table tfoot tr {\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.application .theme--light.datatable thead th.column.sortable i {\n  color: rgba(0,0,0,0.38);\n}\n.application .theme--light.datatable thead th.column.sortable:hover {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.datatable thead th.column.sortable.active {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.datatable thead th.column.sortable.active i {\n  color: rgba(0,0,0,0.87);\n}\n.application .theme--light.datatable .datatable__actions {\n  color: rgba(0,0,0,0.54);\n}\n.application .theme--light.datatable .datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(0,0,0,0.54) !important;\n  font-size: 12px;\n}\n.application .theme--light.datatable .datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(0,0,0,0.54) !important;\n}\n.application .theme--dark.card {\n  background-color: #424242;\n  color: #fff;\n}\n.application .theme--dark.system-bar {\n  background-color: #000;\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.system-bar .icon {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.system-bar--lights-out {\n  background-color: rgba(0,0,0,0.2) !important;\n}\n.application .theme--dark.toolbar {\n  background-color: #212121;\n  color: #fff;\n}\n.application .theme--dark.toolbar .btn {\n  color: #fff;\n}\n.application .theme--dark.toolbar .btn .icon {\n  color: #fff;\n}\n.application .theme--dark.toolbar .btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--dark.toolbar .btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application .theme--dark.toolbar .btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application .theme--dark.toolbar .btn.btn--icon,\n.application .theme--dark.toolbar .btn.btn--floating {\n  color: #fff;\n}\n.application .theme--dark.toolbar .toolbar__item {\n  color: #fff;\n}\n.application .theme--dark.toolbar .toolbar__item:hover {\n  background: rgba(255,255,255,0.12);\n}\n.application .theme--dark.navigation-drawer {\n  background-color: #424242;\n}\n.application .theme--dark.navigation-drawer__border {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.navigation-drawer.navigation-drawer--right:after {\n  left: 0;\n  right: initial;\n}\n.application .theme--dark.navigation-drawer a,\n.application .theme--dark.navigation-drawer .subheader,\n.application .theme--dark.navigation-drawer .list {\n  color: #fff;\n}\n.application .theme--dark.navigation-drawer .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.navigation-drawer .list {\n  background: #424242;\n}\n.application .theme--dark.navigation-drawer .list__tile {\n  color: #fff;\n}\n.application .theme--dark.navigation-drawer .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.navigation-drawer .list--group__header--active .list__tile:after,\n.application .theme--dark.navigation-drawer .list--group__header--active + .list--group:after {\n  background: rgba(255,255,255,0.12);\n}\n.application .theme--dark.btn {\n  color: #fff;\n}\n.application .theme--dark.btn .icon {\n  color: #fff;\n}\n.application .theme--dark.btn--disabled {\n  box-shadow: none !important;\n  color: rgba(255,255,255,0.3);\n  pointer-events: none;\n  opacity: 0.4;\n}\n.application .theme--dark.btn--disabled:not(.btn--icon):not(.btn--flat) {\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application .theme--dark.btn:not(.btn--icon):not(.btn--flat) {\n  background-color: #212121;\n}\n.application .theme--dark.btn.btn--icon,\n.application .theme--dark.btn.btn--floating {\n  color: #fff;\n}\n.application .theme--dark.btn-toggle .btn--selected {\n  background: #303030;\n}\n.application .theme--dark.btn-toggle .btn[data-selected] {\n  opacity: 1;\n  background-color: rgba(255,255,255,0.12) !important;\n}\n.application .theme--dark.btn-toggle .btn[data-selected]:not(:last-child):not([data-only-child]) {\n  border-right-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.icon {\n  color: #fff;\n}\n.application .theme--dark.icon:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group input,\n.application .theme--dark.input-group textarea {\n  color: #fff;\n}\n.application .theme--dark.input-group input:disabled,\n.application .theme--dark.input-group textarea:disabled {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group .input-group__details {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--textarea:not(.input-group--full-width) textarea {\n  border: 2px solid rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--dirty .input-group__selections__comma {\n  color: #fff;\n}\n.application .theme--dark.input-group:not(.input-group--error) label {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group:not(.input-group--error) .input-group__details:before {\n  background-color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__append-icon,\n.application .theme--dark.input-group:not(.input-group--error):not(.input-group--focused) .input-group__input .input-group__prepend-icon {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover .input-group__details:before {\n  background-color: #fff;\n}\n.application .theme--dark.input-group:not(.input-group--error):not(.input-group--focused):not(.input-group--disabled):not(.input-group--overflow):not(.input-group--segmented):not(.input-group--editable):hover.input-group--textarea:not(.input-group--full-width) textarea {\n  border-color: #fff;\n}\n.application .theme--dark.input-group .input-group__counter {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--overflow .input-group__input:before,\n.application .theme--dark.input-group.input-group--segmented .input-group__input:before,\n.application .theme--dark.input-group.input-group--editable .input-group__input:before,\n.application .theme--dark.input-group.input-group--overflow .input-group__details:before,\n.application .theme--dark.input-group.input-group--segmented .input-group__details:before,\n.application .theme--dark.input-group.input-group--editable .input-group__details:before {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.input-group.input-group--disabled input {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-image: linear-gradient(to right, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 33%, transparent 0);\n}\n.application .theme--dark.input-group .input-group--text-field__prefix,\n.application .theme--dark.input-group .input-group--text-field__suffix {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  background-color: #bdbdbd;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:not(.input-group--selection-controls__ripple--active) {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active:after {\n  background-color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle--active {\n  color: inherit;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__ripple:after {\n  background-color: #424242 !important;\n}\n.application .theme--dark.input-group.input-group--selection-controls.switch.input-group--disabled .input-group--selection-controls__toggle {\n  color: rgba(255,255,255,0.1) !important;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox {\n  color: #80cbc4;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox .icon,\n.application .theme--dark.input-group.input-group--selection-controls.radio:not(.input-group--active) .input-group__input,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox:not(.input-group--active) .input-group__input {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--active .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--active .icon {\n  color: inherit;\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.input-group.input-group--selection-controls.radio.input-group--disabled .input-group__input .icon,\n.application .theme--dark.input-group.input-group--selection-controls.checkbox.input-group--disabled .input-group__input .icon {\n  color: inherit;\n}\n.application .theme--dark.input-group--slider label {\n  transform: none;\n  flex-basis: 56px;\n  color: rgba(255,255,255,0.7);\n  display: flex;\n  font-size: 18px;\n  align-items: center;\n}\n.application .theme--dark.input-group--slider .slider__track,\n.application .theme--dark.input-group--slider .slider__track-fill {\n  background: rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider .slider__track__container:after {\n  border: 1px solid #fff;\n}\n.application .theme--dark.input-group--slider .slider__tick {\n  border: 1px solid #fff;\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty) .slider__thumb--label {\n  background: rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty).input-group--ticks .slider__thumb-container .slider__thumb {\n  background: #fff;\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty):not(.input-group--ticks) .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.2);\n}\n.application .theme--dark.input-group--slider:not(.input-group--dirty):not(.input-group--ticks):focus .slider__thumb {\n  border: 4px solid rgba(255,255,255,0.3);\n}\n.application .theme--dark.input-group--slider.input-group--disabled:not(.input-group--ticks) .slider__thumb {\n  background: rgba(255,255,255,0.2);\n  border: 0px solid transparent;\n}\n.application .theme--dark.input-group--slider:focus .slider__track {\n  background: rgba(255,255,255,0.3);\n}\n.application .theme--dark.list {\n  background: #424242;\n}\n.application .theme--dark.list .list__tile:not(.list__tile--active) {\n  color: #fff;\n}\n.application .theme--dark.list .list__tile__sub-title {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.list .subheader {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.list .divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.divider {\n  background-color: rgba(255,255,255,0.12);\n}\n.application .theme--dark.tabs .tabs__item {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.tabs .tabs__item.tabs__item--active {\n  color: #fff;\n}\n.application .theme--dark.tabs .tabs__item.tabs__item--disabled {\n  color: rgba(255,255,255,0.3);\n}\n.application .theme--dark.tabs .icon--left,\n.application .theme--dark.tabs .icon--right {\n  color: #fff;\n}\n.application .theme--dark.stepper {\n  background: #303030;\n}\n.application .theme--dark.stepper .stepper__step:not(.stepper__step--active):not(.stepper__step--complete):not(.stepper__step--error) .stepper__step__step {\n  background: rgba(255,255,255,0.5);\n}\n.application .theme--dark.stepper .stepper__step__step {\n  color: #fff;\n}\n.application .theme--dark.stepper .stepper__step__step .icon {\n  color: #fff;\n}\n.application .theme--dark.stepper .stepper__header .divider {\n  background: rgba(255,255,255,0.12);\n}\n.application .theme--dark.stepper .stepper__step--active .stepper__label {\n  text-shadow: 0px 0px 0px #fff;\n}\n.application .theme--dark.stepper .stepper__step--editable:hover {\n  background: rgba(255,255,255,0.06);\n}\n.application .theme--dark.stepper .stepper__step--editable:hover .stepper__label {\n  text-shadow: 0px 0px 0px #fff;\n}\n.application .theme--dark.stepper .stepper__step--complete .stepper__label {\n  color: rgba(255,255,255,0.87);\n}\n.application .theme--dark.stepper .stepper__step--inactive.stepper__step--editable:hover .stepper__step__step {\n  background: rgba(255,255,255,0.75);\n}\n.application .theme--dark.stepper .stepper__label {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.stepper .stepper__label small {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.stepper--non-linear .stepper__step:not(.stepper__step--complete) .stepper__label {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.stepper--vertical .stepper__content:not(:last-child) {\n  border-left: 1px solid rgba(255,255,255,0.12);\n}\n.application .theme--dark.subheader {\n  color: #fff;\n}\n.application .theme--dark.table {\n  background-color: #424242;\n  color: #fff;\n}\n.application .theme--dark.table tr:not(:last-child) {\n  border-bottom: 1px solid rgba(255,255,255,0.12);\n}\n.application .theme--dark.table thead th {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.table thead:last-of-type {\n  border-bottom: 1px solid rgba(255,255,255,0.12);\n}\n.application .theme--dark.table tbody tr[active] {\n  background: #757575;\n}\n.application .theme--dark.table tbody tr:hover {\n  background: #616161;\n}\n.application .theme--dark.table tfoot tr {\n  border-top: 1px solid rgba(255,255,255,0.12);\n}\n.application .theme--dark.datatable thead th.column.sortable i {\n  color: rgba(255,255,255,0.5);\n}\n.application .theme--dark.datatable thead th.column.sortable:hover {\n  color: #fff;\n}\n.application .theme--dark.datatable thead th.column.sortable.active {\n  color: #fff;\n}\n.application .theme--dark.datatable thead th.column.sortable.active i {\n  color: #fff;\n}\n.application .theme--dark.datatable .datatable__actions {\n  color: rgba(255,255,255,0.7);\n}\n.application .theme--dark.datatable .datatable__actions__select .input-group--select .input-group__selections__comma {\n  color: rgba(255,255,255,0.7) !important;\n  font-size: 12px;\n}\n.application .theme--dark.datatable .datatable__actions__select .input-group--select .input-group__append-icon {\n  color: rgba(255,255,255,0.7) !important;\n}\n.primary {\n  background-color: #f57f17 !important;\n  border-color: #f57f17 !important;\n}\n.primary--text {\n  color: #f57f17 !important;\n}\n.primary--after:after {\n  background: #f57f17 !important;\n}\n.accent {\n  background-color: #448aff !important;\n  border-color: #448aff !important;\n}\n.accent--text {\n  color: #448aff !important;\n}\n.accent--after:after {\n  background: #448aff !important;\n}\n.secondary {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.secondary--text {\n  color: #424242 !important;\n}\n.secondary--after:after {\n  background: #424242 !important;\n}\n.info {\n  background-color: #2196f3 !important;\n  border-color: #2196f3 !important;\n}\n.info--text {\n  color: #2196f3 !important;\n}\n.info--after:after {\n  background: #2196f3 !important;\n}\n.warning {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n.warning--text {\n  color: #ffc107 !important;\n}\n.warning--after:after {\n  background: #ffc107 !important;\n}\n.error {\n  background-color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n.error--text {\n  color: #f44336 !important;\n}\n.error--after:after {\n  background: #f44336 !important;\n}\n.success {\n  background-color: #4caf50 !important;\n  border-color: #4caf50 !important;\n}\n.success--text {\n  color: #4caf50 !important;\n}\n.success--after:after {\n  background: #4caf50 !important;\n}\n.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.black--text {\n  color: #000 !important;\n}\n.black--after:after {\n  background: #000 !important;\n}\n.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.white--text {\n  color: #fff !important;\n}\n.white--after:after {\n  background: #fff !important;\n}\n.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.transparent--text {\n  color: transparent !important;\n}\n.transparent--after:after {\n  background: transparent !important;\n}\n.red {\n  background-color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n.red--text {\n  color: #f44336 !important;\n}\n.red--after:after {\n  background: #f44336 !important;\n}\n.red.lighten-5 {\n  background-color: #ffebee !important;\n  border-color: #ffebee !important;\n}\n.red.lighten-5--after:after {\n  background-color: #ffebee !important;\n}\n.red--text.text--lighten-5 {\n  color: #ffebee !important;\n}\n.red.lighten-4 {\n  background-color: #ffcdd2 !important;\n  border-color: #ffcdd2 !important;\n}\n.red.lighten-4--after:after {\n  background-color: #ffcdd2 !important;\n}\n.red--text.text--lighten-4 {\n  color: #ffcdd2 !important;\n}\n.red.lighten-3 {\n  background-color: #ef9a9a !important;\n  border-color: #ef9a9a !important;\n}\n.red.lighten-3--after:after {\n  background-color: #ef9a9a !important;\n}\n.red--text.text--lighten-3 {\n  color: #ef9a9a !important;\n}\n.red.lighten-2 {\n  background-color: #e57373 !important;\n  border-color: #e57373 !important;\n}\n.red.lighten-2--after:after {\n  background-color: #e57373 !important;\n}\n.red--text.text--lighten-2 {\n  color: #e57373 !important;\n}\n.red.lighten-1 {\n  background-color: #ef5350 !important;\n  border-color: #ef5350 !important;\n}\n.red.lighten-1--after:after {\n  background-color: #ef5350 !important;\n}\n.red--text.text--lighten-1 {\n  color: #ef5350 !important;\n}\n.red.darken-1 {\n  background-color: #e53935 !important;\n  border-color: #e53935 !important;\n}\n.red.darken-1--after:after {\n  background-color: #e53935 !important;\n}\n.red--text.text--darken-1 {\n  color: #e53935 !important;\n}\n.red.darken-2 {\n  background-color: #d32f2f !important;\n  border-color: #d32f2f !important;\n}\n.red.darken-2--after:after {\n  background-color: #d32f2f !important;\n}\n.red--text.text--darken-2 {\n  color: #d32f2f !important;\n}\n.red.darken-3 {\n  background-color: #c62828 !important;\n  border-color: #c62828 !important;\n}\n.red.darken-3--after:after {\n  background-color: #c62828 !important;\n}\n.red--text.text--darken-3 {\n  color: #c62828 !important;\n}\n.red.darken-4 {\n  background-color: #b71c1c !important;\n  border-color: #b71c1c !important;\n}\n.red.darken-4--after:after {\n  background-color: #b71c1c !important;\n}\n.red--text.text--darken-4 {\n  color: #b71c1c !important;\n}\n.red.accent-1 {\n  background-color: #ff8a80 !important;\n  border-color: #ff8a80 !important;\n}\n.red.accent-1--after:after {\n  background-color: #ff8a80 !important;\n}\n.red--text.text--accent-1 {\n  color: #ff8a80 !important;\n}\n.red.accent-2 {\n  background-color: #ff5252 !important;\n  border-color: #ff5252 !important;\n}\n.red.accent-2--after:after {\n  background-color: #ff5252 !important;\n}\n.red--text.text--accent-2 {\n  color: #ff5252 !important;\n}\n.red.accent-3 {\n  background-color: #ff1744 !important;\n  border-color: #ff1744 !important;\n}\n.red.accent-3--after:after {\n  background-color: #ff1744 !important;\n}\n.red--text.text--accent-3 {\n  color: #ff1744 !important;\n}\n.red.accent-4 {\n  background-color: #d50000 !important;\n  border-color: #d50000 !important;\n}\n.red.accent-4--after:after {\n  background-color: #d50000 !important;\n}\n.red--text.text--accent-4 {\n  color: #d50000 !important;\n}\n.pink {\n  background-color: #e91e63 !important;\n  border-color: #e91e63 !important;\n}\n.pink--text {\n  color: #e91e63 !important;\n}\n.pink--after:after {\n  background: #e91e63 !important;\n}\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n  border-color: #fce4ec !important;\n}\n.pink.lighten-5--after:after {\n  background-color: #fce4ec !important;\n}\n.pink--text.text--lighten-5 {\n  color: #fce4ec !important;\n}\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n  border-color: #f8bbd0 !important;\n}\n.pink.lighten-4--after:after {\n  background-color: #f8bbd0 !important;\n}\n.pink--text.text--lighten-4 {\n  color: #f8bbd0 !important;\n}\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n  border-color: #f48fb1 !important;\n}\n.pink.lighten-3--after:after {\n  background-color: #f48fb1 !important;\n}\n.pink--text.text--lighten-3 {\n  color: #f48fb1 !important;\n}\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n  border-color: #f06292 !important;\n}\n.pink.lighten-2--after:after {\n  background-color: #f06292 !important;\n}\n.pink--text.text--lighten-2 {\n  color: #f06292 !important;\n}\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n  border-color: #ec407a !important;\n}\n.pink.lighten-1--after:after {\n  background-color: #ec407a !important;\n}\n.pink--text.text--lighten-1 {\n  color: #ec407a !important;\n}\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n  border-color: #d81b60 !important;\n}\n.pink.darken-1--after:after {\n  background-color: #d81b60 !important;\n}\n.pink--text.text--darken-1 {\n  color: #d81b60 !important;\n}\n.pink.darken-2 {\n  background-color: #c2185b !important;\n  border-color: #c2185b !important;\n}\n.pink.darken-2--after:after {\n  background-color: #c2185b !important;\n}\n.pink--text.text--darken-2 {\n  color: #c2185b !important;\n}\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n  border-color: #ad1457 !important;\n}\n.pink.darken-3--after:after {\n  background-color: #ad1457 !important;\n}\n.pink--text.text--darken-3 {\n  color: #ad1457 !important;\n}\n.pink.darken-4 {\n  background-color: #880e4f !important;\n  border-color: #880e4f !important;\n}\n.pink.darken-4--after:after {\n  background-color: #880e4f !important;\n}\n.pink--text.text--darken-4 {\n  color: #880e4f !important;\n}\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n  border-color: #ff80ab !important;\n}\n.pink.accent-1--after:after {\n  background-color: #ff80ab !important;\n}\n.pink--text.text--accent-1 {\n  color: #ff80ab !important;\n}\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n  border-color: #ff4081 !important;\n}\n.pink.accent-2--after:after {\n  background-color: #ff4081 !important;\n}\n.pink--text.text--accent-2 {\n  color: #ff4081 !important;\n}\n.pink.accent-3 {\n  background-color: #f50057 !important;\n  border-color: #f50057 !important;\n}\n.pink.accent-3--after:after {\n  background-color: #f50057 !important;\n}\n.pink--text.text--accent-3 {\n  color: #f50057 !important;\n}\n.pink.accent-4 {\n  background-color: #c51162 !important;\n  border-color: #c51162 !important;\n}\n.pink.accent-4--after:after {\n  background-color: #c51162 !important;\n}\n.pink--text.text--accent-4 {\n  color: #c51162 !important;\n}\n.purple {\n  background-color: #9c27b0 !important;\n  border-color: #9c27b0 !important;\n}\n.purple--text {\n  color: #9c27b0 !important;\n}\n.purple--after:after {\n  background: #9c27b0 !important;\n}\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n  border-color: #f3e5f5 !important;\n}\n.purple.lighten-5--after:after {\n  background-color: #f3e5f5 !important;\n}\n.purple--text.text--lighten-5 {\n  color: #f3e5f5 !important;\n}\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n  border-color: #e1bee7 !important;\n}\n.purple.lighten-4--after:after {\n  background-color: #e1bee7 !important;\n}\n.purple--text.text--lighten-4 {\n  color: #e1bee7 !important;\n}\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n  border-color: #ce93d8 !important;\n}\n.purple.lighten-3--after:after {\n  background-color: #ce93d8 !important;\n}\n.purple--text.text--lighten-3 {\n  color: #ce93d8 !important;\n}\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n  border-color: #ba68c8 !important;\n}\n.purple.lighten-2--after:after {\n  background-color: #ba68c8 !important;\n}\n.purple--text.text--lighten-2 {\n  color: #ba68c8 !important;\n}\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n  border-color: #ab47bc !important;\n}\n.purple.lighten-1--after:after {\n  background-color: #ab47bc !important;\n}\n.purple--text.text--lighten-1 {\n  color: #ab47bc !important;\n}\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n  border-color: #8e24aa !important;\n}\n.purple.darken-1--after:after {\n  background-color: #8e24aa !important;\n}\n.purple--text.text--darken-1 {\n  color: #8e24aa !important;\n}\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n  border-color: #7b1fa2 !important;\n}\n.purple.darken-2--after:after {\n  background-color: #7b1fa2 !important;\n}\n.purple--text.text--darken-2 {\n  color: #7b1fa2 !important;\n}\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n  border-color: #6a1b9a !important;\n}\n.purple.darken-3--after:after {\n  background-color: #6a1b9a !important;\n}\n.purple--text.text--darken-3 {\n  color: #6a1b9a !important;\n}\n.purple.darken-4 {\n  background-color: #4a148c !important;\n  border-color: #4a148c !important;\n}\n.purple.darken-4--after:after {\n  background-color: #4a148c !important;\n}\n.purple--text.text--darken-4 {\n  color: #4a148c !important;\n}\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n  border-color: #ea80fc !important;\n}\n.purple.accent-1--after:after {\n  background-color: #ea80fc !important;\n}\n.purple--text.text--accent-1 {\n  color: #ea80fc !important;\n}\n.purple.accent-2 {\n  background-color: #e040fb !important;\n  border-color: #e040fb !important;\n}\n.purple.accent-2--after:after {\n  background-color: #e040fb !important;\n}\n.purple--text.text--accent-2 {\n  color: #e040fb !important;\n}\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n  border-color: #d500f9 !important;\n}\n.purple.accent-3--after:after {\n  background-color: #d500f9 !important;\n}\n.purple--text.text--accent-3 {\n  color: #d500f9 !important;\n}\n.purple.accent-4 {\n  background-color: #a0f !important;\n  border-color: #a0f !important;\n}\n.purple.accent-4--after:after {\n  background-color: #a0f !important;\n}\n.purple--text.text--accent-4 {\n  color: #a0f !important;\n}\n.deep-purple {\n  background-color: #673ab7 !important;\n  border-color: #673ab7 !important;\n}\n.deep-purple--text {\n  color: #673ab7 !important;\n}\n.deep-purple--after:after {\n  background: #673ab7 !important;\n}\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n  border-color: #ede7f6 !important;\n}\n.deep-purple.lighten-5--after:after {\n  background-color: #ede7f6 !important;\n}\n.deep-purple--text.text--lighten-5 {\n  color: #ede7f6 !important;\n}\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n  border-color: #d1c4e9 !important;\n}\n.deep-purple.lighten-4--after:after {\n  background-color: #d1c4e9 !important;\n}\n.deep-purple--text.text--lighten-4 {\n  color: #d1c4e9 !important;\n}\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n  border-color: #b39ddb !important;\n}\n.deep-purple.lighten-3--after:after {\n  background-color: #b39ddb !important;\n}\n.deep-purple--text.text--lighten-3 {\n  color: #b39ddb !important;\n}\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n  border-color: #9575cd !important;\n}\n.deep-purple.lighten-2--after:after {\n  background-color: #9575cd !important;\n}\n.deep-purple--text.text--lighten-2 {\n  color: #9575cd !important;\n}\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n  border-color: #7e57c2 !important;\n}\n.deep-purple.lighten-1--after:after {\n  background-color: #7e57c2 !important;\n}\n.deep-purple--text.text--lighten-1 {\n  color: #7e57c2 !important;\n}\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n  border-color: #5e35b1 !important;\n}\n.deep-purple.darken-1--after:after {\n  background-color: #5e35b1 !important;\n}\n.deep-purple--text.text--darken-1 {\n  color: #5e35b1 !important;\n}\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n  border-color: #512da8 !important;\n}\n.deep-purple.darken-2--after:after {\n  background-color: #512da8 !important;\n}\n.deep-purple--text.text--darken-2 {\n  color: #512da8 !important;\n}\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n  border-color: #4527a0 !important;\n}\n.deep-purple.darken-3--after:after {\n  background-color: #4527a0 !important;\n}\n.deep-purple--text.text--darken-3 {\n  color: #4527a0 !important;\n}\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n  border-color: #311b92 !important;\n}\n.deep-purple.darken-4--after:after {\n  background-color: #311b92 !important;\n}\n.deep-purple--text.text--darken-4 {\n  color: #311b92 !important;\n}\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n  border-color: #b388ff !important;\n}\n.deep-purple.accent-1--after:after {\n  background-color: #b388ff !important;\n}\n.deep-purple--text.text--accent-1 {\n  color: #b388ff !important;\n}\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n  border-color: #7c4dff !important;\n}\n.deep-purple.accent-2--after:after {\n  background-color: #7c4dff !important;\n}\n.deep-purple--text.text--accent-2 {\n  color: #7c4dff !important;\n}\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n  border-color: #651fff !important;\n}\n.deep-purple.accent-3--after:after {\n  background-color: #651fff !important;\n}\n.deep-purple--text.text--accent-3 {\n  color: #651fff !important;\n}\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n  border-color: #6200ea !important;\n}\n.deep-purple.accent-4--after:after {\n  background-color: #6200ea !important;\n}\n.deep-purple--text.text--accent-4 {\n  color: #6200ea !important;\n}\n.indigo {\n  background-color: #3f51b5 !important;\n  border-color: #3f51b5 !important;\n}\n.indigo--text {\n  color: #3f51b5 !important;\n}\n.indigo--after:after {\n  background: #3f51b5 !important;\n}\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n  border-color: #e8eaf6 !important;\n}\n.indigo.lighten-5--after:after {\n  background-color: #e8eaf6 !important;\n}\n.indigo--text.text--lighten-5 {\n  color: #e8eaf6 !important;\n}\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n  border-color: #c5cae9 !important;\n}\n.indigo.lighten-4--after:after {\n  background-color: #c5cae9 !important;\n}\n.indigo--text.text--lighten-4 {\n  color: #c5cae9 !important;\n}\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n  border-color: #9fa8da !important;\n}\n.indigo.lighten-3--after:after {\n  background-color: #9fa8da !important;\n}\n.indigo--text.text--lighten-3 {\n  color: #9fa8da !important;\n}\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n  border-color: #7986cb !important;\n}\n.indigo.lighten-2--after:after {\n  background-color: #7986cb !important;\n}\n.indigo--text.text--lighten-2 {\n  color: #7986cb !important;\n}\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n  border-color: #5c6bc0 !important;\n}\n.indigo.lighten-1--after:after {\n  background-color: #5c6bc0 !important;\n}\n.indigo--text.text--lighten-1 {\n  color: #5c6bc0 !important;\n}\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n  border-color: #3949ab !important;\n}\n.indigo.darken-1--after:after {\n  background-color: #3949ab !important;\n}\n.indigo--text.text--darken-1 {\n  color: #3949ab !important;\n}\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n  border-color: #303f9f !important;\n}\n.indigo.darken-2--after:after {\n  background-color: #303f9f !important;\n}\n.indigo--text.text--darken-2 {\n  color: #303f9f !important;\n}\n.indigo.darken-3 {\n  background-color: #283593 !important;\n  border-color: #283593 !important;\n}\n.indigo.darken-3--after:after {\n  background-color: #283593 !important;\n}\n.indigo--text.text--darken-3 {\n  color: #283593 !important;\n}\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n  border-color: #1a237e !important;\n}\n.indigo.darken-4--after:after {\n  background-color: #1a237e !important;\n}\n.indigo--text.text--darken-4 {\n  color: #1a237e !important;\n}\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n  border-color: #8c9eff !important;\n}\n.indigo.accent-1--after:after {\n  background-color: #8c9eff !important;\n}\n.indigo--text.text--accent-1 {\n  color: #8c9eff !important;\n}\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n  border-color: #536dfe !important;\n}\n.indigo.accent-2--after:after {\n  background-color: #536dfe !important;\n}\n.indigo--text.text--accent-2 {\n  color: #536dfe !important;\n}\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n  border-color: #3d5afe !important;\n}\n.indigo.accent-3--after:after {\n  background-color: #3d5afe !important;\n}\n.indigo--text.text--accent-3 {\n  color: #3d5afe !important;\n}\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n  border-color: #304ffe !important;\n}\n.indigo.accent-4--after:after {\n  background-color: #304ffe !important;\n}\n.indigo--text.text--accent-4 {\n  color: #304ffe !important;\n}\n.blue {\n  background-color: #2196f3 !important;\n  border-color: #2196f3 !important;\n}\n.blue--text {\n  color: #2196f3 !important;\n}\n.blue--after:after {\n  background: #2196f3 !important;\n}\n.blue.lighten-5 {\n  background-color: #e3f2fd !important;\n  border-color: #e3f2fd !important;\n}\n.blue.lighten-5--after:after {\n  background-color: #e3f2fd !important;\n}\n.blue--text.text--lighten-5 {\n  color: #e3f2fd !important;\n}\n.blue.lighten-4 {\n  background-color: #bbdefb !important;\n  border-color: #bbdefb !important;\n}\n.blue.lighten-4--after:after {\n  background-color: #bbdefb !important;\n}\n.blue--text.text--lighten-4 {\n  color: #bbdefb !important;\n}\n.blue.lighten-3 {\n  background-color: #90caf9 !important;\n  border-color: #90caf9 !important;\n}\n.blue.lighten-3--after:after {\n  background-color: #90caf9 !important;\n}\n.blue--text.text--lighten-3 {\n  color: #90caf9 !important;\n}\n.blue.lighten-2 {\n  background-color: #64b5f6 !important;\n  border-color: #64b5f6 !important;\n}\n.blue.lighten-2--after:after {\n  background-color: #64b5f6 !important;\n}\n.blue--text.text--lighten-2 {\n  color: #64b5f6 !important;\n}\n.blue.lighten-1 {\n  background-color: #42a5f5 !important;\n  border-color: #42a5f5 !important;\n}\n.blue.lighten-1--after:after {\n  background-color: #42a5f5 !important;\n}\n.blue--text.text--lighten-1 {\n  color: #42a5f5 !important;\n}\n.blue.darken-1 {\n  background-color: #1e88e5 !important;\n  border-color: #1e88e5 !important;\n}\n.blue.darken-1--after:after {\n  background-color: #1e88e5 !important;\n}\n.blue--text.text--darken-1 {\n  color: #1e88e5 !important;\n}\n.blue.darken-2 {\n  background-color: #1976d2 !important;\n  border-color: #1976d2 !important;\n}\n.blue.darken-2--after:after {\n  background-color: #1976d2 !important;\n}\n.blue--text.text--darken-2 {\n  color: #1976d2 !important;\n}\n.blue.darken-3 {\n  background-color: #1565c0 !important;\n  border-color: #1565c0 !important;\n}\n.blue.darken-3--after:after {\n  background-color: #1565c0 !important;\n}\n.blue--text.text--darken-3 {\n  color: #1565c0 !important;\n}\n.blue.darken-4 {\n  background-color: #0d47a1 !important;\n  border-color: #0d47a1 !important;\n}\n.blue.darken-4--after:after {\n  background-color: #0d47a1 !important;\n}\n.blue--text.text--darken-4 {\n  color: #0d47a1 !important;\n}\n.blue.accent-1 {\n  background-color: #82b1ff !important;\n  border-color: #82b1ff !important;\n}\n.blue.accent-1--after:after {\n  background-color: #82b1ff !important;\n}\n.blue--text.text--accent-1 {\n  color: #82b1ff !important;\n}\n.blue.accent-2 {\n  background-color: #448aff !important;\n  border-color: #448aff !important;\n}\n.blue.accent-2--after:after {\n  background-color: #448aff !important;\n}\n.blue--text.text--accent-2 {\n  color: #448aff !important;\n}\n.blue.accent-3 {\n  background-color: #2979ff !important;\n  border-color: #2979ff !important;\n}\n.blue.accent-3--after:after {\n  background-color: #2979ff !important;\n}\n.blue--text.text--accent-3 {\n  color: #2979ff !important;\n}\n.blue.accent-4 {\n  background-color: #2962ff !important;\n  border-color: #2962ff !important;\n}\n.blue.accent-4--after:after {\n  background-color: #2962ff !important;\n}\n.blue--text.text--accent-4 {\n  color: #2962ff !important;\n}\n.light-blue {\n  background-color: #03a9f4 !important;\n  border-color: #03a9f4 !important;\n}\n.light-blue--text {\n  color: #03a9f4 !important;\n}\n.light-blue--after:after {\n  background: #03a9f4 !important;\n}\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n  border-color: #e1f5fe !important;\n}\n.light-blue.lighten-5--after:after {\n  background-color: #e1f5fe !important;\n}\n.light-blue--text.text--lighten-5 {\n  color: #e1f5fe !important;\n}\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n  border-color: #b3e5fc !important;\n}\n.light-blue.lighten-4--after:after {\n  background-color: #b3e5fc !important;\n}\n.light-blue--text.text--lighten-4 {\n  color: #b3e5fc !important;\n}\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n  border-color: #81d4fa !important;\n}\n.light-blue.lighten-3--after:after {\n  background-color: #81d4fa !important;\n}\n.light-blue--text.text--lighten-3 {\n  color: #81d4fa !important;\n}\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n  border-color: #4fc3f7 !important;\n}\n.light-blue.lighten-2--after:after {\n  background-color: #4fc3f7 !important;\n}\n.light-blue--text.text--lighten-2 {\n  color: #4fc3f7 !important;\n}\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n  border-color: #29b6f6 !important;\n}\n.light-blue.lighten-1--after:after {\n  background-color: #29b6f6 !important;\n}\n.light-blue--text.text--lighten-1 {\n  color: #29b6f6 !important;\n}\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n  border-color: #039be5 !important;\n}\n.light-blue.darken-1--after:after {\n  background-color: #039be5 !important;\n}\n.light-blue--text.text--darken-1 {\n  color: #039be5 !important;\n}\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n  border-color: #0288d1 !important;\n}\n.light-blue.darken-2--after:after {\n  background-color: #0288d1 !important;\n}\n.light-blue--text.text--darken-2 {\n  color: #0288d1 !important;\n}\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n  border-color: #0277bd !important;\n}\n.light-blue.darken-3--after:after {\n  background-color: #0277bd !important;\n}\n.light-blue--text.text--darken-3 {\n  color: #0277bd !important;\n}\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n  border-color: #01579b !important;\n}\n.light-blue.darken-4--after:after {\n  background-color: #01579b !important;\n}\n.light-blue--text.text--darken-4 {\n  color: #01579b !important;\n}\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n  border-color: #80d8ff !important;\n}\n.light-blue.accent-1--after:after {\n  background-color: #80d8ff !important;\n}\n.light-blue--text.text--accent-1 {\n  color: #80d8ff !important;\n}\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n  border-color: #40c4ff !important;\n}\n.light-blue.accent-2--after:after {\n  background-color: #40c4ff !important;\n}\n.light-blue--text.text--accent-2 {\n  color: #40c4ff !important;\n}\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n  border-color: #00b0ff !important;\n}\n.light-blue.accent-3--after:after {\n  background-color: #00b0ff !important;\n}\n.light-blue--text.text--accent-3 {\n  color: #00b0ff !important;\n}\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n  border-color: #0091ea !important;\n}\n.light-blue.accent-4--after:after {\n  background-color: #0091ea !important;\n}\n.light-blue--text.text--accent-4 {\n  color: #0091ea !important;\n}\n.cyan {\n  background-color: #00bcd4 !important;\n  border-color: #00bcd4 !important;\n}\n.cyan--text {\n  color: #00bcd4 !important;\n}\n.cyan--after:after {\n  background: #00bcd4 !important;\n}\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n  border-color: #e0f7fa !important;\n}\n.cyan.lighten-5--after:after {\n  background-color: #e0f7fa !important;\n}\n.cyan--text.text--lighten-5 {\n  color: #e0f7fa !important;\n}\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n  border-color: #b2ebf2 !important;\n}\n.cyan.lighten-4--after:after {\n  background-color: #b2ebf2 !important;\n}\n.cyan--text.text--lighten-4 {\n  color: #b2ebf2 !important;\n}\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n  border-color: #80deea !important;\n}\n.cyan.lighten-3--after:after {\n  background-color: #80deea !important;\n}\n.cyan--text.text--lighten-3 {\n  color: #80deea !important;\n}\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n  border-color: #4dd0e1 !important;\n}\n.cyan.lighten-2--after:after {\n  background-color: #4dd0e1 !important;\n}\n.cyan--text.text--lighten-2 {\n  color: #4dd0e1 !important;\n}\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n  border-color: #26c6da !important;\n}\n.cyan.lighten-1--after:after {\n  background-color: #26c6da !important;\n}\n.cyan--text.text--lighten-1 {\n  color: #26c6da !important;\n}\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n  border-color: #00acc1 !important;\n}\n.cyan.darken-1--after:after {\n  background-color: #00acc1 !important;\n}\n.cyan--text.text--darken-1 {\n  color: #00acc1 !important;\n}\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n  border-color: #0097a7 !important;\n}\n.cyan.darken-2--after:after {\n  background-color: #0097a7 !important;\n}\n.cyan--text.text--darken-2 {\n  color: #0097a7 !important;\n}\n.cyan.darken-3 {\n  background-color: #00838f !important;\n  border-color: #00838f !important;\n}\n.cyan.darken-3--after:after {\n  background-color: #00838f !important;\n}\n.cyan--text.text--darken-3 {\n  color: #00838f !important;\n}\n.cyan.darken-4 {\n  background-color: #006064 !important;\n  border-color: #006064 !important;\n}\n.cyan.darken-4--after:after {\n  background-color: #006064 !important;\n}\n.cyan--text.text--darken-4 {\n  color: #006064 !important;\n}\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n  border-color: #84ffff !important;\n}\n.cyan.accent-1--after:after {\n  background-color: #84ffff !important;\n}\n.cyan--text.text--accent-1 {\n  color: #84ffff !important;\n}\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n  border-color: #18ffff !important;\n}\n.cyan.accent-2--after:after {\n  background-color: #18ffff !important;\n}\n.cyan--text.text--accent-2 {\n  color: #18ffff !important;\n}\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n  border-color: #00e5ff !important;\n}\n.cyan.accent-3--after:after {\n  background-color: #00e5ff !important;\n}\n.cyan--text.text--accent-3 {\n  color: #00e5ff !important;\n}\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n  border-color: #00b8d4 !important;\n}\n.cyan.accent-4--after:after {\n  background-color: #00b8d4 !important;\n}\n.cyan--text.text--accent-4 {\n  color: #00b8d4 !important;\n}\n.teal {\n  background-color: #009688 !important;\n  border-color: #009688 !important;\n}\n.teal--text {\n  color: #009688 !important;\n}\n.teal--after:after {\n  background: #009688 !important;\n}\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n  border-color: #e0f2f1 !important;\n}\n.teal.lighten-5--after:after {\n  background-color: #e0f2f1 !important;\n}\n.teal--text.text--lighten-5 {\n  color: #e0f2f1 !important;\n}\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n  border-color: #b2dfdb !important;\n}\n.teal.lighten-4--after:after {\n  background-color: #b2dfdb !important;\n}\n.teal--text.text--lighten-4 {\n  color: #b2dfdb !important;\n}\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n  border-color: #80cbc4 !important;\n}\n.teal.lighten-3--after:after {\n  background-color: #80cbc4 !important;\n}\n.teal--text.text--lighten-3 {\n  color: #80cbc4 !important;\n}\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n  border-color: #4db6ac !important;\n}\n.teal.lighten-2--after:after {\n  background-color: #4db6ac !important;\n}\n.teal--text.text--lighten-2 {\n  color: #4db6ac !important;\n}\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n  border-color: #26a69a !important;\n}\n.teal.lighten-1--after:after {\n  background-color: #26a69a !important;\n}\n.teal--text.text--lighten-1 {\n  color: #26a69a !important;\n}\n.teal.darken-1 {\n  background-color: #00897b !important;\n  border-color: #00897b !important;\n}\n.teal.darken-1--after:after {\n  background-color: #00897b !important;\n}\n.teal--text.text--darken-1 {\n  color: #00897b !important;\n}\n.teal.darken-2 {\n  background-color: #00796b !important;\n  border-color: #00796b !important;\n}\n.teal.darken-2--after:after {\n  background-color: #00796b !important;\n}\n.teal--text.text--darken-2 {\n  color: #00796b !important;\n}\n.teal.darken-3 {\n  background-color: #00695c !important;\n  border-color: #00695c !important;\n}\n.teal.darken-3--after:after {\n  background-color: #00695c !important;\n}\n.teal--text.text--darken-3 {\n  color: #00695c !important;\n}\n.teal.darken-4 {\n  background-color: #004d40 !important;\n  border-color: #004d40 !important;\n}\n.teal.darken-4--after:after {\n  background-color: #004d40 !important;\n}\n.teal--text.text--darken-4 {\n  color: #004d40 !important;\n}\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n  border-color: #a7ffeb !important;\n}\n.teal.accent-1--after:after {\n  background-color: #a7ffeb !important;\n}\n.teal--text.text--accent-1 {\n  color: #a7ffeb !important;\n}\n.teal.accent-2 {\n  background-color: #64ffda !important;\n  border-color: #64ffda !important;\n}\n.teal.accent-2--after:after {\n  background-color: #64ffda !important;\n}\n.teal--text.text--accent-2 {\n  color: #64ffda !important;\n}\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n  border-color: #1de9b6 !important;\n}\n.teal.accent-3--after:after {\n  background-color: #1de9b6 !important;\n}\n.teal--text.text--accent-3 {\n  color: #1de9b6 !important;\n}\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n  border-color: #00bfa5 !important;\n}\n.teal.accent-4--after:after {\n  background-color: #00bfa5 !important;\n}\n.teal--text.text--accent-4 {\n  color: #00bfa5 !important;\n}\n.green {\n  background-color: #4caf50 !important;\n  border-color: #4caf50 !important;\n}\n.green--text {\n  color: #4caf50 !important;\n}\n.green--after:after {\n  background: #4caf50 !important;\n}\n.green.lighten-5 {\n  background-color: #e8f5e9 !important;\n  border-color: #e8f5e9 !important;\n}\n.green.lighten-5--after:after {\n  background-color: #e8f5e9 !important;\n}\n.green--text.text--lighten-5 {\n  color: #e8f5e9 !important;\n}\n.green.lighten-4 {\n  background-color: #c8e6c9 !important;\n  border-color: #c8e6c9 !important;\n}\n.green.lighten-4--after:after {\n  background-color: #c8e6c9 !important;\n}\n.green--text.text--lighten-4 {\n  color: #c8e6c9 !important;\n}\n.green.lighten-3 {\n  background-color: #a5d6a7 !important;\n  border-color: #a5d6a7 !important;\n}\n.green.lighten-3--after:after {\n  background-color: #a5d6a7 !important;\n}\n.green--text.text--lighten-3 {\n  color: #a5d6a7 !important;\n}\n.green.lighten-2 {\n  background-color: #81c784 !important;\n  border-color: #81c784 !important;\n}\n.green.lighten-2--after:after {\n  background-color: #81c784 !important;\n}\n.green--text.text--lighten-2 {\n  color: #81c784 !important;\n}\n.green.lighten-1 {\n  background-color: #66bb6a !important;\n  border-color: #66bb6a !important;\n}\n.green.lighten-1--after:after {\n  background-color: #66bb6a !important;\n}\n.green--text.text--lighten-1 {\n  color: #66bb6a !important;\n}\n.green.darken-1 {\n  background-color: #43a047 !important;\n  border-color: #43a047 !important;\n}\n.green.darken-1--after:after {\n  background-color: #43a047 !important;\n}\n.green--text.text--darken-1 {\n  color: #43a047 !important;\n}\n.green.darken-2 {\n  background-color: #388e3c !important;\n  border-color: #388e3c !important;\n}\n.green.darken-2--after:after {\n  background-color: #388e3c !important;\n}\n.green--text.text--darken-2 {\n  color: #388e3c !important;\n}\n.green.darken-3 {\n  background-color: #2e7d32 !important;\n  border-color: #2e7d32 !important;\n}\n.green.darken-3--after:after {\n  background-color: #2e7d32 !important;\n}\n.green--text.text--darken-3 {\n  color: #2e7d32 !important;\n}\n.green.darken-4 {\n  background-color: #1b5e20 !important;\n  border-color: #1b5e20 !important;\n}\n.green.darken-4--after:after {\n  background-color: #1b5e20 !important;\n}\n.green--text.text--darken-4 {\n  color: #1b5e20 !important;\n}\n.green.accent-1 {\n  background-color: #b9f6ca !important;\n  border-color: #b9f6ca !important;\n}\n.green.accent-1--after:after {\n  background-color: #b9f6ca !important;\n}\n.green--text.text--accent-1 {\n  color: #b9f6ca !important;\n}\n.green.accent-2 {\n  background-color: #69f0ae !important;\n  border-color: #69f0ae !important;\n}\n.green.accent-2--after:after {\n  background-color: #69f0ae !important;\n}\n.green--text.text--accent-2 {\n  color: #69f0ae !important;\n}\n.green.accent-3 {\n  background-color: #00e676 !important;\n  border-color: #00e676 !important;\n}\n.green.accent-3--after:after {\n  background-color: #00e676 !important;\n}\n.green--text.text--accent-3 {\n  color: #00e676 !important;\n}\n.green.accent-4 {\n  background-color: #00c853 !important;\n  border-color: #00c853 !important;\n}\n.green.accent-4--after:after {\n  background-color: #00c853 !important;\n}\n.green--text.text--accent-4 {\n  color: #00c853 !important;\n}\n.light-green {\n  background-color: #8bc34a !important;\n  border-color: #8bc34a !important;\n}\n.light-green--text {\n  color: #8bc34a !important;\n}\n.light-green--after:after {\n  background: #8bc34a !important;\n}\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n  border-color: #f1f8e9 !important;\n}\n.light-green.lighten-5--after:after {\n  background-color: #f1f8e9 !important;\n}\n.light-green--text.text--lighten-5 {\n  color: #f1f8e9 !important;\n}\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n  border-color: #dcedc8 !important;\n}\n.light-green.lighten-4--after:after {\n  background-color: #dcedc8 !important;\n}\n.light-green--text.text--lighten-4 {\n  color: #dcedc8 !important;\n}\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n  border-color: #c5e1a5 !important;\n}\n.light-green.lighten-3--after:after {\n  background-color: #c5e1a5 !important;\n}\n.light-green--text.text--lighten-3 {\n  color: #c5e1a5 !important;\n}\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n  border-color: #aed581 !important;\n}\n.light-green.lighten-2--after:after {\n  background-color: #aed581 !important;\n}\n.light-green--text.text--lighten-2 {\n  color: #aed581 !important;\n}\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n  border-color: #9ccc65 !important;\n}\n.light-green.lighten-1--after:after {\n  background-color: #9ccc65 !important;\n}\n.light-green--text.text--lighten-1 {\n  color: #9ccc65 !important;\n}\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n  border-color: #7cb342 !important;\n}\n.light-green.darken-1--after:after {\n  background-color: #7cb342 !important;\n}\n.light-green--text.text--darken-1 {\n  color: #7cb342 !important;\n}\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n  border-color: #689f38 !important;\n}\n.light-green.darken-2--after:after {\n  background-color: #689f38 !important;\n}\n.light-green--text.text--darken-2 {\n  color: #689f38 !important;\n}\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n  border-color: #558b2f !important;\n}\n.light-green.darken-3--after:after {\n  background-color: #558b2f !important;\n}\n.light-green--text.text--darken-3 {\n  color: #558b2f !important;\n}\n.light-green.darken-4 {\n  background-color: #33691e !important;\n  border-color: #33691e !important;\n}\n.light-green.darken-4--after:after {\n  background-color: #33691e !important;\n}\n.light-green--text.text--darken-4 {\n  color: #33691e !important;\n}\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n  border-color: #ccff90 !important;\n}\n.light-green.accent-1--after:after {\n  background-color: #ccff90 !important;\n}\n.light-green--text.text--accent-1 {\n  color: #ccff90 !important;\n}\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n  border-color: #b2ff59 !important;\n}\n.light-green.accent-2--after:after {\n  background-color: #b2ff59 !important;\n}\n.light-green--text.text--accent-2 {\n  color: #b2ff59 !important;\n}\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n  border-color: #76ff03 !important;\n}\n.light-green.accent-3--after:after {\n  background-color: #76ff03 !important;\n}\n.light-green--text.text--accent-3 {\n  color: #76ff03 !important;\n}\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n  border-color: #64dd17 !important;\n}\n.light-green.accent-4--after:after {\n  background-color: #64dd17 !important;\n}\n.light-green--text.text--accent-4 {\n  color: #64dd17 !important;\n}\n.lime {\n  background-color: #cddc39 !important;\n  border-color: #cddc39 !important;\n}\n.lime--text {\n  color: #cddc39 !important;\n}\n.lime--after:after {\n  background: #cddc39 !important;\n}\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n  border-color: #f9fbe7 !important;\n}\n.lime.lighten-5--after:after {\n  background-color: #f9fbe7 !important;\n}\n.lime--text.text--lighten-5 {\n  color: #f9fbe7 !important;\n}\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n  border-color: #f0f4c3 !important;\n}\n.lime.lighten-4--after:after {\n  background-color: #f0f4c3 !important;\n}\n.lime--text.text--lighten-4 {\n  color: #f0f4c3 !important;\n}\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n  border-color: #e6ee9c !important;\n}\n.lime.lighten-3--after:after {\n  background-color: #e6ee9c !important;\n}\n.lime--text.text--lighten-3 {\n  color: #e6ee9c !important;\n}\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n  border-color: #dce775 !important;\n}\n.lime.lighten-2--after:after {\n  background-color: #dce775 !important;\n}\n.lime--text.text--lighten-2 {\n  color: #dce775 !important;\n}\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n  border-color: #d4e157 !important;\n}\n.lime.lighten-1--after:after {\n  background-color: #d4e157 !important;\n}\n.lime--text.text--lighten-1 {\n  color: #d4e157 !important;\n}\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n  border-color: #c0ca33 !important;\n}\n.lime.darken-1--after:after {\n  background-color: #c0ca33 !important;\n}\n.lime--text.text--darken-1 {\n  color: #c0ca33 !important;\n}\n.lime.darken-2 {\n  background-color: #afb42b !important;\n  border-color: #afb42b !important;\n}\n.lime.darken-2--after:after {\n  background-color: #afb42b !important;\n}\n.lime--text.text--darken-2 {\n  color: #afb42b !important;\n}\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n  border-color: #9e9d24 !important;\n}\n.lime.darken-3--after:after {\n  background-color: #9e9d24 !important;\n}\n.lime--text.text--darken-3 {\n  color: #9e9d24 !important;\n}\n.lime.darken-4 {\n  background-color: #827717 !important;\n  border-color: #827717 !important;\n}\n.lime.darken-4--after:after {\n  background-color: #827717 !important;\n}\n.lime--text.text--darken-4 {\n  color: #827717 !important;\n}\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n  border-color: #f4ff81 !important;\n}\n.lime.accent-1--after:after {\n  background-color: #f4ff81 !important;\n}\n.lime--text.text--accent-1 {\n  color: #f4ff81 !important;\n}\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n  border-color: #eeff41 !important;\n}\n.lime.accent-2--after:after {\n  background-color: #eeff41 !important;\n}\n.lime--text.text--accent-2 {\n  color: #eeff41 !important;\n}\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n  border-color: #c6ff00 !important;\n}\n.lime.accent-3--after:after {\n  background-color: #c6ff00 !important;\n}\n.lime--text.text--accent-3 {\n  color: #c6ff00 !important;\n}\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n  border-color: #aeea00 !important;\n}\n.lime.accent-4--after:after {\n  background-color: #aeea00 !important;\n}\n.lime--text.text--accent-4 {\n  color: #aeea00 !important;\n}\n.yellow {\n  background-color: #ffeb3b !important;\n  border-color: #ffeb3b !important;\n}\n.yellow--text {\n  color: #ffeb3b !important;\n}\n.yellow--after:after {\n  background: #ffeb3b !important;\n}\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n  border-color: #fffde7 !important;\n}\n.yellow.lighten-5--after:after {\n  background-color: #fffde7 !important;\n}\n.yellow--text.text--lighten-5 {\n  color: #fffde7 !important;\n}\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n  border-color: #fff9c4 !important;\n}\n.yellow.lighten-4--after:after {\n  background-color: #fff9c4 !important;\n}\n.yellow--text.text--lighten-4 {\n  color: #fff9c4 !important;\n}\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n  border-color: #fff59d !important;\n}\n.yellow.lighten-3--after:after {\n  background-color: #fff59d !important;\n}\n.yellow--text.text--lighten-3 {\n  color: #fff59d !important;\n}\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n  border-color: #fff176 !important;\n}\n.yellow.lighten-2--after:after {\n  background-color: #fff176 !important;\n}\n.yellow--text.text--lighten-2 {\n  color: #fff176 !important;\n}\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n  border-color: #ffee58 !important;\n}\n.yellow.lighten-1--after:after {\n  background-color: #ffee58 !important;\n}\n.yellow--text.text--lighten-1 {\n  color: #ffee58 !important;\n}\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n  border-color: #fdd835 !important;\n}\n.yellow.darken-1--after:after {\n  background-color: #fdd835 !important;\n}\n.yellow--text.text--darken-1 {\n  color: #fdd835 !important;\n}\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n  border-color: #fbc02d !important;\n}\n.yellow.darken-2--after:after {\n  background-color: #fbc02d !important;\n}\n.yellow--text.text--darken-2 {\n  color: #fbc02d !important;\n}\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n  border-color: #f9a825 !important;\n}\n.yellow.darken-3--after:after {\n  background-color: #f9a825 !important;\n}\n.yellow--text.text--darken-3 {\n  color: #f9a825 !important;\n}\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n  border-color: #f57f17 !important;\n}\n.yellow.darken-4--after:after {\n  background-color: #f57f17 !important;\n}\n.yellow--text.text--darken-4 {\n  color: #f57f17 !important;\n}\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n  border-color: #ffff8d !important;\n}\n.yellow.accent-1--after:after {\n  background-color: #ffff8d !important;\n}\n.yellow--text.text--accent-1 {\n  color: #ffff8d !important;\n}\n.yellow.accent-2 {\n  background-color: #ff0 !important;\n  border-color: #ff0 !important;\n}\n.yellow.accent-2--after:after {\n  background-color: #ff0 !important;\n}\n.yellow--text.text--accent-2 {\n  color: #ff0 !important;\n}\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n  border-color: #ffea00 !important;\n}\n.yellow.accent-3--after:after {\n  background-color: #ffea00 !important;\n}\n.yellow--text.text--accent-3 {\n  color: #ffea00 !important;\n}\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n  border-color: #ffd600 !important;\n}\n.yellow.accent-4--after:after {\n  background-color: #ffd600 !important;\n}\n.yellow--text.text--accent-4 {\n  color: #ffd600 !important;\n}\n.amber {\n  background-color: #ffc107 !important;\n  border-color: #ffc107 !important;\n}\n.amber--text {\n  color: #ffc107 !important;\n}\n.amber--after:after {\n  background: #ffc107 !important;\n}\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n  border-color: #fff8e1 !important;\n}\n.amber.lighten-5--after:after {\n  background-color: #fff8e1 !important;\n}\n.amber--text.text--lighten-5 {\n  color: #fff8e1 !important;\n}\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n  border-color: #ffecb3 !important;\n}\n.amber.lighten-4--after:after {\n  background-color: #ffecb3 !important;\n}\n.amber--text.text--lighten-4 {\n  color: #ffecb3 !important;\n}\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n  border-color: #ffe082 !important;\n}\n.amber.lighten-3--after:after {\n  background-color: #ffe082 !important;\n}\n.amber--text.text--lighten-3 {\n  color: #ffe082 !important;\n}\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n  border-color: #ffd54f !important;\n}\n.amber.lighten-2--after:after {\n  background-color: #ffd54f !important;\n}\n.amber--text.text--lighten-2 {\n  color: #ffd54f !important;\n}\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n  border-color: #ffca28 !important;\n}\n.amber.lighten-1--after:after {\n  background-color: #ffca28 !important;\n}\n.amber--text.text--lighten-1 {\n  color: #ffca28 !important;\n}\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n  border-color: #ffb300 !important;\n}\n.amber.darken-1--after:after {\n  background-color: #ffb300 !important;\n}\n.amber--text.text--darken-1 {\n  color: #ffb300 !important;\n}\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n  border-color: #ffa000 !important;\n}\n.amber.darken-2--after:after {\n  background-color: #ffa000 !important;\n}\n.amber--text.text--darken-2 {\n  color: #ffa000 !important;\n}\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n  border-color: #ff8f00 !important;\n}\n.amber.darken-3--after:after {\n  background-color: #ff8f00 !important;\n}\n.amber--text.text--darken-3 {\n  color: #ff8f00 !important;\n}\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n  border-color: #ff6f00 !important;\n}\n.amber.darken-4--after:after {\n  background-color: #ff6f00 !important;\n}\n.amber--text.text--darken-4 {\n  color: #ff6f00 !important;\n}\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n  border-color: #ffe57f !important;\n}\n.amber.accent-1--after:after {\n  background-color: #ffe57f !important;\n}\n.amber--text.text--accent-1 {\n  color: #ffe57f !important;\n}\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n  border-color: #ffd740 !important;\n}\n.amber.accent-2--after:after {\n  background-color: #ffd740 !important;\n}\n.amber--text.text--accent-2 {\n  color: #ffd740 !important;\n}\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n  border-color: #ffc400 !important;\n}\n.amber.accent-3--after:after {\n  background-color: #ffc400 !important;\n}\n.amber--text.text--accent-3 {\n  color: #ffc400 !important;\n}\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n  border-color: #ffab00 !important;\n}\n.amber.accent-4--after:after {\n  background-color: #ffab00 !important;\n}\n.amber--text.text--accent-4 {\n  color: #ffab00 !important;\n}\n.orange {\n  background-color: #ff9800 !important;\n  border-color: #ff9800 !important;\n}\n.orange--text {\n  color: #ff9800 !important;\n}\n.orange--after:after {\n  background: #ff9800 !important;\n}\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n  border-color: #fff3e0 !important;\n}\n.orange.lighten-5--after:after {\n  background-color: #fff3e0 !important;\n}\n.orange--text.text--lighten-5 {\n  color: #fff3e0 !important;\n}\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n  border-color: #ffe0b2 !important;\n}\n.orange.lighten-4--after:after {\n  background-color: #ffe0b2 !important;\n}\n.orange--text.text--lighten-4 {\n  color: #ffe0b2 !important;\n}\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n  border-color: #ffcc80 !important;\n}\n.orange.lighten-3--after:after {\n  background-color: #ffcc80 !important;\n}\n.orange--text.text--lighten-3 {\n  color: #ffcc80 !important;\n}\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n  border-color: #ffb74d !important;\n}\n.orange.lighten-2--after:after {\n  background-color: #ffb74d !important;\n}\n.orange--text.text--lighten-2 {\n  color: #ffb74d !important;\n}\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n  border-color: #ffa726 !important;\n}\n.orange.lighten-1--after:after {\n  background-color: #ffa726 !important;\n}\n.orange--text.text--lighten-1 {\n  color: #ffa726 !important;\n}\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n  border-color: #fb8c00 !important;\n}\n.orange.darken-1--after:after {\n  background-color: #fb8c00 !important;\n}\n.orange--text.text--darken-1 {\n  color: #fb8c00 !important;\n}\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n  border-color: #f57c00 !important;\n}\n.orange.darken-2--after:after {\n  background-color: #f57c00 !important;\n}\n.orange--text.text--darken-2 {\n  color: #f57c00 !important;\n}\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n  border-color: #ef6c00 !important;\n}\n.orange.darken-3--after:after {\n  background-color: #ef6c00 !important;\n}\n.orange--text.text--darken-3 {\n  color: #ef6c00 !important;\n}\n.orange.darken-4 {\n  background-color: #e65100 !important;\n  border-color: #e65100 !important;\n}\n.orange.darken-4--after:after {\n  background-color: #e65100 !important;\n}\n.orange--text.text--darken-4 {\n  color: #e65100 !important;\n}\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n  border-color: #ffd180 !important;\n}\n.orange.accent-1--after:after {\n  background-color: #ffd180 !important;\n}\n.orange--text.text--accent-1 {\n  color: #ffd180 !important;\n}\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n  border-color: #ffab40 !important;\n}\n.orange.accent-2--after:after {\n  background-color: #ffab40 !important;\n}\n.orange--text.text--accent-2 {\n  color: #ffab40 !important;\n}\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n  border-color: #ff9100 !important;\n}\n.orange.accent-3--after:after {\n  background-color: #ff9100 !important;\n}\n.orange--text.text--accent-3 {\n  color: #ff9100 !important;\n}\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n  border-color: #ff6d00 !important;\n}\n.orange.accent-4--after:after {\n  background-color: #ff6d00 !important;\n}\n.orange--text.text--accent-4 {\n  color: #ff6d00 !important;\n}\n.deep-orange {\n  background-color: #ff5722 !important;\n  border-color: #ff5722 !important;\n}\n.deep-orange--text {\n  color: #ff5722 !important;\n}\n.deep-orange--after:after {\n  background: #ff5722 !important;\n}\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n  border-color: #fbe9e7 !important;\n}\n.deep-orange.lighten-5--after:after {\n  background-color: #fbe9e7 !important;\n}\n.deep-orange--text.text--lighten-5 {\n  color: #fbe9e7 !important;\n}\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n  border-color: #ffccbc !important;\n}\n.deep-orange.lighten-4--after:after {\n  background-color: #ffccbc !important;\n}\n.deep-orange--text.text--lighten-4 {\n  color: #ffccbc !important;\n}\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n  border-color: #ffab91 !important;\n}\n.deep-orange.lighten-3--after:after {\n  background-color: #ffab91 !important;\n}\n.deep-orange--text.text--lighten-3 {\n  color: #ffab91 !important;\n}\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n  border-color: #ff8a65 !important;\n}\n.deep-orange.lighten-2--after:after {\n  background-color: #ff8a65 !important;\n}\n.deep-orange--text.text--lighten-2 {\n  color: #ff8a65 !important;\n}\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n  border-color: #ff7043 !important;\n}\n.deep-orange.lighten-1--after:after {\n  background-color: #ff7043 !important;\n}\n.deep-orange--text.text--lighten-1 {\n  color: #ff7043 !important;\n}\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n  border-color: #f4511e !important;\n}\n.deep-orange.darken-1--after:after {\n  background-color: #f4511e !important;\n}\n.deep-orange--text.text--darken-1 {\n  color: #f4511e !important;\n}\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n  border-color: #e64a19 !important;\n}\n.deep-orange.darken-2--after:after {\n  background-color: #e64a19 !important;\n}\n.deep-orange--text.text--darken-2 {\n  color: #e64a19 !important;\n}\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n  border-color: #d84315 !important;\n}\n.deep-orange.darken-3--after:after {\n  background-color: #d84315 !important;\n}\n.deep-orange--text.text--darken-3 {\n  color: #d84315 !important;\n}\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n  border-color: #bf360c !important;\n}\n.deep-orange.darken-4--after:after {\n  background-color: #bf360c !important;\n}\n.deep-orange--text.text--darken-4 {\n  color: #bf360c !important;\n}\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n  border-color: #ff9e80 !important;\n}\n.deep-orange.accent-1--after:after {\n  background-color: #ff9e80 !important;\n}\n.deep-orange--text.text--accent-1 {\n  color: #ff9e80 !important;\n}\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n  border-color: #ff6e40 !important;\n}\n.deep-orange.accent-2--after:after {\n  background-color: #ff6e40 !important;\n}\n.deep-orange--text.text--accent-2 {\n  color: #ff6e40 !important;\n}\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n  border-color: #ff3d00 !important;\n}\n.deep-orange.accent-3--after:after {\n  background-color: #ff3d00 !important;\n}\n.deep-orange--text.text--accent-3 {\n  color: #ff3d00 !important;\n}\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n  border-color: #dd2c00 !important;\n}\n.deep-orange.accent-4--after:after {\n  background-color: #dd2c00 !important;\n}\n.deep-orange--text.text--accent-4 {\n  color: #dd2c00 !important;\n}\n.brown {\n  background-color: #795548 !important;\n  border-color: #795548 !important;\n}\n.brown--text {\n  color: #795548 !important;\n}\n.brown--after:after {\n  background: #795548 !important;\n}\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n  border-color: #efebe9 !important;\n}\n.brown.lighten-5--after:after {\n  background-color: #efebe9 !important;\n}\n.brown--text.text--lighten-5 {\n  color: #efebe9 !important;\n}\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n  border-color: #d7ccc8 !important;\n}\n.brown.lighten-4--after:after {\n  background-color: #d7ccc8 !important;\n}\n.brown--text.text--lighten-4 {\n  color: #d7ccc8 !important;\n}\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n  border-color: #bcaaa4 !important;\n}\n.brown.lighten-3--after:after {\n  background-color: #bcaaa4 !important;\n}\n.brown--text.text--lighten-3 {\n  color: #bcaaa4 !important;\n}\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n  border-color: #a1887f !important;\n}\n.brown.lighten-2--after:after {\n  background-color: #a1887f !important;\n}\n.brown--text.text--lighten-2 {\n  color: #a1887f !important;\n}\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n  border-color: #8d6e63 !important;\n}\n.brown.lighten-1--after:after {\n  background-color: #8d6e63 !important;\n}\n.brown--text.text--lighten-1 {\n  color: #8d6e63 !important;\n}\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n  border-color: #6d4c41 !important;\n}\n.brown.darken-1--after:after {\n  background-color: #6d4c41 !important;\n}\n.brown--text.text--darken-1 {\n  color: #6d4c41 !important;\n}\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n  border-color: #5d4037 !important;\n}\n.brown.darken-2--after:after {\n  background-color: #5d4037 !important;\n}\n.brown--text.text--darken-2 {\n  color: #5d4037 !important;\n}\n.brown.darken-3 {\n  background-color: #4e342e !important;\n  border-color: #4e342e !important;\n}\n.brown.darken-3--after:after {\n  background-color: #4e342e !important;\n}\n.brown--text.text--darken-3 {\n  color: #4e342e !important;\n}\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n  border-color: #3e2723 !important;\n}\n.brown.darken-4--after:after {\n  background-color: #3e2723 !important;\n}\n.brown--text.text--darken-4 {\n  color: #3e2723 !important;\n}\n.blue-grey {\n  background-color: #607d8b !important;\n  border-color: #607d8b !important;\n}\n.blue-grey--text {\n  color: #607d8b !important;\n}\n.blue-grey--after:after {\n  background: #607d8b !important;\n}\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n  border-color: #eceff1 !important;\n}\n.blue-grey.lighten-5--after:after {\n  background-color: #eceff1 !important;\n}\n.blue-grey--text.text--lighten-5 {\n  color: #eceff1 !important;\n}\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n  border-color: #cfd8dc !important;\n}\n.blue-grey.lighten-4--after:after {\n  background-color: #cfd8dc !important;\n}\n.blue-grey--text.text--lighten-4 {\n  color: #cfd8dc !important;\n}\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n  border-color: #b0bec5 !important;\n}\n.blue-grey.lighten-3--after:after {\n  background-color: #b0bec5 !important;\n}\n.blue-grey--text.text--lighten-3 {\n  color: #b0bec5 !important;\n}\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n  border-color: #90a4ae !important;\n}\n.blue-grey.lighten-2--after:after {\n  background-color: #90a4ae !important;\n}\n.blue-grey--text.text--lighten-2 {\n  color: #90a4ae !important;\n}\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n  border-color: #78909c !important;\n}\n.blue-grey.lighten-1--after:after {\n  background-color: #78909c !important;\n}\n.blue-grey--text.text--lighten-1 {\n  color: #78909c !important;\n}\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n  border-color: #546e7a !important;\n}\n.blue-grey.darken-1--after:after {\n  background-color: #546e7a !important;\n}\n.blue-grey--text.text--darken-1 {\n  color: #546e7a !important;\n}\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n  border-color: #455a64 !important;\n}\n.blue-grey.darken-2--after:after {\n  background-color: #455a64 !important;\n}\n.blue-grey--text.text--darken-2 {\n  color: #455a64 !important;\n}\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n  border-color: #37474f !important;\n}\n.blue-grey.darken-3--after:after {\n  background-color: #37474f !important;\n}\n.blue-grey--text.text--darken-3 {\n  color: #37474f !important;\n}\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n  border-color: #263238 !important;\n}\n.blue-grey.darken-4--after:after {\n  background-color: #263238 !important;\n}\n.blue-grey--text.text--darken-4 {\n  color: #263238 !important;\n}\n.grey {\n  background-color: #9e9e9e !important;\n  border-color: #9e9e9e !important;\n}\n.grey--text {\n  color: #9e9e9e !important;\n}\n.grey--after:after {\n  background: #9e9e9e !important;\n}\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n  border-color: #fafafa !important;\n}\n.grey.lighten-5--after:after {\n  background-color: #fafafa !important;\n}\n.grey--text.text--lighten-5 {\n  color: #fafafa !important;\n}\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n  border-color: #f5f5f5 !important;\n}\n.grey.lighten-4--after:after {\n  background-color: #f5f5f5 !important;\n}\n.grey--text.text--lighten-4 {\n  color: #f5f5f5 !important;\n}\n.grey.lighten-3 {\n  background-color: #eee !important;\n  border-color: #eee !important;\n}\n.grey.lighten-3--after:after {\n  background-color: #eee !important;\n}\n.grey--text.text--lighten-3 {\n  color: #eee !important;\n}\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n  border-color: #e0e0e0 !important;\n}\n.grey.lighten-2--after:after {\n  background-color: #e0e0e0 !important;\n}\n.grey--text.text--lighten-2 {\n  color: #e0e0e0 !important;\n}\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n  border-color: #bdbdbd !important;\n}\n.grey.lighten-1--after:after {\n  background-color: #bdbdbd !important;\n}\n.grey--text.text--lighten-1 {\n  color: #bdbdbd !important;\n}\n.grey.darken-1 {\n  background-color: #757575 !important;\n  border-color: #757575 !important;\n}\n.grey.darken-1--after:after {\n  background-color: #757575 !important;\n}\n.grey--text.text--darken-1 {\n  color: #757575 !important;\n}\n.grey.darken-2 {\n  background-color: #616161 !important;\n  border-color: #616161 !important;\n}\n.grey.darken-2--after:after {\n  background-color: #616161 !important;\n}\n.grey--text.text--darken-2 {\n  color: #616161 !important;\n}\n.grey.darken-3 {\n  background-color: #424242 !important;\n  border-color: #424242 !important;\n}\n.grey.darken-3--after:after {\n  background-color: #424242 !important;\n}\n.grey--text.text--darken-3 {\n  color: #424242 !important;\n}\n.grey.darken-4 {\n  background-color: #212121 !important;\n  border-color: #212121 !important;\n}\n.grey.darken-4--after:after {\n  background-color: #212121 !important;\n}\n.grey--text.text--darken-4 {\n  color: #212121 !important;\n}\n.shades.black {\n  background-color: #000 !important;\n  border-color: #000 !important;\n}\n.shades.black--after:after {\n  background-color: #000 !important;\n}\n.shades--text.text--black {\n  color: #000 !important;\n}\n.shades.white {\n  background-color: #fff !important;\n  border-color: #fff !important;\n}\n.shades.white--after:after {\n  background-color: #fff !important;\n}\n.shades--text.text--white {\n  color: #fff !important;\n}\n.shades.transparent {\n  background-color: transparent !important;\n  border-color: transparent !important;\n}\n.shades.transparent--after:after {\n  background-color: transparent !important;\n}\n.shades--text.text--transparent {\n  color: transparent !important;\n}\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  flex-basis: 100%;\n  padding: 16px;\n}\n@media only screen and (min-width: 600px) {\n  .container {\n    max-width: 600px;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media only screen and (min-width: 1424px) {\n  .container {\n    max-width: 1424px;\n  }\n}\n@media only screen and (min-width: 1904px) {\n  .container {\n    max-width: 1904px;\n  }\n}\n@media only screen and (max-width: 599px) {\n  .container {\n    padding: 24px;\n  }\n}\n.container.fluid {\n  max-width: 100%;\n  width: 100%;\n}\n.container.fill-height {\n  align-items: center;\n  display: flex;\n}\n.container.fill-height .layout {\n  height: 100%;\n  flex: 1 1 auto;\n}\n.container.grid-list-xs {\n  padding: 2px;\n}\n.container.grid-list-xs > .layout {\n  margin: -1px;\n}\n.container.grid-list-xs > .layout > .flex {\n  padding: 1px;\n}\n.container.grid-list-sm {\n  padding: 4px;\n}\n.container.grid-list-sm > .layout {\n  margin: -2px;\n}\n.container.grid-list-sm > .layout > .flex {\n  padding: 2px;\n}\n.container.grid-list-md {\n  padding: 8px;\n}\n.container.grid-list-md > .layout {\n  margin: -4px;\n}\n.container.grid-list-md > .layout > .flex {\n  padding: 4px;\n}\n.container.grid-list-lg {\n  padding: 16px;\n}\n.container.grid-list-lg > .layout {\n  margin: -8px;\n}\n.container.grid-list-lg > .layout > .flex {\n  padding: 8px;\n}\n.container.grid-list-xl {\n  padding: 24px;\n}\n.container.grid-list-xl > .layout {\n  margin: -12px;\n}\n.container.grid-list-xl > .layout > .flex {\n  padding: 12px;\n}\n.layout {\n  display: flex;\n  margin-right: -4px;\n  margin-left: -4px;\n}\n.layout.row,\n.layout.column {\n  flex: 0 1 auto;\n}\n.layout.row.grow,\n.layout.column.grow {\n  flex-grow: 1;\n}\n.layout.row {\n  flex-direction: row;\n}\n.layout.row.reverse {\n  flex-direction: row-reverse;\n}\n.layout.column {\n  flex-direction: column;\n}\n.layout.column.reverse {\n  flex-direction: column-reverse;\n}\n.layout.wrap {\n  flex-wrap: wrap;\n}\n.layout.flex,\n.layout.child-flex > * {\n  flex: 1 1 auto;\n}\n.layout .flex {\n  flex: 1 1 auto;\n  padding-right: 4px;\n  padding-left: 4px;\n}\n@media all and (min-width: 0) {\n  .layout.row-xs {\n    flex-direction: row;\n  }\n  .layout.column-xs {\n    flex-direction: column;\n  }\n  .layout.child-flex-xs > * {\n    flex: 1;\n  }\n  .layout .flex.xs1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n  }\n  .layout .flex.order-xs1 {\n    order: 1;\n  }\n  .layout .flex.xs2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n  }\n  .layout .flex.order-xs2 {\n    order: 2;\n  }\n  .layout .flex.xs3 {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .layout .flex.order-xs3 {\n    order: 3;\n  }\n  .layout .flex.xs4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n  }\n  .layout .flex.order-xs4 {\n    order: 4;\n  }\n  .layout .flex.xs5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n  }\n  .layout .flex.order-xs5 {\n    order: 5;\n  }\n  .layout .flex.xs6 {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .layout .flex.order-xs6 {\n    order: 6;\n  }\n  .layout .flex.xs7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n  }\n  .layout .flex.order-xs7 {\n    order: 7;\n  }\n  .layout .flex.xs8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n  }\n  .layout .flex.order-xs8 {\n    order: 8;\n  }\n  .layout .flex.xs9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .layout .flex.order-xs9 {\n    order: 9;\n  }\n  .layout .flex.xs10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n  }\n  .layout .flex.order-xs10 {\n    order: 10;\n  }\n  .layout .flex.xs11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n  }\n  .layout .flex.order-xs11 {\n    order: 11;\n  }\n  .layout .flex.xs12 {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .layout .flex.order-xs12 {\n    order: 12;\n  }\n  .layout .flex.offset-xs0 {\n    margin-left: 0%;\n  }\n  .layout .flex.offset-xs1 {\n    margin-left: 8.333333333333332%;\n  }\n  .layout .flex.offset-xs2 {\n    margin-left: 16.666666666666664%;\n  }\n  .layout .flex.offset-xs3 {\n    margin-left: 25%;\n  }\n  .layout .flex.offset-xs4 {\n    margin-left: 33.33333333333333%;\n  }\n  .layout .flex.offset-xs5 {\n    margin-left: 41.66666666666667%;\n  }\n  .layout .flex.offset-xs6 {\n    margin-left: 50%;\n  }\n  .layout .flex.offset-xs7 {\n    margin-left: 58.333333333333336%;\n  }\n  .layout .flex.offset-xs8 {\n    margin-left: 66.66666666666666%;\n  }\n  .layout .flex.offset-xs9 {\n    margin-left: 75%;\n  }\n  .layout .flex.offset-xs10 {\n    margin-left: 83.33333333333334%;\n  }\n  .layout .flex.offset-xs11 {\n    margin-left: 91.66666666666666%;\n  }\n  .layout .flex.offset-xs12 {\n    margin-left: 100%;\n  }\n}\n@media all and (min-width: 600px) {\n  .layout.row-sm {\n    flex-direction: row;\n  }\n  .layout.column-sm {\n    flex-direction: column;\n  }\n  .layout.child-flex-sm > * {\n    flex: 1;\n  }\n  .layout .flex.sm1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n  }\n  .layout .flex.order-sm1 {\n    order: 1;\n  }\n  .layout .flex.sm2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n  }\n  .layout .flex.order-sm2 {\n    order: 2;\n  }\n  .layout .flex.sm3 {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .layout .flex.order-sm3 {\n    order: 3;\n  }\n  .layout .flex.sm4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n  }\n  .layout .flex.order-sm4 {\n    order: 4;\n  }\n  .layout .flex.sm5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n  }\n  .layout .flex.order-sm5 {\n    order: 5;\n  }\n  .layout .flex.sm6 {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .layout .flex.order-sm6 {\n    order: 6;\n  }\n  .layout .flex.sm7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n  }\n  .layout .flex.order-sm7 {\n    order: 7;\n  }\n  .layout .flex.sm8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n  }\n  .layout .flex.order-sm8 {\n    order: 8;\n  }\n  .layout .flex.sm9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .layout .flex.order-sm9 {\n    order: 9;\n  }\n  .layout .flex.sm10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n  }\n  .layout .flex.order-sm10 {\n    order: 10;\n  }\n  .layout .flex.sm11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n  }\n  .layout .flex.order-sm11 {\n    order: 11;\n  }\n  .layout .flex.sm12 {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .layout .flex.order-sm12 {\n    order: 12;\n  }\n  .layout .flex.offset-sm0 {\n    margin-left: 0%;\n  }\n  .layout .flex.offset-sm1 {\n    margin-left: 8.333333333333332%;\n  }\n  .layout .flex.offset-sm2 {\n    margin-left: 16.666666666666664%;\n  }\n  .layout .flex.offset-sm3 {\n    margin-left: 25%;\n  }\n  .layout .flex.offset-sm4 {\n    margin-left: 33.33333333333333%;\n  }\n  .layout .flex.offset-sm5 {\n    margin-left: 41.66666666666667%;\n  }\n  .layout .flex.offset-sm6 {\n    margin-left: 50%;\n  }\n  .layout .flex.offset-sm7 {\n    margin-left: 58.333333333333336%;\n  }\n  .layout .flex.offset-sm8 {\n    margin-left: 66.66666666666666%;\n  }\n  .layout .flex.offset-sm9 {\n    margin-left: 75%;\n  }\n  .layout .flex.offset-sm10 {\n    margin-left: 83.33333333333334%;\n  }\n  .layout .flex.offset-sm11 {\n    margin-left: 91.66666666666666%;\n  }\n  .layout .flex.offset-sm12 {\n    margin-left: 100%;\n  }\n}\n@media all and (min-width: 1024px) {\n  .layout.row-md {\n    flex-direction: row;\n  }\n  .layout.column-md {\n    flex-direction: column;\n  }\n  .layout.child-flex-md > * {\n    flex: 1;\n  }\n  .layout .flex.md1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n  }\n  .layout .flex.order-md1 {\n    order: 1;\n  }\n  .layout .flex.md2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n  }\n  .layout .flex.order-md2 {\n    order: 2;\n  }\n  .layout .flex.md3 {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .layout .flex.order-md3 {\n    order: 3;\n  }\n  .layout .flex.md4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n  }\n  .layout .flex.order-md4 {\n    order: 4;\n  }\n  .layout .flex.md5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n  }\n  .layout .flex.order-md5 {\n    order: 5;\n  }\n  .layout .flex.md6 {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .layout .flex.order-md6 {\n    order: 6;\n  }\n  .layout .flex.md7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n  }\n  .layout .flex.order-md7 {\n    order: 7;\n  }\n  .layout .flex.md8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n  }\n  .layout .flex.order-md8 {\n    order: 8;\n  }\n  .layout .flex.md9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .layout .flex.order-md9 {\n    order: 9;\n  }\n  .layout .flex.md10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n  }\n  .layout .flex.order-md10 {\n    order: 10;\n  }\n  .layout .flex.md11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n  }\n  .layout .flex.order-md11 {\n    order: 11;\n  }\n  .layout .flex.md12 {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .layout .flex.order-md12 {\n    order: 12;\n  }\n  .layout .flex.offset-md0 {\n    margin-left: 0%;\n  }\n  .layout .flex.offset-md1 {\n    margin-left: 8.333333333333332%;\n  }\n  .layout .flex.offset-md2 {\n    margin-left: 16.666666666666664%;\n  }\n  .layout .flex.offset-md3 {\n    margin-left: 25%;\n  }\n  .layout .flex.offset-md4 {\n    margin-left: 33.33333333333333%;\n  }\n  .layout .flex.offset-md5 {\n    margin-left: 41.66666666666667%;\n  }\n  .layout .flex.offset-md6 {\n    margin-left: 50%;\n  }\n  .layout .flex.offset-md7 {\n    margin-left: 58.333333333333336%;\n  }\n  .layout .flex.offset-md8 {\n    margin-left: 66.66666666666666%;\n  }\n  .layout .flex.offset-md9 {\n    margin-left: 75%;\n  }\n  .layout .flex.offset-md10 {\n    margin-left: 83.33333333333334%;\n  }\n  .layout .flex.offset-md11 {\n    margin-left: 91.66666666666666%;\n  }\n  .layout .flex.offset-md12 {\n    margin-left: 100%;\n  }\n}\n@media all and (min-width: 1424px) {\n  .layout.row-lg {\n    flex-direction: row;\n  }\n  .layout.column-lg {\n    flex-direction: column;\n  }\n  .layout.child-flex-lg > * {\n    flex: 1;\n  }\n  .layout .flex.lg1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n  }\n  .layout .flex.order-lg1 {\n    order: 1;\n  }\n  .layout .flex.lg2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n  }\n  .layout .flex.order-lg2 {\n    order: 2;\n  }\n  .layout .flex.lg3 {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .layout .flex.order-lg3 {\n    order: 3;\n  }\n  .layout .flex.lg4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n  }\n  .layout .flex.order-lg4 {\n    order: 4;\n  }\n  .layout .flex.lg5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n  }\n  .layout .flex.order-lg5 {\n    order: 5;\n  }\n  .layout .flex.lg6 {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .layout .flex.order-lg6 {\n    order: 6;\n  }\n  .layout .flex.lg7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n  }\n  .layout .flex.order-lg7 {\n    order: 7;\n  }\n  .layout .flex.lg8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n  }\n  .layout .flex.order-lg8 {\n    order: 8;\n  }\n  .layout .flex.lg9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .layout .flex.order-lg9 {\n    order: 9;\n  }\n  .layout .flex.lg10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n  }\n  .layout .flex.order-lg10 {\n    order: 10;\n  }\n  .layout .flex.lg11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n  }\n  .layout .flex.order-lg11 {\n    order: 11;\n  }\n  .layout .flex.lg12 {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .layout .flex.order-lg12 {\n    order: 12;\n  }\n  .layout .flex.offset-lg0 {\n    margin-left: 0%;\n  }\n  .layout .flex.offset-lg1 {\n    margin-left: 8.333333333333332%;\n  }\n  .layout .flex.offset-lg2 {\n    margin-left: 16.666666666666664%;\n  }\n  .layout .flex.offset-lg3 {\n    margin-left: 25%;\n  }\n  .layout .flex.offset-lg4 {\n    margin-left: 33.33333333333333%;\n  }\n  .layout .flex.offset-lg5 {\n    margin-left: 41.66666666666667%;\n  }\n  .layout .flex.offset-lg6 {\n    margin-left: 50%;\n  }\n  .layout .flex.offset-lg7 {\n    margin-left: 58.333333333333336%;\n  }\n  .layout .flex.offset-lg8 {\n    margin-left: 66.66666666666666%;\n  }\n  .layout .flex.offset-lg9 {\n    margin-left: 75%;\n  }\n  .layout .flex.offset-lg10 {\n    margin-left: 83.33333333333334%;\n  }\n  .layout .flex.offset-lg11 {\n    margin-left: 91.66666666666666%;\n  }\n  .layout .flex.offset-lg12 {\n    margin-left: 100%;\n  }\n}\n@media all and (min-width: 1904px) {\n  .layout.row-xl {\n    flex-direction: row;\n  }\n  .layout.column-xl {\n    flex-direction: column;\n  }\n  .layout.child-flex-xl > * {\n    flex: 1;\n  }\n  .layout .flex.xl1 {\n    flex-basis: 8.333333333333332%;\n    max-width: 8.333333333333332%;\n  }\n  .layout .flex.order-xl1 {\n    order: 1;\n  }\n  .layout .flex.xl2 {\n    flex-basis: 16.666666666666664%;\n    max-width: 16.666666666666664%;\n  }\n  .layout .flex.order-xl2 {\n    order: 2;\n  }\n  .layout .flex.xl3 {\n    flex-basis: 25%;\n    max-width: 25%;\n  }\n  .layout .flex.order-xl3 {\n    order: 3;\n  }\n  .layout .flex.xl4 {\n    flex-basis: 33.33333333333333%;\n    max-width: 33.33333333333333%;\n  }\n  .layout .flex.order-xl4 {\n    order: 4;\n  }\n  .layout .flex.xl5 {\n    flex-basis: 41.66666666666667%;\n    max-width: 41.66666666666667%;\n  }\n  .layout .flex.order-xl5 {\n    order: 5;\n  }\n  .layout .flex.xl6 {\n    flex-basis: 50%;\n    max-width: 50%;\n  }\n  .layout .flex.order-xl6 {\n    order: 6;\n  }\n  .layout .flex.xl7 {\n    flex-basis: 58.333333333333336%;\n    max-width: 58.333333333333336%;\n  }\n  .layout .flex.order-xl7 {\n    order: 7;\n  }\n  .layout .flex.xl8 {\n    flex-basis: 66.66666666666666%;\n    max-width: 66.66666666666666%;\n  }\n  .layout .flex.order-xl8 {\n    order: 8;\n  }\n  .layout .flex.xl9 {\n    flex-basis: 75%;\n    max-width: 75%;\n  }\n  .layout .flex.order-xl9 {\n    order: 9;\n  }\n  .layout .flex.xl10 {\n    flex-basis: 83.33333333333334%;\n    max-width: 83.33333333333334%;\n  }\n  .layout .flex.order-xl10 {\n    order: 10;\n  }\n  .layout .flex.xl11 {\n    flex-basis: 91.66666666666666%;\n    max-width: 91.66666666666666%;\n  }\n  .layout .flex.order-xl11 {\n    order: 11;\n  }\n  .layout .flex.xl12 {\n    flex-basis: 100%;\n    max-width: 100%;\n  }\n  .layout .flex.order-xl12 {\n    order: 12;\n  }\n  .layout .flex.offset-xl0 {\n    margin-left: 0%;\n  }\n  .layout .flex.offset-xl1 {\n    margin-left: 8.333333333333332%;\n  }\n  .layout .flex.offset-xl2 {\n    margin-left: 16.666666666666664%;\n  }\n  .layout .flex.offset-xl3 {\n    margin-left: 25%;\n  }\n  .layout .flex.offset-xl4 {\n    margin-left: 33.33333333333333%;\n  }\n  .layout .flex.offset-xl5 {\n    margin-left: 41.66666666666667%;\n  }\n  .layout .flex.offset-xl6 {\n    margin-left: 50%;\n  }\n  .layout .flex.offset-xl7 {\n    margin-left: 58.333333333333336%;\n  }\n  .layout .flex.offset-xl8 {\n    margin-left: 66.66666666666666%;\n  }\n  .layout .flex.offset-xl9 {\n    margin-left: 75%;\n  }\n  .layout .flex.offset-xl10 {\n    margin-left: 83.33333333333334%;\n  }\n  .layout .flex.offset-xl11 {\n    margin-left: 91.66666666666666%;\n  }\n  .layout .flex.offset-xl12 {\n    margin-left: 100%;\n  }\n}\n.align-start {\n  align-items: flex-start;\n}\n.align-end {\n  align-items: flex-end;\n}\n.align-center {\n  align-items: center;\n}\n.align-baseline {\n  align-items: baseline;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-space-around {\n  justify-content: space-around;\n}\n.justify-space-between {\n  justify-content: space-between;\n}\n.spacer {\n  flex-grow: 1;\n}\n.scroll-y {\n  overflow-y: auto;\n}\n.fill-height {\n  height: 100%;\n}\n.show-overflow {\n  overflow: visible !important;\n}\n.flexbox {\n  display: flex;\n}\nhtml {\n  box-sizing: border-box;\n  overflow-y: scroll; /* All browsers without overlaying scrollbars */\n  -webkit-text-size-adjust: 100%; /* iOS 8+ */\n}\n*,\n::before,\n::after {\n  box-sizing: inherit;\n}\n::before,\n::after {\n  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */\n  vertical-align: inherit;\n}\n* {\n  background-repeat: no-repeat; /* Set `background-repeat: no-repeat` to all elements */\n  padding: 0; /* Reset `padding` and `margin` of all elements */\n  margin: 0;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nhr {\n  overflow: visible; /* Show the overflow in Edge and IE */\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\nsummary {\n  display: list-item; /* Add the correct display in all browsers */\n}\nsmall {\n  font-size: 80%; /* Set font-size to 80% in `small` elements */\n}\n[hidden],\ntemplate {\n  display: none; /* Add the correct display in IE */\n}\nabbr[title] {\n  border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */\n  text-decoration: none; /* Remove text decoration in Firefox 40+ */\n}\na {\n  background-color: transparent; /* Remove the gray background on active links in IE 10 */\n  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */\n}\na:active,\na:hover {\n  outline-width: 0; /* Remove the outline when hovering in all browsers */\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* Specify the font family of code elements */\n}\nb,\nstrong {\n  font-weight: bolder; /* Correct style set to `bold` in Edge 12+, Safari 6.2+, and Chrome 18+ */\n}\ndfn {\n  font-style: italic; /* Address styling not present in Safari and Chrome */\n}\nmark {\n  background-color: #ff0;\n  color: #000;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\ninput {\n  border-radius: 0;\n}\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n[disabled] {\n  cursor: default;\n}\n[type=\"number\"] {\n  width: auto; /* Firefox 36+ */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Safari 8+ */\n}\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; /* Safari 8 */\n}\ntextarea {\n  overflow: auto; /* Internet Explorer 11+ */\n  resize: vertical; /* Specify textarea resizability */\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font: inherit; /* Specify font inheritance of form elements */\n}\noptgroup {\n  font-weight: bold; /* Restore the font weight unset by the previous rule. */\n}\nbutton {\n  overflow: visible; /* Address `overflow` set to `hidden` in IE 8/9/10/11 */\n}\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: 0;\n  padding: 0;\n}\nbutton:-moz-focusring,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  outline: 1px dotted ButtonText;\n}\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */\n}\nbutton,\nselect {\n  text-transform: none; /* Firefox 40+, Internet Explorer 11- */\n}\nbutton,\ninput,\nselect,\ntextarea {\n  background-color: transparent;\n  border-style: none;\n  color: inherit;\n}\nselect {\n  -moz-appearance: none; /* Firefox 36+ */\n  -webkit-appearance: none; /* Chrome 41+ */\n}\nselect::-ms-expand {\n  display: none; /* Internet Explorer 11+ */\n}\nselect::-ms-value {\n  color: currentColor; /* Internet Explorer 11+ */\n}\nlegend {\n  border: 0; /* Correct `color` not being inherited in IE 8/9/10/11 */\n  color: inherit; /* Correct the color inheritance from `fieldset` elements in IE */\n  display: table; /* Correct the text wrapping in Edge and IE */\n  max-width: 100%; /* Correct the text wrapping in Edge and IE */\n  white-space: normal; /* Correct the text wrapping in Edge and IE */\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */\n  font: inherit; /* Change font properties to `inherit` in Chrome and Safari */\n}\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */\n  outline-offset: -2px; /* Correct the outline style in Safari */\n}\nimg {\n  border-style: none; /* Remove border when inside `a` element in IE 8/9/10 */\n}\nprogress {\n  vertical-align: baseline;\n}\nsvg:not(:root) {\n  overflow: hidden; /* Internet Explorer 11- */\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */\n}\n@media screen {\n  [hidden~=\"screen\"] {\n    display: inherit;\n  }\n  [hidden~=\"screen\"]:not(:active):not(:focus):not(:target) {\n    position: absolute !important;\n    clip: rect(0 0 0 0) !important;\n  }\n}\n[aria-busy=\"true\"] {\n  cursor: progress;\n}\n[aria-controls] {\n  cursor: pointer;\n}\n[aria-disabled] {\n  cursor: default;\n}\n::-moz-selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n::selection {\n  background-color: #b3d4fc; /* Required when declaring ::selection */\n  color: #000;\n  text-shadow: none;\n}\n.carousel-transition-enter {\n  transform: translate3d(100%, 0, 0);\n}\n.carousel-transition-leave,\n.carousel-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-enter {\n  transform: translate3d(-100%, 0, 0);\n}\n.carousel-reverse-transition-leave,\n.carousel-reverse-transition-leave-to {\n  position: absolute;\n  top: 0;\n  transform: translate3d(100%, 0, 0);\n}\n.dialog-transition-enter,\n.dialog-transition-leave-to {\n  transform: scale(0.5);\n  opacity: 0;\n}\n.dialog-transition-enter-to,\n.dialog-transition-leave {\n  opacity: 1;\n}\n.dialog-bottom-transition-enter,\n.dialog-bottom-transition-leave-to {\n  transform: translateY(100%);\n}\n.tab-transition-enter {\n  transform: translate(100%, 0);\n}\n.tab-transition-enter-to {\n  transform: translate(0, 0);\n}\n.tab-transition-leave,\n.tab-transition-leave-active {\n  position: absolute;\n  top: 0;\n}\n.tab-transition-leave-to {\n  position: absolute;\n  transform: translate(-100%, 0);\n}\n.tab-reverse-transition-enter {\n  transform: translate(-100%, 0);\n}\n.tab-reverse-transition-leave,\n.tab-reverse-transition-leave-to {\n  top: 0;\n  position: absolute;\n  transform: translate(100%, 0);\n}\n.scale-transition-enter-active,\n.scale-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.scale-transition-enter,\n.scale-transition-leave,\n.scale-transition-leave-to {\n  opacity: 0;\n  transform: scale(0);\n}\n.slide-y-transition-enter-active,\n.slide-y-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-transition-enter,\n.slide-y-transition-leave-to {\n  opacity: 0;\n  transform: translateY(-15px);\n}\n.slide-y-reverse-transition-enter-active,\n.slide-y-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-y-reverse-transition-enter,\n.slide-y-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateY(15px);\n}\n.slide-x-transition-enter-active,\n.slide-x-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-transition-enter,\n.slide-x-transition-leave-to {\n  opacity: 0;\n  transform: translateX(-15px);\n}\n.slide-x-reverse-transition-enter-active,\n.slide-x-reverse-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slide-x-reverse-transition-enter,\n.slide-x-reverse-transition-leave-to {\n  opacity: 0;\n  transform: translateX(15px);\n}\n.fade-transition-enter-active,\n.fade-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.fade-transition-enter,\n.fade-transition-leave-to {\n  opacity: 0;\n}\n.fab-transition-enter-active,\n.fab-transition-leave-active {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.fab-transition-enter,\n.fab-transition-leave-to {\n  transform: scale(0) rotate(-45deg);\n}\nblockquote {\n  border-left: 5px solid #f57f17;\n  padding: 16px 0 16px 24px;\n  font-size: 18px;\n  font-weight: 300;\n}\ncode,\nkbd {\n  background: #9e9e9e;\n  color: #bd4147;\n  display: inline-block;\n  background-color: #f5f5f5;\n  border-radius: 3px;\n  white-space: pre-wrap;\n  font-size: 85%;\n  font-weight: 100 !important;\n  font-weight: 900 !important;\n}\ncode:after,\nkbd:after,\ncode:before,\nkbd:before {\n  content: \"\\A0\";\n  letter-spacing: -1px;\n}\nkbd {\n  background: #424242;\n  color: #fff;\n}\nhtml,\nbody {\n  height: 100%;\n  min-height: 100%;\n  position: relative;\n  width: 100%;\n}\nhtml {\n  font-size: 14px;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n  overflow-x: hidden;\n}\nbody {\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.5;\n}\nheader {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  z-index: 1;\n}\nmain {\n  transition: 0.3s padding cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: padding-left;\n}\na {\n  color: #f57f17;\n}\n::-ms-clear,\n::-ms-reveal {\n  display: none;\n}\nh1 {\n  color: #424242;\n  font-size: 112px;\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -0.04em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h1 {\n    font-size: 67.2px;\n  }\n}\nh2 {\n  color: #424242;\n  font-size: 56px;\n  font-weight: 400;\n  line-height: 1.35;\n  letter-spacing: -0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h2 {\n    font-size: 33.6px;\n  }\n}\nh3 {\n  color: #424242;\n  font-size: 45px;\n  font-weight: 400;\n  line-height: 48px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h3 {\n    font-size: 27px;\n  }\n}\nh4 {\n  color: #424242;\n  font-size: 34px;\n  font-weight: 400;\n  line-height: 40px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h4 {\n    font-size: 20.4px;\n  }\n}\nh5 {\n  color: #424242;\n  font-size: 24px;\n  font-weight: 400;\n  line-height: 32px;\n  letter-spacing: normal;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h5 {\n    font-size: 14.399999999999999px;\n  }\n}\nh6 {\n  color: #424242;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1;\n  letter-spacing: 0.02em;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  h6 {\n    font-size: 12px;\n  }\n}\nsubheading {\n  color: #424242;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  subheading {\n    font-size: 9.6px;\n  }\n}\nbody-2 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  body-2 {\n    font-size: 8.4px;\n  }\n}\nbody-1 {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  body-1 {\n    font-size: 8.4px;\n  }\n}\ncaption {\n  color: #424242;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  caption {\n    font-size: 7.199999999999999px;\n  }\n}\nbutton {\n  color: #424242;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: ;\n  letter-spacing: ;\n  margin-bottom: 16px;\n}\n@media screen and (max-width: 600px) {\n  button {\n    font-size: 8.4px;\n  }\n}\nul,\nol {\n  padding-left: 24px;\n}\n.display-4 {\n  font-size: 112px !important;\n  font-weight: 300 !important;\n  line-height: 1 !important;\n  letter-spacing: -0.04em !important;\n}\n.display-3 {\n  font-size: 56px !important;\n  font-weight: 400 !important;\n  line-height: 1.35 !important;\n  letter-spacing: -0.02em !important;\n}\n.display-2 {\n  font-size: 45px !important;\n  font-weight: 400 !important;\n  line-height: 48px !important;\n  letter-spacing: normal !important;\n}\n.display-1 {\n  font-size: 34px !important;\n  font-weight: 400 !important;\n  line-height: 40px !important;\n  letter-spacing: normal !important;\n}\n.headline {\n  font-size: 24px !important;\n  font-weight: 400 !important;\n  line-height: 32px !important;\n  letter-spacing: normal !important;\n}\n.title {\n  font-size: 20px !important;\n  font-weight: 500 !important;\n  line-height: 1 !important;\n  letter-spacing: 0.02em !important;\n}\n.subheading {\n  font-size: 16px !important;\n  font-weight: 400 !important;\n}\n.body-2 {\n  font-size: 14px !important;\n  font-weight: 500 !important;\n}\n.body-1 {\n  font-size: 14px !important;\n  font-weight: 400 !important;\n}\n.caption {\n  font-size: 12px !important;\n  font-weight: 400 !important;\n}\np {\n  margin-bottom: 16px;\n}\n.alert {\n  border-radius: 0;\n  border-width: 4px 0 0 0;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.12) !important;\n  color: #fff;\n  display: flex;\n  font-size: 14px;\n  margin: 4px auto;\n  padding: 16px;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.alert__icon.icon,\n.alert__dismissible .icon {\n  align-self: center;\n  color: rgba(0,0,0,0.3);\n  font-size: 24px;\n}\n.alert__icon {\n  margin-right: 16px;\n}\n.alert__dismissible {\n  align-self: flex-start;\n  margin-left: 16px;\n  margin-right: 0;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.alert__dismissible:hover {\n  color: rgba(26,26,26,0.3);\n}\n.alert--no-icon .alert__icon {\n  display: none;\n}\n.alert > div {\n  flex: 1;\n}\n@media screen and (max-width: 600px) {\n  .alert__icon {\n    display: none;\n  }\n}\n.avatar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.avatar img,\n.avatar .icon {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n.badge {\n  position: relative;\n}\n.badge:after {\n  color: #fff;\n  content: attr(data-badge);\n  display: flex;\n  position: absolute;\n  font-family: 'Roboto', sans-serif;\n  top: -11px;\n  right: -22px;\n  background-color: #f57f17;\n  border-radius: 50%;\n  height: 22px;\n  width: 22px;\n  font-size: 14px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.badge--overlap:after {\n  top: -8px;\n  right: -8px;\n}\n.badge--overlap.badge--left:after {\n  left: -8px;\n  right: initial;\n}\n.badge--overlap.badge--bottom:after {\n  bottom: -8px;\n  top: initial;\n}\n.badge--icon:after {\n  font-family: 'Material Icons';\n}\n.badge--left:after {\n  left: -22px;\n}\n.badge--bottom:after {\n  bottom: -11px;\n  top: initial;\n}\n.bottom-nav {\n  background: #f57f17;\n  bottom: 0;\n  box-shadow: 0 3px 14px 2px rgba(0,0,0,0.12);\n  display: flex;\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  transform: translate3d(0, 60px, 0);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n  width: 100%;\n  z-index: 4;\n}\n.bottom-nav--absolute {\n  position: absolute;\n}\n.bottom-nav--active {\n  transform: translate3d(0, 0, 0);\n}\n.bottom-nav .btn {\n  background: transparent !important;\n  border-radius: 0;\n  box-shadow: none !important;\n  height: 100%;\n  margin: 0;\n  max-width: 168px;\n  min-width: 80px;\n  padding: 0px;\n  opacity: 0.5;\n  width: 100%;\n}\n.bottom-nav .btn .btn__content {\n  height: 100%;\n  flex-direction: column-reverse;\n  height: 56px;\n  font-size: 12px;\n  transform: scale3d(1, 1, 1) translate3d(0, 0, 0);\n  white-space: nowrap;\n  will-change: font-size;\n}\n.bottom-nav .btn .btn__content .icon {\n  color: inherit;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.5, 1);\n}\n.bottom-nav .btn--active {\n  opacity: 1;\n}\n.bottom-nav .btn--active .btn__content {\n  font-size: 14px;\n}\n.bottom-nav .btn--active .btn__content:before {\n  opacity: 0;\n}\n.bottom-nav .btn--active .btn__content .icon {\n  transform: none;\n}\n.bottom-nav .btn:not(.btn--active) {\n  filter: grayscale(100%);\n}\n.bottom-nav--shift .btn__content {\n  font-size: 14px;\n}\n.bottom-nav--shift .btn__content span {\n  height: 21px;\n}\n.bottom-nav--shift .btn {\n  transition: all 0.3s;\n  min-width: 56px;\n  max-width: 96px;\n}\n.bottom-nav--shift .btn--active {\n  min-width: 96px;\n  max-width: 168px;\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content .icon {\n  transform: scale3d(1, 1, 1) translate3d(0, 10px, 0);\n}\n.bottom-nav--shift .btn:not(.btn--active) .btn__content span {\n  color: transparent;\n}\n.breadcrumbs {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  flex: 0 1 auto;\n  margin: 0;\n  list-style-type: none;\n}\n.breadcrumbs li:not(:last-child):after {\n  color: #bdbdbd;\n  content: attr(data-divider);\n  vertical-align: middle;\n}\n.breadcrumbs li:last-child a {\n  color: #bdbdbd;\n  pointer-events: none;\n  cursor: default;\n}\n.breadcrumbs--with-icons li:not(:last-child):after {\n  font-family: 'Material Icons';\n  font-feature-settings: 'liga';\n}\n.breadcrumbs__item {\n  align-items: center;\n  color: #f57f17;\n  display: inline-flex;\n  font-size: 14px;\n  padding: 0 14px;\n  height: 40px;\n  text-decoration: none;\n  line-height: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.breadcrumbs__item:hover {\n  color: #757575;\n}\n.breadcrumbs__item--disabled {\n  color: #e0e0e0;\n  pointer-events: none;\n}\n.btn-toggle {\n  display: inline-flex;\n  border-radius: 2px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background, box-shadow;\n}\n.btn-toggle .btn {\n  justify-content: center;\n  min-width: auto;\n  width: auto;\n  padding: 0 8px;\n  margin: 0;\n  opacity: 0.4;\n  border-radius: 0;\n}\n.btn-toggle .btn:not(:last-child) {\n  border-right: 1px solid transparent;\n}\n.btn-toggle .btn:after {\n  display: none;\n}\n.btn-toggle .btn[data-selected] {\n  opacity: 1;\n}\n.btn-toggle .btn__content {\n  padding: 0;\n}\n.btn-toggle .btn span + .icon {\n  font-size: initial;\n  margin-left: 10px;\n}\n.btn-toggle--selected {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.btn {\n  align-items: center;\n  border-radius: 2px;\n  display: inline-flex;\n  height: 36px;\n  flex: 0 1 auto;\n  font-size: 14px;\n  font-weight: 500;\n  justify-content: center;\n  margin: 6px 8px;\n  min-width: 88px;\n  outline: 0;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), color 1ms;\n  position: relative;\n  vertical-align: middle;\n  user-select: none;\n}\n.btn__content:before {\n  border-radius: inherit;\n  color: inherit;\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  opacity: 0.12;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.btn--active .btn__content:before,\n.btn:hover .btn__content:before,\n.btn:focus .btn__content:before {\n  background-color: currentColor;\n}\n.btn__content {\n  align-items: center;\n  border-radius: inherit;\n  color: inherit;\n  display: flex;\n  height: 100%;\n  flex: 1 0 auto;\n  justify-content: center;\n  margin: 0 auto;\n  padding: 0 16px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n}\n.btn--flat {\n  background-color: transparent !important;\n  box-shadow: none !important;\n}\n.btn--raised {\n  will-change: box-shadow;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.btn--raised:active {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.btn.btn--icon .btn__content .icon {\n  color: inherit;\n}\n.btn--icon {\n  background: transparent;\n  box-shadow: none !important;\n  border-radius: 50%;\n  justify-content: center;\n  height: 36px;\n  width: 36px;\n  min-width: 0;\n}\n.btn--icon .btn__content {\n  padding: 0;\n}\n.btn--icon .btn__content:before {\n  border-radius: 50%;\n}\n.btn--icon.btn--small {\n  width: 28px;\n}\n.btn--icon.btn--small .btn__content {\n  height: 28px;\n}\n.btn--icon.btn--large {\n  width: 44px;\n}\n.btn--icon.btn--large .btn__content {\n  height: 44px;\n}\n.btn--floating {\n  border-radius: 50%;\n  min-width: 0;\n  height: 56px;\n  width: 56px;\n  padding: 0;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.btn--floating:active {\n  box-shadow: 0 7px 8px -4px rgba(0,0,0,0.2), 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12);\n}\n.btn--floating .btn__content {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n}\n.btn--floating .btn__content .icon {\n  color: inherit;\n}\n.btn--floating:after {\n  border-radius: 50%;\n}\n.btn--floating .icon:not(:only-of-type):last-of-type {\n  opacity: 0;\n  position: absolute;\n  transform: rotate(-45deg);\n  left: calc(50% - 12px);\n  top: calc(50% - 12px);\n}\n.btn--floating.btn--active .icon:not(:only-of-type):first-of-type {\n  opacity: 0;\n  transform: rotate(45deg);\n  left: calc(50% - 12);\n  top: calc(50% - 12);\n}\n.btn--floating.btn--active .icon:not(:only-of-type):last-of-type {\n  opacity: 1;\n  transform: none;\n}\n.btn--floating .icon {\n  height: 24px;\n  width: 24px;\n}\n.btn--floating.btn--small {\n  height: 40px;\n  width: 40px;\n}\n.btn--floating.btn--small .icon {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n}\n.btn--floating.btn--small.btn--floating .icon {\n  left: calc(50% - 9px);\n  top: calc(50% - 9px);\n}\n.btn--floating.btn--large {\n  height: 72px;\n  width: 72px;\n}\n.btn--floating.btn--large .icon {\n  font-size: 30px;\n  height: 30px;\n  width: 30px;\n}\n.btn--floating.btn--large.btn--floating .icon {\n  left: calc(50% - 15px);\n  top: calc(50% - 15px);\n}\n.btn--reverse .btn__content {\n  flex-direction: row-reverse;\n}\n.btn--reverse.btn--column .btn__content {\n  flex-direction: column-reverse;\n}\n.btn--fixed,\n.btn--absolute {\n  margin: 0;\n}\n.btn.btn--absolute {\n  position: absolute;\n}\n.btn.btn--fixed {\n  position: fixed;\n}\n.btn--top:not(.btn--absolute) {\n  top: 16px;\n}\n.btn--top.btn--absolute {\n  top: -28px;\n}\n.btn--top.btn--absolute.btn--small {\n  top: -20px;\n}\n.btn--top.btn--absolute.btn--large {\n  top: -36px;\n}\n.btn--bottom:not(.btn--absolute) {\n  bottom: 16px;\n}\n.btn--bottom.btn--absolute {\n  bottom: -28px;\n}\n.btn--bottom.btn--absolute.btn--small {\n  bottom: -20px;\n}\n.btn--bottom.btn--absolute.btn--large {\n  bottom: -36px;\n}\n.btn--left {\n  left: 16px;\n}\n.btn--right {\n  right: 16px;\n}\n.btn--small {\n  font-size: 13px;\n  height: 28px;\n}\n.btn--large {\n  font-size: 15px;\n  height: 44px;\n}\n.btn--loader {\n  pointer-events: none;\n}\n.btn--loader .btn__content {\n  opacity: 0;\n}\n.btn__loading {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.btn__loading .icon--left {\n  margin-right: 1rem;\n  line-height: inherit;\n}\n.btn__loading .icon--right {\n  margin-left: 1rem;\n  line-height: inherit;\n}\n.btn--outline {\n  border: 1px solid currentColor;\n  background: transparent !important;\n  box-shadow: none;\n}\n.btn--outline:hover {\n  box-shadow: none;\n}\n.btn--block {\n  display: flex;\n  flex: 1;\n  margin: 6px 0;\n  width: 100%;\n}\n.btn--round {\n  border-radius: 28px;\n}\n.btn--round:after {\n  border-radius: 28px;\n}\n.btn .icon--right {\n  margin-left: 16px;\n}\n.btn .icon--left {\n  margin-right: 16px;\n}\n.btn.primary,\n.btn.secondary,\n.btn.success,\n.btn.error,\n.btn.warning,\n.btn.info {\n  color: #fff;\n}\n.card {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  position: relative;\n  border-radius: 2px;\n  min-width: 0;\n}\n.card > *:first-child {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n}\n.card > *:last-child {\n  border-bottom-left-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n.card--raised {\n  box-shadow: 0 1px 8px rgba(0,0,0,0.2), 0 3px 4px rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12);\n}\n.card--tile {\n  border-radius: 0;\n}\n.card--flat {\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.card--hover {\n  cursor: pointer;\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property: box-shadow;\n}\n.card--hover:hover {\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.card__title {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 16px;\n}\n.card__title--primary {\n  padding-top: 24px;\n}\n.card__text {\n  padding: 16px;\n  width: 100%;\n}\n.card__media {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n}\n.card__media img {\n  width: 100%;\n}\n.card__media__background {\n  border-radius: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.card__media__content {\n  flex: 1;\n  position: relative;\n}\n.card__actions {\n  align-items: center;\n  display: flex;\n  padding: 8px 4px;\n}\n.card__actions > * {\n  margin: 0 4px;\n}\n.carousel {\n  height: 500px;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.carousel__item {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 0 100%;\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n  transition: 0.2s ease-out;\n}\n.carousel__left,\n.carousel__right {\n  position: absolute;\n  top: 50%;\n  z-index: 1;\n  left: 5px;\n  transform: translateY(-50%);\n}\n.carousel__left .btn,\n.carousel__right .btn {\n  color: #fff;\n  margin: 0 !important;\n  height: auto;\n  width: auto;\n}\n.carousel__left .btn i,\n.carousel__right .btn i {\n  font-size: 48px;\n}\n.carousel__left .btn:hover,\n.carousel__right .btn:hover {\n  background: none;\n}\n.carousel__right {\n  left: auto;\n  right: 5px;\n}\n.carousel__controls {\n  background: rgba(0,0,0,0.5);\n  align-items: center;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  left: 0;\n  position: absolute;\n  height: 50px;\n  list-style-type: none;\n  width: 100%;\n  z-index: 1;\n}\n.carousel__controls__item {\n  color: #fff;\n  margin: 0 1rem !important;\n}\n.carousel__controls__item i {\n  opacity: 0.5;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.carousel__controls__item--active i {\n  opacity: 1;\n  vertical-align: middle;\n  font-size: 2rem !important;\n}\n.carousel__controls__item:hover {\n  background: none;\n}\n.carousel__controls__item:hover i {\n  opacity: 0.8;\n}\n.chip {\n  align-items: center;\n  background: #e0e0e0;\n  border: 1px solid #e0e0e0;\n  border-radius: 28px;\n  cursor: default;\n  display: inline-flex;\n  justify-content: space-between;\n  font-size: 14px;\n  padding: 0 12px;\n  margin: 8px;\n  height: 32px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  white-space: nowrap;\n  color: rgba(0,0,0,0.87);\n}\n.chip .avatar {\n  border-radius: 50%;\n  height: 32px;\n  width: 32px;\n  min-width: 32px;\n  margin-left: -14px;\n  margin-right: 8px;\n  color: #fff;\n}\n.chip .avatar img {\n  width: 100%;\n  height: 100%;\n}\n.chip:focus {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  outline: none;\n}\n.chip--label {\n  border-radius: 2px;\n}\n.chip--outline {\n  background: transparent !important;\n  color: #9e9e9e;\n}\n.chip--small {\n  height: 26px;\n}\n.chip--small .avatar {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n}\n.chip__close {\n  color: inherit;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  font-size: 24px;\n  margin-left: 4px;\n  margin-right: -2px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.chip__close:hover {\n  opacity: 0.8;\n}\n.chip--removable {\n  padding: 0 4px 0 12px;\n}\n.chip--select-multi {\n  margin: 8px 8px 8px 0;\n}\n.chip .icon {\n  color: inherit;\n  opacity: 0.54;\n}\n.chip .icon--right {\n  margin-left: 4px;\n}\n.chip .icon--left {\n  margin-right: 4px;\n}\n.datatable thead th.column.sortable {\n  cursor: pointer;\n}\n.datatable thead th.column.sortable i {\n  font-size: 16px;\n  vertical-align: sub;\n  display: inline-block;\n  opacity: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.datatable thead th.column.sortable:hover i {\n  opacity: 0.6;\n}\n.datatable thead th.column.sortable.active {\n  transform: none;\n}\n.datatable thead th.column.sortable.active i {\n  opacity: 1;\n}\n.datatable thead th.column.sortable.active.desc i {\n  transform: rotate(-180deg);\n}\n.datatable__actions {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  font-size: 12px;\n}\n.datatable__actions .btn {\n  color: inherit;\n}\n.datatable__actions .btn:last-of-type {\n  margin-left: 18px;\n}\n.datatable__actions__pagination {\n  text-align: center;\n  margin: 0 26px 0 32px;\n}\n.datatable__actions__select {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.datatable__actions__select .input-group--select {\n  margin: 13px 0 13px 34px;\n  padding: 0;\n  position: initial;\n}\n.datatable__actions__select .input-group--select .input-group__selections__comma {\n  font-size: 12px;\n}\n.datatable__progress tr {\n  height: auto !important;\n}\n.datatable__progress th {\n  padding: 0 !important;\n}\n.datatable__progress th .progress-linear {\n  top: -3px;\n  margin: 0 0 -3px;\n}\n.picker--date {\n  color: #fff;\n  width: 100%;\n}\n.picker--date__years {\n  background: #fff;\n  color: #000;\n  font-size: 18px;\n  font-weight: 400;\n  list-style-type: none;\n  max-height: 290px;\n  overflow: auto;\n  padding: 0;\n  text-align: center;\n}\n.picker--date__years li {\n  cursor: pointer;\n  margin: 16px 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--date__years li:hover {\n  color: #f57f17;\n}\n.picker--date__years li.active {\n  color: #f57f17;\n  font-size: 24px;\n  font-weight: 500;\n  margin: 20px 0;\n}\n.picker--date__title {\n  justify-content: space-between;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.picker--date__title-year {\n  align-items: center;\n  display: inline-flex;\n  font-size: 14px;\n}\n.picker--date__title-date {\n  font-size: 34px;\n}\n.picker--date__title-date > div {\n  position: relative;\n}\n.picker--date__title-year,\n.picker--date__title-date {\n  font-weight: 500;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.picker--date__title-year:not(.active),\n.picker--date__title-date:not(.active) {\n  cursor: pointer;\n  opacity: 0.6;\n}\n.picker--date__title-year:hover,\n.picker--date__title-date:hover {\n  opacity: 1;\n}\n.picker--date__header {\n  color: #000;\n  padding: 4px 16px;\n}\n.picker--date__header-selector {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n}\n.picker--date__header-selector .btn {\n  color: #000;\n  margin: 0;\n}\n.picker--date__header-selector .icon {\n  cursor: pointer;\n  user-select: none;\n}\n.picker--date__header-selector-date {\n  flex: 1;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.picker--date__header-selector-date strong {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  display: block;\n  width: 100%;\n}\n.picker--date__table {\n  position: relative;\n}\n.picker--date table {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  top: 0;\n}\n.picker--date table thead th {\n  padding: 8px 0;\n}\n.picker--date table th {\n  color: rgba(0,0,0,0.54);\n  font-weight: 600;\n  font-size: 12px;\n}\n.picker--date table th,\n.picker--date table td {\n  text-align: center;\n  width: 45px;\n}\n.picker--date table .btn {\n  margin: 0;\n}\n.picker--date table .btn:hover,\n.picker--date table .btn .btn__content:before {\n  background-color: transparent !important;\n}\n.picker--date table .btn:after {\n  position: absolute;\n  content: '';\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n}\n.picker--date table .btn__content {\n  overflow: visible;\n  transition: none;\n  z-index: 1;\n}\n.picker--date table .btn.btn--current:not(.btn--active) {\n  color: #f57f17;\n}\n.picker--date table .btn.btn--floating {\n  height: 32px;\n  width: 32px;\n}\n.picker--date table .btn.btn--floating:after {\n  background: #f57f17 !important;\n  opacity: 0;\n  transform: scale(0);\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating:not(.btn--active):hover:after {\n  opacity: 0.6;\n  transform: scale(1);\n}\n.picker--date table .btn.btn--floating.btn--active {\n  color: #fff;\n}\n.picker--date table .btn.btn--floating.btn--active:after {\n  background: #f57f17 !important;\n  opacity: 1;\n  transform: none;\n}\n.picker--landscape .picker--date__years {\n  margin-left: 170px;\n  width: 330px;\n}\n.picker--date.picker--dark .picker--date__years {\n  background: #424242;\n}\n.picker--date.picker--dark .picker--date__years li {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__years li.active {\n  color: #448aff;\n}\n.picker--date.picker--dark .picker--date__header {\n  color: #fff;\n}\n.picker--date.picker--dark .picker__title {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table th {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table .btn {\n  color: #fff;\n}\n.picker--date.picker--dark .picker--date__table table .btn--current {\n  color: #448aff;\n}\n.picker--date.picker--dark .picker--date__table table .btn--active {\n  color: #000;\n}\n.picker--date.picker--dark .picker--date__table table .btn--floating:after {\n  background: #448aff !important;\n}\n.dialog {\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,0.2), 0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12);\n  border-radius: 2px;\n  margin: 24px;\n  overflow-y: auto;\n  pointer-events: auto;\n  transition: 0.3s ease-in-out;\n}\n.dialog__content {\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  transition: 0.3s ease-in-out;\n  width: 100%;\n  z-index: 5;\n}\n.dialog:not(.dialog--fullscreen) {\n  max-width: 90%;\n  max-height: 90%;\n}\n.dialog__container {\n  display: inline-block;\n  vertical-align: middle;\n}\n.dialog--fullscreen {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  overflow-y: auto;\n  top: 0;\n  left: 0;\n}\n.dialog--fullscreen > .card {\n  min-height: 100%;\n  min-width: 100%;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n.dialog--scrollable {\n  overflow: hidden;\n}\n.dialog--scrollable .card__text {\n  overflow-y: auto;\n}\n.divider {\n  border: none;\n  display: block;\n  height: 1px;\n  flex: 1;\n  width: 100%;\n}\n.divider--inset {\n  margin-left: 72px;\n  width: calc(100% - 72px);\n}\n.expansion-panel {\n  text-align: left;\n  list-style-type: none;\n  padding: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.expansion-panel > li {\n  border: 1px solid rgba(0,0,0,0.12);\n}\n.expansion-panel > li:not(:first-child) {\n  border-top: none;\n}\n.expansion-panel__header {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  height: 48px;\n  position: relative;\n  padding-left: 1rem;\n}\n.expansion-panel__header i {\n  margin-right: 1rem;\n}\n.expansion-panel__header:after {\n  content: '\\E313';\n  font-family: 'Material Icons';\n  font-size: 1.5rem;\n  position: absolute;\n  right: 15px;\n  top: calc(50% - 16px);\n  color: inherit;\n  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.expansion-panel__header--active:after {\n  transform: rotate(-180deg);\n}\n.expansion-panel__body {\n  background-color: rgba(0,0,0,0.03);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.expansion-panel__body .card {\n  border-radius: 0;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.footer {\n  align-items: center;\n  display: flex;\n  height: 36px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.footer--absolute,\n.footer--fixed {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  z-index: 3;\n}\n.footer--absolute {\n  position: absolute;\n}\n.footer--fixed {\n  position: fixed;\n}\n.footer > *:first-child {\n  margin-left: 8px;\n}\n.footer > *:last-child {\n  margin-right: 8px;\n}\n@media only screen and (max-width: 599px) {\n  .footer > *:first-child {\n    margin-left: 16px;\n  }\n  .footer > *:last-child {\n    margin-right: 16px;\n  }\n}\n.icon {\n  align-items: center;\n  display: inline-flex;\n  font-size: 24px;\n  justify-content: center;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  vertical-align: middle;\n}\n.icon.icon--large {\n  font-size: 2.5rem;\n}\n.icon.icon--medium {\n  font-size: 2rem;\n}\n.icon.icon--x-large {\n  font-size: 3rem;\n}\n.input-group {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n  min-width: 24px;\n  padding: 18px 0;\n  position: relative;\n  width: 100%;\n  outline: none;\n  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group label {\n  font-size: 16px;\n  line-height: 32px;\n  height: 30px;\n  max-width: 90%;\n  min-width: 0;\n  overflow: hidden;\n  pointer-events: none;\n  text-align: left;\n  text-overflow: ellipsis;\n  transform: translate3d(0, 0, 0);\n  transform-origin: top left;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n  width: 100%;\n  z-index: 0;\n}\n.input-group__input {\n  display: flex;\n  flex: 1 0 100%;\n  min-width: 0;\n  min-height: 30px;\n}\n.input-group__icon-cb {\n  cursor: pointer;\n}\n.input-group.input-group--focused .input-group__input .icon {\n  color: #f57f17;\n}\n.input-group--disabled .input-group__details:before {\n  background-color: transparent;\n  background-position: bottom;\n  background-size: 3px 1px;\n  background-repeat: repeat-x;\n}\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error).input-group--focused label,\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error):focus label {\n  color: #f57f17;\n}\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error).input-group--focused textarea,\n.input-group.input-group--text-field:not(.input-group--single-line):not(.input-group--error):focus textarea {\n  border-color: #f57f17;\n}\n.input-group.input-group--text-field.input-group--focused:not(.input-group--disabled) .input-group__details:after,\n.input-group.input-group--text-field:focus:not(.input-group--disabled) .input-group__details:after {\n  transform: scaleX(1);\n}\n.input-group--required label:after {\n  content: '*';\n}\n.input-group--required.input-group--focused label:after {\n  color: #f44336;\n}\n.input-group.input-group--error input,\n.input-group.input-group--error textarea {\n  caret-color: #f44336;\n}\n.input-group.input-group--error textarea {\n  border-color: #f44336;\n}\n.input-group.input-group--error label {\n  animation: shake 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group.input-group--error label,\n.input-group.input-group--error .input-group__input .icon {\n  color: #f44336;\n}\n.input-group.input-group--error .input-group__details:after,\n.input-group.input-group--error .input-group__details:before {\n  background-color: #f44336;\n}\n.input-group .slide-y-transition-leave,\n.input-group .slide-y-transition-leave-to {\n  position: absolute;\n}\n.input-group__details {\n  display: flex;\n  padding-top: 4px;\n  flex: 1 0 100%;\n  font-size: 12px;\n  min-height: 22px;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.input-group__details:after,\n.input-group__details:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.input-group__details:after {\n  background-color: #f57f17;\n  top: 0;\n  height: 2px;\n  transform: scaleX(0);\n  transform-origin: center center 0;\n  width: 100%;\n  z-index: 1;\n}\n.input-group__details:before {\n  top: 0;\n  height: 1px;\n  width: 100%;\n  z-index: 0;\n}\n.input-group--hide-details .input-group__details {\n  min-height: 2px;\n  padding: 0;\n}\n.input-group__hint {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group .input-group__error {\n  flex: 1 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  color: #f44336;\n}\n.input-group--overflow.input-group--active,\n.input-group--segmented.input-group--active,\n.input-group--editable.input-group--active {\n  background-color: #fff;\n}\n.list {\n  list-style-type: none;\n  padding: 8px 0 8px;\n  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.list .input-group {\n  margin: 0;\n}\n.list > .list__tile ~ .list__tile {\n  margin-top: 0;\n}\n.list__tile {\n  font-size: 16px;\n  font-weight: 400;\n  display: flex;\n  height: 48px;\n  text-decoration: none;\n  align-items: center;\n  padding: 0 16px;\n  margin: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n}\n.list__tile:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  background-color: rgba(0,0,0,0.12);\n}\na.list__tile:hover,\n.list__tile--highlighted {\n  background: rgba(0,0,0,0.12);\n}\n.list__tile__content,\n.list__tile__action,\n.list__tile__avatar {\n  height: 100%;\n}\n.list__tile__title,\n.list__tile__sub-title {\n  white-space: nowrap;\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.list__tile__title {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative;\n  text-align: left;\n}\n.list__tile__sub-title {\n  font-size: 14px;\n}\n.list__tile .avatar {\n  justify-content: flex-start;\n  min-width: 56px;\n}\n.list__tile__action {\n  display: flex;\n  justify-content: flex-start;\n  min-width: 56px;\n  align-items: center;\n}\n.list__tile__action .input-group {\n  align-items: center;\n  padding: 0;\n}\n.list__tile__action .input-group__details {\n  display: none;\n}\n.list__tile__action .icon {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.list__tile__action .btn {\n  padding: 0;\n  margin: 0;\n}\n.list__tile__action .btn--icon {\n  margin: -8px;\n}\n.list__tile__action-text {\n  color: #9e9e9e;\n  font-size: 12px;\n}\n.list__tile__action--stack {\n  align-items: flex-end;\n  justify-content: space-between;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  white-space: nowrap;\n  flex-direction: column;\n}\n.list__tile__content {\n  text-align: left;\n  flex: 0 1 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.list__tile__content + .avatar {\n  justify-content: flex-end;\n}\n.list__tile__content + .list__tile__action:not(.list__tile__action--stack) {\n  justify-content: flex-end;\n}\n.list__tile--active {\n  color: #f57f17;\n}\n.list__tile--disabled {\n  opacity: 0.4 !important;\n  pointer-events: none;\n}\n.list__tile--avatar {\n  height: 56px;\n}\n.list--dense {\n  padding-top: 4px;\n}\n.list--dense .subheader {\n  font-size: 13px;\n  height: 40px;\n}\n.list--dense .list--group .subheader {\n  height: 40px;\n}\n.list--dense .list__tile {\n  font-size: 13px;\n}\n.list--dense .list__tile--avatar {\n  height: 48px;\n}\n.list--dense .list__tile--avatar .avatar .icon,\n.list--dense .list__tile--avatar .avatar img {\n  height: 38px;\n  width: 38px;\n}\n.list--dense .list__tile:not(.list__tile--avatar) {\n  height: 40px;\n}\n.list--dense .list__tile .icon {\n  font-size: 21px;\n}\n.list--dense .list__tile__sub-title {\n  font-size: 13px;\n}\n.list--two-line .list__tile {\n  height: 72px;\n}\n.list--two-line.list--dense .list__tile {\n  height: 60px;\n}\n.list--three-line .list__tile {\n  height: 88px;\n}\n.list--three-line .list__tile__sub-title {\n  white-space: initial;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  display: -webkit-box;\n}\n.list--three-line.list--dense .list__tile {\n  height: 76px;\n}\n.list--group {\n  position: relative;\n  padding: 0;\n}\n.list--group:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 1px;\n  opacity: 0;\n  width: 100%;\n  background-color: rgba(0,0,0,0.12);\n}\n.list--group .list__tile {\n  padding-left: 72px;\n}\n.list--group .list__tile--active .list__tile__title {\n  color: #f57f17;\n}\n.list--group__header + .list--group:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile {\n  background: rgba(0,0,0,0.12);\n}\n.list--group__header--active .list__tile:after {\n  opacity: 1;\n}\n.list--group__header--active .list__tile .list__tile__title {\n  color: inherit;\n}\n.list--group__header--active .list__tile .list__tile__action:last-of-type .icon {\n  transform: rotate(-180deg);\n}\n.list--group__header--no-action + .list--group .list__tile {\n  padding-left: 16px;\n}\n.list--subheader {\n  padding-top: 0;\n}\n.menu {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.menu--disabled {\n  cursor: not-allowed;\n}\n.menu--disabled .menu__activator {\n  cursor: not-allowed;\n}\n.menu__activator {\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n}\n.menu__activator .toolbar__side-icon {\n  margin: 0;\n}\n.menu__content {\n  position: absolute;\n  display: inline-block;\n  border-radius: 2px;\n  max-width: 80%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  z-index: 6;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.menu__content--active {\n  pointer-events: none;\n}\n.menu__content--dropdown {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-top: 1px solid rgba(0,0,0,0.12);\n}\n.menu-transition-enter .list__tile {\n  min-width: 0;\n  transition-delay: 0.4s;\n  opacity: 0;\n  transform: translateY(-15px);\n  pointer-events: none;\n}\n.menu-transition-enter-to .list__tile {\n  pointer-events: auto;\n  opacity: 1;\n}\n.menu-transition-enter-to .list__tile--active {\n  transform: none !important;\n}\n.menu-transition-leave-to {\n  transform: translateY(-10px);\n}\n.menu-transition-leave-active,\n.menu-transition-leave-to {\n  pointer-events: none;\n}\n.menu-transition-enter,\n.menu-transition-leave-to {\n  opacity: 0;\n}\n.menu-transition-enter-to,\n.menu-transition-leave {\n  opacity: 1;\n}\n.menu-transition-enter-active,\n.menu-transition-leave-active {\n  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.menu-transition-enter.menu__content--auto .list__tile--active {\n  opacity: 1;\n  transform: none !important;\n  pointer-events: auto;\n}\n.navigation-drawer {\n  max-width: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  padding: 0 0 100px;\n  pointer-events: auto;\n  position: fixed;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 300px;\n  top: 0;\n  left: 0;\n  will-change: transform;\n  z-index: 3;\n}\n.navigation-drawer__border {\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 1px;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) {\n  transition: none !important;\n  z-index: -1;\n}\n.navigation-drawer:not(.navigation-drawer--is-booted) + .toolbar,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ main,\n.navigation-drawer:not(.navigation-drawer--is-booted) ~ .footer {\n  transition: none !important;\n}\n@media only screen and (max-width: 1023px) {\n  .navigation-drawer:not(.navigation-drawer--is-booted) + .toolbar,\n  .navigation-drawer:not(.navigation-drawer--is-booted) ~ main,\n  .navigation-drawer:not(.navigation-drawer--is-booted) ~ .footer {\n    padding-left: 0 !important;\n  }\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer:not(.navigation-drawer--right) {\n  transform: translate3d(-300px, 0, 0);\n}\n.navigation-drawer--close:not(.navigation--permanent).navigation-drawer--right {\n  transform: translate3d(300px, 0, 0);\n}\n.navigation-drawer--right {\n  left: auto;\n  right: 0;\n}\n.navigation-drawer--absolute {\n  position: absolute;\n}\n.navigation-drawer--permanent.navigation-drawer--clipped,\n.navigation-drawer--persistent.navigation-drawer--clipped,\n.navigation-drawer--permanent.navigation-drawer--floating,\n.navigation-drawer--persistent.navigation-drawer--floating {\n  margin-top: 64px;\n  max-height: calc(100vh - 64px);\n}\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--fixed,\n.navigation-drawer--permanent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--clipped ~ .footer.footer--absolute,\n.navigation-drawer--permanent.navigation-drawer--floating ~ .footer.footer--absolute,\n.navigation-drawer--persistent.navigation-drawer--floating ~ .footer.footer--absolute {\n  padding-left: 0;\n  z-index: 3;\n}\n@media all and (max-width: 600px) and (orientation: landscape) {\n  .navigation-drawer--permanent.navigation-drawer--clipped,\n  .navigation-drawer--persistent.navigation-drawer--clipped,\n  .navigation-drawer--permanent.navigation-drawer--floating,\n  .navigation-drawer--persistent.navigation-drawer--floating {\n    margin-top: 48px;\n    max-height: calc(100vh - 48px);\n  }\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right):not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .toolbar,\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right):not(.navigation-drawer--clipped):not(.navigation-drawer--floating) ~ .toolbar {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ main,\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right) ~ main,\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open:not(.navigation-drawer--right) ~ .footer:not(.footer--fixed):not(.footer--absolute),\n.navigation-drawer--permanent.navigation-drawer--open:not(.navigation-drawer--right) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) + .toolbar,\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right:not(.navigation-drawer--clipped):not(.navigation-drawer--floating) + .toolbar {\n  padding-right: 300px;\n}\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right ~ main,\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right ~ main,\n.navigation-drawer--persistent:not(.navigation-drawer--is-mobile).navigation-drawer--open.navigation-drawer--right ~ .footer:not(.footer--fixed):not(.footer--absolute),\n.navigation-drawer--permanent.navigation-drawer--open.navigation-drawer--right ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-right: 300px;\n}\n.navigation-drawer--floating:after {\n  display: none;\n}\n.navigation-drawer--mini-variant {\n  margin-top: 64px;\n  max-height: calc(100vh - 64px);\n  overflow: hidden;\n  width: 80px;\n}\n@media all and (max-width: 600px) and (orientation: landscape) {\n  .navigation-drawer--mini-variant {\n    margin-top: 48px;\n    max-height: calc(100vh - 48px);\n  }\n}\n.navigation-drawer--mini-variant .list__tile__action,\n.navigation-drawer--mini-variant .list__tile__avatar {\n  justify-content: center;\n  min-width: 48px;\n}\n.navigation-drawer--mini-variant .list__tile__content,\n.navigation-drawer--mini-variant .list__tile:after {\n  opacity: 0;\n}\n.navigation-drawer--mini-variant .subheader,\n.navigation-drawer--mini-variant .divider,\n.navigation-drawer--mini-variant .list--group {\n  display: none !important;\n}\n.navigation-drawer--mini-variant ~ .toolbar {\n  padding-left: 0 !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ main {\n  padding-left: 80px !important;\n}\n.navigation-drawer--mini-variant:not(.navigation-drawer--close) ~ .footer:not(.footer--fixed):not(.footer--absolute) {\n  padding-left: 80px !important;\n}\n.navigation-drawer--temporary,\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent) {\n  z-index: 5;\n}\n.navigation-drawer--temporary:not(.navigation-drawer--close),\n.navigation-drawer--is-mobile:not(.navigation-drawer--permanent):not(.navigation-drawer--close) {\n  box-shadow: 0 8px 10px -5px rgba(0,0,0,0.2), 0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12);\n}\n~ toolbar + main {\n  min-height: calc(100vh - 64px);\n}\n> .list .list__tile {\n  transition: none;\n  font-weight: 500;\n}\n> .list .list__tile--active .list__tile__title {\n  color: inherit;\n}\n> .list .list__tile--active > *:first-child .icon {\n  color: #f57f17;\n}\n> .list .list--group .list__tile {\n  font-weight: 400;\n}\n> .list .list--group__header--active:after {\n  background: transparent;\n}\n> .list .list--group__header--active .list__tile__action:first-of-type .icon {\n  color: #f57f17;\n}\n> .list .list--group__container .list__tile--active .list__tile__title {\n  color: #f57f17;\n}\n> .list:not(.list--dense) .list__tile {\n  font-size: 14px;\n}\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  z-index: 4;\n}\n.overlay--absolute {\n  position: absolute;\n}\n.overlay:before {\n  background-color: #212121;\n  bottom: 0;\n  content: '';\n  filter: blur(10%);\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: 0.5s ease;\n  width: 100%;\n}\n.overlay--active {\n  pointer-events: auto;\n}\n.overlay--active:before {\n  opacity: 0.46;\n}\n.pagination {\n  align-items: center;\n  align-items: center;\n  display: inline-flex;\n  list-style-type: none;\n  height: 40px;\n  margin: 0;\n  overflow-x: auto;\n  overflow-y: hidden;\n  max-width: 100%;\n  padding: 0;\n}\n.pagination > li {\n  align-items: center;\n  display: flex;\n}\n.pagination a {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.pagination a:hover {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.pagination--circle .pagination__item,\n.pagination--circle .pagination__more,\n.pagination--circle .pagination__navigation {\n  border-radius: 50%;\n}\n.pagination--disabled {\n  pointer-events: none;\n  opacity: 0.6;\n}\n.pagination__item {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  border-radius: 4px;\n  color: rgba(0,0,0,0.87);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  background: transparent;\n  height: 34px;\n  width: 34px;\n  margin: 0.3rem;\n  text-decoration: none;\n}\n.pagination__item--active {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n  background: #f57f17;\n  color: #fff;\n}\n.pagination__navigation {\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  color: rgba(0,0,0,0.87);\n  height: 2rem;\n  border-radius: 4px;\n  width: 2rem;\n  margin: 0.3rem 15px;\n}\n.pagination__navigation .icon {\n  font-size: 2rem;\n  transition: 0.2s cubic-bezier(0.4, 0, 0.6, 1);\n  vertical-align: middle;\n  color: rgba(0,0,0,0.54);\n}\n.pagination__navigation--disabled {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.pagination__more {\n  margin: 0.3rem;\n  display: inline-flex;\n  align-items: flex-end;\n  justify-content: center;\n  height: 2rem;\n  width: 2rem;\n}\n.parallax {\n  position: relative;\n  overflow: hidden;\n  z-index: 0;\n}\n.parallax__image-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n}\n.parallax__image {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  min-width: 100%;\n  min-height: 100%;\n  display: none;\n  transform: translate3d(-50%, 0, 0);\n  z-index: 1;\n}\n.parallax__content {\n  color: #fff;\n  height: 100%;\n  z-index: 2;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 1rem;\n}\n.picker {\n  border-radius: 2px;\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n}\n.picker .card__row--actions {\n  border: none;\n  margin-top: -20px;\n}\n.picker__title {\n  background: #f57f17;\n  color: #fff;\n  border-top-left-radius: 2px;\n  border-top-right-radius: 2px;\n  height: 105px;\n  padding: 16px;\n}\n.picker__body {\n  height: 290px;\n  overflow: hidden;\n  position: relative;\n}\n.picker--landscape {\n  flex-direction: row;\n  flex-wrap: wrap;\n  width: 500px;\n}\n.picker--landscape .picker__title {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  flex: 0 1 170px;\n  width: 170px;\n  height: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  z-index: 1;\n}\n.picker--landscape .picker__body {\n  flex: 1 0;\n  width: 330px;\n  margin-left: 170px;\n}\n.picker--landscape .card__row--actions {\n  margin-left: 170px;\n  width: 330px;\n}\n.picker--dark {\n  color: #fff;\n}\n.picker--dark .btn {\n  color: #fff;\n}\n.picker--dark .picker__body {\n  background: #424242;\n}\n.picker--dark .picker__title {\n  background: #616161;\n}\n.progress-circular {\n  position: relative;\n  display: inline-flex;\n}\n.progress-circular--indeterminate svg {\n  animation: progress-circular-rotate 1.4s linear infinite;\n  transform-origin: center center;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 0.2s ease-in-out;\n  z-index: 0;\n}\n.progress-circular--indeterminate .progress-circular__overlay {\n  animation: progress-circular-dash 1.4s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0px;\n}\n.progress-circular__underlay {\n  stroke: rgba(0,0,0,0.1);\n  z-index: 1;\n}\n.progress-circular__overlay {\n  stroke: currentColor;\n  z-index: 2;\n  transition: all 0.6s ease-in-out;\n}\n.progress-circular__info {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n@-moz-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-webkit-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-o-keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@keyframes progress-circular-dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0px;\n  }\n  50% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -15px;\n  }\n  100% {\n    stroke-dasharray: 100, 200;\n    stroke-dashoffset: -125px;\n  }\n}\n@-moz-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes progress-circular-rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.progress-linear {\n  background: transparent;\n  margin: 1rem 0;\n  overflow: hidden;\n  width: 100%;\n  position: relative;\n}\n.progress-linear .progress-linear__bar {\n  background: #fabf8b;\n}\n.progress-linear .progress-linear__bar__determinate {\n  background: #f57f17;\n}\n.progress-linear .progress-linear__bar__indeterminate .long,\n.progress-linear .progress-linear__bar__indeterminate .short {\n  background: #f57f17;\n}\n.progress-linear__bar {\n  width: 100%;\n  height: inherit;\n  position: relative;\n  transition: 0.3s ease-in;\n  z-index: 1;\n}\n.progress-linear__bar__determinate {\n  height: inherit;\n  transition: 0.3s ease-in;\n}\n.progress-linear__bar__indeterminate .long,\n.progress-linear__bar__indeterminate .short {\n  height: inherit;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  will-change: left, right;\n  width: auto;\n  background-color: inherit;\n}\n.progress-linear__bar__indeterminate--active .long {\n  animation: indeterminate;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear__bar__indeterminate--active .short {\n  animation: indeterminate-short;\n  animation-duration: 2.2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate--active .long {\n  animation: query;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--query .progress-linear__bar__indeterminate--active .short {\n  animation: query-short;\n  animation-duration: 2s;\n  animation-iteration-count: infinite;\n}\n.progress-linear--secondary .progress-linear__bar {\n  background: #a1a1a1;\n}\n.progress-linear--secondary .progress-linear__bar__determinate {\n  background: #424242;\n}\n.progress-linear--secondary .progress-linear__bar__indeterminate .long,\n.progress-linear--secondary .progress-linear__bar__indeterminate .short {\n  background: #424242;\n}\n.progress-linear--success .progress-linear__bar {\n  background: #a5d8a7;\n}\n.progress-linear--success .progress-linear__bar__determinate {\n  background: #4caf50;\n}\n.progress-linear--success .progress-linear__bar__indeterminate .long,\n.progress-linear--success .progress-linear__bar__indeterminate .short {\n  background: #4caf50;\n}\n.progress-linear--info .progress-linear__bar {\n  background: #90cbf9;\n}\n.progress-linear--info .progress-linear__bar__determinate {\n  background: #2196f3;\n}\n.progress-linear--info .progress-linear__bar__indeterminate .long,\n.progress-linear--info .progress-linear__bar__indeterminate .short {\n  background: #2196f3;\n}\n.progress-linear--warning .progress-linear__bar {\n  background: #ffe083;\n}\n.progress-linear--warning .progress-linear__bar__determinate {\n  background: #ffc107;\n}\n.progress-linear--warning .progress-linear__bar__indeterminate .long,\n.progress-linear--warning .progress-linear__bar__indeterminate .short {\n  background: #ffc107;\n}\n.progress-linear--error .progress-linear__bar {\n  background: #faa19b;\n}\n.progress-linear--error .progress-linear__bar__determinate {\n  background: #f44336;\n}\n.progress-linear--error .progress-linear__bar__indeterminate .long,\n.progress-linear--error .progress-linear__bar__indeterminate .short {\n  background: #f44336;\n}\n@-moz-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-webkit-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-o-keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@keyframes indeterminate {\n  0% {\n    left: -90%;\n    right: 100%;\n  }\n  60% {\n    left: -90%;\n    right: 100%;\n  }\n  100% {\n    left: 100%;\n    right: -35%;\n  }\n}\n@-moz-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-webkit-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-o-keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n@-moz-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-webkit-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-o-keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@keyframes query {\n  0% {\n    right: -90%;\n    left: 100%;\n  }\n  60% {\n    right: -90%;\n    left: 100%;\n  }\n  100% {\n    right: 100%;\n    left: -35%;\n  }\n}\n@-moz-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-webkit-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@-o-keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n@keyframes query-short {\n  0% {\n    right: -200%;\n    left: 100%;\n  }\n  60% {\n    right: 107%;\n    left: -8%;\n  }\n  100% {\n    right: 107%;\n    left: -8%;\n  }\n}\n.input-group--selection-controls.input-group--tab-focused .input-group--selection-controls__ripple:before {\n  transform: translate3d(-50%, -50%, 0) scale(1);\n  opacity: 0.15;\n}\n.ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n}\n.ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: opacity;\n}\n.ripple__animation--enter {\n  transition: none;\n}\n.ripple__animation--visible {\n  opacity: 0.15;\n}\n.input-group--select .input-group--select__autocomplete {\n  display: block;\n  opacity: 0;\n  height: 0;\n}\n.input-group--select .input-group__append-icon {\n  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);\n}\n.input-group--select.input-group--focused .input-group--select__autocomplete {\n  display: inline-block;\n  height: 30px;\n  opacity: 1;\n  padding-bottom: 1px;\n}\n.input-group--select.input-group--focused .input-group__append-icon {\n  transform: rotate(-180deg);\n}\n.input-group--select .input-group__input,\n.input-group--select input {\n  cursor: pointer;\n}\n.input-group--select.input-group--disabled {\n  cursor: not-allowed;\n  pointer-events: none;\n}\n.input-group--select .input-group__selections {\n  align-items: center;\n  display: flex;\n  position: relative;\n  width: 100%;\n}\n.input-group--select .input-group__selections__comma {\n  display: inline-flex;\n  font-size: 16px;\n  padding-right: 4px;\n}\n.input-group--select .menu {\n  display: inline;\n}\n.input-group--select .fade-transition-leave-active {\n  position: absolute;\n  left: 0;\n}\n.input-group--select.input-group--autocomplete.input-group--focused:not(.input-group--multiple) .input-group__selections__comma {\n  display: none;\n}\n.input-group--overflow,\n.input-group--editable,\n.input-group--segmented {\n  padding: 0;\n}\n.input-group--overflow .input-group__selections,\n.input-group--editable .input-group__selections,\n.input-group--segmented .input-group__selections,\n.input-group--overflow input,\n.input-group--editable input,\n.input-group--segmented input {\n  height: 24px;\n}\n.input-group--overflow .input-group__selections__comma,\n.input-group--editable .input-group__selections__comma,\n.input-group--segmented .input-group__selections__comma {\n  top: 0;\n  left: 0;\n}\n.input-group--overflow .input-group__input,\n.input-group--editable .input-group__input,\n.input-group--segmented .input-group__input {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--overflow .input-group__input:hover,\n.input-group--editable .input-group__input:hover,\n.input-group--segmented .input-group__input:hover {\n  background: #fff;\n}\n.input-group--overflow.input-group--focused .input-group__input,\n.input-group--editable.input-group--focused .input-group__input,\n.input-group--segmented.input-group--focused .input-group__input {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12);\n}\n.input-group--overflow label,\n.input-group--editable label,\n.input-group--segmented label {\n  left: 16px !important;\n  top: 10px !important;\n}\n.input-group--overflow .input-group__details:after,\n.input-group--editable .input-group__details:after,\n.input-group--segmented .input-group__details:after {\n  display: none;\n}\n.input-group--overflow .input-group__input,\n.input-group--editable .input-group__input,\n.input-group--segmented .input-group__input {\n  padding: 12px 16px;\n}\n.input-group--overflow .input-group__input:before,\n.input-group--editable .input-group__input:before,\n.input-group--segmented .input-group__input:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 1px;\n  top: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--segmented .input-group__input:after,\n.input-group--editable .input-group__input:hover:after,\n.input-group.input-group--focused.input-group--editable .input-group__input:after {\n  background-color: rgba(0,0,0,0.12);\n  content: '';\n  position: absolute;\n  right: 55px;\n  height: 48px;\n  top: 0;\n  width: 1px;\n}\n.input-group.input-group--selection-controls {\n  display: flex;\n}\n.input-group.input-group--selection-controls .icon {\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  user-select: none;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group.input-group--selection-controls .input-group__details:before,\n.input-group.input-group--selection-controls .input-group__details:after {\n  display: none;\n}\n.input-group.input-group--selection-controls .input-group__input {\n  color: inherit;\n  width: 100%;\n  position: relative;\n}\n.input-group.input-group--selection-controls .input-group__input .icon {\n  align-self: center;\n  height: 30px;\n  margin: auto;\n}\n.input-group--selection-controls label {\n  cursor: pointer;\n  margin-left: 32px;\n  pointer-events: auto;\n  position: absolute;\n  left: 0;\n  user-select: none;\n  z-index: 1;\n  pointer-events: all;\n}\n.input-group--selection-controls__ripple {\n  border-radius: 50%;\n  height: 48px;\n  width: 48px;\n  cursor: pointer;\n  position: absolute;\n  transform: translate3d(-12px, -50%, 0);\n  transform-origin: center center;\n  top: 50%;\n  left: 0;\n}\n.input-group--selection-controls__ripple:before {\n  content: '';\n  position: absolute;\n  width: 36px;\n  height: 36px;\n  background: currentColor;\n  border-radius: 50%;\n  left: 50%;\n  top: 50%;\n  transform: translate3d(-50%, -50%, 0) scale(0.3);\n  opacity: 0;\n  transition: 0.4s cubic-bezier(0, 0, 0.2, 1);\n  transform-origin: center center;\n}\n.input-group--slider {\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.input-group--slider .input-group__details:before,\n.input-group--slider .input-group__details:after {\n  display: none;\n}\n.input-group--slider .input-group__input {\n  flex: 1 1 100%;\n}\n.input-group--slider label + .input-group__input {\n  margin-left: 16px;\n  flex: 1 1 auto;\n}\n.input-group--slider:not(.input-group--disabled).input-group--dirty .slider__track-fill {\n  background: #f57f17;\n}\n.input-group--slider.input-group--active .slider__thumb {\n  transform: translateY(-50%) scale(1.2);\n}\n.input-group--slider.input-group--active .slider__track {\n  transition: none;\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb {\n  transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container--label .slider__thumb:hover {\n  transform: translateY(-50%) scale(0);\n}\n.input-group--slider.input-group--active .slider__thumb-container,\n.input-group--slider.input-group--active .slider__track-fill {\n  transition: none;\n}\n.input-group--slider.input-group--active.input-group--ticks .slider__track__container:after,\n.input-group--slider.input-group--active.input-group--ticks .slider__tick {\n  opacity: 1;\n}\n.input-group--slider.input-group--dirty .slider__thumb {\n  background: #f57f17;\n  border-color: #f57f17;\n}\n.input-group--slider.input-group--dirty .slider__thumb--label {\n  background: #f57f17;\n}\n.input-group--slider.input-group--disabled {\n  pointer-events: none;\n}\n.input-group--slider.input-group--disabled .slider__thumb {\n  transform: translateY(-50%) scale(0.5);\n  background: transparent;\n}\n.input-group--slider.input-group--disabled.input-group--dirty {\n  border-color: transparent;\n}\n.input-group--slider.input-group--prepend-icon .slider {\n  margin-left: 40px;\n}\n.input-group--slider.input-group--append-icon .slider {\n  margin-right: 40px;\n}\n.slider {\n  cursor: default;\n  display: flex;\n  align-items: center;\n  position: relative;\n  height: 30px;\n  flex: 1;\n  user-select: none;\n}\n.slider__track__container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 2px;\n  width: 100%;\n  overflow: hidden;\n}\n.slider__track__container:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0;\n  height: 2px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 2px;\n  opacity: 0;\n}\n.slider__track,\n.slider__thumb,\n.slider__tick {\n  position: absolute;\n  top: 0;\n}\n.slider__track {\n  height: 2px;\n  left: 0;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform-origin: right;\n  overflow: hidden;\n  width: 100%;\n}\n.slider__track-fill {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  transform-origin: left;\n  width: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slider__ticks-container {\n  position: absolute;\n  left: 0;\n  height: 2px;\n  width: 100%;\n}\n.slider__ticks-container {\n  top: 50%;\n  overflow: hidden;\n}\n.slider__tick {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.slider__thumb-container {\n  position: absolute;\n  top: 50%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.slider__thumb {\n  width: 20px;\n  height: 20px;\n  left: -10px;\n  top: 50%;\n  border-radius: 50%;\n  background: transparent;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translateY(-50%) scale(0.8);\n  user-select: none;\n}\n.slider__thumb--label__container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  color: #fff;\n  width: 28px;\n  height: 28px;\n  border-radius: 50% 50% 0;\n  position: absolute;\n  left: -14px;\n  top: -40px;\n  transform: rotate(45deg);\n  user-select: none;\n  transition: 0.3s ease-in-out;\n}\n.slider__thumb--label span {\n  transform: rotate(-45deg) translateZ(0);\n}\n.small-dialog {\n  display: block;\n  height: 100%;\n}\n.small-dialog__content {\n  background: #fff;\n  padding: 0 24px;\n}\n.small-dialog__actions {\n  text-align: right;\n}\n.small-dialog a {\n  display: flex;\n  align-items: center;\n  color: rgba(0,0,0,0.87);\n  height: 100%;\n  text-decoration: none;\n}\n.small-dialog a > * {\n  width: 100%;\n}\n.small-dialog .menu__activator {\n  height: 100%;\n}\n.snack {\n  background-color: #323232;\n  position: fixed;\n  display: flex;\n  height: 0;\n  pointer-events: none;\n  visibility: visible;\n  z-index: 1000;\n}\n.snack--absolute {\n  position: absolute;\n}\n.snack--top {\n  top: 0;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--bottom {\n  bottom: 48px;\n  left: 50%;\n  transform: translate3d(-50%, 0, 0) translateZ(0);\n}\n.snack--left {\n  left: 8px;\n  right: initial;\n  transform: none;\n}\n.snack--left.snack--top {\n  top: 8px;\n}\n.snack--left.snack--bottom {\n  bottom: 56px;\n}\n.snack--right {\n  left: initial;\n  right: 8px;\n  transform: none;\n}\n.snack--right.snack--top {\n  top: 8px;\n}\n.snack--right.snack--bottom {\n  top: initial;\n  bottom: 56px;\n}\n.snack__content {\n  background-color: inherit;\n  padding: 14px 24px;\n  border-radius: 2px;\n  pointer-events: auto;\n  max-width: 568px;\n  min-width: 288px;\n  height: 48px;\n  align-items: center;\n  color: #fff;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  position: relative !important;\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.snack__content .btn {\n  margin: 0 0 0 48px;\n}\n@media only screen and (max-width: 599px) {\n  .snack {\n    width: 100%;\n    left: 0;\n    right: initial;\n    transform: none;\n  }\n  .snack--right.snack--top,\n  .snack--left.snack--top {\n    top: 0;\n  }\n  .snack--right.snack--bottom,\n  .snack--left.snack--bottom {\n    bottom: 48px;\n  }\n  .snack__content {\n    border-radius: 0;\n    max-width: 100%;\n    width: 100%;\n  }\n  .snack__content .btn {\n    margin: 0 0 0 24px;\n  }\n  .snack--multi-line .snack__content {\n    height: 80px;\n    padding: 24px;\n  }\n  .snack--bottom.snack--multi-line,\n  .snack--right.snack--multi-line {\n    bottom: 80px;\n  }\n  .snack--vertical .snack__content {\n    height: 112px;\n    padding: 24px 24px 14px;\n    flex-direction: column;\n    align-items: initial;\n  }\n  .snack--vertical .snack__content .btn {\n    align-self: flex-end;\n  }\n  .snack--bottom.snack--vertical,\n  .snack--right.snack--vertical {\n    bottom: 112px;\n  }\n}\n.speed-dial {\n  position: relative;\n}\n.speed-dial--absolute {\n  position: absolute;\n}\n.speed-dial--fixed {\n  position: fixed;\n}\n.speed-dial--top:not(.speed-dial--absolute) {\n  top: 4px;\n}\n.speed-dial--top.speed-dial--absolute {\n  top: 50%;\n  transform: translateY(-50%);\n}\n.speed-dial--bottom:not(.speed-dial--absolute) {\n  bottom: 4px;\n}\n.speed-dial--bottom.speed-dial--absolute {\n  bottom: 50%;\n  transform: translateY(50%);\n}\n.speed-dial--left {\n  left: 4px;\n}\n.speed-dial--right {\n  right: 4px;\n}\n.speed-dial--direction-left .speed-dial__list,\n.speed-dial--direction-right .speed-dial__list {\n  height: 100%;\n  top: 0;\n}\n.speed-dial--direction-top .speed-dial__list,\n.speed-dial--direction-bottom .speed-dial__list {\n  left: 0;\n  width: 100%;\n}\n.speed-dial--direction-top .speed-dial__list {\n  flex-direction: column-reverse;\n  bottom: 100%;\n}\n.speed-dial--direction-right .speed-dial__list {\n  flex-direction: row;\n  left: 100%;\n}\n.speed-dial--direction-bottom .speed-dial__list {\n  flex-direction: column;\n  top: 100%;\n}\n.speed-dial--direction-left .speed-dial__list {\n  flex-direction: row-reverse;\n  right: 100%;\n}\n.speed-dial__list {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n}\n.speed-dial__list .btn:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.speed-dial__list .btn:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.speed-dial__list .btn:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.speed-dial__list .btn:nth-child(4) {\n  transition-delay: 0.2s;\n}\n.speed-dial__list .btn:nth-child(5) {\n  transition-delay: 0.25s;\n}\n.speed-dial__list .btn:nth-child(6) {\n  transition-delay: 0.3s;\n}\n.speed-dial__list .btn:nth-child(7) {\n  transition-delay: 0.35s;\n}\n.stepper {\n  overflow: hidden;\n  position: relative;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header {\n  align-items: stretch;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.stepper__header .divider {\n  align-self: center;\n  margin: 0 -16px;\n}\n.stepper__step__step {\n  align-items: center;\n  border-radius: 50%;\n  display: flex;\n  font-size: 12px;\n  justify-content: center;\n  height: 24px;\n  margin-right: 8px;\n  width: 24px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.stepper__step__step .icon {\n  font-size: 18px;\n}\n.stepper__step {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 24px;\n  position: relative;\n}\n.stepper__step--active .stepper__label {\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper__step--active .stepper__step__step {\n  background: #f57f17;\n}\n.stepper__step--editable {\n  cursor: pointer;\n}\n.stepper__step--complete .stepper__step__step {\n  background: #f57f17;\n}\n.stepper__step.stepper__step--error {\n  color: #f44336;\n}\n.stepper__step.stepper__step--error .stepper__step__step {\n  background: transparent;\n  color: inherit;\n}\n.stepper__step.stepper__step--error .stepper__step__step .icon {\n  font-size: 24px;\n  color: inherit;\n}\n.stepper__step.stepper__step--error .stepper__label {\n  color: inherit;\n  text-shadow: none;\n  font-weight: 500;\n}\n.stepper__step.stepper__step--error .stepper__label small {\n  color: #f44336;\n}\n.stepper__label {\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\n.stepper__label small {\n  font-size: 12px;\n  font-weight: 300;\n  text-shadow: none;\n}\n.stepper__wrapper {\n  overflow: hidden;\n  transition: none;\n}\n.stepper__content {\n  top: initial;\n  bottom: 0;\n  padding: 16px;\n  flex: 1;\n  width: 100%;\n}\n.stepper__content .btn {\n  margin-left: 0;\n}\n.stepper--is-booted .stepper__content,\n.stepper--is-booted .stepper__wrapper {\n  transition: 0.4s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.stepper--vertical {\n  padding-bottom: 36px;\n}\n.stepper--vertical .stepper__content {\n  margin: -8px 0 -16px 36px;\n  padding: 16px 60px 16px 23px;\n  width: auto;\n}\n.stepper--vertical .stepper__step {\n  padding: 24px 24px 16px;\n}\n.stepper--vertical .stepper__step__step {\n  margin-right: 12px;\n}\n.stepper--alt-labels .stepper__header .divider {\n  margin: 35px -67px 0;\n  align-self: flex-start;\n}\n.stepper--alt-labels .stepper__step {\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  flex-basis: 175px;\n}\n.stepper--alt-labels .stepper__step small {\n  align-self: center;\n}\n.stepper--alt-labels .stepper__step__step {\n  margin-right: 0;\n  margin-bottom: 12px;\n}\n@media only screen and (max-width: 1023px) {\n  .stepper:not(.stepper--vertical) .stepper__label {\n    display: none;\n  }\n  .stepper:not(.stepper--vertical) .stepper__step__step {\n    margin-right: 0;\n  }\n}\n.subheader {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 16px 0 16px;\n}\n.subheader--inset {\n  margin-left: 56px;\n}\n.input-group.input-group--selection-controls {\n  z-index: 0;\n}\n.input-group.input-group--selection-controls.switch {\n  min-width: 36px;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container {\n  position: relative;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__container[class*=\"--text\"] .input-group--selection-controls__ripple--active:after {\n  background-color: currentColor;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle {\n  background-color: currentColor;\n  color: inherit;\n  position: absolute;\n  height: 14px;\n  top: 50%;\n  left: 0;\n  width: 34px;\n  border-radius: 8px;\n  transform: translateY(-50%);\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__toggle.input-group--selection-controls__toggle--active {\n  opacity: 0.5;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple {\n  transform: translate3d(-15px, -24px, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  z-index: 1;\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple:after {\n  content: '';\n  position: absolute;\n  display: inline-block;\n  cursor: pointer;\n  width: 20px;\n  border-radius: 50%;\n  top: 50%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n  height: 20px;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.input-group.input-group--selection-controls.switch .input-group--selection-controls__ripple--active {\n  transform: translate3d(2px, -24px, 0);\n}\n.input-group.input-group--selection-controls.switch label {\n  margin-left: 44px;\n}\n.system-bar {\n  align-items: center;\n  display: flex;\n  padding: 0 8px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.system-bar .icon {\n  font-size: 16px;\n}\n.system-bar--status {\n  height: 24px;\n}\n.system-bar--status .icon {\n  margin-right: 4px;\n}\n.system-bar--window {\n  height: 32px;\n}\n.system-bar--window .icon {\n  font-size: 20px;\n  margin-right: 8px;\n}\n.system-bar--status + .navigation-drawer {\n  margin-top: 24px;\n  max-height: calc(100vh - 24px);\n}\n.system-bar--window + .navigation-drawer {\n  margin-top: 32px;\n  max-height: calc(100vh - 32px);\n}\n.table__overflow {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\ntable.table {\n  border-radius: 2px;\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n  max-width: 100%;\n}\ntable.table thead td:not(:nth-child(1)),\ntable.table tbody td:not(:nth-child(1)),\ntable.table thead th:not(:nth-child(1)),\ntable.table tbody th:not(:nth-child(1)),\ntable.table thead td:first-child,\ntable.table tbody td:first-child,\ntable.table thead th:first-child,\ntable.table tbody th:first-child {\n  padding: 0 24px;\n}\ntable.table thead tr {\n  height: 56px;\n}\ntable.table thead th {\n  font-weight: 500;\n  font-size: 12px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  white-space: nowrap;\n  user-select: none;\n}\ntable.table thead th.sortable {\n  pointer-events: auto;\n}\ntable.table thead th > div {\n  width: 100%;\n}\ntable.table tbody tr {\n  transition: background 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  will-change: background;\n}\ntable.table tbody td,\ntable.table tbody th {\n  height: 48px;\n}\ntable.table tbody td {\n  font-weight: 400;\n  font-size: 13px;\n}\ntable.table .input-group--selection-controls {\n  margin: 0;\n}\ntable.table .input-group--selection-controls .input-group__details {\n  display: none;\n}\ntable.table .input-group--selection-controls.checkbox .icon {\n  left: 50%;\n  transform: translateX(-50%);\n}\ntable.table .input-group--selection-controls.checkbox .input-group--selection-controls__ripple {\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\ntable.table tfoot tr:not(:last-child) {\n  height: 48px;\n}\ntable.table tfoot tr:not(:last-child):not(:only-child) td {\n  padding: 0 24px;\n}\ntable.table tfoot tr {\n  height: 56px;\n}\n.tabs {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.tabs--grow > .tabs__bar .tabs__li {\n  flex: 1;\n}\n.tabs--fixed > .tabs__bar .tabs__li {\n  min-width: 160px;\n  max-width: 264px;\n  flex: 0 1 160px;\n}\n@media only screen and (max-width: 599px) {\n  .tabs--fixed > .tabs__bar .tabs__li {\n    min-width: 72px;\n  }\n}\n.tabs--centered > .tabs__bar .tabs__container {\n  justify-content: center;\n}\n.tabs--icons .tabs__bar {\n  height: 72px;\n}\n.tabs--icons .tabs__item {\n  flex-direction: column;\n}\n.tabs.tabs--mobile > .tabs__bar .icon--left,\n.tabs.tabs--mobile > .tabs__bar .icon--right {\n  display: none;\n}\n.tabs.tabs--mobile > .tabs__bar .tabs__wrapper--scrollable.tabs__wrapper--overflow {\n  overflow: hidden !important;\n}\n.tabs:not(.tabs--grow):not(.tabs--mobile) .tabs__item {\n  padding: 0 24px;\n}\n.tabs:not(.tabs--centered):not(.tabs--grow):not(.tabs--mobile) .tabs__wrapper--scrollable {\n  margin: 0 60px;\n  overflow: hidden !important;\n}\n.tabs__bar {\n  background-color: #f57f17;\n  width: 100%;\n  position: relative;\n  height: 48px;\n}\n@media only screen and (max-width: 1023px) {\n  .tabs__bar {\n    padding-left: 0;\n  }\n}\n.tabs__bar .icon--left,\n.tabs__bar .icon--right {\n  position: absolute;\n  top: 0;\n  width: 32px;\n  align-items: center;\n  height: 100%;\n  cursor: pointer;\n  user-select: none;\n}\n.tabs__bar .icon--left {\n  left: 28px;\n}\n.tabs__bar .icon--right {\n  right: 28px;\n}\n.tabs__container {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  padding: 0;\n  top: 0;\n  align-items: center;\n  list-style: none;\n  will-change: transform;\n  transition: transform 0.6s cubic-bezier(0.86, 0, 0.07, 1);\n}\n.tabs__container > li:not(.tabs__slider) {\n  height: 100%;\n}\n.tabs__container-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 32px;\n  display: flex;\n  align-items: center;\n}\n.tabs__wrapper {\n  position: relative;\n  overflow-x: auto;\n  height: inherit;\n}\n.tabs__item {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  justify-content: center;\n  height: 100%;\n  padding: 0 12px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tabs__item .icon {\n  color: inherit;\n  margin: 0 0 5px;\n}\n.tabs__item--disabled {\n  pointer-events: none;\n}\n.tabs__items {\n  position: relative;\n  border-width: 0 1px 1px 1px;\n  border-style: solid;\n  border-color: rgba(0,0,0,0.1);\n  overflow: hidden;\n}\n.tabs__content {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n}\n.tabs__content .card {\n  border-radius: 0 0 2px 2px;\n}\n.tabs__slider {\n  position: absolute;\n  bottom: 0;\n  height: 2px;\n  background: #448aff;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field label {\n  position: absolute;\n  top: 18px;\n  left: 0;\n}\n.input-group--text-field input,\n.input-group--text-field textarea {\n  caret-color: #f57f17;\n  font-size: 16px;\n}\n.input-group--text-field input {\n  box-shadow: none;\n  flex: 1;\n  height: 30px;\n  margin: 0;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.input-group--text-field input::placeholder {\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field input + .icon {\n  padding: 0 6px;\n  transition: 0.3s cubic-bezier(0.4, 0, 0.6, 1);\n}\n.input-group--text-field input:focus {\n  outline: none;\n}\n.input-group--text-field input:disabled {\n  pointer-events: none;\n}\n.input-group--text-field textarea {\n  flex: 1 1;\n}\n.input-group--text-field textarea:focus {\n  outline: none;\n}\n.input-group--text-field.input-group--textarea label {\n  top: 13px;\n}\n.input-group--text-field.input-group--textarea textarea {\n  border-radius: 2px;\n  font-size: 16px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field.input-group--textarea:not(.input-group--full-width) label {\n  top: 30px;\n  left: 15px;\n}\n.input-group--text-field.input-group--textarea:not(.input-group--full-width) textarea {\n  padding: 30px 13px 0;\n}\n.input-group--text-field.input-group--textarea .input-group__details:before,\n.input-group--text-field.input-group--textarea .input-group__details:after {\n  opacity: 0;\n}\n.input-group--text-field .input-group__counter {\n  margin-left: auto;\n}\n.input-group--text-field .input-group__counter--error {\n  color: #f44336 !important;\n}\n.input-group--text-field.input-group--placeholder:not(.input-group--focused):not(.input-group--dirty) input::placeholder {\n  opacity: 0;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__prepend-icon {\n  align-items: center;\n  display: flex;\n  justify-content: flex-start;\n  min-width: 40px;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details {\n  margin-left: auto;\n  padding-left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon .input-group__details:before,\n.input-group--text-field.input-group--prepend-icon .input-group__details:after {\n  margin-left: 40px;\n  max-width: calc(100% - 40px);\n}\n.input-group--text-field.input-group--prepend-icon label {\n  left: 40px;\n}\n.input-group--text-field.input-group--prepend-icon input {\n  flex: auto;\n}\n.input-group--text-field:not(.input-group--single-line).input-group--focused label,\n.input-group--text-field:not(.input-group--single-line):focus label {\n  opacity: 1;\n}\n.input-group--text-field:not(.input-group--single-line).input-group--focused:not(.input-group--textarea) label,\n.input-group--text-field:not(.input-group--single-line):focus:not(.input-group--textarea) label {\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field:not(.input-group--single-line).input-group--focused:not(.input-group--full-width).input-group--textarea label,\n.input-group--text-field:not(.input-group--single-line):focus:not(.input-group--full-width).input-group--textarea label {\n  transform: translate3d(0, -8px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--dirty:not(.input-group--textarea) label {\n  transform: translate3d(0, -18px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--dirty:not(.input-group--full-width).input-group--textarea label {\n  transform: translate3d(0, -8px, 0) scale(0.75);\n}\n.input-group--text-field.input-group--single-line label {\n  transform: translate3d(0, 0, 0);\n}\n.input-group--text-field.input-group--single-line.input-group--dirty label {\n  display: none;\n}\n.input-group--text-field.input-group--multi-line textarea {\n  padding-top: 4px;\n}\n.input-group--text-field.input-group--full-width {\n  padding: 16px;\n}\n.input-group--text-field.input-group--full-width label {\n  margin-left: 16px;\n}\n.input-group--text-field.input-group--full-width .input-group__details:before,\n.input-group--text-field.input-group--full-width .input-group__details:after {\n  display: none;\n}\n.input-group--text-field.input-group--solo {\n  background: #fff;\n  height: 46px;\n  border-radius: 2px;\n  padding: 0 16px;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n.input-group--text-field.input-group--solo input {\n  margin-top: 8px;\n}\n.input-group--text-field.input-group--solo label {\n  top: 8px;\n  left: 16px;\n  transform: none !important;\n}\n.input-group--text-field.input-group--solo:hover {\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.input-group--prefix:not(.input-group--focused):not(.input-group--dirty) label {\n  left: 16px;\n}\n.input-group--prefix .input-group--text-field__prefix,\n.input-group--suffix .input-group--text-field__prefix,\n.input-group--prefix .input-group--text-field__suffix,\n.input-group--suffix .input-group--text-field__suffix {\n  align-items: center;\n  display: inline-flex;\n  font-size: 16px;\n  margin-top: 1px;\n}\n.input-group--prefix .input-group--text-field__prefix,\n.input-group--suffix .input-group--text-field__prefix {\n  margin-right: 3px;\n}\n.input-group--prefix .input-group--text-field__suffix,\n.input-group--suffix .input-group--text-field__suffix {\n  margin-left: 3px;\n}\n.picker--time .card__row--actions {\n  margin-top: -10px;\n}\n.picker--time.picker--dark .picker--time__clock {\n  background: #616161;\n}\n.picker--time.picker--dark .picker--time__clock-hand:before {\n  border-color: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock-hand,\n.picker--time.picker--dark .picker--time__clock:after {\n  background: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock > span {\n  color: #fff;\n}\n.picker--time.picker--dark .picker--time__clock > span.active {\n  color: #000;\n}\n.picker--time.picker--dark .picker--time__clock > span.active:before {\n  background: #448aff;\n}\n.picker--time.picker--dark .picker--time__clock > span.disabled {\n  color: rgba(255,255,255,0.26);\n}\n.picker--time.picker--landscape {\n  flex-wrap: wrap;\n}\n.picker--time.picker--landscape .picker__title {\n  flex-direction: column;\n  justify-content: center;\n}\n.picker--time.picker--landscape .picker__title div:first-child {\n  text-align: right;\n}\n.picker--time.picker--landscape .picker__title div:first-child span {\n  height: 55px;\n  font-size: 55px;\n}\n.picker--time.picker--landscape .picker__title div:last-child {\n  margin: 16px 0 0;\n  align-self: initial;\n  text-align: center;\n}\n.picker--time.picker--landscape .picker--time__clock {\n  height: 250px;\n  width: 250px;\n}\n.picker--time.picker--landscape .picker--time__clock-hand {\n  height: 97px;\n}\n.picker--time .picker__title {\n  display: flex;\n  justify-content: flex-end;\n}\n.picker--time .picker__title div:first-child {\n  white-space: nowrap;\n}\n.picker--time .picker__title div:first-child span {\n  align-items: center;\n  color: #fff;\n  cursor: pointer;\n  display: inline-flex;\n  height: 70px;\n  font-size: 70px;\n  justify-content: center;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:first-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:last-child {\n  align-self: flex-end;\n  color: #fff;\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  margin: 8px 0 6px 8px;\n}\n.picker--time .picker__title div:last-child span {\n  cursor: pointer;\n  opacity: 0.6;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.picker--time .picker__title div:last-child span.active {\n  opacity: 1;\n}\n.picker--time .picker__title div:only-child {\n  flex-direction: row;\n}\n.picker--time__clock {\n  height: 270px;\n  width: 270px;\n  border-radius: 100%;\n  background: #e0e0e0;\n  position: absolute;\n  user-select: none;\n  top: 50%;\n  left: 50%;\n  transition: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transform: translate(-50%, -50%);\n}\n.picker--time__clock-hand {\n  height: 40%;\n  width: 2px;\n  background: #f57f17;\n  bottom: 50%;\n  left: calc(50% - 1px);\n  transform-origin: center bottom;\n  position: absolute;\n}\n.picker--time__clock-hand:before {\n  background: transparent;\n  border: 2px solid #f57f17;\n  border-radius: 100%;\n  width: 10px;\n  height: 10px;\n  content: '';\n  position: absolute;\n  top: -3%;\n  left: 50%;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock:after {\n  content: '';\n  position: absolute;\n  height: 8px;\n  width: 8px;\n  top: 50%;\n  left: 50%;\n  background: #2196f3;\n  border-radius: 100%;\n  transform: translate3d(calc(-50%), -50%, 0);\n}\n.picker--time__clock > span {\n  align-items: center;\n  border-radius: 100%;\n  cursor: default;\n  display: flex;\n  font-size: 16px;\n  justify-content: center;\n  left: calc(50% - 16px);\n  height: 32px;\n  position: absolute;\n  text-align: center;\n  top: calc(50% - 16px);\n  width: 32px;\n  user-select: none;\n}\n.picker--time__clock > span > span {\n  z-index: 1;\n}\n.picker--time__clock > span:before,\n.picker--time__clock > span:after {\n  content: '';\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 14px;\n  width: 14px;\n  transform: translate3d(-50%, -50%, 0);\n}\n.picker--time__clock > span:after,\n.picker--time__clock > span:before {\n  height: 40px;\n  width: 40px;\n}\n.picker--time__clock > span.active {\n  color: #fff;\n  cursor: default;\n}\n.picker--time__clock > span.active:before {\n  background: #f57f17;\n}\n.picker--time__clock > span.disabled {\n  color: rgba(0,0,0,0.3);\n  pointer-events: none;\n}\n.picker--time .card__row--actions {\n  border: none;\n}\n.picker--dark .picker--time__clock {\n  background: #616161;\n}\n.picker--dark .picker--time__clock-hand:before {\n  border-color: #448aff;\n}\n.picker--dark .picker--time__clock-hand,\n.picker--dark .picker--time__clock:after {\n  background: #448aff;\n}\n.picker--dark .picker--time__clock > span {\n  color: #fff;\n}\n.picker--dark .picker--time__clock > span.active {\n  color: rgba(0,0,0,0.87);\n}\n.picker--dark .picker--time__clock > span.active:before {\n  background: #448aff;\n}\n.toast {\n  position: fixed;\n  z-index: 99999999999999;\n}\n.toast--right {\n  top: 5%;\n  right: 2%;\n}\n.toast--left {\n  top: 5%;\n  left: 2%;\n}\n.toast--top {\n  top: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--bottom {\n  bottom: 5%;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--snack {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.toast--snack .toast__content {\n  margin-bottom: 0;\n  opacity: 1;\n}\n.toast--snack .toast__content--remove {\n  margin-top: 0;\n}\n.toast__content {\n  background: #424242;\n  border-radius: 2px;\n  color: #fff;\n  padding: 1rem 2rem;\n  margin: 1rem 0;\n  opacity: 0;\n  transform: translate3d(0, 3rem, 0);\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px rgba(0,0,0,0.14), 0 1px 18px rgba(0,0,0,0.12);\n}\n.toast__content--active {\n  transform: translate3d(0, 0, 0);\n  opacity: 1;\n}\n.toast__content--remove {\n  margin-top: -3rem;\n  opacity: 0;\n}\n.toolbar {\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: 100%;\n  will-change: padding-left;\n  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px rgba(0,0,0,0.14), 0 1px 10px rgba(0,0,0,0.12);\n}\n.toolbar .input-group--solo .input-group__details {\n  display: none;\n}\n.toolbar__title {\n  font-size: 20px;\n  font-weight: 500;\n  letter-spacing: 0.02em;\n  margin-left: 16px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.toolbar__content,\n.toolbar__extension {\n  align-items: center;\n  display: flex;\n}\n.toolbar__content > .list,\n.toolbar__extension > .list {\n  flex: 1 1 auto;\n  margin: 0 !important;\n  max-height: 100%;\n}\n.toolbar__content > .btn:last-child,\n.toolbar__extension > .btn:last-child,\n.toolbar__content > .menu:first-child,\n.toolbar__extension > .menu:first-child {\n  margin-right: 10px;\n}\n.toolbar__content > .btn:first-child,\n.toolbar__extension > .btn:first-child,\n.toolbar__content > .menu:first-child,\n.toolbar__extension > .menu:first-child {\n  margin-left: 10px;\n}\n.toolbar__content > *:not(.btn):not(.toolbar__title):not(.menu):last-child,\n.toolbar__extension > *:not(.btn):not(.toolbar__title):not(.menu):last-child {\n  margin-right: 16px;\n}\n.toolbar__content > *:not(.btn):not(.toolbar__title):not(.menu):first-child,\n.toolbar__extension > *:not(.btn):not(.toolbar__title):not(.menu):first-child {\n  margin-left: 16px;\n}\n.toolbar__content {\n  height: 64px;\n}\n.toolbar__extension {\n  height: 72px;\n}\n.toolbar__items {\n  display: flex;\n  height: 100%;\n  max-width: 100%;\n  padding: 0;\n}\n.toolbar__items > .btn {\n  height: 100%;\n  margin: 0;\n}\n@media only screen and (max-width: 599px) {\n  .toolbar__content > .btn:last-child,\n  .toolbar__extension > .btn:last-child {\n    margin-right: 17px;\n  }\n  .toolbar__content > .btn:first-child,\n  .toolbar__extension > .btn:first-child {\n    margin-left: 17px;\n  }\n  .toolbar__content > *:not(.btn):last-child,\n  .toolbar__extension > *:not(.btn):last-child {\n    margin-right: 24px;\n  }\n  .toolbar__content > *:not(.btn):first-child,\n  .toolbar__extension > *:not(.btn):first-child {\n    margin-left: 24px;\n  }\n}\n@media all and (max-width: 600px) and (orientation: landscape) {\n  .toolbar__content,\n  .toolbar__extension {\n    height: 48px;\n  }\n}\n.toolbar--card {\n  border-radius: 2px 2px 0 0;\n  box-shadow: 0 0px 0px rgba(0,0,0,0.2), 0 0px 0px rgba(0,0,0,0.14), 0 0px 0px rgba(0,0,0,0.12);\n}\n.toolbar--fixed {\n  position: fixed;\n  z-index: 2;\n}\n.toolbar--fixed,\n.toolbar--absolute {\n  top: 0;\n  left: 0;\n}\n.toolbar--absolute {\n  position: absolute;\n  z-index: 2;\n}\n.toolbar--absolute + main {\n  padding-top: 0;\n}\n.toolbar--fixed + main {\n  padding-top: 64px;\n}\n@media all and (max-width: 600px) and (orientation: landscape) {\n  .toolbar--fixed + main {\n    padding-top: 48px;\n  }\n}\n.toolbar--fixed.toolbar--extended + main {\n  padding-top: 136px;\n}\n.toolbar--fixed.toolbar--extended.toolbar--dense + main {\n  padding-top: 96px;\n}\n.toolbar--fixed.toolbar--extended.toolbar--prominent + main {\n  padding-top: 128px;\n}\n@media all and (max-width: 1424px) and (orientation: landscape) {\n  .toolbar--fixed.toolbar--extended + main {\n    padding-top: 96px;\n  }\n}\n.toolbar--fixed.toolbar--dense + main {\n  padding-top: 48px;\n}\n.toolbar--fixed.toolbar--prominent + main {\n  padding-top: 64px;\n}\n.toolbar--floating {\n  display: inline-flex;\n  margin: 16px;\n  width: auto;\n}\n.toolbar--prominent .toolbar__content {\n  height: 64px;\n}\n.toolbar--prominent .toolbar__extension {\n  height: 64px;\n}\n.toolbar--dense .toolbar__content,\n.toolbar--dense .toolbar__extension {\n  height: 48px;\n}\n.toolbar__extension .toolbar__title {\n  margin-left: 72px !important;\n}\n.toolbar__extension .tabs__bar {\n  align-self: flex-end;\n  margin: 0;\n}\n[data-tooltip] {\n  position: relative;\n}\n[data-tooltip]:before {\n  background: #616161;\n  border-radius: 2px;\n  color: #fff;\n  content: attr(data-tooltip);\n  font-size: 12px;\n  display: inline-block;\n  opacity: 0;\n  padding: 5px 8px;\n  position: absolute;\n  pointer-events: none;\n  text-transform: initial;\n  transition: 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);\n  width: auto;\n  white-space: pre;\n  z-index: 99;\n  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);\n}\n[data-tooltip]:hover:before {\n  opacity: 0.9;\n}\n[data-tooltip][data-tooltip-location='bottom']:before {\n  top: 100%;\n  left: 50%;\n  transform: translate3d(-50%, -14px, 0) scale(0);\n  transform-origin: center top;\n}\n[data-tooltip][data-tooltip-location='bottom']:hover:before {\n  transform: translate3d(-50%, 14px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='top']:before {\n  bottom: 100%;\n  left: 50%;\n  transform: translate3d(-50%, 14px, 0) scale(0);\n  transform-origin: center bottom;\n}\n[data-tooltip][data-tooltip-location='top']:hover:before {\n  transform: translate3d(-50%, -14px, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='left']:before {\n  right: 100%;\n  transform: translate3d(14px, 0, 0) scale(0);\n  transform-origin: center right;\n}\n[data-tooltip][data-tooltip-location='left']:hover:before {\n  transform: translate3d(-14px, 0, 0) scale(1);\n}\n[data-tooltip][data-tooltip-location='right']:before {\n  left: 100%;\n  transform: translate3d(-14px, 0, 0) scale(0);\n  transform-origin: center left;\n}\n[data-tooltip][data-tooltip-location='right']:hover:before {\n  transform: translate3d(14px, 0, 0) scale(1);\n}\n@media only screen and (max-width: 1023px) {\n  [data-tooltip]:before {\n    padding: 10px 16px;\n  }\n  [data-tooltip][data-tooltip-location='bottom']:hover:before {\n    transform: translate3d(-50%, 24px, 0) scale(1);\n  }\n  [data-tooltip][data-tooltip-location='top']:hover:before {\n    transform: translate3d(-50%, -24px, 0) scale(1);\n  }\n  [data-tooltip][data-tooltip-location='left']:hover:before {\n    transform: translate3d(-24px, 0, 0) scale(1);\n  }\n  [data-tooltip][data-tooltip-location='right']:hover:before {\n    transform: translate3d(24px, 0, 0) scale(1);\n  }\n}\n@media only screen and (max-width: 599px) {\n  .hidden-xs-only {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 1023px) {\n  .hidden-sm-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 1023px) {\n  .hidden-sm-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 600px) {\n  .hidden-sm-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1423px) {\n  .hidden-md-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 1423px) {\n  .hidden-md-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .hidden-md-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1424px) and (max-width: 1903px) {\n  .hidden-lg-only {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 1903px) {\n  .hidden-lg-and-down {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1424px) {\n  .hidden-lg-and-up {\n    display: none !important;\n  }\n}\n@media only screen and (min-width: 1904px) {\n  .hidden-xl-only {\n    display: none !important;\n  }\n}\n.right {\n  float: right !important;\n}\n.left {\n  float: left !important;\n}\n.mt-0 {\n  margin-top: 0 !important;\n}\n.mr-0 {\n  margin-right: 0 !important;\n}\n.mb-0 {\n  margin-bottom: 0 !important;\n}\n.ml-0 {\n  margin-left: 0 !important;\n}\n.mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n.my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n.ma-0 {\n  margin: 0 0 !important;\n}\n.pt-0 {\n  padding-top: 0 !important;\n}\n.pr-0 {\n  padding-right: 0 !important;\n}\n.pb-0 {\n  padding-bottom: 0 !important;\n}\n.pl-0 {\n  padding-left: 0 !important;\n}\n.px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n}\n.py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n.pa-0 {\n  padding: 0 0 !important;\n}\n.mt-1 {\n  margin-top: 4px !important;\n}\n.mr-1 {\n  margin-right: 4px !important;\n}\n.mb-1 {\n  margin-bottom: 4px !important;\n}\n.ml-1 {\n  margin-left: 4px !important;\n}\n.mx-1 {\n  margin-left: 4px !important;\n  margin-right: 4px !important;\n}\n.my-1 {\n  margin-top: 4px !important;\n  margin-bottom: 4px !important;\n}\n.ma-1 {\n  margin: 4px 4px !important;\n}\n.pt-1 {\n  padding-top: 4px !important;\n}\n.pr-1 {\n  padding-right: 4px !important;\n}\n.pb-1 {\n  padding-bottom: 4px !important;\n}\n.pl-1 {\n  padding-left: 4px !important;\n}\n.px-1 {\n  padding-left: 4px !important;\n  padding-right: 4px !important;\n}\n.py-1 {\n  padding-top: 4px !important;\n  padding-bottom: 4px !important;\n}\n.pa-1 {\n  padding: 4px 4px !important;\n}\n.mt-2 {\n  margin-top: 8px !important;\n}\n.mr-2 {\n  margin-right: 8px !important;\n}\n.mb-2 {\n  margin-bottom: 8px !important;\n}\n.ml-2 {\n  margin-left: 8px !important;\n}\n.mx-2 {\n  margin-left: 8px !important;\n  margin-right: 8px !important;\n}\n.my-2 {\n  margin-top: 8px !important;\n  margin-bottom: 8px !important;\n}\n.ma-2 {\n  margin: 8px 8px !important;\n}\n.pt-2 {\n  padding-top: 8px !important;\n}\n.pr-2 {\n  padding-right: 8px !important;\n}\n.pb-2 {\n  padding-bottom: 8px !important;\n}\n.pl-2 {\n  padding-left: 8px !important;\n}\n.px-2 {\n  padding-left: 8px !important;\n  padding-right: 8px !important;\n}\n.py-2 {\n  padding-top: 8px !important;\n  padding-bottom: 8px !important;\n}\n.pa-2 {\n  padding: 8px 8px !important;\n}\n.mt-3 {\n  margin-top: 16px !important;\n}\n.mr-3 {\n  margin-right: 16px !important;\n}\n.mb-3 {\n  margin-bottom: 16px !important;\n}\n.ml-3 {\n  margin-left: 16px !important;\n}\n.mx-3 {\n  margin-left: 16px !important;\n  margin-right: 16px !important;\n}\n.my-3 {\n  margin-top: 16px !important;\n  margin-bottom: 16px !important;\n}\n.ma-3 {\n  margin: 16px 16px !important;\n}\n.pt-3 {\n  padding-top: 16px !important;\n}\n.pr-3 {\n  padding-right: 16px !important;\n}\n.pb-3 {\n  padding-bottom: 16px !important;\n}\n.pl-3 {\n  padding-left: 16px !important;\n}\n.px-3 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n.py-3 {\n  padding-top: 16px !important;\n  padding-bottom: 16px !important;\n}\n.pa-3 {\n  padding: 16px 16px !important;\n}\n.mt-4 {\n  margin-top: 24px !important;\n}\n.mr-4 {\n  margin-right: 24px !important;\n}\n.mb-4 {\n  margin-bottom: 24px !important;\n}\n.ml-4 {\n  margin-left: 24px !important;\n}\n.mx-4 {\n  margin-left: 24px !important;\n  margin-right: 24px !important;\n}\n.my-4 {\n  margin-top: 24px !important;\n  margin-bottom: 24px !important;\n}\n.ma-4 {\n  margin: 24px 24px !important;\n}\n.pt-4 {\n  padding-top: 24px !important;\n}\n.pr-4 {\n  padding-right: 24px !important;\n}\n.pb-4 {\n  padding-bottom: 24px !important;\n}\n.pl-4 {\n  padding-left: 24px !important;\n}\n.px-4 {\n  padding-left: 24px !important;\n  padding-right: 24px !important;\n}\n.py-4 {\n  padding-top: 24px !important;\n  padding-bottom: 24px !important;\n}\n.pa-4 {\n  padding: 24px 24px !important;\n}\n.mt-5 {\n  margin-top: 48px !important;\n}\n.mr-5 {\n  margin-right: 48px !important;\n}\n.mb-5 {\n  margin-bottom: 48px !important;\n}\n.ml-5 {\n  margin-left: 48px !important;\n}\n.mx-5 {\n  margin-left: 48px !important;\n  margin-right: 48px !important;\n}\n.my-5 {\n  margin-top: 48px !important;\n  margin-bottom: 48px !important;\n}\n.ma-5 {\n  margin: 48px 48px !important;\n}\n.pt-5 {\n  padding-top: 48px !important;\n}\n.pr-5 {\n  padding-right: 48px !important;\n}\n.pb-5 {\n  padding-bottom: 48px !important;\n}\n.pl-5 {\n  padding-left: 48px !important;\n}\n.px-5 {\n  padding-left: 48px !important;\n  padding-right: 48px !important;\n}\n.py-5 {\n  padding-top: 48px !important;\n  padding-bottom: 48px !important;\n}\n.pa-5 {\n  padding: 48px 48px !important;\n}\n@media all and (min-width: 0) {\n  .text-xs-left {\n    text-align: left !important;\n  }\n  .text-xs-center {\n    text-align: center !important;\n  }\n  .text-xs-right {\n    text-align: right !important;\n  }\n  .text-xs-justify {\n    text-align: justify !important;\n  }\n}\n@media all and (min-width: 600px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n  .text-sm-center {\n    text-align: center !important;\n  }\n  .text-sm-right {\n    text-align: right !important;\n  }\n  .text-sm-justify {\n    text-align: justify !important;\n  }\n}\n@media all and (min-width: 1024px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n  .text-md-center {\n    text-align: center !important;\n  }\n  .text-md-right {\n    text-align: right !important;\n  }\n  .text-md-justify {\n    text-align: justify !important;\n  }\n}\n@media all and (min-width: 1424px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n  .text-lg-center {\n    text-align: center !important;\n  }\n  .text-lg-right {\n    text-align: right !important;\n  }\n  .text-lg-justify {\n    text-align: justify !important;\n  }\n}\n@media all and (min-width: 1904px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n  .text-xl-center {\n    text-align: center !important;\n  }\n  .text-xl-right {\n    text-align: right !important;\n  }\n  .text-xl-justify {\n    text-align: justify !important;\n  }\n}\n.r-fade-enter-active,\n.r-fade-leave-active {\n  transition: opacity 0.3s;\n}\n.r-fade-enter,\n.r-fade-leave-active {\n  opacity: 0;\n}\n@media only screen and (max-width: 599px) {\n  #volume_control {\n    width: 35%;\n  }\n  .schedule--name {\n    max-width: 200px;\n  }\n  .chat--box {\n    height: 70vh;\n  }\n  .carousel {\n    height: 300px !important;\n  }\n}\n@media only screen and (min-width: 600px) and (max-width: 1023px) {\n  #volume_control {\n    width: 35%;\n  }\n  .schedule--name {\n    max-width: 350px;\n  }\n  .chat--box {\n    height: 70vh;\n  }\n  .carousel {\n    height: 300px !important;\n  }\n}\n@media only screen and (min-width: 1024px) and (max-width: 1423px) {\n  #volume_control {\n    width: 15%;\n  }\n  .schedule--name {\n    max-width: 350px;\n  }\n  .chat--box {\n    height: 70vh;\n  }\n  .carousel {\n    height: 500px !important;\n  }\n}\n@media only screen and (min-width: 1424px) {\n  #volume_control {\n    width: 15%;\n  }\n  .schedule--name {\n    max-width: 350px;\n  }\n  .chat--box {\n    height: 75vh;\n  }\n  .carousel {\n    height: 500px !important;\n  }\n}\n.chat--box,\n.chat--form {\n  width: 100%;\n}\n.chat--inner {\n  overflow-y: scroll;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/laravel-echo/dist/echo.js":
/*!************************************************!*\
  !*** ./node_modules/laravel-echo/dist/echo.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Vue) {var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Connector = function () {
    /**
     * Create a new class instance.
     */
    function Connector(options) {
        classCallCheck(this, Connector);

        /**
         * Default connector options.
         */
        this._defaultOptions = {
            auth: {
                headers: {}
            },
            authEndpoint: '/broadcasting/auth',
            broadcaster: 'pusher',
            csrfToken: null,
            host: null,
            key: null,
            namespace: 'App.Events'
        };
        this.setOptions(options);
        this.connect();
    }
    /**
     * Merge the custom options with the defaults.
     */


    createClass(Connector, [{
        key: 'setOptions',
        value: function setOptions(options) {
            this.options = _extends(this._defaultOptions, options);
            if (this.csrfToken()) {
                this.options.auth.headers['X-CSRF-TOKEN'] = this.csrfToken();
            }
            return options;
        }
        /**
         * Extract the CSRF token from the page.
         */

    }, {
        key: 'csrfToken',
        value: function csrfToken() {
            var selector = void 0;
            if (typeof window !== 'undefined' && window['Laravel'] && window['Laravel'].csrfToken) {
                return window['Laravel'].csrfToken;
            } else if (this.options.csrfToken) {
                return this.options.csrfToken;
            } else if (typeof document !== 'undefined' && (selector = document.querySelector('meta[name="csrf-token"]'))) {
                return selector.getAttribute('content');
            }
            return null;
        }
    }]);
    return Connector;
}();

/**
 * This class represents a basic channel.
 */
var Channel = function () {
  function Channel() {
    classCallCheck(this, Channel);
  }

  createClass(Channel, [{
    key: 'listenForWhisper',

    /**
     * Listen for a whisper event on the channel instance.
     */
    value: function listenForWhisper(event, callback) {
      return this.listen('.client-' + event, callback);
    }
    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'notification',
    value: function notification(callback) {
      return this.listen('.Illuminate\\Notifications\\Events\\BroadcastNotificationCreated', callback);
    }
  }]);
  return Channel;
}();

/**
 * Event name formatter
 */
var EventFormatter = function () {
    /**
     * Create a new class instance.
     */
    function EventFormatter(namespace) {
        classCallCheck(this, EventFormatter);

        this.setNamespace(namespace);
    }
    /**
     * Format the given event name.
     */


    createClass(EventFormatter, [{
        key: 'format',
        value: function format(event) {
            if (event.charAt(0) === '.' || event.charAt(0) === '\\') {
                return event.substr(1);
            } else if (this.namespace) {
                event = this.namespace + '.' + event;
            }
            return event.replace(/\./g, '\\');
        }
        /**
         * Set the event namespace.
         */

    }, {
        key: 'setNamespace',
        value: function setNamespace(value) {
            this.namespace = value;
        }
    }]);
    return EventFormatter;
}();

/**
 * This class represents a Pusher channel.
 */
var PusherChannel = function (_Channel) {
    inherits(PusherChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function PusherChannel(pusher, name, options) {
        classCallCheck(this, PusherChannel);

        var _this = possibleConstructorReturn(this, (PusherChannel.__proto__ || Object.getPrototypeOf(PusherChannel)).call(this));

        _this.name = name;
        _this.pusher = pusher;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        return _this;
    }
    /**
     * Subscribe to a Pusher channel.
     */


    createClass(PusherChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.subscription = this.pusher.subscribe(this.name);
        }
        /**
         * Unsubscribe from a Pusher channel.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.pusher.unsubscribe(this.name);
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            this.subscription.unbind(this.eventFormatter.format(event));
            return this;
        }
        /**
         * Bind a channel to an event.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            this.subscription.bind(event, callback);
            return this;
        }
    }]);
    return PusherChannel;
}(Channel);

/**
 * This class represents a Pusher private channel.
 */
var PusherPrivateChannel = function (_PusherChannel) {
    inherits(PusherPrivateChannel, _PusherChannel);

    function PusherPrivateChannel() {
        classCallCheck(this, PusherPrivateChannel);
        return possibleConstructorReturn(this, (PusherPrivateChannel.__proto__ || Object.getPrototypeOf(PusherPrivateChannel)).apply(this, arguments));
    }

    createClass(PusherPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPrivateChannel;
}(PusherChannel);

/**
 * This class represents a Pusher presence channel.
 */
var PusherPresenceChannel = function (_PusherChannel) {
    inherits(PusherPresenceChannel, _PusherChannel);

    function PusherPresenceChannel() {
        classCallCheck(this, PusherPresenceChannel);
        return possibleConstructorReturn(this, (PusherPresenceChannel.__proto__ || Object.getPrototypeOf(PusherPresenceChannel)).apply(this, arguments));
    }

    createClass(PusherPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('pusher:subscription_succeeded', function (data) {
                callback(Object.keys(data.members).map(function (k) {
                    return data.members[k];
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('pusher:member_added', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('pusher:member_removed', function (member) {
                callback(member.info);
            });
            return this;
        }
        /**
         * Trigger client event on the channel.
         */

    }, {
        key: 'whisper',
        value: function whisper(eventName, data) {
            this.pusher.channels.channels[this.name].trigger('client-' + eventName, data);
            return this;
        }
    }]);
    return PusherPresenceChannel;
}(PusherChannel);

/**
 * This class represents a Socket.io channel.
 */
var SocketIoChannel = function (_Channel) {
    inherits(SocketIoChannel, _Channel);

    /**
     * Create a new class instance.
     */
    function SocketIoChannel(socket, name, options) {
        classCallCheck(this, SocketIoChannel);

        /**
         * The event callbacks applied to the channel.
         */
        var _this = possibleConstructorReturn(this, (SocketIoChannel.__proto__ || Object.getPrototypeOf(SocketIoChannel)).call(this));

        _this.events = {};
        _this.name = name;
        _this.socket = socket;
        _this.options = options;
        _this.eventFormatter = new EventFormatter(_this.options.namespace);
        _this.subscribe();
        _this.configureReconnector();
        return _this;
    }
    /**
     * Subscribe to a Socket.io channel.
     */


    createClass(SocketIoChannel, [{
        key: 'subscribe',
        value: function subscribe() {
            this.socket.emit('subscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Unsubscribe from channel and ubind event callbacks.
         */

    }, {
        key: 'unsubscribe',
        value: function unsubscribe() {
            this.unbind();
            this.socket.emit('unsubscribe', {
                channel: this.name,
                auth: this.options.auth || {}
            });
        }
        /**
         * Listen for an event on the channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(event, callback) {
            this.on(this.eventFormatter.format(event), callback);
            return this;
        }
        /**
         * Stop listening for an event on the channel instance.
         */

    }, {
        key: 'stopListening',
        value: function stopListening(event) {
            var name = this.eventFormatter.format(event);
            this.socket.removeListener(name);
            delete this.events[name];
            return this;
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'on',
        value: function on(event, callback) {
            var _this2 = this;

            var listener = function listener(channel, data) {
                if (_this2.name == channel) {
                    callback(data);
                }
            };
            this.socket.on(event, listener);
            this.bind(event, listener);
        }
        /**
         * Attach a 'reconnect' listener and bind the event.
         */

    }, {
        key: 'configureReconnector',
        value: function configureReconnector() {
            var _this3 = this;

            var listener = function listener() {
                _this3.subscribe();
            };
            this.socket.on('reconnect', listener);
            this.bind('reconnect', listener);
        }
        /**
         * Bind the channel's socket to an event and store the callback.
         */

    }, {
        key: 'bind',
        value: function bind(event, callback) {
            this.events[event] = this.events[event] || [];
            this.events[event].push(callback);
        }
        /**
         * Unbind the channel's socket from all stored event callbacks.
         */

    }, {
        key: 'unbind',
        value: function unbind() {
            var _this4 = this;

            Object.keys(this.events).forEach(function (event) {
                _this4.events[event].forEach(function (callback) {
                    _this4.socket.removeListener(event, callback);
                });
                delete _this4.events[event];
            });
        }
    }]);
    return SocketIoChannel;
}(Channel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPrivateChannel = function (_SocketIoChannel) {
    inherits(SocketIoPrivateChannel, _SocketIoChannel);

    function SocketIoPrivateChannel() {
        classCallCheck(this, SocketIoPrivateChannel);
        return possibleConstructorReturn(this, (SocketIoPrivateChannel.__proto__ || Object.getPrototypeOf(SocketIoPrivateChannel)).apply(this, arguments));
    }

    createClass(SocketIoPrivateChannel, [{
        key: 'whisper',

        /**
         * Trigger client event on the channel.
         */
        value: function whisper(eventName, data) {
            this.socket.emit('client event', {
                channel: this.name,
                event: 'client-' + eventName,
                data: data
            });
            return this;
        }
    }]);
    return SocketIoPrivateChannel;
}(SocketIoChannel);

/**
 * This class represents a Socket.io presence channel.
 */
var SocketIoPresenceChannel = function (_SocketIoPrivateChann) {
    inherits(SocketIoPresenceChannel, _SocketIoPrivateChann);

    function SocketIoPresenceChannel() {
        classCallCheck(this, SocketIoPresenceChannel);
        return possibleConstructorReturn(this, (SocketIoPresenceChannel.__proto__ || Object.getPrototypeOf(SocketIoPresenceChannel)).apply(this, arguments));
    }

    createClass(SocketIoPresenceChannel, [{
        key: 'here',

        /**
         * Register a callback to be called anytime the member list changes.
         */
        value: function here(callback) {
            this.on('presence:subscribed', function (members) {
                callback(members.map(function (m) {
                    return m.user_info;
                }));
            });
            return this;
        }
        /**
         * Listen for someone joining the channel.
         */

    }, {
        key: 'joining',
        value: function joining(callback) {
            this.on('presence:joining', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
        /**
         * Listen for someone leaving the channel.
         */

    }, {
        key: 'leaving',
        value: function leaving(callback) {
            this.on('presence:leaving', function (member) {
                return callback(member.user_info);
            });
            return this;
        }
    }]);
    return SocketIoPresenceChannel;
}(SocketIoPrivateChannel);

/**
 * This class represents a null channel.
 */
var NullChannel = function (_Channel) {
  inherits(NullChannel, _Channel);

  function NullChannel() {
    classCallCheck(this, NullChannel);
    return possibleConstructorReturn(this, (NullChannel.__proto__ || Object.getPrototypeOf(NullChannel)).apply(this, arguments));
  }

  createClass(NullChannel, [{
    key: 'subscribe',

    /**
     * Subscribe to a channel.
     */
    value: function subscribe() {}
    //

    /**
     * Unsubscribe from a channel.
     */

  }, {
    key: 'unsubscribe',
    value: function unsubscribe() {}
    //

    /**
     * Listen for an event on the channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(event, callback) {
      return this;
    }
    /**
     * Stop listening for an event on the channel instance.
     */

  }, {
    key: 'stopListening',
    value: function stopListening(event) {
      return this;
    }
    /**
     * Bind a channel to an event.
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      return this;
    }
  }]);
  return NullChannel;
}(Channel);

/**
 * This class represents a null private channel.
 */
var NullPrivateChannel = function (_NullChannel) {
  inherits(NullPrivateChannel, _NullChannel);

  function NullPrivateChannel() {
    classCallCheck(this, NullPrivateChannel);
    return possibleConstructorReturn(this, (NullPrivateChannel.__proto__ || Object.getPrototypeOf(NullPrivateChannel)).apply(this, arguments));
  }

  createClass(NullPrivateChannel, [{
    key: 'whisper',

    /**
     * Trigger client event on the channel.
     */
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPrivateChannel;
}(NullChannel);

/**
 * This class represents a null presence channel.
 */
var NullPresenceChannel = function (_NullChannel) {
  inherits(NullPresenceChannel, _NullChannel);

  function NullPresenceChannel() {
    classCallCheck(this, NullPresenceChannel);
    return possibleConstructorReturn(this, (NullPresenceChannel.__proto__ || Object.getPrototypeOf(NullPresenceChannel)).apply(this, arguments));
  }

  createClass(NullPresenceChannel, [{
    key: 'here',

    /**
     * Register a callback to be called anytime the member list changes.
     */
    value: function here(callback) {
      return this;
    }
    /**
     * Listen for someone joining the channel.
     */

  }, {
    key: 'joining',
    value: function joining(callback) {
      return this;
    }
    /**
     * Listen for someone leaving the channel.
     */

  }, {
    key: 'leaving',
    value: function leaving(callback) {
      return this;
    }
    /**
     * Trigger client event on the channel.
     */

  }, {
    key: 'whisper',
    value: function whisper(eventName, data) {
      return this;
    }
  }]);
  return NullPresenceChannel;
}(NullChannel);

/**
 * This class creates a connector to Pusher.
 */
var PusherConnector = function (_Connector) {
    inherits(PusherConnector, _Connector);

    function PusherConnector() {
        classCallCheck(this, PusherConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (PusherConnector.__proto__ || Object.getPrototypeOf(PusherConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Pusher connection.
     */


    createClass(PusherConnector, [{
        key: 'connect',
        value: function connect() {
            if (typeof this.options.client !== 'undefined') {
                this.pusher = this.options.client;
            } else {
                this.pusher = new Pusher(this.options.key, this.options);
            }
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new PusherChannel(this.pusher, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new PusherPrivateChannel(this.pusher, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new PusherPresenceChannel(this.pusher, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name, index) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.pusher.connection.socket_id;
        }
        /**
         * Disconnect Pusher connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.pusher.disconnect();
        }
    }]);
    return PusherConnector;
}(Connector);

/**
 * This class creates a connnector to a Socket.io server.
 */
var SocketIoConnector = function (_Connector) {
    inherits(SocketIoConnector, _Connector);

    function SocketIoConnector() {
        classCallCheck(this, SocketIoConnector);

        /**
         * All of the subscribed channel names.
         */
        var _this = possibleConstructorReturn(this, (SocketIoConnector.__proto__ || Object.getPrototypeOf(SocketIoConnector)).apply(this, arguments));

        _this.channels = {};
        return _this;
    }
    /**
     * Create a fresh Socket.io connection.
     */


    createClass(SocketIoConnector, [{
        key: 'connect',
        value: function connect() {
            var io = this.getSocketIO();
            this.socket = io(this.options.host, this.options);
            return this.socket;
        }
        /**
         * Get socket.io module from global scope or options.
         */

    }, {
        key: 'getSocketIO',
        value: function getSocketIO() {
            if (typeof io !== 'undefined') {
                return io;
            }
            if (typeof this.options.client !== 'undefined') {
                return this.options.client;
            }
            throw new Error('Socket.io client not found. Should be globally available or passed via options.client');
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(name, event, callback) {
            return this.channel(name).listen(event, callback);
        }
        /**
         * Get a channel instance by name.
         */

    }, {
        key: 'channel',
        value: function channel(name) {
            if (!this.channels[name]) {
                this.channels[name] = new SocketIoChannel(this.socket, name, this.options);
            }
            return this.channels[name];
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'privateChannel',
        value: function privateChannel(name) {
            if (!this.channels['private-' + name]) {
                this.channels['private-' + name] = new SocketIoPrivateChannel(this.socket, 'private-' + name, this.options);
            }
            return this.channels['private-' + name];
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'presenceChannel',
        value: function presenceChannel(name) {
            if (!this.channels['presence-' + name]) {
                this.channels['presence-' + name] = new SocketIoPresenceChannel(this.socket, 'presence-' + name, this.options);
            }
            return this.channels['presence-' + name];
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(name) {
            var _this2 = this;

            var channels = [name, 'private-' + name, 'presence-' + name];
            channels.forEach(function (name) {
                _this2.leaveChannel(name);
            });
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(name) {
            if (this.channels[name]) {
                this.channels[name].unsubscribe();
                delete this.channels[name];
            }
        }
        /**
         * Get the socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.socket.id;
        }
        /**
         * Disconnect Socketio connection.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.socket.disconnect();
        }
    }]);
    return SocketIoConnector;
}(Connector);

/**
 * This class creates a null connector.
 */
var NullConnector = function (_Connector) {
  inherits(NullConnector, _Connector);

  function NullConnector() {
    classCallCheck(this, NullConnector);

    /**
     * All of the subscribed channel names.
     */
    var _this = possibleConstructorReturn(this, (NullConnector.__proto__ || Object.getPrototypeOf(NullConnector)).apply(this, arguments));

    _this.channels = {};
    return _this;
  }
  /**
   * Create a fresh connection.
   */


  createClass(NullConnector, [{
    key: 'connect',
    value: function connect() {}
    //

    /**
     * Listen for an event on a channel instance.
     */

  }, {
    key: 'listen',
    value: function listen(name, event, callback) {
      return new NullChannel();
    }
    /**
     * Get a channel instance by name.
     */

  }, {
    key: 'channel',
    value: function channel(name) {
      return new NullChannel();
    }
    /**
     * Get a private channel instance by name.
     */

  }, {
    key: 'privateChannel',
    value: function privateChannel(name) {
      return new NullPrivateChannel();
    }
    /**
     * Get a presence channel instance by name.
     */

  }, {
    key: 'presenceChannel',
    value: function presenceChannel(name) {
      return new NullPresenceChannel();
    }
    /**
     * Leave the given channel, as well as its private and presence variants.
     */

  }, {
    key: 'leave',
    value: function leave(name) {}
    //

    /**
     * Leave the given channel.
     */

  }, {
    key: 'leaveChannel',
    value: function leaveChannel(name) {}
    //

    /**
     * Get the socket ID for the connection.
     */

  }, {
    key: 'socketId',
    value: function socketId() {
      return 'fake-socket-id';
    }
    /**
     * Disconnect the connection.
     */

  }, {
    key: 'disconnect',
    value: function disconnect() {
      //
    }
  }]);
  return NullConnector;
}(Connector);

/**
 * This class is the primary API for interacting with broadcasting.
 */

var Echo = function () {
    /**
     * Create a new class instance.
     */
    function Echo(options) {
        classCallCheck(this, Echo);

        this.options = options;
        this.connect();
        this.registerInterceptors();
    }
    /**
     * Get a channel instance by name.
     */


    createClass(Echo, [{
        key: 'channel',
        value: function channel(_channel) {
            return this.connector.channel(_channel);
        }
        /**
         * Create a new connection.
         */

    }, {
        key: 'connect',
        value: function connect() {
            if (this.options.broadcaster == 'pusher') {
                this.connector = new PusherConnector(this.options);
            } else if (this.options.broadcaster == 'socket.io') {
                this.connector = new SocketIoConnector(this.options);
            } else if (this.options.broadcaster == 'null') {
                this.connector = new NullConnector(this.options);
            }
        }
        /**
         * Disconnect from the Echo server.
         */

    }, {
        key: 'disconnect',
        value: function disconnect() {
            this.connector.disconnect();
        }
        /**
         * Get a presence channel instance by name.
         */

    }, {
        key: 'join',
        value: function join(channel) {
            return this.connector.presenceChannel(channel);
        }
        /**
         * Leave the given channel, as well as its private and presence variants.
         */

    }, {
        key: 'leave',
        value: function leave(channel) {
            this.connector.leave(channel);
        }
        /**
         * Leave the given channel.
         */

    }, {
        key: 'leaveChannel',
        value: function leaveChannel(channel) {
            this.connector.leaveChannel(channel);
        }
        /**
         * Listen for an event on a channel instance.
         */

    }, {
        key: 'listen',
        value: function listen(channel, event, callback) {
            return this.connector.listen(channel, event, callback);
        }
        /**
         * Get a private channel instance by name.
         */

    }, {
        key: 'private',
        value: function _private(channel) {
            return this.connector.privateChannel(channel);
        }
        /**
         * Get the Socket ID for the connection.
         */

    }, {
        key: 'socketId',
        value: function socketId() {
            return this.connector.socketId();
        }
        /**
         * Register 3rd party request interceptiors. These are used to automatically
         * send a connections socket id to a Laravel app with a X-Socket-Id header.
         */

    }, {
        key: 'registerInterceptors',
        value: function registerInterceptors() {
            if (typeof Vue === 'function' && Vue.http) {
                this.registerVueRequestInterceptor();
            }
            if (typeof axios === 'function') {
                this.registerAxiosRequestInterceptor();
            }
            if (typeof jQuery === 'function') {
                this.registerjQueryAjaxSetup();
            }
        }
        /**
         * Register a Vue HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerVueRequestInterceptor',
        value: function registerVueRequestInterceptor() {
            var _this = this;

            Vue.http.interceptors.push(function (request, next) {
                if (_this.socketId()) {
                    request.headers.set('X-Socket-ID', _this.socketId());
                }
                next();
            });
        }
        /**
         * Register an Axios HTTP interceptor to add the X-Socket-ID header.
         */

    }, {
        key: 'registerAxiosRequestInterceptor',
        value: function registerAxiosRequestInterceptor() {
            var _this2 = this;

            axios.interceptors.request.use(function (config) {
                if (_this2.socketId()) {
                    config.headers['X-Socket-Id'] = _this2.socketId();
                }
                return config;
            });
        }
        /**
         * Register jQuery AjaxSetup to add the X-Socket-ID header.
         */

    }, {
        key: 'registerjQueryAjaxSetup',
        value: function registerjQueryAjaxSetup() {
            var _this3 = this;

            if (typeof jQuery.ajax != 'undefined') {
                jQuery.ajaxSetup({
                    beforeSend: function beforeSend(xhr) {
                        if (_this3.socketId()) {
                            xhr.setRequestHeader('X-Socket-Id', _this3.socketId());
                        }
                    }
                });
            }
        }
    }]);
    return Echo;
}();

/* harmony default export */ __webpack_exports__["default"] = (Echo);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/timers-browserify/main.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/timers-browserify/main.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { toolbar: "", dark: "" } },
    [
      _c(
        "v-navigation-drawer",
        {
          ref: "drawer",
          staticClass: "orange lighten-2",
          attrs: {
            height: "100%",
            persistent: "",
            "enable-resize-watcher": "",
            clipped: !_vm.isMobile
          },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          false
            ? undefined
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "orange lighten-2" },
            _vm._l(_vm.items, function(item, index) {
              return _c(
                "v-list-tile",
                { key: index, attrs: { to: item.to } },
                [
                  _c(
                    "v-list-tile-action",
                    [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-tile-content", [
                    _c("span", [_vm._v(_vm._s(item.title))])
                  ])
                ],
                1
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-toolbar",
        { staticClass: "primary", attrs: { fixed: "" } },
        [
          _c("v-toolbar-side-icon", {
            staticClass: "hidden-md-and-up",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.toggleDrawer($event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            [
              _c("router-link", {
                staticStyle: {
                  cursor: "pointer",
                  "max-width": "200px",
                  height: "auto",
                  position: "relative",
                  top: "-2px"
                },
                attrs: { to: "/", tag: "img", src: _vm.logoSrc }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("r-player")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "main",
        [
          _c(
            "v-container",
            _vm._b({ attrs: { fluid: "" } }, "v-container", _vm.getUi, false),
            [
              _c(
                "transition",
                { attrs: { name: "r-fade", mode: "out-in" } },
                [_c("router-view")],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("r-footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue-meta/lib/vue-meta.js":
/*!***********************************************!*\
  !*** ./node_modules/vue-meta/lib/vue-meta.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, __webpack_provided_window_dot_Vue, Vue) {/**
 * vue-meta v1.6.0
 * (c) 2019 Declan de Wet & Sébastien Chopin (@Atinux)
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, function () { 'use strict';

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var arguments$1 = arguments;

		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments$1[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var umd = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		module.exports = factory();
	}(commonjsGlobal, (function () {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value)
			&& !isSpecial(value)
	};

	function isNonNullObject(value) {
		return !!value && typeof value === 'object'
	}

	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);

		return stringValue === '[object RegExp]'
			|| stringValue === '[object Date]'
			|| isReactElement(value)
	}

	// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
	var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
	var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE
	}

	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {}
	}

	function cloneUnlessOtherwiseSpecified(value, options) {
		return (options.clone !== false && options.isMergeableObject(value))
			? deepmerge(emptyTarget(value), value, options)
			: value
	}

	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options)
		})
	}

	function getMergeFunction(key, options) {
		if (!options.customMerge) {
			return deepmerge
		}
		var customMerge = options.customMerge(key);
		return typeof customMerge === 'function' ? customMerge : deepmerge
	}

	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) {
			Object.keys(target).forEach(function(key) {
				destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
			});
		}
		Object.keys(source).forEach(function(key) {
			if (!options.isMergeableObject(source[key]) || !target[key]) {
				destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
			} else {
				destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			}
		});
		return destination
	}

	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;

		var sourceIsArray = Array.isArray(source);
		var targetIsArray = Array.isArray(target);
		var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

		if (!sourceAndTargetTypesMatch) {
			return cloneUnlessOtherwiseSpecified(source, options)
		} else if (sourceIsArray) {
			return options.arrayMerge(target, source, options)
		} else {
			return mergeObject(target, source, options)
		}
	}

	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) {
			throw new Error('first argument should be an array')
		}

		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options)
		}, {})
	};

	var deepmerge_1 = deepmerge;

	return deepmerge_1;

	})));
	});

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty$1 = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	var lodash_isplainobject = isPlainObject;

	/**
	 * checks if passed argument is an array
	 * @param  {any}  arr - the object to check
	 * @return {Boolean} - true if `arr` is an array
	 */
	function isArray (arr) {
	  return Array.isArray
	    ? Array.isArray(arr)
	    : Object.prototype.toString.call(arr) === '[object Array]'
	}

	function uniqBy (inputArray, predicate) {
	  return inputArray
	    .filter(function (x, i, arr) { return i === arr.length - 1
	      ? true
	      : predicate(x) !== predicate(arr[i + 1]); }
	    )
	}

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/** Used to generate unique IDs. */
	var idCounter = 0;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString$1 = objectProto$1.toString;

	/** Built-in value references. */
	var Symbol$1 = root.Symbol;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike$1(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike$1(value) && objectToString$1.call(value) == symbolTag);
	}

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	/**
	 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {string} [prefix=''] The value to prefix the ID with.
	 * @returns {string} Returns the unique ID.
	 * @example
	 *
	 * _.uniqueId('contact_');
	 * // => 'contact_104'
	 *
	 * _.uniqueId();
	 * // => '105'
	 */
	function uniqueId(prefix) {
	  var id = ++idCounter;
	  return toString(prefix) + id;
	}

	var lodash_uniqueid = uniqueId;

	/**
	 * Returns the `opts.option` $option value of the given `opts.component`.
	 * If methods are encountered, they will be bound to the component context.
	 * If `opts.deep` is true, will recursively merge all child component
	 * `opts.option` $option values into the returned result.
	 *
	 * @param  {Object} opts - options
	 * @param  {Object} opts.component - Vue component to fetch option data from
	 * @param  {String} opts.option - what option to look for
	 * @param  {Boolean} opts.deep - look for data in child components as well?
	 * @param  {Function} opts.arrayMerge - how should arrays be merged?
	 * @param  {Object} [result={}] - result so far
	 * @return {Object} result - final aggregated result
	 */
	function getComponentOption (opts, result) {
	  if ( result === void 0 ) result = {};

	  var component = opts.component;
	  var option = opts.option;
	  var deep = opts.deep;
	  var arrayMerge = opts.arrayMerge;
	  var metaTemplateKeyName = opts.metaTemplateKeyName;
	  var tagIDKeyName = opts.tagIDKeyName;
	  var contentKeyName = opts.contentKeyName;
	  var $options = component.$options;

	  if (component._inactive) { return result }

	  // only collect option data if it exists
	  if (typeof $options[option] !== 'undefined' && $options[option] !== null) {
	    var data = $options[option];

	    // if option is a function, replace it with it's result
	    if (typeof data === 'function') {
	      data = data.call(component);
	    }

	    if (typeof data === 'object') {
	      // merge with existing options
	      result = umd(result, data, { arrayMerge: arrayMerge });
	    } else {
	      result = data;
	    }
	  }

	  // collect & aggregate child options if deep = true
	  if (deep && component.$children.length) {
	    component.$children.forEach(function (childComponent) {
	      result = getComponentOption({
	        component: childComponent,
	        option: option,
	        deep: deep,
	        arrayMerge: arrayMerge
	      }, result);
	    });
	  }
	  if (metaTemplateKeyName && result.hasOwnProperty('meta')) {
	    result.meta = Object.keys(result.meta).map(function (metaKey) {
	      var metaObject = result.meta[metaKey];
	      if (!metaObject.hasOwnProperty(metaTemplateKeyName) || !metaObject.hasOwnProperty(contentKeyName) || typeof metaObject[metaTemplateKeyName] === 'undefined') {
	        return result.meta[metaKey]
	      }

	      var template = metaObject[metaTemplateKeyName];
	      delete metaObject[metaTemplateKeyName];

	      if (template) {
	        metaObject.content = typeof template === 'function' ? template(metaObject.content) : template.replace(/%s/g, metaObject.content);
	      }

	      return metaObject
	    });
	    result.meta = uniqBy(
	      result.meta,
	      function (metaObject) { return metaObject.hasOwnProperty(tagIDKeyName) ? metaObject[tagIDKeyName] : lodash_uniqueid(); }
	    );
	  }
	  return result
	}

	var escapeHTML = function (str) { return typeof window === 'undefined'
	  // server-side escape sequence
	  ? String(str)
	    .replace(/&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#x27;')
	  // client-side escape sequence
	  : String(str)
	    .replace(/&/g, '\u0026')
	    .replace(/</g, '\u003c')
	    .replace(/>/g, '\u003e')
	    .replace(/"/g, '\u0022')
	    .replace(/'/g, '\u0027'); };

	function _getMetaInfo (options) {
	  if ( options === void 0 ) options = {};

	  var keyName = options.keyName;
	  var tagIDKeyName = options.tagIDKeyName;
	  var metaTemplateKeyName = options.metaTemplateKeyName;
	  var contentKeyName = options.contentKeyName;
	  /**
	   * Returns the correct meta info for the given component
	   * (child components will overwrite parent meta info)
	   *
	   * @param  {Object} component - the Vue instance to get meta info from
	   * @return {Object} - returned meta info
	   */
	  return function getMetaInfo (component) {
	    // set some sane defaults
	    var defaultInfo = {
	      title: '',
	      titleChunk: '',
	      titleTemplate: '%s',
	      htmlAttrs: {},
	      bodyAttrs: {},
	      headAttrs: {},
	      meta: [],
	      base: [],
	      link: [],
	      style: [],
	      script: [],
	      noscript: [],
	      __dangerouslyDisableSanitizers: [],
	      __dangerouslyDisableSanitizersByTagID: {}
	    };

	    // collect & aggregate all metaInfo $options
	    var info = getComponentOption({
	      component: component,
	      option: keyName,
	      deep: true,
	      metaTemplateKeyName: metaTemplateKeyName,
	      tagIDKeyName: tagIDKeyName,
	      contentKeyName: contentKeyName,
	      arrayMerge: function arrayMerge (target, source) {
	        // we concat the arrays without merging objects contained in,
	        // but we check for a `vmid` property on each object in the array
	        // using an O(1) lookup associative array exploit
	        // note the use of "for in" - we are looping through arrays here, not
	        // plain objects
	        var destination = [];
	        for (var targetIndex in target) {
	          var targetItem = target[targetIndex];
	          var shared = false;
	          for (var sourceIndex in source) {
	            var sourceItem = source[sourceIndex];
	            if (targetItem[tagIDKeyName] && targetItem[tagIDKeyName] === sourceItem[tagIDKeyName]) {
	              var targetTemplate = targetItem[metaTemplateKeyName];
	              var sourceTemplate = sourceItem[metaTemplateKeyName];
	              if (targetTemplate && !sourceTemplate) {
	                sourceItem[contentKeyName] = applyTemplate(component)(targetTemplate)(sourceItem[contentKeyName]);
	              }
	              // If template defined in child but content in parent
	              if (targetTemplate && sourceTemplate && !sourceItem[contentKeyName]) {
	                sourceItem[contentKeyName] = applyTemplate(component)(sourceTemplate)(targetItem[contentKeyName]);
	                delete sourceItem[metaTemplateKeyName];
	              }
	              shared = true;
	              break
	            }
	          }

	          if (!shared) {
	            destination.push(targetItem);
	          }
	        }

	        return destination.concat(source)
	      }
	    });

	    // Remove all "template" tags from meta

	    // backup the title chunk in case user wants access to it
	    if (info.title) {
	      info.titleChunk = info.title;
	    }

	    // replace title with populated template
	    if (info.titleTemplate) {
	      info.title = applyTemplate(component)(info.titleTemplate)(info.titleChunk || '');
	    }

	    // convert base tag to an array so it can be handled the same way
	    // as the other tags
	    if (info.base) {
	      info.base = Object.keys(info.base).length ? [info.base] : [];
	    }

	    var ref = info.__dangerouslyDisableSanitizers;
	    var refByTagID = info.__dangerouslyDisableSanitizersByTagID;

	    // sanitizes potentially dangerous characters
	    var escape = function (info) { return Object.keys(info).reduce(function (escaped, key) {
	      var isDisabled = ref && ref.indexOf(key) > -1;
	      var tagID = info[tagIDKeyName];
	      if (!isDisabled && tagID) {
	        isDisabled = refByTagID && refByTagID[tagID] && refByTagID[tagID].indexOf(key) > -1;
	      }
	      var val = info[key];
	      escaped[key] = val;
	      if (key === '__dangerouslyDisableSanitizers' || key === '__dangerouslyDisableSanitizersByTagID') {
	        return escaped
	      }
	      if (!isDisabled) {
	        if (typeof val === 'string') {
	          escaped[key] = escapeHTML(val);
	        } else if (lodash_isplainobject(val)) {
	          escaped[key] = escape(val);
	        } else if (isArray(val)) {
	          escaped[key] = val.map(escape);
	        } else {
	          escaped[key] = val;
	        }
	      } else {
	        escaped[key] = val;
	      }

	      return escaped
	    }, {}); };

	    // merge with defaults
	    info = umd(defaultInfo, info);

	    // begin sanitization
	    info = escape(info);

	    return info
	  }
	}

	var applyTemplate = function (component) { return function (template) { return function (chunk) { return typeof template === 'function' ? template.call(component, chunk) : template.replace(/%s/g, chunk); }; }; };

	function _titleGenerator (options) {
	  if ( options === void 0 ) options = {};

	  var attribute = options.attribute;

	  /**
	   * Generates title output for the server
	   *
	   * @param  {'title'} type - the string "title"
	   * @param  {String} data - the title text
	   * @return {Object} - the title generator
	   */
	  return function titleGenerator (type, data) {
	    return {
	      text: function text () {
	        return String(data).trim() ? ("<" + type + " " + attribute + "=\"true\">" + data + "</" + type + ">") : ''
	      }
	    }
	  }
	}

	function _attrsGenerator (options) {
	  if ( options === void 0 ) options = {};

	  var attribute = options.attribute;

	  /**
	   * Generates tag attributes for use on the server.
	   *
	   * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
	   * @param  {Object} data - the attributes to generate
	   * @return {Object} - the attribute generator
	   */
	  return function attrsGenerator (type, data) {
	    return {
	      text: function text () {
	        var attributeStr = '';
	        var watchedAttrs = [];
	        for (var attr in data) {
	          if (data.hasOwnProperty(attr)) {
	            watchedAttrs.push(attr);
	            attributeStr += (typeof data[attr] !== 'undefined'
	                ? (attr + "=\"" + (data[attr]) + "\"")
	                : attr) + " ";
	          }
	        }
	        attributeStr += attribute + "=\"" + (watchedAttrs.join(',')) + "\"";
	        return attributeStr.trim()
	      }
	    }
	  }
	}

	function _tagGenerator (options) {
	  if ( options === void 0 ) options = {};

	  var attribute = options.attribute;

	  /**
	   * Generates meta, base, link, style, script, noscript tags for use on the server
	   *
	   * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
	   * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
	   * @return {Object} - the tag generator
	   */
	  return function tagGenerator (type, tags) {
	    return {
	      text: function text (ref) {
	        if ( ref === void 0 ) ref = {};
	        var body = ref.body; if ( body === void 0 ) body = false;

	        // build a string containing all tags of this type
	        return tags.reduce(function (tagsStr, tag) {
	          if (Object.keys(tag).length === 0) { return tagsStr } // Bail on empty tag object
	          if (!!tag.body !== body) { return tagsStr }
	          // build a string containing all attributes of this tag
	          var attrs = Object.keys(tag).reduce(function (attrsStr, attr) {
	            switch (attr) {
	              // these attributes are treated as children on the tag
	              case 'innerHTML':
	              case 'cssText':
	              case 'once':
	                return attrsStr
	              // these form the attribute list for this tag
	              default:
	                if ([options.tagIDKeyName, 'body'].indexOf(attr) !== -1) {
	                  return (attrsStr + " data-" + attr + "=\"" + (tag[attr]) + "\"")
	                }
	                return typeof tag[attr] === 'undefined'
	                  ? (attrsStr + " " + attr)
	                  : (attrsStr + " " + attr + "=\"" + (tag[attr]) + "\"")
	            }
	          }, '').trim();

	          // grab child content from one of these attributes, if possible
	          var content = tag.innerHTML || tag.cssText || '';

	          // generate tag exactly without any other redundant attribute
	          var observeTag = tag.once
	            ? ''
	            : (attribute + "=\"true\" ");

	          // these tags have no end tag
	          var hasEndTag = ['base', 'meta', 'link'].indexOf(type) === -1;

	          // these tag types will have content inserted
	          var hasContent = hasEndTag && ['noscript', 'script', 'style'].indexOf(type) > -1;

	          // the final string for this specific tag
	          return !hasContent
	            ? (tagsStr + "<" + type + " " + observeTag + attrs + (hasEndTag ? '/' : '') + ">")
	            : (tagsStr + "<" + type + " " + observeTag + attrs + ">" + content + "</" + type + ">")
	        }, '')
	      }
	    }
	  }
	}

	function _generateServerInjector (options) {
	  if ( options === void 0 ) options = {};

	  /**
	   * Converts a meta info property to one that can be stringified on the server
	   *
	   * @param  {String} type - the type of data to convert
	   * @param  {(String|Object|Array<Object>)} data - the data value
	   * @return {Object} - the new injector
	   */
	  return function generateServerInjector (type, data) {
	    switch (type) {
	      case 'title':
	        return _titleGenerator(options)(type, data)
	      case 'htmlAttrs':
	      case 'bodyAttrs':
	      case 'headAttrs':
	        return _attrsGenerator(options)(type, data)
	      default:
	        return _tagGenerator(options)(type, data)
	    }
	  }
	}

	function _inject (options) {
	  if ( options === void 0 ) options = {};

	  /**
	   * Converts the state of the meta info object such that each item
	   * can be compiled to a tag string on the server
	   *
	   * @this {Object} - Vue instance - ideally the root component
	   * @return {Object} - server meta info with `toString` methods
	   */
	  return function inject () {
	    // get meta info with sensible defaults
	    var info = _getMetaInfo(options)(this.$root);

	    // generate server injectors
	    for (var key in info) {
	      if (info.hasOwnProperty(key) && key !== 'titleTemplate' && key !== 'titleChunk') {
	        info[key] = _generateServerInjector(options)(key, info[key]);
	      }
	    }

	    return info
	  }
	}

	function _updateTitle () {
	  /**
	   * Updates the document title
	   *
	   * @param  {String} title - the new title of the document
	   */
	  return function updateTitle (title) {
	    if ( title === void 0 ) title = document.title;

	    document.title = title;
	  }
	}

	function _updateTagAttributes (options) {
	  if ( options === void 0 ) options = {};

	  var attribute = options.attribute;

	  /**
	   * Updates the document's html tag attributes
	   *
	   * @param  {Object} attrs - the new document html attributes
	   * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
	   */
	  return function updateTagAttributes (attrs, tag) {
	    var vueMetaAttrString = tag.getAttribute(attribute);
	    var vueMetaAttrs = vueMetaAttrString ? vueMetaAttrString.split(',') : [];
	    var toRemove = [].concat(vueMetaAttrs);
	    for (var attr in attrs) {
	      if (attrs.hasOwnProperty(attr)) {
	        var val = attrs[attr] || '';
	        tag.setAttribute(attr, val);
	        if (vueMetaAttrs.indexOf(attr) === -1) {
	          vueMetaAttrs.push(attr);
	        }
	        var saveIndex = toRemove.indexOf(attr);
	        if (saveIndex !== -1) {
	          toRemove.splice(saveIndex, 1);
	        }
	      }
	    }
	    var i = toRemove.length - 1;
	    for (; i >= 0; i--) {
	      tag.removeAttribute(toRemove[i]);
	    }
	    if (vueMetaAttrs.length === toRemove.length) {
	      tag.removeAttribute(attribute);
	    } else {
	      tag.setAttribute(attribute, vueMetaAttrs.join(','));
	    }
	  }
	}

	// borrow the slice method
	var toArray = Function.prototype.call.bind(Array.prototype.slice);

	function _updateTags (options) {
	  if ( options === void 0 ) options = {};

	  var attribute = options.attribute;

	  /**
	   * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
	   * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
	   *
	   * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
	   * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
	   * @return {Object} - a representation of what tags changed
	   */
	  return function updateTags (type, tags, headTag, bodyTag) {
	    var oldHeadTags = toArray(headTag.querySelectorAll((type + "[" + attribute + "]")));
	    var oldBodyTags = toArray(bodyTag.querySelectorAll((type + "[" + attribute + "][data-body=\"true\"]")));
	    var newTags = [];
	    var indexToDelete;

	    if (tags.length > 1) {
	      // remove duplicates that could have been found by merging tags
	      // which include a mixin with metaInfo and that mixin is used
	      // by multiple components on the same page
	      var found = [];
	      tags = tags.map(function (x) {
	        var k = JSON.stringify(x);
	        if (found.indexOf(k) < 0) {
	          found.push(k);
	          return x
	        }
	      }).filter(function (x) { return x; });
	    }

	    if (tags && tags.length) {
	      tags.forEach(function (tag) {
	        var newElement = document.createElement(type);
	        var oldTags = tag.body !== true ? oldHeadTags : oldBodyTags;

	        for (var attr in tag) {
	          if (tag.hasOwnProperty(attr)) {
	            if (attr === 'innerHTML') {
	              newElement.innerHTML = tag.innerHTML;
	            } else if (attr === 'cssText') {
	              if (newElement.styleSheet) {
	                newElement.styleSheet.cssText = tag.cssText;
	              } else {
	                newElement.appendChild(document.createTextNode(tag.cssText));
	              }
	            } else if ([options.tagIDKeyName, 'body'].indexOf(attr) !== -1) {
	              var _attr = "data-" + attr;
	              var value = (typeof tag[attr] === 'undefined') ? '' : tag[attr];
	              newElement.setAttribute(_attr, value);
	            } else {
	              var value$1 = (typeof tag[attr] === 'undefined') ? '' : tag[attr];
	              newElement.setAttribute(attr, value$1);
	            }
	          }
	        }

	        newElement.setAttribute(attribute, 'true');

	        // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
	        if (oldTags.some(function (existingTag, index) {
	          indexToDelete = index;
	          return newElement.isEqualNode(existingTag)
	        })) {
	          oldTags.splice(indexToDelete, 1);
	        } else {
	          newTags.push(newElement);
	        }
	      });
	    }
	    var oldTags = oldHeadTags.concat(oldBodyTags);
	    oldTags.forEach(function (tag) { return tag.parentNode.removeChild(tag); });
	    newTags.forEach(function (tag) {
	      if (tag.getAttribute('data-body') === 'true') {
	        bodyTag.appendChild(tag);
	      } else {
	        headTag.appendChild(tag);
	      }
	    });

	    return { oldTags: oldTags, newTags: newTags }
	  }
	}

	function _updateClientMetaInfo (options) {
	  if ( options === void 0 ) options = {};

	  var ssrAttribute = options.ssrAttribute;

	  /**
	   * Performs client-side updates when new meta info is received
	   *
	   * @param  {Object} newInfo - the meta info to update to
	   */
	  return function updateClientMetaInfo (newInfo) {
	    var htmlTag = document.getElementsByTagName('html')[0];
	    // if this is not a server render, then update
	    if (htmlTag.getAttribute(ssrAttribute) === null) {
	      // initialize tracked changes
	      var addedTags = {};
	      var removedTags = {};

	      Object.keys(newInfo).forEach(function (key) {
	        switch (key) {
	          // update the title
	          case 'title':
	            _updateTitle(options)(newInfo.title);
	            break
	          // update attributes
	          case 'htmlAttrs':
	            _updateTagAttributes(options)(newInfo[key], htmlTag);
	            break
	          case 'bodyAttrs':
	            _updateTagAttributes(options)(newInfo[key], document.getElementsByTagName('body')[0]);
	            break
	          case 'headAttrs':
	            _updateTagAttributes(options)(newInfo[key], document.getElementsByTagName('head')[0]);
	            break
	          // ignore these
	          case 'titleChunk':
	          case 'titleTemplate':
	          case 'changed':
	          case '__dangerouslyDisableSanitizers':
	            break
	          // catch-all update tags
	          default:
	            var headTag = document.getElementsByTagName('head')[0];
	            var bodyTag = document.getElementsByTagName('body')[0];
	            var ref = _updateTags(options)(key, newInfo[key], headTag, bodyTag);
	        var oldTags = ref.oldTags;
	        var newTags = ref.newTags;
	            if (newTags.length) {
	              addedTags[key] = newTags;
	              removedTags[key] = oldTags;
	            }
	        }
	      });

	      // emit "event" with new info
	      if (typeof newInfo.changed === 'function') {
	        newInfo.changed.call(this, newInfo, addedTags, removedTags);
	      }
	    } else {
	      // remove the server render attribute so we can update on changes
	      htmlTag.removeAttribute(ssrAttribute);
	    }
	  }
	}

	function _refresh (options) {
	  if ( options === void 0 ) options = {};

	  /**
	   * When called, will update the current meta info with new meta info.
	   * Useful when updating meta info as the result of an asynchronous
	   * action that resolves after the initial render takes place.
	   *
	   * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
	   * to implement this method.
	   *
	   * @return {Object} - new meta info
	   */
	  return function refresh () {
	    var info = _getMetaInfo(options)(this.$root);
	    _updateClientMetaInfo(options).call(this, info);
	    return info
	  }
	}

	function _$meta (options) {
	  if ( options === void 0 ) options = {};

	  /**
	   * Returns an injector for server-side rendering.
	   * @this {Object} - the Vue instance (a root component)
	   * @return {Object} - injector
	   */
	  return function $meta () {
	    return {
	      inject: _inject(options).bind(this),
	      refresh: _refresh(options).bind(this)
	    }
	  }
	}

	// fallback to timers if rAF not present
	var stopUpdate = (typeof window !== 'undefined' ? window.cancelAnimationFrame : null) || clearTimeout;
	var startUpdate = (typeof window !== 'undefined' ? window.requestAnimationFrame : null) || (function (cb) { return setTimeout(cb, 0); });

	/**
	 * Performs a batched update. Uses requestAnimationFrame to prevent
	 * calling a function too many times in quick succession.
	 * You need to pass it an ID (which can initially be `null`),
	 * but be sure to overwrite that ID with the return value of batchUpdate.
	 *
	 * @param  {(null|Number)} id - the ID of this update
	 * @param  {Function} callback - the update to perform
	 * @return {Number} id - a new ID
	 */
	function batchUpdate (id, callback) {
	  stopUpdate(id);
	  return startUpdate(function () {
	    id = null;
	    callback();
	  })
	}

	/**
	 * These are constant variables used throughout the application.
	 */

	// This is the name of the component option that contains all the information that
	// gets converted to the various meta tags & attributes for the page.
	var VUE_META_KEY_NAME = 'metaInfo';

	// This is the attribute vue-meta augments on elements to know which it should
	// manage and which it should ignore.
	var VUE_META_ATTRIBUTE = 'data-vue-meta';

	// This is the attribute that goes on the `html` tag to inform `vue-meta`
	// that the server has already generated the meta tags for the initial render.
	var VUE_META_SERVER_RENDERED_ATTRIBUTE = 'data-vue-meta-server-rendered';

	// This is the property that tells vue-meta to overwrite (instead of append)
	// an item in a tag list. For example, if you have two `meta` tag list items
	// that both have `vmid` of "description", then vue-meta will overwrite the
	// shallowest one with the deepest one.
	var VUE_META_TAG_LIST_ID_KEY_NAME = 'vmid';

	// This is the key name for possible meta templates
	var VUE_META_TEMPLATE_KEY_NAME = 'template';

	// This is the key name for the content-holding property
	var VUE_META_CONTENT_KEY = 'content';

	// automatic install
	if (typeof window !== 'undefined' && typeof __webpack_provided_window_dot_Vue !== 'undefined') {
	  Vue.use(VueMeta);
	}

	/**
	 * Plugin install function.
	 * @param {Function} Vue - the Vue constructor.
	 */
	function VueMeta (Vue, options) {
	  if ( options === void 0 ) options = {};

	  // set some default options
	  var defaultOptions = {
	    keyName: VUE_META_KEY_NAME,
	    contentKeyName: VUE_META_CONTENT_KEY,
	    metaTemplateKeyName: VUE_META_TEMPLATE_KEY_NAME,
	    attribute: VUE_META_ATTRIBUTE,
	    ssrAttribute: VUE_META_SERVER_RENDERED_ATTRIBUTE,
	    tagIDKeyName: VUE_META_TAG_LIST_ID_KEY_NAME
	  };
	  // combine options
	  options = objectAssign(defaultOptions, options);

	  // bind the $meta method to this component instance
	  Vue.prototype.$meta = _$meta(options);

	  // store an id to keep track of DOM updates
	  var batchID = null;

	  // watch for client side component updates
	  Vue.mixin({
	    beforeCreate: function beforeCreate () {
	      // Add a marker to know if it uses metaInfo
	      // _vnode is used to know that it's attached to a real component
	      // useful if we use some mixin to add some meta tags (like nuxt-i18n)
	      if (typeof this.$options[options.keyName] !== 'undefined') {
	        this._hasMetaInfo = true;
	      }
	      // coerce function-style metaInfo to a computed prop so we can observe
	      // it on creation
	      if (typeof this.$options[options.keyName] === 'function') {
	        if (typeof this.$options.computed === 'undefined') {
	          this.$options.computed = {};
	        }
	        this.$options.computed.$metaInfo = this.$options[options.keyName];
	      }
	    },
	    created: function created () {
	      var this$1 = this;

	      // if computed $metaInfo exists, watch it for updates & trigger a refresh
	      // when it changes (i.e. automatically handle async actions that affect metaInfo)
	      // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
	      if (!this.$isServer && this.$metaInfo) {
	        this.$watch('$metaInfo', function () {
	          // batch potential DOM updates to prevent extraneous re-rendering
	          batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
	        });
	      }
	    },
	    activated: function activated () {
	      var this$1 = this;

	      if (this._hasMetaInfo) {
	        // batch potential DOM updates to prevent extraneous re-rendering
	        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
	      }
	    },
	    deactivated: function deactivated () {
	      var this$1 = this;

	      if (this._hasMetaInfo) {
	        // batch potential DOM updates to prevent extraneous re-rendering
	        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
	      }
	    },
	    beforeMount: function beforeMount () {
	      var this$1 = this;

	      // batch potential DOM updates to prevent extraneous re-rendering
	      if (this._hasMetaInfo) {
	        batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
	      }
	    },
	    destroyed: function destroyed () {
	      var this$1 = this;

	      // do not trigger refresh on the server side
	      if (this.$isServer) { return }
	      // re-render meta data when returning from a child component to parent
	      if (this._hasMetaInfo) {
	        // Wait that element is hidden before refreshing meta tags (to support animations)
	        var interval = setInterval(function () {
	          if (this$1.$el && this$1.$el.offsetParent !== null) { return }
	          clearInterval(interval);
	          if (!this$1.$parent) { return }
	          batchID = batchUpdate(batchID, function () { return this$1.$meta().refresh(); });
	        }, 50);
	      }
	    }
	  });
	}

	var version = "1.6.0";

	VueMeta.version = version;

	return VueMeta;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"), __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./node_modules/vuex-router-sync/index.js":
/*!************************************************!*\
  !*** ./node_modules/vuex-router-sync/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.sync = function (store, router, options) {
  var moduleName = (options || {}).moduleName || 'route'

  store.registerModule(moduleName, {
    namespaced: true,
    state: cloneRoute(router.currentRoute),
    mutations: {
      'ROUTE_CHANGED': function ROUTE_CHANGED (state, transition) {
        store.state[moduleName] = cloneRoute(transition.to, transition.from)
      }
    }
  })

  var isTimeTraveling = false
  var currentPath

  // sync router on store change
  var storeUnwatch = store.watch(
    function (state) { return state[moduleName]; },
    function (route) {
      var fullPath = route.fullPath;
      if (fullPath === currentPath) {
        return
      }
      if (currentPath != null) {
        isTimeTraveling = true
        router.push(route)
      }
      currentPath = fullPath
    },
    { sync: true }
  )

  // sync store on router navigation
  var afterEachUnHook = router.afterEach(function (to, from) {
    if (isTimeTraveling) {
      isTimeTraveling = false
      return
    }
    currentPath = to.fullPath
    store.commit(moduleName + '/ROUTE_CHANGED', { to: to, from: from })
  })

  return function unsync () {
    // On unsync, remove router hook
    if (afterEachUnHook != null) {
      afterEachUnHook()
    }

    // On unsync, remove store watch
    if (storeUnwatch != null) {
      storeUnwatch()
    }

    // On unsync, unregister Module with store
    store.unregisterModule(moduleName)
  }
}

function cloneRoute (to, from) {
  var clone = {
    name: to.name,
    path: to.path,
    hash: to.hash,
    query: to.query,
    params: to.params,
    fullPath: to.fullPath,
    meta: to.meta
  }
  if (from) {
    clone.from = cloneRoute(from)
  }
  return Object.freeze(clone)
}



/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/js/app.js":
/*!************************************!*\
  !*** ./resources/assets/js/app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_Vue) {/* harmony import */ var _stylus_app_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stylus/app.styl */ "./resources/assets/stylus/app.styl");
/* harmony import */ var _stylus_app_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylus_app_styl__WEBPACK_IMPORTED_MODULE_0__);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(/*! ./bootstrap */ "./resources/assets/js/bootstrap.js");

__webpack_provided_window_dot_Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = __webpack_require__(/*! ./frontend */ "./resources/assets/js/frontend/index.js");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js")))

/***/ }),

/***/ "./resources/assets/js/bootstrap.js":
/*!******************************************!*\
  !*** ./resources/assets/js/bootstrap.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap-sass */ "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */



window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: 'socket.io',
  host: "".concat(window.location.hostname, ":6001")
});

/***/ }),

/***/ "./resources/assets/js/frontend/App.vue":
/*!**********************************************!*\
  !*** ./resources/assets/js/frontend/App.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=3d1b13b6& */ "./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/assets/js/frontend/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/frontend/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/frontend/App.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/frontend/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/frontend/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6&":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=3d1b13b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/frontend/App.vue?vue&type=template&id=3d1b13b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_3d1b13b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/frontend/index.js":
/*!***********************************************!*\
  !*** ./resources/assets/js/frontend/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./resources/assets/js/frontend/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./resources/assets/js/frontend/store/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.vue */ "./resources/assets/js/frontend/App.vue");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

__webpack_require__(/*! ./plugins */ "./resources/assets/js/frontend/plugins.js");





/* harmony default export */ __webpack_exports__["default"] = (new vue__WEBPACK_IMPORTED_MODULE_0___default.a(_objectSpread({
  el: '#app',
  router: _router__WEBPACK_IMPORTED_MODULE_1__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_2__["default"]
}, _App_vue__WEBPACK_IMPORTED_MODULE_3__["default"], {
  mounted: function mounted() {
    console.log('hello world');

    if (window.ServerData) {
      var data = window.ServerData;

      if (data.hasOwnProperty('metas')) {
        this.$store.dispatch('Pages/setAll', data.metas);
      }

      if (data.hasOwnProperty('page_metas')) {
        this.$store.dispatch('Pages/setCurrent', data['page_metas']);
      }

      if (data.hasOwnProperty('config')) {
        this.$store.dispatch('Config/setAll', data['config']);
      }

      if (data.hasOwnProperty('schedules')) {
        this.$store.dispatch('Schedules/setAll', data['schedules']);
      }
    }
  },
  watch: {
    '$route': function $route(route) {
      if (route.hasOwnProperty('name') && route.name.trim()) {
        this.$store.dispatch('Pages/setCurrent', this.$store.getters['Pages/all'][route.name]);
      }
    }
  }
})));

/***/ }),

/***/ "./resources/assets/js/frontend/plugins.js":
/*!*************************************************!*\
  !*** ./resources/assets/js/frontend/plugins.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vuetify */ "./node_modules/vuetify/dist/vuetify.js"));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js"));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js"));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vuex-router-sync */ "./node_modules/vuex-router-sync/index.js"));
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(__webpack_require__(/*! vue-meta */ "./node_modules/vue-meta/lib/vue-meta.js"));

/***/ }),

/***/ "./resources/assets/js/frontend/router/index.js":
/*!******************************************************!*\
  !*** ./resources/assets/js/frontend/router/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ "./resources/assets/js/frontend/router/routes.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./resources/assets/js/frontend/store/index.js");



var router = new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
  mode: 'history',
  scrollBehavior: function scrollBehavior() {
    return {
      y: 0,
      x: 0
    };
  },
  routes: _routes__WEBPACK_IMPORTED_MODULE_1__["default"]
});
router.beforeEach(function (to, from, next) {
  if (to.meta.fetch) {
    if (!to.query.hasOwnProperty('page')) {
      next({
        path: to.path,
        query: {
          page: 1
        }
      });
      return;
    }

    var page = to.query.page;
    axios.get("".concat(to.meta.fetch.url).concat(to.query.page ? '?page=' + page : '')).then(function (res) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(to.meta.fetch.action, res.data);
    }).catch(function (error) {
      console.log(error);
      console.error(error.response);
    });
  }

  next();
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/assets/js/frontend/router/resolver.js":
/*!*********************************************************!*\
  !*** ./resources/assets/js/frontend/router/resolver.js ***!
  \*********************************************************/
/*! exports provided: view, component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
var view = function view(_view, file) {
  try {
    return function (resolve) {
      return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(0)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/frontend/views sync recursive ^\\.\\/.*$")("./".concat(_view, "/").concat(file ? file : 'index.vue'))]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    };
  } catch (e) {
    console.log(e);
  }
};
var component = function component(_component, file) {
  try {
    return function (resolve) {
      return __webpack_require__.e(/*! AMD require */ 1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("./resources/assets/js/frontend/components sync recursive ^\\.\\/.*$")("./".concat(_component, "/").concat(file ? file : 'index.vue'))]; (resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe);
    };
  } catch (e) {
    console.log(e);
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  view: view,
  component: component
});

/***/ }),

/***/ "./resources/assets/js/frontend/router/routes.js":
/*!*******************************************************!*\
  !*** ./resources/assets/js/frontend/router/routes.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolver */ "./resources/assets/js/frontend/router/resolver.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ "./resources/assets/js/frontend/store/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  name: 'Home',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Home')
}, {
  path: '/giro',
  name: 'Giro',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Banner')
}, {
  path: '/schedule',
  name: 'Schedule',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Schedule')
}, {
  path: '/schedule/:id',
  name: 'Schedule.Child',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Schedule/Child')
}, {
  path: '/news',
  name: 'News',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('News'),
  meta: {
    fetch: {
      url: '/api/news',
      action: 'News/setNews',
      getter: 'News/pagination'
    }
  }
}, {
  path: '/news/:id',
  name: 'News.Child',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('News/Child'),
  beforeEnter: function beforeEnter(to, from, next) {
    axios.get("/api/news/".concat(to.params.id)).then(function (res) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('News/setCurrent', res.data);
    }).catch(console.log);
    next();
  }
}, {
  path: '/interviews',
  name: 'Interviews',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Interviews'),
  meta: {
    fetch: {
      url: '/api/interviews',
      action: 'Interviews/setInterviews',
      getter: 'Interviews/pagination'
    }
  }
}, {
  path: '/interviews/:id',
  name: 'Interviews.Child',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Interviews/Child'),
  beforeEnter: function beforeEnter(to, from, next) {
    axios.get("/api/interviews/".concat(to.params.id)).then(function (res) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('Interviews/setCurrent', res.data);
    }).catch(console.log);
    next();
  }
}, {
  path: '/posts',
  name: 'Posts',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Posts'),
  meta: {
    fetch: {
      url: '/api/posts',
      action: 'Posts/setPosts',
      getter: 'Posts/pagination'
    }
  }
}, {
  path: '/posts/:id',
  name: 'Posts.Child',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Posts/Child'),
  beforeEnter: function beforeEnter(to, from, next) {
    axios.get("/api/posts/".concat(to.params.id)).then(function (res) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('Posts/setCurrent', res.data);
    }).catch(console.log);
    next();
  }
}, {
  path: '/events',
  name: 'Events',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Events'),
  meta: {
    fetch: {
      url: '/api/events',
      action: 'Events/setEvents',
      getter: 'Events/pagination'
    }
  }
}, {
  path: '/events/:id',
  name: 'Events.Child',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Events/Child', 'index.vue'),
  beforeEnter: function beforeEnter(to, from, next) {
    axios.get("/api/events/".concat(to.params.id)).then(function (res) {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('Events/setCurrent', res.data);
    }).catch(console.log);
    next();
  }
}, {
  path: '/gallery',
  name: 'Gallery',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Gallery'),
  meta: {
    fetch: {
      url: '/api/photos',
      action: 'Gallery/setGallery',
      getter: 'Gallery/pagination'
    }
  }
}, {
  path: '/videos',
  name: 'Videos',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Videos'),
  meta: {
    fetch: {
      url: '/api/videos',
      action: 'Videos/setVideos',
      getter: 'Videos/pagination'
    }
  }
}, {
  path: '/team',
  name: 'Team',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Team'),
  meta: {
    fetch: {
      url: '/api/teams',
      action: 'Team/setTeam',
      getter: 'Team/pagination'
    }
  }
}, {
  path: '/about',
  name: 'About',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('About')
}, {
  path: '/partners',
  name: 'Partners',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Partners'),
  meta: {
    fetch: {
      url: '/api/partners',
      action: 'Partners/setPartners',
      getter: 'Partners/pagination'
    }
  }
}, {
  path: '/chat',
  name: 'Chat',
  component: Object(_resolver__WEBPACK_IMPORTED_MODULE_1__["view"])('Chat'),
  beforeEnter: function () {
    var _beforeEnter = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(to, from, next) {
      var _ref, data;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].getters['Chat/messages'].length) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return axios.get('/api/messages');

            case 3:
              _ref = _context.sent;
              data = _ref.data;
              _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch('Chat/setMessages', data);

            case 6:
              next();

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function beforeEnter(_x, _x2, _x3) {
      return _beforeEnter.apply(this, arguments);
    }

    return beforeEnter;
  }()
}, {
  path: '*',
  redirect: '/'
}]);

/***/ }),

/***/ "./resources/assets/js/frontend/store/index.js":
/*!*****************************************************!*\
  !*** ./resources/assets/js/frontend/store/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ "./resources/assets/js/frontend/store/modules/index.js");


/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
  modules: _modules__WEBPACK_IMPORTED_MODULE_1__["default"],
  plugins: [function (store) {
    for (var field in store._actions) {
      if (field.match(/moduleInit$/)) {
        store.dispatch(field, store);
      }
    }
  }]
}));

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules sync \\.js":
/*!***************************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules sync nonrecursive \.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Chat.js": "./resources/assets/js/frontend/store/modules/Chat.js",
	"./Config.js": "./resources/assets/js/frontend/store/modules/Config.js",
	"./Events.js": "./resources/assets/js/frontend/store/modules/Events.js",
	"./Gallery.js": "./resources/assets/js/frontend/store/modules/Gallery.js",
	"./Home.js": "./resources/assets/js/frontend/store/modules/Home.js",
	"./Interviews.js": "./resources/assets/js/frontend/store/modules/Interviews.js",
	"./News.js": "./resources/assets/js/frontend/store/modules/News.js",
	"./Pages.js": "./resources/assets/js/frontend/store/modules/Pages.js",
	"./Partners.js": "./resources/assets/js/frontend/store/modules/Partners.js",
	"./Polls.js": "./resources/assets/js/frontend/store/modules/Polls.js",
	"./Posts.js": "./resources/assets/js/frontend/store/modules/Posts.js",
	"./Schedules.js": "./resources/assets/js/frontend/store/modules/Schedules.js",
	"./Team.js": "./resources/assets/js/frontend/store/modules/Team.js",
	"./Ui.js": "./resources/assets/js/frontend/store/modules/Ui.js",
	"./Videos.js": "./resources/assets/js/frontend/store/modules/Videos.js",
	"./index.js": "./resources/assets/js/frontend/store/modules/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/assets/js/frontend/store/modules sync \\.js";

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Chat.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Chat.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    as: null,
    messages: [],
    message: ''
  },
  mutations: {
    SET_AS: function SET_AS(state, payload) {
      state.as = payload;
    },
    REMOVE_AS: function REMOVE_AS(state) {
      state.as = null;
    },
    SET_MESSAGES: function SET_MESSAGES(state, payload) {
      state.messages = payload.reverse();
    },
    SET_MESSAGE: function SET_MESSAGE(state, payload) {
      state.message = payload;
    },
    PUSH_MESSAGE: function PUSH_MESSAGE(state, payload) {
      state.messages.push(payload);
    }
  },
  actions: {
    setAs: function setAs(_ref, payload) {
      var commit = _ref.commit;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('as', payload, {
        expires: 7
      });
      commit('SET_AS', payload);
    },
    removeAs: function removeAs(_ref2) {
      var commit = _ref2.commit;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('as');
      commit('REMOVE_AS');
      commit('SET_MESSAGE', '');
    },
    setMessages: function setMessages(_ref3, payload) {
      var commit = _ref3.commit;
      commit('SET_MESSAGES', payload);
    },
    setMessage: function setMessage(_ref4, payload) {
      var commit = _ref4.commit;
      commit('SET_MESSAGE', payload);
    },
    addMessage: function () {
      var _addMessage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref5, payload) {
        var commit, getters, body, name, email;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref5.commit, getters = _ref5.getters;

                if (!(!getters.message || !getters.as || !getters.as.name || !getters.as.email)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                commit('SET_MESSAGE', '');
                body = payload.body, name = payload.name, email = payload.email;
                _context.next = 7;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/messages', {
                  body: body,
                  name: name,
                  email: email
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function addMessage(_x, _x2) {
        return _addMessage.apply(this, arguments);
      }

      return addMessage;
    }(),
    pushMessage: function pushMessage(_ref6, payload) {
      var commit = _ref6.commit;
      commit('PUSH_MESSAGE', payload);
    },
    moduleInit: function moduleInit(_ref7, store) {
      var dispatch = _ref7.dispatch;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('as')) {
        dispatch('setAs', js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('as'));
      }
    }
  },
  getters: {
    as: function as(state) {
      return state.as;
    },
    messages: function messages(state) {
      return state.messages;
    },
    message: function message(state) {
      return state.message;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Config.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Config.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    all: [{
      key: 'suffix',
      value: 'Radio Bom Jesus'
    }]
  },
  mutations: {
    SET_ALL: function SET_ALL(state, payload) {
      state.all = payload;
    }
  },
  actions: {
    setAll: function setAll(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_ALL', payload);
    }
  },
  getters: {
    all: function all(state) {
      return state.all;
    },
    key: function key(state) {
      var payload = {};
      state.all.forEach(function (config) {
        payload[config.key] = config;
      });
      return payload;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Events.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Events.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    events: [],
    current: null
  },
  mutations: {
    SET_EVENTS: function SET_EVENTS(state, payload) {
      state.events = payload;
    },
    SET_CURRENT: function SET_CURRENT(state, payload) {
      state.current = payload;
    }
  },
  actions: {
    setEvents: function setEvents(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_EVENTS', payload);
    },
    setCurrent: function setCurrent(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_CURRENT', payload);
    }
  },
  getters: {
    pData: function pData(state) {
      if (!state.events) return [];
      return state.events.data;
    },
    pSource: function pSource(state) {
      if (!state.events) return [];
      var pag = state.events;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    pagination: function pagination(state) {
      return state.events;
    },
    current: function current(state) {
      return state.current;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Gallery.js":
/*!***************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Gallery.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    gallery: []
  },
  mutations: {
    SET_GALLERY: function SET_GALLERY(state, payload) {
      state.gallery = payload;
    }
  },
  actions: {
    setGallery: function setGallery(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_GALLERY', payload);
    }
  },
  getters: {
    pData: function pData(state) {
      if (!state.gallery) return [];
      return state.gallery.data;
    },
    pSource: function pSource(state) {
      if (!state.gallery) return [];
      var pag = state.gallery;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    pagination: function pagination(state) {
      return state.gallery;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Home.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Home.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    tops: [],
    carousels: {}
  },
  mutations: {
    SET_TOPS: function SET_TOPS(state, payload) {
      state.tops = payload;
    },
    SET_CAROUSEL: function SET_CAROUSEL(state, _ref) {
      var key = _ref.key,
          payload = _ref.payload;
      state.carousels[key] = payload;
    }
  },
  actions: {
    setTops: function setTops(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_TOPS', payload);
    },
    setCarousel: function setCarousel(_ref3, payload) {
      var commit = _ref3.commit;
      if (!payload.key || !payload.payload) return;
      commit('SET_CAROUSEL', payload);
    }
  },
  getters: {
    tops: function tops(state) {
      return state.tops;
    },
    carousels: function carousels(state) {
      return state.carousels;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Interviews.js":
/*!******************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Interviews.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    interviews: null,
    current: null
  },
  mutations: {
    SET_INTERVIEWS: function SET_INTERVIEWS(state, payload) {
      state.interviews = payload;
    },
    SET_CURRENT: function SET_CURRENT(state, payload) {
      state.current = payload;
    }
  },
  actions: {
    setInterviews: function setInterviews(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_INTERVIEWS', payload);
    },
    setCurrent: function setCurrent(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_CURRENT', payload);
    }
  },
  getters: {
    pagination: function pagination(state) {
      return state.interviews;
    },
    pData: function pData(state) {
      if (!state.interviews) return [];
      return state.interviews.data;
    },
    pSource: function pSource(state) {
      if (!state.interviews) return [];
      var pag = state.interviews;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    current: function current(state) {
      return state.current;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/News.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/News.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    news: null,
    current: null
  },
  mutations: {
    SET_NEWS: function SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_CURRENT: function SET_CURRENT(state, payload) {
      state.current = payload;
    }
  },
  actions: {
    setNews: function setNews(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_NEWS', payload);
    },
    setCurrent: function setCurrent(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_CURRENT', payload);
    }
  },
  getters: {
    pagination: function pagination(state) {
      return state.news;
    },
    pData: function pData(state) {
      if (!state.news) return [];
      return state.news.data;
    },
    pSource: function pSource(state) {
      if (!state.news) return [];
      var pag = state.news;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    current: function current(state) {
      return state.current;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Pages.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Pages.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var defaultPage = [{
  name: 'title',
  content: 'Titulo Padrão'
}];
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    all: {},
    current: defaultPage,
    defaultPage: defaultPage
  },
  mutations: {
    SET_ALL: function SET_ALL(state, payload) {
      state.all = payload;
    },
    SET_CURRENT: function SET_CURRENT(state, payload) {
      state.current = payload;
    }
  },
  actions: {
    setAll: function setAll(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_ALL', payload);
    },
    setCurrent: function setCurrent(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_CURRENT', payload);
    }
  },
  getters: {
    all: function all(state) {
      return state.all;
    },
    current: function current(state) {
      return state.current;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Partners.js":
/*!****************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Partners.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    partners: []
  },
  mutations: {
    SET_PARTNERS: function SET_PARTNERS(state, payload) {
      state.partners = payload;
    }
  },
  actions: {
    setPartners: function setPartners(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_PARTNERS', payload);
    }
  },
  getters: {
    pagination: function pagination(state) {
      return state.partners;
    },
    pData: function pData(state) {
      if (!state.partners) return [];
      return state.partners.data;
    },
    pSource: function pSource(state) {
      if (!state.partners) return [];
      var pag = state.partners;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Polls.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Polls.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    poll: null
  },
  mutations: {
    SET_POLL: function SET_POLL(state, payload) {
      state.poll = payload;
    }
  },
  actions: {
    setPoll: function setPoll(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_POLL', payload);
    },
    vote: function () {
      var _vote = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2, payload) {
        var commit, getters, _ref3, data, voted;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit, getters = _ref2.getters;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/admin/radio/polls/options/".concat(payload, "/vote"));

              case 3:
                _ref3 = _context.sent;
                data = _ref3.data;
                voted = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('VOTED');
                voted.push(getters.poll.id);
                js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('VOTED', Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniq"])(voted), {
                  expires: 30
                });
                commit('SET_POLL', data);
                console.log(js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('VOTED'));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function vote(_x, _x2) {
        return _vote.apply(this, arguments);
      }

      return vote;
    }(),
    moduleInit: function () {
      var _moduleInit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref4) {
        var commit, _ref5, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref4.commit;
                if (!js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('VOTED')) js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('VOTED', []);
                _context2.next = 4;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/polls');

              case 4:
                _ref5 = _context2.sent;
                data = _ref5.data;
                commit('SET_POLL', data);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function moduleInit(_x3) {
        return _moduleInit.apply(this, arguments);
      }

      return moduleInit;
    }(),
    fetch: function () {
      var _fetch = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(_ref6) {
        var commit, _ref7, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref6.commit;
                _context3.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/polls');

              case 3:
                _ref7 = _context3.sent;
                data = _ref7.data;
                commit('SET_POLL', data);
                return _context3.abrupt("return", Promise.resolve());

              case 7:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function fetch(_x4) {
        return _fetch.apply(this, arguments);
      }

      return fetch;
    }()
  },
  getters: {
    poll: function poll(state) {
      return state.poll;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Posts.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Posts.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    posts: null,
    current: null
  },
  mutations: {
    SET_POSTS: function SET_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_CURRENT: function SET_CURRENT(state, payload) {
      state.current = payload;
    }
  },
  actions: {
    setPosts: function setPosts(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_POSTS', payload);
    },
    setCurrent: function setCurrent(_ref2, payload) {
      var commit = _ref2.commit;
      commit('SET_CURRENT', payload);
    }
  },
  getters: {
    pagination: function pagination(state) {
      return state.posts;
    },
    pData: function pData(state) {
      if (!state.posts) return [];
      return state.posts.data;
    },
    pSource: function pSource(state) {
      if (!state.posts) return [];
      var pag = state.posts;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    current: function current(state) {
      return state.current;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Schedules.js":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Schedules.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    all: []
  },
  mutations: {
    SET_ALL: function SET_ALL(state, payload) {
      state.all = payload;
    }
  },
  actions: {
    setAll: function setAll(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_ALL', payload);
    }
  },
  getters: {
    all: function all(state) {
      return state.all;
    },
    schedules: function schedules(state) {
      var schedules = [];
      state.all.map(function (schedule) {
        if (schedule.schedules.length > 0) {
          schedule.schedules.forEach(function (subSchedule) {
            schedules.push(subSchedule);
          });
        }
      });
      return Object(lodash__WEBPACK_IMPORTED_MODULE_1__["uniqBy"])(schedules, 'id');
    },
    current: function current(state) {
      var day;

      switch (new Date().getDay()) {
        case 0:
          day = 'Domingo';
          break;

        case 1:
          day = 'Segunda-Feira';
          break;

        case 2:
          day = 'Terça-Feira';
          break;

        case 3:
          day = 'Quarta-Feira';
          break;

        case 4:
          day = 'Quinta-Feira';
          break;

        case 5:
          day = 'Sexta-Feira';
          break;

        case 6:
          day = 'Sábado';
          break;

        default:
          day = 'Domingo';
          break;
      }

      return state.all.filter(function (payload) {
        return payload.name === day;
      })[0];
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Team.js":
/*!************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Team.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    team: []
  },
  mutations: {
    SET_TEAM: function SET_TEAM(state, payload) {
      state.team = payload;
    }
  },
  actions: {
    setTeam: function setTeam(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_TEAM', payload);
    }
  },
  getters: {
    pData: function pData(state) {
      if (!state.team) return [];
      return state.team.data;
    },
    pSource: function pSource(state) {
      if (!state.team) return [];
      var pag = state.team;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    pagination: function pagination(state) {
      return state.team;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Ui.js":
/*!**********************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Ui.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    fillHeight: false
  },
  mutations: {
    SET_FILL_HEIGHT: function SET_FILL_HEIGHT(state, payload) {
      state.fillHeight = payload;
    }
  },
  actions: {
    setFillHeight: function setFillHeight(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_FILL_HEIGHT', payload);
    }
  },
  getters: {
    fillHeight: function fillHeight(state) {
      return state.fillHeight;
    },
    all: function all(state) {
      return state;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/Videos.js":
/*!**************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/Videos.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    videos: []
  },
  mutations: {
    SET_VIDEOS: function SET_VIDEOS(state, payload) {
      state.videos = payload;
    }
  },
  actions: {
    setVideos: function setVideos(_ref, payload) {
      var commit = _ref.commit;
      commit('SET_VIDEOS', payload);
    }
  },
  getters: {
    pData: function pData(state) {
      if (!state.videos) return [];
      return state.videos.data;
    },
    pSource: function pSource(state) {
      if (!state.videos) return [];
      var pag = state.videos;
      return {
        current_page: pag.current_page,
        last_page: pag.last_page,
        next_page_url: pag.next_page_url,
        prev_page_url: pag.prev_page_url
      };
    },
    pagination: function pagination(state) {
      return state.videos;
    }
  }
});

/***/ }),

/***/ "./resources/assets/js/frontend/store/modules/index.js":
/*!*************************************************************!*\
  !*** ./resources/assets/js/frontend/store/modules/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var files = __webpack_require__("./resources/assets/js/frontend/store/modules sync \\.js");

var context = {};
files.keys().forEach(function (file) {
  if (file.match(/index/)) return;
  context[file.replace('./', '').replace('.js', '')] = files(file)['default'];
});
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./resources/assets/stylus/app.styl":
/*!******************************************!*\
  !*** ./resources/assets/stylus/app.styl ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--9-2!../../../node_modules/stylus-loader!./app.styl */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/assets/stylus/app.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./resources/assets/js/app.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jhonatas\Desktop\RadioGen\resources\assets\js\app.js */"./resources/assets/js/app.js");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);