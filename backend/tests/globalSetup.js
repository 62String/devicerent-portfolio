// 테스트 전역에서 인메모리 MongoDB를 한 번만 기동한다.
// 개별 테스트 파일이 fs를 모킹하는 경우가 있어, 모킹 영향을 받지 않는
// globalSetup에서 서버를 띄우고 접속 URI만 환경변수로 넘긴다.
const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
  const mongoServer = await MongoMemoryServer.create();
  global.__MONGO_SERVER__ = mongoServer;
  process.env.MONGO_URI = mongoServer.getUri();
};
