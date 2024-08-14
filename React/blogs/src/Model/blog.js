import { v4 as uuidv4 } from 'uuid'
export class Blog {
    constructor(title = String, authorname = String, datepublished = Date,FeaturedImage = String , content = String , Categories = [] )
    {
        this.id = uuidv4();
        this.title = title;
        this.authorname = authorname;
        this.datepublished = datepublished;
        this.FeaturedImage = FeaturedImage ;
        this.content = content ;
        this.Categories = Categories ;

      
    }
  }