import React from 'react'

import Hexagon from 'react-hexagon'

import Img1 from '../../assets/img1.png'
import DashboardIcon from './icons/Dashboard'
import LendingIcon from './icons/Lending'
import StakingIcon from './icons/Staking'
import LotteryIcon from './icons/Lottery'
import CoalIcon from './icons/Coal'
import NFTIcon from './icons/NFT'




import Dashboard from './menuitems/Dashboard'

import '../../assets/css/Menu.css'

class Menu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            openTab:1,
            DashIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            LendingIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            StakingIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            LotteryIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            CoalIcon: {
                color: this.noHighlight,
                icon: this.iconnoHighlight
            },
            NFTIcon: {
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
                                            icon: this.iconHighlight
                                        }
                                    })
                                }}
                                onMouseLeave={() => {
                                    this.setState({
                                        DashIcon: {
                                            color: this.noHighlight,
                                            icon: this.iconnoHighlight
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
                                    <DashboardIcon fill={this.state.DashIcon.icon}  />
                                </Hexagon>
                                <div className="flex mt-4 justify-center items-center">
                                    <span className="font-bold text-primary text-xl">
                                        Dashboard
                                    </span>
                                </div>
                            </div>

                            <div 
                            className="absolute h-32 w-32 -mt-56 -ml-36" 
                            style={{  }}
                            onMouseEnter={() => {
                                this.setState({
                                    LendingIcon: {
                                        color: this.greenHighlight,
                                        icon: this.iconHighlight
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    LendingIcon: {
                                        color: this.noHighlight,
                                        icon: this.iconnoHighlight
                                    }
                                })
                            }}
                        >
                            <Hexagon
                                style={this.state.LendingIcon.color}
                                className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        openTab:2
                                    })
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <LendingIcon fill={this.state.LendingIcon.icon} />
                            </Hexagon>
                            <div className="flex mt-4 justify-center items-center">
                                <span className="font-bold text-primary text-xl">
                                    Lending
                                </span>
                            </div>
                        </div>

                        <div 
                            className="absolute h-32 w-32 -mt-56" 
                            style={{ marginLeft: '25rem' }}
                            onMouseEnter={() => {
                                this.setState({
                                    StakingIcon: {
                                        color: this.greenHighlight,
                                        icon: this.iconHighlight
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    StakingIcon: {
                                        color: this.noHighlight,
                                        icon: this.iconnoHighlight
                                    }
                                })
                            }}
                        >
                            <Hexagon
                                style={this.state.StakingIcon.color}
                                className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        openTab:3
                                    })
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                               <StakingIcon fill={this.state.StakingIcon.icon} />
                            </Hexagon>
                            <div className="flex mt-4 justify-center items-center">
                                <span className="font-bold text-primary text-xl">
                                    Staking
                                </span>
                            </div>
                        </div>
                        
                        <div 
                            className="absolute h-32 w-32 mt-16 -ml-36"
                            onMouseEnter={() => {
                                this.setState({
                                    LotteryIcon: {
                                        color: this.blueHighlight,
                                        icon: this.iconHighlight
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    LotteryIcon: {
                                        color: this.noHighlight,
                                        icon: this.iconnoHighlight
                                    }
                                })
                            }}
                        >
                            <Hexagon
                                style={this.state.LotteryIcon.color}
                                className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        openTab:4
                                    })
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            >
                               <LotteryIcon fill={this.state.LotteryIcon.icon} />
                            </Hexagon>
                            <div className="flex mt-4 justify-center items-center">
                                <span className="font-bold text-primary text-xl">
                                    Lottery
                                </span>
                            </div>
                        </div>

                        <div 
                            className="absolute h-32 w-32 mt-16 " 
                            style={{ marginLeft: '25rem' }}
                            onMouseEnter={() => {
                                this.setState({
                                    CoalIcon: {
                                        color: this.blueHighlight,
                                        icon: this.iconHighlight
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    CoalIcon: {
                                        color: this.noHighlight,
                                        icon: this.iconnoHighlight
                                    }
                                })
                            }}
                        >
                            <Hexagon
                                style={this.state.CoalIcon.color}
                                className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        openTab:5
                                    })
                                }}
                                data-toggle="tab"
                                href="#link5"
                                role="tablist"
                            >
                                <CoalIcon fill={this.state.CoalIcon.icon} />
                            </Hexagon>
                            <div className="flex mt-4 justify-center items-center">
                                <span className="font-bold text-primary text-xl">
                                    Coal Mining
                                </span>
                            </div>
                        </div>
                        
                        <div 
                            className="absolute h-32 w-32  ml-32" 
                            style={{ marginTop:'13rem' }}
                            onMouseEnter={() => {
                                this.setState({
                                    NFTIcon: {
                                        color: this.greenHighlight,
                                        icon: this.iconHighlight
                                    }
                                })
                            }}
                            onMouseLeave={() => {
                                this.setState({
                                    NFTIcon: {
                                        color: this.noHighlight,
                                        icon: this.iconnoHighlight
                                    }
                                })
                            }}
                        >
                            <Hexagon
                                style={this.state.NFTIcon.color}
                                className="hexagon-shadow transistion transform hover:-translate-y-1 hover:scale-110 duration-500"
                                onClick={e => {
                                    e.preventDefault();
                                    this.setState({
                                        openTab:6
                                    })
                                }}
                                data-toggle="tab"
                                href="#link6"
                                role="tablist"
                            >
                                <NFTIcon fill={this.state.NFTIcon.icon} />
                            </Hexagon>
                            <div className="flex mt-4 justify-center items-center">
                                <span className="font-bold text-primary text-xl">
                                    NFT
                                </span>
                            </div>
                        </div>

                        </div>

                        <img className="w-96" src={Img1} alt="-" />

                    </div>
                    <div className="w-1/2">
                        <div className="h-screen w-1/2 flex justify-center items-center ml-32">
                            <div className="tab-content tab-space">
                                <div className={this.state.openTab === 1 ? "block" : "hidden"} id="link1">
                                    <Dashboard />
                                </div>
                                <div className={this.state.openTab === 2 ? "block" : "hidden"} id="link2">
                                    {/* <img src={img2} alt="-"  className="w-96"/> */}
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        
                                    </p>
                                </div>
                                <div className={this.state.openTab === 3 ? "block" : "hidden"} id="link3">
                                    {/* <img src={img3} alt="-"  className="w-96"/> */}

                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        
                                    </p>
                                </div>
                                <div className={this.state.openTab === 4 ? "block" : "hidden"} id="link4">
                                    {/* <img src={img4} alt="-"  className="w-96"/> */}
                                    <p>
                                        Collaboratively administrate empowered markets via
                                        plug-and-play networks. Dynamically procrastinate B2C users
                                        after installed base benefits.
                                        
                                    </p>
                                </div>
                                <div className={this.state.openTab === 5 ? "block" : "hidden"} id="link5">
                                    {/* <img src={img5} alt="-"  className=""/> */}
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        
                                    </p>
                                </div>
                                <div className={this.state.openTab === 6 ? "block" : "hidden"} id="link6">
                                    {/* {/* <img src={img6} alt="-"  className="w-96"/> */}
                                    <p> 
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Menu