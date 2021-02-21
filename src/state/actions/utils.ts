import { Action } from "redux";

export interface WithData<T> extends Action {
  data: T;
}
export interface WithError<T> extends Action {
  error: T;
}

export const withDataAction = <T, K>(type: T, data: K): WithData<K> => ({
  type,
  data,
});
