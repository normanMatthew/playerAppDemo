import { MOCK_QUEUE } from "@/lib/mocks/mock-data";

export default function QueuePage() {
    return (
        <div className="flex h-full flex-col">
            {/* sub-nav filter bar */}
            <div className="flex h-12 items-center justify-between border-b bg-white px-6">
                <div className="flex gap-4">
                    <button className="text-sm font-bold text-indigo-600 border-b-2 border-indigo-600 px-2 h-12">Unread(12)</button>
                    <button className="text-sm font-medium text-slate-500 hover:text-slate-700">Snoozed</button>
                    <button className="text-sm font-medium text-slate-500 hover:text-slate-700">Resolved</button>
                </div>
            </div>


            {/* Queue Message List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {MOCK_QUEUE.map((item) => (
                    <div key={item.id} className="group flex cursor-pointer items-center justify-between rounded-lg border bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-md">
                        <div className="flex gap-4">
                            <div className="h-10 w-10 rounded bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">TP</div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="font-bold">{item.player.name}</span>
                                    <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">{item.player.appVersion}</span>
                                </div>
                                <p className="text-sm text-slate-600 line-clamp-1 w-[500px]">{item.message.text}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-medium text-slate-400">2 mins ago</p>
                            <span className="text-[10px] uppercase font-bold text-red-500">{item.message.priority}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}