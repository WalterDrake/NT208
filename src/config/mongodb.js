import { MongoClient, ServerApiVersion } from "mongodb";
import { env } from "~/config/environment";

let WebDatabaseInstance = null;

// Khởi tạo một đối tượng mongoClientInstance để connect tới MongoDB
const mongoClientInstance = new MongoClient(env.MONGODB_URI);

// Kết nối tới Database
export const CONNECT_DB = async () => {
  // Gọi kết nối tới MongoDB Atlas với URI đã khai báo trong thân của mongoClientInstance
  await mongoClientInstance.connect();

  WebDatabaseInstance = mongoClientInstance.db(env.DATABASE_NAME);
};

export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};

export const GET_DB = () => {
  if (!WebDatabaseInstance) throw new Error("Must connect to Database first!");
  return WebDatabaseInstance;
};
