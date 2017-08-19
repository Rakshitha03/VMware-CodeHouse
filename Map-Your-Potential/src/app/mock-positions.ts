import { Position } from "./position-detail/position";


//can be exported so it can be imported elsewhiere, such as PositionService
//need to have "export" in order to read by other files
export const POSITIONS : Position[] = [
	{ 	id: 11, 
		name: "Software Engineer", 
    intro: "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of the software and systems that make computers or anything containing software work.", 
		//overview
    detail : "A software engineer is a person who applies the principles of software engineering to the design, development, maintenance, testing, and evaluation of the software and systems that make computers or anything containing software work. They apply these engineering principles to every stage of the development process, from requirements analysis to the software process, and create customized systems for individual clients.",
		imageUrl : "../images/position-imgs/Software.jpg",
    whatdoesitdo : "A software engineer applies mathematical analysis and the principles of computer science in order to design and develop computer software. There are many types of software that a software engineer can develop, such as operating systems, computer games, middleware, business applications and network control systems. Changes in technology and new areas of specialization keeps this profession evolving at a rapid pace. <br><br> When working with a client, a software engineer will typically analyze the client's needs, then design, test, and develop the computer software in order to meet those needs. The process is complicated and intricate, therefore the use of diagrams, flowcharts, and the creation of algorithms to tell the computer what to do are created. Converting these instructions into a computer language (coding or programming) is usually the responsibility of a computer programmer.",
    futherReading : ""
	
	},
  	{ 	id: 12, 
  		name: "UI/ UX designer", 
  		intro: "User interface (UI) designers work closely with user experience (UX) designers to ensure the user's interaction is as simple and efficient as possible. UX designers are concerned with how the product feels and ensure that the product logically flows from one step to the next.", 
  		detail : "this should display the detail of UI/ UX designer position", 
  		imageUrl : "../images/position-imgs/Desinger.jpg",
      whatdoesitdo : "",
      futherReading : ""
  	},
  	{ 	id: 13, 
  		name: "QA engineer", 
  		intro: " A software quality assurance engineer is someone who monitors every phase of the software development process so as to ensure design quality, making sure that the software adheres to the standards set by the development company.", 
  		detail : " A software quality assurance engineer is someone who monitors every phase of the software development process so as to ensure design quality, making sure that the software adheres to the standards set by the development company. Software quality assurance engineers make sure that new products work before they are released to the public.", 
  		imageUrl : "/images/position-imgs/Test.jpg",
      whatdoesitdo : "A software quality assurance engineer is involved in tasks that include software design, writing source code, control of source code, reviewing code, configuration management, change management, program testing, integration of software, and release management process. He or she will typically break up the entire process into goals such as verifications, activities, measurements, abilities, and commitments. <br><br>Software quality assurance engineers must also be able to see to it that the final product not only meets with company and governmental guidelines but also reaches the consumer market at the time appointed by the company. Delays can be very costly for the company, so the software quality assurance engineer must work closely with all departments to make sure the software project is not only on time but on budget as well.",
      futherReading : ""
  	},
  	{ 	id: 14, 
  		name: "Data Analyst", 
  		intro: "With a strong background in statistics and the ability to convert data from a raw form to a different format (data munging), the Data Analyst collects, processes and applies statistical algorithms to structured data to get actionable insights for the company.", 
  		detail : "A data analyst is someone who collects, processes and performs statistical analyses of data. He or she can translate numbers and data into plain English in order to help organizations and companies understand how to make better business decisions. Whether it be market research, sales figures, logistics, or transportation costs, every business collects data. A data analyst will take that data and figure out a variety of things, such as how to price new materials, how to reduce transportation costs, or how to deal with issues that cost the company money.", 
  		imageUrl : "/images/position-imgs/Analyst.jpg",
      whatdoesitdo : "Data analysts ascertain how data can be used in order to answer questions and solve problems. They study what’s happening now to identify trends and make predictions about the future. They are like detectives, figuring out how things work and helping to make sense of it. It can be a creative, challenging and rewarding career.<br><br>Data analysts typically use computer systems and calculation applications to figure out their numbers. Data must be regulated, normalized, and calibrated so that it can be extracted, used alone, or put in with other numbers and still keep its integrity.",
      futherReading : ""
  	},
  	{ 	id: 15, name: "Network Security Engineer", 
  		intro: "Security engineers are responsible for testing and screening security software and for monitoring networks and systems for security breaches or intrusions. They can often resolve possible causes of security threats early on by looking at things from a security perspective and recommending enhancements to management.", 
  		detail : "this should display the detail of Network Security Engineer position", 
  		imageUrl : "/images/position-imgs/Network.jpg",
  	  whatdoesitdo : "",
      futherReading : ""

  	},
  	{ 	id: 16, 
  		name: "Project Manager", 
  		intro: "A project manager is a motivated and effective leader who is accountable for the success or failure of a project. They are multitaskers, have great time management and organization skills. They do not carry out all the work themselves, but have project teams working under them and ensure all the objectives of the project are met.", 
  		detail : "this should display the detail of Project Manager position", 
  		imageUrl : "/images/position-imgs/Project.jpg",
      whatdoesitdo : "",
      futherReading : ""
  	},
  	{ 	id: 17, 
  		name: "System Architect", 
  		intro: "A systems architect is a technology professional who develops and implements computer systems and networks for an organization. He or she defines the architecture of a system in order to fulfill certain requirements.", 
  		detail : "this should display the detail of System Architect position", 
  		imageUrl : "/images/position-imgs/System.jpg",
      whatdoesitdo : "",
      futherReading : ""
  	},
  	{ 	id: 18, 
  		name: "Hardware Engineer", 
  		intro: "Computer hardware engineers analyze complex equipment to determine the best way to improve it. They identify complex problems in computer hardware, develop and evaluate possible solutions, and figure out the best way to implement them.", 
  		detail : "this should display the detail of Hardware Engineer position", 
  		imageUrl : "/images/position-imgs/Hardware.jpg",
  	  whatdoesitdo : "",
      futherReading : ""
  	},
]; 


