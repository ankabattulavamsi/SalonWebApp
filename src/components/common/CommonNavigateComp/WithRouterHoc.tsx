import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const WithRouterHoc = (Child: any) => {
    return(props :any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const location = useLocation();
        
        return <Child {...props} navigate={navigate} location={location} />
      }
}

export default WithRouterHoc

