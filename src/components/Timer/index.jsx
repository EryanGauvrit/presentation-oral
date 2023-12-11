import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { Button } from '../Button';
import useSound from 'use-sound';
import alarmSound from '../../assets/sounds/alarm.mp3'
import soundTimer from '../../assets/sounds/duringTimer.mp3'

export const Timer = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60);
    const [playSoundTimer, playSoundTimerData] = useSound(soundTimer);
    const [playSoundAlarm] = useSound(alarmSound);

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        restart,
    } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 60);
        restart(time)
        pause()
        playSoundTimerData.stop();
        playSoundAlarm();
    }});

    const handleClickPlay = () => {
        if(!isRunning){
            playSoundTimer();
            start();
        }else {
            pause()
            playSoundTimerData.pause();
        }
    }

    return (
        <div className='timer'>
            <h1>TIMER</h1>
            <div className='display'>
                <span>0{minutes}</span>:<span>{`${seconds < 10 ? '0' : ''}${seconds}`}</span>
            </div>
            <div className='button-list'>
                <Button onClick={handleClickPlay} content={isRunning ? 'PAUSE' : 'PLAY'} />
                <Button onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 60);
                    restart(time)
                    pause()
                }} content='1:00' />
                <Button onClick={() => {
                    const time = new Date();
                    time.setSeconds(time.getSeconds() + 90);
                    restart(time)
                    pause()
                }} content='1:30'></Button>
            </div>
        </div>
    )
}