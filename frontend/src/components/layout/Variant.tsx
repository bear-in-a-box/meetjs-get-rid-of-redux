import React from 'react';
import './Variant.scss';

interface Props {
  name: string;
}

export const Variant: React.FC<Props> = ({ children, name }) => (
  <div className="Variant">
    <p className="Name">{name}</p>
    {children}
  </div>
);
