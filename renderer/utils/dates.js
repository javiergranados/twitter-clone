import moment from 'moment'

const getDifferenceByMinutes = date => moment().diff(moment(date), 'minutes')

export default getDifferenceByMinutes
