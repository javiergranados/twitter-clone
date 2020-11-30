import moment from 'moment'

const getDifference = date => {
  const now = moment()

  let unit = 's'
  let diff = now.diff(moment(date), 'seconds')

  if (diff > 60) {
    unit = 'min'
    diff = now.diff(moment(date), 'minutes')
    if (diff > 60) {
      unit = 'h'
      diff = now.diff(moment(date), 'hours')
    }
  }
  return `${Math.round(diff)} ${unit}`
}

export default getDifference
