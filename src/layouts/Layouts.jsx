import Sidebar from "../components/Sidebar";

export default function Layouts() {
  return (
    <div
      className="
      w-full
      min-h-screen
      bg-black
      flex
      flex-col
      justify-center
      py-4
      px-4
      "
    >
      <Sidebar />
    </div>
  );
}
