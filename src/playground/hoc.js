

// HOC = Higher Order Component - compontent that renders another componenent

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>info</h1>
        <p>this info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
           {props.isAdmin &&  <p>This is private warning</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? <WrappedComponent {...props} /> : <p> Please log in </p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requiredAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, document.getElementById('app'));