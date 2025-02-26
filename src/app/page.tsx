import { Separator } from "@/components/ui/separator";
import { getServerSession } from "next-auth";
import { Suspense } from "react";
import Chat from "./components/Chat";
import PreviousChats from "./components/PreviousChats";

export default async function Home() {
  const session = await getServerSession();

  return (
    <main className="p-5">
      <h1 className="text-4xl font-bold">Welcome To GPT Chat</h1>
      {!session?.user && <div>You need to log in to use this chat.</div>}
      {session?.user && (
        <>
          <Suspense fallback={<div>Loading Previous Chats</div>}>
            <PreviousChats />
          </Suspense>
          <h4 className="mt-5 text-2xl font-bold">New Chat Session</h4>
          <Separator className="my-5" />
          <Chat />
        </>
      )}
    </main>
  );
}
