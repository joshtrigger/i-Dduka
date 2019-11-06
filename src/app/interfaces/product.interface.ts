interface postedBy {
  username: String;
  userId: String;
}

export interface Product {
  _id: String;
  name: String;
  price: Number;
  category: String;
  description: String;
  imagePath: String;
  cloudinaryId: String;
  postedBy: {
    [key: string]: postedBy;
  };
  __v: Number;
}
