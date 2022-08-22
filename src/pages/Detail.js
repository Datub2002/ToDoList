import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

function Detail(props) {
       const {id } =  useParams();
       const {pathname} = useLocation();
       
      
    return (
        <div>
            Gía trị của tham số là : {id}
            <br />
            Tên path hiện tại : {pathname}
            <br />
            {/* đường dẫn : {href} */}
        </div>
    );
}

export default Detail;