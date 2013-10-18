define(
    ["jquery", "engine"],
    function( $, Engine ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                $( "#input" ).focus();
                Engine.enter( "#input" );
            });
        }

        return Init;
    }
);
