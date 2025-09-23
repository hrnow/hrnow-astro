interface ImportMetaEnv {
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_SECURE?: string;
  SMTP_USER?: string;
  SMTP_PASS?: string;
  CONTACT_FROM?: string;
  CONTACT_TO?: string;
  MONGODB_URI?: string;
}

interface ImportMeta {
  env: ImportMetaEnv;
}
