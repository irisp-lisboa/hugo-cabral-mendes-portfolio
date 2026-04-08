import React, { useState } from 'react'
const sampleDancer = [{ title: 'Performance Title 1', year: '2024', credits: 'Company / Choreographer' },{ title: 'Performance Title 2', year: '2023', credits: 'Company / Choreographer' }]
const sampleChoreo = [{ title: 'Choreography 1', year: '2024', notes: 'Festival / Residency' },{ title: 'Choreography 2', year: '2022', notes: 'Commission' }]

export default function Works(){
const [tab, setTab] = useState('dancer')
return (
<section className="py-16">
<div className="container">
<h2 className="text-2xl font-semibold mb-6">Works</h2>
<div className="flex gap-4 mb-6">
<button onClick={()=>setTab('dancer')} className={`px-4 py-2 border ${tab==='dancer' ? 'bg-black text-white' : ''}`}>Dancer/Performer</button>
<button onClick={()=>setTab('choreo')} className={`px-4 py-2 border ${tab==='choreo' ? 'bg-black text-white' : ''}`}>Choreographer</button>
</div>
{tab === 'dancer' && <div className="grid md:grid-cols-2 gap-6">{sampleDancer.map((p,i)=><article key={i} className="border rounded p-4"><h3 className="font-medium">{p.title} <span className="text-sm text-gray-500">({p.year})</span></h3><p className="text-sm mt-2">{p.credits}</p></article>)}</div>}
{tab === 'choreo' && <div className="grid md:grid-cols-2 gap-6">{sampleChoreo.map((p,i)=><article key={i} className="border rounded p-4"><h3 className="font-medium">{p.title} <span className="text-sm text-gray-500">({p.year})</span></h3><p className="text-sm mt-2">{p.notes}</p></article>)}</div>}
</div>
</section>
)
}