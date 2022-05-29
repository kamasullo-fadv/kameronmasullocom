import React, { Component } from 'react';
import Context from '../Context'
import './LandingPage.css'
import nameLogo from '../common/img/name_white.jpg';

export default class LandingPage extends Component {
    static contextType = Context;
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    componentDidMount() {
        this.context.setCurrentPath('landingPage')
    }
    
    navigateToMusic = (e) => {
        e.preventDefault();
        this.context.setCurrentPath(
            'musicPath',
            () => this.props.history.push('/music'))
    }

    navigateToDev = (e) => {
        e.preventDefault();
        this.context.setCurrentPath(
            'webDevPath',
            () => this.props.history.push('/dev'))
    }

    render() {
        return (
            <div className='col-12 bg-light' style={{ minHeight: '100vh' }}>
                <div className='col-12 d-flex justify-content-center'>
                    <img className='col-lg-8 col-md-12' src={ nameLogo } alt='Kameron Masullo' style={{ maxWidth: '100vw' }} />
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center h-100">
                    <div className="card bg-dark col-lg-4 col-md-6 col-sm-8">
                        <div className='card-header'>
                            <div className='col text-center'>
                                <h2 className=''>Welcome</h2>
                                <h5>I am a Musician and Software Engineer</h5>
                            </div>
                        </div>
                        <div className='card-body d-flex justify-content-evenly align-items-center'>
                            <button className="col-3 btn btn-light" onClick={this.navigateToMusic}>Music</button>
                            <button className="col-3 btn btn-light" onClick={this.navigateToDev}>Dev</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}