import { useState } from 'react';
import { Button } from '../ui/button';
import { uploadFile } from '@/services/file';
import { useUploadStore } from '@/stores/uploadStore';

export default function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const {updateUploadData, uploadData} = useUploadStore()

  const handleFileChange = (event:any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a file first.');
      return;
    }
    setError('');
    setUploading(true);

    const formData = new FormData();
    formData.append('file', file); 
    try {
        const data= await uploadFile(formData)
        updateUploadData(data)
    } catch (error:any) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className='flex flex-col gap-3 pb-3 items-center border w-[50dvw]'>
      <h2 className='font-semibold'>Upload your file here</h2>
      <div className='flex'>
        <input type="file" onChange={handleFileChange} />       
        <div>
            <Button onClick={handleUpload} disabled={uploading}>
                {uploading ? 'Uploading...' : 'Upload'}
            </Button>
        </div>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {uploading && (
        <div>
           Uploading file please wait ...        
        </div>
      )
      }
      { uploadData && (
        <div className='flex flex-col gap-2'>
            <div className='text-lg font-semibold'>
                Uploaded file successfully
            </div>
            <div>
                <strong>Public Key:</strong>   {uploadData?.publicKey}
            </div>
            <div>
            <strong>Private Key:</strong>  {uploadData?.privateKey}
            </div>
        </div>
      )
      }
    </div>
  );
}
