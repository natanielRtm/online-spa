import React, {Component} from 'react';

class Awards extends Component{
    render(){
        return(
            <div>
                <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Awards & Certifications</h2>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            REACT AND REACT NATIVE BASIC - HACKTIV8 Certification
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            Membuat Poster Modern menggunakan Photoshop - maubelajarapa.com Certification
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Belajar SEO dasar untuk pemula - PAKAR Certification
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                            1
                            <sup>st</sup>
                            Belajar Digital Marketing sampai mahir - Luarsekolah.com Certification
                        </li>
                        
                    </ul>
                </div>
            </section>
            </div>
        )
    }
}
export default Awards;