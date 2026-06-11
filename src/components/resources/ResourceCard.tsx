import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText } from "lucide-react";

type ResourceCardProps = {
  id: string;
  title: string;
  subject: string;
  semester: string;
  fileUrl: string;
};

export default function ResourceCard({
  id,
  title,
  subject,
  semester,
  fileUrl,
}: ResourceCardProps) {
  return (
    <Card className="p-5 hover:shadow-xl transition-all duration-300">
      <FileText className="h-10 w-10 mb-3 text-blue-600" />

      <h2 className="font-bold text-lg">{title}</h2>

      <p className="text-gray-500">{subject}</p>

      <p className="text-sm text-gray-400 mt-1">
        Semester {semester}
      </p>

      <div className="flex gap-2 mt-4">
        <Link href={`/resources/${id}`}>
          <Button>View</Button>
        </Link>

        <a href={fileUrl} target="_blank">
          <Button variant="outline">
            Download
          </Button>
        </a>
      </div>
    </Card>
  );
}