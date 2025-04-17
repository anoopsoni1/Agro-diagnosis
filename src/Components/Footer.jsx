import React from 'react'

function Footer() {
  return (
 <>
 <footer class="bg-green-600 text-white mt-10">
  <div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
  
    <div>
      <a href="index.html" class="text-2xl font-bold hover:text-green-200">AgroDiagnose</a>
      <p class="mt-4 text-sm text-green-200">Empowering farmers with AI-driven crop diagnosis, field insights, and community support.</p>
    </div>

    <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2 text-sm">
        <li><a  class="hover:text-green-200">Home</a></li>
        <li><a  class="hover:text-green-200">Diagnosis</a></li>
        <li><a  class="hover:text-green-200">Insights</a></li>
        <li><a  class="hover:text-green-200">Community</a></li>
        <li><a  class="hover:text-green-200">Weather</a></li>
      </ul>
    </div>
 
    <div>
      <h3 class="text-lg font-semibold mb-4">Resources</h3>
      <ul class="space-y-2 text-sm">
        <li><a href="#" class="hover:text-green-200">Help Center</a></li>
        <li><a href="#" class="hover:text-green-200">Blog</a></li>
        <li><a href="#" class="hover:text-green-200">FAQs</a></li>
        <li><a href="#" class="hover:text-green-200">Privacy Policy</a></li>
      </ul>
    </div>
   
    <div>
      <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
      <p class="text-sm">ITM Gwalior, Madhya Pradesh, India</p>
      <p class="text-sm mt-2">support@agrodiagnose.app</p>
      <div class="flex space-x-4 mt-4">
        <a href="#" class="hover:text-green-200" aria-label="Facebook">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12M14.5,12H13v6h-3v-6H9V9.5h1v-1a2.5,2.5 0 0,1 2.5-2.5h1v2H13a.5.5 0 0,0-.5.5v1.5h2L14.5,12Z"/></svg>
        </a>
        <a href="#" class="hover:text-green-200" aria-label="Twitter">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22.46,6c-.77.35-1.6.58-2.46.69A4.31,4.31 0 0,0 21.85,4.1a8.59,8.59 0 0,1-2.72,1.04A4.28,4.28 0 0,0 11,8.29a12.13,12.13 0 0,1-8.81-4.47A4.25,4.25 0 0,0 3.1,9.38a4.22,4.22 0 0,1-1.94-.54v.05A4.28,4.28 0 0,0 4.28,13a4.27,4.27 0 0,1-1.93.07A4.28,4.28 0 0,0 6.5,15.59A8.57,8.57 0 0,1 2,17.29a12.07,12.07 0 0,0 6.56,1.92c7.87,0 12.17-6.52 12.17-12.17,0-.19,0-.38-.01-.57A8.68,8.68 0 0,0 22.46,6Z"/></svg>
        </a>
        <a href="#" class="hover:text-green-200" aria-label="LinkedIn">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M8.5,17.5H6V10H8.5V17.5M7.25,8.75A1.25,1.25 0 0,0 8.5,7.5A1.25,1.25 0 0,0 7.25,6.25A1.25,1.25 0 0,0 6,7.5A1.25,1.25 0 0,0 7.25,8.75M18,17.5H15.5V13.5C15.5,12.12 14.38,11 13,11C11.62,11 10.5,12.12 10.5,13.5V17.5H8V10H10.5V11.5A3.5,3.5 0 0,1 14,8A3.5,3.5 0 0,1 17.5,11.5V17.5H18Z"/></svg>
        </a>
      </div>
    </div>
  </div>
  <div class="bg-green-700 text-center py-4 text-xs">
    © <span id="year"></span> AgroDiagnose. All rights reserved.
  </div>
  <script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</footer>


 </>
  )
}

export default Footer