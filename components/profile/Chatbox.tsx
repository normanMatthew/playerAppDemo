"use client";
import React from "react";
import { PlayerProfile } from "@/lib/types/player";

interface ChatboxProps {
  player: PlayerProfile;
  currentMessage: string;
  onMessageChange: (val: string) => void;
  onSnooze: () => void;
  onResolve: () => void;
}

export default function Chatbox({ player, currentMessage, onMessageChange, onSnooze, onResolve }: ChatboxProps) {
  return (
    <div className="flex h-full flex-col bg-white">
      {/* Contextual Header */}
      <div className="flex items-center justify-between border-b px-4 py-2 bg-slate-50">
        <span className="text-xs font-semibold text-slate-500">
          Replying to: <span className="text-indigo-600">{player.username}</span> <span className="text-[10px] opacity-50">({player.id})</span>
        </span>
        <div className="flex gap-2">
          <button onClick={onSnooze} className="cursor-pointer text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded font-bold hover:bg-amber-200">Snooze</button>
          <button onClick={onResolve} className="cursor-pointer text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold hover:bg-green-200">Resolve</button>
        </div>
      </div>

      {/* Message Thread */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100/50">
        <div className="flex flex-col items-start">
          <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 text-sm shadow-sm border text-slate-700">
            <p>Test message</p>
          </div>
          <span className="mt-1 text-[10px] text-slate-400 uppercase font-medium">10:42 AM • Player</span>
        </div>
      </div>

      {/* Modern Input Field */}
      <div className="border-t p-4 bg-white">
        <div className="relative">
          <textarea
            value={currentMessage}
            onChange={(e) => onMessageChange(e.target.value)}
            placeholder="Type a message or '/' for macros..."
            className="w-full rounded-xl border border-slate-200 p-3 pr-12 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none transition-all"
            rows={3}
          />
          <button className="absolute bottom-3 right-3 rounded-lg bg-indigo-600 p-1.5 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-transform active:scale-95">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}