/***************************************************************************************************
 *                                                                                                 *
 *    M O O N                                                                                      *
 *     ______     _______    ________    _______              ______     ______    _____           *
 *    |      \   |          |           |          |\     |  |       \  |         |     |          *
 *    |       |  |          |           |          | \    |  |       |  |         |     |          *
 *    |       |  |_______   |________   |_______   |  \   |  |       |  |______   |_____/          *
 *    |       |  |          |           |          |   \  |  |       |  |         |    \           *
 *    |       |  |          |           |          |    \ |  |       |  |         |     \          *
 *    |______/   |_______   |           |_______   |     \|  |______/   |______   |      \         *
 *                                                                                                 *
 *                                                           (c)2016 grafgonzalo@gmail.com         *
 ***************************************************************************************************/

/******************
 C O N S T A N T S
******************/

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const MAX_BULLETS = 6;
const RELOAD_BULLET = 10;
const MAX_ENEMIES = 2;
const MAX_STARS = 25;
const MAX_ALIENS = 14;
const MAX_BOMB_BULLETS = 2;
const MAX_ENERGY = 10;

const BUTTON_SHEET = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAAyCAYAAACeTL+iAAACb0lEQVR4nO3Vz0vTcRzH8dfns6+tcshaoF9WKTXnySKGImYEQVCpSERBdvPgwYOH6JD3hKhL0am/IKhDeRDLw05lEf1aBJXwTWdQMmPzm8xtbt/t2yFW/8Dml/Z+PU6f4wuefD4f5do2ACBhV4bm3q1OWj9zR+3NUhvovxdsbkp1tja/v9C3b7prt7sAAMq1bTz4ZN94+OrHlNcDqX7GTrRPDUcCN1UimRm6PvNltlIq4sPMXXx7Ow+nsOn1PqqBpl0BHOwfQffQBLTWlVuXj/T5Qj3n76/n3HDi8W0sLTxCxSl5vZNqpOIUkV7+CO3TaO2MqcyvjQ69ki4cVgpYeTPv9T6qk+WXs1AK+Px947h20ORXAJ/xBpazU1AAttwdzYZWXs+h7VDtbCgGF0H9De7tDtom1c684UJUO+ts8d/7To1LAUjnASOdB/KO13Oo3tZyQK4EaODPgRpbtbH2dgZtNwYXhsGFYXBhGFwYBheGwYVhcGEYXBgGF4bBhWFwYRhcGAYXhsGFYXBhGFwYBheGwYVhcGEYXBgGF4bBhWFwYRhcGAYXhsGFYXBhGFwYBheGwYXRvnIeAGDsDHg8herFHzQBAIaThQ6U7S0AMHtHPB1F9RPuvwgA2OOuZ32j586cXS7uPRCM9EJphcL6KsqFrMcTqRb8QRPtJ8ewf+ASgApOt6WfKsuyjl27N/d8LRhTUPzSG5JbRth+7dy5OtqtI5HIi/FTXVOHUk+cls0lGA5vd6MwnCxasl8RTc0WJ4Zjk6ZpLirXdQEAyWSyJx6PX7EsayCTyXR4vJVqIBQKrUSj0WeDg4PTpmkuAsBvzaq1wP4sxxUAAAAASUVORK5CYII=';

const BOMBARDER_SHEET = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAAVCAYAAADGpvm7AAAAB3RJTUUH4gQDFwoXEDjBvwAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAACAklEQVR4nL3YQU4DMQwF0AiExIIlEvcpN4HLdDEngRux6DWqqougAFGDJ7a/HScLq9W0k4aXXyc05ZwTWtvHOXP1+LzllJKrLHPwlHdeTy/HfPw8s2WawyhwrTKxgu2pmdgVzFPlXgnaAh6CjEJL75mBLSEjC4BCI9ghyBS6B6ohR7cR2gJQ7PaaBVrDDkEeaR3lvtMfSFSyK1Z5/Lp7gNI7mmgNOwS5hbakmW4+EW2EJlJLtpRqDzSHHYLsSXQLcCLQXmyK1iZaayNRieawQ5ArNE0m2jK4+yzYXDJrWVpIe58XmmKHIaO4aKIt2FJb4BJtQY/ADkXWThaWRKM9W8LTEo2eSCKwlyfZ0qO1ZGtwSI9elezpmx96ftagKTaChpw6VmEPHeU8Z2aphSCLVKHRYxrXMlaerV3Qlj4s9VxtAbRejWxsPVB0Q9Remwodgex9D9KjPS1hFfbwj0bW60ivpn0bOXVIY1jagvU6DM39YdJGZYc87KodZ7u+d6t+NnKO/hnn8tatFuo+ve5qZCG4he1cx/+b06B/xzp0gPm0jgBbwKXUU/DyHDnVoIvzD5qmubdJaX24It2Qb2NzoBTXA8yBt+jcAlDwikO/CRJ6L8m7haWTsyabfv1bcIrJJTcC14Lew+49athIkne/ddBJeYsiazULWAJn506wR6v9/G8NE841iVWSowAAAABJRU5ErkJggg==';

const ENEMY_SHEET = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAXCAYAAACcTMh5AAAAB3RJTUUH4gQDFwwljrU3uQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABxElEQVR4nN2Y7U0DMQyGT4UOUYkZWILfLMEejMFGDIGYgBH4g0JdySf3VRJ/JI0RlSw1UeKzn7xJfLeVUrZMO/9Kxtxp8WfDu9ueSgQEzTkE5/4LgJT4w+l1GCD5yISYDm8UYDbEFHgMbhZAtgyIy+Gx8noKpLbswzYCJF9ZSlwOr2YI6/NwLF8/z3sft3GcxV8qQF75qHEyvWRl0mQf92f7frlA5DgInoTo8Sf/Ry0EkCY+vr3vhkHLM0xLxmLsR8KSCiSoBFdu11GT5yfCx9xdANGBBIjQ8EKIwuO5mgJl4qPQpA+80Wv5mwD24EmleMC05tTgtxRIbanAlno0dWlwWypsQXTBWwHQo8BbArRCbN6SeFhbtimOsWxrHGNRoHUbY5mjzamNqV1aV9WAVhJ4kp9xoRAkhigVyP2j/lvnntcYYggeKmzGbcxxWBQYXfCa0rAQ98bsAshyxtcwSz2orSTvBE2B1mJaxtszfBV082gF4i0otYIcFWx9jev1I4DWwkTi1USwb+HoQ0Ygjn5I0ACO+HTHsOpBEuItAa6EtxxgDeIsgBnwUgAixBkAs+ClAZQQZ1xOWfBSATKAv+BjxH4BpPX0p93hSH0AAAAASUVORK5CYII=';
const CANON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAOCAYAAABHN77IAAAAB3RJTUUH4gQOABw2q8oJHgAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAARklEQVR4nM3VMQoAIBADwTzdn0cs5WLrpth+OAIn20otyb/TqQXzBFGYCCIxA0RjLhAN6QbRiP4LVY66EtSAGiAaFUH0L9sMnCVo4jJ8AAAAAABJRU5ErkJggg==';
const CANON_BASE = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAnCAYAAAC8L0AUAAAAB3RJTUUH4gMOAA8EsNLFHAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAABA0lEQVR4nO3YSwqEMBAE0D56NrmHi7lnBsFIkzG/SXc+phbFiGDIG4sWJeccaccQuTN0/fpjYuf4sfZ+1MFboCkAhbgY+uk8z7Toc3PW2sfUoGPXT4dObfaxxsbcidVeC97lDkuhpeDqdzisLseG8F5VF0HXDK9atMZgEwGbRH7+hAt5HJ87HJ1bE+ie6BKsdlrgQJeCR2Ilqg707JWWqjrQK1RaoupA56q9QoAGuhDtFzILpQQP9GoTO4cHOoX29eBfNfi7b/geXJvYWjVrll4bqzrQIXZ1NMcDveqj6Z/B5vF7ot+OjeDHb2QMunH4tAw2qQFYM9SABvrt6A0zfAPd8wXMGFJejVAWUgAAAABJRU5ErkJggg==';
const ALIENI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAYCAYAAAACqyaBAAAAB3RJTUUH4gMfFwYTEw9+nQAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAAAwklEQVR4nGP4+vUrAzn4lZz0fxgm1wwmBgrAt21vKdHOQJaLkX1PiX6yNTqaKP+HYZpbDgT/icVUtRxkoIxkLdGYWAeQZDEhR6CrpchyYi3GpY6QA3BKEGM4pQ4gycekBjshB1DNYnIcQFWLSXUA1S0mxQE0sZhYB5BcgFALg0tD5KKTbpbCfI6t/Ka1pUTnc2pZTHQ+LywsJLoGIwbDzMNpOTUtI7bKpbvFyA7AaMN9+ZnE8I5dG4WmlZoB9fmAxjkAh7UqSv7jNmcAAAAASUVORK5CYII=";
const CURSOR = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAB3RJTUUH4gQBEwMwyfCvygAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QAAAAAAAD5Q7t/AAAABnRSTlMAAAAAAABupgeRAAAAS0lEQVR4nO2WIQIAIAgD+f+nNRiUVRjFuwRlB22xMlFGA9/QLkGaz+74QAX1aNFcQdftInDEAgAAwMfYa8tE8YqB6vhq64I0u+v7BsQJv0FB8lClAAAAAElFTkSuQmCC';
const GROUND = 'data:image/png;base64,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';

const BOSSI = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAA0CAYAAACqyUfGAAAAB3RJTUUH4gYLABYuD1fakAAAABd0RVh0U29mdHdhcmUAR0xEUE5HIHZlciAzLjRxhaThAAAACHRwTkdHTEQzAAAAAEqAKR8AAAAEZ0FNQQAAsY8L/GEFAAAABmJLR0QA/wD/AP+gvaeTAAADeElEQVR4nOWczXEbMQyFNW4jNeWUe2pICylA1biPFKBLrpmMW8hsvAcmMESQ+CNBYg9vVrItEh8fgCXXM7odx3GL0K8/n49TUfNH6fHl5TgVMffcyd6naynaiOzcU4E/vTxI4PK7aGMyc08H/vb6qCqj4atxLwGc0fAVuZcBzmT4qtxDQPH9iAtcA99l87YD95CMLtIAY3A4VrShu3O7ZbMncAt8hWrfldstm72BKfDoat+Ze2ngOvj9w3XqQ4nNuY3A93Do8zrljJqAWwEMJ8UBxEAPP7Ik4VZkdm3SeOhRhmfiVgBj2I8tbQ40HYPrUSUZtwC4ltUR9652lnsZnpFbCIxhI6Fr8fgYnpWbCdy/Z82F5lebzehc3MIWRreQWGg6nlP21p2D+wmW3hS0FLErbb2WVfhVuBvtqz1Q/HlTJrK1XYi7AYxbBc72Vc6besOvxt3J7tYE9PY/pp15mZ2Xm9nK8ODzdqb08UMOzjc7J3ennVFg/ZbiAd5vsyPMzsvNgJbIr7XxY+ptprRm5+NW7kj51VCONVI9j0kdh6g467HYduJ7czM3KpKF4J5RdVWjXXyZ2Tm5heCShw0e4L1xKGP6Rl+RW/GAQQouXQDu5+xGX42b+Y8AanDPtuWR+XKjr8QtBNfcy/qBycdpbU7kRl+F29jatNnJyVabpEZfgVsB7qE7uK5jdHbuQPAxshqdmXswtN9ZcS+z1+R2guZtHMYtVJTZe3F3gcsXvhQ9P9ZrZaX2rMlbhBJLLUar0Rm5xcDwtS+47AyJY/EyPDM3GxgOdn6l1de3742H99IWxX+AUeY85z/j6MVqNRqOBeeM4oZrL+UWAevBW1ku+3susNRw7liyRPfl5iR4i1sMjA2H4P/huSC8n8Hx4ZySWK1GY8Nhos/ghnNquVXAGLyYoAPnAeP5NLFajcaJDuMZzS1N8Br3P+Afv3+qBAPhGS4HxglliRUbbRmrxMUz3J7gVu4bbBUWySqcgu4De6gY7SFZhfO5a+vpIH3GFJXFg63mGZyf3XghrRVNZLkbN7y1eHB7VTTmdq9sGpwnCnjVysYV6MVd6xhm1TYtmk1AzWgpeA9YGtcpyTm77Hi58ubGvPAqFfuhika9rJJAU9W4onbinrYgEAyDwtfR5mXmngqO2x1+H23OKG6Kt7yfFsts8N3adCbuv/wOXu4dQE6fAAAAAElFTkSuQmCC'

const INTRO = 0;
const IN_GAME = 1;
const GAME_OVER = 2;
const START = 3;
const WIN = 4;

//var PLAY_SFX = () => {
//    try {
//        return Android.getValue();
//   }
//    catch {
        //console.log("Not running under android....set sfx to false");
//        return false;
//    }
//};

//PLAY_SFX();

/**************
 C L A S S E S
***************/

class Cannon {
    constructor() {
        this.w = 36;
        this.h = 14;
        this.ml = null;
        this.mr = null;
        this.fi = null;
        this.angle = 0;
        this.alive = true;
        this.thinkTime = 0;
        this.x = null;
        this.y = null;
        this.moveKR = false;
        this.moveKL = false;
        this.fire = false;
        this.baseW = 61;
        this.baseH = 39;
        this.baseX = CANVAS_WIDTH / 2 - (this.baseW / 2);
        this.baseY = (CANVAS_HEIGHT - 50) - this.baseH;
        this.baseImage = new Image();
        this.baseImage.src = CANON_BASE;
        this.canonImage = new Image();
        this.canonImage.src = CANON;

    }

    init(x, y, angle) {
        this.x = x;
        this.y = y;
        this.angle = angle;
    }

    draw(ctx) {
        if (this.alive === true) {
            let tx = this.w / 2;
            let ty = this.h / 2;
            let rotation = (this.angle * Math.PI / 180);

            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.translate(this.x + tx, this.y + ty);

            ctx.rotate(rotation);
            ctx.drawImage(this.canonImage, -tx, -ty, this.w, this.h);

            ctx.restore();
        }
    }


    doCannon() {

        this.thinkTime--;

        if (this.thinkTime <= 0) this.thinkTime = 0;

        if (this.moveKL) this.angle -= 3;

        else if (this.moveKR) this.angle += 3;

        if (Math.abs(this.angle) <= 5) this.angle = -5;

        if (Math.abs(this.angle) >= 175) this.angle = -175;

        if (this.fire == true) {

            if (this.thinkTime <= 0) {
                fireSound.play()
                createBullet(this.x, this.y, this.angle);
                game.score = game.score <= 0 ? 0 : game.score -= 1;
                this.thinkTime = RELOAD_BULLET;
            }

        }
    }


    drawBase(ctx) {
        if (this.alive === true)
            ctx.drawImage(this.baseImage, this.baseX, this.baseY, this.baseW, this.baseH);
    }
}


class Bullet {
    constructor() {

        this.x = null;
        this.y = null;
        this.w = 4;
        this.h = 8;
        this.active = false;
        this.angle = null;
        this.windForce = 0.01;
        this.speed = 400;
        this.gravity = 0.9;
        this.dirX = 0;
        this.dirY = 0;
        this.color = "red";

    }
    draw(ctx) {


        let tx = this.w / 2;
        let ty = this.h / 2;
        let rotation = degToRad(90) + this.angle;

        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(this.x + tx, this.y + ty);

        ctx.rotate(rotation);
        ctx.fillStyle = this.color;
        ctx.fillRect(-tx, -ty, this.w, this.h);

        ctx.restore();

    }

    doBullet(secondsPassed) {

        this.dirX = this.speed * Math.cos(this.angle);
        this.dirY = this.speed * Math.sin(this.angle);

        this.x += this.dirX * secondsPassed;
        this.y += this.dirY * secondsPassed;

        if (this.y < -10 || this.x > CANVAS_WIDTH + 1 || this.x < -1) this.active = false;

    }

}

class BombardierBullet extends Bullet {

    constructor() {
        super();
        this.w = 4;
        this.h = 8;
        this.color = 'yellow';
        this.speed = null;

    }

    draw(ctx) { super.draw(ctx); }

    doBullet(secondsPassed) {

        this.dirX = this.speed * Math.cos(this.angle);
        this.dirY = this.speed * Math.sin(this.angle);

        this.x += this.dirX * secondsPassed;
        this.y += this.dirY * secondsPassed;

        if (this.y + this.h > CANVAS_HEIGHT) {
            this.active = false;
            this.y = null;
            this.x = null;
        }

    }

}

class Enemy {
    constructor() {
        this.x = null;
        this.y = null;
        this.type = null;
        this.w = 39;
        this.h = 23;
        this.speed = 250;
        this.active = false;
        this.dirX = null;
        this.dirY = null;
        this.image = new Image();
        this.image.src = ENEMY_SHEET;
        this.clipL = {
            x: 0,
            w: 38
        };
        this.clipR = {
            x: 41,
            w: 38
        };
    }

    draw(ctx) {

        if (this.type === 1) ctx.drawImage(this.image, this.clipL.x, 0, this.clipL.w, 23, this.x, this.y, this.w, this.h);

        else if (this.type === 0) ctx.drawImage(this.image, this.clipR.x, 0, this.clipR.w, 23, this.x, this.y, this.w, this.h);
    }
    doE(secondsPassed) {

        //this.dirX = 0;
        if (this.type == 0) {
            this.dirX = this.speed;
            if (this.x > CANVAS_WIDTH) this.active = false;
        }
        else if (this.type == 1) {
            this.dirX = -this.speed;
            if (this.x + this.w < 0) this.active = false;
        }
        this.x += this.dirX * secondsPassed;

    }

}

class Bombardier extends Enemy {

    constructor() {
        super();
        this.h = 22;
        this.w = 44;
        this.speed = 300;
        this.thinkTime = 100;
        this.fire = false;
        this.image = new Image();
        this.image.src = BOMBARDER_SHEET;
        this.clipL = {
            x: 0,
            w: 43
        };
        this.clipR = {
            x: 46,
            w: 43
        };

    }

    draw(ctx) { super.draw(ctx); }

    doE(secondsPassed) {
        super.doE(secondsPassed);

        this.thinkTime--;

        if (this.thinkTime <= 0) this.thinkTime = 0;

        if (this.thinkTime <= 0) {

            let chance = Math.floor(Math.random() * 2) == 1 ? createBombarderBullet(this, 'bombarder') : null;

            this.thinkTime = 100;

        }

    }

}

class Boss {
    constructor() {
        this.x = CANVAS_WIDTH / 2;
        this.y = -20;
        this.w = 63;
        this.h = 52;
        this.thinkTime = 20;
        this.clicks = 0;
        this.curr_xv = 0;
        this.curr_yv = 0;
        this.image = new Image();
        this.image.src = BOSSI;
        this.clip = {
            x: 0,
            y: 0,
            h: 51,
            w: 60
        };
        this.animFrames = {
            num: 0,
            max: 1,
            size: 62,
            counter: 15
        },
            this.intro = true;
        this.active = false;
        this.energy = 5;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.clip.x, this.clip.y, this.clip.w, this.clip.h, this.x, this.y, this.w, this.h);
    }

    doBoss() {

        this.animate();

        if (this.intro === true) {
            this.y += 1;
            if (this.y == 10) {
                this.intro = false;
            }
        }
        else if (this.intro === false) {

            this.thinkTime--;

            if (this.thinkTime <= 0) this.thinkTime = 0;

            if (this.thinkTime <= 0 && cannon.alive == true) {

                let chance = Math.floor(Math.random() * 2) == 1 ? createBombarderBullet(this, 'boss') : null;
                this.thinkTime = game.bombardierThink[game.level];

            }
            if (++this.clicks == 15) {

                this.curr_xv = -5 + Math.round(Math.random() * 10); // -5 to +5
                this.curr_yv = -5 + Math.round(Math.random() * 10); // -5 to +5
                this.clicks = 0;
                if (this.curr_xv === 0) this.curr_xv = 1;
            }


            this.x += this.curr_xv;
            this.y += this.curr_yv;

            if (this.x + this.w > CANVAS_WIDTH) this.curr_xv = -this.curr_xv;
            if (this.x < 0) this.curr_xv = -this.curr_xv;
            if (this.y < 0) this.y = 0;
            if (this.y >= CANVAS_HEIGHT - 200) this.y = CANVAS_HEIGHT - 200;
        }
    }
    animate() {

        if (--this.animFrames.counter <= 0) {

            this.animFrames.num += 1;
            this.clip.x += this.animFrames.size;

            if (this.animFrames.num >= 2) {
                this.animFrames.num = 0;
                this.clip.x = 0;
            }

            this.animFrames.counter = 15;

        }
    }

    drawEnergy(ctx) {
        for (let i = 0; i <= this.energy; i++) {
            ctx.fillStyle = this.energy >= 3 ? "green" : "red";
            ctx.fillRect(250, 10, i * 10, 10);
        }

        if (this.energy > 1) drawString(ctx, "ENERGY", 250, 32, "15");
        else fillBlinkingText(ctx, "ENERGY", 250, 32, 500, "15");

    }
}


class Alien extends Enemy {
    constructor() {

        super();
        this.speed = 50;
        this.gravity = 20;
        this.damp = 0.9;
        this.onGround = false;
        this.playSound = false;
        this.h = 17;
        this.w = 22;
        this.image = new Image();
        this.image.src = ALIENI;

    }

    draw(ctx) {

        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);

    }

    doAlien(secondsPassed) {

        this.dirY += this.gravity;

        this.dirY *= this.damp;

        this.y += this.dirY * secondsPassed;


        if (this.y + this.h > (CANVAS_HEIGHT - 50)) {
            this.y = (CANVAS_HEIGHT - 50) - this.h;
            this.dirY = - Math.abs(this.dirY);

            if (this.playSound === false) landSound.play();

            this.playSound = true;
            this.onGround = true;

        }

        this.dirX = 0;

        this.dirX += this.x > CANVAS_WIDTH / 2 ? -this.speed : this.speed;

        if (this.y + this.h > CANVAS_HEIGHT) this.active = false;
        if (this.x + this.w > CANVAS_WIDTH || this.x < 0) this.active = false;

        this.x += this.dirX * secondsPassed;

    }

}

class Star {

    constructor() {
        this.color = null;
        this.speed = null;
        this.x = null;
        this.y = null;
    }

    doStar(secondsPassed) {
        this.x -= this.speed;

        if (this.x <= 0) {
            this.x = CANVAS_WIDTH + Math.random() * 20;
            this.y = Math.random() * 500;
            this.speed = 1 + (Math.random() * 3);

        }

    }
    draw(ctx, color) {

        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, 1.5, 1.5);
    }
}

class Explosion {
    constructor() {

        this.particlePool = [];
        this.particles = [];
    }

    draw(ctx) {

        for (var i = this.particles.length - 1; i >= 0; i--) {

            var particle = this.particles[i];
            particle.moves++;
            particle.x += particle.xunits;
            particle.y += particle.yunits + (particle.gravity * particle.moves);
            particle.life--;

            if (particle.life <= 0) {
                if (this.particlePool.length < 100) {
                    this.particlePool.push(this.particles.splice(i, 1));
                }
                else {
                    this.particles.splice(i, 1);
                }
            }

            else {
                ctx.globalAlpha = (particle.life) / (particle.maxLife);
                ctx.fillStyle = particle.color;
                ctx.fillRect(particle.x, particle.y, particle.width, particle.height);
                ctx.globalAlpha = 1;
            }
        }
    }

    createExplosion(x, y, color, number, width, height, spd, grav, lif) {

        for (var i = 0; i < number; i++) {
            var angle = Math.floor(Math.random() * 360);
            var speed = Math.floor(Math.random() * spd / 2) + spd;
            var life = Math.floor(Math.random() * lif) + lif / 2;
            var radians = angle * Math.PI / 180;
            var xunits = Math.cos(radians) * speed;
            var yunits = Math.sin(radians) * speed;


            if (this.particlePool.length > 0) {
                var tempParticle = this.particlePool.pop();
                tempParticle.x = x;
                tempParticle.y = y;
                tempParticle.xunits = xunits;
                tempParticle.yunits = yunits;
                tempParticle.life = life;
                tempParticle.color = color;
                tempParticle.width = width;
                tempParticle.height = height;
                tempParticle.gravity = grav;
                tempParticle.moves = 0;
                tempParticle.alpha = 1;
                tempParticle.maxLife = life;
                this.particles.push(tempParticle);
            }

            else {
                this.particles.push({ x: x, y: y, xunits: xunits, yunits: yunits, life: life, color: color, width: width, height: height, gravity: grav, moves: 0, alpha: 1, maxLife: life });
            }

        }
    }
}

class Game {

    constructor() {
        this.score = 0;
        this.energy = MAX_ENERGY;
        this.onGround = 0;
        this.gameState = null;
        this.pause = null;
        this.touches = 0;
        this.level = 1;
        this.showLevelInfo = false;
        this.changingLevel = false;
        this.enemies = [null, 280, 270, 250, 250, 150, 150, 150, 150, 120, 120];
        this.aliens = [null, 190, 180, 160, 150, 150, 80, 80, 60, 50, 50];
        this.bombardiers = [null, 1400, 1300, 1200, 1200, 1000, 1000, 900, 800, 780, 780];
        this.bombardierThink = [null, 100, 90, 80, 70, 60, 50, 40, 30, 20, 20];
    }


}

class Ground {

    constructor() {
        this.x = 0;
        this.y = CANVAS_HEIGHT - 100;
        this.i = new Image();
        this.i.src = "images/ground.png";
        this.w = CANVAS_WIDTH;
        this.h = 48;
    }

    draw(ctx) {

        ctx.drawImage(this.i, this.x, this.y, this.w, this.h);
    }
}

class Button {

    constructor(width, text) {

        this.w = width;
        this.text = text;
        this.pressed = false;
        this.i = new Image();
        this.i.src = BUTTON_SHEET;
        this.h = 45;
        this.x = null;
        this.y = null;
    }

    draw(ctx, x, y) {

        this.x = x;
        this.y = y;

        if (this.pressed === true) ctx.drawImage(this.i, this.x, this.y, this.w, this.h);

        drawString(ctx, this.text, this.x + (this.w / 2) - 25, this.y + (this.h / 2) + 5, 20);
    }
}

class Music {
    constructor(sound) {
        this.audio = new Audio();
        this.audio.src = sound;
    }

    play() {
        return this.audio.play();    
    }
}

class VideoBuffer {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.buffer = this.create()
    }

    create() {

        var canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        return canvas.getContext("2d");
    }

    show(ctx) {
        ctx.drawImage(this.buffer.canvas, 0, 0);
    }

    clear() {
        this.buffer.fillStyle = "black";
        this.buffer.fillRect(0, 0, this.width, this.height);
    }
}

/*******************
  V A R I A B L E S
*******************/

var pauseSound = new Music('sfx/pause.wav');
var fireSound = new Music('sfx/fire.wav');
var explosionSound1 = new Music('sfx/explosion1.wav');
var explosionSound2 = new Music('sfx/explosion2.wav');
var landSound = new Music('sfx/land.wav');
var startSound = new Music('sfx/start.wav');
var changeLevelSound = new Music('sfx/changeLevel.wav');
var gameOverSound = new Music('sfx/gameOver.wav');
var winSound = new Music('sfx/winSong.wav');

var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var c = document.getElementById("myc");

var canvas = c.getContext("2d");

var bullets = [];

var enemies = [];

var stars = [];

var aliens = [];

var bombardierBullets = [];

var cannon;

var explosion = new Explosion();

var bombardier,
    ground, boss;

var cycles = 0;

var pause = false;
var startGame = false;

var game = new Game();

//Highscore persistance as long as play in the same browser
var loadedData = localStorage.length > 0 ? localStorage.getItem("data") : undefined;
loadedData = undefined ? undefined : parseInt(loadedData);

var hiScore = loadedData ? loadedData : 0;

var lastScore;

var cursor = {

    image: new Image(),
    show: false,
    x: null,
    y: null,
    w: 32,
    h: 32,
    draw: function (ctx) {
        if (this.show === true)
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        else
            return;
    }

};
cursor.image.src = CURSOR;

var counterStart = 120;
var videoBuffer = new VideoBuffer(CANVAS_WIDTH, CANVAS_HEIGHT);

/*******************
  L I S T E N E R S
*******************/

window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);
document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

window.onload = () => {
    resizeGame();
    game.state = INTRO;
    requestAnimFrame(main);
};


/*********************
  F U N C T I O N S
**********************/
var oldTimeStamp = 0;
let fps = null;

function main(timeStamp) {
    let secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    fps = 1 / secondsPassed;

    videoBuffer.clear();
    //drawString(videoBuffer.buffer, fps.toFixed(2), 50, 50, 10);
    doJoystick();

    switch (game.state) {

        case INTRO:
            showTitles()
            break;

        case START:
            initEntities();
            game.score = 0;
            game.state = IN_GAME;
            break;

        case IN_GAME:
            if (!pause) {
                cycles++;

                if ((!(cycles % 5000))) changeLevel();

                if (game.changingLevel === false) {

                    if ((!(cycles % game.enemies[game.level]))) createEnemy();

                    if ((!(cycles % game.aliens[game.level]))) createAlien();

                    if ((!(cycles % game.bombardiers[game.level]))) createBombarder();
                }

                doCollisions();

                doEntities(secondsPassed);

                drawEntities();

                drawPanel();

                drawScores();
            }
            else
                showPauseMessage();
            break;

        case GAME_OVER:
            lastScore = game.score;
            resetGame(false);
            break;

        case WIN:
            lastScore = game.score;
            resetGame(true);
            break;
    }

    videoBuffer.show(canvas);

    requestAnimFrame(main);
}

function showTitles() {
    drawString(videoBuffer.buffer,"MOON DEFENDER", 45,120,100,"#4175c9")
    drawString(videoBuffer.buffer,"(c) 2016 Gonzalo Graf",280,CANVAS_HEIGHT-50,20)
    fillBlinkingText(videoBuffer.buffer,"Press Enter",340,CANVAS_HEIGHT/2,280,20)
    if(startGame) {
        handleStart();
    }
}

function handleStart() {
    videoBuffer.clear()
    counterStart--;
    drawIntro();

    if (counterStart == 0) {
        game.state = START;
        startGame = false
    }
}

function changeLevel() {
    game.changingLevel = true;

    aliens.forEach((a) => {
        if (a.active === true) {

            a.active = false;
            explosionSound1.play();
            explosion.createExplosion(a.x, a.y, "#C20808", 70, 5, 5, 2, .15, 30);

        }
    });

    enemies.forEach((e) => {
        if (e.active === true) {
            e.active = false;
            explosion.createExplosion(e.x, e.y, "#C20808", 70, 5, 5, 2, .15, 30);
        }

    });

    boss = new Boss();
    boss.active = true;
}

function drawIntro() {
    //canvas.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    fillBlinkingText(videoBuffer.buffer, "READY!", 360, CANVAS_HEIGHT / 2 + 50, 500, 22);
}

function showPauseMessage() {
    //canvas.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    fillBlinkingText(videoBuffer.buffer, "PAUSE", 360, CANVAS_HEIGHT / 2 + 50, 500, 22);
}

function resetGame(bool) {

    let win = bool;

    if (win === false) drawString(videoBuffer.buffer, "GAME OVER", CANVAS_WIDTH / 2 - 70, CANVAS_HEIGHT / 2, 28);
    else if (win === true) drawString(videoBuffer.buffer, "MISSION COMPLETED!", CANVAS_WIDTH / 2 - 120, CANVAS_HEIGHT / 2, 28);

    if (lastScore >= hiScore) {
        hiScore = +lastScore;
        localStorage.setItem("data", hiScore);
        fillBlinkingText(videoBuffer.buffer, "NEW HISCORE: " + lastScore, CANVAS_WIDTH / 2 - 73, CANVAS_HEIGHT / 2 + 50, 500, 18);
    } else {
        drawString(videoBuffer.buffer, "SCORE: " + lastScore, CANVAS_WIDTH / 2 - 45, CANVAS_HEIGHT / 2 + 50, 18);
    }

    fillBlinkingText(videoBuffer.buffer, "PRESS SPACE BAR", CANVAS_WIDTH / 2 - 73, CANVAS_HEIGHT / 2 + 100, 500, 18);


    cannon = null;
    bombardier = null;
    boss = undefined;
    aliens = [];
    enemies = [];
    bullets = [];
    bombardierBullets = [];
    game.energy = 10;
    game.level = 1;
    game.onGround = 0;
    game.changingLevel = false;
    cycles = 0;
}

function initEntities() {

    cannon = new Cannon();

    cannon.init(cannon.baseX + 14, cannon.baseY - (cannon.h / 2), -90);

    initBullets();

    initEnemies();

    initStars();

    resetStars();

    initAliens();

    bombardier = new Bombardier();

    ground = new Ground();

    initBombarderBullets();

    counterStart = 120
}

function doEntities(secondsPassed) {

    cannon.doCannon();

    if (bombardier.active == true) bombardier.doE(secondsPassed);

    if (boss !== undefined) {
        if (boss.active === true) boss.doBoss(secondsPassed);
    }

    for (let i = 0; i < MAX_BULLETS; i++) {
        if (bullets[i].active == true) bullets[i].doBullet(secondsPassed);

    }

    for (let i = 0; i < MAX_BOMB_BULLETS; i++) {
        if (bombardierBullets[i].active == true) bombardierBullets[i].doBullet(secondsPassed);
    }

    for (let i = 0; i < MAX_ENEMIES; i++) {
        if (enemies[i].active == true) enemies[i].doE(secondsPassed);
    }

    for (let i = 0; i < MAX_STARS; i++) {
        stars[i].doStar(secondsPassed);
    }

    for (let i = 0; i < MAX_ALIENS; i++) {
        if (aliens[i].active == true) aliens[i].doAlien(secondsPassed);
    }
}

function handleDie() {

    explosionSound2.play();

    explosion.createExplosion(cannon.baseX + cannon.baseW / 2, cannon.baseY, "#C20808", 70, 5, 5, 3, .15, 100);

    cannon.alive = false;

    cannon.y = -200;
    cannon.x = null;
    cannon.baseY = -200;
    cannon.baseX = null;

    gameOverSound.play();

    setTimeout(() => {
        game.state = GAME_OVER;
    }, 4000)
}

function handleWin() {

    cannon.alive = false;

    cannon.y = -200;
    cannon.x = null;
    cannon.baseY = -200;
    cannon.baseX = null;

    winSound.play();

    setTimeout(() => {
        game.state = WIN;
    }, 3000)
}

function drawEntities() {

    ground.draw(videoBuffer.buffer);

    for (let i = 0; i < MAX_STARS; i++) {
        stars[i].draw(videoBuffer.buffer, "#FFFFFF");
    }

    for (let i = 0; i < MAX_BULLETS; i++) {
        if (bullets[i].active == true) bullets[i].draw(videoBuffer.buffer);
    }


    for (let i = 0; i < MAX_BOMB_BULLETS; i++) {
        if (bombardierBullets[i].active == true) bombardierBullets[i].draw(videoBuffer.buffer);
    }

    cannon.draw(videoBuffer.buffer);

    cannon.drawBase(videoBuffer.buffer);

    for (let i = 0; i < MAX_ENEMIES; i++) {
        if (enemies[i].active == true) enemies[i].draw(videoBuffer.buffer);
    }

    for (let i = 0; i < MAX_ALIENS; i++) {
        if (aliens[i].active == true) aliens[i].draw(videoBuffer.buffer);
    }

    if (bombardier.active == true) bombardier.draw(videoBuffer.buffer);

    explosion.draw(videoBuffer.buffer);

    cursor.draw(videoBuffer.buffer);

    if (boss !== undefined) {
        if (boss.active) {
            boss.draw(videoBuffer.buffer);
            boss.drawEnergy(videoBuffer.buffer);
        }
    }

    if (game.showLevelInfo === true && game.level < 10) fillBlinkingText(videoBuffer.buffer, "Level: " + game.level, 360, CANVAS_HEIGHT / 2 + 50, 500, 22);
}

function initBullets() {
    for (let i = 0; i < MAX_BULLETS; i++) { bullets.push(new Bullet()); }
}

function initBombarderBullets() {
    for (let i = 0; i < MAX_BOMB_BULLETS; i++) { bombardierBullets.push(new BombardierBullet()); }
}

function initEnemies() {
    for (let i = 0; i < MAX_ENEMIES; i++) { enemies.push(new Enemy()); }
}

function initAliens() {
    for (let i = 0; i < MAX_ALIENS; i++) { aliens.push(new Alien()); }
}

function doCollisions() {

    var b, e, a, r;

    for (b = 0; b < MAX_BULLETS; b++) {

        if (bullets[b].active === false) continue;

        for (a = 0; a < MAX_ALIENS; a++) {

            if (aliens[a].active === false) continue;


            if (collision(aliens[a].x, aliens[a].y, aliens[a].w, aliens[a].h, bullets[b].x, bullets[b].y, bullets[b].w, bullets[b].h) == true) {

                bullets[b].active = false;
                aliens[a].active = false;
                explosionSound1.play();
                explosion.createExplosion(bullets[b].x, bullets[b].y, '#0D0D68', 70, 5, 5, 2, .15, 30);
                game.score += 5;
                break;
            }

        }

        if (collision(bombardier.x, bombardier.y, bombardier.w, bombardier.h, bullets[b].x, bullets[b].y, bullets[b].w, bullets[b].h) == true && bombardier.active == true) {

            bullets[b].active = false;
            bombardier.active = false;
            explosionSound1.play();
            explosion.createExplosion(bombardier.x, bombardier.y, '#1010D5', 70, 5, 5, 2, .15, 30);
            bombardier.x = null;
            bombardier.y = null;
            game.score += 20;

            break;
        }


        for (r = 0; r < MAX_BOMB_BULLETS; r++) {

            if (bombardierBullets[r].active === false) continue;


            if (collision(bombardierBullets[r].x, bombardierBullets[r].y, bombardierBullets[r].w, bombardierBullets[r].h, bullets[b].x, bullets[b].y, bullets[b].w, bullets[b].h) === true) {

                bullets[b].active = false;
                bombardierBullets[r].active = false;
                explosionSound1.play();
                explosion.createExplosion(bombardierBullets[r].x, bombardierBullets[r].y, "#DAEC5E", 70, 5, 5, 2, .15, 30);
                game.score += 10;
                game.energy = game.energy < MAX_ENERGY ? game.energy +=1 : game.energy = MAX_ENERGY;
                break;
            }

        }

        for (e = 0; e < MAX_ENEMIES; e++) {

            if (enemies[e].active === false) continue;


            if (collision(enemies[e].x, enemies[e].y, enemies[e].w, enemies[e].h, bullets[b].x, bullets[b].y, bullets[b].w, bullets[b].h) === true) {

                bullets[b].active = false;
                enemies[e].active = false;
                game.score += 5;
                //x, y, color, number, width, height, spd, grav, lif)
                explosionSound1.play();
                explosion.createExplosion(enemies[e].x, enemies[e].y, '#0D0D68', 70, 5, 5, 2, .15, 30);
                break;
            }

        }

        if (boss !== undefined) {


            if (boss.active === true && boss.intro === false) {

                if (collision(boss.x, boss.y, boss.w, boss.h, bullets[b].x, bullets[b].y, bullets[b].w, bullets[b].h) === true) {

                    bullets[b].active = false;
                    explosionSound1.play();
                    explosion.createExplosion(boss.x + (boss.w / 2), boss.y + (boss.h / 2), '#1010D5', 70, 5, 5, 2, .15, 30);

                    if (boss.energy <= 0) {

                        boss.active = false;

                        if (game.level < 10) {
                            game.level += 1;
                            game.showLevelInfo = true;
                            game.energy = MAX_ENERGY;
                            changeLevelSound.play();
                        }
                        else {
                            handleWin();
                        }

                        bombardierBullets.forEach((b) => {
                            if (b.active === true) {
                                b.active = false;
                                explosion.createExplosion(b.x, b.y, "#DAEC5E", 70, 5, 5, 2, .15, 30);
                            }

                        });

                        setTimeout(() => {

                            game.showLevelInfo = false;
                            boss = undefined;
                            game.changingLevel = false;

                        }, 4000);
                    }
                    else {
                        boss.energy -= 1;
                        game.score += 20
                    }

                    break;
                }
            }
        }

    }

    for (let r = 0; r < MAX_BOMB_BULLETS; r++) {

        if (bombardierBullets[r].active === false) continue;
        if (collision(bombardierBullets[r].x, bombardierBullets[r].y, bombardierBullets[r].w, bombardierBullets[r].h, cannon.baseX, cannon.baseY, cannon.baseW, cannon.baseH) === true) {
            bombardierBullets[r].active = false;
            explosionSound1.play();
            explosion.createExplosion(cannon.baseX + (cannon.baseW / 2), cannon.baseY + (cannon.baseH / 2), "#C20808", 70, 5, 5, 2, .15, 30);
            if (game.energy > 0) {
                game.energy -= 1;
            } else if (game.energy <= 0) {
                handleDie();
            }
            break;
        }
    }


    for (let a = 0; a < MAX_ALIENS; a++) {

        if (aliens[a].active === false) continue;


        if (collision(aliens[a].x, aliens[a].y, aliens[a].w, aliens[a].h, cannon.baseX, cannon.baseY, cannon.baseW, cannon.baseH) === true) {

            aliens[a].active = false;

            explosionSound1.play();

            explosion.createExplosion(aliens[a].x, aliens[a].y, "#C20808", 70, 5, 5, 2, .15, 30);

            if (game.energy > 0) {
                game.energy -= 1;
            } else if (game.energy <= 0) {
                handleDie();

            }
            break;
        }
    }
}

function createBombarderBullet(e, type) {

    let freeBullet = getBombarderBullet();
    if (freeBullet == -1) {
        //console.log("could not find a bombarder bullet");
        return;
    }

    if (cannon.alive == false) return;

    //launching point of the bullet
    let nx = e.x + e.w / 2;
    let ny = e.y + e.h;

    //y vector between player and enemy
    let opY = type === 'bombardier' ? cannon.baseY + (cannon.baseH / 2) - ny : cannon.baseY + (cannon.baseH / 2) - ny;

    //x vector between player and enemy
    let adX = type === 'bombardier' ? cannon.x + (cannon.baseW / 2) - nx : cannon.x + (cannon.baseW / 2) - nx;

    //alfa angle
    let ANGLE = Math.atan2(opY, adX);

    //real distance between player and entity
    let hypo = Math.sqrt(Math.pow(adX, 2) + Math.pow(opY, 2))


    bombardierBullets[freeBullet].x = nx;
    bombardierBullets[freeBullet].y = ny;
    bombardierBullets[freeBullet].angle = ANGLE;
    bombardierBullets[freeBullet].speed = hypo;
}

function createBullet(x, y, angle) {

    let freeBullet = getFreeBullet();
    if (freeBullet == -1) {
        //console.log("could not find a free bullet");
        return;
    }

    bullets[freeBullet].x = x + (cannon.w / 2) - 2;
    bullets[freeBullet].y = y + (cannon.h / 2) - 2;
    bullets[freeBullet].angle = degToRad(angle);
}

function createEnemy() {

    let freeEnemy = getFreeEnemy();
    if (freeEnemy == -1) {
        //console.log("could not find a free enemy");
        return;
    }

    let y = Math.random() * 50;
    let type = Math.round(Math.random() * 1);
    let x = type == 0 ? -20 : CANVAS_WIDTH + 20;

    enemies[freeEnemy].type = type;
    enemies[freeEnemy].x = x;
    enemies[freeEnemy].y = y;
}

function createBombarder() {

    if (bombardier.active == true) {
        //console.log("Bombarder is still active");
        return;
    }


    let y = Math.random() * 50;
    let type = Math.round(Math.random() * 1);
    let x = type == 0 ? -20 : CANVAS_WIDTH + 20;


    bombardier.type = type;
    bombardier.x = x;
    bombardier.y = y;
    bombardier.active = true;
}

function createAlien() {

    let freeAlien = getFreeAlien();
    if (freeAlien == -1) {
        //console.log("could not find a free alien!");
        return;
    }


    for (let i = 0; i < MAX_ENEMIES; i++) {
        if (enemies[i].active == true) {

            let x = enemies[i].x;
            let y = enemies[i].y;
            aliens[freeAlien].x = x;
            aliens[freeAlien].y = y;
            aliens[freeAlien].playSound = false;

            break;
        }
        else if (enemies[i].active == false) {
            //console.log("no available enemy to launch alien!");

            aliens[freeAlien].active = false;

            break;
        }
    }
}

function getFreeAlien() {

    var i;
    for (i = 0; i < MAX_ALIENS; i++) {
        if (aliens[i].active == false) {
            aliens[i].active = true;
            return i;
        }
    }
    return -1;

}

function getBombarderBullet() {
    var i;

    for (i = 0; i < MAX_BOMB_BULLETS; i++) {
        if (bombardierBullets[i].active == false) {
            bombardierBullets[i].active = true;
            return i;
        }
    }
    return -1;
}

function getFreeEnemy() {

    var i;

    for (i = 0; i < MAX_ENEMIES; i++) {

        if (enemies[i].active == false) {
            enemies[i].active = true;
            return i;

        }

    }

    return -1;
}

function getFreeBullet() {

    var i;

    for (i = 0; i < MAX_BULLETS; i++) {

        if (bullets[i].active == false) {
            bullets[i].active = true;
            return i;
        }
    }

    return -1;
}

function resetStars() {

    for (let i = 0; i < MAX_STARS; i++) {
        stars[i].x = Math.random() * CANVAS_WIDTH;
        stars[i].y = Math.random() * 500;
        stars[i].speed = 1 + (Math.random() * 3);
    }
}

function initStars() {
    for (let i = 0; i < MAX_STARS; i++) { stars.push(new Star()); }
}

function drawScores() {

    drawString(videoBuffer.buffer, "LEVEL:" + game.level, 10, CANVAS_HEIGHT / 2 + 20, "20");

    drawString(videoBuffer.buffer, "HI: ", 10, CANVAS_HEIGHT / 2 + 80, 20);

    drawString(videoBuffer.buffer, hiScore, 50, CANVAS_HEIGHT / 2 + 80, 20);

    drawString(videoBuffer.buffer, "SCORE: ", 10, CANVAS_HEIGHT / 2 + 50, 20);

    drawString(videoBuffer.buffer, game.score, 80, CANVAS_HEIGHT / 2 + 50, 20);
}

function drawPanel() {

    for (let i = 0; i <= game.energy; i++) {
        videoBuffer.buffer.fillStyle = game.energy >= 4 ? "green" : "red";
        videoBuffer.buffer.fillRect(350, CANVAS_HEIGHT - 49, i * 10, 10);
    }

    if (game.energy > 1) drawString(videoBuffer.buffer, "ENERGY", 350, CANVAS_HEIGHT - 20, 20);
    else fillBlinkingText(videoBuffer.buffer, "ENERGY", 350, CANVAS_HEIGHT - 20, 500, 20);
}

function fillBlinkingText(ctx, text, x, y, blinkFreq, fontSize) {
    if (~~(0.5 + Date.now() / blinkFreq) % 2) {
        drawString(ctx, text, x, y, fontSize);
    }
}

function drawString(ctx, s, x, y, size,color) {

    ctx.font = 'bold ' + size + 'px dosFont';
    ctx.fillStyle = color||"white";
    ctx.fillText(s, x, y);
}


function collision(x0, y0, w0, h0, x2, y2, w1, h1) {

    //e1X+e1W
    let x1 = x0 + w0 - 1;

    //e1Y+e1H
    let y1 = y0 + h0 - 1;

    //e2X+e2W
    let x3 = x2 + w1 - 1;

    //e2Y+e2H
    let y3 = y2 + h1 - 1;

    return !(x1 < x2 || x3 < x0 || y1 < y2 || y3 < y0);

}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function degToRad(deg) {
    return deg * Math.PI / 180;
}

function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

function resizeGame() {

    var gameArea = document.getElementById('gameArea');
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }

    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';
}

function keyDown(e) {
    
    if(game.state==IN_GAME) {
        if (e.keyCode == 37) cannon.moveKL = true;
        else if (e.keyCode == 39) cannon.moveKR = true;
    
        if (e.keyCode == 32) cannon.fire = true;
        if (e.keyCode == 80 ){
            pause = !pause;
            pauseSound.play()
        }
    }
    if (e.keyCode == 32 && game.state == GAME_OVER) game.state = INTRO; 
    if (e.keyCode == 13 && game.state == INTRO) startGame = true
}

function keyUp(e) {
    if (e.keyCode == 37) cannon.moveKL = false;
    else if (e.keyCode == 39) cannon.moveKR = false;
    if (e.keyCode == 32) cannon.fire = false;
}
