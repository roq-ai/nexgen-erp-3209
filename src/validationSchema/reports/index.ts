import * as yup from 'yup';

export const reportValidationSchema = yup.object().shape({
  total_sales: yup.number().integer().required(),
  total_profit: yup.number().integer().required(),
  business_id: yup.string().nullable().required(),
});
