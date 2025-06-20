// TODO: Add all the interfaces here

/**
 * Price page values used in Price component
 */
export type PlanValue =
  | string
  | number
  | boolean
  | PlanValue[]
  | { [k: string]: PlanValue };

/**
 * Basic primitive values used throughout the Dream payloads
 */
export type Primitive = string | number | boolean;

/**
 * A recursive type for all Dream payload values.
 * - A Primitive value
 * - An array of DreamValue
 * - Or an object with string keys mapping to DreamValue
 */
export type DreamValue =
  | Primitive
  | DreamValue[]
  | { [key: string]: DreamValue };

/**
 * Structure returned by the Dream API
 */
export interface DreamData<T = DreamValue> {
  status: boolean;
  payload: T;
  message: string;
  status_code: number;
}

/**
 * Details about the user
 */
export interface UserDetails {
  name: string;
  phone: number;
  age: number;
  email: string;
}

/**
 * Value type for the Dream Context
 */
export interface DreamContextType {
  dreamData: DreamData<DreamValue> | null;
  setDreamData: React.Dispatch<
    React.SetStateAction<DreamData<DreamValue> | null>
  >;
  userDetails: UserDetails | null;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails | null>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  responseMessage: string | null;
  setResponseMessage: React.Dispatch<React.SetStateAction<string | null>>;
}
