import { motion } from "framer-motion";

function logo() {
    const variant = {
        initial: {
            opacity: 0,
            pathLength: 0,
        },
        animate: {
            opacity: 1,
            pathLength: 1,

            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        },
    }

    setTimeout(() => {
        var selection = document.getElementsByClassName("cls-1");
        for (var i = 0; i < selection.length; i++) {
            console.log(selection[i]);
            selection[i].setAttribute("fill", "#434343");
            selection[i].style.animationName = "opac";
            selection[i].style.animationDuration = "2s";
        }
    }, 2500);
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 794.93 238.22">
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1-2">
                    <motion.path
                        className="cls-1"
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        fill="none"
                        d="M.5-258.5v79.77H56.92v-25.54l113.36.27a21.35,21.35,0,0,1,12.38,10.28,20.61,20.61,0,0,1,2.11,11.55,21.09,21.09,0,0,1-5.62,13.59,20.41,20.41,0,0,1-8.87,5.43H.5V-20.28H56.66l.26-88.5L176.15-109c3.87-.07,32.51-1.06,51.06-25,13.57-17.53,13.51-36.72,13.28-42.39.76-4.44,4.74-30.21-12.77-53.87-18.19-24.64-45.45-27.81-49.78-28.24Z" transform="translate(-0.5 258.5)" />
                    <motion.path
                        className="cls-1"
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        fill="none"
                        d="M501.21-258.5v53.64H333.38a18.48,18.48,0,0,0-11.06,6.47c-3.61,4.56-3.69,9.59-3.75,12.93-.05,2.89-.13,8.06,2.89,12.26a17.54,17.54,0,0,0,13.62,6.81H440.27c3.75.25,33,2.71,50.39,28.25,12.85,18.91,11.2,38.74,10.55,44.26.48,3.79,3.46,31.26-17,53.1-18.07,19.27-41.47,20.38-46,20.5h-174V-73.8L429-74.48c1.52-.2,11.64-1.7,16.34-10.21a18.29,18.29,0,0,0,2.17-7.1,21.11,21.11,0,0,0-16.81-20.14l-106.21-1c-6-.39-25.21-2.42-41.53-17.7-23-21.56-21.1-51.5-20.77-55.49-.21-5.12-.6-28.51,17-48.68,19.9-22.71,47.1-23.63,51.47-23.7Z" transform="translate(-0.5 258.5)" />
                    <motion.polygon
                        className="cls-1"
                        variants={variant}
                        initial="initial"
                        animate="animate"
                        fill="none"
                        points="509.2 238.22 571.15 238.22 651.83 72.02 684.51 139.76 645.03 139.08 618.47 191.85 709.71 192.19 731.83 238.22 794.93 238.22 679.75 0 622.56 0 509.2 238.22" />
                </g>
            </g>
        </svg>




    );
}


export { logo as Logo };