import UploadResourceForm from "@/components/admin/UploadResourceForm";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-bold mb-4">
          Admin Dashboard
        </h1>

        <p className="text-zinc-400 mb-10">
          Upload VTU study resources.
        </p>

        <UploadResourceForm />

      </div>
    </main>
  );
}