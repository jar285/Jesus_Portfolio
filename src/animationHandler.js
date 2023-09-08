export const inViewHandler = (inView, animation)=>{
    if(inView){
        animation.start({opacity:1, scale: 1,transition:1,duration:1});
    }
};