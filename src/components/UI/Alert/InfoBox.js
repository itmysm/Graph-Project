import { useEffect, useState } from "react"

export default function InfoBox() {
  const [randomIndex, setRandomIndex] = useState(0)
  const quotes = [
    'Did you know that this app is completely open source and made for free?',
    'Did you know that this program supports WhatsApp, Telegram and Instagram?',
  ]

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * quotes.length));
  }, [quotes.length]);

  return (
    <div className="rounded-xl bg-gradient-to-r from-info to-info/50 p-3">
      <p className="font-semibold">{quotes[randomIndex]}</p>
    </div>
  )
}