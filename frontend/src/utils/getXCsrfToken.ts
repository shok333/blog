import { headers } from 'next/headers';
import { X_CSRF_TOKEN } from '../constants/url';

export const getXCsrfToken = () => (
  headers().get(X_CSRF_TOKEN) || ''
)