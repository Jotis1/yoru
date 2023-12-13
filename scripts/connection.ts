import { MongoClient, MongoClientOptions } from 'mongodb';

const authURI = process.env.MONGODB_AUTH_URI;
const uri = process.env.MONGODB_URI;

if (!authURI) {
  throw new Error('Variable de entorno invalida/inexistente : "MONGODB_AUTH_URI"');
}

if (!uri) {
  throw new Error('Variable de entorno invalida/inexistente : "MONGODB_URI"');
}

const options: MongoClientOptions = {};

let authClient: MongoClient = new MongoClient(authURI as string, options);
let client: MongoClient = new MongoClient(uri as string, options);
let authClientPromise: Promise<MongoClient> = authClient.connect();
let clientPromise: Promise<MongoClient> = client.connect();

export { authClientPromise as authClient, clientPromise as client };
