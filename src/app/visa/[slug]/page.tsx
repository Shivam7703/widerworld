// app/visa/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { visaData } from "@/data/visadata";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Visadetails from "@/components/visa/visa-detail";
import { createSlug } from "@/app/coaching/[slug]/page";


interface Pageprops{
    params:{
        slug:string;
    }
}


// export function generateStaticParams(){
//     return visaData.map((visas:any) => ({
//         slug: createSlug(visas.title)
//     }));
// }

export default function Visapage({params}:Pageprops){
    const decodedSlug = createSlug(params.slug);
    const singlevisa = visaData.find((visa:any) => createSlug(visa.title) === decodedSlug);

if(!singlevisa){
    notFound();
}

return(
<main>
      <Banner
        img={bann}
        title={singlevisa.title}
        para={singlevisa?.metadesc}
        slug={`visa/${createSlug(singlevisa.title)}`}
      />
      <Visadetails data={singlevisa} />
    </main>
    )

}