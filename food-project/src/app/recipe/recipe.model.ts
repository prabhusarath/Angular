import {Items} from '../Shared/items.model';
export class Recipes {

  public name: string;
  public desc: string;
  public imgspaths: string;
  public ingreds: Items[];

  constructor(name: string, desc: string, imgspaths: string, ingreds: Items[]) {
    this.name = name;
    this.desc = desc;
    this.imgspaths = imgspaths;
    this.ingreds = ingreds;
  }
}
