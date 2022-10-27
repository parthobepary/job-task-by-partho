import React from 'react';
import "../../assets/css/event-schedule.css";

const EventTable = () => {
    return (
        <div className='mt-10'>
            <div className='box-container'>
                <div className="grid grid-cols-7">
                    <div className='border1'></div>
                    <div className='border2'> Tue</div>
                    <div className='border2'> Wed</div>
                    <div className='border2'> Thu</div>
                    <div className='border2'> Fri</div>
                    <div className='border2'> Sat</div>
                    <div className='border2'> Sat</div>
                    <div className='border time'> 09.00</div>
                    <div className='border'>
                        <div className='content-box'>
                            <h5 className='header-text'>02-08-2022</h5>
                            <div className='intro-box'>
                                <h5 className='header-text'>Intro the conference</h5>
                                <h5>09.00-11.50</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'>
                    <div className='content-box'>
                            <h5 className='header-text'>07-08-2022</h5>
                            <div className='intro-box'>
                                <h5 className='header-text'>Lunch Break</h5>
                                <h5>09.00-10.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border time'> 10.00</div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'>
                    <div className='content-box'>
                            <h5 className='header-text'>12-08-2022</h5>
                            <div className='intro-box'>
                                <h5 className='header-text'>React Press conference</h5>
                                <h5>10.00-11.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border time'> 17.00</div>
                    <div className='border'> </div>
                    <div className='border'>
                    <div className='content-box'>
                            <h5 className='header-text'>17-08-2022</h5>
                            <div className='intro-box2'>
                                <h5 className='header-text'>Gust Denner Break</h5>
                                <h5>17.00-18.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border'> </div>
                    <div className='border'> </div>
                    <div className='border'>
                    <div className='content-box'>
                            <h5 className='header-text'>20-08-2022</h5>
                            <div className='intro-box2'>
                                <h5 className='header-text'>After Work Party</h5>
                                <h5>17.00-18.30</h5>
                            </div>
                        </div>
                    </div>
                    <div className='border'> </div>
                </div>
            </div>
        </div>
    );
};

export default EventTable;