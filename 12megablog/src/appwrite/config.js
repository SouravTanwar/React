import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwiteUrl)
            .setProject(conf.appwiteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                slug,
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocument(
                conf.appwiteDatabaseId,
                conf.appwiteCollectionId,
                queries,
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error);
            return false
        }
    }

    //file upload Service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwiteBucketId,
                ID.unique(),
                file
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwiteBucketId,
                fileId
                
            )
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwiteBucketId,
            fileId
        )
    }
}


const service = new Service()

export default service