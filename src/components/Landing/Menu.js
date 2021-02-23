import React from 'react'

import Hexagon from 'react-hexagon'


class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            openTab:1,
            DashIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            StatsIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            ZapIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            EarnIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            VaultsIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            LendingIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            }
        }
    }

    blueHighlight = {
        stroke: '#1b3e8f' ,fill:"#1b3e8f"
    }

    greenHighlight = {
        stroke: '#58bc8a' ,fill:"#58bc8a"
    }

    noHighlight = {
        stroke: '#ffffff' ,fill:"#ffffff"
    }
    iconnoHighlight = "#1b3e8f"
    iconHighlight  = "#ffffff"
    render(){
        return(
            <div>
                <div className="lg:flex w-full -mt-12"> 
                    <div className="h-screen w-1/2 flex justify-center items-center">
                        <div className="tablist">
                            <div 
                                className="absolute h-32 w-32  ml-32" 
                                style={{ marginTop:'-24rem' }}
                                onMouseEnter={() => {
                                    this.setState({
                                        DashIcon: {
                                            color: this.blueHighlight,
                                        }
                                    })
                                }}
                                onMouseLeave={() => {
                                    this.setState({
                                        DashIcon: {
                                            color: this.noHighlight,
                                        }
                                    })
                                }}
                            >
                                <Hexagon
                                     style={this.state.DashIcon.color}
                                     className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500 "
                                     onClick={e => {
                                         e.preventDefault();
                                         this.setState({
                                             openTab:1
                                         })
                                     }}
                                     data-toggle="tab"
                                     href="#link1"
                                     role="tablist"
                                >

                                </Hexagon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu