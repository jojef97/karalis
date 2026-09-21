import Link from "next/link";
import "./ServiceTile.css";

export default function ServiceTile({ title, slug }: { title: string; slug: string }) {
return (

<Link href={`/services/${slug}`} className="tile">
        {title}
    </Link>
    );
    }