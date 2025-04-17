import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
  <section class="p-4 overflow-x-auto whitespace-nowrap space-x-3 flex">
    <button class="bg-white border rounded-full px-4 py-2 shadow">🍎 Apple</button>
    <button class="bg-white border rounded-full px-4 py-2 shadow">🌾 Wheat</button>
    <button class="bg-white border rounded-full px-4 py-2 shadow">🌽 Maize</button>
    <button class="bg-white border rounded-full px-4 py-2 shadow">🥦 Cabbage</button>
    <button class="bg-white border rounded-full px-4 py-2 shadow">🫘 Bean</button>
    <button class="bg-green-500 text-white px-4 py-2 rounded-full">+ Add</button>
  </section>

  <section class="p-4 mt-4 bg-white rounded-xl mx-4 shadow">
    <h2 class="text-lg font-semibold mb-2">Heal your crop</h2>
    <div class="flex items-center justify-between text-center">
      <div>
        <div class="text-3xl mb-1">📷</div>
        <p class="text-sm">Take a picture</p>
      </div>
      <div class="text-xl">➡</div>
      <div>
        <div class="text-3xl mb-1">📋</div>
        <p class="text-sm">Get Diagnosis</p>
      </div>
    </div>
    <Link class="mt-4 block w-full bg-blue-600 text-white py-2 rounded-xl text-center font-medium">Take a Picture</Link>
  </section>

  <section class="p-4 mt-6 mx-4 bg-white shadow-lg rounded-xl">
    <h3 class="text-lg font-semibold">📍 Start Precision Farming</h3>
    <p class="text-sm text-gray-600 mt-1">Add your field to unlock custom insights and nutrient plans</p>
    <a class="mt-3 inline-block bg-green-600 text-white px-4 py-2 rounded-lg">Add Field</a>
  </section>
    </>
  )
}

export default Home