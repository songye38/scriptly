import React from 'react'
import ProjectTab from '../BasicComponents/ProjectTab'
import Logo from '../BasicComponents/Logo'

function ProjectHeader() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px' }}>
        <ProjectTab />
        <Logo />
  </div>
  )
}

export default ProjectHeader