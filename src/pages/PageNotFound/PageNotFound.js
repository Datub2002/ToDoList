import React from 'react';
import {useLocation} from 'react-router-dom';
function PageNotFound(props) {
    let {pathname} = useLocation();
    return (
        <div>
            Không tìm thấy trang : {pathname}
        </div>
    );
}

export default PageNotFound;