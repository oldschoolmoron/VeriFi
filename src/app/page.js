import Navbar from '@/components/Navbar';
import {SearchPill, UploadBox} from '@/components/UploadBox';

export default function Home() {
  return (
    <div>
      < Navbar />
      <SearchPill />
      <UploadBox />
    </div>
  );
}