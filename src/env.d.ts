interface ImportMetaEnv {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
  MONGODB_URI?: string;
  PUBLIC_GTM_ID?: string;
  PUBLIC_API_BASE_URL?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
