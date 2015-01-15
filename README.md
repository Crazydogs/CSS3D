##CSS3 3D 效果

最近研究了一下 css3 的 3d 效果，记录一下成果。  
主要包括原理和一个小的试验型库（css3d.js），可以简单地根据直角坐标或求坐标来生成利用 css3 定位的元素。

###使用方法

1. 引用 css3d.js 文件。  
2. 调用 css3d.setContainer() 方法。参数为 jquery 元素对象。  
3. 如果需要为创建的元素增加样式，调用 css3d.setStyle() 方法，参数为 css 规则对象。如：  

        {
            'color': '#fff',
            'font-size': '12px'
        }

4. 调用 css3d.createPlane() 方法生成经过变换的元素。具体参数如下：  

type: 变换类型，整数。  
值为1时 使用球坐标，生成元素中心法线过坐标原点。  
值为2时 使用球坐标，生成元素法线垂直于屏幕（即平面正对屏幕）。  
值为3时 使用直角坐标

position: 生成元素空间位置，json 对象，根据 type 不同有不同表现。  
当使用的是球坐标的时候，json 值应该如下

    {
        x: 50,      // x 轴旋转角度，单位为 deg
        y: 90,      // y 轴旋转角度，单位为 deg
        z: 0,       // z 轴旋转角度，单位为 deg
        r: 200      // r 元素距离中心点距离，单位为 px
    }

当使用的是直角坐标的时候，json 值应该如下

    {
    }
