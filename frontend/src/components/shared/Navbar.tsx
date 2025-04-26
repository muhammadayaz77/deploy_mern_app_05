import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo Image" className="h-12 w-12" />
        <span className="font-bold text-xl ml-2">Blyzr AI</span>
      </div>

      <div className="flex items-center space-x-4">
        <SignedOut>
          {/* You can keep the SignInButton OR use a custom link */}
          <Link to="/auth/sign-in" className=" font-medium">
            Sign In
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default Navbar;
