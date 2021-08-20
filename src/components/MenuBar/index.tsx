import { useState } from 'react';
import { GiCrystalBall } from 'react-icons/gi';
import { FiMenu, FiUser, FiArrowLeft, FiGrid, FiPackage } from 'react-icons/fi';

import { Container, Logo, PageList, Profile } from "./styles";

export function MenuBar() {
  const [sideBarIsActive, setSideBarIsActive] = useState(true);

  function handleSidebarIsActive() {
    setSideBarIsActive(!sideBarIsActive);
  }

  return (
    <Container isActive={sideBarIsActive}>
      <div className="content">
        <Logo isActive={sideBarIsActive}>
          <div>
            <GiCrystalBall size="1.5rem"/>
            <h1>The Lux</h1>
          </div>

          <button type="button" onClick={handleSidebarIsActive}><FiMenu size="2rem"/></button>
        </Logo>

        <PageList isActive={sideBarIsActive}>
          <li>
            <a href="http://localhost:3000">
              <div>
                <FiUser size="1.5rem" />
              </div>
              <span>Clientes</span>
            </a>
            <span className="tooltip">Clientes</span>
          </li>

          <li>
            <a href="http://localhost:3000">
              <div>
                <FiGrid size="1.5rem" />
              </div>
              <span>Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          
          <li>
            <a href="http://localhost:3000">
              <div>
                <FiPackage size="1.5rem" />
              </div>
              <span>Estoque</span>
            </a>
            <span className="tooltip">Estoque</span>
          </li>
          
          <li>
            <a href="http://localhost:3000">
              <div>
                <FiUser size="1.5rem" />
              </div>
              <span>Clientes</span>
            </a>
            <span className="tooltip">Clientes</span>
          </li>

          <li>
            <a href="http://localhost:3000">
              <div>
                <FiGrid size="1.5rem" />
              </div>
              <span>Dashboard</span>
            </a>
            <span className="tooltip">Dashboard</span>
          </li>
          
          <li>
            <a href="http://localhost:3000">
              <div>
                <FiPackage size="1.5rem" />
              </div>
              <span>Estoque</span>
            </a>
            <span className="tooltip">Estoque</span>
          </li>
        </PageList>

        <Profile isActive={sideBarIsActive}> 
          <img src="https://avatars.githubusercontent.com/u/61064330?v=4" alt="Reinaldo" />
          <div>
            <strong>Reinaldo Correia</strong>
            <span>Test Analytics</span>
          </div>
          <FiArrowLeft />
        </Profile>

      </div>
    </Container>
  );
}