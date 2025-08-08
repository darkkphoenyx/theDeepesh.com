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

  // need to have an api to fetch the file_id for the pdf... since the resume pdf is upadate.. so make it automatick.. 😂
  getFileDownload = async () => {
    try {
      return this.storage.getFileDownload(
        config.appwriteBucketId,
        "6895e1d3000af086be94"
      );
    } catch (error) {
      throw new Error("Error getting PDF download.");
    }
  };
}

const project = new Projects();
export default project;
