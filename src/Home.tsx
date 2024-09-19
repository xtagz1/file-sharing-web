import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Upload from "./components/upload/Upload"
import Delete from "./components/delete/Delete"
import Retrieve from "./components/retrieve/Retrieve"


export default function Home() {
  return (
    <div className='flex justify-center h-[90dvh] mt-20 border'>
        <Tabs defaultValue="file" className="border w-full flex flex-col">
            <TabsList className="">
                <TabsTrigger value="upload">Upload File</TabsTrigger>
                <TabsTrigger value="retrieve">Retrieve File</TabsTrigger>
                <TabsTrigger value="delete">Delete File</TabsTrigger>
            </TabsList>
            <TabsContent value="upload" className="flex justify-center">
                <Upload/>
            </TabsContent>
            <TabsContent value="retrieve" className="flex justify-center">
                <Retrieve/>
            </TabsContent>
            <TabsContent value="delete" className="flex justify-center">
                <Delete/>
            </TabsContent>
        </Tabs>
    </div>
  )
}
