module.exports = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',

  ACCOUNT_TYPES: {
    STUDENT: 'Student',
    MENTOR: 'Mentor',
    ADMIN: 'Admin',
  },

  GENDER: {
    FEMALE: 'female',
    MALE: 'male',
  },

  REGEX_PATTERNS: {
    ALT_SCHOOL_ID: new RegExp('^ALT/SO[EPD]/02[2-9]/[0-9]{0,4}$', 'i'),
    PASSWORD: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'),
  },

  RESPONSE_MESSAGE: {
    SUCCESS: 'Request Successful!',
    FAILED: 'Request Failed!',
    LOGOUT: 'You have been logged out!',
    CREATE_SUCCESSFUL: (entity) => `${entity} created successfully`,
    CONFLICT: (entity) => `${entity} already exists!`,
  },

  TRACKS: {
    'BACKEND-ENGINEERING': 'Backend Engineering',
    'CLOUD-ENGINEERING': 'Cloud Engineering',
    'DATA-ANALYSIS': 'Data Analysis',
    'DATA-ENGINEERING': 'Data Engineering',
    'DATA-SCIENCE': 'Data Science',
    'FRONTEND-ENGINEERING': 'Frontend Engineering',
    'PRODUCT-DESIGN': 'Product Design',
    'PRODUCT-MANAGEMENT': 'Product Management',
    'PRODUCT-MARKETING': 'Product Marketing',
  },
};
