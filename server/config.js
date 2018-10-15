const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/smartproject',
  port: process.env.PORT || 80,
};

export default config;
