import {Link} from "react-router-dom";
function Team(){
    return(
        <div className="container">
            <div className="row p-5 mb-2 border-top">
                <h1 className="text-center mt-2 ">
                    Founder
                </h1>
            </div>
            <div className="row p-5 mt-2 text-muted fs-6">
                <div className="col-6 p-5 text-center">
                    <img
                    src="media/images/images/founder.webp"
                    style={{borderRadius:"100%", width:"70%"}}/>
                    <h4 className="mt-3">Anushka Chauhan</h4>
                    <h6>Founder, CEO</h6>
                </div>
                <div className="col-6 p-5">
                    <p>
                        Anushka Chauhan founded PennyWise in 2026 to overcome the
                        hurdles she faced during his decade long stint as a trader. Today,
                        PennyWise has changed the Indian broking industry.
                    </p>
                    <p> She is a student of Vivekananda
                        Institute of Professional Studies.
                    </p>
                    <p>
                        Drawing Imaginary substances is her zen.
                    </p>
                    <p>
                        Connect <Link to={"/"} >onHomePage</Link> /
                        <a href="https://www.linkedin.com/in/anushka-chauhan-86296a276/">LinkedIn </a>
                        / <a href="https://github.com/anushkxa">Github</a>
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Team;