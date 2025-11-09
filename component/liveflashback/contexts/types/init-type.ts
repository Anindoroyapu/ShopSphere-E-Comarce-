import { TState } from "../../types/event";

export interface IAlumniList {
  id: number;
  name: string;
  photo_url: string;
  batch: string;
  department: string;
  designation: string;
  company: string;
}
export interface IDepartmentList {
  id: number;
  label: string;
}
export interface IEventList {
  sl: number;
  title: string;
  description: string;
  start_time: number;
  end_time: number;
  photo_url: string;
  location: string;
  time_created: number;
}
export interface IInstituteList {
  id: number;
  name: string;
  logo_url: string;
  description: string;
  website: string;
  email: string;
  phone: string;
  address: string;
  institute_name: string;
  sl: number;
}

export interface IInitData {
  initId: string;
  alumniList: IAlumniList[];
  departmentList: IDepartmentList[];
  eventsList: IEventList[];
  instituteList: IInstituteList[];
}

export interface ICategoryList {
  categoryName: string;
  id: number;
  subCategory: ICategoryList[];
}

export interface ICampaignList {
  id: number;
  title: string;
  discount_percent: number;
  end_time: number;
  photo_url: string;
  start_time: number;
}

export interface IInitInfo {
  departmentList: any[];
  alumniList: IAlumniList[];
  eventList: IEventList[];
  instituteList: IInstituteList[];
  initId: string;
  data: IInitData[];
  error: boolean;
  message: string;
}

export type InitContextType = {
  initInfo: IInitInfo;
  authReloadKey: number;
  setAuthReloadKey: TState<number>;
  setInitInfo: TState<IInitInfo>;
  initLoading: boolean;
};
