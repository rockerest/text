define(
    ["jquery", "engine", "log"],
    function( $, Engine, Log ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                Log.add( "You're alone on a beach." );
                $( "#input" ).focus();
                Engine.enter( "#input" );

                setInterval( function(){
                    $( ".time-ago" ).each( function(){
                        var time = moment( $(this).data( "time" ) );

                        $( this ).text( time.fromNow() );
                    });
                }, 1000);
            });
        }

        return Init;
    }
);
