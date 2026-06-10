"use client";

import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";

export default function ResourceFilters() {
 return (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
    
<select className="border rounded-lg p-2 w-full">
  <option>Scheme</option>
  <option>2021 Scheme</option>
  <option>2022 Scheme</option>
</select>


     <Select>
       <SelectTrigger>
         <SelectValue placeholder="Branch" />
       </SelectTrigger>

       <SelectContent>
         <SelectItem value="cse">CSE</SelectItem>
         <SelectItem value="ise">ISE</SelectItem>
         <SelectItem value="aiml">AIML</SelectItem>
       </SelectContent>
     </Select>

     <Select>
       <SelectTrigger>
         <SelectValue placeholder="Semester" />
       </SelectTrigger>

       <SelectContent>
         <SelectItem value="3">Semester 3</SelectItem>
         <SelectItem value="4">Semester 4</SelectItem>
       </SelectContent>
     </Select>

     <Select>
       <SelectTrigger>
         <SelectValue placeholder="Subject" />
       </SelectTrigger>

       <SelectContent>
         <SelectItem value="dsa">
           Data Structures
         </SelectItem>
       </SelectContent>
     </Select>

   </div>
 );
}