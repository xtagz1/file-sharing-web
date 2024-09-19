import { useState } from "react";
import { Button } from "../ui/button";
import { retrieveFile } from "@/services/file";
import { Input } from "@/components/ui/input";
import DownloadButton from "./DownloadButton"; 

export default function Retrieve() {
  const [retrieving, setRetrieving] = useState(false);
  const [publicKey, setPublicKey] = useState('');
  const [error, setError] = useState('');
  const [fileData, setFileData] = useState<any>(null);

  const handleRetrieve = async () => {
    try {
      setRetrieving(true);
      const data: any = await retrieveFile(publicKey);
      setFileData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setRetrieving(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPublicKey(event.target.value);
  };

  return (
    <div>
      <div className='flex flex-col gap-3 pb-3 items-center w-[50dvw] border p-4'>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {retrieving && <div>Retrieving file...</div>}
        
        <Input 
          placeholder="Input publicKey" 
          value={publicKey} 
          onChange={handleInputChange} 
        />
        
        <div>
          <Button onClick={handleRetrieve} disabled={retrieving}>
            {retrieving ? 'retrieving...' : 'retrieve'}
          </Button>
        </div>

        {fileData && (
          <div>
            <DownloadButton blob={fileData.blob} fileName={publicKey} />
          </div>
        )}
      </div>
    </div>
  );
}
