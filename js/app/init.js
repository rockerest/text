define(
    ["jquery", "engine"],
    function( $, Engine ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
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
