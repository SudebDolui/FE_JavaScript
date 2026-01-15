"use strict"

console.log("JS runs");


function delayUsingDate(milliseconds) {
    return new Promise((res) => {
        const currentTime = new Date().getTime();
        while(new Date().getTime() - currentTime < milliseconds) {
            const leftTime = milliseconds - (new Date().getTime() - currentTime);
            console.log("Left time", leftTime);
        }
        res(milliseconds);
    })
}

function delayUsingPerformance(milliseconds) {
    return new Promise((res) => {
        const currentTime = performance.now();
        while(performance.now() - currentTime < milliseconds) {
        }
        res(milliseconds);
    })
}

// const delayTimer = delayUsingPerformance(1000);
// delayTimer.then(res => console.log("Delayed Time: ", res));

/**
 * 
 * 
    // Start measuring
    performance.mark('start');
    // Simulate a task
    for (let i = 0; i < 1e6; i++) {
        // Some computation
    }
    // End measuring
    performance.mark('end');
    // Measure the duration
    performance.measure('My Task Duration', 'start', 'end');
    // Log the results
    const measures = performance.getEntriesByName('My Task Duration');
    console.log(measures);
 */