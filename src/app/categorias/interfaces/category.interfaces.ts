export interface categoryResponse {
    categoryid: number,
    name: string,
    description: string 
}

export interface Category {
    name: string;
    description: string;
    isactive: number;
    createdon: Date,
    createdby: string,
    modifiedon: Date,
    modifiedby: string;
  }