import React from 'react';

import SingleFilter from './SingleFilter';

export default ({ containerClassName, singleFilterClassName, filters }) => {
    return (
        <section className={containerClassName}>
            {filters.map(filter => (
                <SingleFilter
                    className={singleFilterClassName}
                    title={filter.title}
                    elements={filter.allElements}
                    placeholder={filter.placeholder}
                    value={filter.chosenElements}
                    onChange={filter.onChange}
                    key={`${filter.title}-event-filter`}
                />
            ))}
        </section>
    );
};
