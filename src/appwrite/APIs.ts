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
          config.appwriteCollectionId1
        );
      }
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId1,
        [Query.equal("type", type)]
      );
    } catch (error) {
      throw new Error(
        `Appwrite Error :: getProjectDetails() failed :: ${error}`
      );
    }
  };

  //to get the pdf download link
  getFileDownload = async () => {
    try {
      return this.storage.getFileDownload(
        config.appwriteBucketId,
        "689794480032fa61a2ea"
      );
    } catch (error) {
      throw new Error("Error getting PDF download.");
    }
  };
}

const project = new Projects();
export default project;
