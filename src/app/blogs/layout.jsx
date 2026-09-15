import React from 'react';

const layoutBlog = ({children}) => {
    return (
        <div>
            <h2>This is a layout of Blog!</h2>
            <div>{children}</div>
        </div>
    );
};

export default layoutBlog;