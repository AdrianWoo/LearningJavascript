$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    //TODO
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';
    //多画圆
    // var c;
    // for (var x = 25; x< 400; x+=50) {
    //     for (var y = 25; y < 400;y+=50) {
    //         c=Shape.Circle(x,y,20);
    //         c.fillColor =  'green';
    //     }
    // }
    //用户输入画圆
    var tool = new Tool();
    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    
    tool.onMouseDown = function (event) {
        //将X和y分别传入
        //  var c = Shape.Circle(event.point.x, event.point.y, 20);
        //将坐标点直接传入
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };


    paper.view.draw();
    console.log('main.js');
});