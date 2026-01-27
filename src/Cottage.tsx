import HeroCottage from './components/HeroCottages';
import HostelSection from './components/Property1';
import VillasSection from './components/Property2';
import ArtStudioSection from './components/ArtStudioSection';
import AmenitiesSection from './components/Amenities';
//import ExperienceSection from './components/ExperienceSection';
import FooterSection from './components/FooterSection';

function CottagePage() {
  return (
    <div className="min-h-screen">
      <HeroCottage />
      <HostelSection />
      <VillasSection />
      <ArtStudioSection />
      <AmenitiesSection />
      
      <FooterSection />
    </div>
  );
}

export default CottagePage;