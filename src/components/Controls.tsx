import React from 'react'
import AddMovie from './Buttons/AddMovie'
import Select from './Select'
import SelectBox from './Containers/SelectBox'

function Controls() {
  return (
    <div className='grid gap-4 mb-4'>
      <div>
        <AddMovie/>
      </div>
      <SelectBox/>
    </div>
  )
}

export default Controls