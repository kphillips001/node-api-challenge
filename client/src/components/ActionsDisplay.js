import React from 'react';
import cuid from 'cuid';

const ActionsDisplay = (props) => {
    return(
        <div>
            {
                props.actionsDisplay.map((action) => {
                    return(
                        <div key={cuid()}>
                            <p>{action.description}</p>
                           </div> 
                    )
                })
            }
        </div>
    )
}

export default ActionsDisplay;