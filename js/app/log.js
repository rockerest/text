define(
    ["jquery"],
    function( $ ){
        var Log = {};

        Log.add = function( input, response ){
            if( !response ){
                response = input;
                input = undefined;
            }

            var logEntry    = $( "<div class=\"entry clear\"></div>" ),
                time        = $( "<div class=\"w20\"><span class=\"time-ago\" data-time=\"" + (new Date()).getTime() + "\"></span></div>" ),
                content     = $( "<div class=\"w80\"></div>" );

            if( !response ){
                $( "#output" ).html( "<p>That doesn't seem like something I can do.</p><br />" );
            }
            else{
                $( "#output" ).html( response + "<br />" );
            }

            content.html( $( "#output" ).html() );
            if( input ){
                content.prepend( "<div class=\"input\"><code>" + input.trim().toLowerCase() + "</code></div>" );
            }

            logEntry.append( time );
            logEntry.append( content );

            $( "#history" ).prepend( logEntry );
        };

        return Log;
    }
)
