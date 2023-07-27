// Define interface for Login Credentials
export interface FormValues {
  email: string;
  password: string;
}

// Define interface for Login Response
export interface UserType {
  data: {
    name: string;
    email_verified_at: boolean;
    is_active: boolean;
    employee_code: string;
    joining_date: string;
    birth_date: string;
    phone: string;
    profile_img: string;
    is_notification: boolean;
    language: string;
    push_notification: boolean;
    color_code: string;
    skype_id: string;
    linkedin_id: string;
    terms_status: boolean;
    theme_mode: string;
    user_status: string;
    status: string;
    probation_status: string;
    complete_probation_comment: string;
    extension_month: string;
    extension_comment: string;
    is_deleted: boolean;
    fcm_token: string;
    _id: string;
    email: string;
    role_id: {
      role_name: string;
      _id: string;
    };
    address: string;
    gender: string;
    designation_id: string;
    skills: [
      {
        _id: string;
        technology: string;
        experience: string;
      },
      {
        _id: string;
        technology: string;
        experience: string;
      }
    ];
    create_date: string;
    last_updated: string;
    __v: number;
    id: string;
    token: string;
  };
  is_error: false;
  message: string;
  status: number;
}

// Define interfaces for the item and subitem objects of Responsive Drawer
export interface DrawerItem {
  id: number;
  name: string;
  img: React.ReactNode;
  path?: string;
  subitems?: DrawerItem[];
}

export interface DrawerData {
  list: DrawerItem[];
}

// Define the type for the total notifications count response
export interface TotalNotificationsResponse {
  data: number;
}

// Define the pagination parameters interface for notifications listing
export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
}
