import React from 'react'
import { Button, Icon, Drawer } from 'rsuite'
import { useModalState } from '../../misc/customHooks'
import Dashboard from '.'

const DashboardToggle = () => {

  const {open,close,isOpen} = useModalState();

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />Dashboard
      </Button>
      <Drawer show={isOpen} onHide={close} placement="left">
          <Dashboard/>
      </Drawer>
    </>
  )
}

export default DashboardToggle
