/**
 * Small gamepad lib.
 * Tested with xbox type gamepad controller.
 * It is of course possible to extend to be usable with any other controller.
 * Note is has calls to Moondefender game so a clean up of references is needed to be used as a standalone lib.
 * Contact: grafgonzalo@gmail.com
 */
var joy = function () {
    this.connected = null,
    this.inUse = null,
    this.buttons = [],
    this.index_x = null,
    this.index_y = null,
    this.stick = {
        left: null,
        right: null,
        up: null,
        down: null
    }
}, Joysticks = [];

window.addEventListener("gamepadconnected", pollJoystick);

function pollJoystick(e) {
    const update = () => {

        for (const gamepad of navigator.getGamepads()) {
            if (!gamepad) continue;

            let id = gamepad.index;

            if (Joysticks[id] === undefined) Joysticks[id] = new joy();

            Joysticks[id].connected = gamepad.connected;

            if (Joysticks[id].stick.up === null) drawString(videoBuffer.buffer, "Joystick Player " + (id + 1), 20, 50, 30);

            for (const [index, axis] of gamepad.axes.entries()) {

                let dir = axis;

                if (Joysticks[id].stick.left == null) {
                    drawString(videoBuffer.buffer, "Move stick or press left then release.", 20, 100, 30);
                    if (dir == -1) Joysticks[id].index_x = index;
                }
                else if (Joysticks[id].stick.up == null) {
                    drawString(videoBuffer.buffer, "Move stick or press up then release.", 20, 150, 30);
                    if (dir == -1) Joysticks[id].index_y = index;
                }

                //x axis
                if (Joysticks[id].index_x == index) {
                    if (dir < -0.5) {
                        Joysticks[id].stick.left = true;
                        Joysticks[id].stick.right = false;

                    }
                    else if (dir > 0.5) {
                        Joysticks[id].stick.right = true;
                        Joysticks[id].stick.left = false;

                    }
                    else {
                        Joysticks[id].stick.left = false;
                        Joysticks[id].stick.right = false;
                    }
                }

                //y axis
                else if (Joysticks[id].index_y == index) {
                    if (dir < -0.5) {
                        Joysticks[id].stick.up = true;
                        Joysticks[id].stick.down = false;
                    }
                    else if (dir > 0.5) {

                        Joysticks[id].stick.down = true;
                        Joysticks[id].stick.up = false;
                    }
                    else {
                        Joysticks[id].stick.up = false;
                        Joysticks[id].stick.down = false;
                    }
                }

            }

            for (const [index, button] of gamepad.buttons.entries()) {

                Joysticks[id].buttons[index] = button;
                //if(Joysticks[id].buttons[index].pressed)console.log(index+" "+button)
            }
        }
        requestAnimationFrame(update);
    };
    update();
}

function getFreeJoystick() {

    for (let i = 0; i < Joysticks.length; i++) {
        if (Joysticks[i] !== undefined) {
            if (!Joysticks[i].inUse) {
                Joysticks[i].inUse = true;
                return i;
            }
        }
    }

    return -1;
}


//////////////////////////////////////
function doJoystick() {

    if (Joysticks[0] === undefined) return;

    if (game.state == IN_GAME) {

        if (Joysticks[0].stick.left) cannon.moveKL = true;
        else if (!Joysticks[0].stick.left) cannon.moveKL = false;

        if (Joysticks[0].stick.right) cannon.moveKR = true;
        else if (!Joysticks[0].stick.right) cannon.moveKR = false;

        if (Joysticks[0].buttons[0].pressed) cannon.fire = true;
        else if (!Joysticks[0].buttons[0].pressed) cannon.fire = false;

        if (Joysticks[0].buttons[7].pressed) {
            pause = !pause;
            pauseSound.play()
        }
    }
    else if (game.state == GAME_OVER)
        if (Joysticks[0].buttons[7].pressed) game.state = INTRO;
    else if (game.state == INTRO) 
        if (Joysticks[0].buttons[7].pressed) startGame = true;
}
