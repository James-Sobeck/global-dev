import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {render} from 'react-dom';
import { Component, PropTypes } from 'react'



// class Video extends React.PureComponent {

    class Video extends React.PureComponent {
        
      
        componentDidMount = () => {
          // On mount, check to see if the API script is already loaded
      
          if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
      
            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = this.loadVideo;
      
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
          } else { // If script is already there, load the video directly
            this.loadVideo();
          }
        };
      
        loadVideo = () => {
          const { id } = this.props;
      
          // the Player object is created uniquely based on the id in props
          this.player = new window.YT.Player(`youtube-player-${id}`, {
            videoId: id,
            height: '720 ',
            width: '1280 ',
            events: {
              //onReady: this.onPlayerReady,
              onStateChange: this.onPlayerStateChange
            }, playerVars: {rel: 0, 
              showinfo: 0, 
              controls: 0, 
              disablekb: 1,
              modestbranding: 1,
              cc_load_policy: 1,
              playsinline: 1,
            }
            });
        };
      
        onPlayerReady = event => {
          event.target.playVideo();
        };
       
        onPlayerStateChange = event =>{
            //const history = useHistory();
            var rewindButton = document.getElementById("restart");
        rewindButton.addEventListener("click", function () {
          console.log("CLICK");
          //var temp = this.player.getDuration();
          // this.player.seekTo(0)
          window.location.reload();
        });
            if(event.data ===0){
               // alert('done');
                //window.history.go("/module1_post");
                window.location.assign("/module3_post")
                //window.console.error("You made a mistake");
            }
        }
      
        render = () => {
          const { id } = this.props;
          return (
            <>
            <div>
              <div id={`youtube-player-${id}`} />
              <div class="absolute bg-transparent w-screen h-48 top-[96px]" />
              <div class="absolute bg-transparent w-screen h-12 bottom-[72px]"></div>
            </div>{" "}
            <div class="flex items-center  mx-auto mt-4 overflow-hidden text-center">
              
               <button
              id={"restart"}
              class=" mx-auto items-center w-full px-6 py-2 mb-3 text-lg text-white bg-[#5b7bf0] rounded-md sm:mb-0 hover:bg-[#435aaf] sm:w-auto no-underline"
            >
              Restart
            </button>{" "}
           
           
            </div>
            
          </>
          );
        };
      }
      

      
export default Video;
  
//     componentDidMount = () => {
//       // On mount, check to see if the API script is already loaded
  
//       if (!window.YT) { // If not, load the script asynchronously
//         const tag = document.createElement('script');
//         tag.src = 'https://www.youtube.com/iframe_api';
  
//         // onYouTubeIframeAPIReady will load the video after the script is loaded
//         window.onYouTubeIframeAPIReady = this.loadVideo;
  
//         const firstScriptTag = document.getElementsByTagName('script')[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
//       } else { // If script is already there, load the video directly
//         this.loadVideo();
//       }
//     };
  
//     loadVideo = () => {
//       const { id } = "aQGvlemqUpE";
  
//       // the Player object is created uniquely based on the id in props
//       this.player = new window.YT.Player(`youtube-player-${id}`, {
//         videoId: id,
//         events: {
//           onReady: this.onPlayerReady,
//         },
//       });
//     };
  
//     onPlayerReady = event => {
//       event.target.playVideo();
//     };
  
//     render = () => {
//       const { id } = "aQGvlemqUpE";
//       return (
//         <div >
//           <div id={`youtube-player-${id}`}  />
//         </div>
//       );
//     };
//   }
  
//   export default Video;

// export default function Video() {
//   class YouTubeVideo extends React.PureComponent {
//     static propTypes = {
//       id: PropTypes.string.isRequired,
//     };
    
    
//     componentDidMount = () => {
//       // On mount, check to see if the API script is already loaded

//       if (!window.YT) {
//         // If not, load the script asynchronously
//         const tag = document.createElement("script");
//         tag.src = "https://www.youtube.com/iframe_api";

//         // onYouTubeIframeAPIReady will load the video after the script is loaded
//         window.onYouTubeIframeAPIReady = this.loadVideo;

//         const firstScriptTag = document.getElementsByTagName("script")[0];
//         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//       } else {
//         // If script is already there, load the video directly
//         this.loadVideo();
//       }
//     };
  
//   loadVideo = () => {
//     const { id } = this.props;

//     // the Player object is created uniquely based on the id in props
//     this.player = new window.YT.Player(`youtube-player-${id}`, {
//       videoId: id,
//       events: {
//         onReady: this.onPlayerReady,
//       },
//     });
//   };

//   onPlayerReady = event => {
//     event.target.playVideo();
//   };

//   render = () => {
//     const { id } = this.props;
//     return (
//       <div >
//         <div id={`youtube-player-${id}`}  />
//       </div>
//     );
//   };
// }
//   return (
//     <>
//       <h1 style={{ textAlign: "center" }}>The Five Principles</h1>
//       <div id="player"></div>
//       <iframe
//         width="1099"
//         height="471"
//         src="https://www.youtube.com/embed/BaBhJOYa5K8"
//         title="YouTube video player"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//       ></iframe>
//       <Link to="/module1_post">
//         <Button>Next</Button>
//       </Link>
//     </>
//   );
// }