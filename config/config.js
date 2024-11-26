/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "0.0.0.0",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: [],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	locale: "de-DE",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_left"
		},
				{
                        module: "calendar",
                        header: "Kalender",
                        // position: "top_left",
                        config: {
				broadcastPastEvents: true,
                                calendars: [
                                        {
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                //symbol: "calendar-check",
                                                url: "https://calendar.google.com/calendar/ical/678c482d7a9d4ef6d7d1c148649cd768e04aa229f81751df76a04e0480b38972%40group.calendar.google.com/private-79f74b7fae29917122ef35905b2ee0df/basic.ics",
                                        },
                                        {
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                //symbol: "calendar-check",
                                                url: "https://calendar.google.com/calendar/ical/anno9474%40gmail.com/private-a2c7267668d62e0f9283c9ec8369342b/basic.ics",
                                        },
					{
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                //symbol: "arrow-trend-up",
                                                url: "https://api.parqet.com/v1/ical/dividends/divics_673622e83d731016784720e2",
						color: "green",
                                        },
                                        {
                                                fetchInterval: 7 * 24 * 60 * 60 * 1000,
                                                url: "http://urlaub.ityx.de/web/persons/87/calendar?secret=xVPqLs5PmzgbB7WhylY9zWHTDcJg4gvc",
						color: "blue",
                                        },	
                                ]
                        }
                },
		{
			module: "MMM-CalendarExt3",
			title: "",
			position: "bottom_bar",
			config: {
			  mode: "month",	
			  locale: 'de-DE',
			  monthIndex: 0,
			},
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 52.157,
				lon: 8.2628 
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 52.157,
				lon: 8.2628 
			}
		},
		{
		    module: "MMM-Tankerkoenig",
		    position: "top_left",
		    config: {
			apiKey: "d4140f8c-af9a-fd15-ad98-de1fc6e9e3f0", 
			updateInterval: 600000, // update interval in ms (10 mins)
			stationNames: {
			    "16c9f14c-5429-430b-b280-3af34f4de4c8": "Welling Tankstelle", // ID with custom name
			    "170ebca9-4bc8-4dd2-b366-d77675ea1ce5": "Gesmold Tankstelle ", // another ID possible
			    "f01ff248-c538-4b18-8ab4-389068e35692": "Westfalen Tankstelle",
			    "7a648916-974a-40d6-a6f5-7db1ce382564": "Metank Tankstelle",
			},
			fuelTypes: ["e5", "e10", "diesel"] // filter gas types
		    }
		},

		{
		  module: 'MMM-WiFiPassword',
		  position: "bottom_right",
		    config: {
		      //See 'Configuration options' for more information.
		      network: "MagentaWLAN-GKV6", 
		      password: "Christian&Bernd!",
		      showNetwork: false,
		      showPassword: false,
		      showAuthType: false,
    		      header: "WLAN",
		      qrSize: 100
		      }
		  },

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Tagesschau",
						url: "https://www.tagesschau.de/index~rss2.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		    module: 'MMM-Remote-Control',
		    // uncomment the following line to show the URL of the remote control on the mirror
		    // position: 'bottom_left',
		    // you can hide this module afterwards from the remote control itself
		    config: {
			customCommand: {},  // Optional, See "Using Custom Commands" below
			showModuleApiMenu: true, // Optional, Enable the Module Controls menu
			secureEndpoints: true, // Optional, See API/README.md
			// uncomment any of the lines below if you're gonna use it
			// customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
			// apiKey: "", // Optional, See API/README.md for details
			// classes: {} // Optional, See "Custom Classes" below
		    }
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
