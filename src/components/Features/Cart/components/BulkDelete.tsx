import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function BulkDelete(){
    

    return (
        <Button 
        variant={"destructive"} 
        className="rounded-sm h-10 border bg-white">
            <Trash2 className="size-4.5"/>
            پاک کردن سبد خرید
        </Button>
    )
}