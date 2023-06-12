import { FileHandle } from 'src/Model/file-handle.model';

export interface RequestModel {
  requestTitle: string;
  category: string;
  subCategory: string;
  requestDiscription: string;

  fixedAmount: number;
  minAmount: number;
  maxAmount: number;
  payType: string;
  startDate: string;
  endDate: string;

  currentAddress: string;
  country: string;
  city: string;
  state: string;
  pinCode: number;

  images: FileHandle[];
}
