import React, { Component } from 'react';
import MainForm from './MainForm';

export default class App extends Component {
    render() {
        return (
            <div className="form-container card">
                <form className="form card-body">
                    <MainForm />
                </form>
            </div>
        );
    }
}
