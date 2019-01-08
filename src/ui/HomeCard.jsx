import React from 'react';

const HomeCard = (props) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card" style={{ width: '20rem' }}>
                <img className="card-img-top rounded mx-auto d-block" style={{paddingTop:'3px', width:'100px', height:'100px'}} src="https://instagram.fsdu17-1.fna.fbcdn.net/vp/36538d068cde68ed922aacde508c97cb/5CB79BD2/t51.2885-15/e35/47585101_127923418240005_5133336208115701796_n.jpg?_nc_ht=instagram.fsdu17-1.fna.fbcdn.net"  alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{props.title}</h4>
                    <p className="card-text">{props.text}</p>
                    <a href="javascript:;" onClick={props.action} className="btn btn-primary">{props.title}</a>
                </div>
            </div>
        </div>
    );
}

export default HomeCard;