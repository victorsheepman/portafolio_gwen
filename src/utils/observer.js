

const options = {
  rootMargin: '0px 0px 0px 0px',
  threshold: 1
}

function selectElementById(Id) {
  return document.querySelector(`#${Id}`);
}

const sections = [selectElementById('home')]

const observesections = (entries, observer)=>{
  console.log('holis')
}

 export const observer = new IntersectionObserver(observesections, options);
  observer.observe(sections);
