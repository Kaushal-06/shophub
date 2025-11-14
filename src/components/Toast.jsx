import { AlertCircle, Check, X } from 'lucide-react'
import React from 'react'

const Toast = ({ message, type = 'success', onClose}) => {
  const icons = {
    success: <Check className='w-5 h-5'/>,
    error: <X className='w-5 h-5'/>,
    info: <AlertCircle className='w-5 h-5'/>,
  }

  const colors = {
    success:'bg-green-500',
    error:'bg-red-500',
    info:'bg-blue-500'
  }
    return (
    <div className='fixed bottom-4 right-4 z-50 animate-slide-up'>
      <div className={`flex items-center gap-3 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl min-w-80`}>
        <div className='bg-white bg-opacity-20 p-2 rounded-full text-gray-600'>
            {icons[type]}
        </div>
        <p className='flex-1 font-semibold'>{message}</p>
        <button 
        onClick={onClose}
        className='hover:bg-white hover:bg-opacity-20 p-1 rounded text-gray-600'
        >
            <X className='w-4 h-4' />
        </button>
      </div>
    </div>
  )
}

export default Toast