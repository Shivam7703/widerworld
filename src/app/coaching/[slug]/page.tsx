// app/coaching/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import { coachingdata } from "@/data/coachingData";
import { bann } from "@/assets";
import Banner from "@/components/global/banner";
import Servicedetails from "@/components/services/servicedetail";


interface Pageprops {
    params:{
        slug:string;
    }
}


export const createSlug = (title: string) => {
return title.trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};


// export function generateStaticParams() {
//     const coachingData = coachingdata;
//     return coachingData.map((coaching:any) => ({
//         slug: createSlug(coaching.title)
//     }));
// }

export default function CoachingPage({params}:Pageprops) {
    const decodedSlug = createSlug(decodeURIComponent(params.slug));
    const coachingData = coachingdata;
    const singleCoaching = coachingData.find((coaching:any) => createSlug(coaching.title) === decodedSlug);
    
    if(!singleCoaching){
        notFound();
    }   

    return (
        <main>
            <Banner img={bann} title={singleCoaching.title} para={singleCoaching?.metadesc} slug={`coaching/${createSlug(singleCoaching.title)}`} />
                  <Servicedetails data={singleCoaching} />
            
        </main>
    )
}