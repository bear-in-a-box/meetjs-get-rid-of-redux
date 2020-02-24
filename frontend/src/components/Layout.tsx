import React from 'react';
import { Dashboard } from './layout/Dashboard';
import { Variant } from './layout/Variant';
import { Redux } from './layout/Redux';
import { RxJS } from './layout/RxJS';
import './Layout.scss';

export const Layout: React.FC = () => (
  <div className="Layout">
    <Dashboard />
    <Variant name="Redux">
      <Redux />
    </Variant>
    <Variant name="RxJS">
      <RxJS />
    </Variant>
  </div>
);
