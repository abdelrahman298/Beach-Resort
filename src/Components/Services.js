import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';



export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Coctail",
                info: 'Dolor consectetur nulla laborum esse,Dolor consectetur nulla laborum esse'
            },
            {
                icon: <FaHiking />,
                title: "Endless Hikinh",
                info: 'Dolor consectetur nulla laborum esse,Dolor consectetur nulla laborum esse'
            },
            {
                icon: <FaShuttleVan />,
                title: "Free ShuttleVan",
                info: 'Dolor consectetur nulla laborum esse,Dolor consectetur nulla laborum esse'
            },
            {
                icon: <FaBeer />,
                title: "Strongest Cola",
                info: 'Dolor consectetur nulla laborum esse,Dolor consectetur nulla laborum esse'
            },

        ]
    }


    render() {
        return (
            <section className="service">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {

                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p> {item.info} </p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
