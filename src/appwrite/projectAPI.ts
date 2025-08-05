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

  //services

  //get all projects
  async getAllProjectDetails() {
    try {
      return await this.database.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId
      );
    } catch (error) {
      console.log("Error :: getProject() failed :: ", error);
    }
  }

  //get frontend projects
  async getFrontendProjectDetails(
    slug: string,
    queries = [Query.equal("slug", "Frontend")]
  ) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        queries
      );
    } catch (error) {
      console.log("Error :: getFrontendProjectDetails() failed :: ", error);
    }
  }

  //get backend projects
  async getBackendProjectDetails(
    slug: string,
    queries = [Query.equal("slug", "Backend")]
  ) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        queries
      );
    } catch (error) {
      console.log("Error :: getBackendProjectDetails() failed :: ", error);
    }
  }

  //get other projects
  async getOtherProjectDetails(
    slug: string,
    queries = [Query.equal("slug", "Other")]
  ) {
    try {
      return await this.database.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        queries
      );
    } catch (error) {
      console.log("Error :: getOtherProjectDetails() failed :: ", error);
    }
  }
}

const project = new Projects();

export default project;
