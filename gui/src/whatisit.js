import React from 'react'
import "./whatisit.css"
import {  StarOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';


function Whatisit() {
    

    return (
        <div className="wisit">
            <div className="logo">
                    <span className="header_logo_name">
                        <StarOutlined className="header_logo_icon" style={{ color: "rgb(93, 188, 210)", fontSize: 30 }} />
                        ROA</span>
            </div>
            <div className="frame_content">
                <div className="Heading">
                    ROGUE ON ARRIVAL
                </div>
                <div className="text_about">
                        ROA is a platform that offers both fans and artists the ability to foster unique and mutually
        beneficial relationships while also funding the initial growth stages of an artist's career.
                </div>  
                <div className="heading_about" style={{marginLeft: 10}}>
                    How does it work?
                </div>
                <div className="text_about">
                    Artists are assigned a fixed number of “slices” and each slice has an initial USD value. There
will be a set date in which the slices will be released and fans are able to purchase them.
                </div>
                <div className="text_about">
                Once a fan has a slice they are able to do a multitude of things.
                </div>
                <div className="text_about">
                Slices can be used in a bid/ask marketplace.
                </div>
                <div className="text_about">
                    <span className="heading_about">Bid:</span>
                    If a fan owns a slice, and somebody places a bid order for that slice, the slice holder will be
notified immediately and they are able to sell if they would like to.
                </div>
                <div className="text_about">
                    <span className="heading_about">Ask:</span>
                    Fans who own a slice are also able to sell by placing an asking price. Once they list their
slice for their asking price, fans are able to purchase it.
                </div>
                <div className="text_about">
                    Fans are able to connect with artists in natural ways that builds longlasting and meaningful
relationships.
                </div>
                <div className="text_about">
                    <span className="heading_about">Connecting:</span>
                    Once a fan is a slice holder, it opens the doors to exclusive and unique
interactions with that artist. For example…
                </div>
                    <div className="text_about">
                <span className="heading_about">Collaborating:</span>
                    Ability to join the creative process by submitting ideas to an artist for any
project they are working on and the top 2-3 being selected for the artist to use. Whether it is a
beat, a sound bite, graphic designs, etc…
                </div>
                <div className="text_about">                         
                    <span className="heading_about">Bi-weekly Q and As:</span>
                    Each Q & A week will be catered towards a theme where fans can
submit questions and 21 of them will be selected. The artist will answer these in an interview
format.
                </div>
                <div className="text_about">
                    <span className="heading_about">Exclusive Merch:</span>
                    Access to exclusive merchandise from that artist that is non-accessible to
fans who do not own their slice.
                </div>
                <div className="text_about">
                    <span className="heading_about">Exclusive Interactions:</span>
                    "Cup of Coffee Setting" 15 minute sit down with an artist. Perform a
TikTok with the artist that goes on their channel. Chance to play video games with the artist
streamed on twitch and so much more!
                </div>
                <div className="text_about">
                    ROA is the only crowdfunding marketplace that offers fans a legitimate capability to make a
return from their slices and connect with their favorite artists in the most meaningful ways.
                </div>
            </div>
            
            <Link to="/" style={{textDecoration: "None", color: "inherit" }}>
                <div className="back">
                    <span>
                        back
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default Whatisit
