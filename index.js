'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;

	var l = Symbol.for("react.element"),
	  n = Symbol.for("react.portal"),
	  p = Symbol.for("react.fragment"),
	  q = Symbol.for("react.strict_mode"),
	  r = Symbol.for("react.profiler"),
	  t = Symbol.for("react.provider"),
	  u = Symbol.for("react.context"),
	  v = Symbol.for("react.forward_ref"),
	  w = Symbol.for("react.suspense"),
	  x = Symbol.for("react.memo"),
	  y = Symbol.for("react.lazy"),
	  z = Symbol.iterator;
	function A(a) {
	  if (null === a || "object" !== typeof a) return null;
	  a = z && a[z] || a["@@iterator"];
	  return "function" === typeof a ? a : null;
	}
	var B = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  C = Object.assign,
	  D = {};
	function E(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D;
	  this.updater = e || B;
	}
	E.prototype.isReactComponent = {};
	E.prototype.setState = function (a, b) {
	  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
	  this.updater.enqueueSetState(this, a, b, "setState");
	};
	E.prototype.forceUpdate = function (a) {
	  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
	};
	function F() {}
	F.prototype = E.prototype;
	function G(a, b, e) {
	  this.props = a;
	  this.context = b;
	  this.refs = D;
	  this.updater = e || B;
	}
	var H = G.prototype = new F();
	H.constructor = G;
	C(H, E.prototype);
	H.isPureReactComponent = !0;
	var I = Array.isArray,
	  J = Object.prototype.hasOwnProperty,
	  K = {
	    current: null
	  },
	  L = {
	    key: !0,
	    ref: !0,
	    __self: !0,
	    __source: !0
	  };
	function M(a, b, e) {
	  var d,
	    c = {},
	    k = null,
	    h = null;
	  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
	  var g = arguments.length - 2;
	  if (1 === g) c.children = e;else if (1 < g) {
	    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
	    c.children = f;
	  }
	  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
	  return {
	    $$typeof: l,
	    type: a,
	    key: k,
	    ref: h,
	    props: c,
	    _owner: K.current
	  };
	}
	function N(a, b) {
	  return {
	    $$typeof: l,
	    type: a.type,
	    key: b,
	    ref: a.ref,
	    props: a.props,
	    _owner: a._owner
	  };
	}
	function O(a) {
	  return "object" === typeof a && null !== a && a.$$typeof === l;
	}
	function escape(a) {
	  var b = {
	    "=": "=0",
	    ":": "=2"
	  };
	  return "$" + a.replace(/[=:]/g, function (a) {
	    return b[a];
	  });
	}
	var P = /\/+/g;
	function Q(a, b) {
	  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
	}
	function R(a, b, e, d, c) {
	  var k = typeof a;
	  if ("undefined" === k || "boolean" === k) a = null;
	  var h = !1;
	  if (null === a) h = !0;else switch (k) {
	    case "string":
	    case "number":
	      h = !0;
	      break;
	    case "object":
	      switch (a.$$typeof) {
	        case l:
	        case n:
	          h = !0;
	      }
	  }
	  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
	    return a;
	  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
	  h = 0;
	  d = "" === d ? "." : d + ":";
	  if (I(a)) for (var g = 0; g < a.length; g++) {
	    k = a[g];
	    var f = d + Q(k, g);
	    h += R(k, b, e, f, c);
	  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
	  return h;
	}
	function S(a, b, e) {
	  if (null == a) return a;
	  var d = [],
	    c = 0;
	  R(a, d, "", "", function (a) {
	    return b.call(e, a, c++);
	  });
	  return d;
	}
	function T(a) {
	  if (-1 === a._status) {
	    var b = a._result;
	    b = b();
	    b.then(function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
	    }, function (b) {
	      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
	    });
	    -1 === a._status && (a._status = 0, a._result = b);
	  }
	  if (1 === a._status) return a._result.default;
	  throw a._result;
	}
	var U = {
	    current: null
	  },
	  V = {
	    transition: null
	  },
	  W = {
	    ReactCurrentDispatcher: U,
	    ReactCurrentBatchConfig: V,
	    ReactCurrentOwner: K
	  };
	function X() {
	  throw Error("act(...) is not supported in production builds of React.");
	}
	react_production_min.Children = {
	  map: S,
	  forEach: function (a, b, e) {
	    S(a, function () {
	      b.apply(this, arguments);
	    }, e);
	  },
	  count: function (a) {
	    var b = 0;
	    S(a, function () {
	      b++;
	    });
	    return b;
	  },
	  toArray: function (a) {
	    return S(a, function (a) {
	      return a;
	    }) || [];
	  },
	  only: function (a) {
	    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
	    return a;
	  }
	};
	react_production_min.Component = E;
	react_production_min.Fragment = p;
	react_production_min.Profiler = r;
	react_production_min.PureComponent = G;
	react_production_min.StrictMode = q;
	react_production_min.Suspense = w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
	react_production_min.act = X;
	react_production_min.cloneElement = function (a, b, e) {
	  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
	  var d = C({}, a.props),
	    c = a.key,
	    k = a.ref,
	    h = a._owner;
	  if (null != b) {
	    void 0 !== b.ref && (k = b.ref, h = K.current);
	    void 0 !== b.key && (c = "" + b.key);
	    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
	    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
	  }
	  var f = arguments.length - 2;
	  if (1 === f) d.children = e;else if (1 < f) {
	    g = Array(f);
	    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
	    d.children = g;
	  }
	  return {
	    $$typeof: l,
	    type: a.type,
	    key: c,
	    ref: k,
	    props: d,
	    _owner: h
	  };
	};
	react_production_min.createContext = function (a) {
	  a = {
	    $$typeof: u,
	    _currentValue: a,
	    _currentValue2: a,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null,
	    _defaultValue: null,
	    _globalName: null
	  };
	  a.Provider = {
	    $$typeof: t,
	    _context: a
	  };
	  return a.Consumer = a;
	};
	react_production_min.createElement = M;
	react_production_min.createFactory = function (a) {
	  var b = M.bind(null, a);
	  b.type = a;
	  return b;
	};
	react_production_min.createRef = function () {
	  return {
	    current: null
	  };
	};
	react_production_min.forwardRef = function (a) {
	  return {
	    $$typeof: v,
	    render: a
	  };
	};
	react_production_min.isValidElement = O;
	react_production_min.lazy = function (a) {
	  return {
	    $$typeof: y,
	    _payload: {
	      _status: -1,
	      _result: a
	    },
	    _init: T
	  };
	};
	react_production_min.memo = function (a, b) {
	  return {
	    $$typeof: x,
	    type: a,
	    compare: void 0 === b ? null : b
	  };
	};
	react_production_min.startTransition = function (a) {
	  var b = V.transition;
	  V.transition = {};
	  try {
	    a();
	  } finally {
	    V.transition = b;
	  }
	};
	react_production_min.unstable_act = X;
	react_production_min.useCallback = function (a, b) {
	  return U.current.useCallback(a, b);
	};
	react_production_min.useContext = function (a) {
	  return U.current.useContext(a);
	};
	react_production_min.useDebugValue = function () {};
	react_production_min.useDeferredValue = function (a) {
	  return U.current.useDeferredValue(a);
	};
	react_production_min.useEffect = function (a, b) {
	  return U.current.useEffect(a, b);
	};
	react_production_min.useId = function () {
	  return U.current.useId();
	};
	react_production_min.useImperativeHandle = function (a, b, e) {
	  return U.current.useImperativeHandle(a, b, e);
	};
	react_production_min.useInsertionEffect = function (a, b) {
	  return U.current.useInsertionEffect(a, b);
	};
	react_production_min.useLayoutEffect = function (a, b) {
	  return U.current.useLayoutEffect(a, b);
	};
	react_production_min.useMemo = function (a, b) {
	  return U.current.useMemo(a, b);
	};
	react_production_min.useReducer = function (a, b, e) {
	  return U.current.useReducer(a, b, e);
	};
	react_production_min.useRef = function (a) {
	  return U.current.useRef(a);
	};
	react_production_min.useState = function (a) {
	  return U.current.useState(a);
	};
	react_production_min.useSyncExternalStore = function (a, b, e) {
	  return U.current.useSyncExternalStore(a, b, e);
	};
	react_production_min.useTransition = function () {
	  return U.current.useTransition();
	};
	react_production_min.version = "18.3.1";
	return react_production_min;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function () {

		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		    }
		    var ReactVersion = '18.3.1';

		    // ATTENTION
		    // When adding new symbols to this file,
		    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		    // The Symbol used to tag the ReactElement-like types.
		    var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		    var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		    var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		    var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		    var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		    var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		    var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		    var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		    var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		    var REACT_MEMO_TYPE = Symbol.for('react.memo');
		    var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		    var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		    var FAUX_ITERATOR_SYMBOL = '@@iterator';
		    function getIteratorFn(maybeIterable) {
		      if (maybeIterable === null || typeof maybeIterable !== 'object') {
		        return null;
		      }
		      var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
		      if (typeof maybeIterator === 'function') {
		        return maybeIterator;
		      }
		      return null;
		    }

		    /**
		     * Keeps track of the current dispatcher.
		     */
		    var ReactCurrentDispatcher = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };

		    /**
		     * Keeps track of the current batch's configuration such as how long an update
		     * should suspend for if it needs to.
		     */
		    var ReactCurrentBatchConfig = {
		      transition: null
		    };
		    var ReactCurrentActQueue = {
		      current: null,
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		      isBatchingLegacy: false,
		      didScheduleLegacyUpdate: false
		    };

		    /**
		     * Keeps track of the current owner.
		     *
		     * The current owner is the component who should own any components that are
		     * currently being constructed.
		     */
		    var ReactCurrentOwner = {
		      /**
		       * @internal
		       * @type {ReactComponent}
		       */
		      current: null
		    };
		    var ReactDebugCurrentFrame = {};
		    var currentExtraStackFrame = null;
		    function setExtraStackFrame(stack) {
		      {
		        currentExtraStackFrame = stack;
		      }
		    }
		    {
		      ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		        {
		          currentExtraStackFrame = stack;
		        }
		      }; // Stack implementation injected by the current renderer.

		      ReactDebugCurrentFrame.getCurrentStack = null;
		      ReactDebugCurrentFrame.getStackAddendum = function () {
		        var stack = ''; // Add an extra top frame while an element is being validated

		        if (currentExtraStackFrame) {
		          stack += currentExtraStackFrame;
		        } // Delegate to the injected renderer-specific implementation

		        var impl = ReactDebugCurrentFrame.getCurrentStack;
		        if (impl) {
		          stack += impl() || '';
		        }
		        return stack;
		      };
		    }

		    // -----------------------------------------------------------------------------

		    var enableScopeAPI = false; // Experimental Create Event Handle API.
		    var enableCacheElement = false;
		    var enableTransitionTracing = false; // No known bugs, but needs performance testing

		    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		    // stuff. Intended to enable React core members to more easily debug scheduling
		    // issues in DEV builds.

		    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		    var ReactSharedInternals = {
		      ReactCurrentDispatcher: ReactCurrentDispatcher,
		      ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		      ReactCurrentOwner: ReactCurrentOwner
		    };
		    {
		      ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		      ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		    }

		    // by calls to these methods by a Babel plugin.
		    //
		    // In PROD (or in packages without access to React internals),
		    // they are left as they are instead.

		    function warn(format) {
		      {
		        {
		          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		            args[_key - 1] = arguments[_key];
		          }
		          printWarning('warn', format, args);
		        }
		      }
		    }
		    function error(format) {
		      {
		        {
		          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		            args[_key2 - 1] = arguments[_key2];
		          }
		          printWarning('error', format, args);
		        }
		      }
		    }
		    function printWarning(level, format, args) {
		      // When changing this logic, you might want to also
		      // update consoleWithStackDev.www.js as well.
		      {
		        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		        var stack = ReactDebugCurrentFrame.getStackAddendum();
		        if (stack !== '') {
		          format += '%s';
		          args = args.concat([stack]);
		        } // eslint-disable-next-line react-internal/safe-string-coercion

		        var argsWithFormat = args.map(function (item) {
		          return String(item);
		        }); // Careful: RN currently depends on this prefix

		        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		        // breaks IE9: https://github.com/facebook/react/issues/13610
		        // eslint-disable-next-line react-internal/no-production-logging

		        Function.prototype.apply.call(console[level], console, argsWithFormat);
		      }
		    }
		    var didWarnStateUpdateForUnmountedComponent = {};
		    function warnNoop(publicInstance, callerName) {
		      {
		        var _constructor = publicInstance.constructor;
		        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		        var warningKey = componentName + "." + callerName;
		        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		          return;
		        }
		        error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
		        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		      }
		    }
		    /**
		     * This is the abstract API for an update queue.
		     */

		    var ReactNoopUpdateQueue = {
		      /**
		       * Checks whether or not this composite component is mounted.
		       * @param {ReactClass} publicInstance The instance we want to test.
		       * @return {boolean} True if mounted, false otherwise.
		       * @protected
		       * @final
		       */
		      isMounted: function (publicInstance) {
		        return false;
		      },
		      /**
		       * Forces an update. This should only be invoked when it is known with
		       * certainty that we are **not** in a DOM transaction.
		       *
		       * You may want to call this when you know that some deeper aspect of the
		       * component's state has changed but `setState` was not called.
		       *
		       * This will not invoke `shouldComponentUpdate`, but it will invoke
		       * `componentWillUpdate` and `componentDidUpdate`.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueForceUpdate: function (publicInstance, callback, callerName) {
		        warnNoop(publicInstance, 'forceUpdate');
		      },
		      /**
		       * Replaces all of the state. Always use this or `setState` to mutate state.
		       * You should treat `this.state` as immutable.
		       *
		       * There is no guarantee that `this.state` will be immediately updated, so
		       * accessing `this.state` after calling this method may return the old value.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} completeState Next state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} callerName name of the calling function in the public API.
		       * @internal
		       */
		      enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		        warnNoop(publicInstance, 'replaceState');
		      },
		      /**
		       * Sets a subset of the state. This only exists because _pendingState is
		       * internal. This provides a merging strategy that is not available to deep
		       * properties which is confusing. TODO: Expose pendingState or don't use it
		       * during the merge.
		       *
		       * @param {ReactClass} publicInstance The instance that should rerender.
		       * @param {object} partialState Next partial state to be merged with state.
		       * @param {?function} callback Called after component is updated.
		       * @param {?string} Name of the calling function in the public API.
		       * @internal
		       */
		      enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		        warnNoop(publicInstance, 'setState');
		      }
		    };
		    var assign = Object.assign;
		    var emptyObject = {};
		    {
		      Object.freeze(emptyObject);
		    }
		    /**
		     * Base class helpers for the updating state of a component.
		     */

		    function Component(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		      // renderer.

		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    Component.prototype.isReactComponent = {};
		    /**
		     * Sets a subset of the state. Always use this to mutate
		     * state. You should treat `this.state` as immutable.
		     *
		     * There is no guarantee that `this.state` will be immediately updated, so
		     * accessing `this.state` after calling this method may return the old value.
		     *
		     * There is no guarantee that calls to `setState` will run synchronously,
		     * as they may eventually be batched together.  You can provide an optional
		     * callback that will be executed when the call to setState is actually
		     * completed.
		     *
		     * When a function is provided to setState, it will be called at some point in
		     * the future (not synchronously). It will be called with the up to date
		     * component arguments (state, props, context). These values can be different
		     * from this.* because your function may be called after receiveProps but before
		     * shouldComponentUpdate, and this new state, props, and context will not yet be
		     * assigned to this.
		     *
		     * @param {object|function} partialState Next partial state or function to
		     *        produce next partial state to be merged with current state.
		     * @param {?function} callback Called after state is updated.
		     * @final
		     * @protected
		     */

		    Component.prototype.setState = function (partialState, callback) {
		      if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		        throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		      }
		      this.updater.enqueueSetState(this, partialState, callback, 'setState');
		    };
		    /**
		     * Forces an update. This should only be invoked when it is known with
		     * certainty that we are **not** in a DOM transaction.
		     *
		     * You may want to call this when you know that some deeper aspect of the
		     * component's state has changed but `setState` was not called.
		     *
		     * This will not invoke `shouldComponentUpdate`, but it will invoke
		     * `componentWillUpdate` and `componentDidUpdate`.
		     *
		     * @param {?function} callback Called after update is complete.
		     * @final
		     * @protected
		     */

		    Component.prototype.forceUpdate = function (callback) {
		      this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		    };
		    /**
		     * Deprecated APIs. These APIs used to exist on classic React classes but since
		     * we would like to deprecate them, we're not going to move them over to this
		     * modern base class. Instead, we define a getter that warns if it's accessed.
		     */

		    {
		      var deprecatedAPIs = {
		        isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		        replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		      };
		      var defineDeprecationWarning = function (methodName, info) {
		        Object.defineProperty(Component.prototype, methodName, {
		          get: function () {
		            warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
		            return undefined;
		          }
		        });
		      };
		      for (var fnName in deprecatedAPIs) {
		        if (deprecatedAPIs.hasOwnProperty(fnName)) {
		          defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		        }
		      }
		    }
		    function ComponentDummy() {}
		    ComponentDummy.prototype = Component.prototype;
		    /**
		     * Convenience component with default shallow equality check for sCU.
		     */

		    function PureComponent(props, context, updater) {
		      this.props = props;
		      this.context = context; // If a component has string refs, we will assign a different object later.

		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		    assign(pureComponentPrototype, Component.prototype);
		    pureComponentPrototype.isPureReactComponent = true;

		    // an immutable object with a single mutable value
		    function createRef() {
		      var refObject = {
		        current: null
		      };
		      {
		        Object.seal(refObject);
		      }
		      return refObject;
		    }
		    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		    function isArray(a) {
		      return isArrayImpl(a);
		    }

		    /*
		     * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		     * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		     *
		     * The functions in this module will throw an easier-to-understand,
		     * easier-to-debug exception with a clear errors message message explaining the
		     * problem. (Instead of a confusing exception thrown inside the implementation
		     * of the `value` object).
		     */
		    // $FlowFixMe only called in DEV, so void return is not possible.
		    function typeName(value) {
		      {
		        // toStringTag is needed for namespaced types like Temporal.Instant
		        var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		        return type;
		      }
		    } // $FlowFixMe only called in DEV, so void return is not possible.

		    function willCoercionThrow(value) {
		      {
		        try {
		          testStringCoercion(value);
		          return false;
		        } catch (e) {
		          return true;
		        }
		      }
		    }
		    function testStringCoercion(value) {
		      // If you ended up here by following an exception call stack, here's what's
		      // happened: you supplied an object or symbol value to React (as a prop, key,
		      // DOM attribute, CSS property, string ref, etc.) and when React tried to
		      // coerce it to a string using `'' + value`, an exception was thrown.
		      //
		      // The most common types that will cause this exception are `Symbol` instances
		      // and Temporal objects like `Temporal.Instant`. But any object that has a
		      // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		      // exception. (Library authors do this to prevent users from using built-in
		      // numeric operators like `+` or comparison operators like `>=` because custom
		      // methods are needed to perform accurate arithmetic or comparison.)
		      //
		      // To fix the problem, coerce this object or symbol value to a string before
		      // passing it to React. The most reliable way is usually `String(value)`.
		      //
		      // To find which value is throwing, check the browser or debugger console.
		      // Before this exception was thrown, there should be `console.error` output
		      // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		      // problem and how that type was used: key, atrribute, input value prop, etc.
		      // In most cases, this console output also shows the component and its
		      // ancestor components where the exception happened.
		      //
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      return '' + value;
		    }
		    function checkKeyStringCoercion(value) {
		      {
		        if (willCoercionThrow(value)) {
		          error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
		          return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		        }
		      }
		    }
		    function getWrappedName(outerType, innerType, wrapperName) {
		      var displayName = outerType.displayName;
		      if (displayName) {
		        return displayName;
		      }
		      var functionName = innerType.displayName || innerType.name || '';
		      return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		    } // Keep in sync with react-reconciler/getComponentNameFromFiber

		    function getContextName(type) {
		      return type.displayName || 'Context';
		    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

		    function getComponentNameFromType(type) {
		      if (type == null) {
		        // Host root, text node or just invalid type.
		        return null;
		      }
		      {
		        if (typeof type.tag === 'number') {
		          error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		        }
		      }
		      if (typeof type === 'function') {
		        return type.displayName || type.name || null;
		      }
		      if (typeof type === 'string') {
		        return type;
		      }
		      switch (type) {
		        case REACT_FRAGMENT_TYPE:
		          return 'Fragment';
		        case REACT_PORTAL_TYPE:
		          return 'Portal';
		        case REACT_PROFILER_TYPE:
		          return 'Profiler';
		        case REACT_STRICT_MODE_TYPE:
		          return 'StrictMode';
		        case REACT_SUSPENSE_TYPE:
		          return 'Suspense';
		        case REACT_SUSPENSE_LIST_TYPE:
		          return 'SuspenseList';
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_CONTEXT_TYPE:
		            var context = type;
		            return getContextName(context) + '.Consumer';
		          case REACT_PROVIDER_TYPE:
		            var provider = type;
		            return getContextName(provider._context) + '.Provider';
		          case REACT_FORWARD_REF_TYPE:
		            return getWrappedName(type, type.render, 'ForwardRef');
		          case REACT_MEMO_TYPE:
		            var outerName = type.displayName || null;
		            if (outerName !== null) {
		              return outerName;
		            }
		            return getComponentNameFromType(type.type) || 'Memo';
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                return getComponentNameFromType(init(payload));
		              } catch (x) {
		                return null;
		              }
		            }

		          // eslint-disable-next-line no-fallthrough
		        }
		      }
		      return null;
		    }
		    var hasOwnProperty = Object.prototype.hasOwnProperty;
		    var RESERVED_PROPS = {
		      key: true,
		      ref: true,
		      __self: true,
		      __source: true
		    };
		    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
		    {
		      didWarnAboutStringRefs = {};
		    }
		    function hasValidRef(config) {
		      {
		        if (hasOwnProperty.call(config, 'ref')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.ref !== undefined;
		    }
		    function hasValidKey(config) {
		      {
		        if (hasOwnProperty.call(config, 'key')) {
		          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
		          if (getter && getter.isReactWarning) {
		            return false;
		          }
		        }
		      }
		      return config.key !== undefined;
		    }
		    function defineKeyPropWarningGetter(props, displayName) {
		      var warnAboutAccessingKey = function () {
		        {
		          if (!specialPropKeyWarningShown) {
		            specialPropKeyWarningShown = true;
		            error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingKey.isReactWarning = true;
		      Object.defineProperty(props, 'key', {
		        get: warnAboutAccessingKey,
		        configurable: true
		      });
		    }
		    function defineRefPropWarningGetter(props, displayName) {
		      var warnAboutAccessingRef = function () {
		        {
		          if (!specialPropRefWarningShown) {
		            specialPropRefWarningShown = true;
		            error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		          }
		        }
		      };
		      warnAboutAccessingRef.isReactWarning = true;
		      Object.defineProperty(props, 'ref', {
		        get: warnAboutAccessingRef,
		        configurable: true
		      });
		    }
		    function warnIfStringRefCannotBeAutoConverted(config) {
		      {
		        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		          var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
		          if (!didWarnAboutStringRefs[componentName]) {
		            error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
		            didWarnAboutStringRefs[componentName] = true;
		          }
		        }
		      }
		    }
		    /**
		     * Factory method to create a new React element. This no longer adheres to
		     * the class pattern, so do not use new to call it. Also, instanceof check
		     * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		     * if something is a React Element.
		     *
		     * @param {*} type
		     * @param {*} props
		     * @param {*} key
		     * @param {string|object} ref
		     * @param {*} owner
		     * @param {*} self A *temporary* helper to detect places where `this` is
		     * different from the `owner` when React.createElement is called, so that we
		     * can warn. We want to get rid of owner and replace string `ref`s with arrow
		     * functions, and as long as `this` and owner are the same, there will be no
		     * change in behavior.
		     * @param {*} source An annotation object (added by a transpiler or otherwise)
		     * indicating filename, line number, and/or other information.
		     * @internal
		     */

		    var ReactElement = function (type, key, ref, self, source, owner, props) {
		      var element = {
		        // This tag allows us to uniquely identify this as a React Element
		        $$typeof: REACT_ELEMENT_TYPE,
		        // Built-in properties that belong on the element
		        type: type,
		        key: key,
		        ref: ref,
		        props: props,
		        // Record the component responsible for creating this element.
		        _owner: owner
		      };
		      {
		        // The validation flag is currently mutative. We put it on
		        // an external backing store so that we can freeze the whole object.
		        // This can be replaced with a WeakMap once they are implemented in
		        // commonly used development environments.
		        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		        // the validation flag non-enumerable (where possible, which should
		        // include every environment we run tests in), so the test framework
		        // ignores it.

		        Object.defineProperty(element._store, 'validated', {
		          configurable: false,
		          enumerable: false,
		          writable: true,
		          value: false
		        }); // self and source are DEV only properties.

		        Object.defineProperty(element, '_self', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: self
		        }); // Two elements created in two different places should be considered
		        // equal for testing purposes and therefore we hide it from enumeration.

		        Object.defineProperty(element, '_source', {
		          configurable: false,
		          enumerable: false,
		          writable: false,
		          value: source
		        });
		        if (Object.freeze) {
		          Object.freeze(element.props);
		          Object.freeze(element);
		        }
		      }
		      return element;
		    };
		    /**
		     * Create and return a new ReactElement of the given type.
		     * See https://reactjs.org/docs/react-api.html#createelement
		     */

		    function createElement(type, config, children) {
		      var propName; // Reserved names are extracted

		      var props = {};
		      var key = null;
		      var ref = null;
		      var self = null;
		      var source = null;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          ref = config.ref;
		          {
		            warnIfStringRefCannotBeAutoConverted(config);
		          }
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        }
		        self = config.__self === undefined ? null : config.__self;
		        source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            props[propName] = config[propName];
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        {
		          if (Object.freeze) {
		            Object.freeze(childArray);
		          }
		        }
		        props.children = childArray;
		      } // Resolve default props

		      if (type && type.defaultProps) {
		        var defaultProps = type.defaultProps;
		        for (propName in defaultProps) {
		          if (props[propName] === undefined) {
		            props[propName] = defaultProps[propName];
		          }
		        }
		      }
		      {
		        if (key || ref) {
		          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
		          if (key) {
		            defineKeyPropWarningGetter(props, displayName);
		          }
		          if (ref) {
		            defineRefPropWarningGetter(props, displayName);
		          }
		        }
		      }
		      return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		    }
		    function cloneAndReplaceKey(oldElement, newKey) {
		      var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		      return newElement;
		    }
		    /**
		     * Clone and return a new ReactElement using element as the starting point.
		     * See https://reactjs.org/docs/react-api.html#cloneelement
		     */

		    function cloneElement(element, config, children) {
		      if (element === null || element === undefined) {
		        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		      }
		      var propName; // Original props are copied

		      var props = assign({}, element.props); // Reserved names are extracted

		      var key = element.key;
		      var ref = element.ref; // Self is preserved since the owner is preserved.

		      var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		      // transpiler, and the original source is probably a better indicator of the
		      // true owner.

		      var source = element._source; // Owner will be preserved, unless ref is overridden

		      var owner = element._owner;
		      if (config != null) {
		        if (hasValidRef(config)) {
		          // Silently steal the ref from the parent.
		          ref = config.ref;
		          owner = ReactCurrentOwner.current;
		        }
		        if (hasValidKey(config)) {
		          {
		            checkKeyStringCoercion(config.key);
		          }
		          key = '' + config.key;
		        } // Remaining properties override existing props

		        var defaultProps;
		        if (element.type && element.type.defaultProps) {
		          defaultProps = element.type.defaultProps;
		        }
		        for (propName in config) {
		          if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		            if (config[propName] === undefined && defaultProps !== undefined) {
		              // Resolve default props
		              props[propName] = defaultProps[propName];
		            } else {
		              props[propName] = config[propName];
		            }
		          }
		        }
		      } // Children can be more than one argument, and those are transferred onto
		      // the newly allocated props object.

		      var childrenLength = arguments.length - 2;
		      if (childrenLength === 1) {
		        props.children = children;
		      } else if (childrenLength > 1) {
		        var childArray = Array(childrenLength);
		        for (var i = 0; i < childrenLength; i++) {
		          childArray[i] = arguments[i + 2];
		        }
		        props.children = childArray;
		      }
		      return ReactElement(element.type, key, ref, self, source, owner, props);
		    }
		    /**
		     * Verifies the object is a ReactElement.
		     * See https://reactjs.org/docs/react-api.html#isvalidelement
		     * @param {?object} object
		     * @return {boolean} True if `object` is a ReactElement.
		     * @final
		     */

		    function isValidElement(object) {
		      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		    }
		    var SEPARATOR = '.';
		    var SUBSEPARATOR = ':';
		    /**
		     * Escape and wrap key so it is safe to use as a reactid
		     *
		     * @param {string} key to be escaped.
		     * @return {string} the escaped key.
		     */

		    function escape(key) {
		      var escapeRegex = /[=:]/g;
		      var escaperLookup = {
		        '=': '=0',
		        ':': '=2'
		      };
		      var escapedString = key.replace(escapeRegex, function (match) {
		        return escaperLookup[match];
		      });
		      return '$' + escapedString;
		    }
		    /**
		     * TODO: Test that a single child and an array with one item have the same key
		     * pattern.
		     */

		    var didWarnAboutMaps = false;
		    var userProvidedKeyEscapeRegex = /\/+/g;
		    function escapeUserProvidedKey(text) {
		      return text.replace(userProvidedKeyEscapeRegex, '$&/');
		    }
		    /**
		     * Generate a key string that identifies a element within a set.
		     *
		     * @param {*} element A element that could contain a manual key.
		     * @param {number} index Index that is used if a manual key is not provided.
		     * @return {string}
		     */

		    function getElementKey(element, index) {
		      // Do some typechecking here since we call this blindly. We want to ensure
		      // that we don't block potential future ES APIs.
		      if (typeof element === 'object' && element !== null && element.key != null) {
		        // Explicit key
		        {
		          checkKeyStringCoercion(element.key);
		        }
		        return escape('' + element.key);
		      } // Implicit key determined by the index in the set

		      return index.toString(36);
		    }
		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		      var type = typeof children;
		      if (type === 'undefined' || type === 'boolean') {
		        // All of the above are perceived as null.
		        children = null;
		      }
		      var invokeCallback = false;
		      if (children === null) {
		        invokeCallback = true;
		      } else {
		        switch (type) {
		          case 'string':
		          case 'number':
		            invokeCallback = true;
		            break;
		          case 'object':
		            switch (children.$$typeof) {
		              case REACT_ELEMENT_TYPE:
		              case REACT_PORTAL_TYPE:
		                invokeCallback = true;
		            }
		        }
		      }
		      if (invokeCallback) {
		        var _child = children;
		        var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		        // so that it's consistent if the number of children grows:

		        var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
		        if (isArray(mappedChild)) {
		          var escapedChildKey = '';
		          if (childKey != null) {
		            escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		          }
		          mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		            return c;
		          });
		        } else if (mappedChild != null) {
		          if (isValidElement(mappedChild)) {
		            {
		              // The `if` statement here prevents auto-disabling of the safe
		              // coercion ESLint rule, so we must manually disable it below.
		              // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		              if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		                checkKeyStringCoercion(mappedChild.key);
		              }
		            }
		            mappedChild = cloneAndReplaceKey(mappedChild,
		            // Keep both the (mapped) and old keys if they differ, just as
		            // traverseAllChildren used to do for objects as children
		            escapedPrefix + (
		            // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		            mappedChild.key && (!_child || _child.key !== mappedChild.key) ?
		            // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		            // eslint-disable-next-line react-internal/safe-string-coercion
		            escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		          }
		          array.push(mappedChild);
		        }
		        return 1;
		      }
		      var child;
		      var nextName;
		      var subtreeCount = 0; // Count of children found in the current subtree.

		      var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
		      if (isArray(children)) {
		        for (var i = 0; i < children.length; i++) {
		          child = children[i];
		          nextName = nextNamePrefix + getElementKey(child, i);
		          subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		        }
		      } else {
		        var iteratorFn = getIteratorFn(children);
		        if (typeof iteratorFn === 'function') {
		          var iterableChildren = children;
		          {
		            // Warn about using Maps as children
		            if (iteratorFn === iterableChildren.entries) {
		              if (!didWarnAboutMaps) {
		                warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		              }
		              didWarnAboutMaps = true;
		            }
		          }
		          var iterator = iteratorFn.call(iterableChildren);
		          var step;
		          var ii = 0;
		          while (!(step = iterator.next()).done) {
		            child = step.value;
		            nextName = nextNamePrefix + getElementKey(child, ii++);
		            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		          }
		        } else if (type === 'object') {
		          // eslint-disable-next-line react-internal/safe-string-coercion
		          var childrenString = String(children);
		          throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		        }
		      }
		      return subtreeCount;
		    }

		    /**
		     * Maps children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		     *
		     * The provided mapFunction(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} func The map function.
		     * @param {*} context Context for mapFunction.
		     * @return {object} Object containing the ordered map of results.
		     */
		    function mapChildren(children, func, context) {
		      if (children == null) {
		        return children;
		      }
		      var result = [];
		      var count = 0;
		      mapIntoArray(children, result, '', '', function (child) {
		        return func.call(context, child, count++);
		      });
		      return result;
		    }
		    /**
		     * Count the number of children that are typically specified as
		     * `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrencount
		     *
		     * @param {?*} children Children tree container.
		     * @return {number} The number of children.
		     */

		    function countChildren(children) {
		      var n = 0;
		      mapChildren(children, function () {
		        n++; // Don't return anything
		      });
		      return n;
		    }

		    /**
		     * Iterates through children that are typically specified as `props.children`.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		     *
		     * The provided forEachFunc(child, index) will be called for each
		     * leaf child.
		     *
		     * @param {?*} children Children tree container.
		     * @param {function(*, int)} forEachFunc
		     * @param {*} forEachContext Context for forEachContext.
		     */
		    function forEachChildren(children, forEachFunc, forEachContext) {
		      mapChildren(children, function () {
		        forEachFunc.apply(this, arguments); // Don't return anything.
		      }, forEachContext);
		    }
		    /**
		     * Flatten a children object (typically specified as `props.children`) and
		     * return an array with appropriately re-keyed children.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		     */

		    function toArray(children) {
		      return mapChildren(children, function (child) {
		        return child;
		      }) || [];
		    }
		    /**
		     * Returns the first child in a collection of children and verifies that there
		     * is only one child in the collection.
		     *
		     * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		     *
		     * The current implementation of this function assumes that a single child gets
		     * passed without a wrapper, but the purpose of this helper function is to
		     * abstract away the particular structure of children.
		     *
		     * @param {?object} children Child collection structure.
		     * @return {ReactElement} The first and only `ReactElement` contained in the
		     * structure.
		     */

		    function onlyChild(children) {
		      if (!isValidElement(children)) {
		        throw new Error('React.Children.only expected to receive a single React element child.');
		      }
		      return children;
		    }
		    function createContext(defaultValue) {
		      // TODO: Second argument used to be an optional `calculateChangedBits`
		      // function. Warn to reserve for future use?
		      var context = {
		        $$typeof: REACT_CONTEXT_TYPE,
		        // As a workaround to support multiple concurrent renderers, we categorize
		        // some renderers as primary and others as secondary. We only expect
		        // there to be two concurrent renderers at most: React Native (primary) and
		        // Fabric (secondary); React DOM (primary) and React ART (secondary).
		        // Secondary renderers store their context values on separate fields.
		        _currentValue: defaultValue,
		        _currentValue2: defaultValue,
		        // Used to track how many concurrent renderers this context currently
		        // supports within in a single renderer. Such as parallel server rendering.
		        _threadCount: 0,
		        // These are circular
		        Provider: null,
		        Consumer: null,
		        // Add these to use same hidden class in VM as ServerContext
		        _defaultValue: null,
		        _globalName: null
		      };
		      context.Provider = {
		        $$typeof: REACT_PROVIDER_TYPE,
		        _context: context
		      };
		      var hasWarnedAboutUsingNestedContextConsumers = false;
		      var hasWarnedAboutUsingConsumerProvider = false;
		      var hasWarnedAboutDisplayNameOnConsumer = false;
		      {
		        // A separate object, but proxies back to the original context object for
		        // backwards compatibility. It has a different $$typeof, so we can properly
		        // warn for the incorrect usage of Context as a Consumer.
		        var Consumer = {
		          $$typeof: REACT_CONTEXT_TYPE,
		          _context: context
		        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		        Object.defineProperties(Consumer, {
		          Provider: {
		            get: function () {
		              if (!hasWarnedAboutUsingConsumerProvider) {
		                hasWarnedAboutUsingConsumerProvider = true;
		                error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		              }
		              return context.Provider;
		            },
		            set: function (_Provider) {
		              context.Provider = _Provider;
		            }
		          },
		          _currentValue: {
		            get: function () {
		              return context._currentValue;
		            },
		            set: function (_currentValue) {
		              context._currentValue = _currentValue;
		            }
		          },
		          _currentValue2: {
		            get: function () {
		              return context._currentValue2;
		            },
		            set: function (_currentValue2) {
		              context._currentValue2 = _currentValue2;
		            }
		          },
		          _threadCount: {
		            get: function () {
		              return context._threadCount;
		            },
		            set: function (_threadCount) {
		              context._threadCount = _threadCount;
		            }
		          },
		          Consumer: {
		            get: function () {
		              if (!hasWarnedAboutUsingNestedContextConsumers) {
		                hasWarnedAboutUsingNestedContextConsumers = true;
		                error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		              }
		              return context.Consumer;
		            }
		          },
		          displayName: {
		            get: function () {
		              return context.displayName;
		            },
		            set: function (displayName) {
		              if (!hasWarnedAboutDisplayNameOnConsumer) {
		                warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
		                hasWarnedAboutDisplayNameOnConsumer = true;
		              }
		            }
		          }
		        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		        context.Consumer = Consumer;
		      }
		      {
		        context._currentRenderer = null;
		        context._currentRenderer2 = null;
		      }
		      return context;
		    }
		    var Uninitialized = -1;
		    var Pending = 0;
		    var Resolved = 1;
		    var Rejected = 2;
		    function lazyInitializer(payload) {
		      if (payload._status === Uninitialized) {
		        var ctor = payload._result;
		        var thenable = ctor(); // Transition to the next state.
		        // This might throw either because it's missing or throws. If so, we treat it
		        // as still uninitialized and try again next time. Which is the same as what
		        // happens if the ctor or any wrappers processing the ctor throws. This might
		        // end up fixing it if the resolution was a concurrency bug.

		        thenable.then(function (moduleObject) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var resolved = payload;
		            resolved._status = Resolved;
		            resolved._result = moduleObject;
		          }
		        }, function (error) {
		          if (payload._status === Pending || payload._status === Uninitialized) {
		            // Transition to the next state.
		            var rejected = payload;
		            rejected._status = Rejected;
		            rejected._result = error;
		          }
		        });
		        if (payload._status === Uninitialized) {
		          // In case, we're still uninitialized, then we're waiting for the thenable
		          // to resolve. Set it as pending in the meantime.
		          var pending = payload;
		          pending._status = Pending;
		          pending._result = thenable;
		        }
		      }
		      if (payload._status === Resolved) {
		        var moduleObject = payload._result;
		        {
		          if (moduleObject === undefined) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		          }
		        }
		        {
		          if (!('default' in moduleObject)) {
		            error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' +
		            // Break up imports to avoid accidentally parsing them as dependencies.
		            'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		          }
		        }
		        return moduleObject.default;
		      } else {
		        throw payload._result;
		      }
		    }
		    function lazy(ctor) {
		      var payload = {
		        // We use these fields to store the result.
		        _status: Uninitialized,
		        _result: ctor
		      };
		      var lazyType = {
		        $$typeof: REACT_LAZY_TYPE,
		        _payload: payload,
		        _init: lazyInitializer
		      };
		      {
		        // In production, this would just set it on the object.
		        var defaultProps;
		        var propTypes; // $FlowFixMe

		        Object.defineProperties(lazyType, {
		          defaultProps: {
		            configurable: true,
		            get: function () {
		              return defaultProps;
		            },
		            set: function (newDefaultProps) {
		              error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              defaultProps = newDefaultProps; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'defaultProps', {
		                enumerable: true
		              });
		            }
		          },
		          propTypes: {
		            configurable: true,
		            get: function () {
		              return propTypes;
		            },
		            set: function (newPropTypes) {
		              error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
		              propTypes = newPropTypes; // Match production behavior more closely:
		              // $FlowFixMe

		              Object.defineProperty(lazyType, 'propTypes', {
		                enumerable: true
		              });
		            }
		          }
		        });
		      }
		      return lazyType;
		    }
		    function forwardRef(render) {
		      {
		        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		          error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		        } else if (typeof render !== 'function') {
		          error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		        } else {
		          if (render.length !== 0 && render.length !== 2) {
		            error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		          }
		        }
		        if (render != null) {
		          if (render.defaultProps != null || render.propTypes != null) {
		            error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		          }
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_FORWARD_REF_TYPE,
		        render: render
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.forwardRef((props, ref) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!render.name && !render.displayName) {
		              render.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    var REACT_MODULE_REFERENCE;
		    {
		      REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		    }
		    function isValidElementType(type) {
		      if (typeof type === 'string' || typeof type === 'function') {
		        return true;
		      } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

		      if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
		        return true;
		      }
		      if (typeof type === 'object' && type !== null) {
		        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // This needs to include all possible module reference object
		        // types supported by any Flight configuration anywhere since
		        // we don't know which Flight build this will end up being used
		        // with.
		        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		          return true;
		        }
		      }
		      return false;
		    }
		    function memo(type, compare) {
		      {
		        if (!isValidElementType(type)) {
		          error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		        }
		      }
		      var elementType = {
		        $$typeof: REACT_MEMO_TYPE,
		        type: type,
		        compare: compare === undefined ? null : compare
		      };
		      {
		        var ownName;
		        Object.defineProperty(elementType, 'displayName', {
		          enumerable: false,
		          configurable: true,
		          get: function () {
		            return ownName;
		          },
		          set: function (name) {
		            ownName = name; // The inner component shouldn't inherit this display name in most cases,
		            // because the component may be used elsewhere.
		            // But it's nice for anonymous functions to inherit the name,
		            // so that our component-stack generation logic will display their frames.
		            // An anonymous function generally suggests a pattern like:
		            //   React.memo((props) => {...});
		            // This kind of inner function is not used elsewhere so the side effect is okay.

		            if (!type.name && !type.displayName) {
		              type.displayName = name;
		            }
		          }
		        });
		      }
		      return elementType;
		    }
		    function resolveDispatcher() {
		      var dispatcher = ReactCurrentDispatcher.current;
		      {
		        if (dispatcher === null) {
		          error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		        }
		      } // Will result in a null access error if accessed outside render phase. We
		      // intentionally don't throw our own error because this is in a hot path.
		      // Also helps ensure this is inlined.

		      return dispatcher;
		    }
		    function useContext(Context) {
		      var dispatcher = resolveDispatcher();
		      {
		        // TODO: add a more generic warning for invalid values.
		        if (Context._context !== undefined) {
		          var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		          // and nobody should be using this in existing code.

		          if (realContext.Consumer === Context) {
		            error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		          } else if (realContext.Provider === Context) {
		            error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		          }
		        }
		      }
		      return dispatcher.useContext(Context);
		    }
		    function useState(initialState) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useState(initialState);
		    }
		    function useReducer(reducer, initialArg, init) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useReducer(reducer, initialArg, init);
		    }
		    function useRef(initialValue) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useRef(initialValue);
		    }
		    function useEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useEffect(create, deps);
		    }
		    function useInsertionEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useInsertionEffect(create, deps);
		    }
		    function useLayoutEffect(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useLayoutEffect(create, deps);
		    }
		    function useCallback(callback, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useCallback(callback, deps);
		    }
		    function useMemo(create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useMemo(create, deps);
		    }
		    function useImperativeHandle(ref, create, deps) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useImperativeHandle(ref, create, deps);
		    }
		    function useDebugValue(value, formatterFn) {
		      {
		        var dispatcher = resolveDispatcher();
		        return dispatcher.useDebugValue(value, formatterFn);
		      }
		    }
		    function useTransition() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useTransition();
		    }
		    function useDeferredValue(value) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useDeferredValue(value);
		    }
		    function useId() {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useId();
		    }
		    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		      var dispatcher = resolveDispatcher();
		      return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		    }

		    // Helpers to patch console.logs to avoid logging during side-effect free
		    // replaying on render function. This currently only patches the object
		    // lazily which won't cover if the log function was extracted eagerly.
		    // We could also eagerly patch the method.
		    var disabledDepth = 0;
		    var prevLog;
		    var prevInfo;
		    var prevWarn;
		    var prevError;
		    var prevGroup;
		    var prevGroupCollapsed;
		    var prevGroupEnd;
		    function disabledLog() {}
		    disabledLog.__reactDisabledLog = true;
		    function disableLogs() {
		      {
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          prevLog = console.log;
		          prevInfo = console.info;
		          prevWarn = console.warn;
		          prevError = console.error;
		          prevGroup = console.group;
		          prevGroupCollapsed = console.groupCollapsed;
		          prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		          var props = {
		            configurable: true,
		            enumerable: true,
		            value: disabledLog,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            info: props,
		            log: props,
		            warn: props,
		            error: props,
		            group: props,
		            groupCollapsed: props,
		            groupEnd: props
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }
		        disabledDepth++;
		      }
		    }
		    function reenableLogs() {
		      {
		        disabledDepth--;
		        if (disabledDepth === 0) {
		          /* eslint-disable react-internal/no-production-logging */
		          var props = {
		            configurable: true,
		            enumerable: true,
		            writable: true
		          }; // $FlowFixMe Flow thinks console is immutable.

		          Object.defineProperties(console, {
		            log: assign({}, props, {
		              value: prevLog
		            }),
		            info: assign({}, props, {
		              value: prevInfo
		            }),
		            warn: assign({}, props, {
		              value: prevWarn
		            }),
		            error: assign({}, props, {
		              value: prevError
		            }),
		            group: assign({}, props, {
		              value: prevGroup
		            }),
		            groupCollapsed: assign({}, props, {
		              value: prevGroupCollapsed
		            }),
		            groupEnd: assign({}, props, {
		              value: prevGroupEnd
		            })
		          });
		          /* eslint-enable react-internal/no-production-logging */
		        }
		        if (disabledDepth < 0) {
		          error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		        }
		      }
		    }
		    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		    var prefix;
		    function describeBuiltInComponentFrame(name, source, ownerFn) {
		      {
		        if (prefix === undefined) {
		          // Extract the VM specific prefix used by each line.
		          try {
		            throw Error();
		          } catch (x) {
		            var match = x.stack.trim().match(/\n( *(at )?)/);
		            prefix = match && match[1] || '';
		          }
		        } // We use the prefix to ensure our stacks line up with native stack frames.

		        return '\n' + prefix + name;
		      }
		    }
		    var reentry = false;
		    var componentFrameCache;
		    {
		      var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		      componentFrameCache = new PossiblyWeakMap();
		    }
		    function describeNativeComponentFrame(fn, construct) {
		      // If something asked for a stack inside a fake render, it should get ignored.
		      if (!fn || reentry) {
		        return '';
		      }
		      {
		        var frame = componentFrameCache.get(fn);
		        if (frame !== undefined) {
		          return frame;
		        }
		      }
		      var control;
		      reentry = true;
		      var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		      Error.prepareStackTrace = undefined;
		      var previousDispatcher;
		      {
		        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		        // for warnings.

		        ReactCurrentDispatcher$1.current = null;
		        disableLogs();
		      }
		      try {
		        // This should throw.
		        if (construct) {
		          // Something should be setting the props in the constructor.
		          var Fake = function () {
		            throw Error();
		          }; // $FlowFixMe

		          Object.defineProperty(Fake.prototype, 'props', {
		            set: function () {
		              // We use a throwing setter instead of frozen or non-writable props
		              // because that won't throw in a non-strict mode function.
		              throw Error();
		            }
		          });
		          if (typeof Reflect === 'object' && Reflect.construct) {
		            // We construct a different control for this case to include any extra
		            // frames added by the construct call.
		            try {
		              Reflect.construct(Fake, []);
		            } catch (x) {
		              control = x;
		            }
		            Reflect.construct(fn, [], Fake);
		          } else {
		            try {
		              Fake.call();
		            } catch (x) {
		              control = x;
		            }
		            fn.call(Fake.prototype);
		          }
		        } else {
		          try {
		            throw Error();
		          } catch (x) {
		            control = x;
		          }
		          fn();
		        }
		      } catch (sample) {
		        // This is inlined manually because closure doesn't do it for us.
		        if (sample && control && typeof sample.stack === 'string') {
		          // This extracts the first frame from the sample that isn't also in the control.
		          // Skipping one frame that we assume is the frame that calls the two.
		          var sampleLines = sample.stack.split('\n');
		          var controlLines = control.stack.split('\n');
		          var s = sampleLines.length - 1;
		          var c = controlLines.length - 1;
		          while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		            // We expect at least one stack frame to be shared.
		            // Typically this will be the root most one. However, stack frames may be
		            // cut off due to maximum stack limits. In this case, one maybe cut off
		            // earlier than the other. We assume that the sample is longer or the same
		            // and there for cut off earlier. So we should find the root most frame in
		            // the sample somewhere in the control.
		            c--;
		          }
		          for (; s >= 1 && c >= 0; s--, c--) {
		            // Next we find the first one that isn't the same which should be the
		            // frame that called our sample function and the control.
		            if (sampleLines[s] !== controlLines[c]) {
		              // In V8, the first line is describing the message but other VMs don't.
		              // If we're about to return the first line, and the control is also on the same
		              // line, that's a pretty good indicator that our sample threw at same line as
		              // the control. I.e. before we entered the sample frame. So we ignore this result.
		              // This can happen if you passed a class to function component, or non-function.
		              if (s !== 1 || c !== 1) {
		                do {
		                  s--;
		                  c--; // We may still have similar intermediate frames from the construct call.
		                  // The next one that isn't the same should be our match though.

		                  if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                    // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                    var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                    // but we have a user-provided "displayName"
		                    // splice it in to make the stack more readable.

		                    if (fn.displayName && _frame.includes('<anonymous>')) {
		                      _frame = _frame.replace('<anonymous>', fn.displayName);
		                    }
		                    {
		                      if (typeof fn === 'function') {
		                        componentFrameCache.set(fn, _frame);
		                      }
		                    } // Return the line we found.

		                    return _frame;
		                  }
		                } while (s >= 1 && c >= 0);
		              }
		              break;
		            }
		          }
		        }
		      } finally {
		        reentry = false;
		        {
		          ReactCurrentDispatcher$1.current = previousDispatcher;
		          reenableLogs();
		        }
		        Error.prepareStackTrace = previousPrepareStackTrace;
		      } // Fallback to just using the name if we couldn't make it throw.

		      var name = fn ? fn.displayName || fn.name : '';
		      var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
		      {
		        if (typeof fn === 'function') {
		          componentFrameCache.set(fn, syntheticFrame);
		        }
		      }
		      return syntheticFrame;
		    }
		    function describeFunctionComponentFrame(fn, source, ownerFn) {
		      {
		        return describeNativeComponentFrame(fn, false);
		      }
		    }
		    function shouldConstruct(Component) {
		      var prototype = Component.prototype;
		      return !!(prototype && prototype.isReactComponent);
		    }
		    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
		      if (type == null) {
		        return '';
		      }
		      if (typeof type === 'function') {
		        {
		          return describeNativeComponentFrame(type, shouldConstruct(type));
		        }
		      }
		      if (typeof type === 'string') {
		        return describeBuiltInComponentFrame(type);
		      }
		      switch (type) {
		        case REACT_SUSPENSE_TYPE:
		          return describeBuiltInComponentFrame('Suspense');
		        case REACT_SUSPENSE_LIST_TYPE:
		          return describeBuiltInComponentFrame('SuspenseList');
		      }
		      if (typeof type === 'object') {
		        switch (type.$$typeof) {
		          case REACT_FORWARD_REF_TYPE:
		            return describeFunctionComponentFrame(type.render);
		          case REACT_MEMO_TYPE:
		            // Memo may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
		          case REACT_LAZY_TYPE:
		            {
		              var lazyComponent = type;
		              var payload = lazyComponent._payload;
		              var init = lazyComponent._init;
		              try {
		                // Lazy may contain any component type so we recursively resolve it.
		                return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		              } catch (x) {}
		            }
		        }
		      }
		      return '';
		    }
		    var loggedTypeFailures = {};
		    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		    function setCurrentlyValidatingElement(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		        } else {
		          ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		        }
		      }
		    }
		    function checkPropTypes(typeSpecs, values, location, componentName, element) {
		      {
		        // $FlowFixMe This is okay but Flow doesn't know it.
		        var has = Function.call.bind(hasOwnProperty);
		        for (var typeSpecName in typeSpecs) {
		          if (has(typeSpecs, typeSpecName)) {
		            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		            // fail the render phase where it didn't fail before. So we log it.
		            // After these have been cleaned up, we'll let them throw.

		            try {
		              // This is intentionally an invariant that gets caught. It's the same
		              // behavior as without this statement except with a better message.
		              if (typeof typeSpecs[typeSpecName] !== 'function') {
		                // eslint-disable-next-line react-internal/prod-error-codes
		                var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		                err.name = 'Invariant Violation';
		                throw err;
		              }
		              error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		            } catch (ex) {
		              error$1 = ex;
		            }
		            if (error$1 && !(error$1 instanceof Error)) {
		              setCurrentlyValidatingElement(element);
		              error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
		              setCurrentlyValidatingElement(null);
		            }
		            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		              // Only monitor this failure once because there tends to be a lot of the
		              // same error.
		              loggedTypeFailures[error$1.message] = true;
		              setCurrentlyValidatingElement(element);
		              error('Failed %s type: %s', location, error$1.message);
		              setCurrentlyValidatingElement(null);
		            }
		          }
		        }
		      }
		    }
		    function setCurrentlyValidatingElement$1(element) {
		      {
		        if (element) {
		          var owner = element._owner;
		          var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		          setExtraStackFrame(stack);
		        } else {
		          setExtraStackFrame(null);
		        }
		      }
		    }
		    var propTypesMisspellWarningShown;
		    {
		      propTypesMisspellWarningShown = false;
		    }
		    function getDeclarationErrorAddendum() {
		      if (ReactCurrentOwner.current) {
		        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
		        if (name) {
		          return '\n\nCheck the render method of `' + name + '`.';
		        }
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendum(source) {
		      if (source !== undefined) {
		        var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		        var lineNumber = source.lineNumber;
		        return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		      }
		      return '';
		    }
		    function getSourceInfoErrorAddendumForProps(elementProps) {
		      if (elementProps !== null && elementProps !== undefined) {
		        return getSourceInfoErrorAddendum(elementProps.__source);
		      }
		      return '';
		    }
		    /**
		     * Warn if there's no key explicitly set on dynamic arrays of children or
		     * object keys are not valid. This allows us to keep track of children between
		     * updates.
		     */

		    var ownerHasKeyUseWarning = {};
		    function getCurrentComponentErrorInfo(parentType) {
		      var info = getDeclarationErrorAddendum();
		      if (!info) {
		        var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
		        if (parentName) {
		          info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		        }
		      }
		      return info;
		    }
		    /**
		     * Warn if the element doesn't have an explicit key assigned to it.
		     * This element is in an array. The array could grow and shrink or be
		     * reordered. All children that haven't already been validated are required to
		     * have a "key" property assigned to it. Error statuses are cached so a warning
		     * will only be shown once.
		     *
		     * @internal
		     * @param {ReactElement} element Element that requires a key.
		     * @param {*} parentType element's parent's type.
		     */

		    function validateExplicitKey(element, parentType) {
		      if (!element._store || element._store.validated || element.key != null) {
		        return;
		      }
		      element._store.validated = true;
		      var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
		      if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		        return;
		      }
		      ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		      // property, it may be the creator of the child that's responsible for
		      // assigning it a key.

		      var childOwner = '';
		      if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		        // Give the component that originally created this child.
		        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		      }
		      {
		        setCurrentlyValidatingElement$1(element);
		        error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
		        setCurrentlyValidatingElement$1(null);
		      }
		    }
		    /**
		     * Ensure that every element either is passed in a static location, in an
		     * array with an explicit keys property defined, or in an object literal
		     * with valid key property.
		     *
		     * @internal
		     * @param {ReactNode} node Statically passed child of any type.
		     * @param {*} parentType node's parent's type.
		     */

		    function validateChildKeys(node, parentType) {
		      if (typeof node !== 'object') {
		        return;
		      }
		      if (isArray(node)) {
		        for (var i = 0; i < node.length; i++) {
		          var child = node[i];
		          if (isValidElement(child)) {
		            validateExplicitKey(child, parentType);
		          }
		        }
		      } else if (isValidElement(node)) {
		        // This element was passed in a valid location.
		        if (node._store) {
		          node._store.validated = true;
		        }
		      } else if (node) {
		        var iteratorFn = getIteratorFn(node);
		        if (typeof iteratorFn === 'function') {
		          // Entry iterators used to provide implicit keys,
		          // but now we print a separate warning for them later.
		          if (iteratorFn !== node.entries) {
		            var iterator = iteratorFn.call(node);
		            var step;
		            while (!(step = iterator.next()).done) {
		              if (isValidElement(step.value)) {
		                validateExplicitKey(step.value, parentType);
		              }
		            }
		          }
		        }
		      }
		    }
		    /**
		     * Given an element, validate that its props follow the propTypes definition,
		     * provided by the type.
		     *
		     * @param {ReactElement} element
		     */

		    function validatePropTypes(element) {
		      {
		        var type = element.type;
		        if (type === null || type === undefined || typeof type === 'string') {
		          return;
		        }
		        var propTypes;
		        if (typeof type === 'function') {
		          propTypes = type.propTypes;
		        } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
		        // Note: Memo only checks outer props here.
		        // Inner props are checked in the reconciler.
		        type.$$typeof === REACT_MEMO_TYPE)) {
		          propTypes = type.propTypes;
		        } else {
		          return;
		        }
		        if (propTypes) {
		          // Intentionally inside to avoid triggering lazy initializers:
		          var name = getComponentNameFromType(type);
		          checkPropTypes(propTypes, element.props, 'prop', name, element);
		        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		          propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		          var _name = getComponentNameFromType(type);
		          error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		        }
		        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		          error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		        }
		      }
		    }
		    /**
		     * Given a fragment, validate that it can only be provided with fragment props
		     * @param {ReactElement} fragment
		     */

		    function validateFragmentProps(fragment) {
		      {
		        var keys = Object.keys(fragment.props);
		        for (var i = 0; i < keys.length; i++) {
		          var key = keys[i];
		          if (key !== 'children' && key !== 'key') {
		            setCurrentlyValidatingElement$1(fragment);
		            error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
		            setCurrentlyValidatingElement$1(null);
		            break;
		          }
		        }
		        if (fragment.ref !== null) {
		          setCurrentlyValidatingElement$1(fragment);
		          error('Invalid attribute `ref` supplied to `React.Fragment`.');
		          setCurrentlyValidatingElement$1(null);
		        }
		      }
		    }
		    function createElementWithValidation(type, props, children) {
		      var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		      // succeed and there will likely be errors in render.

		      if (!validType) {
		        var info = '';
		        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		          info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		        }
		        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
		        if (sourceInfo) {
		          info += sourceInfo;
		        } else {
		          info += getDeclarationErrorAddendum();
		        }
		        var typeString;
		        if (type === null) {
		          typeString = 'null';
		        } else if (isArray(type)) {
		          typeString = 'array';
		        } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		          typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		          info = ' Did you accidentally export a JSX literal instead of a component?';
		        } else {
		          typeString = typeof type;
		        }
		        {
		          error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		        }
		      }
		      var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		      // TODO: Drop this when these are no longer allowed as the type argument.

		      if (element == null) {
		        return element;
		      } // Skip key warning if the type isn't valid since our key validation logic
		      // doesn't expect a non-string/function type and can throw confusing errors.
		      // We don't want exception behavior to differ between dev and prod.
		      // (Rendering will throw with a helpful message and as soon as the type is
		      // fixed, the key warnings will appear.)

		      if (validType) {
		        for (var i = 2; i < arguments.length; i++) {
		          validateChildKeys(arguments[i], type);
		        }
		      }
		      if (type === REACT_FRAGMENT_TYPE) {
		        validateFragmentProps(element);
		      } else {
		        validatePropTypes(element);
		      }
		      return element;
		    }
		    var didWarnAboutDeprecatedCreateFactory = false;
		    function createFactoryWithValidation(type) {
		      var validatedFactory = createElementWithValidation.bind(null, type);
		      validatedFactory.type = type;
		      {
		        if (!didWarnAboutDeprecatedCreateFactory) {
		          didWarnAboutDeprecatedCreateFactory = true;
		          warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		        } // Legacy hook: remove it

		        Object.defineProperty(validatedFactory, 'type', {
		          enumerable: false,
		          get: function () {
		            warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
		            Object.defineProperty(this, 'type', {
		              value: type
		            });
		            return type;
		          }
		        });
		      }
		      return validatedFactory;
		    }
		    function cloneElementWithValidation(element, props, children) {
		      var newElement = cloneElement.apply(this, arguments);
		      for (var i = 2; i < arguments.length; i++) {
		        validateChildKeys(arguments[i], newElement.type);
		      }
		      validatePropTypes(newElement);
		      return newElement;
		    }
		    function startTransition(scope, options) {
		      var prevTransition = ReactCurrentBatchConfig.transition;
		      ReactCurrentBatchConfig.transition = {};
		      var currentTransition = ReactCurrentBatchConfig.transition;
		      {
		        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		      }
		      try {
		        scope();
		      } finally {
		        ReactCurrentBatchConfig.transition = prevTransition;
		        {
		          if (prevTransition === null && currentTransition._updatedFibers) {
		            var updatedFibersCount = currentTransition._updatedFibers.size;
		            if (updatedFibersCount > 10) {
		              warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		            }
		            currentTransition._updatedFibers.clear();
		          }
		        }
		      }
		    }
		    var didWarnAboutMessageChannel = false;
		    var enqueueTaskImpl = null;
		    function enqueueTask(task) {
		      if (enqueueTaskImpl === null) {
		        try {
		          // read require off the module object to get around the bundlers.
		          // we don't want them to detect a require and bundle a Node polyfill.
		          var requireString = ('require' + Math.random()).slice(0, 7);
		          var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		          // version of setImmediate, bypassing fake timers if any.

		          enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		        } catch (_err) {
		          // we're in a browser
		          // we can't use regular timers because they may still be faked
		          // so we try MessageChannel+postMessage instead
		          enqueueTaskImpl = function (callback) {
		            {
		              if (didWarnAboutMessageChannel === false) {
		                didWarnAboutMessageChannel = true;
		                if (typeof MessageChannel === 'undefined') {
		                  error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		                }
		              }
		            }
		            var channel = new MessageChannel();
		            channel.port1.onmessage = callback;
		            channel.port2.postMessage(undefined);
		          };
		        }
		      }
		      return enqueueTaskImpl(task);
		    }
		    var actScopeDepth = 0;
		    var didWarnNoAwaitAct = false;
		    function act(callback) {
		      {
		        // `act` calls can be nested, so we track the depth. This represents the
		        // number of `act` scopes on the stack.
		        var prevActScopeDepth = actScopeDepth;
		        actScopeDepth++;
		        if (ReactCurrentActQueue.current === null) {
		          // This is the outermost `act` scope. Initialize the queue. The reconciler
		          // will detect the queue and use it instead of Scheduler.
		          ReactCurrentActQueue.current = [];
		        }
		        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		        var result;
		        try {
		          // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		          // set to `true` while the given callback is executed, not for updates
		          // triggered during an async event, because this is how the legacy
		          // implementation of `act` behaved.
		          ReactCurrentActQueue.isBatchingLegacy = true;
		          result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		          // which flushed updates immediately after the scope function exits, even
		          // if it's an async function.

		          if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		            var queue = ReactCurrentActQueue.current;
		            if (queue !== null) {
		              ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		              flushActQueue(queue);
		            }
		          }
		        } catch (error) {
		          popActScope(prevActScopeDepth);
		          throw error;
		        } finally {
		          ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		        }
		        if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		          var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		          // for it to resolve before exiting the current scope.

		          var wasAwaited = false;
		          var thenable = {
		            then: function (resolve, reject) {
		              wasAwaited = true;
		              thenableResult.then(function (returnValue) {
		                popActScope(prevActScopeDepth);
		                if (actScopeDepth === 0) {
		                  // We've exited the outermost act scope. Recursively flush the
		                  // queue until there's no remaining work.
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }, function (error) {
		                // The callback threw an error.
		                popActScope(prevActScopeDepth);
		                reject(error);
		              });
		            }
		          };
		          {
		            if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		              // eslint-disable-next-line no-undef
		              Promise.resolve().then(function () {}).then(function () {
		                if (!wasAwaited) {
		                  didWarnNoAwaitAct = true;
		                  error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		                }
		              });
		            }
		          }
		          return thenable;
		        } else {
		          var returnValue = result; // The callback is not an async function. Exit the current scope
		          // immediately, without awaiting.

		          popActScope(prevActScopeDepth);
		          if (actScopeDepth === 0) {
		            // Exiting the outermost act scope. Flush the queue.
		            var _queue = ReactCurrentActQueue.current;
		            if (_queue !== null) {
		              flushActQueue(_queue);
		              ReactCurrentActQueue.current = null;
		            } // Return a thenable. If the user awaits it, we'll flush again in
		            // case additional work was scheduled by a microtask.

		            var _thenable = {
		              then: function (resolve, reject) {
		                // Confirm we haven't re-entered another `act` scope, in case
		                // the user does something weird like await the thenable
		                // multiple times.
		                if (ReactCurrentActQueue.current === null) {
		                  // Recursively flush the queue until there's no remaining work.
		                  ReactCurrentActQueue.current = [];
		                  recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		                } else {
		                  resolve(returnValue);
		                }
		              }
		            };
		            return _thenable;
		          } else {
		            // Since we're inside a nested `act` scope, the returned thenable
		            // immediately resolves. The outer scope will flush the queue.
		            var _thenable2 = {
		              then: function (resolve, reject) {
		                resolve(returnValue);
		              }
		            };
		            return _thenable2;
		          }
		        }
		      }
		    }
		    function popActScope(prevActScopeDepth) {
		      {
		        if (prevActScopeDepth !== actScopeDepth - 1) {
		          error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		        }
		        actScopeDepth = prevActScopeDepth;
		      }
		    }
		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		      {
		        var queue = ReactCurrentActQueue.current;
		        if (queue !== null) {
		          try {
		            flushActQueue(queue);
		            enqueueTask(function () {
		              if (queue.length === 0) {
		                // No additional work was scheduled. Finish.
		                ReactCurrentActQueue.current = null;
		                resolve(returnValue);
		              } else {
		                // Keep flushing work until there's none left.
		                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		              }
		            });
		          } catch (error) {
		            reject(error);
		          }
		        } else {
		          resolve(returnValue);
		        }
		      }
		    }
		    var isFlushing = false;
		    function flushActQueue(queue) {
		      {
		        if (!isFlushing) {
		          // Prevent re-entrance.
		          isFlushing = true;
		          var i = 0;
		          try {
		            for (; i < queue.length; i++) {
		              var callback = queue[i];
		              do {
		                callback = callback(true);
		              } while (callback !== null);
		            }
		            queue.length = 0;
		          } catch (error) {
		            // If something throws, leave the remaining callbacks on the queue.
		            queue = queue.slice(i + 1);
		            throw error;
		          } finally {
		            isFlushing = false;
		          }
		        }
		      }
		    }
		    var createElement$1 = createElementWithValidation;
		    var cloneElement$1 = cloneElementWithValidation;
		    var createFactory = createFactoryWithValidation;
		    var Children = {
		      map: mapChildren,
		      forEach: forEachChildren,
		      count: countChildren,
		      toArray: toArray,
		      only: onlyChild
		    };
		    exports.Children = Children;
		    exports.Component = Component;
		    exports.Fragment = REACT_FRAGMENT_TYPE;
		    exports.Profiler = REACT_PROFILER_TYPE;
		    exports.PureComponent = PureComponent;
		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
		    exports.Suspense = REACT_SUSPENSE_TYPE;
		    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		    exports.act = act;
		    exports.cloneElement = cloneElement$1;
		    exports.createContext = createContext;
		    exports.createElement = createElement$1;
		    exports.createFactory = createFactory;
		    exports.createRef = createRef;
		    exports.forwardRef = forwardRef;
		    exports.isValidElement = isValidElement;
		    exports.lazy = lazy;
		    exports.memo = memo;
		    exports.startTransition = startTransition;
		    exports.unstable_act = act;
		    exports.useCallback = useCallback;
		    exports.useContext = useContext;
		    exports.useDebugValue = useDebugValue;
		    exports.useDeferredValue = useDeferredValue;
		    exports.useEffect = useEffect;
		    exports.useId = useId;
		    exports.useImperativeHandle = useImperativeHandle;
		    exports.useInsertionEffect = useInsertionEffect;
		    exports.useLayoutEffect = useLayoutEffect;
		    exports.useMemo = useMemo;
		    exports.useReducer = useReducer;
		    exports.useRef = useRef;
		    exports.useState = useState;
		    exports.useSyncExternalStore = useSyncExternalStore;
		    exports.useTransition = useTransition;
		    exports.version = ReactVersion;
		    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		    }
		  })();
		} 
	} (react_development, react_development.exports));
	return react_development.exports;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;

	if (process.env.NODE_ENV === 'production') {
	  react.exports = requireReact_production_min();
	} else {
	  react.exports = requireReact_development();
	}
	return react.exports;
}

var reactExports = requireReact();
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

var name = "schnet_siegel_app";
var version = "0.1.0";
var module$1 = "index.js";
var dependencies = {
	"navigator.sendbeacon": "^0.0.20",
	react: "^18.3.1",
	"react-dom": "^18.3.1"
};
var devDependencies = {
	"@babel/cli": "^7.25.9",
	"@babel/core": "^7.26.0",
	"@babel/preset-env": "^7.26.0",
	"@rollup/plugin-babel": "^6.0.4",
	"@rollup/plugin-commonjs": "^28.0.1",
	"@rollup/plugin-image": "^3.0.3",
	"@rollup/plugin-json": "^6.1.0",
	"@rollup/plugin-node-resolve": "^15.3.0",
	"react-scripts": "5.0.1",
	"react-test-renderer": "^18.3.1",
	rollup: "^4.28.0",
	"rollup-plugin-peer-deps-external": "^2.2.4"
};
var scripts = {
	start: "react-scripts start",
	build: "react-scripts build",
	"build-component": "BABEL_ENV=production rollup -m inline -c",
	test: "react-scripts test --env=jsdom",
	eject: "react-scripts eject"
};
var browserslist = {
	production: [
		">0.2%",
		"not dead",
		"not op_mini all"
	],
	development: [
		"last 1 chrome version",
		"last 1 firefox version",
		"last 1 safari version"
	]
};
var packageJson = {
	name: name,
	version: version,
	"private": true,
	module: module$1,
	dependencies: dependencies,
	devDependencies: devDependencies,
	scripts: scripts,
	browserslist: browserslist
};

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var isString = function isString(val) {
  return typeof val === 'string';
};

var isBlob = function isBlob(val) {
  return val instanceof Blob;
};

polyfill.call((typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object' ? window : {});

function polyfill() {
  if (!('navigator' in this)) {
    this.navigator = {};
  }

  if (typeof this.navigator.sendBeacon !== 'function') {
    this.navigator.sendBeacon = sendBeacon.bind(this);
  }
}

function sendBeacon(url, data) {
  var event = this.event && this.event.type;
  var sync = event === 'unload' || event === 'beforeunload';
  var xhr = 'XMLHttpRequest' in this ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
  xhr.open('POST', url, !sync);
  xhr.withCredentials = true;
  xhr.setRequestHeader('Accept', '*/*');

  if (isString(data)) {
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.responseType = 'text';
  } else if (isBlob(data) && data.type) {
    xhr.setRequestHeader('Content-Type', data.type);
  }

  try {
    xhr.send(data);
  } catch (error) {
    return false;
  }

  return true;
}

var img$b = "data:image/png;base64,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";

var img$a = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICB8m9UzbcgAAAu1JREFUWMPt179LG2EYB/DnvdxdzuZ9kzNNmqb5HQeltCq0WAQFERc7RLCbWEoXlw6KHbQdCuJSEfwPBNFYJxdd0sHENJQMrWCtpV1KaENIpVeD96Jpk1zeDm2VlERBx9wDLxy83Oe+vPfy/gA4pebm5vpnZmZCcMGqZ4c/rdPr9d5FCOUBYO0iQerZ4Wp1jI6ONjqdzoDH47k+NjZmP2+IendqzmCXy+WRZcstAHRICLkGAN/PE6TenZoD7PP72wkxX2WMHbW0tNwAgHfnCVLvDj8xMdkuSUZNVVWNMcbK5TIrl8tSwB/olBokAECXfD5f98jIyCeM8aGmlZHBwCGr1SpSSrlMJpMJh8N7ulPd4a3Wxv6enp6HFovlCmPsFwAAQkgjhFhFQQQGDILB4IPx8cchxsoGAADGmFFV6edoNLq2vb0dBoA93anuGGRZfo0xTvn9fo/D4bhJCDFhjIlRMvIIEAAACILAE4IJxsRkMplM+Xw+EYtFJ2Ox6ItIJPIDAEB3qjvHa8Xw8LD3VTw+rSjKkaqqjFLKKKVMpSqjVGVUpUxRlHQikZgeGhoK1FqbdKfSMfx72NnZOSgUi28JIYrb7e7leZ5HCMGfBlAsFj+sr68/XV1dXQqHw99qBdGdSqfiHLy8vEz393MfNU0DxP19GRBwnAGKpZKqKEp2cXHx4KwdVndqXDQ6OzuNbrerTRRFnkMcaJoGJa0ECCEQBeFOW1t7sKury3RWEN2pcQ6WZdnm9Xq7BUEw5HK5WCwWW8EYX+7o6LhHCLnt9/s6bDZbAgBSpwXRnROnYgb39fUFzGZzdzqdjqysrDyLx+PzAwMDzxcWFh6l0+mXGOPe1tZW21l/WndO6niTa25u5kOh0H1N074sLS09mZqaer+1tcUAADY2NjKSJEUdDodDFEVnKpV6k81mS9VC6E6lczzAg4ODDRzHWXd3d+dnZ2ez/38gmUxSu92eLBQK1qampq+bm5s/qwXRnUrnN9wVA5LnwW6NAAAAAElFTkSuQmCC";

var img$9 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCAkQ5yQYgAABTdJREFUWMPllm1MU1cYx59z33pp7y21tBZK6QsswDalJEvmWCAxinHOBRaWbBlhMTolMybK9AO6GQzxy6aJH/aSZWxmBKrsi2aDKGBSaEXFBUEHgujAZnZQSIul9wq0vb337MOmC0YkwU+jT3KSkzzJ7/zyz5NzDoLn1LULJ/Z4B8LRNH2Kq3pfHYYV1qlTp7ZJkkTX1ta2wgvU/5FDPQ+gV999P9uRO/pBVW3zi4hYrda3EUILANCabBxiqcblC99adLpYnt2amn7s2Oe5K5U4cODAmoyMDEdWVtYrNTU1xmTjLDnBBi6yXaVa0KYCbTYa0zcAwL2ViGRmZmbpdKmvAaA5nufNABBMJs6SAacQwa0MrQU1YtIMBvWKJ9hmtxfyvDYdYzyfn5+/DgB+TyYO1fn1lt2S+IBUFJRACIEiy0CpdTQRvbuZhAw1q1KbzGbDul27dlUEg8EphBBFEASiKApomk5taWlpBQCorT1cyLIqWRAEGWOMFUXBiqKwDrujiE1hAQCpbTZbSXV19SjHcXOyrCCSJJBer2dEUSQmJiYmXC7X9GrjUBaH41BGmjo/hVODoiAAjEBRJFChGQDMAcuodXab7Z2amk83x2LRBACQiqLIgiBMXr9+ffzxBa/Xr9m2cePGnampqWsxxjEAAISQzPO8nqEZwIAhOzt7x8GDh8owVkgAAIyxShDE8a6urtZbt265AGB6tXHIPXsP/zA/NZKllkYKeDaIaDwLDJ4BUpEAk2ZQ2DxgtC8Ra/R61VqjMUWr1dLRaPTawMDAd263u25sbEwBANDpdFc5jvPZ7fYsk8m0nud5DcdxvIpVUQgQAADQNE3xPMdzHK/RaDSahYWFnu7ursPd3V1nOzo6ZlYj579fQ2Ple/5fS8IJTw7GVwswvlKApcFP8Pxf7VgQIjgSERKTk5Pjly5dat6/f/+bS91NVVVV1ste7/FQKDQvCAIWRRGLoogFUcCiKGBREHEoFPL39PQcr6ysdKx2Dvl489MvQ3feKqtuSggzpToymE4oGDBjAax5GRTWGhfFRze9Xu/F8+fP1zc0NIwuJTI4OBiJS9INnudDFotlE0VRFEII/lkAkiQNt7W1fXbu3Llml8s1tdo5i/7BWyuPBhJMTqc89whwLAqELAECDAhQAgBm4/H4VFNT0/RyL+yZM2fEhw/Dd2RZBkT8KwEICIIEKZEQQqFQoKmpKZIMnEUBFxUVkSnRP8pZQgJCigKOPAApngCEQK1i2Syr1eooLi7WLSdSVFSkslgynQzDUAQiQJZlSMgJQAgBQ9MbnM7C7OLiYk0ycBYFXLfjVScv3c8GJQFieE4auR8b7rji+35iKjgEgNMyM83pTqdz3XIiOp3OYLVaS2iaJsPhcHdbW1u1x+M5Mjs7e4OmacJut71uMBjWJgNnUcAZ6kiVXpmgg1NRPE69e/ab/vXru3+7t7ezo/3EyPDwAGDQOgudzuVESktLHVqttsTv93e0tLTUeb3e0+Xl5V80Njbu8/v9nRzHbSooKDAkA+fJI7d7u4MscSw0xCSCGaNK977x8c/H+vv7oa+vD9rbLw7a7fahaDSaGY/Hc+fn590+ny/2LIm8vDyqrKzsI1mW/2xubj5SX18/1N/fjwEA3G73BMuyXSaTycQwTIbP5+sLBAKJ1cx5EvBXXx61CYHhLXPpZR+W7Pyx7ekDPB7PdG5u7s1YLGYzm82jPT09wrNEKioqUgiC0N++ffv0yZMnA0/3e3t7RaPR2BuPx/U5OTkPPB5PdDVz/gYa1T4LfsdtWwAAAABJRU5ErkJggg==";

var img$8 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCEYdejdpAAABPpJREFUWMPlln9MVWUYx7/vueccDtxz4HIFbghcLmBhPwSMqWNCkaOcbaKztURJVy3Wcg5Gbf6oucg/0rmozbZ0Wjm5Sjltxm0LV8BFJDKhEPDHSkK9IiAXLpwD98e595y3P0wLC236H/fdnu2c99k+57PnffecB7jLunK6+sXek1VL8YCrurp62c6dO4vDkcPeLan7fyyJiJw9BuDEg4hYrdbnCSE+AHXhxmGmS1zrqjNKZpobIdwocHXU8vcrUV5eHpuYmJiWkpLyWEVFRXy4caa9wSH/UFakyWulOlHHPdceAdBzPyJJSUkpJlNMLkAmJUmaDWA4nDjT3mCofYsFVoXAqbyBnXjufk861WbLkaToh0RRTJw7d+4T4cZh2/YXLfJ6egWA1QghoJoGRogDvJ0rGQqAELDeUyUNH84/TUPjBMQAQggINAMXNStUsOHnVgDYtGlzjiBEaLIsa5RSqus61XVdSLOl5QmRAgASlZqaWlBWVnZRFMVJTdOJwcAQs9nMK4rC9Pf399vt9qGZxmFjkzI3Zj5uXBspRkHXCUAJdD2ICDIEeHUAQGICk2t65uFTDMMBhIJhKBSPjBHFuge4WWCzOXZZYWHhKzExMQmU0gAAEEI0SZLMPMeDgiI9PX19ZeVbxZTqBgCglEbIstLb2NhY19nZaQcwNNM4hne2feAYuXx+QlC78iRhmOfoGHg6CoMeAkI3g9FVwmMUHNzg9EHIN4bHRnzZb7NS5nu7v6gHAJhMplZRFPtsNluKxWKZJ0mSURRFKUKIYAkIAIDjOFaSREkUJaPRaDT6fL6WpqbGzU1NjYfr6+tHZiLndq/45avXFru+eao75MygtDWL0lPzpkbrPKo2ZtDeIwtauh1bc6frOaWlpdaTzc3b3W63V5ZlqigKVRSFyopMFUWmiqxQt9vtamlp2b5mzZq0mc4x3HrYe/RXV1lZ5RH39aEkk+FGloFSQNNuh+r146ovf8+omrr+yRc+ujKdSFdX17gaDLZLkuROTk5ewrIsSwi52bcJEAwGzzkcjq3Hjh2rsdvtgzOdM2WKeHRJ+Ygu5dZpkxOA6v87gn4ElAlK4p/+emHJnol7/WEPHTqkjI56LmiaBsL8JQEChjEgGArJbrd74ODBg+PhwPnXmMaPt68WmCCgBkB9k4DfCwQCEBk/0fq/L/k/I0xeXl5EcnJSNs/zLEMYaJqGkBYCIQQ8xy3Kzs5Jz8/PN4YDZ0qBu+o/TooJ/lYIPQRldBJnB+fsP3vNctg3JoNAR5TSvvTyuZOme4mYTKY4q9VawHGcwePxNDkcjjKn07llbGysneM4xmZLXRgXF5cQDpwpBabKpWfNen/s8KA/cNm4vnL+m6dfz9l4bu0lYd37nhFNmxX8Y3ZguLvgXiJFRUVp0dHRBS6Xq762tnZbc3PzZytWrNhx4MCBDS6X64QoikuysrLiwoFj+OdLRZFeHVBJVJ9x5eoFpfvst/Y/PdrhLF6+/AI3eX1ZUA1Inxz//ch0EpmZmWxxcfHLmqZdqamp2VJVVdXd0dFBAaChoaFfEIRGi8Vi4Xk+sa+v78zAwEBoJnNuF/jSmeMJQxebCuicda8ueKn6pzs/8Pm3F8+/sWX3DwPnGxa9u2Pvd7v3fRn8L5FVq1ZFMgxj7unp+WzXrl0Dd+bb2tqU+Pj4NlVVzRkZGVedTqd/JnP+BHlTI2egwjEBAAAAAElFTkSuQmCC";

var img$7 = "data:image/png;base64,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";

var img$6 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCMGvdGCRQAABRZJREFUWMPV1m1MFEccBvBn9vaW5e4WjhM4T97RilWLWKKGyAVqUOMH0do0lUg1toE0NQaCH6yNbUOTGhNT2sSmYHwpkROq0cZIk0osiC8VLdAiopgqRT1OPHk5uIPzbvd2px8oVq1oo5vmmGQ+7E7y2/88mZkd4Bnt9qWyt7vOli7HSza1nHO1ZTtOHv7is8nksM8aVHwX8kJCpw0BqHuZQtRynP54gbCEfdlg/k+HmWigp/2EXjDR9BD+vtXeWsO9aBFqOUVFRREWiyUpLi5udnFxcdRkcSZMP+BzpoYavfFUIeKwq2cmgI4XKUQtJyYmJs5oDE8HyKggCNMA9E0GZ8IVDLF7Mc+K4LUip2FHlr3wPlLJSUhMTBOEsKkGg8Eya9asuZPFYZv25Szyurp4gJUJIaCyDIaPBLxtqxkKgBCw3vN59V/Ov0QDwwREA0IICGSNVjclYN306y8AoJazdetHaTwfIrvdbplSShVFoYqi8EmJSRl8KA+A6BISEqyFhYXXDQbDqCwrRKNhiMlk4jweD+NwOBw2m80ZLA4bEZOyOWWOfl2oQQdFIQAlUBQJIcQJeBUAgCWaSTe+8cp5htEChIJhKDwuNwY88RXAWDBqOSZTxIrs7OyN4eHh0ZRSPwAQQmRBEEyclgMFRXJy8oaSki25lCoaAKCUhrjdnq6GhoYTbW1tNgDOYHHY8OQ3Nzo7v2ufOnL5E+MUxgBwAKWAwgCBsWWuIZQYSBegAKASBgcwNChZt7PCzG/Ht4JaTnNz886IiIgrWVlZRWazOYcQAgAgDAEoAArodDper9dZKAUURUFfX9+ppqYLpefOnb1YV1cnB5NDxif22+H3F0fxNyos4Y65Gq1+LJxHGwEkvxf2ftN5b+jS4tdW7mh92pmjlpOfnx9fWFBQMHvOnC0cx4WOT4yCggAAJfCL/p7Ozs7K8vLyA9XV1d3B6GjGgT1Hf7cXFpYc6b/rjDFq7qdqKAVk+WEXvT7ceZBZMSgmbHj9ra9uT3Soq+W0t7cPi5LUIghCf2xs7BKWZVlCyNi5TQBJkq7W1tZ+fOzYsSqbzXYvWJ3HbhGvLikaUIT0E/LoCCD6/umSD37PCCVRWT8szKsYed4fVi3n0KFDnsFBV6csyyDM35MBAcNoIAUC7v7+/t6DBw8OB7Pzr2saN9yylmckQPSDPhgFfF7A74eB8RHZcSrvv15j1HAyMjJCYmNj5nEcxzKEgSzLCMgBEELAabWL5s1LS87MzNQHs/NYwO0nv44Jl/7IhhKAZ3AUl+/N2He5x1z9YMgNAgU6T8vyW1fPGp9XiFqO0WiMjI+Pt2q1Wo3L5TpdW1tb2NjYuG1oaKhFq9UyiYkJCyMjI6OD2XksYOq5udSkOCL67vn8t/QbSuZ/eKkgbfPVdTf59Z+7BmR5ivTnNH/fFevzClHLycnJSQoLC7Pa7faTNTU1n545c2b/qlWrdlZWVm6y2+11BoNhSWpqamQwO5pHH4pzlDK/SHTd+tVrF+TvtY2/Lz/a2pi7cmWndvTuCkn0C98cv3HkWYWo4aSkpLC5ubnvyrJ8u6qqaltpaemV1tZWCgD19fUOnucbzGazmeM4S3d3d3Nvb28gGJ2HAd9sPh7tvH7aSmesf2/BO2UXn/zAgR+vX/tg2+6fe6/VL9q+c89Pu/d+Lz2tELWcNWvWhDIMY+ro6Ni/a9eu3ifHm5qaPFFRUU2iKJqmT59+p7Gx0ReMzl/EjvZfMqbRLQAAAABJRU5ErkJggg==";

var img$5 = "data:image/png;base64,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";

var img$4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCQizpPwUwAABPFJREFUWMPN1m1MU2cUB/D/c3vbXvpCX0QQCi2QTZw6RFg0BBAkOOeW4cxiMqKZMwtdNmNA+ODe3OI+LJoF2IdFMXGTMaTuhc3QxEjMmC9V58ANcQY3ZSKlChYotFDa3t777APDTR2yCF3ukzyfTvLLuSfnOfcADzk3L1Rv7D69ey1meaTmVFdXr9u7d2/x/+GwDwuKgXMlyqiEEQAts0lEao7ZbH6WEDIBoDnSDjNdoK+zWa010iwldyfPedGmeNQkpOaUlZUZ4uPjU5KSkhaXl5fPj7QzbQeHAwPpUXq/mYokNOrpWwjg10dJRGqOyWRK0ut1WQAZ12q1CQDckXSm7WCEbuRwbAicPKSQsWNPP/I7kphjSU7O0GqjF2g0mvhFixYtjbTDnj9YtNLv6eYAViCEgAoCGC4G8He8wFAAhID1O0q+r1p+gYZHCYgMhBAQCDK5al44b9tPZwFAas7OnW9mcJxS8Hq9AqWUiqJIRVHkUpJTsrkoDgBRWSyWPKvVelWj0YwLgkhkMoYYjUaFz+djXC6Xq6GhYWC2DmswpW1PW6LeFKVRQRQJQAlEkYeSDAB+EQAQH8tk6Vc/7mAYOUAoGIbC5/FiyGeuBSY/SGqO0WhYV1BQsFWn08VSSoMAQAgRtFqtUSFXgIIiNTV1S0VFZTGlogwAKKVKr9fX3dra2tzR0dEAYGC2DqtL3bB1oOtQ54KxS7v08xgNoAAoBUQGCE+2uYxQoiHdgAiA8hgewsgwn/cuq124b+opSM1pa2vbYzAYLufn55fFxcUVEUIAAIQhAAVAAZVKxanVqnhKAVEU4Xa7T5w/f273mTOnf2xpaRHmwiFTCf385as587lrtfE611KZXD35Uf88BOCDfjgHjQ5/1JryJ5//8OK/zRypOZs3bzZbS0tLFy9ZUqlQKKKmCkRBQQCAEgRDwb6urq66/fv3f9bY2HhjLh3ZFHDgm1+cVmvFV4O3Bkx62Z10GaWAINy9IX8AvRO5tcMhy5bMF2tuTjfUpeZ0dnaOhni+XavVDiYmJhayLMsSQibnNgF4nr9it9vfbmpq+qKhoaF/rp17tognCsuGRG1WszA+BoQCf18+gKBvjJL5+d+uKKkdm+kPKzXn8OHDvuFhT5cgCCDMX0UBAcPIwIfD3sHBwdv19fWjkXAeWNMUo+0vcQwPhIKgE+NAwA8Eg9AwASK4TpT81zVGSk52drYyMdG0TKFQsAxhIAgCwkIYhBAo5PKVy5ZlpObm5qoj4dxT4M7jH5t0/O8FEMPwDY/jUv9jBy/1xTVOjHhBIELla1/bc+W0fqZEpObo9foYs9mcJ5fLZR6P5we73W49efLkWyMjI+1yuZxJTrasiImJiY2Ec0+Bqe/6GqPoMrj7A8Ee9ZaK5W9cKM3YfmXTde7lDzxDgjCP/yMh6L6cN1MiUnOKiopSoqOj85xO53GbzfbeqVOnPl2/fv2eurq6bU6ns0Wj0RSmp6fHRNy5euCp1t5PTP1nD73yzP2xswc2bOyt1vmufv5c00yJSMlJS0tjjxw5ssvhcOzbsWOH5f54ZWVlgsPhqLHZbO9kZmZyc+3c7eDrbUdj3aPCgMfy+uqcrXXH7wdyXvvu64nMjwpvu/r4a21Hp51XUnNWrVql7Onp+e3YsWO7amoe3Daqqqpu2e3293t7e68VFxdHzbXzJ5yN29RtTuWBAAAAAElFTkSuQmCC";

var img$3 = "data:image/png;base64,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";

var img$2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCYHt6FGlgAABJ9JREFUWMPdlm1MU1ccxp9z23t7297SF94slfKSKSgOUDYN0QZmcM4t0/kBM4KZmqV8mDG8ZWFzc9FlMbBlbCaL4qKTkUDZhy2mfNGZVcCqc+gyNKZuwnAWo4yXQgu1b/eefVCicxamfrv/5H45zz+/8+TJPef8gTnqrwvN5YO9+9bjGUuunObm5g1NTU0b5+pRziVKoXMVKnXaJICTz2JErhyr1foqIeQuAGe8HiaeMHzZqdWZaJGK/9vmveTgntaEXDnV1dVGs9mclZ6evrSmpib5iQOOhUby1aqgVc35reHp4cVPa0SuHIvFkm4w6Iu0Wm2uTqdLe+KAERlazSsj4NkIp1BOv/zU50imnIzMzEKdLmGBIAjm3NzcZXHv4PNHylYFfYM8oBQJIaCiCIZPAoK/vcFQAIRAGXRX/PT58gs0NkVAFCCEgEBUsJrEmG3nL2cBQK6chob3CnleJfr9fpFSSiVJopIk8VmZWcW8mgdANBkZGbaqqqprgiDMiKJEFAqGmEwmLhAIMEqjJWdXTp62Ui1oIEkEoASSFIWKjABBCQBgTmGKDC8tcjMMCxAKhqEI+PwYD1hbgHtG5MoxmYwbSktLd+j1+hRKaRgACCGiTqczcSwHCors7OxtdXX1GymVFABAKVX5/YFBl8vlVOqzN+8Y8Ry7vGC6f48hkREADqAUkBggdu83VxBKBDIISABoFBPjmJyI2j5U6hYfnD0KcuX09fU1Go3GKyUlJdWpqallhBAAAGEIQAFQQKPR8FqtxkwpIEkSRkdHT50/f27fmTO9P5NZ0K/fvb06mb/eYtbfWqZgtffMPFwEiIaD8I6Z3EH1uprnX99/6XF3jlw5W7dutVbZ7faleXn1HMepZ4OmoCAAQAnCkfCwx+NpPXTo0DcdHR1D9/EPyuM6kCjddh5YlDhUybL/HpEjkShuRmwtvqDm3ZUVLdNzPQBy5VRWVurKy8u322y2z1QqleqBQhGJRK86nc59Lpfrx7a2tqnHThFL1laPS7oipzgzDURCD75oCOHANCXJJT/MZ0LOnPb29sDEhM8jiiIIQ+4/igQMo0A0FvOPjY3dfjjcx45p3NTFN3kmCkTCoHdngFAQCIchMCEi3jpV8X/HGDlyiouLVQsXWgo4jlMyhIEoioiJMRBCwLHsqoKCwuw1a9Zo4wZ8+cSXFn30j1JIMQQmZtB/57kj/cOpHXcn/SCQoAlcXH/jaq9hPiNy5RgMhiSr1WpjWVbh8/lOd3V1VXV3d78/OTl5kWVZJjMzY2VSUlJK3IBpYGCdSbplHL0TCt/Qbqtb/s4Fe+Guq5UD/Fsf+8ZFMTH6Z1p49IptPiNy5ZSVlWUlJCTYvF7vCYfD8VFPT8/RTZs2Nba2tu70er0nBUFYm5+fnxQXcO3wC66bX1nunD22/ZVHtbOHN5ffbNYHrn372vfzGZEjJycnR9nZ2bnH7XYfrK2tzXhUr6+vT3O73V84HI4PVqxYwf8HMNB3POXMp8sd/V2fLIm3ye/dX794en9B5/W+49p4PXLl2O12bWNj45bdu3cnxutpaGhIaGpq2rJ3717j7No/E3maJ8/dKsYAAAAASUVORK5CYII=";

var img$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCYvghTubAAABKVJREFUWMPd2FtsFFUYB/D/mZ3Znd22u8NuW3qBDQVEGwsLghCgVVOtkDQGEFELBpRbgsRoTEhIilwMIZFoI4jSNU3Q2hR8kBAsoY3KpbYrlUIoUMqtXJZ22bqWtnvr3I8PlYDQbQXe5kvmZc7Jb778Z87MyRAMUTebyhapUiQ87oVNdXiCMqrjO7R91fHTPaLLaa1avXYjHWwOMxSgi74SC9/9Fp6wjOo4bZfeHJsjTE8U7pABd5w9mJTipFMt/F8Ft07tNT9uE0Z16g99PUoQpKfHuB0ZmzaVTnjkgFWxa5LVEndbzWG3FO2Y8LiNGNVJTe4rtlj67Y4UListLWPGIwcM+fpsnpXBc7LZxEZffex1ZFDHyoTmmDk7bLzZlZqamvBGsX9UvDIj3tPOA6xGCAHVNDB8KhA/M5+hAAgBG28o+e2LKU1U7SMgJhBCQKCZOJtLLVj7ZyMAGNWp+6popRLxm3SdqIQQ6JoG1iZwjHjpZRMybbzFNjIrKzVv+fLlr4dCoSAhhGUYhrAsC47jHOTi4bVV6ULHEmuyDbpOAEqg6wospAscqwMANJ2h/dpIwjAcQCgYhiLSE0Z3xF2eW7x7DQAY1WmtWd2W6ep65mGnG0jKg2ibi14tV+3ti/RLkqgCMOm6roXD4cCJEyfaWcfYBe91te05mxFt+URwMcmAGaAU0BlAHXjMTYSSZNIO6ACogjvd6L2jFGxgUyZ8c3cpGNWRHUWeQGCfN9t+bqngYpgBRwd0E1RVA0MIHILACk5XCkMIJEnSA4HAkebm5h98Pt9echc6/eOK2Wn8lfJMR2eeiUsaaOb+IoAixXHrb2dD3Fr00cTXtp0a7J1jVKf+u8ULc0bcqsh0BIQBB1Dts6A450G1zwKlRIvFojfPnz/vq6mp2b1z507fv/y9ajuyw6XfPrjjKdf1JRzH/vfbICvwywXlPXHbuukl5dGhPgBGdeqqt2aOpr8eHu/ye1iWgzYiH2r6QiiO2XI4HD1TX3/8WG1tbVllZWXXoLuI3MIPu/WUqQe1WBSQxXuHIkKKRClJe3H/cE0Y2ZmzeMNt1TyuTotFQSURjKaAgIKAqAB6ZVkO3h/uoNs0c1/z2zyjALIE2h8DxDggSUhmRKJ1/lLyf7cxRnRmzpxpsopX5vGMAkYRQfv8UGQVhMBm4fnRbrc7Jz8/X0gY8NnaL7MdyuWXoKuI3ImhJTi+oqVjZHV/bxgEOmyR5jk3WuuF4RoxqrNx2bOeFOXaWOgqIj0x5cI1qbW24bq3Mxg6B1BXdnZWhsfjyUsYMI1cLXLqnSNCQVG6kbTs4ynvN62a/EHrkqv80k97ujXNpVzLkkLnCoZrxKhOpq3vHafeyYWCIm1n51fvOjVx4tGmy2vqag9vv9DaehoUds9kjychcNE77Yh/V3awcc+7cx8ca/QuWOQvc0Qufl/803CNGNFZWZxjatv9nP/mruz48fI3Vjw4vnnz5klVVVVlXq+3srCw0P4QcPXkgfTft0/Z2/Lz1txEF7l07Nvnj27z7Lty8kBSojlGdRr2fz7m6GfTfI3V6xL+d1i/fn36li1bSktLS0fdPfcPPdvlffyY9MoAAAAASUVORK5CYII=";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAQCAYAAACSnrg1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4QgICCcYI7J6IgAAApNJREFUWMPt1ktIVFEYB/D/uXNn5s5DRp20THARpUhPscdChh5kBhHkQmoQehBtCimCdrUowkWQJESMIUibrEUhtgkiC9PC1GgM0VLTfJBm46h3vN7H3HNaiOjUXCd0OfeDuzqH3/3zcc7HAVaoH21VZQPNN0uwxkpmh1tpkcrv/XYhdHKtQZLZMWzwaFejKyWdFdqFX76RznrbakMku2PY4Kg8scNhl3IcttkcJTKau9ogye4Yjwh1sEjgVQhW1WbhI0dWfY+S3OE/1B7eJ4UHBIDXCSFgug5OWAdIn09wDAAh4KUW/+u7BW0sOkNALCCEgEC3WJ3eqO/Sx1YAMJ34Dp+WnVeRt9VV7nA7QSkBGAGlGuxkApAoACArkytMPbilheOsAGHgOAYxPIuQmBMAFoKYTnyH92wqPTfRU9e1IRK8kerl3IANYAygHBBdOOYWwoibDAAUANMwFcL0lOa7zqfkPli8CqYT3yGL0Ken54syhL5Almdsm8XqWkCWFwE0RcLI7/QWyVF8Zfvxys54M8d0Yh2yfE9PU7WX/mys3uIdLLda+diZrmoYVn2BsOS8ttcfiKw0/01nyYl5ReQfuhyiKYWN+lwEUOWlT5OhiBFGMvY/TxTCdGKdf55ptpmOUwKnAaoCNj8HyBKgKHBzMtHHXvn/9xVjOnEa3PXyXrZH+3YANApxag7B8c21wdH1j+enZ0FA4RQ7Soa6m1MThTAdgwYzsb84nY6lTY7LypDrzNWCi20XdlV0l/cLp2+FQ7ru1b5vVCa/+BIFMR2D6q3Z3TR8P3u8te7s0b/XWmtKy4arPGLvo2PPEgUxnTjV396Q+e5OQX3wxe18ox98fftwz5vKnU/62htcRntMJ9b5A9fVtPuPc+ZrAAAAAElFTkSuQmCC";

const {
  name: APP_NAME,
  version: APP_VERSION
} = packageJson;
if (typeof window !== 'undefined') {
  navigator.sendBeacon('https://api.apps.austauschkompass.de/' + APP_NAME + '/track', JSON.stringify({
    version: APP_VERSION,
    url: document.location.href
  }));
}
const defaultStyle = {
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  verticalAlign: 'unset',
  backgroundColor: 'white',
  border: 'none',
  color: '#363636',
  fontFamily: 'Arial, sans-serif',
  fontSize: '11px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textAlign: 'left',
  textShadow: 'none',
  textTransform: 'none',
  textDecoration: 'none',
  lineHeight: '1.1'
};
const wrapperStyle = {
  ...defaultStyle,
  backgroundColor: 'transparent'
};
const appStyles = {
  ...defaultStyle,
  margin: '-32px 0 5px 0',
  width: '180px',
  border: '1px solid lightGray',
  borderRadius: '6px',
  borderTop: '8px solid #00a4f9',
  boxShadow: '1px 1px 3px lightgrey',
  padding: '8px'
};
const headlineStyle = {
  ...defaultStyle,
  color: '#00a4f9',
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '1.0',
  textAlign: 'center',
  margin: '11px 0'
};
const siegelStyle = {
  ...defaultStyle,
  position: 'relative',
  right: '-155px',
  backgroundColor: 'transparent',
  width: '40px'
};
const starSection = {
  ...defaultStyle,
  padding: '10px 0',
  borderTop: '1px solid lightgrey',
  borderBottom: '1px solid lightgrey',
  margin: '15px 0',
  textAlign: 'center',
  fontSize: '12px'
};
const starsStyle = {
  ...defaultStyle
};
const averageStyle = {
  ...defaultStyle,
  fontSize: '12px',
  fontWeight: 'bold'
};
const orgaStyle = {
  ...defaultStyle,
  fontWeight: 'bold',
  color: '#00a4f9'
};
const paragraphStyle = {
  ...defaultStyle,
  textAlign: 'center',
  lineHeight: '1.3',
  margin: '10px 0'
};
const linkStyle = {
  ...defaultStyle,
  color: '#00a4f9'
};
const App = props => {
  const abbreviateDate = dateString => {
    let myDate = new Date(dateString);
    return myDate.getMonth() + 1 + '/' + myDate.getFullYear();
  };
  const floatAsWord = num => {
    if (num >= 4.5) {
      return 'Hervorragend';
    } else if (num >= 3.5) {
      return 'Sehr gut';
    } else if (num >= 2.5) {
      return 'Gut';
    } else if (num >= 1.5) {
      return 'Befriedigend';
    } else if (num <= 1.4) {
      return 'Eher enttäuschend';
    }
  };
  const floatAsImage = num => {
    if (num >= 5) {
      return img;
    } else if (num >= 4.5) {
      return img$1;
    } else if (num >= 4.0) {
      return img$2;
    } else if (num >= 3.5) {
      return img$3;
    } else if (num >= 3.0) {
      return img$4;
    } else if (num >= 2.5) {
      return img$5;
    } else if (num >= 2.0) {
      return img$6;
    } else if (num >= 1.5) {
      return img$7;
    } else if (num >= 1.0) {
      return img$8;
    } else if (num >= 0.5) {
      return img$9;
    } else if (num >= 0.0) {
      return img$a;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: wrapperStyle
  }, /*#__PURE__*/React.createElement("img", {
    src: img$b,
    style: siegelStyle,
    alt: "siegel"
  }), /*#__PURE__*/React.createElement("div", {
    style: appStyles
  }, /*#__PURE__*/React.createElement("h2", {
    style: headlineStyle
  }, "Schueleraustausch.net"), /*#__PURE__*/React.createElement("p", {
    style: paragraphStyle
  }, props.num_ratings, " Sch\xFCler bewerteten\xA0", /*#__PURE__*/React.createElement("a", {
    style: orgaStyle,
    href: props.url
  }, props.organisation)), /*#__PURE__*/React.createElement("div", {
    style: starSection
  }, /*#__PURE__*/React.createElement("img", {
    src: floatAsImage(props.average),
    style: starsStyle,
    alt: "bewertung"
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("strong", {
    style: averageStyle
  }, floatAsWord(props.average), " (", props.average.toFixed(1), "/5)")), /*#__PURE__*/React.createElement("p", {
    style: paragraphStyle
  }, "Stand: ", abbreviateDate(props.updated_at), /*#__PURE__*/React.createElement("br", null), "Aktuelle Sch\xFClerbewertungen auf", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    style: linkStyle,
    href: "https://www.schueleraustausch.net",
    alt: "Bewertungen auf Schueleraustausch.net"
  }, "www.schueleraustausch.net"))));
};

class Client {
  constructor(_ref) {
    let {
      host,
      prefix
    } = _ref;
    this.host = host;
    this.prefix = prefix;
  }
  checkStatus(response) {
    if (response.status < 500) {
      return response;
    }
    return Promise.reject({
      message: response.statusText,
      response: response
    });
  }
  getStats(orgaSlug) {
    const init = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    return fetch(this.host + this.prefix + /rating_stats/ + orgaSlug, init).then(this.checkStatus).then(res => res.json());
  }
}

const SchnetSiegelApp = () => {
  const client = new Client({
    host: 'https://www.schueleraustausch.de',
    prefix: '/api/v2'
  });
  const [stats, setStats] = reactExports.useState({});
  useEffect(() => {
  }, [client]);
  return /*#__PURE__*/React.createElement(App, {
    organisation: stats.organisation_shortname,
    num_ratings: stats.num_ratings,
    updated_at: stats.updated_at,
    average: stats.average,
    url: `https://www.schueleraustausch.net/organisationen/${stats.organisation_slug}/bewertungen`
  });
};

exports.BareApp = App;
exports.Client = Client;
exports.SchnetSiegelApp = SchnetSiegelApp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL215LXNjaG5ldC1zaWVnZWwtdGVzdC9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LnByb2R1Y3Rpb24ubWluLmpzIiwiLi4vbXktc2NobmV0LXNpZWdlbC10ZXN0L25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCIuLi9teS1zY2huZXQtc2llZ2VsLXRlc3Qvbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL25hdmlnYXRvci5zZW5kYmVhY29uL2Rpc3QvbmF2aWdhdG9yLnNlbmRiZWFjb24uZXMuanMiLCJzcmMvc2llZ2VsLXMucG5nIiwic3JjL3N0YXItMC5wbmciLCJzcmMvc3Rhci0wLjUucG5nIiwic3JjL3N0YXItMS5wbmciLCJzcmMvc3Rhci0xLjUucG5nIiwic3JjL3N0YXItMi5wbmciLCJzcmMvc3Rhci0yLjUucG5nIiwic3JjL3N0YXItMy5wbmciLCJzcmMvc3Rhci0zLjUucG5nIiwic3JjL3N0YXItNC5wbmciLCJzcmMvc3Rhci00LjUucG5nIiwic3JjL3N0YXItNS5wbmciLCJzcmMvQXBwLmpzIiwic3JjL2NsaWVudC5qcyIsInNyYy9tb2R1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO3ZhciBsPVN5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpLG49U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKSxwPVN5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKSxxPVN5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKSxyPVN5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKSx0PVN5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKSx1PVN5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpLHY9U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpLHc9U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpLHg9U3ltYm9sLmZvcihcInJlYWN0Lm1lbW9cIikseT1TeW1ib2wuZm9yKFwicmVhY3QubGF6eVwiKSx6PVN5bWJvbC5pdGVyYXRvcjtmdW5jdGlvbiBBKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT16JiZhW3pdfHxhW1wiQEBpdGVyYXRvclwiXTtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hOm51bGx9XG52YXIgQj17aXNNb3VudGVkOmZ1bmN0aW9uKCl7cmV0dXJuITF9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbigpe30sZW5xdWV1ZVNldFN0YXRlOmZ1bmN0aW9uKCl7fX0sQz1PYmplY3QuYXNzaWduLEQ9e307ZnVuY3Rpb24gRShhLGIsZSl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1lfHxCfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307XG5FLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihhLGIpe2lmKFwib2JqZWN0XCIhPT10eXBlb2YgYSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGEmJm51bGwhPWEpdGhyb3cgRXJyb3IoXCJzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYW4gb2JqZWN0IG9mIHN0YXRlIHZhcmlhYmxlcy5cIik7dGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLGEsYixcInNldFN0YXRlXCIpfTtFLnByb3RvdHlwZS5mb3JjZVVwZGF0ZT1mdW5jdGlvbihhKXt0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsYSxcImZvcmNlVXBkYXRlXCIpfTtmdW5jdGlvbiBGKCl7fUYucHJvdG90eXBlPUUucHJvdG90eXBlO2Z1bmN0aW9uIEcoYSxiLGUpe3RoaXMucHJvcHM9YTt0aGlzLmNvbnRleHQ9Yjt0aGlzLnJlZnM9RDt0aGlzLnVwZGF0ZXI9ZXx8Qn12YXIgSD1HLnByb3RvdHlwZT1uZXcgRjtcbkguY29uc3RydWN0b3I9RztDKEgsRS5wcm90b3R5cGUpO0guaXNQdXJlUmVhY3RDb21wb25lbnQ9ITA7dmFyIEk9QXJyYXkuaXNBcnJheSxKPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksSz17Y3VycmVudDpudWxsfSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixlKXt2YXIgZCxjPXt9LGs9bnVsbCxoPW51bGw7aWYobnVsbCE9Yilmb3IoZCBpbiB2b2lkIDAhPT1iLnJlZiYmKGg9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoaz1cIlwiK2Iua2V5KSxiKUouY2FsbChiLGQpJiYhTC5oYXNPd25Qcm9wZXJ0eShkKSYmKGNbZF09YltkXSk7dmFyIGc9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1nKWMuY2hpbGRyZW49ZTtlbHNlIGlmKDE8Zyl7Zm9yKHZhciBmPUFycmF5KGcpLG09MDttPGc7bSsrKWZbbV09YXJndW1lbnRzW20rMl07Yy5jaGlsZHJlbj1mfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihkIGluIGc9YS5kZWZhdWx0UHJvcHMsZyl2b2lkIDA9PT1jW2RdJiYoY1tkXT1nW2RdKTtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEsa2V5OmsscmVmOmgscHJvcHM6Yyxfb3duZXI6Sy5jdXJyZW50fX1cbmZ1bmN0aW9uIE4oYSxiKXtyZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YixyZWY6YS5yZWYscHJvcHM6YS5wcm9wcyxfb3duZXI6YS5fb3duZXJ9fWZ1bmN0aW9uIE8oYSl7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmYS4kJHR5cGVvZj09PWx9ZnVuY3Rpb24gZXNjYXBlKGEpe3ZhciBiPXtcIj1cIjpcIj0wXCIsXCI6XCI6XCI9MlwifTtyZXR1cm5cIiRcIithLnJlcGxhY2UoL1s9Ol0vZyxmdW5jdGlvbihhKXtyZXR1cm4gYlthXX0pfXZhciBQPS9cXC8rL2c7ZnVuY3Rpb24gUShhLGIpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJm51bGwhPWEua2V5P2VzY2FwZShcIlwiK2Eua2V5KTpiLnRvU3RyaW5nKDM2KX1cbmZ1bmN0aW9uIFIoYSxiLGUsZCxjKXt2YXIgaz10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09a3x8XCJib29sZWFuXCI9PT1rKWE9bnVsbDt2YXIgaD0hMTtpZihudWxsPT09YSloPSEwO2Vsc2Ugc3dpdGNoKGspe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6aD0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgbDpjYXNlIG46aD0hMH19aWYoaClyZXR1cm4gaD1hLGM9YyhoKSxhPVwiXCI9PT1kP1wiLlwiK1EoaCwwKTpkLEkoYyk/KGU9XCJcIixudWxsIT1hJiYoZT1hLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIiksUihjLGIsZSxcIlwiLGZ1bmN0aW9uKGEpe3JldHVybiBhfSkpOm51bGwhPWMmJihPKGMpJiYoYz1OKGMsZSsoIWMua2V5fHxoJiZoLmtleT09PWMua2V5P1wiXCI6KFwiXCIrYy5rZXkpLnJlcGxhY2UoUCxcIiQmL1wiKStcIi9cIikrYSkpLGIucHVzaChjKSksMTtoPTA7ZD1cIlwiPT09ZD9cIi5cIjpkK1wiOlwiO2lmKEkoYSkpZm9yKHZhciBnPTA7ZzxhLmxlbmd0aDtnKyspe2s9XG5hW2ddO3ZhciBmPWQrUShrLGcpO2grPVIoayxiLGUsZixjKX1lbHNlIGlmKGY9QShhKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksZz0wOyEoaz1hLm5leHQoKSkuZG9uZTspaz1rLnZhbHVlLGY9ZCtRKGssZysrKSxoKz1SKGssYixlLGYsYyk7ZWxzZSBpZihcIm9iamVjdFwiPT09ayl0aHJvdyBiPVN0cmluZyhhKSxFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIrKFwiW29iamVjdCBPYmplY3RdXCI9PT1iP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmIpK1wiKS4gSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSBpbnN0ZWFkLlwiKTtyZXR1cm4gaH1cbmZ1bmN0aW9uIFMoYSxiLGUpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGQ9W10sYz0wO1IoYSxkLFwiXCIsXCJcIixmdW5jdGlvbihhKXtyZXR1cm4gYi5jYWxsKGUsYSxjKyspfSk7cmV0dXJuIGR9ZnVuY3Rpb24gVChhKXtpZigtMT09PWEuX3N0YXR1cyl7dmFyIGI9YS5fcmVzdWx0O2I9YigpO2IudGhlbihmdW5jdGlvbihiKXtpZigwPT09YS5fc3RhdHVzfHwtMT09PWEuX3N0YXR1cylhLl9zdGF0dXM9MSxhLl9yZXN1bHQ9Yn0sZnVuY3Rpb24oYil7aWYoMD09PWEuX3N0YXR1c3x8LTE9PT1hLl9zdGF0dXMpYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWJ9KTstMT09PWEuX3N0YXR1cyYmKGEuX3N0YXR1cz0wLGEuX3Jlc3VsdD1iKX1pZigxPT09YS5fc3RhdHVzKXJldHVybiBhLl9yZXN1bHQuZGVmYXVsdDt0aHJvdyBhLl9yZXN1bHQ7fVxudmFyIFU9e2N1cnJlbnQ6bnVsbH0sVj17dHJhbnNpdGlvbjpudWxsfSxXPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOlUsUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6VixSZWFjdEN1cnJlbnRPd25lcjpLfTtmdW5jdGlvbiBYKCl7dGhyb3cgRXJyb3IoXCJhY3QoLi4uKSBpcyBub3Qgc3VwcG9ydGVkIGluIHByb2R1Y3Rpb24gYnVpbGRzIG9mIFJlYWN0LlwiKTt9XG5leHBvcnRzLkNoaWxkcmVuPXttYXA6Uyxmb3JFYWNoOmZ1bmN0aW9uKGEsYixlKXtTKGEsZnVuY3Rpb24oKXtiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZSl9LGNvdW50OmZ1bmN0aW9uKGEpe3ZhciBiPTA7UyhhLGZ1bmN0aW9uKCl7YisrfSk7cmV0dXJuIGJ9LHRvQXJyYXk6ZnVuY3Rpb24oYSl7cmV0dXJuIFMoYSxmdW5jdGlvbihhKXtyZXR1cm4gYX0pfHxbXX0sb25seTpmdW5jdGlvbihhKXtpZighTyhhKSl0aHJvdyBFcnJvcihcIlJlYWN0LkNoaWxkcmVuLm9ubHkgZXhwZWN0ZWQgdG8gcmVjZWl2ZSBhIHNpbmdsZSBSZWFjdCBlbGVtZW50IGNoaWxkLlwiKTtyZXR1cm4gYX19O2V4cG9ydHMuQ29tcG9uZW50PUU7ZXhwb3J0cy5GcmFnbWVudD1wO2V4cG9ydHMuUHJvZmlsZXI9cjtleHBvcnRzLlB1cmVDb21wb25lbnQ9RztleHBvcnRzLlN0cmljdE1vZGU9cTtleHBvcnRzLlN1c3BlbnNlPXc7XG5leHBvcnRzLl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEPVc7ZXhwb3J0cy5hY3Q9WDtcbmV4cG9ydHMuY2xvbmVFbGVtZW50PWZ1bmN0aW9uKGEsYixlKXtpZihudWxsPT09YXx8dm9pZCAwPT09YSl0aHJvdyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiK2ErXCIuXCIpO3ZhciBkPUMoe30sYS5wcm9wcyksYz1hLmtleSxrPWEucmVmLGg9YS5fb3duZXI7aWYobnVsbCE9Yil7dm9pZCAwIT09Yi5yZWYmJihrPWIucmVmLGg9Sy5jdXJyZW50KTt2b2lkIDAhPT1iLmtleSYmKGM9XCJcIitiLmtleSk7aWYoYS50eXBlJiZhLnR5cGUuZGVmYXVsdFByb3BzKXZhciBnPWEudHlwZS5kZWZhdWx0UHJvcHM7Zm9yKGYgaW4gYilKLmNhbGwoYixmKSYmIUwuaGFzT3duUHJvcGVydHkoZikmJihkW2ZdPXZvaWQgMD09PWJbZl0mJnZvaWQgMCE9PWc/Z1tmXTpiW2ZdKX12YXIgZj1hcmd1bWVudHMubGVuZ3RoLTI7aWYoMT09PWYpZC5jaGlsZHJlbj1lO2Vsc2UgaWYoMTxmKXtnPUFycmF5KGYpO1xuZm9yKHZhciBtPTA7bTxmO20rKylnW21dPWFyZ3VtZW50c1ttKzJdO2QuY2hpbGRyZW49Z31yZXR1cm57JCR0eXBlb2Y6bCx0eXBlOmEudHlwZSxrZXk6YyxyZWY6ayxwcm9wczpkLF9vd25lcjpofX07ZXhwb3J0cy5jcmVhdGVDb250ZXh0PWZ1bmN0aW9uKGEpe2E9eyQkdHlwZW9mOnUsX2N1cnJlbnRWYWx1ZTphLF9jdXJyZW50VmFsdWUyOmEsX3RocmVhZENvdW50OjAsUHJvdmlkZXI6bnVsbCxDb25zdW1lcjpudWxsLF9kZWZhdWx0VmFsdWU6bnVsbCxfZ2xvYmFsTmFtZTpudWxsfTthLlByb3ZpZGVyPXskJHR5cGVvZjp0LF9jb250ZXh0OmF9O3JldHVybiBhLkNvbnN1bWVyPWF9O2V4cG9ydHMuY3JlYXRlRWxlbWVudD1NO2V4cG9ydHMuY3JlYXRlRmFjdG9yeT1mdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn07ZXhwb3J0cy5jcmVhdGVSZWY9ZnVuY3Rpb24oKXtyZXR1cm57Y3VycmVudDpudWxsfX07XG5leHBvcnRzLmZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOnYscmVuZGVyOmF9fTtleHBvcnRzLmlzVmFsaWRFbGVtZW50PU87ZXhwb3J0cy5sYXp5PWZ1bmN0aW9uKGEpe3JldHVybnskJHR5cGVvZjp5LF9wYXlsb2FkOntfc3RhdHVzOi0xLF9yZXN1bHQ6YX0sX2luaXQ6VH19O2V4cG9ydHMubWVtbz1mdW5jdGlvbihhLGIpe3JldHVybnskJHR5cGVvZjp4LHR5cGU6YSxjb21wYXJlOnZvaWQgMD09PWI/bnVsbDpifX07ZXhwb3J0cy5zdGFydFRyYW5zaXRpb249ZnVuY3Rpb24oYSl7dmFyIGI9Vi50cmFuc2l0aW9uO1YudHJhbnNpdGlvbj17fTt0cnl7YSgpfWZpbmFsbHl7Vi50cmFuc2l0aW9uPWJ9fTtleHBvcnRzLnVuc3RhYmxlX2FjdD1YO2V4cG9ydHMudXNlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNhbGxiYWNrKGEsYil9O2V4cG9ydHMudXNlQ29udGV4dD1mdW5jdGlvbihhKXtyZXR1cm4gVS5jdXJyZW50LnVzZUNvbnRleHQoYSl9O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVzZURlZmVycmVkVmFsdWU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VEZWZlcnJlZFZhbHVlKGEpfTtleHBvcnRzLnVzZUVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlRWZmZWN0KGEsYil9O2V4cG9ydHMudXNlSWQ9ZnVuY3Rpb24oKXtyZXR1cm4gVS5jdXJyZW50LnVzZUlkKCl9O2V4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VJbXBlcmF0aXZlSGFuZGxlKGEsYixlKX07ZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3Q9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVS5jdXJyZW50LnVzZUluc2VydGlvbkVmZmVjdChhLGIpfTtleHBvcnRzLnVzZUxheW91dEVmZmVjdD1mdW5jdGlvbihhLGIpe3JldHVybiBVLmN1cnJlbnQudXNlTGF5b3V0RWZmZWN0KGEsYil9O1xuZXhwb3J0cy51c2VNZW1vPWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUuY3VycmVudC51c2VNZW1vKGEsYil9O2V4cG9ydHMudXNlUmVkdWNlcj1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWR1Y2VyKGEsYixlKX07ZXhwb3J0cy51c2VSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VSZWYoYSl9O2V4cG9ydHMudXNlU3RhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIFUuY3VycmVudC51c2VTdGF0ZShhKX07ZXhwb3J0cy51c2VTeW5jRXh0ZXJuYWxTdG9yZT1mdW5jdGlvbihhLGIsZSl7cmV0dXJuIFUuY3VycmVudC51c2VTeW5jRXh0ZXJuYWxTdG9yZShhLGIsZSl9O2V4cG9ydHMudXNlVHJhbnNpdGlvbj1mdW5jdGlvbigpe3JldHVybiBVLmN1cnJlbnQudXNlVHJhbnNpdGlvbigpfTtleHBvcnRzLnZlcnNpb249XCIxOC4zLjFcIjtcbiIsIi8qKlxuICogQGxpY2Vuc2UgUmVhY3RcbiAqIHJlYWN0LmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcblxuICAgICAgICAgICd1c2Ugc3RyaWN0JztcblxuLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydChuZXcgRXJyb3IoKSk7XG59XG4gICAgICAgICAgdmFyIFJlYWN0VmVyc2lvbiA9ICcxOC4zLjEnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IGRpc3BhdGNoZXIuXG4gKi9cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgYmF0Y2gncyBjb25maWd1cmF0aW9uIHN1Y2ggYXMgaG93IGxvbmcgYW4gdXBkYXRlXG4gKiBzaG91bGQgc3VzcGVuZCBmb3IgaWYgaXQgbmVlZHMgdG8uXG4gKi9cbnZhciBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyA9IHtcbiAgdHJhbnNpdGlvbjogbnVsbFxufTtcblxudmFyIFJlYWN0Q3VycmVudEFjdFF1ZXVlID0ge1xuICBjdXJyZW50OiBudWxsLFxuICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLlxuICBpc0JhdGNoaW5nTGVnYWN5OiBmYWxzZSxcbiAgZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGU6IGZhbHNlXG59O1xuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0ge307XG52YXIgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IG51bGw7XG5mdW5jdGlvbiBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spIHtcbiAge1xuICAgIGN1cnJlbnRFeHRyYVN0YWNrRnJhbWUgPSBzdGFjaztcbiAgfVxufVxuXG57XG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lID0gZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAge1xuICAgICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICAgIH1cbiAgfTsgLy8gU3RhY2sgaW1wbGVtZW50YXRpb24gaW5qZWN0ZWQgYnkgdGhlIGN1cnJlbnQgcmVuZGVyZXIuXG5cblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldEN1cnJlbnRTdGFjayA9IG51bGw7XG5cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdGFjayA9ICcnOyAvLyBBZGQgYW4gZXh0cmEgdG9wIGZyYW1lIHdoaWxlIGFuIGVsZW1lbnQgaXMgYmVpbmcgdmFsaWRhdGVkXG5cbiAgICBpZiAoY3VycmVudEV4dHJhU3RhY2tGcmFtZSkge1xuICAgICAgc3RhY2sgKz0gY3VycmVudEV4dHJhU3RhY2tGcmFtZTtcbiAgICB9IC8vIERlbGVnYXRlIHRvIHRoZSBpbmplY3RlZCByZW5kZXJlci1zcGVjaWZpYyBpbXBsZW1lbnRhdGlvblxuXG5cbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuXG4gICAgaWYgKGltcGwpIHtcbiAgICAgIHN0YWNrICs9IGltcGwoKSB8fCAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhY2s7XG4gIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG52YXIgZW5hYmxlQ2FjaGVFbGVtZW50ID0gZmFsc2U7XG52YXIgZW5hYmxlVHJhbnNpdGlvblRyYWNpbmcgPSBmYWxzZTsgLy8gTm8ga25vd24gYnVncywgYnV0IG5lZWRzIHBlcmZvcm1hbmNlIHRlc3RpbmdcblxudmFyIGVuYWJsZUxlZ2FjeUhpZGRlbiA9IGZhbHNlOyAvLyBFbmFibGVzIHVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrIGZlYXR1cmUgaW4gRmliZXJcbi8vIHN0dWZmLiBJbnRlbmRlZCB0byBlbmFibGUgUmVhY3QgY29yZSBtZW1iZXJzIHRvIG1vcmUgZWFzaWx5IGRlYnVnIHNjaGVkdWxpbmdcbi8vIGlzc3VlcyBpbiBERVYgYnVpbGRzLlxuXG52YXIgZW5hYmxlRGVidWdUcmFjaW5nID0gZmFsc2U7IC8vIFRyYWNrIHdoaWNoIEZpYmVyKHMpIHNjaGVkdWxlIHJlbmRlciB3b3JrLlxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSB7XG4gIFJlYWN0Q3VycmVudERpc3BhdGNoZXI6IFJlYWN0Q3VycmVudERpc3BhdGNoZXIsXG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnOiBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxcbiAgUmVhY3RDdXJyZW50T3duZXI6IFJlYWN0Q3VycmVudE93bmVyXG59O1xuXG57XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRBY3RRdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlO1xufVxuXG4vLyBieSBjYWxscyB0byB0aGVzZSBtZXRob2RzIGJ5IGEgQmFiZWwgcGx1Z2luLlxuLy9cbi8vIEluIFBST0QgKG9yIGluIHBhY2thZ2VzIHdpdGhvdXQgYWNjZXNzIHRvIFJlYWN0IGludGVybmFscyksXG4vLyB0aGV5IGFyZSBsZWZ0IGFzIHRoZXkgYXJlIGluc3RlYWQuXG5cbmZ1bmN0aW9uIHdhcm4oZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ3dhcm4nLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cblxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBTdHJpbmcoaXRlbSk7XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArIFwiLlwiICsgY2FsbGVyTmFtZTtcblxuICAgIGlmIChkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlcnJvcihcIkNhbid0IGNhbGwgJXMgb24gYSBjb21wb25lbnQgdGhhdCBpcyBub3QgeWV0IG1vdW50ZWQuIFwiICsgJ1RoaXMgaXMgYSBuby1vcCwgYnV0IGl0IG1pZ2h0IGluZGljYXRlIGEgYnVnIGluIHlvdXIgYXBwbGljYXRpb24uICcgKyAnSW5zdGVhZCwgYXNzaWduIHRvIGB0aGlzLnN0YXRlYCBkaXJlY3RseSBvciBkZWZpbmUgYSBgc3RhdGUgPSB7fTtgICcgKyAnY2xhc3MgcHJvcGVydHkgd2l0aCB0aGUgZGVzaXJlZCBzdGF0ZSBpbiB0aGUgJXMgY29tcG9uZW50LicsIGNhbGxlck5hbWUsIGNvbXBvbmVudE5hbWUpO1xuXG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuLyoqXG4gKiBUaGlzIGlzIHRoZSBhYnN0cmFjdCBBUEkgZm9yIGFuIHVwZGF0ZSBxdWV1ZS5cbiAqL1xuXG5cbnZhciBSZWFjdE5vb3BVcGRhdGVRdWV1ZSA9IHtcbiAgLyoqXG4gICAqIENoZWNrcyB3aGV0aGVyIG9yIG5vdCB0aGlzIGNvbXBvc2l0ZSBjb21wb25lbnQgaXMgbW91bnRlZC5cbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2Ugd2Ugd2FudCB0byB0ZXN0LlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIG1vdW50ZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAgICogQHByb3RlY3RlZFxuICAgKiBAZmluYWxcbiAgICovXG4gIGlzTW91bnRlZDogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gICAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICAgKlxuICAgKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gICAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICAgKlxuICAgKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gICAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlRm9yY2VVcGRhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ2ZvcmNlVXBkYXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIGFsbCBvZiB0aGUgc3RhdGUuIEFsd2F5cyB1c2UgdGhpcyBvciBgc2V0U3RhdGVgIHRvIG11dGF0ZSBzdGF0ZS5cbiAgICogWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICAgKlxuICAgKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICAgKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbXBsZXRlU3RhdGUgTmV4dCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVJlcGxhY2VTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjb21wbGV0ZVN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAncmVwbGFjZVN0YXRlJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBUaGlzIG9ubHkgZXhpc3RzIGJlY2F1c2UgX3BlbmRpbmdTdGF0ZSBpc1xuICAgKiBpbnRlcm5hbC4gVGhpcyBwcm92aWRlcyBhIG1lcmdpbmcgc3RyYXRlZ3kgdGhhdCBpcyBub3QgYXZhaWxhYmxlIHRvIGRlZXBcbiAgICogcHJvcGVydGllcyB3aGljaCBpcyBjb25mdXNpbmcuIFRPRE86IEV4cG9zZSBwZW5kaW5nU3RhdGUgb3IgZG9uJ3QgdXNlIGl0XG4gICAqIGR1cmluZyB0aGUgbWVyZ2UuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBzdGF0ZS5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBOYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVTZXRTdGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdzZXRTdGF0ZScpO1xuICB9XG59O1xuXG52YXIgYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxudmFyIGVtcHR5T2JqZWN0ID0ge307XG5cbntcbiAgT2JqZWN0LmZyZWV6ZShlbXB0eU9iamVjdCk7XG59XG4vKipcbiAqIEJhc2UgY2xhc3MgaGVscGVycyBmb3IgdGhlIHVwZGF0aW5nIHN0YXRlIG9mIGEgY29tcG9uZW50LlxuICovXG5cblxuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7IC8vIFdlIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgdXBkYXRlciBidXQgdGhlIHJlYWwgb25lIGdldHMgaW5qZWN0ZWQgYnkgdGhlXG4gIC8vIHJlbmRlcmVyLlxuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuLyoqXG4gKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIHRvIG11dGF0ZVxuICogc3RhdGUuIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBgdGhpcy5zdGF0ZWAgd2lsbCBiZSBpbW1lZGlhdGVseSB1cGRhdGVkLCBzb1xuICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpcyBubyBndWFyYW50ZWUgdGhhdCBjYWxscyB0byBgc2V0U3RhdGVgIHdpbGwgcnVuIHN5bmNocm9ub3VzbHksXG4gKiBhcyB0aGV5IG1heSBldmVudHVhbGx5IGJlIGJhdGNoZWQgdG9nZXRoZXIuICBZb3UgY2FuIHByb3ZpZGUgYW4gb3B0aW9uYWxcbiAqIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCB3aGVuIHRoZSBjYWxsIHRvIHNldFN0YXRlIGlzIGFjdHVhbGx5XG4gKiBjb21wbGV0ZWQuXG4gKlxuICogV2hlbiBhIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIHRvIHNldFN0YXRlLCBpdCB3aWxsIGJlIGNhbGxlZCBhdCBzb21lIHBvaW50IGluXG4gKiB0aGUgZnV0dXJlIChub3Qgc3luY2hyb25vdXNseSkuIEl0IHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIHVwIHRvIGRhdGVcbiAqIGNvbXBvbmVudCBhcmd1bWVudHMgKHN0YXRlLCBwcm9wcywgY29udGV4dCkuIFRoZXNlIHZhbHVlcyBjYW4gYmUgZGlmZmVyZW50XG4gKiBmcm9tIHRoaXMuKiBiZWNhdXNlIHlvdXIgZnVuY3Rpb24gbWF5IGJlIGNhbGxlZCBhZnRlciByZWNlaXZlUHJvcHMgYnV0IGJlZm9yZVxuICogc2hvdWxkQ29tcG9uZW50VXBkYXRlLCBhbmQgdGhpcyBuZXcgc3RhdGUsIHByb3BzLCBhbmQgY29udGV4dCB3aWxsIG5vdCB5ZXQgYmVcbiAqIGFzc2lnbmVkIHRvIHRoaXMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R8ZnVuY3Rpb259IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgb3IgZnVuY3Rpb24gdG9cbiAqICAgICAgICBwcm9kdWNlIG5leHQgcGFydGlhbCBzdGF0ZSB0byBiZSBtZXJnZWQgd2l0aCBjdXJyZW50IHN0YXRlLlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBzdGF0ZSBpcyB1cGRhdGVkLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cblxuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGFydGlhbFN0YXRlICE9PSAnZnVuY3Rpb24nICYmIHBhcnRpYWxTdGF0ZSAhPSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRTdGF0ZSguLi4pOiB0YWtlcyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzIHRvIHVwZGF0ZSBvciBhICcgKyAnZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpO1xuICB9XG5cbiAgdGhpcy51cGRhdGVyLmVucXVldWVTZXRTdGF0ZSh0aGlzLCBwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrLCAnc2V0U3RhdGUnKTtcbn07XG4vKipcbiAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAqIGNlcnRhaW50eSB0aGF0IHdlIGFyZSAqKm5vdCoqIGluIGEgRE9NIHRyYW5zYWN0aW9uLlxuICpcbiAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAqIGNvbXBvbmVudCdzIHN0YXRlIGhhcyBjaGFuZ2VkIGJ1dCBgc2V0U3RhdGVgIHdhcyBub3QgY2FsbGVkLlxuICpcbiAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAqIGBjb21wb25lbnRXaWxsVXBkYXRlYCBhbmQgYGNvbXBvbmVudERpZFVwZGF0ZWAuXG4gKlxuICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciB1cGRhdGUgaXMgY29tcGxldGUuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuLyoqXG4gKiBEZXByZWNhdGVkIEFQSXMuIFRoZXNlIEFQSXMgdXNlZCB0byBleGlzdCBvbiBjbGFzc2ljIFJlYWN0IGNsYXNzZXMgYnV0IHNpbmNlXG4gKiB3ZSB3b3VsZCBsaWtlIHRvIGRlcHJlY2F0ZSB0aGVtLCB3ZSdyZSBub3QgZ29pbmcgdG8gbW92ZSB0aGVtIG92ZXIgdG8gdGhpc1xuICogbW9kZXJuIGJhc2UgY2xhc3MuIEluc3RlYWQsIHdlIGRlZmluZSBhIGdldHRlciB0aGF0IHdhcm5zIGlmIGl0J3MgYWNjZXNzZWQuXG4gKi9cblxuXG57XG4gIHZhciBkZXByZWNhdGVkQVBJcyA9IHtcbiAgICBpc01vdW50ZWQ6IFsnaXNNb3VudGVkJywgJ0luc3RlYWQsIG1ha2Ugc3VyZSB0byBjbGVhbiB1cCBzdWJzY3JpcHRpb25zIGFuZCBwZW5kaW5nIHJlcXVlc3RzIGluICcgKyAnY29tcG9uZW50V2lsbFVubW91bnQgdG8gcHJldmVudCBtZW1vcnkgbGVha3MuJ10sXG4gICAgcmVwbGFjZVN0YXRlOiBbJ3JlcGxhY2VTdGF0ZScsICdSZWZhY3RvciB5b3VyIGNvZGUgdG8gdXNlIHNldFN0YXRlIGluc3RlYWQgKHNlZSAnICsgJ2h0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMzIzNikuJ11cbiAgfTtcblxuICB2YXIgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nID0gZnVuY3Rpb24gKG1ldGhvZE5hbWUsIGluZm8pIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ29tcG9uZW50LnByb3RvdHlwZSwgbWV0aG9kTmFtZSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJyVzKC4uLikgaXMgZGVwcmVjYXRlZCBpbiBwbGFpbiBKYXZhU2NyaXB0IFJlYWN0IGNsYXNzZXMuICVzJywgaW5mb1swXSwgaW5mb1sxXSk7XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cblxuQ29tcG9uZW50RHVtbXkucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cblxuZnVuY3Rpb24gUHVyZUNvbXBvbmVudChwcm9wcywgY29udGV4dCwgdXBkYXRlcikge1xuICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IC8vIElmIGEgY29tcG9uZW50IGhhcyBzdHJpbmcgcmVmcywgd2Ugd2lsbCBhc3NpZ24gYSBkaWZmZXJlbnQgb2JqZWN0IGxhdGVyLlxuXG4gIHRoaXMucmVmcyA9IGVtcHR5T2JqZWN0O1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDsgLy8gQXZvaWQgYW4gZXh0cmEgcHJvdG90eXBlIGp1bXAgZm9yIHRoZXNlIG1ldGhvZHMuXG5cbmFzc2lnbihwdXJlQ29tcG9uZW50UHJvdG90eXBlLCBDb21wb25lbnQucHJvdG90eXBlKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuaXNQdXJlUmVhY3RDb21wb25lbnQgPSB0cnVlO1xuXG4vLyBhbiBpbW11dGFibGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgbXV0YWJsZSB2YWx1ZVxuZnVuY3Rpb24gY3JlYXRlUmVmKCkge1xuICB2YXIgcmVmT2JqZWN0ID0ge1xuICAgIGN1cnJlbnQ6IG51bGxcbiAgfTtcblxuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuXG4gIHJldHVybiByZWZPYmplY3Q7XG59XG5cbnZhciBpc0FycmF5SW1wbCA9IEFycmF5LmlzQXJyYXk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuZnVuY3Rpb24gaXNBcnJheShhKSB7XG4gIHJldHVybiBpc0FycmF5SW1wbChhKTtcbn1cblxuLypcbiAqIFRoZSBgJycgKyB2YWx1ZWAgcGF0dGVybiAodXNlZCBpbiBpbiBwZXJmLXNlbnNpdGl2ZSBjb2RlKSB0aHJvd3MgZm9yIFN5bWJvbFxuICogYW5kIFRlbXBvcmFsLiogdHlwZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8yMjA2NC5cbiAqXG4gKiBUaGUgZnVuY3Rpb25zIGluIHRoaXMgbW9kdWxlIHdpbGwgdGhyb3cgYW4gZWFzaWVyLXRvLXVuZGVyc3RhbmQsXG4gKiBlYXNpZXItdG8tZGVidWcgZXhjZXB0aW9uIHdpdGggYSBjbGVhciBlcnJvcnMgbWVzc2FnZSBtZXNzYWdlIGV4cGxhaW5pbmcgdGhlXG4gKiBwcm9ibGVtLiAoSW5zdGVhZCBvZiBhIGNvbmZ1c2luZyBleGNlcHRpb24gdGhyb3duIGluc2lkZSB0aGUgaW1wbGVtZW50YXRpb25cbiAqIG9mIHRoZSBgdmFsdWVgIG9iamVjdCkuXG4gKi9cbi8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5mdW5jdGlvbiB0eXBlTmFtZSh2YWx1ZSkge1xuICB7XG4gICAgLy8gdG9TdHJpbmdUYWcgaXMgbmVlZGVkIGZvciBuYW1lc3BhY2VkIHR5cGVzIGxpa2UgVGVtcG9yYWwuSW5zdGFudFxuICAgIHZhciBoYXNUb1N0cmluZ1RhZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLnRvU3RyaW5nVGFnO1xuICAgIHZhciB0eXBlID0gaGFzVG9TdHJpbmdUYWcgJiYgdmFsdWVbU3ltYm9sLnRvU3RyaW5nVGFnXSB8fCB2YWx1ZS5jb25zdHJ1Y3Rvci5uYW1lIHx8ICdPYmplY3QnO1xuICAgIHJldHVybiB0eXBlO1xuICB9XG59IC8vICRGbG93Rml4TWUgb25seSBjYWxsZWQgaW4gREVWLCBzbyB2b2lkIHJldHVybiBpcyBub3QgcG9zc2libGUuXG5cblxuZnVuY3Rpb24gd2lsbENvZXJjaW9uVGhyb3codmFsdWUpIHtcbiAge1xuICAgIHRyeSB7XG4gICAgICB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAgLy8gSWYgeW91IGVuZGVkIHVwIGhlcmUgYnkgZm9sbG93aW5nIGFuIGV4Y2VwdGlvbiBjYWxsIHN0YWNrLCBoZXJlJ3Mgd2hhdCdzXG4gIC8vIGhhcHBlbmVkOiB5b3Ugc3VwcGxpZWQgYW4gb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBSZWFjdCAoYXMgYSBwcm9wLCBrZXksXG4gIC8vIERPTSBhdHRyaWJ1dGUsIENTUyBwcm9wZXJ0eSwgc3RyaW5nIHJlZiwgZXRjLikgYW5kIHdoZW4gUmVhY3QgdHJpZWQgdG9cbiAgLy8gY29lcmNlIGl0IHRvIGEgc3RyaW5nIHVzaW5nIGAnJyArIHZhbHVlYCwgYW4gZXhjZXB0aW9uIHdhcyB0aHJvd24uXG4gIC8vXG4gIC8vIFRoZSBtb3N0IGNvbW1vbiB0eXBlcyB0aGF0IHdpbGwgY2F1c2UgdGhpcyBleGNlcHRpb24gYXJlIGBTeW1ib2xgIGluc3RhbmNlc1xuICAvLyBhbmQgVGVtcG9yYWwgb2JqZWN0cyBsaWtlIGBUZW1wb3JhbC5JbnN0YW50YC4gQnV0IGFueSBvYmplY3QgdGhhdCBoYXMgYVxuICAvLyBgdmFsdWVPZmAgb3IgYFtTeW1ib2wudG9QcmltaXRpdmVdYCBtZXRob2QgdGhhdCB0aHJvd3Mgd2lsbCBhbHNvIGNhdXNlIHRoaXNcbiAgLy8gZXhjZXB0aW9uLiAoTGlicmFyeSBhdXRob3JzIGRvIHRoaXMgdG8gcHJldmVudCB1c2VycyBmcm9tIHVzaW5nIGJ1aWx0LWluXG4gIC8vIG51bWVyaWMgb3BlcmF0b3JzIGxpa2UgYCtgIG9yIGNvbXBhcmlzb24gb3BlcmF0b3JzIGxpa2UgYD49YCBiZWNhdXNlIGN1c3RvbVxuICAvLyBtZXRob2RzIGFyZSBuZWVkZWQgdG8gcGVyZm9ybSBhY2N1cmF0ZSBhcml0aG1ldGljIG9yIGNvbXBhcmlzb24uKVxuICAvL1xuICAvLyBUbyBmaXggdGhlIHByb2JsZW0sIGNvZXJjZSB0aGlzIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gYSBzdHJpbmcgYmVmb3JlXG4gIC8vIHBhc3NpbmcgaXQgdG8gUmVhY3QuIFRoZSBtb3N0IHJlbGlhYmxlIHdheSBpcyB1c3VhbGx5IGBTdHJpbmcodmFsdWUpYC5cbiAgLy9cbiAgLy8gVG8gZmluZCB3aGljaCB2YWx1ZSBpcyB0aHJvd2luZywgY2hlY2sgdGhlIGJyb3dzZXIgb3IgZGVidWdnZXIgY29uc29sZS5cbiAgLy8gQmVmb3JlIHRoaXMgZXhjZXB0aW9uIHdhcyB0aHJvd24sIHRoZXJlIHNob3VsZCBiZSBgY29uc29sZS5lcnJvcmAgb3V0cHV0XG4gIC8vIHRoYXQgc2hvd3MgdGhlIHR5cGUgKFN5bWJvbCwgVGVtcG9yYWwuUGxhaW5EYXRlLCBldGMuKSB0aGF0IGNhdXNlZCB0aGVcbiAgLy8gcHJvYmxlbSBhbmQgaG93IHRoYXQgdHlwZSB3YXMgdXNlZDoga2V5LCBhdHJyaWJ1dGUsIGlucHV0IHZhbHVlIHByb3AsIGV0Yy5cbiAgLy8gSW4gbW9zdCBjYXNlcywgdGhpcyBjb25zb2xlIG91dHB1dCBhbHNvIHNob3dzIHRoZSBjb21wb25lbnQgYW5kIGl0c1xuICAvLyBhbmNlc3RvciBjb21wb25lbnRzIHdoZXJlIHRoZSBleGNlcHRpb24gaGFwcGVuZWQuXG4gIC8vXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICByZXR1cm4gJycgKyB2YWx1ZTtcbn1cbmZ1bmN0aW9uIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24odmFsdWUpIHtcbiAge1xuICAgIGlmICh3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkpIHtcbiAgICAgIGVycm9yKCdUaGUgcHJvdmlkZWQga2V5IGlzIGFuIHVuc3VwcG9ydGVkIHR5cGUgJXMuJyArICcgVGhpcyB2YWx1ZSBtdXN0IGJlIGNvZXJjZWQgdG8gYSBzdHJpbmcgYmVmb3JlIGJlZm9yZSB1c2luZyBpdCBoZXJlLicsIHR5cGVOYW1lKHZhbHVlKSk7XG5cbiAgICAgIHJldHVybiB0ZXN0U3RyaW5nQ29lcmNpb24odmFsdWUpOyAvLyB0aHJvdyAodG8gaGVscCBjYWxsZXJzIGZpbmQgdHJvdWJsZXNob290aW5nIGNvbW1lbnRzKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lO1xuXG4gIGlmIChkaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBkaXNwbGF5TmFtZTtcbiAgfVxuXG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWU7XG59IC8vIEtlZXAgaW4gc3luYyB3aXRoIHJlYWN0LXJlY29uY2lsZXIvZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlclxuXG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufSAvLyBOb3RlIHRoYXQgdGhlIHJlY29uY2lsZXIgcGFja2FnZSBzaG91bGQgZ2VuZXJhbGx5IHByZWZlciB0byB1c2UgZ2V0Q29tcG9uZW50TmFtZUZyb21GaWJlcigpIGluc3RlYWQuXG5cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHZhciBvdXRlck5hbWUgPSB0eXBlLmRpc3BsYXlOYW1lIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKG91dGVyTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBvdXRlck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ01lbW8nO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1mYWxsdGhyb3VnaFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duLCBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biwgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgY29uZmlnLl9fc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gY29uZmlnLl9fc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGNvbXBvbmVudE5hbWUsIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogQ3JlYXRlIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IG9mIHRoZSBnaXZlbiB0eXBlLlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjcmVhdGVlbGVtZW50XG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gIHZhciBwcm9wcyA9IHt9O1xuICB2YXIga2V5ID0gbnVsbDtcbiAgdmFyIHJlZiA9IG51bGw7XG4gIHZhciBzZWxmID0gbnVsbDtcbiAgdmFyIHNvdXJjZSA9IG51bGw7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG5cbiAgICAgIHtcbiAgICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIHtcbiAgICAgICAgY2hlY2tLZXlTdHJpbmdDb2VyY2lvbihjb25maWcua2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIHNlbGYgPSBjb25maWcuX19zZWxmID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc2VsZjtcbiAgICBzb3VyY2UgPSBjb25maWcuX19zb3VyY2UgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zb3VyY2U7IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9IC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG5cblxuICB2YXIgY2hpbGRyZW5MZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcblxuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkQXJyYXkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHtcbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbn1cbmZ1bmN0aW9uIGNsb25lQW5kUmVwbGFjZUtleShvbGRFbGVtZW50LCBuZXdLZXkpIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBSZWFjdEVsZW1lbnQob2xkRWxlbWVudC50eXBlLCBuZXdLZXksIG9sZEVsZW1lbnQucmVmLCBvbGRFbGVtZW50Ll9zZWxmLCBvbGRFbGVtZW50Ll9zb3VyY2UsIG9sZEVsZW1lbnQuX293bmVyLCBvbGRFbGVtZW50LnByb3BzKTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgY29uZmlnLCBjaGlsZHJlbikge1xuICBpZiAoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCBcIiArIGVsZW1lbnQgKyBcIi5cIik7XG4gIH1cblxuICB2YXIgcHJvcE5hbWU7IC8vIE9yaWdpbmFsIHByb3BzIGFyZSBjb3BpZWRcblxuICB2YXIgcHJvcHMgPSBhc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7IC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG5cbiAgdmFyIHNlbGYgPSBlbGVtZW50Ll9zZWxmOyAvLyBTb3VyY2UgaXMgcHJlc2VydmVkIHNpbmNlIGNsb25lRWxlbWVudCBpcyB1bmxpa2VseSB0byBiZSB0YXJnZXRlZCBieSBhXG4gIC8vIHRyYW5zcGlsZXIsIGFuZCB0aGUgb3JpZ2luYWwgc291cmNlIGlzIHByb2JhYmx5IGEgYmV0dGVyIGluZGljYXRvciBvZiB0aGVcbiAgLy8gdHJ1ZSBvd25lci5cblxuICB2YXIgc291cmNlID0gZWxlbWVudC5fc291cmNlOyAvLyBPd25lciB3aWxsIGJlIHByZXNlcnZlZCwgdW5sZXNzIHJlZiBpcyBvdmVycmlkZGVuXG5cbiAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG5cbiAgaWYgKGNvbmZpZyAhPSBudWxsKSB7XG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIC8vIFNpbGVudGx5IHN0ZWFsIHRoZSByZWYgZnJvbSB0aGUgcGFyZW50LlxuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIG93bmVyID0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBvdmVycmlkZSBleGlzdGluZyBwcm9wc1xuXG5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuXG4gICAgaWYgKGVsZW1lbnQudHlwZSAmJiBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICBkZWZhdWx0UHJvcHMgPSBlbGVtZW50LnR5cGUuZGVmYXVsdFByb3BzO1xuICAgIH1cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIGlmIChjb25maWdbcHJvcE5hbWVdID09PSB1bmRlZmluZWQgJiYgZGVmYXVsdFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG4vKipcbiAqIEVzY2FwZSBhbmQgd3JhcCBrZXkgc28gaXQgaXMgc2FmZSB0byB1c2UgYXMgYSByZWFjdGlkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSB0byBiZSBlc2NhcGVkLlxuICogQHJldHVybiB7c3RyaW5nfSB0aGUgZXNjYXBlZCBrZXkuXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0ga2V5LnJlcGxhY2UoZXNjYXBlUmVnZXgsIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlc2NhcGVyTG9va3VwW21hdGNoXTtcbiAgfSk7XG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuLyoqXG4gKiBUT0RPOiBUZXN0IHRoYXQgYSBzaW5nbGUgY2hpbGQgYW5kIGFuIGFycmF5IHdpdGggb25lIGl0ZW0gaGF2ZSB0aGUgc2FtZSBrZXlcbiAqIHBhdHRlcm4uXG4gKi9cblxuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xudmFyIHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4ID0gL1xcLysvZztcblxuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZSh1c2VyUHJvdmlkZWRLZXlFc2NhcGVSZWdleCwgJyQmLycpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZSBhIGtleSBzdHJpbmcgdGhhdCBpZGVudGlmaWVzIGEgZWxlbWVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBlbGVtZW50IEEgZWxlbWVudCB0aGF0IGNvdWxkIGNvbnRhaW4gYSBtYW51YWwga2V5LlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IHRoYXQgaXMgdXNlZCBpZiBhIG1hbnVhbCBrZXkgaXMgbm90IHByb3ZpZGVkLlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEtleShlbGVtZW50LCBpbmRleCkge1xuICAvLyBEbyBzb21lIHR5cGVjaGVja2luZyBoZXJlIHNpbmNlIHdlIGNhbGwgdGhpcyBibGluZGx5LiBXZSB3YW50IHRvIGVuc3VyZVxuICAvLyB0aGF0IHdlIGRvbid0IGJsb2NrIHBvdGVudGlhbCBmdXR1cmUgRVMgQVBJcy5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0JyAmJiBlbGVtZW50ICE9PSBudWxsICYmIGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAvLyBFeHBsaWNpdCBrZXlcbiAgICB7XG4gICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGVsZW1lbnQua2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXNjYXBlKCcnICsgZWxlbWVudC5rZXkpO1xuICB9IC8vIEltcGxpY2l0IGtleSBkZXRlcm1pbmVkIGJ5IHRoZSBpbmRleCBpbiB0aGUgc2V0XG5cblxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuYW1lU29GYXIsIGNhbGxiYWNrKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgc3dpdGNoIChjaGlsZHJlbi4kJHR5cGVvZikge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIGlmIChpbnZva2VDYWxsYmFjaykge1xuICAgIHZhciBfY2hpbGQgPSBjaGlsZHJlbjtcbiAgICB2YXIgbWFwcGVkQ2hpbGQgPSBjYWxsYmFjayhfY2hpbGQpOyAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3M6XG5cbiAgICB2YXIgY2hpbGRLZXkgPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SICsgZ2V0RWxlbWVudEtleShfY2hpbGQsIDApIDogbmFtZVNvRmFyO1xuXG4gICAgaWYgKGlzQXJyYXkobWFwcGVkQ2hpbGQpKSB7XG4gICAgICB2YXIgZXNjYXBlZENoaWxkS2V5ID0gJyc7XG5cbiAgICAgIGlmIChjaGlsZEtleSAhPSBudWxsKSB7XG4gICAgICAgIGVzY2FwZWRDaGlsZEtleSA9IGVzY2FwZVVzZXJQcm92aWRlZEtleShjaGlsZEtleSkgKyAnLyc7XG4gICAgICB9XG5cbiAgICAgIG1hcEludG9BcnJheShtYXBwZWRDaGlsZCwgYXJyYXksIGVzY2FwZWRDaGlsZEtleSwgJycsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChtYXBwZWRDaGlsZCAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQobWFwcGVkQ2hpbGQpKSB7XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBUaGUgYGlmYCBzdGF0ZW1lbnQgaGVyZSBwcmV2ZW50cyBhdXRvLWRpc2FibGluZyBvZiB0aGUgc2FmZVxuICAgICAgICAgIC8vIGNvZXJjaW9uIEVTTGludCBydWxlLCBzbyB3ZSBtdXN0IG1hbnVhbGx5IGRpc2FibGUgaXQgYmVsb3cuXG4gICAgICAgICAgLy8gJEZsb3dGaXhNZSBGbG93IGluY29ycmVjdGx5IHRoaW5rcyBSZWFjdC5Qb3J0YWwgZG9lc24ndCBoYXZlIGEga2V5XG4gICAgICAgICAgaWYgKG1hcHBlZENoaWxkLmtleSAmJiAoIV9jaGlsZCB8fCBfY2hpbGQua2V5ICE9PSBtYXBwZWRDaGlsZC5rZXkpKSB7XG4gICAgICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1hcHBlZENoaWxkLmtleSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwcGVkQ2hpbGQgPSBjbG9uZUFuZFJlcGxhY2VLZXkobWFwcGVkQ2hpbGQsIC8vIEtlZXAgYm90aCB0aGUgKG1hcHBlZCkgYW5kIG9sZCBrZXlzIGlmIHRoZXkgZGlmZmVyLCBqdXN0IGFzXG4gICAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAgICBlc2NhcGVkUHJlZml4ICsgKCAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgbWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkgPyAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIGV4aXN0aW5nIGVsZW1lbnQncyBrZXkgY2FuIGJlIGEgbnVtYmVyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgICBlc2NhcGVVc2VyUHJvdmlkZWRLZXkoJycgKyBtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgICAgfVxuXG4gICAgICBhcnJheS5wdXNoKG1hcHBlZENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHZhciBjaGlsZDtcbiAgdmFyIG5leHROYW1lO1xuICB2YXIgc3VidHJlZUNvdW50ID0gMDsgLy8gQ291bnQgb2YgY2hpbGRyZW4gZm91bmQgaW4gdGhlIGN1cnJlbnQgc3VidHJlZS5cblxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaSk7XG4gICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKGNoaWxkcmVuKTtcblxuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIGl0ZXJhYmxlQ2hpbGRyZW4gPSBjaGlsZHJlbjtcblxuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGl0ZXJhYmxlQ2hpbGRyZW4uZW50cmllcykge1xuICAgICAgICAgIGlmICghZGlkV2FybkFib3V0TWFwcykge1xuICAgICAgICAgICAgd2FybignVXNpbmcgTWFwcyBhcyBjaGlsZHJlbiBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ1VzZSBhbiBhcnJheSBvZiBrZXllZCBSZWFjdEVsZW1lbnRzIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGl0ZXJhYmxlQ2hpbGRyZW4pO1xuICAgICAgdmFyIHN0ZXA7XG4gICAgICB2YXIgaWkgPSAwO1xuXG4gICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgIGNoaWxkID0gc3RlcC52YWx1ZTtcbiAgICAgICAgbmV4dE5hbWUgPSBuZXh0TmFtZVByZWZpeCArIGdldEVsZW1lbnRLZXkoY2hpbGQsIGlpKyspO1xuICAgICAgICBzdWJ0cmVlQ291bnQgKz0gbWFwSW50b0FycmF5KGNoaWxkLCBhcnJheSwgZXNjYXBlZFByZWZpeCwgbmV4dE5hbWUsIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgICAgIHZhciBjaGlsZHJlblN0cmluZyA9IFN0cmluZyhjaGlsZHJlbik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6IFwiICsgKGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZykgKyBcIikuIFwiICsgJ0lmIHlvdSBtZWFudCB0byByZW5kZXIgYSBjb2xsZWN0aW9uIG9mIGNoaWxkcmVuLCB1c2UgYW4gYXJyYXkgJyArICdpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogTWFwcyBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVubWFwXG4gKlxuICogVGhlIHByb3ZpZGVkIG1hcEZ1bmN0aW9uKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgY291bnQgPSAwO1xuICBtYXBJbnRvQXJyYXkoY2hpbGRyZW4sIHJlc3VsdCwgJycsICcnLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBjb3VudCsrKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4vKipcbiAqIENvdW50IHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhc1xuICogYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5cblxuZnVuY3Rpb24gY291bnRDaGlsZHJlbihjaGlsZHJlbikge1xuICB2YXIgbiA9IDA7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgbisrOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmdcbiAgfSk7XG4gIHJldHVybiBuO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmZvcmVhY2hcbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZm9yRWFjaEZ1bmNcbiAqIEBwYXJhbSB7Kn0gZm9yRWFjaENvbnRleHQgQ29udGV4dCBmb3IgZm9yRWFjaENvbnRleHQuXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2hDaGlsZHJlbihjaGlsZHJlbiwgZm9yRWFjaEZ1bmMsIGZvckVhY2hDb250ZXh0KSB7XG4gIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yRWFjaEZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gRG9uJ3QgcmV0dXJuIGFueXRoaW5nLlxuICB9LCBmb3JFYWNoQ29udGV4dCk7XG59XG4vKipcbiAqIEZsYXR0ZW4gYSBjaGlsZHJlbiBvYmplY3QgKHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCkgYW5kXG4gKiByZXR1cm4gYW4gYXJyYXkgd2l0aCBhcHByb3ByaWF0ZWx5IHJlLWtleWVkIGNoaWxkcmVuLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbnRvYXJyYXlcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgcmV0dXJuIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICByZXR1cm4gY2hpbGQ7XG4gIH0pIHx8IFtdO1xufVxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBjaGlsZCBpbiBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4gYW5kIHZlcmlmaWVzIHRoYXQgdGhlcmVcbiAqIGlzIG9ubHkgb25lIGNoaWxkIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbm9ubHlcbiAqXG4gKiBUaGUgY3VycmVudCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBhIHNpbmdsZSBjaGlsZCBnZXRzXG4gKiBwYXNzZWQgd2l0aG91dCBhIHdyYXBwZXIsIGJ1dCB0aGUgcHVycG9zZSBvZiB0aGlzIGhlbHBlciBmdW5jdGlvbiBpcyB0b1xuICogYWJzdHJhY3QgYXdheSB0aGUgcGFydGljdWxhciBzdHJ1Y3R1cmUgb2YgY2hpbGRyZW4uXG4gKlxuICogQHBhcmFtIHs/b2JqZWN0fSBjaGlsZHJlbiBDaGlsZCBjb2xsZWN0aW9uIHN0cnVjdHVyZS5cbiAqIEByZXR1cm4ge1JlYWN0RWxlbWVudH0gVGhlIGZpcnN0IGFuZCBvbmx5IGBSZWFjdEVsZW1lbnRgIGNvbnRhaW5lZCBpbiB0aGVcbiAqIHN0cnVjdHVyZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICBpZiAoIWlzVmFsaWRFbGVtZW50KGNoaWxkcmVuKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignUmVhY3QuQ2hpbGRyZW4ub25seSBleHBlY3RlZCB0byByZWNlaXZlIGEgc2luZ2xlIFJlYWN0IGVsZW1lbnQgY2hpbGQuJyk7XG4gIH1cblxuICByZXR1cm4gY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoZGVmYXVsdFZhbHVlKSB7XG4gIC8vIFRPRE86IFNlY29uZCBhcmd1bWVudCB1c2VkIHRvIGJlIGFuIG9wdGlvbmFsIGBjYWxjdWxhdGVDaGFuZ2VkQml0c2BcbiAgLy8gZnVuY3Rpb24uIFdhcm4gdG8gcmVzZXJ2ZSBmb3IgZnV0dXJlIHVzZT9cbiAgdmFyIGNvbnRleHQgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAvLyBBcyBhIHdvcmthcm91bmQgdG8gc3VwcG9ydCBtdWx0aXBsZSBjb25jdXJyZW50IHJlbmRlcmVycywgd2UgY2F0ZWdvcml6ZVxuICAgIC8vIHNvbWUgcmVuZGVyZXJzIGFzIHByaW1hcnkgYW5kIG90aGVycyBhcyBzZWNvbmRhcnkuIFdlIG9ubHkgZXhwZWN0XG4gICAgLy8gdGhlcmUgdG8gYmUgdHdvIGNvbmN1cnJlbnQgcmVuZGVyZXJzIGF0IG1vc3Q6IFJlYWN0IE5hdGl2ZSAocHJpbWFyeSkgYW5kXG4gICAgLy8gRmFicmljIChzZWNvbmRhcnkpOyBSZWFjdCBET00gKHByaW1hcnkpIGFuZCBSZWFjdCBBUlQgKHNlY29uZGFyeSkuXG4gICAgLy8gU2Vjb25kYXJ5IHJlbmRlcmVycyBzdG9yZSB0aGVpciBjb250ZXh0IHZhbHVlcyBvbiBzZXBhcmF0ZSBmaWVsZHMuXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jdXJyZW50VmFsdWUyOiBkZWZhdWx0VmFsdWUsXG4gICAgLy8gVXNlZCB0byB0cmFjayBob3cgbWFueSBjb25jdXJyZW50IHJlbmRlcmVycyB0aGlzIGNvbnRleHQgY3VycmVudGx5XG4gICAgLy8gc3VwcG9ydHMgd2l0aGluIGluIGEgc2luZ2xlIHJlbmRlcmVyLiBTdWNoIGFzIHBhcmFsbGVsIHNlcnZlciByZW5kZXJpbmcuXG4gICAgX3RocmVhZENvdW50OiAwLFxuICAgIC8vIFRoZXNlIGFyZSBjaXJjdWxhclxuICAgIFByb3ZpZGVyOiBudWxsLFxuICAgIENvbnN1bWVyOiBudWxsLFxuICAgIC8vIEFkZCB0aGVzZSB0byB1c2Ugc2FtZSBoaWRkZW4gY2xhc3MgaW4gVk0gYXMgU2VydmVyQ29udGV4dFxuICAgIF9kZWZhdWx0VmFsdWU6IG51bGwsXG4gICAgX2dsb2JhbE5hbWU6IG51bGxcbiAgfTtcbiAgY29udGV4dC5Qcm92aWRlciA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfUFJPVklERVJfVFlQRSxcbiAgICBfY29udGV4dDogY29udGV4dFxuICB9O1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gZmFsc2U7XG4gIHZhciBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IGZhbHNlO1xuXG4gIHtcbiAgICAvLyBBIHNlcGFyYXRlIG9iamVjdCwgYnV0IHByb3hpZXMgYmFjayB0byB0aGUgb3JpZ2luYWwgY29udGV4dCBvYmplY3QgZm9yXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuIEl0IGhhcyBhIGRpZmZlcmVudCAkJHR5cGVvZiwgc28gd2UgY2FuIHByb3Blcmx5XG4gICAgLy8gd2FybiBmb3IgdGhlIGluY29ycmVjdCB1c2FnZSBvZiBDb250ZXh0IGFzIGEgQ29uc3VtZXIuXG4gICAgdmFyIENvbnN1bWVyID0ge1xuICAgICAgJCR0eXBlb2Y6IFJFQUNUX0NPTlRFWFRfVFlQRSxcbiAgICAgIF9jb250ZXh0OiBjb250ZXh0XG4gICAgfTsgLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYWJvdXQgbm90IHNldHRpbmcgYSB2YWx1ZSwgd2hpY2ggaXMgaW50ZW50aW9uYWwgaGVyZVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQ29uc3VtZXIsIHtcbiAgICAgIFByb3ZpZGVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Qcm92aWRlcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Qcm92aWRlcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Qcm92aWRlcjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX1Byb3ZpZGVyKSB7XG4gICAgICAgICAgY29udGV4dC5Qcm92aWRlciA9IF9Qcm92aWRlcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZSA9IF9jdXJyZW50VmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfY3VycmVudFZhbHVlMjoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlMjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoX2N1cnJlbnRWYWx1ZTIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9jdXJyZW50VmFsdWUyID0gX2N1cnJlbnRWYWx1ZTI7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBfdGhyZWFkQ291bnQ6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuX3RocmVhZENvdW50O1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfdGhyZWFkQ291bnQpIHtcbiAgICAgICAgICBjb250ZXh0Ll90aHJlYWRDb3VudCA9IF90aHJlYWRDb3VudDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENvbnN1bWVyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZEFib3V0VXNpbmdOZXN0ZWRDb250ZXh0Q29uc3VtZXJzID0gdHJ1ZTtcblxuICAgICAgICAgICAgZXJyb3IoJ1JlbmRlcmluZyA8Q29udGV4dC5Db25zdW1lci5Db25zdW1lcj4gaXMgbm90IHN1cHBvcnRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluICcgKyAnYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gRGlkIHlvdSBtZWFuIHRvIHJlbmRlciA8Q29udGV4dC5Db25zdW1lcj4gaW5zdGVhZD8nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGV4dC5Db25zdW1lcjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlOYW1lOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0LmRpc3BsYXlOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkaXNwbGF5TmFtZSkge1xuICAgICAgICAgIGlmICghaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIpIHtcbiAgICAgICAgICAgIHdhcm4oJ1NldHRpbmcgYGRpc3BsYXlOYW1lYCBvbiBDb250ZXh0LkNvbnN1bWVyIGhhcyBubyBlZmZlY3QuICcgKyBcIllvdSBzaG91bGQgc2V0IGl0IGRpcmVjdGx5IG9uIHRoZSBjb250ZXh0IHdpdGggQ29udGV4dC5kaXNwbGF5TmFtZSA9ICclcycuXCIsIGRpc3BsYXlOYW1lKTtcblxuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pOyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBtaXNzaW5nIHByb3BlcnRpZXMgYmVjYXVzZSBpdCBkb2Vzbid0IHVuZGVyc3RhbmQgZGVmaW5lUHJvcGVydHlcblxuICAgIGNvbnRleHQuQ29uc3VtZXIgPSBDb25zdW1lcjtcbiAgfVxuXG4gIHtcbiAgICBjb250ZXh0Ll9jdXJyZW50UmVuZGVyZXIgPSBudWxsO1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlcjIgPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbnZhciBVbmluaXRpYWxpemVkID0gLTE7XG52YXIgUGVuZGluZyA9IDA7XG52YXIgUmVzb2x2ZWQgPSAxO1xudmFyIFJlamVjdGVkID0gMjtcblxuZnVuY3Rpb24gbGF6eUluaXRpYWxpemVyKHBheWxvYWQpIHtcbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgIHZhciBjdG9yID0gcGF5bG9hZC5fcmVzdWx0O1xuICAgIHZhciB0aGVuYWJsZSA9IGN0b3IoKTsgLy8gVHJhbnNpdGlvbiB0byB0aGUgbmV4dCBzdGF0ZS5cbiAgICAvLyBUaGlzIG1pZ2h0IHRocm93IGVpdGhlciBiZWNhdXNlIGl0J3MgbWlzc2luZyBvciB0aHJvd3MuIElmIHNvLCB3ZSB0cmVhdCBpdFxuICAgIC8vIGFzIHN0aWxsIHVuaW5pdGlhbGl6ZWQgYW5kIHRyeSBhZ2FpbiBuZXh0IHRpbWUuIFdoaWNoIGlzIHRoZSBzYW1lIGFzIHdoYXRcbiAgICAvLyBoYXBwZW5zIGlmIHRoZSBjdG9yIG9yIGFueSB3cmFwcGVycyBwcm9jZXNzaW5nIHRoZSBjdG9yIHRocm93cy4gVGhpcyBtaWdodFxuICAgIC8vIGVuZCB1cCBmaXhpbmcgaXQgaWYgdGhlIHJlc29sdXRpb24gd2FzIGEgY29uY3VycmVuY3kgYnVnLlxuXG4gICAgdGhlbmFibGUudGhlbihmdW5jdGlvbiAobW9kdWxlT2JqZWN0KSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZXNvbHZlZC5fc3RhdHVzID0gUmVzb2x2ZWQ7XG4gICAgICAgIHJlc29sdmVkLl9yZXN1bHQgPSBtb2R1bGVPYmplY3Q7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBQZW5kaW5nIHx8IHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgICAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBwYXlsb2FkO1xuICAgICAgICByZWplY3RlZC5fc3RhdHVzID0gUmVqZWN0ZWQ7XG4gICAgICAgIHJlamVjdGVkLl9yZXN1bHQgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFVuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIEluIGNhc2UsIHdlJ3JlIHN0aWxsIHVuaW5pdGlhbGl6ZWQsIHRoZW4gd2UncmUgd2FpdGluZyBmb3IgdGhlIHRoZW5hYmxlXG4gICAgICAvLyB0byByZXNvbHZlLiBTZXQgaXQgYXMgcGVuZGluZyBpbiB0aGUgbWVhbnRpbWUuXG4gICAgICB2YXIgcGVuZGluZyA9IHBheWxvYWQ7XG4gICAgICBwZW5kaW5nLl9zdGF0dXMgPSBQZW5kaW5nO1xuICAgICAgcGVuZGluZy5fcmVzdWx0ID0gdGhlbmFibGU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gUmVzb2x2ZWQpIHtcbiAgICB2YXIgbW9kdWxlT2JqZWN0ID0gcGF5bG9hZC5fcmVzdWx0O1xuXG4gICAge1xuICAgICAgaWYgKG1vZHVsZU9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVycm9yKCdsYXp5OiBFeHBlY3RlZCB0aGUgcmVzdWx0IG9mIGEgZHluYW1pYyBpbXAnICsgJ29ydCgpIGNhbGwuICcgKyAnSW5zdGVhZCByZWNlaXZlZDogJXNcXG5cXG5Zb3VyIGNvZGUgc2hvdWxkIGxvb2sgbGlrZTogXFxuICAnICsgLy8gQnJlYWsgdXAgaW1wb3J0cyB0byBhdm9pZCBhY2NpZGVudGFsbHkgcGFyc2luZyB0aGVtIGFzIGRlcGVuZGVuY2llcy5cbiAgICAgICAgJ2NvbnN0IE15Q29tcG9uZW50ID0gbGF6eSgoKSA9PiBpbXAnICsgXCJvcnQoJy4vTXlDb21wb25lbnQnKSlcXG5cXG5cIiArICdEaWQgeW91IGFjY2lkZW50YWxseSBwdXQgY3VybHkgYnJhY2VzIGFyb3VuZCB0aGUgaW1wb3J0PycsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAge1xuICAgICAgaWYgKCEoJ2RlZmF1bHQnIGluIG1vZHVsZU9iamVjdCkpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVwiLCBtb2R1bGVPYmplY3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb2R1bGVPYmplY3QuZGVmYXVsdDtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBwYXlsb2FkLl9yZXN1bHQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGF6eShjdG9yKSB7XG4gIHZhciBwYXlsb2FkID0ge1xuICAgIC8vIFdlIHVzZSB0aGVzZSBmaWVsZHMgdG8gc3RvcmUgdGhlIHJlc3VsdC5cbiAgICBfc3RhdHVzOiBVbmluaXRpYWxpemVkLFxuICAgIF9yZXN1bHQ6IGN0b3JcbiAgfTtcbiAgdmFyIGxhenlUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9MQVpZX1RZUEUsXG4gICAgX3BheWxvYWQ6IHBheWxvYWQsXG4gICAgX2luaXQ6IGxhenlJbml0aWFsaXplclxuICB9O1xuXG4gIHtcbiAgICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIGp1c3Qgc2V0IGl0IG9uIHRoZSBvYmplY3QuXG4gICAgdmFyIGRlZmF1bHRQcm9wcztcbiAgICB2YXIgcHJvcFR5cGVzOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhsYXp5VHlwZSwge1xuICAgICAgZGVmYXVsdFByb3BzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGRlZmF1bHRQcm9wcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3RGVmYXVsdFByb3BzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYGRlZmF1bHRQcm9wc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIGRlZmF1bHRQcm9wcyA9IG5ld0RlZmF1bHRQcm9wczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAnZGVmYXVsdFByb3BzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcHJvcFR5cGVzOiB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BUeXBlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3UHJvcFR5cGVzKSB7XG4gICAgICAgICAgZXJyb3IoJ1JlYWN0LmxhenkoLi4uKTogSXQgaXMgbm90IHN1cHBvcnRlZCB0byBhc3NpZ24gYHByb3BUeXBlc2AgdG8gJyArICdhIGxhenkgY29tcG9uZW50IGltcG9ydC4gRWl0aGVyIHNwZWNpZnkgdGhlbSB3aGVyZSB0aGUgY29tcG9uZW50ICcgKyAnaXMgZGVmaW5lZCwgb3IgY3JlYXRlIGEgd3JhcHBpbmcgY29tcG9uZW50IGFyb3VuZCBpdC4nKTtcblxuICAgICAgICAgIHByb3BUeXBlcyA9IG5ld1Byb3BUeXBlczsgLy8gTWF0Y2ggcHJvZHVjdGlvbiBiZWhhdmlvciBtb3JlIGNsb3NlbHk6XG4gICAgICAgICAgLy8gJEZsb3dGaXhNZVxuXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGxhenlUeXBlLCAncHJvcFR5cGVzJywge1xuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbGF6eVR5cGU7XG59XG5cbmZ1bmN0aW9uIGZvcndhcmRSZWYocmVuZGVyKSB7XG4gIHtcbiAgICBpZiAocmVuZGVyICE9IG51bGwgJiYgcmVuZGVyLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCByZWNlaXZlZCBhIGBtZW1vYCAnICsgJ2NvbXBvbmVudC4gSW5zdGVhZCBvZiBmb3J3YXJkUmVmKG1lbW8oLi4uKSksIHVzZSAnICsgJ21lbW8oZm9yd2FyZFJlZiguLi4pKS4nKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiByZW5kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyZW5kZXIubGVuZ3RoICE9PSAwICYmIHJlbmRlci5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBhY2NlcHQgZXhhY3RseSB0d28gcGFyYW1ldGVyczogcHJvcHMgYW5kIHJlZi4gJXMnLCByZW5kZXIubGVuZ3RoID09PSAxID8gJ0RpZCB5b3UgZm9yZ2V0IHRvIHVzZSB0aGUgcmVmIHBhcmFtZXRlcj8nIDogJ0FueSBhZGRpdGlvbmFsIHBhcmFtZXRlciB3aWxsIGJlIHVuZGVmaW5lZC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVuZGVyICE9IG51bGwpIHtcbiAgICAgIGlmIChyZW5kZXIuZGVmYXVsdFByb3BzICE9IG51bGwgfHwgcmVuZGVyLnByb3BUeXBlcyAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yKCdmb3J3YXJkUmVmIHJlbmRlciBmdW5jdGlvbnMgZG8gbm90IHN1cHBvcnQgcHJvcFR5cGVzIG9yIGRlZmF1bHRQcm9wcy4gJyArICdEaWQgeW91IGFjY2lkZW50YWxseSBwYXNzIGEgUmVhY3QgY29tcG9uZW50PycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBlbGVtZW50VHlwZSA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSxcbiAgICByZW5kZXI6IHJlbmRlclxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXJlbmRlci5uYW1lICYmICFyZW5kZXIuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICByZW5kZXIuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG1lbW8odHlwZSwgY29tcGFyZSkge1xuICB7XG4gICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkpIHtcbiAgICAgIGVycm9yKCdtZW1vOiBUaGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBvbmVudC4gSW5zdGVhZCAnICsgJ3JlY2VpdmVkOiAlcycsIHR5cGUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgdHlwZSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9NRU1PX1RZUEUsXG4gICAgdHlwZTogdHlwZSxcbiAgICBjb21wYXJlOiBjb21wYXJlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29tcGFyZVxuICB9O1xuXG4gIHtcbiAgICB2YXIgb3duTmFtZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudFR5cGUsICdkaXNwbGF5TmFtZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvd25OYW1lO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgb3duTmFtZSA9IG5hbWU7IC8vIFRoZSBpbm5lciBjb21wb25lbnQgc2hvdWxkbid0IGluaGVyaXQgdGhpcyBkaXNwbGF5IG5hbWUgaW4gbW9zdCBjYXNlcyxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgY29tcG9uZW50IG1heSBiZSB1c2VkIGVsc2V3aGVyZS5cbiAgICAgICAgLy8gQnV0IGl0J3MgbmljZSBmb3IgYW5vbnltb3VzIGZ1bmN0aW9ucyB0byBpbmhlcml0IHRoZSBuYW1lLFxuICAgICAgICAvLyBzbyB0aGF0IG91ciBjb21wb25lbnQtc3RhY2sgZ2VuZXJhdGlvbiBsb2dpYyB3aWxsIGRpc3BsYXkgdGhlaXIgZnJhbWVzLlxuICAgICAgICAvLyBBbiBhbm9ueW1vdXMgZnVuY3Rpb24gZ2VuZXJhbGx5IHN1Z2dlc3RzIGEgcGF0dGVybiBsaWtlOlxuICAgICAgICAvLyAgIFJlYWN0Lm1lbW8oKHByb3BzKSA9PiB7Li4ufSk7XG4gICAgICAgIC8vIFRoaXMga2luZCBvZiBpbm5lciBmdW5jdGlvbiBpcyBub3QgdXNlZCBlbHNld2hlcmUgc28gdGhlIHNpZGUgZWZmZWN0IGlzIG9rYXkuXG5cbiAgICAgICAgaWYgKCF0eXBlLm5hbWUgJiYgIXR5cGUuZGlzcGxheU5hbWUpIHtcbiAgICAgICAgICB0eXBlLmRpc3BsYXlOYW1lID0gbmFtZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRUeXBlO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlRGlzcGF0Y2hlcigpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7XG5cbiAge1xuICAgIGlmIChkaXNwYXRjaGVyID09PSBudWxsKSB7XG4gICAgICBlcnJvcignSW52YWxpZCBob29rIGNhbGwuIEhvb2tzIGNhbiBvbmx5IGJlIGNhbGxlZCBpbnNpZGUgb2YgdGhlIGJvZHkgb2YgYSBmdW5jdGlvbiBjb21wb25lbnQuIFRoaXMgY291bGQgaGFwcGVuIGZvcicgKyAnIG9uZSBvZiB0aGUgZm9sbG93aW5nIHJlYXNvbnM6XFxuJyArICcxLiBZb3UgbWlnaHQgaGF2ZSBtaXNtYXRjaGluZyB2ZXJzaW9ucyBvZiBSZWFjdCBhbmQgdGhlIHJlbmRlcmVyIChzdWNoIGFzIFJlYWN0IERPTSlcXG4nICsgJzIuIFlvdSBtaWdodCBiZSBicmVha2luZyB0aGUgUnVsZXMgb2YgSG9va3NcXG4nICsgJzMuIFlvdSBtaWdodCBoYXZlIG1vcmUgdGhhbiBvbmUgY29weSBvZiBSZWFjdCBpbiB0aGUgc2FtZSBhcHBcXG4nICsgJ1NlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvaW52YWxpZC1ob29rLWNhbGwgZm9yIHRpcHMgYWJvdXQgaG93IHRvIGRlYnVnIGFuZCBmaXggdGhpcyBwcm9ibGVtLicpO1xuICAgIH1cbiAgfSAvLyBXaWxsIHJlc3VsdCBpbiBhIG51bGwgYWNjZXNzIGVycm9yIGlmIGFjY2Vzc2VkIG91dHNpZGUgcmVuZGVyIHBoYXNlLiBXZVxuICAvLyBpbnRlbnRpb25hbGx5IGRvbid0IHRocm93IG91ciBvd24gZXJyb3IgYmVjYXVzZSB0aGlzIGlzIGluIGEgaG90IHBhdGguXG4gIC8vIEFsc28gaGVscHMgZW5zdXJlIHRoaXMgaXMgaW5saW5lZC5cblxuXG4gIHJldHVybiBkaXNwYXRjaGVyO1xufVxuZnVuY3Rpb24gdXNlQ29udGV4dChDb250ZXh0KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcblxuICB7XG4gICAgLy8gVE9ETzogYWRkIGEgbW9yZSBnZW5lcmljIHdhcm5pbmcgZm9yIGludmFsaWQgdmFsdWVzLlxuICAgIGlmIChDb250ZXh0Ll9jb250ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciByZWFsQ29udGV4dCA9IENvbnRleHQuX2NvbnRleHQ7IC8vIERvbid0IGRlZHVwbGljYXRlIGJlY2F1c2UgdGhpcyBsZWdpdGltYXRlbHkgY2F1c2VzIGJ1Z3NcbiAgICAgIC8vIGFuZCBub2JvZHkgc2hvdWxkIGJlIHVzaW5nIHRoaXMgaW4gZXhpc3RpbmcgY29kZS5cblxuICAgICAgaWYgKHJlYWxDb250ZXh0LkNvbnN1bWVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Db25zdW1lcikgaXMgbm90IHN1cHBvcnRlZCwgbWF5IGNhdXNlIGJ1Z3MsIGFuZCB3aWxsIGJlICcgKyAncmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9IGVsc2UgaWYgKHJlYWxDb250ZXh0LlByb3ZpZGVyID09PSBDb250ZXh0KSB7XG4gICAgICAgIGVycm9yKCdDYWxsaW5nIHVzZUNvbnRleHQoQ29udGV4dC5Qcm92aWRlcikgaXMgbm90IHN1cHBvcnRlZC4gJyArICdEaWQgeW91IG1lYW4gdG8gY2FsbCB1c2VDb250ZXh0KENvbnRleHQpIGluc3RlYWQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlQ29udGV4dChDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIHVzZVN0YXRlKGluaXRpYWxTdGF0ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG59XG5mdW5jdGlvbiB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxBcmcsIGluaXQpO1xufVxuZnVuY3Rpb24gdXNlUmVmKGluaXRpYWxWYWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZihpbml0aWFsVmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUluc2VydGlvbkVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUxheW91dEVmZmVjdChjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VNZW1vKGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZU1lbW8oY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgY3JlYXRlLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZURlYnVnVmFsdWUodmFsdWUsIGZvcm1hdHRlckZuKSB7XG4gIHtcbiAgICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gICAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pO1xuICB9XG59XG5mdW5jdGlvbiB1c2VUcmFuc2l0aW9uKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVRyYW5zaXRpb24oKTtcbn1cbmZ1bmN0aW9uIHVzZURlZmVycmVkVmFsdWUodmFsdWUpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWZlcnJlZFZhbHVlKHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHVzZUlkKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUlkKCk7XG59XG5mdW5jdGlvbiB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIGdldFNuYXBzaG90LCBnZXRTZXJ2ZXJTbmFwc2hvdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KTtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpOyAvLyBJZiBvdXIgY29tcG9uZW50IGZyYW1lIGlzIGxhYmVsZWQgXCI8YW5vbnltb3VzPlwiXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGhhdmUgYSB1c2VyLXByb3ZpZGVkIFwiZGlzcGxheU5hbWVcIlxuICAgICAgICAgICAgICAgIC8vIHNwbGljZSBpdCBpbiB0byBtYWtlIHRoZSBzdGFjayBtb3JlIHJlYWRhYmxlLlxuXG5cbiAgICAgICAgICAgICAgICBpZiAoZm4uZGlzcGxheU5hbWUgJiYgX2ZyYW1lLmluY2x1ZGVzKCc8YW5vbnltb3VzPicpKSB7XG4gICAgICAgICAgICAgICAgICBfZnJhbWUgPSBfZnJhbWUucmVwbGFjZSgnPGFub255bW91cz4nLCBmbi5kaXNwbGF5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIGlmIChSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgIGlmIChuYW1lKSB7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMoZWxlbWVudFByb3BzKSB7XG4gIGlmIChlbGVtZW50UHJvcHMgIT09IG51bGwgJiYgZWxlbWVudFByb3BzICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oZWxlbWVudFByb3BzLl9fc291cmNlKTtcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICBpZiAoIWluZm8pIHtcbiAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGluZm87XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgfVxuXG4gIHtcbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgfVxuXG4gICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bUZvclByb3BzKHByb3BzKTtcblxuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWVGcm9tVHlwZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAge1xuICAgICAgZXJyb3IoJ1JlYWN0LmNyZWF0ZUVsZW1lbnQ6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBjcmVhdGVFbGVtZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gIGlmICh2YWxpZFR5cGUpIHtcbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCB0eXBlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSkge1xuICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxudmFyIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gZmFsc2U7XG5mdW5jdGlvbiBjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24odHlwZSkge1xuICB2YXIgdmFsaWRhdGVkRmFjdG9yeSA9IGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbi5iaW5kKG51bGwsIHR5cGUpO1xuICB2YWxpZGF0ZWRGYWN0b3J5LnR5cGUgPSB0eXBlO1xuXG4gIHtcbiAgICBpZiAoIWRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5KSB7XG4gICAgICBkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSA9IHRydWU7XG5cbiAgICAgIHdhcm4oJ1JlYWN0LmNyZWF0ZUZhY3RvcnkoKSBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBDb25zaWRlciB1c2luZyBKU1ggJyArICdvciB1c2UgUmVhY3QuY3JlYXRlRWxlbWVudCgpIGRpcmVjdGx5IGluc3RlYWQuJyk7XG4gICAgfSAvLyBMZWdhY3kgaG9vazogcmVtb3ZlIGl0XG5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdhcm4oJ0ZhY3RvcnkudHlwZSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdGhlIGNsYXNzIGRpcmVjdGx5ICcgKyAnYmVmb3JlIHBhc3NpbmcgaXQgdG8gY3JlYXRlRmFjdG9yeS4nKTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5mdW5jdGlvbiBjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbihlbGVtZW50LCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIG5ld0VsZW1lbnQgPSBjbG9uZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcFR5cGVzKG5ld0VsZW1lbnQpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gc3RhcnRUcmFuc2l0aW9uKHNjb3BlLCBvcHRpb25zKSB7XG4gIHZhciBwcmV2VHJhbnNpdGlvbiA9IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb247XG4gIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSB7fTtcbiAgdmFyIGN1cnJlbnRUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcblxuICB7XG4gICAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycyA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgc2NvcGUoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uID0gcHJldlRyYW5zaXRpb247XG5cbiAgICB7XG4gICAgICBpZiAocHJldlRyYW5zaXRpb24gPT09IG51bGwgJiYgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMpIHtcbiAgICAgICAgdmFyIHVwZGF0ZWRGaWJlcnNDb3VudCA9IGN1cnJlbnRUcmFuc2l0aW9uLl91cGRhdGVkRmliZXJzLnNpemU7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWRGaWJlcnNDb3VudCA+IDEwKSB7XG4gICAgICAgICAgd2FybignRGV0ZWN0ZWQgYSBsYXJnZSBudW1iZXIgb2YgdXBkYXRlcyBpbnNpZGUgc3RhcnRUcmFuc2l0aW9uLiAnICsgJ0lmIHRoaXMgaXMgZHVlIHRvIGEgc3Vic2NyaXB0aW9uIHBsZWFzZSByZS13cml0ZSBpdCB0byB1c2UgUmVhY3QgcHJvdmlkZWQgaG9va3MuICcgKyAnT3RoZXJ3aXNlIGNvbmN1cnJlbnQgbW9kZSBndWFyYW50ZWVzIGFyZSBvZmYgdGhlIHRhYmxlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuY2xlYXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID0gZmFsc2U7XG52YXIgZW5xdWV1ZVRhc2tJbXBsID0gbnVsbDtcbmZ1bmN0aW9uIGVucXVldWVUYXNrKHRhc2spIHtcbiAgaWYgKGVucXVldWVUYXNrSW1wbCA9PT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICAvLyByZWFkIHJlcXVpcmUgb2ZmIHRoZSBtb2R1bGUgb2JqZWN0IHRvIGdldCBhcm91bmQgdGhlIGJ1bmRsZXJzLlxuICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIGRldGVjdCBhIHJlcXVpcmUgYW5kIGJ1bmRsZSBhIE5vZGUgcG9seWZpbGwuXG4gICAgICB2YXIgcmVxdWlyZVN0cmluZyA9ICgncmVxdWlyZScgKyBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCA3KTtcbiAgICAgIHZhciBub2RlUmVxdWlyZSA9IG1vZHVsZSAmJiBtb2R1bGVbcmVxdWlyZVN0cmluZ107IC8vIGFzc3VtaW5nIHdlJ3JlIGluIG5vZGUsIGxldCdzIHRyeSB0byBnZXQgbm9kZSdzXG4gICAgICAvLyB2ZXJzaW9uIG9mIHNldEltbWVkaWF0ZSwgYnlwYXNzaW5nIGZha2UgdGltZXJzIGlmIGFueS5cblxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gbm9kZVJlcXVpcmUuY2FsbChtb2R1bGUsICd0aW1lcnMnKS5zZXRJbW1lZGlhdGU7XG4gICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgLy8gd2UncmUgaW4gYSBicm93c2VyXG4gICAgICAvLyB3ZSBjYW4ndCB1c2UgcmVndWxhciB0aW1lcnMgYmVjYXVzZSB0aGV5IG1heSBzdGlsbCBiZSBmYWtlZFxuICAgICAgLy8gc28gd2UgdHJ5IE1lc3NhZ2VDaGFubmVsK3Bvc3RNZXNzYWdlIGluc3RlYWRcbiAgICAgIGVucXVldWVUYXNrSW1wbCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB7XG4gICAgICAgICAgaWYgKGRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIE1lc3NhZ2VDaGFubmVsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICBlcnJvcignVGhpcyBicm93c2VyIGRvZXMgbm90IGhhdmUgYSBNZXNzYWdlQ2hhbm5lbCBpbXBsZW1lbnRhdGlvbiwgJyArICdzbyBlbnF1ZXVpbmcgdGFza3MgdmlhIGF3YWl0IGFjdChhc3luYyAoKSA9PiAuLi4pIHdpbGwgZmFpbC4gJyArICdQbGVhc2UgZmlsZSBhbiBpc3N1ZSBhdCBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzICcgKyAnaWYgeW91IGVuY291bnRlciB0aGlzIHdhcm5pbmcuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBjYWxsYmFjaztcbiAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZW5xdWV1ZVRhc2tJbXBsKHRhc2spO1xufVxuXG52YXIgYWN0U2NvcGVEZXB0aCA9IDA7XG52YXIgZGlkV2Fybk5vQXdhaXRBY3QgPSBmYWxzZTtcbmZ1bmN0aW9uIGFjdChjYWxsYmFjaykge1xuICB7XG4gICAgLy8gYGFjdGAgY2FsbHMgY2FuIGJlIG5lc3RlZCwgc28gd2UgdHJhY2sgdGhlIGRlcHRoLiBUaGlzIHJlcHJlc2VudHMgdGhlXG4gICAgLy8gbnVtYmVyIG9mIGBhY3RgIHNjb3BlcyBvbiB0aGUgc3RhY2suXG4gICAgdmFyIHByZXZBY3RTY29wZURlcHRoID0gYWN0U2NvcGVEZXB0aDtcbiAgICBhY3RTY29wZURlcHRoKys7XG5cbiAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgb3V0ZXJtb3N0IGBhY3RgIHNjb3BlLiBJbml0aWFsaXplIHRoZSBxdWV1ZS4gVGhlIHJlY29uY2lsZXJcbiAgICAgIC8vIHdpbGwgZGV0ZWN0IHRoZSBxdWV1ZSBhbmQgdXNlIGl0IGluc3RlYWQgb2YgU2NoZWR1bGVyLlxuICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgIH1cblxuICAgIHZhciBwcmV2SXNCYXRjaGluZ0xlZ2FjeSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3k7XG4gICAgdmFyIHJlc3VsdDtcblxuICAgIHRyeSB7XG4gICAgICAvLyBVc2VkIHRvIHJlcHJvZHVjZSBiZWhhdmlvciBvZiBgYmF0Y2hlZFVwZGF0ZXNgIGluIGxlZ2FjeSBtb2RlLiBPbmx5XG4gICAgICAvLyBzZXQgdG8gYHRydWVgIHdoaWxlIHRoZSBnaXZlbiBjYWxsYmFjayBpcyBleGVjdXRlZCwgbm90IGZvciB1cGRhdGVzXG4gICAgICAvLyB0cmlnZ2VyZWQgZHVyaW5nIGFuIGFzeW5jIGV2ZW50LCBiZWNhdXNlIHRoaXMgaXMgaG93IHRoZSBsZWdhY3lcbiAgICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIGBhY3RgIGJlaGF2ZWQuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgICAgIHJlc3VsdCA9IGNhbGxiYWNrKCk7IC8vIFJlcGxpY2F0ZSBiZWhhdmlvciBvZiBvcmlnaW5hbCBgYWN0YCBpbXBsZW1lbnRhdGlvbiBpbiBsZWdhY3kgbW9kZSxcbiAgICAgIC8vIHdoaWNoIGZsdXNoZWQgdXBkYXRlcyBpbW1lZGlhdGVseSBhZnRlciB0aGUgc2NvcGUgZnVuY3Rpb24gZXhpdHMsIGV2ZW5cbiAgICAgIC8vIGlmIGl0J3MgYW4gYXN5bmMgZnVuY3Rpb24uXG5cbiAgICAgIGlmICghcHJldklzQmF0Y2hpbmdMZWdhY3kgJiYgUmVhY3RDdXJyZW50QWN0UXVldWUuZGlkU2NoZWR1bGVMZWdhY3lVcGRhdGUpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAocXVldWUgIT09IG51bGwpIHtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUocXVldWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5pc0JhdGNoaW5nTGVnYWN5ID0gcHJldklzQmF0Y2hpbmdMZWdhY3k7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciB0aGVuYWJsZVJlc3VsdCA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIGFuIGFzeW5jIGZ1bmN0aW9uIChpLmUuIHJldHVybmVkIGEgcHJvbWlzZSkuIFdhaXRcbiAgICAgIC8vIGZvciBpdCB0byByZXNvbHZlIGJlZm9yZSBleGl0aW5nIHRoZSBjdXJyZW50IHNjb3BlLlxuXG4gICAgICB2YXIgd2FzQXdhaXRlZCA9IGZhbHNlO1xuICAgICAgdmFyIHRoZW5hYmxlID0ge1xuICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgd2FzQXdhaXRlZCA9IHRydWU7XG4gICAgICAgICAgdGhlbmFibGVSZXN1bHQudGhlbihmdW5jdGlvbiAocmV0dXJuVmFsdWUpIHtcbiAgICAgICAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gV2UndmUgZXhpdGVkIHRoZSBvdXRlcm1vc3QgYWN0IHNjb3BlLiBSZWN1cnNpdmVseSBmbHVzaCB0aGVcbiAgICAgICAgICAgICAgLy8gcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgLy8gVGhlIGNhbGxiYWNrIHRocmV3IGFuIGVycm9yLlxuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAge1xuICAgICAgICBpZiAoIWRpZFdhcm5Ob0F3YWl0QWN0ICYmIHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge30pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF3YXNBd2FpdGVkKSB7XG4gICAgICAgICAgICAgIGRpZFdhcm5Ob0F3YWl0QWN0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBlcnJvcignWW91IGNhbGxlZCBhY3QoYXN5bmMgKCkgPT4gLi4uKSB3aXRob3V0IGF3YWl0LiAnICsgJ1RoaXMgY291bGQgbGVhZCB0byB1bmV4cGVjdGVkIHRlc3RpbmcgYmVoYXZpb3VyLCAnICsgJ2ludGVybGVhdmluZyBtdWx0aXBsZSBhY3QgY2FsbHMgYW5kIG1peGluZyB0aGVpciAnICsgJ3Njb3Blcy4gJyArICdZb3Ugc2hvdWxkIC0gYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLik7Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoZW5hYmxlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmV0dXJuVmFsdWUgPSByZXN1bHQ7IC8vIFRoZSBjYWxsYmFjayBpcyBub3QgYW4gYXN5bmMgZnVuY3Rpb24uIEV4aXQgdGhlIGN1cnJlbnQgc2NvcGVcbiAgICAgIC8vIGltbWVkaWF0ZWx5LCB3aXRob3V0IGF3YWl0aW5nLlxuXG4gICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG5cbiAgICAgIGlmIChhY3RTY29wZURlcHRoID09PSAwKSB7XG4gICAgICAgIC8vIEV4aXRpbmcgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIEZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF9xdWV1ZSA9IFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQ7XG5cbiAgICAgICAgaWYgKF9xdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGZsdXNoQWN0UXVldWUoX3F1ZXVlKTtcbiAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgfSAvLyBSZXR1cm4gYSB0aGVuYWJsZS4gSWYgdGhlIHVzZXIgYXdhaXRzIGl0LCB3ZSdsbCBmbHVzaCBhZ2FpbiBpblxuICAgICAgICAvLyBjYXNlIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkIGJ5IGEgbWljcm90YXNrLlxuXG5cbiAgICAgICAgdmFyIF90aGVuYWJsZSA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAvLyBDb25maXJtIHdlIGhhdmVuJ3QgcmUtZW50ZXJlZCBhbm90aGVyIGBhY3RgIHNjb3BlLCBpbiBjYXNlXG4gICAgICAgICAgICAvLyB0aGUgdXNlciBkb2VzIHNvbWV0aGluZyB3ZWlyZCBsaWtlIGF3YWl0IHRoZSB0aGVuYWJsZVxuICAgICAgICAgICAgLy8gbXVsdGlwbGUgdGltZXMuXG4gICAgICAgICAgICBpZiAoUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAvLyBSZWN1cnNpdmVseSBmbHVzaCB0aGUgcXVldWUgdW50aWwgdGhlcmUncyBubyByZW1haW5pbmcgd29yay5cbiAgICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IFtdO1xuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2luY2Ugd2UncmUgaW5zaWRlIGEgbmVzdGVkIGBhY3RgIHNjb3BlLCB0aGUgcmV0dXJuZWQgdGhlbmFibGVcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgcmVzb2x2ZXMuIFRoZSBvdXRlciBzY29wZSB3aWxsIGZsdXNoIHRoZSBxdWV1ZS5cbiAgICAgICAgdmFyIF90aGVuYWJsZTIgPSB7XG4gICAgICAgICAgdGhlbjogZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoZW5hYmxlMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpIHtcbiAge1xuICAgIGlmIChwcmV2QWN0U2NvcGVEZXB0aCAhPT0gYWN0U2NvcGVEZXB0aCAtIDEpIHtcbiAgICAgIGVycm9yKCdZb3Ugc2VlbSB0byBoYXZlIG92ZXJsYXBwaW5nIGFjdCgpIGNhbGxzLCB0aGlzIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnQmUgc3VyZSB0byBhd2FpdCBwcmV2aW91cyBhY3QoKSBjYWxscyBiZWZvcmUgbWFraW5nIGEgbmV3IG9uZS4gJyk7XG4gICAgfVxuXG4gICAgYWN0U2NvcGVEZXB0aCA9IHByZXZBY3RTY29wZURlcHRoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCkge1xuICB7XG4gICAgdmFyIHF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIGVucXVldWVUYXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBObyBhZGRpdGlvbmFsIHdvcmsgd2FzIHNjaGVkdWxlZC4gRmluaXNoLlxuICAgICAgICAgICAgUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gS2VlcCBmbHVzaGluZyB3b3JrIHVudGlsIHRoZXJlJ3Mgbm9uZSBsZWZ0LlxuICAgICAgICAgICAgcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbnZhciBpc0ZsdXNoaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGZsdXNoQWN0UXVldWUocXVldWUpIHtcbiAge1xuICAgIGlmICghaXNGbHVzaGluZykge1xuICAgICAgLy8gUHJldmVudCByZS1lbnRyYW5jZS5cbiAgICAgIGlzRmx1c2hpbmcgPSB0cnVlO1xuICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNhbGxiYWNrID0gcXVldWVbaV07XG5cbiAgICAgICAgICBkbyB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKHRydWUpO1xuICAgICAgICAgIH0gd2hpbGUgKGNhbGxiYWNrICE9PSBudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBJZiBzb21ldGhpbmcgdGhyb3dzLCBsZWF2ZSB0aGUgcmVtYWluaW5nIGNhbGxiYWNrcyBvbiB0aGUgcXVldWUuXG4gICAgICAgIHF1ZXVlID0gcXVldWUuc2xpY2UoaSArIDEpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlzRmx1c2hpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNyZWF0ZUVsZW1lbnQkMSA9ICBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNsb25lRWxlbWVudCQxID0gIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIDtcbnZhciBjcmVhdGVGYWN0b3J5ID0gIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiA7XG52YXIgQ2hpbGRyZW4gPSB7XG4gIG1hcDogbWFwQ2hpbGRyZW4sXG4gIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgY291bnQ6IGNvdW50Q2hpbGRyZW4sXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG9ubHk6IG9ubHlDaGlsZFxufTtcblxuZXhwb3J0cy5DaGlsZHJlbiA9IENoaWxkcmVuO1xuZXhwb3J0cy5Db21wb25lbnQgPSBDb21wb25lbnQ7XG5leHBvcnRzLkZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbmV4cG9ydHMuUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xuZXhwb3J0cy5QdXJlQ29tcG9uZW50ID0gUHVyZUNvbXBvbmVudDtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG5leHBvcnRzLlN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbmV4cG9ydHMuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQgPSBSZWFjdFNoYXJlZEludGVybmFscztcbmV4cG9ydHMuYWN0ID0gYWN0O1xuZXhwb3J0cy5jbG9uZUVsZW1lbnQgPSBjbG9uZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ7XG5leHBvcnRzLmNyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50JDE7XG5leHBvcnRzLmNyZWF0ZUZhY3RvcnkgPSBjcmVhdGVGYWN0b3J5O1xuZXhwb3J0cy5jcmVhdGVSZWYgPSBjcmVhdGVSZWY7XG5leHBvcnRzLmZvcndhcmRSZWYgPSBmb3J3YXJkUmVmO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5sYXp5ID0gbGF6eTtcbmV4cG9ydHMubWVtbyA9IG1lbW87XG5leHBvcnRzLnN0YXJ0VHJhbnNpdGlvbiA9IHN0YXJ0VHJhbnNpdGlvbjtcbmV4cG9ydHMudW5zdGFibGVfYWN0ID0gYWN0O1xuZXhwb3J0cy51c2VDYWxsYmFjayA9IHVzZUNhbGxiYWNrO1xuZXhwb3J0cy51c2VDb250ZXh0ID0gdXNlQ29udGV4dDtcbmV4cG9ydHMudXNlRGVidWdWYWx1ZSA9IHVzZURlYnVnVmFsdWU7XG5leHBvcnRzLnVzZURlZmVycmVkVmFsdWUgPSB1c2VEZWZlcnJlZFZhbHVlO1xuZXhwb3J0cy51c2VFZmZlY3QgPSB1c2VFZmZlY3Q7XG5leHBvcnRzLnVzZUlkID0gdXNlSWQ7XG5leHBvcnRzLnVzZUltcGVyYXRpdmVIYW5kbGUgPSB1c2VJbXBlcmF0aXZlSGFuZGxlO1xuZXhwb3J0cy51c2VJbnNlcnRpb25FZmZlY3QgPSB1c2VJbnNlcnRpb25FZmZlY3Q7XG5leHBvcnRzLnVzZUxheW91dEVmZmVjdCA9IHVzZUxheW91dEVmZmVjdDtcbmV4cG9ydHMudXNlTWVtbyA9IHVzZU1lbW87XG5leHBvcnRzLnVzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyO1xuZXhwb3J0cy51c2VSZWYgPSB1c2VSZWY7XG5leHBvcnRzLnVzZVN0YXRlID0gdXNlU3RhdGU7XG5leHBvcnRzLnVzZVN5bmNFeHRlcm5hbFN0b3JlID0gdXNlU3luY0V4dGVybmFsU3RvcmU7XG5leHBvcnRzLnVzZVRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uO1xuZXhwb3J0cy52ZXJzaW9uID0gUmVhY3RWZXJzaW9uO1xuICAgICAgICAgIC8qIGdsb2JhbCBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gKi9cbmlmIChcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXy5yZWdpc3RlckludGVybmFsTW9kdWxlU3RvcCA9PT1cbiAgICAnZnVuY3Rpb24nXG4pIHtcbiAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wKG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgXG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBpc0Jsb2IgPSBmdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBCbG9iO1xufTtcblxucG9seWZpbGwuY2FsbCgodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKHdpbmRvdykpID09PSAnb2JqZWN0JyA/IHdpbmRvdyA6IHVuZGVmaW5lZCB8fCB7fSk7XG5cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICBpZiAoISgnbmF2aWdhdG9yJyBpbiB0aGlzKSkge1xuICAgIHRoaXMubmF2aWdhdG9yID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIHRoaXMubmF2aWdhdG9yLnNlbmRCZWFjb24gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aGlzLm5hdmlnYXRvci5zZW5kQmVhY29uID0gc2VuZEJlYWNvbi5iaW5kKHRoaXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRCZWFjb24odXJsLCBkYXRhKSB7XG4gIHZhciBldmVudCA9IHRoaXMuZXZlbnQgJiYgdGhpcy5ldmVudC50eXBlO1xuICB2YXIgc3luYyA9IGV2ZW50ID09PSAndW5sb2FkJyB8fCBldmVudCA9PT0gJ2JlZm9yZXVubG9hZCc7XG4gIHZhciB4aHIgPSAnWE1MSHR0cFJlcXVlc3QnIGluIHRoaXMgPyBuZXcgWE1MSHR0cFJlcXVlc3QoKSA6IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICB4aHIub3BlbignUE9TVCcsIHVybCwgIXN5bmMpO1xuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0FjY2VwdCcsICcqLyonKTtcblxuICBpZiAoaXNTdHJpbmcoZGF0YSkpIHtcbiAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XG4gIH0gZWxzZSBpZiAoaXNCbG9iKGRhdGEpICYmIGRhdGEudHlwZSkge1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBkYXRhLnR5cGUpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB4aHIuc2VuZChkYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBWUFBQUJYQXZtSEFBQUtSR2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFTQTJkbG5kVUZOY1h4OS9NYkMrMFhaWWlaZW05dHdXa0xyMUlsU1lLeSs0Q1MxbldaUmV3TjBRRklvcUlDRllrS0dMQWFDZ1NLNkpZQ0FnVzdBRUpJa29NUmhFVmxjekdIUFgzT3lmNS9VN2VIM2MrODMzM25uZm4zdnZPR1FBb0FTRUNZUTZzQUVDMlVDS085UGRteHNVbk1QRzlBQVpFZ0FNMkFIQzR1YUxRS0w5b2dLNUFYell6RjNXUzhWOExBdUQxTFlCYUFLNWJCSVF6bVgvcC8rOURrU3NTU3dDQXd0RUFPeDQvbDR0eUljcForUktSVEo5RW1aNlNLV01ZSTJNeG1pREtxakpPKzhUbWYvcDhZazhaODdLRlBOUkhsck9JbDgyVGNSZktHL09rZkpTUkVKU0w4Z1Q4ZkpSdm9LeWZKYzBXb1B3R1pYbzJuNU1MQUlZaTB5VjhianJLMWloVHhOR1JiSlRuQWtDZ3BIM0ZLVit4aEYrQTVna0FPMGUwUkN4SVM1Y3dqYmttVEJ0blp4WXpnSitmeFpkSUxNSTUzRXlPbU1kazUyU0xPTUlsQUh6Nlpsa1VVSkxWbG9rVzJkSEcyZEhSd3RZU0xmL245WStibjczK0dXUzkvZVR4TXVMUG5rR01uaS9hbDlndldrNHRBS3dwdERaYnZtZ3BPd0ZvV3crQTZ0MHZtdjQrQU9RTEFXanQrK3A3R0xKNVNaZElSQzVXVnZuNStaWUNQdGRTVnREUDYzODZmUGI4ZS9qcVBFdlplWjlyeC9UaHAzS2tXUkttcktqY25Ld2NxWmlaSytKdytVeUwveDdpZngzNFZWcGY1V0VleVUvbGkvbEM5S2dZZE1vRXdqUzAzVUtlUUNMSUVUSUZ3ci9yOEw4TSt5b0hHWDZhYXhSb2RSOEJQY2tTS1BUUkFmSnJEOERReUFCSjNJUHVRSi83RmtLTUFiS2JGNnM5OW1udVVVYjMvN1QvWWVBeTlCWE9GYVF4WlRJN01wckpsWXJ6Wkl6ZUNabkJBaEtRQjNTZ0JyU0FIakFHRnNBV09BRlg0QWw4UVJBSUE5RWdIaXdDWEpBT3NvRVk1SVBsWUEwb0FpVmdDOWdPcXNGZVVBY2FRQk00QnRyQVNYQU9YQVJYd1RWd0U5d0RRMkFVUEFPVDREV1lnU0FJRDFFaEdxUUdhVU1Ha0Jsa0M3RWdkOGdYQ29FaW9YZ29HVXFEaEpBVVdnNnRnMHFnY3FnYTJnODFRTjlESjZCejBHV29IN29ERFVQajBPL1FPeGlCS1RBZDFvUU5ZU3VZQlh2QndYQTB2QkJPZ3hmRFMrRkNlRE5jQmRmQ1IrQlcrQng4RmI0SkQ4SFA0Q2tFSUdTRWdlZ2dGZ2dMWVNOaFNBS1Npb2lSbFVneFVvblVJazFJQjlLTlhFZUdrQW5rTFFhSG9XR1lHQXVNS3lZQU14L0R4U3pHck1TVVlxb3hoekN0bUM3TWRjd3daaEx6RVV2RmFtRE5zQzdZUUd3Y05nMmJqeTNDVm1McnNTM1lDOWliMkZIc2F4d094OEFaNFp4d0FiaDRYQVp1R2E0VXR4dlhqRHVMNjhlTjRLYndlTHdhM2d6dmhnL0RjL0FTZkJGK0ovNEkvZ3grQUQrS2YwTWdFN1FKdGdRL1FnSkJTRmhMcUNRY0pwd21EQkRHQ0RORUJhSUIwWVVZUnVRUmx4RExpSFhFRG1JZmNaUTRRMUlrR1pIY1NOR2tETklhVWhXcGlYU0JkSi8wa2t3bTY1S2R5UkZrQVhrMXVZcDhsSHlKUEV4K1MxR2ltRkxZbEVTS2xMS1pjcEJ5bG5LSDhwSktwUnBTUGFrSlZBbDFNN1dCZXA3NmtQcEdqaVpuS1Jjb3g1TmJKVmNqMXlvM0lQZGNuaWh2SU84bHYwaCtxWHlsL0hINVB2a0pCYUtDb1FKYmdhT3dVcUZHNFlUQ29NS1VJazNSUmpGTU1WdXhWUEd3NG1YRkowcDRKVU1sWHlXZVVxSFNBYVh6U2lNMGhLWkhZOU80dEhXME90b0YyaWdkUnplaUI5SXo2Q1gwNytpOTlFbGxKV1Y3NVJqbEF1VWE1VlBLUXd5RVljZ0laR1F4eWhqSEdMY1k3MVEwVmJ4VStDcWJWSnBVQmxTbVZlZW9lcXJ5Vll0Vm0xVnZxcjVUWTZyNXFtV3FiVlZyVTN1Z2psRTNWWTlRejFmZm8zNUJmV0lPZlk3ckhPNmM0am5INXR6VmdEVk1OU0kxbG1rYzBPalJtTkxVMHZUWEZHbnUxRHl2T2FIRjBQTFV5dENxMERxdE5hNU4wM2JYRm1oWGFKL1Jmc3BVWm5veHM1aFZ6QzdtcEk2R1RvQ09WR2UvVHEvT2pLNlI3bnpkdGJyTnVnLzBTSG9zdlZTOUNyMU92VWw5YmYxUS9lWDZqZnAzRFlnR0xJTjBneDBHM1FiVGhrYUdzWVliRE5zTW54aXBHZ1VhTFRWcU5McHZURFgyTUY1c1hHdDh3d1Jud2pMSk5ObHRjczBVTm5Vd1RUZXRNZTB6ZzgwY3pRUm11ODM2emJIbXp1WkM4MXJ6UVF1S2haZEZua1dqeGJBbHd6TEVjcTFsbStWekszMnJCS3V0VnQxV0g2MGRyTE9zNjZ6djJTalpCTm1zdGVtdytkM1cxSlpyVzJON3c0NXE1MmUzeXE3ZDdvVzltVDNmZm8vOWJRZWFRNmpEQm9kT2h3K09UbzVpeHliSGNTZDlwMlNuWFU2RExEb3JuRlhLdXVTTWRmWjJYdVY4MHZtdGk2T0x4T1dZeTIrdUZxNlpyb2Rkbjh3MW1zdWZXemQzeEUzWGplTzIzMjNJbmVtZTdMN1BmY2hEeDRQalVldnh5RlBQaytkWjd6bm1aZUtWNFhYRTY3bTN0YmZZdThWN211M0NYc0UrNjRQNCtQc1UrL1Q2S3ZuTzk2MzJmZWluNjVmbTErZzM2ZS9ndjh6L2JBQTJJRGhnYThCZ29HWWdON0FoY0RMSUtXaEZVRmN3SlRncXVEcjRVWWhwaURpa0l4UU9EUXJkRm5wL25zRTg0YnkyTUJBV0dMWXQ3RUc0VWZqaThCOGpjQkhoRVRVUmp5TnRJcGRIZGtmUm9wS2lEa2U5anZhT0xvdStOOTk0dm5SK1o0eDhUR0pNUTh4MHJFOXNlZXhRbkZYY2lyaXI4ZXJ4Z3ZqMkJIeENURUo5d3RRQzN3WGJGNHdtT2lRV0pkNWFhTFN3WU9IbFJlcUxzaGFkU3BKUDRpUWRUOFlteHlZZlRuN1BDZVBVY3FaU0FsTjJwVXh5MmR3ZDNHYzhUMTRGYjV6dnhpL25qNlc2cFphblBrbHpTOXVXTnA3dWtWNlpQaUZnQzZvRkx6SUNNdlptVEdlR1pSN01uTTJLeldyT0ptUW5aNThRS2dremhWMDVXamtGT2YwaU0xR1JhR2l4eStMdGl5ZkZ3ZUw2WENoM1lXNjdoSTcrVFBWSWphWHJwY041N25rMWVXL3lZL0tQRnlnV0NBdDZscGd1MmJSa2JLbmYwbStYWVpaeGwzVXUxMW0rWnZud0NxOFYrMWRDSzFOV2RxN1NXMVc0YW5TMS8rcERhMGhyTXRmOHROWjZiZm5hVit0aTEzVVVhaGF1TGh4Wjc3KytzVWl1U0Z3MHVNRjF3OTZObUkyQ2piMmI3RGJ0M1BTeG1GZDhwY1M2cExMa2ZTbTM5TW8zTnQ5VWZUTzdPWFZ6YjVsajJaNHR1QzNDTGJlMmVtdzlWSzVZdnJSOFpGdm90dFlLWmtWeHhhdnRTZHN2VjlwWDd0MUIyaUhkTVZRVlV0VytVMy9ubHAzdnE5T3JiOVo0MXpUdjB0aTFhZGYwYnQ3dWdUMmVlNXIyYXU0dDJmdHVuMkRmN2YzKysxdHJEV3NyRCtBTzVCMTRYQmRUMS8wdDY5dUdldlg2a3ZvUEI0VUhodzVGSHVwcWNHcG9PS3h4dUt3UmJwUTJqaDlKUEhMdE81L3YycHNzbXZZM001cExqb0tqMHFOUHYwLysvdGF4NEdPZHgxbkhtMzR3K0dGWEM2Mmx1QlZxWGRJNjJaYmVOdFFlMzk1L0l1aEVaNGRyUjh1UGxqOGVQS2x6c3VhVThxbXkwNlRUaGFkbnp5dzlNM1ZXZEhiaVhOcTVrYzZrem52bjQ4N2Y2SXJvNnIwUWZPSFNSYitMNTd1OXVzOWNjcnQwOHJMTDVSTlhXRmZhcmpwZWJlMXg2R241eWVHbmxsN0gzdFkrcDc3MmE4N1hPdnJuOXA4ZThCZzRkOTNuK3NVYmdUZXUzcHgzcy8vVy9GdTNCeE1IaDI3emJqKzVrM1hueGQyOHV6UDNWdC9IM2k5K29QQ2c4cUhHdzlxZlRYNXVIbkljT2pYc005enpLT3JSdlJIdXlMTmZjbjk1UDFyNG1QcTRja3g3ck9HSjdaT1Q0MzdqMTU0dWVEcjZUUFJzWnFMb1Y4VmZkejAzZnY3RGI1Ni85VXpHVFk2K0VMK1kvYjMwcGRyTGc2L3NYM1ZPaFU4OWZKMzllbWE2K0kzYW0wTnZXVys3MzhXK0c1dkpmNDkvWC9YQjVFUEh4K0NQOTJleloyZi9BQU9ZOC93UkR0RmdBQUFPWjBsRVFWUm9CYTBhQ1hSVVJiTDZ6NS9jTndsSkNFbElJQW1FU0NBQndxRkdSZVFHWFZrZm91NVRGQkQxQ2JvcVR4ZDNmU0t1K2xDVVEzVFZSVVJBMEVWUUFRbXdHem1FUUNBZ2dSd2s1QUpDN3BCcmtwbk03NjM2bWQ4ems4emtRRHZNKy8yN3E2dXJxdXZxK2pET09memV0aU5yVnFMRTlUTkJKNDJTT01ReHBnc0dZTjZJMTgyQzI4QzVVczlCS1FYZ2x4VGVmc3lvdE8xL05Qbm44dCs3Tjd0VkJuYWNuVG1NTWYwU0haUG5NaWFGOXBVUTNGZmgzSnpKb1gxSHE2NzEwOGRHSEdqdUt3NkM3ek1ETzg3TVRwSWszVnVNeVZNWnJ0YzIxVXZ1NE9jeEJIemR3c0hMTlJSY1pDODhFRmQxMm1SdUFZT3BGcHJiS3FDdXBRQWFXc3NBVDBOYlNzOTZNemQrWVRLYTNud2taVitEN1VSUC9WNHpzTzNDVEgvWnFQdFFrdlNQQVdNcTRTNDZEd2ozdndNRytrMkFmcDV4WEdJNndWQjNHeHZOemJ6OFppWXJxenNHRlkzbmtSbE5qWlZxeFd4OC9hSGtIei9wYnIzdFhLOFlRS25mSjBueTE2Z3FRYlRZWGZhSHVPRDdJYXJmWks2VFhIcEZ0TzJtdHYzR3R1czh2L0lIVmxMelB6d1RzenJGbGZhMFZ0bndHS3BWcFMyc28zNlBESHh6ZHVack91YnlKaTdXb1lRaHR2OXNpQStaaDRUckhSS09CZ28zRGFXb010WFExbjRUWk1rRDlEcFA4SFdQQUhkOWdDTWExTEVHUXlrL2UvVXpWdFYwMFFMRHk4em10am56UnUvTGNyb0lKN3BsWU1lWldhZ3k4bEpDNE9rU0RPT2pYZ1ovajhGZDhOVTA1OExscXIxUVduc0VpQUJpd2xIemNBbUVBYjVqSWJyZlpJZ092RTlsekI2T1EyN0Y5NUI5ZlJzcWxSblF6cHNWeFRoejN1ajk2Zlp3MWplbkRPek1tdlVSQ3YxNUFnM3lTb0NKMGE5eUY1Mm5uZFNMYWc3QjZaSjFxaDViVVZwN2NmM3ZoN3pLM2RZQm14NmRTa0xvZkVnS1h3UWVMcXBtaXRuS3hndHd2T2lmUU1hUFhEU2JlY3ZVaDVNUEhoTUFOaDJIREd3L08zMlpCUElhZ2d2elRTSEoyK2w2dmFFSS9wdi9LbHlyUDZtaUlnYXJtcklGV2ovM0tKU3VPOHhNK0FJTzV2NFZqT1ltcUdyTUZwNG5NaUFWU21wL1VlRlJLREIyMERJWU9mQkpkR21Td0hIVFVBenBsMStIVmxSRERxeEdrWlR4ODBmK2VGa0FXRHBkR05oK2VucXFwSk1QNDd3dXlDc2U3b3BaWmVkZDh2Q0lpZmgycFZYZ3VtL29HcWhHTmZKMWo0VGpoYXRVTnpvbGZqMEVlZzVGVzZpQkF6blBRMW5kY1pnUXRSeUo0UkFUTkFPK09wVXExbE5ub045NG1JcHIzUFg5eEhoTmN6NzhjbmtGbUhBdmhac3Z0Zlhybi96NG9FM1dqUkhTeWpLK2JNMFk1OE1rdGhuUFRlZUZPbi83NEJWMnhHY1VyNEcwM0JjRThlVG5oNGZPVS9VYVZRd2FXNitodEp1aEZuMTlVWFdhK2lTREp1S3A1VlorRDZNam5nRWY5M0NZTWZ4ZlFDZWx0YXYxSjJEbjJmdlJBUlJyUStpYVk5WFRvUUdKU2ZFdTFSV3FWZ2dBR3JkNzBmdS9oKytSTkpZUzlTSzQ2THlFenA4cy9nQk9sYUJaV0JwdHJpZ21xR2c0QitVTlp3SGRJYmxWOEhZTFV5R3Ftbk5nVytZVU9GbThHdkY0SWdFeWpFSTFLYWxOeDJCMlJUMUZVa1hiUmdGdTEvbDVHT2l1aW1HS01YUmlhTkNJZ3kzYWxqbDFySmpFamxDaHJSbjN4a3V5eTNta1dCNGFQQmQxY29HQXk2bjREeHhDWGNZY0IxVnFKVnkvZVJxUlRvZWZzaGVxTVBFaEQ2bmVoendRRWVyTUMzVWdaREFtOGpuVitNVUduVG9CR05FZlN0b2p2SlJaYWVON0x5NW1MY1pLd24xNi91ZzB3WVE0QWFhVFZxTHF5SzU2UC9RT0QydWhVWlZXZXY0S2RRdk1YYUFXOVpKMDNoODNDZkVacVk1aklGSVpvSmZ1aVNjSURwbWxIMVBIYVNNVkpBUFdHcW9xRzRYZWl1d0hoVGhtYStha2FkcWN5c0NXTTVNajhEQm1VMkkzREtVdjY5d3Rxc1B4cUplanpodFVlSkpNVFA5WmFsNVRqMnJnNXg2TmdjcE4ySVNHdEtjbkNhS25sbHV4UzNncWdnMUhWYUw5aUVZSmRLOW82MVVHR0ZlZXdRR1pYTitRd0dsQytnVlYrMVIxSVdCU0RaTE1kMWtQd3BHQ2Y4Q0Y4cTBZZEhiMW1YaHRZdzFuYlA4NU1DRjZPUWEyeWJaVGF2OVk0VXFVdVRYcEd4YjhKeHhYTTZmVUwwL2VQWWlBT2xTSXN3ZG9PTkkvMVViNmdFZTlrV0RVbGpEZ0VYQ1ZmZFQrNWNxOWdNbVlaZVpXSGd5R29HRStNdVlnVEJuMkVTU0hMMEd2OUJtTWkzckpEaGtKckxEcVp6R0dpU09YTVlGRUNUTlp4eGJRaExRMTQ4NTQxSmRZUUN1UHdBQ2p0UnNOV1dwd0N2VWREU2tVYU1JV3dJaXd4eUhNTHdXWE04eHorcFQxYW1oVjEvbmd5SjB3TFg2RG5Sc2xnS1R3eGFCamVnRkxuZXp5YmVLZEVzZUJ2dVB4RUJUNk40VW1KRE9USnBIMEplWUt3ZDRqaFBya1YvNm9MaXkvZVViTmd5aElvWEVqbkF2cVljODZMSFlWSGFaNnRvZEg3OGU0TVVhTTJuWW9XU1JQWjlzb2h0QmRRbXVoUGttcUVtRzhTdHJ5VzZLbmhOSWZoeFJCb05kUVdtd3hYb0RTdW5UTEdxNjZzMXgwcFhRWkthczdxdUhxOVpQeW5ta1laZThZL0hmVjZKMHRKTlcwamZBZGNCeHBPU0tXQlBza29yeFJ6cHpMamZWS29vd3pNWFFDL2g1UkFxaTF2VjUxbjlyQXIwWHZxbEhXbWVRME9FZFB5a0RualBoYVRTc2N6ZE1ZSlczbnIyM0NRTG5XSVFnRlMwb01xV0hpaC9ydnJxNlJHQjh1bzVXSGt5MTd1ZzRRaThsRjJqWktFYWhSQU90TDgwYWNEeVJ1VjNNa1orc3VsbS9IYVAwQnRCaXJuSUZBVFhPZTNad1BYbHNwOThJd0hJMG53REI3NHFqbjFwU1dRdnJ2YlpRaWQwYzhwUXNIYzE5RW9aenFjYXRtak1DMnpWV21nZ2NHTllBQUdYT01EclBuUXYzQmpEbU9vMGJKMitEQXFlcUZ2YWo2RURRYkt4eUJxVFl6WjhRV3A1Sy9VbjBRRHVhOUNNYjJSb2ZyT3cvU3pjNjI2WFZlYUFJWUh4ajN3QlBvY0R5eTVDSmdUTWhBZ2NGZHZGTkhyM09EWlNuYllLRFBNSFY4WXZRSytPN1NTc2k0OXIwZEhFTzVQREhxUTZjNm4xNjhHWGJudmRkQkFOanZZWWZJNXNYUFRLWnFiWmdiNFl1RmJ1VEVnTzdIdmRWczlldFVFdEZMOW91U1E2WUs0Z21WQ3hyUy9OdmVobER2SWJBMzM1cmxwa2IrQlJLRHUwWlZXdk56d1hvNGRPVlRrQm5HVC9yMXNybktXbjJzWTRGQ2NRRC96R1l3eXZpa2lwbTc3VEY1NDExQTd1U1B2VndDSEc1Mzk2QUZHRlRNa0ZhNEFVSzlZbUY2ekRLSGNFZEx2b0wwb3MrNzRIVUkzR25RejdXLzNVaUxxVUk5UWNaNGhjeVpVb0t6b1ZnVkVFRDl2T0xRWDlzSGxNczF4OUJITDhWeHE2cHBDKzZKWGdqVkxjVXdNV0krbGk3c0l5bkI1RlNsUTFyQjJpNDR0ZlU5UFlNOEkrMUFHZ3prRlZHRkdCUmpLVlBKSVcycWE3RmVOOTFrWHdoMEMxV2xSU2RCdjRiV2N2ajYzUFBRYUt5MlE2YTkvRG5oTFFqekdhNjlpbWROU3huc3Z2UUdwZ2g0eTdiZzZ1c3p5aTlKNEVQSHdkdFEzWWxtUlRIblNnb29weW14cU1CTHQ1bWJhRnh0Zy94SG9zUmt1OS9WaHQvZ2k4d25vS3JaUGs3UUFqTGV6bzA4eFo2Y054Q3YwUTVQWjd6ZHZldnhST09DN2hHb0t4cnd6a1VlaUhPVFVXODRMU2tLcEpGQlVNNWYyWEJPVUpFWU1zdWh4RnBOOWJEendrdm9RcTM1aWNEZXFaTlZ2aHNxbS9JZDR1bnRLWVQ1eElLM0t4YTdMYTJzL2poU1MzOUsxZ3ZqeXd6U29nbVpoWGhKeUNlZEtxdytvTUZCVkVBS0JIcUVxVWRQeDIvN2F6SFd3UDc4ZHdTc280N0IxQURIaWorM1cyZUxvN2Y5cEFFUENQU2tJUjNsR0ZJVXZwc21MTDdNdkkyT214akFaRXFvMGZqd1IxWERJNFB1L0N1cno0VGlPdWRSOUZUWkZneUlyVjNXZGNiVDNidS9leWpjRmpKVE1IQ2xPbzBaTVkwbldybE85NDFnUU9HbVRYZ29KaXBBNVZYc0VtbzBQR1FHQkh0R09aWGl5ZEl2QlhMYkRwVldMbGJzYzdxdXQ5Sy9jOUJDdEN4cnZMaHdiYk9tUG1sUGpjMG9FZ3dzbXBoTlBuUW5EWnk3dXNubUZCaE1qbmtGZzVvTEVxUHI4cXRwTGtUang2U3FVOHVyUEl4U2F1OEM3d2lIczdIQi9tTWhObWlTd0l6U2h4cUxwMFFWZVYrYkVPd3hTVnFGUjJPaXhDbXpaSU00aFNDTUNSTXdXRG1UMnJuckt0OGFQbVRlQ05rMzlqaUZkNGJIZHR6WE5RanVqWDFONEtTeVNrYkptZzdWNGNxUlJSUE9wV21UZ29HbnhwM0pRY05ZVDhhY2pSZjJTcHRhWjJMb1hFZ0ltZTZRcU5LNkREaVUvelplT2pMZ1NzMFIrT25TY21ocXUrRVExcFpJWjMxUHZTL01pSDhiNzk5ZUdvMXdvbWcxNjBqcHVjS1llYW1Zd0k0b2JOSGd2NDhQOVRhQi9qeDJveWlYZjNEa3R4d3Y4dUkwZmkzYWdPVkI2eVdiMXZ5UmpZaWVObXdWQkhoRUM3UkZOWWZWY2lZSkZ0dnF4Uk12dkN3bXNTTk9nQVlYVE14dHhBVHBVUXdVN1kyWXJ4L0lXY3JvK0xRRkU2S2VoWlRJSnpFemRjVzdNWnJYSC9nTFJHY3hKMkd0SGZGVTZUdWN0eHhwcHpzNHoySnVybGE5c2hCbGR3SWFvWjhjalYrQzVxK1d6eUlEN3FiU0J4WjVaWEVTdFhoak8xRzBEbzFLZFFUYXNsdDZVaFVpUG1RMlZqM20yMTNvcTV0eVllL0ZwN1FML1EyUVhjYy9QUzZydVBNbURoa2dvRStQeGIrRG9rZjJNZFB6U2NiUzl3WTdkYUx4SzNpOGw4cjN3RTJiWWl5Tjk2WmhpUVFpL0ZPd1ZETWZxQkp1MitpV3RqL25PVEMxTjlGd0kyUEtQWXNuNWpvc1JEbGxnRlp1UERyMFBYeW9PdWVEMzdqdWpWME53VDRqYU1xdTBmMjBzUG93VkRmbFlkSjNIZWVFMXRuQlVaWGFIL1Y3Z0c4eTN1d21vU3A2Mk0zVEMxM3VUeGE5YjZteHNqcE0xbVlzVHMwNTBRWFFNdEF0QXdTejhVamNzM2piL0JDN3NsWWlUNDVZd21WSnE1OWFNRmtlR082eGduRVZ2d2xYWWVYQUFQaU5EVDJLTi9pNERlejJJMTlkU3hGUHYvdzNWdDV3UmtONFJUS2I1eng5VjRIMTA0ODJZL1Bza1FHQzNYZzBKaFZMWDV0UnNwSDA3b1hKMWNpQmkxQjM1enBsaE9CNjAvQURDRDlUOWpHakNyZFcyY2J6KzBGaWJvOHZ1ZjIzdXA1dzlJb0JRckl1SThaSDE4YmZSZVFMOFZXOTdianAvV0Z3MERTTW1MUFFUcExzakxDN2pWdE5kUnkvYUxMY3lsMXd0ZTRFS2h5bXh4MnRBcDNIc21mdktGRHpIRzJ3dTJldkdkQ1FiRGdlTTV5YmxUZlJKVkdsU2JoaHFyNEY0L2VDZmg1eDZuODNjTVZ2d2xSNkozc3dZbFdCTXRoYVF3SFdjM0tnRm0zRmhtaUNxVUh1MzJmbXhuWFAzRldwV3E2MlgwL1BQak9nSVZ4L1pGQVUyc1RUZU1HZWkvSFFHbmswZ0o2ZlZCYzVpb0xZcFBjMGZMc28rVnBMejB1NlF0d3lBN2FvMXFaSEpPZ2tPVlhoa0lJWDdWZ3NYUkpEdnZpakN6UzVKQ3Jzb0pTaGdIRzR4RG43VlpiTmg1ZmNYdEtqanVPNmJ0di9BU3VIN1NzSTBzVldBQUFBQUVsRlRrU3VRbUNDXCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNCOG05VXpiY2dBQUF1MUpSRUZVV01QdDE3OUxHMkVZQi9EbnZkeGR6dVo5a3pOTm1xYjVIUWVsdENxMFdBUUZFUmM3UkxDYldFb1hsdzZLSGJRZEN1SlNFZndQQk5GWUp4ZGQwc0hFTkpRTXJXQ3RwVjFLYUVOSXBWZUQ5NkpwazF6ZURtMlZsRVJCeDl3REx4eTgzT2UrdlBmeS9nQTRwZWJtNXZwblptWkNjTUdxWjRjL3JkUHI5ZDVGQ09VQllPMGlRZXJaNFdwMWpJNk9OanFkem9ESDQ3aytOalptUDIrSWVuZHF6bUNYeStXUlpjc3RBSFJJQ0xrR0FOL1BFNlRlblpvRDdQUDcyd2t4WDJXTUhiVzB0TndBZ0hmbkNWTHZEajh4TWRrdVNVWk5WVldOTWNiSzVUSXJsOHRTd0Ivb2xCb2tBRUNYZkQ1Zjk4akl5Q2VNOGFHbWxaSEJ3Q0dyMVNwU1NybE1KcE1KaDhON3VsUGQ0YTNXeHY2ZW5wNkhGb3ZsQ21Qc0Z3QUFRa2dqaEZoRlFRUUdESUxCNElQeDhjY2h4c29HQUFER21GRlY2ZWRvTkxxMnZiMGRCb0E5M2FudUdHUlpmbzB4VHZuOWZvL0Q0YmhKQ0RGaGpJbFJNdklJRUFBQUNJTEFFNElKeHNSa01wbE0rWHcrRVl0RkoyT3g2SXRJSlBJREFFQjNxanZIYThYdzhMRDNWVHcrclNqS2thcXFqRkxLS0tWTXBTcWpWR1ZVcFV4UmxIUWlrWmdlR2hvSzFGcWJkS2ZTTWZ4NzJOblpPU2dVaTI4SklZcmI3ZTdsZVo1SENNR2ZCbEFzRmorc3I2OC9YVjFkWFFxSHc5OXFCZEdkU3FmaUhMeTh2RXozOTNNZk5VMER4UDE5R1JCd25BR0twWktxS0VwMmNYSHg0S3dkVm5kcVhEUTZPenVOYnJlclRSUkZua01jYUpvR0phMEVDQ0VRQmVGT1cxdDdzS3VyeTNSV0VOMnBjUTZXWmRubTlYcTdCVUV3NUhLNVdDd1dXOEVZWCs3bzZMaEhDTG50OS9zNmJEWmJBZ0JTcHdYUm5ST25ZZ2IzOWZVRnpHWnpkenFkanF5c3JEeUx4K1B6QXdNRHp4Y1dGaDZsMCttWEdPUGUxdFpXMjFsL1duZE82bmlUYTI1dTVrT2gwSDFOMDc0c0xTMDltWnFhZXIrMXRjVUFBRFkyTmpLU0pFVWREb2RERkVWbktwVjZrODFtUzlWQzZFNmxjenpBZzRPRERSekhXWGQzZCtkbloyZXovMzhnbVV4U3U5MmVMQlFLMXFhbXBxK2JtNXMvcXdYUm5Vcm5OOXdWQTVMbndXNk5BQUFBQUVsRlRrU3VRbUNDXCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNDQWtRNXlRWWdBQUJUZEpSRUZVV01QbGxtMU1VMWNZeDU5ejMzcHA3eTIxdEJaSzZRc3N3RGFsSkV2bVdDQXhpbkhPQlJhV2JCbGhNVG9sTXliSzlBTzZHUXp4eTZhSkgvYVNaV3htQktyc2kyYURLR0JTYUVYRkJVRUhndWpBWm5aUVNJdWw5d3EwdmIzMzdNT21DMFlrd1UralQzS1NrenpKNy96eXo1TnpEb0xuMUxVTEovWjRCOExSTkgyS3EzcGZIWVlWMXFsVHA3Wkpra1RYMXRhMndndlUvNUZEUFErZ1Y5OTlQOXVSTy9wQlZXM3ppNGhZcmRhM0VVSUxBTkNhYkJ4aXFjYmxDOTlhZExwWW50MmFtbjdzMk9lNUs1VTRjT0RBbW95TURFZFdWdFlyTlRVMXhtVGpMRG5CQmk2eVhhVmEwS1lDYlRZYTB6Y0F3TDJWaUdSbVptYnBkS212QWFBNW51Zk5BQkJNSnM2U0FhY1F3YTBNclFVMVl0SU1CdldLSjlobXR4Znl2RFlkWXp5Zm41Ky9EZ0IrVHlZTzFmbjFsdDJTK0lCVUZKUkFDSUVpeTBDcGRUUVJ2YnVaaEF3MXExS2J6R2JEdWwyN2RsVUVnOEVwaEJCRkVBU2lLQXBvbWs1dGFXbHBCUUNvclQxY3lMSXFXUkFFR1dPTUZVWEJpcUt3RHJ1amlFMWhBUUNwYlRaYlNYVjE5U2pIY1hPeXJDQ1NKSkJlcjJkRVVTUW1KaVltWEM3WDlHcmpVQmFINDFCR21qby9oVk9Eb2lBQWpFQlJKRkNoR1FETUFjdW9kWGFiN1oyYW1rODN4MkxSQkFDUWlxTElnaUJNWHI5K2ZmenhCYS9YcjltMmNlUEduYW1wcVdzeHhqRUFBSVNRelBPOG5xRVp3SUFoT3p0N3g4R0RoOG93VmtnQUFJeXhTaERFOGE2dXJ0WmJ0MjY1QUdCNnRYSElQWHNQL3pBL05aS2xsa1lLZURhSWFEd0xESjRCVXBFQWsyWlEyRHhndEM4UmEvUjYxVnFqTVVXcjFkTFJhUFRhd01EQWQyNjN1MjVzYkV3QkFORHBkRmM1anZQWjdmWXNrOG0wbnVkNURjZHh2SXBWVVFnUUFBRFFORTN4UE1kekhLL1JhRFNhaFlXRm51N3Vyc1BkM1Yxbk96bzZabFlqNTc5ZlEyUGxlLzVmUzhJSlR3N0dWd3N3dmxLQXBjRlA4UHhmN1ZnUUlqZ1NFUktUazVQamx5NWRhdDYvZi8rYlM5MU5WVlZWMXN0ZTcvRlFLRFF2Q0FJV1JSR0xvb2dGVWNDaUtHQlJFSEVvRlBMMzlQUWNyNnlzZEt4MkR2bDQ4OU12UTNmZUtxdHVTZ2d6cFRveW1FNG9HREJqQWF4NUdSVFdHaGZGUnplOVh1L0Y4K2ZQMXpjME5Jd3VKVEk0T0JpSlM5SU5udWRERm90bEUwVlJGRUlJL2xrQWtpUU50N1cxZlhidTNMbG1sOHMxdGRvNWkvN0JXeXVQQmhKTVRxYzg5d2h3TEFxRUxBRUNEQWhRQWdCbTQvSDRWRk5UMC9SeUwreVpNMmZFaHcvRGQyUlpCa1Q4S3dFSUNJSUVLWkVRUXFGUW9LbXBLWklNbkVVQkZ4VVZrU25SUDhwWlFnSkNpZ0tPUEFBcG5nQ0VRSzFpMlN5cjFlb29MaTdXTFNkU1ZGU2tzbGd5blF6RFVBUWlRSlpsU01nSlFBZ0JROU1ibk03QzdPTGlZazB5Y0JZRlhMZmpWU2N2M2M4R0pRRmllRTRhdVI4YjdyamkrMzVpS2pnRWdOTXlNODNwVHFkejNYSWlPcDNPWUxWYVMyaWFKc1BoY0hkYlcxdTF4K001TWpzN2U0T21hY0p1dDcxdU1CaldKZ05uVWNBWjZraVZYcG1nZzFOUlBFNjllL2FiL3ZYcnUzKzd0N2V6by8zRXlQRHdBR0RRT2d1ZHp1VkVTa3RMSFZxdHRzVHY5M2UwdExUVWViM2UwK1hsNVY4ME5qYnU4L3Y5blJ6SGJTb29LREFrQStmSkk3ZDd1NE1zY1N3MHhDU0NHYU5LOTc3eDhjL0grdnY3b2ErdkQ5cmJMdzdhN2ZhaGFEU2FHWS9IYytmbjU5MCtueS8yTEltOHZEeXFyS3pzSTFtVy8yeHViajVTWDE4LzFOL2Zqd0VBM0c3M0JNdXlYU2FUeWNRd1RJYlA1K3NMQkFLSjFjeDVFdkJYWHg2MUNZSGhMWFBwWlIrVzdQeXg3ZWtEUEI3UGRHNXU3czFZTEdZem04MmpQVDA5d3JORUtpb3FVZ2lDME4rK2ZmdjB5Wk1uQTAvM2UzdDdSYVBSMkJ1UHgvVTVPVGtQUEI1UGREVnovZ1lhMVQ0TGZzZHRXd0FBQUFCSlJVNUVya0pnZ2c9PVwiO1xuICBleHBvcnQgZGVmYXVsdCBpbWc7IiwidmFyIGltZyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFGZ0FBQUFRQ0FZQUFBQ1NucmcxQUFBQUJtSkxSMFFBL3dEL0FQK2d2YWVUQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFCM1JKVFVVSDRRZ0lDQ0VZZGVqZHBBQUFCUHBKUkVGVVdNUGxsbjlNVldVWXg3L3Z1ZWNjRHR4ejRISUZiZ2hjTG1CaFB3U01xV05Da2FPY2JhS3p0VVJKVnkzV2NnNUdiZjZvdWNnLzBybW96YlowV2ptNVNqbHR4bTBMVjhCRkpES2hFUERIU2tLOUlpQVhMcHdEOThlNTk1eTNQMHdMQzIzNkgvZmRudTJjOTlrKzU3UG5mZmVjQjdqTHVuSzYrc1hlazFWTDhZQ3J1cnA2MmM2ZE80dkRrY1BlTGFuN2Z5eUppSnc5QnVERWc0aFlyZGJuQ1NFK0FIWGh4bUdtUzF6cnFqTktacG9iSWR3b2NIWFU4dmNyVVY1ZUhwdVltSmlXa3BMeVdFVkZSWHk0Y2FhOXdTSC9VRmFreVd1bE9sSEhQZGNlQWRCelB5SkpTVWtwSmxOTUxrQW1KVW1hRFdBNG5EalQzbUNvZllzRlZvWEFxYnlCblhqdWZrODYxV2JMa2FUb2gwUlJUSnc3ZCs0VDRjWmgyL1lYTGZKNmVnV0ExUWdob0pvR1JvZ0R2SjByR1FxQUVMRGVVeVVOSDg0L1RVUGpCTVFBUWdnSU5BTVhOU3RVc09IblZnRFl0R2x6amlCRWFMSXNhNVJTcXVzNjFYVmRTTE9sNVFtUkFnQVNsWnFhV2xCV1ZuWlJGTVZKVGRPSndjQVFzOW5NSzRyQzlQZjM5OXZ0OXFHWnhtRmprekkzWmo1dVhCc3BSa0hYQ1VBSmREMklDRElFZUhVQVFHSUNrMnQ2NXVGVERNTUJoSUpoS0JTUGpCSEZ1Z2U0V1dDek9YWlpZV0hoS3pFeE1RbVUwZ0FBRUVJMFNaTE1QTWVEZ2lJOVBYMTlaZVZieFpUcUJnQ2dsRWJJc3RMYjJOaFkxOW5aYVFjd05OTTRobmUyZmVBWXVYeCtRbEM3OGlSaG1PZm9HSGc2Q29NZUFrSTNnOUZWd21NVUhOemc5RUhJTjRiSFJuelpiN05TNW51N3Y2Z0hBSmhNcGxaUkZQdHNObHVLeFdLWkowbVNVUlJGS1VLSVlBa0lBSURqT0ZhU1JFa1VKYVBSYURUNmZMNldwcWJHelUxTmpZZnI2K3RIWmlMbmRxLzQ1YXZYRnJ1K2Vhbzc1TXlndERXTDBsUHpwa2JyUEtvMlp0RGVJd3RhdWgxYmM2ZnJPYVdscGRhVHpjM2IzVzYzVjVabHFpZ0tWUlNGeW9wTUZVV21pcXhRdDl2dGFtbHAyYjVtelpxMG1jNHgzSHJZZS9SWFYxbFo1UkgzOWFFa2srRkdsb0ZTUU5OdWgrcjE0Nm92Zjgrb21ycit5UmMrdWpLZFNGZFgxN2dhRExaTGt1Uk9UazVld3JJc1N3aTUyYmNKRUF3R3p6a2NqcTNIamgycnNkdnRnek9kTTJXS2VIUkorWWd1NWRacGt4T0E2djg3Z240RWxBbEs0cC8rZW1ISm5vbDcvV0VQSFRxa2pJNTZMbWlhQnNMOEpRRUNoakVnR0FySmJyZDc0T0RCZytQaHdQblhtTWFQdDY4V21DQ2dCa0I5azREZkN3UUNFQmsvMGZxL0wvay9JMHhlWGw1RWNuSlNOcy96TEVNWWFKcUdrQllDSVFROHh5M0t6czVKejgvUE40WURaMHFCdStvL1Rvb0ovbFlJUFFSbGRCSm5CK2ZzUDN2TmN0ZzNKb05BUjVUU3Z2VHl1Wk9tZTRtWVRLWTRxOVZhd0hHY3dlUHhORGtjampLbjA3bGxiR3lzbmVNNHhtWkxYUmdYRjVjUURwd3BCYWJLcFdmTmVuL3M4S0EvY05tNHZuTCttNmRmejlsNGJ1MGxZZDM3bmhGTm14WDhZM1pndUx2Z1hpSkZSVVZwMGRIUkJTNlhxNzYydG5aYmMzUHpaeXRXck5oeDRNQ0JEUzZYNjRRb2lrdXlzckxpd29GaitPZExSWkZlSFZCSlZKOXg1ZW9GcGZ2c3QvWS9QZHJoTEY2Ky9BSTNlWDFaVUExSW54ei8vY2gwRXBtWm1XeHhjZkhMbXFaZHFhbXAyVkpWVmRYZDBkRkJBYUNob2FGZkVJUkdpOFZpNFhrK3NhK3Y3OHpBd0VCb0puTnVGL2pTbWVNSlF4ZWJDdWljZGE4dWVLbjZwenMvOFBtM0Y4Ky9zV1gzRHdQbkd4YTl1MlB2ZDd2M2ZSbjhMNUZWcTFaRk1neGo3dW5wK1d6WHJsMERkK2JiMnRxVStQajRObFZWelJrWkdWZWRUcWQvSm5QK0JIbFRJMmVnd2pFQkFBQUFBRWxGVGtTdVFtQ0NcIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFBUUNBWUFBQUNTbnJnMUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0UWdJQ0NJWVhzV09ad0FBQjBKSlJFRlVXTVBWMW45UUZPY1pCL0R2dTdkM0xNY2RkeHlIL0RnOE9FakJOSkV6ZFl5MTRhSTFXR3ZUb0RYVEpocXFvMG1ZcEU2VW1qK29xZFd4K2NmR0tlM1V0RlZqR2djd1dDYzZCcG9vcHVBaENsckFIeUJLakVqMDVJRGN3WEc3Y056dTN1N2JQNnltR2drWm5NbWM3OHc3czd2dnpHZWZmZmFaOTMwSXZtWmNPMTMyODRnbzhObFBicTdGZll5bWo5NTZ1ZUZNSUp4b2lhMHNYck9KVHRZcEt5dGJKTXV5dHJTMHRQcCs0dmsySGZickFEWGN0Q3dtTm0wWXdIMGwyS0wvOUJkWmpweXU1NHBLSys3SHNkdnRQeUdFakFHb2ZsQWNacnlGRyszVmNVWUxuUm5EZmVIeXRGWHBKaHZFOFkvK21tNDJpN21aZGxQSzVzMi96Wm1zczI3ZHVvVFUxRlRIMUtsVHYxdFNVcEwwb0RqalZuQWtQSkFYYXc3WnFVcWtZT0JHRG9BTGt3bkVhZ2crSFJNekZtK0NOaTBwS1dVMmdNdVRjV3cyMjFTejJUUVRJS05Hb3pFTmdPOUJjTWF0WUVnOVQzQ3NCRTRyNlRUc3lJOG0rNmRqR2Q5Q25UWWVlazZYYUxWYUoxM0JHWm1aTTR6RytCU0R3WkE2YmRxMFJ4OFVoMjNlWFRBN0ZPam1BRlloaElBcUNoak9Db1RPTFdFb0FFTEFoazRzcS92alk2ZHBKRWhBTkNDRWdFRFJhUFdKRWRlYS81d0VnTnJ0QzE2U2hlc2FWU1VSUWdoVVJRR3JOMnVaOEtkUGFaQ3E1MkwweVdscDFrZFhyMTY5MU9mejlSTkNXSVpoQ011eTBHcTFwcXFxcW1vQUtDMzl6UXlPaTFGNG5sY29wVlJWVmFxcUt1ZklkTXpoWWprQVJKK1JrZUVxTGk3dU1oZ01vNHFpRW8yR0lSYUxSU2NJQXRQYjI5dGJXVms1RUMwT20yRExmUzMza2JnWFlnMTZxQ29CS0lHcXlvZ2hBMEJJQlFDa1RtRm1tbi80blJNTW93VUlCY05RQ0FFZWc0SjlCM0F6d2VrT3grdXBpZnBwWDNVR0FXb0FwOU9iTXpNeWZscFM4dXVuUkRFY0FhQlJWVlhoZWQ1NzZ0U3A3bHNIaGNXU3NHamV2SG1yVENiVEZFcXBDQUNFRU1Wb05GcDBXaDBvS0xLeXNsYXVYLzk2SWFXcUJnQW9wVEU4TDNUWDE5ZFhuenQzcmhMQVFMUTRyQ25yWjZzR0xyM1huakp5L25mbVJNWUE2QUJLQVpVQklqZkxYRU1vTVpCdVFBVkFaUXdOWW5oSWRtMWtqVGwvdTcyam1CWTR2ZDU5TzIzeEhTdk1pUXh6MDFFQlZZTklSQUZEQ0V4bU0ydTJKQm9aUWlDS291cjFldXRiVzFzcm1wcWFxbTQ1TFMwdFd4TVNFanJtenAyN0xqazV1WUFRQWdBZ0RBRW9BQXJvOVhvdUxrNmZTaW1ncWlwOFB0OG56YzFOV3hvYmo1K3FyYTFWb3NtNXZWZWMrZWVMVDNnK2ZMSWo0czZtOUdRZXBTZW0zemxQVHFkU2ZUYnQzaityc2FQbWpabmpkZzE3bGovcitkQVYrTkxKbzNMN0t6UjA0ekRsK1NBTkJ2bUkxK3Z0UG5yMGFNWGF0V3QvTUo1VFZGUmtQOTdROEtiZjd3L3hQRThGUWFDQ0lGQmU0S2tnOEZUZ0JlcjMrejJOalkxdkxsKyszQkd0anViV3hjNFB6bnFLaTlmdjkzc0hiR2JORjNrYVNnRkZ1VDJsVUJqWHgvSjNERWtaSzcvMzdKK3VqUmZJZTRjNkx2MjRzTGc4d2c4V21EVytGRWFsb0xwMDBMaUhvWEoyU1JCR3pqWTBOSHg4OE9EQkxidDI3ZW9hejJsdmJ3OUtzdHhxTkJyOTZlbnA4MW1XWlFraE4vZC9Bc2l5M0ZsVFUvUEdnUU1IS2lvcksvdWoxYm1qaTNoNC9ycEIxVGl6V2hrZEFhVHdsMU1PUXhSR0tFbWFlL0R4WlR0R0pqcGhGeTdmMkJmUlpkY3FveU9nWWhpTUlvT0Fnb0JFQUF4TGt0UmZYbDQrTUpHemQrOWVZV2dvY0VsUkZCRG1meDhEQW9iUlFJNUVlTC9mMzFkZVhoNk1adWNyYlpvdTJQbzh4OGlBSklLT2pRTGhFQ0NLTURCaG92UitzdXlidERCejVzelJ4SVkvVzh3eE1oZzVEQnE4RGxtS2dCRG9Zemh1cXQxdWQrVG41NXUvZ1JPVG5tNXo2blE2bGlFTUZFVkJSSW1BRUFLZFZqdmI2WnlSbForZkh4Zk56aDBKYmoveVo1dEp2andQYWdUQzBDak85eiswKy95TjVQZkhobmtRcU5BTHJRcy83encrWVdJMnJYekVhWlN2WmtHTlFBaU15aGV2aXAxSFR2VHM3TzMzZFFBMDBXWkxTM0U2blJQMm9HYXoyV3EzMjExYXJWWVRDQVNPMWRUVUZMdmQ3ZzNEdzhPdFdxMld5Y3pNZU54cXRVNkpadWVPQkZQaHlnS0wycHZnNncrTG44ZXRYUC9ZcjA2L1BPTzF6aGV1Y0N0K0h4aFVsRVQ1YXBybzYzQk5GRWlxUGxoa1VYdTF2djR3N1dhWHZQOTIyL1RweDA1ZmZyWDJ5T0czTG5aMm5nRkZ2SE9HMHptUlUxQlE0SWlQajNkNVBKNGpWVlZWbXhvYUd0NWR2SGp4MWoxNzlxenhlRHkxQm9OaGZsNWVualdhSGMzLzM1UVVxR1dpUlBROWNVdWVuMVgwVHVXdDUzLy9vTTFkK013emw3U2oza1d5SkJyZlB2VFovdkdDZU9scGg4YmxHTnNseW96dUNsdnc2dmRmM0xlNXJhME5MUzB0T0h6NDQvYk16TXlPY0Roc2t5UXBKeFFLMWZYMDlJajNjbkp6YzluQ3dzSmZLb3B5cmFLaVlzT1dMVnM2MnRyYUtBRFUxZFgxY2h4WG41eWNuS3pUNlZKN2VucGErdnI2SXRIbzNFN3dsWlpEVXdhNmpybm9ReXRXejNxdTdOVGRML2pIdjdvdXZySmgrNy83THRiTjNyaDE1K0h0Nyt5VDd4WElYLzZ3TVlQdjYxd3dtbEs0ekxWcWQ4M2Q2MjYzZXlBbkorZXNLSW9aYVdscFhZMk5qZnk5bktWTGw4WXlER081Y09IQ3U5dTJiZXU3ZTcyNXVWbElTa3BxbGlUSmtwMmRmZDN0ZG9lajBma3ZDL1pmcHZIL1hBNEFBQUFBU1VWT1JLNUNZSUk9XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNDTUd2ZEdDUlFBQUJSWkpSRUZVV01QVjFtMU1GRWNjQnZCbjl2YVc1ZTRXamhNNFQ5N1JpbFdMV0tLR3lBVnFVT01IMGRvMGxVZzF0b0UwTlFhQ0g2eU5iVU9UR2hOVDJzU21ZSHdwa1JPcTBjWklrMG9zaUM4VkxkQWlvcGdxUlQxT1BIazV1SVB6YnZkMnB4OG9WcTFvbzV2bW1HUSs3RTd5Mi84OG1aa2Q0Qm50OXFXeXQ3dk9saTdIU3phMW5ITzFaVHRPSHY3aXM4bmtzTThhVkh3WDhrSkNwdzBCcUh1WlF0UnluUDU0Z2JDRWZkbGcvaytIbVdpZ3AvMkVYakRSOUJEK3Z0WGVXc085YUJGcU9VVkZSUkVXaXlVcExpNXVkbkZ4Y2RSa2NTWk1QK0J6cG9ZYXZmRlVJZUt3cTJjbWdJNFhLVVF0SnlZbUpzNW9ERThIeUtnZ0NOTUE5RTBHWjhJVkRMRjdNYytLNExVaXAyRkhscjN3UGxMSlNVaE1UQk9Fc0trR2c4RXlhOWFzdVpQRlladjI1U3p5dXJwNGdKVUpJYUN5RElhUEJMeHRxeGtLZ0JDdzN2TjU5Vi9PdjBRRHd3UkVBMElJQ0dTTlZqY2xZTjMwNnk4QW9KYXpkZXRIYVR3ZklydmRicGxTU2hWRm9ZcWk4RW1KU1JsOEtBK0E2QklTRXF5RmhZWFhEUWJEcUN3clJLTmhpTWxrNGp3ZUQrTndPQncybTgwWkxBNGJFWk95T1dXT2ZsMm9RUWRGSVFBbFVCUUpJY1FKZUJVQWdDV2FTVGUrOGNwNWh0RUNoSUpoS0R3dU53WTg4UlhBV0RCcU9TWlR4SXJzN095TjRlSGgwWlJTUHdBUVFtUkJFRXljbGdNRlJYSnk4b2FTa2kyNWxDb2FBS0NVaHJqZG5xNkdob1lUYlcxdE5nRE9ZSEhZOE9RM056bzd2MnVmT25MNUUrTVV4Z0J3QUtXQXdnQ0JzV1d1SVpRWVNCZWdBS0FTQmdjd05DaFp0N1BDekcvSHQ0SmFUbk56ODg2SWlJZ3JXVmxaUldhek9ZY1FBZ0FnREFFb0FBcm9kRHBlcjlkWktBVVVSVUZmWDkrcHBxWUxwZWZPbmIxWVYxY25CNU5EeGlmMjIrSDNGMGZ4TnlvczRZNjVHcTErTEp4SEd3RWt2eGYyZnRONWIralM0dGRXN21oOTJwbWpscE9mbng5ZldGQlFNSHZPbkMwY3g0V09UNHlDZ2dBQUpmQ0wvcDdPenM3Szh2THlBOVhWMWQzQjZHakdnVDFIZjdjWEZwWWM2Yi9yakRGcTdxZHFLQVZrK1dFWHZUN2NlWkJaTVNnbWJIajlyYTl1VDNTb3ErVzB0N2NQaTVMVUlnaENmMnhzN0JLV1pWbEN5Tmk1VFFCSmtxN1cxdForZk96WXNTcWJ6WFl2V0ozSGJoR3ZMaWthVUlUMEUvTG9DQ0Q2L3VtU0QzN1BDQ1ZSV1Q4c3pLc1llZDRmVmkzbjBLRkRuc0ZCVjZjc3l5RE0zNU1CQWNOb0lBVUM3djcrL3Q2REJ3OE9CN1B6cjJzYU45eXlsbWNrUVBTRFBoZ0ZmRjdBNzRlQjhSSFpjU3J2djE1ajFIQXlNakpDWW1OajVuRWN4ektFZ1N6TENNZ0JFRUxBYWJXTDVzMUxTODdNek5RSHMvTll3TzBudjQ0SmwvN0loaEtBWjNBVWwrL04ySGU1eDF6OVlNZ05BZ1U2VDh2eVcxZlBHcDlYaUZxTzBXaU1qSStQdDJxMVdvM0w1VHBkVzF0YjJOall1RzFvYUtoRnE5VXlpWWtKQ3lNakk2T0QyWGtzWU9xNXVkU2tPQ0w2N3ZuOHQvUWJTdVovZUtrZ2JmUFZkVGY1OVorN0JtUjVpdlRuTkgvZkZldnpDbEhMeWNuSlNRb0xDN1BhN2ZhVE5UVTFuNTQ1YzJiL3FsV3JkbFpXVm02eTIrMTFCb05oU1dwcWFtUXdPNXBISDRwemxESy9TSFRkK3RWckYrVHZ0WTIvTHovYTJwaTdjbVduZHZUdUNrbjBDOThjdjNIa1dZV280YVNrcExDNXVibnZ5cko4dTZxcWFsdHBhZW1WMXRaV0NnRDE5ZlVPbnVjYnpHYXptZU00UzNkM2QzTnZiMjhnR0oySEFkOXNQaDd0dkg3YVNtZXNmMi9CTzJVWG4vekFnUit2WC90ZzIrNmZlNi9WTDlxK2M4OVB1L2QrTHoydEVMV2NOV3ZXaERJTVkrcm82TmkvYTlldTNpZkhtNXFhUEZGUlVVMmlLSnFtVDU5K3A3R3gwUmVNemwvRWp2WmZNcWJSTFFBQUFBQkpSVTVFcmtKZ2dnPT1cIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFBUUNBWUFBQUNTbnJnMUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0UWdJQ0NNMm13aXk2UUFBQjFsSlJFRlVXTU8xMW50UVZOY2RCL0R2dVh2djNjdXlMNVpWV0JZV2xyUmk0bU5Obk1ZU3dWZXcxcWFpYmFadE5EUldqYlRXeVVqMUQ1bzI4ZEUvT2s0eVlzZW05VkhUTUlDU3Btb2RNQ3FUMFlpeHFBV004Z2krVVdCaHlRSUx1N0RzM2ZzNC9ZT1N4aWppd0hKbXpoLzNucG5QL2QzZi9NNDVQNExIalB1WEMzNGlpd0gvVS9PMlZXQWNJMUpPMWNmdnJLKzg0Z3ZGV3FKS2NqZHVwV04xQ2dvS2xrcVN4T1huNTVlTko1NG5jZGpIQVdxb2FxVTJLcUVYd0xnU0V5bkhvcnZ4MDFUbmxPcy95OGt2SG8vamNEaCtRQWdaQkZBMjBRNHowa0piWFZtMHdVSm5hNFV2TTF0clMvbXhCaEVwNS96SGYwazBtOFcwRkljcGZ0dTIzMDhacTdOcDA2WVltODNtVEVwS2VpWXZMMi9TUkRzalZyQWM2cHdaWlE0NnFFckNmYjYyS1FBYXhoSklwQnlydnU4bHJYYlFhQUtYTUdsUy9Cd0FOOGZpMk8zMkpMUFpOQnNnQXdhRElRR0FkeUtkRVNzWTRlYTVBaHVHd0lWNURkdi92VEh2b3dnNVVZeDNDYzhab1JQNFdLdlZPdVlLVGs1Sm1XVXdHT1AxZXIxdDZ0U3AweWZhWVM4ZXpKb1Q5TjBSQUZZaGhJQXFDaGpCQ2dTdnJtQW9BRUxBQmkrc1BMUHIyY3RVN2lNZ0doQkNRS0JvT0Yyc25MbnhQLzhHZ0VnNUZYOWUvTG9VYU5Hb0twRUpJVkFWQmF6T3pER2hHeTlxWU5NSldsMWNRb0oxK3RxMWEzL3M5WG85aEJDV1lSakNzaXc0ampPVmxwYVdBVUIrL205bkNZSlc4ZnY5Q3FXVXFxcEtWVlVWbkNuT2RDRktBRUIweWNuSm1ibTV1ZGYxZXYyQW9xaEVvMkdJeFdMaEE0RUE0M2E3M1NVbEpaM2pkZGdZZTlvYmFkT2lYNDNTNjZDcUJLQUVxaXBCU3pxQm9Bb0FzRTFtWnBzWGZ2c0N3M0FBb1dBWWlvRFBqKzZBWXg4d2xKaElPWWxPNXhaYnJHN3F3MDQzUVBVUWVKMDVKVG41aDNsNXYzbFJGRU15QUkycXFvcmY3MisvZE9uU25lRUx4MktKV2JwZ3dZSTFKcE5wTXFWVUJBQkNpR0l3R0N3OHg0T0NJalUxZGZYbXpWdXlLVlUxQUVBcDFmcjlnVHRuejU0dHUzcjFhZ21BenZFNnJDbjFSMnM2bXo2b2krKy85clk1bHRFRFBFQXBvREtBUEZUbUdrS0pudHdCVkFCVVFrODNlbnVrekxkWXc1Uy9EbStGU0RsaDAySlhlL3VIKyszRyt0Zk1zUXd6NUtpQXFvRXNLMkFJZ2Nsc1pzMldXQU5EQ0VSUlZOdmIyOC9XMU5RVVYxVlZsUTQ3MWRYVk8yTmlZdXJuejUrL0tTNHVMb3NRQWdBZ0RBRW9BQXJvZERvaE9scG5veFJRVlJWZXIvZVRpeGVyZG56MjJmbExGUlVWU2lRY01oelFsWCtzbXp0SnVMWFBabkpQMTNEUlE4bjUraUNBSkFiUjJtVzVFSXhhbkRkajJSOXJIM1htUk1vNVg3anFaV2RNNjBHYnFkMDg1QUN5OFFWSWx1V1FqUytBVXFJTURQVGZiMmhvcURweDRzVGVQWHYyVkQzS3ljbkpjZVN1WDcvK21XblR0dkE4SHpXY0lBb0tBZ0NVUUF5TGJVMU5UWVY3OSs3OSsrSERoNXNqNldpR2dmMUhQbS9OemQzOFVWZDdwOTJzK1hLbWhsSkFVYjZhNFdBSUxZTVorM3JDeWF1ZmUzbjMvWkVPOVVnNUh4eXZiL3ArZG02UjdPL09NbXU4OFl4S1FmbEUwT2lub1FxT2NDRFEvM2xsWmVYSlk4ZU83VGh3NE1EMWtaeTZ1cnErc0NUVkdBeUdyc1RFeEVVc3k3S0VrS0h6bndDU0pEV1dsNWYvN3VqUm84VWxKU1dlU0RzUGRCRlBMOXJVclJwbWx5a0QvVUE0OVA4cGhTQUcraW1aTlAvWTh5djM5WTkydzBiS1diTHFyUTZaZjZwQ0dlZ0hGVU5nRkFrRUZBUkVCdEFiRG9jOVJVVkZuYU01aHc0ZEN2VDArSm9VUlFGaC9wY1VFRENNQnBJcys3dTZ1anFLaW9yNkpzSjVxRTNqKzJwZUVSZ0pDSXVnZ3dOQUtBaUlJdlJNaUNqdVQxWSthUnNUQ1NjOVBWMFRGYnExWEdBa01GSUl0SzhGVWxnR0lkQnBCU0hKNFhBNE16SXl6RS9nYUJNVDdTNmU1MW1HTUZBVUJiSWlneEFDbnVQbXVGeXpVak15TXFJbndua2d3WFduLzJRM1NUY1hRSlVSNkJuQU5jKzNEbDVyaXpzODJPc0hnUXBkb0diSnZjYnpvLzVRcEp5dHE2ZTVETkxkVktneUFyNEI2WXU3WXVQcEM4MzczUjV2UFVCajdmYUVlSmZMTldvdmF6YWJyUTZISTVQak9JM1A1L3Uwdkx3ODk5eTVjMi8yOXZiV2NCekhwS1FrUDIrMVdpZFBoUE5BZ21uZzltS0w2bzd4ZWtMaXZlalZtNS85OWVYMXM5NW9mUFcyOE5vZmZOMktFaXZkVFJDOTlabWpCUklweDZicnk3R29iczdyQ2RFNzdJckQ3OVhPbVBIcDVac2JLazZmZXVlTHhzWXJvREM2WnJsY296bFpXVmxPbzlHWTJkcmFlcnEwdEhSclpXWGwrOHVYTDk5WldGaTRzYlcxdFVLdjF5K2FPWE9tZFNJY3pkY2Y4ckxVQWpGTWRNM1JLMTc1VHM3ZlNvYmY3ejFTZXk1NzJiSW1icUI5cVJRV0RlOGR2L1hSNHdLSmhQUDZTMDVOcG5Qd2dDZ3gvRzAyYThOMzEzMjRyYmEyRnRYVjFUaDE2bVJkU2twS2ZTZ1Vzb2ZENFNuQllQQk1jM096K0NnbkxTMk56YzdPL3JtaUtQZUxpNHZmM0xGalIzMXRiUzBGZ0RObnpyZ0ZRVGdiRnhjWHgvTzhyYm01dWJxam8wT09wUE5WQmQrdVBqN1oyNmQwK3BJM0xKeTdwdkQwTno4dzk1Zi8rdWZnYys4dTZuQzNTYmVxajQ5NFhrWEsrY1c2alVrZVA5UFdabG0xY1A2dmpyei96Zlh0MjdmWE5UUTA3UFI0UERmUzA5T05Jem56NXMzVDNydDM3OGJKa3lmZjNyMzc0YTVsMTY1ZDdlWGw1ZHRhV2xwdVpXZG5SMFhhK1MrYTZSbEVDV3loZXdBQUFBQkpSVTVFcmtKZ2dnPT1cIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFBUUNBWUFBQUNTbnJnMUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0UWdJQ0NRaXpwUHdVd0FBQlBGSlJFRlVXTVBOMW0xTVUyY1VCL0QvYzN2Ylh2cENYMFFRQ2kyUVRadzZSRmcwQkJBa09PZVc0Y3hpTXFLWk13dGRObU5BK09EZTNPSStMSm9GMklkRk1YR1RNYVR1aGMzUXhFak1tQzlWNThBTmNRWTNaU0tsQ2hZb3RGRGEzdDc3N0FQRFRSMnlDRjN1a3p5ZlR2TEx1U2ZuT2ZjQUR6azNMMVJ2N0Q2OWV5MW1lYVRtVkZkWHI5dTdkMi94LytHd0R3dUtnWE1seXFpRUVRQXRzMGxFYW83WmJINldFRElCb0RuU0RqTmRvSyt6V2EwMTBpd2xkeWZQZWRHbWVOUWtwT2FVbFpVWjR1UGpVNUtTa2hhWGw1ZlBqN1F6YlFlSEF3UHBVWHEvbVlva05PcnBXd2pnMTBkSlJHcU95V1JLMHV0MVdRQVoxMnExQ1FEY2tYU203V0NFYnVSd2JBaWNQS1NRc1dOUFAvSTdrcGhqU1U3TzBHcWpGMmcwbXZoRml4WXRqYlREbmo5WXROTHY2ZVlBVmlDRWdBb0NHQzRHOEhlOHdGQUFoSUQxTzBxK3IxcCtnWVpIQ1lnTWhCQVFDREs1YWw0NGI5dFBad0ZBYXM3T25XOW1jSnhTOEhxOUFxV1VpcUpJUlZIa1VwSlRzcmtvRGdCUldTeVdQS3ZWZWxXajBZd0xna2hrTW9ZWWpVYUZ6K2RqWEM2WHE2R2hZV0MyRG1zd3BXMVBXNkxlRktWUlFSUUpRQWxFa1llU0RBQitFUUFRSDh0azZWYy83bUFZT1VBb0dJYkM1L0ZpeUdldUJTWS9TR3FPMFdoWVYxQlFzRlduMDhWU1NvTUFRQWdSdEZxdFVTRlhnSUlpTlRWMVMwVkZaVEdsb2d3QUtLVktyOWZYM2RyYTJ0elIwZEVBWUdDMkRxdEwzYkIxb090UTU0S3hTN3YwOHhnTm9BQW9CVVFHQ0UrMnVZeFFvaUhkZ0FpQThoZ2V3c2d3bi9jdXExMjRiK29wU00xcGEydmJZekFZTHVmbjU1ZkZ4Y1VWRVVJQUFJUWhBQVZBQVpWS3hhblZxbmhLQVZFVTRYYTdUNXcvZjI3M21UT25mMnhwYVJIbXdpRlRDZjM4NWFzNTg3bHJ0ZkU2MTFLWlhEMzVVZjg4Qk9DRGZqZ0hqUTUvMUpyeUo1Ly84T0svelJ5cE9aczNielpiUzB0TEZ5OVpVcWxRS0tLbUNrUkJRUUNBRWdSRHdiNnVycTY2L2Z2M2Y5YlkySGhqTGgzWkZIRGdtMStjVm12RlY0TzNCa3g2MloxMEdhV0FJTnk5SVg4QXZSTzV0Y01oeTViTUYydHVUamZVcGVaMGRuYU9obmkrWGF2VkRpWW1KaGF5TE1zU1FpYm5OZ0Y0bnI5aXQ5dmZibXBxK3FLaG9hRi9ycDE3dG9nbkNzdUdSRzFXc3pBK0JvUUNmMTgrZ0tCdmpKTDUrZCt1S0trZG0ra1BLelhuOE9IRHZ1RmhUNWNnQ0NETVgwVUJBY1BJd0lmRDNzSEJ3ZHYxOWZXamtYQWVXTk1VbyswdmNRd1BoSUtnRStOQXdBOEVnOUF3QVNLNFRwVDgxelZHU2s1MmRyWXlNZEcwVEtGUXNBeGhJQWdDd2tJWWhCQW81UEtWeTVabHBPYm01cW9qNGR4VDRNN2pINXQwL084RkVNUHdEWS9qVXY5akJ5LzF4VFZPakhoQklFTGxhMS9iYytXMGZxWkVwT2JvOWZvWXM5bWNKNWZMWlI2UDV3ZTczVzQ5ZWZMa1d5TWpJKzF5dVp4SlRyYXNpSW1KaVkyRWMwK0JxZS82R3FQb01yajdBOEVlOVphSzVXOWNLTTNZZm1YVGRlN2xEenhEZ2pDUC95TWg2TDZjTjFNaVVuT0tpb3BTb3FPajg1eE81M0diemZiZXFWT25QbDIvZnYyZXVycTZiVTZuczBXajBSU21wNmZIUk55NWV1Q3AxdDVQVFAxbkQ3M3l6UDJ4c3djMmJPeXQxdm11ZnY1YzAweUpTTWxKUzB0amp4dzVzc3ZoY096YnNXT0g1ZjU0WldWbGdzUGhxTEhaYk85a1ptWnljKzNjN2VEcmJVZGozYVBDZ01meSt1cWNyWFhIN3dkeVh2dnU2NG5NandwdnUvcjRhMjFIcDUxWFVuTldyVnFsN09ucCtlM1lzV083YW1vZTNEYXFxcXB1MmUzMjkzdDdlNjhWRnhkSHpiWHpKNXlOMjlSdFR1V0JBQUFBQUVsRlRrU3VRbUNDXCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNDVVpab01vTmdBQUJ1TkpSRUZVV01QTjFudFFWTmNkQi9EdnVidDM5N0p2ZHBmSHNySThRZ0tOeWhMczZCQllId1JyVTF0Sm10SldjZUlyMEtaT0JwVHAwRTdpSTUxT3gwbEdiS3dOTUdNYVNwVzEwMWNHaklHbUpVSVF0YUFURllKR1VlVGwwaFVXZGdGMzl6NU8veUNNS2VHUjREOTdadTQvOTNmbU03L3p2WTl6Q09ZWmR5K1c1UWtCbi9leDFRY2E4QWdqMUp6Vzk5OG9hTHJzOFp1TVlTY0tkKytuaTNYS3lzcWU1WG1lTFMwdHJaMXJEak1mSVBsYk55dTU0Ui9oRVVlb09VYlZqUjhtSmhoV1BrcTRBR0N6MmI2VGxKU1VOZCtjT1FQdXYxcXIxaHJwQ2lYM1gwZmZKYWRpc1UyRW10UDgvdStYR0F5QjVIaWJQdnJBZ1ZlZldLeFRWRlFVYnJGWUVtSmpZNThzTGk2TytOb0JDLzZoMUREbHBDMU00YlVGeHZzWDNVaW9PV2JOMkVhbDhvRk9yMlZqSWlLaVZ5M1dzVnF0c1FhRGZvVmFyVTdSYXJVeFgvOFhFYnlUeWNtRDROaWdRaVlmLzlhaXY2TVFjOElZOXdZRnE0T0tVNWpNWnZPaUgxUmNmSHlhVnF1TDFtZzBscFNVbEdWenpaT2ZQNTZ6YXRMVHpRRnlrUkFDS29wZ09ETXcrY2x6REFWQUNPU1RMWnYvZmZpcGkxUVlJeUF5RUVKQUlNcFlsVWx3N1A3UE9RQUlOYWZoZCt0ZjRuMjlNa2tpQWlFRWtpaENyakt3alAvR016SllWSnhTRlJVVFkxNjJjK2ZPNzd2ZGJoY2hSTTR3REpITDVXQlpWdTkwT21zQm9MVDBGMmtjcHhTOVhxOUlLYVdTSkZGSmtyaUUrSVFNTG93RFFGUnhjWEdPd3NMQzZ4cU5aa0lVSlNLVE1jUm9OQ3A4UGg4akQ3Y212NUs4VkowZnBsRkJrZ2hBQ1NTSmg1SU1BWk1TQU1BU3lhd3dySHU4aFdGWWdGQXdESVhQNDhXd3oxWUJUQzBvMUp3bENRa2xGcE1xNWN2T01FQTE0QlFxUTN4YzNIZUxpL2M4RXdqNEJRQXlTWkpFcjljN2VPSENoVzRBdFFCZ05JWS91M2J0MmgxNnZUNlNVaG9BQUVLSXFOVnFqUXBXQVFxS3hNVEViWHYzbG15aVZKSUJBS1ZVNmZYNnVoc2JHMnZsK3NUbmR3eDF2WHMxZXZ6S1BvT0owUUFLZ0ZKQVlnQmg2aldYRVVvMHBCdVFBRkFlSThNWUhlRWRyOG0xVDd3OS9TbUVtaFBVcjdjUERwNnF0T3F1dldnd01jeVVJd0dTRElJZ2dpRUVlb05CYmpDYXRBd2hDQVFDMHVEZ1lHTjdlL3VmV2x0Ym5kTk9XMXZib2ZEdzhHdHIxcXdwaW9xS3lpR0VBQUFJUXdBS2dBSXFsWXBUcTFVV1NnRkprdUIydXo4OGY3NzE5WTgvYnI1QXBxSExmOTZWR2NIZHJMRG9CNWJKV1BYVW9yNDRDTUFISnRGMzM5Z3lHYmErZVBuM2ZuTnB0bjlPcURuTlZWdGVTQWp2TzI3UkR4cW1IRURRUFEzZW1BdEI5elFvSmVMRXhQamRqbzZPMXRPblQ1Y2ZQWHEwZFRabjY5YXR0c0tDZ29Jbmx5NHRVU2dVWWROQlUxQVFBS0FFZ1dDZ3Y2dXJxNnE4dlB3UE5UVTFkejV2OCtIb2FuekxKTjJyZmV0eDA1MThscFgvL3g0VDVORWJkRlI0SmxVL1g3bTVZbnkrRFNEVW5JYWFYMXRpNmI4K1NETDEydVZ5Rm1KNEZvVElGOERyTTROZTcvZ256YzFOWit2cjY4dXFxNnVINW5QeTgvTzFlWGw1MngwT3g1dEtwVkw1c0VJUkRQS2R0YlcxcnpjMk52Nnp1cnA2Yk5aVHhEZXlpNFlsN1lwYWNXSWNDUG9mWHJ3ZkFkODRKUkZyL3I3UVlrTFIyYkRsdFh1QzRyRUdjV0ljTk9BSEkvSWdvQ0FnQW9EUllERG9XaWhjQURoNThxUnZaTVRUSllvaUNFTSszMXdKR0VZR1hoQzg5Ky9mdi9mRmNHYzlwaW5HMm4vTU1Ud1FESUErbUFEOGswQWdBQTNqSitMQWg1dS82akVtbEp5TWpBeFptUDltTHNmd1lIZy82Rmd2K0tBQVFxQlNjbHlzeldaTHlNcktNbndGUjdsa2lkV3VVQ2prREdFZ2lpSUVVUUFoQkFxV1hXVzNweVZtWldXcDV3ejRhdjF2clhyK3M3V1FCUGhHSm5ERmxYVDhTbjlVellOUkx3Z2txSHp0RzNvNm14ZHNKTlNjL2R1VzJyWDg3VVJJQW55ZUNmN1QyNEhPK3BZN2xRTXU5eldBbXF6V21HaTczYjVzSWNkZ01KaHROcHVEWlZtWngrUDVxSzZ1cnZEczJiTy9IQjBkYldkWmxvbVBqMXRwTnBzajV3eVkrbTZ0TjBvRDRXNlhQOUNqM3JiM3FaOWRMRWg3cFRQL0Z2ZmlyenpEb21qaWI4Y0UzTmNjQ3pVU2FvNUZOYmJWS0Eyd2JwZWZkc3VmcXpsMmFmbnlqeTUrOW5KRC9RZHZmTnJaZVJrVU9udWEzYjZRazVPVGs2RFQ2Ung5ZlgzMVRxZHpmMU5UMHp1NXVibUhxcXFxZHZmMTlUVm9OSnJzMU5SVTg1ekE5Y3B2TnZZZXM3ck92YnY5MnpOcjV5cWZ6K3N0MC91dS8zSGozeFpxSkpTY2x6WW15THJLMDN2dkhyTk9ObFg4WU5mTStzR0RCMU5QbkRoUlZsbFpXWjJkbmEyYnkwbE9UcGFmT25WcVgwdEx5OXQ3OXV5Sm0xa3ZLU21KYVdscE9lSjBPbDlOVDAvbnZ2UUczMnA3TDlJOUpnNTU0bDVlbDdtanFuNG1rUG1UZi96bFFmcWIyZmNHK3ZtYmJlK3A1Mm9rMUp6dHUzYkh1cnhNZjc5eHk3bzFQLzNyTzdNRWZMV2pvK09ReStXNmtaR1JNV2ZBcTFldlZ2YjA5Tnc0YytiTXZpTkhqdHlkV1Q5OCtQQmdYVjNkZ2Q3ZTNwdWJObTBLbTc3L1AzaTJ6WDg5c1N2MEFBQUFBRWxGVGtTdVFtQ0NcIjtcbiAgZXhwb3J0IGRlZmF1bHQgaW1nOyIsInZhciBpbWcgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRmdBQUFBUUNBWUFBQUNTbnJnMUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQjNSSlRVVUg0UWdJQ0NZSHQ2RkdsZ0FBQko5SlJFRlVXTVBkbG0xTVUxY2N4cDl6MjN0NzI5N1NGOTRzbGZLU0tTZ09VRFlOMFFabWNNNHQwL2tCTTRLWm1xVjhtREc4WldGemM5RmxNYkJsYkNhTDRxS1RrVURaaHkybWZOR1pWY0NxYytneU5LWnV3bkFXbzR5WFFndTFiL2VlZlZDaWN4YW1mcnYvNUg0NXp6Ky84K1RKUGVmOGdUbnFyd3ZONVlPOSs5YmpHVXV1bk9ibTVnMU5UVTBiNStwUnppVktvWE1WS25YYUpJQ1R6MkpFcmh5cjFmb3FJZVF1QUdlOEhpYWVNSHpacWRXWmFKR0svOXZtdmVUZ250YUVYRG5WMWRWR3M5bWNsWjZldnJTbXBpYjVpUU9PaFVieTFhcWdWYzM1cmVIcDRjVlBhMFN1SEl2RmttNHc2SXUwV20ydVRxZExlK0tBRVJsYXpTc2o0TmtJcDFCT3YvelU1MGltbkl6TXpFS2RMbUdCSUFqbTNOemNaWEh2NFBOSHlsWUZmWU04b0JRSklhQ2lDSVpQQW9LL3ZjRlFBSVJBR1hSWC9QVDU4Z3MwTmtWQUZDQ0VnRUJVc0pyRW1HM25MMmNCUUs2Y2hvYjNDbmxlSmZyOWZwRlNTaVZKb3BJazhWbVpXY1c4bWdkQU5Ca1pHYmFxcXFwcmdpRE1pS0pFRkFxR21Fd21MaEFJTUVxakpXZFhUcDYyVWkxb0lFa0VvQVNTRklXS2pBQkJDUUJnVG1HS0RDOHRjak1NQ3hBS2hxRUkrUHdZRDFoYmdIdEc1TW94bVl3YlNrdExkK2oxK2hSS2FSZ0FDQ0dpVHFjemNTd0hDb3JzN094dGRYWDFHeW1WRkFCQUtWWDUvWUZCbDh2bFZPcXpOKzhZOFJ5N3ZHQzZmNDhoa1JFQURxQVVrQmdnZHU4M1Z4QktCRElJU0FCb0ZCUGptSnlJMmo1VTZoWWZuRDBLY3VYMDlmVTFHbzNHS3lVbEpkV3BxYWxsaEJBQUFHRUlRQUZRUUtQUjhGcXR4a3dwSUVrU1JrZEhUNTAvZjI3Zm1UTzlQNU5aMEsvZnZiMDZtYi9lWXRiZldxWmd0ZmZNUEZ3RWlJYUQ4STZaM0VIMXVwcm5YOTkvNlhGM2psdzVXN2R1dFZiWjdmYWxlWG4xSE1lcFo0T21vQ0FBUUFuQ2tmQ3d4K05wUFhUbzBEY2RIUjFEOS9FUHl1TTZrQ2pkZGg1WWxEaFV5YkwvSHBFamtTaHVSbXd0dnFEbTNaVVZMZE56UFFCeTVWUldWdXJLeTh1MzIyeTJ6MVFxbGVxQlFoR0pSSzg2bmM1OUxwZnJ4N2EydHFuSFRoRkwxbGFQUzdvaXB6Z3pEVVJDRDc1b0NPSEFOQ1hKSlQvTVowTE9uUGIyOXNERWhNOGppaUlJUSs0L2lnUU1vMEEwRnZPUGpZM2RmampjeDQ1cDNOVEZOM2ttQ2tUQ29IZG5nRkFRQ0ljaE1DRWkzanBWOFgvSEdEbHlpb3VMVlFzWFdnbzRqbE15aElFb2lvaUpNUkJDd0xIc3FvS0N3dXcxYTlabzR3WjgrY1NYRm4zMGoxSklNUVFtWnRCLzU3a2ovY09wSFhjbi9TQ1FvQWxjWEgvamFxOWhQaU55NVJnTWhpU3IxV3BqV1ZiaDgvbE9kM1YxVlhWM2Q3OC9PVGw1a1dWWkpqTXpZMlZTVWxKSzNJQnBZR0NkU2JwbEhMMFRDdC9RYnF0Yi9zNEZlK0d1cTVVRC9Gc2YrOFpGTVRINloxcDQ5SXB0UGlOeTVaU1ZsV1VsSkNUWXZGN3ZDWWZEOFZGUFQ4L1JUWnMyTmJhMnR1NzBlcjBuQlVGWW01K2ZueFFYY08zd0M2NmJYMW51bkQyMi9aVkh0Yk9ITjVmZmJOWUhybjM3MnZmekdaRWpKeWNuUjluWjJibkg3WFlmcksydHpYaFVyNit2VDNPNzNWODRISTRQVnF4WXdmOEhNTkIzUE9YTXA4c2QvVjJmTEltM3llL2RYNzk0ZW45QjUvVys0OXA0UFhMbDJPMTJiV05qNDViZHUzY254dXRwYUdoSWFHcHEyckozNzE3ajdOby9FM21hSjgvZEtzWUFBQUFBU1VWT1JLNUNZSUk9XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNDWXZnaFR1YkFBQUJLVkpSRUZVV01QZDJGdHNGRlVZQi9EL21aM1puZDIydThOdVczcUJEUVZFR3dzTGdoQ2dWVk90a0RRR0VGRUxCcFJiZ3NSb1RFaElpbHdNSVpGb0k0alNOVTNRMmhSOGtCQXNvWTNLcGJZcmxVSW9VTXF0WEpaMjJicVd0bnZyM0k4UGxZRFFiUVhlNWt2bVpjN0piNzc4Wjg3TXlSQU1VVGVieWhhcFVpUTg3b1ZOZFhpQ01xcmpPN1I5MWZIVFBhTExhYTFhdlhZakhXd09NeFNnaTc0U0M5LzlGcDZ3ak9vNGJaZmVISnNqVEU4VTdwQUJkNXc5bUpUaXBGTXQvRjhGdDA3dE5UOXVFMFoxNmc5OVBVb1FwS2ZIdUIwWm16YVZUbmprZ0ZXeGE1TFZFbmRieldHM0ZPMlk4TGlOR05WSlRlNHJ0bGo2N1k0VUxpc3RMV1BHSXdjTStmcHNucFhCYzdMWnhFWmZmZXgxWkZESHlvVG1tRGs3Ykx6WmxacWFtdkJHc1g5VXZESWozdFBPQTZ4R0NBSFZOREI4S2hBL001K2hBQWdCRzI4bytlMkxLVTFVN1NNZ0poQkNRS0NaT0p0TExWajdaeU1BR05XcCs2cG9wUkx4bTNTZHFJUVE2Sm9HMWlad2pIanBaUk15YmJ6Rk5qSXJLelZ2K2ZMbHI0ZENvU0FoaEdVWWhyQXNDNDdqSE9UaTRiVlY2VUxIRW11eURicE9BRXFnNndvc3BBc2Nxd01BTkoyaC9kcEl3akFjUUNnWWhpTFNFMFozeEYyZVc3eDdEUUFZMVdtdFdkMlc2ZXA2NW1HbkcwaktnMmliaTE0dFYrM3RpL1JMa3FnQ01PbTZyb1hENGNDSkV5ZmFXY2ZZQmU5MXRlMDVteEZ0K1VSd01jbUFHYUFVMEJsQUhYak1UWVNTWk5JTzZBQ29nanZkNkwyakZHeGdVeVo4YzNjcEdOV1JIVVdlUUdDZk45dCticW5nWXBnQlJ3ZDBFMVJWQTBNSUhJTEFDazVYQ2tNSUpFblNBNEhBa2VibTVoOThQdDllY2hjNi9lT0syV244bGZKTVIyZWVpVXNhYU9iK0lvQWl4WEhyYjJkRDNGcjAwY1RYdHAwYTdKMWpWS2YrdThVTGMwYmNxc2gwQklRQkIxRHRzNkE0NTBHMXp3S2xSSXZGb2pmUG56L3ZxNm1wMmIxejUwN2Z2L3k5YWp1eXc2WGZQcmpqS2RmMUpSekgvdmZiSUN2d3l3WGxQWEhidXVrbDVkR2hQZ0JHZGVxcXQyYU9wcjhlSHUveWUxaVdnellpSDJyNlFpaU8yWEk0SEQxVFgzLzhXRzF0YlZsbFpXWFhvTHVJM01JUHUvV1VxUWUxV0JTUXhYdUhJa0tLUkNsSmUzSC9jRTBZMlptemVNTnQxVHl1VG90RlFTVVJqS2FBZ0lLQXFBQjZaVmtPM2gvdW9OczBjMS96Mnp5akFMSUUyaDhEeERnZ1NVaG1SS0oxL2xMeWY3Y3hSblJtenB4cHNvcFg1dkdNQWtZUlFmdjhVR1FWaE1CbTRmblJicmM3Sno4L1gwZ1k4Tm5hTDdNZHl1V1hvS3VJM0ltaEpUaStvcVZqWkhWL2J4Z0VPbXlSNWprM1d1dUY0Um94cXJOeDJiT2VGT1hhV09ncUlqMHg1Y0kxcWJXMjRicTNNeGc2QjFCWGRuWldoc2ZqeVVzWU1JMWNMWExxblNOQ1FWRzZrYlRzNHludk42MmEvRUhya3F2ODBrOTd1alhOcFZ6TGtrTG5Db1pyeEtoT3BxM3ZIYWZleVlXQ0ltMW41MWZ2T2pWeDR0R215MnZxYWc5dnY5RGFlaG9VZHM5a2p5Y2hjTkU3N1loL1YzYXdjYys3Y3g4Y2EvUXVXT1F2YzBRdWZsLzgwM0NOR05GWldaeGphdHY5blAvbXJ1ejQ4ZkkzVmp3NHZubno1a2xWVlZWbFhxKzNzckN3MFA0UWNQWGtnZlRmdDAvWjIvTHoxdHhFRjdsMDdOdm5qMjd6N0x0eThrQlNvamxHZFJyMmZ6N202R2ZUZkkzVjZ4TCtkMWkvZm4zNmxpMWJTa3RMUzBmZFBmY1BQZHZsZmZ5WTlNb0FBQUFBU1VWT1JLNUNZSUk9XCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJ2YXIgaW1nID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZnQUFBQVFDQVlBQUFDU25yZzFBQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUIzUkpUVVVINFFnSUNDY1lJN0o2SWdBQUFwTkpSRUZVV01QdDFrdElWRkVZQi9EL3VYTm41czVEUnAyMFRIQVJwVWhQc2NkQ2hoNWtCaEhrUW1vUWVoQnRDaW1DZHJVb3drV1FKRVNNSVVpYnJFVWh0Z2tpQzlQQzFHZ00wVkxUZkpCbTQ2aDN2TjdIM0hOYWlPalVYQ2QwT2ZlRHV6cUgzLzN6Y2M3SEFWYW9IMjFWWlFQTk4wdXd4a3BtaDF0cGtjcnYvWFloZEhLdFFaTFpNV3p3YUZlakt5V2RGZHFGWDc2UnpucmJha01rdTJQWTRLZzhzY05obDNJY3R0a2NKVEthdTlvZ3llNFlqd2gxc0VqZ1ZRaFcxV2JoSTBkV2ZZK1MzT0UvMUI3ZUo0VUhCSURYQ1NGZ3VnNU9XQWRJbjA5d0RBQWg0S1VXLyt1N0JXMHNPa05BTENDRWdFQzNXSjNlcU8vU3gxWUFNSjM0RHArV25WZVJ0OVZWN25BN1FTa0JHQUdsR3V4a0FwQW9BQ0Fya3l0TVBiaWxoZU9zQUdIZ09BWXhQSXVRbUJNQUZvS1lUbnlIOTJ3cVBUZlJVOWUxSVJLOGtlcmwzSUFOWUF5Z0hCQmRPT1lXd29pYkRBQVVBTk13RmNMMGxPYTd6cWZrUGxpOENxWVQzeUdMMEtlbjU0c3loTDVBbG1kc204WHFXa0NXRndFMFJjTEk3L1FXeVZGOFpmdnh5czU0TThkMFloMnlmRTlQVTdXWC9teXMzdUlkTExkYStkaVpybW9ZVm4yQnNPUzh0dGNmaUt3MC8wMW55WWw1UmVRZnVoeWlLWVdOK2x3RVVPV2xUNU9oaUJGR012WS9UeFRDZEdLZGY1NXB0cG1PVXdLbkFhb0NOajhIeUJLZ0tIQnpNdEhIWHZuLzl4VmpPbkVhM1BYeVhyWkgrM1lBTkFweGFnN0I4YzIxd2RIMWorZW5aMEZBNFJRN1NvYTZtMU1UaFRBZGd3WXpzYjg0blk2bFRZN0x5cERyek5XQ2kyMFhkbFYwbC9jTHAyK0ZRN3J1MWI1dlZDYS8rQklGTVIyRDZxM1ozVFI4UDN1OHRlN3MwYi9YV210S3k0YXJQR0x2bzJQUEVnVXhuVGpWMzk2UStlNU9RWDN3eGUxOG94OThmZnR3ejV2S25VLzYyaHRjUm50TUo5YjVBOWZWdFB1UGMrWnJBQUFBQUVsRlRrU3VRbUNDXCI7XG4gIGV4cG9ydCBkZWZhdWx0IGltZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHBhY2thZ2VKc29uIGZyb20gJy4uL3BhY2thZ2UuanNvbidcbmltcG9ydCAnbmF2aWdhdG9yLnNlbmRiZWFjb24nXG5pbXBvcnQgc2llZ2VsIGZyb20gJy4vc2llZ2VsLXMucG5nJztcbmltcG9ydCBzdGFyMCBmcm9tICcuL3N0YXItMC5wbmcnO1xuaW1wb3J0IHN0YXIwNSBmcm9tICcuL3N0YXItMC41LnBuZyc7XG5pbXBvcnQgc3RhcjEgZnJvbSAnLi9zdGFyLTEucG5nJztcbmltcG9ydCBzdGFyMTUgZnJvbSAnLi9zdGFyLTEuNS5wbmcnO1xuaW1wb3J0IHN0YXIyIGZyb20gJy4vc3Rhci0yLnBuZyc7XG5pbXBvcnQgc3RhcjI1IGZyb20gJy4vc3Rhci0yLjUucG5nJztcbmltcG9ydCBzdGFyMyBmcm9tICcuL3N0YXItMy5wbmcnO1xuaW1wb3J0IHN0YXIzNSBmcm9tICcuL3N0YXItMy41LnBuZyc7XG5pbXBvcnQgc3RhcjQgZnJvbSAnLi9zdGFyLTQucG5nJztcbmltcG9ydCBzdGFyNDUgZnJvbSAnLi9zdGFyLTQuNS5wbmcnO1xuaW1wb3J0IHN0YXI1IGZyb20gJy4vc3Rhci01LnBuZyc7XG5cbmNvbnN0IHsgbmFtZTogQVBQX05BTUUsIHZlcnNpb246IEFQUF9WRVJTSU9OIH0gPSBwYWNrYWdlSnNvblxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbmF2aWdhdG9yLnNlbmRCZWFjb24oXG4gICAgJ2h0dHBzOi8vYXBpLmFwcHMuYXVzdGF1c2Noa29tcGFzcy5kZS8nICsgQVBQX05BTUUgKyAnL3RyYWNrJyxcbiAgICBKU09OLnN0cmluZ2lmeSh7IHZlcnNpb246IEFQUF9WRVJTSU9OLCB1cmw6IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgfSlcbiAgKVxufVxuXG5jb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICBwYWRkaW5nOiAnMCcsXG4gIG1hcmdpbjogJzAnLFxuICB2ZXJ0aWNhbEFsaWduOiAndW5zZXQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGJvcmRlcjogJ25vbmUnLFxuICBjb2xvcjogJyMzNjM2MzYnLFxuICBmb250RmFtaWx5OiAnQXJpYWwsIHNhbnMtc2VyaWYnLFxuICBmb250U2l6ZTogJzExcHgnLFxuICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgdGV4dEFsaWduOiAnbGVmdCcsXG4gIHRleHRTaGFkb3c6ICdub25lJyxcbiAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBsaW5lSGVpZ2h0OiAnMS4xJ1xufVxuXG5jb25zdCB3cmFwcGVyU3R5bGUgPSB7IC4uLmRlZmF1bHRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG59XG5cbmNvbnN0IGFwcFN0eWxlcyA9IHsgLi4uZGVmYXVsdFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICctMzJweCAwIDVweCAwJyxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxODBweCcsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodEdyYXknLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJUb3A6ICc4cHggc29saWQgIzAwYTRmOScsXG4gICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzFweCAxcHggM3B4IGxpZ2h0Z3JleScsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc4cHgnXG59XG5cbmNvbnN0IGhlYWRsaW5lU3R5bGUgPSB7IC4uLmRlZmF1bHRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnIzAwYTRmOScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTFweCAwJ1xufVxuXG5jb25zdCBzaWVnZWxTdHlsZSA9IHsgLi4uZGVmYXVsdFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnLTE1NXB4JyxcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MHB4J1xufVxuXG5jb25zdCBzdGFyU2VjdGlvbiA9IHsgLi4uZGVmYXVsdFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxMHB4IDAnLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCBsaWdodGdyZXknLFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCBsaWdodGdyZXknLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzE1cHggMCcsXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEycHgnXG59XG5cbmNvbnN0IHN0YXJzU3R5bGUgPSB7IC4uLmRlZmF1bHRTdHlsZSB9XG5cbmNvbnN0IGF2ZXJhZ2VTdHlsZSA9IHtcbiAgLi4uZGVmYXVsdFN0eWxlLFxuICBmb250U2l6ZTogJzEycHgnLFxuICBmb250V2VpZ2h0OiAnYm9sZCdcbn1cblxuY29uc3Qgb3JnYVN0eWxlID0geyAuLi5kZWZhdWx0U3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDBhNGY5J1xufVxuXG5jb25zdCBwYXJhZ3JhcGhTdHlsZSA9IHsgLi4uZGVmYXVsdFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogJzEuMycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnMTBweCAwJ1xufVxuXG5jb25zdCBsaW5rU3R5bGUgPSB7IC4uLmRlZmF1bHRTdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMDBhNGY5JyB9XG5cbmNvbnN0IEFwcCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBhYmJyZXZpYXRlRGF0ZSA9IChkYXRlU3RyaW5nKSA9PiB7XG4gICAgbGV0IG15RGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXG4gICAgcmV0dXJuIG15RGF0ZS5nZXRNb250aCgpICsgMSArICcvJyArIG15RGF0ZS5nZXRGdWxsWWVhcigpXG4gIH1cblxuICBjb25zdCBmbG9hdEFzV29yZCA9IChudW0pID0+IHtcbiAgICBpZiAobnVtID49IDQuNSkge1xuICAgICAgcmV0dXJuICdIZXJ2b3JyYWdlbmQnXG4gICAgfSBlbHNlIGlmIChudW0gPj0gMy41KSB7XG4gICAgICByZXR1cm4gJ1NlaHIgZ3V0J1xuICAgIH0gZWxzZSBpZiAobnVtID49IDIuNSkge1xuICAgICAgcmV0dXJuICdHdXQnXG4gICAgfSBlbHNlIGlmIChudW0gPj0gMS41KSB7XG4gICAgICByZXR1cm4gJ0JlZnJpZWRpZ2VuZCdcbiAgICB9IGVsc2UgaWYgKG51bSA8PSAxLjQpIHtcbiAgICAgIHJldHVybiAnRWhlciBlbnR0w6R1c2NoZW5kJ1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGZsb2F0QXNJbWFnZSA9IChudW0pID0+IHtcbiAgICBpZiAobnVtID49IDUpICB7XG4gICAgICByZXR1cm4gc3RhcjVcbiAgICB9IGVsc2UgaWYgKG51bSA+PSA0LjUpIHtcbiAgICAgIHJldHVybiBzdGFyNDVcbiAgICB9IGVsc2UgaWYgKG51bSA+PSA0LjApIHtcbiAgICAgIHJldHVybiBzdGFyNFxuICAgIH0gZWxzZSBpZiAobnVtID49IDMuNSkge1xuICAgICAgcmV0dXJuIHN0YXIzNVxuICAgIH0gZWxzZSBpZiAobnVtID49IDMuMCkge1xuICAgICAgcmV0dXJuIHN0YXIzXG4gICAgfSBlbHNlIGlmIChudW0gPj0gMi41KSB7XG4gICAgICByZXR1cm4gc3RhcjI1XG4gICAgfSBlbHNlIGlmIChudW0gPj0gMi4wKSB7XG4gICAgICByZXR1cm4gc3RhcjJcbiAgICB9IGVsc2UgaWYgKG51bSA+PSAxLjUpIHtcbiAgICAgIHJldHVybiBzdGFyMTVcbiAgICB9IGVsc2UgaWYgKG51bSA+PSAxLjApIHtcbiAgICAgIHJldHVybiBzdGFyMVxuICAgIH0gZWxzZSBpZiAobnVtID49IDAuNSkge1xuICAgICAgcmV0dXJuIHN0YXIwNVxuICAgIH0gZWxzZSBpZiAobnVtID49IDAuMCkge1xuICAgICAgcmV0dXJuIHN0YXIwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAgPGltZyBzcmM9e3NpZWdlbH0gc3R5bGU9e3NpZWdlbFN0eWxlfSBhbHQ9XCJzaWVnZWxcIi8+XG4gICAgICA8ZGl2IHN0eWxlPXthcHBTdHlsZXN9PlxuICAgICAgICA8aDIgc3R5bGU9e2hlYWRsaW5lU3R5bGV9PlNjaHVlbGVyYXVzdGF1c2NoLm5ldDwvaDI+XG4gICAgICAgIDxwIHN0eWxlPXtwYXJhZ3JhcGhTdHlsZX0+XG4gICAgICAgICAge3Byb3BzLm51bV9yYXRpbmdzfSBTY2jDvGxlciBiZXdlcnRldGVuJm5ic3A7XG4gICAgICAgICAgPGEgc3R5bGU9e29yZ2FTdHlsZX1cbiAgICAgICAgICAgICBocmVmPXtwcm9wcy51cmx9Pntwcm9wcy5vcmdhbmlzYXRpb259PC9hPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0YXJTZWN0aW9ufT5cbiAgICAgICAgICA8aW1nIHNyYz17ZmxvYXRBc0ltYWdlKHByb3BzLmF2ZXJhZ2UpfSBzdHlsZT17c3RhcnNTdHlsZX0gYWx0PSdiZXdlcnR1bmcnIC8+PGJyIC8+XG4gICAgICAgICAgPHN0cm9uZyBzdHlsZT17YXZlcmFnZVN0eWxlfT57ZmxvYXRBc1dvcmQocHJvcHMuYXZlcmFnZSl9ICh7cHJvcHMuYXZlcmFnZS50b0ZpeGVkKDEpfS81KTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3BhcmFncmFwaFN0eWxlfT5cbiAgICAgICAgICBTdGFuZDoge2FiYnJldmlhdGVEYXRlKHByb3BzLnVwZGF0ZWRfYXQpfTxiciAvPlxuICAgIEFrdHVlbGxlIFNjaMO8bGVyYmV3ZXJ0dW5nZW4gYXVmPGJyIC8+XG4gICAgPGEgc3R5bGU9e2xpbmtTdHlsZX1cbiAgICAgICBocmVmPSdodHRwczovL3d3dy5zY2h1ZWxlcmF1c3RhdXNjaC5uZXQnXG4gICAgICAgYWx0PSdCZXdlcnR1bmdlbiBhdWYgU2NodWVsZXJhdXN0YXVzY2gubmV0Jz53d3cuc2NodWVsZXJhdXN0YXVzY2gubmV0PC9hPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJjbGFzcyBDbGllbnQge1xuXG5cbiAgY29uc3RydWN0b3IoeyBob3N0LCBwcmVmaXggfSkge1xuICAgIHRoaXMuaG9zdCA9IGhvc3RcbiAgICB0aGlzLnByZWZpeCA9IHByZWZpeFxuICB9XG5cbiAgY2hlY2tTdGF0dXMocmVzcG9uc2UpIHtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzIDwgNTAwKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHtcbiAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICByZXNwb25zZTogcmVzcG9uc2VcbiAgICB9KVxuICB9XG5cbiAgZ2V0U3RhdHMob3JnYVNsdWcpIHtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmZXRjaCh0aGlzLmhvc3QgKyB0aGlzLnByZWZpeCArIC9yYXRpbmdfc3RhdHMvICsgb3JnYVNsdWcsIGluaXQpXG4gICAgICAudGhlbih0aGlzLmNoZWNrU3RhdHVzKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xuaW1wb3J0IENsaWVudCBmcm9tICcuL2NsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTY2huZXRTaWVnZWxBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgIGhvc3Q6ICdodHRwczovL3d3dy5zY2h1ZWxlcmF1c3RhdXNjaC5kZScsXG4gICAgcHJlZml4OiAnL2FwaS92MicsXG4gIH0pXG4gIGNvbnN0IFtzdGF0cywgc2V0U3RhdHNdID0gdXNlU3RhdGUoe30pXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoU3RhdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LmdldFN0YXRzKG9yZ2FuaXNhdGlvbilcbiAgICAgICAgaWYgKHJlcy5lcnJvcnMpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4ocmVzLmVycm9yc1swXS50aXRsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRTdGF0cyhyZXMuZGF0YSlcbiAgICAgIH1cblxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW2NsaWVudF0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXBwXG4gICAgICBvcmdhbmlzYXRpb249e3N0YXRzLm9yZ2FuaXNhdGlvbl9zaG9ydG5hbWV9XG4gICAgICBudW1fcmF0aW5ncz17c3RhdHMubnVtX3JhdGluZ3N9XG4gICAgICB1cGRhdGVkX2F0PXtzdGF0cy51cGRhdGVkX2F0fVxuICAgICAgYXZlcmFnZT17c3RhdHMuYXZlcmFnZX1cbiAgICAgIHVybD17XG4gICAgICBgaHR0cHM6Ly93d3cuc2NodWVsZXJhdXN0YXVzY2gubmV0L29yZ2FuaXNhdGlvbmVuLyR7c3RhdHMub3JnYW5pc2F0aW9uX3NsdWd9L2Jld2VydHVuZ2VuYFxuICAgICAgfVxuICAgIC8+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgQXBwIGFzIEJhcmVBcHAsXG4gIFNjaG5ldFNpZWdlbEFwcCxcbiAgQ2xpZW50XG59XG4iXSwibmFtZXMiOlsibCIsIlN5bWJvbCIsImZvciIsIm4iLCJwIiwicSIsInIiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiaXRlcmF0b3IiLCJBIiwiYSIsIkIiLCJpc01vdW50ZWQiLCJlbnF1ZXVlRm9yY2VVcGRhdGUiLCJlbnF1ZXVlUmVwbGFjZVN0YXRlIiwiZW5xdWV1ZVNldFN0YXRlIiwiQyIsIk9iamVjdCIsImFzc2lnbiIsIkQiLCJFIiwiYiIsImUiLCJwcm9wcyIsImNvbnRleHQiLCJyZWZzIiwidXBkYXRlciIsInByb3RvdHlwZSIsImlzUmVhY3RDb21wb25lbnQiLCJzZXRTdGF0ZSIsIkVycm9yIiwiZm9yY2VVcGRhdGUiLCJGIiwiRyIsIkgiLCJjb25zdHJ1Y3RvciIsImlzUHVyZVJlYWN0Q29tcG9uZW50IiwiSSIsIkFycmF5IiwiaXNBcnJheSIsIkoiLCJoYXNPd25Qcm9wZXJ0eSIsIksiLCJjdXJyZW50IiwiTCIsImtleSIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwiTSIsImQiLCJjIiwiayIsImgiLCJjYWxsIiwiZyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImNoaWxkcmVuIiwiZiIsIm0iLCJkZWZhdWx0UHJvcHMiLCIkJHR5cGVvZiIsInR5cGUiLCJfb3duZXIiLCJOIiwiTyIsImVzY2FwZSIsInJlcGxhY2UiLCJQIiwiUSIsInRvU3RyaW5nIiwiUiIsInB1c2giLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiU3RyaW5nIiwia2V5cyIsImpvaW4iLCJTIiwiVCIsIl9zdGF0dXMiLCJfcmVzdWx0IiwidGhlbiIsImRlZmF1bHQiLCJVIiwiViIsInRyYW5zaXRpb24iLCJXIiwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlciIsIlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnIiwiUmVhY3RDdXJyZW50T3duZXIiLCJYIiwiZXhwb3J0cyIsIm1hcCIsImZvckVhY2giLCJhcHBseSIsImNvdW50IiwidG9BcnJheSIsIm9ubHkiLCJfY3VycmVudFZhbHVlIiwiX2N1cnJlbnRWYWx1ZTIiLCJfdGhyZWFkQ291bnQiLCJQcm92aWRlciIsIkNvbnN1bWVyIiwiX2RlZmF1bHRWYWx1ZSIsIl9nbG9iYWxOYW1lIiwiX2NvbnRleHQiLCJiaW5kIiwicmVuZGVyIiwiX3BheWxvYWQiLCJfaW5pdCIsImNvbXBhcmUiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJ1c2VEZWZlcnJlZFZhbHVlIiwidXNlRWZmZWN0IiwidXNlSWQiLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwidXNlSW5zZXJ0aW9uRWZmZWN0IiwidXNlTGF5b3V0RWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZHVjZXIiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZVN5bmNFeHRlcm5hbFN0b3JlIiwidXNlVHJhbnNpdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsIl9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdGFydCIsIlJlYWN0VmVyc2lvbiIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfT0ZGU0NSRUVOX1RZUEUiLCJNQVlCRV9JVEVSQVRPUl9TWU1CT0wiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwibWF5YmVJdGVyYXRvciIsIlJlYWN0Q3VycmVudEFjdFF1ZXVlIiwiaXNCYXRjaGluZ0xlZ2FjeSIsImRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSIsImN1cnJlbnRFeHRyYVN0YWNrRnJhbWUiLCJzZXRFeHRyYVN0YWNrRnJhbWUiLCJzdGFjayIsImdldEN1cnJlbnRTdGFjayIsImdldFN0YWNrQWRkZW5kdW0iLCJpbXBsIiwiZW5hYmxlU2NvcGVBUEkiLCJlbmFibGVDYWNoZUVsZW1lbnQiLCJlbmFibGVUcmFuc2l0aW9uVHJhY2luZyIsImVuYWJsZUxlZ2FjeUhpZGRlbiIsImVuYWJsZURlYnVnVHJhY2luZyIsIlJlYWN0U2hhcmVkSW50ZXJuYWxzIiwid2FybiIsImZvcm1hdCIsIl9sZW4iLCJhcmdzIiwiX2tleSIsInByaW50V2FybmluZyIsImVycm9yIiwiX2xlbjIiLCJfa2V5MiIsImxldmVsIiwiY29uY2F0IiwiYXJnc1dpdGhGb3JtYXQiLCJpdGVtIiwidW5zaGlmdCIsIkZ1bmN0aW9uIiwiY29uc29sZSIsImRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudCIsIndhcm5Ob29wIiwicHVibGljSW5zdGFuY2UiLCJjYWxsZXJOYW1lIiwiX2NvbnN0cnVjdG9yIiwiY29tcG9uZW50TmFtZSIsImRpc3BsYXlOYW1lIiwibmFtZSIsIndhcm5pbmdLZXkiLCJSZWFjdE5vb3BVcGRhdGVRdWV1ZSIsImNhbGxiYWNrIiwiY29tcGxldGVTdGF0ZSIsInBhcnRpYWxTdGF0ZSIsImVtcHR5T2JqZWN0IiwiZnJlZXplIiwiQ29tcG9uZW50IiwiZGVwcmVjYXRlZEFQSXMiLCJyZXBsYWNlU3RhdGUiLCJkZWZpbmVEZXByZWNhdGlvbldhcm5pbmciLCJtZXRob2ROYW1lIiwiaW5mbyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwidW5kZWZpbmVkIiwiZm5OYW1lIiwiQ29tcG9uZW50RHVtbXkiLCJQdXJlQ29tcG9uZW50IiwicHVyZUNvbXBvbmVudFByb3RvdHlwZSIsImNyZWF0ZVJlZiIsInJlZk9iamVjdCIsInNlYWwiLCJpc0FycmF5SW1wbCIsInR5cGVOYW1lIiwiaGFzVG9TdHJpbmdUYWciLCJ0b1N0cmluZ1RhZyIsIndpbGxDb2VyY2lvblRocm93IiwidGVzdFN0cmluZ0NvZXJjaW9uIiwiY2hlY2tLZXlTdHJpbmdDb2VyY2lvbiIsImdldFdyYXBwZWROYW1lIiwib3V0ZXJUeXBlIiwiaW5uZXJUeXBlIiwid3JhcHBlck5hbWUiLCJmdW5jdGlvbk5hbWUiLCJnZXRDb250ZXh0TmFtZSIsImdldENvbXBvbmVudE5hbWVGcm9tVHlwZSIsInRhZyIsInByb3ZpZGVyIiwib3V0ZXJOYW1lIiwibGF6eUNvbXBvbmVudCIsInBheWxvYWQiLCJpbml0IiwiUkVTRVJWRURfUFJPUFMiLCJzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biIsInNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duIiwiZGlkV2FybkFib3V0U3RyaW5nUmVmcyIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJ3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQiLCJzdGF0ZU5vZGUiLCJSZWFjdEVsZW1lbnQiLCJzZWxmIiwic291cmNlIiwib3duZXIiLCJlbGVtZW50IiwiX3N0b3JlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwiY3JlYXRlRWxlbWVudCIsInByb3BOYW1lIiwiY2hpbGRyZW5MZW5ndGgiLCJjaGlsZEFycmF5IiwiaSIsImNsb25lQW5kUmVwbGFjZUtleSIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiX3NlbGYiLCJfc291cmNlIiwiY2xvbmVFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCJTRVBBUkFUT1IiLCJTVUJTRVBBUkFUT1IiLCJlc2NhcGVSZWdleCIsImVzY2FwZXJMb29rdXAiLCJlc2NhcGVkU3RyaW5nIiwibWF0Y2giLCJkaWRXYXJuQWJvdXRNYXBzIiwidXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgiLCJlc2NhcGVVc2VyUHJvdmlkZWRLZXkiLCJ0ZXh0IiwiZ2V0RWxlbWVudEtleSIsImluZGV4IiwibWFwSW50b0FycmF5IiwiYXJyYXkiLCJlc2NhcGVkUHJlZml4IiwibmFtZVNvRmFyIiwiaW52b2tlQ2FsbGJhY2siLCJfY2hpbGQiLCJtYXBwZWRDaGlsZCIsImNoaWxkS2V5IiwiZXNjYXBlZENoaWxkS2V5IiwiY2hpbGQiLCJuZXh0TmFtZSIsInN1YnRyZWVDb3VudCIsIm5leHROYW1lUHJlZml4IiwiaXRlcmF0b3JGbiIsIml0ZXJhYmxlQ2hpbGRyZW4iLCJlbnRyaWVzIiwic3RlcCIsImlpIiwiY2hpbGRyZW5TdHJpbmciLCJtYXBDaGlsZHJlbiIsImZ1bmMiLCJyZXN1bHQiLCJjb3VudENoaWxkcmVuIiwiZm9yRWFjaENoaWxkcmVuIiwiZm9yRWFjaEZ1bmMiLCJmb3JFYWNoQ29udGV4dCIsIm9ubHlDaGlsZCIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0VmFsdWUiLCJoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyIsImhhc1dhcm5lZEFib3V0VXNpbmdDb25zdW1lclByb3ZpZGVyIiwiaGFzV2FybmVkQWJvdXREaXNwbGF5TmFtZU9uQ29uc3VtZXIiLCJkZWZpbmVQcm9wZXJ0aWVzIiwic2V0IiwiX1Byb3ZpZGVyIiwiX2N1cnJlbnRSZW5kZXJlciIsIl9jdXJyZW50UmVuZGVyZXIyIiwiVW5pbml0aWFsaXplZCIsIlBlbmRpbmciLCJSZXNvbHZlZCIsIlJlamVjdGVkIiwibGF6eUluaXRpYWxpemVyIiwiY3RvciIsInRoZW5hYmxlIiwibW9kdWxlT2JqZWN0IiwicmVzb2x2ZWQiLCJyZWplY3RlZCIsInBlbmRpbmciLCJsYXp5IiwibGF6eVR5cGUiLCJwcm9wVHlwZXMiLCJuZXdEZWZhdWx0UHJvcHMiLCJuZXdQcm9wVHlwZXMiLCJmb3J3YXJkUmVmIiwiZWxlbWVudFR5cGUiLCJvd25OYW1lIiwiUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldE1vZHVsZUlkIiwibWVtbyIsInJlc29sdmVEaXNwYXRjaGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRleHQiLCJyZWFsQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXIiLCJpbml0aWFsQXJnIiwiaW5pdGlhbFZhbHVlIiwiY3JlYXRlIiwiZGVwcyIsInVzZURlYnVnVmFsdWUiLCJmb3JtYXR0ZXJGbiIsInN1YnNjcmliZSIsImdldFNuYXBzaG90IiwiZ2V0U2VydmVyU25hcHNob3QiLCJkaXNhYmxlZERlcHRoIiwicHJldkxvZyIsInByZXZJbmZvIiwicHJldldhcm4iLCJwcmV2RXJyb3IiLCJwcmV2R3JvdXAiLCJwcmV2R3JvdXBDb2xsYXBzZWQiLCJwcmV2R3JvdXBFbmQiLCJkaXNhYmxlZExvZyIsIl9fcmVhY3REaXNhYmxlZExvZyIsImRpc2FibGVMb2dzIiwibG9nIiwiZ3JvdXAiLCJncm91cENvbGxhcHNlZCIsImdyb3VwRW5kIiwicmVlbmFibGVMb2dzIiwiUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxIiwicHJlZml4IiwiZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUiLCJvd25lckZuIiwidHJpbSIsInJlZW50cnkiLCJjb21wb25lbnRGcmFtZUNhY2hlIiwiUG9zc2libHlXZWFrTWFwIiwiV2Vha01hcCIsIk1hcCIsImRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUiLCJmbiIsImNvbnN0cnVjdCIsImZyYW1lIiwiY29udHJvbCIsInByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UiLCJwcmVwYXJlU3RhY2tUcmFjZSIsInByZXZpb3VzRGlzcGF0Y2hlciIsIkZha2UiLCJSZWZsZWN0Iiwic2FtcGxlIiwic2FtcGxlTGluZXMiLCJzcGxpdCIsImNvbnRyb2xMaW5lcyIsInMiLCJfZnJhbWUiLCJpbmNsdWRlcyIsInN5bnRoZXRpY0ZyYW1lIiwiZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lIiwic2hvdWxkQ29uc3RydWN0IiwiZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxIiwic2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiaGFzIiwidHlwZVNwZWNOYW1lIiwiZXJyb3IkMSIsImVyciIsImV4IiwibWVzc2FnZSIsInNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEiLCJwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biIsImdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSIsImdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyIsImVsZW1lbnRQcm9wcyIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsInZhbGlkYXRlUHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiX25hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJpc1JlYWN0Q2xhc3NBcHByb3ZlZCIsInZhbGlkYXRlRnJhZ21lbnRQcm9wcyIsImZyYWdtZW50IiwiY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwidmFsaWRUeXBlIiwic291cmNlSW5mbyIsInR5cGVTdHJpbmciLCJkaWRXYXJuQWJvdXREZXByZWNhdGVkQ3JlYXRlRmFjdG9yeSIsImNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbiIsInZhbGlkYXRlZEZhY3RvcnkiLCJjbG9uZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiIsInN0YXJ0VHJhbnNpdGlvbiIsInNjb3BlIiwib3B0aW9ucyIsInByZXZUcmFuc2l0aW9uIiwiY3VycmVudFRyYW5zaXRpb24iLCJfdXBkYXRlZEZpYmVycyIsIlNldCIsInVwZGF0ZWRGaWJlcnNDb3VudCIsInNpemUiLCJjbGVhciIsImRpZFdhcm5BYm91dE1lc3NhZ2VDaGFubmVsIiwiZW5xdWV1ZVRhc2tJbXBsIiwiZW5xdWV1ZVRhc2siLCJ0YXNrIiwicmVxdWlyZVN0cmluZyIsIk1hdGgiLCJyYW5kb20iLCJzbGljZSIsIm5vZGVSZXF1aXJlIiwibW9kdWxlIiwic2V0SW1tZWRpYXRlIiwiX2VyciIsIk1lc3NhZ2VDaGFubmVsIiwiY2hhbm5lbCIsInBvcnQxIiwib25tZXNzYWdlIiwicG9ydDIiLCJwb3N0TWVzc2FnZSIsImFjdFNjb3BlRGVwdGgiLCJkaWRXYXJuTm9Bd2FpdEFjdCIsImFjdCIsInByZXZBY3RTY29wZURlcHRoIiwicHJldklzQmF0Y2hpbmdMZWdhY3kiLCJxdWV1ZSIsImZsdXNoQWN0UXVldWUiLCJwb3BBY3RTY29wZSIsInRoZW5hYmxlUmVzdWx0Iiwid2FzQXdhaXRlZCIsInJlc29sdmUiLCJyZWplY3QiLCJyZXR1cm5WYWx1ZSIsInJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsiLCJQcm9taXNlIiwiX3F1ZXVlIiwiX3RoZW5hYmxlIiwiX3RoZW5hYmxlMiIsImlzRmx1c2hpbmciLCJjcmVhdGVFbGVtZW50JDEiLCJjbG9uZUVsZW1lbnQkMSIsImNyZWF0ZUZhY3RvcnkiLCJDaGlsZHJlbiIsInJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wIiwicmVxdWlyZSIsImltZyIsIkFQUF9OQU1FIiwidmVyc2lvbiIsIkFQUF9WRVJTSU9OIiwicGFja2FnZUpzb24iLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJzZW5kQmVhY29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInVybCIsImRvY3VtZW50IiwiaHJlZiIsImRlZmF1bHRTdHlsZSIsImJveFNpemluZyIsInBhZGRpbmciLCJtYXJnaW4iLCJ2ZXJ0aWNhbEFsaWduIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiY29sb3IiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwidGV4dEFsaWduIiwidGV4dFNoYWRvdyIsInRleHRUcmFuc2Zvcm0iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJ3cmFwcGVyU3R5bGUiLCJhcHBTdHlsZXMiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImJvcmRlclRvcCIsImJveFNoYWRvdyIsImhlYWRsaW5lU3R5bGUiLCJzaWVnZWxTdHlsZSIsInBvc2l0aW9uIiwicmlnaHQiLCJzdGFyU2VjdGlvbiIsImJvcmRlckJvdHRvbSIsInN0YXJzU3R5bGUiLCJhdmVyYWdlU3R5bGUiLCJvcmdhU3R5bGUiLCJwYXJhZ3JhcGhTdHlsZSIsImxpbmtTdHlsZSIsIkFwcCIsImFiYnJldmlhdGVEYXRlIiwiZGF0ZVN0cmluZyIsIm15RGF0ZSIsIkRhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZmxvYXRBc1dvcmQiLCJudW0iLCJmbG9hdEFzSW1hZ2UiLCJzdGFyNSIsInN0YXI0NSIsInN0YXI0Iiwic3RhcjM1Iiwic3RhcjMiLCJzdGFyMjUiLCJzdGFyMiIsInN0YXIxNSIsInN0YXIxIiwic3RhcjA1Iiwic3RhcjAiLCJSZWFjdCIsInN0eWxlIiwic3JjIiwic2llZ2VsIiwiYWx0IiwibnVtX3JhdGluZ3MiLCJvcmdhbmlzYXRpb24iLCJhdmVyYWdlIiwidG9GaXhlZCIsInVwZGF0ZWRfYXQiLCJDbGllbnQiLCJfcmVmIiwiaG9zdCIsImNoZWNrU3RhdHVzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiZ2V0U3RhdHMiLCJvcmdhU2x1ZyIsIm1ldGhvZCIsImhlYWRlcnMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJTY2huZXRTaWVnZWxBcHAiLCJjbGllbnQiLCJzdGF0cyIsInNldFN0YXRzIiwib3JnYW5pc2F0aW9uX3Nob3J0bmFtZSIsIm9yZ2FuaXNhdGlvbl9zbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNhLENBQUEsSUFBSUEsQ0FBQyxHQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUM7QUFBQ0MsR0FBQUEsQ0FBQyxHQUFDRixNQUFNLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7QUFBQ0UsR0FBQUEsQ0FBQyxHQUFDSCxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFDRyxHQUFBQSxDQUFDLEdBQUNKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQUNJLEdBQUFBLENBQUMsR0FBQ0wsTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFBQ0ssR0FBQUEsQ0FBQyxHQUFDTixNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztBQUFDTSxHQUFBQSxDQUFDLEdBQUNQLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUFDTyxHQUFBQSxDQUFDLEdBQUNSLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO0FBQUNRLEdBQUFBLENBQUMsR0FBQ1QsTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7QUFBQ1MsR0FBQUEsQ0FBQyxHQUFDVixNQUFNLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7QUFBQ1UsR0FBQUEsQ0FBQyxHQUFDWCxNQUFNLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7R0FBQ1csQ0FBQyxHQUFDWixNQUFNLENBQUNhLFFBQVE7Q0FBQyxTQUFTQyxDQUFDQSxDQUFDQyxDQUFDLEVBQUM7R0FBQyxJQUFHLElBQUksS0FBR0EsQ0FBQyxJQUFFLFFBQVEsS0FBRyxPQUFPQSxDQUFDLEVBQUMsT0FBTyxJQUFJO0dBQUNBLENBQUMsR0FBQ0gsQ0FBQyxJQUFFRyxDQUFDLENBQUNILENBQUMsQ0FBQyxJQUFFRyxDQUFDLENBQUMsWUFBWSxDQUFDO0dBQUMsT0FBTSxVQUFVLEtBQUcsT0FBT0EsQ0FBQyxHQUFDQSxDQUFDLEdBQUMsSUFBSTtBQUFBO0FBQzFlLENBQUEsSUFBSUMsQ0FBQyxHQUFDO0tBQUNDLFNBQVMsRUFBQyxZQUFVO09BQUMsT0FBTSxDQUFDLENBQUM7TUFBQztLQUFDQyxrQkFBa0IsRUFBQyxZQUFVLEVBQUU7S0FBQ0MsbUJBQW1CLEVBQUMsWUFBVSxFQUFFO0tBQUNDLGVBQWUsRUFBQyxZQUFVO0lBQUc7R0FBQ0MsQ0FBQyxHQUFDQyxNQUFNLENBQUNDLE1BQU07R0FBQ0MsQ0FBQyxHQUFDLEVBQUU7QUFBQyxDQUFBLFNBQVNDLENBQUNBLENBQUNWLENBQUMsRUFBQ1csQ0FBQyxFQUFDQyxDQUFDLEVBQUM7R0FBQyxJQUFJLENBQUNDLEtBQUssR0FBQ2IsQ0FBQztHQUFDLElBQUksQ0FBQ2MsT0FBTyxHQUFDSCxDQUFDO0dBQUMsSUFBSSxDQUFDSSxJQUFJLEdBQUNOLENBQUM7QUFBQyxHQUFBLElBQUksQ0FBQ08sT0FBTyxHQUFDSixDQUFDLElBQUVYLENBQUM7QUFBQTtBQUFDUyxDQUFBQSxDQUFDLENBQUNPLFNBQVMsQ0FBQ0MsZ0JBQWdCLEdBQUMsRUFBRTtDQUNyUVIsQ0FBQyxDQUFDTyxTQUFTLENBQUNFLFFBQVEsR0FBQyxVQUFTbkIsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7QUFBQyxHQUFBLElBQUcsUUFBUSxLQUFHLE9BQU9YLENBQUMsSUFBRSxVQUFVLEtBQUcsT0FBT0EsQ0FBQyxJQUFFLElBQUksSUFBRUEsQ0FBQyxFQUFDLE1BQU1vQixLQUFLLENBQUMsdUhBQXVILENBQUM7QUFBQyxHQUFBLElBQUksQ0FBQ0osT0FBTyxDQUFDWCxlQUFlLENBQUMsSUFBSSxFQUFDTCxDQUFDLEVBQUNXLENBQUMsRUFBQyxVQUFVLENBQUM7RUFBQztBQUFDRCxDQUFBQSxDQUFDLENBQUNPLFNBQVMsQ0FBQ0ksV0FBVyxHQUFDLFVBQVNyQixDQUFDLEVBQUM7R0FBQyxJQUFJLENBQUNnQixPQUFPLENBQUNiLGtCQUFrQixDQUFDLElBQUksRUFBQ0gsQ0FBQyxFQUFDLGFBQWEsQ0FBQztFQUFDO0FBQUMsQ0FBQSxTQUFTc0IsQ0FBQ0EsR0FBRTtBQUFFQSxDQUFBQSxDQUFDLENBQUNMLFNBQVMsR0FBQ1AsQ0FBQyxDQUFDTyxTQUFTO0FBQUMsQ0FBQSxTQUFTTSxDQUFDQSxDQUFDdkIsQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsRUFBQztHQUFDLElBQUksQ0FBQ0MsS0FBSyxHQUFDYixDQUFDO0dBQUMsSUFBSSxDQUFDYyxPQUFPLEdBQUNILENBQUM7R0FBQyxJQUFJLENBQUNJLElBQUksR0FBQ04sQ0FBQztBQUFDLEdBQUEsSUFBSSxDQUFDTyxPQUFPLEdBQUNKLENBQUMsSUFBRVgsQ0FBQztBQUFBO0NBQUMsSUFBSXVCLENBQUMsR0FBQ0QsQ0FBQyxDQUFDTixTQUFTLEdBQUMsSUFBSUssQ0FBQyxFQUFBO0NBQ3RmRSxDQUFDLENBQUNDLFdBQVcsR0FBQ0YsQ0FBQztBQUFDakIsQ0FBQUEsQ0FBQyxDQUFDa0IsQ0FBQyxFQUFDZCxDQUFDLENBQUNPLFNBQVMsQ0FBQztBQUFDTyxDQUFBQSxDQUFDLENBQUNFLG9CQUFvQixHQUFDLENBQUMsQ0FBQztBQUFDLENBQUEsSUFBSUMsQ0FBQyxHQUFDQyxLQUFLLENBQUNDLE9BQU87QUFBQ0MsR0FBQUEsQ0FBQyxHQUFDdkIsTUFBTSxDQUFDVSxTQUFTLENBQUNjLGNBQWM7QUFBQ0MsR0FBQUEsQ0FBQyxHQUFDO0FBQUNDLEtBQUFBLE9BQU8sRUFBQztJQUFLO0FBQUNDLEdBQUFBLENBQUMsR0FBQztLQUFDQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO0tBQUNDLEdBQUcsRUFBQyxDQUFDLENBQUM7S0FBQ0MsTUFBTSxFQUFDLENBQUMsQ0FBQztLQUFDQyxRQUFRLEVBQUMsQ0FBQztJQUFFO0FBQ3pLLENBQUEsU0FBU0MsQ0FBQ0EsQ0FBQ3ZDLENBQUMsRUFBQ1csQ0FBQyxFQUFDQyxDQUFDLEVBQUM7QUFBQyxHQUFBLElBQUk0QixDQUFDO0tBQUNDLENBQUMsR0FBQyxFQUFFO0tBQUNDLENBQUMsR0FBQyxJQUFJO0tBQUNDLENBQUMsR0FBQyxJQUFJO0FBQUMsR0FBQSxJQUFHLElBQUksSUFBRWhDLENBQUMsRUFBQyxLQUFJNkIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFHN0IsQ0FBQyxDQUFDeUIsR0FBRyxLQUFHTyxDQUFDLEdBQUNoQyxDQUFDLENBQUN5QixHQUFHLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR3pCLENBQUMsQ0FBQ3dCLEdBQUcsS0FBR08sQ0FBQyxHQUFDLEVBQUUsR0FBQy9CLENBQUMsQ0FBQ3dCLEdBQUcsQ0FBQyxFQUFDeEIsQ0FBQyxFQUFDbUIsQ0FBQyxDQUFDYyxJQUFJLENBQUNqQyxDQUFDLEVBQUM2QixDQUFDLENBQUMsSUFBRSxDQUFDTixDQUFDLENBQUNILGNBQWMsQ0FBQ1MsQ0FBQyxDQUFDLEtBQUdDLENBQUMsQ0FBQ0QsQ0FBQyxDQUFDLEdBQUM3QixDQUFDLENBQUM2QixDQUFDLENBQUMsQ0FBQztBQUFDLEdBQUEsSUFBSUssQ0FBQyxHQUFDQyxTQUFTLENBQUNDLE1BQU0sR0FBQyxDQUFDO0FBQUMsR0FBQSxJQUFHLENBQUMsS0FBR0YsQ0FBQyxFQUFDSixDQUFDLENBQUNPLFFBQVEsR0FBQ3BDLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQyxHQUFDaUMsQ0FBQyxFQUFDO0FBQUMsS0FBQSxLQUFJLElBQUlJLENBQUMsR0FBQ3JCLEtBQUssQ0FBQ2lCLENBQUMsQ0FBQyxFQUFDSyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNMLENBQUMsRUFBQ0ssQ0FBQyxFQUFFLEVBQUNELENBQUMsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUNKLFNBQVMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQztLQUFDVCxDQUFDLENBQUNPLFFBQVEsR0FBQ0MsQ0FBQztBQUFBO0FBQUMsR0FBQSxJQUFHakQsQ0FBQyxJQUFFQSxDQUFDLENBQUNtRCxZQUFZLEVBQUMsS0FBSVgsQ0FBQyxJQUFJSyxDQUFDLEdBQUM3QyxDQUFDLENBQUNtRCxZQUFZLEVBQUNOLENBQUMsRUFBQyxLQUFLLENBQUMsS0FBR0osQ0FBQyxDQUFDRCxDQUFDLENBQUMsS0FBR0MsQ0FBQyxDQUFDRCxDQUFDLENBQUMsR0FBQ0ssQ0FBQyxDQUFDTCxDQUFDLENBQUMsQ0FBQztHQUFDLE9BQU07S0FBQ1ksUUFBUSxFQUFDcEUsQ0FBQztLQUFDcUUsSUFBSSxFQUFDckQsQ0FBQztLQUFDbUMsR0FBRyxFQUFDTyxDQUFDO0tBQUNOLEdBQUcsRUFBQ08sQ0FBQztLQUFDOUIsS0FBSyxFQUFDNEIsQ0FBQztLQUFDYSxNQUFNLEVBQUN0QixDQUFDLENBQUNDO0lBQVE7QUFBQTtBQUM3YSxDQUFBLFNBQVNzQixDQUFDQSxDQUFDdkQsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7R0FBQyxPQUFNO0tBQUN5QyxRQUFRLEVBQUNwRSxDQUFDO0tBQUNxRSxJQUFJLEVBQUNyRCxDQUFDLENBQUNxRCxJQUFJO0tBQUNsQixHQUFHLEVBQUN4QixDQUFDO0tBQUN5QixHQUFHLEVBQUNwQyxDQUFDLENBQUNvQyxHQUFHO0tBQUN2QixLQUFLLEVBQUNiLENBQUMsQ0FBQ2EsS0FBSztLQUFDeUMsTUFBTSxFQUFDdEQsQ0FBQyxDQUFDc0Q7SUFBTztBQUFBO0NBQUMsU0FBU0UsQ0FBQ0EsQ0FBQ3hELENBQUMsRUFBQztBQUFDLEdBQUEsT0FBTSxRQUFRLEtBQUcsT0FBT0EsQ0FBQyxJQUFFLElBQUksS0FBR0EsQ0FBQyxJQUFFQSxDQUFDLENBQUNvRCxRQUFRLEtBQUdwRSxDQUFDO0FBQUE7Q0FBQyxTQUFTeUUsTUFBTUEsQ0FBQ3pELENBQUMsRUFBQztHQUFDLElBQUlXLENBQUMsR0FBQztLQUFDLEdBQUcsRUFBQyxJQUFJO0FBQUMsS0FBQSxHQUFHLEVBQUM7SUFBSztHQUFDLE9BQU0sR0FBRyxHQUFDWCxDQUFDLENBQUMwRCxPQUFPLENBQUMsT0FBTyxFQUFDLFVBQVMxRCxDQUFDLEVBQUM7S0FBQyxPQUFPVyxDQUFDLENBQUNYLENBQUMsQ0FBQztBQUFBLElBQUMsQ0FBQztBQUFBO0NBQUMsSUFBSTJELENBQUMsR0FBQyxNQUFNO0FBQUMsQ0FBQSxTQUFTQyxDQUFDQSxDQUFDNUQsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7QUFBQyxHQUFBLE9BQU0sUUFBUSxLQUFHLE9BQU9YLENBQUMsSUFBRSxJQUFJLEtBQUdBLENBQUMsSUFBRSxJQUFJLElBQUVBLENBQUMsQ0FBQ21DLEdBQUcsR0FBQ3NCLE1BQU0sQ0FBQyxFQUFFLEdBQUN6RCxDQUFDLENBQUNtQyxHQUFHLENBQUMsR0FBQ3hCLENBQUMsQ0FBQ2tELFFBQVEsQ0FBQyxFQUFFLENBQUM7QUFBQTtDQUMvVyxTQUFTQyxDQUFDQSxDQUFDOUQsQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsRUFBQzRCLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0dBQUMsSUFBSUMsQ0FBQyxHQUFDLE9BQU8xQyxDQUFDO0dBQUMsSUFBRyxXQUFXLEtBQUcwQyxDQUFDLElBQUUsU0FBUyxLQUFHQSxDQUFDLEVBQUMxQyxDQUFDLEdBQUMsSUFBSTtHQUFDLElBQUkyQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0dBQUMsSUFBRyxJQUFJLEtBQUczQyxDQUFDLEVBQUMyQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFPRCxDQUFDO0FBQUUsS0FBQSxLQUFLLFFBQVE7QUFBQyxLQUFBLEtBQUssUUFBUTtPQUFDQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO09BQUM7QUFBTSxLQUFBLEtBQUssUUFBUTtPQUFDLFFBQU8zQyxDQUFDLENBQUNvRCxRQUFRO0FBQUUsU0FBQSxLQUFLcEUsQ0FBQztBQUFDLFNBQUEsS0FBS0csQ0FBQztXQUFDd0QsQ0FBQyxHQUFDLENBQUMsQ0FBQztBQUFBO0FBQUM7QUFBQyxHQUFBLElBQUdBLENBQUMsRUFBQyxPQUFPQSxDQUFDLEdBQUMzQyxDQUFDLEVBQUN5QyxDQUFDLEdBQUNBLENBQUMsQ0FBQ0UsQ0FBQyxDQUFDLEVBQUMzQyxDQUFDLEdBQUMsRUFBRSxLQUFHd0MsQ0FBQyxHQUFDLEdBQUcsR0FBQ29CLENBQUMsQ0FBQ2pCLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBQ0gsQ0FBQyxFQUFDYixDQUFDLENBQUNjLENBQUMsQ0FBQyxJQUFFN0IsQ0FBQyxHQUFDLEVBQUUsRUFBQyxJQUFJLElBQUVaLENBQUMsS0FBR1ksQ0FBQyxHQUFDWixDQUFDLENBQUMwRCxPQUFPLENBQUNDLENBQUMsRUFBQyxLQUFLLENBQUMsR0FBQyxHQUFHLENBQUMsRUFBQ0csQ0FBQyxDQUFDckIsQ0FBQyxFQUFDOUIsQ0FBQyxFQUFDQyxDQUFDLEVBQUMsRUFBRSxFQUFDLFVBQVNaLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT0EsQ0FBQztBQUFBLElBQUMsQ0FBQyxJQUFFLElBQUksSUFBRXlDLENBQUMsS0FBR2UsQ0FBQyxDQUFDZixDQUFDLENBQUMsS0FBR0EsQ0FBQyxHQUFDYyxDQUFDLENBQUNkLENBQUMsRUFBQzdCLENBQUMsSUFBRSxDQUFDNkIsQ0FBQyxDQUFDTixHQUFHLElBQUVRLENBQUMsSUFBRUEsQ0FBQyxDQUFDUixHQUFHLEtBQUdNLENBQUMsQ0FBQ04sR0FBRyxHQUFDLEVBQUUsR0FBQyxDQUFDLEVBQUUsR0FBQ00sQ0FBQyxDQUFDTixHQUFHLEVBQUV1QixPQUFPLENBQUNDLENBQUMsRUFBQyxLQUFLLENBQUMsR0FBQyxHQUFHLENBQUMsR0FBQzNELENBQUMsQ0FBQyxDQUFDLEVBQUNXLENBQUMsQ0FBQ29ELElBQUksQ0FBQ3RCLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztHQUFDRSxDQUFDLEdBQUMsQ0FBQztHQUFDSCxDQUFDLEdBQUMsRUFBRSxLQUFHQSxDQUFDLEdBQUMsR0FBRyxHQUFDQSxDQUFDLEdBQUMsR0FBRztHQUFDLElBQUdiLENBQUMsQ0FBQzNCLENBQUMsQ0FBQyxFQUFDLEtBQUksSUFBSTZDLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBQzdDLENBQUMsQ0FBQytDLE1BQU0sRUFBQ0YsQ0FBQyxFQUFFLEVBQUM7QUFBQ0gsS0FBQUEsQ0FBQyxHQUN0ZjFDLENBQUMsQ0FBQzZDLENBQUMsQ0FBQztLQUFDLElBQUlJLENBQUMsR0FBQ1QsQ0FBQyxHQUFDb0IsQ0FBQyxDQUFDbEIsQ0FBQyxFQUFDRyxDQUFDLENBQUM7QUFBQ0YsS0FBQUEsQ0FBQyxJQUFFbUIsQ0FBQyxDQUFDcEIsQ0FBQyxFQUFDL0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNxQyxDQUFDLEVBQUNSLENBQUMsQ0FBQztJQUFDLE1BQUssSUFBR1EsQ0FBQyxHQUFDbEQsQ0FBQyxDQUFDQyxDQUFDLENBQUMsRUFBQyxVQUFVLEtBQUcsT0FBT2lELENBQUMsRUFBQyxLQUFJakQsQ0FBQyxHQUFDaUQsQ0FBQyxDQUFDTCxJQUFJLENBQUM1QyxDQUFDLENBQUMsRUFBQzZDLENBQUMsR0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDSCxDQUFDLEdBQUMxQyxDQUFDLENBQUNnRSxJQUFJLEVBQUUsRUFBRUMsSUFBSSxHQUFFdkIsQ0FBQyxHQUFDQSxDQUFDLENBQUN3QixLQUFLLEVBQUNqQixDQUFDLEdBQUNULENBQUMsR0FBQ29CLENBQUMsQ0FBQ2xCLENBQUMsRUFBQ0csQ0FBQyxFQUFFLENBQUMsRUFBQ0YsQ0FBQyxJQUFFbUIsQ0FBQyxDQUFDcEIsQ0FBQyxFQUFDL0IsQ0FBQyxFQUFDQyxDQUFDLEVBQUNxQyxDQUFDLEVBQUNSLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRyxRQUFRLEtBQUdDLENBQUMsRUFBQyxNQUFNL0IsQ0FBQyxHQUFDd0QsTUFBTSxDQUFDbkUsQ0FBQyxDQUFDLEVBQUNvQixLQUFLLENBQUMsaURBQWlELElBQUUsaUJBQWlCLEtBQUdULENBQUMsR0FBQyxvQkFBb0IsR0FBQ0osTUFBTSxDQUFDNkQsSUFBSSxDQUFDcEUsQ0FBQyxDQUFDLENBQUNxRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsR0FBRyxHQUFDMUQsQ0FBQyxDQUFDLEdBQUMsMkVBQTJFLENBQUM7QUFBQyxHQUFBLE9BQU9nQyxDQUFDO0FBQUE7QUFDelosQ0FBQSxTQUFTMkIsQ0FBQ0EsQ0FBQ3RFLENBQUMsRUFBQ1csQ0FBQyxFQUFDQyxDQUFDLEVBQUM7QUFBQyxHQUFBLElBQUcsSUFBSSxJQUFFWixDQUFDLEVBQUMsT0FBT0EsQ0FBQztHQUFDLElBQUl3QyxDQUFDLEdBQUMsRUFBRTtLQUFDQyxDQUFDLEdBQUMsQ0FBQztHQUFDcUIsQ0FBQyxDQUFDOUQsQ0FBQyxFQUFDd0MsQ0FBQyxFQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsVUFBU3hDLENBQUMsRUFBQztLQUFDLE9BQU9XLENBQUMsQ0FBQ2lDLElBQUksQ0FBQ2hDLENBQUMsRUFBQ1osQ0FBQyxFQUFDeUMsQ0FBQyxFQUFFLENBQUM7QUFBQSxJQUFDLENBQUM7QUFBQyxHQUFBLE9BQU9ELENBQUM7QUFBQTtDQUFDLFNBQVMrQixDQUFDQSxDQUFDdkUsQ0FBQyxFQUFDO0FBQUMsR0FBQSxJQUFHLENBQUMsQ0FBQyxLQUFHQSxDQUFDLENBQUN3RSxPQUFPLEVBQUM7QUFBQyxLQUFBLElBQUk3RCxDQUFDLEdBQUNYLENBQUMsQ0FBQ3lFLE9BQU87S0FBQzlELENBQUMsR0FBQ0EsQ0FBQyxFQUFFO0FBQUNBLEtBQUFBLENBQUMsQ0FBQytELElBQUksQ0FBQyxVQUFTL0QsQ0FBQyxFQUFDO09BQUMsSUFBRyxDQUFDLEtBQUdYLENBQUMsQ0FBQ3dFLE9BQU8sSUFBRSxDQUFDLENBQUMsS0FBR3hFLENBQUMsQ0FBQ3dFLE9BQU8sRUFBQ3hFLENBQUMsQ0FBQ3dFLE9BQU8sR0FBQyxDQUFDLEVBQUN4RSxDQUFDLENBQUN5RSxPQUFPLEdBQUM5RCxDQUFDO01BQUMsRUFBQyxVQUFTQSxDQUFDLEVBQUM7T0FBQyxJQUFHLENBQUMsS0FBR1gsQ0FBQyxDQUFDd0UsT0FBTyxJQUFFLENBQUMsQ0FBQyxLQUFHeEUsQ0FBQyxDQUFDd0UsT0FBTyxFQUFDeEUsQ0FBQyxDQUFDd0UsT0FBTyxHQUFDLENBQUMsRUFBQ3hFLENBQUMsQ0FBQ3lFLE9BQU8sR0FBQzlELENBQUM7QUFBQSxNQUFDLENBQUM7QUFBQyxLQUFBLENBQUMsQ0FBQyxLQUFHWCxDQUFDLENBQUN3RSxPQUFPLEtBQUd4RSxDQUFDLENBQUN3RSxPQUFPLEdBQUMsQ0FBQyxFQUFDeEUsQ0FBQyxDQUFDeUUsT0FBTyxHQUFDOUQsQ0FBQyxDQUFDO0FBQUE7R0FBQyxJQUFHLENBQUMsS0FBR1gsQ0FBQyxDQUFDd0UsT0FBTyxFQUFDLE9BQU94RSxDQUFDLENBQUN5RSxPQUFPLENBQUNFLE9BQU87R0FBQyxNQUFNM0UsQ0FBQyxDQUFDeUUsT0FBTztBQUFDO0FBQzVaLENBQUEsSUFBSUcsQ0FBQyxHQUFDO0FBQUMzQyxLQUFBQSxPQUFPLEVBQUM7SUFBSztBQUFDNEMsR0FBQUEsQ0FBQyxHQUFDO0FBQUNDLEtBQUFBLFVBQVUsRUFBQztJQUFLO0FBQUNDLEdBQUFBLENBQUMsR0FBQztLQUFDQyxzQkFBc0IsRUFBQ0osQ0FBQztLQUFDSyx1QkFBdUIsRUFBQ0osQ0FBQztBQUFDSyxLQUFBQSxpQkFBaUIsRUFBQ2xEO0lBQUU7QUFBQyxDQUFBLFNBQVNtRCxDQUFDQSxHQUFFO0dBQUMsTUFBTS9ELEtBQUssQ0FBQywwREFBMEQsQ0FBQztBQUFDO0FBQ3pNZ0UsQ0FBQUEsb0JBQUFBLENBQUFBLFFBQWdCLEdBQUM7R0FBQ0MsR0FBRyxFQUFDZixDQUFDO0dBQUNnQixPQUFPLEVBQUMsVUFBU3RGLENBQUMsRUFBQ1csQ0FBQyxFQUFDQyxDQUFDLEVBQUM7S0FBQzBELENBQUMsQ0FBQ3RFLENBQUMsRUFBQyxZQUFVO0FBQUNXLE9BQUFBLENBQUMsQ0FBQzRFLEtBQUssQ0FBQyxJQUFJLEVBQUN6QyxTQUFTLENBQUM7TUFBQyxFQUFDbEMsQ0FBQyxDQUFDO0lBQUM7QUFBQzRFLEdBQUFBLEtBQUssRUFBQyxVQUFTeEYsQ0FBQyxFQUFDO0tBQUMsSUFBSVcsQ0FBQyxHQUFDLENBQUM7S0FBQzJELENBQUMsQ0FBQ3RFLENBQUMsRUFBQyxZQUFVO0FBQUNXLE9BQUFBLENBQUMsRUFBRTtBQUFBLE1BQUMsQ0FBQztBQUFDLEtBQUEsT0FBT0EsQ0FBQztJQUFDO0FBQUM4RSxHQUFBQSxPQUFPLEVBQUMsVUFBU3pGLENBQUMsRUFBQztBQUFDLEtBQUEsT0FBT3NFLENBQUMsQ0FBQ3RFLENBQUMsRUFBQyxVQUFTQSxDQUFDLEVBQUM7QUFBQyxPQUFBLE9BQU9BLENBQUM7TUFBQyxDQUFDLElBQUUsRUFBRTtJQUFDO0FBQUMwRixHQUFBQSxJQUFJLEVBQUMsVUFBUzFGLENBQUMsRUFBQztLQUFDLElBQUcsQ0FBQ3dELENBQUMsQ0FBQ3hELENBQUMsQ0FBQyxFQUFDLE1BQU1vQixLQUFLLENBQUMsdUVBQXVFLENBQUM7QUFBQyxLQUFBLE9BQU9wQixDQUFDO0FBQUE7RUFBRTtBQUFDb0YsQ0FBQUEsb0JBQUFBLENBQUFBLFNBQWlCLEdBQUMxRSxDQUFDO0FBQUMwRSxDQUFBQSxvQkFBQUEsQ0FBQUEsUUFBZ0IsR0FBQ2hHLENBQUM7QUFBQ2dHLENBQUFBLG9CQUFBQSxDQUFBQSxRQUFnQixHQUFDOUYsQ0FBQztBQUFDOEYsQ0FBQUEsb0JBQUFBLENBQUFBLGFBQXFCLEdBQUM3RCxDQUFDO0FBQUM2RCxDQUFBQSxvQkFBQUEsQ0FBQUEsVUFBa0IsR0FBQy9GLENBQUM7QUFBQytGLENBQUFBLG9CQUFBQSxDQUFBQSxRQUFnQixHQUFDMUYsQ0FBQztBQUNuYzBGLENBQUFBLG9CQUFBQSxDQUFBQSxrREFBMEQsR0FBQ0wsQ0FBQztBQUFDSyxDQUFBQSxvQkFBQUEsQ0FBQUEsR0FBVyxHQUFDRCxDQUFDO0FBQzFFQyxDQUFBQSxvQkFBQUEsQ0FBQUEsWUFBb0IsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsRUFBQztBQUFDLEdBQUEsSUFBRyxJQUFJLEtBQUdaLENBQUMsSUFBRSxLQUFLLENBQUMsS0FBR0EsQ0FBQyxFQUFDLE1BQU1vQixLQUFLLENBQUMsZ0ZBQWdGLEdBQUNwQixDQUFDLEdBQUMsR0FBRyxDQUFDO0dBQUMsSUFBSXdDLENBQUMsR0FBQ2xDLENBQUMsQ0FBQyxFQUFFLEVBQUNOLENBQUMsQ0FBQ2EsS0FBSyxDQUFDO0tBQUM0QixDQUFDLEdBQUN6QyxDQUFDLENBQUNtQyxHQUFHO0tBQUNPLENBQUMsR0FBQzFDLENBQUMsQ0FBQ29DLEdBQUc7S0FBQ08sQ0FBQyxHQUFDM0MsQ0FBQyxDQUFDc0QsTUFBTTtHQUFDLElBQUcsSUFBSSxJQUFFM0MsQ0FBQyxFQUFDO0FBQUMsS0FBQSxLQUFLLENBQUMsS0FBR0EsQ0FBQyxDQUFDeUIsR0FBRyxLQUFHTSxDQUFDLEdBQUMvQixDQUFDLENBQUN5QixHQUFHLEVBQUNPLENBQUMsR0FBQ1gsQ0FBQyxDQUFDQyxPQUFPLENBQUM7QUFBQyxLQUFBLEtBQUssQ0FBQyxLQUFHdEIsQ0FBQyxDQUFDd0IsR0FBRyxLQUFHTSxDQUFDLEdBQUMsRUFBRSxHQUFDOUIsQ0FBQyxDQUFDd0IsR0FBRyxDQUFDO0FBQUMsS0FBQSxJQUFHbkMsQ0FBQyxDQUFDcUQsSUFBSSxJQUFFckQsQ0FBQyxDQUFDcUQsSUFBSSxDQUFDRixZQUFZLEVBQUMsSUFBSU4sQ0FBQyxHQUFDN0MsQ0FBQyxDQUFDcUQsSUFBSSxDQUFDRixZQUFZO0tBQUMsS0FBSUYsQ0FBQyxJQUFJdEMsQ0FBQyxFQUFDbUIsQ0FBQyxDQUFDYyxJQUFJLENBQUNqQyxDQUFDLEVBQUNzQyxDQUFDLENBQUMsSUFBRSxDQUFDZixDQUFDLENBQUNILGNBQWMsQ0FBQ2tCLENBQUMsQ0FBQyxLQUFHVCxDQUFDLENBQUNTLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQyxLQUFHdEMsQ0FBQyxDQUFDc0MsQ0FBQyxDQUFDLElBQUUsS0FBSyxDQUFDLEtBQUdKLENBQUMsR0FBQ0EsQ0FBQyxDQUFDSSxDQUFDLENBQUMsR0FBQ3RDLENBQUMsQ0FBQ3NDLENBQUMsQ0FBQyxDQUFDO0FBQUE7QUFBQyxHQUFBLElBQUlBLENBQUMsR0FBQ0gsU0FBUyxDQUFDQyxNQUFNLEdBQUMsQ0FBQztBQUFDLEdBQUEsSUFBRyxDQUFDLEtBQUdFLENBQUMsRUFBQ1QsQ0FBQyxDQUFDUSxRQUFRLEdBQUNwQyxDQUFDLENBQUMsS0FBSyxJQUFHLENBQUMsR0FBQ3FDLENBQUMsRUFBQztBQUFDSixLQUFBQSxDQUFDLEdBQUNqQixLQUFLLENBQUNxQixDQUFDLENBQUM7S0FDdmYsS0FBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBQyxFQUFDQSxDQUFDLEdBQUNELENBQUMsRUFBQ0MsQ0FBQyxFQUFFLEVBQUNMLENBQUMsQ0FBQ0ssQ0FBQyxDQUFDLEdBQUNKLFNBQVMsQ0FBQ0ksQ0FBQyxHQUFDLENBQUMsQ0FBQztLQUFDVixDQUFDLENBQUNRLFFBQVEsR0FBQ0gsQ0FBQztBQUFBO0dBQUMsT0FBTTtLQUFDTyxRQUFRLEVBQUNwRSxDQUFDO0tBQUNxRSxJQUFJLEVBQUNyRCxDQUFDLENBQUNxRCxJQUFJO0tBQUNsQixHQUFHLEVBQUNNLENBQUM7S0FBQ0wsR0FBRyxFQUFDTSxDQUFDO0tBQUM3QixLQUFLLEVBQUMyQixDQUFDO0FBQUNjLEtBQUFBLE1BQU0sRUFBQ1g7SUFBRTtFQUFDO0FBQUN5QyxDQUFxQixvQkFBQSxDQUFBLGFBQUEsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDO0FBQUNBLEdBQUFBLENBQUMsR0FBQztLQUFDb0QsUUFBUSxFQUFDNUQsQ0FBQztLQUFDbUcsYUFBYSxFQUFDM0YsQ0FBQztLQUFDNEYsY0FBYyxFQUFDNUYsQ0FBQztLQUFDNkYsWUFBWSxFQUFDLENBQUM7S0FBQ0MsUUFBUSxFQUFDLElBQUk7S0FBQ0MsUUFBUSxFQUFDLElBQUk7S0FBQ0MsYUFBYSxFQUFDLElBQUk7QUFBQ0MsS0FBQUEsV0FBVyxFQUFDO0lBQUs7R0FBQ2pHLENBQUMsQ0FBQzhGLFFBQVEsR0FBQztLQUFDMUMsUUFBUSxFQUFDN0QsQ0FBQztBQUFDMkcsS0FBQUEsUUFBUSxFQUFDbEc7SUFBRTtBQUFDLEdBQUEsT0FBT0EsQ0FBQyxDQUFDK0YsUUFBUSxHQUFDL0YsQ0FBQztFQUFDO0FBQUNvRixDQUFBQSxvQkFBQUEsQ0FBQUEsYUFBcUIsR0FBQzdDLENBQUM7QUFBQzZDLENBQXFCLG9CQUFBLENBQUEsYUFBQSxHQUFDLFVBQVNwRixDQUFDLEVBQUM7R0FBQyxJQUFJVyxDQUFDLEdBQUM0QixDQUFDLENBQUM0RCxJQUFJLENBQUMsSUFBSSxFQUFDbkcsQ0FBQyxDQUFDO0dBQUNXLENBQUMsQ0FBQzBDLElBQUksR0FBQ3JELENBQUM7QUFBQyxHQUFBLE9BQU9XLENBQUM7RUFBQztBQUFDeUUsQ0FBQUEsb0JBQUFBLENBQUFBLFNBQWlCLEdBQUMsWUFBVTtHQUFDLE9BQU07QUFBQ25ELEtBQUFBLE9BQU8sRUFBQztJQUFLO0VBQUM7QUFDL2RtRCxDQUFrQixvQkFBQSxDQUFBLFVBQUEsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDO0dBQUMsT0FBTTtLQUFDb0QsUUFBUSxFQUFDM0QsQ0FBQztBQUFDMkcsS0FBQUEsTUFBTSxFQUFDcEc7SUFBRTtFQUFDO0FBQUNvRixDQUFBQSxvQkFBQUEsQ0FBQUEsY0FBc0IsR0FBQzVCLENBQUM7QUFBQzRCLENBQVksb0JBQUEsQ0FBQSxJQUFBLEdBQUMsVUFBU3BGLENBQUMsRUFBQztHQUFDLE9BQU07S0FBQ29ELFFBQVEsRUFBQ3hELENBQUM7QUFBQ3lHLEtBQUFBLFFBQVEsRUFBQztPQUFDN0IsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUFDQyxPQUFBQSxPQUFPLEVBQUN6RTtNQUFFO0FBQUNzRyxLQUFBQSxLQUFLLEVBQUMvQjtJQUFFO0VBQUM7QUFBQ2EsQ0FBQUEsb0JBQUFBLENBQUFBLElBQVksR0FBQyxVQUFTcEYsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7R0FBQyxPQUFNO0tBQUN5QyxRQUFRLEVBQUN6RCxDQUFDO0tBQUMwRCxJQUFJLEVBQUNyRCxDQUFDO0tBQUN1RyxPQUFPLEVBQUMsS0FBSyxDQUFDLEtBQUc1RixDQUFDLEdBQUMsSUFBSSxHQUFDQTtJQUFFO0VBQUM7QUFBQ3lFLENBQXVCLG9CQUFBLENBQUEsZUFBQSxHQUFDLFVBQVNwRixDQUFDLEVBQUM7QUFBQyxHQUFBLElBQUlXLENBQUMsR0FBQ2tFLENBQUMsQ0FBQ0MsVUFBVTtBQUFDRCxHQUFBQSxDQUFDLENBQUNDLFVBQVUsR0FBQyxFQUFFO0dBQUMsSUFBRztBQUFDOUUsS0FBQUEsQ0FBQyxFQUFFO0FBQUEsSUFBQyxTQUFPO0tBQUM2RSxDQUFDLENBQUNDLFVBQVUsR0FBQ25FLENBQUM7QUFBQTtFQUFFO0FBQUN5RSxDQUFBQSxvQkFBQUEsQ0FBQUEsWUFBb0IsR0FBQ0QsQ0FBQztBQUFDQyxDQUFBQSxvQkFBQUEsQ0FBQUEsV0FBbUIsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7R0FBQyxPQUFPaUUsQ0FBQyxDQUFDM0MsT0FBTyxDQUFDdUUsV0FBVyxDQUFDeEcsQ0FBQyxFQUFDVyxDQUFDLENBQUM7RUFBQztBQUFDeUUsQ0FBa0Isb0JBQUEsQ0FBQSxVQUFBLEdBQUMsVUFBU3BGLENBQUMsRUFBQztHQUFDLE9BQU80RSxDQUFDLENBQUMzQyxPQUFPLENBQUN3RSxVQUFVLENBQUN6RyxDQUFDLENBQUM7RUFBQztBQUM1Zm9GLENBQXFCLG9CQUFBLENBQUEsYUFBQSxHQUFDLFlBQVUsRUFBRTtBQUFDQSxDQUF3QixvQkFBQSxDQUFBLGdCQUFBLEdBQUMsVUFBU3BGLENBQUMsRUFBQztHQUFDLE9BQU80RSxDQUFDLENBQUMzQyxPQUFPLENBQUN5RSxnQkFBZ0IsQ0FBQzFHLENBQUMsQ0FBQztFQUFDO0FBQUNvRixDQUFBQSxvQkFBQUEsQ0FBQUEsU0FBaUIsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDVyxDQUFDLEVBQUM7R0FBQyxPQUFPaUUsQ0FBQyxDQUFDM0MsT0FBTyxDQUFDMEUsU0FBUyxDQUFDM0csQ0FBQyxFQUFDVyxDQUFDLENBQUM7RUFBQztBQUFDeUUsQ0FBQUEsb0JBQUFBLENBQUFBLEtBQWEsR0FBQyxZQUFVO0FBQUMsR0FBQSxPQUFPUixDQUFDLENBQUMzQyxPQUFPLENBQUMyRSxLQUFLLEVBQUU7RUFBQztBQUFDeEIsQ0FBQUEsb0JBQUFBLENBQUFBLG1CQUEyQixHQUFDLFVBQVNwRixDQUFDLEVBQUNXLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0dBQUMsT0FBT2dFLENBQUMsQ0FBQzNDLE9BQU8sQ0FBQzRFLG1CQUFtQixDQUFDN0csQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsQ0FBQztFQUFDO0FBQUN3RSxDQUFBQSxvQkFBQUEsQ0FBQUEsa0JBQTBCLEdBQUMsVUFBU3BGLENBQUMsRUFBQ1csQ0FBQyxFQUFDO0dBQUMsT0FBT2lFLENBQUMsQ0FBQzNDLE9BQU8sQ0FBQzZFLGtCQUFrQixDQUFDOUcsQ0FBQyxFQUFDVyxDQUFDLENBQUM7RUFBQztBQUFDeUUsQ0FBQUEsb0JBQUFBLENBQUFBLGVBQXVCLEdBQUMsVUFBU3BGLENBQUMsRUFBQ1csQ0FBQyxFQUFDO0dBQUMsT0FBT2lFLENBQUMsQ0FBQzNDLE9BQU8sQ0FBQzhFLGVBQWUsQ0FBQy9HLENBQUMsRUFBQ1csQ0FBQyxDQUFDO0VBQUM7QUFDMWR5RSxDQUFBQSxvQkFBQUEsQ0FBQUEsT0FBZSxHQUFDLFVBQVNwRixDQUFDLEVBQUNXLENBQUMsRUFBQztHQUFDLE9BQU9pRSxDQUFDLENBQUMzQyxPQUFPLENBQUMrRSxPQUFPLENBQUNoSCxDQUFDLEVBQUNXLENBQUMsQ0FBQztFQUFDO0FBQUN5RSxDQUFBQSxvQkFBQUEsQ0FBQUEsVUFBa0IsR0FBQyxVQUFTcEYsQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsRUFBQztHQUFDLE9BQU9nRSxDQUFDLENBQUMzQyxPQUFPLENBQUNnRixVQUFVLENBQUNqSCxDQUFDLEVBQUNXLENBQUMsRUFBQ0MsQ0FBQyxDQUFDO0VBQUM7QUFBQ3dFLENBQWMsb0JBQUEsQ0FBQSxNQUFBLEdBQUMsVUFBU3BGLENBQUMsRUFBQztHQUFDLE9BQU80RSxDQUFDLENBQUMzQyxPQUFPLENBQUNpRixNQUFNLENBQUNsSCxDQUFDLENBQUM7RUFBQztBQUFDb0YsQ0FBZ0Isb0JBQUEsQ0FBQSxRQUFBLEdBQUMsVUFBU3BGLENBQUMsRUFBQztHQUFDLE9BQU80RSxDQUFDLENBQUMzQyxPQUFPLENBQUNrRixRQUFRLENBQUNuSCxDQUFDLENBQUM7RUFBQztBQUFDb0YsQ0FBQUEsb0JBQUFBLENBQUFBLG9CQUE0QixHQUFDLFVBQVNwRixDQUFDLEVBQUNXLENBQUMsRUFBQ0MsQ0FBQyxFQUFDO0dBQUMsT0FBT2dFLENBQUMsQ0FBQzNDLE9BQU8sQ0FBQ21GLG9CQUFvQixDQUFDcEgsQ0FBQyxFQUFDVyxDQUFDLEVBQUNDLENBQUMsQ0FBQztFQUFDO0FBQUN3RSxDQUFBQSxvQkFBQUEsQ0FBQUEsYUFBcUIsR0FBQyxZQUFVO0FBQUMsR0FBQSxPQUFPUixDQUFDLENBQUMzQyxPQUFPLENBQUNvRixhQUFhLEVBQUU7RUFBQztBQUFDakMsQ0FBQUEsb0JBQUFBLENBQUFBLE9BQWUsR0FBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNWEsRUFBQSxJQUFJa0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxZQUFZLEVBQUU7QUFDekMsSUFBQSxDQUFDLFlBQVc7O0FBSWQ7TUFDQSxJQUNFLE9BQU9DLDhCQUE4QixLQUFLLFdBQVcsSUFDckQsT0FBT0EsOEJBQThCLENBQUNDLDJCQUEyQixLQUMvRCxVQUFVLEVBQ1o7QUFDQUQsUUFBQUEsOEJBQThCLENBQUNDLDJCQUEyQixDQUFDLElBQUl0RyxLQUFLLEVBQUUsQ0FBQztBQUN6RTtNQUNVLElBQUl1RyxZQUFZLEdBQUcsUUFBUTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7TUFDQSxJQUFJQyxrQkFBa0IsR0FBRzNJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztNQUNwRCxJQUFJMkksaUJBQWlCLEdBQUc1SSxNQUFNLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7TUFDbEQsSUFBSTRJLG1CQUFtQixHQUFHN0ksTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDdEQsSUFBSTZJLHNCQUFzQixHQUFHOUksTUFBTSxDQUFDQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7TUFDNUQsSUFBSThJLG1CQUFtQixHQUFHL0ksTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDdEQsSUFBSStJLG1CQUFtQixHQUFHaEosTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUM7TUFDdEQsSUFBSWdKLGtCQUFrQixHQUFHakosTUFBTSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO01BQ3BELElBQUlpSixzQkFBc0IsR0FBR2xKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLG1CQUFtQixDQUFDO01BQzVELElBQUlrSixtQkFBbUIsR0FBR25KLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDO01BQ3RELElBQUltSix3QkFBd0IsR0FBR3BKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLHFCQUFxQixDQUFDO01BQ2hFLElBQUlvSixlQUFlLEdBQUdySixNQUFNLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7TUFDOUMsSUFBSXFKLGVBQWUsR0FBR3RKLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztNQUM5QyxJQUFJc0osb0JBQW9CLEdBQUd2SixNQUFNLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztBQUN4RCxNQUFBLElBQUl1SixxQkFBcUIsR0FBR3hKLE1BQU0sQ0FBQ2EsUUFBUTtNQUMzQyxJQUFJNEksb0JBQW9CLEdBQUcsWUFBWTtNQUN2QyxTQUFTQyxhQUFhQSxDQUFDQyxhQUFhLEVBQUU7UUFDcEMsSUFBSUEsYUFBYSxLQUFLLElBQUksSUFBSSxPQUFPQSxhQUFhLEtBQUssUUFBUSxFQUFFO0FBQy9ELFVBQUEsT0FBTyxJQUFJO0FBQ2I7QUFFQSxRQUFBLElBQUlDLGFBQWEsR0FBR0oscUJBQXFCLElBQUlHLGFBQWEsQ0FBQ0gscUJBQXFCLENBQUMsSUFBSUcsYUFBYSxDQUFDRixvQkFBb0IsQ0FBQztBQUV4SCxRQUFBLElBQUksT0FBT0csYUFBYSxLQUFLLFVBQVUsRUFBRTtBQUN2QyxVQUFBLE9BQU9BLGFBQWE7QUFDdEI7QUFFQSxRQUFBLE9BQU8sSUFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtNQUNBLElBQUk3RCxzQkFBc0IsR0FBRztBQUMzQjtBQUNGO0FBQ0E7QUFDQTtBQUNFL0MsUUFBQUEsT0FBTyxFQUFFO09BQ1Y7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7TUFDQSxJQUFJZ0QsdUJBQXVCLEdBQUc7QUFDNUJILFFBQUFBLFVBQVUsRUFBRTtPQUNiO01BRUQsSUFBSWdFLG9CQUFvQixHQUFHO1FBQ3pCN0csT0FBTyxFQUFFLElBQUk7QUFDYjtRQUNBOEcsZ0JBQWdCLEVBQUUsS0FBSztBQUN2QkMsUUFBQUEsdUJBQXVCLEVBQUU7T0FDMUI7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0EsSUFBSTlELGlCQUFpQixHQUFHO0FBQ3RCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0VqRCxRQUFBQSxPQUFPLEVBQUU7T0FDVjtNQUVELElBQUlnSCxzQkFBc0IsR0FBRyxFQUFFO01BQy9CLElBQUlDLHNCQUFzQixHQUFHLElBQUk7TUFDakMsU0FBU0Msa0JBQWtCQSxDQUFDQyxLQUFLLEVBQUU7UUFDakM7VUFDRUYsc0JBQXNCLEdBQUdFLEtBQUs7QUFDaEM7QUFDRjtNQUVBO0FBQ0VILFFBQUFBLHNCQUFzQixDQUFDRSxrQkFBa0IsR0FBRyxVQUFVQyxLQUFLLEVBQUU7VUFDM0Q7WUFDRUYsc0JBQXNCLEdBQUdFLEtBQUs7QUFDaEM7QUFDRixTQUFDLENBQUM7O1FBR0ZILHNCQUFzQixDQUFDSSxlQUFlLEdBQUcsSUFBSTtRQUU3Q0osc0JBQXNCLENBQUNLLGdCQUFnQixHQUFHLFlBQVk7QUFDcEQsVUFBQSxJQUFJRixLQUFLLEdBQUcsRUFBRSxDQUFDOztVQUVmLElBQUlGLHNCQUFzQixFQUFFO1lBQzFCRSxLQUFLLElBQUlGLHNCQUFzQjtXQUNoQzs7QUFHRCxVQUFBLElBQUlLLElBQUksR0FBR04sc0JBQXNCLENBQUNJLGVBQWU7VUFFakQsSUFBSUUsSUFBSSxFQUFFO0FBQ1JILFlBQUFBLEtBQUssSUFBSUcsSUFBSSxFQUFFLElBQUksRUFBRTtBQUN2QjtBQUVBLFVBQUEsT0FBT0gsS0FBSztTQUNiO0FBQ0g7O0FBRUE7O0FBRUEsTUFBQSxJQUFJSSxjQUFjLEdBQUcsS0FBSyxDQUFDO01BQzNCLElBQUlDLGtCQUFrQixHQUFHLEtBQUs7QUFDOUIsTUFBQSxJQUFJQyx1QkFBdUIsR0FBRyxLQUFLLENBQUM7O0FBRXBDLE1BQUEsSUFBSUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0FBQy9CO0FBQ0E7O0FBRUEsTUFBQSxJQUFJQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7O01BRS9CLElBQUlDLG9CQUFvQixHQUFHO1FBQ3pCN0Usc0JBQXNCLEVBQUVBLHNCQUFzQjtRQUM5Q0MsdUJBQXVCLEVBQUVBLHVCQUF1QjtBQUNoREMsUUFBQUEsaUJBQWlCLEVBQUVBO09BQ3BCO01BRUQ7UUFDRTJFLG9CQUFvQixDQUFDWixzQkFBc0IsR0FBR0Esc0JBQXNCO1FBQ3BFWSxvQkFBb0IsQ0FBQ2Ysb0JBQW9CLEdBQUdBLG9CQUFvQjtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7TUFFQSxTQUFTZ0IsSUFBSUEsQ0FBQ0MsTUFBTSxFQUFFO1FBQ3BCO1VBQ0U7QUFDRSxZQUFBLEtBQUssSUFBSUMsSUFBSSxHQUFHbEgsU0FBUyxDQUFDQyxNQUFNLEVBQUVrSCxJQUFJLEdBQUcsSUFBSXJJLEtBQUssQ0FBQ29JLElBQUksR0FBRyxDQUFDLEdBQUdBLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVFLElBQUksR0FBRyxDQUFDLEVBQUVBLElBQUksR0FBR0YsSUFBSSxFQUFFRSxJQUFJLEVBQUUsRUFBRTtjQUMxR0QsSUFBSSxDQUFDQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdwSCxTQUFTLENBQUNvSCxJQUFJLENBQUM7QUFDbEM7QUFFQUMsWUFBQUEsWUFBWSxDQUFDLE1BQU0sRUFBRUosTUFBTSxFQUFFRSxJQUFJLENBQUM7QUFDcEM7QUFDRjtBQUNGO01BQ0EsU0FBU0csS0FBS0EsQ0FBQ0wsTUFBTSxFQUFFO1FBQ3JCO1VBQ0U7QUFDRSxZQUFBLEtBQUssSUFBSU0sS0FBSyxHQUFHdkgsU0FBUyxDQUFDQyxNQUFNLEVBQUVrSCxJQUFJLEdBQUcsSUFBSXJJLEtBQUssQ0FBQ3lJLEtBQUssR0FBRyxDQUFDLEdBQUdBLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUVDLEtBQUssR0FBRyxDQUFDLEVBQUVBLEtBQUssR0FBR0QsS0FBSyxFQUFFQyxLQUFLLEVBQUUsRUFBRTtjQUNqSEwsSUFBSSxDQUFDSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUd4SCxTQUFTLENBQUN3SCxLQUFLLENBQUM7QUFDcEM7QUFFQUgsWUFBQUEsWUFBWSxDQUFDLE9BQU8sRUFBRUosTUFBTSxFQUFFRSxJQUFJLENBQUM7QUFDckM7QUFDRjtBQUNGO01BRUEsU0FBU0UsWUFBWUEsQ0FBQ0ksS0FBSyxFQUFFUixNQUFNLEVBQUVFLElBQUksRUFBRTtBQUN6QztBQUNBO1FBQ0E7QUFDRSxVQUFBLElBQUloQixzQkFBc0IsR0FBR1ksb0JBQW9CLENBQUNaLHNCQUFzQjtBQUN4RSxVQUFBLElBQUlHLEtBQUssR0FBR0gsc0JBQXNCLENBQUNLLGdCQUFnQixFQUFFO1VBRXJELElBQUlGLEtBQUssS0FBSyxFQUFFLEVBQUU7WUFDaEJXLE1BQU0sSUFBSSxJQUFJO1lBQ2RFLElBQUksR0FBR0EsSUFBSSxDQUFDTyxNQUFNLENBQUMsQ0FBQ3BCLEtBQUssQ0FBQyxDQUFDO1dBQzVCOztVQUdELElBQUlxQixjQUFjLEdBQUdSLElBQUksQ0FBQzVFLEdBQUcsQ0FBQyxVQUFVcUYsSUFBSSxFQUFFO1lBQzVDLE9BQU92RyxNQUFNLENBQUN1RyxJQUFJLENBQUM7V0FDcEIsQ0FBQyxDQUFDOztVQUVIRCxjQUFjLENBQUNFLE9BQU8sQ0FBQyxXQUFXLEdBQUdaLE1BQU0sQ0FBQyxDQUFDO0FBQzdDO0FBQ0E7O0FBRUFhLFVBQUFBLFFBQVEsQ0FBQzNKLFNBQVMsQ0FBQ3NFLEtBQUssQ0FBQzNDLElBQUksQ0FBQ2lJLE9BQU8sQ0FBQ04sS0FBSyxDQUFDLEVBQUVNLE9BQU8sRUFBRUosY0FBYyxDQUFDO0FBQ3hFO0FBQ0Y7TUFFQSxJQUFJSyx1Q0FBdUMsR0FBRyxFQUFFO0FBRWhELE1BQUEsU0FBU0MsUUFBUUEsQ0FBQ0MsY0FBYyxFQUFFQyxVQUFVLEVBQUU7UUFDNUM7QUFDRSxVQUFBLElBQUlDLFlBQVksR0FBR0YsY0FBYyxDQUFDdkosV0FBVztBQUM3QyxVQUFBLElBQUkwSixhQUFhLEdBQUdELFlBQVksS0FBS0EsWUFBWSxDQUFDRSxXQUFXLElBQUlGLFlBQVksQ0FBQ0csSUFBSSxDQUFDLElBQUksWUFBWTtBQUNuRyxVQUFBLElBQUlDLFVBQVUsR0FBR0gsYUFBYSxHQUFHLEdBQUcsR0FBR0YsVUFBVTtBQUVqRCxVQUFBLElBQUlILHVDQUF1QyxDQUFDUSxVQUFVLENBQUMsRUFBRTtZQUN2RDtBQUNGO0FBRUFsQixVQUFBQSxLQUFLLENBQUMsd0RBQXdELEdBQUcsb0VBQW9FLEdBQUcscUVBQXFFLEdBQUcsNERBQTRELEVBQUVhLFVBQVUsRUFBRUUsYUFBYSxDQUFDO0FBRXhTTCxVQUFBQSx1Q0FBdUMsQ0FBQ1EsVUFBVSxDQUFDLEdBQUcsSUFBSTtBQUM1RDtBQUNGO0FBQ0E7QUFDQTtBQUNBOztNQUdBLElBQUlDLG9CQUFvQixHQUFHO0FBQ3pCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VyTCxRQUFBQSxTQUFTLEVBQUUsVUFBVThLLGNBQWMsRUFBRTtBQUNuQyxVQUFBLE9BQU8sS0FBSztTQUNiO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1FBQ0U3SyxrQkFBa0IsRUFBRSxVQUFVNkssY0FBYyxFQUFFUSxRQUFRLEVBQUVQLFVBQVUsRUFBRTtBQUNsRUYsVUFBQUEsUUFBUSxDQUFDQyxjQUFjLEVBQUUsYUFBYSxDQUFDO1NBQ3hDO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDRTVLLG1CQUFtQixFQUFFLFVBQVU0SyxjQUFjLEVBQUVTLGFBQWEsRUFBRUQsUUFBUSxFQUFFUCxVQUFVLEVBQUU7QUFDbEZGLFVBQUFBLFFBQVEsQ0FBQ0MsY0FBYyxFQUFFLGNBQWMsQ0FBQztTQUN6QztBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtRQUNFM0ssZUFBZSxFQUFFLFVBQVUySyxjQUFjLEVBQUVVLFlBQVksRUFBRUYsUUFBUSxFQUFFUCxVQUFVLEVBQUU7QUFDN0VGLFVBQUFBLFFBQVEsQ0FBQ0MsY0FBYyxFQUFFLFVBQVUsQ0FBQztBQUN0QztPQUNEO0FBRUQsTUFBQSxJQUFJeEssTUFBTSxHQUFHRCxNQUFNLENBQUNDLE1BQU07TUFFMUIsSUFBSW1MLFdBQVcsR0FBRyxFQUFFO01BRXBCO0FBQ0VwTCxRQUFBQSxNQUFNLENBQUNxTCxNQUFNLENBQUNELFdBQVcsQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7TUFHQSxTQUFTRSxTQUFTQSxDQUFDaEwsS0FBSyxFQUFFQyxPQUFPLEVBQUVFLE9BQU8sRUFBRTtRQUMxQyxJQUFJLENBQUNILEtBQUssR0FBR0EsS0FBSztBQUNsQixRQUFBLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPLENBQUM7O0FBRXZCLFFBQUEsSUFBSSxDQUFDQyxJQUFJLEdBQUc0SyxXQUFXLENBQUM7QUFDeEI7O0FBRUEsUUFBQSxJQUFJLENBQUMzSyxPQUFPLEdBQUdBLE9BQU8sSUFBSXVLLG9CQUFvQjtBQUNoRDtBQUVBTSxNQUFBQSxTQUFTLENBQUM1SyxTQUFTLENBQUNDLGdCQUFnQixHQUFHLEVBQUU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BRUEySyxTQUFTLENBQUM1SyxTQUFTLENBQUNFLFFBQVEsR0FBRyxVQUFVdUssWUFBWSxFQUFFRixRQUFRLEVBQUU7QUFDL0QsUUFBQSxJQUFJLE9BQU9FLFlBQVksS0FBSyxRQUFRLElBQUksT0FBT0EsWUFBWSxLQUFLLFVBQVUsSUFBSUEsWUFBWSxJQUFJLElBQUksRUFBRTtBQUNsRyxVQUFBLE1BQU0sSUFBSXRLLEtBQUssQ0FBQyxtRUFBbUUsR0FBRyxzREFBc0QsQ0FBQztBQUMvSTtBQUVBLFFBQUEsSUFBSSxDQUFDSixPQUFPLENBQUNYLGVBQWUsQ0FBQyxJQUFJLEVBQUVxTCxZQUFZLEVBQUVGLFFBQVEsRUFBRSxVQUFVLENBQUM7T0FDdkU7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQUdBSyxTQUFTLENBQUM1SyxTQUFTLENBQUNJLFdBQVcsR0FBRyxVQUFVbUssUUFBUSxFQUFFO1FBQ3BELElBQUksQ0FBQ3hLLE9BQU8sQ0FBQ2Isa0JBQWtCLENBQUMsSUFBSSxFQUFFcUwsUUFBUSxFQUFFLGFBQWEsQ0FBQztPQUMvRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BR0E7UUFDRSxJQUFJTSxjQUFjLEdBQUc7VUFDbkI1TCxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsdUVBQXVFLEdBQUcsK0NBQStDLENBQUM7QUFDbko2TCxVQUFBQSxZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0RBQWtELEdBQUcsaURBQWlEO1NBQ3RJO0FBRUQsUUFBQSxJQUFJQyx3QkFBd0IsR0FBRyxVQUFVQyxVQUFVLEVBQUVDLElBQUksRUFBRTtVQUN6RDNMLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQ04sU0FBUyxDQUFDNUssU0FBUyxFQUFFZ0wsVUFBVSxFQUFFO1lBQ3JERyxHQUFHLEVBQUUsWUFBWTtBQUNmdEMsY0FBQUEsSUFBSSxDQUFDLDZEQUE2RCxFQUFFb0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckYsY0FBQSxPQUFPRyxTQUFTO0FBQ2xCO0FBQ0YsV0FBQyxDQUFDO1NBQ0g7QUFFRCxRQUFBLEtBQUssSUFBSUMsTUFBTSxJQUFJUixjQUFjLEVBQUU7QUFDakMsVUFBQSxJQUFJQSxjQUFjLENBQUMvSixjQUFjLENBQUN1SyxNQUFNLENBQUMsRUFBRTtZQUN6Q04sd0JBQXdCLENBQUNNLE1BQU0sRUFBRVIsY0FBYyxDQUFDUSxNQUFNLENBQUMsQ0FBQztBQUMxRDtBQUNGO0FBQ0Y7TUFFQSxTQUFTQyxjQUFjQSxHQUFHO0FBRTFCQSxNQUFBQSxjQUFjLENBQUN0TCxTQUFTLEdBQUc0SyxTQUFTLENBQUM1SyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTs7TUFFQSxTQUFTdUwsYUFBYUEsQ0FBQzNMLEtBQUssRUFBRUMsT0FBTyxFQUFFRSxPQUFPLEVBQUU7UUFDOUMsSUFBSSxDQUFDSCxLQUFLLEdBQUdBLEtBQUs7QUFDbEIsUUFBQSxJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTyxDQUFDOztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBRzRLLFdBQVc7QUFDdkIsUUFBQSxJQUFJLENBQUMzSyxPQUFPLEdBQUdBLE9BQU8sSUFBSXVLLG9CQUFvQjtBQUNoRDtNQUVBLElBQUlrQixzQkFBc0IsR0FBR0QsYUFBYSxDQUFDdkwsU0FBUyxHQUFHLElBQUlzTCxjQUFjLEVBQUU7QUFDM0VFLE1BQUFBLHNCQUFzQixDQUFDaEwsV0FBVyxHQUFHK0ssYUFBYSxDQUFDOztBQUVuRGhNLE1BQUFBLE1BQU0sQ0FBQ2lNLHNCQUFzQixFQUFFWixTQUFTLENBQUM1SyxTQUFTLENBQUM7TUFDbkR3TCxzQkFBc0IsQ0FBQy9LLG9CQUFvQixHQUFHLElBQUk7O0FBRWxEO01BQ0EsU0FBU2dMLFNBQVNBLEdBQUc7UUFDbkIsSUFBSUMsU0FBUyxHQUFHO0FBQ2QxSyxVQUFBQSxPQUFPLEVBQUU7U0FDVjtRQUVEO0FBQ0UxQixVQUFBQSxNQUFNLENBQUNxTSxJQUFJLENBQUNELFNBQVMsQ0FBQztBQUN4QjtBQUVBLFFBQUEsT0FBT0EsU0FBUztBQUNsQjtBQUVBLE1BQUEsSUFBSUUsV0FBVyxHQUFHakwsS0FBSyxDQUFDQyxPQUFPLENBQUM7O01BRWhDLFNBQVNBLE9BQU9BLENBQUM3QixDQUFDLEVBQUU7UUFDbEIsT0FBTzZNLFdBQVcsQ0FBQzdNLENBQUMsQ0FBQztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtNQUNBLFNBQVM4TSxRQUFRQSxDQUFDNUksS0FBSyxFQUFFO1FBQ3ZCO0FBQ0U7VUFDQSxJQUFJNkksY0FBYyxHQUFHLE9BQU85TixNQUFNLEtBQUssVUFBVSxJQUFJQSxNQUFNLENBQUMrTixXQUFXO0FBQ3ZFLFVBQUEsSUFBSTNKLElBQUksR0FBRzBKLGNBQWMsSUFBSTdJLEtBQUssQ0FBQ2pGLE1BQU0sQ0FBQytOLFdBQVcsQ0FBQyxJQUFJOUksS0FBSyxDQUFDekMsV0FBVyxDQUFDNEosSUFBSSxJQUFJLFFBQVE7QUFDNUYsVUFBQSxPQUFPaEksSUFBSTtBQUNiO09BQ0Q7O01BR0QsU0FBUzRKLGlCQUFpQkEsQ0FBQy9JLEtBQUssRUFBRTtRQUNoQztVQUNFLElBQUk7WUFDRmdKLGtCQUFrQixDQUFDaEosS0FBSyxDQUFDO0FBQ3pCLFlBQUEsT0FBTyxLQUFLO1dBQ2IsQ0FBQyxPQUFPdEQsQ0FBQyxFQUFFO0FBQ1YsWUFBQSxPQUFPLElBQUk7QUFDYjtBQUNGO0FBQ0Y7TUFFQSxTQUFTc00sa0JBQWtCQSxDQUFDaEosS0FBSyxFQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7UUFDQSxPQUFPLEVBQUUsR0FBR0EsS0FBSztBQUNuQjtNQUNBLFNBQVNpSixzQkFBc0JBLENBQUNqSixLQUFLLEVBQUU7UUFDckM7QUFDRSxVQUFBLElBQUkrSSxpQkFBaUIsQ0FBQy9JLEtBQUssQ0FBQyxFQUFFO1lBQzVCa0csS0FBSyxDQUFDLDZDQUE2QyxHQUFHLHNFQUFzRSxFQUFFMEMsUUFBUSxDQUFDNUksS0FBSyxDQUFDLENBQUM7QUFFOUksWUFBQSxPQUFPZ0osa0JBQWtCLENBQUNoSixLQUFLLENBQUMsQ0FBQztBQUNuQztBQUNGO0FBQ0Y7TUFFQSxTQUFTa0osY0FBY0EsQ0FBQ0MsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRTtBQUN6RCxRQUFBLElBQUluQyxXQUFXLEdBQUdpQyxTQUFTLENBQUNqQyxXQUFXO1FBRXZDLElBQUlBLFdBQVcsRUFBRTtBQUNmLFVBQUEsT0FBT0EsV0FBVztBQUNwQjtRQUVBLElBQUlvQyxZQUFZLEdBQUdGLFNBQVMsQ0FBQ2xDLFdBQVcsSUFBSWtDLFNBQVMsQ0FBQ2pDLElBQUksSUFBSSxFQUFFO0FBQ2hFLFFBQUEsT0FBT21DLFlBQVksS0FBSyxFQUFFLEdBQUdELFdBQVcsR0FBRyxHQUFHLEdBQUdDLFlBQVksR0FBRyxHQUFHLEdBQUdELFdBQVc7T0FDbEY7O01BR0QsU0FBU0UsY0FBY0EsQ0FBQ3BLLElBQUksRUFBRTtBQUM1QixRQUFBLE9BQU9BLElBQUksQ0FBQytILFdBQVcsSUFBSSxTQUFTO09BQ3JDOztNQUdELFNBQVNzQyx3QkFBd0JBLENBQUNySyxJQUFJLEVBQUU7UUFDdEMsSUFBSUEsSUFBSSxJQUFJLElBQUksRUFBRTtBQUNoQjtBQUNBLFVBQUEsT0FBTyxJQUFJO0FBQ2I7UUFFQTtBQUNFLFVBQUEsSUFBSSxPQUFPQSxJQUFJLENBQUNzSyxHQUFHLEtBQUssUUFBUSxFQUFFO0FBQ2hDdkQsWUFBQUEsS0FBSyxDQUFDLCtEQUErRCxHQUFHLHNEQUFzRCxDQUFDO0FBQ2pJO0FBQ0Y7QUFFQSxRQUFBLElBQUksT0FBTy9HLElBQUksS0FBSyxVQUFVLEVBQUU7VUFDOUIsT0FBT0EsSUFBSSxDQUFDK0gsV0FBVyxJQUFJL0gsSUFBSSxDQUFDZ0ksSUFBSSxJQUFJLElBQUk7QUFDOUM7QUFFQSxRQUFBLElBQUksT0FBT2hJLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDNUIsVUFBQSxPQUFPQSxJQUFJO0FBQ2I7QUFFQSxRQUFBLFFBQVFBLElBQUk7QUFDVixVQUFBLEtBQUt5RSxtQkFBbUI7QUFDdEIsWUFBQSxPQUFPLFVBQVU7QUFFbkIsVUFBQSxLQUFLRCxpQkFBaUI7QUFDcEIsWUFBQSxPQUFPLFFBQVE7QUFFakIsVUFBQSxLQUFLRyxtQkFBbUI7QUFDdEIsWUFBQSxPQUFPLFVBQVU7QUFFbkIsVUFBQSxLQUFLRCxzQkFBc0I7QUFDekIsWUFBQSxPQUFPLFlBQVk7QUFFckIsVUFBQSxLQUFLSyxtQkFBbUI7QUFDdEIsWUFBQSxPQUFPLFVBQVU7QUFFbkIsVUFBQSxLQUFLQyx3QkFBd0I7QUFDM0IsWUFBQSxPQUFPLGNBQWM7QUFFekI7QUFFQSxRQUFBLElBQUksT0FBT2hGLElBQUksS0FBSyxRQUFRLEVBQUU7VUFDNUIsUUFBUUEsSUFBSSxDQUFDRCxRQUFRO0FBQ25CLFlBQUEsS0FBSzhFLGtCQUFrQjtjQUNyQixJQUFJcEgsT0FBTyxHQUFHdUMsSUFBSTtBQUNsQixjQUFBLE9BQU9vSyxjQUFjLENBQUMzTSxPQUFPLENBQUMsR0FBRyxXQUFXO0FBRTlDLFlBQUEsS0FBS21ILG1CQUFtQjtjQUN0QixJQUFJMkYsUUFBUSxHQUFHdkssSUFBSTtjQUNuQixPQUFPb0ssY0FBYyxDQUFDRyxRQUFRLENBQUMxSCxRQUFRLENBQUMsR0FBRyxXQUFXO0FBRXhELFlBQUEsS0FBS2lDLHNCQUFzQjtjQUN6QixPQUFPaUYsY0FBYyxDQUFDL0osSUFBSSxFQUFFQSxJQUFJLENBQUMrQyxNQUFNLEVBQUUsWUFBWSxDQUFDO0FBRXhELFlBQUEsS0FBS2tDLGVBQWU7QUFDbEIsY0FBQSxJQUFJdUYsU0FBUyxHQUFHeEssSUFBSSxDQUFDK0gsV0FBVyxJQUFJLElBQUk7Y0FFeEMsSUFBSXlDLFNBQVMsS0FBSyxJQUFJLEVBQUU7QUFDdEIsZ0JBQUEsT0FBT0EsU0FBUztBQUNsQjtjQUVBLE9BQU9ILHdCQUF3QixDQUFDckssSUFBSSxDQUFDQSxJQUFJLENBQUMsSUFBSSxNQUFNO0FBRXRELFlBQUEsS0FBS2tGLGVBQWU7Y0FDbEI7Z0JBQ0UsSUFBSXVGLGFBQWEsR0FBR3pLLElBQUk7QUFDeEIsZ0JBQUEsSUFBSTBLLE9BQU8sR0FBR0QsYUFBYSxDQUFDekgsUUFBUTtBQUNwQyxnQkFBQSxJQUFJMkgsSUFBSSxHQUFHRixhQUFhLENBQUN4SCxLQUFLO2dCQUU5QixJQUFJO0FBQ0Ysa0JBQUEsT0FBT29ILHdCQUF3QixDQUFDTSxJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO2lCQUMvQyxDQUFDLE9BQU9wTyxDQUFDLEVBQUU7QUFDVixrQkFBQSxPQUFPLElBQUk7QUFDYjtBQUNGOztBQUVGO0FBQ0Y7QUFDRjtBQUVBLFFBQUEsT0FBTyxJQUFJO0FBQ2I7QUFFQSxNQUFBLElBQUlvQyxjQUFjLEdBQUd4QixNQUFNLENBQUNVLFNBQVMsQ0FBQ2MsY0FBYztNQUVwRCxJQUFJa00sY0FBYyxHQUFHO1FBQ25COUwsR0FBRyxFQUFFLElBQUk7UUFDVEMsR0FBRyxFQUFFLElBQUk7UUFDVEMsTUFBTSxFQUFFLElBQUk7QUFDWkMsUUFBQUEsUUFBUSxFQUFFO09BQ1g7QUFDRCxNQUFBLElBQUk0TCwwQkFBMEIsRUFBRUMsMEJBQTBCLEVBQUVDLHNCQUFzQjtNQUVsRjtRQUNFQSxzQkFBc0IsR0FBRyxFQUFFO0FBQzdCO01BRUEsU0FBU0MsV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFO1FBQzNCO1VBQ0UsSUFBSXZNLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDMEwsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUlDLE1BQU0sR0FBR2hPLE1BQU0sQ0FBQ2lPLHdCQUF3QixDQUFDRixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUNsQyxHQUFHO0FBRS9ELFlBQUEsSUFBSW1DLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxjQUFjLEVBQUU7QUFDbkMsY0FBQSxPQUFPLEtBQUs7QUFDZDtBQUNGO0FBQ0Y7QUFFQSxRQUFBLE9BQU9ILE1BQU0sQ0FBQ2xNLEdBQUcsS0FBS2lLLFNBQVM7QUFDakM7TUFFQSxTQUFTcUMsV0FBV0EsQ0FBQ0osTUFBTSxFQUFFO1FBQzNCO1VBQ0UsSUFBSXZNLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDMEwsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUlDLE1BQU0sR0FBR2hPLE1BQU0sQ0FBQ2lPLHdCQUF3QixDQUFDRixNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUNsQyxHQUFHO0FBRS9ELFlBQUEsSUFBSW1DLE1BQU0sSUFBSUEsTUFBTSxDQUFDRSxjQUFjLEVBQUU7QUFDbkMsY0FBQSxPQUFPLEtBQUs7QUFDZDtBQUNGO0FBQ0Y7QUFFQSxRQUFBLE9BQU9ILE1BQU0sQ0FBQ25NLEdBQUcsS0FBS2tLLFNBQVM7QUFDakM7QUFFQSxNQUFBLFNBQVNzQywwQkFBMEJBLENBQUM5TixLQUFLLEVBQUV1SyxXQUFXLEVBQUU7UUFDdEQsSUFBSXdELHFCQUFxQixHQUFHLFlBQVk7VUFDdEM7WUFDRSxJQUFJLENBQUNWLDBCQUEwQixFQUFFO2NBQy9CQSwwQkFBMEIsR0FBRyxJQUFJO2NBRWpDOUQsS0FBSyxDQUFDLDJEQUEyRCxHQUFHLGdFQUFnRSxHQUFHLHNFQUFzRSxHQUFHLGdEQUFnRCxFQUFFZ0IsV0FBVyxDQUFDO0FBQ2hSO0FBQ0Y7U0FDRDtRQUVEd0QscUJBQXFCLENBQUNILGNBQWMsR0FBRyxJQUFJO0FBQzNDbE8sUUFBQUEsTUFBTSxDQUFDNEwsY0FBYyxDQUFDdEwsS0FBSyxFQUFFLEtBQUssRUFBRTtVQUNsQ3VMLEdBQUcsRUFBRXdDLHFCQUFxQjtBQUMxQkMsVUFBQUEsWUFBWSxFQUFFO0FBQ2hCLFNBQUMsQ0FBQztBQUNKO0FBRUEsTUFBQSxTQUFTQywwQkFBMEJBLENBQUNqTyxLQUFLLEVBQUV1SyxXQUFXLEVBQUU7UUFDdEQsSUFBSTJELHFCQUFxQixHQUFHLFlBQVk7VUFDdEM7WUFDRSxJQUFJLENBQUNaLDBCQUEwQixFQUFFO2NBQy9CQSwwQkFBMEIsR0FBRyxJQUFJO2NBRWpDL0QsS0FBSyxDQUFDLDJEQUEyRCxHQUFHLGdFQUFnRSxHQUFHLHNFQUFzRSxHQUFHLGdEQUFnRCxFQUFFZ0IsV0FBVyxDQUFDO0FBQ2hSO0FBQ0Y7U0FDRDtRQUVEMkQscUJBQXFCLENBQUNOLGNBQWMsR0FBRyxJQUFJO0FBQzNDbE8sUUFBQUEsTUFBTSxDQUFDNEwsY0FBYyxDQUFDdEwsS0FBSyxFQUFFLEtBQUssRUFBRTtVQUNsQ3VMLEdBQUcsRUFBRTJDLHFCQUFxQjtBQUMxQkYsVUFBQUEsWUFBWSxFQUFFO0FBQ2hCLFNBQUMsQ0FBQztBQUNKO01BRUEsU0FBU0csb0NBQW9DQSxDQUFDVixNQUFNLEVBQUU7UUFDcEQ7VUFDRSxJQUFJLE9BQU9BLE1BQU0sQ0FBQ2xNLEdBQUcsS0FBSyxRQUFRLElBQUk4QyxpQkFBaUIsQ0FBQ2pELE9BQU8sSUFBSXFNLE1BQU0sQ0FBQ2pNLE1BQU0sSUFBSTZDLGlCQUFpQixDQUFDakQsT0FBTyxDQUFDZ04sU0FBUyxLQUFLWCxNQUFNLENBQUNqTSxNQUFNLEVBQUU7WUFDekksSUFBSThJLGFBQWEsR0FBR3VDLHdCQUF3QixDQUFDeEksaUJBQWlCLENBQUNqRCxPQUFPLENBQUNvQixJQUFJLENBQUM7QUFFNUUsWUFBQSxJQUFJLENBQUMrSyxzQkFBc0IsQ0FBQ2pELGFBQWEsQ0FBQyxFQUFFO0FBQzFDZixjQUFBQSxLQUFLLENBQUMsK0NBQStDLEdBQUcscUVBQXFFLEdBQUcsb0VBQW9FLEdBQUcsaUZBQWlGLEdBQUcsMkNBQTJDLEdBQUcsaURBQWlELEVBQUVlLGFBQWEsRUFBRW1ELE1BQU0sQ0FBQ2xNLEdBQUcsQ0FBQztBQUV0WmdNLGNBQUFBLHNCQUFzQixDQUFDakQsYUFBYSxDQUFDLEdBQUcsSUFBSTtBQUM5QztBQUNGO0FBQ0Y7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBQSxJQUFJK0QsWUFBWSxHQUFHLFVBQVU3TCxJQUFJLEVBQUVsQixHQUFHLEVBQUVDLEdBQUcsRUFBRStNLElBQUksRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUV4TyxLQUFLLEVBQUU7UUFDdkUsSUFBSXlPLE9BQU8sR0FBRztBQUNaO1VBQ0FsTSxRQUFRLEVBQUV3RSxrQkFBa0I7QUFDNUI7VUFDQXZFLElBQUksRUFBRUEsSUFBSTtVQUNWbEIsR0FBRyxFQUFFQSxHQUFHO1VBQ1JDLEdBQUcsRUFBRUEsR0FBRztVQUNSdkIsS0FBSyxFQUFFQSxLQUFLO0FBQ1o7QUFDQXlDLFVBQUFBLE1BQU0sRUFBRStMO1NBQ1Q7UUFFRDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFVBQUFBLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQjtBQUNBO0FBQ0E7O1VBRUFoUCxNQUFNLENBQUM0TCxjQUFjLENBQUNtRCxPQUFPLENBQUNDLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDakRWLFlBQVksRUFBRSxLQUFLO1lBQ25CVyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsUUFBUSxFQUFFLElBQUk7QUFDZHZMLFlBQUFBLEtBQUssRUFBRTtXQUNSLENBQUMsQ0FBQzs7QUFFSDNELFVBQUFBLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQ21ELE9BQU8sRUFBRSxPQUFPLEVBQUU7WUFDdENULFlBQVksRUFBRSxLQUFLO1lBQ25CVyxVQUFVLEVBQUUsS0FBSztZQUNqQkMsUUFBUSxFQUFFLEtBQUs7QUFDZnZMLFlBQUFBLEtBQUssRUFBRWlMO1dBQ1IsQ0FBQyxDQUFDO0FBQ0g7O0FBRUE1TyxVQUFBQSxNQUFNLENBQUM0TCxjQUFjLENBQUNtRCxPQUFPLEVBQUUsU0FBUyxFQUFFO1lBQ3hDVCxZQUFZLEVBQUUsS0FBSztZQUNuQlcsVUFBVSxFQUFFLEtBQUs7WUFDakJDLFFBQVEsRUFBRSxLQUFLO0FBQ2Z2TCxZQUFBQSxLQUFLLEVBQUVrTDtBQUNULFdBQUMsQ0FBQztVQUVGLElBQUk3TyxNQUFNLENBQUNxTCxNQUFNLEVBQUU7QUFDakJyTCxZQUFBQSxNQUFNLENBQUNxTCxNQUFNLENBQUMwRCxPQUFPLENBQUN6TyxLQUFLLENBQUM7QUFDNUJOLFlBQUFBLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQzBELE9BQU8sQ0FBQztBQUN4QjtBQUNGO0FBRUEsUUFBQSxPQUFPQSxPQUFPO09BQ2Y7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7TUFFQSxTQUFTSSxhQUFhQSxDQUFDck0sSUFBSSxFQUFFaUwsTUFBTSxFQUFFdEwsUUFBUSxFQUFFO1FBQzdDLElBQUkyTSxRQUFRLENBQUM7O1FBRWIsSUFBSTlPLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSXNCLEdBQUcsR0FBRyxJQUFJO1FBQ2QsSUFBSUMsR0FBRyxHQUFHLElBQUk7UUFDZCxJQUFJK00sSUFBSSxHQUFHLElBQUk7UUFDZixJQUFJQyxNQUFNLEdBQUcsSUFBSTtRQUVqQixJQUFJZCxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUEsSUFBSUQsV0FBVyxDQUFDQyxNQUFNLENBQUMsRUFBRTtZQUN2QmxNLEdBQUcsR0FBR2tNLE1BQU0sQ0FBQ2xNLEdBQUc7WUFFaEI7Y0FDRTRNLG9DQUFvQyxDQUFDVixNQUFNLENBQUM7QUFDOUM7QUFDRjtBQUVBLFVBQUEsSUFBSUksV0FBVyxDQUFDSixNQUFNLENBQUMsRUFBRTtZQUN2QjtBQUNFbkIsY0FBQUEsc0JBQXNCLENBQUNtQixNQUFNLENBQUNuTSxHQUFHLENBQUM7QUFDcEM7QUFFQUEsWUFBQUEsR0FBRyxHQUFHLEVBQUUsR0FBR21NLE1BQU0sQ0FBQ25NLEdBQUc7QUFDdkI7VUFFQWdOLElBQUksR0FBR2IsTUFBTSxDQUFDak0sTUFBTSxLQUFLZ0ssU0FBUyxHQUFHLElBQUksR0FBR2lDLE1BQU0sQ0FBQ2pNLE1BQU07QUFDekQrTSxVQUFBQSxNQUFNLEdBQUdkLE1BQU0sQ0FBQ2hNLFFBQVEsS0FBSytKLFNBQVMsR0FBRyxJQUFJLEdBQUdpQyxNQUFNLENBQUNoTSxRQUFRLENBQUM7O1VBRWhFLEtBQUtxTixRQUFRLElBQUlyQixNQUFNLEVBQUU7QUFDdkIsWUFBQSxJQUFJdk0sY0FBYyxDQUFDYSxJQUFJLENBQUMwTCxNQUFNLEVBQUVxQixRQUFRLENBQUMsSUFBSSxDQUFDMUIsY0FBYyxDQUFDbE0sY0FBYyxDQUFDNE4sUUFBUSxDQUFDLEVBQUU7Y0FDckY5TyxLQUFLLENBQUM4TyxRQUFRLENBQUMsR0FBR3JCLE1BQU0sQ0FBQ3FCLFFBQVEsQ0FBQztBQUNwQztBQUNGO1NBQ0Q7QUFDRDs7QUFHQSxRQUFBLElBQUlDLGNBQWMsR0FBRzlNLFNBQVMsQ0FBQ0MsTUFBTSxHQUFHLENBQUM7UUFFekMsSUFBSTZNLGNBQWMsS0FBSyxDQUFDLEVBQUU7VUFDeEIvTyxLQUFLLENBQUNtQyxRQUFRLEdBQUdBLFFBQVE7QUFDM0IsU0FBQyxNQUFNLElBQUk0TSxjQUFjLEdBQUcsQ0FBQyxFQUFFO0FBQzdCLFVBQUEsSUFBSUMsVUFBVSxHQUFHak8sS0FBSyxDQUFDZ08sY0FBYyxDQUFDO1VBRXRDLEtBQUssSUFBSUUsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRixjQUFjLEVBQUVFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDRCxVQUFVLENBQUNDLENBQUMsQ0FBQyxHQUFHaE4sU0FBUyxDQUFDZ04sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNsQztVQUVBO1lBQ0UsSUFBSXZQLE1BQU0sQ0FBQ3FMLE1BQU0sRUFBRTtBQUNqQnJMLGNBQUFBLE1BQU0sQ0FBQ3FMLE1BQU0sQ0FBQ2lFLFVBQVUsQ0FBQztBQUMzQjtBQUNGO1VBRUFoUCxLQUFLLENBQUNtQyxRQUFRLEdBQUc2TSxVQUFVO1NBQzVCOztBQUdELFFBQUEsSUFBSXhNLElBQUksSUFBSUEsSUFBSSxDQUFDRixZQUFZLEVBQUU7QUFDN0IsVUFBQSxJQUFJQSxZQUFZLEdBQUdFLElBQUksQ0FBQ0YsWUFBWTtVQUVwQyxLQUFLd00sUUFBUSxJQUFJeE0sWUFBWSxFQUFFO0FBQzdCLFlBQUEsSUFBSXRDLEtBQUssQ0FBQzhPLFFBQVEsQ0FBQyxLQUFLdEQsU0FBUyxFQUFFO2NBQ2pDeEwsS0FBSyxDQUFDOE8sUUFBUSxDQUFDLEdBQUd4TSxZQUFZLENBQUN3TSxRQUFRLENBQUM7QUFDMUM7QUFDRjtBQUNGO1FBRUE7VUFDRSxJQUFJeE4sR0FBRyxJQUFJQyxHQUFHLEVBQUU7QUFDZCxZQUFBLElBQUlnSixXQUFXLEdBQUcsT0FBTy9ILElBQUksS0FBSyxVQUFVLEdBQUdBLElBQUksQ0FBQytILFdBQVcsSUFBSS9ILElBQUksQ0FBQ2dJLElBQUksSUFBSSxTQUFTLEdBQUdoSSxJQUFJO1lBRWhHLElBQUlsQixHQUFHLEVBQUU7QUFDUHdNLGNBQUFBLDBCQUEwQixDQUFDOU4sS0FBSyxFQUFFdUssV0FBVyxDQUFDO0FBQ2hEO1lBRUEsSUFBSWhKLEdBQUcsRUFBRTtBQUNQME0sY0FBQUEsMEJBQTBCLENBQUNqTyxLQUFLLEVBQUV1SyxXQUFXLENBQUM7QUFDaEQ7QUFDRjtBQUNGO0FBRUEsUUFBQSxPQUFPOEQsWUFBWSxDQUFDN0wsSUFBSSxFQUFFbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUUrTSxJQUFJLEVBQUVDLE1BQU0sRUFBRWxLLGlCQUFpQixDQUFDakQsT0FBTyxFQUFFcEIsS0FBSyxDQUFDO0FBQ3JGO0FBQ0EsTUFBQSxTQUFTa1Asa0JBQWtCQSxDQUFDQyxVQUFVLEVBQUVDLE1BQU0sRUFBRTtBQUM5QyxRQUFBLElBQUlDLFVBQVUsR0FBR2hCLFlBQVksQ0FBQ2MsVUFBVSxDQUFDM00sSUFBSSxFQUFFNE0sTUFBTSxFQUFFRCxVQUFVLENBQUM1TixHQUFHLEVBQUU0TixVQUFVLENBQUNHLEtBQUssRUFBRUgsVUFBVSxDQUFDSSxPQUFPLEVBQUVKLFVBQVUsQ0FBQzFNLE1BQU0sRUFBRTBNLFVBQVUsQ0FBQ25QLEtBQUssQ0FBQztBQUNqSixRQUFBLE9BQU9xUCxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BRUEsU0FBU0csWUFBWUEsQ0FBQ2YsT0FBTyxFQUFFaEIsTUFBTSxFQUFFdEwsUUFBUSxFQUFFO1FBQy9DLElBQUlzTSxPQUFPLEtBQUssSUFBSSxJQUFJQSxPQUFPLEtBQUtqRCxTQUFTLEVBQUU7VUFDN0MsTUFBTSxJQUFJakwsS0FBSyxDQUFDLGdGQUFnRixHQUFHa08sT0FBTyxHQUFHLEdBQUcsQ0FBQztBQUNuSDtRQUVBLElBQUlLLFFBQVEsQ0FBQzs7UUFFYixJQUFJOU8sS0FBSyxHQUFHTCxNQUFNLENBQUMsRUFBRSxFQUFFOE8sT0FBTyxDQUFDek8sS0FBSyxDQUFDLENBQUM7O0FBRXRDLFFBQUEsSUFBSXNCLEdBQUcsR0FBR21OLE9BQU8sQ0FBQ25OLEdBQUc7QUFDckIsUUFBQSxJQUFJQyxHQUFHLEdBQUdrTixPQUFPLENBQUNsTixHQUFHLENBQUM7O0FBRXRCLFFBQUEsSUFBSStNLElBQUksR0FBR0csT0FBTyxDQUFDYSxLQUFLLENBQUM7QUFDekI7QUFDQTs7QUFFQSxRQUFBLElBQUlmLE1BQU0sR0FBR0UsT0FBTyxDQUFDYyxPQUFPLENBQUM7O0FBRTdCLFFBQUEsSUFBSWYsS0FBSyxHQUFHQyxPQUFPLENBQUNoTSxNQUFNO1FBRTFCLElBQUlnTCxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUEsSUFBSUQsV0FBVyxDQUFDQyxNQUFNLENBQUMsRUFBRTtBQUN2QjtZQUNBbE0sR0FBRyxHQUFHa00sTUFBTSxDQUFDbE0sR0FBRztZQUNoQmlOLEtBQUssR0FBR25LLGlCQUFpQixDQUFDakQsT0FBTztBQUNuQztBQUVBLFVBQUEsSUFBSXlNLFdBQVcsQ0FBQ0osTUFBTSxDQUFDLEVBQUU7WUFDdkI7QUFDRW5CLGNBQUFBLHNCQUFzQixDQUFDbUIsTUFBTSxDQUFDbk0sR0FBRyxDQUFDO0FBQ3BDO0FBRUFBLFlBQUFBLEdBQUcsR0FBRyxFQUFFLEdBQUdtTSxNQUFNLENBQUNuTSxHQUFHO1dBQ3RCOztBQUdELFVBQUEsSUFBSWdCLFlBQVk7VUFFaEIsSUFBSW1NLE9BQU8sQ0FBQ2pNLElBQUksSUFBSWlNLE9BQU8sQ0FBQ2pNLElBQUksQ0FBQ0YsWUFBWSxFQUFFO0FBQzdDQSxZQUFBQSxZQUFZLEdBQUdtTSxPQUFPLENBQUNqTSxJQUFJLENBQUNGLFlBQVk7QUFDMUM7VUFFQSxLQUFLd00sUUFBUSxJQUFJckIsTUFBTSxFQUFFO0FBQ3ZCLFlBQUEsSUFBSXZNLGNBQWMsQ0FBQ2EsSUFBSSxDQUFDMEwsTUFBTSxFQUFFcUIsUUFBUSxDQUFDLElBQUksQ0FBQzFCLGNBQWMsQ0FBQ2xNLGNBQWMsQ0FBQzROLFFBQVEsQ0FBQyxFQUFFO2NBQ3JGLElBQUlyQixNQUFNLENBQUNxQixRQUFRLENBQUMsS0FBS3RELFNBQVMsSUFBSWxKLFlBQVksS0FBS2tKLFNBQVMsRUFBRTtBQUNoRTtnQkFDQXhMLEtBQUssQ0FBQzhPLFFBQVEsQ0FBQyxHQUFHeE0sWUFBWSxDQUFDd00sUUFBUSxDQUFDO0FBQzFDLGVBQUMsTUFBTTtnQkFDTDlPLEtBQUssQ0FBQzhPLFFBQVEsQ0FBQyxHQUFHckIsTUFBTSxDQUFDcUIsUUFBUSxDQUFDO0FBQ3BDO0FBQ0Y7QUFDRjtTQUNEO0FBQ0Q7O0FBR0EsUUFBQSxJQUFJQyxjQUFjLEdBQUc5TSxTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDO1FBRXpDLElBQUk2TSxjQUFjLEtBQUssQ0FBQyxFQUFFO1VBQ3hCL08sS0FBSyxDQUFDbUMsUUFBUSxHQUFHQSxRQUFRO0FBQzNCLFNBQUMsTUFBTSxJQUFJNE0sY0FBYyxHQUFHLENBQUMsRUFBRTtBQUM3QixVQUFBLElBQUlDLFVBQVUsR0FBR2pPLEtBQUssQ0FBQ2dPLGNBQWMsQ0FBQztVQUV0QyxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsY0FBYyxFQUFFRSxDQUFDLEVBQUUsRUFBRTtZQUN2Q0QsVUFBVSxDQUFDQyxDQUFDLENBQUMsR0FBR2hOLFNBQVMsQ0FBQ2dOLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEM7VUFFQWpQLEtBQUssQ0FBQ21DLFFBQVEsR0FBRzZNLFVBQVU7QUFDN0I7QUFFQSxRQUFBLE9BQU9YLFlBQVksQ0FBQ0ksT0FBTyxDQUFDak0sSUFBSSxFQUFFbEIsR0FBRyxFQUFFQyxHQUFHLEVBQUUrTSxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFeE8sS0FBSyxDQUFDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BRUEsU0FBU3lQLGNBQWNBLENBQUNDLE1BQU0sRUFBRTtBQUM5QixRQUFBLE9BQU8sT0FBT0EsTUFBTSxLQUFLLFFBQVEsSUFBSUEsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDbk4sUUFBUSxLQUFLd0Usa0JBQWtCO0FBQ2hHO01BRUEsSUFBSTRJLFNBQVMsR0FBRyxHQUFHO01BQ25CLElBQUlDLFlBQVksR0FBRyxHQUFHO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFFQSxTQUFTaE4sTUFBTUEsQ0FBQ3RCLEdBQUcsRUFBRTtRQUNuQixJQUFJdU8sV0FBVyxHQUFHLE9BQU87UUFDekIsSUFBSUMsYUFBYSxHQUFHO1VBQ2xCLEdBQUcsRUFBRSxJQUFJO0FBQ1QsVUFBQSxHQUFHLEVBQUU7U0FDTjtRQUNELElBQUlDLGFBQWEsR0FBR3pPLEdBQUcsQ0FBQ3VCLE9BQU8sQ0FBQ2dOLFdBQVcsRUFBRSxVQUFVRyxLQUFLLEVBQUU7VUFDNUQsT0FBT0YsYUFBYSxDQUFDRSxLQUFLLENBQUM7QUFDN0IsU0FBQyxDQUFDO1FBQ0YsT0FBTyxHQUFHLEdBQUdELGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFHQSxJQUFJRSxnQkFBZ0IsR0FBRyxLQUFLO01BQzVCLElBQUlDLDBCQUEwQixHQUFHLE1BQU07TUFFdkMsU0FBU0MscUJBQXFCQSxDQUFDQyxJQUFJLEVBQUU7UUFDbkMsT0FBT0EsSUFBSSxDQUFDdk4sT0FBTyxDQUFDcU4sMEJBQTBCLEVBQUUsS0FBSyxDQUFDO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBQSxTQUFTRyxhQUFhQSxDQUFDNUIsT0FBTyxFQUFFNkIsS0FBSyxFQUFFO0FBQ3JDO0FBQ0E7QUFDQSxRQUFBLElBQUksT0FBTzdCLE9BQU8sS0FBSyxRQUFRLElBQUlBLE9BQU8sS0FBSyxJQUFJLElBQUlBLE9BQU8sQ0FBQ25OLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFDMUU7VUFDQTtBQUNFZ0wsWUFBQUEsc0JBQXNCLENBQUNtQyxPQUFPLENBQUNuTixHQUFHLENBQUM7QUFDckM7VUFFQSxPQUFPc0IsTUFBTSxDQUFDLEVBQUUsR0FBRzZMLE9BQU8sQ0FBQ25OLEdBQUcsQ0FBQztTQUNoQzs7QUFHRCxRQUFBLE9BQU9nUCxLQUFLLENBQUN0TixRQUFRLENBQUMsRUFBRSxDQUFDO0FBQzNCO01BRUEsU0FBU3VOLFlBQVlBLENBQUNwTyxRQUFRLEVBQUVxTyxLQUFLLEVBQUVDLGFBQWEsRUFBRUMsU0FBUyxFQUFFL0YsUUFBUSxFQUFFO1FBQ3pFLElBQUluSSxJQUFJLEdBQUcsT0FBT0wsUUFBUTtRQUUxQixJQUFJSyxJQUFJLEtBQUssV0FBVyxJQUFJQSxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQzlDO1VBQ0FMLFFBQVEsR0FBRyxJQUFJO0FBQ2pCO1FBRUEsSUFBSXdPLGNBQWMsR0FBRyxLQUFLO1FBRTFCLElBQUl4TyxRQUFRLEtBQUssSUFBSSxFQUFFO1VBQ3JCd08sY0FBYyxHQUFHLElBQUk7QUFDdkIsU0FBQyxNQUFNO0FBQ0wsVUFBQSxRQUFRbk8sSUFBSTtBQUNWLFlBQUEsS0FBSyxRQUFRO0FBQ2IsWUFBQSxLQUFLLFFBQVE7Y0FDWG1PLGNBQWMsR0FBRyxJQUFJO2NBQ3JCO0FBRUYsWUFBQSxLQUFLLFFBQVE7Y0FDWCxRQUFReE8sUUFBUSxDQUFDSSxRQUFRO0FBQ3ZCLGdCQUFBLEtBQUt3RSxrQkFBa0I7QUFDdkIsZ0JBQUEsS0FBS0MsaUJBQWlCO2tCQUNwQjJKLGNBQWMsR0FBRyxJQUFJO0FBQ3pCO0FBRUo7QUFDRjtRQUVBLElBQUlBLGNBQWMsRUFBRTtVQUNsQixJQUFJQyxNQUFNLEdBQUd6TyxRQUFRO0FBQ3JCLFVBQUEsSUFBSTBPLFdBQVcsR0FBR2xHLFFBQVEsQ0FBQ2lHLE1BQU0sQ0FBQyxDQUFDO0FBQ25DOztBQUVBLFVBQUEsSUFBSUUsUUFBUSxHQUFHSixTQUFTLEtBQUssRUFBRSxHQUFHZixTQUFTLEdBQUdVLGFBQWEsQ0FBQ08sTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHRixTQUFTO0FBRWxGLFVBQUEsSUFBSTFQLE9BQU8sQ0FBQzZQLFdBQVcsQ0FBQyxFQUFFO1lBQ3hCLElBQUlFLGVBQWUsR0FBRyxFQUFFO1lBRXhCLElBQUlELFFBQVEsSUFBSSxJQUFJLEVBQUU7QUFDcEJDLGNBQUFBLGVBQWUsR0FBR1oscUJBQXFCLENBQUNXLFFBQVEsQ0FBQyxHQUFHLEdBQUc7QUFDekQ7WUFFQVAsWUFBWSxDQUFDTSxXQUFXLEVBQUVMLEtBQUssRUFBRU8sZUFBZSxFQUFFLEVBQUUsRUFBRSxVQUFVblAsQ0FBQyxFQUFFO0FBQ2pFLGNBQUEsT0FBT0EsQ0FBQztBQUNWLGFBQUMsQ0FBQztBQUNKLFdBQUMsTUFBTSxJQUFJaVAsV0FBVyxJQUFJLElBQUksRUFBRTtBQUM5QixZQUFBLElBQUlwQixjQUFjLENBQUNvQixXQUFXLENBQUMsRUFBRTtjQUMvQjtBQUNFO0FBQ0E7QUFDQTtBQUNBLGdCQUFBLElBQUlBLFdBQVcsQ0FBQ3ZQLEdBQUcsS0FBSyxDQUFDc1AsTUFBTSxJQUFJQSxNQUFNLENBQUN0UCxHQUFHLEtBQUt1UCxXQUFXLENBQUN2UCxHQUFHLENBQUMsRUFBRTtBQUNsRWdMLGtCQUFBQSxzQkFBc0IsQ0FBQ3VFLFdBQVcsQ0FBQ3ZQLEdBQUcsQ0FBQztBQUN6QztBQUNGO2NBRUF1UCxXQUFXLEdBQUczQixrQkFBa0IsQ0FBQzJCLFdBQVc7QUFBRTtBQUM5QztjQUNBSixhQUFhO0FBQUs7QUFDbEJJLGNBQUFBLFdBQVcsQ0FBQ3ZQLEdBQUcsS0FBSyxDQUFDc1AsTUFBTSxJQUFJQSxNQUFNLENBQUN0UCxHQUFHLEtBQUt1UCxXQUFXLENBQUN2UCxHQUFHLENBQUM7QUFBRztBQUNqRTtBQUNBNk8sY0FBQUEscUJBQXFCLENBQUMsRUFBRSxHQUFHVSxXQUFXLENBQUN2UCxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUd3UCxRQUFRLENBQUM7QUFDckU7QUFFQU4sWUFBQUEsS0FBSyxDQUFDdE4sSUFBSSxDQUFDMk4sV0FBVyxDQUFDO0FBQ3pCO0FBRUEsVUFBQSxPQUFPLENBQUM7QUFDVjtBQUVBLFFBQUEsSUFBSUcsS0FBSztBQUNULFFBQUEsSUFBSUMsUUFBUTtBQUNaLFFBQUEsSUFBSUMsWUFBWSxHQUFHLENBQUMsQ0FBQzs7UUFFckIsSUFBSUMsY0FBYyxHQUFHVCxTQUFTLEtBQUssRUFBRSxHQUFHZixTQUFTLEdBQUdlLFNBQVMsR0FBR2QsWUFBWTtBQUU1RSxRQUFBLElBQUk1TyxPQUFPLENBQUNtQixRQUFRLENBQUMsRUFBRTtBQUNyQixVQUFBLEtBQUssSUFBSThNLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzlNLFFBQVEsQ0FBQ0QsTUFBTSxFQUFFK00sQ0FBQyxFQUFFLEVBQUU7QUFDeEMrQixZQUFBQSxLQUFLLEdBQUc3TyxRQUFRLENBQUM4TSxDQUFDLENBQUM7WUFDbkJnQyxRQUFRLEdBQUdFLGNBQWMsR0FBR2QsYUFBYSxDQUFDVyxLQUFLLEVBQUUvQixDQUFDLENBQUM7QUFDbkRpQyxZQUFBQSxZQUFZLElBQUlYLFlBQVksQ0FBQ1MsS0FBSyxFQUFFUixLQUFLLEVBQUVDLGFBQWEsRUFBRVEsUUFBUSxFQUFFdEcsUUFBUSxDQUFDO0FBQy9FO0FBQ0YsU0FBQyxNQUFNO0FBQ0wsVUFBQSxJQUFJeUcsVUFBVSxHQUFHdEosYUFBYSxDQUFDM0YsUUFBUSxDQUFDO0FBRXhDLFVBQUEsSUFBSSxPQUFPaVAsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUNwQyxJQUFJQyxnQkFBZ0IsR0FBR2xQLFFBQVE7WUFFL0I7QUFDRTtBQUNBLGNBQUEsSUFBSWlQLFVBQVUsS0FBS0MsZ0JBQWdCLENBQUNDLE9BQU8sRUFBRTtnQkFDM0MsSUFBSSxDQUFDckIsZ0JBQWdCLEVBQUU7QUFDckJoSCxrQkFBQUEsSUFBSSxDQUFDLDJDQUEyQyxHQUFHLDhDQUE4QyxDQUFDO0FBQ3BHO2dCQUVBZ0gsZ0JBQWdCLEdBQUcsSUFBSTtBQUN6QjtBQUNGO1lBRUEsSUFBSWhSLFFBQVEsR0FBR21TLFVBQVUsQ0FBQ3JQLElBQUksQ0FBQ3NQLGdCQUFnQixDQUFDO0FBQ2hELFlBQUEsSUFBSUUsSUFBSTtZQUNSLElBQUlDLEVBQUUsR0FBRyxDQUFDO1lBRVYsT0FBTyxDQUFDLENBQUNELElBQUksR0FBR3RTLFFBQVEsQ0FBQ2tFLElBQUksRUFBRSxFQUFFQyxJQUFJLEVBQUU7Y0FDckM0TixLQUFLLEdBQUdPLElBQUksQ0FBQ2xPLEtBQUs7Y0FDbEI0TixRQUFRLEdBQUdFLGNBQWMsR0FBR2QsYUFBYSxDQUFDVyxLQUFLLEVBQUVRLEVBQUUsRUFBRSxDQUFDO0FBQ3RETixjQUFBQSxZQUFZLElBQUlYLFlBQVksQ0FBQ1MsS0FBSyxFQUFFUixLQUFLLEVBQUVDLGFBQWEsRUFBRVEsUUFBUSxFQUFFdEcsUUFBUSxDQUFDO0FBQy9FO0FBQ0YsV0FBQyxNQUFNLElBQUluSSxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQzVCO0FBQ0EsWUFBQSxJQUFJaVAsY0FBYyxHQUFHbk8sTUFBTSxDQUFDbkIsUUFBUSxDQUFDO0FBQ3JDLFlBQUEsTUFBTSxJQUFJNUIsS0FBSyxDQUFDLGlEQUFpRCxJQUFJa1IsY0FBYyxLQUFLLGlCQUFpQixHQUFHLG9CQUFvQixHQUFHL1IsTUFBTSxDQUFDNkQsSUFBSSxDQUFDcEIsUUFBUSxDQUFDLENBQUNxQixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHaU8sY0FBYyxDQUFDLEdBQUcsS0FBSyxHQUFHLGdFQUFnRSxHQUFHLFVBQVUsQ0FBQztBQUN0UjtBQUNGO0FBRUEsUUFBQSxPQUFPUCxZQUFZO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO01BQ0EsU0FBU1EsV0FBV0EsQ0FBQ3ZQLFFBQVEsRUFBRXdQLElBQUksRUFBRTFSLE9BQU8sRUFBRTtRQUM1QyxJQUFJa0MsUUFBUSxJQUFJLElBQUksRUFBRTtBQUNwQixVQUFBLE9BQU9BLFFBQVE7QUFDakI7UUFFQSxJQUFJeVAsTUFBTSxHQUFHLEVBQUU7UUFDZixJQUFJak4sS0FBSyxHQUFHLENBQUM7UUFDYjRMLFlBQVksQ0FBQ3BPLFFBQVEsRUFBRXlQLE1BQU0sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVVaLEtBQUssRUFBRTtVQUN0RCxPQUFPVyxJQUFJLENBQUM1UCxJQUFJLENBQUM5QixPQUFPLEVBQUUrUSxLQUFLLEVBQUVyTSxLQUFLLEVBQUUsQ0FBQztBQUMzQyxTQUFDLENBQUM7QUFDRixRQUFBLE9BQU9pTixNQUFNO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O01BR0EsU0FBU0MsYUFBYUEsQ0FBQzFQLFFBQVEsRUFBRTtRQUMvQixJQUFJN0QsQ0FBQyxHQUFHLENBQUM7UUFDVG9ULFdBQVcsQ0FBQ3ZQLFFBQVEsRUFBRSxZQUFZO1VBQ2hDN0QsQ0FBQyxFQUFFLENBQUM7QUFDTixTQUFDLENBQUM7QUFDRixRQUFBLE9BQU9BLENBQUM7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7TUFDQSxTQUFTd1QsZUFBZUEsQ0FBQzNQLFFBQVEsRUFBRTRQLFdBQVcsRUFBRUMsY0FBYyxFQUFFO1FBQzlETixXQUFXLENBQUN2UCxRQUFRLEVBQUUsWUFBWTtVQUNoQzRQLFdBQVcsQ0FBQ3JOLEtBQUssQ0FBQyxJQUFJLEVBQUV6QyxTQUFTLENBQUMsQ0FBQztTQUNwQyxFQUFFK1AsY0FBYyxDQUFDO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQUdBLFNBQVNwTixPQUFPQSxDQUFDekMsUUFBUSxFQUFFO0FBQ3pCLFFBQUEsT0FBT3VQLFdBQVcsQ0FBQ3ZQLFFBQVEsRUFBRSxVQUFVNk8sS0FBSyxFQUFFO0FBQzVDLFVBQUEsT0FBT0EsS0FBSztTQUNiLENBQUMsSUFBSSxFQUFFO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQUdBLFNBQVNpQixTQUFTQSxDQUFDOVAsUUFBUSxFQUFFO0FBQzNCLFFBQUEsSUFBSSxDQUFDc04sY0FBYyxDQUFDdE4sUUFBUSxDQUFDLEVBQUU7QUFDN0IsVUFBQSxNQUFNLElBQUk1QixLQUFLLENBQUMsdUVBQXVFLENBQUM7QUFDMUY7QUFFQSxRQUFBLE9BQU80QixRQUFRO0FBQ2pCO01BRUEsU0FBUytQLGFBQWFBLENBQUNDLFlBQVksRUFBRTtBQUNuQztBQUNBO1FBQ0EsSUFBSWxTLE9BQU8sR0FBRztVQUNac0MsUUFBUSxFQUFFOEUsa0JBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7VUFDQXZDLGFBQWEsRUFBRXFOLFlBQVk7VUFDM0JwTixjQUFjLEVBQUVvTixZQUFZO0FBQzVCO0FBQ0E7VUFDQW5OLFlBQVksRUFBRSxDQUFDO0FBQ2Y7VUFDQUMsUUFBUSxFQUFFLElBQUk7VUFDZEMsUUFBUSxFQUFFLElBQUk7QUFDZDtVQUNBQyxhQUFhLEVBQUUsSUFBSTtBQUNuQkMsVUFBQUEsV0FBVyxFQUFFO1NBQ2Q7UUFDRG5GLE9BQU8sQ0FBQ2dGLFFBQVEsR0FBRztVQUNqQjFDLFFBQVEsRUFBRTZFLG1CQUFtQjtBQUM3Qi9CLFVBQUFBLFFBQVEsRUFBRXBGO1NBQ1g7UUFDRCxJQUFJbVMseUNBQXlDLEdBQUcsS0FBSztRQUNyRCxJQUFJQyxtQ0FBbUMsR0FBRyxLQUFLO1FBQy9DLElBQUlDLG1DQUFtQyxHQUFHLEtBQUs7UUFFL0M7QUFDRTtBQUNBO0FBQ0E7VUFDQSxJQUFJcE4sUUFBUSxHQUFHO1lBQ2IzQyxRQUFRLEVBQUU4RSxrQkFBa0I7QUFDNUJoQyxZQUFBQSxRQUFRLEVBQUVwRjtBQUNaLFdBQUMsQ0FBQzs7QUFFRlAsVUFBQUEsTUFBTSxDQUFDNlMsZ0JBQWdCLENBQUNyTixRQUFRLEVBQUU7QUFDaENELFlBQUFBLFFBQVEsRUFBRTtjQUNSc0csR0FBRyxFQUFFLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDOEcsbUNBQW1DLEVBQUU7a0JBQ3hDQSxtQ0FBbUMsR0FBRyxJQUFJO0FBRTFDOUksa0JBQUFBLEtBQUssQ0FBQyxnRkFBZ0YsR0FBRyw0RUFBNEUsQ0FBQztBQUN4SztnQkFFQSxPQUFPdEosT0FBTyxDQUFDZ0YsUUFBUTtlQUN4QjtBQUNEdU4sY0FBQUEsR0FBRyxFQUFFLFVBQVVDLFNBQVMsRUFBRTtnQkFDeEJ4UyxPQUFPLENBQUNnRixRQUFRLEdBQUd3TixTQUFTO0FBQzlCO2FBQ0Q7QUFDRDNOLFlBQUFBLGFBQWEsRUFBRTtjQUNieUcsR0FBRyxFQUFFLFlBQVk7Z0JBQ2YsT0FBT3RMLE9BQU8sQ0FBQzZFLGFBQWE7ZUFDN0I7QUFDRDBOLGNBQUFBLEdBQUcsRUFBRSxVQUFVMU4sYUFBYSxFQUFFO2dCQUM1QjdFLE9BQU8sQ0FBQzZFLGFBQWEsR0FBR0EsYUFBYTtBQUN2QzthQUNEO0FBQ0RDLFlBQUFBLGNBQWMsRUFBRTtjQUNkd0csR0FBRyxFQUFFLFlBQVk7Z0JBQ2YsT0FBT3RMLE9BQU8sQ0FBQzhFLGNBQWM7ZUFDOUI7QUFDRHlOLGNBQUFBLEdBQUcsRUFBRSxVQUFVek4sY0FBYyxFQUFFO2dCQUM3QjlFLE9BQU8sQ0FBQzhFLGNBQWMsR0FBR0EsY0FBYztBQUN6QzthQUNEO0FBQ0RDLFlBQUFBLFlBQVksRUFBRTtjQUNadUcsR0FBRyxFQUFFLFlBQVk7Z0JBQ2YsT0FBT3RMLE9BQU8sQ0FBQytFLFlBQVk7ZUFDNUI7QUFDRHdOLGNBQUFBLEdBQUcsRUFBRSxVQUFVeE4sWUFBWSxFQUFFO2dCQUMzQi9FLE9BQU8sQ0FBQytFLFlBQVksR0FBR0EsWUFBWTtBQUNyQzthQUNEO0FBQ0RFLFlBQUFBLFFBQVEsRUFBRTtjQUNScUcsR0FBRyxFQUFFLFlBQVk7Z0JBQ2YsSUFBSSxDQUFDNkcseUNBQXlDLEVBQUU7a0JBQzlDQSx5Q0FBeUMsR0FBRyxJQUFJO0FBRWhEN0ksa0JBQUFBLEtBQUssQ0FBQyxnRkFBZ0YsR0FBRyw0RUFBNEUsQ0FBQztBQUN4SztnQkFFQSxPQUFPdEosT0FBTyxDQUFDaUYsUUFBUTtBQUN6QjthQUNEO0FBQ0RxRixZQUFBQSxXQUFXLEVBQUU7Y0FDWGdCLEdBQUcsRUFBRSxZQUFZO2dCQUNmLE9BQU90TCxPQUFPLENBQUNzSyxXQUFXO2VBQzNCO0FBQ0RpSSxjQUFBQSxHQUFHLEVBQUUsVUFBVWpJLFdBQVcsRUFBRTtnQkFDMUIsSUFBSSxDQUFDK0gsbUNBQW1DLEVBQUU7QUFDeENySixrQkFBQUEsSUFBSSxDQUFDLDJEQUEyRCxHQUFHLDRFQUE0RSxFQUFFc0IsV0FBVyxDQUFDO2tCQUU3SitILG1DQUFtQyxHQUFHLElBQUk7QUFDNUM7QUFDRjtBQUNGO1dBQ0QsQ0FBQyxDQUFDOztVQUVIclMsT0FBTyxDQUFDaUYsUUFBUSxHQUFHQSxRQUFRO0FBQzdCO1FBRUE7VUFDRWpGLE9BQU8sQ0FBQ3lTLGdCQUFnQixHQUFHLElBQUk7VUFDL0J6UyxPQUFPLENBQUMwUyxpQkFBaUIsR0FBRyxJQUFJO0FBQ2xDO0FBRUEsUUFBQSxPQUFPMVMsT0FBTztBQUNoQjtNQUVBLElBQUkyUyxhQUFhLEdBQUcsQ0FBQyxDQUFDO01BQ3RCLElBQUlDLE9BQU8sR0FBRyxDQUFDO01BQ2YsSUFBSUMsUUFBUSxHQUFHLENBQUM7TUFDaEIsSUFBSUMsUUFBUSxHQUFHLENBQUM7TUFFaEIsU0FBU0MsZUFBZUEsQ0FBQzlGLE9BQU8sRUFBRTtBQUNoQyxRQUFBLElBQUlBLE9BQU8sQ0FBQ3ZKLE9BQU8sS0FBS2lQLGFBQWEsRUFBRTtBQUNyQyxVQUFBLElBQUlLLElBQUksR0FBRy9GLE9BQU8sQ0FBQ3RKLE9BQU87QUFDMUIsVUFBQSxJQUFJc1AsUUFBUSxHQUFHRCxJQUFJLEVBQUUsQ0FBQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQUMsVUFBQUEsUUFBUSxDQUFDclAsSUFBSSxDQUFDLFVBQVVzUCxZQUFZLEVBQUU7WUFDcEMsSUFBSWpHLE9BQU8sQ0FBQ3ZKLE9BQU8sS0FBS2tQLE9BQU8sSUFBSTNGLE9BQU8sQ0FBQ3ZKLE9BQU8sS0FBS2lQLGFBQWEsRUFBRTtBQUNwRTtjQUNBLElBQUlRLFFBQVEsR0FBR2xHLE9BQU87Y0FDdEJrRyxRQUFRLENBQUN6UCxPQUFPLEdBQUdtUCxRQUFRO2NBQzNCTSxRQUFRLENBQUN4UCxPQUFPLEdBQUd1UCxZQUFZO0FBQ2pDO1dBQ0QsRUFBRSxVQUFVNUosS0FBSyxFQUFFO1lBQ2xCLElBQUkyRCxPQUFPLENBQUN2SixPQUFPLEtBQUtrUCxPQUFPLElBQUkzRixPQUFPLENBQUN2SixPQUFPLEtBQUtpUCxhQUFhLEVBQUU7QUFDcEU7Y0FDQSxJQUFJUyxRQUFRLEdBQUduRyxPQUFPO2NBQ3RCbUcsUUFBUSxDQUFDMVAsT0FBTyxHQUFHb1AsUUFBUTtjQUMzQk0sUUFBUSxDQUFDelAsT0FBTyxHQUFHMkYsS0FBSztBQUMxQjtBQUNGLFdBQUMsQ0FBQztBQUVGLFVBQUEsSUFBSTJELE9BQU8sQ0FBQ3ZKLE9BQU8sS0FBS2lQLGFBQWEsRUFBRTtBQUNyQztBQUNBO1lBQ0EsSUFBSVUsT0FBTyxHQUFHcEcsT0FBTztZQUNyQm9HLE9BQU8sQ0FBQzNQLE9BQU8sR0FBR2tQLE9BQU87WUFDekJTLE9BQU8sQ0FBQzFQLE9BQU8sR0FBR3NQLFFBQVE7QUFDNUI7QUFDRjtBQUVBLFFBQUEsSUFBSWhHLE9BQU8sQ0FBQ3ZKLE9BQU8sS0FBS21QLFFBQVEsRUFBRTtBQUNoQyxVQUFBLElBQUlLLFlBQVksR0FBR2pHLE9BQU8sQ0FBQ3RKLE9BQU87VUFFbEM7WUFDRSxJQUFJdVAsWUFBWSxLQUFLM0gsU0FBUyxFQUFFO0FBQzlCakMsY0FBQUEsS0FBSyxDQUFDLDRDQUE0QyxHQUFHLGNBQWMsR0FBRywwREFBMEQ7QUFBRztBQUNuSSxjQUFBLG9DQUFvQyxHQUFHLDJCQUEyQixHQUFHLDBEQUEwRCxFQUFFNEosWUFBWSxDQUFDO0FBQ2hKO0FBQ0Y7VUFFQTtBQUNFLFlBQUEsSUFBSSxFQUFFLFNBQVMsSUFBSUEsWUFBWSxDQUFDLEVBQUU7QUFDaEM1SixjQUFBQSxLQUFLLENBQUMsNENBQTRDLEdBQUcsY0FBYyxHQUFHLDBEQUEwRDtBQUFHO0FBQ25JLGNBQUEsb0NBQW9DLEdBQUcsdUJBQXVCLEVBQUU0SixZQUFZLENBQUM7QUFDL0U7QUFDRjtVQUVBLE9BQU9BLFlBQVksQ0FBQ3JQLE9BQU87QUFDN0IsU0FBQyxNQUFNO1VBQ0wsTUFBTW9KLE9BQU8sQ0FBQ3RKLE9BQU87QUFDdkI7QUFDRjtNQUVBLFNBQVMyUCxJQUFJQSxDQUFDTixJQUFJLEVBQUU7UUFDbEIsSUFBSS9GLE9BQU8sR0FBRztBQUNaO1VBQ0F2SixPQUFPLEVBQUVpUCxhQUFhO0FBQ3RCaFAsVUFBQUEsT0FBTyxFQUFFcVA7U0FDVjtRQUNELElBQUlPLFFBQVEsR0FBRztVQUNialIsUUFBUSxFQUFFbUYsZUFBZTtVQUN6QmxDLFFBQVEsRUFBRTBILE9BQU87QUFDakJ6SCxVQUFBQSxLQUFLLEVBQUV1TjtTQUNSO1FBRUQ7QUFDRTtBQUNBLFVBQUEsSUFBSTFRLFlBQVk7VUFDaEIsSUFBSW1SLFNBQVMsQ0FBQzs7QUFFZC9ULFVBQUFBLE1BQU0sQ0FBQzZTLGdCQUFnQixDQUFDaUIsUUFBUSxFQUFFO0FBQ2hDbFIsWUFBQUEsWUFBWSxFQUFFO2NBQ1owTCxZQUFZLEVBQUUsSUFBSTtjQUNsQnpDLEdBQUcsRUFBRSxZQUFZO0FBQ2YsZ0JBQUEsT0FBT2pKLFlBQVk7ZUFDcEI7QUFDRGtRLGNBQUFBLEdBQUcsRUFBRSxVQUFVa0IsZUFBZSxFQUFFO0FBQzlCbkssZ0JBQUFBLEtBQUssQ0FBQyxtRUFBbUUsR0FBRyxtRUFBbUUsR0FBRyx1REFBdUQsQ0FBQztnQkFFMU1qSCxZQUFZLEdBQUdvUixlQUFlLENBQUM7QUFDL0I7O0FBRUFoVSxnQkFBQUEsTUFBTSxDQUFDNEwsY0FBYyxDQUFDa0ksUUFBUSxFQUFFLGNBQWMsRUFBRTtBQUM5QzdFLGtCQUFBQSxVQUFVLEVBQUU7QUFDZCxpQkFBQyxDQUFDO0FBQ0o7YUFDRDtBQUNEOEUsWUFBQUEsU0FBUyxFQUFFO2NBQ1R6RixZQUFZLEVBQUUsSUFBSTtjQUNsQnpDLEdBQUcsRUFBRSxZQUFZO0FBQ2YsZ0JBQUEsT0FBT2tJLFNBQVM7ZUFDakI7QUFDRGpCLGNBQUFBLEdBQUcsRUFBRSxVQUFVbUIsWUFBWSxFQUFFO0FBQzNCcEssZ0JBQUFBLEtBQUssQ0FBQyxnRUFBZ0UsR0FBRyxtRUFBbUUsR0FBRyx1REFBdUQsQ0FBQztnQkFFdk1rSyxTQUFTLEdBQUdFLFlBQVksQ0FBQztBQUN6Qjs7QUFFQWpVLGdCQUFBQSxNQUFNLENBQUM0TCxjQUFjLENBQUNrSSxRQUFRLEVBQUUsV0FBVyxFQUFFO0FBQzNDN0Usa0JBQUFBLFVBQVUsRUFBRTtBQUNkLGlCQUFDLENBQUM7QUFDSjtBQUNGO0FBQ0YsV0FBQyxDQUFDO0FBQ0o7QUFFQSxRQUFBLE9BQU82RSxRQUFRO0FBQ2pCO01BRUEsU0FBU0ksVUFBVUEsQ0FBQ3JPLE1BQU0sRUFBRTtRQUMxQjtVQUNFLElBQUlBLE1BQU0sSUFBSSxJQUFJLElBQUlBLE1BQU0sQ0FBQ2hELFFBQVEsS0FBS2tGLGVBQWUsRUFBRTtBQUN6RDhCLFlBQUFBLEtBQUssQ0FBQyw4REFBOEQsR0FBRyxtREFBbUQsR0FBRyx3QkFBd0IsQ0FBQztBQUN4SixXQUFDLE1BQU0sSUFBSSxPQUFPaEUsTUFBTSxLQUFLLFVBQVUsRUFBRTtZQUN2Q2dFLEtBQUssQ0FBQyx5REFBeUQsRUFBRWhFLE1BQU0sS0FBSyxJQUFJLEdBQUcsTUFBTSxHQUFHLE9BQU9BLE1BQU0sQ0FBQztBQUM1RyxXQUFDLE1BQU07WUFDTCxJQUFJQSxNQUFNLENBQUNyRCxNQUFNLEtBQUssQ0FBQyxJQUFJcUQsTUFBTSxDQUFDckQsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUM5Q3FILGNBQUFBLEtBQUssQ0FBQyw4RUFBOEUsRUFBRWhFLE1BQU0sQ0FBQ3JELE1BQU0sS0FBSyxDQUFDLEdBQUcsMENBQTBDLEdBQUcsNkNBQTZDLENBQUM7QUFDek07QUFDRjtVQUVBLElBQUlxRCxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ2xCLElBQUlBLE1BQU0sQ0FBQ2pELFlBQVksSUFBSSxJQUFJLElBQUlpRCxNQUFNLENBQUNrTyxTQUFTLElBQUksSUFBSSxFQUFFO0FBQzNEbEssY0FBQUEsS0FBSyxDQUFDLHdFQUF3RSxHQUFHLDhDQUE4QyxDQUFDO0FBQ2xJO0FBQ0Y7QUFDRjtRQUVBLElBQUlzSyxXQUFXLEdBQUc7VUFDaEJ0UixRQUFRLEVBQUUrRSxzQkFBc0I7QUFDaEMvQixVQUFBQSxNQUFNLEVBQUVBO1NBQ1Q7UUFFRDtBQUNFLFVBQUEsSUFBSXVPLE9BQU87QUFDWHBVLFVBQUFBLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQ3VJLFdBQVcsRUFBRSxhQUFhLEVBQUU7WUFDaERsRixVQUFVLEVBQUUsS0FBSztZQUNqQlgsWUFBWSxFQUFFLElBQUk7WUFDbEJ6QyxHQUFHLEVBQUUsWUFBWTtBQUNmLGNBQUEsT0FBT3VJLE9BQU87YUFDZjtBQUNEdEIsWUFBQUEsR0FBRyxFQUFFLFVBQVVoSSxJQUFJLEVBQUU7Y0FDbkJzSixPQUFPLEdBQUd0SixJQUFJLENBQUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2NBRUEsSUFBSSxDQUFDakYsTUFBTSxDQUFDaUYsSUFBSSxJQUFJLENBQUNqRixNQUFNLENBQUNnRixXQUFXLEVBQUU7Z0JBQ3ZDaEYsTUFBTSxDQUFDZ0YsV0FBVyxHQUFHQyxJQUFJO0FBQzNCO0FBQ0Y7QUFDRixXQUFDLENBQUM7QUFDSjtBQUVBLFFBQUEsT0FBT3FKLFdBQVc7QUFDcEI7QUFFQSxNQUFBLElBQUlFLHNCQUFzQjtNQUUxQjtBQUNFQSxRQUFBQSxzQkFBc0IsR0FBRzNWLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO0FBQy9EO01BRUEsU0FBUzJWLGtCQUFrQkEsQ0FBQ3hSLElBQUksRUFBRTtRQUNoQyxJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLElBQUksT0FBT0EsSUFBSSxLQUFLLFVBQVUsRUFBRTtBQUMxRCxVQUFBLE9BQU8sSUFBSTtTQUNaOztBQUdELFFBQUEsSUFBSUEsSUFBSSxLQUFLeUUsbUJBQW1CLElBQUl6RSxJQUFJLEtBQUsyRSxtQkFBbUIsSUFBSTRCLGtCQUFrQixJQUFLdkcsSUFBSSxLQUFLMEUsc0JBQXNCLElBQUkxRSxJQUFJLEtBQUsrRSxtQkFBbUIsSUFBSS9FLElBQUksS0FBS2dGLHdCQUF3QixJQUFJc0Isa0JBQWtCLElBQUt0RyxJQUFJLEtBQUttRixvQkFBb0IsSUFBSWdCLGNBQWMsSUFBS0Msa0JBQWtCLElBQUtDLHVCQUF1QixFQUFHO0FBQzdULFVBQUEsT0FBTyxJQUFJO0FBQ2I7UUFFQSxJQUFJLE9BQU9yRyxJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO0FBQzdDLFVBQUEsSUFBSUEsSUFBSSxDQUFDRCxRQUFRLEtBQUttRixlQUFlLElBQUlsRixJQUFJLENBQUNELFFBQVEsS0FBS2tGLGVBQWUsSUFBSWpGLElBQUksQ0FBQ0QsUUFBUSxLQUFLNkUsbUJBQW1CLElBQUk1RSxJQUFJLENBQUNELFFBQVEsS0FBSzhFLGtCQUFrQixJQUFJN0UsSUFBSSxDQUFDRCxRQUFRLEtBQUsrRSxzQkFBc0I7QUFBSTtBQUMzTTtBQUNBO0FBQ0E7VUFDQTlFLElBQUksQ0FBQ0QsUUFBUSxLQUFLd1Isc0JBQXNCLElBQUl2UixJQUFJLENBQUN5UixXQUFXLEtBQUt6SSxTQUFTLEVBQUU7QUFDMUUsWUFBQSxPQUFPLElBQUk7QUFDYjtBQUNGO0FBRUEsUUFBQSxPQUFPLEtBQUs7QUFDZDtBQUVBLE1BQUEsU0FBUzBJLElBQUlBLENBQUMxUixJQUFJLEVBQUVrRCxPQUFPLEVBQUU7UUFDM0I7QUFDRSxVQUFBLElBQUksQ0FBQ3NPLGtCQUFrQixDQUFDeFIsSUFBSSxDQUFDLEVBQUU7QUFDN0IrRyxZQUFBQSxLQUFLLENBQUMsd0RBQXdELEdBQUcsY0FBYyxFQUFFL0csSUFBSSxLQUFLLElBQUksR0FBRyxNQUFNLEdBQUcsT0FBT0EsSUFBSSxDQUFDO0FBQ3hIO0FBQ0Y7UUFFQSxJQUFJcVIsV0FBVyxHQUFHO1VBQ2hCdFIsUUFBUSxFQUFFa0YsZUFBZTtVQUN6QmpGLElBQUksRUFBRUEsSUFBSTtBQUNWa0QsVUFBQUEsT0FBTyxFQUFFQSxPQUFPLEtBQUs4RixTQUFTLEdBQUcsSUFBSSxHQUFHOUY7U0FDekM7UUFFRDtBQUNFLFVBQUEsSUFBSW9PLE9BQU87QUFDWHBVLFVBQUFBLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQ3VJLFdBQVcsRUFBRSxhQUFhLEVBQUU7WUFDaERsRixVQUFVLEVBQUUsS0FBSztZQUNqQlgsWUFBWSxFQUFFLElBQUk7WUFDbEJ6QyxHQUFHLEVBQUUsWUFBWTtBQUNmLGNBQUEsT0FBT3VJLE9BQU87YUFDZjtBQUNEdEIsWUFBQUEsR0FBRyxFQUFFLFVBQVVoSSxJQUFJLEVBQUU7Y0FDbkJzSixPQUFPLEdBQUd0SixJQUFJLENBQUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O2NBRUEsSUFBSSxDQUFDaEksSUFBSSxDQUFDZ0ksSUFBSSxJQUFJLENBQUNoSSxJQUFJLENBQUMrSCxXQUFXLEVBQUU7Z0JBQ25DL0gsSUFBSSxDQUFDK0gsV0FBVyxHQUFHQyxJQUFJO0FBQ3pCO0FBQ0Y7QUFDRixXQUFDLENBQUM7QUFDSjtBQUVBLFFBQUEsT0FBT3FKLFdBQVc7QUFDcEI7TUFFQSxTQUFTTSxpQkFBaUJBLEdBQUc7QUFDM0IsUUFBQSxJQUFJQyxVQUFVLEdBQUdqUSxzQkFBc0IsQ0FBQy9DLE9BQU87UUFFL0M7VUFDRSxJQUFJZ1QsVUFBVSxLQUFLLElBQUksRUFBRTtBQUN2QjdLLFlBQUFBLEtBQUssQ0FBQywrR0FBK0csR0FBRyxrQ0FBa0MsR0FBRyx3RkFBd0YsR0FBRywrQ0FBK0MsR0FBRyxpRUFBaUUsR0FBRyxrR0FBa0csQ0FBQztBQUNuZDtTQUNEO0FBQ0Q7QUFDQTs7QUFHQSxRQUFBLE9BQU82SyxVQUFVO0FBQ25CO01BQ0EsU0FBU3hPLFVBQVVBLENBQUN5TyxPQUFPLEVBQUU7QUFDM0IsUUFBQSxJQUFJRCxVQUFVLEdBQUdELGlCQUFpQixFQUFFO1FBRXBDO0FBQ0U7QUFDQSxVQUFBLElBQUlFLE9BQU8sQ0FBQ2hQLFFBQVEsS0FBS21HLFNBQVMsRUFBRTtBQUNsQyxZQUFBLElBQUk4SSxXQUFXLEdBQUdELE9BQU8sQ0FBQ2hQLFFBQVEsQ0FBQztBQUNuQzs7QUFFQSxZQUFBLElBQUlpUCxXQUFXLENBQUNwUCxRQUFRLEtBQUttUCxPQUFPLEVBQUU7QUFDcEM5SyxjQUFBQSxLQUFLLENBQUMscUZBQXFGLEdBQUcsc0ZBQXNGLENBQUM7QUFDdkwsYUFBQyxNQUFNLElBQUkrSyxXQUFXLENBQUNyUCxRQUFRLEtBQUtvUCxPQUFPLEVBQUU7QUFDM0M5SyxjQUFBQSxLQUFLLENBQUMseURBQXlELEdBQUcsbURBQW1ELENBQUM7QUFDeEg7QUFDRjtBQUNGO0FBRUEsUUFBQSxPQUFPNkssVUFBVSxDQUFDeE8sVUFBVSxDQUFDeU8sT0FBTyxDQUFDO0FBQ3ZDO01BQ0EsU0FBUy9OLFFBQVFBLENBQUNpTyxZQUFZLEVBQUU7QUFDOUIsUUFBQSxJQUFJSCxVQUFVLEdBQUdELGlCQUFpQixFQUFFO0FBQ3BDLFFBQUEsT0FBT0MsVUFBVSxDQUFDOU4sUUFBUSxDQUFDaU8sWUFBWSxDQUFDO0FBQzFDO01BQ0EsU0FBU25PLFVBQVVBLENBQUNvTyxPQUFPLEVBQUVDLFVBQVUsRUFBRXRILElBQUksRUFBRTtBQUM3QyxRQUFBLElBQUlpSCxVQUFVLEdBQUdELGlCQUFpQixFQUFFO1FBQ3BDLE9BQU9DLFVBQVUsQ0FBQ2hPLFVBQVUsQ0FBQ29PLE9BQU8sRUFBRUMsVUFBVSxFQUFFdEgsSUFBSSxDQUFDO0FBQ3pEO01BQ0EsU0FBUzlHLE1BQU1BLENBQUNxTyxZQUFZLEVBQUU7QUFDNUIsUUFBQSxJQUFJTixVQUFVLEdBQUdELGlCQUFpQixFQUFFO0FBQ3BDLFFBQUEsT0FBT0MsVUFBVSxDQUFDL04sTUFBTSxDQUFDcU8sWUFBWSxDQUFDO0FBQ3hDO0FBQ0EsTUFBQSxTQUFTNU8sU0FBU0EsQ0FBQzZPLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0FBQy9CLFFBQUEsSUFBSVIsVUFBVSxHQUFHRCxpQkFBaUIsRUFBRTtRQUNwQyxPQUFPQyxVQUFVLENBQUN0TyxTQUFTLENBQUM2TyxNQUFNLEVBQUVDLElBQUksQ0FBQztBQUMzQztBQUNBLE1BQUEsU0FBUzNPLGtCQUFrQkEsQ0FBQzBPLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0FBQ3hDLFFBQUEsSUFBSVIsVUFBVSxHQUFHRCxpQkFBaUIsRUFBRTtRQUNwQyxPQUFPQyxVQUFVLENBQUNuTyxrQkFBa0IsQ0FBQzBPLE1BQU0sRUFBRUMsSUFBSSxDQUFDO0FBQ3BEO0FBQ0EsTUFBQSxTQUFTMU8sZUFBZUEsQ0FBQ3lPLE1BQU0sRUFBRUMsSUFBSSxFQUFFO0FBQ3JDLFFBQUEsSUFBSVIsVUFBVSxHQUFHRCxpQkFBaUIsRUFBRTtRQUNwQyxPQUFPQyxVQUFVLENBQUNsTyxlQUFlLENBQUN5TyxNQUFNLEVBQUVDLElBQUksQ0FBQztBQUNqRDtBQUNBLE1BQUEsU0FBU2pQLFdBQVdBLENBQUNnRixRQUFRLEVBQUVpSyxJQUFJLEVBQUU7QUFDbkMsUUFBQSxJQUFJUixVQUFVLEdBQUdELGlCQUFpQixFQUFFO1FBQ3BDLE9BQU9DLFVBQVUsQ0FBQ3pPLFdBQVcsQ0FBQ2dGLFFBQVEsRUFBRWlLLElBQUksQ0FBQztBQUMvQztBQUNBLE1BQUEsU0FBU3pPLE9BQU9BLENBQUN3TyxNQUFNLEVBQUVDLElBQUksRUFBRTtBQUM3QixRQUFBLElBQUlSLFVBQVUsR0FBR0QsaUJBQWlCLEVBQUU7UUFDcEMsT0FBT0MsVUFBVSxDQUFDak8sT0FBTyxDQUFDd08sTUFBTSxFQUFFQyxJQUFJLENBQUM7QUFDekM7TUFDQSxTQUFTNU8sbUJBQW1CQSxDQUFDekUsR0FBRyxFQUFFb1QsTUFBTSxFQUFFQyxJQUFJLEVBQUU7QUFDOUMsUUFBQSxJQUFJUixVQUFVLEdBQUdELGlCQUFpQixFQUFFO1FBQ3BDLE9BQU9DLFVBQVUsQ0FBQ3BPLG1CQUFtQixDQUFDekUsR0FBRyxFQUFFb1QsTUFBTSxFQUFFQyxJQUFJLENBQUM7QUFDMUQ7QUFDQSxNQUFBLFNBQVNDLGFBQWFBLENBQUN4UixLQUFLLEVBQUV5UixXQUFXLEVBQUU7UUFDekM7QUFDRSxVQUFBLElBQUlWLFVBQVUsR0FBR0QsaUJBQWlCLEVBQUU7VUFDcEMsT0FBT0MsVUFBVSxDQUFDUyxhQUFhLENBQUN4UixLQUFLLEVBQUV5UixXQUFXLENBQUM7QUFDckQ7QUFDRjtNQUNBLFNBQVN0TyxhQUFhQSxHQUFHO0FBQ3ZCLFFBQUEsSUFBSTROLFVBQVUsR0FBR0QsaUJBQWlCLEVBQUU7QUFDcEMsUUFBQSxPQUFPQyxVQUFVLENBQUM1TixhQUFhLEVBQUU7QUFDbkM7TUFDQSxTQUFTWCxnQkFBZ0JBLENBQUN4QyxLQUFLLEVBQUU7QUFDL0IsUUFBQSxJQUFJK1EsVUFBVSxHQUFHRCxpQkFBaUIsRUFBRTtBQUNwQyxRQUFBLE9BQU9DLFVBQVUsQ0FBQ3ZPLGdCQUFnQixDQUFDeEMsS0FBSyxDQUFDO0FBQzNDO01BQ0EsU0FBUzBDLEtBQUtBLEdBQUc7QUFDZixRQUFBLElBQUlxTyxVQUFVLEdBQUdELGlCQUFpQixFQUFFO0FBQ3BDLFFBQUEsT0FBT0MsVUFBVSxDQUFDck8sS0FBSyxFQUFFO0FBQzNCO01BQ0EsU0FBU1Esb0JBQW9CQSxDQUFDd08sU0FBUyxFQUFFQyxXQUFXLEVBQUVDLGlCQUFpQixFQUFFO0FBQ3ZFLFFBQUEsSUFBSWIsVUFBVSxHQUFHRCxpQkFBaUIsRUFBRTtRQUNwQyxPQUFPQyxVQUFVLENBQUM3TixvQkFBb0IsQ0FBQ3dPLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxpQkFBaUIsQ0FBQztBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtNQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFDO0FBQ3JCLE1BQUEsSUFBSUMsT0FBTztBQUNYLE1BQUEsSUFBSUMsUUFBUTtBQUNaLE1BQUEsSUFBSUMsUUFBUTtBQUNaLE1BQUEsSUFBSUMsU0FBUztBQUNiLE1BQUEsSUFBSUMsU0FBUztBQUNiLE1BQUEsSUFBSUMsa0JBQWtCO0FBQ3RCLE1BQUEsSUFBSUMsWUFBWTtNQUVoQixTQUFTQyxXQUFXQSxHQUFHO01BRXZCQSxXQUFXLENBQUNDLGtCQUFrQixHQUFHLElBQUk7TUFDckMsU0FBU0MsV0FBV0EsR0FBRztRQUNyQjtVQUNFLElBQUlWLGFBQWEsS0FBSyxDQUFDLEVBQUU7QUFDdkI7WUFDQUMsT0FBTyxHQUFHbkwsT0FBTyxDQUFDNkwsR0FBRztZQUNyQlQsUUFBUSxHQUFHcEwsT0FBTyxDQUFDcUIsSUFBSTtZQUN2QmdLLFFBQVEsR0FBR3JMLE9BQU8sQ0FBQ2YsSUFBSTtZQUN2QnFNLFNBQVMsR0FBR3RMLE9BQU8sQ0FBQ1QsS0FBSztZQUN6QmdNLFNBQVMsR0FBR3ZMLE9BQU8sQ0FBQzhMLEtBQUs7WUFDekJOLGtCQUFrQixHQUFHeEwsT0FBTyxDQUFDK0wsY0FBYztBQUMzQ04sWUFBQUEsWUFBWSxHQUFHekwsT0FBTyxDQUFDZ00sUUFBUSxDQUFDOztZQUVoQyxJQUFJaFcsS0FBSyxHQUFHO2NBQ1ZnTyxZQUFZLEVBQUUsSUFBSTtjQUNsQlcsVUFBVSxFQUFFLElBQUk7Y0FDaEJ0TCxLQUFLLEVBQUVxUyxXQUFXO0FBQ2xCOUcsY0FBQUEsUUFBUSxFQUFFO0FBQ1osYUFBQyxDQUFDOztBQUVGbFAsWUFBQUEsTUFBTSxDQUFDNlMsZ0JBQWdCLENBQUN2SSxPQUFPLEVBQUU7Y0FDL0JxQixJQUFJLEVBQUVyTCxLQUFLO2NBQ1g2VixHQUFHLEVBQUU3VixLQUFLO2NBQ1ZpSixJQUFJLEVBQUVqSixLQUFLO2NBQ1h1SixLQUFLLEVBQUV2SixLQUFLO2NBQ1o4VixLQUFLLEVBQUU5VixLQUFLO2NBQ1orVixjQUFjLEVBQUUvVixLQUFLO0FBQ3JCZ1csY0FBQUEsUUFBUSxFQUFFaFc7QUFDWixhQUFDLENBQUM7QUFDRjtBQUNGO0FBRUFrVixVQUFBQSxhQUFhLEVBQUU7QUFDakI7QUFDRjtNQUNBLFNBQVNlLFlBQVlBLEdBQUc7UUFDdEI7QUFDRWYsVUFBQUEsYUFBYSxFQUFFO1VBRWYsSUFBSUEsYUFBYSxLQUFLLENBQUMsRUFBRTtBQUN2QjtZQUNBLElBQUlsVixLQUFLLEdBQUc7Y0FDVmdPLFlBQVksRUFBRSxJQUFJO2NBQ2xCVyxVQUFVLEVBQUUsSUFBSTtBQUNoQkMsY0FBQUEsUUFBUSxFQUFFO0FBQ1osYUFBQyxDQUFDOztBQUVGbFAsWUFBQUEsTUFBTSxDQUFDNlMsZ0JBQWdCLENBQUN2SSxPQUFPLEVBQUU7QUFDL0I2TCxjQUFBQSxHQUFHLEVBQUVsVyxNQUFNLENBQUMsRUFBRSxFQUFFSyxLQUFLLEVBQUU7QUFDckJxRCxnQkFBQUEsS0FBSyxFQUFFOFI7QUFDVCxlQUFDLENBQUM7QUFDRjlKLGNBQUFBLElBQUksRUFBRTFMLE1BQU0sQ0FBQyxFQUFFLEVBQUVLLEtBQUssRUFBRTtBQUN0QnFELGdCQUFBQSxLQUFLLEVBQUUrUjtBQUNULGVBQUMsQ0FBQztBQUNGbk0sY0FBQUEsSUFBSSxFQUFFdEosTUFBTSxDQUFDLEVBQUUsRUFBRUssS0FBSyxFQUFFO0FBQ3RCcUQsZ0JBQUFBLEtBQUssRUFBRWdTO0FBQ1QsZUFBQyxDQUFDO0FBQ0Y5TCxjQUFBQSxLQUFLLEVBQUU1SixNQUFNLENBQUMsRUFBRSxFQUFFSyxLQUFLLEVBQUU7QUFDdkJxRCxnQkFBQUEsS0FBSyxFQUFFaVM7QUFDVCxlQUFDLENBQUM7QUFDRlEsY0FBQUEsS0FBSyxFQUFFblcsTUFBTSxDQUFDLEVBQUUsRUFBRUssS0FBSyxFQUFFO0FBQ3ZCcUQsZ0JBQUFBLEtBQUssRUFBRWtTO0FBQ1QsZUFBQyxDQUFDO0FBQ0ZRLGNBQUFBLGNBQWMsRUFBRXBXLE1BQU0sQ0FBQyxFQUFFLEVBQUVLLEtBQUssRUFBRTtBQUNoQ3FELGdCQUFBQSxLQUFLLEVBQUVtUztBQUNULGVBQUMsQ0FBQztBQUNGUSxjQUFBQSxRQUFRLEVBQUVyVyxNQUFNLENBQUMsRUFBRSxFQUFFSyxLQUFLLEVBQUU7QUFDMUJxRCxnQkFBQUEsS0FBSyxFQUFFb1M7ZUFDUjtBQUNILGFBQUMsQ0FBQztBQUNGO0FBQ0Y7VUFFQSxJQUFJUCxhQUFhLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCM0wsWUFBQUEsS0FBSyxDQUFDLGlDQUFpQyxHQUFHLCtDQUErQyxDQUFDO0FBQzVGO0FBQ0Y7QUFDRjtBQUVBLE1BQUEsSUFBSTJNLHdCQUF3QixHQUFHbE4sb0JBQW9CLENBQUM3RSxzQkFBc0I7QUFDMUUsTUFBQSxJQUFJZ1MsTUFBTTtNQUNWLFNBQVNDLDZCQUE2QkEsQ0FBQzVMLElBQUksRUFBRStELE1BQU0sRUFBRThILE9BQU8sRUFBRTtRQUM1RDtVQUNFLElBQUlGLE1BQU0sS0FBSzNLLFNBQVMsRUFBRTtBQUN4QjtZQUNBLElBQUk7Y0FDRixNQUFNakwsS0FBSyxFQUFFO2FBQ2QsQ0FBQyxPQUFPekIsQ0FBQyxFQUFFO0FBQ1YsY0FBQSxJQUFJa1IsS0FBSyxHQUFHbFIsQ0FBQyxDQUFDeUosS0FBSyxDQUFDK04sSUFBSSxFQUFFLENBQUN0RyxLQUFLLENBQUMsY0FBYyxDQUFDO2NBQ2hEbUcsTUFBTSxHQUFHbkcsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUNsQztXQUNEOztBQUdELFVBQUEsT0FBTyxJQUFJLEdBQUdtRyxNQUFNLEdBQUczTCxJQUFJO0FBQzdCO0FBQ0Y7TUFDQSxJQUFJK0wsT0FBTyxHQUFHLEtBQUs7QUFDbkIsTUFBQSxJQUFJQyxtQkFBbUI7TUFFdkI7UUFDRSxJQUFJQyxlQUFlLEdBQUcsT0FBT0MsT0FBTyxLQUFLLFVBQVUsR0FBR0EsT0FBTyxHQUFHQyxHQUFHO0FBQ25FSCxRQUFBQSxtQkFBbUIsR0FBRyxJQUFJQyxlQUFlLEVBQUU7QUFDN0M7QUFFQSxNQUFBLFNBQVNHLDRCQUE0QkEsQ0FBQ0MsRUFBRSxFQUFFQyxTQUFTLEVBQUU7QUFDbkQ7QUFDQSxRQUFBLElBQUssQ0FBQ0QsRUFBRSxJQUFJTixPQUFPLEVBQUU7QUFDbkIsVUFBQSxPQUFPLEVBQUU7QUFDWDtRQUVBO1VBQ0UsSUFBSVEsS0FBSyxHQUFHUCxtQkFBbUIsQ0FBQ2pMLEdBQUcsQ0FBQ3NMLEVBQUUsQ0FBQztVQUV2QyxJQUFJRSxLQUFLLEtBQUt2TCxTQUFTLEVBQUU7QUFDdkIsWUFBQSxPQUFPdUwsS0FBSztBQUNkO0FBQ0Y7QUFFQSxRQUFBLElBQUlDLE9BQU87UUFDWFQsT0FBTyxHQUFHLElBQUk7QUFDZCxRQUFBLElBQUlVLHlCQUF5QixHQUFHMVcsS0FBSyxDQUFDMlcsaUJBQWlCLENBQUM7O1FBRXhEM1csS0FBSyxDQUFDMlcsaUJBQWlCLEdBQUcxTCxTQUFTO0FBQ25DLFFBQUEsSUFBSTJMLGtCQUFrQjtRQUV0QjtBQUNFQSxVQUFBQSxrQkFBa0IsR0FBR2pCLHdCQUF3QixDQUFDOVUsT0FBTyxDQUFDO0FBQ3REOztVQUVBOFUsd0JBQXdCLENBQUM5VSxPQUFPLEdBQUcsSUFBSTtBQUN2Q3dVLFVBQUFBLFdBQVcsRUFBRTtBQUNmO1FBRUEsSUFBSTtBQUNGO1VBQ0EsSUFBSWtCLFNBQVMsRUFBRTtBQUNiO1lBQ0EsSUFBSU0sSUFBSSxHQUFHLFlBQVk7Y0FDckIsTUFBTTdXLEtBQUssRUFBRTtBQUNmLGFBQUMsQ0FBQzs7WUFHRmIsTUFBTSxDQUFDNEwsY0FBYyxDQUFDOEwsSUFBSSxDQUFDaFgsU0FBUyxFQUFFLE9BQU8sRUFBRTtjQUM3Q29TLEdBQUcsRUFBRSxZQUFZO0FBQ2Y7QUFDQTtnQkFDQSxNQUFNalMsS0FBSyxFQUFFO0FBQ2Y7QUFDRixhQUFDLENBQUM7WUFFRixJQUFJLE9BQU84VyxPQUFPLEtBQUssUUFBUSxJQUFJQSxPQUFPLENBQUNQLFNBQVMsRUFBRTtBQUNwRDtBQUNBO2NBQ0EsSUFBSTtBQUNGTyxnQkFBQUEsT0FBTyxDQUFDUCxTQUFTLENBQUNNLElBQUksRUFBRSxFQUFFLENBQUM7ZUFDNUIsQ0FBQyxPQUFPdFksQ0FBQyxFQUFFO2dCQUNWa1ksT0FBTyxHQUFHbFksQ0FBQztBQUNiO2NBRUF1WSxPQUFPLENBQUNQLFNBQVMsQ0FBQ0QsRUFBRSxFQUFFLEVBQUUsRUFBRU8sSUFBSSxDQUFDO0FBQ2pDLGFBQUMsTUFBTTtjQUNMLElBQUk7Z0JBQ0ZBLElBQUksQ0FBQ3JWLElBQUksRUFBRTtlQUNaLENBQUMsT0FBT2pELENBQUMsRUFBRTtnQkFDVmtZLE9BQU8sR0FBR2xZLENBQUM7QUFDYjtBQUVBK1gsY0FBQUEsRUFBRSxDQUFDOVUsSUFBSSxDQUFDcVYsSUFBSSxDQUFDaFgsU0FBUyxDQUFDO0FBQ3pCO0FBQ0YsV0FBQyxNQUFNO1lBQ0wsSUFBSTtjQUNGLE1BQU1HLEtBQUssRUFBRTthQUNkLENBQUMsT0FBT3pCLENBQUMsRUFBRTtjQUNWa1ksT0FBTyxHQUFHbFksQ0FBQztBQUNiO0FBRUErWCxZQUFBQSxFQUFFLEVBQUU7QUFDTjtTQUNELENBQUMsT0FBT1MsTUFBTSxFQUFFO0FBQ2Y7VUFDQSxJQUFJQSxNQUFNLElBQUlOLE9BQU8sSUFBSSxPQUFPTSxNQUFNLENBQUMvTyxLQUFLLEtBQUssUUFBUSxFQUFFO0FBQ3pEO0FBQ0E7WUFDQSxJQUFJZ1AsV0FBVyxHQUFHRCxNQUFNLENBQUMvTyxLQUFLLENBQUNpUCxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQzFDLElBQUlDLFlBQVksR0FBR1QsT0FBTyxDQUFDek8sS0FBSyxDQUFDaVAsS0FBSyxDQUFDLElBQUksQ0FBQztBQUM1QyxZQUFBLElBQUlFLENBQUMsR0FBR0gsV0FBVyxDQUFDclYsTUFBTSxHQUFHLENBQUM7QUFDOUIsWUFBQSxJQUFJTixDQUFDLEdBQUc2VixZQUFZLENBQUN2VixNQUFNLEdBQUcsQ0FBQztBQUUvQixZQUFBLE9BQU93VixDQUFDLElBQUksQ0FBQyxJQUFJOVYsQ0FBQyxJQUFJLENBQUMsSUFBSTJWLFdBQVcsQ0FBQ0csQ0FBQyxDQUFDLEtBQUtELFlBQVksQ0FBQzdWLENBQUMsQ0FBQyxFQUFFO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxjQUFBQSxDQUFDLEVBQUU7QUFDTDtBQUVBLFlBQUEsT0FBTzhWLENBQUMsSUFBSSxDQUFDLElBQUk5VixDQUFDLElBQUksQ0FBQyxFQUFFOFYsQ0FBQyxFQUFFLEVBQUU5VixDQUFDLEVBQUUsRUFBRTtBQUNqQztBQUNBO2NBQ0EsSUFBSTJWLFdBQVcsQ0FBQ0csQ0FBQyxDQUFDLEtBQUtELFlBQVksQ0FBQzdWLENBQUMsQ0FBQyxFQUFFO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Z0JBQ0EsSUFBSThWLENBQUMsS0FBSyxDQUFDLElBQUk5VixDQUFDLEtBQUssQ0FBQyxFQUFFO2tCQUN0QixHQUFHO0FBQ0Q4VixvQkFBQUEsQ0FBQyxFQUFFO29CQUNIOVYsQ0FBQyxFQUFFLENBQUM7QUFDSjs7QUFFQSxvQkFBQSxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxJQUFJMlYsV0FBVyxDQUFDRyxDQUFDLENBQUMsS0FBS0QsWUFBWSxDQUFDN1YsQ0FBQyxDQUFDLEVBQUU7QUFDL0M7QUFDQSxzQkFBQSxJQUFJK1YsTUFBTSxHQUFHLElBQUksR0FBR0osV0FBVyxDQUFDRyxDQUFDLENBQUMsQ0FBQzdVLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0Q7QUFDQTs7c0JBR0EsSUFBSWdVLEVBQUUsQ0FBQ3RNLFdBQVcsSUFBSW9OLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxFQUFFO3dCQUNwREQsTUFBTSxHQUFHQSxNQUFNLENBQUM5VSxPQUFPLENBQUMsYUFBYSxFQUFFZ1UsRUFBRSxDQUFDdE0sV0FBVyxDQUFDO0FBQ3hEO3NCQUVBO0FBQ0Usd0JBQUEsSUFBSSxPQUFPc00sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUM1QkwsMEJBQUFBLG1CQUFtQixDQUFDaEUsR0FBRyxDQUFDcUUsRUFBRSxFQUFFYyxNQUFNLENBQUM7QUFDckM7dUJBQ0Q7O0FBR0Qsc0JBQUEsT0FBT0EsTUFBTTtBQUNmO0FBQ0YsbUJBQUMsUUFBUUQsQ0FBQyxJQUFJLENBQUMsSUFBSTlWLENBQUMsSUFBSSxDQUFDO0FBQzNCO2dCQUVBO0FBQ0Y7QUFDRjtBQUNGO0FBQ0YsU0FBQyxTQUFTO1VBQ1IyVSxPQUFPLEdBQUcsS0FBSztVQUVmO1lBQ0VMLHdCQUF3QixDQUFDOVUsT0FBTyxHQUFHK1Ysa0JBQWtCO0FBQ3JEbEIsWUFBQUEsWUFBWSxFQUFFO0FBQ2hCO1VBRUExVixLQUFLLENBQUMyVyxpQkFBaUIsR0FBR0QseUJBQXlCO1NBQ3BEOztBQUdELFFBQUEsSUFBSXpNLElBQUksR0FBR3FNLEVBQUUsR0FBR0EsRUFBRSxDQUFDdE0sV0FBVyxJQUFJc00sRUFBRSxDQUFDck0sSUFBSSxHQUFHLEVBQUU7UUFDOUMsSUFBSXFOLGNBQWMsR0FBR3JOLElBQUksR0FBRzRMLDZCQUE2QixDQUFDNUwsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUVwRTtBQUNFLFVBQUEsSUFBSSxPQUFPcU0sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUM1QkwsWUFBQUEsbUJBQW1CLENBQUNoRSxHQUFHLENBQUNxRSxFQUFFLEVBQUVnQixjQUFjLENBQUM7QUFDN0M7QUFDRjtBQUVBLFFBQUEsT0FBT0EsY0FBYztBQUN2QjtNQUNBLFNBQVNDLDhCQUE4QkEsQ0FBQ2pCLEVBQUUsRUFBRXRJLE1BQU0sRUFBRThILE9BQU8sRUFBRTtRQUMzRDtBQUNFLFVBQUEsT0FBT08sNEJBQTRCLENBQUNDLEVBQUUsRUFBRSxLQUFLLENBQUM7QUFDaEQ7QUFDRjtNQUVBLFNBQVNrQixlQUFlQSxDQUFDL00sU0FBUyxFQUFFO0FBQ2xDLFFBQUEsSUFBSTVLLFNBQVMsR0FBRzRLLFNBQVMsQ0FBQzVLLFNBQVM7UUFDbkMsT0FBTyxDQUFDLEVBQUVBLFNBQVMsSUFBSUEsU0FBUyxDQUFDQyxnQkFBZ0IsQ0FBQztBQUNwRDtNQUVBLFNBQVMyWCxvQ0FBb0NBLENBQUN4VixJQUFJLEVBQUUrTCxNQUFNLEVBQUU4SCxPQUFPLEVBQUU7UUFFbkUsSUFBSTdULElBQUksSUFBSSxJQUFJLEVBQUU7QUFDaEIsVUFBQSxPQUFPLEVBQUU7QUFDWDtBQUVBLFFBQUEsSUFBSSxPQUFPQSxJQUFJLEtBQUssVUFBVSxFQUFFO1VBQzlCO1lBQ0UsT0FBT29VLDRCQUE0QixDQUFDcFUsSUFBSSxFQUFFdVYsZUFBZSxDQUFDdlYsSUFBSSxDQUFDLENBQUM7QUFDbEU7QUFDRjtBQUVBLFFBQUEsSUFBSSxPQUFPQSxJQUFJLEtBQUssUUFBUSxFQUFFO1VBQzVCLE9BQU80VCw2QkFBNkIsQ0FBQzVULElBQUksQ0FBQztBQUM1QztBQUVBLFFBQUEsUUFBUUEsSUFBSTtBQUNWLFVBQUEsS0FBSytFLG1CQUFtQjtZQUN0QixPQUFPNk8sNkJBQTZCLENBQUMsVUFBVSxDQUFDO0FBRWxELFVBQUEsS0FBSzVPLHdCQUF3QjtZQUMzQixPQUFPNE8sNkJBQTZCLENBQUMsY0FBYyxDQUFDO0FBQ3hEO0FBRUEsUUFBQSxJQUFJLE9BQU81VCxJQUFJLEtBQUssUUFBUSxFQUFFO1VBQzVCLFFBQVFBLElBQUksQ0FBQ0QsUUFBUTtBQUNuQixZQUFBLEtBQUsrRSxzQkFBc0I7QUFDekIsY0FBQSxPQUFPd1EsOEJBQThCLENBQUN0VixJQUFJLENBQUMrQyxNQUFNLENBQUM7QUFFcEQsWUFBQSxLQUFLa0MsZUFBZTtBQUNsQjtjQUNBLE9BQU91USxvQ0FBb0MsQ0FBQ3hWLElBQUksQ0FBQ0EsSUFBSSxFQUFFK0wsTUFBTSxFQUFFOEgsT0FBTyxDQUFDO0FBRXpFLFlBQUEsS0FBSzNPLGVBQWU7Y0FDbEI7Z0JBQ0UsSUFBSXVGLGFBQWEsR0FBR3pLLElBQUk7QUFDeEIsZ0JBQUEsSUFBSTBLLE9BQU8sR0FBR0QsYUFBYSxDQUFDekgsUUFBUTtBQUNwQyxnQkFBQSxJQUFJMkgsSUFBSSxHQUFHRixhQUFhLENBQUN4SCxLQUFLO2dCQUU5QixJQUFJO0FBQ0Y7a0JBQ0EsT0FBT3VTLG9DQUFvQyxDQUFDN0ssSUFBSSxDQUFDRCxPQUFPLENBQUMsRUFBRXFCLE1BQU0sRUFBRThILE9BQU8sQ0FBQztpQkFDNUUsQ0FBQyxPQUFPdlgsQ0FBQyxFQUFFO0FBQ2Q7QUFDSjtBQUNGO0FBRUEsUUFBQSxPQUFPLEVBQUU7QUFDWDtNQUVBLElBQUltWixrQkFBa0IsR0FBRyxFQUFFO0FBQzNCLE1BQUEsSUFBSUMsd0JBQXdCLEdBQUdsUCxvQkFBb0IsQ0FBQ1osc0JBQXNCO01BRTFFLFNBQVMrUCw2QkFBNkJBLENBQUMxSixPQUFPLEVBQUU7UUFDOUM7VUFDRSxJQUFJQSxPQUFPLEVBQUU7QUFDWCxZQUFBLElBQUlELEtBQUssR0FBR0MsT0FBTyxDQUFDaE0sTUFBTTtZQUMxQixJQUFJOEYsS0FBSyxHQUFHeVAsb0NBQW9DLENBQUN2SixPQUFPLENBQUNqTSxJQUFJLEVBQUVpTSxPQUFPLENBQUNjLE9BQU8sRUFBRWYsS0FBSyxHQUFHQSxLQUFLLENBQUNoTSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQzFHMFYsWUFBQUEsd0JBQXdCLENBQUM1UCxrQkFBa0IsQ0FBQ0MsS0FBSyxDQUFDO0FBQ3BELFdBQUMsTUFBTTtBQUNMMlAsWUFBQUEsd0JBQXdCLENBQUM1UCxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7QUFDbkQ7QUFDRjtBQUNGO01BRUEsU0FBUzhQLGNBQWNBLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVqTyxhQUFhLEVBQUVtRSxPQUFPLEVBQUU7UUFDM0U7QUFDRTtVQUNBLElBQUkrSixHQUFHLEdBQUd6TyxRQUFRLENBQUNoSSxJQUFJLENBQUN1RCxJQUFJLENBQUNwRSxjQUFjLENBQUM7QUFFNUMsVUFBQSxLQUFLLElBQUl1WCxZQUFZLElBQUlKLFNBQVMsRUFBRTtBQUNsQyxZQUFBLElBQUlHLEdBQUcsQ0FBQ0gsU0FBUyxFQUFFSSxZQUFZLENBQUMsRUFBRTtBQUNoQyxjQUFBLElBQUlDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztBQUNyQjtBQUNBOztjQUVBLElBQUk7QUFDRjtBQUNBO2dCQUNBLElBQUksT0FBT0wsU0FBUyxDQUFDSSxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDakQ7QUFDQSxrQkFBQSxJQUFJRSxHQUFHLEdBQUdwWSxLQUFLLENBQUMsQ0FBQytKLGFBQWEsSUFBSSxhQUFhLElBQUksSUFBSSxHQUFHaU8sUUFBUSxHQUFHLFNBQVMsR0FBR0UsWUFBWSxHQUFHLGdCQUFnQixHQUFHLDhFQUE4RSxHQUFHLE9BQU9KLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLEdBQUcsSUFBSSxHQUFHLCtGQUErRixDQUFDO2tCQUM1VUUsR0FBRyxDQUFDbk8sSUFBSSxHQUFHLHFCQUFxQjtBQUNoQyxrQkFBQSxNQUFNbU8sR0FBRztBQUNYO0FBRUFELGdCQUFBQSxPQUFPLEdBQUdMLFNBQVMsQ0FBQ0ksWUFBWSxDQUFDLENBQUNILE1BQU0sRUFBRUcsWUFBWSxFQUFFbk8sYUFBYSxFQUFFaU8sUUFBUSxFQUFFLElBQUksRUFBRSw4Q0FBOEMsQ0FBQztlQUN2SSxDQUFDLE9BQU9LLEVBQUUsRUFBRTtnQkFDWEYsT0FBTyxHQUFHRSxFQUFFO0FBQ2Q7Y0FFQSxJQUFJRixPQUFPLElBQUksRUFBRUEsT0FBTyxZQUFZblksS0FBSyxDQUFDLEVBQUU7Z0JBQzFDNFgsNkJBQTZCLENBQUMxSixPQUFPLENBQUM7Z0JBRXRDbEYsS0FBSyxDQUFDLDhCQUE4QixHQUFHLHFDQUFxQyxHQUFHLCtEQUErRCxHQUFHLGlFQUFpRSxHQUFHLGdFQUFnRSxHQUFHLGlDQUFpQyxFQUFFZSxhQUFhLElBQUksYUFBYSxFQUFFaU8sUUFBUSxFQUFFRSxZQUFZLEVBQUUsT0FBT0MsT0FBTyxDQUFDO2dCQUVsWVAsNkJBQTZCLENBQUMsSUFBSSxDQUFDO0FBQ3JDO2NBRUEsSUFBSU8sT0FBTyxZQUFZblksS0FBSyxJQUFJLEVBQUVtWSxPQUFPLENBQUNHLE9BQU8sSUFBSVosa0JBQWtCLENBQUMsRUFBRTtBQUN4RTtBQUNBO0FBQ0FBLGdCQUFBQSxrQkFBa0IsQ0FBQ1MsT0FBTyxDQUFDRyxPQUFPLENBQUMsR0FBRyxJQUFJO2dCQUMxQ1YsNkJBQTZCLENBQUMxSixPQUFPLENBQUM7Z0JBRXRDbEYsS0FBSyxDQUFDLG9CQUFvQixFQUFFZ1AsUUFBUSxFQUFFRyxPQUFPLENBQUNHLE9BQU8sQ0FBQztnQkFFdERWLDZCQUE2QixDQUFDLElBQUksQ0FBQztBQUNyQztBQUNGO0FBQ0Y7QUFDRjtBQUNGO01BRUEsU0FBU1csK0JBQStCQSxDQUFDckssT0FBTyxFQUFFO1FBQ2hEO1VBQ0UsSUFBSUEsT0FBTyxFQUFFO0FBQ1gsWUFBQSxJQUFJRCxLQUFLLEdBQUdDLE9BQU8sQ0FBQ2hNLE1BQU07WUFDMUIsSUFBSThGLEtBQUssR0FBR3lQLG9DQUFvQyxDQUFDdkosT0FBTyxDQUFDak0sSUFBSSxFQUFFaU0sT0FBTyxDQUFDYyxPQUFPLEVBQUVmLEtBQUssR0FBR0EsS0FBSyxDQUFDaE0sSUFBSSxHQUFHLElBQUksQ0FBQztZQUMxRzhGLGtCQUFrQixDQUFDQyxLQUFLLENBQUM7QUFDM0IsV0FBQyxNQUFNO1lBQ0xELGtCQUFrQixDQUFDLElBQUksQ0FBQztBQUMxQjtBQUNGO0FBQ0Y7QUFFQSxNQUFBLElBQUl5USw2QkFBNkI7TUFFakM7UUFDRUEsNkJBQTZCLEdBQUcsS0FBSztBQUN2QztNQUVBLFNBQVNDLDJCQUEyQkEsR0FBRztRQUNyQyxJQUFJM1UsaUJBQWlCLENBQUNqRCxPQUFPLEVBQUU7VUFDN0IsSUFBSW9KLElBQUksR0FBR3FDLHdCQUF3QixDQUFDeEksaUJBQWlCLENBQUNqRCxPQUFPLENBQUNvQixJQUFJLENBQUM7VUFFbkUsSUFBSWdJLElBQUksRUFBRTtBQUNSLFlBQUEsT0FBTyxrQ0FBa0MsR0FBR0EsSUFBSSxHQUFHLElBQUk7QUFDekQ7QUFDRjtBQUVBLFFBQUEsT0FBTyxFQUFFO0FBQ1g7TUFFQSxTQUFTeU8sMEJBQTBCQSxDQUFDMUssTUFBTSxFQUFFO1FBQzFDLElBQUlBLE1BQU0sS0FBSy9DLFNBQVMsRUFBRTtVQUN4QixJQUFJME4sUUFBUSxHQUFHM0ssTUFBTSxDQUFDMkssUUFBUSxDQUFDclcsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7QUFDdkQsVUFBQSxJQUFJc1csVUFBVSxHQUFHNUssTUFBTSxDQUFDNEssVUFBVTtVQUNsQyxPQUFPLHlCQUF5QixHQUFHRCxRQUFRLEdBQUcsR0FBRyxHQUFHQyxVQUFVLEdBQUcsR0FBRztBQUN0RTtBQUVBLFFBQUEsT0FBTyxFQUFFO0FBQ1g7TUFFQSxTQUFTQyxrQ0FBa0NBLENBQUNDLFlBQVksRUFBRTtRQUN4RCxJQUFJQSxZQUFZLEtBQUssSUFBSSxJQUFJQSxZQUFZLEtBQUs3TixTQUFTLEVBQUU7QUFDdkQsVUFBQSxPQUFPeU4sMEJBQTBCLENBQUNJLFlBQVksQ0FBQzVYLFFBQVEsQ0FBQztBQUMxRDtBQUVBLFFBQUEsT0FBTyxFQUFFO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztNQUdBLElBQUk2WCxxQkFBcUIsR0FBRyxFQUFFO01BRTlCLFNBQVNDLDRCQUE0QkEsQ0FBQ0MsVUFBVSxFQUFFO0FBQ2hELFFBQUEsSUFBSW5PLElBQUksR0FBRzJOLDJCQUEyQixFQUFFO1FBRXhDLElBQUksQ0FBQzNOLElBQUksRUFBRTtBQUNULFVBQUEsSUFBSW9PLFVBQVUsR0FBRyxPQUFPRCxVQUFVLEtBQUssUUFBUSxHQUFHQSxVQUFVLEdBQUdBLFVBQVUsQ0FBQ2pQLFdBQVcsSUFBSWlQLFVBQVUsQ0FBQ2hQLElBQUk7VUFFeEcsSUFBSWlQLFVBQVUsRUFBRTtBQUNkcE8sWUFBQUEsSUFBSSxHQUFHLDZDQUE2QyxHQUFHb08sVUFBVSxHQUFHLElBQUk7QUFDMUU7QUFDRjtBQUVBLFFBQUEsT0FBT3BPLElBQUk7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBQSxTQUFTcU8sbUJBQW1CQSxDQUFDakwsT0FBTyxFQUFFK0ssVUFBVSxFQUFFO0FBQ2hELFFBQUEsSUFBSSxDQUFDL0ssT0FBTyxDQUFDQyxNQUFNLElBQUlELE9BQU8sQ0FBQ0MsTUFBTSxDQUFDaUwsU0FBUyxJQUFJbEwsT0FBTyxDQUFDbk4sR0FBRyxJQUFJLElBQUksRUFBRTtVQUN0RTtBQUNGO0FBRUFtTixRQUFBQSxPQUFPLENBQUNDLE1BQU0sQ0FBQ2lMLFNBQVMsR0FBRyxJQUFJO0FBQy9CLFFBQUEsSUFBSUMseUJBQXlCLEdBQUdMLDRCQUE0QixDQUFDQyxVQUFVLENBQUM7QUFFeEUsUUFBQSxJQUFJRixxQkFBcUIsQ0FBQ00seUJBQXlCLENBQUMsRUFBRTtVQUNwRDtBQUNGO0FBRUFOLFFBQUFBLHFCQUFxQixDQUFDTSx5QkFBeUIsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN4RDtBQUNBOztRQUVBLElBQUlDLFVBQVUsR0FBRyxFQUFFO0FBRW5CLFFBQUEsSUFBSXBMLE9BQU8sSUFBSUEsT0FBTyxDQUFDaE0sTUFBTSxJQUFJZ00sT0FBTyxDQUFDaE0sTUFBTSxLQUFLNEIsaUJBQWlCLENBQUNqRCxPQUFPLEVBQUU7QUFDN0U7QUFDQXlZLFVBQUFBLFVBQVUsR0FBRyw4QkFBOEIsR0FBR2hOLHdCQUF3QixDQUFDNEIsT0FBTyxDQUFDaE0sTUFBTSxDQUFDRCxJQUFJLENBQUMsR0FBRyxHQUFHO0FBQ25HO1FBRUE7VUFDRXNXLCtCQUErQixDQUFDckssT0FBTyxDQUFDO1VBRXhDbEYsS0FBSyxDQUFDLHVEQUF1RCxHQUFHLHNFQUFzRSxFQUFFcVEseUJBQXlCLEVBQUVDLFVBQVUsQ0FBQztVQUU5S2YsK0JBQStCLENBQUMsSUFBSSxDQUFDO0FBQ3ZDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsTUFBQSxTQUFTZ0IsaUJBQWlCQSxDQUFDQyxJQUFJLEVBQUVQLFVBQVUsRUFBRTtBQUMzQyxRQUFBLElBQUksT0FBT08sSUFBSSxLQUFLLFFBQVEsRUFBRTtVQUM1QjtBQUNGO0FBRUEsUUFBQSxJQUFJL1ksT0FBTyxDQUFDK1ksSUFBSSxDQUFDLEVBQUU7QUFDakIsVUFBQSxLQUFLLElBQUk5SyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4SyxJQUFJLENBQUM3WCxNQUFNLEVBQUUrTSxDQUFDLEVBQUUsRUFBRTtBQUNwQyxZQUFBLElBQUkrQixLQUFLLEdBQUcrSSxJQUFJLENBQUM5SyxDQUFDLENBQUM7QUFFbkIsWUFBQSxJQUFJUSxjQUFjLENBQUN1QixLQUFLLENBQUMsRUFBRTtBQUN6QjBJLGNBQUFBLG1CQUFtQixDQUFDMUksS0FBSyxFQUFFd0ksVUFBVSxDQUFDO0FBQ3hDO0FBQ0Y7QUFDRixTQUFDLE1BQU0sSUFBSS9KLGNBQWMsQ0FBQ3NLLElBQUksQ0FBQyxFQUFFO0FBQy9CO1VBQ0EsSUFBSUEsSUFBSSxDQUFDckwsTUFBTSxFQUFFO0FBQ2ZxTCxZQUFBQSxJQUFJLENBQUNyTCxNQUFNLENBQUNpTCxTQUFTLEdBQUcsSUFBSTtBQUM5QjtTQUNELE1BQU0sSUFBSUksSUFBSSxFQUFFO0FBQ2YsVUFBQSxJQUFJM0ksVUFBVSxHQUFHdEosYUFBYSxDQUFDaVMsSUFBSSxDQUFDO0FBRXBDLFVBQUEsSUFBSSxPQUFPM0ksVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUNwQztBQUNBO0FBQ0EsWUFBQSxJQUFJQSxVQUFVLEtBQUsySSxJQUFJLENBQUN6SSxPQUFPLEVBQUU7Y0FDL0IsSUFBSXJTLFFBQVEsR0FBR21TLFVBQVUsQ0FBQ3JQLElBQUksQ0FBQ2dZLElBQUksQ0FBQztBQUNwQyxjQUFBLElBQUl4SSxJQUFJO2NBRVIsT0FBTyxDQUFDLENBQUNBLElBQUksR0FBR3RTLFFBQVEsQ0FBQ2tFLElBQUksRUFBRSxFQUFFQyxJQUFJLEVBQUU7QUFDckMsZ0JBQUEsSUFBSXFNLGNBQWMsQ0FBQzhCLElBQUksQ0FBQ2xPLEtBQUssQ0FBQyxFQUFFO0FBQzlCcVcsa0JBQUFBLG1CQUFtQixDQUFDbkksSUFBSSxDQUFDbE8sS0FBSyxFQUFFbVcsVUFBVSxDQUFDO0FBQzdDO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFHQSxTQUFTUSxpQkFBaUJBLENBQUN2TCxPQUFPLEVBQUU7UUFDbEM7QUFDRSxVQUFBLElBQUlqTSxJQUFJLEdBQUdpTSxPQUFPLENBQUNqTSxJQUFJO0FBRXZCLFVBQUEsSUFBSUEsSUFBSSxLQUFLLElBQUksSUFBSUEsSUFBSSxLQUFLZ0osU0FBUyxJQUFJLE9BQU9oSixJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ25FO0FBQ0Y7QUFFQSxVQUFBLElBQUlpUixTQUFTO0FBRWIsVUFBQSxJQUFJLE9BQU9qUixJQUFJLEtBQUssVUFBVSxFQUFFO1lBQzlCaVIsU0FBUyxHQUFHalIsSUFBSSxDQUFDaVIsU0FBUztXQUMzQixNQUFNLElBQUksT0FBT2pSLElBQUksS0FBSyxRQUFRLEtBQUtBLElBQUksQ0FBQ0QsUUFBUSxLQUFLK0Usc0JBQXNCO0FBQUk7QUFDcEY7QUFDQTlFLFVBQUFBLElBQUksQ0FBQ0QsUUFBUSxLQUFLa0YsZUFBZSxDQUFDLEVBQUU7WUFDbENnTSxTQUFTLEdBQUdqUixJQUFJLENBQUNpUixTQUFTO0FBQzVCLFdBQUMsTUFBTTtZQUNMO0FBQ0Y7VUFFQSxJQUFJQSxTQUFTLEVBQUU7QUFDYjtBQUNBLFlBQUEsSUFBSWpKLElBQUksR0FBR3FDLHdCQUF3QixDQUFDckssSUFBSSxDQUFDO0FBQ3pDNFYsWUFBQUEsY0FBYyxDQUFDM0UsU0FBUyxFQUFFaEYsT0FBTyxDQUFDek8sS0FBSyxFQUFFLE1BQU0sRUFBRXdLLElBQUksRUFBRWlFLE9BQU8sQ0FBQztXQUNoRSxNQUFNLElBQUlqTSxJQUFJLENBQUN5WCxTQUFTLEtBQUt6TyxTQUFTLElBQUksQ0FBQ3VOLDZCQUE2QixFQUFFO1lBQ3pFQSw2QkFBNkIsR0FBRyxJQUFJLENBQUM7O0FBRXJDLFlBQUEsSUFBSW1CLEtBQUssR0FBR3JOLHdCQUF3QixDQUFDckssSUFBSSxDQUFDO0FBRTFDK0csWUFBQUEsS0FBSyxDQUFDLHFHQUFxRyxFQUFFMlEsS0FBSyxJQUFJLFNBQVMsQ0FBQztBQUNsSTtBQUVBLFVBQUEsSUFBSSxPQUFPMVgsSUFBSSxDQUFDMlgsZUFBZSxLQUFLLFVBQVUsSUFBSSxDQUFDM1gsSUFBSSxDQUFDMlgsZUFBZSxDQUFDQyxvQkFBb0IsRUFBRTtBQUM1RjdRLFlBQUFBLEtBQUssQ0FBQyw0REFBNEQsR0FBRyxrRUFBa0UsQ0FBQztBQUMxSTtBQUNGO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7TUFHQSxTQUFTOFEscUJBQXFCQSxDQUFDQyxRQUFRLEVBQUU7UUFDdkM7VUFDRSxJQUFJL1csSUFBSSxHQUFHN0QsTUFBTSxDQUFDNkQsSUFBSSxDQUFDK1csUUFBUSxDQUFDdGEsS0FBSyxDQUFDO0FBRXRDLFVBQUEsS0FBSyxJQUFJaVAsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHMUwsSUFBSSxDQUFDckIsTUFBTSxFQUFFK00sQ0FBQyxFQUFFLEVBQUU7QUFDcEMsWUFBQSxJQUFJM04sR0FBRyxHQUFHaUMsSUFBSSxDQUFDMEwsQ0FBQyxDQUFDO1lBRWpCLElBQUkzTixHQUFHLEtBQUssVUFBVSxJQUFJQSxHQUFHLEtBQUssS0FBSyxFQUFFO2NBQ3ZDd1gsK0JBQStCLENBQUN3QixRQUFRLENBQUM7QUFFekMvUSxjQUFBQSxLQUFLLENBQUMsa0RBQWtELEdBQUcsMERBQTBELEVBQUVqSSxHQUFHLENBQUM7Y0FFM0h3WCwrQkFBK0IsQ0FBQyxJQUFJLENBQUM7Y0FDckM7QUFDRjtBQUNGO0FBRUEsVUFBQSxJQUFJd0IsUUFBUSxDQUFDL1ksR0FBRyxLQUFLLElBQUksRUFBRTtZQUN6QnVYLCtCQUErQixDQUFDd0IsUUFBUSxDQUFDO1lBRXpDL1EsS0FBSyxDQUFDLHVEQUF1RCxDQUFDO1lBRTlEdVAsK0JBQStCLENBQUMsSUFBSSxDQUFDO0FBQ3ZDO0FBQ0Y7QUFDRjtNQUNBLFNBQVN5QiwyQkFBMkJBLENBQUMvWCxJQUFJLEVBQUV4QyxLQUFLLEVBQUVtQyxRQUFRLEVBQUU7QUFDMUQsUUFBQSxJQUFJcVksU0FBUyxHQUFHeEcsa0JBQWtCLENBQUN4UixJQUFJLENBQUMsQ0FBQztBQUN6Qzs7UUFFQSxJQUFJLENBQUNnWSxTQUFTLEVBQUU7VUFDZCxJQUFJblAsSUFBSSxHQUFHLEVBQUU7VUFFYixJQUFJN0ksSUFBSSxLQUFLZ0osU0FBUyxJQUFJLE9BQU9oSixJQUFJLEtBQUssUUFBUSxJQUFJQSxJQUFJLEtBQUssSUFBSSxJQUFJOUMsTUFBTSxDQUFDNkQsSUFBSSxDQUFDZixJQUFJLENBQUMsQ0FBQ04sTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNyR21KLElBQUksSUFBSSw0REFBNEQsR0FBRyx3RUFBd0U7QUFDako7QUFFQSxVQUFBLElBQUlvUCxVQUFVLEdBQUdyQixrQ0FBa0MsQ0FBQ3BaLEtBQUssQ0FBQztVQUUxRCxJQUFJeWEsVUFBVSxFQUFFO1lBQ2RwUCxJQUFJLElBQUlvUCxVQUFVO0FBQ3BCLFdBQUMsTUFBTTtZQUNMcFAsSUFBSSxJQUFJMk4sMkJBQTJCLEVBQUU7QUFDdkM7QUFFQSxVQUFBLElBQUkwQixVQUFVO1VBRWQsSUFBSWxZLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDakJrWSxVQUFVLEdBQUcsTUFBTTtBQUNyQixXQUFDLE1BQU0sSUFBSTFaLE9BQU8sQ0FBQ3dCLElBQUksQ0FBQyxFQUFFO1lBQ3hCa1ksVUFBVSxHQUFHLE9BQU87V0FDckIsTUFBTSxJQUFJbFksSUFBSSxLQUFLZ0osU0FBUyxJQUFJaEosSUFBSSxDQUFDRCxRQUFRLEtBQUt3RSxrQkFBa0IsRUFBRTtBQUNyRTJULFlBQUFBLFVBQVUsR0FBRyxHQUFHLElBQUk3Tix3QkFBd0IsQ0FBQ3JLLElBQUksQ0FBQ0EsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEdBQUcsS0FBSztZQUM3RTZJLElBQUksR0FBRyxvRUFBb0U7QUFDN0UsV0FBQyxNQUFNO1lBQ0xxUCxVQUFVLEdBQUcsT0FBT2xZLElBQUk7QUFDMUI7VUFFQTtZQUNFK0csS0FBSyxDQUFDLGlFQUFpRSxHQUFHLDBEQUEwRCxHQUFHLDRCQUE0QixFQUFFbVIsVUFBVSxFQUFFclAsSUFBSSxDQUFDO0FBQ3hMO0FBQ0Y7UUFFQSxJQUFJb0QsT0FBTyxHQUFHSSxhQUFhLENBQUNuSyxLQUFLLENBQUMsSUFBSSxFQUFFekMsU0FBUyxDQUFDLENBQUM7QUFDbkQ7O1FBRUEsSUFBSXdNLE9BQU8sSUFBSSxJQUFJLEVBQUU7QUFDbkIsVUFBQSxPQUFPQSxPQUFPO1NBQ2Y7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7UUFHQSxJQUFJK0wsU0FBUyxFQUFFO0FBQ2IsVUFBQSxLQUFLLElBQUl2TCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdoTixTQUFTLENBQUNDLE1BQU0sRUFBRStNLENBQUMsRUFBRSxFQUFFO1lBQ3pDNkssaUJBQWlCLENBQUM3WCxTQUFTLENBQUNnTixDQUFDLENBQUMsRUFBRXpNLElBQUksQ0FBQztBQUN2QztBQUNGO1FBRUEsSUFBSUEsSUFBSSxLQUFLeUUsbUJBQW1CLEVBQUU7VUFDaENvVCxxQkFBcUIsQ0FBQzVMLE9BQU8sQ0FBQztBQUNoQyxTQUFDLE1BQU07VUFDTHVMLGlCQUFpQixDQUFDdkwsT0FBTyxDQUFDO0FBQzVCO0FBRUEsUUFBQSxPQUFPQSxPQUFPO0FBQ2hCO01BQ0EsSUFBSWtNLG1DQUFtQyxHQUFHLEtBQUs7TUFDL0MsU0FBU0MsMkJBQTJCQSxDQUFDcFksSUFBSSxFQUFFO1FBQ3pDLElBQUlxWSxnQkFBZ0IsR0FBR04sMkJBQTJCLENBQUNqVixJQUFJLENBQUMsSUFBSSxFQUFFOUMsSUFBSSxDQUFDO1FBQ25FcVksZ0JBQWdCLENBQUNyWSxJQUFJLEdBQUdBLElBQUk7UUFFNUI7VUFDRSxJQUFJLENBQUNtWSxtQ0FBbUMsRUFBRTtZQUN4Q0EsbUNBQW1DLEdBQUcsSUFBSTtBQUUxQzFSLFlBQUFBLElBQUksQ0FBQyw2REFBNkQsR0FBRyw2Q0FBNkMsR0FBRyxnREFBZ0QsQ0FBQztXQUN2Szs7QUFHRHZKLFVBQUFBLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQ3VQLGdCQUFnQixFQUFFLE1BQU0sRUFBRTtZQUM5Q2xNLFVBQVUsRUFBRSxLQUFLO1lBQ2pCcEQsR0FBRyxFQUFFLFlBQVk7QUFDZnRDLGNBQUFBLElBQUksQ0FBQyx3REFBd0QsR0FBRyxxQ0FBcUMsQ0FBQztBQUV0R3ZKLGNBQUFBLE1BQU0sQ0FBQzRMLGNBQWMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO0FBQ2xDakksZ0JBQUFBLEtBQUssRUFBRWI7QUFDVCxlQUFDLENBQUM7QUFDRixjQUFBLE9BQU9BLElBQUk7QUFDYjtBQUNGLFdBQUMsQ0FBQztBQUNKO0FBRUEsUUFBQSxPQUFPcVksZ0JBQWdCO0FBQ3pCO01BQ0EsU0FBU0MsMEJBQTBCQSxDQUFDck0sT0FBTyxFQUFFek8sS0FBSyxFQUFFbUMsUUFBUSxFQUFFO1FBQzVELElBQUlrTixVQUFVLEdBQUdHLFlBQVksQ0FBQzlLLEtBQUssQ0FBQyxJQUFJLEVBQUV6QyxTQUFTLENBQUM7QUFFcEQsUUFBQSxLQUFLLElBQUlnTixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdoTixTQUFTLENBQUNDLE1BQU0sRUFBRStNLENBQUMsRUFBRSxFQUFFO1VBQ3pDNkssaUJBQWlCLENBQUM3WCxTQUFTLENBQUNnTixDQUFDLENBQUMsRUFBRUksVUFBVSxDQUFDN00sSUFBSSxDQUFDO0FBQ2xEO1FBRUF3WCxpQkFBaUIsQ0FBQzNLLFVBQVUsQ0FBQztBQUM3QixRQUFBLE9BQU9BLFVBQVU7QUFDbkI7QUFFQSxNQUFBLFNBQVMwTCxlQUFlQSxDQUFDQyxLQUFLLEVBQUVDLE9BQU8sRUFBRTtBQUN2QyxRQUFBLElBQUlDLGNBQWMsR0FBRzlXLHVCQUF1QixDQUFDSCxVQUFVO0FBQ3ZERyxRQUFBQSx1QkFBdUIsQ0FBQ0gsVUFBVSxHQUFHLEVBQUU7QUFDdkMsUUFBQSxJQUFJa1gsaUJBQWlCLEdBQUcvVyx1QkFBdUIsQ0FBQ0gsVUFBVTtRQUUxRDtVQUNFRyx1QkFBdUIsQ0FBQ0gsVUFBVSxDQUFDbVgsY0FBYyxHQUFHLElBQUlDLEdBQUcsRUFBRTtBQUMvRDtRQUVBLElBQUk7QUFDRkwsVUFBQUEsS0FBSyxFQUFFO0FBQ1QsU0FBQyxTQUFTO1VBQ1I1Vyx1QkFBdUIsQ0FBQ0gsVUFBVSxHQUFHaVgsY0FBYztVQUVuRDtZQUNFLElBQUlBLGNBQWMsS0FBSyxJQUFJLElBQUlDLGlCQUFpQixDQUFDQyxjQUFjLEVBQUU7QUFDL0QsY0FBQSxJQUFJRSxrQkFBa0IsR0FBR0gsaUJBQWlCLENBQUNDLGNBQWMsQ0FBQ0csSUFBSTtjQUU5RCxJQUFJRCxrQkFBa0IsR0FBRyxFQUFFLEVBQUU7QUFDM0JyUyxnQkFBQUEsSUFBSSxDQUFDLDZEQUE2RCxHQUFHLG1GQUFtRixHQUFHLHlEQUF5RCxDQUFDO0FBQ3ZOO0FBRUFrUyxjQUFBQSxpQkFBaUIsQ0FBQ0MsY0FBYyxDQUFDSSxLQUFLLEVBQUU7QUFDMUM7QUFDRjtBQUNGO0FBQ0Y7TUFFQSxJQUFJQywwQkFBMEIsR0FBRyxLQUFLO01BQ3RDLElBQUlDLGVBQWUsR0FBRyxJQUFJO01BQzFCLFNBQVNDLFdBQVdBLENBQUNDLElBQUksRUFBRTtRQUN6QixJQUFJRixlQUFlLEtBQUssSUFBSSxFQUFFO1VBQzVCLElBQUk7QUFDRjtBQUNBO0FBQ0EsWUFBQSxJQUFJRyxhQUFhLEdBQUcsQ0FBQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEVBQUVDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzNELElBQUlDLFdBQVcsR0FBR0MsTUFBTSxJQUFJQSxNQUFNLENBQUNMLGFBQWEsQ0FBQyxDQUFDO0FBQ2xEOztZQUVBSCxlQUFlLEdBQUdPLFdBQVcsQ0FBQ2xhLElBQUksQ0FBQ21hLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQ0MsWUFBWTtXQUNsRSxDQUFDLE9BQU9DLElBQUksRUFBRTtBQUNiO0FBQ0E7QUFDQTtBQUNBVixZQUFBQSxlQUFlLEdBQUcsVUFBVS9RLFFBQVEsRUFBRTtjQUNwQztnQkFDRSxJQUFJOFEsMEJBQTBCLEtBQUssS0FBSyxFQUFFO2tCQUN4Q0EsMEJBQTBCLEdBQUcsSUFBSTtBQUVqQyxrQkFBQSxJQUFJLE9BQU9ZLGNBQWMsS0FBSyxXQUFXLEVBQUU7b0JBQ3pDOVMsS0FBSyxDQUFDLDhEQUE4RCxHQUFHLCtEQUErRCxHQUFHLG1FQUFtRSxHQUFHLGdDQUFnQyxDQUFDO0FBQ2xQO0FBQ0Y7QUFDRjtBQUVBLGNBQUEsSUFBSStTLE9BQU8sR0FBRyxJQUFJRCxjQUFjLEVBQUU7QUFDbENDLGNBQUFBLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxTQUFTLEdBQUc3UixRQUFRO0FBQ2xDMlIsY0FBQUEsT0FBTyxDQUFDRyxLQUFLLENBQUNDLFdBQVcsQ0FBQ2xSLFNBQVMsQ0FBQzthQUNyQztBQUNIO0FBQ0Y7UUFFQSxPQUFPa1EsZUFBZSxDQUFDRSxJQUFJLENBQUM7QUFDOUI7TUFFQSxJQUFJZSxhQUFhLEdBQUcsQ0FBQztNQUNyQixJQUFJQyxpQkFBaUIsR0FBRyxLQUFLO01BQzdCLFNBQVNDLEdBQUdBLENBQUNsUyxRQUFRLEVBQUU7UUFDckI7QUFDRTtBQUNBO1VBQ0EsSUFBSW1TLGlCQUFpQixHQUFHSCxhQUFhO0FBQ3JDQSxVQUFBQSxhQUFhLEVBQUU7QUFFZixVQUFBLElBQUkxVSxvQkFBb0IsQ0FBQzdHLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDekM7QUFDQTtZQUNBNkcsb0JBQW9CLENBQUM3RyxPQUFPLEdBQUcsRUFBRTtBQUNuQztBQUVBLFVBQUEsSUFBSTJiLG9CQUFvQixHQUFHOVUsb0JBQW9CLENBQUNDLGdCQUFnQjtBQUNoRSxVQUFBLElBQUkwSixNQUFNO1VBRVYsSUFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBO1lBQ0EzSixvQkFBb0IsQ0FBQ0MsZ0JBQWdCLEdBQUcsSUFBSTtBQUM1QzBKLFlBQUFBLE1BQU0sR0FBR2pILFFBQVEsRUFBRSxDQUFDO0FBQ3BCO0FBQ0E7O0FBRUEsWUFBQSxJQUFJLENBQUNvUyxvQkFBb0IsSUFBSTlVLG9CQUFvQixDQUFDRSx1QkFBdUIsRUFBRTtBQUN6RSxjQUFBLElBQUk2VSxLQUFLLEdBQUcvVSxvQkFBb0IsQ0FBQzdHLE9BQU87Y0FFeEMsSUFBSTRiLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCL1Usb0JBQW9CLENBQUNFLHVCQUF1QixHQUFHLEtBQUs7Z0JBQ3BEOFUsYUFBYSxDQUFDRCxLQUFLLENBQUM7QUFDdEI7QUFDRjtXQUNELENBQUMsT0FBT3pULEtBQUssRUFBRTtZQUNkMlQsV0FBVyxDQUFDSixpQkFBaUIsQ0FBQztBQUM5QixZQUFBLE1BQU12VCxLQUFLO0FBQ2IsV0FBQyxTQUFTO1lBQ1J0QixvQkFBb0IsQ0FBQ0MsZ0JBQWdCLEdBQUc2VSxvQkFBb0I7QUFDOUQ7QUFFQSxVQUFBLElBQUluTCxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBT0EsTUFBTSxDQUFDL04sSUFBSSxLQUFLLFVBQVUsRUFBRTtBQUN0RixZQUFBLElBQUlzWixjQUFjLEdBQUd2TCxNQUFNLENBQUM7QUFDNUI7O1lBRUEsSUFBSXdMLFVBQVUsR0FBRyxLQUFLO1lBQ3RCLElBQUlsSyxRQUFRLEdBQUc7QUFDYnJQLGNBQUFBLElBQUksRUFBRSxVQUFVd1osT0FBTyxFQUFFQyxNQUFNLEVBQUU7Z0JBQy9CRixVQUFVLEdBQUcsSUFBSTtBQUNqQkQsZ0JBQUFBLGNBQWMsQ0FBQ3RaLElBQUksQ0FBQyxVQUFVMFosV0FBVyxFQUFFO2tCQUN6Q0wsV0FBVyxDQUFDSixpQkFBaUIsQ0FBQztrQkFFOUIsSUFBSUgsYUFBYSxLQUFLLENBQUMsRUFBRTtBQUN2QjtBQUNBO0FBQ0FhLG9CQUFBQSw0QkFBNEIsQ0FBQ0QsV0FBVyxFQUFFRixPQUFPLEVBQUVDLE1BQU0sQ0FBQztBQUM1RCxtQkFBQyxNQUFNO29CQUNMRCxPQUFPLENBQUNFLFdBQVcsQ0FBQztBQUN0QjtpQkFDRCxFQUFFLFVBQVVoVSxLQUFLLEVBQUU7QUFDbEI7a0JBQ0EyVCxXQUFXLENBQUNKLGlCQUFpQixDQUFDO2tCQUM5QlEsTUFBTSxDQUFDL1QsS0FBSyxDQUFDO0FBQ2YsaUJBQUMsQ0FBQztBQUNKO2FBQ0Q7WUFFRDtjQUNFLElBQUksQ0FBQ3FULGlCQUFpQixJQUFJLE9BQU9hLE9BQU8sS0FBSyxXQUFXLEVBQUU7QUFDeEQ7QUFDQUEsZ0JBQUFBLE9BQU8sQ0FBQ0osT0FBTyxFQUFFLENBQUN4WixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQ0EsSUFBSSxDQUFDLFlBQVk7a0JBQ3RELElBQUksQ0FBQ3VaLFVBQVUsRUFBRTtvQkFDZlIsaUJBQWlCLEdBQUcsSUFBSTtvQkFFeEJyVCxLQUFLLENBQUMsaURBQWlELEdBQUcsbURBQW1ELEdBQUcsbURBQW1ELEdBQUcsVUFBVSxHQUFHLDBDQUEwQyxDQUFDO0FBQ2hPO0FBQ0YsaUJBQUMsQ0FBQztBQUNKO0FBQ0Y7QUFFQSxZQUFBLE9BQU8ySixRQUFRO0FBQ2pCLFdBQUMsTUFBTTtBQUNMLFlBQUEsSUFBSXFLLFdBQVcsR0FBRzNMLE1BQU0sQ0FBQztBQUN6Qjs7WUFFQXNMLFdBQVcsQ0FBQ0osaUJBQWlCLENBQUM7WUFFOUIsSUFBSUgsYUFBYSxLQUFLLENBQUMsRUFBRTtBQUN2QjtBQUNBLGNBQUEsSUFBSWUsTUFBTSxHQUFHelYsb0JBQW9CLENBQUM3RyxPQUFPO2NBRXpDLElBQUlzYyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUNuQlQsYUFBYSxDQUFDUyxNQUFNLENBQUM7Z0JBQ3JCelYsb0JBQW9CLENBQUM3RyxPQUFPLEdBQUcsSUFBSTtlQUNwQztBQUNEOztjQUdBLElBQUl1YyxTQUFTLEdBQUc7QUFDZDlaLGdCQUFBQSxJQUFJLEVBQUUsVUFBVXdaLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLGtCQUFBLElBQUlyVixvQkFBb0IsQ0FBQzdHLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDekM7b0JBQ0E2RyxvQkFBb0IsQ0FBQzdHLE9BQU8sR0FBRyxFQUFFO0FBQ2pDb2Msb0JBQUFBLDRCQUE0QixDQUFDRCxXQUFXLEVBQUVGLE9BQU8sRUFBRUMsTUFBTSxDQUFDO0FBQzVELG1CQUFDLE1BQU07b0JBQ0xELE9BQU8sQ0FBQ0UsV0FBVyxDQUFDO0FBQ3RCO0FBQ0Y7ZUFDRDtBQUNELGNBQUEsT0FBT0ksU0FBUztBQUNsQixhQUFDLE1BQU07QUFDTDtBQUNBO2NBQ0EsSUFBSUMsVUFBVSxHQUFHO0FBQ2YvWixnQkFBQUEsSUFBSSxFQUFFLFVBQVV3WixPQUFPLEVBQUVDLE1BQU0sRUFBRTtrQkFDL0JELE9BQU8sQ0FBQ0UsV0FBVyxDQUFDO0FBQ3RCO2VBQ0Q7QUFDRCxjQUFBLE9BQU9LLFVBQVU7QUFDbkI7QUFDRjtBQUNGO0FBQ0Y7TUFFQSxTQUFTVixXQUFXQSxDQUFDSixpQkFBaUIsRUFBRTtRQUN0QztBQUNFLFVBQUEsSUFBSUEsaUJBQWlCLEtBQUtILGFBQWEsR0FBRyxDQUFDLEVBQUU7QUFDM0NwVCxZQUFBQSxLQUFLLENBQUMsbUVBQW1FLEdBQUcsaUVBQWlFLENBQUM7QUFDaEo7VUFFQW9ULGFBQWEsR0FBR0csaUJBQWlCO0FBQ25DO0FBQ0Y7TUFFQSxTQUFTVSw0QkFBNEJBLENBQUNELFdBQVcsRUFBRUYsT0FBTyxFQUFFQyxNQUFNLEVBQUU7UUFDbEU7QUFDRSxVQUFBLElBQUlOLEtBQUssR0FBRy9VLG9CQUFvQixDQUFDN0csT0FBTztVQUV4QyxJQUFJNGIsS0FBSyxLQUFLLElBQUksRUFBRTtZQUNsQixJQUFJO2NBQ0ZDLGFBQWEsQ0FBQ0QsS0FBSyxDQUFDO2NBQ3BCckIsV0FBVyxDQUFDLFlBQVk7QUFDdEIsZ0JBQUEsSUFBSXFCLEtBQUssQ0FBQzlhLE1BQU0sS0FBSyxDQUFDLEVBQUU7QUFDdEI7a0JBQ0ErRixvQkFBb0IsQ0FBQzdHLE9BQU8sR0FBRyxJQUFJO2tCQUNuQ2ljLE9BQU8sQ0FBQ0UsV0FBVyxDQUFDO0FBQ3RCLGlCQUFDLE1BQU07QUFDTDtBQUNBQyxrQkFBQUEsNEJBQTRCLENBQUNELFdBQVcsRUFBRUYsT0FBTyxFQUFFQyxNQUFNLENBQUM7QUFDNUQ7QUFDRixlQUFDLENBQUM7YUFDSCxDQUFDLE9BQU8vVCxLQUFLLEVBQUU7Y0FDZCtULE1BQU0sQ0FBQy9ULEtBQUssQ0FBQztBQUNmO0FBQ0YsV0FBQyxNQUFNO1lBQ0w4VCxPQUFPLENBQUNFLFdBQVcsQ0FBQztBQUN0QjtBQUNGO0FBQ0Y7TUFFQSxJQUFJTSxVQUFVLEdBQUcsS0FBSztNQUV0QixTQUFTWixhQUFhQSxDQUFDRCxLQUFLLEVBQUU7UUFDNUI7VUFDRSxJQUFJLENBQUNhLFVBQVUsRUFBRTtBQUNmO1lBQ0FBLFVBQVUsR0FBRyxJQUFJO1lBQ2pCLElBQUk1TyxDQUFDLEdBQUcsQ0FBQztZQUVULElBQUk7Y0FDRixPQUFPQSxDQUFDLEdBQUcrTixLQUFLLENBQUM5YSxNQUFNLEVBQUUrTSxDQUFDLEVBQUUsRUFBRTtBQUM1QixnQkFBQSxJQUFJdEUsUUFBUSxHQUFHcVMsS0FBSyxDQUFDL04sQ0FBQyxDQUFDO2dCQUV2QixHQUFHO0FBQ0R0RSxrQkFBQUEsUUFBUSxHQUFHQSxRQUFRLENBQUMsSUFBSSxDQUFDO2lCQUMxQixRQUFRQSxRQUFRLEtBQUssSUFBSTtBQUM1QjtjQUVBcVMsS0FBSyxDQUFDOWEsTUFBTSxHQUFHLENBQUM7YUFDakIsQ0FBQyxPQUFPcUgsS0FBSyxFQUFFO0FBQ2Q7Y0FDQXlULEtBQUssR0FBR0EsS0FBSyxDQUFDaEIsS0FBSyxDQUFDL00sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixjQUFBLE1BQU0xRixLQUFLO0FBQ2IsYUFBQyxTQUFTO2NBQ1JzVSxVQUFVLEdBQUcsS0FBSztBQUNwQjtBQUNGO0FBQ0Y7QUFDRjtNQUVBLElBQUlDLGVBQWUsR0FBSXZELDJCQUEyQjtNQUNsRCxJQUFJd0QsY0FBYyxHQUFJakQsMEJBQTBCO01BQ2hELElBQUlrRCxhQUFhLEdBQUlwRCwyQkFBMkI7TUFDaEQsSUFBSXFELFFBQVEsR0FBRztRQUNielosR0FBRyxFQUFFa04sV0FBVztRQUNoQmpOLE9BQU8sRUFBRXFOLGVBQWU7UUFDeEJuTixLQUFLLEVBQUVrTixhQUFhO1FBQ3BCak4sT0FBTyxFQUFFQSxPQUFPO0FBQ2hCQyxRQUFBQSxJQUFJLEVBQUVvTjtPQUNQO01BRUQxTixtQkFBbUIwWixRQUFRO01BQzNCMVosb0JBQW9CeUcsU0FBUztNQUM3QnpHLG1CQUFtQjBDLG1CQUFtQjtNQUN0QzFDLG1CQUFtQjRDLG1CQUFtQjtNQUN0QzVDLHdCQUF3Qm9ILGFBQWE7TUFDckNwSCxxQkFBcUIyQyxzQkFBc0I7TUFDM0MzQyxtQkFBbUJnRCxtQkFBbUI7TUFDdENoRCw2REFBNkR5RSxvQkFBb0I7TUFDakZ6RSxjQUFjc1ksR0FBRztNQUNqQnRZLHVCQUF1QndaLGNBQWM7TUFDckN4Wix3QkFBd0IyTixhQUFhO01BQ3JDM04sd0JBQXdCdVosZUFBZTtNQUN2Q3ZaLHdCQUF3QnlaLGFBQWE7TUFDckN6WixvQkFBb0JzSCxTQUFTO01BQzdCdEgscUJBQXFCcVAsVUFBVTtNQUMvQnJQLHlCQUF5QmtMLGNBQWM7TUFDdkNsTCxlQUFlZ1AsSUFBSTtNQUNuQmhQLGVBQWUyUCxJQUFJO01BQ25CM1AsMEJBQTBCd1csZUFBZTtNQUN6Q3hXLHVCQUF1QnNZLEdBQUc7TUFDMUJ0WSxzQkFBc0JvQixXQUFXO01BQ2pDcEIscUJBQXFCcUIsVUFBVTtNQUMvQnJCLHdCQUF3QnNRLGFBQWE7TUFDckN0USwyQkFBMkJzQixnQkFBZ0I7TUFDM0N0QixvQkFBb0J1QixTQUFTO01BQzdCdkIsZ0JBQWdCd0IsS0FBSztNQUNyQnhCLDhCQUE4QnlCLG1CQUFtQjtNQUNqRHpCLDZCQUE2QjBCLGtCQUFrQjtNQUMvQzFCLDBCQUEwQjJCLGVBQWU7TUFDekMzQixrQkFBa0I0QixPQUFPO01BQ3pCNUIscUJBQXFCNkIsVUFBVTtNQUMvQjdCLGlCQUFpQjhCLE1BQU07TUFDdkI5QixtQkFBbUIrQixRQUFRO01BQzNCL0IsK0JBQStCZ0Msb0JBQW9CO01BQ25EaEMsd0JBQXdCaUMsYUFBYTtNQUNyQ2pDLGtCQUFrQnVDLFlBQVk7QUFDcEI7TUFDVixJQUNFLE9BQU9GLDhCQUE4QixLQUFLLFdBQVcsSUFDckQsT0FBT0EsOEJBQThCLENBQUNzWCwwQkFBMEIsS0FDOUQsVUFBVSxFQUNaO0FBQ0F0WCxRQUFBQSw4QkFBOEIsQ0FBQ3NYLDBCQUEwQixDQUFDLElBQUkzZCxLQUFLLEVBQUUsQ0FBQztBQUN4RTtBQUVFLEtBQUMsR0FBRztBQUNOLEdBQUE7Ozs7Ozs7Ozs7O0FDanJGQSxDQUFBLElBQUlrRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxLQUFLLFlBQVksRUFBRTtHQUN6Q3VWLEtBQUFBLENBQUFBLE9BQWMsR0FBR2lDLDJCQUF3QyxFQUFBO0FBQzNELEVBQUMsTUFBTTtHQUNMakMsS0FBQUEsQ0FBQUEsT0FBYyxHQUFHaUMsd0JBQXFDLEVBQUE7QUFDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkEsU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ3RCLEVBQUUsSUFBSSxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUMzRSxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUM3QixNQUFNLE9BQU8sT0FBTyxHQUFHO0FBQ3ZCLEtBQUs7QUFDTCxHQUFHLE1BQU07QUFDVCxJQUFJLE9BQU8sR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUM3QixNQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxHQUFHLENBQUMsV0FBVyxLQUFLLE1BQU0sSUFBSSxHQUFHLEtBQUssTUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFRLEdBQUcsT0FBTyxHQUFHO0FBQ2xJLEtBQUs7QUFDTDs7QUFFQSxFQUFFLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQztBQUNyQjs7QUFFQSxJQUFJLFFBQVEsR0FBRyxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDdEMsRUFBRSxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVE7QUFDaEMsQ0FBQzs7QUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDbEMsRUFBRSxPQUFPLEdBQUcsWUFBWSxJQUFJO0FBQzVCLENBQUM7O0FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxXQUFXLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEdBQWdCLEVBQUUsQ0FBQzs7QUFFdEgsU0FBUyxRQUFRLEdBQUc7QUFDcEIsRUFBRSxJQUFJLEVBQUUsV0FBVyxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQzlCLElBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFO0FBQ3ZCOztBQUVBLEVBQUUsSUFBSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtBQUN2RCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ3JEO0FBQ0E7O0FBRUEsU0FBUyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUMvQixFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO0FBQzNDLEVBQUUsSUFBSSxJQUFJLEdBQUcsS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssY0FBYztBQUMzRCxFQUFFLElBQUksR0FBRyxHQUFHLGdCQUFnQixJQUFJLElBQUksR0FBRyxJQUFJLGNBQWMsRUFBRSxHQUFHLElBQUksYUFBYSxDQUFDLG1CQUFtQixDQUFDO0FBQ3BHLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0FBQzlCLEVBQUUsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJO0FBQzVCLEVBQUUsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7O0FBRXZDLEVBQUUsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDdEIsSUFBSSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLDBCQUEwQixDQUFDO0FBQ3BFLElBQUksR0FBRyxDQUFDLFlBQVksR0FBRyxNQUFNO0FBQzdCLEdBQUcsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3hDLElBQUksR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ25EOztBQUVBLEVBQUUsSUFBSTtBQUNOLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDbEIsR0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFO0FBQ2xCLElBQUksT0FBTyxLQUFLO0FBQ2hCOztBQUVBLEVBQUUsT0FBTyxJQUFJO0FBQ2I7O0FDeERBLElBQUlDLEtBQUcsR0FBRyx3MVFBQXcxUTs7QUNBbDJRLElBQUlBLEtBQUcsR0FBRyx3cENBQXdwQzs7QUNBbHFDLElBQUlBLEtBQUcsR0FBRyx3NkRBQXc2RDs7QUNBbDdELElBQUlBLEtBQUcsR0FBRyxvMURBQW8xRDs7QUNBOTFELElBQUlBLEtBQUcsR0FBRyxnbUZBQWdtRjs7QUNBMW1GLElBQUlBLEtBQUcsR0FBRyw0M0RBQTQzRDs7QUNBdDRELElBQUlBLEtBQUcsR0FBRyxnb0ZBQWdvRjs7QUNBMW9GLElBQUlBLEtBQUcsR0FBRyx3MERBQXcwRDs7QUNBbDFELElBQUlBLEtBQUcsR0FBRyxnK0VBQWcrRTs7QUNBMStFLElBQUlBLEtBQUcsR0FBRyw0dERBQTR0RDs7QUNBdHVELElBQUlBLEtBQUcsR0FBRyxvdURBQW91RDs7QUNBOXVELElBQUksR0FBRyxHQUFHLGdpQ0FBZ2lDOztBQ2dCMWlDLE1BQU07QUFBRTVULEVBQUFBLElBQUksRUFBRTZULFFBQVE7QUFBRUMsRUFBQUEsT0FBTyxFQUFFQztBQUFZLENBQUMsR0FBR0MsV0FBVztBQUU1RCxJQUFJLE9BQU9DLE1BQU0sS0FBSyxXQUFXLEVBQUU7QUFDakNDLEVBQUFBLFNBQVMsQ0FBQ0MsVUFBVSxDQUNsQix1Q0FBdUMsR0FBR04sUUFBUSxHQUFHLFFBQVEsRUFDN0RPLElBQUksQ0FBQ0MsU0FBUyxDQUFDO0FBQUVQLElBQUFBLE9BQU8sRUFBRUMsV0FBVztBQUFFTyxJQUFBQSxHQUFHLEVBQUVDLFFBQVEsQ0FBQ3hHLFFBQVEsQ0FBQ3lHO0FBQUssR0FBQyxDQUN0RSxDQUFDO0FBQ0g7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLEVBQUFBLFNBQVMsRUFBRSxZQUFZO0FBQ3ZCQyxFQUFBQSxPQUFPLEVBQUUsR0FBRztBQUNaQyxFQUFBQSxNQUFNLEVBQUUsR0FBRztBQUNYQyxFQUFBQSxhQUFhLEVBQUUsT0FBTztBQUN0QkMsRUFBQUEsZUFBZSxFQUFFLE9BQU87QUFDeEJDLEVBQUFBLE1BQU0sRUFBRSxNQUFNO0FBQ2RDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0FBQ2hCQyxFQUFBQSxVQUFVLEVBQUUsbUJBQW1CO0FBQy9CQyxFQUFBQSxRQUFRLEVBQUUsTUFBTTtBQUNoQkMsRUFBQUEsVUFBVSxFQUFFLFFBQVE7QUFDcEJDLEVBQUFBLFNBQVMsRUFBRSxRQUFRO0FBQ25CQyxFQUFBQSxTQUFTLEVBQUUsTUFBTTtBQUNqQkMsRUFBQUEsVUFBVSxFQUFFLE1BQU07QUFDbEJDLEVBQUFBLGFBQWEsRUFBRSxNQUFNO0FBQ3JCQyxFQUFBQSxjQUFjLEVBQUUsTUFBTTtBQUN0QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ2QsQ0FBQztBQUVELE1BQU1DLFlBQVksR0FBRztBQUFFLEVBQUEsR0FBR2pCLFlBQVk7QUFDZkssRUFBQUEsZUFBZSxFQUFFO0FBQ3hDLENBQUM7QUFFRCxNQUFNYSxTQUFTLEdBQUc7QUFBRSxFQUFBLEdBQUdsQixZQUFZO0FBQ2ZHLEVBQUFBLE1BQU0sRUFBRSxlQUFlO0FBQ3ZCZ0IsRUFBQUEsS0FBSyxFQUFFLE9BQU87QUFDZGIsRUFBQUEsTUFBTSxFQUFFLHFCQUFxQjtBQUM3QmMsRUFBQUEsWUFBWSxFQUFFLEtBQUs7QUFDbkJDLEVBQUFBLFNBQVMsRUFBRSxtQkFBbUI7QUFDOUJDLEVBQUFBLFNBQVMsRUFBRSx1QkFBdUI7QUFDbENwQixFQUFBQSxPQUFPLEVBQUU7QUFDN0IsQ0FBQztBQUVELE1BQU1xQixhQUFhLEdBQUc7QUFBRSxFQUFBLEdBQUd2QixZQUFZO0FBQ2ZPLEVBQUFBLEtBQUssRUFBRSxTQUFTO0FBQ2hCRSxFQUFBQSxRQUFRLEVBQUUsTUFBTTtBQUNoQkMsRUFBQUEsVUFBVSxFQUFFLE1BQU07QUFDbEJNLEVBQUFBLFVBQVUsRUFBRSxLQUFLO0FBQ2pCSixFQUFBQSxTQUFTLEVBQUUsUUFBUTtBQUNuQlQsRUFBQUEsTUFBTSxFQUFFO0FBQ2hDLENBQUM7QUFFRCxNQUFNcUIsV0FBVyxHQUFHO0FBQUUsRUFBQSxHQUFHeEIsWUFBWTtBQUNmeUIsRUFBQUEsUUFBUSxFQUFFLFVBQVU7QUFDcEJDLEVBQUFBLEtBQUssRUFBRSxRQUFRO0FBQ2ZyQixFQUFBQSxlQUFlLEVBQUUsYUFBYTtBQUM5QmMsRUFBQUEsS0FBSyxFQUFFO0FBQzdCLENBQUM7QUFFRCxNQUFNUSxXQUFXLEdBQUc7QUFBRSxFQUFBLEdBQUczQixZQUFZO0FBQ2ZFLEVBQUFBLE9BQU8sRUFBRSxRQUFRO0FBQ2pCbUIsRUFBQUEsU0FBUyxFQUFFLHFCQUFxQjtBQUNoQ08sRUFBQUEsWUFBWSxFQUFFLHFCQUFxQjtBQUNuQ3pCLEVBQUFBLE1BQU0sRUFBRSxRQUFRO0FBQ2hCUyxFQUFBQSxTQUFTLEVBQUUsUUFBUTtBQUNuQkgsRUFBQUEsUUFBUSxFQUFFO0FBQ2hDLENBQUM7QUFFRCxNQUFNb0IsVUFBVSxHQUFHO0VBQUUsR0FBRzdCO0FBQWEsQ0FBQztBQUV0QyxNQUFNOEIsWUFBWSxHQUFHO0FBQ25CLEVBQUEsR0FBRzlCLFlBQVk7QUFDZlMsRUFBQUEsUUFBUSxFQUFFLE1BQU07QUFDaEJDLEVBQUFBLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFRCxNQUFNcUIsU0FBUyxHQUFHO0FBQUUsRUFBQSxHQUFHL0IsWUFBWTtBQUNmVSxFQUFBQSxVQUFVLEVBQUUsTUFBTTtBQUNsQkgsRUFBQUEsS0FBSyxFQUFFO0FBQzNCLENBQUM7QUFFRCxNQUFNeUIsY0FBYyxHQUFHO0FBQUUsRUFBQSxHQUFHaEMsWUFBWTtBQUNmWSxFQUFBQSxTQUFTLEVBQUUsUUFBUTtBQUNuQkksRUFBQUEsVUFBVSxFQUFFLEtBQUs7QUFDakJiLEVBQUFBLE1BQU0sRUFBRTtBQUNqQyxDQUFDO0FBRUQsTUFBTThCLFNBQVMsR0FBRztBQUFFLEVBQUEsR0FBR2pDLFlBQVk7QUFDZk8sRUFBQUEsS0FBSyxFQUFFO0FBQVUsQ0FBQztBQUVoQzJCLE1BQUFBLEdBQUcsR0FBSW5oQixLQUFLLElBQUs7RUFDckIsTUFBTW9oQixjQUFjLEdBQUlDLFVBQVUsSUFBSztBQUNyQyxJQUFBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxJQUFJLENBQUNGLFVBQVUsQ0FBQztBQUNqQyxJQUFBLE9BQU9DLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxXQUFXLEVBQUU7R0FDMUQ7RUFFRCxNQUFNQyxXQUFXLEdBQUlDLEdBQUcsSUFBSztJQUMzQixJQUFJQSxHQUFHLElBQUksR0FBRyxFQUFFO0FBQ2QsTUFBQSxPQUFPLGNBQWM7QUFDdkIsS0FBQyxNQUFNLElBQUlBLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPLFVBQVU7QUFDbkIsS0FBQyxNQUFNLElBQUlBLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPLEtBQUs7QUFDZCxLQUFDLE1BQU0sSUFBSUEsR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNyQixNQUFBLE9BQU8sY0FBYztBQUN2QixLQUFDLE1BQU0sSUFBSUEsR0FBRyxJQUFJLEdBQUcsRUFBRTtBQUNyQixNQUFBLE9BQU8sbUJBQW1CO0FBQzVCO0dBQ0Q7RUFFRCxNQUFNQyxZQUFZLEdBQUlELEdBQUcsSUFBSztJQUM1QixJQUFJQSxHQUFHLElBQUksQ0FBQyxFQUFHO0FBQ2IsTUFBQSxPQUFPRSxHQUFLO0FBQ2QsS0FBQyxNQUFNLElBQUlGLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPRyxLQUFNO0FBQ2YsS0FBQyxNQUFNLElBQUlILEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPSSxLQUFLO0FBQ2QsS0FBQyxNQUFNLElBQUlKLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPSyxLQUFNO0FBQ2YsS0FBQyxNQUFNLElBQUlMLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPTSxLQUFLO0FBQ2QsS0FBQyxNQUFNLElBQUlOLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPTyxLQUFNO0FBQ2YsS0FBQyxNQUFNLElBQUlQLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPUSxLQUFLO0FBQ2QsS0FBQyxNQUFNLElBQUlSLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPUyxLQUFNO0FBQ2YsS0FBQyxNQUFNLElBQUlULEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPVSxLQUFLO0FBQ2QsS0FBQyxNQUFNLElBQUlWLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPVyxLQUFNO0FBQ2YsS0FBQyxNQUFNLElBQUlYLEdBQUcsSUFBSSxHQUFHLEVBQUU7QUFDckIsTUFBQSxPQUFPWSxLQUFLO0FBQ2Q7R0FDRDtFQUVELG9CQUNFQyxLQUFBLENBQUEzVCxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUs0VCxJQUFBQSxLQUFLLEVBQUV2QztHQUNWc0MsZUFBQUEsS0FBQSxDQUFBM1QsYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUFLNlQsSUFBQUEsR0FBRyxFQUFFQyxLQUFPO0FBQUNGLElBQUFBLEtBQUssRUFBRWhDLFdBQVk7QUFBQ21DLElBQUFBLEdBQUcsRUFBQztBQUFRLEdBQUMsQ0FBQyxlQUNwREosS0FBQSxDQUFBM1QsYUFBQSxDQUFBLEtBQUEsRUFBQTtBQUFLNFQsSUFBQUEsS0FBSyxFQUFFdEM7R0FDVnFDLGVBQUFBLEtBQUEsQ0FBQTNULGFBQUEsQ0FBQSxJQUFBLEVBQUE7QUFBSTRULElBQUFBLEtBQUssRUFBRWpDO0FBQWMsR0FBQSxFQUFDLHVCQUF5QixDQUFDLGVBQ3BEZ0MsS0FBQSxDQUFBM1QsYUFBQSxDQUFBLEdBQUEsRUFBQTtBQUFHNFQsSUFBQUEsS0FBSyxFQUFFeEI7R0FDUGpoQixFQUFBQSxLQUFLLENBQUM2aUIsV0FBVyxFQUFDLDRCQUNuQixlQUFBTCxLQUFBLENBQUEzVCxhQUFBLENBQUEsR0FBQSxFQUFBO0FBQUc0VCxJQUFBQSxLQUFLLEVBQUV6QixTQUFVO0lBQ2pCaEMsSUFBSSxFQUFFaGYsS0FBSyxDQUFDOGU7R0FBTTllLEVBQUFBLEtBQUssQ0FBQzhpQixZQUFnQixDQUMxQyxDQUFDLGVBQ0pOLEtBQUEsQ0FBQTNULGFBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBSzRULElBQUFBLEtBQUssRUFBRTdCO0dBQ1Y0QixlQUFBQSxLQUFBLENBQUEzVCxhQUFBLENBQUEsS0FBQSxFQUFBO0FBQUs2VCxJQUFBQSxHQUFHLEVBQUVkLFlBQVksQ0FBQzVoQixLQUFLLENBQUMraUIsT0FBTyxDQUFFO0FBQUNOLElBQUFBLEtBQUssRUFBRTNCLFVBQVc7QUFBQzhCLElBQUFBLEdBQUcsRUFBQztHQUFhLENBQUMsZUFBQUosS0FBQSxDQUFBM1QsYUFBQSxXQUFLLENBQUMsZUFDbEYyVCxLQUFBLENBQUEzVCxhQUFBLENBQUEsUUFBQSxFQUFBO0FBQVE0VCxJQUFBQSxLQUFLLEVBQUUxQjtHQUFlVyxFQUFBQSxXQUFXLENBQUMxaEIsS0FBSyxDQUFDK2lCLE9BQU8sQ0FBQyxFQUFDLElBQUUsRUFBQy9pQixLQUFLLENBQUMraUIsT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBVyxDQUM3RixDQUFDLGVBQ05SLEtBQUEsQ0FBQTNULGFBQUEsQ0FBQSxHQUFBLEVBQUE7QUFBRzRULElBQUFBLEtBQUssRUFBRXhCO0dBQWdCLEVBQUEsU0FDakIsRUFBQ0csY0FBYyxDQUFDcGhCLEtBQUssQ0FBQ2lqQixVQUFVLENBQUMsZUFBQ1QsS0FBQSxDQUFBM1QsYUFBQSxXQUFLLENBQUMsRUFBQSxvQ0FDdEIsZUFBQTJULEtBQUEsQ0FBQTNULGFBQUEsV0FBSyxDQUFDLGVBQ3JDMlQsS0FBQSxDQUFBM1QsYUFBQSxDQUFBLEdBQUEsRUFBQTtBQUFHNFQsSUFBQUEsS0FBSyxFQUFFdkIsU0FBVTtBQUNqQmxDLElBQUFBLElBQUksRUFBQyxtQ0FBbUM7QUFDeEM0RCxJQUFBQSxHQUFHLEVBQUM7QUFBdUMsR0FBQSxFQUFDLDJCQUE0QixDQUNwRSxDQUNBLENBQ0YsQ0FBQztBQUVWOztBQy9LQSxNQUFNTSxNQUFNLENBQUM7RUFHWHRpQixXQUFXQSxDQUFBdWlCLElBQUEsRUFBbUI7SUFBQSxJQUFsQjtNQUFFQyxJQUFJO0FBQUVqTixNQUFBQTtBQUFPLEtBQUMsR0FBQWdOLElBQUE7SUFDMUIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDak4sTUFBTSxHQUFHQSxNQUFNO0FBQ3RCO0VBRUFrTixXQUFXQSxDQUFDQyxRQUFRLEVBQUU7QUFDcEIsSUFBQSxJQUFJQSxRQUFRLENBQUNDLE1BQU0sR0FBRyxHQUFHLEVBQUU7QUFDekIsTUFBQSxPQUFPRCxRQUFRO0FBQ2pCO0lBQ0EsT0FBTzdGLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDO01BQ3BCekUsT0FBTyxFQUFFeUssUUFBUSxDQUFDRSxVQUFVO0FBQzVCRixNQUFBQSxRQUFRLEVBQUVBO0FBQ1osS0FBQyxDQUFDO0FBQ0o7RUFFQUcsUUFBUUEsQ0FBQ0MsUUFBUSxFQUFFO0FBQ2pCLElBQUEsTUFBTXZXLElBQUksR0FBRztBQUNYd1csTUFBQUEsTUFBTSxFQUFFLEtBQUs7QUFDYkMsTUFBQUEsT0FBTyxFQUFFO0FBQ1AsUUFBQSxRQUFRLEVBQUUsa0JBQWtCO0FBQzVCLFFBQUEsY0FBYyxFQUFFO0FBQ2xCO0tBQ0Q7QUFFRCxJQUFBLE9BQU9DLEtBQUssQ0FBQyxJQUFJLENBQUNULElBQUksR0FBRyxJQUFJLENBQUNqTixNQUFNLEdBQUcsY0FBYyxHQUFHdU4sUUFBUSxFQUFFdlcsSUFBSSxDQUFDLENBQ3BFdEosSUFBSSxDQUFDLElBQUksQ0FBQ3dmLFdBQVcsQ0FBQyxDQUN0QnhmLElBQUksQ0FBQ2lnQixHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFLENBQUM7QUFDNUI7QUFDRjs7QUMzQk1DLE1BQUFBLGVBQWUsR0FBR0EsTUFBTTtBQUM1QixFQUFBLE1BQU1DLE1BQU0sR0FBRyxJQUFJZixNQUFNLENBQUM7QUFDeEJFLElBQUFBLElBQUksRUFBRSxrQ0FBa0M7QUFDeENqTixJQUFBQSxNQUFNLEVBQUU7QUFDVixHQUFDLENBQUM7RUFDRixNQUFNLENBQUMrTixLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHN2QscUJBQVEsQ0FBQyxFQUFFLENBQUM7QUFFdENSLEVBQUFBLFNBQVMsQ0FBQyxNQUFNO0FBY2hCLEdBQUMsRUFBRSxDQUFDbWUsTUFBTSxDQUFDLENBQUM7QUFFWixFQUFBLG9CQUNFekIsS0FBQSxDQUFBM1QsYUFBQSxDQUFDc1MsR0FBRyxFQUFBO0lBQ0YyQixZQUFZLEVBQUVvQixLQUFLLENBQUNFLHNCQUF1QjtJQUMzQ3ZCLFdBQVcsRUFBRXFCLEtBQUssQ0FBQ3JCLFdBQVk7SUFDL0JJLFVBQVUsRUFBRWlCLEtBQUssQ0FBQ2pCLFVBQVc7SUFDN0JGLE9BQU8sRUFBRW1CLEtBQUssQ0FBQ25CLE9BQVE7QUFDdkJqRSxJQUFBQSxHQUFHLEVBQ0gsQ0FBQSxpREFBQSxFQUFvRG9GLEtBQUssQ0FBQ0csaUJBQWlCLENBQUEsWUFBQTtBQUMxRSxHQUNGLENBQUM7QUFFTjs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzXX0=
