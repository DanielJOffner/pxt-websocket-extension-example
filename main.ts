function WsOpen(ev: Event){
    console.log("websocket conneciton open");
};


function WsOnMessage(ev: Event) {
    console.log(`Message receieved from websocket connection: ${ev.data}`);
}

/**
 * Functions to do basically nothing
 */
//% color=#f44242 icon="\uf185"
namespace useless {
    
    /**
     * Sends some RGB values over websocket client
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="doBasicallyNothing" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function doBasicallyNothing(red: number, green: number, blue: number) {
        //return packRGB(red, green, blue);
        //console.log(`R:${red} G:${green} B:${blue}`)

        var wsconn = new WebSocket("wss://echo.websocket.org/");

        wsconn.onopen = function(ev) {
            WsOpen(ev);
            console.log("Sending message to ws server");
            wsconn.send(`R:${red} G:${green} B:${blue}`);
        }

        wsconn.onmessage = function (ev) {
            WsOnMessage(ev);
        }
    }

}