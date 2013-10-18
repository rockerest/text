define(
    ["jquery", "underscore"],
    function( $, _ ){
        var Game = function( src ){
            var jQXhr = $.getJSON( src ),
                self = this;

            $.when( jQXhr ).done( function( content ){
                self.init( content );
            });
        };

        Game.prototype.init = function( game ){
            this.game = game;
            this.node = this.game[0];
        };

        Game.prototype.do = function( keywords ){
            var last = this.node.paths,
                setNode = true;

            _.each( keywords, function( word ){
                if( _.has( last, word ) ){
                    last = last[ word ];
                }
                else{
                    setNode = false;
                    return false;
                }
            });

            if( setNode ){
                this.node = this.game[ last[1] ];
            }

            return last[0];
        };

        return Game;
    }
);
