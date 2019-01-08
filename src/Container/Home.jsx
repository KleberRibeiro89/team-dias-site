import React, { Component } from 'react'
import HomeCard from '../ui/HomeCard'
import { hashHistory } from 'react-router';

export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () =>  hashHistory.push('/release')
    }

    homeCardBackLog = {
        title: 'BackLog',
        text: 'Manage BackLog',
        action: () => hashHistory.push('/backlog')
    }

    homeCardCardSprings = {
        title: 'CardSprings',
        text: 'Manage CardSprings',
        action: () => hashHistory.push('/sprint')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard {...this.homeCardReleases} />

                    <HomeCard {...this.homeCardBackLog} />

                    <HomeCard {...this.homeCardCardSprings} />
                </div>
            </div>
        );
    }
}