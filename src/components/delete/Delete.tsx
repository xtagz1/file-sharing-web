import { useState } from "react";
import { Button } from "../ui/button";
import { retrieveFile } from "@/services/file";
import { Input } from "@/components/ui/input"



export default function Delete() {
const [deleting, setdeleting] = useState(false)
const [privateKey, setprivateKey] = useState('')
const [error, setError] = useState('');

const handleRetrieve = async () => {
    setdeleting(true)
    try {
        const data = await retrieveFile(privateKey)
        setprivateKey(data)
    } catch (error:any) {
      setError(error.message);
    } finally {
        setdeleting(false);
    }
}

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setprivateKey(event.target.value); 
  };

  return (
    <div>
       <div className='flex flex-col gap-3 pb-3 items-center w-[50dvw] border pt-4'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {deleting && 
            (<div>
                deleting file...
            </div>)
            }
                    <Input 
          placeholder="Input privateKey" 
          value={privateKey} 
          onChange={handleInputChange} 
        />
            <div>
                <Button onClick={handleRetrieve} disabled={deleting}>
                    {deleting ? 'deleting...' : 'delete'}
                </Button>
            </div>
        </div>
    </div>
  )
}
