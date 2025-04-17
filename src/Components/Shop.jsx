import React from 'react'

function Shop() {
  return (
 <>
 
 <h1 class="text-2xl font-bold mb-4">🛒 Dukaan</h1>
  <div class="grid grid-cols-2 gap-4">
    <div class="border p-4 rounded-xl shadow">
      <img src="fertilizer.jpg" class="h-24 w-full object-cover rounded mb-2" alt="Fertilizer"/>
      <p class="font-semibold">Organic Fertilizer</p>
      <p class="text-sm text-gray-600">₹250 / 1kg</p>
      <button class="mt-2 bg-green-600 text-white px-4 py-1 rounded">Buy Now</button>
    </div>
    <div class="border p-4 rounded-xl shadow">
      <img src="sprayer.jpg" class="h-24 w-full object-cover rounded mb-2" alt="Sprayer" />
      <p class="font-semibold">Manual Sprayer</p>
      <p class="text-sm text-gray-600">₹850</p>
      <button class="mt-2 bg-green-600 text-white px-4 py-1 rounded">Buy Now</button>
    </div>
  </div></>
  )
}

export default Shop