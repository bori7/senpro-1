import React from "react";
import { MenuLayout } from './menu';
import mini_header_2 from '../static/assets/mini_header_2.png';
import emma from "../static/assets/emma.jpeg";
import tosin from "../static/assets/tosin.png";
import isa from "../static/assets/isa.jpeg";
import adegbajo from "../static/assets/adegbajo.png";
import bolanle from "../static/assets/bolanle.png";
import busola from "../static/assets/busola.png";
import fola from "../static/assets/fola.png";
import helen from "../static/assets/helen.png";
import laide1 from "../static/assets/laide1.png";
import remilekun from "../static/assets/remilekun.png";
import tolulope from "../static/assets/tolulope.png";
import whitney from "../static/assets/whitney.png";


export const Consultants = () => {


	return (
		<div >

			<div className="jumbotron forum-header mini_header bgimg" style={{ backgroundImage: { mini_header_2 } }}>
				<MenuLayout />

				<div className="container-fluid">
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								<div className="col-12">
									<h1>Our Consultants</h1>
									<p style={{ color: '#fff' }}>Let our seasoned professionals help you.</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>


			<div className="jumbotron  bg-white">
				<div className="container">
					<div className="row">
						<div className="col-12 text-center" style={{ marginBottom: '20px' }}>
							<h2 className="header primary-header">Meet Our Consultants</h2>
						</div>
					</div>
					<div className="row">

						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#tosin">
								<div className="profile-box profile-box-red">
									<img src={tosin} />
									<h3>Mrs Tosin Babalola</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#bolanle">
								<div className="profile-box profile-box-blue">
									<img src={bolanle} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3 style={{ textAlign: 'center' }}>Mrs. Bolanle Adewole</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#whitney">
								<div className="profile-box profile-box-skyblue">
									<img src={whitney} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Whitney Hammel</h3>
								</div>
							</a>
						</div>
						

					</div>

					<div className="row" style={{ marginTop: "20px" }}>
						
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#laide">
								<div className="profile-box profile-box-red">
									<img src={laide1} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Laide Oyekanmi</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#isa">
								<div className="profile-box profile-box-blue">
									<img src={isa} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Joy Isa</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#helen">
								<div className="profile-box profile-box-skyblue">
									<img src={helen} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Helen Obiageli Oshikoya</h3>
								</div>
							</a>
						</div>
					</div>

					<div className="row" style={{ marginTop: "20px" }}>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#busola">
								<div className="profile-box profile-box-blue">
									<img src={busola} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Busola Olumuyiwa </h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#adegbajo">
								<div className="profile-box profile-box-skyblue">
									<img src={adegbajo} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Adegbajo Odedina</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#tolulope">
								<div className="profile-box profile-box-blue">
									<img src={tolulope} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mr Tolulope Sulaimon</h3>
								</div>
							</a>
						</div>
						
					</div>

					<div className="row" style={{ marginTop: "20px" }}>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#fola">
								<div className="profile-box profile-box-skyblue">
									<img src={fola} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Fola Adekola</h3>
								</div>
							</a>
						</div>
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#remilekun">
								<div className="profile-box profile-box-blue">
									<img src={remilekun} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mrs Remilekun Durojaiye</h3>
								</div>
							</a>
						</div>
						
						
						<div className="col-md-4">
							<a href="#" data-toggle="modal" data-target="#emma">
								<div className="profile-box profile-box-skyblue">
									<img src={emma} style={{ borderRadius: '50%', width: '200px', height: '200px' }} />
									<h3>Mr Emmanuel Olajitan</h3>
								</div>
							</a>
						</div>
					</div>

				</div>


			</div>


			<div className="modal" tabindex="-1" role="dialog" id="bolanle">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/bolanle.png" width="30px;" /> Mrs. Bolanle Adewole</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Mrs. Bolanle Adewole, an Advanced Certified Autism Specialist (A.C.A.S) USA and Behaviour Analyst (A.B.A) USA, is the founder and executive director of TLPCentre, the first full day school for children with Autism and other related developmental disorders on Lagos Island. She is a certified Primary and Elementary Montessori practitioner (St.Nicholas) UK; (NAMC) Canada and the Executive Director of The Learning Place Montessori school, Lekki, Lagos.</p>
							<p>
								She is passionate about Autism awareness and advocacy, and continually engages in the empowerment and fluent integration of the differently able children into mainstream schools and into the community.
				As a Behaviour Analyst, she is conscious of the environment and the impact it has on behaviour. She believes every behavior is triggered by an antecedent and does not occur in isolation. She is part of a team of specialists that provides services including assessments, consultations and interventions to children with different needs.</p>
							<p>
								With over 26 six years teaching experience in the UK, USA and Nigeria, she has influenced the education of over 1,000 children and continuously attends various enriching  national and international educational courses and conferences.
								A renowned speaker and teacher, Bolanle, belongs to several Professional bodies including American Montessori Society. She is the Vice President of Autism Parents Association International (APAi) and was recently appointed the chairperson of Association of Private Educators in Nigeria (APEN)’s Training Team.


						</p>
						</div>

					</div>
				</div>
			</div>


			<div className="modal" tabindex="-1" role="dialog" id="emma">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: '700' }}>
								<img src="/static/assets/emma.png" width="30px;" /> Mr Emmanuel Olajitan</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Emmanuel Olajitan is a Psychologist. He has an M.Sc. in Psychology from Walden University, US. He is also a graduate of the prestigious Obafemi Awolowo University. He strives to assist individuals from all walks of life, in resolving issues around abuse, self-esteem, feeling of stagnation, overcoming past failures and regrets, finding inner peace, purposeful living and influence.
								</p><p>
								Having been married for well over two decades and attending several training and workshops on family life and marriage success, he has been equipped to help repair and build healthy marriages and families, which is one of his core passions. He can be described as a family-centric person and has been influential in the rebuilding and strengthening numerous marriages and families across the globe. </p><p>
								He is also a serving Pastor who is versed in Pastoral Care and counselling for over two decades. Emmanuel Olajitan is married and blessed with two girls.


						</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="isa">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: '700' }}>
								<img src="/static/assets/isa.png" width="30px;" /> Mrs. Joy Isa</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Mrs Joy Isa is an energetic woman who is passionate about education and counselling. She has a first degree in French and Linguistics (BA) from the University of Jos and started her career in education in 1996, right after her National Youth Service. She earned an MSc in Multidisciplinary Studies from Buffalo State University of New York and holds a Certificate in International School Leadership, from the Principals Training Centre, in the UK. She is a certified Youth Counsellor (Institute of Counselling in the UK) and a certified Child Protection and Safeguarding Officer. She is currently completing a doctoral degree in Curriculum, Instruction and Assessment (EdD) from Walden University, Minnesota. She has worked in British and American International schools across Nigeria over the past 25 years, working in various capacities as teacher and school leader.</p>
							<p>
								She is a sought-after youth counsellor and speaker who passionately supports children and young people through varied challenges ranging from inclusion needs in mainstream school, to educational and vocational issues, emotional issues, relational issues, family issues, sexual issues, and dealing with abuse. She has partnered with several NGOs working in impoverished areas across Nigeria to provide support (counselling and training) for young people, teachers and school management.</p>
							<p>
								She is a sought-after facilitator of professional development for educators across Nigeria using both face-to-face and online platforms. She facilitates professional development courses, seminars and workshops for COBIS (Council of British International Schools), AISEN (Association of International School Educators of Nigeria), APEN (Association of Private Educators in Nigeria), and CCE (Corona College of Education). As a firm believer in on-going professional development, she has participated in courses run by the prestigious Harvard Graduate School of Education.
								She is a published author and has a blog where she shares inspired messages centred on building the lives of young people and adults alike. She is married with young adult children.

						</p>
						</div>

					</div>
				</div>
			</div>


			<div className="modal" tabindex="-1" role="dialog" id="tosin">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/tosin.png" width="30px;" /> Mrs. Tosin Babalola</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>Mrs. ’Tosin Babalola is a trained Special needs professional with a strong passion for assisting and empowering parents by partnering with them and other professionals to work directly with hundreds of children that may be considered to have special needs and learning disorders with the aim of ensuring that each child succeeds and reaches their full potential. </p>
							<p>
								Having initially studied Industrial Relations and Personnel Management as a first degree from the prestigious University of Lagos, she has since found her passion and purpose in the world of special needs. In order to gain the skills required Mrs. ‘Tosin Babalola embarked on gaining a second degree in Special Educational Needs (Inclusive & Psychological Perspectives) at the University of Roehampton, London, UK. She has since completing her Masters, continued to gain many badges along the way. Some include being a Certified Autism Specialist (IBCCES), a Positive Behavioral Specialist, an early childhood Developmental Assessor as well as being a ‘Specific Learning Disability’ specialist. ‘Ms Tee’ she is fondly called by her students is known for working with the seemingly most complex SEN cases and providing clarity, direction and hope where all seemed lost. She is a sought-after Special needs assessor and facilitator for Educators across the globe, helping teachers and school owners understand how to differentiate learning as well as create a truly inclusive classNameroom where all learners can thrive. She continues to improve herself by attending several overseas training and courses including “A Developmental Approach to Maximizing Language and Literary Skills'' from the Harvard Graduate School of Education where she built her competence in helping children develop robust language skills by essentially engaging in deliberate conversations. She has also gained Diploma in Dyslexia and Child Psychology from The Blackford Centre, Marylebone, London UK.
								She is a registered member of the British Psychological Society U.K and is currently completing her Doctorate in Educational Psychology.

						</p>
							<p>
								Mrs. Tosin Babalola is armed with adequate knowledge not only to detect possible red flags in a child’s holistic development but also to provide the intervention strategies needed to bridge whatever gaps have occurred due to the red flags. She is an advocate of the inclusion of every child in a mainstream school as well as early intervention believing that the earlier children receive the support they need, the more successful the outcomes are. In her own words, “There is no work that is more fulfilling than seeing a child blossom despite the challenges they may face”.
								Mrs. Tosin Babalola is married with two handsome boys and devotes her service to God through the Children’s Ministry in her church. She enjoys praying and spending quality time with her family.

					</p>
						</div>

					</div>
				</div>
			</div>


			<div className="modal" tabindex="-1" role="dialog" id="whitney">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/whitney.png" width="30px;" /> Mrs. Whitney Hammel</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Whitney Hammel Anny’s career in autism and Applied Behavior Analysis began in early 2009 at the New England Center for Children (NECC) located near Boston, Massachusetts. In addition to her many years in the field, Whitney prides herself in being a lifelong student. She holds a BS in Early Childhood Development (birth through age 8 with Special Education) from University of Idaho, a MS in Special Education (ages 5 through 21 with Moderate to Severe Disabilities) from Simmons College, and completed two additional years of post-masters schooling at University of West Florida to become a Board Certified Behavior Analyst specializing in the field of ABA service delivery. She maintains her certification by the Behavior Analysis Certification Board (BACB) with fulfilling continuing education units bi-yearly. She is also certified by the International Behavior Analysis Organization (IBAO) as an International Behavior Analyst (IBA).
						</p>
							<p>
								Whitney’s work experience ranges from ages 20 months to 21 years; in a residential facility, home/community settings with families, consulting in general education classrooms for inclusion, implementing social skills groups, supervising those pursuing ABA certification, and working in ABA centers across 4 countries (United States of America, United Arab Emirates, Ghana and India). She founded Autism Compassion Africa, an NGO located in Ghana and 501c3 in US, in 2016 and serves as the Executive Director overseeing operations at the ABA center in Cape Coast, consulting services across Ghana, as well as consulting services in Nigeria.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="helen">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/helen.png" width="30px;" /> Mrs. Helen Obiageli Oshikoya</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Helen Obiageli Oshikoya is the founder / CEO of Nobelova Gradani PsychoEducational Services. She is a member of the Nigerian Psychological Association and a Member of the Association of Behaviour Analysis of Nigeria ( ABAN) . She is also a registered member of the  British Psychological Society and Chartered Institute of Educational Assessors in the United Kingdom ( University of Hertfordshire).
						</p>
							<p>
								Helen is an Advanced Certified Autism Specialist registered with the International Board of Credentialing and Continuing Education Standards (IBCCES), USA and a Qualified Autism Service Practitioner –Supervisor registered with the The Qualified Applied Behavior Analysis Credentialing Board (QABA).  She is also one of  the  International Training Providers with IBCCES and also the Nigeria representative of the Exceptional Child Vector Solution USA: an online training platform for Teachers in the area of Special Educational Needs. Nobelova currently has trained over 700 teachers, 56 ABA Early Intervention Specialists as well as 10 certified with the IBCCES credentialing board.
						</p>
							<p>
								As of date Nobelova has screened close to 12 thousand children across Nigeria and 80% of these children are now receiving Early Intervention Services across all states of the federation. Helen's CHILD-P and Find Child Initiative was recognised as she was nominated as one of the 60 most Influential Women in Nigeria an Award by Business Day Newspaper in 2020, and she was also nominated by the Committee of Women for Africa, UK in 2017.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="busola">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/busola.png" width="30px;" /> Mrs. Busola Olumuyiwa</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Busola Olamuyiwa (MSC. Applied Psychology (PSI), Dip. Cognitive Behaviour Therapy, B.A Honours in Psychology, British Psychological Society (BPS) Verified Test User: Occupational and Personality, and Director Unforsaken House of Hephzibah (UHOH).
						</p>
							<p>
								Busola received her MSC in Applied Psychology and BA Honours in Psychology from Dublin Business School of Psychology specializing in clinical and organizational psychology. She has 10 years’ experience as a consultant, researcher and psychotherapist within Ireland and Nigeria. She is a member of the Psychological Society of Ireland (PSI), and qualified as a registered British Psychological Society (BPS) Test User (Occupational and personality).
						</p>
							<p>
								Busola is well experienced in managing the following disorders: depression and anxiety, Schizophrenia, Neurological disorders (Autism, ADHD and other related disorders), addictive behaviours, challenging behavioural issues, organizational psychology (Employee Assistant Program EAP), and individual and family therapy. She has been a speaker and facilitator on several mental health training workshops. She has worked with organization, hospitals, schools, and religious bodies to train on mental health some of her clients including New Cross Exploration & Production Limited, CS Advance Microfinance Bank, Meadow Hall, Lakeshore Cancer Centre, Dennis Ashley Wellness Clinic, The Learning Place School Lekki, and First Cardiology Clinic Ikoyi amongst others.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="adegbajo">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/adegbajo.png" width="30px;" /> Mrs. Adegbajo Odedina</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Adegbajo is a Paediatric Consultant with many years of experience as a Paediatrician. He is a  Fellow of the National Postgraduate Medical College of Nigeria. He started his career as a Senior Medical Officer at Mother and Child. His work at the Lagos State University Hospital further exposed him to various paediatric diseases further broadening his skills and increasing his depth of expertise as a Paediatrician. Presently, Adegbajo is a Consultant Paediatrician with Reddington Hospitals.
						</p>
							<p>
								Adegbajo is committed to delivering quality healthcare to vulnerable children. He wrote an article on the prevalence and clinical correlates of intraventricular haemorrhage among preterm neonates in Lagos. His work with neonates over the years equips him with requisite skills to identify numerous challenges, including developmental challenges in children.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="remilekun">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/remilekun.png" width="30px;" /> Mrs. Remilekun Durojaiye</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Remilekun has been a physiotherapist for over 30 years.  She obtained her diploma in Physiotherapy from Bristol Royal Infirmary (now The University of the West of England), Bristol, England in 1988. She has a  Master’s degree in Physical Therapy from The University of Health Sciences, The Chicago Medical School, Chicago, USA (now Rosalind Franklin University of Medicine and Sciences) in 1993 and her doctorate in Physical Therapy from Alabama State University, Alabama, USA in 2009.	</p>
							<p>
								Remilekun is one of a few physiotherapists in Lagos who is Board certified in Biofeedback for the pelvic floor dysfunctions. She has worked in a variety of settings during the course of her career including but not limited to pelvic floor rehabilitation, orthopaedics and Pediatrics (children with special needs). She is the clinical director for Special Olympics Funfitness   Nigeria, the physiotherapy screening arm of the healthy athletes program. She also works as a private practitioner and is the owner of Taforehab Pelvic and Orthopedic Wellness Clinic. Remilekun  also works as a locum physiotherapist for the Child and Adolescent Center, Oshodi Annex, Federal Neuropsychiatric Hospital, Yaba.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="fola">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/fola.png" width="30px;" /> Mrs. Fola Adekola</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Fola is the Director of Inclusion at Edmonton County Academy, UK. She has almost twenty years of working with school administrators, teachers and parents to provide appropriate support for children with Special Educational Needs and Disabilities (SEND). As an Inclusion Director, she leads staff on SEND issues, develops school policies on SEN, working with disadvantaged learners and promoting inclusion across schools.  She also develops inclusion provision, curriculum development and quality of teaching in inclusion.
								Fola has degrees and certificates including a National Award for SEN Coordination, Postgraduate Diploma in Leadership from the Institute of Education (UK), a master’s in special and Inclusive Education from the University of Roehampton. She is presently working on a doctorate at the University College of London. She also attended the I-CUBED Leadership Program (Greenwich University).
</p>

							<p>
								Being a leader who is interested in raising leaders herself, she has facilitated numerous trainings including:
						<ul>
									<li> Reading Age and the impact on teaching and learning resources in secondary school</li>
									<li>SEND Code of Practice - what you need to know</li>
									<li>Working with Teaching Assistants - training for Newly Qualified Teachers</li>
									<li>Preparing SEND students for Adulthood - an inclusive curriculum</li>
									<li>Quality First Teaching</li>
									<li>SEND strategies for online lessons</li>
								</ul>

							</p>
							<p>
								Fola is passionate about successfully teaching, motivating, and inspiring students whilst maintaining effective relationships with parents, colleagues and external agencies. She is committed to supporting practices and policies aimed at ensuring high quality education for all students irrespective of their backgrounds or starting points. She is also interested in ensuring members of staff are accountable and able to demonstrate the impact of their contribution to their teams.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="tolulope">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/tolulope.png" width="30px;" /> Mr. Tolulope Sulaimon</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								Tolulope is an Academic Interventionist who provides reading intervention for struggling readers.  He has years of experience as a Special Educator in elementary school, often providing one-on-one academic support to children with disabilities including Specific Learning Disabilities and Autism. He has a master’s degree in Special Education from Cleveland State University, Ohio, USA, where he was trained in the use of many reading assessments like DIBELS, AIMS Web, and other reading assessment tools. He also received training in reading intervention.

						</p>
							<p>
								Presently, Tolulope works as an associate for the Reading Clinic program where student teachers are trained on providing reading interventions using explicit instruction. He is also completing a doctorate in Special Education (Applied Behavior Analysis) at Ohio State University with a focus on the use of evidence-based intervention to improve reading. He is passionate about using ABA strategies to provide reading intervention, so he is also working on a Board-Certified Behavior Analyst (BCBA) license. He is passionate about early intervention in reading because reading is important for any individual to succeed in and outside the school.
					</p>
						</div>

					</div>
				</div>
			</div>

			<div className="modal" tabindex="-1" role="dialog" id="laide">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" style={{ fontWeight: "700" }}>
								<img src="/static/assets/laide1.png" width="30px;" /> Mrs. Laide Oyekanmi</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<p>
								‘Laide holds a B.Sc in Biological Sciences, MRes in Medical Research (Newcastle, UK), M. Ed (Bath, UK) and M.A.T (Georgia, USA). She is presently completing a doctorate of Education (Ed.D) in Leadership in Special Populations (Houston, USA). Despite degrees in Medical Research, she pursued her passion of teaching from her years as an undergraduate at the University of West Georgia. She started her full-time career as a teacher in 2009 at a British International School in Lekki, Lagos. She gradually rose through the ranks as a teacher to be a team leader, then to be a Head of Department, and even left the school as an Assistant Principal in 2016. </p>
							<p>
								After years of teaching students in the general education stream, she decided to teach children with special education needs. Getting a Master of Arts degree in Teacher Education (Special Education concentration for children with high incidence disabilities) was a step in this direction. Today, she is still working with children who have needs within inclusive settings. She is also one of the founders of SEN Pro Initiative, an NGO designed to provide access to much needed expertise, care and professional experience to members of the SEN community, especially in Africa.

						</p>
							<p>
								‘Laide has facilitated many training sessions including those on Customer Service in Schools, Managing Difficult Parents, Classroom Management, Teaching the British Curriculum, and Merging the British and Nigerian Curriculum effectively. She is a certified tutor with The College Reading and Learning Association; and a certified teacher in the states of Georgia and Texas in the US.She is married to her husband of over thirteen years, and they are blessed with two boys.
					</p>
						</div>

					</div>
				</div>
			</div>




		</div>
	)
}