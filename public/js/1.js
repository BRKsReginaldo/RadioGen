webpackJsonp([1],{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./rFooter/index": 271,
	"./rFooter/index.vue": 271,
	"./rPagination/index": 272,
	"./rPagination/index.vue": 272,
	"./rPlayer/index": 273,
	"./rPlayer/index.vue": 273
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 258;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(171)(
  /* script */
  __webpack_require__(291),
  /* template */
  __webpack_require__(343),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xserver\\xampp\\htdocs\\RadioGen\\resources\\assets\\js\\frontend\\components\\rFooter\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4498cee4", Component.options)
  } else {
    hotAPI.reload("data-v-4498cee4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(171)(
  /* script */
  __webpack_require__(292),
  /* template */
  __webpack_require__(352),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xserver\\xampp\\htdocs\\RadioGen\\resources\\assets\\js\\frontend\\components\\rPagination\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b9a7723", Component.options)
  } else {
    hotAPI.reload("data-v-6b9a7723", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(171)(
  /* script */
  __webpack_require__(293),
  /* template */
  __webpack_require__(346),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\xserver\\xampp\\htdocs\\RadioGen\\resources\\assets\\js\\frontend\\components\\rPlayer\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-552754aa", Component.options)
  } else {
    hotAPI.reload("data-v-552754aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    computed: {
        string: function string() {
            return this.$store.getters['Config/key']['footer_text']['value'];
        }
    }
};

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'Pagination',
    props: {
        getter: {
            type: String,
            required: true
        }
    },
    computed: {
        pagination: function pagination() {
            return this.$store.getters[this.getter];
        },
        length: function length() {
            if (!this.pagination) return;

            for (var length = 0, payload = 0; length < this.pagination.total; length += this.pagination.per_page, payload++) {}

            return payload;
        },

        page: {
            get: function get() {
                return this.$route.query.page;
            },
            set: function set(value) {
                this.$router.push({
                    query: {
                        page: value
                    }
                });
            }
        }
    },
    mounted: function mounted() {
        if (this.length) {
            if (this.page > this.length) {
                this.updatePage(1);
            }
        }

        if (!this.page) {
            this.updatePage(1);
        }
    },

    methods: {
        updatePage: function updatePage(value) {
            this.$router.push({
                query: {
                    page: value
                }
            });
        }
    }
};

/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    computed: {
        link: function link() {
            return this.$store.getters['Config/key']['player_url']['value'];
        },
        volumeIcon: function volumeIcon() {
            var volume = this.volume;

            if (volume > 50) return 'volume_up';else if (volume <= 50 && volume > 25) return 'volume_down';else if (volume <= 25 && volume > 0) return 'volume_mute';else if (volume <= 0) return 'volume_off';
        },
        volumeMedia: function volumeMedia() {
            return this.volume / 100;
        },
        isMuted: function isMuted() {
            return this.volume <= 0;
        }
    },
    data: function data() {
        return {
            loaded: false,
            playing: false,
            volume: 100,
            message: ''
        };
    },
    mounted: function mounted() {
        setTimeout(this.updateSchedule, 10);
        setInterval(this.updateSchedule, 5000);
    },

    methods: {
        _handlePlayingUi: function _handlePlayingUi(ev) {},
        _handleLoaded: function _handleLoaded(ev) {
            this.togglePlaying();
        },
        _handlePause: function _handlePause(ev) {},
        _handlePlay: function _handlePlay(ev) {},
        togglePlaying: function togglePlaying() {
            this.playing = !this.playing;

            this.playing ? this.$refs.audio.play() : this.$refs.audio.pause();
        },
        toggleVolume: function toggleVolume() {
            if (this.volume !== 0) this.volume = 0;else this.volume = 100;
        },
        updateSchedule: function updateSchedule() {
            var schedule = this.$store.getters['Schedules/current'].schedules.filter(function (schedule) {

                var getTime = function getTime(date, string) {
                    var arr = string.split(':');
                    date.setHours(parseInt(arr[0], 10));
                    date.setMinutes(parseInt(arr[1], 10));
                    return date.getTime();
                };

                var now = new Date().getTime();

                return now >= getTime(new Date(), schedule.pivot.starts_at) && now <= getTime(new Date(), schedule.pivot.ends_at);
            })[0];

            if (schedule) {
                var name = schedule.name.length > 60 ? schedule.name.slice(0, 57) + '...' : schedule.name;
                var speaker = schedule.speaker.length > 30 ? schedule.speaker.slice(0, 27) + '...' : schedule.speaker;
                this.message = 'Agora na radio: ' + name + ' com ' + speaker;
            } else {
                this.message = 'Programação inativa';
            }
        }
    },
    watch: {
        volumeMedia: function volumeMedia(value) {
            this.$refs.audio.volume = value;
        }
    }
};

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-footer', [_c('span', {
    staticClass: "ml-2"
  }, [_vm._v(_vm._s(_vm.string))]), _vm._v(" "), _c('v-spacer'), _vm._v(" "), _c('span', {
    staticClass: "mr-2"
  }, [_vm._v("Criado por "), _c('a', {
    staticStyle: {
      "text-decoration": "none"
    },
    attrs: {
      "href": "//sites.xfind.com.br/",
      "closs": "black-text"
    }
  }, [_c('b', [_vm._v("XFind")])])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4498cee4", module.exports)
  }
}

/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('span', {
    staticClass: "hidden-sm-and-down",
    staticStyle: {
      "margin-right": "80px"
    }
  }, [_vm._v(_vm._s(_vm.message))]), _vm._v(" "), _c('v-chip', {
    staticClass: "elevation-2",
    staticStyle: {
      "margin-right": "80px",
      "position": "absolute",
      "bottom": "-25px",
      "right": "0"
    },
    attrs: {
      "id": "volume_control"
    }
  }, [_c('v-avatar', {
    staticStyle: {
      "cursor": "pointer"
    },
    on: {
      "click": _vm.toggleVolume
    }
  }, [_c('v-icon', {
    attrs: {
      "light": ""
    }
  }, [_vm._v(_vm._s(_vm.volumeIcon))])], 1), _vm._v(" "), _c('v-slider', {
    staticStyle: {
      "position": "relative",
      "top": "10px"
    },
    attrs: {
      "light": "",
      "thumb-label": "",
      "snap": "",
      "step": "10"
    },
    model: {
      value: (_vm.volume),
      callback: function($$v) {
        _vm.volume = $$v
      },
      expression: "volume"
    }
  })], 1), _vm._v(" "), _c('v-btn', {
    staticClass: "blue",
    attrs: {
      "dark": "",
      "fab": "",
      "absolute": "",
      "bottom": "",
      "right": ""
    },
    nativeOn: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.togglePlaying($event)
      }
    }
  }, [_c('v-icon', [_vm._v(_vm._s(_vm.playing ? 'pause' : 'play_arrow'))])], 1), _vm._v(" "), _c('audio', {
    ref: "audio",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "src": _vm.link,
      "preload": "auto"
    },
    on: {
      "timeupdate": _vm._handlePlayingUi,
      "loadeddata": _vm._handleLoaded,
      "pause": _vm._handlePause,
      "play": _vm._handlePlay
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-552754aa", module.exports)
  }
}

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('v-layout', {
    attrs: {
      "row": "",
      "justify-space-around": ""
    }
  }, [_c('v-card', {
    attrs: {
      "light": ""
    }
  }, [_c('v-pagination', {
    attrs: {
      "length": _vm.length,
      "value": parseInt(_vm.page)
    },
    on: {
      "input": _vm.updatePage
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b9a7723", module.exports)
  }
}

/***/ })

});