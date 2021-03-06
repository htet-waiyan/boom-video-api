// const DATABASE_ERROR = 1000;
// const SERVER_ERROR = 500;
const ERROR_CODES = {
  GENERAL_BUSINESS_ERROR: 2000,
  EXPENSE_MORE_THAN_INCOME: 2100,
}

export const success = (res, status, entity) => {
  if (entity) {
    return res.status(status || 200).json(entity);
  }
  return res.status(404).json({ message: 'Requested resource not found' });
};

export const badRequest = (res, status, customErrorMessage) => {
  if (customErrorMessage) {
    return res.status(status || 400).json(customErrorMessage);
  }
  return res.sendStatus(status || 400);
};

export const notFound = res => (entity) => {
  if (!entity) {
    return res.sendStatus(404);
  }
  return entity;
};

export const businessError = (customErrorMessage, customCode) => {
  const error = new Error(customErrorMessage);
  error.code = ERROR_CODES.GENERAL_BUSINESS_ERROR;
  error.customCode = customCode;
  throw error;
};

export const BIZ_ERROR_CODES = ERROR_CODES;
