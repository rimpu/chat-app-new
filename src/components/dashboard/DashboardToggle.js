import React from 'react'
import { Button, Icon, Drawer } from 'rsuite'
import { useModalState, useMediaQuery } from '../../misc/customHooks'
import Dashboard from '.'

const DashboardToggle = () => {

  const {open,close,isOpen} = useModalState();

  const isMobile = useMediaQuery('(max-width : 992px)')

  return (
    <>
      <Button block color="blue" onClick={open}>
        <Icon icon="dashboard" />Dashboard
      </Button>
      <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
          <Dashboard/>
      </Drawer>
    </>
  )
}

export default DashboardToggle
