import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function About() {
  return (
    <Container style={{ maxWidth: "1620px" }} id="About">
      <div className="cardHome">
        <h1 style={{textAlign: 'center'}}>Who We Are</h1>

        <Card>
          <Card.Body>
            <Card.Text>
              We are a collective group of judges, attorneys, law enforcement
              agents, psychologists, martial artists, and community advocates
              who have developed, through years of research, a professional
              development program that specifically addresses the continuing
              education of law enforcement agencies and municipalities. This
              program addresses the five key elements of ethical and effective
              law enforcement, which we call The Five Principles.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="cardHome">
        <h1 style={{textAlign: 'center'}}>About Us</h1>

        <Card>
          <Card.Body>
            <Card.Text>
              Global Understanding LLC is centered on key solutions for the
              world’s problems with global initiatives to enhance mankind. We
              seek experts in their field to assist in developing solutions
              ranging from everyday problems to global pandemics. We take a
              structured approach not to tear down but to enhance and improve
              people, groups, communities, countries, and humanity as a whole.
            </Card.Text>
            <Card.Text>
              We are a leading collective group of experts and professionals in
              our fields including former federal law enforcement, licensed
              clinical psychologists, attorneys at law, university professors,
              and martial arts experts that have established comprehensive law
              enforcement professional development training. Our goal is for law
              enforcement personnel to become more culturally informed and
              pragmatically trained in restraint techniques to help reduce
              wrongful deaths, police misconduct, and lawsuits filed against
              police departments nationwide. We seek to improve the public image
              of law enforcement and provide valuable feedback to police
              training personnel in the following areas.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="cardHome">
        <h1 style={{textAlign: 'center'}}>Our Mission</h1>

        <Card>
          <Card.Body>
            <Card.Text>
              Our mission is to collectively assist law enforcement officials
              while gaining the support of the community. This will be done by
              introducing our professional development training module created
              specifically to meet the needs of today’s society. Our goal is to
              provide law enforcement with necessary education to reinforce and
              enhance training facilitated in the police academy or other
              programs.
            </Card.Text>
            <Card.Text>
              Through a collaborative effort of leading experts including former
              federal law enforcement, licensed clinical psychologists,
              attorneys at law, university professors, and martial arts experts
              we will provide this professional development training to reduce
              the number of wrongful deaths, lawsuits, unarmed shootings, and
              cases of police misconduct to improve law enforcement
              effectiveness and community relations while upholding the mission
              of law enforcement; to protect and serve our community. Our staff
              will teach law enforcement The Five Principles, a more informed
              comprehensive professional development training system
              specifically created for the challenges of law enforcement today.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      <div className="cardHome" id="Program">
        <h1 style={{textAlign: 'center'}}>The Five Principles</h1>
        <Card>
          <Card.Body>
            <Card.Title>Psychology of Law Enforcement</Card.Title>
            <hr />
            <Card.Text>
              We will have a licensed psychologist assist law enforcement
              officers in understanding the psychological effects of law
              enforcement and their discretionary use of force in an
              ever-changing environment.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>
              Gender Equality, Cultural Proficiency, and Social Awareness
            </Card.Title>
            <hr />
            <Card.Text>
              We have experts who will teach law enforcement officers how to
              better handle enforcing the law while understanding the growing
              changes in our community and social perceptions; teaching our
              officers to become more sensitized to diverse populations and
              cultural tendencies. Along with diversity, law enforcement should
              be aware of the implications that the integration of female
              leadership has in our society and the fluid landscape of sexual
              orientations and gender.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>
              Non-Evasive Restraint Techniques and Levels of Force
            </Card.Title>
            <hr />
            <Card.Text>
              Our certified instructors will teach law enforcement personnel
              non-lethal restraint techniques provided as an alternative to
              using some of their many weapons (i.e. gun, baton, Taser, mace).
              These techniques are especially effective when officers find
              themselves in close quarters and need to control a situation or
              make an arrest as an alternative to using deadly force. The Five
              Principles is derived from five fundamental components using
              concepts from San Da JiuJitsu Do, Aikido, Judo, Jiu-jitsu, and
              Vee-Jitsu.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>The Law and Ethical Decision Making</Card.Title>
            <hr />
            <Card.Text>
              While understanding the complexities of law enforcement, experts
              and community officials believe law enforcement officers should be
              trained in how to better serve their community while maintaining
              proper ethics. This should be included in yearly professional
              development training. Balancing the equation of enforcing the law
              while being a resource for the community; our module emphasizes
              accountability and how to better serve the community by using
              “deadly force” only as a last resort. Our Five Principles teaches
              officers to serve as well as protect while understanding the
              importance of societal needs and finding the balance between both
              responsibilities. This module will teach officers how to handle
              and correct their own cultural biases.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Title>Principles of Efficacy</Card.Title>
            <hr />
            <Card.Text>
              To reach rigorous standards of efficiency we provide a supportive
              foundation for the challenging work of law enforcement. The Five
              Principles promotes the idea that effective effort drives
              development. By using data and feedback we will develop a strategy
              to drive proficiency and efficacy in the field.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br/>
      <div className="cardHome">
        <h1 style={{textAlign: 'center'}} id="Contact">Contact Us</h1>
        <Card>
          <Card.Body>
            <Card.Text>
            <h2>We would love to hear from you!</h2>
            </Card.Text>
            <Card.Text>Please don't hesitate to send us an <a href="mailto:GlobalUnderstandingllc@gmail.com">email</a> with any questions you may have.</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
    </Container>
  );
}
