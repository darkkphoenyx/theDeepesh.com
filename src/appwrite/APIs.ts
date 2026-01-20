import { Client, Databases, ID, Query, Storage } from "appwrite";
import config from "../config/config";
// import type { ContactForm } from "../pages/sections/ContactForm";

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
  // getProjectDetails = async (type: string) => {
  //   try {
  //     if (type === "All Projects") {
  //       return await this.database.listDocuments(
  //         config.appwriteDatabaseId,
  //         config.appwriteCollectionId1
  //       );
  //     }
  //     return await this.database.listDocuments(
  //       config.appwriteDatabaseId,
  //       config.appwriteCollectionId1,
  //       [Query.equal("type", type)]
  //     );
  //   } catch (error) {
  //     throw new Error(
  //       `Appwrite Error :: getProjectDetails() failed :: ${error}`
  //     );
  //   }
  // };

  getProjectDetails = async (type: string) => {
    try {
      //to get latest project at first
      const queries = [Query.orderDesc("$createdAt")];

      if (type !== "All Projects") {
        queries.push(Query.equal("type", type));
      }

      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId1,
        queries,
      );
    } catch (error) {
      throw new Error(
        `Appwrite Error :: getProjectDetails() failed :: ${error}`,
      );
    }
  };

  //to get the pdf download link
  getFileDownload = async () => {
    try {
      const CV_ID = import.meta.env.VITE_PDF;
      return this.storage.getFileDownload(config.appwriteBucketId, CV_ID);
    } catch (error) {
      throw new Error("Error getting PDF download.");
    }
  };

  // to upload comments
  writeComments = async ({
    name,
    message,
    phone,
    email,
  }: {
    name: string;
    message: string;
    phone: string;
    email: string;
  }) => {
    try {
      return this.database.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId3,
        ID.unique(),
        { name, message, phone, email },
      );
    } catch (error) {
      throw new Error(`Error commenting:: ${error}`);
    }
  };
}

const project = new Projects();
export default project;
