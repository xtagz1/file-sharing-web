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