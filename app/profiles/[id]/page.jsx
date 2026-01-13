import React from "react";
import PassPort from "../../../components/profile/passPort";
import ThreePaneWorkSpace from "../../../components/profile/threePaneWorkspace";

export default function CSRDashboard() {
    return (
        <div className="flex h-screen flex-col bg-slate-50 font-sans text-slate-900">
            {/* STICKY PLAYER PASSPORT */}
            <PassPort/>
            {/* THREE-PANE WORKSPACE */}
            <ThreePaneWorkSpace/>
        </div> 
    );
}