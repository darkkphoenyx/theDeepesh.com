import { Client, Databases, Query, Storage } from "appwrite";
import config from "../config/config";

export class Projects {
  client = new Client();
  database;
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  // Services
  getProjectDetails = async (type: string) => {
    try {
      if (type === "All Projects") {
        return await this.database.listDocuments(
          config.appwriteDatabaseId,
          config.appwriteCollectionId
        );
      }
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        [Query.equal("type", type)]
      );
    } catch (error) {
      throw new Error(
        `Appwrite Error :: getProjectDetails() failed :: ${error}`
      );
    }
  };
}

const project = new Projects();
export default project;
