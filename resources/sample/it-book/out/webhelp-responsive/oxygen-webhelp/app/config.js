define(function() {

    var modulePaths = {
        // core
        "webhelp" : "core/webhelp",
        "expand" : "core/expand",
        // context sensitive help
        "context-help" : "context-help/context-help",
        "context-help-map" : "context-help/context-help-map",
        // navigation links
        "nav-links-loader" : "nav-links/nav-links-loader",
        // search
        "search-init" : "search/search-init",
        "search" : "search/search",
        "nwSearchFnt" : "search/nwSearchFnt",
        "searchAutocomplete" : "search/searchAutocomplete",
        "searchHistoryItems" : "search/searchHistoryItems",
        // search index
        "index" : "search/index/index",
        "stopwords" : "search/index/stopwords",
        "index-1" : "search/index/index-1",
        "index-2" : "search/index/index-2",
        "index-3" : "search/index/index-3",
        "htmlFileInfoList" : "search/index/htmlFileInfoList",
        "keywords" : "search/index/keywords",
        // stemmers
        "stemmer" : "search/stemmers/stemmer",
        "en_stemmer" : "search/stemmers/en_stemmer",
        "de_stemmer" : "search/stemmers/de_stemmer",
        "fr_stemmer" : "search/stemmers/fr_stemmer",
        // options
        "options" : "options/options",
        "properties" : "options/properties",
        // utilities
        "util" : "util/util",
        "parseuri" : "util/parseuri",
        // i18n
        "localization" : "localization/localization",
        "strings" : "localization/strings",
        // image maps
        "image-map" : "image-map/image-map",

        /********************************************************
         **************** 3rd Party Libraries *******************
         ********************************************************/

        // JQuery
        "jquery" : "../lib/jquery/jquery-3.1.1.min",
        // JQuery UI
        "jquery.ui" : "../lib/jquery-ui/jquery-ui.min",
        // JQuery Highlight
        "jquery.highlight" : "../lib/jquery-highlight/jquery.highlight-3",
        // JQuery Image maps highlighter
        "jquery.maphilight" : "../lib/maphighlight/jquery.maphilight.min",
        // JQuery Responsive image maps
        "jquery.rwdImageMaps" : "../lib/rwdImageMaps/jquery.rwdImageMaps.min",
        // JQuery Bootpag
        "jquery.bootpag" : "../lib/jquery-bootpag/jquery.bootpag.min",
        // JQuery Cookie
        /*"jquery.cookie" : "lib/jquery-cookie/jquery.cookie",*/

    };

    var shimConfig = {
        // Responsive image maps
        "jquery.rwdImageMaps" : {
            deps: ["jquery"],
            exports : "jQuery.fn.rwdImageMaps"
        },
        // JQuery Highlight
        "jquery.highlight" : {
            deps: ["jquery"],
            exports : "jQuery.fn.highlight"
        },
        // JQuery Bootpag
        "jquery.bootpag" : {
            deps: ["jquery"],
            exports : "jQuery.fn.bootpag"
        },
    };

    requirejs.config({
        paths : modulePaths,
        shim : shimConfig
    });
});