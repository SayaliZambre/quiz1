import React from "react";

const ScheduledPage = () => {
    return (
        <div>
            <header>
                <h1>Schedule Page</h1>
            </header>
            <div className="container">
                <div className="upcoming-tests">
                    <h2>Upcoming Tests</h2>
                </div>
                <div className="test">
                    <div className="test-info">
                        <h2>PCM Test</h2>
                        <p>Date: November 15, 2023</p>
                        <p>Time: 2:00 PM - 4:00 PM</p>
                    </div>
                    <div className="exam">
                        <a href="/" className="btn">Start Exam</a>
                    </div>
                </div>
                <div className="test">
                    <div className="test-info">
                        <h2>PCB Test</h2>
                        <p>Date: November 20, 2023</p>
                        <p>Time: 3:00 PM - 5:00 PM</p>
                    </div>
                    <div className="exam">
                        <a href="/" className="btn">Start Exam</a>
                    </div>
                </div>
                <div className="test">
                    <div className="test-info">
                        <h2>Chemistry</h2>
                        <p>Date: November 20, 2023</p>
                        <p>Time: 3:00 PM - 5:00 PM</p>
                    </div>
                    <div className="exam">
                        <a href="/" className="btn">Start Exam</a>
                    </div>
                </div>
                <div className="test">
                    <div className="test-info">
                        <h2>Physics</h2>
                        <p>Date: November 20, 2023</p>
                        <p>Time: 3:00 PM - 5:00 PM</p>
                    </div>
                    <div className="exam">
                        <a href="/" className="btn">Start Exam</a>
                    </div>
                </div>
                <div className="test">
                    <div className="test-info">
                        <h2>Maths</h2>
                        <p>Date: November 20, 2023</p>
                        <p>Time: 3:00 PM - 5:00 PM</p>
                    </div>
                    <div className="exam">
                        <a href="/" className="btn">Start Exam</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduledPage;