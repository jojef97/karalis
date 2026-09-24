export default function SectorTile({image,title,description} :{image: string;title: string; description: string;}){

    return(
        <div className="sector-tile" style={{ backgroundImage: `url(${image})` }}>
                <h2 className="title-chip">{title}</h2>
                    <p>{description}</p>
           
        </div>
    );
}