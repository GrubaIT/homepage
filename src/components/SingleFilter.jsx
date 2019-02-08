import React from 'react';
import Select from 'grommet/components/Select';
import Label from 'grommet/components/Label';

const SingleFilter = ({
    className,
    title,
    elements,
    onChange,
    placeholder,
    value,
}) => (
    <div className={className}>
        <Label>{title}</Label>
        <Select
            options={elements}
            onChange={onChange}
            value={value}
            multiple
            messages={{
                multiple: 'Wybrano wiele',
            }}
            placeHolder={placeholder}
        />
    </div>
);

export default SingleFilter;
