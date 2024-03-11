import React, { useEffect, useState } from 'react';
import './episodes.css';
import episodeImagePageright from '../../assets/episodePageImageright.jpg'
import snoopingAroundEpisode from '../../assets/snoopingaroundepisode.jpg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Email from '../../component/email/email';

export default function Episodes() {

    const [allEpisode, setAllEpisode] = useState([])

    useEffect(() => {
        fetchAllEpisode()
    }, [])

    const fetchAllEpisode = async () => {
        const response = await fetch(
            "https://restapicheckerapi-production.up.railway.app/api/all_episodes"
        );
        const data = await response.json();
        const arr = data.reverse()
        console.log(arr, 'episodeArray')
        setAllEpisode(arr)
    };

    const spotifyLink = 'https://open.spotify.com/show/3ZXnb05w4yMsn4beKSAz7a'
    const googleLink = 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy81ODUyYWQ5OC9wb2RjYXN0L3Jzcw=='
    const appleLink = 'https://podcasts.apple.com/us/podcast/snooping-around/id1565491040'
    const amazonlink = 'https://music.amazon.in/podcasts/0a12653d-e3f2-4dfe-a51e-5c07b2418abd/snooping-around?ref=dm_sh_LKdLY8e37gJzXIaJF89dsdAg3'

    const EpisodeArrayDisplay = (arrays, limit) => {
        const [showAll, setShowAll] = useState(false);
        const displayArrays = showAll ? arrays : arrays.slice(0, limit);

        return (
            <>

                <div className='parentCard'>
                        {displayArrays.map((arr, index) => (
                    <a href={arr[4]} target="_blank">
                            <div className="card">
                                <img src={snoopingAroundEpisode} className="img"></img>
                                <div className='episodeHeading'>
                                    <PlayCircleIcon className='playIcon' style={{ color: 'black' }} />
                                    Episode: {arr[1]} {arr[2]}</div>
                            </div>
                    </a>

                        ))}
                </div>
                {arrays.length > 8 && !showAll && (
                    <button class="showAllButton" onClick={() => setShowAll(true)}>
                        <span class="button_lg">
                            <span class="button_sl"></span>
                            <span class="button_text">Show All</span>
                        </span>
                    </button>
                )}
            </>
        );
    };

    return (
        <div>
            <div>
                <img src={episodeImagePageright} class="splitepisode rightEpisode" />
                <div class="splitepisode leftEpisode">
                    <div className='centeredEpisode'>
                        <h1 className='episodeTitle'>Episodes</h1>
                        
                <div className='subscribeFooter'>Subscribe and listen on major platform</div>
                <div className="cardspotifyepisodes">
                    <a href={spotifyLink} class="socialContainer containerOne" target="_blank">
                        <svg class="socialSvg instagramSvg" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" /></svg>
                    </a>

                    <a href={appleLink} class="socialContainer containerTwo" target="_blank">
                        <svg class="socialSvgApple twitterSvg" fill="none" height="92" viewBox="0 0 92 92" width="92" xmlns="http://www.w3.org/2000/svg"><g fill="#fff"><path d="m51.2102 53.6523c-.0891-.8028-.3565-1.3826-.8912-1.9178-1.0026-1.0481-2.7627-1.7394-4.8348-1.7394-2.072 0-3.8321.669-4.8347 1.7394-.5125.5575-.8021 1.115-.8912 1.9178-.1783 1.561-.0669 2.899.1114 5.0621.1782 2.0515.5124 4.7944.9357 7.5596.3119 1.9847.557 3.0551.7798 3.8133.3788 1.2488 1.7379 2.3192 3.899 2.3192 2.1612 0 3.5426-1.0927 3.899-2.3192.2228-.7582.4679-1.8286.7798-3.8133.4234-2.7875.7576-5.5081.9358-7.5596.2005-2.1631.2896-3.5011.1114-5.0621z" /><path d="m50.9618 42.2787c0 3.0328-2.4508 5.4858-5.4809 5.4858s-5.4809-2.453-5.4809-5.4858c0-3.0327 2.4508-5.4857 5.4809-5.4857s5.4809 2.4753 5.4809 5.4857z" /><path d="m45.4172 20.67c-12.7888.0446-23.2604 10.4363-23.4386 23.2364-.1337 10.3694 6.4834 19.2448 15.7297 22.5005.2228.0892.4456-.1115.4233-.3345-.1114-.8028-.2451-1.6056-.3342-2.4083-.0446-.2899-.2228-.5129-.4679-.6467-7.3079-3.1889-12.41-10.5256-12.3209-19.0218.1114-11.1499 9.2017-20.226 20.3194-20.3152 11.3851-.0892 20.6759 9.143 20.6759 20.5159 0 8.407-5.0798 15.6322-12.3208 18.8211-.2674.1115-.4457.3568-.4679.6467-.1114.8027-.2228 1.6055-.3342 2.4083-.0446.2453.2005.4237.4233.3345 9.1571-3.2111 15.7297-11.9527 15.7297-22.2106-.0446-12.9785-10.6276-23.5486-23.6168-23.5263z" /><path d="m44.8793 28.4746c-8.3327.3122-15.0167 7.2029-15.1281 15.543-.0668 5.4858 2.6736 10.3471 6.8845 13.2238.2005.1338.4902-.0223.4902-.2676-.0669-.9589-.0669-1.8063-.0223-2.6983.0223-.2899-.0891-.5575-.3119-.7582-2.5622-2.4083-4.1218-5.8425-4.0327-9.6335.1782-6.6899 5.5477-12.1311 12.2317-12.3987 7.2633-.2899 13.2344 5.5527 13.2344 12.7332 0 3.6572-1.5596 6.9576-4.0327 9.299-.2005.2007-.3119.4683-.3119.7582.0445.8697.0223 1.7171-.0223 2.676-.0223.2453.2674.4237.4902.2676 4.144-2.8321 6.8845-7.6265 6.8845-13.0231.0223-8.8753-7.397-16.0782-16.3536-15.7214z" /></g></svg></a>

                    <a href={googleLink} class="socialContainer containerThree" target="_blank">
                        <svg class="socialSvg linkdinSvg" height="2500" width="2500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g fill="none"><path d="M64 238.545v34.91c0 17.673-14.327 32-32 32s-32-14.327-32-32v-34.91c0-17.673 14.327-32 32-32s32 14.327 32 32z" fill="#0066d9" /><path d="M448.013 239.455a32.6 32.6 0 0 1-.013-.91c0-17.673 14.327-32 32-32s32 14.327 32 32c0 .304-.004.608-.013.91H512v34.909h-.013c-.48 17.252-14.618 31.09-31.987 31.09s-31.506-13.838-31.987-31.09H448v-34.91h.013z" fill="#4285f4" /><path d="M174.545 343.273v34.909c0 17.673-14.326 32-32 32s-32-14.327-32-32v-34.91c0-17.672 14.327-32 32-32s32 14.328 32 32zM174.545 133.818V248h-.008c-.386 17.337-14.562 31.273-31.992 31.273S110.94 265.337 110.554 248h-.009V133.818c0-17.673 14.327-32 32-32s32 14.327 32 32z" fill="#ea4335" /><path d="M337.455 168.727c0 17.673 14.326 32 32 32s32-14.327 32-32v-34.909c0-17.673-14.327-32-32-32s-32 14.327-32 32z" fill="#34a853" /><path d="M224 66.91c0 17.672 14.327 32 32 32s32-14.328 32-32V32c0-17.673-14.327-32-32-32s-32 14.327-32 32zM224 445.09c0-17.672 14.327-32 32-32s32 14.328 32 32V480c0 17.673-14.327 32-32 32s-32-14.327-32-32z" fill="#fab908" /><path d="M337.455 264.727c0-17.673 14.326-32 32-32s32 14.327 32 32v113.455c0 17.673-14.327 32-32 32s-32-14.327-32-32z" fill="#34a853" /><path d="M288 162.91v186.18c0 17.674-14.327 32-32 32s-32-14.326-32-32V162.91c0-17.674 14.327-32 32-32s32 14.326 32 32z" fill="#fab908" /></g></svg>
                    </a>
                    <a href={amazonlink} class="socialContainer containerFour">
                        <svg class="socialSvgAmazon whatsappSvg" viewBox="0 0 24 24"> <path d="M12.14,2C9.513,2,6.595,2.983,5.981,6.196C5.915,6.538,6.154,6.714,6.38,6.764l2.668,0.272 c0.251-0.013,0.451-0.247,0.499-0.494c0.23-1.107,1.167-1.654,2.219-1.654c0.568,0,1.21,0.213,1.546,0.716 c0.388,0.562,0.324,1.324,0.324,1.975v0.37C12.035,8.127,9.947,8.236,8.45,8.887c-1.73,0.74-2.942,2.249-2.942,4.468 c0,2.839,1.815,4.27,4.139,4.27c1.963,0,3.023-0.471,4.538-1.999c0.501,0.718,0.679,1.072,1.596,1.827 c0.206,0.109,0.466,0.088,0.648-0.074v0.025c0.551-0.486,1.556-1.358,2.119-1.827c0.224-0.182,0.176-0.467,0-0.716 c-0.505-0.69-1.022-1.262-1.022-2.543V8.072c0-1.804,0.121-3.473-1.222-4.715C15.244,2.351,13.482,2,12.14,2z M12.888,10.146 c0.249-0.016,0.498,0,0.748,0v0.592c0,1.065,0.043,1.941-0.499,2.888c-0.439,0.769-1.145,1.234-1.92,1.234 c-1.059,0-1.671-0.792-1.671-1.975C9.546,10.85,11.146,10.259,12.888,10.146z M20.517,16.515c-0.699,0.01-1.518,0.157-2.144,0.592 c-0.192,0.134-0.164,0.321,0.05,0.296c0.705-0.084,2.263-0.281,2.543,0.074c0.28,0.355-0.31,1.815-0.573,2.468 c-0.08,0.197,0.094,0.273,0.274,0.123c1.173-0.972,1.487-2.988,1.247-3.283C21.795,16.641,21.217,16.505,20.517,16.515z M2.141,16.885c-0.146,0.019-0.204,0.208-0.05,0.346c2.608,2.331,6.047,3.727,9.874,3.727c2.73,0,5.917-0.846,8.104-2.444 c0.361-0.265,0.046-0.674-0.324-0.518c-2.452,1.03-5.131,1.53-7.555,1.53c-3.594,0-7.061-0.971-9.874-2.592 C2.254,16.899,2.189,16.879,2.141,16.885z"></path> </svg>
                    </a>
                </div>
                    </div>
                </div>

                <div className='allEpisode'>All Episodes</div>
                {EpisodeArrayDisplay(allEpisode, 8)}
                <Email />
            </div>
        </div>
    )
}