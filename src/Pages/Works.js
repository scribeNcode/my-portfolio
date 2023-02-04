
import React,{useState, useEffect}from "react";
function Works(){
    //setup our project info state
  const [currentItem, setCurrentItem] = useState(0)
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(null   )

  useEffect(()=>{
    //list of items
    const projectItems = [
      {
        title: 'Project 1',
        about: "I built this project1 with"
      },
      {
        title: 'project 2',
        about: 'I built this project2 with'
      },
      {
        title: 'project 3',
        about: 'I built this project 3 with'
      }
    ];

    const Item = projectItems[currentItem]
    //set our state
    setProject(Item)
    setLoading(false);
  },[currentItem]);

  //handle next button click
  const handleNext = (event)=>{
    event.preventDefault();
    setCurrentItem(prev => prev + 1);
  }
  

  //handle prev button click
  const handlePrevious = (event)=>{
    event.preventDefault();
    setCurrentItem(prev => prev - 1);
  }
  

    return(
        <>
        <section>
            <h1>Works</h1>
        </section>
        <section className = 'works'>
        <section className="news">
          {loading ?(<div>Loading</div>) : (
            <div className="items">
              <h1>{project.title}</h1>
              <p>{project.about}</p>
            </div>
          ) }
        </section>

        <div>
          <button onClick={handlePrevious}>Prev</button>
          <button onClick={handleNext}>Prev</button>
        </div>
      </section>
      </>
    )
}

export default Works;