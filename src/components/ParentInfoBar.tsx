import type { ParentInfo } from './ParentInfoModal';

export const ParentInfoBar = ({ info }: { info: ParentInfo }) => (
  <div className="bg-card border border-border rounded-xl p-3 mb-4 shadow-soft text-sm">
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
      <div><span className="text-muted-foreground">Parent Name: </span><span className="font-medium">{info.parentName}</span></div>
      <div className="truncate"><span className="text-muted-foreground">Email: </span><span className="font-medium">{info.parentEmail}</span></div>
      <div><span className="text-muted-foreground">Gender: </span><span className="font-medium">{info.gender}</span></div>
    </div>
  </div>
);
