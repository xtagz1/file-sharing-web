
const backendUrl = import.meta.env.VITE_BACK_END_BASE_URL;

export const uploadFile = async (formData: any) => {
  try { 

    const response = await fetch(`${backendUrl}/files`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Upload failed. Please try again.');
    }

    const data = await response.json();
    return data?.response; 
  } catch (error) {
    console.error('Error during file upload:', error);
    throw error; 
  }
};

export const retrieveFile = async (publicKey: string) => {
  try { 
    const response = await fetch(`${backendUrl}/files/${publicKey}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Error retrieving file, or the file has been deleted already. Please try again.');
    }

    const blob = await response.blob();
    return {
      blob,
      contentType: response.headers.get('Content-Type'),
      contentDisposition: response.headers.get('Content-Disposition'),
    };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


  export const deleteFile = async (privateKey: string) => {
    try { 
  
      const response = await fetch(`${backendUrl}/files/${privateKey}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error deleting file, or the file is deleted already Please try again.');
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error('Error:', error);
      throw error; 
    }
  };
