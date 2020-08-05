import React, {Component} from 'react';

class About extends Component
{
    render(){
        return(
           
            <div className="container-fluid p-0">
       
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Nataniel
                        <span className="text-primary">Rantetampang</span>
                    </h1>
                    <div className="subheading mb-5">
                        Sukamaju Permai Blok w No 11 · (+62) 087-888-230-432 ·
                        <a href="mailto:name@email.com">nataniel.rtm@email.com</a>
                    </div>
                    <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="#"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            
            </div>

        )

    }
}
export default About;