import { Suspense } from "react";
import Home from "./pages/Home";

export default function Page() {
  return (
    <div className="bg-white">
      <Suspense fallback={<GlobalLoading />}>
        <Home />
      </Suspense>
    </div>
  );
}

function GlobalLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-500" />
    </div>
  );
}
