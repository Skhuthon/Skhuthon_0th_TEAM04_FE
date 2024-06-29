import Toast from "@/components/common/Toast";
import { useLogin } from "@/hooks/api/auth/usePostLogin";

const Login = () => {
  const { mutate, toastClose, toastMessage } = useLogin();

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

export default Login;
