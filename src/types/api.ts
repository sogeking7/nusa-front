export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ErrorResponse = {
  success: false;
  data: any;
};

export type Response<T> = SuccessResponse<T> | ErrorResponse;
