// Question 149: Explain the concept of the event loop in JavaScript with an
//example.

// Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling
// asynchronous operations. It monitors the call stack and the callback queue.
// If the call stack is empty, it moves the first event from the queue to the
// stack, ensuring non-blocking execution.

console.log('start.....');

function eventloop(){
    setTimeout(()=>{console.log('Event loop')},5000) // exacute after 5 seconds 
}

eventloop();

console.log('end.')