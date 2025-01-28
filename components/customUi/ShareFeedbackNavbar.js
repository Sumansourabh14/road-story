import Link from "next/link";

const ShareFeedbackNavbar = () => {
  return (
    <nav className="font-[family-name:var(--font-inter)]">
      <div className="container mx-auto px-1 py-1">
        <p className="text-center">
          Your feedback matters! Tell us how we can make this site better:&nbsp;
          <Link
            href="/share-feedback"
            className="font-bold underline hover:underline-offset-4"
          >
            Share feedback
          </Link>
        </p>
      </div>
      <hr />
    </nav>
  );
};

export default ShareFeedbackNavbar;
