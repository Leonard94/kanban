import dayjs from 'dayjs'

class Time {
  getCurrentDate() {
    return dayjs(new Date())
  }

  getCurrentDateAsTimestamp() {
    return dayjs(this.getCurrentDate()).unix()
  }

  getFormattedDateFromTimestamp(timestamp: number) {
    return dayjs(timestamp * 1000).format('DD.MM в HH:mm')
  }
}

export default new Time()
