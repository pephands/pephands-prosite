export class FoundationEvent {
  title: string = '';
  event_date: string = '';
  from_time: string = '';
  to_time: string = '';
  venue: string = '';
  upcoming_images: string[] = [];
  recent_images: string[] = [];
  google_map: string = '';
  event_type: string = '';
  upcoming_story: string = '';
  recent_story: string = '';
  url_desc: string = '';
  redirect_url: string = '';

  deserialize(input: any) {
    this.title = input.title;
    this.event_date = input.event_date;
    this.from_time = input.from_time;
    this.to_time = input.to_time;
    this.venue = input.venue;
    this.upcoming_images = input.upcoming_images;
    this.recent_images = input.recent_images;
    this.google_map = input.google_map;
    this.event_type = input.event_type;
    this.upcoming_story = input.upcoming_story;
    this.recent_story = input.recent_story;
    this.url_desc = input.url_desc;
    this.redirect_url = input.redirect_url;

    return this;
  }
}
