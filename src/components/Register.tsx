import { useEffect, useState } from "react";

export default function RegisterSection() {
  const baseFormUrl = "https://form.jotform.com/260894520367059";

  const [iframeKey, setIframeKey] = useState(0);
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== "string") return;

      const message = event.data.toLowerCase();

      const submitted =
        message.includes("submission-completed") ||
        message.includes("thankyou") ||
        message.includes("thank-you") ||
        message.includes("submit");

      if (!submitted) return;

      setShowThanks(true);

      setTimeout(() => {
        setShowThanks(false);
        setIframeKey((prev) => prev + 1);
      }, 1500);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <section id="register" className="registerSection">
      <div className="registerSection__inner">
        <h2 className="registerSection__title">Request More Info</h2>

        <div className="visionSection__dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {showThanks && (
          <p className="registerSection__success">
            Thank you! The form is ready for another entry.
          </p>
        )}

        <iframe
          key={iframeKey}
          id="JotFormIFrame-260894520367059"
          title="Forensic Program Information Request"
          src={`${baseFormUrl}?reload=${iframeKey}`}
          allow="geolocation; microphone; camera; fullscreen; payment"
          frameBorder="0"
          scrolling="yes"
          className="registerSection__iframe"
        />
      </div>
    </section>
  );
}