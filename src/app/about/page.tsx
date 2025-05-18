import { Button } from "@/components/ui/button";

function About() {
  return (
    <div className="h-full py-10 px-30">
      <h2>Welcome to About</h2>
      <Button className="my-15 mx-5">Default</Button>
      <Button variant="destructive" className="my-15 mx-5">
        destructive
      </Button>
      <Button variant="outline" className="my-15 mx-5">
        outline
      </Button>
      <Button variant="secondary" className="my-15 mx-5">
        secondary
      </Button>
      <Button variant="ghost" className="my-15 mx-5">
        ghost
      </Button>
      <Button variant="link" className="my-15 mx-5">
        link
      </Button>
    </div>
  );
}

export default About;
