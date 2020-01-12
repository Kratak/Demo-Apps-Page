import { AxiosError } from 'axios';
import { RequestState } from '../interfaces/requestState';

export interface InitialRequestState {
  requestState: RequestState;
  error: AxiosError | null;
}

export const initialRequestState: InitialRequestState = {
  requestState: RequestState.Waiting,
  error: null,
};
