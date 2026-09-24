import SectorTile from "./SectorTile";
import "./page.css";

export default function SectorsPage(){
    
    return(
        <div className="sectors-grid">

        <SectorTile image="/house.jpg" title="Residential" description="One to two lines of text here." />

        <SectorTile image="/mall.png" title="Commercial" description="One to two lines of text here." />

        <SectorTile image="/hospitality.png" title="Hospitality" description="One to two lines of text here." />

        <SectorTile image="/hospital.jpg" title="Healthcare" description="One to two lines of text here." />

        <SectorTile image="/server.jpg" title="Data Centers" description="One to two lines of text here." />

        <SectorTile image="/industrial.jpg" title="Industrial" description="One to two lines of text here." />

        <SectorTile image="/bridge.jpg" title="Infrastructure" description="One to two lines of text here." />

        <SectorTile image="/transport.jpg" title="Public Sector" description="One to two lines of text here." />
    
        </div>
    );
}