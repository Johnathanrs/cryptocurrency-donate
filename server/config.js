const config = {
  mongoURL: process.env.MONGO_URL || `mongodb://${encodeURIComponent('veselin.mitrovic@outlook.com')}:${encodeURIComponent('dbadmin2018@')}@localhost:27017/smartproject`,
  port: process.env.PORT || 80,
};

export default config;
