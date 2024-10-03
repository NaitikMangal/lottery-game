import { useState, useEffect } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";
import Button from "./Button";
import Confetti from "react-confetti";
import "./Lottery.css";

export default function Lottery({ n = 3, winCondition, winCond }) {
    const [ticket, setTicket] = useState(genTicket(n));
    const [showConfetti, setShowConfetti] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const buyTicket = () => {
        const newTicket = genTicket(n);
        setTicket(newTicket);

        // Check if the new ticket is a winning ticket
        if (winCondition(newTicket)) {
            setShowConfetti(true);
            // Hide confetti after a few seconds
            setTimeout(() => {
                setShowConfetti(false);
            }, 5000); // Adjust duration as needed
        }
    };

    // Check if the current ticket is winning (for display purposes)
    const isWinning = winCondition(ticket);

    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket} />
            <Button action={buyTicket} />
            <p><i>You will win: {winCond}</i></p>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
            {showConfetti && <Confetti width={width} height={height} />}
        </div>
    );
}
