"use client";

import React, { useState, use } from "react";
import PassPort from "@/components/profile/StickyPassport";
import Chatbox from "@/components/profile/Chatbox";
import MetadataSidebar from "@/components/profile/MetadataSidebar";
import { MOCK_PLAYERS } from "@/lib/mocks/mock-data";
import { PlayerProfile } from "@/lib/types/player";

/**
 * DEFINING THE PROPS INTERFACE
 * This ensures 'params' is recognized as a Promise, resolving the 'unknown' error.
 */
interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProfilePage({ params }: PageProps) {
  // 1. Unwrap the params promise to get the ID
  const resolvedParams = use(params);
  const playerId = resolvedParams.id;

  // 2. Find the player data (using a unique variable name 'initialData' to avoid redeclaration)
  const initialData = MOCK_PLAYERS.find((p) => p.id === playerId) || MOCK_PLAYERS[0];

  // 3. State Management (Using 'activePlayer' to avoid naming conflicts with imports/props)
  const [activePlayer, setActivePlayer] = useState<PlayerProfile>(initialData);
  const [draftMessage, setDraftMessage] = useState<string>("");

  /**
   * INJECTION LOGIC
   * Updates both the chat input and the persistent notes field.
   */
  const handleMetadataInjection = (type: 'stamps' | 'avatars') => {
    const dataString = type === 'stamps' 
      ? activePlayer.metadata.stamps.join(', ') 
      : activePlayer.metadata.avatars.join(', ');
    
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `\n[SYSTEM_SYNC][${timestamp}][${type.toUpperCase()}]: ${dataString}\n`;

    // Update Chatbox
    setDraftMessage((prev) => prev + logEntry);

    // Update Local State for the Sidebar Notes
    setActivePlayer((prev) => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        notes: prev.metadata.notes + logEntry,
      },
    }));
  };

  return (
    <div className="flex h-screen flex-col bg-slate-50 font-sans text-slate-900">
      {/* HEADER PASSPORT */}
      <PassPort 
        player={activePlayer} 
        relatedAccounts={[]} 
      />
      
      <main className="flex flex-1 overflow-hidden">
        {/* LEFT: PURCHASE HISTORY (Hidden on mobile/tablet) */}
        <aside className="hidden w-80 overflow-y-auto border-r bg-white p-4 xl:block">
          <h3 className="mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            Financial Records
          </h3>
          {activePlayer.billing.purchaseHistory.map((tx) => (
            <div key={tx.transactionId} className="mb-3 rounded-lg border border-slate-100 p-3 text-sm hover:bg-slate-50 transition-colors">
              <div className="flex justify-between font-bold">
                <span>{tx.item}</span>
                <span className="text-green-600">${tx.amount}</span>
              </div>
              <div className="mt-1 text-[10px] font-medium uppercase text-slate-400">
                {tx.transactionId}
              </div>
            </div>
          ))}
        </aside>

        {/* CENTER: MESSAGING SUITE */}
        <section className="flex flex-1 flex-col border-r bg-slate-100/50">
          <Chatbox 
            player={activePlayer} 
            currentMessage={draftMessage}
            onMessageChange={setDraftMessage}
            onSnooze={() => console.log("Player Snoozed")}
            onResolve={() => console.log("Issue Resolved")}
          />
        </section>

        {/* RIGHT: METADATA (Hidden on mobile) */}
        <aside className="hidden w-96 flex-col overflow-y-auto bg-white p-4 lg:flex">
          <MetadataSidebar 
            metadata={activePlayer.metadata} 
            onInject={handleMetadataInjection} 
          />
        </aside>
      </main>
    </div>
  );
}