export class Member{
    constructor(
    public FirstName:string,
    public MiddleName:string,
    public LastName:string,
    public Title:string,
    public Agency:string,
    public Ethnicity:string,
    public Code:string,
    public Standing:string){}
}
export class Contact{
    constructor(
    public Address1:string,
    public Address2:string,
    public City:string,
    public State:string,
    public ZipCode:string,
    public Phone:string,
    public Ext:string,
    public Fax:string,
    public Email:string,
    public Website:string){}      
}