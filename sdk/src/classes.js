/**
 * Class stubs for documentation purposes
 * @main F2
 */
F2.extend("", {
	/**
	 * The App object represents an App's meta data
	 * @class F2.AppConfig
	 */
	 AppConfig:{
		/**
		 * The unique ID of the App
		 * @property appId
		 * @type string
		 * @required
		 */
		appId:"",
		/**
		 * An object that represents the context of an App
		 * @property context
		 * @type object
		 */
		context:"",
		/**
		 * True if the App should be requested in a single request with other Apps.
		 * The App must have isSecure = false.
		 * @property enableBatchRequests
		 * @type bool
		 * @default false
		 */
		enableBatchRequests:false,
		/**
		 * The height of the App. The initial height will be pulled from
		 * the {{#crossLink "F2.AppConfig"}}{{/crossLink}} object, but later modified by
		 * firing an
		 * {{#crossLink "F2.Constants.Events"}}{{/crossLink}}.APP_HEIGHT_CHANGE
		 * event.
		 * @property height
		 * @type int
		 */
		height:0,
		/**
		 * The unique runtime ID of the App. Will by assigned automaticaly when the
		 * App is registered with {{#crossLink "F2\registerApps"}}{{/crossLink}}
		 * @property instanceId
		 * @type string
		 */
		instanceId:"",
		/**
		 * True if the App will be loaded in an iframe. This property
		 * will be true if the {{#crossLink "F2.AppConfig"}}{{/crossLink}} object sets
		 * isSecure = true. It will also be true if the Container has decided to run
		 * Apps in iframes.
		 * @property isSecure
		 * @type bool
		 * @default false
		 */
		isSecure:false,
		/**
		 * The url to retrieve the {{#crossLink "F2.AppManifest"}}{{/crossLink}} object.
		 * @property manifestUrl
		 * @type string
		 * @required
		 */
		manifestUrl:"",
		/**
		 * The recommended maximum width in pixels that this app should be run.
		 * It is up to the Container to implement the logic to prevent an App
		 * from being run when the maxWidth requirements are not met.
		 * @property maxWidth
		 * @type int
		 */
		maxWidth:0,
		/**
		 * The recommended minimum grid size that this app should be run. This
		 * value corresponds to the 12-grid system that is used by the Container.
		 * This property should be set by Apps that require a certain number of 
		 * columns in their layout.
		 * @property minGridSize
		 * @type int
		 * @default 4
		 */
		minGridSize:4,
		/**
		 * The recommended minimum width in pixels that this app should be 
		 * run. It is up to the Container to implement the logic to prevent
		 * an App from being run when the minWidth requirements are not met.
		 * @property minWidth
		 * @type int
		 * @default 300
		 */
		minWidth:300,
		/**
		 * The name of the App
		 * @property name
		 * @type string
		 * @required
		 */
		name:"",
		/**
		 * The root DOM Element that contains this App
		 * @property root
		 * @type Element
		 */
		root:null,
		/**
		 * Sets the title of the App as shown in the browser. Depending on the
		 * Container HTML, this method may do nothing if the Container has not been
		 * configured properly or else the Container Provider does not allow Title's
		 * to be set.
		 * @method setTitle
		 * @params {string} title The title of the App
		 */
		setTitle:function(title) {},
		/**
		 * For secure apps, this method updates the size of the iframe that contains
		 * the App. **Note: It is recommended that App developers get into the habit
		 * of calling this method anytime Elements are added or removed from the
		 * DOM**
		 * @method updateHeight
		 * @params {int} height The height of the App
		 */
		updateHeight:function(height) {},
		/**
		 * The views that this App supports. Available views
		 * are defined in {{#crossLink "F2.Constants.Views"}}{{/crossLink}}. The
		 * presence of a view can be checked via
		 * F2.{{#crossLink "F2/inArray"}}{{/crossLink}}:
		 * 
		 *     F2.inArray(F2.Constants.Views.SETTINGS, app.views)
		 *
		 * @property views
		 * @type Array
		 */
		views:[]
	},
	/**
	 * The assets needed to render an App on the page
	 * @class F2.AppManifest
	 */
	AppManifest:{
		/**
		 * The array of {{#crossLink "F2.AppManifest.AppContent"}}{{/crossLink}}
		 * objects
		 * @property apps
		 * @type Array
		 * @required
		 */
		apps:[],
		/**
		 * Any inline javascript tha should initially be run
		 * @property inlineScripts
		 * @type Array
		 * @optional
		 */
		inlineScripts:[],
		/**
		 * Urls to javascript files required by the App
		 * @property scripts
		 * @type Array
		 * @optional
		 */
		scripts:[],
		/**
		 * Urls to CSS files required by the App
		 * @property styles
		 * @type Array
		 * @optional
		 */
		styles:[]
	},
	/**
	 * The AppContent object
	 * @class F2.AppManifest.AppContent
	 **/
	AppContent:{
		/**
		 * Arbitrary data to be passed along with the App
		 * @property data
		 * @type object
		 * @optional
		 */
		data:{},
		/**
		 * The string of HTML representing the App
		 * @property html
		 * @type string
		 * @required
		 */
		html:"",
		/**
		 * A status message
		 * @property status
		 * @type string
		 * @optional
		 */
		status:""
	},
	/**
	 * An object containing configuration information for the Container
	 * @class F2.ContainerConfig
	 */
	ContainerConfig:{		
		/**
		 * Allows the Container to override how an App's html is 
		 * inserted into the page. The function should accept an
		 * {{#crossLink "F2.AppConfig"}}{{/crossLink}} object and also a string of html
		 * @method afterAppRender
		 * @param {F2.AppConfig} appConfig The F2.AppConfig object
		 * @param {string} html The string of html representing the App 
		 * @return {Element} The DOM Element surrounding the App
		 */
		afterAppRender:function(appConfig, html) {},
		/**
		 * Allows the Container to wrap an App in extra html. The
		 * function should accept an {{#crossLink "F2.AppConfig"}}{{/crossLink}} object
		 * and also a string of html. The extra html can provide links to edit app
		 * settings and remove an app from the Container. See
		 * {{#crossLink "F2.Constants.Css"}}{{/crossLink}} for CSS classes that
		 * should be applied to elements.
		 * @method appRender
		 * @param {F2.AppConfig} appConfig The F2.AppConfig object
		 * @param {string} html The string of html representing the App
		 */
		appRender:function(appConfig, html) {},
		/**
		 * Allows the Container to render html for an App before the AppManifest for
		 * an App has loaded. This can be useful if the design calls for loading
		 * icons to appear for each App before each App is loaded and rendered to
		 * the page.
		 * @method beforeAppRender
		 * @param {F2.AppConfig} appConfig The F2.AppConfig object
		 */
		beforeAppRender:function(appConfig) {},
		/**
		 * Tells the Container that it is currently running within
		 * a secure app page
		 * @property isSecureAppPage
		 * @type bool
		 */
		isSecureAppPage:false,
		/**
		 * Allows the Container to specify which page is used when
		 * loading a secure app. The page must reside on a different domain than the
		 * Container
		 * @property secureAppPagePath
		 * @type string
		 */
		secureAppPagePath:"",
		/**
		 * Specifies what views a Container will provide buttons
		 * or liks to. Generally, the views will be switched via buttons or links in
		 * the App's header.
		 * @property supportedViews
		 * @type Array
		 * @required
		 */
		supportedViews:[]
	}
});

/**
 * @main F2
 */
F2.extend("F2.UI", {
	/**
	 * An object containing configuration information for the 
	 * {{#crossLink "F2.UI\showMask"}}{{/crossLink}} and
	 * {{#crossLink "F2.UI\hideMask"}}{{/crossLink}} methods.
	 * @class F2.UI.MaskConfiguration
	 */
	MaskConfiguration:{
		/**
		 * The backround color of the overlay
		 * @property backgroundColor
		 * @type string
		 * @default #FFFFFF
		 */
		backgroundColor:'#FFFFFF',
		/**
		 * The path to the loading icon
		 * @property loadingIcon
		 * @type string
		 */
		loadingIcon:'',
		/**
		 * The opacity of the background overlay
		 * @property opacity
		 * @type int
		 * @default .6
		 */
		opacity:.6,
		/**
		 * Do not use inline styles for mask functinality. Instead classes will be
		 * applied to the elements and it is up to the Container provider to
		 * implement the class definitions.
		 * @property useClasses
		 * @type bool
		 * @default false
		 */
		useClasses:false,
		/**
		 * The z-index to use for the overlay
		 * @property zIndex
		 * @type int
		 * @default 2
		 */
		zIndex:2
	}
});