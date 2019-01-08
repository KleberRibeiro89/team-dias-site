import React, { Component } from 'react'



export default class Menu extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="sidebar">
                        <ul className="sidebar-menu">
                            <li className="sidebar-header sidebar-item">MAIN NAVIGATION</li>
                            <li className="active sidebar-item">
                                <a href="#" className="sidebar-link">
                                    <i className="fa fa-th"></i> <span>Widgets</span>
                                    <small className="label pull-xs-right bg-success">new</small>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a href="#" className="sidebar-link">
                                    <i className="glyphicon glyphicon-envelope"></i> <span>Mailbox</span>
                                    <small className="label pull-xs-right bg-danger">12</small>
                                </a>
                            </li>
                            <li className="sidebar-item"><a href="#" className="sidebar-link"><i className="fa fa-book"></i> <span>Documentation</span></a></li>
                            <li className="sidebar-header sidebar-item">LABELS</li>
                            <li className="sidebar-item"><a href="#" className="sidebar-link"><i className="fa fa-circle-o"></i> <span>Important</span></a></li>
                            <li className="sidebar-item"><a href="#" className="sidebar-link"><i className="fa fa-circle-o"></i> <span>Warning</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>);
    }
}