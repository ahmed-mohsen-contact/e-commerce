import React from 'react'

const NewLetterBox = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>subscripe now and got 20% offer</p>
      <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse voluptas reiciendis ipsa deserunt consequatur doloremque accusantium</p>

      <form className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 ' onClick={handleSubmit}>
        <input type="email" className='w-full sm:flex-1 outline-none ' placeholder='enter your mail' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE NOW</button>
      </form>
    </div>
  )
}

export default NewLetterBox
