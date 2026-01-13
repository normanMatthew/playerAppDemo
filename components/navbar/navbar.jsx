import Link from "next/link";
import React from "react";

const NavBar = () => {
    return (
        <nav className="flex h-14 items-center justify-between border-b bg-white px-6">
            <div className="flex items-center gap-8">
                <span className="font-bold text-indigo-600 tracking-tighter">ADMIN</span>
                <input
                    type="text"
                    placeholder="Search Player ID or Email..."
                    className="w-64 rounded-md border border-slate-200 bg-slate-100 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex gap-4 text-sm font-medium text-slate-500">
                    <Link href="/" className="hover:text-indigo-600">Home</Link>
                    <Link href="/live-ops" className="hover:text-indigo-600">Live-Ops</Link>
                    <Link href="/messages" className="flex items-center gap-2 hover:text-indigo-600">
                        Messages
                        <span className="rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] text-white">12</span>
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
                {/* Notification Icon - Company Updates */}
                <div className="flex items-center gap-2 border-l pl-4">
                    <span className="text-xs font-semibold">Admin_User</span>
                    <div className="h-8 w-8 rounded-full bg-indigo-100 border border-indigo-200"/>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;