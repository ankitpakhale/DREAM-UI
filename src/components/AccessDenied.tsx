import { SignedOut, useClerk } from "@clerk/clerk-react";
import Button from "./ui/button";

interface AccessDeniedProps {
  componentName: string;
}

function AccessDenied({ componentName }: AccessDeniedProps) {
  const { openSignIn } = useClerk(); // Clerk's hook to open the sign-in modal

  const handleSignInClick = () => {
    openSignIn();
  };

  return (
    <SignedOut>
      <div className="h-100">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-6 animate-gradient-zoom">
            Access Denied
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            Please sign in to access your {componentName} page.
          </p>
          <div className="flex justify-center">
            <Button variant="info" onClick={handleSignInClick}>
              Sign In to Continue
            </Button>
          </div>
        </div>
      </div>
    </SignedOut>
  );
}

export default AccessDenied;
