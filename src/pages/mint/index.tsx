import { Menu } from "@/components/menu";
import FileUploadComponent from "@/components/uploadFile";

export default function Mint() {
  return (
    <div className="min-h-screen flex">
      <Menu />
      <FileUploadComponent />;
    </div>
  );
}