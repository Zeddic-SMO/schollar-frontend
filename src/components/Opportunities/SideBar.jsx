import { Grid, List, Plus } from "react-feather";

const SideBar = () => {
  return (
    <div className="w-[25%] flex justify-between">
      <button className="flex items-center gap-1 py-1 px-2 bg-BrandPrimary rounded-lg text-white">
        <Plus size={16} /> Post Opportunity
      </button>
      <div className="flex items-center gap-2">
        <List size={14} className="cursor-pointer" />
        <Grid size={14} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default SideBar;
