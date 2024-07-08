import React from 'react';
import { UilSearch as OriginalUilSearch, UilLocationPoint as OriginalUilLocationPoint } from '@iconscout/react-unicons';

const withDefaultProps = (Component, defaultProps) => {
    return (props) => <Component {...defaultProps} {...props} />;
};

export const UilSearch = withDefaultProps(OriginalUilSearch, { size: 24, color: 'currentColor' });
export const UilLocationPoint = withDefaultProps(OriginalUilLocationPoint, { size: 24, color: 'currentColor' });