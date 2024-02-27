import React, { useEffect, useState } from 'react'

export default function EventComponent() {
    const [message, setMessage] = useState('Initial');

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:3000/events');
        if (typeof (EventSource) !== 'undefined') {
            console.log("Connected");
        } else {
            console.log("Not Connected");
        }

        eventSource.onmessage = event => {
            const eventData = JSON.parse(event.data);
            setMessage(eventData.message);
            // console.log(event.data);
        }

        return () => eventSource.close();

    }, [])

    return (
        <div>Hello {message}</div>
    )
}
