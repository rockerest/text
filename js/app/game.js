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

            _( keywords ).each( function( word ){
                if( _( last ).has( word ) ){
                    last = last[ word ];
                }
                else{
                    setNode = false;
                    return false;
                }
            });

            if( setNode && _( last ).has( "nextNode" ) ){
                this.node = this.game[ last.nextNode ];
            }

            return last.lines;
        };

        return Game;
    }
);
