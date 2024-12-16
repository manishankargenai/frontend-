'use client'

import React from 'react'
import Dashboard from './mainDashboard/dashboard'

export default function Home() {
  return (
    <div className="flex overflow-hidden flex-col pb-16 bg-indigo-50">
      <Dashboard />
    </div>
  )
}
