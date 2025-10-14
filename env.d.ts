declare module '@env' {
  export const API_URL: string;
  export const ENV_NAME: 'DEV' | 'STAGING' | 'PRODUCTION' | string;
  export const FEATURE_FLAG_SAMPLE: string | boolean;
}
