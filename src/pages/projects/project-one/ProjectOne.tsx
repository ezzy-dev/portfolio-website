import React from "react";
import "./ProjectOne.scss";
import design1 from "../../../assets/images/project-one/design1.jpg";
import design2 from "../../../assets/images/project-one/design2.jpg";
import design3 from "../../../assets/images/project-one/design3.jpg";
import prototype from "../../../assets/images/project-one/prototype.jpg";
import placement from "../../../assets/images/project-one/placement.jpg";
import demovideo from "../../../assets/images/project-one/demovideo.mp4";
import CLevelImplementation from "../../../implementations/project-one/CLevelImplementation";
import BLevelImplementation from "../../../implementations/project-one/BLevelImplementation";
import ALevelImplementation from "../../../implementations/project-one/ALevelImplementation";

function ProjectOne(): JSX.Element {
  return (
    <div className="project-one">
      <h1 className="project-one__header">
        Project 1 - Designing a Smart Shower UI
      </h1>
      <div className="project-one__design">
        <h2 className="project-one__subheading">1. Design</h2>
        <div className="project-one__design-requirements">
          <h3 className="project-one__super-subheading">Design Requirements</h3>
          <p>
            The first step of this project was to generate a list of design
            requirements for the smart shower These design requirements focus on
            the UI that will allow the user to control the smart shower and view
            its related data. Below is a list of the design requirements:
          </p>
          <ul className="project-one__requirements-list">
            <li>
              The smart shower will be able to control the water temperature and
              pressure in the shower
            </li>
            <li>
              The smart shower should track how long the spent in the shower
            </li>
            <li>
              The smart shower should be able to connect the user’s smart phone
              to the smart shower
            </li>
            <li>
              The user wants the temperature and water pressure to stay the same
              for the duration of the shower
            </li>
            <li>The user wants to conserve as much water as possible</li>
            <li>
              The user wants to know what their average water consumption/time
              spent in the shower is
            </li>
            <li>
              The user wants to be able to save their “default settings” for the
              shower’s properties
            </li>
            <li>
              The user wants to be able to adjust the nozzle on the shower head
            </li>
            <li>
              The user wants to get notifications from their smart phone while
              in the shower
            </li>
            <li>The user wants to be able to listen to music in the shower</li>
            <li>
              The user wants to be able to take hands-free calls from the shower
            </li>
            <li>
              The user doesn’t want the shower to be harder to use than a
              non-smart shower
            </li>
            <li>
              The user doesn’t want to be forced to use smart features if they
              aren’t necessary
            </li>
          </ul>
          <p>
            After generating this list of design requirements and sketches,
            three individuals were interviewed for feedback. Below are the
            interview questions asked:
          </p>
          <ul className="project-one__questions-list">
            <li>
              How frequently do you take a shower and how long do your showers
              usually last?
            </li>
            <li>
              Do you track how much water you use on a monthly basis in your
              shower/do you care how much you use?
            </li>
            <li>
              What are some things you find inconvenient about your shower?
            </li>
            <li>
              If you had a smart shower, what would you want it to be capable
              of?
            </li>
            <li>
              Rate the following features on a scale from 1-5, with 1 being the
              lowest and 5 being the highest:
            </li>
            <ol className="project-one__questions-sublist">
              <li>Temperature and nozzle pressure controls</li>
              <li>Tracking for how long you shower/how much water you use</li>
              <li>
                Profiles you can set default temperatures and water pressures in
              </li>
              <li>Phone connectivity</li>
              <li>Music connectivity</li>
            </ol>
          </ul>
          <p>From these questions, the following feedback was received:</p>
          <ul className="project-one__answers-list">
            <li>
              Most users do not track their water consumption in the shower.
              This is most likely because there is no easy or convenient way to
              do this.
            </li>
            <li>
              The primary functionality users would like to see in their smart
              shower would be to have better control over the temperature and
              water pressure. Smart phone connectivity was also important, just
              not as important as temperature and water pressure.
            </li>
            <li>
              From the given list of features, users said they would most prefer
              having moe granular temperature and pressure controls along with
              the ability to save their default settings as a profile.
            </li>
            <li>
              One other feature that was suggested by two of the interviewed
              individuals was voice activation -- although this was not one of
              my original design requirements it seems like it would be a good
              additional feature to add down the line.
            </li>
          </ul>
        </div>
        <div className="project-one__design-alternatives">
          <h3 className="project-one__super-subheading">Design Alternatives</h3>
          <p>
            With the requirements developed and refined, the next step was to
            generate some design alternatives. I picked three aspects of the
            smart object to iterate over using the 10+15min method and came up
            with the following sketches:
          </p>
          <div className="project-one__alternatives-img">
            <img src={design1}></img>
            <img src={design2}></img>
            <img src={design3}></img>
          </div>
        </div>
        <div className="project-one__design-prototype">
          <h3 className="project-one__super-subheading">Design Prototype</h3>
          <p>
            The last step before starting on the implementation is to create a
            design prototype of the UI. Using the design requirements and the
            sketches derived from the design alternatives, I generated the
            following UI prototype for the smart shower:
          </p>
          <div className="project-one__prototype-img">
            <img src={prototype}></img>
            <div className="project-one__prototype-paragraphs">
              <p>
                From my interviews, everyone said they felt the UI prototype
                looked clean and user friendly, which is great feedback to get
                (everyone likes getting it right on the first try)! After asking
                for any critiques, the one point of feedback I got was that the
                settings should not use incrementation buttons but rather should
                use dragging/sliding (as in the temp & pressure prototype).
              </p>
              <p>
                After receiving feedback on my prototype, I was ready to begin{" "}
                implementation of my interface. To start, my goal was to just
                develop the &quot;Home&quot; and &quot;Temp & Pressure&quot;
                tabs to complete my C-level goal.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-one__implementation">
        <h2 className="project-one__subheading">2. Implementation</h2>
        <h3 className="project-one__super-subheading">
          C-Level Implementation
        </h3>
        <p>
          To start off my implementation, I begain by building out a basic UI
          for my smart object (as required by the C-goals). After generating the
          prototype sketch as seen in the section above, my goal was to
          implement a basic UI that reflected the sketch. To do this, I added in
          three different thinngs -- a display that shows the temperature and
          pressure, a home screen that shows some statistics about the shower
          usage, basic controls to turn the shower on/off and to change the
          water temperature and pressure, and fixed values for temperature and
          pressure, and controls to set different profiles that have saved
          values for temperature and pressure.
        </p>
        <CLevelImplementation />
        <div className="project-one__prototype-img">
          <img src={placement}></img>
          <div className="project-one__prototype-paragraphs">
            <p>
              To the left is a sketch of where this interface might reside in a
              shower. Although it may be impractical or expensive, having a
              tablet-like item where the shower knob would go seems like the
              best solution.
            </p>
          </div>
        </div>
        <h3 className="project-one__super-subheading">
          B-Level Implementation
        </h3>
        <p>
          For my B-level implementation, I decided to go with option 2 --
          connecting to a mock secondary device. One of my design goals involved
          connecting the smart shower to a secondary device, to serve the
          purpose of both retrieving notificiations from the users phone and
          playing music hands-free from the shower. To do this, I added a new
          tab called phone that would allow users to connect their phone to the
          smart shower and also see a list of connected devices. By clicking a
          paired device, users can see basic information about their phone like
          battery level and number of notifications. Also, by toggling the
          bluetooth on and off it will show/hide the information.
        </p>
        <BLevelImplementation />
        <h3 className="project-one__super-subheading">
          A-Level Implementation
        </h3>
        <p>
          For my A-level implementation, I decided to simulate the use of the
          shower over time. To do this, I hooked into the shower on/off button
          and used this to toggle the state of the home page. When the shower is
          turned on, the home page goes from showing data about your average
          shower usage (i.e. number of weekly showers, average shower time, and
          water last used). To showing real-time data about your shower (i.e.
          total time in shower, amount of water used in shower, and average
          temperature/pressure).{" "}
          <b>To simulate this, turn the shower on and off</b>
        </p>
        <ALevelImplementation />
        <h3 className="project-one__super-subheading">Demo Video</h3>
        <p>
          Below is a brief video to demonstrate how the smart shower UI works
        </p>
        <video width="960" height="540" controls>
          <source src={demovideo} type="video/mp4" />
          Your browser does not support HTML5 video
        </video>
      </div>
    </div>
  );
}

export default ProjectOne;
