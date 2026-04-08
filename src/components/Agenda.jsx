import React from 'react'
export default function Agenda(){
return (
<section className="py-16">
    <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Projects & News</h2>
        <div className="space-y-6">
            <article className="border rounded p-4">
                <h3 className="font-medium">Upcoming: New Work (Title)</h3>
                <p className="text-sm text-gray-700 mt-2">Short description — dates, collaborators, and venues.</p>
            </article>
            <article className="border rounded p-4">
                <h3 className="font-medium">Workshop / Masterclass</h3>
                <p className="text-sm text-gray-700 mt-2">Details about the class, location, and sign-up link.</p>
            </article>
        </div>
    </div>
</section>
)
}