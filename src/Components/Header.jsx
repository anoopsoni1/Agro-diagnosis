import React from 'react'
import { Link , NavLink } from 'react-router-dom'
function Header() {
  return (
    <>
   <header class="bg-white text-black p-4 flex items-center justify-between shadow-md">
  <a href="index.html" class="text-2xl font-bold hover:text-green-500">AgroDiagnose</a>
  <div class="flex items-center space-x-4">

    <nav class="hidden md:flex space-x-6">
      <Link to="" class="hover:text-green-200">Home</Link>
      <Link to="/diagonis" class="hover:text-green-200">Diagnosis</Link>
      <Link to="/cropdetail" class="hover:text-green-200">Insights</Link>
      <Link to="/community" class="hover:text-green-200">Community</Link>
      <Link to="/shop" class="hover:text-green-200">Shop</Link>
    </nav>

    <button class="md:hidden focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</header>


<nav id="mobile-menu" class="bg-green-500 text-white hidden">
  <ul class="flex flex-col p-4 space-y-2">
    <li><a href="index.html" class="block">Home</a></li>
    <li><a href="diagnosis-result.html" class="block">Diagnosis</a></li>
    <li><a href="field-insights.html" class="block">Insights</a></li>
    <li><a href="community.html" class="block">Community</a></li>
    <li><a href="shop.html" class="block">Dukaan</a></li>
  </ul>
</nav>

    </>
  )
}

export default Header