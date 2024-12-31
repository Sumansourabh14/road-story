import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

const LoadingButton = ({ loading, title, isDisabled }) => {
  return (
    <Button type="submit" className="w-full" disabled={isDisabled}>
      {loading && <Loader2 className="animate-spin" />}
      {title}
    </Button>
  );
};

export default LoadingButton;
