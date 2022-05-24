export interface request{
    id:number;
    purpose:string;
    description:string;
    Approver:string;
    Estimated:Number;
    Advance:Number;
    date:string;
    Employee:string,
    Approved:boolean,
    Reject:boolean,
    // constructor(id:number,purpose:string,description:string,Approver:string,Estimated:Number,Advance:Number,date:string)
    // {
    //     this.id=id;
    //     this.purpose=purpose;
    //     this.description=description;
    //     this.Approver=Approver;
    //     this.Estimated=Estimated;
    //     this.Advance=Advance;
    //     this.date=date;
    // }
}
export interface comment{
    describe:string,
      id:number
}