import moment from 'moment'
import 'moment/locale/de'

export const diffDate = (start, end) => moment(start).diff(end, 'days') + 1
export const rangeString = (start, end) => `${moment(start).format('L')} - ${moment(end).format('L')}`
export const formatDate = date => moment(date).format('YYYY-MM-DD')
