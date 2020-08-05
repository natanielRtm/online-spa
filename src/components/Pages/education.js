import React, {Component} from 'react';

class Education extends Component{
    render(){
        return(
            <div>
                <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">University of Bina Nusantara</h3>
                            <div className="subheading mb-3">Bachelor of Information System</div>
                            <div>Information System Accounting - Web Development Track</div>
                            <p>GPA: 2.85</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2009 - May 2013</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0"> 38 Senior High School</h3>
                            <div className="subheading mb-3">Courses in Social Science Program of Senior High School</div>
                            <p>GPA: 8.00</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">August 2005 - May 2008</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            </div>
        )
    }
}
export default Education;