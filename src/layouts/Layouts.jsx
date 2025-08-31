import Sidebar from "../components/Sidebar";

export default function Layouts() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col lg:flex-row">
      <Sidebar />
    </div>
  );
}
