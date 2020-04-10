import React from 'react';

const ActionsForm = (props) => {
    return(
        <div>
            <button onClick={props.getActionsBtn}>Get actions</button>
        </div>
    )
};

export default ActionsForm;