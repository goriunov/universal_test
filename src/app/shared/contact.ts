export class contact{
  constructor(
    public body: string,
    public from_email: string,
    public to_email?: string,
    public subject?:string,
  ){}
}
