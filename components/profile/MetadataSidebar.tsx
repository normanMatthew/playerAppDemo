import { PlayerProfile } from "@/lib/types/player";

interface MetadataSidebarProps {
  metadata: PlayerProfile['metadata'];
  onInject: (type: 'stamps' | 'avatars') => void;
}

export default function MetadataSidebar({ metadata, onInject }: MetadataSidebarProps) {
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-[10px] font-bold uppercase text-slate-400 mb-3 tracking-widest">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => onInject('avatars')}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group cursor-pointer"
          >
            <span className="text-xs font-bold group-hover:text-indigo-600">Sync Avatars</span>
            <span className="text-[9px] text-slate-400 text-center">Copy to Chat/Notes</span>
          </button>
          <button 
            onClick={() => onInject('stamps')}
            className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50 transition-all group cursor-pointer"
          >
            <span className="text-xs font-bold group-hover:text-indigo-600">Sync Stamps</span>
            <span className="text-[9px] text-slate-400 text-center">Copy to Chat/Notes</span>
          </button>
        </div>
      </section>

      <section className="flex flex-col flex-1">
        <h3 className="text-[10px] font-bold uppercase text-slate-400 mb-2 tracking-widest">Internal Notes</h3>
        <textarea 
          className="w-full flex-1 min-h-[300px] p-3 text-xs border rounded-lg bg-slate-50 outline-none focus:ring-1 focus:ring-indigo-500 resize-none font-mono"
          value={metadata.notes}
          readOnly
          placeholder="System logs and metadata will appear here..."
        />
      </section>
    </div>
  );
}