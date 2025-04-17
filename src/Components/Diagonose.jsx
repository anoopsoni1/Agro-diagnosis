import React from 'react'

function Diagonose() {
  return (
   <>
   <main class="p-6 max-w-md mx-auto">
    <div class="bg-white shadow-md rounded-xl p-6">
      <h2 class="text-lg font-semibold mb-4">Upload a Picture of the Affected Leaf</h2>
      <form action="diagonis-result.html" method="GET" enctype="multipart/form-data" class="space-y-4">
        <input type="file" name="leafImage" accept="image/*" required class="block w-full p-2 border rounded-md" />
        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg">Diagnose</button>
      </form>
    </div>
  </main>
   </>
  )
}

export default Diagonose