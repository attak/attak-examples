module.exports = {
  name: 'scheduled',
  schedule: [
    {
      name: 'every_2_minutes_cron',
      type: 'cron',
      value: '*/2 * * * ? *',
      processor: 'onEvent'
    },
    {
      name: 'every_minute_rate',
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