import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { FadeIn } from "../animations/fade-in";

export const OAuthButtons = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <FadeIn delay={0.1}>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => signIn("google", { callbackUrl: "/" })}
        >
          <FcGoogle size={20} />
          Continue with Google
        </Button>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => signIn("github", { callbackUrl: "/" })}
        >
          <FaGithub size={20} />
          Continue with GitHub
        </Button>
      </FadeIn>
      
      <FadeIn delay={0.3}>
        <Button
          variant="outline"
          className="w-full flex items-center gap-2"
          onClick={() => signIn("linkedin", { callbackUrl: "/" })}
        >
          <FaLinkedin size={20} className="text-[#0077B5]" />
          Continue with LinkedIn
        </Button>
      </FadeIn>
    </div>
  );
};
