import React from "react";
import "./ProjectThree.scss";
import cgoals_sketch1 from "../../../assets/images/project-three/cgoals_sketch1.png";
import cgoals_sketch2 from "../../../assets/images/project-three/cgoals_sketch2.png";
import cgoals_graphics from "../../../assets/images/project-three/cgoals_graphcs.png";
import cgoals_wireframe from "../../../assets/images/project-three/wireframe.png";
import bgoals_sketch1 from "../../../assets/images/project-three/bgoals_sketch1.jpg";
import bgoals_sketch2 from "../../../assets/images/project-three/bgoals_sketch2.jpg";
import bgoals_narrative1 from "../../../assets/images/project-three/bgoals_narrative1.jpg";
import bgoals_narrative2 from "../../../assets/images/project-three/bgoals_narrative2.jpg";
import bgoals_content1a from "../../../assets/images/project-three/bgoals_content1a.jpg";
import bgoals_content1b from "../../../assets/images/project-three/bgoals_content1b.jpg";
import bgoals_content2 from "../../../assets/images/project-three/bgoals_content2.jpg";
import bgoals_content3 from "../../../assets/images/project-three/bgoals_content3.jpg";
import bgoals_interaction1 from "../../../assets/images/project-three/interaction1.jpg";
import bgoals_interaction2 from "../../../assets/images/project-three/interaction2.jpg";
import agoals_sketch1 from "../../../assets/images/project-three/agoals_sketch1.png";
import agoals_sketch2 from "../../../assets/images/project-three/agoals_sketch2.png";
import agoals_gestures from "../../../assets/images/project-three/agoals_gestures.png";
import demovideo from "../../../assets/images/project-three/demo_video.mp4";

function ProjectThree(): JSX.Element {
  return (
    <div className="project-three">
      <h1 className="project-three__header">Project 3 - UC AR-Verse</h1>
      <div className="project-three__content-creation">
        <h2 className="project-three__subheading">1. Content Creation</h2>
        <div className="project-three__real-world-sample">
          <h3 className="project-three__super-subheading">
            Sampling the Real World
          </h3>
          <p>
            The first thing we wanted to consider for this project was how UC
            faculty would create content for the UC AR-Verse experience. To
            start, we first took a sample of sharable materials around the UC
            campus, including things like flyers, art, and photos. Below are
            some sketches we created to showcase these locations
          </p>
          <h4 className="project-three__image-subheading">
            Sketches from Sampling the Real World
          </h4>
          <div className="project-three__csketches">
            <img src={cgoals_sketch1}></img>
            <img src={cgoals_sketch2}></img>
          </div>
          <p>
            Next, we found some online examples of how UC faculty and students
            share content electronically. Below are some of the examples we
            found
          </p>
          <h4 className="project-three__image-subheading">
            Examples of Sharing Content Electronically
          </h4>
          <div className="project-three__csketches">
            <img src={cgoals_graphics}></img>
          </div>
          <p>
            Then, we took some notes on our findings and generated the following
          </p>
          <ul className="project-three__list">
            <li>
              Most, if not all, advertisements the schools or clubs put out
              included the name of the event/organization, a date and time of
              the event, and a location.
            </li>
            <li>
              If the event provides food, they included it in the
              poster/drawing.
            </li>
            <li>
              For recruitment efforts, the organization/club included what they
              can offer and a description of what their purpose and goals are.
            </li>
            <li>
              Designs are pretty minimal except when it comes to design oriented
              organizations.
            </li>
          </ul>
          <p>
            After generating these sketches and finding these online examples,
            we conducted 4 interviews with students to assess what new kinds of
            content one might want to share using AR. Below is a list of the
            interview questions along with the responses from the four students
          </p>
          <h4 className="project-three__list-header">Interview Questions</h4>
          <ol className="project-three__list">
            <li>
              What type of content would you want to see in a mobile AR
              platform?
            </li>
            <li>
              Is there any information you specifically don’t want to see?
            </li>
            <li>Do you think video should be used at all in AR?</li>
            <li>
              If so, do you prefer to watch videos in AR or would you want the
              AR content to send you a link to the video where it would open on
              your phone?
            </li>
            <li>
              How much freedom should students have on content creation around
              campus?
            </li>
            <li>
              What information draws your attention the most when looking at an
              advertisement for a club/organization?
            </li>
          </ol>
          <div className="project-three__list-container">
            <div className="project-three__list-column">
              <h4 className="project-three__list-header">Student 1 Response</h4>
              <ol className="project-three__list">
                <li>
                  It would be cool if students could display their art and
                  models like an art show.
                </li>
                <li>
                  No, all the posters I look at seem to only have the needed
                  information.
                </li>
                <li>
                  I think it has a place, especially if AR glasses become a
                  thing. I can imagine people watching videos together.
                </li>
                <li>
                  I think a link makes sense for mobile AR, but for AR glasses I
                  can see it being annoying.
                </li>
                <li>
                  It would be awesome if there were spaces designated for
                  creativity where students can create and change art for the
                  campus to see.
                </li>
                <li>
                  I’m always drawn to the pictures, then I read the name of the
                  organization since it is usually the largest text. If it
                  interests me then I’ll keep reading and look for a date and
                  time.
                </li>
              </ol>
              <h4 className="project-three__list-header">
                Student 2 Responses
              </h4>
              <ol className="project-three__list">
                <li>
                  I think the benefit of an AR platform is the functionality
                  that can be put in what would be static material items.
                  Animations could be shown, buttons could be added to RSVP to
                  an event, etc. Any interaction that becomes more efficient
                  would be cool, less time looking stuff up.
                </li>
                <li>
                  With new functionality being added, I don’t want to see excess
                  buttons when a gesture could do the same thing.
                </li>
                <li>Yes, I don’t see why it wouldn’t.</li>
                <li>
                  I’d prefer to get a link. It doesn’t really make sense to
                  watch a video in AR through a phone.
                </li>
                <li>
                  I think giving students the ability to add content around
                  campus should be a priority, but I also think the content
                  should get checked by a staff member before being made public.
                </li>
                <li>
                  Pictures, I don’t really look at anything a club puts out if
                  it doesn’t have pictures. If I see something that interests
                  me, I’ll finish reading it.
                </li>
              </ol>
            </div>
            <div className="project-three__list-column">
              <h4 className="project-three__list-header">Student 3 Response</h4>
              <ol className="project-three__list">
                <li>
                  Have you seen the movie Free Guy? I want everything to be lit
                  up. I want everything to be in bright neon letters from the
                  posters and billboards to the wet floor signs in a cafeteria.
                </li>
                <li>
                  I don’t want the university to start putting advertisements on
                  the AR platform if it becomes a thing.{" "}
                </li>
                <li>
                  Yes for sure. I want to be able to watch videos with my
                  friends.
                </li>
                <li>
                  Oh for mobile, I think a link would be better, but for AR
                  glasses no definitely not.
                </li>
                <li>
                  Students should be able to add whatever they want in any place
                  around campus, but I can see how people might take advantage
                  of that and put up inappropriate stuff.
                </li>
                <li>I mostly look at the pictures and the big text first.</li>
              </ol>
              <h4 className="project-three__list-header">
                Student 4 Responses
              </h4>
              <ol className="project-three__list">
                <li>
                  I would be interested in using AR as a map assisted
                  technology. For one example, there could be self guided tours
                  using AR that walks you through the campus and shows
                  information on the different buildings.
                </li>
                <li>
                  Anything advertisement related would be frustrating. I don’t
                  need to see the details of a club meeting if I don’t want to
                  go.
                </li>
                <li>
                  Yes, if it supplements what you’re doing. Videos are already
                  used in AR and VR solutions.
                </li>
                <li>
                  In both instances, I would like the video to autoplay if it is
                  related to what I’m already doing, and I wouldn’t want to have
                  to click a separate link to access it.
                </li>
                <li>
                  Students should be able to build what they want in AR, but it
                  should have to be approved to be seen in a public setting.
                </li>
                <li>
                  Good use of colors and fonts plus if it is something I’m
                  already interested in.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="project-three__wireframing">
          <h3 className="project-three__super-subheading">
            Designing the AR Content Creation User Interface
          </h3>
          <p>
            After inverviewing students and getting a feel for what the AR
            content creation process should feel like, we finally made some
            prototype user interfaces. Below you can see what the user interface
            might look like when someone goes to upload AR content to the
            application. Note that the pictures are in order; pages in the
            inerface follow each other from left to right.
          </p>
          <h4 className="project-three__image-subheading">
            Sketches for Finding Content
          </h4>
          <div className="project-three__wireframe">
            <img src={cgoals_wireframe}></img>
          </div>
        </div>
      </div>
      <div className="project-three__mobile-device">
        <h2 className="project-three__subheading">
          2. User Interfaces and Interaction in AR Using a Mobile Device
        </h2>
        <div className="project-three__finding-content">
          <h3 className="project-three__super-subheading">
            Finding AR Content
          </h3>
          <p>
            There are many ways in which a user could know where to find
            interesting AR content on campus as they walk around. Below are some
            sketches that identify some of the strategies that could be used,
            including visual/auditory cues from the mobile AR device, guided
            tours with a map, and scanning content/QR codes with the devices
            camera. After creating these sketches, we discussed and decided to
            turn the method involving a guiding map into a narrative sketch,
            which can also be seen below on the right
          </p>
          <h4 className="project-three__image-subheading">
            Sketches for Finding Content
          </h4>
          <div className="project-three__sketches">
            <img src={bgoals_sketch1}></img>
            <img src={bgoals_sketch2}></img>
            <img src={bgoals_narrative1}></img>
          </div>
        </div>
        <div className="project-three__displaying-content">
          <h3 className="project-three__super-subheading">
            Displaying AR Content
          </h3>
          <p>
            After a user finds the AR content using some of the strategies
            mentioned above, the content must then be displayed in some way on
            the mobile device. This content will be overlaid on top of the real
            world and will only be viewable from the mobile device. Below are
            some examples of sample AR content which utilize hybrid sketching to
            show how the content will be visually presented in AR (AR content is
            shown in pink).
          </p>
          <h4 className="project-three__image-subheading">
            Hybrid Sketches for AR Content
          </h4>
          <div className="project-three__image-with-text">
            <div className="project-three__sketches">
              <img src={bgoals_content1a}></img>
              <img src={bgoals_content1b}></img>
            </div>
            <p className="project-three__image-paragraphs">
              These images show sample AR content in the form of text. A user
              may run into a flyer posted on a bulletin board or a utility pole
              like this and want to scan the content, get additional information
              about the content (like times, details, or locations), or
              potentially even translate it. These hybrid sketches show the user
              scanning the flyer for details about an event along with the user
              scanning text to translate it.
            </p>
          </div>
          <div className="project-three__image-with-text">
            <p className="project-three__image-paragraphs">
              This image shows sample AR content in the form of statues. A user
              may walk by a building on campus and want to see information about
              the person who the building is named after. To simulate this, an
              AR statue may be generated outside the building that shows the
              person along with some basic information about them like their
              full name, birth date, and graduation year.
            </p>
            <div className="project-three__sketches">
              <img src={bgoals_content2}></img>
            </div>
          </div>
          <div className="project-three__image-with-text">
            <div className="project-three__sketches">
              <img src={bgoals_content3}></img>
            </div>
            <p className="project-three__image-paragraphs">
              This image shows sample AR content in the form of art. A user may
              walk through a building on campus (for this scenario I primarily
              envisioned DAAP) and want to see art on the walls. To simulate
              this, a user may hold their phone up to a wall in DAAP with a tag
              on the wall and see a painting or sculpture generate in AR.
            </p>
          </div>
        </div>
        <div className="project-three__content-interaction">
          <h3 className="project-three__super-subheading">
            Interacting with AR content
          </h3>
          <p>
            Finally, once the AR content is displayed, the user should be able
            to interact with the AR content. The user may want to interact in
            many different ways – through touch gestures, menus, or actually
            moving the physical AR device itself. To explore interactions with
            AR content on a mobile device, we took one of the sample content
            sets from above (displaying AR art) and tried interacting with it in
            the real world. To do this, we first hung up some “mock art” you
            might see around campus in a building like DAAP. From here, we had a
            collaborator simulate interacting with the AR content by holding up
            their phone to where the content should be and performing some
            interactive actions (as seen below).
          </p>
          <h4 className="project-three__image-subheading">
            Sample Interaction Demo
          </h4>
          <div className="project-three__image-with-text">
            <div className="project-three__sketches">
              <img src={bgoals_interaction1}></img>
              <img src={bgoals_interaction2}></img>
            </div>
            <p className="project-three__image-paragraphs">
              These images show a user scanning a wall that has AR content on
              it. The user looks for a sign around campus that says &quot;Scan
              here for AR art &quot;, scans it with the AR app, and the painting
              renders on the phone screen
            </p>
          </div>
          <p>
            We were expecting the user would want to take a couple actions when
            interacting with this content: scanning the wall/space with their
            phone, tapping on the screen to scan the specific area, and pressing
            some sort of UI button to show the art. After having the user try
            interaction with the AR content we found that is nearly exactly what
            happened and learned that users want an experience that is both
            straightforward and intuitive. Also, we noticed the user wanted to
            be able to move around to different content in the same region
            (i.e., another wall with different art) and have art automatically
            render instead of having to touch a button.
          </p>
          <p>
            After taking this sample,we turned the findings into a narrative
            sketch as seen below:
          </p>
          <h4 className="project-three__image-subheading">
            Narrative Sketch for Content Interaction
          </h4>
          <div className="project-three__sketches">
            <img
              className="project-three__wide-img"
              src={bgoals_narrative2}
            ></img>
          </div>
        </div>
      </div>
      <div className="project-three__ar-glasses">
        <h2 className="project-three__subheading">3. AR Glasses</h2>
        <div className="project-three__finding-content">
          <h3 className="project-three__super-subheading">
            Finding AR Content
          </h3>
          <p>
            We now assume the user is viewing the same content from part 2
            through AR glasses instead of a mobile device. Because of this, the
            way users can find AR content slightly changes. Below are some
            sketches to show how we feel users could find AR content through AR
            glasses.
          </p>
          <h4 className="project-three__image-subheading">
            Sketches for Finding Content (with AR glasses)
          </h4>
          <div className="project-three__sketches">
            <img src={agoals_sketch1}></img>
            <img src={agoals_sketch2}></img>
          </div>
        </div>
        <div className="project-three__displaying-content">
          <h3 className="project-three__super-subheading">
            Displaying AR content
          </h3>
          <p>
            One of the biggest differences between AR glasses and mobile AR is
            the information that needs to be displayed through them. Less data
            needs to be displayed when looking through glasses. For example,
            someone can be using a GPS to get directions; when they look through
            the glasses they can see arrows pointing them in the direction they
            should go. When using the mobile version the same arrows would be
            displayed, but a map would also need to be displayed in order to
            make sense of the arrows. AR glasses takes the virtual context away.
          </p>
          <p>
            More interaction can be integrated with less movement when using the
            glasses. For example, when looking at a club meeting flyer the user
            can have the ability to RSVP to the event by a single point gesture.
            With a mobile AR device, you would have to point the camera at the
            poster and click the button on your phone.{" "}
          </p>
          <p>
            More types of content can be displayed throught the glasses that
            wouldn’t make sense to display through a phone. For example, wet
            floor signs, closed signs, no parking signs, etc. could be shown
            through the glasses. These signs don’t make sense to be displayed
            through a phone because there shouldn’t be a chance that they will
            be missed. Using a phone adds an extra step and would require
            everyone to be looking through their phone all the time. AR glasses
            allow for easy and seamless integration with everyday life which
            gives the ability to add more pressing content to the platform.
          </p>
        </div>
        <div className="project-three__content-interaction">
          <h3 className="project-three__super-subheading">
            Interacting with AR Content
          </h3>
          <p>
            Unlike the mobile device, the users should be able to play and pause
            videos along with clicking buttons by a single point with the AR
            glasses. They can slide through a list or carousel of items by
            swiping left or right. They will be able to scroll through a page by
            swiping up or down. If no scroll is needed, the user can close the
            content by swiping down.
          </p>
          <h4 className="project-three__image-subheading">
            Sketches for Content Interaction (with AR glasses)
          </h4>
          <div className="project-three__sketches">
            <img src={agoals_gestures}></img>
          </div>
        </div>
      </div>
      <div className="project-three__demo-video">
        <h2 className="project-three__subheading">Demo Video</h2>
        <video width="960" height="540" controls>
          <source src={demovideo} type="video/mp4" />
          Your browser does not support HTML5 video
        </video>
      </div>
    </div>
  );
}

export default ProjectThree;
