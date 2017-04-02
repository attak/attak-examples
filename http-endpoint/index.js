module.exports = {
  name: 'http-endpoint',
  api: 'endpoint',
  processors: {
    endpoint: function(event, context, callback) {
      console.log("INSIDE HTTP ENDPOINT", event)
      callback(null, {ok: true})
    }
  }
}