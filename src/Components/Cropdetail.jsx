import React from 'react'

function Cropdetail() {
  return (
 <div>
<h1 class="text-2xl font-bold mb-4">Chilli Crop</h1>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn18saNC23j-XJihT2n-2EbZX09HgdwkBpxA&s" class="rounded-xl mb-4" alt="Chilli" height={100} width={100}/>
  <h2 class="text-lg font-semibold">Common Diseases</h2>
  <ul class="list-disc pl-5 text-sm">
    <li>Leaf Curl</li>
    <li>Fruit Rot</li>
  </ul>
  <h2 class="text-lg font-semibold mt-4">Care Tips</h2>
  <p class="text-sm">Ensure regular watering, use neem spray for pest control, avoid waterlogging.</p>
   </div>
  )
}

export default Cropdetail