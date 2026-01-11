import React from "react";

export default function CSRDashboard() {
    return (
        <div className="flex h-screen flex-col bg-slate-50 font-sans text-slate-900">
            {/*  GLOBAL NAVBAR */}
            <nav className="flex h-14 items-center justify-between border-b bg-white px-6 shadow-sm">
               <div className="flex items-center gap-4">
                    <span className="font-bold text-indigo-600">Administrator Page</span>
                    <input
                        type="text"
                        placeholder="Search Player ID or Email..."
                        className="w-64 rounded-md border border-slate-200 bg-slate-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div> 
                <div className="flex items-center gap-4 text-sm font-medium">
                    <span>Administrator</span>
                    <div className="h-8 w-8 rounded-full bg-slate-200">
                        {/* admin profile image -> dropdown: admin profile, settings, sign out */}
                    </div>
                </div>
            </nav>
            {/* STICKY PLAYER PASSPORT */}
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
            {/* THREE-PANE WORKSPACE */}
            <main className="flex flex-1 overflow-hidden">
                {/* left-side pane - purchase history */}
                <aside className="w-80 overflow-y-auto border-r bg-white p-4">
                    <h3 className="mb-4 text-xs font-bold uppercase text-slate-400">Purchase History</h3>
                    {/* Widgets go here */}
                </aside>
                {/* center pane - messages - the focus */}
                <section className="flex flex-1 flex-col bg-slate-100">
                    <h3>Messages</h3>
                    <div className="flex-1 p-4">Chat Messages</div>
                    <div className="border-t bg-white p-4">Modern Chat Input</div>
                </section>
                {/* right-side pane - stamps and avatars */}
                <aside className="w-96 overflow-y-auto border-l bg-white p-4">
                    <h3 className="mb-4 text-xs font-bold uppercase text-slate-400">Player Metadata</h3>
                </aside>
            </main>
        </div> 
    );
}