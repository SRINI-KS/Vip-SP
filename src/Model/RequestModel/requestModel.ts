import { FileHandle } from 'src/Model/file-handle.model';

export interface RequestModel {
  userId:string;
  requestTitle: string;
  category: string;
  subCategory: string;
  requestDiscription: string;

  fixedAmount: number|null;
  minAmount: number|null;
  maxAmount: number|null;
  payType: string;
  startDate: string;
  endDate: string;

  currentAddress: string;
  country: string;
  city: string;
  state: string;
  pinCode: number|null;


  images: FileHandle[];
  acceptDetails?:any;
}
