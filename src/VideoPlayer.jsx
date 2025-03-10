import { Component, createRef } from "react";

class VideoPlayer extends Component {
    constructor(props) {
        super(props)
        this.videoRef = createRef();
    }
    playVideo = () => {
        this.videoRef.current.play()
    }
    pauseVideo = () => {
        this.videoRef.current.pause();
    }
    render() {
        return (
            <div>
                <video ref={this.videoRef} width="400" controls>
                    <source
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <button onClick={this.playVideo}>Play</button>
                    <button onClick={this.pauseVideo}>Pause</button>
                </div>
            </div>
        );
    }
}
export default VideoPlayer