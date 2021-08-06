import React, { Component } from 'react'
import './Resume.css'
import logo from './maybank-logo-svg-vector.svg'
import mypic from './IMG_20200207_164903.jpg'

export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <div class='box-1'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md'>
                                <h1 class='head-1'>Varun Choudhary</h1>
                                <div class='head-2'>Product Engineer, MBB Labs</div><br></br>

                                <img src={logo} class='mlogo'></img>

                            </div>
                            <div class='col-md'>
                                <img src={mypic} class='mypic'></img>
                            </div>

                        </div>

                    </div>

                </div>

                <div class='box-2'>
                    <div class='container'>
                        <div class='row'>
                            <div class='col-md'>
                                <a href='#'>
                                    <i class="fas fa-envelope"></i> aadarshvarun35@gmail.com
                                </a>
                            </div>
                            <div class='col-md'>
                                <a href='#'>
                                    <i class="fas fa-phone-square-alt"></i> 9131######
                                </a>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col-md'>
                                <a href='#'>
                                    <i class="fas fa-map-marked-alt"></i> Bhopal, India
                                </a>
                            </div>
                            <div class='col-md'>
                                <a href='https://www.linkedin.com/in/varun-choudhary-a54b6918b'>
                                    <i class="fab fa-linkedin"></i> linkedin.com/in/varun-choudhary-a54b6918b
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='container'>
                    <div class='skill-name'>
                        <div class='text-1'>
                            Education
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                UG Programme-(B Tech.)
                            </div>
                            <div class='text-3'>
                                National Institute of Technology, Calicut
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>
                                    <li>2017-2021</li><br />
                                    <li>Electrical and Electronics Engineering</li><br />
                                    <li>CGPA 8.04</li><br />
                                </ul>
                            </div>
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                Heigher Secondary School
                            </div>
                            <div class='text-3'>
                                Macro Vision Academy, Burhanpur
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>
                                    <li>2017</li><br />
                                    <li>PCM</li><br />
                                    <li>92.8%</li><br />
                                </ul>
                            </div>
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                Secondary School
                            </div>
                            <div class='text-3'>
                                Kendriya Vidyalaya No. 2, CPE Itarsi
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>
                                    <li>2015</li><br />

                                    <li>CGPA 10</li><br />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class='skill-name'>
                        <div class='text-1'>
                            Technical Skills
                        </div>
                        <div class='property-tab'>
                            <button type="button" class="btn btn-primary">Java</button>
                            <button type="button" class="btn btn-primary">Python</button>
                            <button type="button" class="btn btn-primary">React</button>
                            <button type="button" class="btn btn-primary">DBMS</button>
                            <button type="button" class="btn btn-primary">MySQL</button>
                            <button type="button" class="btn btn-primary">Data Structures</button>
                            <button type="button" class="btn btn-primary">Algorithms</button>
                            <button type="button" class="btn btn-primary">JavaScript</button>
                            <button type="button" class="btn btn-primary">HTML-CSS</button>
                        </div>
                    </div>
                    <div class='skill-name'>
                        <div class='text-1'>
                            Projects and Achievements
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                            </div>
                            <div class='text-3'>
                                Product Management system
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>
                                    <li>CRUD Operation</li><br />
                                    <li>Using Java, Spring-Boot, React</li><br />
                                </ul>
                            </div>
                        </div>

                        <div class='property'>
                            <div class='text-2'>
                            </div>
                            <div class='text-3'>
                                Contactless Distance Finder
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>

                                    <li>Using Arduino and Ultrasonic Sensor.</li><br></br>
                                    <li>Used to develop a cane for visually impaired persons.</li><br></br>
                                    <li>Water Tank Alarm</li><br></br>
                                </ul>
                            </div>
                        </div>
                        <div class='property'>
                            <div class='text-2'>

                            </div>
                            <div class='text-3'>
                                Bluetooth Controlled Car
                            </div>
                            <div class='text-4'>
                                <ul class='pt-2'>
                                    <li>IEEE Workshop</li><br />
                                    <li>The car can be controlled by mobile phone by its motion sensor.</li><br />

                                </ul>
                            </div>
                        </div>
                        <div class='skill-name'>
                            <div class='text-1'>
                                Soft Skills
                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>
                                    Strong team collaboration and problem solving skills.
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>

                                </div>
                                <div class='text-3'>
                                    Event Management
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>
                                    Leadership Qualities
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>

                                    Strong Communication skill in English and Hindi.
                                </div>

                            </div>
                        </div>
                    </div>



                    <div class='skill-name'>
                        <div class='text-1'>
                            Activities
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                Event Managed- Rubik's Cube League
                            </div>
                            <div class='text-3'>
                                Conducted by Math Club, NITC in collaboration with Indian Cube Association.
                            </div>

                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                Junior Executive, Marketing Committee, TATHVA'19
                            </div>
                            <div class='text-3'>
                                Managing local businesses that have their outlets in campus during TATHVA'19.
                            </div>
                        </div>
                        <div class='property'>
                            <div class='text-2'>
                                Calicut Marathon 2019, Kozhikode
                            </div>
                            <div class='text-3'>
                                Coordinated at the 10km mini marathon conducted by IIMK, 2019
                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                    NPL '19 Champion
                                </div>
                                <div class='text-3'>
                                    Cricket championship in NIT Calicut.
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class='skill-name'>
                            <div class='text-1'>
                                Interests and Hobbies
                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>
                                    Finance enthusiast
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>

                                </div>
                                <div class='text-3'>
                                    Voracious reader
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>
                                    Travelling
                                </div>

                            </div>
                            <div class='property'>
                                <div class='text-2'>
                                </div>
                                <div class='text-3'>

                                    Cricket and Football
                                </div>

                            </div>
                        </div>
                    </div>
                <div class='footer p-1'>
                    Thankyou!<br></br>
                    This page is created by Varun Choudhary using ReactJS. 
                </div>

                
            </React.Fragment>
        )
    }
}
