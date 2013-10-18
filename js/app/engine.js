define(
    ["jquery", "moment", "game"],
    function( $, moment, Game ){
        var Engine = {},
            game = new Game( "data/game.json" );

        Engine.enter = function( item ){
            var ta = $( item );

            ta.on( "keyup", function( e ){
                var code = e.keyCode || e.which;
                if( code === 13 ){
                    Engine.step( ta );
                }
            });
        };

        Engine.step = function( ta ){
            var words = ta.val().trim().split( " " ),
                response = game.do( words ),
                time = $( "<div><span class=\"time-ago\" data-time=\"" + (new Date()).getTime() + "\"></span></div>" );

            $( "#history" ).prepend( $( "#output" ).html() )
                .prepend( "<hr />" )
                .prepend( time.html() + "&nbsp;&nbsp;&raquo;&nbsp;&nbsp;<code>" + ta.val() + "</code><br />" );

            ta.val( '' );
            ta.focus();

            if( !response ){
                $( "#output" ).html( "That doesn't seem like something I can do." );
            }
            else{
                $( "#output" ).html( response + "<br />" );
            }
        };

        return Engine;
    }
);
