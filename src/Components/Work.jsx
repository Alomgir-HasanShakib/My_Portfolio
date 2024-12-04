import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Virtual Resume Builder Website",
    tags: ["Tailwind CSS", "SAAS", "React JS","Node JS","Express JS", "MongoDB","JWT"],
    projectLink: "https://perfectprofile-ebde4.web.app/",
  },
  {
    imgSrc: "/images/project-2.png",
    title: "Pet Adoption & Donation Website",
    tags: ["Javascript", "React JS","Node JS","Express JS","MongoDB","Tailwind CSS", "Stripe",
      "JWT"
    ],
    projectLink: "https://aph-pet-family.web.app/",
  },
  {
    imgSrc: "/images/project-3.png",
    title: "Plumbing Website",
    tags: ["Tailwind CSS", "Design", "Landing Page","React JS"],
    projectLink: "https://bsm-plumb.netlify.app/",
  },
  {
    imgSrc: "/images/project-4.png",
    title: "A Event Management System",
    tags: ["Javascript","React JS","Node JS","Express JS","MongoDB","JWT", "Development"],
    projectLink: "https://eventer-9064e.web.app/",
  },
  {
    imgSrc: "/images/project-5.png",
    title: "Art & Craft Design",
    tags: ["React JS","Node JS","Express JS","MongoDB","Tailwind CSS", "Development"],
    projectLink: "https://craft-ease.web.app/",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 capitalize mb-8">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works?.map(({ projectLink, imgSrc, title, tags }, key) => (
            <ProjectCard 
            projectLink={projectLink}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
