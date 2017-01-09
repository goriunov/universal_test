var interval;
(function($, undefined) {
    $.fn.CircularSlider = function(options) {

      var slider = this;

      if (slider.find('div.jcs-panel').length !== 0) {
          $("#slider").empty();
      };

      var valueFromTime;
      var realTime;
      var isNight = false;
      var getInitialTime = function(){
          realTime = TimeZoneConverter();

          var hours = realTime.getUTCHours();

          var a = 1;
          for(var i = 0; i < 12; i++){
            if (hours == 12+i || hours == i) {
              valueFromTime = a;
            }
            a+=6;
          }

          if(hours >= 18 && hours <= 23 || hours >= 0 && hours < 6 ){
            isNight = true;
            jcsIndicator2.hide();
            jcsIndicator.addClass("add-color");
          }else{
            isNight = false;
          }

          var minutes = realTime.getUTCMinutes() + '';
          var minutesUse = parseInt(minutes[0]);
          if(minutes.length > 1) {
              valueFromTime += minutesUse;
          }
          if(valueFromTime > 72){
            valueFromTime=1;
          }

          return valueFromTime;
      };

      var TimeZoneConverter = function(){
        var nd = new Date(new Date().getTime() + settings.locationOffset);
        return nd;
      };

      var dataArray = [];
      var createUVArrayWithColors = function(){
        var wheelStyle = '';
        if(isNight) {
          for (var i = 30; i < 36; i++) {
            dataArray.push(settings.forecastArray[i]);
          }
          for (var i = 24; i <= 30; i++) {
            dataArray.push(settings.forecastArray[i]);
          }
        }else{
          for (var i = 6; i < 12; i++) {
            dataArray.push(settings.forecastArray[i]);
          }
          for (var i = 0; i <= 6; i++) {
            dataArray.push(settings.forecastArray[i]);
          }
        }

        for(var i = 0; i < dataArray.length ; i++) {
          if (dataArray[i] >= 0.0 && dataArray[i] < 0.5) {
            wheelStyle = wheelStyle + '#4BB8A3,';
          }
          if (dataArray[i] >= 0.5 && dataArray[i] < 3.0) {
            wheelStyle = wheelStyle + '#86B37C,';
          }
          if (dataArray[i] >= 3.0 && dataArray[i] < 6.0) {
            wheelStyle = wheelStyle+ ' #FDAA2D,';
          }
          if (dataArray[i] >=  6.0  && dataArray[i] < 8.0) {
            wheelStyle = wheelStyle+ ' #FD7C34,';
          }
          if (dataArray[i] >=  8.0  && dataArray[i] < 11.0) {
            wheelStyle = wheelStyle + '#DC5535,';
          }
          if (dataArray[i] >=  11.0) {
            wheelStyle = wheelStyle + '#8C375D,';
          }
        }
        if(isNight){
          dataArray.push(settings.forecastArray[36]);
        }else {
          dataArray.push(settings.forecastArray[12]);
        }
        settings.uvIndex = dataArray;

        var gradient = new ConicGradient({
          stops: wheelStyle,
          repeating: true
        });

        $(".jcs").addClass("background");
        $(".background").css({
          background: 'url(' + gradient.png + ')',
          'background-image': 'url(' + gradient.png + ')'
        });
      };

      var drawIndicatorBall = function(jcsComponents, radius) {
          if(jcsComponents.jcsIndicator.width() && jcsComponents.jcsIndicator.height())
              return;

          jcsComponents.jcsIndicator.css({
              'width': (radius / 3) + "px",
              'height': (radius / 3) + "px"
          });
          jcsComponents.jcsIndicator2.css({
              'width':  "15px",
              'height': (radius / 2.8) + "px"
          });
      };

      var shapes = {
          "Circle": {
              drawShape: function(jcsComponents, radius) {
                  var d = radius * 2;
                  var rpx = d + "px";
                  var jcs = jcsComponents.jcs;
                  var jcsValue = jcsComponents.jcsValue;
                  var jcsPanel = jcsComponents.jcsPanel;
                  settings.value = getInitialTime();

                  jcs.css({
                      'width': rpx,
                      'height': rpx,
                      'border-radius': rpx
                  });

                  var pd = d + (radius / 10);

                  jcsPanel.css({
                      'border-width': (radius / 10) + 'px',
                      'border-radius': pd + 'px',
                  });

                  var outerArea = (jcs.outerWidth() - jcs.innerWidth()) + (jcsValue.outerWidth() - jcsValue.innerWidth());
                  var iRadius = settings.innerCircleRatio * radius;
                  var corner = radius - iRadius - outerArea / 2;
                  jcsValue.css({
                      'width': (iRadius * 2) + "px",
                      'height': (iRadius * 2) + "px",
                      'font-size': iRadius / 5 + "px",
                      'top': corner + "px",
                      'left': corner + "px"
                  });
              },
              getCenter: function(jcsPosition, jcsRadius) {
                  return {
                      x: jcsPosition.left + jcsRadius ,
                      y: jcsPosition.top + jcsRadius ,
                      r: jcsRadius
                  };
              },
              deg2Val: function(deg) {
                  if (deg < 0 || deg > 359)
                      throw "Invalid angle " + deg;
                  deg = (deg + 90) % 360;

                  return Math.floor(deg * (range/360.0)) + settings.min;
              },
              val2Deg: function(value) {

                  if (value < settings.min || value > settings.max)
                      throw "Invalid range " + value;

                  var nth = value - settings.min;

                  return (Math.floor(nth * (360.0 / range)) - 90) % 360;
              }
          }
      };

        var defaults = {
            radius: 75,
            innerCircleRatio: '0.5',
            handleDist : 100,
            min: 0,
            max: 359,
            value: 56,
            clockwise: true,
            labelSuffix: "",
            labelPrefix: "",
            shape: "Circle",
            touch: true,
            animate: true,
            animateDuration : 360,
            selectable: false,
            slide: function(ui, value) {},
            onSlideEnd: function(ui, value) {},
            uvIndex:[],
            locationOffset: 1,
            forecastArray: [],
            formLabel: undefined
        };

        var settings = $.extend({}, defaults, options);
        var validateSettings = function() {
            if ((settings.min | 0) !== settings.min) throw "Invalid min value : " + settings.min;
            if ((settings.max | 0) !== settings.max) throw "Invalid max value : " + settings.max;
            if ((settings.value | 0) !== settings.value) throw "Invalid initial value : " + settings.value;
            if (settings.max < settings.min) throw "Invalid range : " + settings.max + "<" + settings.min;

            if (settings.value < settings.min) settings.value = settings.min;
            if (settings.value > settings.max) settings.value = settings.max;

            if (!settings.labelSuffix) settings.labelSuffix = defaults.labelSuffix;
            if (!settings.labelPrefix) settings.labelPrefix = defaults.labelPrefix;
            if (settings.formLabel && !$.isFunction(settings.formLabel)) settings.formLabel = defaults.formLabel;

            if (!settings.shape) settings.shape = defaults.shape;
            if (!shapes[settings.shape]) throw "Invalid shape : " + settings.shape;

            if (!settings.innerCircleRatio || settings.innerCircleRatio < 0.1 || settings.innerCircleRatio > 0.9)
                throw "Invalid innerCircleRatio. Expected: between 0.1 and 0.9, Found: " + settings.innerCircleRatio;

            if ((settings.animateDuration | 0) !== settings.animateDuration ||
                settings.animateDuration < 0)
                throw "Invalid animate duration(in ms) : " + settings.animateDuration;

            if (((settings.handleDist | 0) !== settings.handleDist) || settings.handleDist <= 0 || settings.handleDist > 100)
                settings.handleDist = defaults.handleDist;

            settings.animate = !!settings.animate;
        };
        validateSettings();

        var range = settings.max - settings.min + 1;
        var jcsPanel = $('<div class="jcs-panel"><div class="jcs"><div class="background"></div><div class="time-image"></div><span class="jcs-value"><span id="val"></span></span></div><div class="jcs-indicator"></div><div class="jcs-indicator-current"> </div></div>');
        jcsPanel.appendTo(slider);
        var radius = Math.abs(parseInt(settings.radius)) || defaults.radius;
        var jcs = jcsPanel.find('div.jcs');
        var jcsIndicator = jcsPanel.find('div.jcs-indicator');
        var jcsIndicator2 = jcsPanel.find('div.jcs-indicator-current');
        var jcsValue = jcsPanel.find('span.jcs-value');

        var jcsComponents = {
            'jcs': jcs,
            'jcsPanel': jcsPanel,
            'jcsIndicator': jcsIndicator,
            'jcsIndicator2':jcsIndicator2,
            'jcsValue': jcsValue
        };

        shapes[settings.shape].drawShape(jcsComponents, radius);
        drawIndicatorBall(jcsComponents, radius);

        createUVArrayWithColors();

        var jcsPosition = jcs.position() ;
        var jcsOuterArea = jcs.outerWidth() - jcs.innerWidth();
        var jcsBallOuterArea = jcsIndicator.outerWidth() - jcsIndicator.innerWidth();

        var jcsRadius = (jcs.width() + jcsOuterArea) / 2 ;
        var jcsBallRadius = (jcsIndicator.width() + jcsBallOuterArea) / 2;
        var jcsCenter = shapes[settings.shape].getCenter(jcsPosition, jcsRadius );

        // event binding
        var mouseDown = false;
        var onAnimate = false;


        var translate = function(e) {
            var cursor = {
                x: e.offsetX || e.originalEvent.layerX,
                y: e.offsetY || e.originalEvent.layerY
            };

            var dx = cursor.x - jcsCenter.x;
            var dy = cursor.y - jcsCenter.y;

            var rad = Math.atan2(dy, dx);
            var deg = rad * 180.0 / Math.PI;
            var d360 = (parseInt(deg < 0 ? 360.0 + deg : deg)) % 360;

            var sd360 = (shapes[settings.shape].val2Deg(settings.value) + 360) % 360;

            if(sd360 === d360) return;

            var distance = Math.min((d360 + 360 - sd360) % 360, (sd360 + 360 - d360) % 360);
            if(!distance) distance = 180;

            var clockwise = ((d360 + 360 - sd360) % 360) === distance;
            var r = settings.animateDuration / distance;
            var delay = 4;
            var unitDeg = 1;

            if(r >= 4) {
                delay = parseInt(r);
            } else if (r >= 1){
                unitDeg = parseInt(r) * 4;
            } else {
                unitDeg = (4 / r);
            }

            var next = sd360;
            var count = parseInt(distance / unitDeg);
            onAnimate = true;
            var animate = function() {
                next = next + (clockwise ? unitDeg : -unitDeg);
                next = (next + 360) % 360;

                if(--count <= 0) {
                    clearInterval(timer);
                    onAnimate = false;
                    next = d360;
                }
                setValue(shapes[settings.shape].deg2Val(next));
                if(!onAnimate) onSlideEnd();
            };
            var timer = window.setInterval(animate, delay);
        };

      var setInnerOnLoad = function(val){
        $('#val').html(buildLabel(val));
        jcsIndicator.addClass( "add-color" );
        jcsIndicator2.removeClass('add-border');

        var diff = nonDragSliderDeg - dragSliderDeg ;
        if(diff < 0){
          diff = diff*-1;
        }
        if(diff >= 0&& diff <= 15 || diff >= 345 && diff <= 360){
          if(!isNight) {
            $('#val').html("<br><small id='liveUv' style='color:green'>Current Time</small>");
            if(!mouseDown) {
              jcsIndicator.removeClass("add-color");
              jcsIndicator2.addClass('add-border');
              var newPosition = countPosition(false ,initialValue);
              jcsIndicator.css({
                'top':newPosition.y + "px",
                'left':newPosition.x + "px"
              });
            }
          }
        }
        changeFlames(val);
      };

      var changeFlames = function(val){
        var a = 0;
        var increment = settings.max/12;
        for(var i = settings.min; i < settings.max ; i+=increment) {
          if (val >= i && val < i+increment) {
            var countExactValue = settings.uvIndex[a]+((settings.uvIndex[a+1]-settings.uvIndex[a])/6*(val-i));
            if(i >=71){
              countExactValue = settings.uvIndex[a]+((settings.uvIndex[0]-settings.uvIndex[a])/6*(val-i));
            }
            if(countExactValue < 0){
              countExactValue = settings.uvIndex[a+1];
              if(i >=71){
                countExactValue = settings.uvIndex[0];
              }
            }
            if(val > 31 && val < 37){
              countExactValue = settings.uvIndex[a]+((settings.uvIndex[13]-settings.uvIndex[a])/6*(val-i));
            }
            if (countExactValue >= 0.0 && countExactValue < 0.5) {
              $('#none').show();
              $('#low').hide();
              $('#moderate').hide();
              $('#high').hide();
              $('#veryhigh').hide();
              $('#extreme').hide();
              $('#image-in-text').html("No UV");
            }
            if (countExactValue >= 0.5 && countExactValue < 3.0) {
              $('#low').show();
              $('#none').hide();
              $('#moderate').hide();
              $('#high').hide();
              $('#veryhigh').hide();
              $('#extreme').hide();
              $('#image-in-text').html("Low UV");
            }
            if (countExactValue >= 3.0 && countExactValue < 6.0) {
              $('#moderate').show();
              $('#none').hide();
              $('#low').hide();
              $('#high').hide();
              $('#veryhigh').hide();
              $('#extreme').hide();
              $('#image-in-text').html("Moderate UV");
            }
            if (countExactValue >= 6.0 && countExactValue < 8.0) {
              $('#none').hide();
              $('#low').hide();
              $('#moderate').hide();
              $('#high').show();
              $('#veryhigh').hide();
              $('#extreme').hide();
              $('#image-in-text').html("High UV");
            }
            if (countExactValue >= 8.0 && countExactValue < 11.0) {
              $('#veryhigh').show();
              $('#none').hide();
              $('#low').hide();
              $('#moderate').hide();
              $('#high').hide();
              $('#extreme').hide();
              $('#image-in-text').html("Very High UV");
            }
            if (countExactValue >= 11.0) {
              $('#extreme').show();
              $('#none').hide();
              $('#low').hide();
              $('#moderate').hide();
              $('#high').hide();
              $('#veryhigh').hide();
              $('#image-in-text').html("Extreme UV");
            }
          }
          a+=1;
        }
      };

      var dragSliderDeg;
      var mousemoveHanlder = function(e) {
          e.stopPropagation();
          if (!mouseDown || onAnimate) return;

          var cursor = {
              x: e.offsetX || e.originalEvent.layerX,
              y: e.offsetY || e.originalEvent.layerY
          };

          var dx = cursor.x - jcsCenter.x;
          var dy = cursor.y - jcsCenter.y;

          var rad = Math.atan2(dy, dx);
          var deg = rad * 180.0 / Math.PI;

          var d360 = (parseInt(deg < 0 ? 360.0 + deg : deg)) % 360;

          // change coordinate
          var x = jcsCenter.x + ((jcsCenter.r*settings.handleDist)/100) * Math.cos(rad) - jcsBallRadius;
          var y = jcsCenter.y + ((jcsCenter.r*settings.handleDist)/100) * Math.sin(rad) - jcsBallRadius;
          console.log(x);
          console.log(y);
          if(deg < 0){
              dragSliderDeg = 360 + deg;
          }else{
              dragSliderDeg = deg;
          }

          jcsIndicator.css({
              'top': y + "px",
              'left': x + "px"
          });

          var d2v = shapes[settings.shape].deg2Val(d360);
          var val = settings.clockwise ? d2v : (settings.max - d2v);
          if (val < settings.min) val = settings.min;
          else if (val > settings.max) val = settings.max;

          setInnerOnLoad(val);

          if (settings.slide && $.isFunction(settings.slide)) settings.slide(slider, val);
      };

      var ValInTimeConverter = function(val){
        var convertTime;
        var timing = settings.max;
        var increment = settings.max/12;
        var a = 12;
        for(var i = settings.min; i < timing; i+= increment) {
          if (val >= i && val < i+increment) {
            var minutes = val - i + '';
            minutes = minutes + "0";
            if(a >= 6 && a < 12){
              convertTime = a + ":" + minutes + ' am';
            }else {
              convertTime = a + ":" + minutes + ' pm';
            }
          }
          if(a == 12){
            a = 1;
          }else{
            a++;
          }
        }
        return convertTime;
      };

      var isSet = false;
      var buildLabel = function(value) {
          settings.value = value;
          value = ValInTimeConverter (value);
          if(!isSet){
              jcsValue.html(jcsValue.html() + settings.labelSuffix);
              isSet = true;
          }
          return settings.formLabel ? settings.formLabel(value) : settings.labelPrefix + value;
      };

      var secondTimeCircleSet = false;
      var initialValue;

      var setValue = function(value) {

          if (((value | 0) !== value)) throw "Invalid input (expected integer) : " + value;
          var val = settings.clockwise ? value : (settings.max - value);
          var d360 = shapes[settings.shape].val2Deg(val);
          if(d360 < 0){
              dragSliderDeg =360+d360;
          }else {
              dragSliderDeg = d360;
          }

          var rad = d360 * Math.PI / 180;

          var x = jcsCenter.x + ((jcsCenter.r*settings.handleDist)/100) * Math.cos(rad) - jcsBallRadius;
          var y = jcsCenter.y + ((jcsCenter.r*settings.handleDist)/100) * Math.sin(rad) - jcsBallRadius;

          jcsIndicator.css('top', y + "px");
          jcsIndicator.css('left', x + "px");

          if(!secondTimeCircleSet) {
              jcsIndicator2.css('top', y + "px");
              jcsIndicator2.css('left', x + "px");
              initialValue = value;
              secondTimeCircleSet = true;
              currentTimeInterval();
          }
          setInnerOnLoad(value);
          if (settings.slide && $.isFunction(settings.slide)) settings.slide(slider, val);
      };

      var rotate = 0;
      var currentTimeInterval = function(){
          if(this.interval){
              clearInterval(this.interval);
          }
          rotate = (shapes[settings.shape].val2Deg(initialValue)-95);
          jcsIndicator2.css({
              'transform': 'rotate('+rotate+'deg)'
          });
          reuseFunctionTimeoutInterval();
          memoryValue = getInitialTime();
          this.interval = setInterval(function(){
              timeValue = getInitialTime();
              if(timeValue != memoryValue){
                  reuseFunctionTimeoutInterval();
              }
              memoryValue = timeValue;
          }, 15000);
      };

      var reuseFunctionTimeoutInterval = function(){
          if(initialValue > settings.max){
              initialValue = settings.min;
          }
          var position = countPosition( true ,initialValue);
          rotate = rotate + 5;
          jcsIndicator2.css({
              'transform': 'rotate('+rotate+'deg)'
          });
          var diff = nonDragSliderDeg - dragSliderDeg ;
          if(diff < 0){
            diff = diff*-1;
          }
          if(diff >= 0&& diff <= 15 || diff >= 345 && diff <= 360){
              var sliderPosition = countPosition(false ,initialValue);

              jcsIndicator.css({
                  'top':sliderPosition.y + "px",
                  'left':sliderPosition.x + "px"
              });
              dragSliderDeg += 5;
              if(dragSliderDeg > 360){
                  dragSliderDeg = 0;
              }

              setInnerOnLoad(initialValue);
              changeFlames(initialValue);
          }
          jcsIndicator2.css('top', position.y + "px");
          jcsIndicator2.css('left', position.x + "px");
          initialValue += 1;
          if(initialValue > 72){
              initialValue = 1;
          }
      };

      var nonDragSliderDeg;
      var countPosition  = function(staticPos , initialValue){
          var val = settings.clockwise ? initialValue : (settings.max - initialValue);

          var d360 = shapes[settings.shape].val2Deg(val);
          if(d360 < 0){
              nonDragSliderDeg = 360 + d360
          }else {
              nonDragSliderDeg = d360;
          }

          var rad = d360 * Math.PI / 180;
          if(staticPos) {
              var x = jcsCenter.x + ((jcsCenter.r * settings.handleDist) / 100) * Math.cos(rad) - jcsBallRadius + (settings.radius / 7.9);
              var y = jcsCenter.y + ((jcsCenter.r * settings.handleDist) / 100) * Math.sin(rad) - jcsBallRadius - (settings.radius / 65.5);
          }else{
              var x = jcsCenter.x + ((jcsCenter.r*settings.handleDist)/100) * Math.cos(rad) - jcsBallRadius;
              var y = jcsCenter.y + ((jcsCenter.r*settings.handleDist)/100) * Math.sin(rad) - jcsBallRadius;
          }
          return {x: x , y:y}
      };

//MOUSE MOVMENTS AND CLICKS;
      jcs.on('mousedown', function(e) {
        mouseDown = true;
        jcsIndicator.addClass( "add-color" );
        e.stopPropagation();
      });

      jcs.on('mouseup mouseleave', function(e) {
        mouseDown = false;
        var diff = nonDragSliderDeg - dragSliderDeg ;
        if(diff < 0){
          diff = diff*-1;
        }
        if(diff >= 0&& diff <= 15 || diff >= 345 && diff <= 360){
          if(!isNight) {
            jcsIndicator.removeClass("add-color");
            jcsIndicator2.addClass('add-border');
            var newPosition = countPosition(false, initialValue);
            jcsIndicator.css({
              'top': newPosition.y + "px",
              'left': newPosition.x + "px"
            });
          }
        }
        e.stopPropagation();
      });
      jcs.on('mousemove', mousemoveHanlder);

      jcs.on('click', function(e) {

        e.stopPropagation();
        var cursor = {
          x: e.offsetX || e.originalEvent.layerX,
          y: e.offsetY || e.originalEvent.layerY
        };

        var dx = cursor.x - jcsCenter.x;
        var dy = cursor.y - jcsCenter.y;

        var distance = Math.sqrt(dx * dx + dy * dy);
        if (radius/1.75 - distance <= jcsOuterArea || distance > radius/1.75) {
          if(settings.animate) {
            translate(e);
          } else {
            mouseDown = true;
            mousemoveHanlder(e);
            onSlideEnd();
          }
        } else  onSlideEnd();
        mouseDown = false;
      });

      jcsPanel.on('mouseup mousemove mousedown mouseleave', function(e) {
        jcs.trigger(e);
      });

//DO NOT TOUCH ANYTHING FARTHER !!!!!!!
//DO NOT TOUCH ANYTHING FARTHER !!!!!!!
//DO NOT TOUCH ANYTHING FARTHER !!!!!!!
//DO NOT TOUCH ANYTHING FARTHER !!!!!!!
      var redraw = function() {
        shapes[settings.shape].drawShape(jcsComponents, radius);
        jcsComponents.jcsIndicator.css({
          'width': (radius / 3) + "px",
          'height': (radius / 3) + "px"
        });
        jcsComponents.jcsIndicator2.css({
          'width':  "15px",
          'height': (radius / 2.8) + "px"
        });

        // Re-calculate variables based on new radius
        jcsPosition = jcs.position();
        jcsOuterArea = jcs.outerWidth() - jcs.innerWidth();
        jcsBallOuterArea = jcsIndicator.outerWidth() - jcsIndicator.innerWidth();

        jcsRadius = (jcs.width() + jcsOuterArea) / 2;
        jcsBallRadius = (jcsIndicator.width() + jcsBallOuterArea) / 2;
        jcsCenter = shapes[settings.shape].getCenter(jcsPosition, jcsRadius);

        setValue(settings.value || settings.min);
      };


      var onSlideEnd = function() {
            if (settings.onSlideEnd && $.isFunction(settings.onSlideEnd))
                settings.onSlideEnd(slider, settings.value);
        };

        var getValue = function() {
            return settings.value;
        };

        var getAnimate = function() {
            return settings.animate;
        };

        var setAnimate = function(animate) {
            settings.animate = !!animate;
        };

        var getAnimateDuration = function() {
            return settings.animateDuration;
        };

        var setAnimateDuration = function(duration) {
            if ((duration | 0) !== duration ||
                duration < 0)
                throw "Invalid animate duration(in ms) : " + duration;

            settings.animateDuration = duration;
        };

        var setRadius = function(newRadius) {
            if (isNaN(newRadius)) throw "Invalid Radius value: " + newRadius;
            settings.radius = Math.abs(parseInt(newRadius));
            radius = settings.radius;
            //re-draw circles
            redraw();
        };

        var getRadius = function() {
            return settings.radius;
        };

        var getSupportedShapes = function() {
            return Object.keys();
        };

        var setRange = function(min, max) {
            if ((min | 0) !== min) throw "Invalid min value : " + min;
            if ((max | 0) !== max) throw "Invalid max value : " + max;
            if (max < min) throw "Min range should be less than max";

            settings.min = min;
            settings.max = max;
            range = settings.max - settings.min + 1;

            var value = settings.value;
            if(value < min || value > max)  value = min;
            setValue(value);
        };

        var lastTouchType = '';
        var touchHandler = function(e) {
            var touches = e.changedTouches;

            // Ignore multi-touch
            if (touches.length > 1) return;

            var touch = touches[0];
            var target = $(touch.target);


            if(!target.hasClass('jcs') && !target.hasClass('time-image')) return;

            var offset = target.offset();
            var width = target.width();
            var height = target.height();


            var clientX = touch.clientX;
            var clientY = touch.clientY;

            // if( clientX < offset.left || clientX > width + offset.left ||
            //     clientY < offset.top  || clientY > height + offset.top)
            //     return;

            var events = ["touchstart", "touchmove", "touchend", "touchcancel"];
            var mouseEvents = ["mousedown", "mousemove", "mouseup", "mouseleave"];
            var ev = events.indexOf(e.type);

            if (ev === -1) return;

            var type = mouseEvents[ev];
            if (e.type === events[2] && lastTouchType === events[0]) {
                type = "click";
            }

            var simulatedEvent = document.createEvent("MouseEvent");
            e.preventDefault();
            simulatedEvent.initMouseEvent(type, true, true, window, 1,
                touch.screenX, touch.screenY,
                touch.clientX, touch.clientY, false,
                false, false, false, 0, null);
            touch.target.dispatchEvent(simulatedEvent);

            lastTouchType = e.type;
        };

        // bind touch events to mouse events
        if (settings.touch) {
            document.addEventListener("touchstart", touchHandler, true);
            document.addEventListener("touchmove", touchHandler, true);
            document.addEventListener("touchend", touchHandler, true);
            document.addEventListener("touchcancel", touchHandler, true);
        }

        if (!settings.selectable) jcsPanel.addClass('noselect');
        // default position
        setValue(settings.value || settings.min);
        return $.extend({}, this, {
            "setValue": setValue,
            "getValue": getValue,
            "getSupportedShapes": getSupportedShapes,
            "setRadius": setRadius,
            "getRadius": getRadius,
            "setRange": setRange,
            "getAnimateDuration": getAnimateDuration,
            "setAnimateDuration": setAnimateDuration,
            "setAnimate": setAnimate,
            "getAnimate": getAnimate
        });
    };
}(jQuery));
