export class Recipes {
  public name: string;
  public desc: string;
  public ImgPath: string;
  constructor(name: string, desc: string, Imgpath: string) {
    this.name = name;
    this.desc = desc;
    this.ImgPath = Imgpath;
  }
}
