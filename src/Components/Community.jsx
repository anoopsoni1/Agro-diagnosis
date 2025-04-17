import React from 'react'

function Community() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Community Q&A</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p className="font-semibold">Ram:</p>
          <p>My onion leaves are turning yellow. Any idea?</p>
          <p className="text-sm text-gray-500 mt-2">Replies: 3 · Upvotes: 12</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p className="font-semibold">Geeta:</p>
          <p>What is the best organic pesticide for brinjal?</p>
          <p className="text-sm text-gray-500 mt-2">Replies: 5 · Upvotes: 9</p>
        </div>
      </div>
    </>
  )
}

export default Community