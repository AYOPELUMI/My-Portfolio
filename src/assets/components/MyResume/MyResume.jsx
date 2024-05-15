import "./MyResume.scss"
import "./Responsive.scss"
import { AnimateComponent } from "../AnimateComponent/AnimateComponent"
export const MyResume = () => {
    return (
        <AnimateComponent className="resumeCtnr"
            component={
                <>
                    <h2>Check out my Resume</h2>
                    <a className="resume-button" href="/Resume/resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a>
                </>}
            >
        </AnimateComponent>
    )
}

