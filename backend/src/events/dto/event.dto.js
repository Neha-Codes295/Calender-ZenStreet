class EventDto {
    constructor(title, date, description = '', media = '') {
      this.title = title;
      this.date = date;
      this.description = description;
      this.media = media;
    }
  }
  
  module.exports = EventDto;
  