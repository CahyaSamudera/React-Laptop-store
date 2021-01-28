import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='services' onClick={toggle}>
            Layanan
          </SidebarLink>
          <SidebarLink to='product' onClick={toggle}>
            Produk
          </SidebarLink>
          <SidebarLink to='about' onClick={toggle}>
            Tentang Kami
          </SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>
            Kontak
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
