function App() {
    const videoRef = useState({current: null})[0];
    const ref = useRef(null); // returns object with current: null
    const play = () => {
        videoRef.current.play();
    };

    const pause = () => {
        videoRef.current.pause();
    };
  
    return (
      <div className="container">
        <header className="display-1">
          React Ladies Pro Edition | 2022
        </header>
        <video src='demo_video.mp4' width={788} ref={videoRef}>
        <div className="btn-grp">
            <button className="btn btn-primary" onClick={play}></button>
            <button className="btn btn-info" onClick={pause}></button>
        </div>
    </div>
    )
}  

//use Ref return object, current
// hooks are in react dom
// object seal --> read only
// useRef not render
// useState(object.seal({current: null}))[0]; ==== useRef
// notation 
// useRef - can change const properties (which is current)
// const object = {current: null};
// object.current = 'bla'; --> so won't be render

function VideoPlayer({src, controls}, ref){
    const videoRef = {current: null}|| ref;
    // const ref = useRef(null); // returns object with current: null
    
    useImperativeHandler(ref, () => ({
        play,
        stop: pause,
        toggle, // so now we can add toggle api
        isPlay: true
    }), []);

    const play = () => {
        videoRef.current.play();
    };

    const pause = () => {
        videoRef.current.pause();
    };

    const toggle = () => {
        console.log("toggle");
    };
  
    return (
        <video src='demo_video.mp4' width={788} ref={videoRef}>
        {!controls && (<div className="btn-grp">
            <button className="btn btn-primary" onClick={play}></button>
            <button className="btn btn-info" onClick={pause}></button>
        </div>)}
    );
}

export default forwardRef(VideoPlayer)

in the app comnent:
const videoRef = useRef(null)
const play = () => {
        videoRef.current.play(); 
    };

const toggle = () => {
        videoRef.current.isPlaying;
        videoRef.current.toggle();
    };
<VideoPlayer src={'demo..'} controls={false} ref={videoRef}

// ^^ we have 2 play buttons, works

talting on :
forwardRef
and useRef


useImperativeHandler -- instead of pass callbacks as props