requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        "lib":          "../lib",

        "jquery":       ["https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min", "../lib/jquery/jquery.min"],

        "underscore":   "../lib/underscore/underscore.min",
        "moment":       "../lib/moment/moment.min"
    },
    "shim": {
        "underscore": {
            "init": function(){
                var local_ = _.noConflict();
                return local_;
            }
        }
    }
});

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
);
