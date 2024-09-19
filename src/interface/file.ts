export interface UploadedFile {
    config: string; 
    createdAt: string; 
    filePath: string; 
    id: number; 
    isLocal: boolean; 
    lastActivity: string;
    privateKey: string; 
    publicKey: string; 
    updatedAt: string; 
    userId: string | null; 
  }

  export interface RetrievedFile {
    filePath:string;
    mimeType:string;
  }



  export interface DeletedFileResponse {
    success: boolean;
    message: string;
    response: DeletedFile;
  }
  
  export interface DeletedFile {
    id: number;
    userId: number | null; 
    isLocal: boolean;
    config: string;
    publicKey: string;
    privateKey: string;
    filePath: string;
    lastActivity: string; 
    createdAt: string;    
    updatedAt: string;   
  }
  