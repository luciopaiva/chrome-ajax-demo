# AJAX Demo

This demo shows how to make an AJAX request from within a script injected by a Chrome Extension. The extension, when 
loaded, injects `extension/inject.js` into the DOM, causing the script to be interpreted inside host's isolated scope. 
When executed, the script overrides an existing function called `hackMe()`, making it dispatch an AJAX request every 
time it is called.

On the server side, an Express app is listening for connections, serving a static page whenever someone asks for `/` 
and logging to *stdout* every time someone makes a request to `/ajax`. The server also sends cross-origin headers back 
to the client, so that when the extension is executed from another host's context, Chrome will not complain about 
cross-origin security breaches (e.g., displaying the message *No 'Access-Control-Allow-Origin' header is present on the 
requested resource. Origin 'some-other-host' is therefore not allowed access.*

As a note, I thought that the following configuration was needed in the `manifest.json` file:

    "permissions": [
        "http://localhost:8888/"
    ],

It turns out it is not needed and the demo works fine without it. I guess that's because the AJAX request is 
happening from inside the page's context and not from the extension itself, but I have yet to confirm that is true. 

# How to Run

Clone this repo. Go to `server/` and run:

    npm install
    node server

And the server should be online.

The next step is to go to [chrome://extensions](chrome://extensions) and drag the `extension` folder over it to
install the extension.

Finally, point Chrome to [the server](http://localhost:8888/) to load the sample page and then open the console to
see the script in action. Also look at the server output to confirm that the AJAX requests are successful.
