// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = -100;
    this.y = y;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    var random = (Math.random() * (1000 - 100) + 100);
    this.x = this.x + random * dt;

    if (this.x > 505) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {

    this.sprite = 'images/char-boy.png';
    this.x = 200;
    this.y = 400;
};

Player.prototype.update = function() {
        if (this.y < 20) {

            this.reset();
        }

        Player.prototype.render = function() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        };

        Player.prototype.collision = function() {

            if (this.x < Enemy.x) {
                this.reset();
            }
        };

        Player.prototype.handleInput = function(move) {
            if (move == 'left' && this.x > 0) {

                this.x -= 40;
            }

            if (move == 'right' && this.x < 400) {

                this.x += 40;
            }
            if (move == 'up' && this.y > 3) {

                this.y -= 40;

            }

            if (move == 'down' && this.y < 400) {
                this.y += 40;

            }
        };

        Player.prototype.reset = function() {

            this.x = 200;
            this.y = 400;

        };
        // Now instantiate your objects.
        // Place all enemy objects in an array called allEnemies
        // Place the player object in a variable called player

        var allEnemies = [new Enemy(180), new Enemy(130), new Enemy(80)];

        var player = new Player();

        // This listens for key presses and sends the keys to your
        // Player.handleInput() method. You don't need to modify this.
        document.addEventListener('keyup', function(e) {
            var allowedKeys = {
                37: 'left',
                38: 'up',
                39: 'right',
                40: 'down'
            };

            player.handleInput(allowedKeys[e.keyCode]);
        });
    };