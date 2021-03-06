// redux helpers
export const SET_USD = 'products/Pocket/SET_USD';
export const SUBSCRIBE_RATES = 'products/Converter/SUBSCRIBE_RATES';
export const EXCHANGE_CLICKED = 'products/Converter/EXCHANGE_CLICKED';
export const CANCEL_SUBSCRIPTION = 'products/Converter/CANCEL_SUBSCRIPTION';
export const UPDATE_RATES = 'products/Converter/UPDATE_RATES';
export const UPDATE_FIELD_VALUE = 'products/Converter/UPDATE_FIELD_VALUE';
export const UPDATE_FIELD_CURRENCY = 'products/Converter/UPDATE_FIELD_CURRENCY';
export const UPDATE_VALUE_FROM_INPUT =
  'products/Converter/UPDATE_VALUE_FROM_INPUT';
export const UPDATE_DIALOG_OPENED = 'products/Converter/UPDATE_DIALOG_OPENED';
export const CLEAR_STORE = 'products/Converter/CLEAR_STORE';

// other
export const currencies = [
  {
    value: 'USD',
    label: 'USD ($)'
  },
  {
    value: 'EUR',
    label: 'EUR (€)'
  },
  {
    value: 'GBP',
    label: 'GBP (£)'
  }
];

export const currencySigns = {
  USD: '$',
  EUR: '€',
  GBP: '£'
};
