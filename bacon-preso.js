function keyUps(keyCode) { 
  return $(document).asEventStream("keyup")
                    .filter(function(e) { 
                      return e.keyCode == keyCode 
                    }) 
}

function keyDowns(keyCode) { 
  return $(document).asEventStream("keydown")
                    .filter(function(e) { 
                      return e.keyCode == keyCode 
                    }) 
}

function keyState(keyCode, value) {
  return keyDowns(keyCode).map([value]).merge(keyUps(keyCode).map([])).toProperty([]).skipDuplicates()
}

$(function() {
  // activity: EventStream
  var activity = $(window).asEventStream('mousemove keydown')
  // timeout: EventStream
  var timeout = activity.throttle(3000)
  // active: Property Bool
  active = activity.awaiting(timeout)
})
