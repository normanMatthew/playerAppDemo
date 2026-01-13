import React from "react";

const PassPort = () => {
    return (
        <div className="sticky top-0 z-10 flex h-16 items-center justify-between border-b bg-indigo-900 px-6 text-white shadow-md">
                <div className="flex gap-8">
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Player ID:</p>
                        <p className="font-mono font-bold">88291-X</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Username</p>
                        <p className="font-mono font-bold">Test_Player</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Email</p>
                        <p className="font-bold text-amber-400">testplayer@test.com</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Device</p>
                        <p className="font-mono font-bold">Samsung S25 Ultra</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Timezone</p>
                        <p className="font-mono font-bold">Samsung S25 Ultra</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase tracking-wider opacity-70">Device Language</p>
                        <p className="font-mono font-bold">English</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="cursor-pointer rounded bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white/20">Transfer Profile</button>
                    <button className="cursor-pointer rounded bg-red-500 px-3 py-1 text-xs font-bold hover:bg-red-600">View Player History</button>
                    <button className="cursor-pointer rounded bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white/20">Related Accounts</button>
                    <button className="cursor-pointer rounded bg-red-500 px-3 py-1 text-xs font-bold hover:bg-red-600">Edit Profile</button>
                </div>
            </div>
    );
}       
export default PassPort;