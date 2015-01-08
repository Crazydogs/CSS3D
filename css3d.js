var css3d = {
  style: null,
  $container: null,

  setStyle: function(opt){
    this.style = opt;
    return this;
  },
  setContainer: function(opt){
    this.$container = opt;
    this.$container.css({
      'transformStyle': 'preserve-3d',
      'perspective': '500'
    });
    return this;
  },

  createPlane: function(type, position, size, content){
    if(!this.$container){
      console.log('error: use setContainer() before doing this');
    }
    var $newElement = $('<div>');
    // 将元素先定位到中点，作为坐标系的原点。
    $newElement.css({
      'position': 'absolute',
      'left': '50%',
      'top': '50%',
      'width': size.w,
      'height': size.h,
      'marginLeft': '-'+size.w/2,
      'marginTop': '-'+size.h/2
    });
    $newElement.html(content?content:'');
    if(this.style){
      $newElement.css(this.style);
    }

    var transformStr = '';
    if(type == 1){
      // 球坐标，法线过原点
      transformStr += 'rotateX('+position.x+'deg) rotateY('+position.y+'deg) rotateZ('+position.z+'deg)';
      transformStr += ' translateZ('+position.r+'px)';
      console.log(transformStr);
      $newElement.css('transform', transformStr);
      $newElement.appendTo(this.$container);
    }else if(type == 2){
      // 球坐标，法线垂直频幕
      transformStr += 'rotateX('+position.x+'deg) rotateY('+position.y+'deg) rotateZ('+position.z+'deg)';
      transformStr += ' translateZ('+position.r+'px)';
      transformStr += 'rotateZ('+(-position.z)+'deg) rotateY('+(-position.y)+'deg) rotateX('+(-position.x)+'deg)';
      $newElement.css('transform', transformStr);
      $newElement.appendTo(this.$container);
    }else if(type == 3){
      // 直角坐标
      transformStr += 'translate3d('+position.x+'px,'+position.y+'px,'+position.z+'px)';
      transformStr += 'rotateX('+position.rx+'deg) rotateY('+position.ry+'deg) rotateZ('+position.rz+'deg)';
      $newElement.css('transform', transformStr);
      $newElement.appendTo(this.$container);
    }
    return $newElement;
  }

}
