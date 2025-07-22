import { Link } from "react-router";
import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center h-[90vh] flex-col text-5xl text-primary gap-4">
        Not Found!
        <Link to={"/"}>
          <Button>Go Back</Button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
