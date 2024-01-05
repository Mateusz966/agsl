import {ERROR_MESSAGES, ErrorCode} from '../../../api/const';

export const getSnackbarErrorMessage = (statusCode?: ErrorCode) =>
  statusCode ? ERROR_MESSAGES[statusCode] : ERROR_MESSAGES[500];
