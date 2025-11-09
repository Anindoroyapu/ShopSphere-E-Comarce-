import { TState } from "../../types/event";

export interface IAuthInfo {
  sl: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  token: string;
  login_password: string;
  institute_sl: string | number;
  department_sl: string | number;
  type: string;
  profile_image: any;
  passing_year: string;
  primary_email: string;
  primary_phone: string;
}

export interface AuthContextType {
  isAuthorized: boolean;
  sendOtp: () => Promise<void>;
  authInfo: IAuthInfo;
  authStateLoading: boolean;
  setAuthStateLoading: TState<boolean>;
  setAuthInfo: TState<IAuthInfo>;
  formData: {
    phone: string;
    otp: string;
    remember_me: boolean;
    password: string;
  };
  setFormData: TState<{ phone: string; otp: string }> | any;
  confirmOtp: () => Promise<void>;
  handleFormChange: (e: any) => void;
  handleLogOut: () => void;
}
