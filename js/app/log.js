define(
    ["jquery"],
    function( $ ){
        var Log = {};

        Log.add = function( input, response ){
            if( response === undefined ){
                response = input;
                input = undefined;
            }

            var logEntry    = $( "<div class=\"entry clear\"></div>" ),
                time        = $( "<div class=\"w20\"><span class=\"time-ago\" data-time=\"" + (new Date()).getTime() + "\"></span></div>" ),
                content     = $( "<div class=\"w80\"></div>" );

            if( !response ){
                content.html( "<p>That doesn't seem like something I can do.</p><br />" );
            }
            else{
                content.html( response + "<br />" );
            }

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
