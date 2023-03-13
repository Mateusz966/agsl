import { PageWithPhoto } from "../../components/layouts/PageWithPhoto";
import { LoginForm } from "../../components/forms/Login";

export default function Login() {
  return <PageWithPhoto photoURI="/login-photo.avif" content={<LoginForm />} />;
}
