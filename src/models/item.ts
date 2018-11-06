export class Item{
  id: number;
  category: string;
  image_url: string;
  details: string;
  price: string;
  title: string;


  constructor(id: number, category: string, image_url: string, details: string, price: string, title: string) {
    this.id = id;
    this.category = category;
    this.image_url = image_url;
    this.details = details;
    this.price = price;
    this.title = title;
  }
}
