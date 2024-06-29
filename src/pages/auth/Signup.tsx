import Toast from "@/components/common/Toast";
import { useSignUp } from "@/hooks/api/auth/usePostSignUp";

const Signup = () => {
  const { mutate, toastClose, toastMessage } = useSignUp();

  const handleClickButton = () => {
    mutate({
      password: "1234",
      memberName: "지영",
    });
  };

  return (
    <>
      <button onClick={handleClickButton}>submit</button>
      <Toast isOpen={toastMessage.isOpen} onClose={toastClose}>
        {toastMessage.message}{" "}
      </Toast>
    </>
  );
};

export default Signup;
