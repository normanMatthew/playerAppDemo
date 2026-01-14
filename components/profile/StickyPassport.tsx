"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PlayerProfile, RelatedAccounts, AccountStatus } from "@/lib/types/player";

interface PassPortProps {
    player: PlayerProfile;
    relatedAccounts: RelatedAccounts[];
}

export default function PassPort({ player, relatedAccounts }: PassPortProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="sticky top-0 z-20 flex h-16 items-center justify-between border-b bg-indigo-900 px-6 text-white shadow-md">
            <div className="flex gap-8">
                <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Player ID</p>
                    <p className="font-mono font-bold">{player.id}</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Username</p>
                    <p className="font-bold">{player.username}</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase tracking-wider opacity-70">VIP Status</p>
                    <p className={`font-bold ${player.status === AccountStatus.WHALE ? 'text-amber-400' : 'text-white'}`}>
                        Lvl {player.vipLevel} {player.status === AccountStatus.WHALE && "👑"}
                    </p>
                </div>
                <div className="hidden lg:block">
                    <p className="text-[10px] uppercase tracking-wider opacity-70">Device</p>
                    <p className="font-medium text-slate-300 text-sm">{player.security.deviceModel}</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* RELATED ACCOUNTS DROPDOWN */}
                <div className="relative">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="cursor-pointer rounded bg-white/10 px-3 py-1.5 text-xs font-bold hover:bg-white/20 transition-all border border-white/10"
                    >
                        Related Accounts ({relatedAccounts.length})
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-72 rounded-lg border border-slate-200 bg-white shadow-2xl z-50 overflow-hidden text-slate-900 animate-in fade-in slide-in-from-top-2">
                            <div className="bg-slate-50 p-2 text-[10px] font-bold uppercase text-slate-400 border-b">
                                Potential Multi-Accounts
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {relatedAccounts.map((acc) => (
                                    <button
                                        key={acc.id}
                                        onClick={() => {
                                            setIsDropdownOpen(false);
                                            router.push(`/profile/${acc.id}`);
                                        }}
                                        className="flex w-full items-center justify-between p-3 hover:bg-indigo-50 border-b border-slate-100 last:border-0 text-left transition-colors"
                                    >
                                        <div>
                                            <p className="text-xs font-bold text-slate-800">{acc.username}</p>
                                            <p className="text-[10px] text-slate-500">Linked via: {acc.relationType}</p>
                                        </div>
                                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold uppercase ${
                                            acc.status === AccountStatus.BANNED ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                                        }`}>
                                            {acc.status}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <button className="cursor-pointer rounded bg-indigo-600 px-3 py-1.5 text-xs font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">
                    Edit Profile
                </button>
            </div>
        </div>
    );
}