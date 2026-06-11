"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    try {
      if (!file) {
        alert("Please select a PDF");
        return;
      }

      setLoading(true);

      const fileName = `${Date.now()}-${file.name}`;

      const { error: uploadError } = await supabase.storage
        .from("resources")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from("resources")
        .getPublicUrl(fileName);

      const fileUrl = data.publicUrl;

      const { error: dbError } = await supabase
      
  .from("resources")  
  .insert([
    {
      title,
      subject,
      semester: Number(semester),
      file_url: fileUrl,
      resource_type: "notes",
      scheme: "2022",
      branch: "CSE",
    },
  ]);

      if (dbError) throw dbError;

      alert("Upload successful!");

      setTitle("");
      setSubject("");
      setSemester("");
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-3xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-10">
          Admin Upload Panel
        </h1>

        <div className="space-y-5">

          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          />

          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          />

          <input
            placeholder="Semester"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4"
          />

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
            className="w-full"
          />

          <button
            onClick={handleUpload}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
          >
            {loading ? "Uploading..." : "Upload Resource"}
          </button>

        </div>

      </div>
    </main>
  );
}