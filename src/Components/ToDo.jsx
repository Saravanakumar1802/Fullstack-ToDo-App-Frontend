import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
export const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className='todo'>
      <div className="text">{text}</div>
      <div className="icons">
        <EditIcon className='icon update' onClick={updateMode} />
        <DeleteForeverIcon className='icon delete' onClick={deleteToDo} />
      </div>
    </div>
  )
}
