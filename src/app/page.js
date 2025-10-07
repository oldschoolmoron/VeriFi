import Navbar from '@/components/Navbar';
import { UploadBox} from '@/components/UploadBox';
import { SearchPill } from '@/components/SearchPill';

export default function Home() {
  return (
    <div>
      < Navbar />
      <SearchPill />
      <UploadBox />
    </div>
  );
}