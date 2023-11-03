import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import styled from 'styled-components'

//
const PreloaderStyle = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  position: fixed;
  top: 0;
  z-index: 1;
  .preloader {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: #444654;
    display: flex;
    & .bar {
      height: 100%;
      width: 10vw;
      background-color: #343541;
    }
  }
  .preloader2 {
    display: flex;
    background-color: #444654;
    height: 100%;
    flex-direction: column;

    .left {
      height: 50%;
      width: 0;
      background-color: #33343b;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 991px) {
    .preloader2 {
      flex-direction: row;
      justify-content: space-between;
      .left {
        height: 100vh;
        width: 0;
      }
      .right {
        height: 100vh;
        width: 0;
      }
    }
  }
`

const Preloader = () => {
  const preloaderContainerRef = useRef(null)
  const preloader1Ref = useRef(null)
  const preloader2Ref = useRef(null)

  useLayoutEffect(() => {
    const preloaderContainer = preloaderContainerRef.current
    const preloader = preloader1Ref.current
    const bars = preloader1Ref.current.querySelectorAll('.bar')
    const left = preloader2Ref.current.querySelector('.left')

    const tlLoader = gsap.timeline()

    if (window.innerWidth <= 991) {
      tlLoader
        .to(bars, {
          height: 0,
          duration: 1,
          stagger: 0.2
        })
        .to(preloader, {
          display: 'none'
        })
        .to(left, {
          width: '100%',
          duration: 1,
          stagger: 0.5
        })
        .to(preloaderContainer, {
          zIndex: -1,
          opacity: 0,
          duration: 0.3,
          stagger: 10
        })
        .to(preloaderContainer, {
          display: 'none'
        })
    } else {
      tlLoader
        .to(bars, {
          height: 0,
          duration: 1,
          stagger: 0.2
        })
        .to(preloader, {
          display: 'none'
        })
        .to(left, {
          flex: 0.5,
          duration: 1,
          stagger: 0.5
        })
        .to(preloaderContainer, {
          zIndex: -1,
          opacity: 0,
          duration: 1,
          stagger: 10
        })
        .to(preloaderContainer, {
          display: 'none'
        })
    }
  }, [])
  return (
    <PreloaderStyle ref={preloaderContainerRef}>
      <div ref={preloader1Ref} className="preloader">
        {Array(10)
          .fill()
          .map((_, index) => (
            <div key={index} className="bar"></div>
          ))}
      </div>
      <div className="preloader2" ref={preloader2Ref}>
        <div className="left"></div>
      </div>
    </PreloaderStyle>
  )
}

export default Preloader
