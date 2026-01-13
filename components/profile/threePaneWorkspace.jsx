import React from "react";

const ThreePaneWorkSpace = () => {
    return (
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
    );
}

export default ThreePaneWorkSpace;