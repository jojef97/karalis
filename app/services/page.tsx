import ServiceTile from "./ServiceTile";
import "./ServiceTile.css";

export default function ServicesPage(){
    return(
    <div className="services-grid">
       <ServiceTile title="01. BIM & Digital Delivery" slug="bim-digital-delivery"></ServiceTile>
    
       <ServiceTile title="02. BIM Coordination & VDC" slug="bim-coordination-vdc"></ServiceTile> 

       <ServiceTile title="03. BIM Management & Information Management" slug="bim-management-information-management"></ServiceTile>

       <ServiceTile title="04. Sustainability & Building Performance" slug="sustainability-building-performance"></ServiceTile>

       <ServiceTile title="05. BIM Automation & Computational Design" slug="bim-automation-computational-design"></ServiceTile> 

       <ServiceTile title="06. BIM Data & Analytics" slug="bim-data-analytics"></ServiceTile>

       <ServiceTile title="07. Digital Twins & Asset Management" slug="digital-twins-asset-management"></ServiceTile>

       <ServiceTile title="08. DfMA & Fabrication" slug="dfma-fabrication"></ServiceTile>

       <ServiceTile title="09. OpenBIM & Interoperability" slug="openbim-interoperability"></ServiceTile>

       <ServiceTile title="10. Visualization & Immersive Technology" slug="visualization-immersive-technology"></ServiceTile>

       <ServiceTile title="11. BIM Consulting & Digital Transformation" slug="bim-consulting-digital-transformation"></ServiceTile>


       
    </div>
    )
}