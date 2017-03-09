var NUM_PROCESSORS = 6
var EMIT_DELAY = 500 // ms

module.exports = {
  name: 'processor-ring',
  processor: function(name) {
    return function(event, context, callback) {
      setTimeout(function() {
        context.emit('next')
        callback()
      }, EMIT_DELAY)
    }
  },
  streams: function() {
    var streams = []

    for (var iStream=0; iStream<NUM_PROCESSORS; ++iStream) {
      streams.push({
        to: `processor${iStream}`,
        from: `processor${iStream == NUM_PROCESSORS - 1 ? 0 : iStream + 1}`
      })
    }

    return streams
  }
}