"use client";

import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import LiveNexi from "@/components/livenexi";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh] place-content-center ">
      <LiveNexi />
    </div>
  );
}
