define(
    ["jquery", "moment", "game", "log"],
    function( $, moment, Game, Log ){
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
            var words       = ta.val().trim().toLowerCase().split( " " ),
                response    = game.do( words ) || "";

            Log.add( ta.val(), response );

            ta.val( '' );
            ta.focus();
        };

        return Engine;
    }
);
