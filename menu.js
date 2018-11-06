var MENU = {

preload: function() {
 game.load.image('Menu', 'assets/spaceshooter.jpg');
  		game.load.image('lvl1', 'assets/level1.png');
  		game.load.image('lvl2', 'assets/level2.png');
},

create: function() {

      game.scale.pageAlignHorizontally = true;
  		game.scale.pageAlignVertically = true;
  		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
  		game.physics.startSystem(Phaser.Physics.ARCADE);

      		var s = game.add.sprite(-75, 0, 'Menu');


      		var btn1 = game.add.button(250 , 240, "lvl1", function(){
      			game.state.start('stage1');
      		});
      		btn1.anchor.set(0.5, 0.5);

      	  var btn2 = game.add.button(250, 275, "lvl2", function(){
      			game.state.start('stage1');
      		});
      		btn2.anchor.set(0.5, 0.5);
        }

}
