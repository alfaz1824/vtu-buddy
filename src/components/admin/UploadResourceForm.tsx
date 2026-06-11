"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadResourceForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [scheme, setScheme] = useState("2022");
  const [semester, setSemester] = useState("6");
  const [subject, setSubject] = useState("");
  const [resourceType, setResourceType] = useState("notes");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [branches, setBranches] = useState<string[]>([]);

  const branchOptions = [
    "CSE",
    "ISE",
    "AIML",
    "ECE",
    "EEE",
    "MECH",
    "CIVIL",
  ];

  async function handleUpload() {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    if (!title || !subject) {
      alert("Please fill all required fields");
      return;
    }

    if (branches.length === 0) {
      alert("Select at least one branch");
      return;
    }

    setLoading(true);

    try {
      const fileName = `${Date.now()}-${file.name}`;

      // Upload PDF
      const { error: uploadError } = await supabase.storage
        .from("resources")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get Public URL
      const { data } = supabase.storage
        .from("resources")
        .getPublicUrl(fileName);

      // Insert into DB
      const { error: dbError } = await supabase
        .from("resources")
        .insert({
          title,
          description,
          scheme,
          branch: branches.join(","),
          semester: Number(semester),
          subject,
          resource_type: resourceType,
          file_url: data.publicUrl,
        });

      if (dbError) throw dbError;

      alert("Resource uploaded successfully!");

      // Reset Form
      setTitle("");
      setDescription("");
      setSubject("");
      setBranches([]);
      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }

    setLoading(false);
  }

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">

      <h2 className="text-3xl font-bold mb-6">
        Upload Resource
      </h2>

      <div className="grid gap-5">

        {/* Title */}
        <input
          placeholder="Resource Title"
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Description */}
        <textarea
          placeholder="Description"
          rows={4}
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        {/* Subject */}
        <input
          placeholder="Subject"
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        {/* Scheme */}
        <select
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={scheme}
          onChange={(e) => setScheme(e.target.value)}
        >
          <option value="2021">2021 Scheme</option>
          <option value="2022">2022 Scheme</option>
        </select>

        {/* Multiple Branches */}
        <div className="border border-zinc-700 rounded-xl p-5 bg-black">

          <h3 className="font-semibold mb-4">
            Applicable Branches
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">

            {branchOptions.map((branch) => (
              <label
                key={branch}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={branches.includes(branch)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setBranches([...branches, branch]);
                    } else {
                      setBranches(
                        branches.filter(
                          (b) => b !== branch
                        )
                      );
                    }
                  }}
                />

                <span>{branch}</span>
              </label>
            ))}

          </div>

        </div>

        {/* Semester */}
        <select
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
        >
          {[1,2,3,4,5,6,7,8].map((sem) => (
            <option key={sem} value={sem}>
              Semester {sem}
            </option>
          ))}
        </select>

        {/* Resource Type */}
        <select
          className="p-4 rounded-xl bg-black border border-zinc-700"
          value={resourceType}
          onChange={(e) =>
            setResourceType(e.target.value)
          }
        >
          <option value="notes">Notes</option>
          <option value="pyq">Question Papers</option>
          <option value="lab">Lab Programs</option>
          <option value="important">
            Important Questions
          </option>
        </select>

        {/* File Upload */}
        <div className="border border-dashed border-zinc-700 rounded-xl p-5">

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files?.[0] || null)
            }
          />

          {file && (
            <p className="text-sm text-green-400 mt-2">
              Selected: {file.name}
            </p>
          )}

        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition-colors rounded-xl p-4 font-semibold"
        >
          {loading
            ? "Uploading..."
            : "Upload Resource"}
        </button>

      </div>

    </div>
  );
}