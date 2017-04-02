module.exports = {
  name: 'scheduled',
  schedule: [
    {
      type: 'cron',
      value: '*/2 * * * *',
      processor: 'onEvent'
    },
    {
      type: 'rate',
      value: '1 minute',
      processor: 'onEvent'
    }
  ],
  processors: {
    onEvent: function(event, context, callback) {
      console.log("INSIDE SCHEDULED EVENT HANDLER", event)
      callback(null, {ok: true})
    }
  }
}