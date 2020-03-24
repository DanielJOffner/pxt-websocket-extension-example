/**
 * Functions to do basically nothing
 */
namespace useless {
    
    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% weight=1
    //% blockId="doBasicallyNothing" block="red %red|green %green|blue %blue"
    //% advanced=true
    export function doBasicallyNothing(red: number, green: number, blue: number) {
        //return packRGB(red, green, blue);
        console.log(`R:${red} G:${green} B:${blue}`)
    }

}