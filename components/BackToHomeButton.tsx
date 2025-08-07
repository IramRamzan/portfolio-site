"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackToHomeButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      className="fixed bottom-6 left-6 bg-[#b92354] text-white p-3 rounded-full shadow-lg hover:bg-[#a11e49] transition-all z-[999]"
      title="Back to Home"
    >
      <ArrowLeft size={20} />
    </button>
  );
}
